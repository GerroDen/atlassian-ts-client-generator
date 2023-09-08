/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AgentStatus
 */
export interface AgentStatus {
    /**
     * 
     * @type {number}
     * @memberof AgentStatus
     */
    orderIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AgentStatus
     */
    allowDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AgentStatus
     */
    idle?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AgentStatus
     */
    imagePath?: string;
    /**
     * 
     * @type {string}
     * @memberof AgentStatus
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof AgentStatus
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof AgentStatus
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof AgentStatus
     */
    icon?: string;
}
/**
 * 
 * @export
 * @interface ArtifactLink
 */
export interface ArtifactLink {
    /**
     * 
     * @type {boolean}
     * @memberof ArtifactLink
     */
    sharedArtifact?: boolean;
    /**
     * 
     * @type {ResultsSummary}
     * @memberof ArtifactLink
     */
    buildResultsSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof ArtifactLink
     */
    linkType?: string;
    /**
     * 
     * @type {BuildResultsSummary}
     * @memberof ArtifactLink
     */
    producerJobResult?: BuildResultsSummary;
    /**
     * 
     * @type {number}
     * @memberof ArtifactLink
     */
    size?: number;
    /**
     * 
     * @type {MutableArtifact}
     * @memberof ArtifactLink
     */
    artifact?: MutableArtifact;
    /**
     * 
     * @type {string}
     * @memberof ArtifactLink
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof ArtifactLink
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface Author
 */
export interface Author {
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    breakages?: Array<ResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof Author
     */
    numberOfBreakages?: number;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    fixes?: Array<ResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof Author
     */
    numberOfFixes?: number;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    failedBuilds?: Array<ResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof Author
     */
    numberOfFailedBuilds?: number;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    successfulBuilds?: Array<ResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof Author
     */
    numberOfSuccessfulBuilds?: number;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    triggeredBuildResults?: Array<ResultsSummary>;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof Author
     */
    allTriggeredBuildResults?: Array<ResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof Author
     */
    numberOfTriggeredBuilds?: number;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    linkedUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface AuthorContext
 */
export interface AuthorContext {
    /**
     * 
     * @type {string}
     * @memberof AuthorContext
     */
    linkedUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorContext
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorContext
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface BambooEntityOid
 */
export interface BambooEntityOid {
    /**
     * 
     * @type {string}
     * @memberof BambooEntityOid
     */
    entityType?: BambooEntityOidEntityTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof BambooEntityOid
     */
    serverKey?: number;
    /**
     * 
     * @type {number}
     * @memberof BambooEntityOid
     */
    entityOid?: number;
    /**
     * 
     * @type {number}
     * @memberof BambooEntityOid
     */
    value?: number;
}


/**
 * @export
 */
export const BambooEntityOidEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type BambooEntityOidEntityTypeEnum = typeof BambooEntityOidEntityTypeEnum[keyof typeof BambooEntityOidEntityTypeEnum];

/**
 * 
 * @export
 * @interface BranchIntegrationConfiguration
 */
export interface BranchIntegrationConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof BranchIntegrationConfiguration
     */
    pushEnabled?: boolean;
    /**
     * 
     * @type {PlanKey}
     * @memberof BranchIntegrationConfiguration
     */
    integrationPlanBranchKey?: PlanKey;
    /**
     * 
     * @type {BranchIntegrationPoint}
     * @memberof BranchIntegrationConfiguration
     */
    integrationPoint?: BranchIntegrationPoint;
    /**
     * 
     * @type {string}
     * @memberof BranchIntegrationConfiguration
     */
    strategy?: BranchIntegrationConfigurationStrategyEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BranchIntegrationConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BranchIntegrationConfiguration
     */
    valid?: boolean;
}


/**
 * @export
 */
export const BranchIntegrationConfigurationStrategyEnum = {
    BranchUpdater: 'BRANCH_UPDATER',
    GateKeeper: 'GATE_KEEPER'
} as const;
export type BranchIntegrationConfigurationStrategyEnum = typeof BranchIntegrationConfigurationStrategyEnum[keyof typeof BranchIntegrationConfigurationStrategyEnum];

/**
 * 
 * @export
 * @interface BranchIntegrationPoint
 */
export interface BranchIntegrationPoint {
    /**
     * 
     * @type {PlanKey}
     * @memberof BranchIntegrationPoint
     */
    integrationPlanBranchKey?: PlanKey;
    /**
     * 
     * @type {string}
     * @memberof BranchIntegrationPoint
     */
    integrationVcsReference?: string;
}
/**
 * 
 * @export
 * @interface BranchMonitoringConfiguration
 */
export interface BranchMonitoringConfiguration {
    /**
     * 
     * @type {string}
     * @memberof BranchMonitoringConfiguration
     */
    planBranchWorkflow?: BranchMonitoringConfigurationPlanBranchWorkflowEnum;
    /**
     * 
     * @type {string}
     * @memberof BranchMonitoringConfiguration
     */
    matchingPattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BranchMonitoringConfiguration
     */
    planBranchCreationEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BranchMonitoringConfiguration
     */
    removedBranchCleanUpEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BranchMonitoringConfiguration
     */
    inactiveBranchCleanUpEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BranchMonitoringConfiguration
     */
    inactiveBranchCleanUpPeriodInDays?: number;
    /**
     * 
     * @type {number}
     * @memberof BranchMonitoringConfiguration
     */
    removedBranchCleanUpPeriodInDays?: number;
    /**
     * 
     * @type {string}
     * @memberof BranchMonitoringConfiguration
     */
    defaultBranchNotificationStrategy?: BranchMonitoringConfigurationDefaultBranchNotificationStrategyEnum;
    /**
     * 
     * @type {BranchIntegrationConfiguration}
     * @memberof BranchMonitoringConfiguration
     */
    defaultBranchIntegrationConfiguration?: BranchIntegrationConfiguration;
    /**
     * 
     * @type {boolean}
     * @memberof BranchMonitoringConfiguration
     */
    remoteJiraBranchLinkingEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BranchMonitoringConfiguration
     */
    branchTriggeringOption?: BranchMonitoringConfigurationBranchTriggeringOptionEnum;
    /**
     * 
     * @type {TriggerDefinition}
     * @memberof BranchMonitoringConfiguration
     */
    defaultTrigger?: TriggerDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof BranchMonitoringConfiguration
     */
    valid?: boolean;
}


/**
 * @export
 */
export const BranchMonitoringConfigurationPlanBranchWorkflowEnum = {
    BranchWorkflow: 'BRANCH_WORKFLOW',
    ManualWorkflow: 'MANUAL_WORKFLOW',
    PullRequestWorkflow: 'PULL_REQUEST_WORKFLOW',
    ForkEnabledPullRequestWorkflow: 'FORK_ENABLED_PULL_REQUEST_WORKFLOW'
} as const;
export type BranchMonitoringConfigurationPlanBranchWorkflowEnum = typeof BranchMonitoringConfigurationPlanBranchWorkflowEnum[keyof typeof BranchMonitoringConfigurationPlanBranchWorkflowEnum];

/**
 * @export
 */
export const BranchMonitoringConfigurationDefaultBranchNotificationStrategyEnum = {
    NotifyCommitters: 'NOTIFY_COMMITTERS',
    Inherit: 'INHERIT',
    None: 'NONE'
} as const;
export type BranchMonitoringConfigurationDefaultBranchNotificationStrategyEnum = typeof BranchMonitoringConfigurationDefaultBranchNotificationStrategyEnum[keyof typeof BranchMonitoringConfigurationDefaultBranchNotificationStrategyEnum];

/**
 * @export
 */
export const BranchMonitoringConfigurationBranchTriggeringOptionEnum = {
    Inherited: 'INHERITED',
    ManualOnly: 'MANUAL_ONLY',
    Custom: 'CUSTOM'
} as const;
export type BranchMonitoringConfigurationBranchTriggeringOptionEnum = typeof BranchMonitoringConfigurationBranchTriggeringOptionEnum[keyof typeof BranchMonitoringConfigurationBranchTriggeringOptionEnum];

/**
 * 
 * @export
 * @interface BranchSpecificConfiguration
 */
export interface BranchSpecificConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof BranchSpecificConfiguration
     */
    branchCleanupDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BranchSpecificConfiguration
     */
    ignoreSpecs?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BranchSpecificConfiguration
     */
    notificationStrategy?: BranchSpecificConfigurationNotificationStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof BranchSpecificConfiguration
     */
    planBranchWorkflow?: BranchSpecificConfigurationPlanBranchWorkflowEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BranchSpecificConfiguration
     */
    awaitingSpecsExecution?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BranchSpecificConfiguration
     */
    valid?: boolean;
}


/**
 * @export
 */
export const BranchSpecificConfigurationNotificationStrategyEnum = {
    NotifyCommitters: 'NOTIFY_COMMITTERS',
    Inherit: 'INHERIT',
    None: 'NONE'
} as const;
export type BranchSpecificConfigurationNotificationStrategyEnum = typeof BranchSpecificConfigurationNotificationStrategyEnum[keyof typeof BranchSpecificConfigurationNotificationStrategyEnum];

/**
 * @export
 */
export const BranchSpecificConfigurationPlanBranchWorkflowEnum = {
    BranchWorkflow: 'BRANCH_WORKFLOW',
    ManualWorkflow: 'MANUAL_WORKFLOW',
    PullRequestWorkflow: 'PULL_REQUEST_WORKFLOW',
    ForkEnabledPullRequestWorkflow: 'FORK_ENABLED_PULL_REQUEST_WORKFLOW'
} as const;
export type BranchSpecificConfigurationPlanBranchWorkflowEnum = typeof BranchSpecificConfigurationPlanBranchWorkflowEnum[keyof typeof BranchSpecificConfigurationPlanBranchWorkflowEnum];

/**
 * 
 * @export
 * @interface BuildAgent
 */
export interface BuildAgent {
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    dedicated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    busy?: boolean;
    /**
     * 
     * @type {AgentStatus}
     * @memberof BuildAgent
     */
    agentStatus?: AgentStatus;
    /**
     * 
     * @type {PipelineDefinition}
     * @memberof BuildAgent
     */
    definition?: PipelineDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    requestedToBeStopped?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    unresponsive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildAgent
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildAgent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BuildAgent
     */
    type?: BuildAgentTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAgent
     */
    enabled?: boolean;
}


/**
 * @export
 */
export const BuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type BuildAgentTypeEnum = typeof BuildAgentTypeEnum[keyof typeof BuildAgentTypeEnum];

/**
 * 
 * @export
 * @interface BuildDefinition
 */
export interface BuildDefinition {
    /**
     * 
     * @type {Array<TriggerDefinition>}
     * @memberof BuildDefinition
     */
    triggerDefinitions?: Array<TriggerDefinition>;
    /**
     * 
     * @type {DockerPipelineConfiguration}
     * @memberof BuildDefinition
     */
    dockerPipelineConfiguration?: DockerPipelineConfiguration;
    /**
     * 
     * @type {object}
     * @memberof BuildDefinition
     */
    customConfiguration?: object;
    /**
     * 
     * @type {BranchSpecificConfiguration}
     * @memberof BuildDefinition
     */
    branchSpecificConfiguration?: BranchSpecificConfiguration;
    /**
     * 
     * @type {object}
     * @memberof BuildDefinition
     */
    configObjects?: object;
    /**
     * 
     * @type {BranchIntegrationConfiguration}
     * @memberof BuildDefinition
     */
    branchIntegrationConfiguration?: BranchIntegrationConfiguration;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof BuildDefinition
     */
    taskDefinitions?: Array<TaskDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof BuildDefinition
     */
    cleanWorkingDirectory?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BuildDefinition
     */
    repositoryIdDefiningWorkingDir?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BuildDefinition
     */
    merged?: boolean;
    /**
     * 
     * @type {BranchMonitoringConfiguration}
     * @memberof BuildDefinition
     */
    branchMonitoringConfiguration?: BranchMonitoringConfiguration;
}
/**
 * 
 * @export
 * @interface BuildDefinitionForBuild
 */
export interface BuildDefinitionForBuild {
    /**
     * 
     * @type {Plan}
     * @memberof BuildDefinitionForBuild
     */
    plan?: Plan;
    /**
     * 
     * @type {boolean}
     * @memberof BuildDefinitionForBuild
     */
    merged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildDefinitionForBuild
     */
    xmlData?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildDefinitionForBuild
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface BuildLogger
 */
export interface BuildLogger {
    /**
     * 
     * @type {number}
     * @memberof BuildLogger
     */
    logEntryCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildLogger
     */
    timeOfLastLog?: number;
    /**
     * 
     * @type {any}
     * @memberof BuildLogger
     */
    interceptorStack?: any | null;
    /**
     * 
     * @type {any}
     * @memberof BuildLogger
     */
    mutatorStack?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof BuildLogger
     */
    persistent?: boolean;
}
/**
 * 
 * @export
 * @interface BuildMonitoringLink
 */
export interface BuildMonitoringLink {
    /**
     * 
     * @type {string}
     * @memberof BuildMonitoringLink
     */
    link?: string;
}
/**
 * 
 * @export
 * @interface BuildResultsSummary
 */
export interface BuildResultsSummary {
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    queueDuration?: number;
    /**
     * 
     * @type {ChainResultsSummary}
     * @memberof BuildResultsSummary
     */
    chainResultsSummary?: ChainResultsSummary;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof BuildResultsSummary
     */
    producedArtifactLinks?: Array<ArtifactLink>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    vcsUpdateTime?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    vcsUpdateDuration?: number;
    /**
     * 
     * @type {FilteredTestResultsTestClassResult}
     * @memberof BuildResultsSummary
     */
    filteredTestResults?: FilteredTestResultsTestClassResult;
    /**
     * 
     * @type {ExtraBuildResultsData}
     * @memberof BuildResultsSummary
     */
    extraBuildResultsData?: ExtraBuildResultsData;
    /**
     * 
     * @type {object}
     * @memberof BuildResultsSummary
     */
    resultVariables?: object;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildResultKey?: string;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof BuildResultsSummary
     */
    immutablePlan?: ImmutablePlan;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    duration?: number;
    /**
     * 
     * @type {TriggerReason}
     * @memberof BuildResultsSummary
     */
    triggerReason?: TriggerReason;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    deltaState?: BuildResultsSummaryDeltaStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    onceOff?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    customBuild?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    rebuild?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    logSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    processingDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildCompletedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildCancelledDate?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    timeToFix?: number;
    /**
     * 
     * @type {TestResultsSummary}
     * @memberof BuildResultsSummary
     */
    testResultsSummary?: TestResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    queueTime?: string;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    restartCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    buildAgentId?: number;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildAgentType?: BuildResultsSummaryBuildAgentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    variableContextBaselineId?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    formatVersion?: number;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof BuildResultsSummary
     */
    variableContextLogsEncrypted?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof BuildResultsSummary
     */
    substitutedVariablesEncrypted?: Array<VariableSubstitution>;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {PlanKey}
     * @memberof BuildResultsSummary
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof BuildResultsSummary
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {Array<RepositoryChangeset>}
     * @memberof BuildResultsSummary
     */
    repositoryChangesets?: Array<RepositoryChangeset>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    planName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    successful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    failed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    notRunYet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    notBuilt?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BuildResultsSummary
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    lifeCycleState?: BuildResultsSummaryLifeCycleStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    inProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    pending?: boolean;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof BuildResultsSummary
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof BuildResultsSummary
     */
    planIfExists?: ImmutablePlan;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof BuildResultsSummary
     */
    immutableChain?: ImmutableChain;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    finished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    waiting?: boolean;
    /**
     * 
     * @type {object}
     * @memberof BuildResultsSummary
     */
    customBuildData?: object;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof BuildResultsSummary
     */
    jiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof BuildResultsSummary
     */
    fixingJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof BuildResultsSummary
     */
    relatedJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<string>}
     * @memberof BuildResultsSummary
     */
    jiraIssueKeys?: Set<string>;
    /**
     * 
     * @type {Set<Author>}
     * @memberof BuildResultsSummary
     */
    uniqueAuthors?: Set<Author>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    durationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    processingDurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    shortReasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    reasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    relativeBuildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    relativeQueueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    relativeBuildStartedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    testSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildTime?: string;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof BuildResultsSummary
     */
    artifactLinks?: Array<ArtifactLink>;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof BuildResultsSummary
     */
    artifactLinksThatExist?: Array<ArtifactLink>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    changesListSummary?: string;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof BuildResultsSummary
     */
    substitutedVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof BuildResultsSummary
     */
    variableContextLogs?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof BuildResultsSummary
     */
    manuallyOverriddenVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<Commit>}
     * @memberof BuildResultsSummary
     */
    commits?: Array<Commit>;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    fullPlanName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildResultsSummary
     */
    queued?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    statDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildResultsSummary
     */
    buildState?: BuildResultsSummaryBuildStateEnum;
    /**
     * 
     * @type {number}
     * @memberof BuildResultsSummary
     */
    buildNumber?: number;
}


/**
 * @export
 */
export const BuildResultsSummaryDeltaStateEnum = {
    None: 'NONE',
    Passing: 'PASSING',
    Failing: 'FAILING',
    Broken: 'BROKEN',
    Fixed: 'FIXED'
} as const;
export type BuildResultsSummaryDeltaStateEnum = typeof BuildResultsSummaryDeltaStateEnum[keyof typeof BuildResultsSummaryDeltaStateEnum];

/**
 * @export
 */
export const BuildResultsSummaryBuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type BuildResultsSummaryBuildAgentTypeEnum = typeof BuildResultsSummaryBuildAgentTypeEnum[keyof typeof BuildResultsSummaryBuildAgentTypeEnum];

/**
 * @export
 */
export const BuildResultsSummaryLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type BuildResultsSummaryLifeCycleStateEnum = typeof BuildResultsSummaryLifeCycleStateEnum[keyof typeof BuildResultsSummaryLifeCycleStateEnum];

/**
 * @export
 */
export const BuildResultsSummaryBuildStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type BuildResultsSummaryBuildStateEnum = typeof BuildResultsSummaryBuildStateEnum[keyof typeof BuildResultsSummaryBuildStateEnum];

/**
 * 
 * @export
 * @interface ChainResultsSummary
 */
export interface ChainResultsSummary {
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    specsResult?: boolean;
    /**
     * 
     * @type {MergeResultSummary}
     * @memberof ChainResultsSummary
     */
    mergeResult?: MergeResultSummary;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    continuable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    fixedInResult?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    restartable?: boolean;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ChainResultsSummary
     */
    immutablePlan?: ImmutableChain;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ChainResultsSummary
     */
    planIfExists?: ImmutableChain;
    /**
     * 
     * @type {Array<ChainStageResult>}
     * @memberof ChainResultsSummary
     */
    stageResults?: Array<ChainStageResult>;
    /**
     * 
     * @type {FilteredTestResultsTestClassResultDescriptor}
     * @memberof ChainResultsSummary
     */
    testResults?: FilteredTestResultsTestClassResultDescriptor;
    /**
     * 
     * @type {Array<BuildResultsSummary>}
     * @memberof ChainResultsSummary
     */
    failedJobResults?: Array<BuildResultsSummary>;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    totalJobCount?: number;
    /**
     * 
     * @type {Array<ResultsSummary>}
     * @memberof ChainResultsSummary
     */
    orderedJobResultSummaries?: Array<ResultsSummary>;
    /**
     * 
     * @type {PlanKey}
     * @memberof ChainResultsSummary
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof ChainResultsSummary
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {Array<RepositoryChangeset>}
     * @memberof ChainResultsSummary
     */
    repositoryChangesets?: Array<RepositoryChangeset>;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    planName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    successful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    failed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    notRunYet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    notBuilt?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChainResultsSummary
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    lifeCycleState?: ChainResultsSummaryLifeCycleStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    inProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    pending?: boolean;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof ChainResultsSummary
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ChainResultsSummary
     */
    immutableChain?: ImmutableChain;
    /**
     * 
     * @type {TriggerReason}
     * @memberof ChainResultsSummary
     */
    triggerReason?: TriggerReason;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    deltaState?: ChainResultsSummaryDeltaStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    onceOff?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    customBuild?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    rebuild?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    logSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    processingDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildCancelledDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildCompletedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    finished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    waiting?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ChainResultsSummary
     */
    customBuildData?: object;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ChainResultsSummary
     */
    jiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ChainResultsSummary
     */
    fixingJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ChainResultsSummary
     */
    relatedJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<string>}
     * @memberof ChainResultsSummary
     */
    jiraIssueKeys?: Set<string>;
    /**
     * 
     * @type {Set<Author>}
     * @memberof ChainResultsSummary
     */
    uniqueAuthors?: Set<Author>;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    timeToFix?: number;
    /**
     * 
     * @type {TestResultsSummary}
     * @memberof ChainResultsSummary
     */
    testResultsSummary?: TestResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    durationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    processingDurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    shortReasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    reasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    relativeBuildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    relativeQueueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    relativeBuildStartedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    testSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildTime?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    queueTime?: string;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ChainResultsSummary
     */
    artifactLinks?: Array<ArtifactLink>;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ChainResultsSummary
     */
    artifactLinksThatExist?: Array<ArtifactLink>;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    changesListSummary?: string;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ChainResultsSummary
     */
    substitutedVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof ChainResultsSummary
     */
    variableContextLogs?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ChainResultsSummary
     */
    manuallyOverriddenVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    restartCount?: number;
    /**
     * 
     * @type {Array<Commit>}
     * @memberof ChainResultsSummary
     */
    commits?: Array<Commit>;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    buildAgentId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildAgentType?: ChainResultsSummaryBuildAgentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    fullPlanName?: string;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    duration?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    queued?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    statDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildState?: ChainResultsSummaryBuildStateEnum;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    buildNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainResultsSummary
     */
    buildResultKey?: string;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    variableContextBaselineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainResultsSummary
     */
    formatVersion?: number;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof ChainResultsSummary
     */
    variableContextLogsEncrypted?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ChainResultsSummary
     */
    substitutedVariablesEncrypted?: Array<VariableSubstitution>;
    /**
     * 
     * @type {boolean}
     * @memberof ChainResultsSummary
     */
    markedForDeletion?: boolean;
}


/**
 * @export
 */
export const ChainResultsSummaryLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type ChainResultsSummaryLifeCycleStateEnum = typeof ChainResultsSummaryLifeCycleStateEnum[keyof typeof ChainResultsSummaryLifeCycleStateEnum];

/**
 * @export
 */
export const ChainResultsSummaryDeltaStateEnum = {
    None: 'NONE',
    Passing: 'PASSING',
    Failing: 'FAILING',
    Broken: 'BROKEN',
    Fixed: 'FIXED'
} as const;
export type ChainResultsSummaryDeltaStateEnum = typeof ChainResultsSummaryDeltaStateEnum[keyof typeof ChainResultsSummaryDeltaStateEnum];

/**
 * @export
 */
export const ChainResultsSummaryBuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type ChainResultsSummaryBuildAgentTypeEnum = typeof ChainResultsSummaryBuildAgentTypeEnum[keyof typeof ChainResultsSummaryBuildAgentTypeEnum];

/**
 * @export
 */
export const ChainResultsSummaryBuildStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type ChainResultsSummaryBuildStateEnum = typeof ChainResultsSummaryBuildStateEnum[keyof typeof ChainResultsSummaryBuildStateEnum];

/**
 * 
 * @export
 * @interface ChainStageResult
 */
export interface ChainStageResult {
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    restartable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    successful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    failed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    notBuilt?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChainStageResult
     */
    lifeCycleState?: ChainStageResultLifeCycleStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    pending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChainStageResult
     */
    processingDuration?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    finished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    manual?: boolean;
    /**
     * 
     * @type {ChainResultsSummary}
     * @memberof ChainStageResult
     */
    chainResult?: ChainResultsSummary;
    /**
     * 
     * @type {Set<BuildResultsSummary>}
     * @memberof ChainStageResult
     */
    buildResults?: Set<BuildResultsSummary>;
    /**
     * 
     * @type {Array<BuildResultsSummary>}
     * @memberof ChainStageResult
     */
    sortedBuildResults?: Array<BuildResultsSummary>;
    /**
     * 
     * @type {Array<BuildResultsSummary>}
     * @memberof ChainStageResult
     */
    failedBuildResults?: Array<BuildResultsSummary>;
    /**
     * 
     * @type {Array<BuildResultsSummary>}
     * @memberof ChainStageResult
     */
    successfulBuildResults?: Array<BuildResultsSummary>;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    allJobsExist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    allNotSuccessfulJobsExist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    _final?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    runnable?: boolean;
    /**
     * 
     * @type {Array<StageVariableContext>}
     * @memberof ChainStageResult
     */
    manualVariables?: Array<StageVariableContext>;
    /**
     * 
     * @type {Array<StageVariableContext>}
     * @memberof ChainStageResult
     */
    manualVariablesEncrypted?: Array<StageVariableContext>;
    /**
     * 
     * @type {boolean}
     * @memberof ChainStageResult
     */
    completed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChainStageResult
     */
    state?: ChainStageResultStateEnum;
    /**
     * 
     * @type {number}
     * @memberof ChainStageResult
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainStageResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainStageResult
     */
    description?: string;
}


/**
 * @export
 */
export const ChainStageResultLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type ChainStageResultLifeCycleStateEnum = typeof ChainStageResultLifeCycleStateEnum[keyof typeof ChainStageResultLifeCycleStateEnum];

/**
 * @export
 */
export const ChainStageResultStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type ChainStageResultStateEnum = typeof ChainStageResultStateEnum[keyof typeof ChainStageResultStateEnum];

/**
 * 
 * @export
 * @interface Commit
 */
export interface Commit {
    /**
     * 
     * @type {Author}
     * @memberof Commit
     */
    author?: Author;
    /**
     * 
     * @type {RepositoryChangeset}
     * @memberof Commit
     */
    repositoryChangeset?: RepositoryChangeset;
    /**
     * 
     * @type {boolean}
     * @memberof Commit
     */
    foreignCommit?: boolean;
    /**
     * 
     * @type {Array<CommitFile>}
     * @memberof Commit
     */
    files?: Array<CommitFile>;
    /**
     * 
     * @type {number}
     * @memberof Commit
     */
    id?: number;
    /**
     * 
     * @type {AuthorContext}
     * @memberof Commit
     */
    authorContext?: AuthorContext;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    changeSetId?: string;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    comment?: string;
}
/**
 * 
 * @export
 * @interface CommitFile
 */
