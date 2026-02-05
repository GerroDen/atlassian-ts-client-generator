# bamboo-api@12.1.1

A TypeScript SDK client for the example.com API.

## Usage

First, install the SDK from npm.

```bash
npm install bamboo-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  AvatarApi,
} from 'bamboo-api';
import type { DeleteAvatarRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new AvatarApi();

  try {
    const data = await api.deleteAvatar();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://example.com:8085/rest*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AvatarApi* | [**deleteAvatar**](docs/AvatarApi.md#deleteavatar) | **DELETE** /api/latest/avatar/user/avatar.png | 
*AvatarApi* | [**retrieveAvatar**](docs/AvatarApi.md#retrieveavatar) | **GET** /api/latest/avatar/user/{userName}/avatar.png | 
*AvatarApi* | [**uploadAvatar**](docs/AvatarApi.md#uploadavatar) | **PUT** /api/latest/avatar/user/avatar.png | 
*BuildApi* | [**addPlanLabel**](docs/BuildApi.md#addplanlabel) | **POST** /api/latest/plan/{projectKey}-{buildKey}/label | 
*BuildApi* | [**addPlanVariable**](docs/BuildApi.md#addplanvariable) | **POST** /api/latest/plan/{projectKey}-{buildKey}/variables | 
*BuildApi* | [**createNewBranch**](docs/BuildApi.md#createnewbranch) | **PUT** /api/latest/plan/{projectKey}-{buildKey}/branch/{branchName} | 
*BuildApi* | [**deletePlan**](docs/BuildApi.md#deleteplan) | **DELETE** /api/latest/plan/{projectKey}-{buildKey} | 
*BuildApi* | [**deletePlanVariable**](docs/BuildApi.md#deleteplanvariable) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} | 
*BuildApi* | [**disablePlan**](docs/BuildApi.md#disableplan) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/enable | 
*BuildApi* | [**editPlanVariable**](docs/BuildApi.md#editplanvariable) | **PUT** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} | 
*BuildApi* | [**enablePlan**](docs/BuildApi.md#enableplan) | **POST** /api/latest/plan/{projectKey}-{buildKey}/enable | 
*BuildApi* | [**enableSpecsForBranches**](docs/BuildApi.md#enablespecsforbranches) | **POST** /api/latest/plan/{projectKey}-{buildKey}/branch/enableSpecsForBranches | 
*BuildApi* | [**exportPlanSpec**](docs/BuildApi.md#exportplanspec) | **GET** /api/latest/plan/{projectKey}-{buildKey}/specs | 
*BuildApi* | [**getAllPlanList**](docs/BuildApi.md#getallplanlist) | **GET** /api/latest/plan | 
*BuildApi* | [**getDockerPipelineConfiguration**](docs/BuildApi.md#getdockerpipelineconfiguration) | **GET** /api/latest/job/{jobKey}/docker | 
*BuildApi* | [**getIssueDetails**](docs/BuildApi.md#getissuedetails) | **GET** /api/latest/plan/{projectKey}-{buildKey}/issue/{issueKey} | 
*BuildApi* | [**getPlan**](docs/BuildApi.md#getplan) | **GET** /api/latest/plan/{projectKey}-{buildKey} | 
*BuildApi* | [**getPlanAlias**](docs/BuildApi.md#getplanalias) | **GET** /api/latest/plan/{projectKey}/{buildKey} | 
*BuildApi* | [**getPlanArtifactDefinition**](docs/BuildApi.md#getplanartifactdefinition) | **GET** /api/latest/plan/{projectKey}-{buildKey}/artifact | 
*BuildApi* | [**getPlanBranch**](docs/BuildApi.md#getplanbranch) | **GET** /api/latest/plan/{projectKey}-{buildKey}/branch/{branchName} | 
*BuildApi* | [**getPlanBranches**](docs/BuildApi.md#getplanbranches) | **GET** /api/latest/plan/{projectKey}-{buildKey}/branch | 
*BuildApi* | [**getPlanDirectory**](docs/BuildApi.md#getplandirectory) | **GET** /api/latest/planDirectoryInfo/{planKey} | 
*BuildApi* | [**getPlanLabels**](docs/BuildApi.md#getplanlabels) | **GET** /api/latest/plan/{projectKey}-{buildKey}/label | 
*BuildApi* | [**getPlanVariable**](docs/BuildApi.md#getplanvariable) | **GET** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} | 
*BuildApi* | [**getPlanVariables**](docs/BuildApi.md#getplanvariables) | **GET** /api/latest/plan/{projectKey}-{buildKey}/variables | 
*BuildApi* | [**getVcsBranches**](docs/BuildApi.md#getvcsbranches) | **GET** /api/latest/plan/{projectKey}-{buildKey}/vcsBranches | 
*BuildApi* | [**markPlanFavourite**](docs/BuildApi.md#markplanfavourite) | **POST** /api/latest/plan/{projectKey}-{buildKey}/favourite | 
*BuildApi* | [**quarantineTest**](docs/BuildApi.md#quarantinetest) | **POST** /api/latest/plan/{projectKey}-{buildKey}/test/{testId}/quarantine | 
*BuildApi* | [**removePlanLabel**](docs/BuildApi.md#removeplanlabel) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/label/{labelName} | 
*BuildApi* | [**setDockerPipelineConfiguration**](docs/BuildApi.md#setdockerpipelineconfiguration) | **PUT** /api/latest/job/{jobKey}/docker | 
*BuildApi* | [**unleashTest**](docs/BuildApi.md#unleashtest) | **POST** /api/latest/plan/{projectKey}-{buildKey}/test/{testId}/unleash | 
*BuildApi* | [**unmarkPlanFavourite**](docs/BuildApi.md#unmarkplanfavourite) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/favourite | 
*BuildNumberApi* | [**bumpBuildNumber**](docs/BuildNumberApi.md#bumpbuildnumber) | **PUT** /api/latest/buildNumber/{projectKey}-{buildKey}/bump | 
*BuildNumberApi* | [**getNextBuildNumber**](docs/BuildNumberApi.md#getnextbuildnumber) | **GET** /api/latest/buildNumber/{projectKey}-{buildKey} | 
*CoreApi* | [**addAgentAssignmentForEnvironment**](docs/CoreApi.md#addagentassignmentforenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/agent-assignment | 
*CoreApi* | [**addAgentAssignmentForJob**](docs/CoreApi.md#addagentassignmentforjob) | **POST** /api/latest/config/job/{jobKey}/agent-assignment | 
*CoreApi* | [**addRequirementForEnvironment**](docs/CoreApi.md#addrequirementforenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/requirement | 
*CoreApi* | [**createEnvironmentVariable**](docs/CoreApi.md#createenvironmentvariable) | **POST** /api/latest/deploy/environment/{environmentId}/variable | 
*CoreApi* | [**deleteEnvironmentVariable**](docs/CoreApi.md#deleteenvironmentvariable) | **DELETE** /api/latest/deploy/environment/{environmentId}/variable/{variableName} | 
*CoreApi* | [**findAssignedAgentsByEnvironment**](docs/CoreApi.md#findassignedagentsbyenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/agent-assignment | 
*CoreApi* | [**findAssignedAgentsByJob**](docs/CoreApi.md#findassignedagentsbyjob) | **GET** /api/latest/config/job/{jobKey}/agent-assignment | 
*CoreApi* | [**findPossibleAgentsForEnvironment**](docs/CoreApi.md#findpossibleagentsforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/possible-agent-assignment | 
*CoreApi* | [**findPossibleAgentsForJob**](docs/CoreApi.md#findpossibleagentsforjob) | **GET** /api/latest/config/job/{jobKey}/agent-assignment/possible-agent-assignment | 
*CoreApi* | [**getAgentMatchesForEnvironment**](docs/CoreApi.md#getagentmatchesforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/summary | 
*CoreApi* | [**getAllEnvironmentVariables**](docs/CoreApi.md#getallenvironmentvariables) | **GET** /api/latest/deploy/environment/{environmentId}/variables | 
*CoreApi* | [**getDeploymentResultList**](docs/CoreApi.md#getdeploymentresultlist) | **GET** /api/latest/deploy/environment/{environmentId}/results | 
*CoreApi* | [**getDetailedAgentMatchesForEnvironment**](docs/CoreApi.md#getdetailedagentmatchesforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/detailedSummary | 
*CoreApi* | [**getDockerPipelinesConfiguration**](docs/CoreApi.md#getdockerpipelinesconfiguration) | **GET** /api/latest/deploy/environment/{environmentId}/docker | 
*CoreApi* | [**getEnvironment**](docs/CoreApi.md#getenvironment) | **GET** /api/latest/deploy/environment/{environmentId} | 
*CoreApi* | [**getEnvironmentVariable**](docs/CoreApi.md#getenvironmentvariable) | **GET** /api/latest/deploy/environment/{environmentId}/variable/{variableName} | 
*CoreApi* | [**getEnvironmentsExecutableByAgent**](docs/CoreApi.md#getenvironmentsexecutablebyagent) | **GET** /api/latest/deploy/environment/agent/{agentId} | 
*CoreApi* | [**getEnvironmentsExecutableByElasticConfiguration**](docs/CoreApi.md#getenvironmentsexecutablebyelasticconfiguration) | **GET** /api/latest/deploy/environment/elasticImageConfiguration/{configurationId} | 
*CoreApi* | [**getEnvironmentsExecutableByEphemeralAgentTemplate**](docs/CoreApi.md#getenvironmentsexecutablebyephemeralagenttemplate) | **GET** /api/latest/deploy/environment/ephemeral/{templateId} | 
*CoreApi* | [**getRequirementForEnvironment**](docs/CoreApi.md#getrequirementforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} | 
*CoreApi* | [**getRequirementsForEnvironment**](docs/CoreApi.md#getrequirementsforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement | 
*CoreApi* | [**moveEnvironment**](docs/CoreApi.md#moveenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/move/{position}/{relativeEnvironmentId} | 
*CoreApi* | [**removeAgentAssignmentFromEnvironment**](docs/CoreApi.md#removeagentassignmentfromenvironment) | **DELETE** /api/latest/deploy/environment/{environmentId}/agent-assignment/{executorKey} | 
*CoreApi* | [**removeAgentAssignmentFromJob**](docs/CoreApi.md#removeagentassignmentfromjob) | **DELETE** /api/latest/config/job/{jobKey}/agent-assignment/{executorKey} | 
*CoreApi* | [**removeRequirementFromEnvironment**](docs/CoreApi.md#removerequirementfromenvironment) | **DELETE** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} | 
*CoreApi* | [**saveDockerPipelinesConfiguration**](docs/CoreApi.md#savedockerpipelinesconfiguration) | **PUT** /api/latest/deploy/environment/{environmentId}/docker | 
*CoreApi* | [**updateEnvironmentPrerequisites**](docs/CoreApi.md#updateenvironmentprerequisites) | **PUT** /api/latest/deploy/environment/{environmentId}/prerequisites | 
*CoreApi* | [**updateEnvironmentVariable**](docs/CoreApi.md#updateenvironmentvariable) | **PUT** /api/latest/deploy/environment/{environmentId}/variable/{variableName} | 
*CoreApi* | [**updateRequirementForEnvironment**](docs/CoreApi.md#updaterequirementforenvironment) | **PUT** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} | 
*DefaultApi* | [**activateFilter**](docs/DefaultApi.md#activatefilter) | **PUT** /api/latest/quickFilter/{id}/activate | 
*DefaultApi* | [**addAssignedRepository**](docs/DefaultApi.md#addassignedrepository) | **POST** /api/latest/deploy/project/{deploymentProjectId}/repository | 
*DefaultApi* | [**addAssignedRepository1**](docs/DefaultApi.md#addassignedrepository1) | **POST** /api/latest/project/{projectKey}/repository | 
*DefaultApi* | [**addBuildComment**](docs/DefaultApi.md#addbuildcomment) | **POST** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment | 
*DefaultApi* | [**addBuildLabel**](docs/DefaultApi.md#addbuildlabel) | **POST** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label | 
*DefaultApi* | [**addCapability**](docs/DefaultApi.md#addcapability) | **POST** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability | 
*DefaultApi* | [**addDeploymentProject**](docs/DefaultApi.md#adddeploymentproject) | **PUT** /api/latest/deploy/project | 
*DefaultApi* | [**addResponsible**](docs/DefaultApi.md#addresponsible) | **POST** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey}/{name} | 
*DefaultApi* | [**authenticateAgent**](docs/DefaultApi.md#authenticateagent) | **PUT** /api/latest/agent/authentication/{agentUuid} | 
*DefaultApi* | [**continueBuild**](docs/DefaultApi.md#continuebuild) | **PUT** /api/latest/queue/{projectKey}-{buildKey}-{buildNumber} | 
*DefaultApi* | [**createAgentCapability**](docs/DefaultApi.md#createagentcapability) | **POST** /api/latest/agent/{agentId}/capability | 
*DefaultApi* | [**createGlobalVariable**](docs/DefaultApi.md#createglobalvariable) | **POST** /admin/latest/globalVariables | 
*DefaultApi* | [**createGroup**](docs/DefaultApi.md#creategroup) | **POST** /admin/latest/security/groups | 
*DefaultApi* | [**createImageConfiguration**](docs/DefaultApi.md#createimageconfiguration) | **POST** /api/latest/elasticConfiguration | 
*DefaultApi* | [**createOrUpdateVariable**](docs/DefaultApi.md#createorupdatevariable) | **POST** /api/latest/project/{projectKey}/variable | 
*DefaultApi* | [**createProject**](docs/DefaultApi.md#createproject) | **POST** /api/latest/project | 
*DefaultApi* | [**createQuickFilter**](docs/DefaultApi.md#createquickfilter) | **POST** /api/latest/quickFilter | 
*DefaultApi* | [**createTemplateConfiguration**](docs/DefaultApi.md#createtemplateconfiguration) | **POST** /api/latest/ephemeral/templateConfiguration | 
*DefaultApi* | [**createVersion**](docs/DefaultApi.md#createversion) | **POST** /api/latest/deploy/project/{deploymentProjectId}/version | 
*DefaultApi* | [**deactivateAllFilters**](docs/DefaultApi.md#deactivateallfilters) | **PUT** /api/latest/quickFilter/deactivate | 
*DefaultApi* | [**deactivateFilter**](docs/DefaultApi.md#deactivatefilter) | **PUT** /api/latest/quickFilter/{id}/deactivate | 
*DefaultApi* | [**deleteAgent**](docs/DefaultApi.md#deleteagent) | **DELETE** /api/latest/agent/{agentId} | 
*DefaultApi* | [**deleteAgentCapability**](docs/DefaultApi.md#deleteagentcapability) | **DELETE** /api/latest/agent/{agentId}/capability/{capabilityKey} | 
*DefaultApi* | [**deleteAllAgentCapabilities**](docs/DefaultApi.md#deleteallagentcapabilities) | **DELETE** /api/latest/agent/{agentId}/capability | 
*DefaultApi* | [**deleteCapability**](docs/DefaultApi.md#deletecapability) | **DELETE** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability/{name} | 
*DefaultApi* | [**deleteConfiguration**](docs/DefaultApi.md#deleteconfiguration) | **DELETE** /api/latest/elasticConfiguration/{configurationId} | 
*DefaultApi* | [**deleteDeploymentProject**](docs/DefaultApi.md#deletedeploymentproject) | **DELETE** /api/latest/deploy/project/{deploymentProjectId} | 
*DefaultApi* | [**deleteGlobalVariable**](docs/DefaultApi.md#deleteglobalvariable) | **DELETE** /admin/latest/globalVariables/{variableId} | 
*DefaultApi* | [**deleteIMServerConfiguration**](docs/DefaultApi.md#deleteimserverconfiguration) | **DELETE** /admin/latest/config/imServer | 
*DefaultApi* | [**deleteMailConfiguration**](docs/DefaultApi.md#deletemailconfiguration) | **DELETE** /admin/latest/config/mailServer | 
*DefaultApi* | [**deleteProject**](docs/DefaultApi.md#deleteproject) | **DELETE** /api/latest/project/{projectKey} | 
*DefaultApi* | [**deleteProjectSharedCredentials**](docs/DefaultApi.md#deleteprojectsharedcredentials) | **DELETE** /api/latest/project/{projectKey}/sharedCredentials/{sharedCredentialId} | 
*DefaultApi* | [**deleteProjectVariable**](docs/DefaultApi.md#deleteprojectvariable) | **DELETE** /api/latest/project/{projectKey}/variable/{variableName} | 
*DefaultApi* | [**deleteQuickFilter**](docs/DefaultApi.md#deletequickfilter) | **DELETE** /api/latest/quickFilter/{id} | 
*DefaultApi* | [**deleteRepositoryMapping**](docs/DefaultApi.md#deleterepositorymapping) | **DELETE** /api/latest/deploy/project/{deploymentProjectId}/repository/{repositoryId} | 
*DefaultApi* | [**deleteRepositoryMapping1**](docs/DefaultApi.md#deleterepositorymapping1) | **DELETE** /api/latest/project/{projectKey}/repository/{repositoryId} | 
*DefaultApi* | [**deleteTemplateConfiguration**](docs/DefaultApi.md#deletetemplateconfiguration) | **DELETE** /api/latest/ephemeral/templateConfiguration/{configurationId} | 
*DefaultApi* | [**disableAgent**](docs/DefaultApi.md#disableagent) | **PUT** /api/latest/agent/{agentId}/disable | 
*DefaultApi* | [**editDeploymentProject**](docs/DefaultApi.md#editdeploymentproject) | **POST** /api/latest/deploy/project/{deploymentProjectId} | 
*DefaultApi* | [**enableAgent**](docs/DefaultApi.md#enableagent) | **PUT** /api/latest/agent/{agentId}/enable | 
*DefaultApi* | [**enableAllProjectsAccess**](docs/DefaultApi.md#enableallprojectsaccess) | **PUT** /api/latest/repository/{repositoryId}/enableAllProjectsAccess | 
*DefaultApi* | [**enableAllRepositoriesAccess**](docs/DefaultApi.md#enableallrepositoriesaccess) | **PUT** /api/latest/project/{projectKey}/repository/{repositoryId}/enableAllRepositoriesAccess | 
*DefaultApi* | [**enableAllRepositoriesAccess1**](docs/DefaultApi.md#enableallrepositoriesaccess1) | **PUT** /api/latest/repository/{repositoryId}/enableAllRepositoriesAccess | 
*DefaultApi* | [**enableCi**](docs/DefaultApi.md#enableci) | **PUT** /api/latest/repository/{repositoryId}/enableCi | 
*DefaultApi* | [**enableProjectCreation**](docs/DefaultApi.md#enableprojectcreation) | **PUT** /api/latest/repository/{repositoryId}/enableProjectCreation | 
*DefaultApi* | [**encrypt**](docs/DefaultApi.md#encrypt) | **POST** /api/latest/encrypt | 
*DefaultApi* | [**exportDeploymentSpec**](docs/DefaultApi.md#exportdeploymentspec) | **GET** /api/latest/deploy/project/{deploymentProjectId}/specs | 
*DefaultApi* | [**exportProjectSpecs**](docs/DefaultApi.md#exportprojectspecs) | **GET** /api/latest/project/{projectKey}/specs | 
*DefaultApi* | [**findPlansWithCustomExpirySettings**](docs/DefaultApi.md#findplanswithcustomexpirysettings) | **GET** /api/latest/admin/expiry/custom/plan | 
*DefaultApi* | [**findRepository**](docs/DefaultApi.md#findrepository) | **GET** /api/latest/repository | 
*DefaultApi* | [**findUsage**](docs/DefaultApi.md#findusage) | **GET** /api/latest/repository/{repositoryId}/usage | 
*DefaultApi* | [**get**](docs/DefaultApi.md#get) | **GET** /admin/latest/darkFeatures/{key} | 
*DefaultApi* | [**getActiveFilters**](docs/DefaultApi.md#getactivefilters) | **GET** /api/latest/quickFilter/active | 
*DefaultApi* | [**getAgentAuthentications**](docs/DefaultApi.md#getagentauthentications) | **GET** /api/latest/agent/authentication | 
*DefaultApi* | [**getAgentAutomaticManagementConfiguration**](docs/DefaultApi.md#getagentautomaticmanagementconfiguration) | **GET** /admin/latest/config/agents/offlineAgentRemoval | 
*DefaultApi* | [**getAgentById**](docs/DefaultApi.md#getagentbyid) | **GET** /admin/latest/config/agents/{agentId} | 
*DefaultApi* | [**getAgentCapabilities**](docs/DefaultApi.md#getagentcapabilities) | **GET** /api/latest/agent/{agentId}/capability | 
*DefaultApi* | [**getAgentInformation**](docs/DefaultApi.md#getagentinformation) | **GET** /api/latest/agent/{agentId} | 
*DefaultApi* | [**getAgentLocalArtifactHandler**](docs/DefaultApi.md#getagentlocalartifacthandler) | **GET** /admin/latest/artifactHandlers/agentLocal | 
*DefaultApi* | [**getAgentStatus**](docs/DefaultApi.md#getagentstatus) | **GET** /api/latest/agent/{agentId}/status | 
*DefaultApi* | [**getAgents**](docs/DefaultApi.md#getagents) | **GET** /admin/latest/config/agents | 
*DefaultApi* | [**getAgents1**](docs/DefaultApi.md#getagents1) | **GET** /api/latest/agent | 
*DefaultApi* | [**getAll**](docs/DefaultApi.md#getall) | **GET** /admin/latest/darkFeatures | 
*DefaultApi* | [**getAll1**](docs/DefaultApi.md#getall1) | **GET** /api/latest/elasticConfiguration | 
*DefaultApi* | [**getAllCapabilitiesOnServer**](docs/DefaultApi.md#getallcapabilitiesonserver) | **GET** /api/latest/capability/groupedListing | 
*DefaultApi* | [**getAllDeploymentProjects**](docs/DefaultApi.md#getalldeploymentprojects) | **GET** /api/latest/deploy/dashboard | 
*DefaultApi* | [**getAllDeploymentProjects1**](docs/DefaultApi.md#getalldeploymentprojects1) | **GET** /api/latest/deploy/project/all | 
*DefaultApi* | [**getAllServices**](docs/DefaultApi.md#getallservices) | **GET** /api/latest/ | 
*DefaultApi* | [**getAuditLogConfiguration**](docs/DefaultApi.md#getauditlogconfiguration) | **GET** /admin/latest/config/auditLog | 
*DefaultApi* | [**getAvailableReports**](docs/DefaultApi.md#getavailablereports) | **GET** /api/latest/chart/reports | 
*DefaultApi* | [**getBambooRemoteArtifactHandler**](docs/DefaultApi.md#getbambooremoteartifacthandler) | **GET** /admin/latest/artifactHandlers/bambooRemote | 
*DefaultApi* | [**getBranchHistory**](docs/DefaultApi.md#getbranchhistory) | **GET** /api/latest/result/{projectKey}-{buildKey}/branch/{branchName} | 
*DefaultApi* | [**getBrokenBuildsForUser**](docs/DefaultApi.md#getbrokenbuildsforuser) | **GET** /responsibility/latest/brokenBuild/byUser/{name} | 
*DefaultApi* | [**getBuild**](docs/DefaultApi.md#getbuild) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber} | 
*DefaultApi* | [**getBuildAlias**](docs/DefaultApi.md#getbuildalias) | **GET** /api/latest/result/{projectKey}-{buildKey}/{buildNumber} | 
*DefaultApi* | [**getBuildComments**](docs/DefaultApi.md#getbuildcomments) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment | 
*DefaultApi* | [**getBuildConcurrency**](docs/DefaultApi.md#getbuildconcurrency) | **GET** /admin/latest/config/build/concurrency | 
*DefaultApi* | [**getBuildHistory**](docs/DefaultApi.md#getbuildhistory) | **GET** /api/latest/result/{projectKey}-{buildKey} | 
*DefaultApi* | [**getBuildLabels**](docs/DefaultApi.md#getbuildlabels) | **GET** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label | 
*DefaultApi* | [**getBuildMonitoring**](docs/DefaultApi.md#getbuildmonitoring) | **GET** /admin/latest/config/build/monitoring | 
*DefaultApi* | [**getBuildQueue1**](docs/DefaultApi.md#getbuildqueue1) | **GET** /api/latest/queue | 
*DefaultApi* | [**getBuildResultsForChangeset**](docs/DefaultApi.md#getbuildresultsforchangeset) | **GET** /api/latest/result/byChangeset/{csid} | 
*DefaultApi* | [**getBuildResultsForCheckoutChangeset**](docs/DefaultApi.md#getbuildresultsforcheckoutchangeset) | **GET** /api/latest/result/byCheckoutChangeset/{csid} | 
*DefaultApi* | [**getCapabilities**](docs/DefaultApi.md#getcapabilities) | **GET** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability | 
*DefaultApi* | [**getClone**](docs/DefaultApi.md#getclone) | **PUT** /api/latest/clone/{projectKey}-{buildKey}:{toProjectKey}-{toBuildKey} | 
*DefaultApi* | [**getConfiguration**](docs/DefaultApi.md#getconfiguration) | **GET** /admin/latest/ephemeral/config | 
*DefaultApi* | [**getConfiguration1**](docs/DefaultApi.md#getconfiguration1) | **GET** /admin/latest/expiry/configuration | 
*DefaultApi* | [**getConfiguration2**](docs/DefaultApi.md#getconfiguration2) | **GET** /api/latest/elasticConfiguration/{configurationId} | 
*DefaultApi* | [**getCurrentUser**](docs/DefaultApi.md#getcurrentuser) | **GET** /api/latest/currentUser | 
*DefaultApi* | [**getDeploymentNamingPreview**](docs/DefaultApi.md#getdeploymentnamingpreview) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/namingPreview | 
*DefaultApi* | [**getDeploymentProject**](docs/DefaultApi.md#getdeploymentproject) | **GET** /api/latest/deploy/dashboard/{projectId} | 
*DefaultApi* | [**getDeploymentProject1**](docs/DefaultApi.md#getdeploymentproject1) | **GET** /api/latest/deploy/project/{deploymentProjectId} | 
*DefaultApi* | [**getDeploymentProjectVariables**](docs/DefaultApi.md#getdeploymentprojectvariables) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/variables | 
*DefaultApi* | [**getDeploymentProjectVersions**](docs/DefaultApi.md#getdeploymentprojectversions) | **GET** /api/latest/deploy/project/{deploymentProjectId}/version | 
*DefaultApi* | [**getDeploymentProjectVersionsList**](docs/DefaultApi.md#getdeploymentprojectversionslist) | **GET** /api/latest/deploy/project/{deploymentProjectId}/versions | 
*DefaultApi* | [**getDeploymentProjects**](docs/DefaultApi.md#getdeploymentprojects) | **GET** /api/latest/deploy/dashboard/paginate | 
*DefaultApi* | [**getDeploymentProjectsForPlan**](docs/DefaultApi.md#getdeploymentprojectsforplan) | **GET** /api/latest/deploy/project/forPlan | 
*DefaultApi* | [**getDeploymentResult**](docs/DefaultApi.md#getdeploymentresult) | **GET** /api/latest/deploy/result/{deploymentResultId} | 
*DefaultApi* | [**getEnvironmentStatutes**](docs/DefaultApi.md#getenvironmentstatutes) | **POST** /api/latest/deploy/dashboard/status | 
*DefaultApi* | [**getEphemeralAgentPodLogs**](docs/DefaultApi.md#getephemeralagentpodlogs) | **GET** /api/latest/ephemeral/pod/{pod}/logs | 
*DefaultApi* | [**getEphemeralAgentPodRawLogs**](docs/DefaultApi.md#getephemeralagentpodrawlogs) | **GET** /api/latest/ephemeral/pod/{pod}/logs/raw | 
*DefaultApi* | [**getExpiry**](docs/DefaultApi.md#getexpiry) | **GET** /api/latest/websudo-session | 
*DefaultApi* | [**getFaviconForPlan**](docs/DefaultApi.md#getfaviconforplan) | **GET** /api/latest/plan/favicon/{planKey} | 
*DefaultApi* | [**getForUser**](docs/DefaultApi.md#getforuser) | **GET** /admin/latest/darkFeatures/{key}/user/{userName} | 
*DefaultApi* | [**getGeneralConfiguration**](docs/DefaultApi.md#getgeneralconfiguration) | **GET** /admin/latest/config/general | 
*DefaultApi* | [**getGlobalVariable**](docs/DefaultApi.md#getglobalvariable) | **GET** /admin/latest/globalVariables/{variableId} | 
*DefaultApi* | [**getGlobalVariables**](docs/DefaultApi.md#getglobalvariables) | **GET** /admin/latest/globalVariables | 
*DefaultApi* | [**getGroup**](docs/DefaultApi.md#getgroup) | **GET** /admin/latest/security/groups | 
*DefaultApi* | [**getIMServerConfig**](docs/DefaultApi.md#getimserverconfig) | **GET** /admin/latest/config/imServer | 
*DefaultApi* | [**getImageUrl**](docs/DefaultApi.md#getimageurl) | **GET** /api/latest/chart | 
*DefaultApi* | [**getInfo**](docs/DefaultApi.md#getinfo) | **GET** /api/latest/info | 
*DefaultApi* | [**getInstanceLog**](docs/DefaultApi.md#getinstancelog) | **GET** /api/latest/elasticInstances/instance/{instanceId}/logs | 
*DefaultApi* | [**getJiraIssueStatusForProject**](docs/DefaultApi.md#getjiraissuestatusforproject) | **GET** /api/latest/deploy/issue-status/{issueKey} | 
*DefaultApi* | [**getJiraIssueStatusForProject1**](docs/DefaultApi.md#getjiraissuestatusforproject1) | **GET** /api/latest/deploy/issue-status/{issueKey}/{deploymentProjectId} | 
*DefaultApi* | [**getJobs**](docs/DefaultApi.md#getjobs) | **GET** /admin/latest/scheduler/jobs | 
*DefaultApi* | [**getLatestBuildResults**](docs/DefaultApi.md#getlatestbuildresults) | **GET** /api/latest/result | 
*DefaultApi* | [**getLatestBuildResultsForProject**](docs/DefaultApi.md#getlatestbuildresultsforproject) | **GET** /api/latest/result/{projectKey} | 
*DefaultApi* | [**getLatestVersionStatuses**](docs/DefaultApi.md#getlatestversionstatuses) | **GET** /api/latest/deploy/version/{deploymentVersionId}/status | 
*DefaultApi* | [**getMailConfiguration**](docs/DefaultApi.md#getmailconfiguration) | **GET** /admin/latest/config/mailServer | 
*DefaultApi* | [**getMyBrokenBuilds**](docs/DefaultApi.md#getmybrokenbuilds) | **GET** /responsibility/latest/brokenBuild/myBrokenBuilds | 
*DefaultApi* | [**getNextDeploymentVersions**](docs/DefaultApi.md#getnextdeploymentversions) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/nextVersion | 
*DefaultApi* | [**getNodesStatus**](docs/DefaultApi.md#getnodesstatus) | **GET** /api/latest/server/nodes | 
*DefaultApi* | [**getPaginateDeploymentProject**](docs/DefaultApi.md#getpaginatedeploymentproject) | **GET** /api/latest/deploy/dashboard/paginate/{projectId} | 
*DefaultApi* | [**getPaginatedProjectRepositories**](docs/DefaultApi.md#getpaginatedprojectrepositories) | **GET** /api/latest/project/{projectKey}/repositories | 
*DefaultApi* | [**getPaginatedProjectSharedCredentials**](docs/DefaultApi.md#getpaginatedprojectsharedcredentials) | **GET** /api/latest/project/{projectKey}/sharedCredentials | 
*DefaultApi* | [**getPlanSummary**](docs/DefaultApi.md#getplansummary) | **GET** /api/latest/chart/planSummary | 
*DefaultApi* | [**getProject**](docs/DefaultApi.md#getproject) | **GET** /api/latest/project/{projectKey} | 
*DefaultApi* | [**getProjectVariable**](docs/DefaultApi.md#getprojectvariable) | **GET** /api/latest/project/{projectKey}/variable/{variableName} | 
*DefaultApi* | [**getProjectVariables**](docs/DefaultApi.md#getprojectvariables) | **GET** /api/latest/project/{projectKey}/variables | 
*DefaultApi* | [**getProjects**](docs/DefaultApi.md#getprojects) | **GET** /api/latest/project | 
*DefaultApi* | [**getQuarantineSettings**](docs/DefaultApi.md#getquarantinesettings) | **GET** /admin/latest/config/quarantine | 
*DefaultApi* | [**getQuickFilter**](docs/DefaultApi.md#getquickfilter) | **GET** /api/latest/quickFilter/{id} | 
*DefaultApi* | [**getQuickFilters**](docs/DefaultApi.md#getquickfilters) | **GET** /api/latest/quickFilter | 
*DefaultApi* | [**getReindexInfo**](docs/DefaultApi.md#getreindexinfo) | **GET** /api/latest/reindex | 
*DefaultApi* | [**getRemoteAgentConfiguration**](docs/DefaultApi.md#getremoteagentconfiguration) | **GET** /admin/latest/config/remoteAgentSupport | 
*DefaultApi* | [**getRemoteAgents**](docs/DefaultApi.md#getremoteagents) | **GET** /api/latest/agent/remote | 
*DefaultApi* | [**getResponsibleForPlanResult**](docs/DefaultApi.md#getresponsibleforplanresult) | **GET** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey} | 
*DefaultApi* | [**getRestElasticConfiguration**](docs/DefaultApi.md#getrestelasticconfiguration) | **GET** /admin/latest/elastic/config | 
*DefaultApi* | [**getResultStatus**](docs/DefaultApi.md#getresultstatus) | **GET** /api/latest/result/status/{projectKey}-{buildKey}-{buildNumber} | 
*DefaultApi* | [**getRssRepositoriesAllowedToAccessRepository**](docs/DefaultApi.md#getrssrepositoriesallowedtoaccessrepository) | **GET** /api/latest/repository/{repositoryId}/rssrepository | 
*DefaultApi* | [**getS3ArtifactHandler**](docs/DefaultApi.md#gets3artifacthandler) | **GET** /admin/latest/artifactHandlers/s3 | 
*DefaultApi* | [**getSecuritySettings**](docs/DefaultApi.md#getsecuritysettings) | **GET** /admin/latest/security/settings | 
*DefaultApi* | [**getSftpArtifactHandler**](docs/DefaultApi.md#getsftpartifacthandler) | **GET** /admin/latest/artifactHandlers/sftp | 
*DefaultApi* | [**getSpecsDetectionStatus**](docs/DefaultApi.md#getspecsdetectionstatus) | **GET** /api/latest/repository/{repositoryId}/scan/status | 
*DefaultApi* | [**getStatus**](docs/DefaultApi.md#getstatus) | **GET** /admin/latest/expiry/status | 
*DefaultApi* | [**getStatus1**](docs/DefaultApi.md#getstatus1) | **GET** /api/latest/server | 
*DefaultApi* | [**getStatus2**](docs/DefaultApi.md#getstatus2) | **GET** /api/latest/status | 
*DefaultApi* | [**getTemplateConfiguration**](docs/DefaultApi.md#gettemplateconfiguration) | **GET** /api/latest/ephemeral/templateConfiguration/{configurationId} | 
*DefaultApi* | [**getTemplateConfigurationsPage**](docs/DefaultApi.md#gettemplateconfigurationspage) | **GET** /api/latest/ephemeral/templateConfiguration | 
*DefaultApi* | [**getVariablesFromName**](docs/DefaultApi.md#getvariablesfromname) | **GET** /api/latest/deploy/projectVersioning/{deploymentProjectId}/parseVariables | 
*DefaultApi* | [**getVersionAndPlanResult**](docs/DefaultApi.md#getversionandplanresult) | **GET** /api/latest/deploy/version/{deploymentVersionId}/build-result | 
*DefaultApi* | [**getVisibleFilters**](docs/DefaultApi.md#getvisiblefilters) | **GET** /api/latest/quickFilter/visible | 
*DefaultApi* | [**grantRssRepositoryAccess**](docs/DefaultApi.md#grantrssrepositoryaccess) | **POST** /api/latest/repository/{repositoryId}/rssrepository | 
*DefaultApi* | [**listAssignedRepositories**](docs/DefaultApi.md#listassignedrepositories) | **GET** /api/latest/deploy/project/{deploymentProjectId}/repository | 
*DefaultApi* | [**listAssignedRepositories1**](docs/DefaultApi.md#listassignedrepositories1) | **GET** /api/latest/project/{projectKey}/repository | 
*DefaultApi* | [**pause**](docs/DefaultApi.md#pause) | **POST** /api/latest/server/pause | 
*DefaultApi* | [**prepareForRestart**](docs/DefaultApi.md#prepareforrestart) | **PUT** /api/latest/server/prepareForRestart | 
*DefaultApi* | [**put**](docs/DefaultApi.md#put) | **PUT** /admin/latest/darkFeatures/{key} | 
*DefaultApi* | [**put1**](docs/DefaultApi.md#put1) | **PUT** /admin/latest/darkFeatures/{key}/user/{userName} | 
*DefaultApi* | [**refreshWebSudoSession**](docs/DefaultApi.md#refreshwebsudosession) | **PUT** /api/latest/websudo-session | 
*DefaultApi* | [**reindex**](docs/DefaultApi.md#reindex) | **POST** /api/latest/reindex | 
*DefaultApi* | [**removeBuildComment**](docs/DefaultApi.md#removebuildcomment) | **DELETE** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/comment/{commentId} | 
*DefaultApi* | [**removeBuildLabel**](docs/DefaultApi.md#removebuildlabel) | **DELETE** /api/latest/result/{projectKey}-{buildKey}-{buildNumber}/label/{labelName} | 
*DefaultApi* | [**removePlanCustomExpirySettings**](docs/DefaultApi.md#removeplancustomexpirysettings) | **DELETE** /api/latest/admin/expiry/custom/plan/{planKey} | 
*DefaultApi* | [**removeResponsible**](docs/DefaultApi.md#removeresponsible) | **DELETE** /responsibility/latest/brokenBuild/{planResultKeyOrPlanKey}/{name} | 
*DefaultApi* | [**removeWebSudoFromSession**](docs/DefaultApi.md#removewebsudofromsession) | **DELETE** /api/latest/websudo-session | 
*DefaultApi* | [**resume**](docs/DefaultApi.md#resume) | **POST** /api/latest/server/resume | 
*DefaultApi* | [**revokePermissionToUseRepositoryByRssRepo**](docs/DefaultApi.md#revokepermissiontouserepositorybyrssrepo) | **DELETE** /api/latest/repository/{targetRepositoryId}/rssrepository/{repositoryId} | 
*DefaultApi* | [**run**](docs/DefaultApi.md#run) | **PUT** /admin/latest/expiry/run | 
*DefaultApi* | [**saveConfiguration**](docs/DefaultApi.md#saveconfiguration) | **PUT** /admin/latest/ephemeral/config | 
*DefaultApi* | [**search**](docs/DefaultApi.md#search) | **GET** /api/latest/quicksearch | 
*DefaultApi* | [**searchAuthors**](docs/DefaultApi.md#searchauthors) | **GET** /api/latest/search/authors | 
*DefaultApi* | [**searchAvailableRepositories**](docs/DefaultApi.md#searchavailablerepositories) | **GET** /api/latest/deploy/project/{deploymentProjectId}/repository/search | 
*DefaultApi* | [**searchAvailableRepositories1**](docs/DefaultApi.md#searchavailablerepositories1) | **GET** /api/latest/project/{projectKey}/repository/search | 
*DefaultApi* | [**searchAvailableRepositories2**](docs/DefaultApi.md#searchavailablerepositories2) | **GET** /api/latest/repository/{repositoryId}/rssrepository/search | 
*DefaultApi* | [**searchBranches**](docs/DefaultApi.md#searchbranches) | **GET** /api/latest/search/branches | 
*DefaultApi* | [**searchDeployments**](docs/DefaultApi.md#searchdeployments) | **GET** /api/latest/search/deployments | 
*DefaultApi* | [**searchForAvailablePlanChildDependencies**](docs/DefaultApi.md#searchforavailableplanchilddependencies) | **GET** /api/latest/dependency/search/{projectKey}-{buildKey}/child | 
*DefaultApi* | [**searchForAvailablePlanParentDependencies**](docs/DefaultApi.md#searchforavailableplanparentdependencies) | **GET** /api/latest/dependency/search/{projectKey}-{buildKey}/parent | 
*DefaultApi* | [**searchJobs**](docs/DefaultApi.md#searchjobs) | **GET** /api/latest/search/jobs/{planKey} | 
*DefaultApi* | [**searchPlans**](docs/DefaultApi.md#searchplans) | **GET** /api/latest/search/plans | 
*DefaultApi* | [**searchProjects**](docs/DefaultApi.md#searchprojects) | **GET** /api/latest/search/projects | 
*DefaultApi* | [**searchSpecsBranches**](docs/DefaultApi.md#searchspecsbranches) | **GET** /api/latest/repository/{repositoryId}/rssBranches | 
*DefaultApi* | [**searchStages**](docs/DefaultApi.md#searchstages) | **GET** /api/latest/search/stages/{planKey} | 
*DefaultApi* | [**searchUsers**](docs/DefaultApi.md#searchusers) | **GET** /api/latest/search/users | 
*DefaultApi* | [**searchVersions**](docs/DefaultApi.md#searchversions) | **GET** /api/latest/search/versions | 
*DefaultApi* | [**setAgentAutomaticManagementConfiguration**](docs/DefaultApi.md#setagentautomaticmanagementconfiguration) | **PUT** /admin/latest/config/agents/offlineAgentRemoval | 
*DefaultApi* | [**setConfiguration**](docs/DefaultApi.md#setconfiguration) | **PUT** /admin/latest/expiry/configuration | 
*DefaultApi* | [**setVisibleFilters**](docs/DefaultApi.md#setvisiblefilters) | **PUT** /api/latest/quickFilter/visible | 
*DefaultApi* | [**startBuild1**](docs/DefaultApi.md#startbuild1) | **POST** /api/latest/queue/{projectKey}-{buildKey} | 
*DefaultApi* | [**stopBuild**](docs/DefaultApi.md#stopbuild) | **DELETE** /api/latest/queue/{projectKey}-{buildKey}-{buildNumber} | 
*DefaultApi* | [**testConnection**](docs/DefaultApi.md#testconnection) | **POST** /admin/latest/ephemeral/config/test-connection | 
*DefaultApi* | [**testConnection1**](docs/DefaultApi.md#testconnection1) | **PUT** /api/latest/repository/testConnection | 
*DefaultApi* | [**triggerJob**](docs/DefaultApi.md#triggerjob) | **POST** /admin/latest/scheduler/jobs/trigger | 
*DefaultApi* | [**triggerSpecsScanning**](docs/DefaultApi.md#triggerspecsscanning) | **POST** /api/latest/repository/{repositoryId}/scanNow | 
*DefaultApi* | [**triggerSpecsScanning1**](docs/DefaultApi.md#triggerspecsscanning1) | **POST** /api/latest/repository/scan | 
*DefaultApi* | [**updateAgentCapability**](docs/DefaultApi.md#updateagentcapability) | **PUT** /api/latest/agent/{agentId}/capability/{capabilityKey} | 
*DefaultApi* | [**updateAgentLocalHandler**](docs/DefaultApi.md#updateagentlocalhandler) | **PUT** /admin/latest/artifactHandlers/agentLocal | 
*DefaultApi* | [**updateAllImageIds**](docs/DefaultApi.md#updateallimageids) | **PUT** /api/latest/elasticConfiguration/image-id/{imageId} | 
*DefaultApi* | [**updateAuditLogConfiguration**](docs/DefaultApi.md#updateauditlogconfiguration) | **PUT** /admin/latest/config/auditLog | 
*DefaultApi* | [**updateBambooRemoteHandler**](docs/DefaultApi.md#updatebambooremotehandler) | **PUT** /admin/latest/artifactHandlers/bambooRemote | 
*DefaultApi* | [**updateCapability**](docs/DefaultApi.md#updatecapability) | **PUT** /api/latest/ephemeral/templateConfiguration/{configurationId}/capability | 
*DefaultApi* | [**updateConfiguration**](docs/DefaultApi.md#updateconfiguration) | **PUT** /api/latest/elasticConfiguration/{configurationId} | 
*DefaultApi* | [**updateGeneralConfiguration**](docs/DefaultApi.md#updategeneralconfiguration) | **PUT** /admin/latest/config/general | 
*DefaultApi* | [**updateGlobalVariable**](docs/DefaultApi.md#updateglobalvariable) | **PUT** /admin/latest/globalVariables/{variableId} | 
*DefaultApi* | [**updateIMServerConfig**](docs/DefaultApi.md#updateimserverconfig) | **PUT** /admin/latest/config/imServer | 
*DefaultApi* | [**updateMailConfiguration**](docs/DefaultApi.md#updatemailconfiguration) | **PUT** /admin/latest/config/mailServer | 
*DefaultApi* | [**updateQuarantineSettings**](docs/DefaultApi.md#updatequarantinesettings) | **PUT** /admin/latest/config/quarantine | 
*DefaultApi* | [**updateQuickFilter**](docs/DefaultApi.md#updatequickfilter) | **PUT** /api/latest/quickFilter/{id} | 
*DefaultApi* | [**updateRemoteAgentConfiguration**](docs/DefaultApi.md#updateremoteagentconfiguration) | **PUT** /admin/latest/config/remoteAgentSupport | 
*DefaultApi* | [**updateRestAgent**](docs/DefaultApi.md#updaterestagent) | **PUT** /admin/latest/config/agents/{agentId} | 
*DefaultApi* | [**updateRestBuildConcurrency**](docs/DefaultApi.md#updaterestbuildconcurrency) | **PUT** /admin/latest/config/build/concurrency | 
*DefaultApi* | [**updateRestBuildMonitoring**](docs/DefaultApi.md#updaterestbuildmonitoring) | **PUT** /admin/latest/config/build/monitoring | 
*DefaultApi* | [**updateRestElasticConfiguration**](docs/DefaultApi.md#updaterestelasticconfiguration) | **PUT** /admin/latest/elastic/config | 
*DefaultApi* | [**updateRestSecuritySettings**](docs/DefaultApi.md#updaterestsecuritysettings) | **PUT** /admin/latest/security/settings | 
*DefaultApi* | [**updateS3Handler**](docs/DefaultApi.md#updates3handler) | **PUT** /admin/latest/artifactHandlers/s3 | 
*DefaultApi* | [**updateSftpHandler**](docs/DefaultApi.md#updatesftphandler) | **PUT** /admin/latest/artifactHandlers/sftp | 
*DefaultApi* | [**updateTemplateConfiguration**](docs/DefaultApi.md#updatetemplateconfiguration) | **PUT** /api/latest/ephemeral/templateConfiguration/{configurationId} | 
*DefaultApi* | [**updateVersionStatus**](docs/DefaultApi.md#updateversionstatus) | **POST** /api/latest/deploy/version/{deploymentVersionId}/status/{newStatus} | 
*DefaultApi* | [**verifyGlobalVariableValue**](docs/DefaultApi.md#verifyglobalvariablevalue) | **PUT** /admin/latest/globalVariables/verify | 
*DeploymentApi* | [**getBuildQueue**](docs/DeploymentApi.md#getbuildqueue) | **GET** /api/latest/queue/deployment | 
*DeploymentApi* | [**getPossibleResults**](docs/DeploymentApi.md#getpossibleresults) | **GET** /api/latest/deploy/preview/possibleResults | 
*DeploymentApi* | [**getVersionName**](docs/DeploymentApi.md#getversionname) | **GET** /api/latest/deploy/preview/versionName | 
*DeploymentApi* | [**getVersionPreview**](docs/DeploymentApi.md#getversionpreview) | **GET** /api/latest/deploy/preview/version | 
*DeploymentApi* | [**getVersionPreview1**](docs/DeploymentApi.md#getversionpreview1) | **GET** /api/latest/deploy/preview/result | 
*DeploymentApi* | [**removeDeploymentFromQueue**](docs/DeploymentApi.md#removedeploymentfromqueue) | **DELETE** /api/latest/queue/deployment/{deploymentResultId} | 
*DeploymentApi* | [**startDeployment**](docs/DeploymentApi.md#startdeployment) | **POST** /api/latest/queue/deployment | 
*PermissionsApi* | [**addPermissionsForGroup**](docs/PermissionsApi.md#addpermissionsforgroup) | **PUT** /api/latest/permissions/deployment/{id}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup1**](docs/PermissionsApi.md#addpermissionsforgroup1) | **PUT** /api/latest/permissions/environment/{id}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup2**](docs/PermissionsApi.md#addpermissionsforgroup2) | **PUT** /api/latest/permissions/global/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup3**](docs/PermissionsApi.md#addpermissionsforgroup3) | **PUT** /api/latest/permissions/plan/{key}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup4**](docs/PermissionsApi.md#addpermissionsforgroup4) | **PUT** /api/latest/permissions/project/{key}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup5**](docs/PermissionsApi.md#addpermissionsforgroup5) | **PUT** /api/latest/permissions/projectplan/{key}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForGroup6**](docs/PermissionsApi.md#addpermissionsforgroup6) | **PUT** /api/latest/permissions/repository/{id}/groups/{name} | 
*PermissionsApi* | [**addPermissionsForRole**](docs/PermissionsApi.md#addpermissionsforrole) | **PUT** /api/latest/permissions/deployment/{id}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole1**](docs/PermissionsApi.md#addpermissionsforrole1) | **PUT** /api/latest/permissions/environment/{id}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole2**](docs/PermissionsApi.md#addpermissionsforrole2) | **PUT** /api/latest/permissions/global/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole3**](docs/PermissionsApi.md#addpermissionsforrole3) | **PUT** /api/latest/permissions/plan/{key}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole4**](docs/PermissionsApi.md#addpermissionsforrole4) | **PUT** /api/latest/permissions/project/{key}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole5**](docs/PermissionsApi.md#addpermissionsforrole5) | **PUT** /api/latest/permissions/projectplan/{key}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForRole6**](docs/PermissionsApi.md#addpermissionsforrole6) | **PUT** /api/latest/permissions/repository/{id}/roles/{name} | 
*PermissionsApi* | [**addPermissionsForUser**](docs/PermissionsApi.md#addpermissionsforuser) | **PUT** /api/latest/permissions/deployment/{id}/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser1**](docs/PermissionsApi.md#addpermissionsforuser1) | **PUT** /api/latest/permissions/environment/{id}/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser2**](docs/PermissionsApi.md#addpermissionsforuser2) | **PUT** /api/latest/permissions/global/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser3**](docs/PermissionsApi.md#addpermissionsforuser3) | **PUT** /api/latest/permissions/plan/{key}/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser4**](docs/PermissionsApi.md#addpermissionsforuser4) | **PUT** /api/latest/permissions/project/{key}/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser5**](docs/PermissionsApi.md#addpermissionsforuser5) | **PUT** /api/latest/permissions/projectplan/{key}/users/{name} | 
*PermissionsApi* | [**addPermissionsForUser6**](docs/PermissionsApi.md#addpermissionsforuser6) | **PUT** /api/latest/permissions/repository/{id}/users/{name} | 
*PermissionsApi* | [**getAvailableGroups**](docs/PermissionsApi.md#getavailablegroups) | **GET** /api/latest/permissions/deployment/{id}/available-groups | 
*PermissionsApi* | [**getAvailableGroups1**](docs/PermissionsApi.md#getavailablegroups1) | **GET** /api/latest/permissions/environment/{id}/available-groups | 
*PermissionsApi* | [**getAvailableGroups2**](docs/PermissionsApi.md#getavailablegroups2) | **GET** /api/latest/permissions/global/available-groups | 
*PermissionsApi* | [**getAvailableGroups3**](docs/PermissionsApi.md#getavailablegroups3) | **GET** /api/latest/permissions/plan/{key}/available-groups | 
*PermissionsApi* | [**getAvailableGroups4**](docs/PermissionsApi.md#getavailablegroups4) | **GET** /api/latest/permissions/project/{key}/available-groups | 
*PermissionsApi* | [**getAvailableGroups5**](docs/PermissionsApi.md#getavailablegroups5) | **GET** /api/latest/permissions/projectplan/{key}/available-groups | 
*PermissionsApi* | [**getAvailableGroups6**](docs/PermissionsApi.md#getavailablegroups6) | **GET** /api/latest/permissions/repository/{id}/available-groups | 
*PermissionsApi* | [**getAvailableUsers**](docs/PermissionsApi.md#getavailableusers) | **GET** /api/latest/permissions/deployment/{id}/available-users | 
*PermissionsApi* | [**getAvailableUsers1**](docs/PermissionsApi.md#getavailableusers1) | **GET** /api/latest/permissions/environment/{id}/available-users | 
*PermissionsApi* | [**getAvailableUsers2**](docs/PermissionsApi.md#getavailableusers2) | **GET** /api/latest/permissions/global/available-users | 
*PermissionsApi* | [**getAvailableUsers3**](docs/PermissionsApi.md#getavailableusers3) | **GET** /api/latest/permissions/plan/{key}/available-users | 
*PermissionsApi* | [**getAvailableUsers4**](docs/PermissionsApi.md#getavailableusers4) | **GET** /api/latest/permissions/project/{key}/available-users | 
*PermissionsApi* | [**getAvailableUsers5**](docs/PermissionsApi.md#getavailableusers5) | **GET** /api/latest/permissions/projectplan/{key}/available-users | 
*PermissionsApi* | [**getAvailableUsers6**](docs/PermissionsApi.md#getavailableusers6) | **GET** /api/latest/permissions/repository/{id}/available-users | 
*PermissionsApi* | [**listGroupPermissions**](docs/PermissionsApi.md#listgrouppermissions) | **GET** /api/latest/permissions/deployment/{id}/groups | 
*PermissionsApi* | [**listGroupPermissions1**](docs/PermissionsApi.md#listgrouppermissions1) | **GET** /api/latest/permissions/environment/{id}/groups | 
*PermissionsApi* | [**listGroupPermissions2**](docs/PermissionsApi.md#listgrouppermissions2) | **GET** /api/latest/permissions/global/groups | 
*PermissionsApi* | [**listGroupPermissions3**](docs/PermissionsApi.md#listgrouppermissions3) | **GET** /api/latest/permissions/plan/{key}/groups | 
*PermissionsApi* | [**listGroupPermissions4**](docs/PermissionsApi.md#listgrouppermissions4) | **GET** /api/latest/permissions/project/{key}/groups | 
*PermissionsApi* | [**listGroupPermissions5**](docs/PermissionsApi.md#listgrouppermissions5) | **GET** /api/latest/permissions/projectplan/{key}/groups | 
*PermissionsApi* | [**listGroupPermissions6**](docs/PermissionsApi.md#listgrouppermissions6) | **GET** /api/latest/permissions/repository/{id}/groups | 
*PermissionsApi* | [**listRolePermissions**](docs/PermissionsApi.md#listrolepermissions) | **GET** /api/latest/permissions/deployment/{id}/roles | 
*PermissionsApi* | [**listRolePermissions1**](docs/PermissionsApi.md#listrolepermissions1) | **GET** /api/latest/permissions/environment/{id}/roles | 
*PermissionsApi* | [**listRolePermissions2**](docs/PermissionsApi.md#listrolepermissions2) | **GET** /api/latest/permissions/global/roles | 
*PermissionsApi* | [**listRolePermissions3**](docs/PermissionsApi.md#listrolepermissions3) | **GET** /api/latest/permissions/plan/{key}/roles | 
*PermissionsApi* | [**listRolePermissions4**](docs/PermissionsApi.md#listrolepermissions4) | **GET** /api/latest/permissions/project/{key}/roles | 
*PermissionsApi* | [**listRolePermissions5**](docs/PermissionsApi.md#listrolepermissions5) | **GET** /api/latest/permissions/projectplan/{key}/roles | 
*PermissionsApi* | [**listRolePermissions6**](docs/PermissionsApi.md#listrolepermissions6) | **GET** /api/latest/permissions/repository/{id}/roles | 
*PermissionsApi* | [**listUserPermissions**](docs/PermissionsApi.md#listuserpermissions) | **GET** /api/latest/permissions/deployment/{id}/users | 
*PermissionsApi* | [**listUserPermissions1**](docs/PermissionsApi.md#listuserpermissions1) | **GET** /api/latest/permissions/environment/{id}/users | 
*PermissionsApi* | [**listUserPermissions2**](docs/PermissionsApi.md#listuserpermissions2) | **GET** /api/latest/permissions/global/users | 
*PermissionsApi* | [**listUserPermissions3**](docs/PermissionsApi.md#listuserpermissions3) | **GET** /api/latest/permissions/plan/{key}/users | 
*PermissionsApi* | [**listUserPermissions4**](docs/PermissionsApi.md#listuserpermissions4) | **GET** /api/latest/permissions/project/{key}/users | 
*PermissionsApi* | [**listUserPermissions5**](docs/PermissionsApi.md#listuserpermissions5) | **GET** /api/latest/permissions/projectplan/{key}/users | 
*PermissionsApi* | [**listUserPermissions6**](docs/PermissionsApi.md#listuserpermissions6) | **GET** /api/latest/permissions/repository/{id}/users | 
*PermissionsApi* | [**removePermissionsForGroup**](docs/PermissionsApi.md#removepermissionsforgroup) | **DELETE** /api/latest/permissions/deployment/{id}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup1**](docs/PermissionsApi.md#removepermissionsforgroup1) | **DELETE** /api/latest/permissions/environment/{id}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup2**](docs/PermissionsApi.md#removepermissionsforgroup2) | **DELETE** /api/latest/permissions/global/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup3**](docs/PermissionsApi.md#removepermissionsforgroup3) | **DELETE** /api/latest/permissions/plan/{key}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup4**](docs/PermissionsApi.md#removepermissionsforgroup4) | **DELETE** /api/latest/permissions/project/{key}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup5**](docs/PermissionsApi.md#removepermissionsforgroup5) | **DELETE** /api/latest/permissions/projectplan/{key}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForGroup6**](docs/PermissionsApi.md#removepermissionsforgroup6) | **DELETE** /api/latest/permissions/repository/{id}/groups/{name} | 
*PermissionsApi* | [**removePermissionsForRole**](docs/PermissionsApi.md#removepermissionsforrole) | **DELETE** /api/latest/permissions/deployment/{id}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole1**](docs/PermissionsApi.md#removepermissionsforrole1) | **DELETE** /api/latest/permissions/environment/{id}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole2**](docs/PermissionsApi.md#removepermissionsforrole2) | **DELETE** /api/latest/permissions/global/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole3**](docs/PermissionsApi.md#removepermissionsforrole3) | **DELETE** /api/latest/permissions/plan/{key}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole4**](docs/PermissionsApi.md#removepermissionsforrole4) | **DELETE** /api/latest/permissions/project/{key}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole5**](docs/PermissionsApi.md#removepermissionsforrole5) | **DELETE** /api/latest/permissions/projectplan/{key}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForRole6**](docs/PermissionsApi.md#removepermissionsforrole6) | **DELETE** /api/latest/permissions/repository/{id}/roles/{name} | 
*PermissionsApi* | [**removePermissionsForUser**](docs/PermissionsApi.md#removepermissionsforuser) | **DELETE** /api/latest/permissions/deployment/{id}/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser1**](docs/PermissionsApi.md#removepermissionsforuser1) | **DELETE** /api/latest/permissions/environment/{id}/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser2**](docs/PermissionsApi.md#removepermissionsforuser2) | **DELETE** /api/latest/permissions/global/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser3**](docs/PermissionsApi.md#removepermissionsforuser3) | **DELETE** /api/latest/permissions/plan/{key}/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser4**](docs/PermissionsApi.md#removepermissionsforuser4) | **DELETE** /api/latest/permissions/project/{key}/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser5**](docs/PermissionsApi.md#removepermissionsforuser5) | **DELETE** /api/latest/permissions/projectplan/{key}/users/{name} | 
*PermissionsApi* | [**removePermissionsForUser6**](docs/PermissionsApi.md#removepermissionsforuser6) | **DELETE** /api/latest/permissions/repository/{id}/users/{name} | 
*ResourceApi* | [**addAgentAssignment**](docs/ResourceApi.md#addagentassignment) | **POST** /api/latest/agent/assignment | 
*ResourceApi* | [**createAccessToken**](docs/ResourceApi.md#createaccesstokenoperation) | **POST** /api/latest/access-token | 
*ResourceApi* | [**getAgentAssignments**](docs/ResourceApi.md#getagentassignments) | **GET** /api/latest/agent/assignment | 
*ResourceApi* | [**getUserTokens**](docs/ResourceApi.md#getusertokens) | **GET** /api/latest/access-token | 
*ResourceApi* | [**removeAssignment**](docs/ResourceApi.md#removeassignment) | **DELETE** /api/latest/agent/assignment | 
*ResourceApi* | [**revokeToken**](docs/ResourceApi.md#revoketoken) | **DELETE** /api/latest/access-token/{tokenId} | 
*ResourceApi* | [**searchEntityForAgent**](docs/ResourceApi.md#searchentityforagent) | **GET** /api/latest/agent/assignment/search | 
*SessionApi* | [**invalidateUserSessions**](docs/SessionApi.md#invalidateusersessions) | **DELETE** /admin/latest/session/{name} | 
*SystemInformationApi* | [**getSystemInfo**](docs/SystemInformationApi.md#getsysteminfo) | **GET** /admin/latest/systemInfo | 
*TriggersApi* | [**scheduleChangeDetection**](docs/TriggersApi.md#schedulechangedetection) | **POST** /triggers/latest/remote/changeDetection | 
*TrustedKeysManagementApi* | [**_delete**](docs/TrustedKeysManagementApi.md#_delete) | **DELETE** /admin/latest/security/trustedKey/{id} | 
*TrustedKeysManagementApi* | [**create**](docs/TrustedKeysManagementApi.md#create) | **POST** /admin/latest/security/trustedKey | 
*TrustedKeysManagementApi* | [**findAll**](docs/TrustedKeysManagementApi.md#findall) | **GET** /admin/latest/security/trustedKey | 
*UserManagementApi* | [**addUsersToGroup**](docs/UserManagementApi.md#adduserstogroup) | **POST** /api/latest/admin/groups/{name}/add-users | 
*UserManagementApi* | [**assignGroups**](docs/UserManagementApi.md#assigngroups) | **POST** /api/latest/admin/users/{name}/groups | 
*UserManagementApi* | [**changeUserPassword**](docs/UserManagementApi.md#changeuserpassword) | **PUT** /api/latest/admin/users/credentials | 
*UserManagementApi* | [**createGroup1**](docs/UserManagementApi.md#creategroup1) | **POST** /api/latest/admin/groups | 
*UserManagementApi* | [**createUser**](docs/UserManagementApi.md#createuser) | **POST** /api/latest/admin/users | 
*UserManagementApi* | [**createUserRepositoryAlias**](docs/UserManagementApi.md#createuserrepositoryalias) | **POST** /api/latest/admin/users/{name}/alias | 
*UserManagementApi* | [**deleteGroup**](docs/UserManagementApi.md#deletegroup) | **DELETE** /api/latest/admin/groups/{name} | 
*UserManagementApi* | [**deleteUser**](docs/UserManagementApi.md#deleteuser) | **DELETE** /api/latest/admin/users/{name} | 
*UserManagementApi* | [**findAssignedGroups**](docs/UserManagementApi.md#findassignedgroups) | **GET** /api/latest/admin/users/{name}/assigned-groups | 
*UserManagementApi* | [**findUnassignedGroups**](docs/UserManagementApi.md#findunassignedgroups) | **GET** /api/latest/admin/users/{name}/unassigned-groups | 
*UserManagementApi* | [**findUnassignedUserRepositoryAliases**](docs/UserManagementApi.md#findunassigneduserrepositoryaliases) | **GET** /api/latest/admin/users/{name}/unassigned-aliases | 
*UserManagementApi* | [**findUsersInGroup**](docs/UserManagementApi.md#findusersingroup) | **GET** /api/latest/admin/groups/{name}/more-members | 
*UserManagementApi* | [**findUsersNotInGroup**](docs/UserManagementApi.md#findusersnotingroup) | **GET** /api/latest/admin/groups/{name}/more-non-members | 
*UserManagementApi* | [**getGroups**](docs/UserManagementApi.md#getgroups) | **GET** /api/latest/admin/groups | 
*UserManagementApi* | [**getUserAccessTokens**](docs/UserManagementApi.md#getuseraccesstokens) | **GET** /api/latest/admin/users/{name}/access-token | 
*UserManagementApi* | [**getUserRepositoryAliases**](docs/UserManagementApi.md#getuserrepositoryaliases) | **GET** /api/latest/admin/users/{name}/alias | 
*UserManagementApi* | [**getUsers**](docs/UserManagementApi.md#getusers) | **GET** /api/latest/admin/users | 
*UserManagementApi* | [**removeUsersFromGroup**](docs/UserManagementApi.md#removeusersfromgroup) | **DELETE** /api/latest/admin/groups/{name}/remove-users | 
*UserManagementApi* | [**renameUser**](docs/UserManagementApi.md#renameuser) | **PUT** /api/latest/admin/users/rename | 
*UserManagementApi* | [**renameUserPost**](docs/UserManagementApi.md#renameuserpost) | **POST** /admin/latest/user | 
*UserManagementApi* | [**renameUserPut**](docs/UserManagementApi.md#renameuserput) | **PUT** /admin/latest/user/{newUserName} | 
*UserManagementApi* | [**revokeUserToken**](docs/UserManagementApi.md#revokeusertoken) | **DELETE** /api/latest/admin/users/{name}/access-token/{tokenId} | 
*UserManagementApi* | [**unassignGroups**](docs/UserManagementApi.md#unassigngroups) | **DELETE** /api/latest/admin/users/{name}/groups | 
*UserManagementApi* | [**unlinkUserRepositoryAlias**](docs/UserManagementApi.md#unlinkuserrepositoryalias) | **DELETE** /api/latest/admin/users/{name}/alias | 


### Models

- [AgentStatus](docs/AgentStatus.md)
- [ArtifactLink](docs/ArtifactLink.md)
- [Author](docs/Author.md)
- [AuthorContext](docs/AuthorContext.md)
- [BambooEntityOid](docs/BambooEntityOid.md)
- [BranchIntegrationConfiguration](docs/BranchIntegrationConfiguration.md)
- [BranchIntegrationPoint](docs/BranchIntegrationPoint.md)
- [BranchMonitoringConfiguration](docs/BranchMonitoringConfiguration.md)
- [BranchSpecificConfiguration](docs/BranchSpecificConfiguration.md)
- [BuildAgent](docs/BuildAgent.md)
- [BuildDefinition](docs/BuildDefinition.md)
- [BuildDefinitionForBuild](docs/BuildDefinitionForBuild.md)
- [BuildLogger](docs/BuildLogger.md)
- [BuildMonitoringLink](docs/BuildMonitoringLink.md)
- [BuildResultsSummary](docs/BuildResultsSummary.md)
- [ChainResultsSummary](docs/ChainResultsSummary.md)
- [ChainStageResult](docs/ChainStageResult.md)
- [Commit](docs/Commit.md)
- [CommitFile](docs/CommitFile.md)
- [ConsumedSubscription](docs/ConsumedSubscription.md)
- [CreateAccessTokenRequest](docs/CreateAccessTokenRequest.md)
- [CreateCommentRequest](docs/CreateCommentRequest.md)
- [DashboardProjectWithEnvironmentStatus](docs/DashboardProjectWithEnvironmentStatus.md)
- [DataVolume](docs/DataVolume.md)
- [DeploymentKey](docs/DeploymentKey.md)
- [DeploymentResultKey](docs/DeploymentResultKey.md)
- [DeploymentVersion](docs/DeploymentVersion.md)
- [DeploymentVersionItem](docs/DeploymentVersionItem.md)
- [DeploymentVersionStatus](docs/DeploymentVersionStatus.md)
- [DirectoryInformationResponse](docs/DirectoryInformationResponse.md)
- [DirectoryInformationResult](docs/DirectoryInformationResult.md)
- [DockerPipelineConfiguration](docs/DockerPipelineConfiguration.md)
- [Environment](docs/Environment.md)
- [EnvironmentIds](docs/EnvironmentIds.md)
- [EphemeralAgentsConfigurationDTO](docs/EphemeralAgentsConfigurationDTO.md)
- [Expansion](docs/Expansion.md)
- [ExpiryConfig](docs/ExpiryConfig.md)
- [ExtraBuildResultsData](docs/ExtraBuildResultsData.md)
- [FilteredTestResultsTestClassResult](docs/FilteredTestResultsTestClassResult.md)
- [FindPlansWithCustomExpirySettings200Response](docs/FindPlansWithCustomExpirySettings200Response.md)
- [FindUsersInGroup200Response](docs/FindUsersInGroup200Response.md)
- [GetAgents200Response](docs/GetAgents200Response.md)
- [GetAvailableUsers200Response](docs/GetAvailableUsers200Response.md)
- [GetBrokenBuildsForUser200Response](docs/GetBrokenBuildsForUser200Response.md)
- [GetDeploymentProjects200Response](docs/GetDeploymentProjects200Response.md)
- [GetEnvironmentsExecutableByAgent200Response](docs/GetEnvironmentsExecutableByAgent200Response.md)
- [GetEphemeralAgentPodLogs200Response](docs/GetEphemeralAgentPodLogs200Response.md)
- [GetEphemeralAgentPodRawLogs200Response](docs/GetEphemeralAgentPodRawLogs200Response.md)
- [GetGroups200Response](docs/GetGroups200Response.md)
- [GetPaginatedProjectRepositories200Response](docs/GetPaginatedProjectRepositories200Response.md)
- [GetPaginatedProjectSharedCredentials200Response](docs/GetPaginatedProjectSharedCredentials200Response.md)
- [GetUserRepositoryAliases200Response](docs/GetUserRepositoryAliases200Response.md)
- [GetUserTokens200Response](docs/GetUserTokens200Response.md)
- [ImmutableArtifactDefinition](docs/ImmutableArtifactDefinition.md)
- [ImmutableArtifactSubscription](docs/ImmutableArtifactSubscription.md)
- [ImmutableChain](docs/ImmutableChain.md)
- [ImmutableChainStage](docs/ImmutableChainStage.md)
- [ImmutableJob](docs/ImmutableJob.md)
- [ImmutableListCommit](docs/ImmutableListCommit.md)
- [ImmutableListVariableSubstitutionContext](docs/ImmutableListVariableSubstitutionContext.md)
- [ImmutablePlan](docs/ImmutablePlan.md)
- [ImmutableRequirement](docs/ImmutableRequirement.md)
- [ImmutableRequirementSet](docs/ImmutableRequirementSet.md)
- [ImmutableResultsSummary](docs/ImmutableResultsSummary.md)
- [ImmutableVcsBambooSpecsSource](docs/ImmutableVcsBambooSpecsSource.md)
- [ImmutableVcsLocationBambooSpecsState](docs/ImmutableVcsLocationBambooSpecsState.md)
- [JiraAssignee](docs/JiraAssignee.md)
- [JiraIssueDetails](docs/JiraIssueDetails.md)
- [JiraStatus](docs/JiraStatus.md)
- [JiraType](docs/JiraType.md)
- [JsonArray](docs/JsonArray.md)
- [JsonElement](docs/JsonElement.md)
- [JsonNull](docs/JsonNull.md)
- [JsonObject](docs/JsonObject.md)
- [JsonPrimitive](docs/JsonPrimitive.md)
- [JsonSearchResultsList](docs/JsonSearchResultsList.md)
- [Key](docs/Key.md)
- [Label](docs/Label.md)
- [Labelling](docs/Labelling.md)
- [Link](docs/Link.md)
- [LinkedJiraIssue](docs/LinkedJiraIssue.md)
- [ListGroupPermissions200Response](docs/ListGroupPermissions200Response.md)
- [ListRolePermissions200Response](docs/ListRolePermissions200Response.md)
- [ListUserPermissions200Response](docs/ListUserPermissions200Response.md)
- [ManualEncryptionRequest](docs/ManualEncryptionRequest.md)
- [ManualEncryptionResponse](docs/ManualEncryptionResponse.md)
- [MergeResultSummary](docs/MergeResultSummary.md)
- [MutableArtifact](docs/MutableArtifact.md)
- [NextBuildNumber](docs/NextBuildNumber.md)
- [NodeLifecycleState](docs/NodeLifecycleState.md)
- [NotificationManager](docs/NotificationManager.md)
- [NotificationRecipient](docs/NotificationRecipient.md)
- [NotificationRule](docs/NotificationRule.md)
- [NotificationSet](docs/NotificationSet.md)
- [NotificationType](docs/NotificationType.md)
- [Operations](docs/Operations.md)
- [PathSegment](docs/PathSegment.md)
- [PipelineDefinition](docs/PipelineDefinition.md)
- [Plan](docs/Plan.md)
- [PlanKey](docs/PlanKey.md)
- [PlanRepositoryDefinition](docs/PlanRepositoryDefinition.md)
- [PlanResultKey](docs/PlanResultKey.md)
- [PlanWithCustomExpirySettings](docs/PlanWithCustomExpirySettings.md)
- [PodsCleanup](docs/PodsCleanup.md)
- [Project](docs/Project.md)
- [QuarantineStatistics](docs/QuarantineStatistics.md)
- [ReindexBean](docs/ReindexBean.md)
- [RepositoryChangeset](docs/RepositoryChangeset.md)
- [RepositoryDataEntity](docs/RepositoryDataEntity.md)
- [Requirement](docs/Requirement.md)
- [RequirementOperations](docs/RequirementOperations.md)
- [RequirementReadonlyData](docs/RequirementReadonlyData.md)
- [RequirementSet](docs/RequirementSet.md)
- [RestAccessToken](docs/RestAccessToken.md)
- [RestAgent](docs/RestAgent.md)
- [RestAgentAssignmentExecutorDetails](docs/RestAgentAssignmentExecutorDetails.md)
- [RestAgentCapabilities](docs/RestAgentCapabilities.md)
- [RestAgentInformation](docs/RestAgentInformation.md)
- [RestAgentSummary](docs/RestAgentSummary.md)
- [RestAnonymousServerStatusInfo](docs/RestAnonymousServerStatusInfo.md)
- [RestArtifactDefinition](docs/RestArtifactDefinition.md)
- [RestArtifactDefinitionList](docs/RestArtifactDefinitionList.md)
- [RestArtifactDefinitions](docs/RestArtifactDefinitions.md)
- [RestArtifactHandler](docs/RestArtifactHandler.md)
- [RestAuditLogConfiguration](docs/RestAuditLogConfiguration.md)
- [RestBranch](docs/RestBranch.md)
- [RestBranchList](docs/RestBranchList.md)
- [RestBrokenPlan](docs/RestBrokenPlan.md)
- [RestBruteForceProtection](docs/RestBruteForceProtection.md)
- [RestBuildAgent](docs/RestBuildAgent.md)
- [RestBuildArtifact](docs/RestBuildArtifact.md)
- [RestBuildArtifactList](docs/RestBuildArtifactList.md)
- [RestBuildConcurrency](docs/RestBuildConcurrency.md)
- [RestBuildLabel](docs/RestBuildLabel.md)
- [RestBuildLabelList](docs/RestBuildLabelList.md)
- [RestBuildLabels](docs/RestBuildLabels.md)
- [RestBuildMonitoring](docs/RestBuildMonitoring.md)
- [RestCapability](docs/RestCapability.md)
- [RestChange](docs/RestChange.md)
- [RestChangeFile](docs/RestChangeFile.md)
- [RestChangeFileList](docs/RestChangeFileList.md)
- [RestChangeList](docs/RestChangeList.md)
- [RestChart](docs/RestChart.md)
- [RestCombinedExpiryConfiguration](docs/RestCombinedExpiryConfiguration.md)
- [RestCombinedExpiryStatus](docs/RestCombinedExpiryStatus.md)
- [RestComment](docs/RestComment.md)
- [RestCommentList](docs/RestCommentList.md)
- [RestComments](docs/RestComments.md)
- [RestCreateDeploymentProjectRequest](docs/RestCreateDeploymentProjectRequest.md)
- [RestCreateVersionRequest](docs/RestCreateVersionRequest.md)
- [RestDarkFeature](docs/RestDarkFeature.md)
- [RestDataVolume](docs/RestDataVolume.md)
- [RestDedicatedAgent](docs/RestDedicatedAgent.md)
- [RestDependencies](docs/RestDependencies.md)
- [RestDeploymentProject](docs/RestDeploymentProject.md)
- [RestDeploymentProjectLink](docs/RestDeploymentProjectLink.md)
- [RestDeploymentProjectStatusForJiraIssue](docs/RestDeploymentProjectStatusForJiraIssue.md)
- [RestDeploymentResult](docs/RestDeploymentResult.md)
- [RestDeploymentResultList](docs/RestDeploymentResultList.md)
- [RestDeploymentVersion](docs/RestDeploymentVersion.md)
- [RestDeploymentVersionAndPlanResult](docs/RestDeploymentVersionAndPlanResult.md)
- [RestDeploymentVersionLink](docs/RestDeploymentVersionLink.md)
- [RestDeploymentVersionList](docs/RestDeploymentVersionList.md)
- [RestDeploymentVersionStatus](docs/RestDeploymentVersionStatus.md)
- [RestDeploymentVersionStatusForDashboard](docs/RestDeploymentVersionStatusForDashboard.md)
- [RestDeploymentVersionStatuses](docs/RestDeploymentVersionStatuses.md)
- [RestDockerPipelineConfiguration](docs/RestDockerPipelineConfiguration.md)
- [RestElasticConfiguration](docs/RestElasticConfiguration.md)
- [RestElasticImageConfig](docs/RestElasticImageConfig.md)
- [RestElasticInstanceLog](docs/RestElasticInstanceLog.md)
- [RestElasticInstanceManagement](docs/RestElasticInstanceManagement.md)
- [RestElasticTerminationConfiguration](docs/RestElasticTerminationConfiguration.md)
- [RestEnableContainer](docs/RestEnableContainer.md)
- [RestEnvironment](docs/RestEnvironment.md)
- [RestEnvironmentDashboardStatus](docs/RestEnvironmentDashboardStatus.md)
- [RestEnvironmentForExecutablesView](docs/RestEnvironmentForExecutablesView.md)
- [RestEnvironmentPrerequisites](docs/RestEnvironmentPrerequisites.md)
- [RestEnvironmentStatusForDashboard](docs/RestEnvironmentStatusForDashboard.md)
- [RestEnvironmentStatusOfIssue](docs/RestEnvironmentStatusOfIssue.md)
- [RestEnvironmentWithConfigCounts](docs/RestEnvironmentWithConfigCounts.md)
- [RestEphemeralAgentTemplate](docs/RestEphemeralAgentTemplate.md)
- [RestEphemeralPodLogs](docs/RestEphemeralPodLogs.md)
- [RestErrorCollection](docs/RestErrorCollection.md)
- [RestExecutableEnvironmentList](docs/RestExecutableEnvironmentList.md)
- [RestExecutableJobList](docs/RestExecutableJobList.md)
- [RestExpiryStatus](docs/RestExpiryStatus.md)
- [RestFavicon](docs/RestFavicon.md)
- [RestGeneralConfiguration](docs/RestGeneralConfiguration.md)
- [RestGlobalVariable](docs/RestGlobalVariable.md)
- [RestGlobalVariableList](docs/RestGlobalVariableList.md)
- [RestGlobalVariables](docs/RestGlobalVariables.md)
- [RestGroup](docs/RestGroup.md)
- [RestGroupPermission](docs/RestGroupPermission.md)
- [RestIMServerConfiguration](docs/RestIMServerConfiguration.md)
- [RestIdContainer](docs/RestIdContainer.md)
- [RestInfo](docs/RestInfo.md)
- [RestJiraIssue](docs/RestJiraIssue.md)
- [RestJiraIssueList](docs/RestJiraIssueList.md)
- [RestJiraIssueRelatedDeploymentProjects](docs/RestJiraIssueRelatedDeploymentProjects.md)
- [RestJob](docs/RestJob.md)
- [RestKey](docs/RestKey.md)
- [RestLinkedDeploymentProject](docs/RestLinkedDeploymentProject.md)
- [RestMailConfiguration](docs/RestMailConfiguration.md)
- [RestManualEncryptionConfiguration](docs/RestManualEncryptionConfiguration.md)
- [RestNamingPreview](docs/RestNamingPreview.md)
- [RestNewUser](docs/RestNewUser.md)
- [RestNodeStatus](docs/RestNodeStatus.md)
- [RestOfflineAgentRemovalConfig](docs/RestOfflineAgentRemovalConfig.md)
- [RestOperations](docs/RestOperations.md)
- [RestPageModelPlanWithCustomExpirySettings](docs/RestPageModelPlanWithCustomExpirySettings.md)
- [RestPageModelRestAccessToken](docs/RestPageModelRestAccessToken.md)
- [RestPageModelRestAgent](docs/RestPageModelRestAgent.md)
- [RestPageModelRestBrokenPlan](docs/RestPageModelRestBrokenPlan.md)
- [RestPageModelRestCapability](docs/RestPageModelRestCapability.md)
- [RestPageModelRestDeploymentProject](docs/RestPageModelRestDeploymentProject.md)
- [RestPageModelRestEnvironmentForExecutablesView](docs/RestPageModelRestEnvironmentForExecutablesView.md)
- [RestPageModelRestEphemeralAgentTemplate](docs/RestPageModelRestEphemeralAgentTemplate.md)
- [RestPageModelRestGroup](docs/RestPageModelRestGroup.md)
- [RestPageModelRestGroupPermission](docs/RestPageModelRestGroupPermission.md)
- [RestPageModelRestJob](docs/RestPageModelRestJob.md)
- [RestPageModelRestProjectRepository](docs/RestPageModelRestProjectRepository.md)
- [RestPageModelRestRolePermission](docs/RestPageModelRestRolePermission.md)
- [RestPageModelRestSharedCredential](docs/RestPageModelRestSharedCredential.md)
- [RestPageModelRestStage](docs/RestPageModelRestStage.md)
- [RestPageModelRestUser](docs/RestPageModelRestUser.md)
- [RestPageModelRestUserAlias](docs/RestPageModelRestUserAlias.md)
- [RestPageModelRestUserDetails](docs/RestPageModelRestUserDetails.md)
- [RestPageModelRestUserPermission](docs/RestPageModelRestUserPermission.md)
- [RestPersonalAccessTokensExpirationConfiguration](docs/RestPersonalAccessTokensExpirationConfiguration.md)
- [RestPlan](docs/RestPlan.md)
- [RestPlanAction](docs/RestPlanAction.md)
- [RestPlanActionList](docs/RestPlanActionList.md)
- [RestPlanBranch](docs/RestPlanBranch.md)
- [RestPlanBranchList](docs/RestPlanBranchList.md)
- [RestPlanConfig](docs/RestPlanConfig.md)
- [RestPlanIdentifier](docs/RestPlanIdentifier.md)
- [RestPlanLabel](docs/RestPlanLabel.md)
- [RestPlanLabelList](docs/RestPlanLabelList.md)
- [RestPlanLabels](docs/RestPlanLabels.md)
- [RestPlanList](docs/RestPlanList.md)
- [RestPlans](docs/RestPlans.md)
- [RestProgress](docs/RestProgress.md)
- [RestProject](docs/RestProject.md)
- [RestProjectCreate](docs/RestProjectCreate.md)
- [RestProjectIdentifier](docs/RestProjectIdentifier.md)
- [RestProjectList](docs/RestProjectList.md)
- [RestProjectRepository](docs/RestProjectRepository.md)
- [RestProjects](docs/RestProjects.md)
- [RestQuarantineConfig](docs/RestQuarantineConfig.md)
- [RestQueuedBuild](docs/RestQueuedBuild.md)
- [RestQueuedBuildList](docs/RestQueuedBuildList.md)
- [RestQueuedBuilds](docs/RestQueuedBuilds.md)
- [RestQueuedDeployment](docs/RestQueuedDeployment.md)
- [RestQueuedDeploymentList](docs/RestQueuedDeploymentList.md)
- [RestQueuedDeployments](docs/RestQueuedDeployments.md)
- [RestQuickFilter](docs/RestQuickFilter.md)
- [RestRemoteAgentAuthentication](docs/RestRemoteAgentAuthentication.md)
- [RestRemoteAgentCapability](docs/RestRemoteAgentCapability.md)
- [RestRemoteAgentConfiguration](docs/RestRemoteAgentConfiguration.md)
- [RestReport](docs/RestReport.md)
- [RestReportList](docs/RestReportList.md)
- [RestReports](docs/RestReports.md)
- [RestRepository](docs/RestRepository.md)
- [RestRepositoryConnectionResult](docs/RestRepositoryConnectionResult.md)
- [RestRepositoryList](docs/RestRepositoryList.md)
- [RestRepositoryMinimal](docs/RestRepositoryMinimal.md)
- [RestRepositoryUsageModel](docs/RestRepositoryUsageModel.md)
- [RestRequirement](docs/RestRequirement.md)
- [RestResource](docs/RestResource.md)
- [RestResourceList](docs/RestResourceList.md)
- [RestResources](docs/RestResources.md)
- [RestResultList](docs/RestResultList.md)
- [RestResultStatus](docs/RestResultStatus.md)
- [RestResults](docs/RestResults.md)
- [RestRolePermission](docs/RestRolePermission.md)
- [RestRssSecurityConfiguration](docs/RestRssSecurityConfiguration.md)
- [RestScheduledJob](docs/RestScheduledJob.md)
- [RestSecuritySettings](docs/RestSecuritySettings.md)
- [RestServerNodesInfo](docs/RestServerNodesInfo.md)
- [RestServerStatusInfo](docs/RestServerStatusInfo.md)
- [RestSharedCredential](docs/RestSharedCredential.md)
- [RestSignUp](docs/RestSignUp.md)
- [RestStage](docs/RestStage.md)
- [RestStageList](docs/RestStageList.md)
- [RestStageResult](docs/RestStageResult.md)
- [RestStageResultList](docs/RestStageResultList.md)
- [RestTrustedKey](docs/RestTrustedKey.md)
- [RestUpdateDeploymentProjectRequest](docs/RestUpdateDeploymentProjectRequest.md)
- [RestUser](docs/RestUser.md)
- [RestUserAlias](docs/RestUserAlias.md)
- [RestUserDarkFeature](docs/RestUserDarkFeature.md)
- [RestUserDetails](docs/RestUserDetails.md)
- [RestUserPasswordUpdate](docs/RestUserPasswordUpdate.md)
- [RestUserPermission](docs/RestUserPermission.md)
- [RestUserRenameRequest](docs/RestUserRenameRequest.md)
- [RestUserResponsible](docs/RestUserResponsible.md)
- [RestVariable](docs/RestVariable.md)
- [RestVariableDefinitionContext](docs/RestVariableDefinitionContext.md)
- [RestVariableDefinitionContextList](docs/RestVariableDefinitionContextList.md)
- [RestVariableList](docs/RestVariableList.md)
- [RestVcsLocationBambooSpecsState](docs/RestVcsLocationBambooSpecsState.md)
- [RestVcsLocationSpecsStatus](docs/RestVcsLocationSpecsStatus.md)
- [RestVerificationRequest](docs/RestVerificationRequest.md)
- [RestXsrfProtection](docs/RestXsrfProtection.md)
- [Result](docs/Result.md)
- [ResultKey](docs/ResultKey.md)
- [ResultsSummary](docs/ResultsSummary.md)
- [RunExpiryResponse](docs/RunExpiryResponse.md)
- [SearchResult](docs/SearchResult.md)
- [SearchResultEntity](docs/SearchResultEntity.md)
- [SearchResultsList](docs/SearchResultsList.md)
- [SecuritySettingsLink](docs/SecuritySettingsLink.md)
- [SimpleRestArtifactHandler](docs/SimpleRestArtifactHandler.md)
- [StageVariableContext](docs/StageVariableContext.md)
- [Status](docs/Status.md)
- [SystemStatusInfo](docs/SystemStatusInfo.md)
- [TaskConditionConfig](docs/TaskConditionConfig.md)
- [TaskDefinition](docs/TaskDefinition.md)
- [TaskRootDirectorySelector](docs/TaskRootDirectorySelector.md)
- [TestCase](docs/TestCase.md)
- [TestCaseResult](docs/TestCaseResult.md)
- [TestCaseResultError](docs/TestCaseResultError.md)
- [TestClass](docs/TestClass.md)
- [TestClassResult](docs/TestClassResult.md)
- [TestConnectionResultDto](docs/TestConnectionResultDto.md)
- [TestResultsSummary](docs/TestResultsSummary.md)
- [TriggerDefinition](docs/TriggerDefinition.md)
- [TriggerReason](docs/TriggerReason.md)
- [UriInfo](docs/UriInfo.md)
- [User](docs/User.md)
- [UserBean](docs/UserBean.md)
- [VariableContextSnapshot](docs/VariableContextSnapshot.md)
- [VariableDefinition](docs/VariableDefinition.md)
- [VariableSubstitution](docs/VariableSubstitution.md)
- [VariableSubstitutionContext](docs/VariableSubstitutionContext.md)
- [VcsBambooSpecsDetectionOptions](docs/VcsBambooSpecsDetectionOptions.md)
- [VcsBambooSpecsSource](docs/VcsBambooSpecsSource.md)
- [VcsBranch](docs/VcsBranch.md)
- [VcsBranchDefinition](docs/VcsBranchDefinition.md)
- [VcsBranchDetectionOptions](docs/VcsBranchDetectionOptions.md)
- [VcsChangeDetectionOptions](docs/VcsChangeDetectionOptions.md)
- [VcsLocationBambooSpecsState](docs/VcsLocationBambooSpecsState.md)
- [VcsLocationDefinition](docs/VcsLocationDefinition.md)
- [VcsRepositoryViewerDefinition](docs/VcsRepositoryViewerDefinition.md)
- [VersionPreview](docs/VersionPreview.md)
- [VersionVariables](docs/VersionVariables.md)
- [WeightedDescriptor](docs/WeightedDescriptor.md)

### Authorization


Authentication schemes defined for the API:
<a id="basic"></a>
#### basic


- **Type**: HTTP basic authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `12.1.1`
- Package version: `12.1.1`
- Generator version: `7.19.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://jira.atlassian.com/projects/BAM/summary](https://jira.atlassian.com/projects/BAM/summary)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
