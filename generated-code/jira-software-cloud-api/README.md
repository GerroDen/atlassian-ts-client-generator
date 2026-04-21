# jira-software-cloud-api@1001.0.0

A TypeScript SDK client for the your-domain.atlassian.net API.

## Usage

First, install the SDK from npm.

```bash
npm install jira-software-cloud-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  BacklogApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToBacklogOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BacklogApi(config);

  const body = {
    // MoveIssuesToBacklogRequest
    moveIssuesToBacklogRequest: {"issues":["10001","PR-1","PR-3"]},
  } satisfies MoveIssuesToBacklogOperationRequest;

  try {
    const data = await api.moveIssuesToBacklog(body);
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

All URIs are relative to *https://your-domain.atlassian.net*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BacklogApi* | [**moveIssuesToBacklog**](docs/BacklogApi.md#moveissuestobacklogoperation) | **POST** /rest/agile/1.0/backlog/issue | Move issues to backlog
*BacklogApi* | [**moveIssuesToBacklogForBoard**](docs/BacklogApi.md#moveissuestobacklogforboardoperation) | **POST** /rest/agile/1.0/backlog/{boardId}/issue | Move issues to backlog for board
*BoardApi* | [**createBoard**](docs/BoardApi.md#createboardoperation) | **POST** /rest/agile/1.0/board | Create board
*BoardApi* | [**deleteBoard**](docs/BoardApi.md#deleteboard) | **DELETE** /rest/agile/1.0/board/{boardId} | Delete board
*BoardApi* | [**deleteBoardProperty**](docs/BoardApi.md#deleteboardproperty) | **DELETE** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Delete board property
*BoardApi* | [**getAllBoards**](docs/BoardApi.md#getallboards) | **GET** /rest/agile/1.0/board | Get all boards
*BoardApi* | [**getAllQuickFilters**](docs/BoardApi.md#getallquickfilters) | **GET** /rest/agile/1.0/board/{boardId}/quickfilter | Get all quick filters
*BoardApi* | [**getAllSprints**](docs/BoardApi.md#getallsprints) | **GET** /rest/agile/1.0/board/{boardId}/sprint | Get all sprints
*BoardApi* | [**getAllVersions**](docs/BoardApi.md#getallversions) | **GET** /rest/agile/1.0/board/{boardId}/version | Get all versions
*BoardApi* | [**getBoard**](docs/BoardApi.md#getboard) | **GET** /rest/agile/1.0/board/{boardId} | Get board
*BoardApi* | [**getBoardByFilterId**](docs/BoardApi.md#getboardbyfilterid) | **GET** /rest/agile/1.0/board/filter/{filterId} | Get board by filter id
*BoardApi* | [**getBoardIssuesForEpic**](docs/BoardApi.md#getboardissuesforepic) | **GET** /rest/agile/1.0/board/{boardId}/epic/{epicId}/issue | Get board issues for epic
*BoardApi* | [**getBoardIssuesForSprint**](docs/BoardApi.md#getboardissuesforsprint) | **GET** /rest/agile/1.0/board/{boardId}/sprint/{sprintId}/issue | Get board issues for sprint
*BoardApi* | [**getBoardProperty**](docs/BoardApi.md#getboardproperty) | **GET** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Get board property
*BoardApi* | [**getBoardPropertyKeys**](docs/BoardApi.md#getboardpropertykeys) | **GET** /rest/agile/1.0/board/{boardId}/properties | Get board property keys
*BoardApi* | [**getConfiguration**](docs/BoardApi.md#getconfiguration) | **GET** /rest/agile/1.0/board/{boardId}/configuration | Get configuration
*BoardApi* | [**getEpics**](docs/BoardApi.md#getepics) | **GET** /rest/agile/1.0/board/{boardId}/epic | Get epics
*BoardApi* | [**getFeaturesForBoard**](docs/BoardApi.md#getfeaturesforboard) | **GET** /rest/agile/1.0/board/{boardId}/features | Get features for board
*BoardApi* | [**getIssuesForBacklog**](docs/BoardApi.md#getissuesforbacklog) | **GET** /rest/agile/1.0/board/{boardId}/backlog | Get issues for backlog
*BoardApi* | [**getIssuesForBoard**](docs/BoardApi.md#getissuesforboard) | **GET** /rest/agile/1.0/board/{boardId}/issue | Get issues for board
*BoardApi* | [**getIssuesWithoutEpicForBoard**](docs/BoardApi.md#getissueswithoutepicforboard) | **GET** /rest/agile/1.0/board/{boardId}/epic/none/issue | Get issues without epic for board
*BoardApi* | [**getProjects**](docs/BoardApi.md#getprojects) | **GET** /rest/agile/1.0/board/{boardId}/project | Get projects
*BoardApi* | [**getProjectsFull**](docs/BoardApi.md#getprojectsfull) | **GET** /rest/agile/1.0/board/{boardId}/project/full | Get projects full
*BoardApi* | [**getQuickFilter**](docs/BoardApi.md#getquickfilter) | **GET** /rest/agile/1.0/board/{boardId}/quickfilter/{quickFilterId} | Get quick filter
*BoardApi* | [**getReportsForBoard**](docs/BoardApi.md#getreportsforboard) | **GET** /rest/agile/1.0/board/{boardId}/reports | Get reports for board
*BoardApi* | [**moveIssuesToBoard**](docs/BoardApi.md#moveissuestoboard) | **POST** /rest/agile/1.0/board/{boardId}/issue | Move issues to board
*BoardApi* | [**setBoardProperty**](docs/BoardApi.md#setboardproperty) | **PUT** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Set board property
*BoardApi* | [**toggleFeatures**](docs/BoardApi.md#togglefeaturesoperation) | **PUT** /rest/agile/1.0/board/{boardId}/features | Toggle features
*BuildsApi* | [**deleteBuildByKey**](docs/BuildsApi.md#deletebuildbykey) | **DELETE** /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber} | Delete a build by key
*BuildsApi* | [**deleteBuildsByProperty**](docs/BuildsApi.md#deletebuildsbyproperty) | **DELETE** /rest/builds/0.1/bulkByProperties | Delete builds by Property
*BuildsApi* | [**getBuildByKey**](docs/BuildsApi.md#getbuildbykey) | **GET** /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber} | Get a build by key
*BuildsApi* | [**submitBuilds**](docs/BuildsApi.md#submitbuildsoperation) | **POST** /rest/builds/0.1/bulk | Submit build data
*DeploymentsApi* | [**deleteDeploymentByKey**](docs/DeploymentsApi.md#deletedeploymentbykey) | **DELETE** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} | Delete a deployment by key
*DeploymentsApi* | [**deleteDeploymentsByProperty**](docs/DeploymentsApi.md#deletedeploymentsbyproperty) | **DELETE** /rest/deployments/0.1/bulkByProperties | Delete deployments by Property
*DeploymentsApi* | [**getDeploymentByKey**](docs/DeploymentsApi.md#getdeploymentbykey) | **GET** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} | Get a deployment by key
*DeploymentsApi* | [**getDeploymentGatingStatusByKey**](docs/DeploymentsApi.md#getdeploymentgatingstatusbykey) | **GET** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}/gating-status | Get deployment gating status by key
*DeploymentsApi* | [**submitDeployments**](docs/DeploymentsApi.md#submitdeployments) | **POST** /rest/deployments/0.1/bulk | Submit deployment data
*DevOpsComponentsApi* | [**deleteComponentById**](docs/DevOpsComponentsApi.md#deletecomponentbyid) | **DELETE** /rest/devopscomponents/1.0/devopscomponents/{componentId} | Delete a Component by ID
*DevOpsComponentsApi* | [**deleteComponentsByProperty**](docs/DevOpsComponentsApi.md#deletecomponentsbyproperty) | **DELETE** /rest/devopscomponents/1.0/bulkByProperties | Delete DevOps Components by Property
*DevOpsComponentsApi* | [**getComponentById**](docs/DevOpsComponentsApi.md#getcomponentbyid) | **GET** /rest/devopscomponents/1.0/devopscomponents/{componentId} | Get a Component by ID
*DevOpsComponentsApi* | [**submitComponents**](docs/DevOpsComponentsApi.md#submitcomponents) | **POST** /rest/devopscomponents/1.0/bulk | Submit DevOps Components
*DevelopmentInformationApi* | [**deleteByProperties**](docs/DevelopmentInformationApi.md#deletebyproperties) | **DELETE** /rest/devinfo/0.10/bulkByProperties | Delete development information by properties
*DevelopmentInformationApi* | [**deleteEntity**](docs/DevelopmentInformationApi.md#deleteentity) | **DELETE** /rest/devinfo/0.10/repository/{repositoryId}/{entityType}/{entityId} | Delete development information entity
*DevelopmentInformationApi* | [**deleteRepository**](docs/DevelopmentInformationApi.md#deleterepository) | **DELETE** /rest/devinfo/0.10/repository/{repositoryId} | Delete repository
*DevelopmentInformationApi* | [**existsByProperties**](docs/DevelopmentInformationApi.md#existsbyproperties) | **GET** /rest/devinfo/0.10/existsByProperties | Check if data exists for the supplied properties
*DevelopmentInformationApi* | [**getRepository**](docs/DevelopmentInformationApi.md#getrepository) | **GET** /rest/devinfo/0.10/repository/{repositoryId} | Get repository
*DevelopmentInformationApi* | [**storeDevelopmentInformation**](docs/DevelopmentInformationApi.md#storedevelopmentinformation) | **POST** /rest/devinfo/0.10/bulk | Store development information
*EpicApi* | [**getEpic**](docs/EpicApi.md#getepic) | **GET** /rest/agile/1.0/epic/{epicIdOrKey} | Get epic
*EpicApi* | [**getIssuesForEpic**](docs/EpicApi.md#getissuesforepic) | **GET** /rest/agile/1.0/epic/{epicIdOrKey}/issue | Get issues for epic
*EpicApi* | [**getIssuesWithoutEpic**](docs/EpicApi.md#getissueswithoutepic) | **GET** /rest/agile/1.0/epic/none/issue | Get issues without epic
*EpicApi* | [**moveIssuesToEpic**](docs/EpicApi.md#moveissuestoepic) | **POST** /rest/agile/1.0/epic/{epicIdOrKey}/issue | Move issues to epic
*EpicApi* | [**partiallyUpdateEpic**](docs/EpicApi.md#partiallyupdateepicoperation) | **POST** /rest/agile/1.0/epic/{epicIdOrKey} | Partially update epic
*EpicApi* | [**rankEpics**](docs/EpicApi.md#rankepicsoperation) | **PUT** /rest/agile/1.0/epic/{epicIdOrKey}/rank | Rank epics
*EpicApi* | [**removeIssuesFromEpic**](docs/EpicApi.md#removeissuesfromepic) | **POST** /rest/agile/1.0/epic/none/issue | Remove issues from epic
*FeatureFlagsApi* | [**deleteFeatureFlagById**](docs/FeatureFlagsApi.md#deletefeatureflagbyid) | **DELETE** /rest/featureflags/0.1/flag/{featureFlagId} | Delete a Feature Flag by ID
*FeatureFlagsApi* | [**deleteFeatureFlagsByProperty**](docs/FeatureFlagsApi.md#deletefeatureflagsbyproperty) | **DELETE** /rest/featureflags/0.1/bulkByProperties | Delete Feature Flags by Property
*FeatureFlagsApi* | [**getFeatureFlagById**](docs/FeatureFlagsApi.md#getfeatureflagbyid) | **GET** /rest/featureflags/0.1/flag/{featureFlagId} | Get a Feature Flag by ID
*FeatureFlagsApi* | [**submitFeatureFlags**](docs/FeatureFlagsApi.md#submitfeatureflags) | **POST** /rest/featureflags/0.1/bulk | Submit Feature Flag data
*IssueApi* | [**estimateIssueForBoard**](docs/IssueApi.md#estimateissueforboardoperation) | **PUT** /rest/agile/1.0/issue/{issueIdOrKey}/estimation | Estimate issue for board
*IssueApi* | [**getIssue**](docs/IssueApi.md#getissue) | **GET** /rest/agile/1.0/issue/{issueIdOrKey} | Get issue
*IssueApi* | [**getIssueEstimationForBoard**](docs/IssueApi.md#getissueestimationforboard) | **GET** /rest/agile/1.0/issue/{issueIdOrKey}/estimation | Get issue estimation for board
*IssueApi* | [**rankIssues**](docs/IssueApi.md#rankissues) | **PUT** /rest/agile/1.0/issue/rank | Rank issues
*OperationsApi* | [**deleteEntityByProperty**](docs/OperationsApi.md#deleteentitybyproperty) | **DELETE** /rest/operations/1.0/bulkByProperties | Delete Incidents or Review by Property
*OperationsApi* | [**deleteIncidentById**](docs/OperationsApi.md#deleteincidentbyid) | **DELETE** /rest/operations/1.0/incidents/{incidentId} | Delete a Incident by ID
*OperationsApi* | [**deleteReviewById**](docs/OperationsApi.md#deletereviewbyid) | **DELETE** /rest/operations/1.0/post-incident-reviews/{reviewId} | Delete a Review by ID
*OperationsApi* | [**deleteWorkspaces**](docs/OperationsApi.md#deleteworkspaces) | **DELETE** /rest/operations/1.0/linkedWorkspaces/bulk | Delete Operations Workpaces by Id
*OperationsApi* | [**getIncidentById**](docs/OperationsApi.md#getincidentbyid) | **GET** /rest/operations/1.0/incidents/{incidentId} | Get a Incident by ID
*OperationsApi* | [**getReviewById**](docs/OperationsApi.md#getreviewbyid) | **GET** /rest/operations/1.0/post-incident-reviews/{reviewId} | Get a Review by ID
*OperationsApi* | [**getWorkspaces**](docs/OperationsApi.md#getworkspaces) | **GET** /rest/operations/1.0/linkedWorkspaces | Get all Operations Workspace IDs or a specific Operations Workspace by ID
*OperationsApi* | [**submitEntity**](docs/OperationsApi.md#submitentity) | **POST** /rest/operations/1.0/bulk | Submit Incident or Review data
*OperationsApi* | [**submitOperationsWorkspaces**](docs/OperationsApi.md#submitoperationsworkspacesoperation) | **POST** /rest/operations/1.0/linkedWorkspaces/bulk | Submit Operations Workspace Ids
*RemoteLinksApi* | [**deleteRemoteLinkById**](docs/RemoteLinksApi.md#deleteremotelinkbyid) | **DELETE** /rest/remotelinks/1.0/remotelink/{remoteLinkId} | Delete a Remote Link by ID
*RemoteLinksApi* | [**deleteRemoteLinksByProperty**](docs/RemoteLinksApi.md#deleteremotelinksbyproperty) | **DELETE** /rest/remotelinks/1.0/bulkByProperties | Delete Remote Links by Property
*RemoteLinksApi* | [**getRemoteLinkById**](docs/RemoteLinksApi.md#getremotelinkbyid) | **GET** /rest/remotelinks/1.0/remotelink/{remoteLinkId} | Get a Remote Link by ID
*RemoteLinksApi* | [**submitRemoteLinks**](docs/RemoteLinksApi.md#submitremotelinksoperation) | **POST** /rest/remotelinks/1.0/bulk | Submit Remote Link data
*SecurityInformationApi* | [**deleteLinkedWorkspaces**](docs/SecurityInformationApi.md#deletelinkedworkspaces) | **DELETE** /rest/security/1.0/linkedWorkspaces/bulk | Delete linked Security Workspaces
*SecurityInformationApi* | [**deleteVulnerabilitiesByProperty**](docs/SecurityInformationApi.md#deletevulnerabilitiesbyproperty) | **DELETE** /rest/security/1.0/bulkByProperties | Delete Vulnerabilities by Property
*SecurityInformationApi* | [**deleteVulnerabilityById**](docs/SecurityInformationApi.md#deletevulnerabilitybyid) | **DELETE** /rest/security/1.0/vulnerability/{vulnerabilityId} | Delete a Vulnerability by ID
*SecurityInformationApi* | [**getLinkedWorkspaceById**](docs/SecurityInformationApi.md#getlinkedworkspacebyid) | **GET** /rest/security/1.0/linkedWorkspaces/{workspaceId} | Get a linked Security Workspace by ID
*SecurityInformationApi* | [**getLinkedWorkspaces**](docs/SecurityInformationApi.md#getlinkedworkspaces) | **GET** /rest/security/1.0/linkedWorkspaces | Get linked Security Workspaces
*SecurityInformationApi* | [**getVulnerabilityById**](docs/SecurityInformationApi.md#getvulnerabilitybyid) | **GET** /rest/security/1.0/vulnerability/{vulnerabilityId} | Get a Vulnerability by ID
*SecurityInformationApi* | [**submitVulnerabilities**](docs/SecurityInformationApi.md#submitvulnerabilitiesoperation) | **POST** /rest/security/1.0/bulk | Submit Vulnerability data
*SecurityInformationApi* | [**submitWorkspaces**](docs/SecurityInformationApi.md#submitworkspaces) | **POST** /rest/security/1.0/linkedWorkspaces/bulk | Submit Security Workspaces to link
*SprintApi* | [**createSprint**](docs/SprintApi.md#createsprintoperation) | **POST** /rest/agile/1.0/sprint | Create sprint
*SprintApi* | [**deleteProperty**](docs/SprintApi.md#deleteproperty) | **DELETE** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Delete property
*SprintApi* | [**deleteSprint**](docs/SprintApi.md#deletesprint) | **DELETE** /rest/agile/1.0/sprint/{sprintId} | Delete sprint
*SprintApi* | [**getIssuesForSprint**](docs/SprintApi.md#getissuesforsprint) | **GET** /rest/agile/1.0/sprint/{sprintId}/issue | Get issues for sprint
*SprintApi* | [**getPropertiesKeys**](docs/SprintApi.md#getpropertieskeys) | **GET** /rest/agile/1.0/sprint/{sprintId}/properties | Get properties keys
*SprintApi* | [**getProperty**](docs/SprintApi.md#getproperty) | **GET** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Get property
*SprintApi* | [**getSprint**](docs/SprintApi.md#getsprint) | **GET** /rest/agile/1.0/sprint/{sprintId} | Get sprint
*SprintApi* | [**moveIssuesToSprintAndRank**](docs/SprintApi.md#moveissuestosprintandrank) | **POST** /rest/agile/1.0/sprint/{sprintId}/issue | Move issues to sprint and rank
*SprintApi* | [**partiallyUpdateSprint**](docs/SprintApi.md#partiallyupdatesprint) | **POST** /rest/agile/1.0/sprint/{sprintId} | Partially update sprint
*SprintApi* | [**setProperty**](docs/SprintApi.md#setproperty) | **PUT** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Set property
*SprintApi* | [**swapSprint**](docs/SprintApi.md#swapsprintoperation) | **POST** /rest/agile/1.0/sprint/{sprintId}/swap | Swap sprint
*SprintApi* | [**updateSprint**](docs/SprintApi.md#updatesprintoperation) | **PUT** /rest/agile/1.0/sprint/{sprintId} | Update sprint


### Models

- [Associations](docs/Associations.md)
- [Author](docs/Author.md)
- [AvatarUrlsBean](docs/AvatarUrlsBean.md)
- [Board](docs/Board.md)
- [BoardAdminsBean](docs/BoardAdminsBean.md)
- [BoardConfigBean](docs/BoardConfigBean.md)
- [BoardCreateBean](docs/BoardCreateBean.md)
- [BoardFilterBean](docs/BoardFilterBean.md)
- [BoardLocationBean](docs/BoardLocationBean.md)
- [Branch](docs/Branch.md)
- [BuildCommitReference](docs/BuildCommitReference.md)
- [BuildData](docs/BuildData.md)
- [BuildKey](docs/BuildKey.md)
- [BuildRefReference](docs/BuildRefReference.md)
- [BuildReferences](docs/BuildReferences.md)
- [ChangeDetails](docs/ChangeDetails.md)
- [Changelog](docs/Changelog.md)
- [ChangelogAuthor](docs/ChangelogAuthor.md)
- [ChangelogAuthorAllOfAvatarUrls](docs/ChangelogAuthorAllOfAvatarUrls.md)
- [ChangelogHistoryMetadata](docs/ChangelogHistoryMetadata.md)
- [ChangelogHistoryMetadataAllOfActor](docs/ChangelogHistoryMetadataAllOfActor.md)
- [ChangelogHistoryMetadataAllOfCause](docs/ChangelogHistoryMetadataAllOfCause.md)
- [ChangelogHistoryMetadataAllOfGenerator](docs/ChangelogHistoryMetadataAllOfGenerator.md)
- [ChangelogItemsInner](docs/ChangelogItemsInner.md)
- [ColorBean](docs/ColorBean.md)
- [ColumnBean](docs/ColumnBean.md)
- [ColumnConfigBean](docs/ColumnConfigBean.md)
- [Command](docs/Command.md)
- [Commit](docs/Commit.md)
- [Commit1](docs/Commit1.md)
- [Commit2](docs/Commit2.md)
- [Component](docs/Component.md)
- [CreateBoardRequest](docs/CreateBoardRequest.md)
- [CreateBoardRequestLocation](docs/CreateBoardRequestLocation.md)
- [CreateSprintRequest](docs/CreateSprintRequest.md)
- [DeploymentData](docs/DeploymentData.md)
- [DeploymentData1](docs/DeploymentData1.md)
- [DeploymentDataAssociationsInner](docs/DeploymentDataAssociationsInner.md)
- [DeploymentKey](docs/DeploymentKey.md)
- [DevInformation](docs/DevInformation.md)
- [EntityAssociation](docs/EntityAssociation.md)
- [EntityAssociationValuesInner](docs/EntityAssociationValuesInner.md)
- [EntityError](docs/EntityError.md)
- [EntityIds](docs/EntityIds.md)
- [Entry](docs/Entry.md)
- [Environment](docs/Environment.md)
- [EnvironmentDetails](docs/EnvironmentDetails.md)
- [EpicRankRequestBean](docs/EpicRankRequestBean.md)
- [EpicUpdateBean](docs/EpicUpdateBean.md)
- [ErrorMessage](docs/ErrorMessage.md)
- [ErrorMessage1](docs/ErrorMessage1.md)
- [ErrorMessages](docs/ErrorMessages.md)
- [EstimateIssueForBoardRequest](docs/EstimateIssueForBoardRequest.md)
- [EstimationConfigBean](docs/EstimationConfigBean.md)
- [EstimationConfigurationBean](docs/EstimationConfigurationBean.md)
- [EstimationFieldBean](docs/EstimationFieldBean.md)
- [ExistsForPropertiesResponse](docs/ExistsForPropertiesResponse.md)
- [FeatureBean](docs/FeatureBean.md)
- [FeatureFlagData](docs/FeatureFlagData.md)
- [FeatureFlagDetails](docs/FeatureFlagDetails.md)
- [FeatureFlagRollout](docs/FeatureFlagRollout.md)
- [FeatureFlagStatus](docs/FeatureFlagStatus.md)
- [FeatureFlagSummary](docs/FeatureFlagSummary.md)
- [FeatureResponseBean](docs/FeatureResponseBean.md)
- [FeatureToggleRequestBean](docs/FeatureToggleRequestBean.md)
- [FieldEditBean](docs/FieldEditBean.md)
- [FieldMetadata](docs/FieldMetadata.md)
- [FieldMetadataSchema](docs/FieldMetadataSchema.md)
- [GetAllBoards200Response](docs/GetAllBoards200Response.md)
- [GetAllBoards200ResponseValuesInner](docs/GetAllBoards200ResponseValuesInner.md)
- [GetAllBoards200ResponseValuesInnerAdmins](docs/GetAllBoards200ResponseValuesInnerAdmins.md)
- [GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner](docs/GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner.md)
- [GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner](docs/GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner.md)
- [GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls](docs/GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls.md)
- [GetAllBoards200ResponseValuesInnerLocation](docs/GetAllBoards200ResponseValuesInnerLocation.md)
- [GetAllQuickFilters200Response](docs/GetAllQuickFilters200Response.md)
- [GetAllQuickFilters200ResponseValuesInner](docs/GetAllQuickFilters200ResponseValuesInner.md)
- [GetBoardByFilterId200Response](docs/GetBoardByFilterId200Response.md)
- [GetBoardByFilterId200ResponseValuesInner](docs/GetBoardByFilterId200ResponseValuesInner.md)
- [GetComponentById200Response](docs/GetComponentById200Response.md)
- [GetConfiguration200Response](docs/GetConfiguration200Response.md)
- [GetConfiguration200ResponseColumnConfig](docs/GetConfiguration200ResponseColumnConfig.md)
- [GetConfiguration200ResponseColumnConfigColumnsInner](docs/GetConfiguration200ResponseColumnConfigColumnsInner.md)
- [GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner](docs/GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner.md)
- [GetConfiguration200ResponseEstimation](docs/GetConfiguration200ResponseEstimation.md)
- [GetConfiguration200ResponseEstimationField](docs/GetConfiguration200ResponseEstimationField.md)
- [GetConfiguration200ResponseRanking](docs/GetConfiguration200ResponseRanking.md)
- [GetConfiguration200ResponseSubQuery](docs/GetConfiguration200ResponseSubQuery.md)
- [GetFeaturesForBoard200Response](docs/GetFeaturesForBoard200Response.md)
- [GetFeaturesForBoard200ResponseFeaturesInner](docs/GetFeaturesForBoard200ResponseFeaturesInner.md)
- [GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner](docs/GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner.md)
- [GetIncidentById200Response](docs/GetIncidentById200Response.md)
- [GetReportsForBoard200Response](docs/GetReportsForBoard200Response.md)
- [GetReviewById200Response](docs/GetReviewById200Response.md)
- [GroupBean](docs/GroupBean.md)
- [HistoryMetadata](docs/HistoryMetadata.md)
- [HistoryMetadataParticipant](docs/HistoryMetadataParticipant.md)
- [Identifier](docs/Identifier.md)
- [Incident](docs/Incident.md)
- [IncidentSeverity](docs/IncidentSeverity.md)
- [IncludedFields](docs/IncludedFields.md)
- [IssueAssignRequestBean](docs/IssueAssignRequestBean.md)
- [IssueBean](docs/IssueBean.md)
- [IssueBeanChangelog](docs/IssueBeanChangelog.md)
- [IssueBeanChangelogAllOfHistoriesInner](docs/IssueBeanChangelogAllOfHistoriesInner.md)
- [IssueBeanEditmeta](docs/IssueBeanEditmeta.md)
- [IssueBeanEditmetaAllOfFieldsValue](docs/IssueBeanEditmetaAllOfFieldsValue.md)
- [IssueBeanFieldsToInclude](docs/IssueBeanFieldsToInclude.md)
- [IssueBeanSchemaValue](docs/IssueBeanSchemaValue.md)
- [IssueBeanTransitionsInner](docs/IssueBeanTransitionsInner.md)
- [IssueBeanTransitionsInnerTo](docs/IssueBeanTransitionsInnerTo.md)
- [IssueBeanTransitionsInnerToAllOfScope](docs/IssueBeanTransitionsInnerToAllOfScope.md)
- [IssueBeanTransitionsInnerToAllOfScopeAllOfProject](docs/IssueBeanTransitionsInnerToAllOfScopeAllOfProject.md)
- [IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls](docs/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.md)
- [IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory](docs/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory.md)
- [IssueBeanTransitionsInnerToAllOfStatusCategory](docs/IssueBeanTransitionsInnerToAllOfStatusCategory.md)
- [IssueIdOrKeysAssociation](docs/IssueIdOrKeysAssociation.md)
- [IssueIdOrKeysAssociation1](docs/IssueIdOrKeysAssociation1.md)
- [IssueRankRequestBean](docs/IssueRankRequestBean.md)
- [IssueTransition](docs/IssueTransition.md)
- [IssueUpdateMetadata](docs/IssueUpdateMetadata.md)
- [JsonTypeBean](docs/JsonTypeBean.md)
- [LinkGroup](docs/LinkGroup.md)
- [LinkGroupHeader](docs/LinkGroupHeader.md)
- [LocationBean](docs/LocationBean.md)
- [ModelFile](docs/ModelFile.md)
- [MoveIssuesToBacklogForBoardRequest](docs/MoveIssuesToBacklogForBoardRequest.md)
- [MoveIssuesToBacklogRequest](docs/MoveIssuesToBacklogRequest.md)
- [MoveIssuesToBoard207Response](docs/MoveIssuesToBoard207Response.md)
- [MoveIssuesToBoard207ResponseEntriesInner](docs/MoveIssuesToBoard207ResponseEntriesInner.md)
- [Operations](docs/Operations.md)
- [OperationsWorkspaceIds](docs/OperationsWorkspaceIds.md)
- [PageBeanBoard](docs/PageBeanBoard.md)
- [PageBeanBoardFilterBean](docs/PageBeanBoardFilterBean.md)
- [PageBeanQuickFilterBean](docs/PageBeanQuickFilterBean.md)
- [PageOfChangelogs](docs/PageOfChangelogs.md)
- [PartialSuccessBean](docs/PartialSuccessBean.md)
- [PartiallyUpdateEpicRequest](docs/PartiallyUpdateEpicRequest.md)
- [PartiallyUpdateEpicRequestColor](docs/PartiallyUpdateEpicRequestColor.md)
- [Pipeline](docs/Pipeline.md)
- [ProjectDetails](docs/ProjectDetails.md)
- [ProviderMetadata](docs/ProviderMetadata.md)
- [ProviderMetadata1](docs/ProviderMetadata1.md)
- [ProviderMetadata2](docs/ProviderMetadata2.md)
- [ProviderMetadata3](docs/ProviderMetadata3.md)
- [ProviderMetadata4](docs/ProviderMetadata4.md)
- [ProviderMetadata5](docs/ProviderMetadata5.md)
- [ProviderMetadata6](docs/ProviderMetadata6.md)
- [PullRequest](docs/PullRequest.md)
- [QuickFilterBean](docs/QuickFilterBean.md)
- [RankEpicsRequest](docs/RankEpicsRequest.md)
- [RankingConfigBean](docs/RankingConfigBean.md)
- [RejectedBuild](docs/RejectedBuild.md)
- [RejectedDeployment](docs/RejectedDeployment.md)
- [RelationBean](docs/RelationBean.md)
- [RemoteLinkData](docs/RemoteLinkData.md)
- [RemoteLinkDataAssociationsInner](docs/RemoteLinkDataAssociationsInner.md)
- [RemoteLinkStatus](docs/RemoteLinkStatus.md)
- [ReportsResponseBean](docs/ReportsResponseBean.md)
- [Repository](docs/Repository.md)
- [Repository1](docs/Repository1.md)
- [RepositoryErrors](docs/RepositoryErrors.md)
- [Review](docs/Review.md)
- [Reviewer](docs/Reviewer.md)
- [Scope](docs/Scope.md)
- [SearchResults](docs/SearchResults.md)
- [SecurityWorkspaceIds](docs/SecurityWorkspaceIds.md)
- [SecurityWorkspaceResponse](docs/SecurityWorkspaceResponse.md)
- [ServiceIdOrKeysAssociation](docs/ServiceIdOrKeysAssociation.md)
- [SimpleLink](docs/SimpleLink.md)
- [SprintBean](docs/SprintBean.md)
- [SprintCreateBean](docs/SprintCreateBean.md)
- [SprintSwapBean](docs/SprintSwapBean.md)
- [StatusCategory](docs/StatusCategory.md)
- [StatusDetails](docs/StatusDetails.md)
- [StoreDevinfoResult](docs/StoreDevinfoResult.md)
- [SubmitBuildsRequest](docs/SubmitBuildsRequest.md)
- [SubmitBuildsResponse](docs/SubmitBuildsResponse.md)
- [SubmitDeploymentRequest](docs/SubmitDeploymentRequest.md)
- [SubmitDeploymentsResponse](docs/SubmitDeploymentsResponse.md)
- [SubmitDeploymentsResponse1](docs/SubmitDeploymentsResponse1.md)
- [SubmitDeploymentsResponse1DetailsInner](docs/SubmitDeploymentsResponse1DetailsInner.md)
- [SubmitDevopsComponentsRequest](docs/SubmitDevopsComponentsRequest.md)
- [SubmitDevopsComponentsResponse](docs/SubmitDevopsComponentsResponse.md)
- [SubmitFeatureFlagRequest](docs/SubmitFeatureFlagRequest.md)
- [SubmitFeatureFlagsResponse](docs/SubmitFeatureFlagsResponse.md)
- [SubmitIncidentsRequest](docs/SubmitIncidentsRequest.md)
- [SubmitIncidentsRequestAnyOf](docs/SubmitIncidentsRequestAnyOf.md)
- [SubmitIncidentsRequestAnyOf1](docs/SubmitIncidentsRequestAnyOf1.md)
- [SubmitIncidentsResponse](docs/SubmitIncidentsResponse.md)
- [SubmitOperationsWorkspacesRequest](docs/SubmitOperationsWorkspacesRequest.md)
- [SubmitOperationsWorkspacesResponse](docs/SubmitOperationsWorkspacesResponse.md)
- [SubmitRemoteLinks202Response](docs/SubmitRemoteLinks202Response.md)
- [SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner](docs/SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner.md)
- [SubmitRemoteLinksRequest](docs/SubmitRemoteLinksRequest.md)
- [SubmitSecurityWorkspacesRequest](docs/SubmitSecurityWorkspacesRequest.md)
- [SubmitVulnerabilitiesRequest](docs/SubmitVulnerabilitiesRequest.md)
- [SubmitVulnerabilitiesResponse](docs/SubmitVulnerabilitiesResponse.md)
- [SubqueryBean](docs/SubqueryBean.md)
- [SwapSprintRequest](docs/SwapSprintRequest.md)
- [TestInfo](docs/TestInfo.md)
- [ToggleFeaturesRequest](docs/ToggleFeaturesRequest.md)
- [UpdateSprintRequest](docs/UpdateSprintRequest.md)
- [UpdatedProjectCategory](docs/UpdatedProjectCategory.md)
- [UserBean](docs/UserBean.md)
- [UserBeanAvatarUrls](docs/UserBeanAvatarUrls.md)
- [UserDetails](docs/UserDetails.md)
- [VulnerabilityAdditionalInfo](docs/VulnerabilityAdditionalInfo.md)
- [VulnerabilityDetails](docs/VulnerabilityDetails.md)
- [VulnerabilityDetailsAddAssociationsInner](docs/VulnerabilityDetailsAddAssociationsInner.md)
- [VulnerabilitySeverity](docs/VulnerabilitySeverity.md)

### Authorization


Authentication schemes defined for the API:
<a id="OAuth2-accessCode"></a>
#### OAuth2 accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.atlassian.com/authorize
- **Scopes**: 
  - `delete:board-scope.admin:jira-software`: Remove board configuration, features, and properties.
  - `delete:sprint:jira-software`: Delete sprints and their properties.
  - `manage:jira-configuration`: Configure Jira settings that require the Jira administrators permission, for example, create projects and custom fields, view workflows, manage issue link types.
  - `manage:jira-project`: Create and edit project settings and create new project-level objects, for example, versions, components.
  - `manage:jira-webhook`: Manage Jira webhooks. Enables an OAuth app to register and unregister dynamic webhooks in Jira. It also provides for fetching of registered webhooks.
  - `read:board-scope.admin:jira-software`: View configuration, features, filters, project, properties and quick filters related to the given board.
  - `read:board-scope:jira-software`: View board and issues from a board, view issues from a backlog and view reports and versions.
  - `read:build:jira-software`: View builds.
  - `read:deployment:jira-software`: View deployments.
  - `read:epic:jira-software`: View and search for epics, view issues related to an epic and issues without an epic.
  - `read:feature-flag:jira-software`: View feature flags.
  - `read:issue:jira-software`: View issues, issue estimations and field used for estimations.
  - `read:jira-user`: View user information in Jira that you have access to, including usernames, email addresses, and avatars.
  - `read:jira-work`: Read project and issue data. Search for issues and objects associated with issues (such as attachments and worklogs).
  - `read:remote-link:jira-software`: View remote links.
  - `read:source-code:jira-software`: View repositories and check if data exists for the supplied properties.
  - `read:sprint:jira-software`: View sprints and sprint related issues and properties.
  - `write:board-scope.admin:jira-software`: Create board, toggle features and set and delete properties.
  - `write:board-scope:jira-software`: Move issues to a backlog and move issues from a backlog to a board.
  - `write:build:jira-software`: Submit and delete build.
  - `write:deployment:jira-software`: Submit and delete deployment.
  - `write:epic:jira-software`: Remove issues from epic, move issues to epic, rank epics and partially update epics. A partial update means that fields not present in the request JSON will not be updated.
  - `write:feature-flag:jira-software`: Submit and delete feature flag.
  - `write:issue:jira-software`: Move (rank) issues and update estimation of the issue.
  - `write:jira-work`: Create and edit issues in Jira, post comments, create worklogs, and delete issues.
  - `write:remote-link:jira-software`: Submit and delete remote link.
  - `write:source-code:jira-software`: Store and delete development information, delete repository and delete development information entity.
  - `write:sprint:jira-software`: Save, move issues to sprints, and change the order of sprints.
  - `read:dev-info:jira`: Read development information
  - `write:dev-info:jira`: Write development information
  - `delete:dev-info:jira`: Delete development information
  - `read:feature-flag-info:jira`: Read feature flag information
  - `write:feature-flag-info:jira`: Write feature flag information
  - `delete:feature-flag-info:jira`: Delete feature flag information
  - `read:deployment-info:jira`: Read deployment information
  - `write:deployment-info:jira`: Write deployment information
  - `delete:deployment-info:jira`: Delete deployment information
  - `read:build-info:jira`: Read build information
  - `write:build-info:jira`: Write build information
  - `delete:build-info:jira`: Delete build information
  - `read:remote-link-info:jira`: Read remote link information
  - `write:remote-link-info:jira`: Write remote link information
  - `delete:remote-link-info:jira`: Delete remote link information
<a id="basicAuth"></a>
#### basicAuth


- **Type**: HTTP basic authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1001.0.0`
- Package version: `1001.0.0`
- Generator version: `7.21.0`
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

For more information, please visit [https://getsupport.atlassian.com](https://getsupport.atlassian.com)

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

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