export interface CommitFile {
    /**
     * 
     * @type {string}
     * @memberof CommitFile
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitFile
     */
    changesetId?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitFile
     */
    cleanName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CommitFile
     */
    revisionKnown?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommitFile
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface ConfigurationInterpolator
 */
export interface ConfigurationInterpolator {
    /**
     * 
     * @type {any}
     * @memberof ConfigurationInterpolator
     */
    defaultLookup?: any | null;
}
/**
 * 
 * @export
 * @interface ConfigurationNode
 */
export interface ConfigurationNode {
    /**
     * 
     * @type {ConfigurationNode}
     * @memberof ConfigurationNode
     */
    parentNode?: ConfigurationNode;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationNode
     */
    childrenCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationNode
     */
    attribute?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigurationNode
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof ConfigurationNode
     */
    value?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof ConfigurationNode
     */
    attributes?: Array<object>;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigurationNode
     */
    defined?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ConfigurationNode
     */
    reference?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof ConfigurationNode
     */
    children?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationNode
     */
    attributeCount?: number;
}
/**
 * 
 * @export
 * @interface ConsumedSubscription
 */
export interface ConsumedSubscription {
    /**
     * 
     * @type {ArtifactLink}
     * @memberof ConsumedSubscription
     */
    artifactLink?: ArtifactLink;
    /**
     * 
     * @type {ResultsSummary}
     * @memberof ConsumedSubscription
     */
    consumerResultSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof ConsumedSubscription
     */
    destinationDirectory?: string;
    /**
     * 
     * @type {number}
     * @memberof ConsumedSubscription
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConsumedSubscription
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface CreateAccessTokenRequest
 */
export interface CreateAccessTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAccessTokenRequest
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateAccessTokenRequest
     */
    permissions?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateCommentRequest
 */
export interface CreateCommentRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCommentRequest
     */
    content?: string;
}
/**
 * 
 * @export
 * @interface DashboardProjectWithEnvironmentStatus
 */
export interface DashboardProjectWithEnvironmentStatus {
    /**
     * 
     * @type {DeploymentProject}
     * @memberof DashboardProjectWithEnvironmentStatus
     */
    deploymentProject?: DeploymentProject;
    /**
     * 
     * @type {Array<EnvironmentStatus>}
     * @memberof DashboardProjectWithEnvironmentStatus
     */
    environmentStatuses?: Array<EnvironmentStatus>;
    /**
     * 
     * @type {RestDeploymentVersion}
     * @memberof DashboardProjectWithEnvironmentStatus
     */
    futureVersion?: RestDeploymentVersion;
    /**
     * 
     * @type {RestDeploymentVersion}
     * @memberof DashboardProjectWithEnvironmentStatus
     */
    relatedVersion?: RestDeploymentVersion;
}
/**
 * 
 * @export
 * @interface DataVolume
 */
export interface DataVolume {
    /**
     * 
     * @type {string}
     * @memberof DataVolume
     */
    containerDirectory?: string;
    /**
     * 
     * @type {string}
     * @memberof DataVolume
     */
    hostDirectory?: string;
}
/**
 * 
 * @export
 * @interface DeploymentKey
 */
export interface DeploymentKey {
    /**
     * 
     * @type {string}
     * @memberof DeploymentKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface DeploymentProject
 */
export interface DeploymentProject {
    /**
     * 
     * @type {string}
     * @memberof DeploymentProject
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentProject
     */
    entityType?: DeploymentProjectEntityTypeEnum;
    /**
     * 
     * @type {Array<Environment>}
     * @memberof DeploymentProject
     */
    environments?: Array<Environment>;
    /**
     * 
     * @type {number}
     * @memberof DeploymentProject
     */
    id?: number;
    /**
     * 
     * @type {DeploymentKey}
     * @memberof DeploymentProject
     */
    key?: DeploymentKey;
    /**
     * 
     * @type {string}
     * @memberof DeploymentProject
     */
    name?: string;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof DeploymentProject
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {Operations}
     * @memberof DeploymentProject
     */
    operations?: Operations;
    /**
     * 
     * @type {PlanKey}
     * @memberof DeploymentProject
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {boolean}
     * @memberof DeploymentProject
     */
    repositorySpecsManaged?: boolean;
    /**
     * 
     * @type {ImmutableVcsBambooSpecsSource}
     * @memberof DeploymentProject
     */
    vcsBambooSpecsSource?: ImmutableVcsBambooSpecsSource;
}


/**
 * @export
 */
export const DeploymentProjectEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type DeploymentProjectEntityTypeEnum = typeof DeploymentProjectEntityTypeEnum[keyof typeof DeploymentProjectEntityTypeEnum];

/**
 * 
 * @export
 * @interface DeploymentResult
 */
export interface DeploymentResult {
    /**
     * 
     * @type {BuildAgent}
     * @memberof DeploymentResult
     */
    agent?: BuildAgent;
    /**
     * 
     * @type {number}
     * @memberof DeploymentResult
     */
    agentId?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    agentType?: DeploymentResultAgentTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof DeploymentResult
     */
    customData?: object;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    deploymentState?: DeploymentResultDeploymentStateEnum;
    /**
     * 
     * @type {DeploymentVersion}
     * @memberof DeploymentResult
     */
    deploymentVersion?: DeploymentVersion;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    deploymentVersionName?: string;
    /**
     * 
     * @type {Environment}
     * @memberof DeploymentResult
     */
    environment?: Environment;
    /**
     * 
     * @type {number}
     * @memberof DeploymentResult
     */
    environmentId?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    executedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    finishedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof DeploymentResult
     */
    id?: number;
    /**
     * 
     * @type {DeploymentResultKey}
     * @memberof DeploymentResult
     */
    key?: DeploymentResultKey;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    lifeCycleState?: DeploymentResultLifeCycleStateEnum;
    /**
     * 
     * @type {Operations}
     * @memberof DeploymentResult
     */
    operations?: Operations;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    queuedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    reasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResult
     */
    startedDate?: string;
    /**
     * 
     * @type {TriggerReason}
     * @memberof DeploymentResult
     */
    triggerReason?: TriggerReason;
}


/**
 * @export
 */
export const DeploymentResultAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type DeploymentResultAgentTypeEnum = typeof DeploymentResultAgentTypeEnum[keyof typeof DeploymentResultAgentTypeEnum];

/**
 * @export
 */
export const DeploymentResultDeploymentStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type DeploymentResultDeploymentStateEnum = typeof DeploymentResultDeploymentStateEnum[keyof typeof DeploymentResultDeploymentStateEnum];

/**
 * @export
 */
export const DeploymentResultLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type DeploymentResultLifeCycleStateEnum = typeof DeploymentResultLifeCycleStateEnum[keyof typeof DeploymentResultLifeCycleStateEnum];

/**
 * 
 * @export
 * @interface DeploymentResultKey
 */
export interface DeploymentResultKey {
    /**
     * 
     * @type {number}
     * @memberof DeploymentResultKey
     */
    deploymentResultId?: number;
    /**
     * 
     * @type {Key}
     * @memberof DeploymentResultKey
     */
    entityKey?: Key;
    /**
     * 
     * @type {number}
     * @memberof DeploymentResultKey
     */
    resultNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DeploymentResultKey
     */
    resultNumberLong?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentResultKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface DeploymentVersion
 */
export interface DeploymentVersion {
    /**
     * 
     * @type {Operations}
     * @memberof DeploymentVersion
     */
    operations?: Operations;
    /**
     * 
     * @type {DeploymentVersionStatus}
     * @memberof DeploymentVersion
     */
    versionStatus?: DeploymentVersionStatus;
    /**
     * 
     * @type {Array<VariableSubstitutionContext>}
     * @memberof DeploymentVersion
     */
    variableContext?: Array<VariableSubstitutionContext>;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    creatorGravatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    creatorDisplayName?: string;
    /**
     * 
     * @type {Array<DeploymentVersionItem>}
     * @memberof DeploymentVersion
     */
    items?: Array<DeploymentVersionItem>;
    /**
     * 
     * @type {number}
     * @memberof DeploymentVersion
     */
    deploymentProjectId?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    planBranchName?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    creatorUserName?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    ageZeroPoint?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersion
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DeploymentVersion
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface DeploymentVersionItem
 */
export interface DeploymentVersionItem {
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionItem
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DeploymentVersionItem
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionItem
     */
    type?: DeploymentVersionItemTypeEnum;
}


/**
 * @export
 */
export const DeploymentVersionItemTypeEnum = {
    BamArtifact: 'BAM_ARTIFACT',
    Source: 'SOURCE'
} as const;
export type DeploymentVersionItemTypeEnum = typeof DeploymentVersionItemTypeEnum[keyof typeof DeploymentVersionItemTypeEnum];

/**
 * 
 * @export
 * @interface DeploymentVersionStatus
 */
export interface DeploymentVersionStatus {
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionStatus
     */
    gravatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionStatus
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionStatus
     */
    versionState?: DeploymentVersionStatusVersionStateEnum;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionStatus
     */
    creationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof DeploymentVersionStatus
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DeploymentVersionStatus
     */
    userName?: string;
}


/**
 * @export
 */
export const DeploymentVersionStatusVersionStateEnum = {
    Unknown: 'Unknown',
    Approved: 'Approved',
    Broken: 'Broken',
    Incomplete: 'Incomplete'
} as const;
export type DeploymentVersionStatusVersionStateEnum = typeof DeploymentVersionStatusVersionStateEnum[keyof typeof DeploymentVersionStatusVersionStateEnum];

/**
 * 
 * @export
 * @interface DirectoryInformationResponse
 */
export interface DirectoryInformationResponse {
    /**
     * 
     * @type {Array<DirectoryInformationResult>}
     * @memberof DirectoryInformationResponse
     */
    results?: Array<DirectoryInformationResult>;
}
/**
 * 
 * @export
 * @interface DirectoryInformationResult
 */
export interface DirectoryInformationResult {
    /**
     * 
     * @type {string}
     * @memberof DirectoryInformationResult
     */
    planName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DirectoryInformationResult
     */
    artifactPlanRoots?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof DirectoryInformationResult
     */
    buildLogJobRoots?: object;
    /**
     * 
     * @type {boolean}
     * @memberof DirectoryInformationResult
     */
    isBranchBuild?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DirectoryInformationResult
     */
    storageTag?: string;
}
/**
 * 
 * @export
 * @interface DockerPipelineConfiguration
 */
export interface DockerPipelineConfiguration {
    /**
     * 
     * @type {Array<DataVolume>}
     * @memberof DockerPipelineConfiguration
     */
    dataVolumes?: Array<DataVolume>;
    /**
     * 
     * @type {string}
     * @memberof DockerPipelineConfiguration
     */
    image?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DockerPipelineConfiguration
     */
    additionalArgs?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DockerPipelineConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DockerPipelineConfiguration
     */
    valid?: boolean;
}
/**
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * 
     * @type {Operations}
     * @memberof Environment
     */
    operations?: Operations;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof Environment
     */
    taskDefinitions?: Array<TaskDefinition>;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    configurationState?: EnvironmentConfigurationStateEnum;
    /**
     * 
     * @type {number}
     * @memberof Environment
     */
    deploymentProjectId?: number;
    /**
     * 
     * @type {ImmutableRequirementSet}
     * @memberof Environment
     */
    requirementSet?: ImmutableRequirementSet;
    /**
     * 
     * @type {object}
     * @memberof Environment
     */
    taskDefinitionsSupplier?: object;
    /**
     * 
     * @type {object}
     * @memberof Environment
     */
    triggerDefinitionsSupplier?: object;
    /**
     * 
     * @type {number}
     * @memberof Environment
     */
    position?: number;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    name?: string;
    /**
     * 
     * @type {DeploymentKey}
     * @memberof Environment
     */
    key?: DeploymentKey;
    /**
     * 
     * @type {number}
     * @memberof Environment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    description?: string;
    /**
     * 
     * @type {Array<TriggerDefinition>}
     * @memberof Environment
     */
    triggerDefinitions?: Array<TriggerDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof Environment
     */
    suspended?: boolean;
}


/**
 * @export
 */
export const EnvironmentConfigurationStateEnum = {
    Created: 'CREATED',
    Detailed: 'DETAILED',
    Tasked: 'TASKED'
} as const;
export type EnvironmentConfigurationStateEnum = typeof EnvironmentConfigurationStateEnum[keyof typeof EnvironmentConfigurationStateEnum];

/**
 * 
 * @export
 * @interface EnvironmentIds
 */
export interface EnvironmentIds {
    /**
     * 
     * @type {Array<number>}
     * @memberof EnvironmentIds
     */
    ids?: Array<number>;
}
/**
 * 
 * @export
 * @interface EnvironmentStatus
 */
export interface EnvironmentStatus {
    /**
     * 
     * @type {DeploymentResult}
     * @memberof EnvironmentStatus
     */
    deploymentResult?: DeploymentResult;
    /**
     * 
     * @type {Environment}
     * @memberof EnvironmentStatus
     */
    environment?: Environment;
    /**
     * 
     * @type {DeploymentResult}
     * @memberof EnvironmentStatus
     */
    latestResult?: DeploymentResult;
}
/**
 * 
 * @export
 * @interface EphemeralAgentsConfigurationDTO
 */
export interface EphemeralAgentsConfigurationDTO {
    /**
     * 
     * @type {boolean}
     * @memberof EphemeralAgentsConfigurationDTO
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EphemeralAgentsConfigurationDTO
     */
    pathToConfig?: string;
    /**
     * 
     * @type {string}
     * @memberof EphemeralAgentsConfigurationDTO
     */
    label?: string;
    /**
     * 
     * @type {PodsCleanup}
     * @memberof EphemeralAgentsConfigurationDTO
     */
    podsCleanup?: PodsCleanup;
}
/**
 * 
 * @export
 * @interface ExpiryConfig
 */
export interface ExpiryConfig {
    /**
     * 
     * @type {boolean}
     * @memberof ExpiryConfig
     */
    expiryTypeNothing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExpiryConfig
     */
    expiryTypeResult?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExpiryConfig
     */
    expiryTypeArtifact?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ExpiryConfig
     */
    expiryBuildLog?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExpiryConfig
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof ExpiryConfig
     */
    period?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpiryConfig
     */
    labelsList?: string;
    /**
     * 
     * @type {number}
     * @memberof ExpiryConfig
     */
    buildsToKeep?: number;
    /**
     * 
     * @type {number}
     * @memberof ExpiryConfig
     */
    maximumBuildsToKeep?: number;
}
/**
 * 
 * @export
 * @interface ExtraBuildResultsData
 */
export interface ExtraBuildResultsData {
    /**
     * 
     * @type {number}
     * @memberof ExtraBuildResultsData
     */
    buildReturnCode?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExtraBuildResultsData
     */
    buildErrors?: Array<string>;
}
/**
 * 
 * @export
 * @interface FilteredTestResultsTestClassResult
 */
export interface FilteredTestResultsTestClassResult {
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    existingFailedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    fixedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    allFailedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    quarantinedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    skippedTests?: any | null;
    /**
     * 
     * @type {Array<TestCaseResult>}
     * @memberof FilteredTestResultsTestClassResult
     */
    allFailedTestList?: Array<TestCaseResult>;
    /**
     * 
     * @type {Array<TestCaseResult>}
     * @memberof FilteredTestResultsTestClassResult
     */
    skippedTestList?: Array<TestCaseResult>;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResult
     */
    newFailedTests?: any | null;
}
/**
 * 
 * @export
 * @interface FilteredTestResultsTestClassResultDescriptor
 */
export interface FilteredTestResultsTestClassResultDescriptor {
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    existingFailedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    fixedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    allFailedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    quarantinedTests?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    skippedTests?: any | null;
    /**
     * 
     * @type {Array<TestCaseResult>}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    allFailedTestList?: Array<TestCaseResult>;
    /**
     * 
     * @type {Array<TestCaseResult>}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    skippedTestList?: Array<TestCaseResult>;
    /**
     * 
     * @type {any}
     * @memberof FilteredTestResultsTestClassResultDescriptor
     */
    newFailedTests?: any | null;
}
/**
 * 
 * @export
 * @interface FindAssignedGroups200Response
 */
export interface FindAssignedGroups200Response {
    /**
     * 
     * @type {string}
     * @memberof FindAssignedGroups200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof FindAssignedGroups200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof FindAssignedGroups200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof FindAssignedGroups200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof FindAssignedGroups200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestGroup>}
     * @memberof FindAssignedGroups200Response
     */
    results?: Array<RestGroup>;
}
/**
 * 
 * @export
 * @interface FindPlansWithCustomExpirySettings200Response
 */
export interface FindPlansWithCustomExpirySettings200Response {
    /**
     * 
     * @type {string}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<PlanWithCustomExpirySettings>}
     * @memberof FindPlansWithCustomExpirySettings200Response
     */
    results?: Array<PlanWithCustomExpirySettings>;
}
/**
 * 
 * @export
 * @interface FindUnassignedUserRepositoryAliases200Response
 */
export interface FindUnassignedUserRepositoryAliases200Response {
    /**
     * 
     * @type {string}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestUserAlias>}
     * @memberof FindUnassignedUserRepositoryAliases200Response
     */
    results?: Array<RestUserAlias>;
}
/**
 * 
 * @export
 * @interface GetAgents200Response
 */
export interface GetAgents200Response {
    /**
     * 
     * @type {string}
     * @memberof GetAgents200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAgents200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAgents200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAgents200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAgents200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestAgent>}
     * @memberof GetAgents200Response
     */
    results?: Array<RestAgent>;
}
/**
 * 
 * @export
 * @interface GetAvailableUsers6200Response
 */
export interface GetAvailableUsers6200Response {
    /**
     * 
     * @type {string}
     * @memberof GetAvailableUsers6200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAvailableUsers6200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAvailableUsers6200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAvailableUsers6200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAvailableUsers6200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestUser>}
     * @memberof GetAvailableUsers6200Response
     */
    results?: Array<RestUser>;
}
/**
 * 
 * @export
 * @interface GetBrokenBuildsForUser200Response
 */
export interface GetBrokenBuildsForUser200Response {
    /**
     * 
     * @type {string}
     * @memberof GetBrokenBuildsForUser200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokenBuildsForUser200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokenBuildsForUser200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokenBuildsForUser200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBrokenBuildsForUser200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestBrokenPlan>}
     * @memberof GetBrokenBuildsForUser200Response
     */
    results?: Array<RestBrokenPlan>;
}
/**
 * 
 * @export
 * @interface GetDeploymentProjects200Response
 */
export interface GetDeploymentProjects200Response {
    /**
     * 
     * @type {string}
     * @memberof GetDeploymentProjects200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetDeploymentProjects200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetDeploymentProjects200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetDeploymentProjects200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetDeploymentProjects200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestDeploymentProject>}
     * @memberof GetDeploymentProjects200Response
     */
    results?: Array<RestDeploymentProject>;
}
/**
 * 
 * @export
 * @interface GetEnvironmentsExecutableByAgent200Response
 */
export interface GetEnvironmentsExecutableByAgent200Response {
    /**
     * 
     * @type {string}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestEnvironmentForExecutablesView>}
     * @memberof GetEnvironmentsExecutableByAgent200Response
     */
    results?: Array<RestEnvironmentForExecutablesView>;
}
/**
 * 
 * @export
 * @interface GetEphemeralAgentPodLogs200Response
 */
export interface GetEphemeralAgentPodLogs200Response {
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestEphemeralPodLogs>}
     * @memberof GetEphemeralAgentPodLogs200Response
     */
    results?: Array<RestEphemeralPodLogs>;
}
/**
 * 
 * @export
 * @interface GetEphemeralAgentPodRawLogs200Response
 */
export interface GetEphemeralAgentPodRawLogs200Response {
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetEphemeralAgentPodRawLogs200Response
     */
    results?: Array<string>;
}
/**
 * 
 * @export
 * @interface GetPaginatedProjectRepositories200Response
 */
export interface GetPaginatedProjectRepositories200Response {
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestProjectRepository>}
     * @memberof GetPaginatedProjectRepositories200Response
     */
    results?: Array<RestProjectRepository>;
}
/**
 * 
 * @export
 * @interface GetPaginatedProjectSharedCredentials200Response
 */
export interface GetPaginatedProjectSharedCredentials200Response {
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestSharedCredential>}
     * @memberof GetPaginatedProjectSharedCredentials200Response
     */
    results?: Array<RestSharedCredential>;
}
/**
 * 
 * @export
 * @interface GetUserAccessTokens200Response
 */
export interface GetUserAccessTokens200Response {
    /**
     * 
     * @type {string}
     * @memberof GetUserAccessTokens200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUserAccessTokens200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUserAccessTokens200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUserAccessTokens200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUserAccessTokens200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestAccessToken>}
     * @memberof GetUserAccessTokens200Response
     */
    results?: Array<RestAccessToken>;
}
/**
 * 
 * @export
 * @interface GetUsers200Response
 */
export interface GetUsers200Response {
    /**
     * 
     * @type {string}
     * @memberof GetUsers200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUsers200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUsers200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUsers200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsers200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestUserDetails>}
     * @memberof GetUsers200Response
     */
    results?: Array<RestUserDetails>;
}
/**
 * 
 * @export
 * @interface HierarchicalConfiguration
 */
export interface HierarchicalConfiguration {
    /**
     * 
     * @type {Array<object>}
     * @memberof HierarchicalConfiguration
     */
    errorListeners?: Array<object>;
    /**
     * 
     * @type {boolean}
     * @memberof HierarchicalConfiguration
     */
    detailEvents?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HierarchicalConfiguration
     */
    listDelimiter?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HierarchicalConfiguration
     */
    delimiterParsingDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HierarchicalConfiguration
     */
    throwExceptionOnMissing?: boolean;
    /**
     * 
     * @type {StrSubstitutor}
     * @memberof HierarchicalConfiguration
     */
    substitutor?: StrSubstitutor;
    /**
     * 
     * @type {Node}
     * @memberof HierarchicalConfiguration
     */
    root?: Node;
    /**
     * 
     * @type {ConfigurationNode}
     * @memberof HierarchicalConfiguration
     */
    rootNode?: ConfigurationNode;
    /**
     * 
     * @type {any}
     * @memberof HierarchicalConfiguration
     */
    expressionEngine?: any | null;
    /**
     * 
     * @type {object}
     * @memberof HierarchicalConfiguration
     */
    keys?: object;
    /**
     * 
     * @type {Log}
     * @memberof HierarchicalConfiguration
     */
    logger?: Log;
    /**
     * 
     * @type {ConfigurationInterpolator}
     * @memberof HierarchicalConfiguration
     */
    interpolator?: ConfigurationInterpolator;
    /**
     * 
     * @type {Array<object>}
     * @memberof HierarchicalConfiguration
     */
    configurationListeners?: Array<object>;
}
/**
 * 
 * @export
 * @interface ImmutableArtifactDefinition
 */
export interface ImmutableArtifactDefinition {
    /**
     * 
     * @type {ImmutableJob}
     * @memberof ImmutableArtifactDefinition
     */
    producerJob?: ImmutableJob;
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactDefinition
     */
    entityType?: ImmutableArtifactDefinitionEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactDefinition
     */
    copyPattern?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableArtifactDefinition
     */
    httpCompressionOn?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutableArtifactDefinition
     */
    copyPatterns?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutableArtifactDefinition
     */
    exclusionPatterns?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableArtifactDefinition
     */
    sharedArtifact?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactDefinition
     */
    location?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableArtifactDefinition
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableArtifactDefinition
     */
    required?: boolean;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof ImmutableArtifactDefinition
     */
    oid?: BambooEntityOid;
}


/**
 * @export
 */
export const ImmutableArtifactDefinitionEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ImmutableArtifactDefinitionEntityTypeEnum = typeof ImmutableArtifactDefinitionEntityTypeEnum[keyof typeof ImmutableArtifactDefinitionEntityTypeEnum];

/**
 * 
 * @export
 * @interface ImmutableArtifactSubscription
 */
