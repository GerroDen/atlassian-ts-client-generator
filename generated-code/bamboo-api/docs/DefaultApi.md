# DefaultApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateFilter**](DefaultApi.md#activatefilter) | **PUT** /api/latest/quickFilter/{id}/activate |  |
| [**addAssignedRepository**](DefaultApi.md#addassignedrepository) | **POST** /api/latest/deploy/project/{deploymentProjectId}/repository |  |
| [**addAssignedRepository1**](DefaultApi.md#addassignedrepository1) | **POST** /api/latest/project/{projectKey}/repository |  |
| [**addBuildComment**](DefaultApi.md#addbuildcomment) | **POST** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment |  |
| [**addBuildLabel**](DefaultApi.md#addbuildlabel) | **POST** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label |  |
| [**addCapability**](DefaultApi.md#addcapability) | **POST** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability |  |
| [**addDeploymentProject**](DefaultApi.md#adddeploymentproject) | **PUT** /api/latest/deploy/project |  |
| [**addResponsible**](DefaultApi.md#addresponsible) | **POST** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey}/{name} |  |
| [**authenticateAgent**](DefaultApi.md#authenticateagent) | **PUT** /api/latest/agent/authentication/{agentUuid} |  |
| [**continueBuild**](DefaultApi.md#continuebuild) | **PUT** /api/latest/queue/{projectKey}-{buildKey}-{buildNumber} |  |
| [**createAgentCapability**](DefaultApi.md#createagentcapability) | **POST** /api/latest/agent/{agentId}/capability |  |
| [**createGlobalVariable**](DefaultApi.md#createglobalvariable) | **POST** /admin/latest/globalVariables |  |
| [**createGroup**](DefaultApi.md#creategroup) | **POST** /admin/latest/security/groups |  |
| [**createImageConfiguration**](DefaultApi.md#createimageconfiguration) | **POST** /api/latest/elasticConfiguration |  |
| [**createOrUpdateVariable**](DefaultApi.md#createorupdatevariable) | **POST** /api/latest/project/{projectKey}/variable |  |
| [**createProject**](DefaultApi.md#createproject) | **POST** /api/latest/project |  |
| [**createQuickFilter**](DefaultApi.md#createquickfilter) | **POST** /api/latest/quickFilter |  |
| [**createTemplateConfiguration**](DefaultApi.md#createtemplateconfiguration) | **POST** /api/latest/ephemeral/templateConfiguration |  |
| [**createVersion**](DefaultApi.md#createversion) | **POST** /api/latest/deploy/project/{deploymentProjectId}/version |  |
| [**deactivateAllFilters**](DefaultApi.md#deactivateallfilters) | **PUT** /api/latest/quickFilter/deactivate |  |
| [**deactivateFilter**](DefaultApi.md#deactivatefilter) | **PUT** /api/latest/quickFilter/{id}/deactivate |  |
| [**deleteAgent**](DefaultApi.md#deleteagent) | **DELETE** /api/latest/agent/{agentId} |  |
| [**deleteAgentCapability**](DefaultApi.md#deleteagentcapability) | **DELETE** /api/latest/agent/{agentId}/capability/{capabilityKey} |  |
| [**deleteAllAgentCapabilities**](DefaultApi.md#deleteallagentcapabilities) | **DELETE** /api/latest/agent/{agentId}/capability |  |
| [**deleteCapability**](DefaultApi.md#deletecapability) | **DELETE** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability/{name} |  |
| [**deleteConfiguration**](DefaultApi.md#deleteconfiguration) | **DELETE** /api/latest/elasticConfiguration/{configurationId} |  |
| [**deleteDeploymentProject**](DefaultApi.md#deletedeploymentproject) | **DELETE** /api/latest/deploy/project/{deploymentProjectId} |  |
| [**deleteGlobalVariable**](DefaultApi.md#deleteglobalvariable) | **DELETE** /admin/latest/globalVariables/{variableId} |  |
| [**deleteIMServerConfiguration**](DefaultApi.md#deleteimserverconfiguration) | **DELETE** /admin/latest/config/imServer |  |
| [**deleteMailConfiguration**](DefaultApi.md#deletemailconfiguration) | **DELETE** /admin/latest/config/mailServer |  |
| [**deleteProject**](DefaultApi.md#deleteproject) | **DELETE** /api/latest/project/{projectKey} |  |
| [**deleteProjectSharedCredentials**](DefaultApi.md#deleteprojectsharedcredentials) | **DELETE** /api/latest/project/{projectKey}/sharedCredentials/{sharedCredentialId} |  |
| [**deleteProjectVariable**](DefaultApi.md#deleteprojectvariable) | **DELETE** /api/latest/project/{projectKey}/variable/{variableName} |  |
| [**deleteQuickFilter**](DefaultApi.md#deletequickfilter) | **DELETE** /api/latest/quickFilter/{id} |  |
| [**deleteRepositoryMapping**](DefaultApi.md#deleterepositorymapping) | **DELETE** /api/latest/deploy/project/{deploymentProjectId}/repository/{repositoryId} |  |
| [**deleteRepositoryMapping1**](DefaultApi.md#deleterepositorymapping1) | **DELETE** /api/latest/project/{projectKey}/repository/{repositoryId} |  |
| [**deleteTemplateConfiguration**](DefaultApi.md#deletetemplateconfiguration) | **DELETE** /api/latest/ephemeral/templateConfiguration/{configurationId} |  |
| [**disableAgent**](DefaultApi.md#disableagent) | **PUT** /api/latest/agent/{agentId}/disable |  |
| [**editDeploymentProject**](DefaultApi.md#editdeploymentproject) | **POST** /api/latest/deploy/project/{deploymentProjectId} |  |
| [**enableAgent**](DefaultApi.md#enableagent) | **PUT** /api/latest/agent/{agentId}/enable |  |
| [**enableAllProjectsAccess**](DefaultApi.md#enableallprojectsaccess) | **PUT** /api/latest/repository/{repositoryId}/enableAllProjectsAccess |  |
| [**enableAllRepositoriesAccess**](DefaultApi.md#enableallrepositoriesaccess) | **PUT** /api/latest/project/{projectKey}/repository/{repositoryId}/enableAllRepositoriesAccess |  |
| [**enableAllRepositoriesAccess1**](DefaultApi.md#enableallrepositoriesaccess1) | **PUT** /api/latest/repository/{repositoryId}/enableAllRepositoriesAccess |  |
| [**enableCi**](DefaultApi.md#enableci) | **PUT** /api/latest/repository/{repositoryId}/enableCi |  |
| [**enableProjectCreation**](DefaultApi.md#enableprojectcreation) | **PUT** /api/latest/repository/{repositoryId}/enableProjectCreation |  |
| [**encrypt**](DefaultApi.md#encrypt) | **POST** /api/latest/encrypt |  |
| [**exportDeploymentSpec**](DefaultApi.md#exportdeploymentspec) | **GET** /api/latest/deploy/project/{deploymentProjectId}/specs |  |
| [**exportProjectSpecs**](DefaultApi.md#exportprojectspecs) | **GET** /api/latest/project/{projectKey}/specs |  |
| [**findPlansWithCustomExpirySettings**](DefaultApi.md#findplanswithcustomexpirysettings) | **GET** /api/latest/admin/expiry/custom/plan |  |
| [**findRepository**](DefaultApi.md#findrepository) | **GET** /api/latest/repository |  |
| [**findUsage**](DefaultApi.md#findusage) | **GET** /api/latest/repository/{repositoryId}/usage |  |
| [**get**](DefaultApi.md#get) | **GET** /admin/latest/darkFeatures/{key} |  |
| [**getActiveFilters**](DefaultApi.md#getactivefilters) | **GET** /api/latest/quickFilter/active |  |
| [**getAgentAuthentications**](DefaultApi.md#getagentauthentications) | **GET** /api/latest/agent/authentication |  |
| [**getAgentAutomaticManagementConfiguration**](DefaultApi.md#getagentautomaticmanagementconfiguration) | **GET** /admin/latest/config/agents/offlineAgentRemoval |  |
| [**getAgentById**](DefaultApi.md#getagentbyid) | **GET** /admin/latest/config/agents/{agentId} |  |
| [**getAgentCapabilities**](DefaultApi.md#getagentcapabilities) | **GET** /api/latest/agent/{agentId}/capability |  |
| [**getAgentInformation**](DefaultApi.md#getagentinformation) | **GET** /api/latest/agent/{agentId} |  |
| [**getAgentLocalArtifactHandler**](DefaultApi.md#getagentlocalartifacthandler) | **GET** /admin/latest/artifactHandlers/agentLocal |  |
| [**getAgentStatus**](DefaultApi.md#getagentstatus) | **GET** /api/latest/agent/{agentId}/status |  |
| [**getAgents**](DefaultApi.md#getagents) | **GET** /admin/latest/config/agents |  |
| [**getAgents1**](DefaultApi.md#getagents1) | **GET** /api/latest/agent |  |
| [**getAll**](DefaultApi.md#getall) | **GET** /admin/latest/darkFeatures |  |
| [**getAll1**](DefaultApi.md#getall1) | **GET** /api/latest/elasticConfiguration |  |
| [**getAllCapabilitiesOnServer**](DefaultApi.md#getallcapabilitiesonserver) | **GET** /api/latest/capability/groupedListing |  |
| [**getAllDeploymentProjects**](DefaultApi.md#getalldeploymentprojects) | **GET** /api/latest/deploy/dashboard |  |
| [**getAllDeploymentProjects1**](DefaultApi.md#getalldeploymentprojects1) | **GET** /api/latest/deploy/project/all |  |
| [**getAllServices**](DefaultApi.md#getallservices) | **GET** /api/latest/ |  |
| [**getAuditLogConfiguration**](DefaultApi.md#getauditlogconfiguration) | **GET** /admin/latest/config/auditLog |  |
| [**getAvailableReports**](DefaultApi.md#getavailablereports) | **GET** /api/latest/chart/reports |  |
| [**getBambooRemoteArtifactHandler**](DefaultApi.md#getbambooremoteartifacthandler) | **GET** /admin/latest/artifactHandlers/bambooRemote |  |
| [**getBranchHistory**](DefaultApi.md#getbranchhistory) | **GET** /api/latest/result/{projectKey}-{buildKey}/branch/{branchName} |  |
| [**getBrokenBuildsForUser**](DefaultApi.md#getbrokenbuildsforuser) | **GET** /responsibility/latest/brokenBuild/byUser/{name} |  |
| [**getBuild**](DefaultApi.md#getbuild) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber} |  |
| [**getBuildAlias**](DefaultApi.md#getbuildalias) | **GET** /api/latest/result/{projectKey}-{buildKey}/{buildNumber} |  |
| [**getBuildComments**](DefaultApi.md#getbuildcomments) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment |  |
| [**getBuildConcurrency**](DefaultApi.md#getbuildconcurrency) | **GET** /admin/latest/config/build/concurrency |  |
| [**getBuildHistory**](DefaultApi.md#getbuildhistory) | **GET** /api/latest/result/{projectKey}-{buildKey} |  |
| [**getBuildLabels**](DefaultApi.md#getbuildlabels) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label |  |
| [**getBuildMonitoring**](DefaultApi.md#getbuildmonitoring) | **GET** /admin/latest/config/build/monitoring |  |
| [**getBuildQueue1**](DefaultApi.md#getbuildqueue1) | **GET** /api/latest/queue |  |
| [**getBuildResultsForChangeset**](DefaultApi.md#getbuildresultsforchangeset) | **GET** /api/latest/result/byChangeset/{csid} |  |
| [**getBuildResultsForCheckoutChangeset**](DefaultApi.md#getbuildresultsforcheckoutchangeset) | **GET** /api/latest/result/byCheckoutChangeset/{csid} |  |
| [**getCapabilities**](DefaultApi.md#getcapabilities) | **GET** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability |  |
| [**getClone**](DefaultApi.md#getclone) | **PUT** /api/latest/clone/{projectKey}-{buildKey}:{toProjectKey}-{toBuildKey} |  |
| [**getConfiguration**](DefaultApi.md#getconfiguration) | **GET** /admin/latest/ephemeral/config |  |
| [**getConfiguration1**](DefaultApi.md#getconfiguration1) | **GET** /admin/latest/expiry/configuration |  |
| [**getConfiguration2**](DefaultApi.md#getconfiguration2) | **GET** /api/latest/elasticConfiguration/{configurationId} |  |
| [**getCurrentUser**](DefaultApi.md#getcurrentuser) | **GET** /api/latest/currentUser |  |
| [**getDeploymentNamingPreview**](DefaultApi.md#getdeploymentnamingpreview) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/namingPreview |  |
| [**getDeploymentProject**](DefaultApi.md#getdeploymentproject) | **GET** /api/latest/deploy/dashboard/{projectId} |  |
| [**getDeploymentProject1**](DefaultApi.md#getdeploymentproject1) | **GET** /api/latest/deploy/project/{deploymentProjectId} |  |
| [**getDeploymentProjectVariables**](DefaultApi.md#getdeploymentprojectvariables) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/variables |  |
| [**getDeploymentProjectVersions**](DefaultApi.md#getdeploymentprojectversions) | **GET** /api/latest/deploy/project/{deploymentProjectId}/version |  |
| [**getDeploymentProjectVersionsList**](DefaultApi.md#getdeploymentprojectversionslist) | **GET** /api/latest/deploy/project/{deploymentProjectId}/versions |  |
| [**getDeploymentProjects**](DefaultApi.md#getdeploymentprojects) | **GET** /api/latest/deploy/dashboard/paginate |  |
| [**getDeploymentProjectsForPlan**](DefaultApi.md#getdeploymentprojectsforplan) | **GET** /api/latest/deploy/project/forPlan |  |
| [**getDeploymentResult**](DefaultApi.md#getdeploymentresult) | **GET** /api/latest/deploy/result/{deploymentResultId} |  |
| [**getEnvironmentStatutes**](DefaultApi.md#getenvironmentstatutes) | **POST** /api/latest/deploy/dashboard/status |  |
| [**getEphemeralAgentPodLogs**](DefaultApi.md#getephemeralagentpodlogs) | **GET** /api/latest/ephemeral/pod/{pod}/logs |  |
| [**getEphemeralAgentPodRawLogs**](DefaultApi.md#getephemeralagentpodrawlogs) | **GET** /api/latest/ephemeral/pod/{pod}/logs/raw |  |
| [**getExpiry**](DefaultApi.md#getexpiry) | **GET** /api/latest/websudo-session |  |
| [**getFaviconForPlan**](DefaultApi.md#getfaviconforplan) | **GET** /api/latest/plan/favicon/{planKey} |  |
| [**getForUser**](DefaultApi.md#getforuser) | **GET** /admin/latest/darkFeatures/{key}/user/{userName} |  |
| [**getGeneralConfiguration**](DefaultApi.md#getgeneralconfiguration) | **GET** /admin/latest/config/general |  |
| [**getGlobalVariable**](DefaultApi.md#getglobalvariable) | **GET** /admin/latest/globalVariables/{variableId} |  |
| [**getGlobalVariables**](DefaultApi.md#getglobalvariables) | **GET** /admin/latest/globalVariables |  |
| [**getGroup**](DefaultApi.md#getgroup) | **GET** /admin/latest/security/groups |  |
| [**getIMServerConfig**](DefaultApi.md#getimserverconfig) | **GET** /admin/latest/config/imServer |  |
| [**getImageUrl**](DefaultApi.md#getimageurl) | **GET** /api/latest/chart |  |
| [**getInfo**](DefaultApi.md#getinfo) | **GET** /api/latest/info |  |
| [**getInstanceLog**](DefaultApi.md#getinstancelog) | **GET** /api/latest/elasticInstances/instance/{instanceId}/logs |  |
| [**getJiraIssueStatusForProject**](DefaultApi.md#getjiraissuestatusforproject) | **GET** /api/latest/deploy/issue-status/{issueKey} |  |
| [**getJiraIssueStatusForProject1**](DefaultApi.md#getjiraissuestatusforproject1) | **GET** /api/latest/deploy/issue-status/{issueKey}/{deploymentProjectId} |  |
| [**getJobs**](DefaultApi.md#getjobs) | **GET** /admin/latest/scheduler/jobs |  |
| [**getLatestBuildResults**](DefaultApi.md#getlatestbuildresults) | **GET** /api/latest/result |  |
| [**getLatestBuildResultsForProject**](DefaultApi.md#getlatestbuildresultsforproject) | **GET** /api/latest/result/{projectKey} |  |
| [**getLatestVersionStatuses**](DefaultApi.md#getlatestversionstatuses) | **GET** /api/latest/deploy/version/{deploymentVersionId}/status |  |
| [**getMailConfiguration**](DefaultApi.md#getmailconfiguration) | **GET** /admin/latest/config/mailServer |  |
| [**getMyBrokenBuilds**](DefaultApi.md#getmybrokenbuilds) | **GET** /responsibility/latest/brokenBuild/myBrokenBuilds |  |
| [**getNextDeploymentVersions**](DefaultApi.md#getnextdeploymentversions) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/nextVersion |  |
| [**getNodesStatus**](DefaultApi.md#getnodesstatus) | **GET** /api/latest/server/nodes |  |
| [**getPaginateDeploymentProject**](DefaultApi.md#getpaginatedeploymentproject) | **GET** /api/latest/deploy/dashboard/paginate/{projectId} |  |
| [**getPaginatedProjectRepositories**](DefaultApi.md#getpaginatedprojectrepositories) | **GET** /api/latest/project/{projectKey}/repositories |  |
| [**getPaginatedProjectSharedCredentials**](DefaultApi.md#getpaginatedprojectsharedcredentials) | **GET** /api/latest/project/{projectKey}/sharedCredentials |  |
| [**getPlanSummary**](DefaultApi.md#getplansummary) | **GET** /api/latest/chart/planSummary |  |
| [**getProject**](DefaultApi.md#getproject) | **GET** /api/latest/project/{projectKey} |  |
| [**getProjectVariable**](DefaultApi.md#getprojectvariable) | **GET** /api/latest/project/{projectKey}/variable/{variableName} |  |
| [**getProjectVariables**](DefaultApi.md#getprojectvariables) | **GET** /api/latest/project/{projectKey}/variables |  |
| [**getProjects**](DefaultApi.md#getprojects) | **GET** /api/latest/project |  |
| [**getQuarantineSettings**](DefaultApi.md#getquarantinesettings) | **GET** /admin/latest/config/quarantine |  |
| [**getQuickFilter**](DefaultApi.md#getquickfilter) | **GET** /api/latest/quickFilter/{id} |  |
| [**getQuickFilters**](DefaultApi.md#getquickfilters) | **GET** /api/latest/quickFilter |  |
| [**getReindexInfo**](DefaultApi.md#getreindexinfo) | **GET** /api/latest/reindex |  |
| [**getRemoteAgentConfiguration**](DefaultApi.md#getremoteagentconfiguration) | **GET** /admin/latest/config/remoteAgentSupport |  |
| [**getRemoteAgents**](DefaultApi.md#getremoteagents) | **GET** /api/latest/agent/remote |  |
| [**getResponsibleForPlanResult**](DefaultApi.md#getresponsibleforplanresult) | **GET** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey} |  |
| [**getRestElasticConfiguration**](DefaultApi.md#getrestelasticconfiguration) | **GET** /admin/latest/elastic/config |  |
| [**getResultStatus**](DefaultApi.md#getresultstatus) | **GET** /api/latest/result/status/{projectKey}-{buildKey}-{buildNumber} |  |
| [**getRssRepositoriesAllowedToAccessRepository**](DefaultApi.md#getrssrepositoriesallowedtoaccessrepository) | **GET** /api/latest/repository/{repositoryId}/rssrepository |  |
| [**getS3ArtifactHandler**](DefaultApi.md#gets3artifacthandler) | **GET** /admin/latest/artifactHandlers/s3 |  |
| [**getSecuritySettings**](DefaultApi.md#getsecuritysettings) | **GET** /admin/latest/security/settings |  |
| [**getSftpArtifactHandler**](DefaultApi.md#getsftpartifacthandler) | **GET** /admin/latest/artifactHandlers/sftp |  |
| [**getSpecsDetectionStatus**](DefaultApi.md#getspecsdetectionstatus) | **GET** /api/latest/repository/{repositoryId}/scan/status |  |
| [**getStatus**](DefaultApi.md#getstatus) | **GET** /admin/latest/expiry/status |  |
| [**getStatus1**](DefaultApi.md#getstatus1) | **GET** /api/latest/server |  |
| [**getStatus2**](DefaultApi.md#getstatus2) | **GET** /api/latest/status |  |
| [**getTemplateConfiguration**](DefaultApi.md#gettemplateconfiguration) | **GET** /api/latest/ephemeral/templateConfiguration/{configurationId} |  |
| [**getTemplateConfigurationsPage**](DefaultApi.md#gettemplateconfigurationspage) | **GET** /api/latest/ephemeral/templateConfiguration |  |
| [**getVariablesFromName**](DefaultApi.md#getvariablesfromname) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/parseVariables |  |
| [**getVersionAndPlanResult**](DefaultApi.md#getversionandplanresult) | **GET** /api/latest/deploy/version/{deploymentVersionId}/build-result |  |
| [**getVisibleFilters**](DefaultApi.md#getvisiblefilters) | **GET** /api/latest/quickFilter/visible |  |
| [**grantRssRepositoryAccess**](DefaultApi.md#grantrssrepositoryaccess) | **POST** /api/latest/repository/{repositoryId}/rssrepository |  |
| [**listAssignedRepositories**](DefaultApi.md#listassignedrepositories) | **GET** /api/latest/deploy/project/{deploymentProjectId}/repository |  |
| [**listAssignedRepositories1**](DefaultApi.md#listassignedrepositories1) | **GET** /api/latest/project/{projectKey}/repository |  |
| [**pause**](DefaultApi.md#pause) | **POST** /api/latest/server/pause |  |
| [**prepareForRestart**](DefaultApi.md#prepareforrestart) | **PUT** /api/latest/server/prepareForRestart |  |
| [**put**](DefaultApi.md#put) | **PUT** /admin/latest/darkFeatures/{key} |  |
| [**put1**](DefaultApi.md#put1) | **PUT** /admin/latest/darkFeatures/{key}/user/{userName} |  |
| [**refreshWebSudoSession**](DefaultApi.md#refreshwebsudosession) | **PUT** /api/latest/websudo-session |  |
| [**reindex**](DefaultApi.md#reindex) | **POST** /api/latest/reindex |  |
| [**removeBuildComment**](DefaultApi.md#removebuildcomment) | **DELETE** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment/{commentId} |  |
| [**removeBuildLabel**](DefaultApi.md#removebuildlabel) | **DELETE** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label/{labelName} |  |
| [**removePlanCustomExpirySettings**](DefaultApi.md#removeplancustomexpirysettings) | **DELETE** /api/latest/admin/expiry/custom/plan/{planKey} |  |
| [**removeResponsible**](DefaultApi.md#removeresponsible) | **DELETE** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey}/{name} |  |
| [**removeWebSudoFromSession**](DefaultApi.md#removewebsudofromsession) | **DELETE** /api/latest/websudo-session |  |
| [**resume**](DefaultApi.md#resume) | **POST** /api/latest/server/resume |  |
| [**revokePermissionToUseRepositoryByRssRepo**](DefaultApi.md#revokepermissiontouserepositorybyrssrepo) | **DELETE** /api/latest/repository/{targetRepositoryId}/rssrepository/{repositoryId} |  |
| [**run**](DefaultApi.md#run) | **PUT** /admin/latest/expiry/run |  |
| [**saveConfiguration**](DefaultApi.md#saveconfiguration) | **PUT** /admin/latest/ephemeral/config |  |
| [**search**](DefaultApi.md#search) | **GET** /api/latest/quicksearch |  |
| [**searchAuthors**](DefaultApi.md#searchauthors) | **GET** /api/latest/search/authors |  |
| [**searchAvailableRepositories**](DefaultApi.md#searchavailablerepositories) | **GET** /api/latest/deploy/project/{deploymentProjectId}/repository/search |  |
| [**searchAvailableRepositories1**](DefaultApi.md#searchavailablerepositories1) | **GET** /api/latest/project/{projectKey}/repository/search |  |
| [**searchAvailableRepositories2**](DefaultApi.md#searchavailablerepositories2) | **GET** /api/latest/repository/{repositoryId}/rssrepository/search |  |
| [**searchBranches**](DefaultApi.md#searchbranches) | **GET** /api/latest/search/branches |  |
| [**searchDeployments**](DefaultApi.md#searchdeployments) | **GET** /api/latest/search/deployments |  |
| [**searchForAvailablePlanChildDependencies**](DefaultApi.md#searchforavailableplanchilddependencies) | **GET** /api/latest/dependency/search/{projectKey}-{buildKey}/child |  |
| [**searchForAvailablePlanParentDependencies**](DefaultApi.md#searchforavailableplanparentdependencies) | **GET** /api/latest/dependency/search/{projectKey}-{buildKey}/parent |  |
| [**searchJobs**](DefaultApi.md#searchjobs) | **GET** /api/latest/search/jobs/{planKey} |  |
| [**searchPlans**](DefaultApi.md#searchplans) | **GET** /api/latest/search/plans |  |
| [**searchProjects**](DefaultApi.md#searchprojects) | **GET** /api/latest/search/projects |  |
| [**searchSpecsBranches**](DefaultApi.md#searchspecsbranches) | **GET** /api/latest/repository/{repositoryId}/rssBranches |  |
| [**searchStages**](DefaultApi.md#searchstages) | **GET** /api/latest/search/stages/{planKey} |  |
| [**searchUsers**](DefaultApi.md#searchusers) | **GET** /api/latest/search/users |  |
| [**searchVersions**](DefaultApi.md#searchversions) | **GET** /api/latest/search/versions |  |
| [**setAgentAutomaticManagementConfiguration**](DefaultApi.md#setagentautomaticmanagementconfiguration) | **PUT** /admin/latest/config/agents/offlineAgentRemoval |  |
| [**setConfiguration**](DefaultApi.md#setconfiguration) | **PUT** /admin/latest/expiry/configuration |  |
| [**setVisibleFilters**](DefaultApi.md#setvisiblefilters) | **PUT** /api/latest/quickFilter/visible |  |
| [**startBuild1**](DefaultApi.md#startbuild1) | **POST** /api/latest/queue/{projectKey}-{buildKey} |  |
| [**stopBuild**](DefaultApi.md#stopbuild) | **DELETE** /api/latest/queue/{projectKey}-{buildKey}-{buildNumber} |  |
| [**testConnection**](DefaultApi.md#testconnection) | **POST** /admin/latest/ephemeral/config/test-connection |  |
| [**testConnection1**](DefaultApi.md#testconnection1) | **PUT** /api/latest/repository/testConnection |  |
| [**triggerJob**](DefaultApi.md#triggerjob) | **POST** /admin/latest/scheduler/jobs/trigger |  |
| [**triggerSpecsScanning**](DefaultApi.md#triggerspecsscanning) | **POST** /api/latest/repository/{repositoryId}/scanNow |  |
| [**triggerSpecsScanning1**](DefaultApi.md#triggerspecsscanning1) | **POST** /api/latest/repository/scan |  |
| [**updateAgentCapability**](DefaultApi.md#updateagentcapability) | **PUT** /api/latest/agent/{agentId}/capability/{capabilityKey} |  |
| [**updateAgentLocalHandler**](DefaultApi.md#updateagentlocalhandler) | **PUT** /admin/latest/artifactHandlers/agentLocal |  |
| [**updateAllImageIds**](DefaultApi.md#updateallimageids) | **PUT** /api/latest/elasticConfiguration/image-id/{imageId} |  |
| [**updateAuditLogConfiguration**](DefaultApi.md#updateauditlogconfiguration) | **PUT** /admin/latest/config/auditLog |  |
| [**updateBambooRemoteHandler**](DefaultApi.md#updatebambooremotehandler) | **PUT** /admin/latest/artifactHandlers/bambooRemote |  |
| [**updateCapability**](DefaultApi.md#updatecapability) | **PUT** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability |  |
| [**updateConfiguration**](DefaultApi.md#updateconfiguration) | **PUT** /api/latest/elasticConfiguration/{configurationId} |  |
| [**updateGeneralConfiguration**](DefaultApi.md#updategeneralconfiguration) | **PUT** /admin/latest/config/general |  |
| [**updateGlobalVariable**](DefaultApi.md#updateglobalvariable) | **PUT** /admin/latest/globalVariables/{variableId} |  |
| [**updateIMServerConfig**](DefaultApi.md#updateimserverconfig) | **PUT** /admin/latest/config/imServer |  |
| [**updateMailConfiguration**](DefaultApi.md#updatemailconfiguration) | **PUT** /admin/latest/config/mailServer |  |
| [**updateQuarantineSettings**](DefaultApi.md#updatequarantinesettings) | **PUT** /admin/latest/config/quarantine |  |
| [**updateQuickFilter**](DefaultApi.md#updatequickfilter) | **PUT** /api/latest/quickFilter/{id} |  |
| [**updateRemoteAgentConfiguration**](DefaultApi.md#updateremoteagentconfiguration) | **PUT** /admin/latest/config/remoteAgentSupport |  |
| [**updateRestAgent**](DefaultApi.md#updaterestagent) | **PUT** /admin/latest/config/agents/{agentId} |  |
| [**updateRestBuildConcurrency**](DefaultApi.md#updaterestbuildconcurrency) | **PUT** /admin/latest/config/build/concurrency |  |
| [**updateRestBuildMonitoring**](DefaultApi.md#updaterestbuildmonitoring) | **PUT** /admin/latest/config/build/monitoring |  |
| [**updateRestElasticConfiguration**](DefaultApi.md#updaterestelasticconfiguration) | **PUT** /admin/latest/elastic/config |  |
| [**updateRestSecuritySettings**](DefaultApi.md#updaterestsecuritysettings) | **PUT** /admin/latest/security/settings |  |
| [**updateS3Handler**](DefaultApi.md#updates3handler) | **PUT** /admin/latest/artifactHandlers/s3 |  |
| [**updateSftpHandler**](DefaultApi.md#updatesftphandler) | **PUT** /admin/latest/artifactHandlers/sftp |  |
| [**updateTemplateConfiguration**](DefaultApi.md#updatetemplateconfiguration) | **PUT** /api/latest/ephemeral/templateConfiguration/{configurationId} |  |
| [**updateVersionStatus**](DefaultApi.md#updateversionstatus) | **POST** /api/latest/deploy/version/{deploymentVersionId}/status/{newStatus} |  |
| [**verifyGlobalVariableValue**](DefaultApi.md#verifyglobalvariablevalue) | **PUT** /admin/latest/globalVariables/verify |  |



## activateFilter

> activateFilter(id)



Activates a quick filter for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ActivateFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Quick filter id
    id: 789,
  } satisfies ActivateFilterRequest;

  try {
    const data = await api.activateFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | Quick filter id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | When filter with given id was successfully activated for current user |  -  |
| **400** | Sent when quick filter was not found with the given id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addAssignedRepository

> RestRepositoryMinimal addAssignedRepository(deploymentProjectId, restIdContainer)



Grant permission to create/edit plan in given deployment project by Bamboo Specs from given repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddAssignedRepositoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // RestIdContainer | repository id
    restIdContainer: ...,
  } satisfies AddAssignedRepositoryRequest;

  try {
    const data = await api.addAssignedRepository(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **restIdContainer** | [RestIdContainer](RestIdContainer.md) | repository id | |

### Return type

[**RestRepositoryMinimal**](RestRepositoryMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | added repository |  -  |
| **400** | When repository id is empty or null |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project or repository doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addAssignedRepository1

> RestRepositoryMinimal addAssignedRepository1(projectKey, restIdContainer)



Grant permission to create/edit plan in given project by Bamboo Specs from given repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddAssignedRepository1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // RestIdContainer | repository id
    restIdContainer: ...,
  } satisfies AddAssignedRepository1Request;

  try {
    const data = await api.addAssignedRepository1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **restIdContainer** | [RestIdContainer](RestIdContainer.md) | repository id | |

### Return type

[**RestRepositoryMinimal**](RestRepositoryMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Added repository entity |  -  |
| **400** | When idContainer is empty or null |  -  |
| **403** | When user has no Administration permission to project |  -  |
| **404** | When project does not exist or repository not found by id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addBuildComment

> addBuildComment(projectKey, buildKey, buildNumber, createCommentRequest)



Adds new comment to build result.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddBuildCommentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Build number
    buildNumber: buildNumber_example,
    // CreateCommentRequest | Build result comment
    createCommentRequest: ...,
  } satisfies AddBuildCommentRequest;

  try {
    const data = await api.addBuildComment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number | [Defaults to `undefined`] |
| **createCommentRequest** | [CreateCommentRequest](CreateCommentRequest.md) | Build result comment | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Comment added |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan or build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addBuildLabel

> addBuildLabel(projectKey, buildKey, buildNumber, restBuildLabel)



Adds new label to build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddBuildLabelRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (must be a plan key, not a job key)
    buildKey: buildKey_example,
    // string | Build number may be specified as *latest* for the result with the highest build number
    buildNumber: buildNumber_example,
    // RestBuildLabel | Build result label
    restBuildLabel: ...,
  } satisfies AddBuildLabelRequest;

  try {
    const data = await api.addBuildLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (must be a plan key, not a job key) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as *latest* for the result with the highest build number | [Defaults to `undefined`] |
| **restBuildLabel** | [RestBuildLabel](RestBuildLabel.md) | Build result label | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | On success |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project, plan, build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addCapability

> addCapability(configurationId, restCapability)



Add ephemeral agent template capability.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
    // RestCapability | Ephemeral agent template capability
    restCapability: ...,
  } satisfies AddCapabilityRequest;

  try {
    const data = await api.addCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |
| **restCapability** | [RestCapability](RestCapability.md) | Ephemeral agent template capability | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Ephemeral agent template capability updated |  -  |
| **400** | When Ephemeral agents are disabled or validation failed |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addDeploymentProject

> RestDeploymentProject addDeploymentProject(restCreateDeploymentProjectRequest)



Create deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddDeploymentProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestCreateDeploymentProjectRequest | deployment project to be created
    restCreateDeploymentProjectRequest: ...,
  } satisfies AddDeploymentProjectRequest;

  try {
    const data = await api.addDeploymentProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restCreateDeploymentProjectRequest** | [RestCreateDeploymentProjectRequest](RestCreateDeploymentProjectRequest.md) | deployment project to be created | |

### Return type

[**RestDeploymentProject**](RestDeploymentProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Created deployment project |  -  |
| **400** | If validation fails |  -  |
| **403** | If user doesn\&#39;t have create permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addResponsible

> addResponsible(name, planResultKeyOrPlanKey)



Add a responsible user for broken build.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AddResponsibleRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | User name
    name: name_example,
    // string | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2
    planResultKeyOrPlanKey: planResultKeyOrPlanKey_example,
  } satisfies AddResponsibleRequest;

  try {
    const data = await api.addResponsible(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | User name | [Defaults to `undefined`] |
| **planResultKeyOrPlanKey** | `string` | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2 | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successfully added user as responsible or user is already responsible for broken build |  -  |
| **400** | Plan does not exist or user doesn\&#39;t have permission to view it |  -  |
| **401** | User is not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authenticateAgent

> authenticateAgent(agentUuid)



Authenticates a pending agent with the given UUID. If the agent has already been authenticated, the call will not      * change it\&#39;s state.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { AuthenticateAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    agentUuid: agentUuid_example,
  } satisfies AuthenticateAgentRequest;

  try {
    const data = await api.authenticateAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentUuid** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | successful authentication of an agent |  -  |
| **400** | Validation errors occurred (the provided UUID was invalid, no agent with the given UUID was found etc.) |  -  |
| **403** | When user has no global ADMINISTRATION permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## continueBuild

> RestQueuedBuild continueBuild(projectKey, buildKey, buildNumber, executeAllStages, stage)



Continue partially done build.  Effectively, this method adds build to the build queue, so is not guarantied that build would be executed immediately. Depending on currently executed builds and length of build queue, build may be executed when queue would be drained. Additional variables could be passed to this method only query parameters (variableName&#x3D;variableValue). Variables defined in Bamboo as global variables or plan variables MUST be prefixed with bamboo.variable ie. bamboo.variable.myVariable&#x3D;valueForMyVariable. When global or plan variables would be passed to this method, will override values valid for previous build execution (override).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ContinueBuildRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key  (only top level plan key, can not be job key)
    buildKey: buildKey_example,
    // number | build number to resume/rerun
    buildNumber: 56,
    // boolean | enforce executing all stages in a plan, even if defined as manual stages. Execution will follow and include latest stage, unless some stage will fail. (optional)
    executeAllStages: true,
    // string | name of the stage that should be executed even if manual stage. Execution will follow to the next manual stage after this or end of plan if no subsequent manual stage (optional)
    stage: stage_example,
  } satisfies ContinueBuildRequest;

  try {
    const data = await api.continueBuild(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key  (only top level plan key, can not be job key) | [Defaults to `undefined`] |
| **buildNumber** | `number` | build number to resume/rerun | [Defaults to `undefined`] |
| **executeAllStages** | `boolean` | enforce executing all stages in a plan, even if defined as manual stages. Execution will follow and include latest stage, unless some stage will fail. | [Optional] [Defaults to `undefined`] |
| **stage** | `string` | name of the stage that should be executed even if manual stage. Execution will follow to the next manual stage after this or end of plan if no subsequent manual stage | [Optional] [Defaults to `undefined`] |

### Return type

[**RestQueuedBuild**](RestQueuedBuild.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information for queued build, including build number, changes and reason of build |  -  |
| **400** | When a build is currently executing or in a state that does not allow execution, such as when the plan is configured to be ineligible for re-runs. |  -  |
| **403** | When user does not have sufficient rights to view or execute build for specified plan |  -  |
| **404** | When specified plan does not exist, result for provided build number does not exist or is not top level plan result |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAgentCapability

> createAgentCapability(agentId, restCapability)



Create new agent capability.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateAgentCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
    // RestCapability | Agent capability
    restCapability: ...,
  } satisfies CreateAgentCapabilityRequest;

  try {
    const data = await api.createAgentCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |
| **restCapability** | [RestCapability](RestCapability.md) | Agent capability | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | capability created successfully |  -  |
| **400** | Validation failed |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGlobalVariable

> RestGlobalVariable createGlobalVariable(restGlobalVariable)



Create a single global variable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateGlobalVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestGlobalVariable
    restGlobalVariable: ...,
  } satisfies CreateGlobalVariableRequest;

  try {
    const data = await api.createGlobalVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restGlobalVariable** | [RestGlobalVariable](RestGlobalVariable.md) |  | |

### Return type

[**RestGlobalVariable**](RestGlobalVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Global variable that is created |  -  |
| **400** | If contains invalid input, e.g. illegal variable name, variable already exists |  -  |
| **403** | If the user lacks restricted admin permission to create global variables |  -  |
| **404** | If the variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGroup

> RestGroup createGroup(restGroup)



Create a group.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestGroup
    restGroup: ...,
  } satisfies CreateGroupRequest;

  try {
    const data = await api.createGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restGroup** | [RestGroup](RestGroup.md) |  | |

### Return type

[**RestGroup**](RestGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created group |  -  |
| **400** | Group name is not valid, group already exists or group creation is not allowed |  -  |
| **403** | User does not have System Admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createImageConfiguration

> RestElasticImageConfig createImageConfiguration(restElasticImageConfig)



Create elastic image configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateImageConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestElasticImageConfig | Elastic image configuration
    restElasticImageConfig: ...,
  } satisfies CreateImageConfigurationRequest;

  try {
    const data = await api.createImageConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restElasticImageConfig** | [RestElasticImageConfig](RestElasticImageConfig.md) | Elastic image configuration | |

### Return type

[**RestElasticImageConfig**](RestElasticImageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Elastic image created |  -  |
| **400** | When Elastic Bamboo is disabled or validation failed |  -  |
| **403** | When user does not have admin permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrUpdateVariable

> RestVariableDefinitionContext createOrUpdateVariable(projectKey, restVariable)



Create or update project variable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateOrUpdateVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // RestVariable | Project variable
    restVariable: ...,
  } satisfies CreateOrUpdateVariableRequest;

  try {
    const data = await api.createOrUpdateVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **restVariable** | [RestVariable](RestVariable.md) | Project variable | |

### Return type

[**RestVariableDefinitionContext**](RestVariableDefinitionContext.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated variable |  -  |
| **201** | Created variable |  -  |
| **400** | When validation fails |  -  |
| **403** | When user has no Administration permission to the project |  -  |
| **404** | When specified project does not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createProject

> RestProjectCreate createProject(restProjectCreate)



Create project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestProjectCreate | Project
    restProjectCreate: ...,
  } satisfies CreateProjectRequest;

  try {
    const data = await api.createProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restProjectCreate** | [RestProjectCreate](RestProjectCreate.md) | Project | |

### Return type

[**RestProjectCreate**](RestProjectCreate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created project |  -  |
| **400** | When validation fails |  -  |
| **403** | When user has no global CREATE permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createQuickFilter

> RestQuickFilter createQuickFilter(restQuickFilter)



Create a new quick filter with basic configuration, e.g. name or position on list. This method does not allow to configure quick filter\&#39;s rules.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateQuickFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestQuickFilter | Quick filter
    restQuickFilter: ...,
  } satisfies CreateQuickFilterRequest;

  try {
    const data = await api.createQuickFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restQuickFilter** | [RestQuickFilter](RestQuickFilter.md) | Quick filter | |

### Return type

[**RestQuickFilter**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned when quick filter was created successfully. Response will contain Quick Filter definition with assigned id |  -  |
| **400** | When any validation errors occur. Response will contain all error messages |  -  |
| **403** | User don\&#39;t have restricted or system administrator permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTemplateConfiguration

> RestEphemeralAgentTemplate createTemplateConfiguration(restEphemeralAgentTemplate)



Create ephemeral template configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateTemplateConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestEphemeralAgentTemplate | Ephemeral template configuration
    restEphemeralAgentTemplate: ...,
  } satisfies CreateTemplateConfigurationRequest;

  try {
    const data = await api.createTemplateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restEphemeralAgentTemplate** | [RestEphemeralAgentTemplate](RestEphemeralAgentTemplate.md) | Ephemeral template configuration | |

### Return type

[**RestEphemeralAgentTemplate**](RestEphemeralAgentTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ephemeral template configuration created |  -  |
| **400** | When Ephemeral agents are disabled or validation failed |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createVersion

> RestDeploymentVersion createVersion(deploymentProjectId, restCreateVersionRequest)



Create deployment version for given deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { CreateVersionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // RestCreateVersionRequest | deployment version to be created
    restCreateVersionRequest: ...,
  } satisfies CreateVersionRequest;

  try {
    const data = await api.createVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **restCreateVersionRequest** | [RestCreateVersionRequest](RestCreateVersionRequest.md) | deployment version to be created | |

### Return type

[**RestDeploymentVersion**](RestDeploymentVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project version |  -  |
| **400** | Validation error |  -  |
| **401** | For anonymous access |  -  |
| **403** | User don\&#39;t have permissions to create version in deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deactivateAllFilters

> deactivateAllFilters()



Deactivates all quick filter for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeactivateAllFiltersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.deactivateAllFilters();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | When all filters were successfully deactivated for current user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deactivateFilter

> deactivateFilter(id)



Deactivates a quick filter for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeactivateFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Quick filter id
    id: 789,
  } satisfies DeactivateFilterRequest;

  try {
    const data = await api.deactivateFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | Quick filter id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | When filter with given id was successfully deactivated for current user |  -  |
| **400** | Sent when quick filter was not found with the given id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAgent

> deleteAgent(agentId)



Remove build agent.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
  } satisfies DeleteAgentRequest;

  try {
    const data = await api.deleteAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Agent removed |  -  |
| **400** | Couldn\&#39;t remove agent |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAgentCapability

> deleteAgentCapability(agentId, capabilityKey)



Remove build agent capability.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteAgentCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
    // string | Capability key
    capabilityKey: capabilityKey_example,
  } satisfies DeleteAgentCapabilityRequest;

  try {
    const data = await api.deleteAgentCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |
| **capabilityKey** | `string` | Capability key | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | capability removed successfully |  -  |
| **400** | Couldn\&#39;t remove agent\&#39;s capability |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAllAgentCapabilities

> deleteAllAgentCapabilities(agentId)



Remove all capabilities of build agent.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteAllAgentCapabilitiesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
  } satisfies DeleteAllAgentCapabilitiesRequest;

  try {
    const data = await api.deleteAllAgentCapabilities(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Agent\&#39;s capabilities removed |  -  |
| **400** | Couldn\&#39;t remove agent\&#39;s capabilities |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCapability

> deleteCapability(name, configurationId)



Remove ephemeral agent template capability.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Capability key
    name: name_example,
    // number | Configuration ID
    configurationId: 789,
  } satisfies DeleteCapabilityRequest;

  try {
    const data = await api.deleteCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Capability key | [Defaults to `undefined`] |
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Ephemeral agent template capability removed |  -  |
| **400** | When Ephemeral agents are disabled |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteConfiguration

> deleteConfiguration(configurationId)



Delete elastic image configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Image configuration id
    configurationId: 789,
  } satisfies DeleteConfigurationRequest;

  try {
    const data = await api.deleteConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Image configuration id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Elastic image removed |  -  |
| **400** | When Elastic Bamboo is disabled or image is provided by Bamboo or removal was unsuccessful |  -  |
| **403** | When user does not have admin permissions |  -  |
| **404** | When image configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDeploymentProject

> deleteDeploymentProject(deploymentProjectId)



Delete deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteDeploymentProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies DeleteDeploymentProjectRequest;

  try {
    const data = await api.deleteDeploymentProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Deployment project removed |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGlobalVariable

> deleteGlobalVariable(variableId)



Delete a global variable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteGlobalVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Id of the variable to be deleted
    variableId: variableId_example,
  } satisfies DeleteGlobalVariableRequest;

  try {
    const data = await api.deleteGlobalVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableId** | `string` | Id of the variable to be deleted | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Variable deleted successfully |  -  |
| **403** | If the user lacks restricted admin permission to delete global variables |  -  |
| **404** | If the variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIMServerConfiguration

> deleteIMServerConfiguration()



Delete current IM Server configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteIMServerConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.deleteIMServerConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Current IM server configuration is deleted |  -  |
| **403** | If the user lacks restricted admin permission to delete IM configuration |  -  |
| **404** | If no IM server is configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMailConfiguration

> deleteMailConfiguration()



Delete current mail configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteMailConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.deleteMailConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successfully deleted mail configuration |  -  |
| **403** | The user lacks the system administrator permissions to delete mail server config |  -  |
| **404** | Mail server configuration does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProject

> deleteProject(projectKey)



Marks project for deletion. Project will be deleted by a batch job.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
  } satisfies DeleteProjectRequest;

  try {
    const data = await api.deleteProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | When project is successfully marked for deletion |  -  |
| **400** | When project can\&#39;t be removed, e.g. when it contains any plans |  -  |
| **403** | When user has no Administration permission to project |  -  |
| **404** | When specified project or repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectSharedCredentials

> deleteProjectSharedCredentials(projectKey, sharedCredentialId)



Deletes shared project credentials specified by id.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteProjectSharedCredentialsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | project shared credentials id
    sharedCredentialId: sharedCredentialId_example,
  } satisfies DeleteProjectSharedCredentialsRequest;

  try {
    const data = await api.deleteProjectSharedCredentials(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **sharedCredentialId** | `string` | project shared credentials id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Project credentials removed |  -  |
| **403** | When user has no admin permission to the project or permission belongs to another project |  -  |
| **404** | When specified project or credentials do not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectVariable

> deleteProjectVariable(projectKey, variableName)



Delete the project variable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteProjectVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | name of the variable to be deleted
    variableName: variableName_example,
  } satisfies DeleteProjectVariableRequest;

  try {
    const data = await api.deleteProjectVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **variableName** | `string` | name of the variable to be deleted | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Project variable successfully deleted |  -  |
| **400** | Name field is empty |  -  |
| **403** | When user has no permission to administrate specified project |  -  |
| **404** | When specified project/variable does not exist or user has no VIEW permission for it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteQuickFilter

> deleteQuickFilter(id)



Delete a quick filter.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteQuickFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Quick filter id
    id: 789,
  } satisfies DeleteQuickFilterRequest;

  try {
    const data = await api.deleteQuickFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | Quick filter id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned when quick filter was deleted successfully |  -  |
| **400** | Sent when quick filter was not found with the given id |  -  |
| **403** | User don\&#39;t have restricted or system administrator permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRepositoryMapping

> deleteRepositoryMapping(repositoryId, deploymentProjectId)



Remove approval to create plans in given deployment project by given repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteRepositoryMappingRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Linked repository root id
    repositoryId: repositoryId_example,
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies DeleteRepositoryMappingRequest;

  try {
    const data = await api.deleteRepositoryMapping(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `string` | Linked repository root id | [Defaults to `undefined`] |
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | removed repository |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project or repository doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRepositoryMapping1

> deleteRepositoryMapping1(projectKey, repositoryId)



Remove approval to create plans in given project by given repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteRepositoryMapping1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | linked repository root id
    repositoryId: repositoryId_example,
  } satisfies DeleteRepositoryMapping1Request;

  try {
    const data = await api.deleteRepositoryMapping1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **repositoryId** | `string` | linked repository root id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successfully removed link between project and repository. |  -  |
| **403** | When user has no Administration permission to project |  -  |
| **404** | When specified project or repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTemplateConfiguration

> deleteTemplateConfiguration(configurationId)



Delete ephemeral template configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DeleteTemplateConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
  } satisfies DeleteTemplateConfigurationRequest;

  try {
    const data = await api.deleteTemplateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Ephemeral template configuration removed |  -  |
| **400** | When Ephemeral agents are disabled or removal was unsuccessful |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableAgent

> RestAgent disableAgent(agentId)



Disable an agent.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { DisableAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
  } satisfies DisableAgentRequest;

  try {
    const data = await api.disableAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |

### Return type

[**RestAgent**](RestAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent has been disabled |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editDeploymentProject

> RestDeploymentProject editDeploymentProject(deploymentProjectId, restUpdateDeploymentProjectRequest)



Update deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EditDeploymentProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // RestUpdateDeploymentProjectRequest | deployment project to be updated
    restUpdateDeploymentProjectRequest: ...,
  } satisfies EditDeploymentProjectRequest;

  try {
    const data = await api.editDeploymentProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **restUpdateDeploymentProjectRequest** | [RestUpdateDeploymentProjectRequest](RestUpdateDeploymentProjectRequest.md) | deployment project to be updated | |

### Return type

[**RestDeploymentProject**](RestDeploymentProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project details |  -  |
| **400** | Validation error |  -  |
| **403** | User has no edit permission |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableAgent

> RestAgent enableAgent(agentId)



Enable an agent.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
  } satisfies EnableAgentRequest;

  try {
    const data = await api.enableAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |

### Return type

[**RestAgent**](RestAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent has been enabled |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableAllProjectsAccess

> enableAllProjectsAccess(repositoryId, restEnableContainer)



Enables access (i.e. allowing modifications) for all Bamboo projects by the Bamboo Specs code stored in this repository. Changes in Bamboo Specs detected will trigger execution of Specs and thus an update of corresponding entities (such as build plans or deployments).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableAllProjectsAccessRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // RestEnableContainer | Enable request
    restEnableContainer: ...,
  } satisfies EnableAllProjectsAccessRequest;

  try {
    const data = await api.enableAllProjectsAccess(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restEnableContainer** | [RestEnableContainer](RestEnableContainer.md) | Enable request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully enabled/disabled access of Bamboo Specs stored in the repository to all projects |  -  |
| **400** | This repository does not handle \&#39;enableAllProjectsAccess\&#39; feature or input data is incorrect |  -  |
| **403** | The calling user has insufficient permissions to change this setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableAllRepositoriesAccess

> enableAllRepositoriesAccess(projectKey, repositoryId, restEnableContainer)



Enables access (i.e. allowing usage) to all project\&#39;s repositories by the Bamboo Specs code stored in this repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableAllRepositoriesAccessRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // number | Repository id
    repositoryId: 789,
    // RestEnableContainer | Enable request
    restEnableContainer: ...,
  } satisfies EnableAllRepositoriesAccessRequest;

  try {
    const data = await api.enableAllRepositoriesAccess(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restEnableContainer** | [RestEnableContainer](RestEnableContainer.md) | Enable request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully enabled/disabled access of Bamboo Specs stored in the repository to all project\&#39;s repositories |  -  |
| **400** | This repository does not handle \&#39;enableAllRepositoriesAccess\&#39; feature or input data is incorrect |  -  |
| **403** | The calling user has insufficient permissions to change this setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableAllRepositoriesAccess1

> enableAllRepositoriesAccess1(repositoryId, restEnableContainer)



Enables access (i.e. allowing usage in plans or deployment projects) for all Bamboo linked repositories by the Bamboo Specs code stored in this repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableAllRepositoriesAccess1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // RestEnableContainer | Enable request
    restEnableContainer: ...,
  } satisfies EnableAllRepositoriesAccess1Request;

  try {
    const data = await api.enableAllRepositoriesAccess1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restEnableContainer** | [RestEnableContainer](RestEnableContainer.md) | Enable request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully enabled/disabled access of Bamboo Specs stored in the repository to all linked repositories |  -  |
| **400** | This repository does not handle \&#39;enableAllRepositoriesAccess\&#39; feature or input data is incorrect |  -  |
| **403** | The calling user has insufficient permissions to change this setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableCi

> enableCi(repositoryId, restEnableContainer)



Enables or disables detection of Bamboo Specs stored in the repository. If enabled, code changes detected in Bamboo Specs in new commits will trigger execution of Bamboo Specs and thus an update of corresponding entities (such as build plans, deployments or permissions).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableCiRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // RestEnableContainer | Enable request
    restEnableContainer: ...,
  } satisfies EnableCiRequest;

  try {
    const data = await api.enableCi(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restEnableContainer** | [RestEnableContainer](RestEnableContainer.md) | Enable request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully enabled/disabled detection of Bamboo Specs stored in the repository |  -  |
| **400** | This repository does not support this feature or input data is incorrect |  -  |
| **403** | The calling user has insufficient permissions to change this setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableProjectCreation

> enableProjectCreation(repositoryId, restEnableContainer)



Enables build and deployment project creation by the Bamboo Specs code stored in this repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EnableProjectCreationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // RestEnableContainer | Enable request
    restEnableContainer: ...,
  } satisfies EnableProjectCreationRequest;

  try {
    const data = await api.enableProjectCreation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restEnableContainer** | [RestEnableContainer](RestEnableContainer.md) | Enable request | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully enabled/disabled ability of Bamboo Specs stored in the repository to create projects and deployment projects |  -  |
| **400** | This repository does not handle \&#39;enableProjectCreation\&#39; feature or input data is incorrect |  -  |
| **403** | The calling user has insufficient permissions to change this setting |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## encrypt

> ManualEncryptionResponse encrypt(manualEncryptionRequest)



Encrypts a given text based on the instance specific cipher. Encrypted data can be used i.a. in Repository-stored Specs. Feature can be enabled or disabled in Bamboo security configuration. Number of allowed requests per user is limited and can be modified in Bamboo security configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { EncryptRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // ManualEncryptionRequest | The request containing the details of manual encryption
    manualEncryptionRequest: ...,
  } satisfies EncryptRequest;

  try {
    const data = await api.encrypt(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **manualEncryptionRequest** | [ManualEncryptionRequest](ManualEncryptionRequest.md) | The request containing the details of manual encryption | |

### Return type

[**ManualEncryptionResponse**](ManualEncryptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Encrypted text |  -  |
| **404** | A response with code HTTP 404 indicates that feature is disabled in Bamboo |  -  |
| **429** | A response with code HTTP 429 indicates that this resource had been called to many times by the authenticated user. Retry-After header contains information about how long (in seconds) the user has to wait till next call will be allowed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportDeploymentSpec

> exportDeploymentSpec(deploymentProjectId, _package, format)



Export a deployment project to Bamboo Specs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ExportDeploymentSpecRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // string | The package to use as the namespace of the exported Spec (optional)
    _package: _package_example,
    // string | Optionally, a format of code. It\'s \'java\' by default. Other option is \'yaml. (optional)
    format: format_example,
  } satisfies ExportDeploymentSpecRequest;

  try {
    const data = await api.exportDeploymentSpec(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **_package** | `string` | The package to use as the namespace of the exported Spec | [Optional] [Defaults to `undefined`] |
| **format** | `string` | Optionally, a format of code. It\&#39;s \&#39;java\&#39; by default. Other option is \&#39;yaml. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A JSON object with a code field containing the spec |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportProjectSpecs

> exportProjectSpecs(projectKey, _package, format)



Export all of the plans for a project to Bamboo specs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ExportProjectSpecsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | The project to export for
    projectKey: projectKey_example,
    // string | A package name for the exported spec (optional)
    _package: _package_example,
    // 'JAVA' | 'YAML' | a format of code. It\'s \'java\' by default. (optional)
    format: format_example,
  } satisfies ExportProjectSpecsRequest;

  try {
    const data = await api.exportProjectSpecs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | The project to export for | [Defaults to `undefined`] |
| **_package** | `string` | A package name for the exported spec | [Optional] [Defaults to `undefined`] |
| **format** | `JAVA`, `YAML` | a format of code. It\&#39;s \&#39;java\&#39; by default. | [Optional] [Defaults to `undefined`] [Enum: JAVA, YAML] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | representation of all project plans as Bamboo specs |  -  |
| **400** | Export error |  -  |
| **403** | User has insufficient permissions for the request |  -  |
| **404** | When specified project does not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findPlansWithCustomExpirySettings

> FindPlansWithCustomExpirySettings200Response findPlansWithCustomExpirySettings(limit, start)



Get list of all plans where user has admin permission and which override global expiry settings. If global expiry is not enabled it returns empty response.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { FindPlansWithCustomExpirySettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies FindPlansWithCustomExpirySettingsRequest;

  try {
    const data = await api.findPlansWithCustomExpirySettings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**FindPlansWithCustomExpirySettings200Response**](FindPlansWithCustomExpirySettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of plans with custom expiry settings sorted by project name and plan name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findRepository

> RestRepositoryList findRepository(searchTerm)



Search for existing linked repositories by name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { FindRepositoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Target repository id (optional)
    searchTerm: searchTerm_example,
  } satisfies FindRepositoryRequest;

  try {
    const data = await api.findRepository(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchTerm** | `string` | Target repository id | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRepositoryList**](RestRepositoryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The page object with repositories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsage

> RestRepositoryUsageModel findUsage(repositoryId, maxPlans, maxEnvironments)



Search for usages of given repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { FindUsageRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // number | Maximum count of detailed plans at response (optional)
    maxPlans: 56,
    // number | Maximum count of detailed environments at response (optional)
    maxEnvironments: 56,
  } satisfies FindUsageRequest;

  try {
    const data = await api.findUsage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **maxPlans** | `number` | Maximum count of detailed plans at response | [Optional] [Defaults to `20`] |
| **maxEnvironments** | `number` | Maximum count of detailed environments at response | [Optional] [Defaults to `20`] |

### Return type

[**RestRepositoryUsageModel**](RestRepositoryUsageModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plans and environments which use this repository |  -  |
| **403** | User has no permissions to view repository or project |  -  |
| **404** | Repository or project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get

> RestDarkFeature get(key)



Retrieves whether a given dark feature key is enabled for this instance.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | key of the dark feature
    key: key_example,
  } satisfies GetRequest;

  try {
    const data = await api.get(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | `string` | key of the dark feature | [Defaults to `undefined`] |

### Return type

[**RestDarkFeature**](RestDarkFeature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of the dark feature for this instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActiveFilters

> Array&lt;RestQuickFilter&gt; getActiveFilters()



Return active quick filters for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetActiveFiltersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getActiveFilters();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestQuickFilter&gt;**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of active quick filters for logged in user. Each entity will contain only basic configuration, excluding e.g. quick filter\&#39;s rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentAuthentications

> Array&lt;RestRemoteAgentAuthentication&gt; getAgentAuthentications(pending)



Provides a list of all agent authentication statuses.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentAuthenticationsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // boolean | Filter only pending or only approved agents (optional)
    pending: true,
  } satisfies GetAgentAuthenticationsRequest;

  try {
    const data = await api.getAgentAuthentications(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pending** | `boolean` | Filter only pending or only approved agents | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestRemoteAgentAuthentication&gt;**](RestRemoteAgentAuthentication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful call will return a complete (non-paginated) list of agent |  -  |
| **403** | User has insufficient permissions for the request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentAutomaticManagementConfiguration

> RestRemoteAgentConfiguration getAgentAutomaticManagementConfiguration()



Retrieve the agents automatic management configuration

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentAutomaticManagementConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAgentAutomaticManagementConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestRemoteAgentConfiguration**](RestRemoteAgentConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent automatic management configuration |  -  |
| **403** | The user lacks administration permission to view this information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentById

> RestAgent getAgentById(agentId)



Retrieve a build agent definition by id.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentByIdRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Id of the agent
    agentId: agentId_example,
  } satisfies GetAgentByIdRequest;

  try {
    const data = await api.getAgentById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `string` | Id of the agent | [Defaults to `undefined`] |

### Return type

[**RestAgent**](RestAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent definition of agent with the id |  -  |
| **403** | If the user lacks restricted admin permission to view agent |  -  |
| **404** | If the agent does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentCapabilities

> Array&lt;RestCapability&gt; getAgentCapabilities(agentId, includeShared)



List agent\&#39;s capabilities.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentCapabilitiesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
    // boolean | if response should include shared agent capabilities (optional)
    includeShared: true,
  } satisfies GetAgentCapabilitiesRequest;

  try {
    const data = await api.getAgentCapabilities(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |
| **includeShared** | `boolean` | if response should include shared agent capabilities | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestCapability&gt;**](RestCapability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | array of agent\&#39;s capabilities |  -  |
| **403** | User doesn\&#39;t have required permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentInformation

> RestAgentInformation getAgentInformation(agentId, maxResult, expand, includeShared, startIndex)



Provides details of an agent.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentInformationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
    // number | Maximum count of capabilities/jobs/environments (optional)
    maxResult: 56,
    // string | Expand parameter (optional)
    expand: expand_example,
    // boolean | if response should include shared agent capabilities (optional)
    includeShared: true,
    // number | Start index of capabilities/jobs/environments (optional)
    startIndex: 56,
  } satisfies GetAgentInformationRequest;

  try {
    const data = await api.getAgentInformation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of capabilities/jobs/environments | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Expand parameter | [Optional] [Defaults to `undefined`] |
| **includeShared** | `boolean` | if response should include shared agent capabilities | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of capabilities/jobs/environments | [Optional] [Defaults to `undefined`] |

### Return type

[**RestAgentInformation**](RestAgentInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of an agent |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentLocalArtifactHandler

> RestArtifactHandler getAgentLocalArtifactHandler()



Retrieve configuration of Agent-Local Artifact Handler.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentLocalArtifactHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAgentLocalArtifactHandler();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of Agent-Local Artifact Handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentStatus

> getAgentStatus(agentId)



Provides information about status of agent, if it\&#39;s online or offline.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | filter only remote or only approved agents
    agentId: 789,
  } satisfies GetAgentStatusRequest;

  try {
    const data = await api.getAgentStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | filter only remote or only approved agents | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete (non-paginated) array of remote agents |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgents

> GetAgents200Response getAgents()



Return collection of all agents of all types.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgentsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAgents();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAgents200Response**](GetAgents200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | All agents of all types and links to each |  -  |
| **403** | If the user lacks restricted admin permission to view agents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgents1

> Array&lt;RestBuildAgent&gt; getAgents1(online)



Provides a list of agents.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAgents1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // boolean | Filter agents based on their online statuses (optional)
    online: true,
  } satisfies GetAgents1Request;

  try {
    const data = await api.getAgents1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **online** | `boolean` | Filter agents based on their online statuses | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestBuildAgent&gt;**](RestBuildAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete (non-paginated) list of agents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAll

> Array&lt;RestDarkFeature&gt; getAll()



Retrieves a list of dark features that are enabled for all users.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAllRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAll();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestDarkFeature&gt;**](RestDarkFeature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of dark features that are enabled for all users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAll1

> Array&lt;RestElasticImageConfig&gt; getAll1()



Fetch all elastic image configurations.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAll1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAll1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestElasticImageConfig&gt;**](RestElasticImageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of elastic image configurations |  -  |
| **400** | When Elastic Bamboo is disabled |  -  |
| **403** | When user does not have admin permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllCapabilitiesOnServer

> getAllCapabilitiesOnServer(maxResult, searchTerm, lastGroup, startIndex)



Provides a list of capabilities for a select list in the UI.  Filterable and paginable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAllCapabilitiesOnServerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of capabilities (optional)
    maxResult: 56,
    // string | Search term (optional)
    searchTerm: searchTerm_example,
    // string | Last group (optional)
    lastGroup: lastGroup_example,
    // number | Start index of capabilities (optional)
    startIndex: 56,
  } satisfies GetAllCapabilitiesOnServerRequest;

  try {
    const data = await api.getAllCapabilitiesOnServer(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of capabilities | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | Search term | [Optional] [Defaults to `undefined`] |
| **lastGroup** | `string` | Last group | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of capabilities | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server capabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllDeploymentProjects

> Array&lt;DashboardProjectWithEnvironmentStatus&gt; getAllDeploymentProjects()



Get all deployment projects. This method fetch all deployment projects visible to user. It\&#39;s not optimized for instances with large count of deployment projects and environments, use paged versions instead.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAllDeploymentProjectsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAllDeploymentProjects();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;DashboardProjectWithEnvironmentStatus&gt;**](DashboardProjectWithEnvironmentStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment projects with environments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllDeploymentProjects1

> Array&lt;RestDeploymentProject&gt; getAllDeploymentProjects1()



Find all deployment projects with environments. Returns only deployment projects and environments visible for user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAllDeploymentProjects1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAllDeploymentProjects1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestDeploymentProject&gt;**](RestDeploymentProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of deployment projects with environments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllServices

> RestResources getAllServices()



Provides list of available REST resources in Bamboo

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAllServicesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAllServices();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestResources**](RestResources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of available REST resources |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAuditLogConfiguration

> RestAuditLogConfiguration getAuditLogConfiguration()



Retrieve audit log settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAuditLogConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getAuditLogConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestAuditLogConfiguration**](RestAuditLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit log settings |  -  |
| **403** | If the user lacks restricted admin permission to view audit log settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvailableReports

> RestReports getAvailableReports(maxResult, expand, startIndex)



Fetch available reports list.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetAvailableReportsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of reports (optional)
    maxResult: 56,
    // string | Possible values: reports (optional)
    expand: expand_example,
    // number | Start index of reports (optional)
    startIndex: 56,
  } satisfies GetAvailableReportsRequest;

  try {
    const data = await api.getAvailableReports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of reports | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Possible values: reports | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of reports | [Optional] [Defaults to `undefined`] |

### Return type

[**RestReports**](RestReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chart |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBambooRemoteArtifactHandler

> SimpleRestArtifactHandler getBambooRemoteArtifactHandler()



Retrieve configuration of Bamboo Server Artifact Handler.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBambooRemoteArtifactHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getBambooRemoteArtifactHandler();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SimpleRestArtifactHandler**](SimpleRestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of Bamboo Server Artifact Handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBranchHistory

> RestResults getBranchHistory(buildKey, branchName, projectKey, includeAllStates, continuable, issueKey, maxResults, startIndex, label, buildstate, favourite, expand, lifeCycleState)



Provide list of build results for specified plan\&#39;s branch. Plan might be top level plan (projectKey-planKey) or job plan (projectKey-planKey-jobKey).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBranchHistoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Branch name
    branchName: branchName_example,
    // string | project key
    projectKey: projectKey_example,
    // boolean | return build results in all lifecycle states, including unknown and active states (optional)
    includeAllStates: true,
    // boolean | filter only results that may be continued (stopped on Manual Stage) (optional)
    continuable: true,
    // string | Filter by comma separated list of Jira issue key related to result (optional)
    issueKey: issueKey_example,
    // number | Maximum size for returned list (optional)
    maxResults: 56,
    // number | Start index for results list (zero based) (optional)
    startIndex: 56,
    // string | Filter by comma separated list of labels (optional)
    label: label_example,
    // string | filter results by state, valid values are Unknown, Successful, Failed (optional)
    buildstate: buildstate_example,
    // string | Filters build results list to show only results for favourite plans. Works only for authenticated user (optional)
    favourite: favourite_example,
    // string | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix. (optional)
    expand: expand_example,
    // string | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) (optional)
    lifeCycleState: lifeCycleState_example,
  } satisfies GetBranchHistoryRequest;

  try {
    const data = await api.getBranchHistory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **branchName** | `string` | Branch name | [Defaults to `undefined`] |
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **includeAllStates** | `boolean` | return build results in all lifecycle states, including unknown and active states | [Optional] [Defaults to `undefined`] |
| **continuable** | `boolean` | filter only results that may be continued (stopped on Manual Stage) | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | Filter by comma separated list of Jira issue key related to result | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | Maximum size for returned list | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index for results list (zero based) | [Optional] [Defaults to `undefined`] |
| **label** | `string` | Filter by comma separated list of labels | [Optional] [Defaults to `undefined`] |
| **buildstate** | `string` | filter results by state, valid values are Unknown, Successful, Failed | [Optional] [Defaults to `undefined`] |
| **favourite** | `string` | Filters build results list to show only results for favourite plans. Works only for authenticated user | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix. | [Optional] [Defaults to `undefined`] |
| **lifeCycleState** | `string` | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) | [Optional] [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest build results for specified plan. Results are ordered from latest or oldest |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan or branch does not exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBrokenBuildsForUser

> GetBrokenBuildsForUser200Response getBrokenBuildsForUser(name, limit, start, showAllResponsible)



Get broken builds for user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBrokenBuildsForUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | User name
    name: name_example,
    // number (optional)
    limit: 56,
    // number (optional)
    start: 56,
    // string | If response should include other responsible users (optional)
    showAllResponsible: showAllResponsible_example,
  } satisfies GetBrokenBuildsForUserRequest;

  try {
    const data = await api.getBrokenBuildsForUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | User name | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **start** | `number` |  | [Optional] [Defaults to `0`] |
| **showAllResponsible** | `string` | If response should include other responsible users | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBrokenBuildsForUser200Response**](GetBrokenBuildsForUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of plan keys with responsible users |  -  |
| **400** | Plan does not exist or user doesn\&#39;t have permission to view it |  -  |
| **403** | User has no admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuild

> Result getBuild(projectKey, buildKey, buildNumber, expand, buildPositions)



Provide build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Build number may be specified as *latest* for the result with the highest build number
    buildNumber: buildNumber_example,
    // string | expands build result details on request. Possible values are: changes, metadata, artifacts, comments, labels, jiraIssues, stages, logEntries. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. logEntries and testResults are available only for job results (optional)
    expand: expand_example,
    // string | in case of PENDING or QUEUED state expands build result queue position (optional)
    buildPositions: buildPositions_example,
  } satisfies GetBuildRequest;

  try {
    const data = await api.getBuild(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as *latest* for the result with the highest build number | [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: changes, metadata, artifacts, comments, labels, jiraIssues, stages, logEntries. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. logEntries and testResults are available only for job results | [Optional] [Defaults to `undefined`] |
| **buildPositions** | `string` | in case of PENDING or QUEUED state expands build result queue position | [Optional] [Defaults to `undefined`] |

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Result of single build. Presented content contain information for finished build. If build is in progress, contains additional runtime information. Top level plan contains additionally progress information, job progress information, current log entries and hasExecutableAgent boolean flag. |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan or build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildAlias

> Result getBuildAlias(projectKey, buildKey, buildNumber, expand)



Provide build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildAliasRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Build number may be specified as *latest* for the result with the highest build number
    buildNumber: buildNumber_example,
    // string | expands build result details on request. Possible values are: changes, metadata, artifacts, comments, labels, jiraIssues, stages, logEntries. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. logEntries and testResults are available only for job results (optional)
    expand: expand_example,
  } satisfies GetBuildAliasRequest;

  try {
    const data = await api.getBuildAlias(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as *latest* for the result with the highest build number | [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: changes, metadata, artifacts, comments, labels, jiraIssues, stages, logEntries. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. logEntries and testResults are available only for job results | [Optional] [Defaults to `undefined`] |

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Result of single build. Presented content contain information for finished build. If build is in progress, contains additional runtime information. Top level plan contains additionally progress information, job progress information, current log entries and hasExecutableAgent boolean flag. |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan or build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildComments

> RestComments getBuildComments(projectKey, buildKey, buildNumber)



Provide list of comments for build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildCommentsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Build number may be specified as *latest* for the result with the highest build number
    buildNumber: buildNumber_example,
  } satisfies GetBuildCommentsRequest;

  try {
    const data = await api.getBuildComments(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as *latest* for the result with the highest build number | [Defaults to `undefined`] |

### Return type

[**RestComments**](RestComments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of comments for build result |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan or build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildConcurrency

> RestBuildConcurrency getBuildConcurrency()



Retrieve build concurrency settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildConcurrencyRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getBuildConcurrency();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestBuildConcurrency**](RestBuildConcurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bamboo build concurrency settings |  -  |
| **403** | If the user lacks restricted admin permission to view build concurrency settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildHistory

> RestResults getBuildHistory(projectKey, buildKey, includeAllStates, continuable, expand, issueKey, maxResults, startIndex, label, buildstate, favourite, lifeCycleState)



Provide list of build results for specified plan. Plan might be top level plan (projectKey-planKey) or job plan (projectKey-planKey-jobKey).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildHistoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // boolean | return build results in all lifecycle states, including unknown and active states (optional)
    includeAllStates: true,
    // boolean | filter only results that may be continued (stopped on Manual Stage) (optional)
    continuable: true,
    // string | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix (optional)
    expand: expand_example,
    // string | Filter by comma separated list of Jira issue key related to result (optional)
    issueKey: issueKey_example,
    // number | Maximum size for returned list (optional)
    maxResults: 56,
    // number | Start index for results list (zero based) (optional)
    startIndex: 56,
    // string | Filter by comma separated list of labels (optional)
    label: label_example,
    // string | filter results by state, valid values are Unknown, Successful, Failed (optional)
    buildstate: buildstate_example,
    // string | Filters build results list to show only results for favourite plans. Works only for authenticated user (optional)
    favourite: favourite_example,
    // string | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) (optional)
    lifeCycleState: lifeCycleState_example,
  } satisfies GetBuildHistoryRequest;

  try {
    const data = await api.getBuildHistory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **includeAllStates** | `boolean` | return build results in all lifecycle states, including unknown and active states | [Optional] [Defaults to `undefined`] |
| **continuable** | `boolean` | filter only results that may be continued (stopped on Manual Stage) | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | Filter by comma separated list of Jira issue key related to result | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | Maximum size for returned list | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index for results list (zero based) | [Optional] [Defaults to `undefined`] |
| **label** | `string` | Filter by comma separated list of labels | [Optional] [Defaults to `undefined`] |
| **buildstate** | `string` | filter results by state, valid values are Unknown, Successful, Failed | [Optional] [Defaults to `undefined`] |
| **favourite** | `string` | Filters build results list to show only results for favourite plans. Works only for authenticated user | [Optional] [Defaults to `undefined`] |
| **lifeCycleState** | `string` | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) | [Optional] [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest build results for specified plan. Results are ordered from latest or oldest |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project or plan does not exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildLabels

> RestBuildLabels getBuildLabels(projectKey, buildKey, buildNumber)



Provide list of labels for build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildLabelsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (must be a plan key, not a job key)
    buildKey: buildKey_example,
    // string | Build number may be specified as \"latest\" for the result with the highest build number
    buildNumber: buildNumber_example,
  } satisfies GetBuildLabelsRequest;

  try {
    const data = await api.getBuildLabels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (must be a plan key, not a job key) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as \&quot;latest\&quot; for the result with the highest build number | [Defaults to `undefined`] |

### Return type

[**RestBuildLabels**](RestBuildLabels.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of comments for build result |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project, plan, build result does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildMonitoring

> RestBuildMonitoring getBuildMonitoring()



Retrieve build monitoring settings

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildMonitoringRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getBuildMonitoring();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestBuildMonitoring**](RestBuildMonitoring.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bamboo build monitoring settings |  -  |
| **403** | If the user lacks restricted admin permission to view build monitoring settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildQueue1

> RestQueuedBuilds getBuildQueue1(maxResult, startIndex)



Provide list of build scheduled for execution and waiting in build queue.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildQueue1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of builds (optional)
    maxResult: 56,
    // number | Start index of builds (optional)
    startIndex: 56,
  } satisfies GetBuildQueue1Request;

  try {
    const data = await api.getBuildQueue1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of builds | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of builds | [Optional] [Defaults to `undefined`] |

### Return type

[**RestQueuedBuilds**](RestQueuedBuilds.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of queued builds waiting in the build queue |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildResultsForChangeset

> RestResults getBuildResultsForChangeset(csid)



Provide list of build results related to changeset id passed as parameter. List of results contains results from all plans related to this changeset.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildResultsForChangesetRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | changeset id related to build result
    csid: csid_example,
  } satisfies GetBuildResultsForChangesetRequest;

  try {
    const data = await api.getBuildResultsForChangeset(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **csid** | `string` | changeset id related to build result | [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Build results for specified changeset |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildResultsForCheckoutChangeset

> RestResults getBuildResultsForCheckoutChangeset(csid)



Provide list of build results related to changeset id passed as parameter. List of results contains results from all plans which have repositories checked out with this changeset.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetBuildResultsForCheckoutChangesetRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | checkout changeset id related to build result
    csid: csid_example,
  } satisfies GetBuildResultsForCheckoutChangesetRequest;

  try {
    const data = await api.getBuildResultsForCheckoutChangeset(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **csid** | `string` | checkout changeset id related to build result | [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Build results for specified changeset |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCapabilities

> Array&lt;RestEphemeralAgentTemplate&gt; getCapabilities(configurationId, limit, start)



Fetch page of ephemeral agent template capabilities.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetCapabilitiesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
    // number (optional)
    limit: 56,
    // number (optional)
    start: 56,
  } satisfies GetCapabilitiesRequest;

  try {
    const data = await api.getCapabilities(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **start** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**Array&lt;RestEphemeralAgentTemplate&gt;**](RestEphemeralAgentTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of ephemeral agent template capabilities |  -  |
| **400** | When Ephemeral agents are disabled |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When ephemeral agent template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getClone

> RestPlan getClone(projectKey, buildKey, toBuildKey, toProjectKey)



Clone an existing Plan into a new one, possibly into different project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetCloneRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Source project key
    projectKey: projectKey_example,
    // string | Source build key
    buildKey: buildKey_example,
    // string | Destination build key
    toBuildKey: toBuildKey_example,
    // string | Destination project key
    toProjectKey: toProjectKey_example,
  } satisfies GetCloneRequest;

  try {
    const data = await api.getClone(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | Source project key | [Defaults to `undefined`] |
| **buildKey** | `string` | Source build key | [Defaults to `undefined`] |
| **toBuildKey** | `string` | Destination build key | [Defaults to `undefined`] |
| **toProjectKey** | `string` | Destination project key | [Defaults to `undefined`] |

### Return type

[**RestPlan**](RestPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cloned plan |  -  |
| **400** | There is no source plan or there is no project to which clone or there is already plan with destination key or permission denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfiguration

> EphemeralAgentsConfigurationDTO getConfiguration()



Retrieves ephemeral agents configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EphemeralAgentsConfigurationDTO**](EphemeralAgentsConfigurationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ephemeral agents configuration |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfiguration1

> RestCombinedExpiryConfiguration getConfiguration1()



Retrieves global build and deployment expiry configuration for this Bamboo instance.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetConfiguration1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getConfiguration1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestCombinedExpiryConfiguration**](RestCombinedExpiryConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current expiry configuration |  -  |
| **403** | If the user lacks system admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfiguration2

> RestElasticImageConfig getConfiguration2(configurationId)



Elastic image configuration details.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetConfiguration2Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number
    configurationId: 789,
  } satisfies GetConfiguration2Request;

  try {
    const data = await api.getConfiguration2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**RestElasticImageConfig**](RestElasticImageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Elastic image configuration |  -  |
| **400** | When Elastic Bamboo is disabled |  -  |
| **403** | When user does not have admin permissions |  -  |
| **404** | Elastic configuration not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCurrentUser

> UserBean getCurrentUser()



Fetch current user details

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetCurrentUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getCurrentUser();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserBean**](UserBean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User details |  -  |
| **401** | User should be authorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentNamingPreview

> RestNamingPreview getDeploymentNamingPreview(deploymentProjectId, nextVersionName, incrementableVariables, incrementNumbers)



Get deployment version name preview.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentNamingPreviewRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // string | Version name
    nextVersionName: nextVersionName_example,
    // string | variables used for version name. Divided by coma (optional)
    incrementableVariables: incrementableVariables_example,
    // string | If version number should be incremented (optional)
    incrementNumbers: incrementNumbers_example,
  } satisfies GetDeploymentNamingPreviewRequest;

  try {
    const data = await api.getDeploymentNamingPreview(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **nextVersionName** | `string` | Version name | [Defaults to `undefined`] |
| **incrementableVariables** | `string` | variables used for version name. Divided by coma | [Optional] [Defaults to `undefined`] |
| **incrementNumbers** | `string` | If version number should be incremented | [Optional] [Defaults to `undefined`] |

### Return type

[**RestNamingPreview**](RestNamingPreview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version name preview |  -  |
| **400** | Validation errors |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProject

> Array&lt;DashboardProjectWithEnvironmentStatus&gt; getDeploymentProject(projectId)



Get deployment project environments with deployment status. It\&#39;s not optimized for instances with large count of deployment projects and environments, use paged versions instead.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    projectId: projectId_example,
  } satisfies GetDeploymentProjectRequest;

  try {
    const data = await api.getDeploymentProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

[**Array&lt;DashboardProjectWithEnvironmentStatus&gt;**](DashboardProjectWithEnvironmentStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project with environments |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProject1

> RestDeploymentProject getDeploymentProject1(deploymentProjectId)



Get deployment project by id.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProject1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies GetDeploymentProject1Request;

  try {
    const data = await api.getDeploymentProject1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

[**RestDeploymentProject**](RestDeploymentProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project details |  -  |
| **404** | Deployment project doesn\&#39;t exist or user has no view permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProjectVariables

> VersionVariables getDeploymentProjectVariables(deploymentProjectId)



Get variables associated with deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectVariablesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies GetDeploymentProjectVariablesRequest;

  try {
    const data = await api.getDeploymentProjectVariables(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

[**VersionVariables**](VersionVariables.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version variables |  -  |
| **403** | User has no view permission |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProjectVersions

> RestDeploymentVersionList getDeploymentProjectVersions(deploymentProjectId, branchKey)



Get list of deployment versions.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectVersionsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // string | plan branch key. Can be empty if default branch is required (optional)
    branchKey: branchKey_example,
  } satisfies GetDeploymentProjectVersionsRequest;

  try {
    const data = await api.getDeploymentProjectVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **branchKey** | `string` | plan branch key. Can be empty if default branch is required | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDeploymentVersionList**](RestDeploymentVersionList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project versions |  -  |
| **400** | Validation error |  -  |
| **403** | User has no view permission |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProjectVersionsList

> getDeploymentProjectVersionsList(deploymentProjectId, branchKey)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectVersionsListRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number
    deploymentProjectId: 789,
    // string (optional)
    branchKey: branchKey_example,
  } satisfies GetDeploymentProjectVersionsListRequest;

  try {
    const data = await api.getDeploymentProjectVersionsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `number` |  | [Defaults to `undefined`] |
| **branchKey** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProjects

> GetDeploymentProjects200Response getDeploymentProjects(filter, limit, start)



Get paginated deployment projects with environments list.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetDeploymentProjectsRequest;

  try {
    const data = await api.getDeploymentProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | `string` | Deployment project id | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDeploymentProjects200Response**](GetDeploymentProjects200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paged response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentProjectsForPlan

> Array&lt;RestLinkedDeploymentProject&gt; getDeploymentProjectsForPlan(planKey)



Get list of deployment projects for a build plan.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentProjectsForPlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Plan key
    planKey: planKey_example,
  } satisfies GetDeploymentProjectsForPlanRequest;

  try {
    const data = await api.getDeploymentProjectsForPlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | Plan key | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestLinkedDeploymentProject&gt;**](RestLinkedDeploymentProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | list of linked deployment projects |  -  |
| **400** | When plan key is empty or plan don\&#39;t found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentResult

> RestDeploymentResult getDeploymentResult(deploymentResultId, includeLogs)



Get result of version deployment to environment.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetDeploymentResultRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment result id
    deploymentResultId: deploymentResultId_example,
    // string | If logs should be included (optional)
    includeLogs: includeLogs_example,
  } satisfies GetDeploymentResultRequest;

  try {
    const data = await api.getDeploymentResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentResultId** | `string` | Deployment result id | [Defaults to `undefined`] |
| **includeLogs** | `string` | If logs should be included | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDeploymentResult**](RestDeploymentResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment result |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment result not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironmentStatutes

> Array&lt;RestEnvironmentStatusForDashboard&gt; getEnvironmentStatutes(environmentIds)



Get environment latest release info.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetEnvironmentStatutesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // EnvironmentIds | identifiers of environments
    environmentIds: ...,
  } satisfies GetEnvironmentStatutesRequest;

  try {
    const data = await api.getEnvironmentStatutes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentIds** | [EnvironmentIds](EnvironmentIds.md) | identifiers of environments | |

### Return type

[**Array&lt;RestEnvironmentStatusForDashboard&gt;**](RestEnvironmentStatusForDashboard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Environments latest deployment results |  -  |
| **403** | User has no view permission to provided environment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEphemeralAgentPodLogs

> GetEphemeralAgentPodLogs200Response getEphemeralAgentPodLogs(pod, containerName, limit, afterTimestamp)



Gets either pod or container related logs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetEphemeralAgentPodLogsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Pod name
    pod: pod_example,
    // string | Container name, by default empty (optional)
    containerName: containerName_example,
    // string | Log entries limit, by default 50. If it is \'unlimited\', all available logs will be returned (optional)
    limit: limit_example,
    // string | The timestamp indicates the logs\' bottom time boundary (optional)
    afterTimestamp: afterTimestamp_example,
  } satisfies GetEphemeralAgentPodLogsRequest;

  try {
    const data = await api.getEphemeralAgentPodLogs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pod** | `string` | Pod name | [Defaults to `undefined`] |
| **containerName** | `string` | Container name, by default empty | [Optional] [Defaults to `undefined`] |
| **limit** | `string` | Log entries limit, by default 50. If it is \&#39;unlimited\&#39;, all available logs will be returned | [Optional] [Defaults to `undefined`] |
| **afterTimestamp** | `string` | The timestamp indicates the logs\&#39; bottom time boundary | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEphemeralAgentPodLogs200Response**](GetEphemeralAgentPodLogs200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of log entries |  -  |
| **400** | The logs for requested pod/container does not exist |  -  |
| **403** | User has neither admin nor restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEphemeralAgentPodRawLogs

> GetEphemeralAgentPodRawLogs200Response getEphemeralAgentPodRawLogs(pod, containerName)



Gets either pod or container all logs in the raw, plain text form.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetEphemeralAgentPodRawLogsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Pod name
    pod: pod_example,
    // string | Container name, by default empty (optional)
    containerName: containerName_example,
  } satisfies GetEphemeralAgentPodRawLogsRequest;

  try {
    const data = await api.getEphemeralAgentPodRawLogs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pod** | `string` | Pod name | [Defaults to `undefined`] |
| **containerName** | `string` | Container name, by default empty | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEphemeralAgentPodRawLogs200Response**](GetEphemeralAgentPodRawLogs200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Raw logs |  -  |
| **400** | The logs for requested pod/container does not exist |  -  |
| **403** | User has neither admin nor restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExpiry

> getExpiry()



Get the web sudo expiry from session.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetExpiryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getExpiry();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The expiry time of the current web sudo session |  -  |
| **404** | No session found in the request or the session did not have web sudo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFaviconForPlan

> RestFavicon getFaviconForPlan(planKey)



Plan\&#39;s favicon which depends on last build result.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetFaviconForPlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Plan key
    planKey: planKey_example,
  } satisfies GetFaviconForPlanRequest;

  try {
    const data = await api.getFaviconForPlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | Plan key | [Defaults to `undefined`] |

### Return type

[**RestFavicon**](RestFavicon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan\&#39;s favicon |  -  |
| **403** | User doesn\&#39;t have READ permission for plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForUser

> RestUserDarkFeature getForUser(userName, key)



Retrieves whether a given dark feature key is enabled for a given user. A dark feature is enabled for a user if its either enabled for this instance or for the specific user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetForUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | the user for which the status of the dark feature needs to be checked for
    userName: userName_example,
    // string | key of the dark feature
    key: key_example,
  } satisfies GetForUserRequest;

  try {
    const data = await api.getForUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userName** | `string` | the user for which the status of the dark feature needs to be checked for | [Defaults to `undefined`] |
| **key** | `string` | key of the dark feature | [Defaults to `undefined`] |

### Return type

[**RestUserDarkFeature**](RestUserDarkFeature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of the dark feature for the given user |  -  |
| **404** | If the user was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGeneralConfiguration

> RestGeneralConfiguration getGeneralConfiguration()



Retrieve Bamboo server general configurations.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetGeneralConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getGeneralConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestGeneralConfiguration**](RestGeneralConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bamboo general configuration |  -  |
| **403** | The user lacks restricted admin permission to view general configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGlobalVariable

> RestGlobalVariable getGlobalVariable(variableId)



Retrieve a global variable definition. Value will be encrypted if variable name contains key word password.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetGlobalVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Id of the variable
    variableId: variableId_example,
  } satisfies GetGlobalVariableRequest;

  try {
    const data = await api.getGlobalVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableId** | `string` | Id of the variable | [Defaults to `undefined`] |

### Return type

[**RestGlobalVariable**](RestGlobalVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  Variable definition which contains name, value and link to the variable |  -  |
| **403** | If the user lacks restricted admin permission to view global variables |  -  |
| **404** | If the variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGlobalVariables

> RestGlobalVariables getGlobalVariables()



Return collection of all global variables. Value of variables that contain password in name will be encrypted with salted hash.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetGlobalVariablesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getGlobalVariables();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestGlobalVariables**](RestGlobalVariables.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection of all global variables |  -  |
| **403** | If the user lacks restricted admin permission to view global variables |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroup

> Array&lt;RestGroup&gt; getGroup(name)



Retrieve a list of groups in Bamboo. The list can be filtered by some attributes, e.g. name. Name is mandatory. Since name is unique, the result only contains 0 or 1 entry.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Name of group
    name: name_example,
  } satisfies GetGroupRequest;

  try {
    const data = await api.getGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Name of group | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestGroup&gt;**](RestGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | list of groups |  -  |
| **400** | If group name is empty or invalid |  -  |
| **403** | If the user lacks system admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIMServerConfig

> RestIMServerConfiguration getIMServerConfig()



Get instant message server configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetIMServerConfigRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getIMServerConfig();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestIMServerConfiguration**](RestIMServerConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current IM server configuration |  -  |
| **403** | If the user lacks restricted admin permission to view IM configuration |  -  |
| **404** | If no IM server is configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImageUrl

> RestChart getImageUrl(buildKeys, reportKey)



Chart url.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetImageUrlRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Plan keys (optional)
    buildKeys: buildKeys_example,
    // string | Report key (optional)
    reportKey: reportKey_example,
  } satisfies GetImageUrlRequest;

  try {
    const data = await api.getImageUrl(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **buildKeys** | `string` | Plan keys | [Optional] [Defaults to `undefined`] |
| **reportKey** | `string` | Report key | [Optional] [Defaults to `undefined`] |

### Return type

[**RestChart**](RestChart.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chart |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | Plans not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfo

> RestInfo getInfo()



Bamboo instance details.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetInfoRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getInfo();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestInfo**](RestInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Instance details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInstanceLog

> RestElasticInstanceLog getInstanceLog(instanceId)



Obtain logs from an EC2 instance. Note that this method will return the console output of the instance, not Bamboo agent logs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetInstanceLogRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | id of the EC2 instance
    instanceId: instanceId_example,
  } satisfies GetInstanceLogRequest;

  try {
    const data = await api.getInstanceLog(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **instanceId** | `string` | id of the EC2 instance | [Defaults to `undefined`] |

### Return type

[**RestElasticInstanceLog**](RestElasticInstanceLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Instance id and it\&#39;s console output |  -  |
| **400** | If the input data or server state fails validation, for example when AWS account is not configured or Elastic Bamboo is not enabled. |  -  |
| **403** | User doesn\&#39;t have permissions to manage elastic instances |  -  |
| **404** | When no EC2 instance with the given id was found. The instance has to exist and must be managed by this Bamboo server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJiraIssueStatusForProject

> RestJiraIssueRelatedDeploymentProjects getJiraIssueStatusForProject(issueKey)



Get all deployment projects associated with Jira issue key

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetJiraIssueStatusForProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Jira issue key
    issueKey: issueKey_example,
  } satisfies GetJiraIssueStatusForProjectRequest;

  try {
    const data = await api.getJiraIssueStatusForProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **issueKey** | `string` | Jira issue key | [Defaults to `undefined`] |

### Return type

[**RestJiraIssueRelatedDeploymentProjects**](RestJiraIssueRelatedDeploymentProjects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment projectes associated with Jira issue |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJiraIssueStatusForProject1

> RestDeploymentProjectStatusForJiraIssue getJiraIssueStatusForProject1(issueKey, deploymentProjectId)



Get deployment project environments and versions associated with Jira issue

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetJiraIssueStatusForProject1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Jira issue key
    issueKey: issueKey_example,
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies GetJiraIssueStatusForProject1Request;

  try {
    const data = await api.getJiraIssueStatusForProject1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **issueKey** | `string` | Jira issue key | [Defaults to `undefined`] |
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

[**RestDeploymentProjectStatusForJiraIssue**](RestDeploymentProjectStatusForJiraIssue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Environments and versions associated with Jira issue |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJobs

> Array&lt;RestScheduledJob&gt; getJobs()



Gets the collection of jobs currently scheduled to run.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetJobsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getJobs();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestScheduledJob&gt;**](RestScheduledJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection of jobs successfully retrieved |  -  |
| **400** | Issues with access to underlying scheduler |  -  |
| **403** | Current user does not have sufficient privileges to fetch list of scheduled tasks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestBuildResults

> RestResults getLatestBuildResults(includeAllStates, continuable, expand, issueKey, maxResults, startIndex, label, buildstate, favourite, lifeCycleState)



Provide list of the latest build results for top level plans visible for users.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetLatestBuildResultsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // boolean | return build results in all lifecycle states, including unknown and active states (optional)
    includeAllStates: true,
    // boolean | filter only results that may be continued (stopped on Manual Stage) (optional)
    continuable: true,
    // string | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix (optional)
    expand: expand_example,
    // string | Filter by comma separated list of Jira issue key related to result (optional)
    issueKey: issueKey_example,
    // number | maximum size for returned list (optional)
    maxResults: 56,
    // number | start index for results list (zero based) (optional)
    startIndex: 56,
    // string | Filter by comma separated list of labels (optional)
    label: label_example,
    // string | filter results by state, valid values are Unknown, Successful, Failed (optional)
    buildstate: buildstate_example,
    // string | Filters build results list to show only results for favourite plans. Works only for authenticated user (optional)
    favourite: favourite_example,
    // string | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) (optional)
    lifeCycleState: lifeCycleState_example,
  } satisfies GetLatestBuildResultsRequest;

  try {
    const data = await api.getLatestBuildResults(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **includeAllStates** | `boolean` | return build results in all lifecycle states, including unknown and active states | [Optional] [Defaults to `undefined`] |
| **continuable** | `boolean` | filter only results that may be continued (stopped on Manual Stage) | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | Filter by comma separated list of Jira issue key related to result | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | maximum size for returned list | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | start index for results list (zero based) | [Optional] [Defaults to `undefined`] |
| **label** | `string` | Filter by comma separated list of labels | [Optional] [Defaults to `undefined`] |
| **buildstate** | `string` | filter results by state, valid values are Unknown, Successful, Failed | [Optional] [Defaults to `undefined`] |
| **favourite** | `string` | Filters build results list to show only results for favourite plans. Works only for authenticated user | [Optional] [Defaults to `undefined`] |
| **lifeCycleState** | `string` | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) | [Optional] [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest build results for all plans |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestBuildResultsForProject

> RestResults getLatestBuildResultsForProject(projectKey, includeAllStates, continuable, expand, issueKey, maxResults, startIndex, label, buildstate, favourite, lifeCycleState)



Provide list of latest build results for top level plans for specified project. List of results is limited to plans visible for user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetLatestBuildResultsForProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key to filter plan result list
    projectKey: projectKey_example,
    // boolean | return build results in all lifecycle states, including unknown and active states (optional)
    includeAllStates: true,
    // boolean | filter only results that may be continued (stopped on Manual Stage) (optional)
    continuable: true,
    // string | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix (optional)
    expand: expand_example,
    // string | Filter by comma separated list of Jira issue key related to result (optional)
    issueKey: issueKey_example,
    // number | Maximum size for returned list (optional)
    maxResults: 56,
    // number | Start index for results list (zero based) (optional)
    startIndex: 56,
    // string | Filter by comma separated list of labels (optional)
    label: label_example,
    // string | filter results by state, valid values are Unknown, Successful, Failed (optional)
    buildstate: buildstate_example,
    // string | Filters build results list to show only results for favourite plans. Works only for authenticated user (optional)
    favourite: favourite_example,
    // string | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) (optional)
    lifeCycleState: lifeCycleState_example,
  } satisfies GetLatestBuildResultsForProjectRequest;

  try {
    const data = await api.getLatestBuildResultsForProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key to filter plan result list | [Defaults to `undefined`] |
| **includeAllStates** | `boolean` | return build results in all lifecycle states, including unknown and active states | [Optional] [Defaults to `undefined`] |
| **continuable** | `boolean` | filter only results that may be continued (stopped on Manual Stage) | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | expands build result details on request. Possible values are: artifacts, comments, labels, jiraIssues, stages. stages expand is available only for top level plans. It allows to drill down to job results using stages.stage.results.result. All expand parameters should contain results.result prefix | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | Filter by comma separated list of Jira issue key related to result | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | Maximum size for returned list | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index for results list (zero based) | [Optional] [Defaults to `undefined`] |
| **label** | `string` | Filter by comma separated list of labels | [Optional] [Defaults to `undefined`] |
| **buildstate** | `string` | filter results by state, valid values are Unknown, Successful, Failed | [Optional] [Defaults to `undefined`] |
| **favourite** | `string` | Filters build results list to show only results for favourite plans. Works only for authenticated user | [Optional] [Defaults to `undefined`] |
| **lifeCycleState** | `string` | return build results in given lifecycle state, valid values are Pending, Queued, InProgress, Finished, NotBuilt (multiple values can be separated by a comma) | [Optional] [Defaults to `undefined`] |

### Return type

[**RestResults**](RestResults.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest build results for plans for specified project |  -  |
| **404** | When specified project does not exists or user does not have permission to see plans for specified project |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestVersionStatuses

> RestDeploymentVersionStatuses getLatestVersionStatuses(deploymentVersionId)



Get the all users\&#39; latest statuses of deployment version.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetLatestVersionStatusesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment version id
    deploymentVersionId: deploymentVersionId_example,
  } satisfies GetLatestVersionStatusesRequest;

  try {
    const data = await api.getLatestVersionStatuses(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentVersionId** | `string` | Deployment version id | [Defaults to `undefined`] |

### Return type

[**RestDeploymentVersionStatuses**](RestDeploymentVersionStatuses.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest version status |  -  |
| **204** | Version status not defined |  -  |
| **404** | Deployment version not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMailConfiguration

> RestMailConfiguration getMailConfiguration()



Retrieve the current mail server configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetMailConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getMailConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestMailConfiguration**](RestMailConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Mail Server configuration |  -  |
| **403** | The user lacks the system administrator permissions to get mailserver config |  -  |
| **404** | Mail configuration server is not set |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMyBrokenBuilds

> GetBrokenBuildsForUser200Response getMyBrokenBuilds(limit, start)



Get broken builds for logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetMyBrokenBuildsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    start: 56,
  } satisfies GetMyBrokenBuildsRequest;

  try {
    const data = await api.getMyBrokenBuilds(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **start** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**GetBrokenBuildsForUser200Response**](GetBrokenBuildsForUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of plan keys with responsible users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNextDeploymentVersions

> RestNamingPreview getNextDeploymentVersions(deploymentProjectId, resultKey)



Get next deployment version name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetNextDeploymentVersionsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // string | Build result key (optional)
    resultKey: resultKey_example,
  } satisfies GetNextDeploymentVersionsRequest;

  try {
    const data = await api.getNextDeploymentVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **resultKey** | `string` | Build result key | [Optional] [Defaults to `undefined`] |

### Return type

[**RestNamingPreview**](RestNamingPreview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version name preview |  -  |
| **400** | Validation errors |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNodesStatus

> RestServerNodesInfo getNodesStatus()



Get both the asked node and cluster states together with all nodes\&#39; statuses.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetNodesStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getNodesStatus();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestServerNodesInfo**](RestServerNodesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Nodes status |  -  |
| **403** | User doesn\&#39;t have RESTRICTED_ADMINISTRATION permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPaginateDeploymentProject

> GetDeploymentProjects200Response getPaginateDeploymentProject(projectId, filter, limit, start)



Get deployment project environments.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetPaginateDeploymentProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    projectId: projectId_example,
    // string | Environment name filter (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // string | Page request start index (optional)
    start: start_example,
  } satisfies GetPaginateDeploymentProjectRequest;

  try {
    const data = await api.getPaginateDeploymentProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **filter** | `string` | Environment name filter | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `undefined`] |
| **start** | `string` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDeploymentProjects200Response**](GetDeploymentProjects200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment project with paged environments |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPaginatedProjectRepositories

> GetPaginatedProjectRepositories200Response getPaginatedProjectRepositories(projectKey, filter, limit, start)



Retrieves paginated project repositories specified by the project key.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetPaginatedProjectRepositoriesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | filter to retrieve matching results (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetPaginatedProjectRepositoriesRequest;

  try {
    const data = await api.getPaginatedProjectRepositories(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **filter** | `string` | filter to retrieve matching results | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPaginatedProjectRepositories200Response**](GetPaginatedProjectRepositories200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | when repositories were successfully retrieved |  -  |
| **403** | When user has no read permission to the project |  -  |
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPaginatedProjectSharedCredentials

> GetPaginatedProjectSharedCredentials200Response getPaginatedProjectSharedCredentials(projectKey, filter, limit, start)



Retrieves paginated shared credentials for the project specified by the project key.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetPaginatedProjectSharedCredentialsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | filter to retrieve matching results (optional)
    filter: filter_example,
    // number | Page request size. Default size is 25. Max value is 500 (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetPaginatedProjectSharedCredentialsRequest;

  try {
    const data = await api.getPaginatedProjectSharedCredentials(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **filter** | `string` | filter to retrieve matching results | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size. Default size is 25. Max value is 500 | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPaginatedProjectSharedCredentials200Response**](GetPaginatedProjectSharedCredentials200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project credentials |  -  |
| **403** | When user has no read permission to the project |  -  |
| **404** | When specified project does not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanSummary

> RestChart getPlanSummary(buildKeys)



Get plan summary.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetPlanSummaryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Single plan key (optional)
    buildKeys: buildKeys_example,
  } satisfies GetPlanSummaryRequest;

  try {
    const data = await api.getPlanSummary(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **buildKeys** | `string` | Single plan key | [Optional] [Defaults to `undefined`] |

### Return type

[**RestChart**](RestChart.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chart |  -  |
| **400** | More than one plan key provided |  -  |
| **404** | Plan not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProject

> RestProject getProject(projectKey, expand, showEmpty)



Get information for project specified as project key.  - plans - list of plans for project  - plans.plan - list of plans with plan details (only plans visible - READ permission for user)  - plans.plan.actions - list of plans with plan details and actions available for user for plan  

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetProjectRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | Possible expand parameters: plans, plans.plan, plans.plan.actions (optional)
    expand: expand_example,
    // boolean | flag to return project without plans, *true* by default (optional)
    showEmpty: true,
  } satisfies GetProjectRequest;

  try {
    const data = await api.getProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **expand** | `string` | Possible expand parameters: plans, plans.plan, plans.plan.actions | [Optional] [Defaults to `undefined`] |
| **showEmpty** | `boolean` | flag to return project without plans, *true* by default | [Optional] [Defaults to `undefined`] |

### Return type

[**RestProject**](RestProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Project details |  -  |
| **403** | User has no VIEW permissions to project |  -  |
| **404** | Returned when specified project does not exist or project has no plans if _showEmpty_ param is false |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectVariable

> RestVariable getProjectVariable(projectKey, variableName)



Retrieve the project variable by given name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetProjectVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | variable name
    variableName: variableName_example,
  } satisfies GetProjectVariableRequest;

  try {
    const data = await api.getProjectVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **variableName** | `string` | variable name | [Defaults to `undefined`] |

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A project variable with the given name |  -  |
| **400** | When project can\&#39;t be removed, e.g. when it contains any plans |  -  |
| **403** | When user has no permission to create new plan or modify any plan at specified project |  -  |
| **404** | When specified project does not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectVariables

> Array&lt;RestVariable&gt; getProjectVariables(projectKey)



Retrieve the list of all variables for a project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetProjectVariablesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
  } satisfies GetProjectVariablesRequest;

  try {
    const data = await api.getProjectVariables(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestVariable&gt;**](RestVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of variables for the given project |  -  |
| **400** | When project can\&#39;t be removed, e.g. when it contains any plans |  -  |
| **403** | When user has no permission to create new plan or modify any plan at specified project |  -  |
| **404** | When specified project does not exist or user has no VIEW permission for it |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjects

> RestProjects getProjects(expand, showEmpty)



List all projects defined in Bamboo. Projects without any plan are not listed by default, unless _showEmpty_ query param is set to true.  - projects - list of projects projects.project - list of projects with project details  - projects.project.plans - list of project details and plans for project  - projects.project.plans.plan - list of project details and plans for project with plan details

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetProjectsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Possible expand parameters: projects, projects.project.plans, projects.project.plans.plan (optional)
    expand: expand_example,
    // boolean | flag to display projects without plans (optional)
    showEmpty: true,
  } satisfies GetProjectsRequest;

  try {
    const data = await api.getProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **expand** | `string` | Possible expand parameters: projects, projects.project.plans, projects.project.plans.plan | [Optional] [Defaults to `undefined`] |
| **showEmpty** | `boolean` | flag to display projects without plans | [Optional] [Defaults to `undefined`] |

### Return type

[**RestProjects**](RestProjects.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Bamboo projects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuarantineSettings

> RestQuarantineConfig getQuarantineSettings()



Retrieve Bamboo quarantine settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetQuarantineSettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getQuarantineSettings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestQuarantineConfig**](RestQuarantineConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current quarantine settings |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuickFilter

> RestQuickFilter getQuickFilter(id)



Get a single quick filter by id.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetQuickFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Quick filter id
    id: 789,
  } satisfies GetQuickFilterRequest;

  try {
    const data = await api.getQuickFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | Quick filter id | [Defaults to `undefined`] |

### Return type

[**RestQuickFilter**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Single quick filter data. Will contain only basic configuration, excluding e.g. quick filter\&#39;s rules |  -  |
| **400** | Quick filter not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuickFilters

> Array&lt;RestQuickFilter&gt; getQuickFilters(configured)



Obtain a list of quick filters defined for this Bamboo instance.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetQuickFiltersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // boolean | When set, the list will only contain filters which have or have not been properly configured. Quick filters are considered configured when they have rules set up (optional)
    configured: true,
  } satisfies GetQuickFiltersRequest;

  try {
    const data = await api.getQuickFilters(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configured** | `boolean` | When set, the list will only contain filters which have or have not been properly configured. Quick filters are considered configured when they have rules set up | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestQuickFilter&gt;**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of quick filters. Each entity will contain only basic configuration, excluding e.g. quick filter\&#39;s rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReindexInfo

> ReindexBean getReindexInfo()



Returns the reindex status.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetReindexInfoRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getReindexInfo();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ReindexBean**](ReindexBean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reindex is finished |  -  |
| **303** | Reindex is currently performed in background or pending |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRemoteAgentConfiguration

> RestRemoteAgentConfiguration getRemoteAgentConfiguration()



Retrieve the remote agent configuration

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetRemoteAgentConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getRemoteAgentConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestRemoteAgentConfiguration**](RestRemoteAgentConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Remote agent support configuration |  -  |
| **403** | The user lacks restricted administration permission to view this information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRemoteAgents

> Array&lt;RestBuildAgent&gt; getRemoteAgents(online)



Provides a list of all remote agent authentication statuses.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetRemoteAgentsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // boolean | Filter remote agents based on their online statuses (optional)
    online: true,
  } satisfies GetRemoteAgentsRequest;

  try {
    const data = await api.getRemoteAgents(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **online** | `boolean` | Filter remote agents based on their online statuses | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestBuildAgent&gt;**](RestBuildAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Complete (non-paginated) array of remote agents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResponsibleForPlanResult

> getResponsibleForPlanResult(name, planResultKeyOrPlanKey)



Get responsible users for broken build result or plan.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetResponsibleForPlanResultRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | User name
    name: name_example,
    // string | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2
    planResultKeyOrPlanKey: planResultKeyOrPlanKey_example,
  } satisfies GetResponsibleForPlanResultRequest;

  try {
    const data = await api.getResponsibleForPlanResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | User name | [Defaults to `undefined`] |
| **planResultKeyOrPlanKey** | `string` | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2 | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan key with responsible users |  -  |
| **400** | Plan (result) key is not valid or user has no permission to view plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestElasticConfiguration

> RestElasticConfiguration getRestElasticConfiguration()



Retrieves the current elastic configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetRestElasticConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getRestElasticConfiguration();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestElasticConfiguration**](RestElasticConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current elastic configuration of bamboo server |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResultStatus

> RestResultStatus getResultStatus(projectKey, buildKey, buildNumber)



Provide runtime information for currently executing build result. The key difference to other methods is that method is optimized to provide information available in memory only, so no database calls are made. The information provided is not as wide as for finished results, but the call is optimized for speed.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetResultStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (must be a plan key, not a job key)
    buildKey: buildKey_example,
    // string | Build number (numeric value only, \'latest\' keyword is not supported for this method)
    buildNumber: buildNumber_example,
  } satisfies GetResultStatusRequest;

  try {
    const data = await api.getResultStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (must be a plan key, not a job key) | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number (numeric value only, \&#39;latest\&#39; keyword is not supported for this method) | [Defaults to `undefined`] |

### Return type

[**RestResultStatus**](RestResultStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Currently executing build status |  -  |
| **403** | When user has no permission to view specified plan |  -  |
| **404** | When specified project, plan or build result does not exists. Also when build result is not currently executed ie. build has been completed already |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRssRepositoriesAllowedToAccessRepository

> Array&lt;RestRepository&gt; getRssRepositoriesAllowedToAccessRepository(repositoryId)



Fetch list of RSS repositories which can use given repository by RSS code.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetRssRepositoriesAllowedToAccessRepositoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Target repository id
    repositoryId: 789,
  } satisfies GetRssRepositoriesAllowedToAccessRepositoryRequest;

  try {
    const data = await api.getRssRepositoriesAllowedToAccessRepository(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Target repository id | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestRepository&gt;**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | array of repositories granted to use given repository by Repository stored Bamboo Specs. |  -  |
| **403** | When user has insufficient permissions to target repository |  -  |
| **404** | When specified repository not found or repository stored Bamboo specs feature is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getS3ArtifactHandler

> RestArtifactHandler getS3ArtifactHandler()



Retrieve configuration of S3 Artifact Handler.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetS3ArtifactHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getS3ArtifactHandler();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of S3 Artifact Handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecuritySettings

> RestSecuritySettings getSecuritySettings()



Retrieve security settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetSecuritySettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getSecuritySettings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestSecuritySettings**](RestSecuritySettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bamboo security settings |  -  |
| **403** | If the user lacks system admin permissions to view security settings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSftpArtifactHandler

> SimpleRestArtifactHandler getSftpArtifactHandler()



Retrieve configuration of SFTP Artifact Handler.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetSftpArtifactHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getSftpArtifactHandler();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SimpleRestArtifactHandler**](SimpleRestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of SFTP Artifact Handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpecsDetectionStatus

> RestVcsLocationSpecsStatus getSpecsDetectionStatus(repositoryId, maxResult, branch)



Resource providing status of RSS processing for a given repository and optional branch.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetSpecsDetectionStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | id of the linked repository which stores Bamboo Specs
    repositoryId: 789,
    // number | Maximum number of spec status entries returned in the response (optional)
    maxResult: 56,
    // string | Optional branch of the repository. Works only if repository supports divergent branches (optional)
    branch: branch_example,
  } satisfies GetSpecsDetectionStatusRequest;

  try {
    const data = await api.getSpecsDetectionStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | id of the linked repository which stores Bamboo Specs | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum number of spec status entries returned in the response | [Optional] [Defaults to `20`] |
| **branch** | `string` | Optional branch of the repository. Works only if repository supports divergent branches | [Optional] [Defaults to `undefined`] |

### Return type

[**RestVcsLocationSpecsStatus**](RestVcsLocationSpecsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The object representing RSS status |  -  |
| **403** | When user has insufficient permissions to repository |  -  |
| **404** | When Bamboo Specs feature is disabled in Bamboo, or when a repository with given ID could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatus

> RestCombinedExpiryStatus getStatus()



Retrieves build and deployment expiry status.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getStatus();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestCombinedExpiryStatus**](RestCombinedExpiryStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of both build and deployment expiry, containing information whether expiry is currently running and the last expiry execution date |  -  |
| **403** | If the user lacks system admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatus1

> RestServerStatusInfo getStatus1()



Get both the asked node and cluster states.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetStatus1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getStatus1();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestServerStatusInfo**](RestServerStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatus2

> RestAnonymousServerStatusInfo getStatus2()



Returns the current status of the Bamboo node. This endpoint enables a basic status check on the status of a Bamboo node. &lt;p&gt; The status endpoint will be responsive as long as the Bamboo REST plugin will be running. In other words, this endpoint does depend on the instance health and might not answer as a result of a failure or when Bamboo is still starting.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetStatus2Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getStatus2();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestAnonymousServerStatusInfo**](RestAnonymousServerStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the current status of the server |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplateConfiguration

> RestEphemeralAgentTemplate getTemplateConfiguration(configurationId)



Gets ephemeral template configuration details.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetTemplateConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
  } satisfies GetTemplateConfigurationRequest;

  try {
    const data = await api.getTemplateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |

### Return type

[**RestEphemeralAgentTemplate**](RestEphemeralAgentTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ephemeral template configuration |  -  |
| **400** | When Ephemeral agents are disabled |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | Configuration not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTemplateConfigurationsPage

> Array&lt;RestEphemeralAgentTemplate&gt; getTemplateConfigurationsPage(filter, limit, start)



Fetch page of ephemeral templates.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetTemplateConfigurationsPageRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    filter: filter_example,
    // number (optional)
    limit: 56,
    // number (optional)
    start: 56,
  } satisfies GetTemplateConfigurationsPageRequest;

  try {
    const data = await api.getTemplateConfigurationsPage(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | `string` |  | [Optional] [Defaults to `&#39;&#39;`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **start** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**Array&lt;RestEphemeralAgentTemplate&gt;**](RestEphemeralAgentTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of ephemeral templates |  -  |
| **400** | When Ephemeral agents are disabled |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVariablesFromName

> getVariablesFromName(deploymentProjectId, nextVersionName)



Extract variables value from version name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetVariablesFromNameRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // string | Version name
    nextVersionName: nextVersionName_example,
  } satisfies GetVariablesFromNameRequest;

  try {
    const data = await api.getVariablesFromName(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **nextVersionName** | `string` | Version name | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection of variable values |  -  |
| **400** | Validation errors |  -  |
| **403** | User has no view permission to deployment project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionAndPlanResult

> RestDeploymentVersionAndPlanResult getVersionAndPlanResult(deploymentVersionId)



Get associated build result of deployment version.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetVersionAndPlanResultRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment version id
    deploymentVersionId: deploymentVersionId_example,
  } satisfies GetVersionAndPlanResultRequest;

  try {
    const data = await api.getVersionAndPlanResult(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentVersionId** | `string` | Deployment version id | [Defaults to `undefined`] |

### Return type

[**RestDeploymentVersionAndPlanResult**](RestDeploymentVersionAndPlanResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment version and build result associated |  -  |
| **404** | Deployment version not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVisibleFilters

> Array&lt;RestQuickFilter&gt; getVisibleFilters()



Return visible quick filters for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GetVisibleFiltersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getVisibleFilters();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RestQuickFilter&gt;**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of visible quick filters for logged in user. Each entity will contain only basic configuration, excluding e.g. quick filter\&#39;s rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## grantRssRepositoryAccess

> RestRepositoryMinimal grantRssRepositoryAccess(repositoryId, restIdContainer)



Grant repository with RSS code to use target repository in build plans and deployments. If permission is not granted RSS import will fail when code tries to use target repository.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { GrantRssRepositoryAccessRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Repository id
    repositoryId: 789,
    // RestIdContainer | Id container
    restIdContainer: ...,
  } satisfies GrantRssRepositoryAccessRequest;

  try {
    const data = await api.grantRssRepositoryAccess(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Repository id | [Defaults to `undefined`] |
| **restIdContainer** | [RestIdContainer](RestIdContainer.md) | Id container | |

### Return type

[**RestRepositoryMinimal**](RestRepositoryMinimal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Repository which was granted permission to |  -  |
| **400** | When repository id is empty or null |  -  |
| **403** | When user has insufficient permissions to target repository |  -  |
| **404** | When specified repository not found by id or repository stored Bamboo specs feature is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAssignedRepositories

> Array&lt;RestRepository&gt; listAssignedRepositories(deploymentProjectId)



List of repositories which granted to create/edit environment in given deployment project by Repository stored Bamboo Specs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ListAssignedRepositoriesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
  } satisfies ListAssignedRepositoriesRequest;

  try {
    const data = await api.listAssignedRepositories(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestRepository&gt;**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of repositories granted to create/edit environment in given deployment project by Repository stored Bamboo Specs. |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAssignedRepositories1

> Array&lt;RestRepository&gt; listAssignedRepositories1(projectKey)



Fetch list of repositories which granted to create plan in given project by Repository stored Bamboo Specs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ListAssignedRepositories1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
  } satisfies ListAssignedRepositories1Request;

  try {
    const data = await api.listAssignedRepositories1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestRepository&gt;**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of repositories granted to create plan in given project by Repository stored Bamboo Specs |  -  |
| **403** | When user has no Administration permission to project |  -  |
| **404** | When specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pause

> RestServerStatusInfo pause()



Pauses the cluster.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { PauseRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.pause();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestServerStatusInfo**](RestServerStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Both the asked node and cluster states |  -  |
| **403** | User doesn\&#39;t have ADMINISTRATION permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## prepareForRestart

> RestServerStatusInfo prepareForRestart()



Prepare the asked node for restarting: suspend change detection, stop indexing, stop ec2 instance ordering etc.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { PrepareForRestartRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.prepareForRestart();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestServerStatusInfo**](RestServerStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Both the asked node and cluster states |  -  |
| **403** | User doesn\&#39;t have ADMINISTRATION permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## put

> RestDarkFeature put(key, restDarkFeature)



Enable or disable a dark feature for all users of this instance.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { PutRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | key of the dark feature
    key: key_example,
    // RestDarkFeature
    restDarkFeature: ...,
  } satisfies PutRequest;

  try {
    const data = await api.put(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | `string` | key of the dark feature | [Defaults to `undefined`] |
| **restDarkFeature** | [RestDarkFeature](RestDarkFeature.md) |  | |

### Return type

[**RestDarkFeature**](RestDarkFeature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated dark feature |  -  |
| **403** | If the user lacks permissions to update dark features for all users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## put1

> RestUserDarkFeature put1(userName, key, restDarkFeature)



Enable or disable a dark feature for a given user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { Put1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | the username of the user for which the dark feature has to be enabled/disabled
    userName: userName_example,
    // string | key of the dark feature
    key: key_example,
    // RestDarkFeature
    restDarkFeature: ...,
  } satisfies Put1Request;

  try {
    const data = await api.put1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userName** | `string` | the username of the user for which the dark feature has to be enabled/disabled | [Defaults to `undefined`] |
| **key** | `string` | key of the dark feature | [Defaults to `undefined`] |
| **restDarkFeature** | [RestDarkFeature](RestDarkFeature.md) |  | |

### Return type

[**RestUserDarkFeature**](RestUserDarkFeature.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated dark feature |  -  |
| **403** | If the user lacks permissions to update dark features for the given user |  -  |
| **404** | If the user was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshWebSudoSession

> refreshWebSudoSession()



Refresh the web sudo expiry for the current session.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RefreshWebSudoSessionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.refreshWebSudoSession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The new expiry time of the current web sudo session |  -  |
| **404** | No session found in the request or the session did not have web sudo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reindex

> ReindexBean reindex()



Kicks off a reindex.  Requires system admin permissions to perform this operation.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ReindexRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.reindex();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ReindexBean**](ReindexBean.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Response that provides a redirect to the GET |  -  |
| **403** | User doesn\&#39;t have system admin permission |  -  |
| **500** | Exception |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeBuildComment

> removeBuildComment(projectKey, buildKey, commentId, buildNumber)



Removes a comment from a build result.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RemoveBuildCommentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (might be simply planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | id of the comment
    commentId: commentId_example,
    // string | Build number
    buildNumber: buildNumber_example,
  } satisfies RemoveBuildCommentRequest;

  try {
    const data = await api.removeBuildComment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (might be simply planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **commentId** | `string` | id of the comment | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Comment deleted |  -  |
| **403** | When user has no permission to delete the specified comment |  -  |
| **404** | When specified project, plan, build result or comment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeBuildLabel

> removeBuildLabel(projectKey, buildKey, labelName, buildNumber)



Removes label from build result specified by projectKey-buildKey-buildNumber.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RemoveBuildLabelRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (must be a plan key, not a job key)
    buildKey: buildKey_example,
    // string | Label name to remove from build result
    labelName: labelName_example,
    // string | Build number may be specified as *latest* for the result with the highest build number
    buildNumber: buildNumber_example,
  } satisfies RemoveBuildLabelRequest;

  try {
    const data = await api.removeBuildLabel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (must be a plan key, not a job key) | [Defaults to `undefined`] |
| **labelName** | `string` | Label name to remove from build result | [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number may be specified as *latest* for the result with the highest build number | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | On success |  -  |
| **403** | When user has no permission to edit specified plan |  -  |
| **404** | When specified project, plan, build result or label does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removePlanCustomExpirySettings

> removePlanCustomExpirySettings(planKey)



Delete custom plan expiry settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RemovePlanCustomExpirySettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | key of plan with custom expiry settings
    planKey: planKey_example,
  } satisfies RemovePlanCustomExpirySettingsRequest;

  try {
    const data = await api.removePlanCustomExpirySettings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | key of plan with custom expiry settings | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | When plan expiry settings were disabled |  -  |
| **400** | When can\&#39;t parse plan key |  -  |
| **403** | When user don\&#39;t have admin permissions for plan |  -  |
| **404** | When can\&#39;t find plan by key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeResponsible

> removeResponsible(name, planResultKeyOrPlanKey)



Remove user\&#39;s responsibility from broken build.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RemoveResponsibleRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | User name
    name: name_example,
    // string | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2
    planResultKeyOrPlanKey: planResultKeyOrPlanKey_example,
  } satisfies RemoveResponsibleRequest;

  try {
    const data = await api.removeResponsible(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | User name | [Defaults to `undefined`] |
| **planResultKeyOrPlanKey** | `string` | Chain result or plan key, e.g. PROJ-PLAN or PROJ-PLAN-2 | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successfully removed user as responsible or user was not responsible for broken build |  -  |
| **400** | Requested build has not failed or does not exist |  -  |
| **401** | User is not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeWebSudoFromSession

> removeWebSudoFromSession()



Remove web sudo from session.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RemoveWebSudoFromSessionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.removeWebSudoFromSession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Web sudo has been removed from the current session |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resume

> RestServerStatusInfo resume()



Resumes the cluster.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { ResumeRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.resume();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RestServerStatusInfo**](RestServerStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Both the asked node and cluster states |  -  |
| **403** | User doesn\&#39;t have ADMINISTRATION permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionToUseRepositoryByRssRepo

> revokePermissionToUseRepositoryByRssRepo(repositoryId, targetRepositoryId)



Revoke access of RSS code stored in repository defined by repositoryId from repository defined by targetRepositoryId. Use this method when need to prevent usage of target repository by RSS code stored in repository referenced by repositoryId.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RevokePermissionToUseRepositoryByRssRepoRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Linked repository root id
    repositoryId: 789,
    // number | Target repository id
    targetRepositoryId: 789,
  } satisfies RevokePermissionToUseRepositoryByRssRepoRequest;

  try {
    const data = await api.revokePermissionToUseRepositoryByRssRepo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Linked repository root id | [Defaults to `undefined`] |
| **targetRepositoryId** | `number` | Target repository id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | When successfully removed link between target repository and repository |  -  |
| **403** | When user has insufficient permissions to repository |  -  |
| **404** | When specified repository does not exist or repository stored Bamboo specs feature is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## run

> RunExpiryResponse run()



Executes build and deployment expiry process. Will only start each process if it\&#39;s not currently running.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { RunRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.run();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RunExpiryResponse**](RunExpiryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Expiration process status |  -  |
| **403** | If the user lacks system admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveConfiguration

> EphemeralAgentsConfigurationDTO saveConfiguration(ephemeralAgentsConfigurationDTO)



Modify ephemeral agents configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SaveConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // EphemeralAgentsConfigurationDTO
    ephemeralAgentsConfigurationDTO: ...,
  } satisfies SaveConfigurationRequest;

  try {
    const data = await api.saveConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ephemeralAgentsConfigurationDTO** | [EphemeralAgentsConfigurationDTO](EphemeralAgentsConfigurationDTO.md) |  | |

### Return type

[**EphemeralAgentsConfigurationDTO**](EphemeralAgentsConfigurationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ephemeral agents configuration |  -  |
| **400** | If required data is not provided or invalid |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search

> JsonSearchResultsList search(searchTerm, searchEntity)



Performs a starts with search against projects, plans, plan branches, deployment projects

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | to search for (optional)
    searchTerm: searchTerm_example,
    // 'PROJECT' | 'PLAN' | 'DEPLOYMENT' | 'PLAN_BRANCH' | entity to search for (optional)
    searchEntity: searchEntity_example,
  } satisfies SearchRequest;

  try {
    const data = await api.search(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchTerm** | `string` | to search for | [Optional] [Defaults to `undefined`] |
| **searchEntity** | `PROJECT`, `PLAN`, `DEPLOYMENT`, `PLAN_BRANCH` | entity to search for | [Optional] [Defaults to `undefined`] [Enum: PROJECT, PLAN, DEPLOYMENT, PLAN_BRANCH] |

### Return type

[**JsonSearchResultsList**](JsonSearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAuthors

> SearchResultsList searchAuthors(searchTerm, maxResult, unlinkedOnly, startIndex)



A starts-with search of authors based on their author name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchAuthorsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | The term to search for in authors
    searchTerm: searchTerm_example,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // boolean | if true will only include authors which are not currently linked to a user (optional)
    unlinkedOnly: true,
    // number | Start index (optional)
    startIndex: 56,
  } satisfies SearchAuthorsRequest;

  try {
    const data = await api.searchAuthors(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchTerm** | `string` | The term to search for in authors | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **unlinkedOnly** | `boolean` | if true will only include authors which are not currently linked to a user | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for authors matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAvailableRepositories

> RestRepositoryList searchAvailableRepositories(deploymentProjectId, maxResult, searchTerm, startIndex)



Search for linked repositories which can be granted to create/modify environment by Repository stored Bamboo Specs in given deployment project.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchAvailableRepositoriesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment project id
    deploymentProjectId: deploymentProjectId_example,
    // number | Maximum count of repositories (optional)
    maxResult: 56,
    // string | Part of repository name. Used to filter output. (optional)
    searchTerm: searchTerm_example,
    // number | Start index of repositories (optional)
    startIndex: 56,
  } satisfies SearchAvailableRepositoriesRequest;

  try {
    const data = await api.searchAvailableRepositories(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `string` | Deployment project id | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of repositories | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | Part of repository name. Used to filter output. | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of repositories | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRepositoryList**](RestRepositoryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page container with linked repositories which have RSS enabled |  -  |
| **403** | User has no Administration permission to project |  -  |
| **404** | Deployment project doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAvailableRepositories1

> RestRepositoryList searchAvailableRepositories1(projectKey, searchTerm)



Search for linked repositories which can be granted to create plans by Repository stored Bamboo Specs in given project

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchAvailableRepositories1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | part of repository name. Used to filter output. (optional)
    searchTerm: searchTerm_example,
  } satisfies SearchAvailableRepositories1Request;

  try {
    const data = await api.searchAvailableRepositories1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **searchTerm** | `string` | part of repository name. Used to filter output. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRepositoryList**](RestRepositoryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page object with list of repositories. |  -  |
| **403** | When user has no Administration permission to project |  -  |
| **404** | When specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAvailableRepositories2

> RestRepositoryList searchAvailableRepositories2(repositoryId, searchTerm)



Search for existing linked repositories which can be granted to use given repository by RSS.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchAvailableRepositories2Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Target repository id
    repositoryId: 789,
    // string | Part of repository name. Used to filter output (optional)
    searchTerm: searchTerm_example,
  } satisfies SearchAvailableRepositories2Request;

  try {
    const data = await api.searchAvailableRepositories2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | Target repository id | [Defaults to `undefined`] |
| **searchTerm** | `string` | Part of repository name. Used to filter output | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRepositoryList**](RestRepositoryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page container with linked repositories which are RSS compatible |  -  |
| **403** | When user has insufficient permissions to target repository |  -  |
| **404** | When specified repository not found or repository stored Bamboo specs feature is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchBranches

> SearchResultsList searchBranches(masterPlanKey, maxResult, searchTerm, includeMasterBranch, startIndex, branchNameOnly, fuzzy, releasedInDeployment)



Performs a \&quot;starts with\&quot; search against full plan branch name and full plan branch key. Branches are restricted to \&quot;masterPlanKey\&quot; plan.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchBranchesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | planKey for plan where branches will be searched for
    masterPlanKey: masterPlanKey_example,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in branches (optional)
    searchTerm: searchTerm_example,
    // boolean | Should master branch be included into result (optional)
    includeMasterBranch: true,
    // number | Start index (optional)
    startIndex: 56,
    // boolean | Whether the search should only use branch names of plan branches. Default includes the VCS branch name into the fuzzy search (optional)
    branchNameOnly: true,
    // boolean | Whether the search should be more relaxed when matching results. Default is false (optional)
    fuzzy: true,
    // number | id of deployment project - will return only branches that are released in this deployment (optional)
    releasedInDeployment: 789,
  } satisfies SearchBranchesRequest;

  try {
    const data = await api.searchBranches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **masterPlanKey** | `string` | planKey for plan where branches will be searched for | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in branches | [Optional] [Defaults to `undefined`] |
| **includeMasterBranch** | `boolean` | Should master branch be included into result | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **branchNameOnly** | `boolean` | Whether the search should only use branch names of plan branches. Default includes the VCS branch name into the fuzzy search | [Optional] [Defaults to `undefined`] |
| **fuzzy** | `boolean` | Whether the search should be more relaxed when matching results. Default is false | [Optional] [Defaults to `undefined`] |
| **releasedInDeployment** | `number` | id of deployment project - will return only branches that are released in this deployment | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchDeployments

> SearchResultsList searchDeployments(maxResult, searchTerm, startIndex, permission)



Performs a contains search against deployment project name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchDeploymentsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in projects (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
    // 'READ' | 'WRITE' | 'ADMINISTRATION' | Only return those deployment projects that querying user has permission to. Default is READ (optional)
    permission: permission_example,
  } satisfies SearchDeploymentsRequest;

  try {
    const data = await api.searchDeployments(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in projects | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **permission** | `READ`, `WRITE`, `ADMINISTRATION` | Only return those deployment projects that querying user has permission to. Default is READ | [Optional] [Defaults to `undefined`] [Enum: READ, WRITE, ADMINISTRATION] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchForAvailablePlanChildDependencies

> RestDependencies searchForAvailablePlanChildDependencies(projectKey, searchTerm, buildKey, maxResult, startIndex)



Search for available plan child dependencies

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchForAvailablePlanChildDependenciesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Search term
    searchTerm: searchTerm_example,
    // string | Build key
    buildKey: buildKey_example,
    // number | Maximum count of plans (optional)
    maxResult: 56,
    // number | Start index of plans (optional)
    startIndex: 56,
  } satisfies SearchForAvailablePlanChildDependenciesRequest;

  try {
    const data = await api.searchForAvailablePlanChildDependencies(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **searchTerm** | `string` | Search term | [Defaults to `undefined`] |
| **buildKey** | `string` | Build key | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of plans | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of plans | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDependencies**](RestDependencies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan dependencies |  -  |
| **400** | Search term not provided |  -  |
| **404** | Plan not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchForAvailablePlanParentDependencies

> RestDependencies searchForAvailablePlanParentDependencies(projectKey, searchTerm, buildKey, maxResult, startIndex)



Search for available plan parent dependencies

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchForAvailablePlanParentDependenciesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Search term
    searchTerm: searchTerm_example,
    // string | Build key
    buildKey: buildKey_example,
    // number | Maximum count of plans (optional)
    maxResult: 56,
    // number | Start index of plans (optional)
    startIndex: 56,
  } satisfies SearchForAvailablePlanParentDependenciesRequest;

  try {
    const data = await api.searchForAvailablePlanParentDependencies(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **searchTerm** | `string` | Search term | [Defaults to `undefined`] |
| **buildKey** | `string` | Build key | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of plans | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of plans | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDependencies**](RestDependencies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan parent dependencies |  -  |
| **400** | Search term not provided |  -  |
| **404** | Plan not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchJobs

> SearchResultsList searchJobs(planKey, maxResult, searchTerm, startIndex)



Performs a \&quot;starts with\&quot; search against full job name and full job key.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchJobsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | planKey for plan where jobs will be searched for
    planKey: planKey_example,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in jobs (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
  } satisfies SearchJobsRequest;

  try {
    const data = await api.searchJobs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | planKey for plan where jobs will be searched for | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in jobs | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchPlans

> SearchResultsList searchPlans(maxResult, searchTerm, startIndex, permission, type, fuzzy)



Performs a \&quot;starts with\&quot; search against full plan name and full plan key.  Use \&quot;type\&quot; argument to filter by plan type by default will return TopLevelPlans

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchPlansRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in plans (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
    // 'READ' | 'WRITE' | 'BUILD' | 'CLONE' | 'VIEW_CONFIGURATION' | 'ADMINISTRATION' | Only return those plans that querying user has permission to. Default is READ (optional)
    permission: permission_example,
    // 'CHAIN' | 'JOB' | 'CHAIN_BRANCH' | Type of the plan to return (optional)
    type: type_example,
    // boolean | Whether the search should be more relaxed when matching results. Default is false (optional)
    fuzzy: true,
  } satisfies SearchPlansRequest;

  try {
    const data = await api.searchPlans(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in plans | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **permission** | `READ`, `WRITE`, `BUILD`, `CLONE`, `VIEW_CONFIGURATION`, `ADMINISTRATION` | Only return those plans that querying user has permission to. Default is READ | [Optional] [Defaults to `undefined`] [Enum: READ, WRITE, BUILD, CLONE, VIEW_CONFIGURATION, ADMINISTRATION] |
| **type** | `CHAIN`, `JOB`, `CHAIN_BRANCH` | Type of the plan to return | [Optional] [Defaults to `undefined`] [Enum: CHAIN, JOB, CHAIN_BRANCH] |
| **fuzzy** | `boolean` | Whether the search should be more relaxed when matching results. Default is false | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchProjects

> SearchResultsList searchProjects(maxResult, searchTerm, startIndex, permission)



Performs a contains search against project name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchProjectsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in projects (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
    // 'READ' | 'WRITE' | 'ADMINISTRATION' | only return those projects that querying user has permission to. Default is READ (optional)
    permission: permission_example,
  } satisfies SearchProjectsRequest;

  try {
    const data = await api.searchProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in projects | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **permission** | `READ`, `WRITE`, `ADMINISTRATION` | only return those projects that querying user has permission to. Default is READ | [Optional] [Defaults to `undefined`] [Enum: READ, WRITE, ADMINISTRATION] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSpecsBranches

> RestBranchList searchSpecsBranches(repositoryId, searchTerm)



Search for divergent branches names (i.e. vcs branches that have RSS execution results).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchSpecsBranchesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | id of the linked repository which stores Bamboo Specs
    repositoryId: 789,
    // string | Part of branch name. Used to filter output (optional)
    searchTerm: searchTerm_example,
  } satisfies SearchSpecsBranchesRequest;

  try {
    const data = await api.searchSpecsBranches(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | id of the linked repository which stores Bamboo Specs | [Defaults to `undefined`] |
| **searchTerm** | `string` | Part of branch name. Used to filter output | [Optional] [Defaults to `undefined`] |

### Return type

[**RestBranchList**](RestBranchList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The page object with branches |  -  |
| **403** | When user has insufficient permissions to repository |  -  |
| **404** | When Bamboo Specs feature is disabled in Bamboo, or when a repository with given ID could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchStages

> SearchResultsList searchStages(planKey, maxResult, searchTerm, startIndex, stageId)



Performs a \&quot;starts with\&quot; search against full stage name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchStagesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | planKey for plan where stages will be searched for
    planKey: planKey_example,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | The term to search for in stages (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
    // string | Stage id (optional)
    stageId: stageId_example,
  } satisfies SearchStagesRequest;

  try {
    const data = await api.searchStages(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | planKey for plan where stages will be searched for | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in stages | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **stageId** | `string` | Stage id | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchUsers

> SearchResultsList searchUsers(searchTerm, maxResult, startIndex)



A starts-with search of users based on their username, full-name and if allowed email address.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchUsersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | The term to search for in users
    searchTerm: searchTerm_example,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // number | Start index (optional)
    startIndex: 56,
  } satisfies SearchUsersRequest;

  try {
    const data = await api.searchUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchTerm** | `string` | The term to search for in users | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for users matching the provided search term |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchVersions

> SearchResultsList searchVersions(deploymentProjectId, maxResult, branchKey, searchTerm, startIndex, chronologicalOrder)



Performs a contains search against a version name.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SearchVersionsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | The deployment project to search under
    deploymentProjectId: 789,
    // number | Maximum count of returned elements (optional)
    maxResult: 56,
    // string | Narrow the search to releases created out of the branch (optional)
    branchKey: branchKey_example,
    // string | The term to search for in projects (optional)
    searchTerm: searchTerm_example,
    // number | Start index (optional)
    startIndex: 56,
    // boolean | Sort releases by creation date (optional)
    chronologicalOrder: true,
  } satisfies SearchVersionsRequest;

  try {
    const data = await api.searchVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `number` | The deployment project to search under | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of returned elements | [Optional] [Defaults to `undefined`] |
| **branchKey** | `string` | Narrow the search to releases created out of the branch | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | The term to search for in projects | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index | [Optional] [Defaults to `undefined`] |
| **chronologicalOrder** | `boolean` | Sort releases by creation date | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results for plans matching the provided search term |  -  |
| **400** | Validation error |  -  |
| **404** | Deployment project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setAgentAutomaticManagementConfiguration

> RestRemoteAgentConfiguration setAgentAutomaticManagementConfiguration(restOfflineAgentRemovalConfig)



Update the agents automatic management configuration

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SetAgentAutomaticManagementConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestOfflineAgentRemovalConfig (optional)
    restOfflineAgentRemovalConfig: ...,
  } satisfies SetAgentAutomaticManagementConfigurationRequest;

  try {
    const data = await api.setAgentAutomaticManagementConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restOfflineAgentRemovalConfig** | [RestOfflineAgentRemovalConfig](RestOfflineAgentRemovalConfig.md) |  | [Optional] |

### Return type

[**RestRemoteAgentConfiguration**](RestRemoteAgentConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent automatic management configuration |  -  |
| **400** | If invalid settings are given |  -  |
| **403** | The user lacks administration permission to view this information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setConfiguration

> RestCombinedExpiryConfiguration setConfiguration(restCombinedExpiryConfiguration)



Update global build and deployment expiry configuration for this Bamboo instance. Partial configuration is not allowed (it will fail validation).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SetConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestCombinedExpiryConfiguration
    restCombinedExpiryConfiguration: ...,
  } satisfies SetConfigurationRequest;

  try {
    const data = await api.setConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restCombinedExpiryConfiguration** | [RestCombinedExpiryConfiguration](RestCombinedExpiryConfiguration.md) |  | |

### Return type

[**RestCombinedExpiryConfiguration**](RestCombinedExpiryConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Newly saved expiry configuration |  -  |
| **400** | Validation errors |  -  |
| **403** | If the user lacks restricted admin permissions to update the elastic configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setVisibleFilters

> setVisibleFilters(requestBody)



Saves the list of visible quick filters for currently logged in user.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { SetVisibleFiltersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // Array<number> | Quick filter ids
    requestBody: ...,
  } satisfies SetVisibleFiltersRequest;

  try {
    const data = await api.setVisibleFilters(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `Array<number>` | Quick filter ids | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned without any content when the visible filters were successfully saved for current user |  -  |
| **400** | Sent whenever any quick filter was not found with the given id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startBuild1

> RestQueuedBuild startBuild1(projectKey, buildKey, executeAllStages, customRevision, stage)



Fire build execution for specified plan. Effectively, this method adds build to the build queue, so is not guarantied that build would be executed immediately. Depending on currently executed builds and length of build queue, build may be executed when queue would be drained. Additional variables could be passed to this method either as form encoded POST payload or query parameters. PLEASE note: Query parameters are more important - override those stored in form payload. Variables defined in Bamboo as global variables or plan variables MUST be prefixed with bamboo.variable ie. &lt;code&gt;bamboo.variable.myVariable&#x3D;valueForMyVariable&lt;/code&gt;. When global or plan variables would be passed to this method, will override default values for variables.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { StartBuild1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | project key
    projectKey: projectKey_example,
    // string | plan key (only top level plan key, can not be job key)
    buildKey: buildKey_example,
    // boolean | enforce executing all stages in a plan, even if defined as manual stages. Execution will follow and include latest stage, unless some stage will fail. (optional)
    executeAllStages: true,
    // string | execute this plan for a custom revision instead of the latest one (optional)
    customRevision: customRevision_example,
    // string | name of the stage that should be executed even if defined as manual stage. Execution will follow to the next manual stage after this or end of plan if no subsequent manual stage (optional)
    stage: stage_example,
  } satisfies StartBuild1Request;

  try {
    const data = await api.startBuild1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | project key | [Defaults to `undefined`] |
| **buildKey** | `string` | plan key (only top level plan key, can not be job key) | [Defaults to `undefined`] |
| **executeAllStages** | `boolean` | enforce executing all stages in a plan, even if defined as manual stages. Execution will follow and include latest stage, unless some stage will fail. | [Optional] [Defaults to `undefined`] |
| **customRevision** | `string` | execute this plan for a custom revision instead of the latest one | [Optional] [Defaults to `undefined`] |
| **stage** | `string` | name of the stage that should be executed even if defined as manual stage. Execution will follow to the next manual stage after this or end of plan if no subsequent manual stage | [Optional] [Defaults to `undefined`] |

### Return type

[**RestQueuedBuild**](RestQueuedBuild.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information for queued build, including build number, changes and reason of build |  -  |
| **400** | When build was not added to the queue because of Bamboo limitation, e.g too many concurrent builds running for requested plan already or validation exception |  -  |
| **403** | When user does not have sufficient rights to view or execute build for specified plan |  -  |
| **404** | When specified plan does not exist or plan is not a top level plan |  -  |
| **415** | When method payload is not form encoded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopBuild

> stopBuild(projectKey, buildKey, buildNumber)



Stop build execution.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { StopBuildRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key - IMPORTANT: as build queue contains only jobs not top level plans, plan key here MUST be a job key as opposite to other methods in this resource.
    buildKey: buildKey_example,
    // number | Build number
    buildNumber: 56,
  } satisfies StopBuildRequest;

  try {
    const data = await api.stopBuild(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **buildKey** | `string` | Plan key - IMPORTANT: as build queue contains only jobs not top level plans, plan key here MUST be a job key as opposite to other methods in this resource. | [Defaults to `undefined`] |
| **buildNumber** | `number` | Build number | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | On success (success is also when build was already completed - so nothing to stop) |  -  |
| **403** | When user does not have sufficient rights to view or execute build for specified plan |  -  |
| **404** | When specified job does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testConnection

> TestConnectionResultDto testConnection(ephemeralAgentsConfigurationDTO)



Test connection to ephemeral agents provider.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { TestConnectionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // EphemeralAgentsConfigurationDTO
    ephemeralAgentsConfigurationDTO: ...,
  } satisfies TestConnectionRequest;

  try {
    const data = await api.testConnection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ephemeralAgentsConfigurationDTO** | [EphemeralAgentsConfigurationDTO](EphemeralAgentsConfigurationDTO.md) |  | |

### Return type

[**TestConnectionResultDto**](TestConnectionResultDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Result of connection testing |  -  |
| **400** | If required data is not provided |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testConnection1

> RestRepositoryConnectionResult testConnection1(body)



Tests connection to a repository if the repository type supports connection testing. Request payload should contain repository configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { TestConnection1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // object (optional)
    body: Object,
  } satisfies TestConnection1Request;

  try {
    const data = await api.testConnection1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `object` |  | [Optional] |

### Return type

[**RestRepositoryConnectionResult**](RestRepositoryConnectionResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful call (without validation errors) will result in HTTP 200. The response will contain potential connection errors. If the connection to repository was successful, the error list will be empty |  -  |
| **400** | Validation errors before attempting to connect to repository. The response will contain error messages and field errors. This response will also be sent if the repository type doesn\&#39;t support connection testing |  -  |
| **403** | The calling user had insufficient permissions, e.g. for a plan or a repository |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## triggerJob

> RestQuarantineConfig triggerJob(restScheduledJob)



Trigger background job execution.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { TriggerJobRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestScheduledJob
    restScheduledJob: ...,
  } satisfies TriggerJobRequest;

  try {
    const data = await api.triggerJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restScheduledJob** | [RestScheduledJob](RestScheduledJob.md) |  | |

### Return type

[**RestQuarantineConfig**](RestQuarantineConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job is scheduled for execution |  -  |
| **400** | Issues with access to underlying scheduler |  -  |
| **403** | Current user does not have sufficient privileges to trigger background job |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## triggerSpecsScanning

> triggerSpecsScanning(repositoryId, branch)



Resource for triggering Repository-stored Bamboo Specs in a \&#39;forced\&#39; way. Successful requests to this resource will trigger Bamboo Specs execution even if standard processing would have been skipped (e.g. no new commits to process).

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { TriggerSpecsScanningRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | id of the repository to trigger
    repositoryId: 789,
    // string | Optional branch of the repository. Works only if repository supports divergent branches (optional)
    branch: branch_example,
  } satisfies TriggerSpecsScanningRequest;

  try {
    const data = await api.triggerSpecsScanning(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repositoryId** | `number` | id of the repository to trigger | [Defaults to `undefined`] |
| **branch** | `string` | Optional branch of the repository. Works only if repository supports divergent branches | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | On a valid request, when Specs scanning has been successfully enqueued |  -  |
| **400** | Whenever Specs scanning could not be enqueued, e.g. when the Repository Stored Specs processing has not been enabled for the given repository |  -  |
| **404** | When Bamboo Specs feature is disabled in Bamboo, or when the repository can\&#39;t be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## triggerSpecsScanning1

> triggerSpecsScanning1(name, repositoryId, id, repositoryName)



Webhook resource for triggering Repository-stored Bamboo Specs. Either repository ID or name must be provided via query parameters to identify the linked repository in which Bamboo Specs are defined.  Ambiguous requests, which reference more than one repository via the query params, will result in one parameter taking precedence over the others. There\&#39;s no guarantee which one.  This resource does not require authorisation. It will always return HTTP 204 response on every valid request, even if the targeted repository doesn\&#39;t exist or does not contain Bamboo Specs.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { TriggerSpecsScanning1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Unique name of the linked repository which stores Bamboo Specs (optional)
    name: name_example,
    // number | alternative name of the query parameter to provide repository ID (optional)
    repositoryId: 789,
    // number | ID of the linked repository which stores Bamboo Specs (optional)
    id: 789,
    // string | Alternative name of the query parameter to provide repository name (optional)
    repositoryName: repositoryName_example,
  } satisfies TriggerSpecsScanning1Request;

  try {
    const data = await api.triggerSpecsScanning1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Unique name of the linked repository which stores Bamboo Specs | [Optional] [Defaults to `undefined`] |
| **repositoryId** | `number` | alternative name of the query parameter to provide repository ID | [Optional] [Defaults to `undefined`] |
| **id** | `number` | ID of the linked repository which stores Bamboo Specs | [Optional] [Defaults to `undefined`] |
| **repositoryName** | `string` | Alternative name of the query parameter to provide repository name | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | On any valid request |  -  |
| **400** | When neither repository ID nor repository name were provided |  -  |
| **404** | When Bamboo Specs feature is disabled in Bamboo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAgentCapability

> updateAgentCapability(agentId, capabilityKey, restRemoteAgentCapability)



Update existing agent capability. It\&#39;s allowed to skip capability key at request payload.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateAgentCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | agent id
    agentId: 789,
    // string | Capability key
    capabilityKey: capabilityKey_example,
    // RestRemoteAgentCapability | Agent capability
    restRemoteAgentCapability: ...,
  } satisfies UpdateAgentCapabilityRequest;

  try {
    const data = await api.updateAgentCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `number` | agent id | [Defaults to `undefined`] |
| **capabilityKey** | `string` | Capability key | [Defaults to `undefined`] |
| **restRemoteAgentCapability** | [RestRemoteAgentCapability](RestRemoteAgentCapability.md) | Agent capability | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | capability updated successfully |  -  |
| **400** | Validation failed |  -  |
| **403** | User doesn\&#39;t have admin permissions |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAgentLocalHandler

> RestArtifactHandler updateAgentLocalHandler(restArtifactHandler)



Update Agent-Local Artifact Handler configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateAgentLocalHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestArtifactHandler | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used
    restArtifactHandler: ...,
  } satisfies UpdateAgentLocalHandlerRequest;

  try {
    const data = await api.updateAgentLocalHandler(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restArtifactHandler** | [RestArtifactHandler](RestArtifactHandler.md) | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used | |

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of updated Agent Local Artifact handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAllImageIds

> updateAllImageIds(imageId, newImageId)



Bulk update of all images AMI id.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateAllImageIdsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | AMI id
    imageId: imageId_example,
    // string | New AMI id
    newImageId: newImageId_example,
  } satisfies UpdateAllImageIdsRequest;

  try {
    const data = await api.updateAllImageIds(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **imageId** | `string` | AMI id | [Defaults to `undefined`] |
| **newImageId** | `string` | New AMI id | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Count of update images |  -  |
| **400** | When Elastic Bamboo is disabled |  -  |
| **403** | When user does not have admin permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAuditLogConfiguration

> RestAuditLogConfiguration updateAuditLogConfiguration(restAuditLogConfiguration)



Enable/disable audit log.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateAuditLogConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestAuditLogConfiguration | Audit log settings
    restAuditLogConfiguration: ...,
  } satisfies UpdateAuditLogConfigurationRequest;

  try {
    const data = await api.updateAuditLogConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restAuditLogConfiguration** | [RestAuditLogConfiguration](RestAuditLogConfiguration.md) | Audit log settings | |

### Return type

[**RestAuditLogConfiguration**](RestAuditLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enable/disable audit log successfully |  -  |
| **400** | If an invalid setting is given |  -  |
| **403** | If the user lacks restricted admin permission to enable/disable audit log |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBambooRemoteHandler

> RestArtifactHandler updateBambooRemoteHandler(simpleRestArtifactHandler)



Update Bamboo Server Artifact Handler configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateBambooRemoteHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // SimpleRestArtifactHandler | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used
    simpleRestArtifactHandler: ...,
  } satisfies UpdateBambooRemoteHandlerRequest;

  try {
    const data = await api.updateBambooRemoteHandler(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **simpleRestArtifactHandler** | [SimpleRestArtifactHandler](SimpleRestArtifactHandler.md) | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used | |

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of updated Bamboo Server artifact handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCapability

> updateCapability(configurationId, restCapability)



Update ephemeral agent template capability.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateCapabilityRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
    // RestCapability | Ephemeral agent template capability
    restCapability: ...,
  } satisfies UpdateCapabilityRequest;

  try {
    const data = await api.updateCapability(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |
| **restCapability** | [RestCapability](RestCapability.md) | Ephemeral agent template capability | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Ephemeral agent template capability updated |  -  |
| **400** | When Ephemeral agents are disabled or validation failed |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateConfiguration

> RestElasticImageConfig updateConfiguration(configurationId, restElasticImageConfig)



Update elastic image configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Image configuration id
    configurationId: 789,
    // RestElasticImageConfig | Elastic image configuration
    restElasticImageConfig: ...,
  } satisfies UpdateConfigurationRequest;

  try {
    const data = await api.updateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Image configuration id | [Defaults to `undefined`] |
| **restElasticImageConfig** | [RestElasticImageConfig](RestElasticImageConfig.md) | Elastic image configuration | |

### Return type

[**RestElasticImageConfig**](RestElasticImageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Elastic image updated |  -  |
| **400** | When Elastic Bamboo is disabled or validation failed |  -  |
| **403** | When user does not have admin permissions |  -  |
| **404** | When image configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGeneralConfiguration

> RestBuildConcurrency updateGeneralConfiguration(restGeneralConfiguration)



Update bamboo server general configurations. Partially update supported.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateGeneralConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestGeneralConfiguration
    restGeneralConfiguration: ...,
  } satisfies UpdateGeneralConfigurationRequest;

  try {
    const data = await api.updateGeneralConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restGeneralConfiguration** | [RestGeneralConfiguration](RestGeneralConfiguration.md) |  | |

### Return type

[**RestBuildConcurrency**](RestBuildConcurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Update successfully |  -  |
| **400** | Error messages about invalid parameters. E.g. gravatar support enabled but no gravatar server url specified |  -  |
| **403** | The user lacks restricted admin permission to update general configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGlobalVariable

> RestGlobalVariable updateGlobalVariable(variableId, restGlobalVariable)



Update value of a global variable.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateGlobalVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Id of the variable
    variableId: variableId_example,
    // RestGlobalVariable
    restGlobalVariable: ...,
  } satisfies UpdateGlobalVariableRequest;

  try {
    const data = await api.updateGlobalVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableId** | `string` | Id of the variable | [Defaults to `undefined`] |
| **restGlobalVariable** | [RestGlobalVariable](RestGlobalVariable.md) |  | |

### Return type

[**RestGlobalVariable**](RestGlobalVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  Update variable successfully |  -  |
| **403** | If the user lacks restricted admin permission to create global variables |  -  |
| **404** | If the user lacks restricted admin permission to update global variables |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIMServerConfig

> RestIMServerConfiguration updateIMServerConfig(restIMServerConfiguration)



Update or create existing IM server configuration in bamboo. If IM server is already configured in bamboo, update existing configuration. Otherwise, create IM server configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateIMServerConfigRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestIMServerConfiguration
    restIMServerConfiguration: ...,
  } satisfies UpdateIMServerConfigRequest;

  try {
    const data = await api.updateIMServerConfig(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restIMServerConfiguration** | [RestIMServerConfiguration](RestIMServerConfiguration.md) |  | |

### Return type

[**RestIMServerConfiguration**](RestIMServerConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated IM server configuration |  -  |
| **400** | If invalid configuration is provided, e.g. missing host, invalid port, etc. |  -  |
| **403** | If the user lacks restricted admin permission to update IM configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMailConfiguration

> RestMailConfiguration updateMailConfiguration(restMailConfiguration)



Update the mail server configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateMailConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestMailConfiguration
    restMailConfiguration: ...,
  } satisfies UpdateMailConfigurationRequest;

  try {
    const data = await api.updateMailConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restMailConfiguration** | [RestMailConfiguration](RestMailConfiguration.md) |  | |

### Return type

[**RestMailConfiguration**](RestMailConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated mail server configuration |  -  |
| **400** | If invalid configuration is provided, e.g. missing host, invalid port, etc. |  -  |
| **403** | User lacks administrator permissions to update mail configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateQuarantineSettings

> RestQuarantineConfig updateQuarantineSettings(restQuarantineConfig)



Update Bamboo quarantine settings.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateQuarantineSettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestQuarantineConfig
    restQuarantineConfig: ...,
  } satisfies UpdateQuarantineSettingsRequest;

  try {
    const data = await api.updateQuarantineSettings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restQuarantineConfig** | [RestQuarantineConfig](RestQuarantineConfig.md) |  | |

### Return type

[**RestQuarantineConfig**](RestQuarantineConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quarantine settings of Bamboo is updated successfully, return updated config |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateQuickFilter

> RestQuickFilter updateQuickFilter(id, restQuickFilter)



Update quick filter\&#39;s basic configuration, e.g. name or position on list. This method does not allow to configure quick filter\&#39;s rules.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateQuickFilterRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Quick filter id
    id: 789,
    // RestQuickFilter | Quick filter
    restQuickFilter: ...,
  } satisfies UpdateQuickFilterRequest;

  try {
    const data = await api.updateQuickFilter(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | Quick filter id | [Defaults to `undefined`] |
| **restQuickFilter** | [RestQuickFilter](RestQuickFilter.md) | Quick filter | |

### Return type

[**RestQuickFilter**](RestQuickFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned when quick filter was updated successfully. Response will contain Quick Filter definition with data after update |  -  |
| **400** | When any validation errors occur or no quick filter was found with given id. Response will contain all error messages |  -  |
| **403** | User don\&#39;t have restricted or system administrator permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRemoteAgentConfiguration

> RestRemoteAgentConfiguration updateRemoteAgentConfiguration(restRemoteAgentConfiguration)



Update the remote agent configuration

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRemoteAgentConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestRemoteAgentConfiguration | Remote agent configuration
    restRemoteAgentConfiguration: ...,
  } satisfies UpdateRemoteAgentConfigurationRequest;

  try {
    const data = await api.updateRemoteAgentConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restRemoteAgentConfiguration** | [RestRemoteAgentConfiguration](RestRemoteAgentConfiguration.md) | Remote agent configuration | |

### Return type

[**RestRemoteAgentConfiguration**](RestRemoteAgentConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The remote agent configuration after the update |  -  |
| **400** | if there was an error in changing the remote agent support |  -  |
| **403** | User lacks restricted admin permission to alter remote agent support |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestAgent

> RestAgent updateRestAgent(agentId, restAgent)



Update agent details

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRestAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Id of the agent
    agentId: agentId_example,
    // RestAgent | RestAgent that contains the update values
    restAgent: ...,
  } satisfies UpdateRestAgentRequest;

  try {
    const data = await api.updateRestAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `string` | Id of the agent | [Defaults to `undefined`] |
| **restAgent** | [RestAgent](RestAgent.md) | RestAgent that contains the update values | |

### Return type

[**RestAgent**](RestAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated agent successfully |  -  |
| **400** | If the new agent is invalid |  -  |
| **403** | If the user lacks restricted admin permission to update agent |  -  |
| **404** | If the agent does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestBuildConcurrency

> RestBuildConcurrency updateRestBuildConcurrency(restBuildConcurrency)



Update build concurrency settings. Partially update supported.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRestBuildConcurrencyRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestBuildConcurrency
    restBuildConcurrency: ...,
  } satisfies UpdateRestBuildConcurrencyRequest;

  try {
    const data = await api.updateRestBuildConcurrency(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restBuildConcurrency** | [RestBuildConcurrency](RestBuildConcurrency.md) |  | |

### Return type

[**RestBuildConcurrency**](RestBuildConcurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of the update operation |  -  |
| **400** | If an invalid setting is given |  -  |
| **403** | If the user lacks restricted admin permission to update build concurrency settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestBuildMonitoring

> BuildMonitoringLink updateRestBuildMonitoring(restBuildMonitoring)



Update build monitoring settings. Partially update supported.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRestBuildMonitoringRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestBuildMonitoring
    restBuildMonitoring: ...,
  } satisfies UpdateRestBuildMonitoringRequest;

  try {
    const data = await api.updateRestBuildMonitoring(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restBuildMonitoring** | [RestBuildMonitoring](RestBuildMonitoring.md) |  | |

### Return type

[**BuildMonitoringLink**](BuildMonitoringLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of the update operation and a link to the REST endpoint |  -  |
| **400** | If an invalid setting is given |  -  |
| **403** | If the user lacks restricted admin permission to update build monitoring |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestElasticConfiguration

> RestElasticConfiguration updateRestElasticConfiguration(restElasticConfiguration)



Update elastic configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRestElasticConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestElasticConfiguration
    restElasticConfiguration: ...,
  } satisfies UpdateRestElasticConfigurationRequest;

  try {
    const data = await api.updateRestElasticConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restElasticConfiguration** | [RestElasticConfiguration](RestElasticConfiguration.md) |  | |

### Return type

[**RestElasticConfiguration**](RestElasticConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated elastic configuration |  -  |
| **400** | If an invalid elastic configuration is given |  -  |
| **403** | If the user lacks restricted admin permissions to update the elastic configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestSecuritySettings

> SecuritySettingsLink updateRestSecuritySettings(restSecuritySettings)



Update security settings. Partial update supported.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateRestSecuritySettingsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestSecuritySettings
    restSecuritySettings: ...,
  } satisfies UpdateRestSecuritySettingsRequest;

  try {
    const data = await api.updateRestSecuritySettings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restSecuritySettings** | [RestSecuritySettings](RestSecuritySettings.md) |  | |

### Return type

[**SecuritySettingsLink**](SecuritySettingsLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Link to the REST endpoint |  -  |
| **400** | If invalid settings are given |  -  |
| **403** | If the user lacks system administration permissions which are needed to update |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateS3Handler

> RestArtifactHandler updateS3Handler(restArtifactHandler)



Update S3 Artifact Handler configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateS3HandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestArtifactHandler | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used
    restArtifactHandler: ...,
  } satisfies UpdateS3HandlerRequest;

  try {
    const data = await api.updateS3Handler(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restArtifactHandler** | [RestArtifactHandler](RestArtifactHandler.md) | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used | |

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of updated S3 Artifact handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSftpHandler

> RestArtifactHandler updateSftpHandler(simpleRestArtifactHandler)



Update SFTP Artifact Handler configuration.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateSftpHandlerRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // SimpleRestArtifactHandler | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used
    simpleRestArtifactHandler: ...,
  } satisfies UpdateSftpHandlerRequest;

  try {
    const data = await api.updateSftpHandler(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **simpleRestArtifactHandler** | [SimpleRestArtifactHandler](SimpleRestArtifactHandler.md) | New configuration of the artifact handler. If a configuration attribute is not present in the request, the previously stored value is used | |

### Return type

[**RestArtifactHandler**](RestArtifactHandler.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Configuration of updated SFTP artifact handler |  -  |
| **400** | If artifact handler dark feature is not enabled |  -  |
| **403** | If the user lacks restricted admin permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTemplateConfiguration

> RestEphemeralAgentTemplate updateTemplateConfiguration(configurationId, restEphemeralAgentTemplate)



Update ephemeral agent template.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateTemplateConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // number | Configuration ID
    configurationId: 789,
    // RestEphemeralAgentTemplate | Ephemeral agent template
    restEphemeralAgentTemplate: ...,
  } satisfies UpdateTemplateConfigurationRequest;

  try {
    const data = await api.updateTemplateConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `number` | Configuration ID | [Defaults to `undefined`] |
| **restEphemeralAgentTemplate** | [RestEphemeralAgentTemplate](RestEphemeralAgentTemplate.md) | Ephemeral agent template | |

### Return type

[**RestEphemeralAgentTemplate**](RestEphemeralAgentTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ephemeral agent template updated |  -  |
| **400** | When Ephemeral agents are disabled or validation failed |  -  |
| **403** | When the user does not have either admin or restricted admin permissions |  -  |
| **404** | When configuration doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVersionStatus

> RestDeploymentVersionStatuses updateVersionStatus(deploymentVersionId, newStatus)



Update deployment version status.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { UpdateVersionStatusRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Deployment version id
    deploymentVersionId: deploymentVersionId_example,
    // string | deployment version status. Possible values: UNKNOWN, APPROVED, BROKEN, INCOMPLETE
    newStatus: newStatus_example,
  } satisfies UpdateVersionStatusRequest;

  try {
    const data = await api.updateVersionStatus(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentVersionId** | `string` | Deployment version id | [Defaults to `undefined`] |
| **newStatus** | `string` | deployment version status. Possible values: UNKNOWN, APPROVED, BROKEN, INCOMPLETE | [Defaults to `undefined`] |

### Return type

[**RestDeploymentVersionStatuses**](RestDeploymentVersionStatuses.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Latest version status |  -  |
| **400** | Unknown status of version |  -  |
| **401** | For not authorized user |  -  |
| **404** | Deployment version not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyGlobalVariableValue

> verifyGlobalVariableValue(restVerificationRequest)



Server side verification that the encrypted value of a global variable has changed.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bamboo-api';
import type { VerifyGlobalVariableValueRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DefaultApi();

  const body = {
    // RestVerificationRequest
    restVerificationRequest: ...,
  } satisfies VerifyGlobalVariableValueRequest;

  try {
    const data = await api.verifyGlobalVariableValue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restVerificationRequest** | [RestVerificationRequest](RestVerificationRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Variable value matches provided value |  -  |
| **400** | If variable name or value format is wrong |  -  |
| **403** | If the user lacks restricted admin permission to fetch global variables |  -  |
| **404** | If the variable does not exist |  -  |
| **409** | The variable value doesn\&#39;t match provided value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