export interface ImmutableArtifactSubscription {
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactSubscription
     */
    destinationDirectory?: string;
    /**
     * 
     * @type {ImmutableJob}
     * @memberof ImmutableArtifactSubscription
     */
    consumerJob?: ImmutableJob;
    /**
     * 
     * @type {ImmutableArtifactDefinition}
     * @memberof ImmutableArtifactSubscription
     */
    artifactDefinition?: ImmutableArtifactDefinition;
    /**
     * 
     * @type {string}
     * @memberof ImmutableArtifactSubscription
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableArtifactSubscription
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface ImmutableChain
 */
export interface ImmutableChain {
    /**
     * 
     * @type {NotificationSet}
     * @memberof ImmutableChain
     */
    notificationSet?: NotificationSet;
    /**
     * 
     * @type {Array<ImmutableJob>}
     * @memberof ImmutableChain
     */
    allJobs?: Array<ImmutableJob>;
    /**
     * 
     * @type {any}
     * @memberof ImmutableChain
     */
    storageTag?: any | null;
    /**
     * 
     * @type {ImmutableVcsBambooSpecsSource}
     * @memberof ImmutableChain
     */
    vcsBambooSpecsSource?: ImmutableVcsBambooSpecsSource;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    entityType?: ImmutableChainEntityTypeEnum;
    /**
     * 
     * @type {Array<ImmutableChainStage>}
     * @memberof ImmutableChain
     */
    stages?: Array<ImmutableChainStage>;
    /**
     * 
     * @type {Array<ImmutableChainStage>}
     * @memberof ImmutableChain
     */
    allStages?: Array<ImmutableChainStage>;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    jobCount?: number;
    /**
     * 
     * @type {Array<RepositoryDefinition>}
     * @memberof ImmutableChain
     */
    effectiveRepositoryDefinitions?: Array<RepositoryDefinition>;
    /**
     * 
     * @type {Array<PlanRepositoryDefinition>}
     * @memberof ImmutableChain
     */
    planRepositoryDefinitions?: Array<PlanRepositoryDefinition>;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof ImmutableChain
     */
    lastResultKey?: PlanResultKey;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    creationDate?: string;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ImmutableChain
     */
    master?: ImmutableChain;
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutableChain
     */
    variables?: Array<VariableDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {ImmutableResultsSummary}
     * @memberof ImmutableChain
     */
    latestResultsSummary?: ImmutableResultsSummary;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    executing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    busy?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutableChain
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {BuildDefinition}
     * @memberof ImmutableChain
     */
    buildDefinition?: BuildDefinition;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    currentStatus?: string;
    /**
     * 
     * @type {BuildLogger}
     * @memberof ImmutableChain
     */
    buildLogger?: BuildLogger;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    firstBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    lastBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    averageBuildDuration?: number;
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutableChain
     */
    effectiveVariables?: Array<VariableDefinition>;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    active?: boolean;
    /**
     * 
     * @type {Project}
     * @memberof ImmutableChain
     */
    project?: Project;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    buildName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    buildKey?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof ImmutableChain
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    planType?: ImmutableChainPlanTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    suspendedFromBuilding?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    databaseId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    masterIdIfExists?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChain
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChain
     */
    description?: string;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof ImmutableChain
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {Array<TriggerDefinition>}
     * @memberof ImmutableChain
     */
    triggerDefinitions?: Array<TriggerDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChain
     */
    suspended?: boolean;
}


/**
 * @export
 */
export const ImmutableChainEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ImmutableChainEntityTypeEnum = typeof ImmutableChainEntityTypeEnum[keyof typeof ImmutableChainEntityTypeEnum];

/**
 * @export
 */
export const ImmutableChainPlanTypeEnum = {
    Chain: 'CHAIN',
    Job: 'JOB',
    ChainBranch: 'CHAIN_BRANCH'
} as const;
export type ImmutableChainPlanTypeEnum = typeof ImmutableChainPlanTypeEnum[keyof typeof ImmutableChainPlanTypeEnum];

/**
 * 
 * @export
 * @interface ImmutableChainStage
 */
export interface ImmutableChainStage {
    /**
     * 
     * @type {Set<ImmutableJob>}
     * @memberof ImmutableChainStage
     */
    jobs?: Set<ImmutableJob>;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChainStage
     */
    databaseId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChainStage
     */
    entityType?: ImmutableChainStageEntityTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChainStage
     */
    manual?: boolean;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ImmutableChainStage
     */
    chain?: ImmutableChain;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChainStage
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableChainStage
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChainStage
     */
    _final?: boolean;
    /**
     * 
     * @type {ImmutableChainStage}
     * @memberof ImmutableChainStage
     */
    master?: ImmutableChainStage;
    /**
     * 
     * @type {string}
     * @memberof ImmutableChainStage
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableChainStage
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof ImmutableChainStage
     */
    oid?: BambooEntityOid;
}


/**
 * @export
 */
export const ImmutableChainStageEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ImmutableChainStageEntityTypeEnum = typeof ImmutableChainStageEntityTypeEnum[keyof typeof ImmutableChainStageEntityTypeEnum];

/**
 * 
 * @export
 * @interface ImmutableJob
 */
export interface ImmutableJob {
    /**
     * 
     * @type {RequirementSet}
     * @memberof ImmutableJob
     */
    requirementSet?: RequirementSet;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    entityType?: ImmutableJobEntityTypeEnum;
    /**
     * 
     * @type {Array<ImmutableArtifactSubscription>}
     * @memberof ImmutableJob
     */
    artifactSubscriptions?: Array<ImmutableArtifactSubscription>;
    /**
     * 
     * @type {RequirementSet}
     * @memberof ImmutableJob
     */
    effectiveRequirementSet?: RequirementSet;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    divergent?: boolean;
    /**
     * 
     * @type {Array<ImmutableArtifactDefinition>}
     * @memberof ImmutableJob
     */
    artifactDefinitions?: Array<ImmutableArtifactDefinition>;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ImmutableJob
     */
    parent?: ImmutableChain;
    /**
     * 
     * @type {ImmutableJob}
     * @memberof ImmutableJob
     */
    master?: ImmutableJob;
    /**
     * 
     * @type {ImmutableChainStage}
     * @memberof ImmutableJob
     */
    stage?: ImmutableChainStage;
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutableJob
     */
    variables?: Array<VariableDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {ImmutableResultsSummary}
     * @memberof ImmutableJob
     */
    latestResultsSummary?: ImmutableResultsSummary;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    executing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    busy?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutableJob
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {BuildDefinition}
     * @memberof ImmutableJob
     */
    buildDefinition?: BuildDefinition;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    currentStatus?: string;
    /**
     * 
     * @type {BuildLogger}
     * @memberof ImmutableJob
     */
    buildLogger?: BuildLogger;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    firstBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    lastBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    averageBuildDuration?: number;
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutableJob
     */
    effectiveVariables?: Array<VariableDefinition>;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    active?: boolean;
    /**
     * 
     * @type {Project}
     * @memberof ImmutableJob
     */
    project?: Project;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    buildName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    buildKey?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof ImmutableJob
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    planType?: ImmutableJobPlanTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableJob
     */
    suspendedFromBuilding?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    databaseId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    masterIdIfExists?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableJob
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableJob
     */
    description?: string;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof ImmutableJob
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof ImmutableJob
     */
    taskDefinitions?: Array<TaskDefinition>;
}


/**
 * @export
 */
export const ImmutableJobEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ImmutableJobEntityTypeEnum = typeof ImmutableJobEntityTypeEnum[keyof typeof ImmutableJobEntityTypeEnum];

/**
 * @export
 */
export const ImmutableJobPlanTypeEnum = {
    Chain: 'CHAIN',
    Job: 'JOB',
    ChainBranch: 'CHAIN_BRANCH'
} as const;
export type ImmutableJobPlanTypeEnum = typeof ImmutableJobPlanTypeEnum[keyof typeof ImmutableJobPlanTypeEnum];

/**
 * 
 * @export
 * @interface ImmutablePlan
 */
export interface ImmutablePlan {
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutablePlan
     */
    variables?: Array<VariableDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutablePlan
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {ImmutableResultsSummary}
     * @memberof ImmutablePlan
     */
    latestResultsSummary?: ImmutableResultsSummary;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutablePlan
     */
    executing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutablePlan
     */
    busy?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutablePlan
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {BuildDefinition}
     * @memberof ImmutablePlan
     */
    buildDefinition?: BuildDefinition;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    currentStatus?: string;
    /**
     * 
     * @type {BuildLogger}
     * @memberof ImmutablePlan
     */
    buildLogger?: BuildLogger;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    firstBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    lastBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    averageBuildDuration?: number;
    /**
     * 
     * @type {Array<VariableDefinition>}
     * @memberof ImmutablePlan
     */
    effectiveVariables?: Array<VariableDefinition>;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutablePlan
     */
    active?: boolean;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof ImmutablePlan
     */
    master?: ImmutablePlan;
    /**
     * 
     * @type {Project}
     * @memberof ImmutablePlan
     */
    project?: Project;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    buildName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    buildKey?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof ImmutablePlan
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    planType?: ImmutablePlanPlanTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutablePlan
     */
    suspendedFromBuilding?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    databaseId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    masterIdIfExists?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutablePlan
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutablePlan
     */
    entityType?: ImmutablePlanEntityTypeEnum;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof ImmutablePlan
     */
    oid?: BambooEntityOid;
}


/**
 * @export
 */
export const ImmutablePlanPlanTypeEnum = {
    Chain: 'CHAIN',
    Job: 'JOB',
    ChainBranch: 'CHAIN_BRANCH'
} as const;
export type ImmutablePlanPlanTypeEnum = typeof ImmutablePlanPlanTypeEnum[keyof typeof ImmutablePlanPlanTypeEnum];

/**
 * @export
 */
export const ImmutablePlanEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ImmutablePlanEntityTypeEnum = typeof ImmutablePlanEntityTypeEnum[keyof typeof ImmutablePlanEntityTypeEnum];

/**
 * 
 * @export
 * @interface ImmutableRequirement
 */
export interface ImmutableRequirement {
    /**
     * 
     * @type {string}
     * @memberof ImmutableRequirement
     */
    typeOfMatch?: ImmutableRequirementTypeOfMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof ImmutableRequirement
     */
    matchValue?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableRequirement
     */
    readonly?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableRequirement
     */
    ownerId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableRequirement
     */
    pluginModuleKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableRequirement
     */
    regexMatch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImmutableRequirement
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableRequirement
     */
    id?: number;
}


/**
 * @export
 */
export const ImmutableRequirementTypeOfMatchEnum = {
    Exists: 'EXISTS',
    Equals: 'EQUALS',
    Matches: 'MATCHES'
} as const;
export type ImmutableRequirementTypeOfMatchEnum = typeof ImmutableRequirementTypeOfMatchEnum[keyof typeof ImmutableRequirementTypeOfMatchEnum];

/**
 * 
 * @export
 * @interface ImmutableRequirementSet
 */
export interface ImmutableRequirementSet {
    /**
     * 
     * @type {Set<ImmutableRequirement>}
     * @memberof ImmutableRequirementSet
     */
    requirements?: Set<ImmutableRequirement>;
}
/**
 * 
 * @export
 * @interface ImmutableResultsSummary
 */
export interface ImmutableResultsSummary {
    /**
     * 
     * @type {PlanKey}
     * @memberof ImmutableResultsSummary
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof ImmutableResultsSummary
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {Array<RepositoryChangeset>}
     * @memberof ImmutableResultsSummary
     */
    repositoryChangesets?: Array<RepositoryChangeset>;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof ImmutableResultsSummary
     */
    immutablePlan?: ImmutablePlan;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    planName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    successful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    failed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    notRunYet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    notBuilt?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImmutableResultsSummary
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    lifeCycleState?: ImmutableResultsSummaryLifeCycleStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    inProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    pending?: boolean;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof ImmutableResultsSummary
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {Array<ConsumedSubscription>}
     * @memberof ImmutableResultsSummary
     */
    subscriptions?: Array<ConsumedSubscription>;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof ImmutableResultsSummary
     */
    planIfExists?: ImmutablePlan;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ImmutableResultsSummary
     */
    immutableChain?: ImmutableChain;
    /**
     * 
     * @type {TriggerReason}
     * @memberof ImmutableResultsSummary
     */
    triggerReason?: TriggerReason;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    deltaState?: ImmutableResultsSummaryDeltaStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    onceOff?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    customBuild?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    rebuild?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    logSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    processingDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildCancelledDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildCompletedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    finished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    waiting?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ImmutableResultsSummary
     */
    customBuildData?: object;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ImmutableResultsSummary
     */
    jiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ImmutableResultsSummary
     */
    fixingJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ImmutableResultsSummary
     */
    relatedJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<string>}
     * @memberof ImmutableResultsSummary
     */
    jiraIssueKeys?: Set<string>;
    /**
     * 
     * @type {Set<Author>}
     * @memberof ImmutableResultsSummary
     */
    uniqueAuthors?: Set<Author>;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    timeToFix?: number;
    /**
     * 
     * @type {TestResultsSummary}
     * @memberof ImmutableResultsSummary
     */
    testResultsSummary?: TestResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    durationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    processingDurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    shortReasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    reasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    relativeBuildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    relativeQueueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    relativeBuildStartedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    testSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildTime?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    queueTime?: string;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ImmutableResultsSummary
     */
    artifactLinks?: Array<ArtifactLink>;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ImmutableResultsSummary
     */
    artifactLinksThatExist?: Array<ArtifactLink>;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    changesListSummary?: string;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ImmutableResultsSummary
     */
    substitutedVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof ImmutableResultsSummary
     */
    variableContextLogs?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ImmutableResultsSummary
     */
    manuallyOverriddenVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    restartCount?: number;
    /**
     * 
     * @type {Array<Commit>}
     * @memberof ImmutableResultsSummary
     */
    commits?: Array<Commit>;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    buildAgentId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildAgentType?: ImmutableResultsSummaryBuildAgentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    fullPlanName?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    duration?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableResultsSummary
     */
    queued?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    statDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableResultsSummary
     */
    buildState?: ImmutableResultsSummaryBuildStateEnum;
    /**
     * 
     * @type {number}
     * @memberof ImmutableResultsSummary
     */
    buildNumber?: number;
}


/**
 * @export
 */
export const ImmutableResultsSummaryLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type ImmutableResultsSummaryLifeCycleStateEnum = typeof ImmutableResultsSummaryLifeCycleStateEnum[keyof typeof ImmutableResultsSummaryLifeCycleStateEnum];

/**
 * @export
 */
export const ImmutableResultsSummaryDeltaStateEnum = {
    None: 'NONE',
    Passing: 'PASSING',
    Failing: 'FAILING',
    Broken: 'BROKEN',
    Fixed: 'FIXED'
} as const;
export type ImmutableResultsSummaryDeltaStateEnum = typeof ImmutableResultsSummaryDeltaStateEnum[keyof typeof ImmutableResultsSummaryDeltaStateEnum];

/**
 * @export
 */
export const ImmutableResultsSummaryBuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type ImmutableResultsSummaryBuildAgentTypeEnum = typeof ImmutableResultsSummaryBuildAgentTypeEnum[keyof typeof ImmutableResultsSummaryBuildAgentTypeEnum];

/**
 * @export
 */
export const ImmutableResultsSummaryBuildStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type ImmutableResultsSummaryBuildStateEnum = typeof ImmutableResultsSummaryBuildStateEnum[keyof typeof ImmutableResultsSummaryBuildStateEnum];

/**
 * 
 * @export
 * @interface ImmutableVcsBambooSpecsSource
 */
export interface ImmutableVcsBambooSpecsSource {
    /**
     * 
     * @type {ImmutableVcsLocationBambooSpecsState}
     * @memberof ImmutableVcsBambooSpecsSource
     */
    vcsLocationBambooSpecsState?: ImmutableVcsLocationBambooSpecsState;
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsBambooSpecsSource
     */
    sourceLocation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableVcsBambooSpecsSource
     */
    yamlConfiguration?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableVcsBambooSpecsSource
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface ImmutableVcsLocationBambooSpecsState
 */
export interface ImmutableVcsLocationBambooSpecsState {
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    branch?: string;
    /**
     * 
     * @type {number}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    vcsLocationId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    specsExecutionDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    logFilename?: string;
    /**
     * 
     * @type {string}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    specImportState?: ImmutableVcsLocationBambooSpecsStateSpecImportStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    specsNotFound?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImmutableVcsLocationBambooSpecsState
     */
    id?: number;
}


/**
 * @export
 */
export const ImmutableVcsLocationBambooSpecsStateSpecImportStateEnum = {
    Success: 'SUCCESS',
    Error: 'ERROR'
} as const;
export type ImmutableVcsLocationBambooSpecsStateSpecImportStateEnum = typeof ImmutableVcsLocationBambooSpecsStateSpecImportStateEnum[keyof typeof ImmutableVcsLocationBambooSpecsStateSpecImportStateEnum];

/**
 * 
 * @export
 * @interface JiraAssignee
 */
export interface JiraAssignee {
    /**
     * 
     * @type {string}
     * @memberof JiraAssignee
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof JiraAssignee
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface JiraIssueDetails
 */
export interface JiraIssueDetails {
    /**
     * 
     * @type {JiraAssignee}
     * @memberof JiraIssueDetails
     */
    assignee?: JiraAssignee;
    /**
     * 
     * @type {Array<string>}
     * @memberof JiraIssueDetails
     */
    fixVersions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JiraIssueDetails
     */
    issueKey?: string;
    /**
     * 
     * @type {string}
     * @memberof JiraIssueDetails
     */
    displayUrl?: string;
    /**
     * 
     * @type {JiraType}
     * @memberof JiraIssueDetails
     */
    type?: JiraType;
    /**
     * 
     * @type {JiraStatus}
     * @memberof JiraIssueDetails
     */
    status?: JiraStatus;
    /**
     * 
     * @type {string}
     * @memberof JiraIssueDetails
     */
    summary?: string;
}
/**
 * 
 * @export
 * @interface JiraStatus
 */
export interface JiraStatus {
    /**
     * 
     * @type {string}
     * @memberof JiraStatus
     */
    statusDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof JiraStatus
     */
    statusIconUrl?: string;
}
/**
 * 
 * @export
 * @interface JiraType
 */
export interface JiraType {
    /**
     * 
     * @type {string}
     * @memberof JiraType
     */
    typeIconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof JiraType
     */
    typeDescription?: string;
}
/**
 * 
 * @export
 * @interface JsonArray
 */
export interface JsonArray {
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asFloat?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asInt?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonArray
     */
    asByte?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonArray
     */
    asCharacter?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asBigDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asBigInteger?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asShort?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonArray
     */
    asString?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonArray
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonArray
     */
    asBoolean?: boolean;
    /**
     * 
     * @type {JsonNull}
     * @memberof JsonArray
     */
    asJsonNull?: JsonNull;
    /**
     * 
     * @type {boolean}
     * @memberof JsonArray
     */
    jsonPrimitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonArray
     */
    jsonObject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonArray
     */
    jsonNull?: boolean;
    /**
     * 
     * @type {JsonObject}
     * @memberof JsonArray
     */
    asJsonObject?: JsonObject;
    /**
     * 
     * @type {JsonArray}
     * @memberof JsonArray
     */
    asJsonArray?: JsonArray;
    /**
     * 
     * @type {JsonPrimitive}
     * @memberof JsonArray
     */
    asJsonPrimitive?: JsonPrimitive;
    /**
     * 
     * @type {boolean}
     * @memberof JsonArray
     */
    jsonArray?: boolean;
}
/**
 * 
 * @export
 * @interface JsonElement
 */
export interface JsonElement {
    /**
     * 
     * @type {JsonNull}
     * @memberof JsonElement
     */
    asJsonNull?: JsonNull;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asFloat?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asInt?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonElement
     */
    asByte?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonElement
     */
    asCharacter?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asBigDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asBigInteger?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asShort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonElement
     */
    jsonPrimitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonElement
     */
    jsonObject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonElement
     */
    jsonNull?: boolean;
    /**
     * 
     * @type {JsonObject}
     * @memberof JsonElement
     */
    asJsonObject?: JsonObject;
    /**
     * 
     * @type {JsonArray}
     * @memberof JsonElement
     */
    asJsonArray?: JsonArray;
    /**
     * 
     * @type {JsonPrimitive}
     * @memberof JsonElement
     */
    asJsonPrimitive?: JsonPrimitive;
    /**
     * 
     * @type {boolean}
     * @memberof JsonElement
     */
    jsonArray?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonElement
     */
    asString?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonElement
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonElement
     */
    asBoolean?: boolean;
}
/**
 * 
 * @export
 * @interface JsonNull
 */
export interface JsonNull {
    /**
     * 
     * @type {JsonNull}
     * @memberof JsonNull
     */
    asJsonNull?: JsonNull;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asFloat?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asInt?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonNull
     */
    asByte?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonNull
     */
    asCharacter?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asBigDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asBigInteger?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asShort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNull
     */
    jsonPrimitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNull
     */
    jsonObject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNull
     */
    jsonNull?: boolean;
    /**
     * 
     * @type {JsonObject}
     * @memberof JsonNull
     */
    asJsonObject?: JsonObject;
    /**
     * 
     * @type {JsonArray}
     * @memberof JsonNull
     */
    asJsonArray?: JsonArray;
    /**
     * 
     * @type {JsonPrimitive}
     * @memberof JsonNull
     */
    asJsonPrimitive?: JsonPrimitive;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNull
     */
    jsonArray?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonNull
     */
    asString?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNull
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNull
     */
    asBoolean?: boolean;
}
/**
 * 
 * @export
 * @interface JsonObject
 */
export interface JsonObject {
    /**
     * 
     * @type {JsonNull}
     * @memberof JsonObject
     */
    asJsonNull?: JsonNull;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asFloat?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asInt?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonObject
     */
    asByte?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonObject
     */
    asCharacter?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asBigDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asBigInteger?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asShort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonObject
     */
    jsonPrimitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonObject
     */
    jsonObject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonObject
     */
    jsonNull?: boolean;
    /**
     * 
     * @type {JsonObject}
     * @memberof JsonObject
     */
    asJsonObject?: JsonObject;
    /**
     * 
     * @type {JsonArray}
     * @memberof JsonObject
     */
    asJsonArray?: JsonArray;
    /**
     * 
     * @type {JsonPrimitive}
     * @memberof JsonObject
     */
    asJsonPrimitive?: JsonPrimitive;
    /**
     * 
     * @type {boolean}
     * @memberof JsonObject
     */
    jsonArray?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonObject
     */
    asString?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonObject
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonObject
     */
    asBoolean?: boolean;
}
/**
 * 
 * @export
 * @interface JsonPrimitive
 */
export interface JsonPrimitive {
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asFloat?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asInt?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonPrimitive
     */
    asByte?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonPrimitive
     */
    asCharacter?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asBigDecimal?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asBigInteger?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asShort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    string?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonPrimitive
     */
    asString?: string;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonPrimitive
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    asBoolean?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    number?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    _boolean?: boolean;
    /**
     * 
     * @type {JsonNull}
     * @memberof JsonPrimitive
     */
    asJsonNull?: JsonNull;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    jsonPrimitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    jsonObject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    jsonNull?: boolean;
    /**
     * 
     * @type {JsonObject}
     * @memberof JsonPrimitive
     */
    asJsonObject?: JsonObject;
    /**
     * 
     * @type {JsonArray}
     * @memberof JsonPrimitive
     */
    asJsonArray?: JsonArray;
    /**
     * 
     * @type {JsonPrimitive}
     * @memberof JsonPrimitive
     */
    asJsonPrimitive?: JsonPrimitive;
    /**
     * 
     * @type {boolean}
     * @memberof JsonPrimitive
     */
    jsonArray?: boolean;
}
/**
 * 
 * @export
 * @interface JsonSearchResultsList
 */
export interface JsonSearchResultsList {
    /**
     * 
     * @type {number}
     * @memberof JsonSearchResultsList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonSearchResultsList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonSearchResultsList
     */
    size?: number;
    /**
     * 
     * @type {Array<JsonElement>}
     * @memberof JsonSearchResultsList
     */
    searchResults?: Array<JsonElement>;
    /**
     * 
     * @type {JsonElement}
     * @memberof JsonSearchResultsList
     */
    json?: JsonElement;
}
/**
 * 
 * @export
 * @interface Key
 */
export interface Key {
    /**
     * 
     * @type {string}
     * @memberof Key
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    lastModificationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    namespace?: string;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface Labelling
 */
export interface Labelling {
    /**
     * 
     * @type {Plan}
     * @memberof Labelling
     */
    plan?: Plan;
    /**
     * 
     * @type {Label}
     * @memberof Labelling
     */
    label?: Label;
    /**
     * 
     * @type {string}
     * @memberof Labelling
     */
    creationDate?: string;
    /**
     * 
     * @type {ResultsSummary}
     * @memberof Labelling
     */
    buildResultsSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof Labelling
     */
    lastModificationDate?: string;
    /**
     * 
     * @type {Project}
     * @memberof Labelling
     */
    project?: Project;
    /**
     * 
     * @type {string}
     * @memberof Labelling
     */
    userName?: string;
    /**
     * 
     * @type {number}
     * @memberof Labelling
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface Link
 */
export interface Link {
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof Link
     */
    rel?: string;
}
/**
 * 
 * @export
 * @interface LinkedJiraIssue
 */
export interface LinkedJiraIssue {
    /**
     * 
     * @type {ResultsSummary}
     * @memberof LinkedJiraIssue
     */
    resultsSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof LinkedJiraIssue
     */
    issueType?: LinkedJiraIssueIssueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof LinkedJiraIssue
     */
    issueKey?: string;
    /**
     * 
     * @type {JiraIssueDetails}
     * @memberof LinkedJiraIssue
     */
    jiraIssueDetails?: JiraIssueDetails;
    /**
     * 
     * @type {number}
     * @memberof LinkedJiraIssue
     */
    id?: number;
}


/**
 * @export
 */
export const LinkedJiraIssueIssueTypeEnum = {
    Relates: 'BUILD_RELATES',
    Fixes: 'BUILD_FIXES',
    Causes: 'BUILD_CAUSES'
} as const;
export type LinkedJiraIssueIssueTypeEnum = typeof LinkedJiraIssueIssueTypeEnum[keyof typeof LinkedJiraIssueIssueTypeEnum];

/**
 * 
 * @export
 * @interface ListGroupPermissions6200Response
 */
export interface ListGroupPermissions6200Response {
    /**
     * 
     * @type {string}
     * @memberof ListGroupPermissions6200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ListGroupPermissions6200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof ListGroupPermissions6200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof ListGroupPermissions6200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof ListGroupPermissions6200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestGroupPermission>}
     * @memberof ListGroupPermissions6200Response
     */
    results?: Array<RestGroupPermission>;
}
/**
 * 
 * @export
 * @interface ListRolePermissions6200Response
 */
export interface ListRolePermissions6200Response {
    /**
     * 
     * @type {string}
     * @memberof ListRolePermissions6200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ListRolePermissions6200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof ListRolePermissions6200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof ListRolePermissions6200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRolePermissions6200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestRolePermission>}
     * @memberof ListRolePermissions6200Response
     */
    results?: Array<RestRolePermission>;
}
/**
 * 
 * @export
 * @interface ListUserPermissions6200Response
 */
export interface ListUserPermissions6200Response {
    /**
     * 
     * @type {string}
     * @memberof ListUserPermissions6200Response
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUserPermissions6200Response
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof ListUserPermissions6200Response
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof ListUserPermissions6200Response
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof ListUserPermissions6200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestUserPermission>}
     * @memberof ListUserPermissions6200Response
     */
    results?: Array<RestUserPermission>;
}
/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    infoEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    errorEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    debugEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    warnEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    traceEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Log
     */
    fatalEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface ManualEncryptionRequest
 */
export interface ManualEncryptionRequest {
    /**
     * 
     * @type {string}
     * @memberof ManualEncryptionRequest
     */
    text?: string;
}
/**
 * 
 * @export
 * @interface ManualEncryptionResponse
 */
export interface ManualEncryptionResponse {
    /**
     * 
     * @type {string}
     * @memberof ManualEncryptionResponse
     */
    encryptedText?: string;
}
/**
 * 
 * @export
 * @interface MergeResultSummary
 */
export interface MergeResultSummary {
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    branchName?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    failureReason?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    branchTargetVcsKey?: string;
    /**
     * 
     * @type {number}
     * @memberof MergeResultSummary
     */
    integrationRepositoryId?: number;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    integrationRepositoryBranchName?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    integrationBranchVcsKey?: string;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    mergeResultVcsKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MergeResultSummary
     */
    emptyMerge?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    mergeState?: MergeResultSummaryMergeStateEnum;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    pushState?: MergeResultSummaryPushStateEnum;
    /**
     * 
     * @type {string}
     * @memberof MergeResultSummary
     */
    integrationStrategy?: MergeResultSummaryIntegrationStrategyEnum;
    /**
     * 
     * @type {number}
     * @memberof MergeResultSummary
     */
    id?: number;
}


/**
 * @export
 */
export const MergeResultSummaryMergeStateEnum = {
    NotAttempted: 'NOT_ATTEMPTED',
    ToBeAttempted: 'TO_BE_ATTEMPTED',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    NotRequired: 'NOT_REQUIRED'
} as const;
export type MergeResultSummaryMergeStateEnum = typeof MergeResultSummaryMergeStateEnum[keyof typeof MergeResultSummaryMergeStateEnum];

/**
 * @export
 */
export const MergeResultSummaryPushStateEnum = {
    NotAttempted: 'NOT_ATTEMPTED',
    ToBeAttempted: 'TO_BE_ATTEMPTED',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    NotRequired: 'NOT_REQUIRED'
} as const;
export type MergeResultSummaryPushStateEnum = typeof MergeResultSummaryPushStateEnum[keyof typeof MergeResultSummaryPushStateEnum];

/**
 * @export
 */
export const MergeResultSummaryIntegrationStrategyEnum = {
    BranchUpdater: 'BRANCH_UPDATER',
    GateKeeper: 'GATE_KEEPER'
} as const;
export type MergeResultSummaryIntegrationStrategyEnum = typeof MergeResultSummaryIntegrationStrategyEnum[keyof typeof MergeResultSummaryIntegrationStrategyEnum];

/**
 * 
 * @export
 * @interface MutableArtifact
 */
export interface MutableArtifact {
    /**
     * 
     * @type {string}
     * @memberof MutableArtifact
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MutableArtifact
     */
    sharedArtifact?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MutableArtifact
     */
    linkType?: string;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof MutableArtifact
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {boolean}
     * @memberof MutableArtifact
     */
    globallyStored?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MutableArtifact
     */
    archiverType?: MutableArtifactArchiverTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof MutableArtifact
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof MutableArtifact
     */
    id?: number;
}


/**
 * @export
 */
export const MutableArtifactArchiverTypeEnum = {
    None: 'NONE',
    Zip: 'ZIP'
} as const;
export type MutableArtifactArchiverTypeEnum = typeof MutableArtifactArchiverTypeEnum[keyof typeof MutableArtifactArchiverTypeEnum];

/**
 * 
 * @export
 * @interface Node
 */
export interface Node {
    /**
     * 
     * @type {Array<object>}
     * @memberof Node
     */
    children?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof Node
     */
    attributes?: Array<object>;
    /**
     * 
     * @type {Node}
     * @memberof Node
     */
    parent?: Node;
    /**
     * 
     * @type {object}
     * @memberof Node
     */
    value?: object;
    /**
     * 
     * @type {object}
     * @memberof Node
     */
    reference?: object;
    /**
     * 
     * @type {string}
     * @memberof Node
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Node
     */
    attribute?: boolean;
    /**
     * 
     * @type {ConfigurationNode}
     * @memberof Node
     */
    parentNode?: ConfigurationNode;
    /**
     * 
     * @type {number}
     * @memberof Node
     */
    childrenCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Node
     */
    defined?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Node
     */
    attributeCount?: number;
}
/**
 * 
 * @export
 * @interface NotificationManager
 */
export interface NotificationManager {
    /**
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationManager
     */
    allNotificationTypes?: Array<NotificationType>;
    /**
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationManager
     */
    systemNotificationTypes?: Array<NotificationType>;
    /**
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationManager
     */
    deploymentNotificationTypes?: Array<NotificationType>;
    /**
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationManager
     */
    planNotificationTypes?: Array<NotificationType>;
    /**
     * 
     * @type {Array<NotificationType>}
     * @memberof NotificationManager
     */
    chainNotificationTypes?: Array<NotificationType>;
    /**
     * 
     * @type {Array<NotificationRecipient>}
     * @memberof NotificationManager
     */
    allNotificationRecipients?: Array<NotificationRecipient>;
}
/**
 * 
 * @export
 * @interface NotificationRecipient
 */
export interface NotificationRecipient {
    /**
     * 
     * @type {string}
     * @memberof NotificationRecipient
     */
    editHtml?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationRecipient
     */
    viewHtml?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof NotificationRecipient
     */
    transports?: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof NotificationRecipient
     */
    recipientConfig?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationRecipient
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationRecipient
     */
    description?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof NotificationRecipient
     */
    scopes?: Set<NotificationRecipientScopesEnum>;
    /**
     * 
     * @type {WeightedDescriptor}
     * @memberof NotificationRecipient
     */
    moduleDescriptor?: WeightedDescriptor;
}


/**
 * @export
 */
export const NotificationRecipientScopesEnum = {
    Chain: 'CHAIN',
    System: 'SYSTEM',
    Deployment: 'DEPLOYMENT'
} as const;
export type NotificationRecipientScopesEnum = typeof NotificationRecipientScopesEnum[keyof typeof NotificationRecipientScopesEnum];

/**
 * 
 * @export
 * @interface NotificationRule
 */
export interface NotificationRule {
    /**
     * 
     * @type {NotificationSet}
     * @memberof NotificationRule
     */
    notificationSet?: NotificationSet;
    /**
     * 
     * @type {string}
     * @memberof NotificationRule
     */
    conditionKey?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationRule
     */
    conditionData?: string;
    /**
     * 
     * @type {object}
     * @memberof NotificationRule
     */
    notificationTypeForView?: object;
    /**
     * 
     * @type {NotificationManager}
     * @memberof NotificationRule
     */
    notificationManager?: NotificationManager;
    /**
     * 
     * @type {string}
     * @memberof NotificationRule
     */
    recipient?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationRule
     */
    recipientType?: string;
    /**
     * 
     * @type {number}
     * @memberof NotificationRule
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface NotificationSet
 */
export interface NotificationSet {
    /**
     * 
     * @type {Set<NotificationRule>}
     * @memberof NotificationSet
     */
    notificationRules?: Set<NotificationRule>;
    /**
     * 
     * @type {Array<NotificationRule>}
     * @memberof NotificationSet
     */
    sortedNotificationRules?: Array<NotificationRule>;
    /**
     * 
     * @type {string}
     * @memberof NotificationSet
     */
    notificationSetType?: NotificationSetNotificationSetTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof NotificationSet
     */
    id?: number;
}


/**
 * @export
 */
export const NotificationSetNotificationSetTypeEnum = {
    Plan: 'PLAN',
    System: 'SYSTEM'
} as const;
export type NotificationSetNotificationSetTypeEnum = typeof NotificationSetNotificationSetTypeEnum[keyof typeof NotificationSetNotificationSetTypeEnum];

/**
 * 
 * @export
 * @interface NotificationType
 */
export interface NotificationType {
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    editHtml?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    configurationData?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    viewHtml?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationType
     */
    scope?: NotificationTypeScopeEnum;
    /**
     * 
     * @type {WeightedDescriptor}
     * @memberof NotificationType
     */
    moduleDescriptor?: WeightedDescriptor;
}


/**
 * @export
 */
export const NotificationTypeScopeEnum = {
    Plan: 'PLAN',
    Chain: 'CHAIN',
    System: 'SYSTEM',
    Deployment: 'DEPLOYMENT'
} as const;
export type NotificationTypeScopeEnum = typeof NotificationTypeScopeEnum[keyof typeof NotificationTypeScopeEnum];

/**
 * 
 * @export
 * @interface Operations
 */
export interface Operations {
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    canEdit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    canView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    canViewConfiguration?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    canDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    canExecute?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Operations
     */
    cantExecuteReason?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    allowedToExecute?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    allowedToCreateVersion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Operations
     */
    allowedToSetVersionStatus?: boolean;
}
/**
 * 
 * @export
 * @interface PipelineDefinition
 */
export interface PipelineDefinition {
    /**
     * 
     * @type {boolean}
     * @memberof PipelineDefinition
     */
    dedicated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    lastModificationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    ephemeralAgentDedicationUntyped?: string;
    /**
     * 
     * @type {ResultKey}
     * @memberof PipelineDefinition
     */
    ephemeralAgentDedication?: ResultKey;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    type?: PipelineDefinitionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PipelineDefinition
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PipelineDefinition
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof PipelineDefinition
     */
    id?: number;
}


/**
 * @export
 */
export const PipelineDefinitionTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type PipelineDefinitionTypeEnum = typeof PipelineDefinitionTypeEnum[keyof typeof PipelineDefinitionTypeEnum];

/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {ResultsSummary}
     * @memberof Plan
     */
    latestResultsSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    buildKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    buildName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    suspendedFromBuilding?: boolean;
    /**
     * 
     * @type {BuildDefinitionForBuild}
     * @memberof Plan
     */
    buildDefinitionXml?: BuildDefinitionForBuild;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof Plan
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {PlanKey}
     * @memberof Plan
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof Plan
     */
    relatedLabellings?: Array<Labelling>;
    /**
     * 
     * @type {Project}
     * @memberof Plan
     */
    project?: Project;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof Plan
     */
    master?: ImmutablePlan;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    id?: number;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof Plan
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    entityType?: PlanEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    executing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    busy?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Plan
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {BuildDefinition}
     * @memberof Plan
     */
    buildDefinition?: BuildDefinition;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    currentStatus?: string;
    /**
     * 
     * @type {BuildLogger}
     * @memberof Plan
     */
    buildLogger?: BuildLogger;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    firstBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    lastBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    averageBuildDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Plan
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    planType?: PlanPlanTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    databaseId?: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof Plan
     */
    masterIdIfExists?: number;
}


/**
 * @export
 */
export const PlanEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type PlanEntityTypeEnum = typeof PlanEntityTypeEnum[keyof typeof PlanEntityTypeEnum];

/**
 * @export
 */
export const PlanPlanTypeEnum = {
    Chain: 'CHAIN',
    Job: 'JOB',
    ChainBranch: 'CHAIN_BRANCH'
} as const;
export type PlanPlanTypeEnum = typeof PlanPlanTypeEnum[keyof typeof PlanPlanTypeEnum];

/**
 * 
 * @export
 * @interface PlanKey
 */
export interface PlanKey {
    /**
     * 
     * @type {string}
     * @memberof PlanKey
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanKey
     */
    partialKey?: string;
}
/**
 * 
 * @export
 * @interface PlanRepositoryDefinition
 */
export interface PlanRepositoryDefinition {
    /**
     * 
     * @type {VcsBambooSpecsDetectionOptions}
     * @memberof PlanRepositoryDefinition
     */
    bambooSpecsDetectionOptions?: VcsBambooSpecsDetectionOptions;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {VcsLocationDefinition}
     * @memberof PlanRepositoryDefinition
     */
    vcsLocation?: VcsLocationDefinition;
    /**
     * 
     * @type {number}
     * @memberof PlanRepositoryDefinition
     */
    rootVcsRepositoryId?: number;
    /**
     * 
     * @type {VcsBranchDefinition}
     * @memberof PlanRepositoryDefinition
     */
    branch?: VcsBranchDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    linked?: boolean;
    /**
     * 
     * @type {VcsChangeDetectionOptions}
     * @memberof PlanRepositoryDefinition
     */
    vcsChangeDetectionOptions?: VcsChangeDetectionOptions;
    /**
     * 
     * @type {VcsBranchDetectionOptions}
     * @memberof PlanRepositoryDefinition
     */
    vcsBranchDetectionOptions?: VcsBranchDetectionOptions;
    /**
     * 
     * @type {VcsRepositoryViewerDefinition}
     * @memberof PlanRepositoryDefinition
     */
    viewerConfiguration?: VcsRepositoryViewerDefinition;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    legacyRepository?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlanRepositoryDefinition
     */
    parentId?: number;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof PlanRepositoryDefinition
     */
    parentOid?: BambooEntityOid;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    rootVcsLinked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    rootVcsProject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    rootVcsShared?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PlanRepositoryDefinition
     */
    entityType?: PlanRepositoryDefinitionEntityTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PlanRepositoryDefinition
     */
    shared?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlanRepositoryDefinition
     */
    projectId?: number;
    /**
     * 
     * @type {number}
     * @memberof PlanRepositoryDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PlanRepositoryDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanRepositoryDefinition
     */
    description?: string;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof PlanRepositoryDefinition
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {string}
     * @memberof PlanRepositoryDefinition
     */
    pluginKey?: string;
    /**
     * 
     * @type {number}
     * @memberof PlanRepositoryDefinition
     */
    position?: number;
}


/**
 * @export
 */
export const PlanRepositoryDefinitionEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type PlanRepositoryDefinitionEntityTypeEnum = typeof PlanRepositoryDefinitionEntityTypeEnum[keyof typeof PlanRepositoryDefinitionEntityTypeEnum];

/**
 * 
 * @export
 * @interface PlanResultKey
 */
export interface PlanResultKey {
    /**
     * 
     * @type {PlanKey}
     * @memberof PlanResultKey
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {number}
     * @memberof PlanResultKey
     */
    buildNumber?: number;
    /**
     * 
     * @type {Key}
     * @memberof PlanResultKey
     */
    entityKey?: Key;
    /**
     * 
     * @type {number}
     * @memberof PlanResultKey
     */
    resultNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PlanResultKey
     */
    resultNumberLong?: number;
    /**
     * 
     * @type {string}
     * @memberof PlanResultKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface PlanWithCustomExpirySettings
 */
export interface PlanWithCustomExpirySettings {
    /**
     * 
     * @type {string}
     * @memberof PlanWithCustomExpirySettings
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanWithCustomExpirySettings
     */
    planName?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanWithCustomExpirySettings
     */
    planKey?: string;
    /**
     * 
     * @type {Link}
     * @memberof PlanWithCustomExpirySettings
     */
    configLink?: Link;
    /**
     * 
     * @type {ExpiryConfig}
     * @memberof PlanWithCustomExpirySettings
     */
    expiryConfig?: ExpiryConfig;
}
/**
 * 
 * @export
 * @interface PodsCleanup
 */
export interface PodsCleanup {
    /**
     * 
     * @type {boolean}
     * @memberof PodsCleanup
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PodsCleanup
     */
    delay?: number;
}
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {VcsBambooSpecsSource}
     * @memberof Project
     */
    vcsBambooSpecsSource?: VcsBambooSpecsSource;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof Project
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    entityType?: ProjectEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    currentStatus?: string;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof Project
     */
    relatedLabellings?: Array<Labelling>;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    id?: number;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof Project
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {boolean}
     * @memberof Project
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description?: string;
}


/**
 * @export
 */
export const ProjectEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type ProjectEntityTypeEnum = typeof ProjectEntityTypeEnum[keyof typeof ProjectEntityTypeEnum];

/**
 * 
 * @export
 * @interface QuarantineStatistics
 */
export interface QuarantineStatistics {
    /**
     * 
     * @type {string}
     * @memberof QuarantineStatistics
     */
    quarantineDate?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineStatistics
     */
    quarantiningUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof QuarantineStatistics
     */
    quarantineExpiryDate?: string;
}
/**
 * 
 * @export
 * @interface ReindexBean
 */
export interface ReindexBean {
    /**
     * 
     * @type {boolean}
     * @memberof ReindexBean
     */
    reindexInProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReindexBean
     */
    reindexPending?: boolean;
}
/**
 * 
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    locationIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    shortKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface RepositoryChangeset
 */
export interface RepositoryChangeset {
    /**
     * 
     * @type {number}
     * @memberof RepositoryChangeset
     */
    position?: number;
    /**
     * 
     * @type {ResultsSummary}
     * @memberof RepositoryChangeset
     */
    resultsSummary?: ResultsSummary;
    /**
     * 
     * @type {Set<Commit>}
     * @memberof RepositoryChangeset
     */
    commits?: Set<Commit>;
    /**
     * 
     * @type {number}
     * @memberof RepositoryChangeset
     */
    skippedCommitsCount?: number;
    /**
     * 
     * @type {RepositoryDataEntity}
     * @memberof RepositoryChangeset
     */
    repositoryData?: RepositoryDataEntity;
    /**
     * 
     * @type {string}
     * @memberof RepositoryChangeset
     */
    changesetId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryChangeset
     */
    buildTrigger?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RepositoryChangeset
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RepositoryDataEntity
 */
export interface RepositoryDataEntity {
    /**
     * 
     * @type {number}
     * @memberof RepositoryDataEntity
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDataEntity
     */
    entityType?: RepositoryDataEntityEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDataEntity
     */
    xmlData?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryDataEntity
     */
    global?: boolean;
    /**
     * 
     * @type {RepositoryDataEntity}
     * @memberof RepositoryDataEntity
     */
    parent?: RepositoryDataEntity;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDataEntity
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDataEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDataEntity
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RepositoryDataEntity
     */
    id?: number;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof RepositoryDataEntity
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryDataEntity
     */
    markedForDeletion?: boolean;
}


/**
 * @export
 */
export const RepositoryDataEntityEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type RepositoryDataEntityEntityTypeEnum = typeof RepositoryDataEntityEntityTypeEnum[keyof typeof RepositoryDataEntityEntityTypeEnum];

/**
 * 
 * @export
 * @interface RepositoryDefinition
 */
export interface RepositoryDefinition {
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryDefinition
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDefinition
     */
    entityType?: RepositoryDefinitionEntityTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RepositoryDefinition
     */
    global?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDefinition
     */
    webRepositoryPluginKey?: string;
    /**
     * 
     * @type {WebRepositoryViewer}
     * @memberof RepositoryDefinition
     */
    webRepositoryViewer?: WebRepositoryViewer;
    /**
     * 
     * @type {HierarchicalConfiguration}
     * @memberof RepositoryDefinition
     */
    _configuration?: HierarchicalConfiguration;
    /**
     * 
     * @type {Repository}
     * @memberof RepositoryDefinition
     */
    repository?: Repository;
    /**
     * 
     * @type {number}
     * @memberof RepositoryDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDefinition
     */
    description?: string;
    /**
     * 
     * @type {Repository}
     * @memberof RepositoryDefinition
     */
    newRepositoryInstance?: Repository;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof RepositoryDefinition
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {string}
     * @memberof RepositoryDefinition
     */
    pluginKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RepositoryDefinition
     */
    position?: number;
}


/**
 * @export
 */
export const RepositoryDefinitionEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type RepositoryDefinitionEntityTypeEnum = typeof RepositoryDefinitionEntityTypeEnum[keyof typeof RepositoryDefinitionEntityTypeEnum];

/**
 * 
 * @export
 * @interface Requirement
 */
export interface Requirement {
    /**
     * 
     * @type {RequirementSet}
     * @memberof Requirement
     */
    requirementSet?: RequirementSet;
    /**
     * 
     * @type {boolean}
     * @memberof Requirement
     */
    regexMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Requirement
     */
    systemRequirement?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Requirement
     */
    readonly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Requirement
     */
    pluginModuleKey?: string;
    /**
     * 
     * @type {number}
     * @memberof Requirement
     */
    ownerId?: number;
    /**
     * 
     * @type {string}
     * @memberof Requirement
     */
    matchType?: string;
    /**
     * 
     * @type {string}
     * @memberof Requirement
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof Requirement
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Requirement
     */
    typeOfMatch?: RequirementTypeOfMatchEnum;
    /**
     * 
     * @type {string}
     * @memberof Requirement
     */
    matchValue?: string;
}


/**
 * @export
 */
export const RequirementTypeOfMatchEnum = {
    Exists: 'EXISTS',
    Equals: 'EQUALS',
    Matches: 'MATCHES'
} as const;
export type RequirementTypeOfMatchEnum = typeof RequirementTypeOfMatchEnum[keyof typeof RequirementTypeOfMatchEnum];

/**
 * 
 * @export
 * @interface RequirementOperations
 */
export interface RequirementOperations {
    /**
     * 
     * @type {boolean}
     * @memberof RequirementOperations
     */
    canDelete?: boolean;
}
/**
 * 
 * @export
 * @interface RequirementReadonlyData
 */
export interface RequirementReadonlyData {
    /**
     * 
     * @type {number}
     * @memberof RequirementReadonlyData
     */
    matchingAgents?: number;
    /**
     * 
     * @type {number}
     * @memberof RequirementReadonlyData
     */
    matchingImages?: number;
    /**
     * 
     * @type {number}
     * @memberof RequirementReadonlyData
     */
    matchingTemplates?: number;
}
/**
 * 
 * @export
 * @interface RequirementSet
 */
export interface RequirementSet {
    /**
     * 
     * @type {Set<Requirement>}
     * @memberof RequirementSet
     */
    requirements?: Set<Requirement>;
    /**
     * 
     * @type {number}
     * @memberof RequirementSet
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestAccessToken
 */
export interface RestAccessToken {
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    tokenId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestAccessToken
     */
    permissions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    rawToken?: string;
}
/**
 * 
 * @export
 * @interface RestAgent
 */
export interface RestAgent {
    /**
     * 
     * @type {number}
     * @memberof RestAgent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAgent
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAgent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAgent
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestAgent
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestAgent
     */
    link?: string;
}
/**
 * 
 * @export
 * @interface RestAgentAssignmentExecutorDetails
 */
export interface RestAgentAssignmentExecutorDetails {
    /**
     * 
     * @type {number}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    type?: RestAgentAssignmentExecutorDetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    agentType?: RestAgentAssignmentExecutorDetailsAgentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    capabilitiesMatch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestAgentAssignmentExecutorDetails
     */
    removable?: boolean;
}


/**
 * @export
 */
export const RestAgentAssignmentExecutorDetailsTypeEnum = {
    Agent: 'AGENT',
    Image: 'IMAGE',
    Ephemeral: 'EPHEMERAL'
} as const;
export type RestAgentAssignmentExecutorDetailsTypeEnum = typeof RestAgentAssignmentExecutorDetailsTypeEnum[keyof typeof RestAgentAssignmentExecutorDetailsTypeEnum];

/**
 * @export
 */
export const RestAgentAssignmentExecutorDetailsAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type RestAgentAssignmentExecutorDetailsAgentTypeEnum = typeof RestAgentAssignmentExecutorDetailsAgentTypeEnum[keyof typeof RestAgentAssignmentExecutorDetailsAgentTypeEnum];

/**
 * 
 * @export
 * @interface RestAgentCapabilities
 */
export interface RestAgentCapabilities {
    /**
     * 
     * @type {number}
     * @memberof RestAgentCapabilities
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAgentCapabilities
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAgentCapabilities
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestAgentCapabilities
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestCapability>}
     * @memberof RestAgentCapabilities
     */
    capabilities?: Array<RestCapability>;
    /**
     * 
     * @type {string}
     * @memberof RestAgentCapabilities
     */
    expand?: string;
    /**
     * 
     * @type {Array<RestCapability>}
     * @memberof RestAgentCapabilities
     */
    allElements?: Array<RestCapability>;
}
/**
 * 
 * @export
 * @interface RestAgentInformation
 */
export interface RestAgentInformation {
    /**
     * 
     * @type {RestBuildAgent}
     * @memberof RestAgentInformation
     */
    general?: RestBuildAgent;
    /**
     * 
     * @type {RestAgentCapabilities}
     * @memberof RestAgentInformation
     */
    capabilities?: RestAgentCapabilities;
    /**
     * 
     * @type {RestExecutableEnvironmentList}
     * @memberof RestAgentInformation
     */
    executableEnvironments?: RestExecutableEnvironmentList;
    /**
     * 
     * @type {RestExecutableJobList}
     * @memberof RestAgentInformation
     */
    executableJobs?: RestExecutableJobList;
    /**
     * 
     * @type {string}
     * @memberof RestAgentInformation
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestAgentInformation
     */
    link?: Link;
    /**
     * 
     * @type {RestExecutableJobList}
     * @memberof RestAgentInformation
     */
    restAgentExecutableJobs?: RestExecutableJobList;
    /**
     * 
     * @type {RestExecutableEnvironmentList}
     * @memberof RestAgentInformation
     */
    restAgentExecutableEnvironments?: RestExecutableEnvironmentList;
}
/**
 * 
 * @export
 * @interface RestAgentSummary
 */
export interface RestAgentSummary {
    /**
     * 
     * @type {string}
     * @memberof RestAgentSummary
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface RestAnonymousServerStatusInfo
 */
export interface RestAnonymousServerStatusInfo {
    /**
     * 
     * @type {string}
     * @memberof RestAnonymousServerStatusInfo
     */
    status?: RestAnonymousServerStatusInfoStatusEnum;
}


/**
 * @export
 */
export const RestAnonymousServerStatusInfoStatusEnum = {
    Setup: 'SETUP',
    Starting: 'STARTING',
    Running: 'RUNNING',
    Pausing: 'PAUSING',
    PreparingForRestart: 'PREPARING_FOR_RESTART',
    ReadyForRestart: 'READY_FOR_RESTART',
    Paused: 'PAUSED'
} as const;
export type RestAnonymousServerStatusInfoStatusEnum = typeof RestAnonymousServerStatusInfoStatusEnum[keyof typeof RestAnonymousServerStatusInfoStatusEnum];

/**
 * 
 * @export
 * @interface RestArtifactDefinition
 */
export interface RestArtifactDefinition {
    /**
     * 
     * @type {number}
     * @memberof RestArtifactDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestArtifactDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestArtifactDefinition
     */
    location?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestArtifactDefinition
     */
    copyPatterns?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestArtifactDefinition
     */
    exclusionPatterns?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RestArtifactDefinition
     */
    shared?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestArtifactDefinition
     */
    required?: boolean;
}
/**
 * 
 * @export
 * @interface RestArtifactDefinitionList
 */
export interface RestArtifactDefinitionList {
    /**
     * 
     * @type {number}
     * @memberof RestArtifactDefinitionList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestArtifactDefinitionList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestArtifactDefinitionList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestArtifactDefinitionList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestArtifactDefinition>}
     * @memberof RestArtifactDefinitionList
     */
    artifacts?: Array<RestArtifactDefinition>;
    /**
     * 
     * @type {Array<RestArtifactDefinition>}
     * @memberof RestArtifactDefinitionList
     */
    allElements?: Array<RestArtifactDefinition>;
}
/**
 * 
 * @export
 * @interface RestArtifactDefinitions
 */
export interface RestArtifactDefinitions {
    /**
     * 
     * @type {Link}
     * @memberof RestArtifactDefinitions
     */
    link?: Link;
    /**
     * 
     * @type {RestArtifactDefinitionList}
     * @memberof RestArtifactDefinitions
     */
    artifacts?: RestArtifactDefinitionList;
}
/**
 * 
 * @export
 * @interface RestArtifactHandler
 */
export interface RestArtifactHandler {
    /**
     * 
     * @type {string}
     * @memberof RestArtifactHandler
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestArtifactHandler
     */
    sharedArtifactsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestArtifactHandler
     */
    nonsharedArtifactsEnabled?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestArtifactHandler
     */
    attributes?: object;
}
/**
 * 
 * @export
 * @interface RestAuditLogConfiguration
 */
export interface RestAuditLogConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestAuditLogConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestAuditLogConfiguration
     */
    auditLoggingEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestBranch
 */
export interface RestBranch {
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestBranchList
 */
export interface RestBranchList {
    /**
     * 
     * @type {number}
     * @memberof RestBranchList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBranchList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBranchList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestBranchList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestBranch>}
     * @memberof RestBranchList
     */
    searchResults?: Array<RestBranch>;
    /**
     * 
     * @type {Array<RestBranch>}
     * @memberof RestBranchList
     */
    allElements?: Array<RestBranch>;
}
/**
 * 
 * @export
 * @interface RestBrokenPlan
 */
export interface RestBrokenPlan {
    /**
     * 
     * @type {Array<RestUserResponsible>}
     * @memberof RestBrokenPlan
     */
    responsibleUsers?: Array<RestUserResponsible>;
    /**
     * 
     * @type {string}
     * @memberof RestBrokenPlan
     */
    planResultKey?: string;
}
/**
 * 
 * @export
 * @interface RestBruteForceProtection
 */
export interface RestBruteForceProtection {
    /**
     * 
     * @type {boolean}
     * @memberof RestBruteForceProtection
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestBruteForceProtection
     */
    loginAttempts?: number;
}
/**
 * 
 * @export
 * @interface RestBuildAgent
 */
export interface RestBuildAgent {
    /**
     * 
     * @type {number}
     * @memberof RestBuildAgent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildAgent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildAgent
     */
    type?: RestBuildAgentTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildAgent
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildAgent
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildAgent
     */
    busy?: boolean;
}


/**
 * @export
 */
export const RestBuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type RestBuildAgentTypeEnum = typeof RestBuildAgentTypeEnum[keyof typeof RestBuildAgentTypeEnum];

/**
 * 
 * @export
 * @interface RestBuildArtifact
 */
export interface RestBuildArtifact {
    /**
     * 
     * @type {string}
     * @memberof RestBuildArtifact
     */
    name?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestBuildArtifact
     */
    link?: Link;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof RestBuildArtifact
     */
    producerJobKey?: PlanResultKey;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildArtifact
     */
    shared?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestBuildArtifact
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildArtifact
     */
    prettySizeDescription?: string;
}
/**
 * 
 * @export
 * @interface RestBuildArtifactList
 */
export interface RestBuildArtifactList {
    /**
     * 
     * @type {number}
     * @memberof RestBuildArtifactList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildArtifactList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildArtifactList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestBuildArtifactList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestBuildArtifact>}
     * @memberof RestBuildArtifactList
     */
    artifacts?: Array<RestBuildArtifact>;
    /**
     * 
     * @type {Array<RestBuildArtifact>}
     * @memberof RestBuildArtifactList
     */
    allElements?: Array<RestBuildArtifact>;
}
/**
 * 
 * @export
 * @interface RestBuildConcurrency
 */
export interface RestBuildConcurrency {
    /**
     * 
     * @type {string}
     * @memberof RestBuildConcurrency
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildConcurrency
     */
    buildConcurrencyEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestBuildConcurrency
     */
    defaultConcurrentBuildsNumber?: number;
}
/**
 * 
 * @export
 * @interface RestBuildLabel
 */
export interface RestBuildLabel {
    /**
     * 
     * @type {string}
     * @memberof RestBuildLabel
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestBuildLabelList
 */
export interface RestBuildLabelList {
    /**
     * 
     * @type {number}
     * @memberof RestBuildLabelList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildLabelList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildLabelList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestBuildLabelList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestBuildLabel>}
     * @memberof RestBuildLabelList
     */
    label?: Array<RestBuildLabel>;
    /**
     * 
     * @type {Array<RestBuildLabel>}
     * @memberof RestBuildLabelList
     */
    allElements?: Array<RestBuildLabel>;
}
/**
 * 
 * @export
 * @interface RestBuildLabels
 */
export interface RestBuildLabels {
    /**
     * 
     * @type {Link}
     * @memberof RestBuildLabels
     */
    link?: Link;
    /**
     * 
     * @type {RestBuildLabelList}
     * @memberof RestBuildLabels
     */
    labels?: RestBuildLabelList;
}
/**
 * 
 * @export
 * @interface RestBuildMonitoring
 */
export interface RestBuildMonitoring {
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildMonitoring
     */
    buildMonitoringEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestBuildMonitoring
     */
    buildTimeMultiplierDefault?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildMonitoring
     */
    logQuietMinutesTimeDefault?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildMonitoring
     */
    buildQueueMinutesTimeoutDefault?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestBuildMonitoring
     */
    liveLogsAreActive?: boolean;
}
/**
 * 
 * @export
 * @interface RestCapability
 */
export interface RestCapability {
    /**
     * 
     * @type {string}
     * @memberof RestCapability
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCapability
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCapability
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestChange
 */
export interface RestChange {
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    expand?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    changesetId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    commitUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    date?: string;
    /**
     * 
     * @type {RestChangeFileList}
     * @memberof RestChange
     */
    changeFiles?: RestChangeFileList;
}
/**
 * 
 * @export
 * @interface RestChangeFile
 */
export interface RestChangeFile {
    /**
     * 
     * @type {string}
     * @memberof RestChangeFile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangeFile
     */
    revision?: string;
}
/**
 * 
 * @export
 * @interface RestChangeFileList
 */
export interface RestChangeFileList {
    /**
     * 
     * @type {number}
     * @memberof RestChangeFileList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangeFileList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangeFileList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestChangeFileList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestChangeFile>}
     * @memberof RestChangeFileList
     */
    changeFiles?: Array<RestChangeFile>;
    /**
     * 
     * @type {Array<RestChangeFile>}
     * @memberof RestChangeFileList
     */
    allElements?: Array<RestChangeFile>;
}
/**
 * 
 * @export
 * @interface RestChangeList
 */
export interface RestChangeList {
    /**
     * 
     * @type {number}
     * @memberof RestChangeList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangeList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangeList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestChangeList
     */
    callback?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RestChangeList
     */
    expand?: string;
    /**
     * 
     * @type {Array<RestChange>}
     * @memberof RestChangeList
     */
    change?: Array<RestChange>;
    /**
     * 
     * @type {Array<RestChange>}
     * @memberof RestChangeList
     */
    allElements?: Array<RestChange>;
}
/**
 * 
 * @export
 * @interface RestChart
 */
export interface RestChart {
    /**
     * 
     * @type {string}
     * @memberof RestChart
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChart
     */
    imageMapName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChart
     */
    imageMap?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChart
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChart
     */
    height?: number;
}
/**
 * 
 * @export
 * @interface RestCombinedExpiryConfiguration
 */
export interface RestCombinedExpiryConfiguration {
    /**
     * 
     * @type {number}
     * @memberof RestCombinedExpiryConfiguration
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCombinedExpiryConfiguration
     */
    period?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCombinedExpiryConfiguration
     */
    buildsToKeep?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCombinedExpiryConfiguration
     */
    maximumBuildsToKeep?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCombinedExpiryConfiguration
     */
    deploymentsToKeep?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCombinedExpiryConfiguration
     */
    maximumIgnoredLogSize?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestCombinedExpiryConfiguration
     */
    expireResults?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestCombinedExpiryConfiguration
     */
    expireArtifacts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestCombinedExpiryConfiguration
     */
    expireLogs?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestCombinedExpiryConfiguration
     */
    labelsToExclude?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCombinedExpiryConfiguration
     */
    cronExpression?: string;
}
/**
 * 
 * @export
 * @interface RestCombinedExpiryStatus
 */
export interface RestCombinedExpiryStatus {
    /**
     * 
     * @type {RestExpiryStatus}
     * @memberof RestCombinedExpiryStatus
     */
    buildExpiryStatus?: RestExpiryStatus;
    /**
     * 
     * @type {RestExpiryStatus}
     * @memberof RestCombinedExpiryStatus
     */
    deploymentExpiryStatus?: RestExpiryStatus;
}
/**
 * 
 * @export
 * @interface RestComment
 */
export interface RestComment {
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    modificationDate?: string;
}
/**
 * 
 * @export
 * @interface RestCommentList
 */
export interface RestCommentList {
    /**
     * 
     * @type {number}
     * @memberof RestCommentList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestCommentList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestCommentList
     */
    comment?: Array<RestComment>;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestCommentList
     */
    allElements?: Array<RestComment>;
}
/**
 * 
 * @export
 * @interface RestComments
 */
export interface RestComments {
    /**
     * 
     * @type {Link}
     * @memberof RestComments
     */
    link?: Link;
    /**
     * 
     * @type {RestCommentList}
     * @memberof RestComments
     */
    comments?: RestCommentList;
}
/**
 * 
 * @export
 * @interface RestCreateDeploymentProjectRequest
 */
export interface RestCreateDeploymentProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateDeploymentProjectRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateDeploymentProjectRequest
     */
    name?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof RestCreateDeploymentProjectRequest
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {boolean}
     * @memberof RestCreateDeploymentProjectRequest
     */
    publicAccess?: boolean;
}
/**
 * 
 * @export
 * @interface RestCreateVersionRequest
 */
export interface RestCreateVersionRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateVersionRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateVersionRequest
     */
    nextVersionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateVersionRequest
     */
    planResultKey?: string;
}
/**
 * 
 * @export
 * @interface RestDarkFeature
 */
export interface RestDarkFeature {
    /**
     * 
     * @type {string}
     * @memberof RestDarkFeature
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestDarkFeature
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestDataVolume
 */
export interface RestDataVolume {
    /**
     * 
     * @type {string}
     * @memberof RestDataVolume
     */
    hostDirectory?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDataVolume
     */
    containerDirectory?: string;
}
/**
 * 
 * @export
 * @interface RestDedicatedAgent
 */
export interface RestDedicatedAgent {
    /**
     * 
     * @type {string}
     * @memberof RestDedicatedAgent
     */
    executableType?: RestDedicatedAgentExecutableTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof RestDedicatedAgent
     */
    executableId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDedicatedAgent
     */
    executorType?: RestDedicatedAgentExecutorTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof RestDedicatedAgent
     */
    executorId?: number;
}


/**
 * @export
 */
export const RestDedicatedAgentExecutableTypeEnum = {
    BuildProject: 'Build project',
    BuildPlan: 'Build plan',
    BuildJob: 'Build job',
    DeploymentProject: 'Deployment project',
    DeploymentEnvironment: 'Deployment environment'
} as const;
export type RestDedicatedAgentExecutableTypeEnum = typeof RestDedicatedAgentExecutableTypeEnum[keyof typeof RestDedicatedAgentExecutableTypeEnum];

/**
 * @export
 */
export const RestDedicatedAgentExecutorTypeEnum = {
    Agent: 'AGENT',
    Image: 'IMAGE',
    Ephemeral: 'EPHEMERAL'
} as const;
export type RestDedicatedAgentExecutorTypeEnum = typeof RestDedicatedAgentExecutorTypeEnum[keyof typeof RestDedicatedAgentExecutorTypeEnum];

/**
 * 
 * @export
 * @interface RestDependencies
 */
export interface RestDependencies {
    /**
     * 
     * @type {string}
     * @memberof RestDependencies
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestDependencies
     */
    link?: Link;
    /**
     * 
     * @type {RestPlanList}
     * @memberof RestDependencies
     */
    dependencies?: RestPlanList;
}
/**
 * 
 * @export
 * @interface RestDeploymentProject
 */
export interface RestDeploymentProject {
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentProject
     */
    id?: number;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof RestDeploymentProject
     */
    oid?: BambooEntityOid;
    /**
     * 
     * @type {DeploymentKey}
     * @memberof RestDeploymentProject
     */
    key?: DeploymentKey;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentProject
     */
    name?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof RestDeploymentProject
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentProject
     */
    description?: string;
    /**
     * 
     * @type {Array<RestEnvironment>}
     * @memberof RestDeploymentProject
     */
    environments?: Array<RestEnvironment>;
    /**
     * 
     * @type {RestOperations}
     * @memberof RestDeploymentProject
     */
    operations?: RestOperations;
    /**
     * 
     * @type {boolean}
     * @memberof RestDeploymentProject
     */
    repositorySpecsManaged?: boolean;
    /**
     * 
     * @type {ImmutableVcsBambooSpecsSource}
     * @memberof RestDeploymentProject
     */
    vcsBambooSpecsSource?: ImmutableVcsBambooSpecsSource;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentProject
     */
    entityType?: RestDeploymentProjectEntityTypeEnum;
}


/**
 * @export
 */
export const RestDeploymentProjectEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type RestDeploymentProjectEntityTypeEnum = typeof RestDeploymentProjectEntityTypeEnum[keyof typeof RestDeploymentProjectEntityTypeEnum];

/**
 * 
 * @export
 * @interface RestDeploymentProjectLink
 */
export interface RestDeploymentProjectLink {
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentProjectLink
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentProjectLink
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentProjectLink
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentProjectLink
     */
    environmentCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentProjectLink
     */
    upToDateEnvironmentCount?: number;
}
/**
 * 
 * @export
 * @interface RestDeploymentProjectStatusForJiraIssue
 */
export interface RestDeploymentProjectStatusForJiraIssue {
    /**
     * 
     * @type {RestDeploymentProjectLink}
     * @memberof RestDeploymentProjectStatusForJiraIssue
     */
    deploymentProject?: RestDeploymentProjectLink;
    /**
     * 
     * @type {Array<RestDeploymentVersionLink>}
     * @memberof RestDeploymentProjectStatusForJiraIssue
     */
    versions?: Array<RestDeploymentVersionLink>;
    /**
     * 
     * @type {Array<RestEnvironmentStatusOfIssue>}
     * @memberof RestDeploymentProjectStatusForJiraIssue
     */
    environments?: Array<RestEnvironmentStatusOfIssue>;
}
/**
 * 
 * @export
 * @interface RestDeploymentResult
 */
export interface RestDeploymentResult {
    /**
     * 
     * @type {DeploymentVersion}
     * @memberof RestDeploymentResult
     */
    deploymentVersion?: DeploymentVersion;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    deploymentVersionName?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentResult
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    deploymentState?: RestDeploymentResultDeploymentStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    lifeCycleState?: RestDeploymentResultLifeCycleStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    startedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    queuedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    executedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    finishedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    reasonSummary?: string;
    /**
     * 
     * @type {DeploymentResultKey}
     * @memberof RestDeploymentResult
     */
    key?: DeploymentResultKey;
    /**
     * 
     * @type {BuildAgent}
     * @memberof RestDeploymentResult
     */
    agent?: BuildAgent;
    /**
     * 
     * @type {RestOperations}
     * @memberof RestDeploymentResult
     */
    operations?: RestOperations;
    /**
     * 
     * @type {Environment}
     * @memberof RestDeploymentResult
     */
    environment?: Environment;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResult
     */
    agentType?: RestDeploymentResultAgentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentResult
     */
    environmentId?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentResult
     */
    agentId?: number;
    /**
     * 
     * @type {TriggerReason}
     * @memberof RestDeploymentResult
     */
    triggerReason?: TriggerReason;
    /**
     * 
     * @type {object}
     * @memberof RestDeploymentResult
     */
    customData?: object;
}


/**
 * @export
 */
export const RestDeploymentResultDeploymentStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type RestDeploymentResultDeploymentStateEnum = typeof RestDeploymentResultDeploymentStateEnum[keyof typeof RestDeploymentResultDeploymentStateEnum];

/**
 * @export
 */
export const RestDeploymentResultLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type RestDeploymentResultLifeCycleStateEnum = typeof RestDeploymentResultLifeCycleStateEnum[keyof typeof RestDeploymentResultLifeCycleStateEnum];

/**
 * @export
 */
export const RestDeploymentResultAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type RestDeploymentResultAgentTypeEnum = typeof RestDeploymentResultAgentTypeEnum[keyof typeof RestDeploymentResultAgentTypeEnum];

/**
 * 
 * @export
 * @interface RestDeploymentResultList
 */
export interface RestDeploymentResultList {
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentResultList
     */
    expand?: string;
    /**
     * 
     * @type {Array<RestDeploymentResult>}
     * @memberof RestDeploymentResultList
     */
    results?: Array<RestDeploymentResult>;
}
/**
 * 
 * @export
 * @interface RestDeploymentVersion
 */
export interface RestDeploymentVersion {
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentVersion
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    creatorUserName?: string;
    /**
     * 
     * @type {Array<DeploymentVersionItem>}
     * @memberof RestDeploymentVersion
     */
    items?: Array<DeploymentVersionItem>;
    /**
     * 
     * @type {RestDeploymentVersionStatus}
     * @memberof RestDeploymentVersion
     */
    versionStatus?: RestDeploymentVersionStatus;
    /**
     * 
     * @type {Operations}
     * @memberof RestDeploymentVersion
     */
    operations?: Operations;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    creatorDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    creatorGravatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    planBranchName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersion
     */
    ageZeroPoint?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentVersion
     */
    deploymentProjectId?: number;
    /**
     * 
     * @type {Array<VariableSubstitutionContext>}
     * @memberof RestDeploymentVersion
     */
    variableContext?: Array<VariableSubstitutionContext>;
}
/**
 * 
 * @export
 * @interface RestDeploymentVersionAndPlanResult
 */
export interface RestDeploymentVersionAndPlanResult {
    /**
     * 
     * @type {RestDeploymentVersion}
     * @memberof RestDeploymentVersionAndPlanResult
     */
    deploymentVersion?: RestDeploymentVersion;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof RestDeploymentVersionAndPlanResult
     */
    planResultKey?: PlanResultKey;
}
/**
 * 
 * @export
 * @interface RestDeploymentVersionLink
 */
export interface RestDeploymentVersionLink {
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionLink
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentVersionLink
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionLink
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestDeploymentVersionStatus
 */
export interface RestDeploymentVersionStatus {
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentVersionStatus
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionStatus
     */
    userName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionStatus
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionStatus
     */
    gravatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionStatus
     */
    creationDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentVersionStatus
     */
    versionState?: RestDeploymentVersionStatusVersionStateEnum;
}


/**
 * @export
 */
export const RestDeploymentVersionStatusVersionStateEnum = {
    Unknown: 'Unknown',
    Approved: 'Approved',
    Broken: 'Broken',
    Incomplete: 'Incomplete'
} as const;
export type RestDeploymentVersionStatusVersionStateEnum = typeof RestDeploymentVersionStatusVersionStateEnum[keyof typeof RestDeploymentVersionStatusVersionStateEnum];

/**
 * 
 * @export
 * @interface RestDockerPipelineConfiguration
 */
export interface RestDockerPipelineConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof RestDockerPipelineConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDockerPipelineConfiguration
     */
    dockerImage?: string;
    /**
     * 
     * @type {Array<RestDataVolume>}
     * @memberof RestDockerPipelineConfiguration
     */
    dataVolumes?: Array<RestDataVolume>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestDockerPipelineConfiguration
     */
    additionalArguments?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestElasticConfiguration
 */
export interface RestElasticConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    awsCredentialsType?: RestElasticConfigurationAwsCredentialsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    accessKeyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    secretAccessKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    privateKeyFile?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticConfiguration
     */
    certificateFile?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticConfiguration
     */
    uploadAwsIdentifier?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestElasticConfiguration
     */
    maxNumOfElasticInstances?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticConfiguration
     */
    allocatePublicIpToVpcInstances?: boolean;
    /**
     * 
     * @type {RestElasticInstanceManagement}
     * @memberof RestElasticConfiguration
     */
    elasticInstanceManagement?: RestElasticInstanceManagement;
    /**
     * 
     * @type {RestElasticTerminationConfiguration}
     * @memberof RestElasticConfiguration
     */
    elasticTerminationConfiguration?: RestElasticTerminationConfiguration;
}


/**
 * @export
 */
export const RestElasticConfigurationAwsCredentialsTypeEnum = {
    InstanceProfile: 'INSTANCE_PROFILE',
    AccessKey: 'ACCESS_KEY'
} as const;
export type RestElasticConfigurationAwsCredentialsTypeEnum = typeof RestElasticConfigurationAwsCredentialsTypeEnum[keyof typeof RestElasticConfigurationAwsCredentialsTypeEnum];

/**
 * 
 * @export
 * @interface RestElasticImageConfig
 */
export interface RestElasticImageConfig {
    /**
     * 
     * @type {number}
     * @memberof RestElasticImageConfig
     */
    configurationId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    configurationName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    configurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    imageId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestElasticImageConfig
     */
    rootFsSizeOverride?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticImageConfig
     */
    ebsEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    ebsSnapshotId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticImageConfig
     */
    useLegacyEbsHandling?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    instanceType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    product?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestElasticImageConfig
     */
    startupScripts?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    architecture?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    platform?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    rootDeviceType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    imageFilesVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    iamInstanceProfileArnOrName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticImageConfig
     */
    perSecondBillingEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticImageConfig
     */
    ebsOptimised?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticImageConfig
     */
    legacyEbsHandlingEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    availabilityZone?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticImageConfig
     */
    subnetId?: string;
}
/**
 * 
 * @export
 * @interface RestElasticInstanceLog
 */
export interface RestElasticInstanceLog {
    /**
     * 
     * @type {string}
     * @memberof RestElasticInstanceLog
     */
    instanceId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestElasticInstanceLog
     */
    log?: string;
}
/**
 * 
 * @export
 * @interface RestElasticInstanceManagement
 */
export interface RestElasticInstanceManagement {
    /**
     * 
     * @type {string}
     * @memberof RestElasticInstanceManagement
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    idleAgentShutdownDelayMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    allowedNonBambooInstances?: number;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    maxNumOfInstancesStart?: number;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    numOfBuildsInQueue?: number;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    numOfElasticBuildsInQueue?: number;
    /**
     * 
     * @type {number}
     * @memberof RestElasticInstanceManagement
     */
    avgQueueTimeMinutes?: number;
}
/**
 * 
 * @export
 * @interface RestElasticTerminationConfiguration
 */
export interface RestElasticTerminationConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof RestElasticTerminationConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestElasticTerminationConfiguration
     */
    shutdownDelay?: number;
}
/**
 * 
 * @export
 * @interface RestEnableContainer
 */
export interface RestEnableContainer {
    /**
     * 
     * @type {boolean}
     * @memberof RestEnableContainer
     */
    enable?: boolean;
}
/**
 * 
 * @export
 * @interface RestEnvironment
 */
export interface RestEnvironment {
    /**
     * 
     * @type {number}
     * @memberof RestEnvironment
     */
    id?: number;
    /**
     * 
     * @type {RestKey}
     * @memberof RestEnvironment
     */
    key?: RestKey;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironment
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironment
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironment
     */
    deploymentProjectId?: number;
    /**
     * 
     * @type {RestOperations}
     * @memberof RestEnvironment
     */
    operations?: RestOperations;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironment
     */
    position?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironment
     */
    configurationState?: RestEnvironmentConfigurationStateEnum;
    /**
     * 
     * @type {Array<TriggerDefinition>}
     * @memberof RestEnvironment
     */
    triggerDefinitions?: Array<TriggerDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof RestEnvironment
     */
    suspended?: boolean;
    /**
     * 
     * @type {ImmutableRequirementSet}
     * @memberof RestEnvironment
     */
    requirementSet?: ImmutableRequirementSet;
    /**
     * 
     * @type {object}
     * @memberof RestEnvironment
     */
    taskDefinitionsSupplier?: object;
    /**
     * 
     * @type {object}
     * @memberof RestEnvironment
     */
    triggerDefinitionsSupplier?: object;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof RestEnvironment
     */
    taskDefinitions?: Array<TaskDefinition>;
}


/**
 * @export
 */
export const RestEnvironmentConfigurationStateEnum = {
    Created: 'CREATED',
    Detailed: 'DETAILED',
    Tasked: 'TASKED'
} as const;
export type RestEnvironmentConfigurationStateEnum = typeof RestEnvironmentConfigurationStateEnum[keyof typeof RestEnvironmentConfigurationStateEnum];

/**
 * 
 * @export
 * @interface RestEnvironmentForExecutablesView
 */
export interface RestEnvironmentForExecutablesView {
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentForExecutablesView
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentForExecutablesView
     */
    projectName?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentForExecutablesView
     */
    environmentId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentForExecutablesView
     */
    environmentName?: string;
}
/**
 * 
 * @export
 * @interface RestEnvironmentStatusForDashboard
 */
export interface RestEnvironmentStatusForDashboard {
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentResultId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentState?: RestEnvironmentStatusForDashboardDeploymentStateEnum;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentVersionId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentVersionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentVersionRelatedBranchName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    deploymentVersionState?: RestEnvironmentStatusForDashboardDeploymentVersionStateEnum;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentStatusForDashboard
     */
    environmentId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    executedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    finishedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    lifeCycleState?: RestEnvironmentStatusForDashboardLifeCycleStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    queuedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    startedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    versionStatusGravatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    versionStatusUserDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusForDashboard
     */
    versionStatusUserName?: string;
}


/**
 * @export
 */
export const RestEnvironmentStatusForDashboardDeploymentStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type RestEnvironmentStatusForDashboardDeploymentStateEnum = typeof RestEnvironmentStatusForDashboardDeploymentStateEnum[keyof typeof RestEnvironmentStatusForDashboardDeploymentStateEnum];

/**
 * @export
 */
export const RestEnvironmentStatusForDashboardDeploymentVersionStateEnum = {
    Unknown: 'Unknown',
    Approved: 'Approved',
    Broken: 'Broken',
    Incomplete: 'Incomplete'
} as const;
export type RestEnvironmentStatusForDashboardDeploymentVersionStateEnum = typeof RestEnvironmentStatusForDashboardDeploymentVersionStateEnum[keyof typeof RestEnvironmentStatusForDashboardDeploymentVersionStateEnum];

/**
 * @export
 */
export const RestEnvironmentStatusForDashboardLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type RestEnvironmentStatusForDashboardLifeCycleStateEnum = typeof RestEnvironmentStatusForDashboardLifeCycleStateEnum[keyof typeof RestEnvironmentStatusForDashboardLifeCycleStateEnum];

/**
 * 
 * @export
 * @interface RestEnvironmentStatusOfIssue
 */
export interface RestEnvironmentStatusOfIssue {
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusOfIssue
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentStatusOfIssue
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusOfIssue
     */
    issueStatus?: RestEnvironmentStatusOfIssueIssueStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestEnvironmentStatusOfIssue
     */
    statusOk?: boolean;
    /**
     * 
     * @type {RestDeploymentVersionLink}
     * @memberof RestEnvironmentStatusOfIssue
     */
    version?: RestDeploymentVersionLink;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentStatusOfIssue
     */
    url?: string;
}


/**
 * @export
 */
export const RestEnvironmentStatusOfIssueIssueStatusEnum = {
    NotAvailable: 'NOT_AVAILABLE',
    PartiallyAvailable: 'PARTIALLY_AVAILABLE',
    Available: 'AVAILABLE'
} as const;
export type RestEnvironmentStatusOfIssueIssueStatusEnum = typeof RestEnvironmentStatusOfIssueIssueStatusEnum[keyof typeof RestEnvironmentStatusOfIssueIssueStatusEnum];

/**
 * 
 * @export
 * @interface RestEnvironmentWithConfigCounts
 */
export interface RestEnvironmentWithConfigCounts {
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    id?: number;
    /**
     * 
     * @type {RestKey}
     * @memberof RestEnvironmentWithConfigCounts
     */
    key?: RestKey;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentWithConfigCounts
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentWithConfigCounts
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    deploymentProjectId?: number;
    /**
     * 
     * @type {RestOperations}
     * @memberof RestEnvironmentWithConfigCounts
     */
    operations?: RestOperations;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    position?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnvironmentWithConfigCounts
     */
    configurationState?: RestEnvironmentWithConfigCountsConfigurationStateEnum;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    compatibleAgentsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    notificationsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    variablesCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestEnvironmentWithConfigCounts
     */
    triggersCount?: number;
    /**
     * 
     * @type {Array<TriggerDefinition>}
     * @memberof RestEnvironmentWithConfigCounts
     */
    triggerDefinitions?: Array<TriggerDefinition>;
    /**
     * 
     * @type {boolean}
     * @memberof RestEnvironmentWithConfigCounts
     */
    suspended?: boolean;
    /**
     * 
     * @type {ImmutableRequirementSet}
     * @memberof RestEnvironmentWithConfigCounts
     */
    requirementSet?: ImmutableRequirementSet;
    /**
     * 
     * @type {object}
     * @memberof RestEnvironmentWithConfigCounts
     */
    taskDefinitionsSupplier?: object;
    /**
     * 
     * @type {object}
     * @memberof RestEnvironmentWithConfigCounts
     */
    triggerDefinitionsSupplier?: object;
    /**
     * 
     * @type {Array<TaskDefinition>}
     * @memberof RestEnvironmentWithConfigCounts
     */
    taskDefinitions?: Array<TaskDefinition>;
}


/**
 * @export
 */
export const RestEnvironmentWithConfigCountsConfigurationStateEnum = {
    Created: 'CREATED',
    Detailed: 'DETAILED',
    Tasked: 'TASKED'
} as const;
export type RestEnvironmentWithConfigCountsConfigurationStateEnum = typeof RestEnvironmentWithConfigCountsConfigurationStateEnum[keyof typeof RestEnvironmentWithConfigCountsConfigurationStateEnum];

/**
 * 
 * @export
 * @interface RestEphemeralAgentTemplate
 */
export interface RestEphemeralAgentTemplate {
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralAgentTemplate
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEphemeralAgentTemplate
     */
    configurationId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralAgentTemplate
     */
    configurationName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralAgentTemplate
     */
    template?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestEphemeralAgentTemplate
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestEphemeralAgentTemplate
     */
    dedicated?: boolean;
}
/**
 * 
 * @export
 * @interface RestEphemeralPodLogs
 */
export interface RestEphemeralPodLogs {
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralPodLogs
     */
    podName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestEphemeralPodLogs
     */
    logs?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralPodLogs
     */
    containerName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEphemeralPodLogs
     */
    lastTimeStamp?: string;
}
/**
 * 
 * @export
 * @interface RestErrorCollection
 */
export interface RestErrorCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestErrorCollection
     */
    errors?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof RestErrorCollection
     */
    fieldErrors?: object;
}
/**
 * 
 * @export
 * @interface RestExecutableEnvironmentList
 */
export interface RestExecutableEnvironmentList {
    /**
     * 
     * @type {number}
     * @memberof RestExecutableEnvironmentList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestExecutableEnvironmentList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestExecutableEnvironmentList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestExecutableEnvironmentList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestEnvironment>}
     * @memberof RestExecutableEnvironmentList
     */
    executableEnvironments?: Array<RestEnvironment>;
    /**
     * 
     * @type {Array<RestEnvironment>}
     * @memberof RestExecutableEnvironmentList
     */
    allElements?: Array<RestEnvironment>;
}
/**
 * 
 * @export
 * @interface RestExecutableJobList
 */
export interface RestExecutableJobList {
    /**
     * 
     * @type {number}
     * @memberof RestExecutableJobList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestExecutableJobList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestExecutableJobList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestExecutableJobList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestJob>}
     * @memberof RestExecutableJobList
     */
    executableJobs?: Array<RestJob>;
    /**
     * 
     * @type {Array<RestJob>}
     * @memberof RestExecutableJobList
     */
    allElements?: Array<RestJob>;
}
/**
 * 
 * @export
 * @interface RestExpiryStatus
 */
export interface RestExpiryStatus {
    /**
     * 
     * @type {boolean}
     * @memberof RestExpiryStatus
     */
    running?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestExpiryStatus
     */
    lastRun?: number;
    /**
     * 
     * @type {string}
     * @memberof RestExpiryStatus
     */
    lastRunDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RestExpiryStatus
     */
    lastFinished?: number;
    /**
     * 
     * @type {string}
     * @memberof RestExpiryStatus
     */
    lastFinishedDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestExpiryStatus
     */
    lastRunSuccessful?: boolean;
}
/**
 * 
 * @export
 * @interface RestFavicon
 */
export interface RestFavicon {
    /**
     * 
     * @type {string}
     * @memberof RestFavicon
     */
    faviconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestFavicon
     */
    faviconType?: string;
}
/**
 * 
 * @export
 * @interface RestGeneralConfiguration
 */
export interface RestGeneralConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    instanceName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    gravatarServerUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    brokerUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    brokerClientUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof RestGeneralConfiguration
     */
    dashboardDefaultPageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RestGeneralConfiguration
     */
    branchDetectionIntervalSeconds?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestGeneralConfiguration
     */
    enableGravatarSupport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestGeneralConfiguration
     */
    enableGzipCompression?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestGeneralConfiguration
     */
    enableRssPolling?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestGeneralConfiguration
     */
    rssPollingCronExpression?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestGeneralConfiguration
     */
    quietPeriodGloballyDisabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestGlobalVariable
 */
export interface RestGlobalVariable {
    /**
     * 
     * @type {number}
     * @memberof RestGlobalVariable
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestGlobalVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGlobalVariable
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGlobalVariable
     */
    readonly link?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestGlobalVariable
     */
    readonly encrypted?: boolean;
}
/**
 * 
 * @export
 * @interface RestGlobalVariableList
 */
export interface RestGlobalVariableList {
    /**
     * 
     * @type {number}
     * @memberof RestGlobalVariableList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestGlobalVariableList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestGlobalVariableList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestGlobalVariableList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestGlobalVariable>}
     * @memberof RestGlobalVariableList
     */
    globalVariables?: Array<RestGlobalVariable>;
    /**
     * 
     * @type {Array<RestGlobalVariable>}
     * @memberof RestGlobalVariableList
     */
    allElements?: Array<RestGlobalVariable>;
}
/**
 * 
 * @export
 * @interface RestGlobalVariables
 */
export interface RestGlobalVariables {
    /**
     * 
     * @type {string}
     * @memberof RestGlobalVariables
     */
    link?: string;
    /**
     * 
     * @type {RestGlobalVariableList}
     * @memberof RestGlobalVariables
     */
    globalVariables?: RestGlobalVariableList;
}
/**
 * 
 * @export
 * @interface RestGroup
 */
export interface RestGroup {
    /**
     * 
     * @type {string}
     * @memberof RestGroup
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGroup
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestGroup
     */
    readonly editable?: boolean;
}
/**
 * 
 * @export
 * @interface RestGroupPermission
 */
export interface RestGroupPermission {
    /**
     * 
     * @type {string}
     * @memberof RestGroupPermission
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGroupPermission
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestGroupPermission
     */
    readonly editable?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestGroupPermission
     */
    permissions?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestIMServerConfiguration
 */
export interface RestIMServerConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestIMServerConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestIMServerConfiguration
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof RestIMServerConfiguration
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof RestIMServerConfiguration
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RestIMServerConfiguration
     */
    resource?: string;
    /**
     * 
     * @type {number}
     * @memberof RestIMServerConfiguration
     */
    port?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestIMServerConfiguration
     */
    requireTLSSSLConnection?: boolean;
}
/**
 * 
 * @export
 * @interface RestIdContainer
 */
export interface RestIdContainer {
    /**
     * 
     * @type {number}
     * @memberof RestIdContainer
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RestInfo
 */
export interface RestInfo {
    /**
     * 
     * @type {string}
     * @memberof RestInfo
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInfo
     */
    edition?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInfo
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInfo
     */
    buildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInfo
     */
    state?: RestInfoStateEnum;
}


/**
 * @export
 */
export const RestInfoStateEnum = {
    Setup: 'SETUP',
    Starting: 'STARTING',
    Running: 'RUNNING',
    Pausing: 'PAUSING',
    PreparingForRestart: 'PREPARING_FOR_RESTART',
    ReadyForRestart: 'READY_FOR_RESTART',
    Paused: 'PAUSED'
} as const;
export type RestInfoStateEnum = typeof RestInfoStateEnum[keyof typeof RestInfoStateEnum];

/**
 * 
 * @export
 * @interface RestJiraIssue
 */
export interface RestJiraIssue {
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    iconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    issueType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    status?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestJiraIssue
     */
    url?: Link;
}
/**
 * 
 * @export
 * @interface RestJiraIssueList
 */
export interface RestJiraIssueList {
    /**
     * 
     * @type {number}
     * @memberof RestJiraIssueList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestJiraIssueList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestJiraIssueList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestJiraIssueList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestJiraIssue>}
     * @memberof RestJiraIssueList
     */
    issue?: Array<RestJiraIssue>;
    /**
     * 
     * @type {Array<RestJiraIssue>}
     * @memberof RestJiraIssueList
     */
    allElements?: Array<RestJiraIssue>;
}
/**
 * 
 * @export
 * @interface RestJiraIssueRelatedDeploymentProjects
 */
export interface RestJiraIssueRelatedDeploymentProjects {
    /**
     * 
     * @type {Array<RestDeploymentProjectLink>}
     * @memberof RestJiraIssueRelatedDeploymentProjects
     */
    deploymentProjects?: Array<RestDeploymentProjectLink>;
}
/**
 * 
 * @export
 * @interface RestJob
 */
export interface RestJob {
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    id?: number;
    /**
     * 
     * @type {RestKey}
     * @memberof RestJob
     */
    key?: RestKey;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestJob
     */
    suspended?: boolean;
    /**
     * 
     * @type {RestKey}
     * @memberof RestJob
     */
    sourceJobKey?: RestKey;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    stageId?: number;
    /**
     * 
     * @type {RestStage}
     * @memberof RestJob
     */
    stage?: RestStage;
    /**
     * 
     * @type {RestAgentSummary}
     * @memberof RestJob
     */
    agentSummary?: RestAgentSummary;
}
/**
 * 
 * @export
 * @interface RestKey
 */
export interface RestKey {
    /**
     * 
     * @type {string}
     * @memberof RestKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface RestLinkedDeploymentProject
 */
export interface RestLinkedDeploymentProject {
    /**
     * 
     * @type {string}
     * @memberof RestLinkedDeploymentProject
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestLinkedDeploymentProject
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestLinkedDeploymentProject
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestMailConfiguration
 */
export interface RestMailConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    fromAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    subjectPrefix?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    precedenceBulkHeaderExcluded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    emailSetting?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    smtpServer?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    smtpPort?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    smtpUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    smtpPassword?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    tlsEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    jndiLocation?: string;
}
/**
 * 
 * @export
 * @interface RestManualEncryptionConfiguration
 */
export interface RestManualEncryptionConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof RestManualEncryptionConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestManualEncryptionConfiguration
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestManualEncryptionConfiguration
     */
    limitUnit?: RestManualEncryptionConfigurationLimitUnitEnum;
}


/**
 * @export
 */
export const RestManualEncryptionConfigurationLimitUnitEnum = {
    Nanoseconds: 'NANOSECONDS',
    Microseconds: 'MICROSECONDS',
    Milliseconds: 'MILLISECONDS',
    Seconds: 'SECONDS',
    Minutes: 'MINUTES',
    Hours: 'HOURS',
    Days: 'DAYS'
} as const;
export type RestManualEncryptionConfigurationLimitUnitEnum = typeof RestManualEncryptionConfigurationLimitUnitEnum[keyof typeof RestManualEncryptionConfigurationLimitUnitEnum];

/**
 * 
 * @export
 * @interface RestNamingPreview
 */
export interface RestNamingPreview {
    /**
     * 
     * @type {string}
     * @memberof RestNamingPreview
     */
    nextVersionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNamingPreview
     */
    subsequentVersionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNamingPreview
     */
    errorMessage?: string;
}
/**
 * 
 * @export
 * @interface RestNewUser
 */
export interface RestNewUser {
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    passwordConfirm?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNewUser
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface RestNodeStatus
 */
export interface RestNodeStatus {
    /**
     * 
     * @type {string}
     * @memberof RestNodeStatus
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeStatus
     */
    nodeName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeStatus
     */
    lastHeartbeat?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestNodeStatus
     */
    primary?: boolean;
}
/**
 * 
 * @export
 * @interface RestOperations
 */
export interface RestOperations {
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    canView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    canViewConfiguration?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    canEdit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    canDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    allowedToExecute?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    canExecute?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestOperations
     */
    cantExecuteReason?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    allowedToCreateVersion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestOperations
     */
    allowedToSetVersionStatus?: boolean;
}
/**
 * 
 * @export
 * @interface RestPageModelPlanWithCustomExpirySettings
 */
export interface RestPageModelPlanWithCustomExpirySettings {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    prev?: string;
    /**
     * 
     * @type {Array<PlanWithCustomExpirySettings>}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    results?: Array<PlanWithCustomExpirySettings>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelPlanWithCustomExpirySettings
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestAccessToken
 */
export interface RestPageModelRestAccessToken {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestAccessToken
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAccessToken
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAccessToken
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestAccessToken>}
     * @memberof RestPageModelRestAccessToken
     */
    results?: Array<RestAccessToken>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAccessToken
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestAccessToken
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestAgent
 */
export interface RestPageModelRestAgent {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestAgent
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAgent
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAgent
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestAgent>}
     * @memberof RestPageModelRestAgent
     */
    results?: Array<RestAgent>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestAgent
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestAgent
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestBrokenPlan
 */
export interface RestPageModelRestBrokenPlan {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestBrokenPlan
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestBrokenPlan
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestBrokenPlan
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestBrokenPlan>}
     * @memberof RestPageModelRestBrokenPlan
     */
    results?: Array<RestBrokenPlan>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestBrokenPlan
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestBrokenPlan
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestCapability
 */
export interface RestPageModelRestCapability {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestCapability
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestCapability
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestCapability
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestCapability>}
     * @memberof RestPageModelRestCapability
     */
    results?: Array<RestCapability>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestCapability
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestCapability
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestDeploymentProject
 */
export interface RestPageModelRestDeploymentProject {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestDeploymentProject
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestDeploymentProject
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestDeploymentProject
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestDeploymentProject>}
     * @memberof RestPageModelRestDeploymentProject
     */
    results?: Array<RestDeploymentProject>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestDeploymentProject
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestDeploymentProject
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestEnvironmentForExecutablesView
 */
export interface RestPageModelRestEnvironmentForExecutablesView {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestEnvironmentForExecutablesView>}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    results?: Array<RestEnvironmentForExecutablesView>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestEnvironmentForExecutablesView
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestEphemeralAgentTemplate
 */
export interface RestPageModelRestEphemeralAgentTemplate {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestEphemeralAgentTemplate>}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    results?: Array<RestEphemeralAgentTemplate>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestEphemeralAgentTemplate
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestGroup
 */
export interface RestPageModelRestGroup {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestGroup
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroup
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroup
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestGroup>}
     * @memberof RestPageModelRestGroup
     */
    results?: Array<RestGroup>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroup
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestGroup
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestGroupPermission
 */
export interface RestPageModelRestGroupPermission {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestGroupPermission
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroupPermission
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroupPermission
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestGroupPermission>}
     * @memberof RestPageModelRestGroupPermission
     */
    results?: Array<RestGroupPermission>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestGroupPermission
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestGroupPermission
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestJob
 */
export interface RestPageModelRestJob {
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestJob
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestJob
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestJob
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestJob
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestJob
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestJob>}
     * @memberof RestPageModelRestJob
     */
    results?: Array<RestJob>;
}
/**
 * 
 * @export
 * @interface RestPageModelRestProjectRepository
 */
export interface RestPageModelRestProjectRepository {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestProjectRepository
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestProjectRepository
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestProjectRepository
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestProjectRepository>}
     * @memberof RestPageModelRestProjectRepository
     */
    results?: Array<RestProjectRepository>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestProjectRepository
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestProjectRepository
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestRolePermission
 */
export interface RestPageModelRestRolePermission {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestRolePermission
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestRolePermission
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestRolePermission
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestRolePermission>}
     * @memberof RestPageModelRestRolePermission
     */
    results?: Array<RestRolePermission>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestRolePermission
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestRolePermission
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestSharedCredential
 */
export interface RestPageModelRestSharedCredential {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestSharedCredential
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestSharedCredential
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestSharedCredential
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestSharedCredential>}
     * @memberof RestPageModelRestSharedCredential
     */
    results?: Array<RestSharedCredential>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestSharedCredential
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestSharedCredential
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestStage
 */
export interface RestPageModelRestStage {
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestStage
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestStage
     */
    prev?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestStage
     */
    next?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestStage
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestStage
     */
    limit?: number;
    /**
     * 
     * @type {Array<RestStage>}
     * @memberof RestPageModelRestStage
     */
    results?: Array<RestStage>;
}
/**
 * 
 * @export
 * @interface RestPageModelRestUser
 */
export interface RestPageModelRestUser {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUser
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUser
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUser
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestUser>}
     * @memberof RestPageModelRestUser
     */
    results?: Array<RestUser>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUser
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUser
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestUserAlias
 */
export interface RestPageModelRestUserAlias {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserAlias
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserAlias
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserAlias
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestUserAlias>}
     * @memberof RestPageModelRestUserAlias
     */
    results?: Array<RestUserAlias>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserAlias
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserAlias
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestUserDetails
 */
export interface RestPageModelRestUserDetails {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserDetails
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserDetails
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserDetails
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestUserDetails>}
     * @memberof RestPageModelRestUserDetails
     */
    results?: Array<RestUserDetails>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserDetails
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserDetails
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageModelRestUserPermission
 */
export interface RestPageModelRestUserPermission {
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserPermission
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserPermission
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserPermission
     */
    prev?: string;
    /**
     * 
     * @type {Array<RestUserPermission>}
     * @memberof RestPageModelRestUserPermission
     */
    results?: Array<RestUserPermission>;
    /**
     * 
     * @type {string}
     * @memberof RestPageModelRestUserPermission
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPageModelRestUserPermission
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPlan
 */
export interface RestPlan {
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    expand?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    projectName?: string;
    /**
     * 
     * @type {RestProject}
     * @memberof RestPlan
     */
    project?: RestProject;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    parentName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    parentKey?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestPlan
     */
    parentLink?: Link;
    /**
     * 
     * @type {RestPlan}
     * @memberof RestPlan
     */
    master?: RestPlan;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    stageName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    planKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    planName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    buildName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    shortKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlan
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlan
     */
    enabled?: boolean;
    /**
     * 
     * @type {RestKey}
     * @memberof RestPlan
     */
    restPlanKey?: RestKey;
    /**
     * 
     * @type {Link}
     * @memberof RestPlan
     */
    link?: Link;
    /**
     * 
     * @type {number}
     * @memberof RestPlan
     */
    averageBuildTimeInSeconds?: number;
    /**
     * 
     * @type {RestPlanActionList}
     * @memberof RestPlan
     */
    actions?: RestPlanActionList;
    /**
     * 
     * @type {RestStageList}
     * @memberof RestPlan
     */
    stages?: RestStageList;
    /**
     * 
     * @type {RestPlanBranchList}
     * @memberof RestPlan
     */
    branches?: RestPlanBranchList;
    /**
     * 
     * @type {RestVariableDefinitionContextList}
     * @memberof RestPlan
     */
    variableContext?: RestVariableDefinitionContextList;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlan
     */
    favourite?: boolean;
    /**
     * 
     * @type {User}
     * @memberof RestPlan
     */
    currentRestUser?: User;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlan
     */
    building?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlan
     */
    active?: boolean;
}
/**
 * 
 * @export
 * @interface RestPlanAction
 */
export interface RestPlanAction {
    /**
     * 
     * @type {string}
     * @memberof RestPlanAction
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestPlanActionList
 */
export interface RestPlanActionList {
    /**
     * 
     * @type {number}
     * @memberof RestPlanActionList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanActionList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanActionList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestPlanActionList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestPlanAction>}
     * @memberof RestPlanActionList
     */
    allElements?: Array<RestPlanAction>;
}
/**
 * 
 * @export
 * @interface RestPlanBranch
 */
export interface RestPlanBranch {
    /**
     * 
     * @type {string}
     * @memberof RestPlanBranch
     */
    branchKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanBranch
     */
    branchName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlanBranch
     */
    favourite?: boolean;
}
/**
 * 
 * @export
 * @interface RestPlanBranchList
 */
export interface RestPlanBranchList {
    /**
     * 
     * @type {number}
     * @memberof RestPlanBranchList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanBranchList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanBranchList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestPlanBranchList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestPlanBranch>}
     * @memberof RestPlanBranchList
     */
    branches?: Array<RestPlanBranch>;
    /**
     * 
     * @type {Array<RestPlanBranch>}
     * @memberof RestPlanBranchList
     */
    allElements?: Array<RestPlanBranch>;
}
/**
 * 
 * @export
 * @interface RestPlanConfig
 */
export interface RestPlanConfig {
    /**
     * 
     * @type {string}
     * @memberof RestPlanConfig
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPlanConfig
     */
    id?: number;
    /**
     * 
     * @type {RestKey}
     * @memberof RestPlanConfig
     */
    key?: RestKey;
    /**
     * 
     * @type {string}
     * @memberof RestPlanConfig
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanConfig
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlanConfig
     */
    suspended?: boolean;
    /**
     * 
     * @type {RestPageModelRestStage}
     * @memberof RestPlanConfig
     */
    stages?: RestPageModelRestStage;
    /**
     * 
     * @type {RestProject}
     * @memberof RestPlanConfig
     */
    project?: RestProject;
}
/**
 * 
 * @export
 * @interface RestPlanIdentifier
 */
export interface RestPlanIdentifier {
    /**
     * 
     * @type {number}
     * @memberof RestPlanIdentifier
     */
    id?: number;
    /**
     * 
     * @type {RestProjectIdentifier}
     * @memberof RestPlanIdentifier
     */
    project?: RestProjectIdentifier;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    planType?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    planKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    buildKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPlanIdentifier
     */
    buildName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPlanIdentifier
     */
    suspendedFromBuilding?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPlanIdentifier
     */
    masterId?: number;
}
/**
 * 
 * @export
 * @interface RestPlanLabel
 */
export interface RestPlanLabel {
    /**
     * 
     * @type {string}
     * @memberof RestPlanLabel
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestPlanLabelList
 */
export interface RestPlanLabelList {
    /**
     * 
     * @type {Array<RestPlanLabel>}
     * @memberof RestPlanLabelList
     */
    allElements?: Array<RestPlanLabel>;
    /**
     * 
     * @type {object}
     * @memberof RestPlanLabelList
     */
    callback?: object;
    /**
     * 
     * @type {Array<RestPlanLabel>}
     * @memberof RestPlanLabelList
     */
    label?: Array<RestPlanLabel>;
    /**
     * 
     * @type {number}
     * @memberof RestPlanLabelList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanLabelList
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanLabelList
     */
    startIndex?: number;
}
/**
 * 
 * @export
 * @interface RestPlanLabels
 */
export interface RestPlanLabels {
    /**
     * 
     * @type {RestPlanLabelList}
     * @memberof RestPlanLabels
     */
    labels?: RestPlanLabelList;
    /**
     * 
     * @type {Link}
     * @memberof RestPlanLabels
     */
    link?: Link;
}
/**
 * 
 * @export
 * @interface RestPlanList
 */
export interface RestPlanList {
    /**
     * 
     * @type {number}
     * @memberof RestPlanList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPlanList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestPlanList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestPlan>}
     * @memberof RestPlanList
     */
    plans?: Array<RestPlan>;
    /**
     * 
     * @type {Array<RestPlan>}
     * @memberof RestPlanList
     */
    allElements?: Array<RestPlan>;
}
/**
 * 
 * @export
 * @interface RestPlans
 */
export interface RestPlans {
    /**
     * 
     * @type {Link}
     * @memberof RestPlans
     */
    link?: Link;
    /**
     * 
     * @type {RestPlanList}
     * @memberof RestPlans
     */
    plans?: RestPlanList;
}
/**
 * 
 * @export
 * @interface RestProgress
 */
export interface RestProgress {
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    expand?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProgress
     */
    percentageCompleted?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    percentageCompletedPretty?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    prettyTimeRemaining?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    prettyTimeRemainingLong?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProgress
     */
    averageBuildDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    prettyAverageBuildDuration?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProgress
     */
    buildTime?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    prettyBuildTime?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    startedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    startedTimeFormatted?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    prettyStartedTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestProgress
     */
    underAverageTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestProgress
     */
    valid?: boolean;
}
/**
 * 
 * @export
 * @interface RestProject
 */
export interface RestProject {
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestProject
     */
    publicAccess?: boolean;
}
/**
 * 
 * @export
 * @interface RestProjectIdentifier
 */
export interface RestProjectIdentifier {
    /**
     * 
     * @type {string}
     * @memberof RestProjectIdentifier
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectIdentifier
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectIdentifier
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface RestProjectList
 */
export interface RestProjectList {
    /**
     * 
     * @type {number}
     * @memberof RestProjectList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestProjectList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestProjectList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestProjectList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestProject>}
     * @memberof RestProjectList
     */
    allElements?: Array<RestProject>;
}
/**
 * 
 * @export
 * @interface RestProjectRepository
 */
export interface RestProjectRepository {
    /**
     * 
     * @type {number}
     * @memberof RestProjectRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProjectRepository
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectRepository
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectRepository
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectRepository
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectRepository
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestProjectRepository
     */
    admin?: boolean;
}
/**
 * 
 * @export
 * @interface RestProjects
 */
export interface RestProjects {
    /**
     * 
     * @type {Link}
     * @memberof RestProjects
     */
    link?: Link;
    /**
     * 
     * @type {RestProjectList}
     * @memberof RestProjects
     */
    projects?: RestProjectList;
}
/**
 * 
 * @export
 * @interface RestQuarantineConfig
 */
export interface RestQuarantineConfig {
    /**
     * 
     * @type {string}
     * @memberof RestQuarantineConfig
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestQuarantineConfig
     */
    quarantineTestsEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestQuarantineExpiry
 */
export interface RestQuarantineExpiry {
    /**
     * 
     * @type {number}
     * @memberof RestQuarantineExpiry
     */
    expiryDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestQuarantineExpiry
     */
    expiryPeriod?: string;
}
/**
 * 
 * @export
 * @interface RestQueuedBuild
 */
export interface RestQueuedBuild {
    /**
     * 
     * @type {string}
     * @memberof RestQueuedBuild
     */
    expand?: string;
    /**
     * 
     * @type {string}
     * @memberof RestQueuedBuild
     */
    planKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RestQueuedBuild
     */
    buildNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof RestQueuedBuild
     */
    buildResultKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestQueuedBuild
     */
    triggerReason?: string;
    /**
     * 
     * @type {RestChangeList}
     * @memberof RestQueuedBuild
     */
    changes?: RestChangeList;
    /**
     * 
     * @type {Link}
     * @memberof RestQueuedBuild
     */
    link?: Link;
    /**
     * 
     * @type {Array<RepositoryChangeset>}
     * @memberof RestQueuedBuild
     */
    changesets?: Array<RepositoryChangeset>;
}
/**
 * 
 * @export
 * @interface RestQueuedBuildList
 */
export interface RestQueuedBuildList {
    /**
     * 
     * @type {number}
     * @memberof RestQueuedBuildList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestQueuedBuildList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestQueuedBuildList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestQueuedBuildList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestQueuedBuild>}
     * @memberof RestQueuedBuildList
     */
    queuedBuild?: Array<RestQueuedBuild>;
    /**
     * 
     * @type {Array<RestQueuedBuild>}
     * @memberof RestQueuedBuildList
     */
    allElements?: Array<RestQueuedBuild>;
}
/**
 * 
 * @export
 * @interface RestQueuedBuilds
 */
export interface RestQueuedBuilds {
    /**
     * 
     * @type {string}
     * @memberof RestQueuedBuilds
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestQueuedBuilds
     */
    link?: Link;
    /**
     * 
     * @type {RestQueuedBuildList}
     * @memberof RestQueuedBuilds
     */
    queuedBuilds?: RestQueuedBuildList;
}
/**
 * 
 * @export
 * @interface RestQueuedDeployment
 */
export interface RestQueuedDeployment {
    /**
     * 
     * @type {number}
     * @memberof RestQueuedDeployment
     */
    deploymentResultId?: number;
}
/**
 * 
 * @export
 * @interface RestQueuedDeploymentList
 */
export interface RestQueuedDeploymentList {
    /**
     * 
     * @type {number}
     * @memberof RestQueuedDeploymentList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestQueuedDeploymentList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestQueuedDeploymentList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestQueuedDeploymentList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestQueuedDeployment>}
     * @memberof RestQueuedDeploymentList
     */
    queuedDeployments?: Array<RestQueuedDeployment>;
    /**
     * 
     * @type {Array<RestQueuedDeployment>}
     * @memberof RestQueuedDeploymentList
     */
    allElements?: Array<RestQueuedDeployment>;
}
/**
 * 
 * @export
 * @interface RestQueuedDeployments
 */
export interface RestQueuedDeployments {
    /**
     * 
     * @type {string}
     * @memberof RestQueuedDeployments
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestQueuedDeployments
     */
    link?: Link;
    /**
     * 
     * @type {RestQueuedDeploymentList}
     * @memberof RestQueuedDeployments
     */
    queuedDeployments?: RestQueuedDeploymentList;
}
/**
 * 
 * @export
 * @interface RestQuickFilter
 */
export interface RestQuickFilter {
    /**
     * 
     * @type {number}
     * @memberof RestQuickFilter
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestQuickFilter
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestQuickFilter
     */
    position?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestQuickFilter
     */
    hasRules?: boolean;
}
/**
 * 
 * @export
 * @interface RestRemoteAgentAuthentication
 */
export interface RestRemoteAgentAuthentication {
    /**
     * 
     * @type {boolean}
     * @memberof RestRemoteAgentAuthentication
     */
    approved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentAuthentication
     */
    ip?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestRemoteAgentAuthentication
     */
    ipPatterns?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentAuthentication
     */
    uuid?: string;
}
/**
 * 
 * @export
 * @interface RestRemoteAgentCapability
 */
export interface RestRemoteAgentCapability {
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentCapability
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentCapability
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentCapability
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentCapability
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestRemoteAgentConfiguration
 */
export interface RestRemoteAgentConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestRemoteAgentConfiguration
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRemoteAgentConfiguration
     */
    remoteAgentsSupported?: boolean;
}
/**
 * 
 * @export
 * @interface RestReport
 */
export interface RestReport {
    /**
     * 
     * @type {string}
     * @memberof RestReport
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestReport
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestReportList
 */
export interface RestReportList {
    /**
     * 
     * @type {number}
     * @memberof RestReportList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestReportList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestReportList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestReportList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestReport>}
     * @memberof RestReportList
     */
    reports?: Array<RestReport>;
    /**
     * 
     * @type {Array<RestReport>}
     * @memberof RestReportList
     */
    allElements?: Array<RestReport>;
}
/**
 * 
 * @export
 * @interface RestReports
 */
export interface RestReports {
    /**
     * 
     * @type {string}
     * @memberof RestReports
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestReports
     */
    link?: Link;
    /**
     * 
     * @type {RestReportList}
     * @memberof RestReports
     */
    reports?: RestReportList;
}
/**
 * 
 * @export
 * @interface RestRepository
 */
export interface RestRepository {
    /**
     * 
     * @type {number}
     * @memberof RestRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    url?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    rssEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    projectName?: string;
}
/**
 * 
 * @export
 * @interface RestRepositoryConnectionResult
 */
export interface RestRepositoryConnectionResult {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRepositoryConnectionResult
     */
    connectionErrors?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestRepositoryList
 */
export interface RestRepositoryList {
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestRepositoryList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof RestRepositoryList
     */
    searchResults?: Array<RestRepository>;
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof RestRepositoryList
     */
    allElements?: Array<RestRepository>;
}
/**
 * 
 * @export
 * @interface RestRepositoryMinimal
 */
export interface RestRepositoryMinimal {
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryMinimal
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMinimal
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMinimal
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestRepositoryUsageModel
 */
export interface RestRepositoryUsageModel {
    /**
     * 
     * @type {Array<RestPlanIdentifier>}
     * @memberof RestRepositoryUsageModel
     */
    plans?: Array<RestPlanIdentifier>;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryUsageModel
     */
    inaccessiblePlansCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryUsageModel
     */
    totalPlans?: number;
    /**
     * 
     * @type {Array<RestEnvironment>}
     * @memberof RestRepositoryUsageModel
     */
    environments?: Array<RestEnvironment>;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryUsageModel
     */
    inaccessibleEnvironmentsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryUsageModel
     */
    totalEnvironments?: number;
}
/**
 * 
 * @export
 * @interface RestRequirement
 */
export interface RestRequirement {
    /**
     * 
     * @type {string}
     * @memberof RestRequirement
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestRequirement
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRequirement
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRequirement
     */
    matchValue?: string;
    /**
     * 
     * @type {RequirementReadonlyData}
     * @memberof RestRequirement
     */
    readonlyData?: RequirementReadonlyData;
    /**
     * 
     * @type {RequirementOperations}
     * @memberof RestRequirement
     */
    operations?: RequirementOperations;
    /**
     * 
     * @type {string}
     * @memberof RestRequirement
     */
    typeOfMatch?: RestRequirementTypeOfMatchEnum;
}


/**
 * @export
 */
export const RestRequirementTypeOfMatchEnum = {
    Exists: 'EXISTS',
    Equals: 'EQUALS',
    Matches: 'MATCHES'
} as const;
export type RestRequirementTypeOfMatchEnum = typeof RestRequirementTypeOfMatchEnum[keyof typeof RestRequirementTypeOfMatchEnum];

/**
 * 
 * @export
 * @interface RestResource
 */
export interface RestResource {
    /**
     * 
     * @type {string}
     * @memberof RestResource
     */
    name?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestResource
     */
    link?: Link;
}
/**
 * 
 * @export
 * @interface RestResourceList
 */
export interface RestResourceList {
    /**
     * 
     * @type {number}
     * @memberof RestResourceList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestResourceList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestResourceList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestResourceList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestResource>}
     * @memberof RestResourceList
     */
    resources?: Array<RestResource>;
    /**
     * 
     * @type {Array<RestResource>}
     * @memberof RestResourceList
     */
    allElements?: Array<RestResource>;
}
/**
 * 
 * @export
 * @interface RestResources
 */
export interface RestResources {
    /**
     * 
     * @type {Link}
     * @memberof RestResources
     */
    link?: Link;
    /**
     * 
     * @type {RestResourceList}
     * @memberof RestResources
     */
    resources?: RestResourceList;
}
/**
 * 
 * @export
 * @interface RestResultList
 */
export interface RestResultList {
    /**
     * 
     * @type {number}
     * @memberof RestResultList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestResultList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestResultList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestResultList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<Result>}
     * @memberof RestResultList
     */
    results?: Array<Result>;
    /**
     * 
     * @type {Array<Result>}
     * @memberof RestResultList
     */
    allElements?: Array<Result>;
}
/**
 * 
 * @export
 * @interface RestResultStatus
 */
export interface RestResultStatus {
    /**
     * 
     * @type {string}
     * @memberof RestResultStatus
     */
    planResultKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestResultStatus
     */
    finished?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestResultStatus
     */
    prettyQueuedTime?: string;
    /**
     * 
     * @type {RestProgress}
     * @memberof RestResultStatus
     */
    progress?: RestProgress;
}
/**
 * 
 * @export
 * @interface RestResults
 */
export interface RestResults {
    /**
     * 
     * @type {RestResultList}
     * @memberof RestResults
     */
    results?: RestResultList;
    /**
     * 
     * @type {string}
     * @memberof RestResults
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof RestResults
     */
    link?: Link;
}
/**
 * 
 * @export
 * @interface RestRolePermission
 */
export interface RestRolePermission {
    /**
     * 
     * @type {string}
     * @memberof RestRolePermission
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRolePermission
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRolePermission
     */
    permissions?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestRssSecurityConfiguration
 */
export interface RestRssSecurityConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof RestRssSecurityConfiguration
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestRssSecurityConfiguration
     */
    executeSpecsInDocker?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRssSecurityConfiguration
     */
    dockerImage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRssSecurityConfiguration
     */
    mountLocalMavenDirectory?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRssSecurityConfiguration
     */
    localMavenDirectory?: string;
}
/**
 * 
 * @export
 * @interface RestScheduledJob
 */
export interface RestScheduledJob {
    /**
     * 
     * @type {string}
     * @memberof RestScheduledJob
     */
    groupName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestScheduledJob
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestScheduledJob
     */
    readonly nextScheduledTime?: string;
    /**
     * 
     * @type {string}
     * @memberof RestScheduledJob
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface RestSecuritySettings
 */
export interface RestSecuritySettings {
    /**
     * 
     * @type {RestSignUp}
     * @memberof RestSecuritySettings
     */
    signUp?: RestSignUp;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    displayContactDetailsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    restrictedAdministratorRoleEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    soxComplianceModeEnabled?: boolean;
    /**
     * 
     * @type {RestBruteForceProtection}
     * @memberof RestSecuritySettings
     */
    bruteForceProtection?: RestBruteForceProtection;
    /**
     * 
     * @type {RestXsrfProtection}
     * @memberof RestSecuritySettings
     */
    xsrfProtection?: RestXsrfProtection;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    resolveArtifactsContentTypeByExtensionEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    manageAcceptedSshHostKeys?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    showAuthorsDetailsToUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    unauthenticatedRemoteTriggerAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSecuritySettings
     */
    agentAssignmentModificationByUsersAllowed?: boolean;
    /**
     * 
     * @type {RestRssSecurityConfiguration}
     * @memberof RestSecuritySettings
     */
    rssSecurityConfiguration?: RestRssSecurityConfiguration;
    /**
     * 
     * @type {RestManualEncryptionConfiguration}
     * @memberof RestSecuritySettings
     */
    manualEncryptionConfiguration?: RestManualEncryptionConfiguration;
}
/**
 * 
 * @export
 * @interface RestServerNodesInfo
 */
export interface RestServerNodesInfo {
    /**
     * 
     * @type {string}
     * @memberof RestServerNodesInfo
     */
    state?: RestServerNodesInfoStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestServerNodesInfo
     */
    setByUser?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestServerNodesInfo
     */
    reindexInProgress?: boolean;
    /**
     * 
     * @type {Array<RestNodeStatus>}
     * @memberof RestServerNodesInfo
     */
    nodeStatuses?: Array<RestNodeStatus>;
}


/**
 * @export
 */
export const RestServerNodesInfoStateEnum = {
    Setup: 'SETUP',
    Starting: 'STARTING',
    Running: 'RUNNING',
    Pausing: 'PAUSING',
    PreparingForRestart: 'PREPARING_FOR_RESTART',
    ReadyForRestart: 'READY_FOR_RESTART',
    Paused: 'PAUSED'
} as const;
export type RestServerNodesInfoStateEnum = typeof RestServerNodesInfoStateEnum[keyof typeof RestServerNodesInfoStateEnum];

/**
 * 
 * @export
 * @interface RestServerStatusInfo
 */
export interface RestServerStatusInfo {
    /**
     * 
     * @type {string}
     * @memberof RestServerStatusInfo
     */
    state?: RestServerStatusInfoStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestServerStatusInfo
     */
    setByUser?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestServerStatusInfo
     */
    reindexInProgress?: boolean;
}


/**
 * @export
 */
export const RestServerStatusInfoStateEnum = {
    Setup: 'SETUP',
    Starting: 'STARTING',
    Running: 'RUNNING',
    Pausing: 'PAUSING',
    PreparingForRestart: 'PREPARING_FOR_RESTART',
    ReadyForRestart: 'READY_FOR_RESTART',
    Paused: 'PAUSED'
} as const;
export type RestServerStatusInfoStateEnum = typeof RestServerStatusInfoStateEnum[keyof typeof RestServerStatusInfoStateEnum];

/**
 * 
 * @export
 * @interface RestSharedCredential
 */
export interface RestSharedCredential {
    /**
     * 
     * @type {string}
     * @memberof RestSharedCredential
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSharedCredential
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSharedCredential
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSharedCredential
     */
    projectKey?: string;
    /**
     * 
     * @type {object}
     * @memberof RestSharedCredential
     */
    attributes?: object;
}
/**
 * 
 * @export
 * @interface RestSignUp
 */
export interface RestSignUp {
    /**
     * 
     * @type {boolean}
     * @memberof RestSignUp
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestSignUp
     */
    enabledCaptcha?: boolean;
}
/**
 * 
 * @export
 * @interface RestStage
 */
export interface RestStage {
    /**
     * 
     * @type {string}
     * @memberof RestStage
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestStage
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestStage
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestStage
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestStage
     */
    manual?: boolean;
    /**
     * 
     * @type {RestPageModelRestJob}
     * @memberof RestStage
     */
    jobs?: RestPageModelRestJob;
    /**
     * 
     * @type {RestPlanConfig}
     * @memberof RestStage
     */
    plan?: RestPlanConfig;
    /**
     * 
     * @type {number}
     * @memberof RestStage
     */
    index?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestStage
     */
    _final?: boolean;
}
/**
 * 
 * @export
 * @interface RestStageList
 */
export interface RestStageList {
    /**
     * 
     * @type {number}
     * @memberof RestStageList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestStageList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestStageList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestStageList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestStage>}
     * @memberof RestStageList
     */
    stages?: Array<RestStage>;
    /**
     * 
     * @type {Array<RestStage>}
     * @memberof RestStageList
     */
    allElements?: Array<RestStage>;
}
/**
 * 
 * @export
 * @interface RestStageResult
 */
export interface RestStageResult {
    /**
     * 
     * @type {RestResultList}
     * @memberof RestStageResult
     */
    results?: RestResultList;
}
/**
 * 
 * @export
 * @interface RestStageResultList
 */
export interface RestStageResultList {
    /**
     * 
     * @type {number}
     * @memberof RestStageResultList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestStageResultList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestStageResultList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestStageResultList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestStageResult>}
     * @memberof RestStageResultList
     */
    stages?: Array<RestStageResult>;
    /**
     * 
     * @type {Array<RestStageResult>}
     * @memberof RestStageResultList
     */
    allElements?: Array<RestStageResult>;
}
/**
 * 
 * @export
 * @interface RestStorageConfiguration
 */
export interface RestStorageConfiguration {
    /**
     * 
     * @type {number}
     * @memberof RestStorageConfiguration
     */
    softLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof RestStorageConfiguration
     */
    hardLimit?: number;
}
/**
 * 
 * @export
 * @interface RestTrustedKey
 */
export interface RestTrustedKey {
    /**
     * 
     * @type {string}
     * @memberof RestTrustedKey
     */
    readonly self?: string;
    /**
     * 
     * @type {number}
     * @memberof RestTrustedKey
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestTrustedKey
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTrustedKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface RestUpdateDeploymentProjectRequest
 */
export interface RestUpdateDeploymentProjectRequest {
    /**
     * 
     * @type {string}
     * @memberof RestUpdateDeploymentProjectRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpdateDeploymentProjectRequest
     */
    name?: string;
    /**
     * 
     * @type {PlanKey}
     * @memberof RestUpdateDeploymentProjectRequest
     */
    planKey?: PlanKey;
}
/**
 * 
 * @export
 * @interface RestUser
 */
export interface RestUser {
    /**
     * 
     * @type {string}
     * @memberof RestUser
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUser
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUser
     */
    avatarUrl?: string;
}
/**
 * 
 * @export
 * @interface RestUserAlias
 */
export interface RestUserAlias {
    /**
     * 
     * @type {string}
     * @memberof RestUserAlias
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserAlias
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestUserDarkFeature
 */
export interface RestUserDarkFeature {
    /**
     * 
     * @type {string}
     * @memberof RestUserDarkFeature
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserDarkFeature
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestUserDarkFeature
     */
    userName?: string;
}
/**
 * 
 * @export
 * @interface RestUserDetails
 */
export interface RestUserDetails {
    /**
     * 
     * @type {string}
     * @memberof RestUserDetails
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDetails
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDetails
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDetails
     */
    avatarUrl?: string;
}
/**
 * 
 * @export
 * @interface RestUserPasswordUpdate
 */
export interface RestUserPasswordUpdate {
    /**
     * 
     * @type {string}
     * @memberof RestUserPasswordUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPasswordUpdate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPasswordUpdate
     */
    passwordConfirm?: string;
}
/**
 * 
 * @export
 * @interface RestUserPermission
 */
export interface RestUserPermission {
    /**
     * 
     * @type {string}
     * @memberof RestUserPermission
     */
    readonly self?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPermission
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPermission
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPermission
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserPermission
     */
    avatarUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestUserPermission
     */
    permissions?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestUserRenameRequest
 */
export interface RestUserRenameRequest {
    /**
     * 
     * @type {string}
     * @memberof RestUserRenameRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserRenameRequest
     */
    oldName?: string;
}
/**
 * 
 * @export
 * @interface RestUserResponsible
 */
export interface RestUserResponsible {
    /**
     * 
     * @type {string}
     * @memberof RestUserResponsible
     */
    assignedUser?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserResponsible
     */
    assignedBy?: string;
}
/**
 * 
 * @export
 * @interface RestVariable
 */
export interface RestVariable {
    /**
     * 
     * @type {string}
     * @memberof RestVariable
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVariable
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestVariableDefinitionContext
 */
export interface RestVariableDefinitionContext {
    /**
     * 
     * @type {string}
     * @memberof RestVariableDefinitionContext
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVariableDefinitionContext
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVariableDefinitionContext
     */
    variableType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestVariableDefinitionContext
     */
    password?: boolean;
}
/**
 * 
 * @export
 * @interface RestVariableDefinitionContextList
 */
export interface RestVariableDefinitionContextList {
    /**
     * 
     * @type {number}
     * @memberof RestVariableDefinitionContextList
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestVariableDefinitionContextList
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof RestVariableDefinitionContextList
     */
    startIndex?: number;
    /**
     * 
     * @type {any}
     * @memberof RestVariableDefinitionContextList
     */
    pagingCallback?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RestVariableDefinitionContextList
     */
    callback?: any | null;
}
/**
 * 
 * @export
 * @interface RestVariableList
 */
export interface RestVariableList {
    /**
     * 
     * @type {number}
     * @memberof RestVariableList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RestVariableList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof RestVariableList
     */
    size?: number;
    /**
     * 
     * @type {any}
     * @memberof RestVariableList
     */
    callback?: any | null;
    /**
     * 
     * @type {Array<RestVariable>}
     * @memberof RestVariableList
     */
    variables?: Array<RestVariable>;
    /**
     * 
     * @type {Array<RestVariable>}
     * @memberof RestVariableList
     */
    allElements?: Array<RestVariable>;
}
/**
 * 
 * @export
 * @interface RestVcsLocationBambooSpecsState
 */
export interface RestVcsLocationBambooSpecsState {
    /**
     * 
     * @type {number}
     * @memberof RestVcsLocationBambooSpecsState
     */
    vcsLocationId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestVcsLocationBambooSpecsState
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVcsLocationBambooSpecsState
     */
    specsExecutionDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVcsLocationBambooSpecsState
     */
    logFilename?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVcsLocationBambooSpecsState
     */
    specImportState?: RestVcsLocationBambooSpecsStateSpecImportStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestVcsLocationBambooSpecsState
     */
    specsNotFound?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestVcsLocationBambooSpecsState
     */
    branch?: string;
    /**
     * 
     * @type {number}
     * @memberof RestVcsLocationBambooSpecsState
     */
    id?: number;
}


/**
 * @export
 */
export const RestVcsLocationBambooSpecsStateSpecImportStateEnum = {
    Success: 'SUCCESS',
    Error: 'ERROR'
} as const;
export type RestVcsLocationBambooSpecsStateSpecImportStateEnum = typeof RestVcsLocationBambooSpecsStateSpecImportStateEnum[keyof typeof RestVcsLocationBambooSpecsStateSpecImportStateEnum];

/**
 * 
 * @export
 * @interface RestVcsLocationSpecsStatus
 */
export interface RestVcsLocationSpecsStatus {
    /**
     * 
     * @type {boolean}
     * @memberof RestVcsLocationSpecsStatus
     */
    inProgress?: boolean;
    /**
     * 
     * @type {Array<RestVcsLocationBambooSpecsState>}
     * @memberof RestVcsLocationSpecsStatus
     */
    specsLogs?: Array<RestVcsLocationBambooSpecsState>;
}
/**
 * 
 * @export
 * @interface RestVerificationRequest
 */
export interface RestVerificationRequest {
    /**
     * 
     * @type {string}
     * @memberof RestVerificationRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestVerificationRequest
     */
    rawValue?: string;
}
/**
 * 
 * @export
 * @interface RestXsrfProtection
 */
export interface RestXsrfProtection {
    /**
     * 
     * @type {boolean}
     * @memberof RestXsrfProtection
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestXsrfProtection
     */
    disableForHTTPGET?: boolean;
}
/**
 * 
 * @export
 * @interface Result
 */
export interface Result {
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    expand?: string;
    /**
     * 
     * @type {Link}
     * @memberof Result
     */
    link?: Link;
    /**
     * 
     * @type {Link}
     * @memberof Result
     */
    parentLink?: Link;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    planName?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    stage?: string;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof Result
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildState?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    lifeCycleState?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    buildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildStartedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyBuildStartedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildCompletedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyBuildCompletedTime?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    buildDurationInSeconds?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    buildDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildDurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildRelativeTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    queueStartedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyQueueStartedTime?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    queueTimeInSeconds?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    queueDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyQueueDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    vcsUpdateStartedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyVcsUpdateStartedTime?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    vcsUpdateInSeconds?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    vcsUpdateDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    prettyVcsUpdateDuration?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    vcsRevisionKey?: string;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildTestSummary?: string;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    successfulTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    failedTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    quarantinedTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    skippedTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Result
     */
    restartCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    continuable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    onceOff?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    restartable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Result
     */
    buildReason?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Result
     */
    hasExecutableAgents?: boolean;
    /**
     * 
     * @type {RestBuildArtifactList}
     * @memberof Result
     */
    artifacts?: RestBuildArtifactList;
    /**
     * 
     * @type {RestCommentList}
     * @memberof Result
     */
    comments?: RestCommentList;
    /**
     * 
     * @type {RestBuildLabelList}
     * @memberof Result
     */
    labels?: RestBuildLabelList;
    /**
     * 
     * @type {RestJiraIssueList}
     * @memberof Result
     */
    jiraIssues?: RestJiraIssueList;
    /**
     * 
     * @type {RestVariableList}
     * @memberof Result
     */
    variables?: RestVariableList;
    /**
     * 
     * @type {RestStageResultList}
     * @memberof Result
     */
    stages?: RestStageResultList;
    /**
     * 
     * @type {ChainStageResult}
     * @memberof Result
     */
    stageResult?: ChainStageResult;
    /**
     * 
     * @type {ImmutableResultsSummary}
     * @memberof Result
     */
    buildSummary?: ImmutableResultsSummary;
}
/**
 * 
 * @export
 * @interface ResultKey
 */
export interface ResultKey {
    /**
     * 
     * @type {Key}
     * @memberof ResultKey
     */
    entityKey?: Key;
    /**
     * 
     * @type {number}
     * @memberof ResultKey
     */
    resultNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ResultKey
     */
    resultNumberLong?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultKey
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface ResultsSummary
 */
export interface ResultsSummary {
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildResultKey?: string;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof ResultsSummary
     */
    immutablePlan?: ImmutablePlan;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    duration?: number;
    /**
     * 
     * @type {TriggerReason}
     * @memberof ResultsSummary
     */
    triggerReason?: TriggerReason;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    deltaState?: ResultsSummaryDeltaStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    onceOff?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    customBuild?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    rebuild?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    logSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    processingDuration?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildCompletedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildCancelledDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    timeToFix?: number;
    /**
     * 
     * @type {TestResultsSummary}
     * @memberof ResultsSummary
     */
    testResultsSummary?: TestResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    queueTime?: string;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    restartCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    buildAgentId?: number;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildAgentType?: ResultsSummaryBuildAgentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    variableContextBaselineId?: number;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    formatVersion?: number;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof ResultsSummary
     */
    variableContextLogsEncrypted?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ResultsSummary
     */
    substitutedVariablesEncrypted?: Array<VariableSubstitution>;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    markedForDeletion?: boolean;
    /**
     * 
     * @type {PlanKey}
     * @memberof ResultsSummary
     */
    planKey?: PlanKey;
    /**
     * 
     * @type {PlanResultKey}
     * @memberof ResultsSummary
     */
    planResultKey?: PlanResultKey;
    /**
     * 
     * @type {Array<RepositoryChangeset>}
     * @memberof ResultsSummary
     */
    repositoryChangesets?: Array<RepositoryChangeset>;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    planName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    successful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    failed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    notRunYet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    notBuilt?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ResultsSummary
     */
    labelNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    lifeCycleState?: ResultsSummaryLifeCycleStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    inProgress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    pending?: boolean;
    /**
     * 
     * @type {Array<Labelling>}
     * @memberof ResultsSummary
     */
    labellings?: Array<Labelling>;
    /**
     * 
     * @type {Array<ConsumedSubscription>}
     * @memberof ResultsSummary
     */
    subscriptions?: Array<ConsumedSubscription>;
    /**
     * 
     * @type {ImmutablePlan}
     * @memberof ResultsSummary
     */
    planIfExists?: ImmutablePlan;
    /**
     * 
     * @type {ImmutableChain}
     * @memberof ResultsSummary
     */
    immutableChain?: ImmutableChain;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    finished?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    waiting?: boolean;
    /**
     * 
     * @type {object}
     * @memberof ResultsSummary
     */
    customBuildData?: object;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ResultsSummary
     */
    jiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ResultsSummary
     */
    fixingJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<LinkedJiraIssue>}
     * @memberof ResultsSummary
     */
    relatedJiraIssues?: Set<LinkedJiraIssue>;
    /**
     * 
     * @type {Set<string>}
     * @memberof ResultsSummary
     */
    jiraIssueKeys?: Set<string>;
    /**
     * 
     * @type {Set<Author>}
     * @memberof ResultsSummary
     */
    uniqueAuthors?: Set<Author>;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    durationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    processingDurationDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    shortReasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    reasonSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    relativeBuildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    relativeQueueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    relativeBuildStartedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    testSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildTime?: string;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ResultsSummary
     */
    artifactLinks?: Array<ArtifactLink>;
    /**
     * 
     * @type {Array<ArtifactLink>}
     * @memberof ResultsSummary
     */
    artifactLinksThatExist?: Array<ArtifactLink>;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    changesListSummary?: string;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ResultsSummary
     */
    substitutedVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<VariableContextSnapshot>}
     * @memberof ResultsSummary
     */
    variableContextLogs?: Array<VariableContextSnapshot>;
    /**
     * 
     * @type {Array<VariableSubstitution>}
     * @memberof ResultsSummary
     */
    manuallyOverriddenVariables?: Array<VariableSubstitution>;
    /**
     * 
     * @type {Array<Commit>}
     * @memberof ResultsSummary
     */
    commits?: Array<Commit>;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    fullPlanName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResultsSummary
     */
    queued?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    statDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ResultsSummary
     */
    buildState?: ResultsSummaryBuildStateEnum;
    /**
     * 
     * @type {number}
     * @memberof ResultsSummary
     */
    buildNumber?: number;
}


/**
 * @export
 */
export const ResultsSummaryDeltaStateEnum = {
    None: 'NONE',
    Passing: 'PASSING',
    Failing: 'FAILING',
    Broken: 'BROKEN',
    Fixed: 'FIXED'
} as const;
export type ResultsSummaryDeltaStateEnum = typeof ResultsSummaryDeltaStateEnum[keyof typeof ResultsSummaryDeltaStateEnum];

/**
 * @export
 */
export const ResultsSummaryBuildAgentTypeEnum = {
    Local: 'LOCAL',
    Remote: 'REMOTE',
    Elastic: 'ELASTIC',
    Ephemeral: 'EPHEMERAL'
} as const;
export type ResultsSummaryBuildAgentTypeEnum = typeof ResultsSummaryBuildAgentTypeEnum[keyof typeof ResultsSummaryBuildAgentTypeEnum];

/**
 * @export
 */
export const ResultsSummaryLifeCycleStateEnum = {
    Pending: 'Pending',
    Queued: 'Queued',
    InProgress: 'InProgress',
    Finished: 'Finished',
    NotBuilt: 'NotBuilt'
} as const;
export type ResultsSummaryLifeCycleStateEnum = typeof ResultsSummaryLifeCycleStateEnum[keyof typeof ResultsSummaryLifeCycleStateEnum];

/**
 * @export
 */
export const ResultsSummaryBuildStateEnum = {
    Unknown: 'Unknown',
    Successful: 'Successful',
    Failed: 'Failed'
} as const;
export type ResultsSummaryBuildStateEnum = typeof ResultsSummaryBuildStateEnum[keyof typeof ResultsSummaryBuildStateEnum];

/**
 * 
 * @export
 * @interface RunExpiryResponse
 */
export interface RunExpiryResponse {
    /**
     * 
     * @type {string}
     * @memberof RunExpiryResponse
     */
    statusUrl?: string;
}
/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    entityType?: string;
    /**
     * 
     * @type {SearchResultEntity}
     * @memberof SearchResult
     */
    entity?: SearchResultEntity;
}
/**
 * 
 * @export
 * @interface SearchResultEntity
 */
export interface SearchResultEntity {
    /**
     * 
     * @type {string}
     * @memberof SearchResultEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResultEntity
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface SearchResultsList
 */
export interface SearchResultsList {
    /**
     * 
     * @type {number}
     * @memberof SearchResultsList
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResultsList
     */
    maxResult?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchResultsList
     */
    size?: number;
    /**
     * 
     * @type {Array<SearchResult>}
     * @memberof SearchResultsList
     */
    searchResults?: Array<SearchResult>;
}
/**
 * 
 * @export
 * @interface SecuritySettingsLink
 */
export interface SecuritySettingsLink {
    /**
     * 
     * @type {string}
     * @memberof SecuritySettingsLink
     */
    link?: string;
}
/**
 * 
 * @export
 * @interface SimpleRestArtifactHandler
 */
export interface SimpleRestArtifactHandler {
    /**
     * 
     * @type {string}
     * @memberof SimpleRestArtifactHandler
     */
    readonly self?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SimpleRestArtifactHandler
     */
    sharedArtifactsEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SimpleRestArtifactHandler
     */
    nonsharedArtifactsEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface StageVariableContext
 */
export interface StageVariableContext {
    /**
     * 
     * @type {ChainStageResult}
     * @memberof StageVariableContext
     */
    chainStageResult?: ChainStageResult;
    /**
     * 
     * @type {string}
     * @memberof StageVariableContext
     */
    variableType?: StageVariableContextVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof StageVariableContext
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof StageVariableContext
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof StageVariableContext
     */
    id?: number;
}


/**
 * @export
 */
export const StageVariableContextVariableTypeEnum = {
    Global: 'GLOBAL',
    Plan: 'PLAN',
    Job: 'JOB',
    Manual: 'MANUAL',
    Custom: 'CUSTOM',
    System: 'SYSTEM',
    Unknown: 'UNKNOWN',
    Environment: 'ENVIRONMENT',
    Version: 'VERSION',
    Result: 'RESULT',
    Project: 'PROJECT'
} as const;
export type StageVariableContextVariableTypeEnum = typeof StageVariableContextVariableTypeEnum[keyof typeof StageVariableContextVariableTypeEnum];

/**
 * 
 * @export
 * @interface StartBuildRequest
 */
export interface StartBuildRequest {
    /**
     * 
     * @type {string}
     * @memberof StartBuildRequest
     */
    fakeParam?: string;
}
/**
 * 
 * @export
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {number}
     * @memberof Status
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof Status
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface StrSubstitutor
 */
export interface StrSubstitutor {
    /**
     * 
     * @type {string}
     * @memberof StrSubstitutor
     */
    escapeChar?: string;
    /**
     * 
     * @type {any}
     * @memberof StrSubstitutor
     */
    variableResolver?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof StrSubstitutor
     */
    enableSubstitutionInVariables?: boolean;
    /**
     * 
     * @type {any}
     * @memberof StrSubstitutor
     */
    variablePrefixMatcher?: any | null;
    /**
     * 
     * @type {StrSubstitutor}
     * @memberof StrSubstitutor
     */
    variablePrefix?: StrSubstitutor;
    /**
     * 
     * @type {any}
     * @memberof StrSubstitutor
     */
    variableSuffixMatcher?: any | null;
    /**
     * 
     * @type {StrSubstitutor}
     * @memberof StrSubstitutor
     */
    variableSuffix?: StrSubstitutor;
}
/**
 * 
 * @export
 * @interface TaskConditionConfig
 */
export interface TaskConditionConfig {
    /**
     * 
     * @type {string}
     * @memberof TaskConditionConfig
     */
    conditionPluginKey?: string;
    /**
     * 
     * @type {object}
     * @memberof TaskConditionConfig
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface TaskDefinition
 */
export interface TaskDefinition {
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    entityType?: TaskDefinitionEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    userDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDefinition
     */
    finalising?: boolean;
    /**
     * 
     * @type {TaskRootDirectorySelector}
     * @memberof TaskDefinition
     */
    rootDirectorySelector?: TaskRootDirectorySelector;
    /**
     * 
     * @type {Array<TaskConditionConfig>}
     * @memberof TaskDefinition
     */
    conditions?: Array<TaskConditionConfig>;
    /**
     * 
     * @type {object}
     * @memberof TaskDefinition
     */
    _configuration?: object;
    /**
     * 
     * @type {boolean}
     * @memberof TaskDefinition
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TaskDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskDefinition
     */
    pluginKey?: string;
    /**
     * 
     * @type {BambooEntityOid}
     * @memberof TaskDefinition
     */
    oid?: BambooEntityOid;
}


/**
 * @export
 */
export const TaskDefinitionEntityTypeEnum = {
    Chain: 'CHAIN',
    Stage: 'STAGE',
    Job: 'JOB',
    Repository: 'REPOSITORY',
    ChainBranch: 'CHAIN_BRANCH',
    JobBranch: 'JOB_BRANCH',
    Task: 'TASK',
    Project: 'PROJECT',
    ArtifactDefinition: 'ARTIFACT_DEFINITION',
    DeploymentProject: 'DEPLOYMENT_PROJECT',
    SharedCredential: 'SHARED_CREDENTIAL'
} as const;
export type TaskDefinitionEntityTypeEnum = typeof TaskDefinitionEntityTypeEnum[keyof typeof TaskDefinitionEntityTypeEnum];

/**
 * 
 * @export
 * @interface TaskRootDirectorySelector
 */
export interface TaskRootDirectorySelector {
    /**
     * 
     * @type {string}
     * @memberof TaskRootDirectorySelector
     */
    taskRootDirectoryType?: TaskRootDirectorySelectorTaskRootDirectoryTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TaskRootDirectorySelector
     */
    repositoryDefiningWorkingDirectory?: number;
}


/**
 * @export
 */
export const TaskRootDirectorySelectorTaskRootDirectoryTypeEnum = {
    Inherited: 'INHERITED',
    Default: 'DEFAULT',
    Repository: 'REPOSITORY'
} as const;
export type TaskRootDirectorySelectorTaskRootDirectoryTypeEnum = typeof TaskRootDirectorySelectorTaskRootDirectoryTypeEnum[keyof typeof TaskRootDirectorySelectorTaskRootDirectoryTypeEnum];

/**
 * 
 * @export
 * @interface TestCase
 */
export interface TestCase {
    /**
     * 
     * @type {TestClass}
     * @memberof TestCase
     */
    testClass?: TestClass;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    successPercentage?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    totalTestRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    numberOfSuccessRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    numberOfSkippedRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    numberOfFailedRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    averageDuration?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    averageDurationInSeconds?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TestCase
     */
    quarantined?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    firstRanBuildNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    lastRanBuildNumber?: number;
    /**
     * 
     * @type {QuarantineStatistics}
     * @memberof TestCase
     */
    quarantineStatistics?: QuarantineStatistics;
    /**
     * 
     * @type {string}
     * @memberof TestCase
     */
    linkedJiraIssueKey?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCase
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCase
     */
    methodName?: string;
    /**
     * 
     * @type {number}
     * @memberof TestCase
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface TestCaseResult
 */
export interface TestCaseResult {
    /**
     * 
     * @type {string}
     * @memberof TestCaseResult
     */
    deltaState?: TestCaseResultDeltaStateEnum;
    /**
     * 
     * @type {TestCase}
     * @memberof TestCaseResult
     */
    testCase?: TestCase;
    /**
     * 
     * @type {string}
     * @memberof TestCaseResult
     */
    prettyDuration?: string;
    /**
     * 
     * @type {TestClassResult}
     * @memberof TestCaseResult
     */
    testClassResult?: TestClassResult;
    /**
     * 
     * @type {number}
     * @memberof TestCaseResult
     */
    failingSince?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TestCaseResult
     */
    quarantined?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TestCaseResult
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof TestCaseResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TestCaseResult
     */
    state?: TestCaseResultStateEnum;
    /**
     * 
     * @type {string}
     * @memberof TestCaseResult
     */
    methodName?: string;
    /**
     * 
     * @type {Array<TestCaseResultError>}
     * @memberof TestCaseResult
     */
    errors?: Array<TestCaseResultError>;
    /**
     * 
     * @type {number}
     * @memberof TestCaseResult
     */
    id?: number;
}


/**
 * @export
 */
export const TestCaseResultDeltaStateEnum = {
    None: 'NONE',
    Passing: 'PASSING',
    Failing: 'FAILING',
    Broken: 'BROKEN',
    Fixed: 'FIXED',
    Skipped: 'SKIPPED'
} as const;
export type TestCaseResultDeltaStateEnum = typeof TestCaseResultDeltaStateEnum[keyof typeof TestCaseResultDeltaStateEnum];

/**
 * @export
 */
export const TestCaseResultStateEnum = {
    Success: 'SUCCESS',
    Skipped: 'SKIPPED',
    Failed: 'FAILED'
} as const;
export type TestCaseResultStateEnum = typeof TestCaseResultStateEnum[keyof typeof TestCaseResultStateEnum];

/**
 * 
 * @export
 * @interface TestCaseResultError
 */
export interface TestCaseResultError {
    /**
     * 
     * @type {TestCaseResult}
     * @memberof TestCaseResultError
     */
    testCaseResult?: TestCaseResult;
    /**
     * 
     * @type {string}
     * @memberof TestCaseResultError
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof TestCaseResultError
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface TestClass
 */
export interface TestClass {
    /**
     * 
     * @type {Plan}
     * @memberof TestClass
     */
    plan?: Plan;
    /**
     * 
     * @type {Array<TestCase>}
     * @memberof TestClass
     */
    testCases?: Array<TestCase>;
    /**
     * 
     * @type {number}
     * @memberof TestClass
     */
    masterJobId?: number;
    /**
     * 
     * @type {Array<TestCase>}
     * @memberof TestClass
     */
    testCaseCollection?: Array<TestCase>;
    /**
     * 
     * @type {string}
     * @memberof TestClass
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TestClass
     */
    shortName?: string;
    /**
     * 
     * @type {number}
     * @memberof TestClass
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface TestClassResult
 */
export interface TestClassResult {
    /**
     * 
     * @type {number}
     * @memberof TestClassResult
     */
    duration?: number;
    /**
     * 
     * @type {Array<TestCaseResult>}
     * @memberof TestClassResult
     */
    testCaseResults?: Array<TestCaseResult>;
    /**
     * 
     * @type {BuildResultsSummary}
     * @memberof TestClassResult
     */
    buildResultsSummary?: BuildResultsSummary;
    /**
     * 
     * @type {TestClass}
     * @memberof TestClassResult
     */
    testClass?: TestClass;
    /**
     * 
     * @type {Set<TestCaseResult>}
     * @memberof TestClassResult
     */
    testCaseResultsSet?: Set<TestCaseResult>;
    /**
     * 
     * @type {number}
     * @memberof TestClassResult
     */
    failedTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestClassResult
     */
    successfulTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestClassResult
     */
    skippedTestCount?: number;
    /**
     * 
     * @type {string}
     * @memberof TestClassResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TestClassResult
     */
    shortName?: string;
    /**
     * 
     * @type {number}
     * @memberof TestClassResult
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface TestConnectionResultDto
 */
export interface TestConnectionResultDto {
    /**
     * 
     * @type {boolean}
     * @memberof TestConnectionResultDto
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TestConnectionResultDto
     */
    clientVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof TestConnectionResultDto
     */
    serverVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof TestConnectionResultDto
     */
    errorMessage?: string;
}
/**
 * 
 * @export
 * @interface TestResultsSummary
 */
export interface TestResultsSummary {
    /**
     * 
     * @type {string}
     * @memberof TestResultsSummary
     */
    testSummaryDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    successfulTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    failedTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    totalTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    newFailedTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    existingFailedTestCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    fixedTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    quarantinedTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    skippedTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    ignoredTestCaseCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TestResultsSummary
     */
    totalTestDuration?: number;
}
/**
 * 
 * @export
 * @interface TriggerDefinition
 */
export interface TriggerDefinition {
    /**
     * 
     * @type {string}
     * @memberof TriggerDefinition
     */
    userDescription?: string;
    /**
     * 
     * @type {Set<number>}
     * @memberof TriggerDefinition
     */
    triggeringRepositories?: Set<number>;
    /**
     * 
     * @type {object}
     * @memberof TriggerDefinition
     */
    triggerConditionsConfiguration?: object;
    /**
     * 
     * @type {object}
     * @memberof TriggerDefinition
     */
    _configuration?: object;
    /**
     * 
     * @type {boolean}
     * @memberof TriggerDefinition
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TriggerDefinition
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TriggerDefinition
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TriggerDefinition
     */
    pluginKey?: string;
}
/**
 * 
 * @export
 * @interface TriggerReason
 */
export interface TriggerReason {
    /**
     * 
     * @type {string}
     * @memberof TriggerReason
     */
    nameForSentence?: string;
    /**
     * 
     * @type {string}
     * @memberof TriggerReason
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TriggerReason
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    fullName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface UserBean
 */
export interface UserBean {
    /**
     * 
     * @type {string}
     * @memberof UserBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserBean
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserBean
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface VariableContextSnapshot
 */
export interface VariableContextSnapshot {
    /**
     * 
     * @type {ResultsSummary}
     * @memberof VariableContextSnapshot
     */
    resultSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof VariableContextSnapshot
     */
    variableType?: VariableContextSnapshotVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VariableContextSnapshot
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof VariableContextSnapshot
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof VariableContextSnapshot
     */
    id?: number;
}


/**
 * @export
 */
export const VariableContextSnapshotVariableTypeEnum = {
    Global: 'GLOBAL',
    Plan: 'PLAN',
    Job: 'JOB',
    Manual: 'MANUAL',
    Custom: 'CUSTOM',
    System: 'SYSTEM',
    Unknown: 'UNKNOWN',
    Environment: 'ENVIRONMENT',
    Version: 'VERSION',
    Result: 'RESULT',
    Project: 'PROJECT'
} as const;
export type VariableContextSnapshotVariableTypeEnum = typeof VariableContextSnapshotVariableTypeEnum[keyof typeof VariableContextSnapshotVariableTypeEnum];

/**
 * 
 * @export
 * @interface VariableDefinition
 */
export interface VariableDefinition {
    /**
     * 
     * @type {number}
     * @memberof VariableDefinition
     */
    deploymentVersionId?: number;
    /**
     * 
     * @type {Plan}
     * @memberof VariableDefinition
     */
    plan?: Plan;
    /**
     * 
     * @type {number}
     * @memberof VariableDefinition
     */
    environmentId?: number;
    /**
     * 
     * @type {number}
     * @memberof VariableDefinition
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof VariableDefinition
     */
    variableType?: VariableDefinitionVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VariableDefinition
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof VariableDefinition
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof VariableDefinition
     */
    id?: number;
}


/**
 * @export
 */
export const VariableDefinitionVariableTypeEnum = {
    Global: 'GLOBAL',
    Plan: 'PLAN',
    Job: 'JOB',
    Manual: 'MANUAL',
    Custom: 'CUSTOM',
    System: 'SYSTEM',
    Unknown: 'UNKNOWN',
    Environment: 'ENVIRONMENT',
    Version: 'VERSION',
    Result: 'RESULT',
    Project: 'PROJECT'
} as const;
export type VariableDefinitionVariableTypeEnum = typeof VariableDefinitionVariableTypeEnum[keyof typeof VariableDefinitionVariableTypeEnum];

/**
 * 
 * @export
 * @interface VariableSubstitution
 */
export interface VariableSubstitution {
    /**
     * 
     * @type {ResultsSummary}
     * @memberof VariableSubstitution
     */
    resultSummary?: ResultsSummary;
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitution
     */
    variableType?: VariableSubstitutionVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitution
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitution
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof VariableSubstitution
     */
    id?: number;
}


/**
 * @export
 */
export const VariableSubstitutionVariableTypeEnum = {
    Global: 'GLOBAL',
    Plan: 'PLAN',
    Job: 'JOB',
    Manual: 'MANUAL',
    Custom: 'CUSTOM',
    System: 'SYSTEM',
    Unknown: 'UNKNOWN',
    Environment: 'ENVIRONMENT',
    Version: 'VERSION',
    Result: 'RESULT',
    Project: 'PROJECT'
} as const;
export type VariableSubstitutionVariableTypeEnum = typeof VariableSubstitutionVariableTypeEnum[keyof typeof VariableSubstitutionVariableTypeEnum];

/**
 * 
 * @export
 * @interface VariableSubstitutionContext
 */
export interface VariableSubstitutionContext {
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitutionContext
     */
    variableType?: VariableSubstitutionContextVariableTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitutionContext
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof VariableSubstitutionContext
     */
    key?: string;
}


/**
 * @export
 */
export const VariableSubstitutionContextVariableTypeEnum = {
    Global: 'GLOBAL',
    Plan: 'PLAN',
    Job: 'JOB',
    Manual: 'MANUAL',
    Custom: 'CUSTOM',
    System: 'SYSTEM',
    Unknown: 'UNKNOWN',
    Environment: 'ENVIRONMENT',
    Version: 'VERSION',
    Result: 'RESULT',
    Project: 'PROJECT'
} as const;
export type VariableSubstitutionContextVariableTypeEnum = typeof VariableSubstitutionContextVariableTypeEnum[keyof typeof VariableSubstitutionContextVariableTypeEnum];

/**
 * 
 * @export
 * @interface VcsBambooSpecsDetectionOptions
 */
export interface VcsBambooSpecsDetectionOptions {
    /**
     * 
     * @type {boolean}
     * @memberof VcsBambooSpecsDetectionOptions
     */
    bambooSpecsDetectionEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VcsBambooSpecsDetectionOptions
     */
    bambooSpecsDetection?: boolean;
    /**
     * 
     * @type {object}
     * @memberof VcsBambooSpecsDetectionOptions
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface VcsBambooSpecsSource
 */
export interface VcsBambooSpecsSource {
    /**
     * 
     * @type {VcsLocationBambooSpecsState}
     * @memberof VcsBambooSpecsSource
     */
    vcsLocationBambooSpecsState?: VcsLocationBambooSpecsState;
    /**
     * 
     * @type {string}
     * @memberof VcsBambooSpecsSource
     */
    sourceLocation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VcsBambooSpecsSource
     */
    yamlConfiguration?: boolean;
    /**
     * 
     * @type {number}
     * @memberof VcsBambooSpecsSource
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface VcsBranch
 */
export interface VcsBranch {
    /**
     * 
     * @type {string}
     * @memberof VcsBranch
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof VcsBranch
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface VcsBranchDefinition
 */
export interface VcsBranchDefinition {
    /**
     * 
     * @type {VcsBranch}
     * @memberof VcsBranchDefinition
     */
    vcsBranch?: VcsBranch;
    /**
     * 
     * @type {object}
     * @memberof VcsBranchDefinition
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface VcsBranchDetectionOptions
 */
export interface VcsBranchDetectionOptions {
    /**
     * 
     * @type {object}
     * @memberof VcsBranchDetectionOptions
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface VcsChangeDetectionOptions
 */
export interface VcsChangeDetectionOptions {
    /**
     * 
     * @type {number}
     * @memberof VcsChangeDetectionOptions
     */
    quietPeriod?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VcsChangeDetectionOptions
     */
    quietPeriodEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof VcsChangeDetectionOptions
     */
    maxRetries?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VcsChangeDetectionOptions
     */
    commitIsolationEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VcsChangeDetectionOptions
     */
    changesetFilterPatternRegex?: string;
    /**
     * 
     * @type {string}
     * @memberof VcsChangeDetectionOptions
     */
    filterFilePatternOption?: string;
    /**
     * 
     * @type {string}
     * @memberof VcsChangeDetectionOptions
     */
    filterFilePatternRegex?: string;
    /**
     * 
     * @type {object}
     * @memberof VcsChangeDetectionOptions
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface VcsLocationBambooSpecsState
 */
export interface VcsLocationBambooSpecsState {
    /**
     * 
     * @type {string}
     * @memberof VcsLocationBambooSpecsState
     */
    revision?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VcsLocationBambooSpecsState
     */
    specsNotFound?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VcsLocationBambooSpecsState
     */
    branch?: string;
    /**
     * 
     * @type {number}
     * @memberof VcsLocationBambooSpecsState
     */
    vcsLocationId?: number;
    /**
     * 
     * @type {string}
     * @memberof VcsLocationBambooSpecsState
     */
    specsExecutionDate?: string;
    /**
     * 
     * @type {string}
     * @memberof VcsLocationBambooSpecsState
     */
    logFilename?: string;
    /**
     * 
     * @type {string}
     * @memberof VcsLocationBambooSpecsState
     */
    specImportState?: VcsLocationBambooSpecsStateSpecImportStateEnum;
    /**
     * 
     * @type {number}
     * @memberof VcsLocationBambooSpecsState
     */
    id?: number;
}


/**
 * @export
 */
export const VcsLocationBambooSpecsStateSpecImportStateEnum = {
    Success: 'SUCCESS',
    Error: 'ERROR'
} as const;
export type VcsLocationBambooSpecsStateSpecImportStateEnum = typeof VcsLocationBambooSpecsStateSpecImportStateEnum[keyof typeof VcsLocationBambooSpecsStateSpecImportStateEnum];

/**
 * 
 * @export
 * @interface VcsLocationDefinition
 */
export interface VcsLocationDefinition {
    /**
     * 
     * @type {boolean}
     * @memberof VcsLocationDefinition
     */
    legacyRepository?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VcsLocationDefinition
     */
    legacyConfigurationXml?: string;
    /**
     * 
     * @type {object}
     * @memberof VcsLocationDefinition
     */
    _configuration?: object;
}
/**
 * 
 * @export
 * @interface VcsRepositoryViewerDefinition
 */
export interface VcsRepositoryViewerDefinition {
    /**
     * 
     * @type {string}
     * @memberof VcsRepositoryViewerDefinition
     */
    legacyConfigurationXml?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VcsRepositoryViewerDefinition
     */
    legacyViewer?: boolean;
    /**
     * 
     * @type {object}
     * @memberof VcsRepositoryViewerDefinition
     */
    _configuration?: object;
    /**
     * 
     * @type {string}
     * @memberof VcsRepositoryViewerDefinition
     */
    pluginKey?: string;
}
/**
 * 
 * @export
 * @interface VersionPreview
 */
export interface VersionPreview {
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    planBranchName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VersionPreview
     */
    differentBranchAsPreviousRelease?: boolean;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    issueCount?: number;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    issueUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    commitCount?: number;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    commitUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    numEnvironments?: number;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    numEnvironmentsDeployedSuccessful?: number;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    numEnvironmentsDeployedFailed?: number;
    /**
     * 
     * @type {RestDeploymentVersionStatus}
     * @memberof VersionPreview
     */
    versionStatus?: RestDeploymentVersionStatus;
    /**
     * 
     * @type {boolean}
     * @memberof VersionPreview
     */
    rollback?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    previousVersionName?: string;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    previousVersionId?: number;
    /**
     * 
     * @type {string}
     * @memberof VersionPreview
     */
    lastCreatedVersionName?: string;
    /**
     * 
     * @type {number}
     * @memberof VersionPreview
     */
    lastCreatedVersionId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VersionPreview
     */
    differentBuildPlan?: boolean;
}
/**
 * 
 * @export
 * @interface VersionVariables
 */
export interface VersionVariables {
    /**
     * 
     * @type {Array<RestVariableDefinitionContext>}
     * @memberof VersionVariables
     */
    incrementableVariables?: Array<RestVariableDefinitionContext>;
    /**
     * 
     * @type {Array<RestVariableDefinitionContext>}
     * @memberof VersionVariables
     */
    buildVariables?: Array<RestVariableDefinitionContext>;
}
/**
 * 
 * @export
 * @interface WebRepositoryViewer
 */
export interface WebRepositoryViewer {
    /**
     * 
     * @type {string}
     * @memberof WebRepositoryViewer
     */
    shortKey?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebRepositoryViewer
     */
    supportedRepositories?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof WebRepositoryViewer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WebRepositoryViewer
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface WeightedDescriptor
 */
export interface WeightedDescriptor {
    /**
     * 
     * @type {number}
     * @memberof WeightedDescriptor
     */
    weight?: number;
}
