# bitbucket-api@9.5

A TypeScript SDK client for the example.com API.

## Usage

First, install the SDK from npm.

```bash
npm install bitbucket-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  AuthenticationApi,
} from 'bitbucket-api';
import type { AddForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new AuthenticationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // RestSshAccessKey (optional)
    restSshAccessKey: ...,
  } satisfies AddForProjectRequest;

  try {
    const data = await api.addForProject(body);
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

All URIs are relative to *http://example.com:7990/rest*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AuthenticationApi* | [**addForProject**](docs/AuthenticationApi.md#addforproject) | **POST** /keys/latest/projects/{projectKey}/ssh | Add project SSH key
*AuthenticationApi* | [**addForRepository**](docs/AuthenticationApi.md#addforrepository) | **POST** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh | Add repository SSH key
*AuthenticationApi* | [**addIdp**](docs/AuthenticationApi.md#addidp) | **POST** /authconfig/latest/idps | Create IdP configuration
*AuthenticationApi* | [**addSshKey**](docs/AuthenticationApi.md#addsshkeyoperation) | **POST** /ssh/latest/keys | Add SSH key for user
*AuthenticationApi* | [**authenticate**](docs/AuthenticationApi.md#authenticate) | **POST** /tsv/latest/authenticate | Authenticate with 2SV
*AuthenticationApi* | [**authenticateWithRecoveryCode**](docs/AuthenticationApi.md#authenticatewithrecoverycode) | **POST** /tsv/latest/authenticate/recovery-code | Authenticate using recovery code
*AuthenticationApi* | [**completeAuthenticationChange**](docs/AuthenticationApi.md#completeauthenticationchange) | **POST** /tsv/latest/totp/complete-enrollment-update | Complete authentication app update for 2SV
*AuthenticationApi* | [**completeEnforcedEnrollment**](docs/AuthenticationApi.md#completeenforcedenrollment) | **POST** /tsv/latest/totp/complete-enforced-enrollment | Complete enforced enrollment in 2SV
*AuthenticationApi* | [**completeVoluntaryEnrollment**](docs/AuthenticationApi.md#completevoluntaryenrollment) | **POST** /tsv/latest/totp/complete-voluntary-enrollment | Complete voluntary enrollment in 2SV
*AuthenticationApi* | [**createAccessToken**](docs/AuthenticationApi.md#createaccesstoken) | **PUT** /access-tokens/latest/projects/{projectKey} | Create project HTTP token
*AuthenticationApi* | [**createAccessToken1**](docs/AuthenticationApi.md#createaccesstoken1) | **PUT** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug} | Create repository HTTP token
*AuthenticationApi* | [**createAccessToken2**](docs/AuthenticationApi.md#createaccesstoken2) | **PUT** /access-tokens/latest/users/{userSlug} | Create personal HTTP token
*AuthenticationApi* | [**deleteById**](docs/AuthenticationApi.md#deletebyid) | **DELETE** /access-tokens/latest/projects/{projectKey}/{tokenId} | Delete a HTTP token
*AuthenticationApi* | [**deleteById1**](docs/AuthenticationApi.md#deletebyid1) | **DELETE** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Delete a HTTP token
*AuthenticationApi* | [**deleteById2**](docs/AuthenticationApi.md#deletebyid2) | **DELETE** /access-tokens/latest/users/{userSlug}/{tokenId} | Delete a HTTP token
*AuthenticationApi* | [**deleteSshKey**](docs/AuthenticationApi.md#deletesshkey) | **DELETE** /ssh/latest/keys/{keyId} | Remove SSH key
*AuthenticationApi* | [**deleteSshKeys**](docs/AuthenticationApi.md#deletesshkeys) | **DELETE** /ssh/latest/keys | Delete all user SSH key
*AuthenticationApi* | [**elevatePermissionsWithPassword**](docs/AuthenticationApi.md#elevatepermissionswithpassword) | **POST** /tsv/latest/elevate-permissions/password | Create elevated session with password
*AuthenticationApi* | [**elevatePermissionsWithRecoveryCode**](docs/AuthenticationApi.md#elevatepermissionswithrecoverycode) | **POST** /tsv/latest/elevate-permissions/recovery-code | Create elevated session with recovery code
*AuthenticationApi* | [**elevatePermissionsWithTotp**](docs/AuthenticationApi.md#elevatepermissionswithtotp) | **POST** /tsv/latest/elevate-permissions/totp | Create elevated session with TOTP
*AuthenticationApi* | [**get**](docs/AuthenticationApi.md#get) | **GET** /basicauth/latest/config | Get basic auth configuration
*AuthenticationApi* | [**getAllAccessTokens**](docs/AuthenticationApi.md#getallaccesstokens) | **GET** /access-tokens/latest/projects/{projectKey} | Get project HTTP tokens
*AuthenticationApi* | [**getAllAccessTokens1**](docs/AuthenticationApi.md#getallaccesstokens1) | **GET** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug} | Get repository HTTP tokens
*AuthenticationApi* | [**getAllAccessTokens2**](docs/AuthenticationApi.md#getallaccesstokens2) | **GET** /access-tokens/latest/users/{userSlug} | Get personal HTTP tokens
*AuthenticationApi* | [**getById**](docs/AuthenticationApi.md#getbyid) | **GET** /access-tokens/latest/projects/{projectKey}/{tokenId} | Get HTTP token by ID
*AuthenticationApi* | [**getById1**](docs/AuthenticationApi.md#getbyid1) | **GET** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Get HTTP token by ID
*AuthenticationApi* | [**getById2**](docs/AuthenticationApi.md#getbyid2) | **GET** /access-tokens/latest/users/{userSlug}/{tokenId} | Get HTTP token by ID
*AuthenticationApi* | [**getCaptchaData**](docs/AuthenticationApi.md#getcaptchadata) | **GET** /tsv/latest/authenticate/captcha | Get CAPTCHA challenge
*AuthenticationApi* | [**getConfig**](docs/AuthenticationApi.md#getconfig) | **GET** /authconfig/latest/sso | Get SSO configuration
*AuthenticationApi* | [**getElevatedPermissionStatus**](docs/AuthenticationApi.md#getelevatedpermissionstatus) | **GET** /tsv/latest/elevate-permissions | Get elevated session status
*AuthenticationApi* | [**getForProject**](docs/AuthenticationApi.md#getforproject) | **GET** /keys/latest/projects/{projectKey}/ssh/{keyId} | Get project SSH key
*AuthenticationApi* | [**getForProjects**](docs/AuthenticationApi.md#getforprojects) | **GET** /keys/latest/ssh/{keyId}/projects | Get project SSH keys
*AuthenticationApi* | [**getForRepositories**](docs/AuthenticationApi.md#getforrepositories) | **GET** /keys/latest/ssh/{keyId}/repos | Get repository SSH key
*AuthenticationApi* | [**getForRepository**](docs/AuthenticationApi.md#getforrepository) | **GET** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId} | Get repository SSH key
*AuthenticationApi* | [**getForRepository1**](docs/AuthenticationApi.md#getforrepository1) | **GET** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh | Get repository SSH keys
*AuthenticationApi* | [**getIdp**](docs/AuthenticationApi.md#getidp) | **GET** /authconfig/latest/idps/{id} | Get IdP configuration
*AuthenticationApi* | [**getIdps**](docs/AuthenticationApi.md#getidps) | **GET** /authconfig/latest/idps | Get all configured IdPs
*AuthenticationApi* | [**getJitProvisionedUsers**](docs/AuthenticationApi.md#getjitprovisionedusers) | **GET** /authconfig/latest/jit-users | Get all JIT provisioned users
*AuthenticationApi* | [**getLoginOptions**](docs/AuthenticationApi.md#getloginoptions) | **GET** /authconfig/latest/login-options | Get available login options
*AuthenticationApi* | [**getSshKey**](docs/AuthenticationApi.md#getsshkey) | **GET** /ssh/latest/keys/{keyId} | Get SSH key for user by keyId
*AuthenticationApi* | [**getSshKeys**](docs/AuthenticationApi.md#getsshkeys) | **GET** /ssh/latest/keys | Get SSH keys for user
*AuthenticationApi* | [**getSshKeysForProject**](docs/AuthenticationApi.md#getsshkeysforproject) | **GET** /keys/latest/projects/{projectKey}/ssh | Get SSH key
*AuthenticationApi* | [**getSsoManagementStatus**](docs/AuthenticationApi.md#getssomanagementstatus) | **GET** /tsv/latest/sso-management-status | Get SSO management status
*AuthenticationApi* | [**getStatus**](docs/AuthenticationApi.md#getstatus) | **GET** /tsv/latest/status | Get two-step verification status
*AuthenticationApi* | [**put**](docs/AuthenticationApi.md#put) | **PUT** /basicauth/latest/config | Update basic auth configuration
*AuthenticationApi* | [**removeIdp**](docs/AuthenticationApi.md#removeidp) | **DELETE** /authconfig/latest/idps/{id} | Delete IdP configuration
*AuthenticationApi* | [**revokeForProject**](docs/AuthenticationApi.md#revokeforproject) | **DELETE** /keys/latest/projects/{projectKey}/ssh/{keyId} | Revoke project SSH key
*AuthenticationApi* | [**revokeForRepository**](docs/AuthenticationApi.md#revokeforrepository) | **DELETE** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId} | Revoke repository SSH key
*AuthenticationApi* | [**revokeMany**](docs/AuthenticationApi.md#revokemanyoperation) | **DELETE** /keys/latest/ssh/{keyId} | Revoke project SSH key
*AuthenticationApi* | [**rotateRecoverCode**](docs/AuthenticationApi.md#rotaterecovercode) | **POST** /tsv/latest/totp/recovery-code/rotate | Rotate recovery code
*AuthenticationApi* | [**sshSettings**](docs/AuthenticationApi.md#sshsettings) | **GET** /ssh/latest/settings | Get SSH settings
*AuthenticationApi* | [**startEnforcedEnrollment**](docs/AuthenticationApi.md#startenforcedenrollment) | **POST** /tsv/latest/totp/start-enforced-enrollment | Start enforced enrollment in 2SV
*AuthenticationApi* | [**startEnrollmentUpdate**](docs/AuthenticationApi.md#startenrollmentupdate) | **POST** /tsv/latest/totp/start-enrollment-update | Start authentication app update for 2SV
*AuthenticationApi* | [**startVoluntaryEnrollment**](docs/AuthenticationApi.md#startvoluntaryenrollment) | **POST** /tsv/latest/totp/start-voluntary-enrollment | Start voluntary enrollment in 2SV
*AuthenticationApi* | [**unenroll**](docs/AuthenticationApi.md#unenroll) | **DELETE** /tsv/latest/totp/unenroll | Uneroll current user from two-step verification
*AuthenticationApi* | [**unenrollUser**](docs/AuthenticationApi.md#unenrolluser) | **DELETE** /tsv/latest/totp/unenroll/user/{userName} | Unenroll specific user from two-step verification
*AuthenticationApi* | [**updateAccessToken**](docs/AuthenticationApi.md#updateaccesstoken) | **POST** /access-tokens/latest/projects/{projectKey}/{tokenId} | Update HTTP token
*AuthenticationApi* | [**updateAccessToken1**](docs/AuthenticationApi.md#updateaccesstoken1) | **POST** /access-tokens/latest/projects/{projectKey}/repos/{repositorySlug}/{tokenId} | Update HTTP token
*AuthenticationApi* | [**updateAccessToken2**](docs/AuthenticationApi.md#updateaccesstoken2) | **POST** /access-tokens/latest/users/{userSlug}/{tokenId} | Update HTTP token
*AuthenticationApi* | [**updateConfig**](docs/AuthenticationApi.md#updateconfig) | **PATCH** /authconfig/latest/sso | Update SSO configuration
*AuthenticationApi* | [**updateIdp**](docs/AuthenticationApi.md#updateidp) | **PATCH** /authconfig/latest/idps/{id} | Update IdP configuration
*AuthenticationApi* | [**updatePermission**](docs/AuthenticationApi.md#updatepermission) | **PUT** /keys/latest/projects/{projectKey}/ssh/{keyId}/permission/{permission} | Update project SSH key permission
*AuthenticationApi* | [**updatePermission1**](docs/AuthenticationApi.md#updatepermission1) | **PUT** /keys/latest/projects/{projectKey}/repos/{repositorySlug}/ssh/{keyId}/permission/{permission} | Update repository SSH key permission
*AuthenticationApi* | [**verifyCode**](docs/AuthenticationApi.md#verifycode) | **POST** /tsv/latest/authenticate/totp-code | Authenticate using TOTP code
*BuildsAndDeploymentsApi* | [**_delete**](docs/BuildsAndDeploymentsApi.md#_delete) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Delete a specific build status
*BuildsAndDeploymentsApi* | [**add**](docs/BuildsAndDeploymentsApi.md#add) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Store a build status
*BuildsAndDeploymentsApi* | [**addAnnotations**](docs/BuildsAndDeploymentsApi.md#addannotations) | **POST** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Add Code Insights annotations
*BuildsAndDeploymentsApi* | [**createOrUpdateDeployment**](docs/BuildsAndDeploymentsApi.md#createorupdatedeployment) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Create or update a deployment
*BuildsAndDeploymentsApi* | [**createRequiredBuildsMergeCheck**](docs/BuildsAndDeploymentsApi.md#createrequiredbuildsmergecheck) | **POST** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition | Create a required builds merge check
*BuildsAndDeploymentsApi* | [**delete1**](docs/BuildsAndDeploymentsApi.md#delete1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Delete a deployment
*BuildsAndDeploymentsApi* | [**deleteACodeInsightsReport**](docs/BuildsAndDeploymentsApi.md#deleteacodeinsightsreport) | **DELETE** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Delete a Code Insights report
*BuildsAndDeploymentsApi* | [**deleteAnnotations**](docs/BuildsAndDeploymentsApi.md#deleteannotations) | **DELETE** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Delete Code Insights annotations
*BuildsAndDeploymentsApi* | [**deleteRequiredBuildsMergeCheck**](docs/BuildsAndDeploymentsApi.md#deleterequiredbuildsmergecheck) | **DELETE** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Delete a required builds merge check
*BuildsAndDeploymentsApi* | [**get**](docs/BuildsAndDeploymentsApi.md#get) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Get a specific build status
*BuildsAndDeploymentsApi* | [**get1**](docs/BuildsAndDeploymentsApi.md#get1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Get a deployment
*BuildsAndDeploymentsApi* | [**getACodeInsightsReport**](docs/BuildsAndDeploymentsApi.md#getacodeinsightsreport) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Get a Code Insights report
*BuildsAndDeploymentsApi* | [**getAnnotations**](docs/BuildsAndDeploymentsApi.md#getannotations) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Get Code Insights annotations for a report
*BuildsAndDeploymentsApi* | [**getAnnotations1**](docs/BuildsAndDeploymentsApi.md#getannotations1) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations | Get Code Insights annotations for a commit
*BuildsAndDeploymentsApi* | [**getBuildStatusStats**](docs/BuildsAndDeploymentsApi.md#getbuildstatusstats) | **GET** /build-status/latest/commits/stats/{commitId} | Get build status statistics for commit
*BuildsAndDeploymentsApi* | [**getMultipleBuildStatusStats**](docs/BuildsAndDeploymentsApi.md#getmultiplebuildstatusstats) | **POST** /build-status/latest/commits/stats | Get build status statistics for multiple commits
*BuildsAndDeploymentsApi* | [**getPageOfRequiredBuildsMergeChecks**](docs/BuildsAndDeploymentsApi.md#getpageofrequiredbuildsmergechecks) | **GET** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions | Get required builds merge checks
*BuildsAndDeploymentsApi* | [**getReports**](docs/BuildsAndDeploymentsApi.md#getreports) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports | Get all Code Insights reports for a commit
*BuildsAndDeploymentsApi* | [**setACodeInsightsReport**](docs/BuildsAndDeploymentsApi.md#setacodeinsightsreport) | **PUT** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Create a Code Insights report
*BuildsAndDeploymentsApi* | [**setAnnotation**](docs/BuildsAndDeploymentsApi.md#setannotation) | **PUT** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId} | Create or replace a Code Insights annotation
*BuildsAndDeploymentsApi* | [**updateRequiredBuildsMergeCheck**](docs/BuildsAndDeploymentsApi.md#updaterequiredbuildsmergecheck) | **PUT** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Update a required builds merge check
*CapabilitiesApi* | [**getCapabilities**](docs/CapabilitiesApi.md#getcapabilities) | **GET** /api/latest/build/capabilities | Get build capabilities
*CapabilitiesApi* | [**getCapabilities1**](docs/CapabilitiesApi.md#getcapabilities1) | **GET** /api/latest/deployment/capabilities | Get deployment capabilities
*DashboardApi* | [**getPullRequestSuggestions**](docs/DashboardApi.md#getpullrequestsuggestions) | **GET** /api/latest/dashboard/pull-request-suggestions | Get pull request suggestions
*DashboardApi* | [**getPullRequests1**](docs/DashboardApi.md#getpullrequests1) | **GET** /api/latest/dashboard/pull-requests | Get pull requests for a user
*DefaultApi* | [**getPullRequestCount**](docs/DefaultApi.md#getpullrequestcount) | **GET** /api/latest/inbox/pull-requests/count | Get total number of pull requests in inbox
*DefaultApi* | [**getPullRequests2**](docs/DefaultApi.md#getpullrequests2) | **GET** /api/latest/inbox/pull-requests | Get pull requests in inbox
*DeprecatedApi* | [**addBuildStatus**](docs/DeprecatedApi.md#addbuildstatus) | **POST** /build-status/latest/commits/{commitId} | Create build status for commit
*DeprecatedApi* | [**addGroupToUser**](docs/DeprecatedApi.md#addgrouptouser) | **POST** /api/latest/admin/users/add-group | Add user to group
*DeprecatedApi* | [**addUserToGroup**](docs/DeprecatedApi.md#addusertogroup) | **POST** /api/latest/admin/groups/add-user | Add user to group
*DeprecatedApi* | [**approve**](docs/DeprecatedApi.md#approve) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Approve pull request
*DeprecatedApi* | [**getBuildStatus**](docs/DeprecatedApi.md#getbuildstatus) | **GET** /build-status/latest/commits/{commitId} | Get build statuses for commit
*DeprecatedApi* | [**getBuildStatusStats**](docs/DeprecatedApi.md#getbuildstatusstats) | **GET** /build-status/latest/commits/stats/{commitId} | Get build status statistics for commit
*DeprecatedApi* | [**getDefaultBranch1**](docs/DeprecatedApi.md#getdefaultbranch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Get default branch
*DeprecatedApi* | [**getMultipleBuildStatusStats**](docs/DeprecatedApi.md#getmultiplebuildstatusstats) | **POST** /build-status/latest/commits/stats | Get build status statistics for multiple commits
*DeprecatedApi* | [**removeUserFromGroup**](docs/DeprecatedApi.md#removeuserfromgroup) | **POST** /api/latest/admin/groups/remove-user | Remove user from group
*DeprecatedApi* | [**setDefaultBranch1**](docs/DeprecatedApi.md#setdefaultbranch1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Update default branch
*DeprecatedApi* | [**unassignParticipantRole1**](docs/DeprecatedApi.md#unassignparticipantrole1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Unassign pull request participant
*DeprecatedApi* | [**withdrawApproval**](docs/DeprecatedApi.md#withdrawapproval) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Unapprove pull request
*JiraIntegrationApi* | [**createIssue**](docs/JiraIntegrationApi.md#createissue) | **POST** /jira/latest/comments/{commentId}/issues | Create Jira Issue
*JiraIntegrationApi* | [**getCommitsByIssueKey**](docs/JiraIntegrationApi.md#getcommitsbyissuekey) | **GET** /jira/latest/issues/{issueKey}/commits | Get changesets for issue key
*JiraIntegrationApi* | [**getEnhancedEntityLinkForProject**](docs/JiraIntegrationApi.md#getenhancedentitylinkforproject) | **GET** /jira/latest/projects/{projectKey}/primary-enhanced-entitylink | Get entity link
*JiraIntegrationApi* | [**getIssueKeysForPullRequest**](docs/JiraIntegrationApi.md#getissuekeysforpullrequest) | **GET** /jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues | Get issues for a pull request
*MarkupApi* | [**preview**](docs/MarkupApi.md#preview) | **POST** /api/latest/markup/preview | Preview markdown render
*MirroringMirrorApi* | [**endRollingUpgrade**](docs/MirroringMirrorApi.md#endrollingupgrade) | **POST** /mirroring/latest/zdu/end | End ZDU upgrade on mirror farm
*MirroringMirrorApi* | [**getDelayedSyncRepositories**](docs/MirroringMirrorApi.md#getdelayedsyncrepositories) | **GET** /mirroring/latest/mirrorRepos/delayed-sync | Get delayed sync repositories
*MirroringMirrorApi* | [**getFarmNodes**](docs/MirroringMirrorApi.md#getfarmnodes) | **GET** /mirroring/latest/farmNodes | Get farm nodes
*MirroringMirrorApi* | [**getMirrorMode**](docs/MirroringMirrorApi.md#getmirrormode) | **GET** /mirroring/latest/syncSettings/mode | Get mirror mode
*MirroringMirrorApi* | [**getMirrorSettings**](docs/MirroringMirrorApi.md#getmirrorsettings) | **GET** /mirroring/latest/syncSettings | Get upstream settings
*MirroringMirrorApi* | [**getMirroredProjects**](docs/MirroringMirrorApi.md#getmirroredprojects) | **GET** /mirroring/latest/syncSettings/projects | Get mirrored project IDs
*MirroringMirrorApi* | [**getMirroredRepository**](docs/MirroringMirrorApi.md#getmirroredrepository) | **GET** /mirroring/latest/mirrorRepos/{externalRepositoryId} | Get clone URLs
*MirroringMirrorApi* | [**getRefChangesQueue**](docs/MirroringMirrorApi.md#getrefchangesqueue) | **GET** /mirroring/latest/supportInfo/refChangesQueue | Get items in ref changes queue
*MirroringMirrorApi* | [**getRefChangesQueueCount**](docs/MirroringMirrorApi.md#getrefchangesqueuecount) | **GET** /mirroring/latest/supportInfo/refChangesQueue/count | Get total number of items in ref changes queue
*MirroringMirrorApi* | [**getRepoSyncStatus**](docs/MirroringMirrorApi.md#getreposyncstatus) | **GET** /mirroring/latest/supportInfo/repoSyncStatus | Get sync status of repositories
*MirroringMirrorApi* | [**getRepoSyncStatus1**](docs/MirroringMirrorApi.md#getreposyncstatus1) | **GET** /mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus | Gets information about the mirrored repository
*MirroringMirrorApi* | [**getRepositoryLockOwner**](docs/MirroringMirrorApi.md#getrepositorylockowner) | **GET** /mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner | Get the repository lock owner for the syncing process
*MirroringMirrorApi* | [**getRepositoryLockOwners**](docs/MirroringMirrorApi.md#getrepositorylockowners) | **GET** /mirroring/latest/supportInfo/repo-lock-owners | Get all the repository lock owners for the syncing process
*MirroringMirrorApi* | [**getSynchronizationProgress**](docs/MirroringMirrorApi.md#getsynchronizationprogress) | **GET** /mirroring/latest/progress | Get synchronization progress state
*MirroringMirrorApi* | [**getUpstreamServer**](docs/MirroringMirrorApi.md#getupstreamserver) | **GET** /mirroring/latest/upstreamServer | Get upstream server
*MirroringMirrorApi* | [**setMirrorMode**](docs/MirroringMirrorApi.md#setmirrormode) | **PUT** /mirroring/latest/syncSettings/mode | Update mirror mode
*MirroringMirrorApi* | [**setMirrorSettings**](docs/MirroringMirrorApi.md#setmirrorsettings) | **PUT** /mirroring/latest/syncSettings | Update upstream settings
*MirroringMirrorApi* | [**startMirroringProject**](docs/MirroringMirrorApi.md#startmirroringproject) | **POST** /mirroring/latest/syncSettings/projects/{projectId} | Add project to be mirrored
*MirroringMirrorApi* | [**startMirroringProjects**](docs/MirroringMirrorApi.md#startmirroringprojects) | **POST** /mirroring/latest/syncSettings/projects | Add multiple projects to be mirrored
*MirroringMirrorApi* | [**startRollingUpgrade**](docs/MirroringMirrorApi.md#startrollingupgrade) | **POST** /mirroring/latest/zdu/start | Start ZDU upgrade on mirror farm
*MirroringMirrorApi* | [**stopMirroringProject**](docs/MirroringMirrorApi.md#stopmirroringproject) | **DELETE** /mirroring/latest/syncSettings/projects/{projectId} | Stop mirroring project
*MirroringUpstreamApi* | [**accept**](docs/MirroringUpstreamApi.md#accept) | **POST** /mirroring/latest/requests/{mirroringRequestId}/accept | Accept a mirroring request
*MirroringUpstreamApi* | [**analyticsSettings**](docs/MirroringUpstreamApi.md#analyticssettings) | **GET** /mirroring/latest/analyticsSettings | Get analytics settings from upstream
*MirroringUpstreamApi* | [**authenticate**](docs/MirroringUpstreamApi.md#authenticate) | **POST** /mirroring/latest/authenticate | Authenticate on behalf of a user
*MirroringUpstreamApi* | [**deleteMirroringRequest**](docs/MirroringUpstreamApi.md#deletemirroringrequest) | **DELETE** /mirroring/latest/requests/{mirroringRequestId} | Delete a mirroring request
*MirroringUpstreamApi* | [**deletePreferredMirrorId**](docs/MirroringUpstreamApi.md#deletepreferredmirrorid) | **DELETE** /mirroring/latest/account/settings/preferred-mirror | Remove preferred mirror
*MirroringUpstreamApi* | [**getAllContentHashes**](docs/MirroringUpstreamApi.md#getallcontenthashes) | **GET** /mirroring/latest/repos | Get content hashes for repositories
*MirroringUpstreamApi* | [**getAllReposForProject**](docs/MirroringUpstreamApi.md#getallreposforproject) | **GET** /mirroring/latest/projects/{projectId}/repos | Get hashes for repositories in project
*MirroringUpstreamApi* | [**getContentHashById**](docs/MirroringUpstreamApi.md#getcontenthashbyid) | **GET** /mirroring/latest/repos/{repoId} | Get content hash for a repository
*MirroringUpstreamApi* | [**getMirror**](docs/MirroringUpstreamApi.md#getmirror) | **GET** /mirroring/latest/mirrorServers/{mirrorId} | Get mirror by ID
*MirroringUpstreamApi* | [**getMirroringRequest**](docs/MirroringUpstreamApi.md#getmirroringrequest) | **GET** /mirroring/latest/requests/{mirroringRequestId} | Get a mirroring request
*MirroringUpstreamApi* | [**getPreferredMirrorId**](docs/MirroringUpstreamApi.md#getpreferredmirrorid) | **GET** /mirroring/latest/account/settings/preferred-mirror | Get preferred mirror
*MirroringUpstreamApi* | [**getProjectById**](docs/MirroringUpstreamApi.md#getprojectbyid) | **GET** /mirroring/latest/projects/{projectId} | Get project
*MirroringUpstreamApi* | [**getRepositoryMirrors**](docs/MirroringUpstreamApi.md#getrepositorymirrors) | **GET** /mirroring/latest/repos/{repoId}/mirrors | Get mirrors for repository
*MirroringUpstreamApi* | [**listMirrors**](docs/MirroringUpstreamApi.md#listmirrors) | **GET** /mirroring/latest/mirrorServers | Get all mirrors
*MirroringUpstreamApi* | [**listRequests**](docs/MirroringUpstreamApi.md#listrequests) | **GET** /mirroring/latest/requests | Get mirroring requests
*MirroringUpstreamApi* | [**publishEvent**](docs/MirroringUpstreamApi.md#publishevent) | **POST** /mirroring/latest/mirrorServers/{mirrorId}/events | Publish RepositoryMirrorEvent
*MirroringUpstreamApi* | [**register**](docs/MirroringUpstreamApi.md#register) | **POST** /mirroring/latest/requests | Create a mirroring request
*MirroringUpstreamApi* | [**reject**](docs/MirroringUpstreamApi.md#reject) | **POST** /mirroring/latest/requests/{mirroringRequestId}/reject | Reject a mirroring request
*MirroringUpstreamApi* | [**remove**](docs/MirroringUpstreamApi.md#remove) | **DELETE** /mirroring/latest/mirrorServers/{mirrorId} | Delete mirror by ID
*MirroringUpstreamApi* | [**setPreferredMirrorId**](docs/MirroringUpstreamApi.md#setpreferredmirrorid) | **POST** /mirroring/latest/account/settings/preferred-mirror | Set preferred mirror
*MirroringUpstreamApi* | [**upgrade**](docs/MirroringUpstreamApi.md#upgrade) | **PUT** /mirroring/latest/mirrorServers/{mirrorId} | Upgrade mirror server
*PermissionManagementApi* | [**addGroupToUser**](docs/PermissionManagementApi.md#addgrouptouser) | **POST** /api/latest/admin/users/add-group | Add user to group
*PermissionManagementApi* | [**addUserToGroup**](docs/PermissionManagementApi.md#addusertogroup) | **POST** /api/latest/admin/groups/add-user | Add user to group
*PermissionManagementApi* | [**addUserToGroups**](docs/PermissionManagementApi.md#addusertogroups) | **POST** /api/latest/admin/users/add-groups | Add user to groups
*PermissionManagementApi* | [**addUsersToGroup**](docs/PermissionManagementApi.md#adduserstogroup) | **POST** /api/latest/admin/groups/add-users | Add multiple users to group
*PermissionManagementApi* | [**clearUserCaptchaChallenge**](docs/PermissionManagementApi.md#clearusercaptchachallenge) | **DELETE** /api/latest/admin/users/captcha | Clear CAPTCHA for user
*PermissionManagementApi* | [**createGroup**](docs/PermissionManagementApi.md#creategroup) | **POST** /api/latest/admin/groups | Create group
*PermissionManagementApi* | [**createUser**](docs/PermissionManagementApi.md#createuser) | **POST** /api/latest/admin/users | Create user
*PermissionManagementApi* | [**deleteGroup**](docs/PermissionManagementApi.md#deletegroup) | **DELETE** /api/latest/admin/groups | Remove group
*PermissionManagementApi* | [**deleteUser**](docs/PermissionManagementApi.md#deleteuser) | **DELETE** /api/latest/admin/users | Remove user
*PermissionManagementApi* | [**eraseUser**](docs/PermissionManagementApi.md#eraseuser) | **POST** /api/latest/admin/users/erasure | Erase user information
*PermissionManagementApi* | [**findGroupsForUser**](docs/PermissionManagementApi.md#findgroupsforuser) | **GET** /api/latest/admin/users/more-members | Get groups for user
*PermissionManagementApi* | [**findOtherGroupsForUser**](docs/PermissionManagementApi.md#findothergroupsforuser) | **GET** /api/latest/admin/users/more-non-members | Find other groups for user
*PermissionManagementApi* | [**findUsersInGroup**](docs/PermissionManagementApi.md#findusersingroup) | **GET** /api/latest/admin/groups/more-members | Get group members
*PermissionManagementApi* | [**findUsersNotInGroup**](docs/PermissionManagementApi.md#findusersnotingroup) | **GET** /api/latest/admin/groups/more-non-members | Get members not in group
*PermissionManagementApi* | [**getGroups**](docs/PermissionManagementApi.md#getgroups) | **GET** /api/latest/groups | Get group names
*PermissionManagementApi* | [**getGroups1**](docs/PermissionManagementApi.md#getgroups1) | **GET** /api/latest/admin/groups | Get groups
*PermissionManagementApi* | [**getGroupsWithAnyPermission**](docs/PermissionManagementApi.md#getgroupswithanypermission) | **GET** /api/latest/admin/permissions/groups | Get groups with a global permission
*PermissionManagementApi* | [**getGroupsWithAnyPermission2**](docs/PermissionManagementApi.md#getgroupswithanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Get groups with permission to repository
*PermissionManagementApi* | [**getGroupsWithoutAnyPermission**](docs/PermissionManagementApi.md#getgroupswithoutanypermission) | **GET** /api/latest/admin/permissions/groups/none | Get groups with no global permission
*PermissionManagementApi* | [**getGroupsWithoutAnyPermission2**](docs/PermissionManagementApi.md#getgroupswithoutanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none | Get groups without repository permission
*PermissionManagementApi* | [**getUserDirectories**](docs/PermissionManagementApi.md#getuserdirectories) | **GET** /api/latest/admin/user-directories | Get directories
*PermissionManagementApi* | [**getUsers1**](docs/PermissionManagementApi.md#getusers1) | **GET** /api/latest/admin/users | Get users
*PermissionManagementApi* | [**getUsersWithAnyPermission**](docs/PermissionManagementApi.md#getuserswithanypermission) | **GET** /api/latest/admin/permissions/users | Get users with a global permission
*PermissionManagementApi* | [**getUsersWithAnyPermission2**](docs/PermissionManagementApi.md#getuserswithanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Get users with permission to repository
*PermissionManagementApi* | [**getUsersWithoutAnyPermission**](docs/PermissionManagementApi.md#getuserswithoutanypermission) | **GET** /api/latest/admin/permissions/users/none | Get users with no global permission
*PermissionManagementApi* | [**getUsersWithoutPermission1**](docs/PermissionManagementApi.md#getuserswithoutpermission1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none | Get users without repository permission
*PermissionManagementApi* | [**removeGroupFromUser**](docs/PermissionManagementApi.md#removegroupfromuser) | **POST** /api/latest/admin/users/remove-group | Remove user from group
*PermissionManagementApi* | [**removeUserFromGroup**](docs/PermissionManagementApi.md#removeuserfromgroup) | **POST** /api/latest/admin/groups/remove-user | Remove user from group
*PermissionManagementApi* | [**renameUser**](docs/PermissionManagementApi.md#renameuser) | **POST** /api/latest/admin/users/rename | Rename user
*PermissionManagementApi* | [**revokePermissions1**](docs/PermissionManagementApi.md#revokepermissions1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions | Revoke all repository permissions for users and groups
*PermissionManagementApi* | [**revokePermissionsForGroup**](docs/PermissionManagementApi.md#revokepermissionsforgroup) | **DELETE** /api/latest/admin/permissions/groups | Revoke all global permissions for group
*PermissionManagementApi* | [**revokePermissionsForGroup2**](docs/PermissionManagementApi.md#revokepermissionsforgroup2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Revoke group repository permission
*PermissionManagementApi* | [**revokePermissionsForUser**](docs/PermissionManagementApi.md#revokepermissionsforuser) | **DELETE** /api/latest/admin/permissions/users | Revoke all global permissions for user
*PermissionManagementApi* | [**revokePermissionsForUser2**](docs/PermissionManagementApi.md#revokepermissionsforuser2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Revoke user repository permission
*PermissionManagementApi* | [**searchPermissions1**](docs/PermissionManagementApi.md#searchpermissions1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search | Search repository permissions
*PermissionManagementApi* | [**setPermissionForGroup**](docs/PermissionManagementApi.md#setpermissionforgroup) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Update group repository permission
*PermissionManagementApi* | [**setPermissionForGroups**](docs/PermissionManagementApi.md#setpermissionforgroups) | **PUT** /api/latest/admin/permissions/groups | Update global permission for group
*PermissionManagementApi* | [**setPermissionForUser**](docs/PermissionManagementApi.md#setpermissionforuser) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Update user repository permission
*PermissionManagementApi* | [**setPermissionForUsers**](docs/PermissionManagementApi.md#setpermissionforusers) | **PUT** /api/latest/admin/permissions/users | Update global permission for user
*PermissionManagementApi* | [**updateUserDetails**](docs/PermissionManagementApi.md#updateuserdetails) | **PUT** /api/latest/admin/users | Update user details
*PermissionManagementApi* | [**updateUserPassword**](docs/PermissionManagementApi.md#updateuserpassword) | **PUT** /api/latest/admin/users/credentials | Set password for user
*PermissionManagementApi* | [**validateErasable**](docs/PermissionManagementApi.md#validateerasable) | **GET** /api/latest/admin/users/erasure | Check user removal
*ProjectApi* | [**addDefaultTask**](docs/ProjectApi.md#adddefaulttask) | **POST** /default-tasks/latest/projects/{projectKey}/tasks | Add a default task
*ProjectApi* | [**create3**](docs/ProjectApi.md#create3) | **POST** /api/latest/projects/{projectKey}/settings-restriction | Enforce project restriction
*ProjectApi* | [**createProject**](docs/ProjectApi.md#createproject) | **POST** /api/latest/projects | Create a new project
*ProjectApi* | [**createRepository**](docs/ProjectApi.md#createrepository) | **POST** /api/latest/projects/{projectKey}/repos | Create repository
*ProjectApi* | [**createRestrictions**](docs/ProjectApi.md#createrestrictions) | **POST** /branch-permissions/latest/projects/{projectKey}/restrictions | Create multiple ref restrictions
*ProjectApi* | [**createWebhook**](docs/ProjectApi.md#createwebhook) | **POST** /api/latest/projects/{projectKey}/webhooks | Create webhook
*ProjectApi* | [**delete4**](docs/ProjectApi.md#delete4) | **DELETE** /api/latest/projects/{projectKey}/settings/auto-merge | Delete pull request auto-merge settings
*ProjectApi* | [**delete9**](docs/ProjectApi.md#delete9) | **DELETE** /api/latest/projects/{projectKey}/settings-restriction | Stop enforcing project restriction
*ProjectApi* | [**deleteAllDefaultTasks**](docs/ProjectApi.md#deletealldefaulttasks) | **DELETE** /default-tasks/latest/projects/{projectKey}/tasks | Deletes all default tasks for the project
*ProjectApi* | [**deleteAutoDeclineSettings**](docs/ProjectApi.md#deleteautodeclinesettings) | **DELETE** /api/latest/projects/{projectKey}/settings/auto-decline | Delete auto decline settings
*ProjectApi* | [**deleteDefaultTask**](docs/ProjectApi.md#deletedefaulttask) | **DELETE** /default-tasks/latest/projects/{projectKey}/tasks/{taskId} | Delete a specific default task
*ProjectApi* | [**deleteProject**](docs/ProjectApi.md#deleteproject) | **DELETE** /api/latest/projects/{projectKey} | Delete project
*ProjectApi* | [**deleteRepository**](docs/ProjectApi.md#deleterepository) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Delete repository
*ProjectApi* | [**deleteRestriction**](docs/ProjectApi.md#deleterestriction) | **DELETE** /branch-permissions/latest/projects/{projectKey}/restrictions/{id} | Delete a ref restriction
*ProjectApi* | [**deleteWebhook**](docs/ProjectApi.md#deletewebhook) | **DELETE** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Delete webhook
*ProjectApi* | [**disableHook**](docs/ProjectApi.md#disablehook) | **DELETE** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled | Disable repository hook
*ProjectApi* | [**enableHook**](docs/ProjectApi.md#enablehook) | **PUT** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled | Enable repository hook
*ProjectApi* | [**findWebhooks**](docs/ProjectApi.md#findwebhooks) | **GET** /api/latest/projects/{projectKey}/webhooks | Find webhooks
*ProjectApi* | [**forkRepository**](docs/ProjectApi.md#forkrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Fork repository
*ProjectApi* | [**get4**](docs/ProjectApi.md#get4) | **GET** /api/latest/projects/{projectKey}/settings/auto-merge | Get pull request auto-merge settings
*ProjectApi* | [**get7**](docs/ProjectApi.md#get7) | **GET** /api/latest/projects/{projectKey}/settings-restriction | Get enforcing project setting
*ProjectApi* | [**getAll**](docs/ProjectApi.md#getall) | **GET** /api/latest/projects/{projectKey}/settings-restriction/all | Get all enforcing project settings
*ProjectApi* | [**getAutoDeclineSettings**](docs/ProjectApi.md#getautodeclinesettings) | **GET** /api/latest/projects/{projectKey}/settings/auto-decline | Get auto decline settings
*ProjectApi* | [**getAvatar**](docs/ProjectApi.md#getavatar) | **GET** /api/latest/hooks/{hookKey}/avatar | Get project avatar
*ProjectApi* | [**getConfigurations**](docs/ProjectApi.md#getconfigurations) | **GET** /api/latest/projects/{projectKey}/hook-scripts | Get configured hook scripts
*ProjectApi* | [**getDefaultBranch2**](docs/ProjectApi.md#getdefaultbranch2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch | Get repository default branch
*ProjectApi* | [**getDefaultTasks**](docs/ProjectApi.md#getdefaulttasks) | **GET** /default-tasks/latest/projects/{projectKey}/tasks | Get a page of default tasks
*ProjectApi* | [**getForkedRepositories**](docs/ProjectApi.md#getforkedrepositories) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/forks | Get repository forks
*ProjectApi* | [**getGroupsWithAnyPermission1**](docs/ProjectApi.md#getgroupswithanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/groups | Get groups with permission to project
*ProjectApi* | [**getGroupsWithoutAnyPermission1**](docs/ProjectApi.md#getgroupswithoutanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/groups/none | Get groups without project permission
*ProjectApi* | [**getLatestInvocation**](docs/ProjectApi.md#getlatestinvocation) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/latest | Get last webhook invocation details
*ProjectApi* | [**getProject**](docs/ProjectApi.md#getproject) | **GET** /api/latest/projects/{projectKey} | Get a project
*ProjectApi* | [**getProjectAvatar**](docs/ProjectApi.md#getprojectavatar) | **GET** /api/latest/projects/{projectKey}/avatar.png | Get avatar for project
*ProjectApi* | [**getProjects**](docs/ProjectApi.md#getprojects) | **GET** /api/latest/projects | Get projects
*ProjectApi* | [**getPullRequestSettings**](docs/ProjectApi.md#getpullrequestsettings) | **GET** /api/latest/projects/{projectKey}/settings/pull-requests/{scmId} | Get merge strategy
*ProjectApi* | [**getRelatedRepositories**](docs/ProjectApi.md#getrelatedrepositories) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/related | Get related repository
*ProjectApi* | [**getRepositories**](docs/ProjectApi.md#getrepositories) | **GET** /api/latest/projects/{projectKey}/repos | Get repositories for project
*ProjectApi* | [**getRepository**](docs/ProjectApi.md#getrepository) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Get repository
*ProjectApi* | [**getRepositoryHook**](docs/ProjectApi.md#getrepositoryhook) | **GET** /api/latest/projects/{projectKey}/settings/hooks/{hookKey} | Get a repository hook
*ProjectApi* | [**getRepositoryHooks**](docs/ProjectApi.md#getrepositoryhooks) | **GET** /api/latest/projects/{projectKey}/settings/hooks | Get repository hooks
*ProjectApi* | [**getRestriction**](docs/ProjectApi.md#getrestriction) | **GET** /branch-permissions/latest/projects/{projectKey}/restrictions/{id} | Get a ref restriction
*ProjectApi* | [**getRestrictions**](docs/ProjectApi.md#getrestrictions) | **GET** /branch-permissions/latest/projects/{projectKey}/restrictions | Search for ref restrictions
*ProjectApi* | [**getSettings**](docs/ProjectApi.md#getsettings) | **GET** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings | Get repository hook settings
*ProjectApi* | [**getStatistics**](docs/ProjectApi.md#getstatistics) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics | Get webhook statistics
*ProjectApi* | [**getStatisticsSummary**](docs/ProjectApi.md#getstatisticssummary) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary | Get webhook statistics summary
*ProjectApi* | [**getUsersWithAnyPermission1**](docs/ProjectApi.md#getuserswithanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/users | Get users with permission to project
*ProjectApi* | [**getUsersWithoutPermission**](docs/ProjectApi.md#getuserswithoutpermission) | **GET** /api/latest/projects/{projectKey}/permissions/users/none | Get users without project permission
*ProjectApi* | [**getWebhook**](docs/ProjectApi.md#getwebhook) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Get webhook
*ProjectApi* | [**hasAllUserPermission**](docs/ProjectApi.md#hasalluserpermission) | **GET** /api/latest/projects/{projectKey}/permissions/{permission}/all | Check default project permission
*ProjectApi* | [**modifyAllUserPermission**](docs/ProjectApi.md#modifyalluserpermission) | **POST** /api/latest/projects/{projectKey}/permissions/{permission}/all | Grant project permission
*ProjectApi* | [**removeConfiguration**](docs/ProjectApi.md#removeconfiguration) | **DELETE** /api/latest/projects/{projectKey}/hook-scripts/{scriptId} | Remove a hook script
*ProjectApi* | [**retryCreateRepository**](docs/ProjectApi.md#retrycreaterepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate | Retry repository creation
*ProjectApi* | [**revokePermissions**](docs/ProjectApi.md#revokepermissions) | **DELETE** /api/latest/projects/{projectKey}/permissions | Revoke project permissions
*ProjectApi* | [**revokePermissionsForGroup1**](docs/ProjectApi.md#revokepermissionsforgroup1) | **DELETE** /api/latest/projects/{projectKey}/permissions/groups | Revoke group project permission
*ProjectApi* | [**revokePermissionsForUser1**](docs/ProjectApi.md#revokepermissionsforuser1) | **DELETE** /api/latest/projects/{projectKey}/permissions/users | Revoke user project permission
*ProjectApi* | [**searchPermissions**](docs/ProjectApi.md#searchpermissions) | **GET** /api/latest/projects/{projectKey}/permissions/search | Search project permissions
*ProjectApi* | [**set**](docs/ProjectApi.md#set) | **PUT** /api/latest/projects/{projectKey}/settings/auto-merge | Create or update the pull request auto-merge settings
*ProjectApi* | [**setAutoDeclineSettings**](docs/ProjectApi.md#setautodeclinesettings) | **PUT** /api/latest/projects/{projectKey}/settings/auto-decline | Create/Update auto decline settings
*ProjectApi* | [**setConfiguration**](docs/ProjectApi.md#setconfiguration) | **PUT** /api/latest/projects/{projectKey}/hook-scripts/{scriptId} | Create/update a hook script
*ProjectApi* | [**setDefaultBranch2**](docs/ProjectApi.md#setdefaultbranch2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch | Update default branch for repository
*ProjectApi* | [**setPermissionForGroups1**](docs/ProjectApi.md#setpermissionforgroups1) | **PUT** /api/latest/projects/{projectKey}/permissions/groups | Update group project permission
*ProjectApi* | [**setPermissionForUsers1**](docs/ProjectApi.md#setpermissionforusers1) | **PUT** /api/latest/projects/{projectKey}/permissions/users | Update user project permission
*ProjectApi* | [**setSettings**](docs/ProjectApi.md#setsettings) | **PUT** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings | Update repository hook settings
*ProjectApi* | [**streamContributing**](docs/ProjectApi.md#streamcontributing) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing | Get repository contributing guidelines
*ProjectApi* | [**streamLicense**](docs/ProjectApi.md#streamlicense) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/license | Get repository license
*ProjectApi* | [**streamReadme**](docs/ProjectApi.md#streamreadme) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/readme | Get repository readme
*ProjectApi* | [**testWebhook**](docs/ProjectApi.md#testwebhook) | **POST** /api/latest/projects/{projectKey}/webhooks/test | Test webhook
*ProjectApi* | [**updateDefaultTask**](docs/ProjectApi.md#updatedefaulttask) | **PUT** /default-tasks/latest/projects/{projectKey}/tasks/{taskId} | Update a default task
*ProjectApi* | [**updateProject**](docs/ProjectApi.md#updateproject) | **PUT** /api/latest/projects/{projectKey} | Update project
*ProjectApi* | [**updatePullRequestSettings**](docs/ProjectApi.md#updatepullrequestsettings) | **POST** /api/latest/projects/{projectKey}/settings/pull-requests/{scmId} | Update merge strategy
*ProjectApi* | [**updateRepository**](docs/ProjectApi.md#updaterepository) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Update repository
*ProjectApi* | [**updateWebhook**](docs/ProjectApi.md#updatewebhook) | **PUT** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Update webhook
*ProjectApi* | [**uploadAvatar**](docs/ProjectApi.md#uploadavatar) | **POST** /api/latest/projects/{projectKey}/avatar.png | Update project avatar
*PullRequestsApi* | [**applySuggestion**](docs/PullRequestsApi.md#applysuggestion) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion | Apply pull request suggestion
*PullRequestsApi* | [**approve**](docs/PullRequestsApi.md#approve) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Approve pull request
*PullRequestsApi* | [**assignParticipantRole**](docs/PullRequestsApi.md#assignparticipantrole) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Assign pull request participant role
*PullRequestsApi* | [**canMerge**](docs/PullRequestsApi.md#canmerge) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge | Test if pull request can be merged
*PullRequestsApi* | [**canRebase**](docs/PullRequestsApi.md#canrebase) | **GET** /git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase | Check PR rebase precondition
*PullRequestsApi* | [**cancelAutoMerge**](docs/PullRequestsApi.md#cancelautomerge) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Cancel auto-merge for pull request
*PullRequestsApi* | [**create**](docs/PullRequestsApi.md#create) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests | Create pull request
*PullRequestsApi* | [**create1**](docs/PullRequestsApi.md#create1) | **POST** /api/latest/projects/{projectKey}/settings/reviewer-groups | Create reviewer group
*PullRequestsApi* | [**create2**](docs/PullRequestsApi.md#create2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups | Create reviewer group
*PullRequestsApi* | [**createComment1**](docs/PullRequestsApi.md#createcomment1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments | Add new blocker comment
*PullRequestsApi* | [**createComment2**](docs/PullRequestsApi.md#createcomment2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments | Add pull request comment
*PullRequestsApi* | [**createPullRequestCondition**](docs/PullRequestsApi.md#createpullrequestcondition) | **POST** /default-reviewers/latest/projects/{projectKey}/condition | Create default reviewer condition
*PullRequestsApi* | [**createPullRequestCondition1**](docs/PullRequestsApi.md#createpullrequestcondition1) | **POST** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition | Create default reviewer condition
*PullRequestsApi* | [**decline**](docs/PullRequestsApi.md#decline) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline | Decline pull request
*PullRequestsApi* | [**delete3**](docs/PullRequestsApi.md#delete3) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Delete pull request
*PullRequestsApi* | [**delete6**](docs/PullRequestsApi.md#delete6) | **DELETE** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Delete reviewer group
*PullRequestsApi* | [**delete7**](docs/PullRequestsApi.md#delete7) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Delete reviewer group
*PullRequestsApi* | [**deleteComment1**](docs/PullRequestsApi.md#deletecomment1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Delete pull request comment
*PullRequestsApi* | [**deleteComment2**](docs/PullRequestsApi.md#deletecomment2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Delete a pull request comment
*PullRequestsApi* | [**deletePullRequestCondition**](docs/PullRequestsApi.md#deletepullrequestcondition) | **DELETE** /default-reviewers/latest/projects/{projectKey}/condition/{id} | Delete default reviewer condition
*PullRequestsApi* | [**deletePullRequestCondition1**](docs/PullRequestsApi.md#deletepullrequestcondition1) | **DELETE** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Delete default reviewer condition
*PullRequestsApi* | [**discardReview**](docs/PullRequestsApi.md#discardreview) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Discard pull request review
*PullRequestsApi* | [**finishReview**](docs/PullRequestsApi.md#finishreview) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Complete pull request review
*PullRequestsApi* | [**get3**](docs/PullRequestsApi.md#get3) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Get pull request
*PullRequestsApi* | [**getActivities**](docs/PullRequestsApi.md#getactivities) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities | Get pull request activity
*PullRequestsApi* | [**getAutoMergeRequest**](docs/PullRequestsApi.md#getautomergerequest) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Get auto-merge request for pull request
*PullRequestsApi* | [**getComment1**](docs/PullRequestsApi.md#getcomment1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Get pull request comment
*PullRequestsApi* | [**getComment2**](docs/PullRequestsApi.md#getcomment2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Get a pull request comment
*PullRequestsApi* | [**getComments1**](docs/PullRequestsApi.md#getcomments1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments | Search pull request comments
*PullRequestsApi* | [**getComments2**](docs/PullRequestsApi.md#getcomments2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments | Get pull request comments for path
*PullRequestsApi* | [**getCommitMessageSuggestion**](docs/PullRequestsApi.md#getcommitmessagesuggestion) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion | Get commit message suggestion
*PullRequestsApi* | [**getCommits1**](docs/PullRequestsApi.md#getcommits1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits | Get pull request commits
*PullRequestsApi* | [**getDiffStatsSummary2**](docs/PullRequestsApi.md#getdiffstatssummary2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path} | Get diff stats summary for pull request
*PullRequestsApi* | [**getMergeBase1**](docs/PullRequestsApi.md#getmergebase1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base | Get the common ancestor between the latest commits of the source and target branches of the pull request
*PullRequestsApi* | [**getMergeConfig**](docs/PullRequestsApi.md#getmergeconfig) | **GET** /api/latest/admin/pull-requests/{scmId} | Get merge strategies
*PullRequestsApi* | [**getPage**](docs/PullRequestsApi.md#getpage) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests | Get pull requests for repository
*PullRequestsApi* | [**getPullRequestConditions**](docs/PullRequestsApi.md#getpullrequestconditions) | **GET** /default-reviewers/latest/projects/{projectKey}/conditions | Get default reviewer conditions
*PullRequestsApi* | [**getPullRequestConditions1**](docs/PullRequestsApi.md#getpullrequestconditions1) | **GET** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions | Get default reviewer conditions
*PullRequestsApi* | [**getPullRequests**](docs/PullRequestsApi.md#getpullrequests) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests | Get repository pull requests containing commit
*PullRequestsApi* | [**getReview**](docs/PullRequestsApi.md#getreview) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Get pull request comment thread
*PullRequestsApi* | [**getReviewerGroup**](docs/PullRequestsApi.md#getreviewergroup) | **GET** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Get reviewer group
*PullRequestsApi* | [**getReviewerGroup1**](docs/PullRequestsApi.md#getreviewergroup1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Get reviewer group
*PullRequestsApi* | [**getReviewerGroups**](docs/PullRequestsApi.md#getreviewergroups) | **GET** /api/latest/projects/{projectKey}/settings/reviewer-groups | Get all reviewer groups
*PullRequestsApi* | [**getReviewerGroups1**](docs/PullRequestsApi.md#getreviewergroups1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups | Get all reviewer groups
*PullRequestsApi* | [**getReviewers**](docs/PullRequestsApi.md#getreviewers) | **GET** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers | Get required reviewers for PR creation
*PullRequestsApi* | [**getUsers**](docs/PullRequestsApi.md#getusers) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users | Get reviewer group users
*PullRequestsApi* | [**listParticipants**](docs/PullRequestsApi.md#listparticipants) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Get pull request participants
*PullRequestsApi* | [**merge**](docs/PullRequestsApi.md#merge) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge | Merge pull request
*PullRequestsApi* | [**react1**](docs/PullRequestsApi.md#react1) | **PUT** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon} | React to a PR comment
*PullRequestsApi* | [**rebase**](docs/PullRequestsApi.md#rebase) | **POST** /git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase | Rebase pull request
*PullRequestsApi* | [**reopen**](docs/PullRequestsApi.md#reopen) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen | Re-open pull request
*PullRequestsApi* | [**search**](docs/PullRequestsApi.md#search) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/participants | Search pull request participants
*PullRequestsApi* | [**setMergeConfig**](docs/PullRequestsApi.md#setmergeconfig) | **POST** /api/latest/admin/pull-requests/{scmId} | Update merge strategies
*PullRequestsApi* | [**streamChanges1**](docs/PullRequestsApi.md#streamchanges1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes | Gets pull request changes
*PullRequestsApi* | [**streamDiff2**](docs/PullRequestsApi.md#streamdiff2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path} | Stream a diff within a pull request
*PullRequestsApi* | [**streamPatch1**](docs/PullRequestsApi.md#streampatch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch | Stream pull request as patch
*PullRequestsApi* | [**streamRawDiff2**](docs/PullRequestsApi.md#streamrawdiff2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff | Stream raw pull request diff
*PullRequestsApi* | [**tryAutoMerge**](docs/PullRequestsApi.md#tryautomerge) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Auto-merge pull request
*PullRequestsApi* | [**unReact1**](docs/PullRequestsApi.md#unreact1) | **DELETE** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon} | Remove a reaction from a PR comment
*PullRequestsApi* | [**unassignParticipantRole**](docs/PullRequestsApi.md#unassignparticipantrole) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} | Unassign pull request participant
*PullRequestsApi* | [**unassignParticipantRole1**](docs/PullRequestsApi.md#unassignparticipantrole1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Unassign pull request participant
*PullRequestsApi* | [**unwatch1**](docs/PullRequestsApi.md#unwatch1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch | Stop watching pull request
*PullRequestsApi* | [**update**](docs/PullRequestsApi.md#update) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Update pull request metadata
*PullRequestsApi* | [**update1**](docs/PullRequestsApi.md#update1) | **PUT** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Update reviewer group attributes
*PullRequestsApi* | [**update2**](docs/PullRequestsApi.md#update2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Update reviewer group attributes
*PullRequestsApi* | [**updateComment1**](docs/PullRequestsApi.md#updatecomment1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Update pull request comment
*PullRequestsApi* | [**updateComment2**](docs/PullRequestsApi.md#updatecomment2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Update pull request comment
*PullRequestsApi* | [**updatePullRequestCondition**](docs/PullRequestsApi.md#updatepullrequestcondition) | **PUT** /default-reviewers/latest/projects/{projectKey}/condition/{id} | Update default reviewer condition
*PullRequestsApi* | [**updatePullRequestCondition1**](docs/PullRequestsApi.md#updatepullrequestcondition1operation) | **PUT** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Update default reviewer condition
*PullRequestsApi* | [**updateStatus**](docs/PullRequestsApi.md#updatestatus) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} | Change pull request status
*PullRequestsApi* | [**watch1**](docs/PullRequestsApi.md#watch1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch | Watch pull request
*PullRequestsApi* | [**withdrawApproval**](docs/PullRequestsApi.md#withdrawapproval) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Unapprove pull request
*RepositoryApi* | [**addDefaultTask1**](docs/RepositoryApi.md#adddefaulttask1) | **POST** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Add a default task
*RepositoryApi* | [**addLabel**](docs/RepositoryApi.md#addlabel) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels | Add repository label
*RepositoryApi* | [**createBranch**](docs/RepositoryApi.md#createbranch) | **POST** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Create branch
*RepositoryApi* | [**createBranchForRepository**](docs/RepositoryApi.md#createbranchforrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Create branch
*RepositoryApi* | [**createComment**](docs/RepositoryApi.md#createcomment) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments | Add a new commit comment
*RepositoryApi* | [**createRestrictions1**](docs/RepositoryApi.md#createrestrictions1) | **POST** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions | Create multiple ref restrictions
*RepositoryApi* | [**createTag**](docs/RepositoryApi.md#createtag) | **POST** /git/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Create tag
*RepositoryApi* | [**createTagForRepository**](docs/RepositoryApi.md#createtagforrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Create tag
*RepositoryApi* | [**createWebhook1**](docs/RepositoryApi.md#createwebhook1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks | Create webhook
*RepositoryApi* | [**delete5**](docs/RepositoryApi.md#delete5) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Delete pull request auto-merge settings
*RepositoryApi* | [**deleteAllDefaultTasks1**](docs/RepositoryApi.md#deletealldefaulttasks1) | **DELETE** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Deletes all default tasks for the repository
*RepositoryApi* | [**deleteAttachment**](docs/RepositoryApi.md#deleteattachment) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId} | Delete an attachment
*RepositoryApi* | [**deleteAttachmentMetadata**](docs/RepositoryApi.md#deleteattachmentmetadata) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Delete attachment metadata
*RepositoryApi* | [**deleteAutoDeclineSettings1**](docs/RepositoryApi.md#deleteautodeclinesettings1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Delete auto decline settings
*RepositoryApi* | [**deleteBranch**](docs/RepositoryApi.md#deletebranch) | **DELETE** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Delete branch
*RepositoryApi* | [**deleteComment**](docs/RepositoryApi.md#deletecomment) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Delete a commit comment
*RepositoryApi* | [**deleteDefaultTask1**](docs/RepositoryApi.md#deletedefaulttask1) | **DELETE** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId} | Delete a specific default task
*RepositoryApi* | [**deleteRepositoryHook**](docs/RepositoryApi.md#deleterepositoryhook) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey} | Delete repository hook
*RepositoryApi* | [**deleteRestriction1**](docs/RepositoryApi.md#deleterestriction1) | **DELETE** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id} | Delete a ref restriction
*RepositoryApi* | [**deleteTag**](docs/RepositoryApi.md#deletetag) | **DELETE** /git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name} | Delete tag
*RepositoryApi* | [**deleteWebhook1**](docs/RepositoryApi.md#deletewebhook1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Delete webhook
*RepositoryApi* | [**disableHook1**](docs/RepositoryApi.md#disablehook1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled | Disable repository hook
*RepositoryApi* | [**editFile**](docs/RepositoryApi.md#editfile) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path} | Edit file
*RepositoryApi* | [**enableHook1**](docs/RepositoryApi.md#enablehook1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled | Enable repository hook
*RepositoryApi* | [**findBranches**](docs/RepositoryApi.md#findbranches) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches | Get branches with ref change activities for repository
*RepositoryApi* | [**findByCommit**](docs/RepositoryApi.md#findbycommit) | **GET** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId} | Get branch
*RepositoryApi* | [**findWebhooks1**](docs/RepositoryApi.md#findwebhooks1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks | Find webhooks
*RepositoryApi* | [**get5**](docs/RepositoryApi.md#get5) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Get pull request auto-merge settings
*RepositoryApi* | [**getAllLabelsForRepository**](docs/RepositoryApi.md#getalllabelsforrepository) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels | Get repository labels
*RepositoryApi* | [**getArchive**](docs/RepositoryApi.md#getarchive) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/archive | Stream archive of repository
*RepositoryApi* | [**getAttachment**](docs/RepositoryApi.md#getattachment) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId} | Get an attachment
*RepositoryApi* | [**getAttachmentMetadata**](docs/RepositoryApi.md#getattachmentmetadata) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Get attachment metadata
*RepositoryApi* | [**getAutoDeclineSettings1**](docs/RepositoryApi.md#getautodeclinesettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Get auto decline settings
*RepositoryApi* | [**getBranches**](docs/RepositoryApi.md#getbranches) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Find branches
*RepositoryApi* | [**getChanges**](docs/RepositoryApi.md#getchanges) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes | Get changes in commit
*RepositoryApi* | [**getChanges1**](docs/RepositoryApi.md#getchanges1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/changes | Get changes made in commit
*RepositoryApi* | [**getComment**](docs/RepositoryApi.md#getcomment) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Get a commit comment
*RepositoryApi* | [**getComments**](docs/RepositoryApi.md#getcomments) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments | Search for commit comments
*RepositoryApi* | [**getCommit**](docs/RepositoryApi.md#getcommit) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId} | Get commit by ID
*RepositoryApi* | [**getCommits**](docs/RepositoryApi.md#getcommits) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits | Get commits
*RepositoryApi* | [**getConfigurations1**](docs/RepositoryApi.md#getconfigurations1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts | Get hook scripts
*RepositoryApi* | [**getContent**](docs/RepositoryApi.md#getcontent) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse | Get file content at revision
*RepositoryApi* | [**getContent1**](docs/RepositoryApi.md#getcontent1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path} | Get file content
*RepositoryApi* | [**getDefaultBranch1**](docs/RepositoryApi.md#getdefaultbranch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Get default branch
*RepositoryApi* | [**getDefaultTasks1**](docs/RepositoryApi.md#getdefaulttasks1) | **GET** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Get a page of default tasks
*RepositoryApi* | [**getDiffStatsSummary**](docs/RepositoryApi.md#getdiffstatssummary) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path} | Get diff stats summary between revisions
*RepositoryApi* | [**getDiffStatsSummary1**](docs/RepositoryApi.md#getdiffstatssummary1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path} | Retrieve the diff stats summary between commits
*RepositoryApi* | [**getLatestInvocation1**](docs/RepositoryApi.md#getlatestinvocation1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest | Get last webhook invocation details
*RepositoryApi* | [**getMergeBase**](docs/RepositoryApi.md#getmergebase) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base | Get the common ancestor between two commits
*RepositoryApi* | [**getPullRequestSettings1**](docs/RepositoryApi.md#getpullrequestsettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests | Get pull request settings
*RepositoryApi* | [**getRefChangeActivity**](docs/RepositoryApi.md#getrefchangeactivity) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities | Get ref change activity
*RepositoryApi* | [**getRepositories1**](docs/RepositoryApi.md#getrepositories1) | **GET** /api/latest/repos | Search for repositories
*RepositoryApi* | [**getRepositoriesRecentlyAccessed**](docs/RepositoryApi.md#getrepositoriesrecentlyaccessed) | **GET** /api/latest/profile/recent/repos | Get recently accessed repositories
*RepositoryApi* | [**getRepositoryHook1**](docs/RepositoryApi.md#getrepositoryhook1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey} | Get repository hook
*RepositoryApi* | [**getRepositoryHooks1**](docs/RepositoryApi.md#getrepositoryhooks1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks | Get repository hooks
*RepositoryApi* | [**getRestriction1**](docs/RepositoryApi.md#getrestriction1) | **GET** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id} | Get a ref restriction
*RepositoryApi* | [**getRestrictions1**](docs/RepositoryApi.md#getrestrictions1) | **GET** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions | Search for ref restrictions
*RepositoryApi* | [**getSettings1**](docs/RepositoryApi.md#getsettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings | Get repository hook settings
*RepositoryApi* | [**getStatistics1**](docs/RepositoryApi.md#getstatistics1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics | Get webhook statistics
*RepositoryApi* | [**getStatisticsSummary1**](docs/RepositoryApi.md#getstatisticssummary1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary | Get webhook statistics summary
*RepositoryApi* | [**getStatus**](docs/RepositoryApi.md#getstatus) | **GET** /sync/latest/projects/{projectKey}/repos/{repositorySlug} | Get synchronization status
*RepositoryApi* | [**getTag**](docs/RepositoryApi.md#gettag) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name} | Get tag
*RepositoryApi* | [**getTags**](docs/RepositoryApi.md#gettags) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Find tag
*RepositoryApi* | [**getWebhook1**](docs/RepositoryApi.md#getwebhook1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Get webhook
*RepositoryApi* | [**react**](docs/RepositoryApi.md#react) | **PUT** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon} | React to a comment
*RepositoryApi* | [**removeConfiguration1**](docs/RepositoryApi.md#removeconfiguration1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId} | Remove a hook script
*RepositoryApi* | [**removeLabel**](docs/RepositoryApi.md#removelabel) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName} | Remove repository label
*RepositoryApi* | [**saveAttachmentMetadata**](docs/RepositoryApi.md#saveattachmentmetadata) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Save attachment metadata
*RepositoryApi* | [**searchWebhooks**](docs/RepositoryApi.md#searchwebhooks) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search | Search webhooks
*RepositoryApi* | [**set1**](docs/RepositoryApi.md#set1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Create or update the pull request auto-merge settings
*RepositoryApi* | [**setAutoDeclineSettings1**](docs/RepositoryApi.md#setautodeclinesettings1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Create auto decline settings
*RepositoryApi* | [**setConfiguration1**](docs/RepositoryApi.md#setconfiguration1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId} | Create/update a hook script
*RepositoryApi* | [**setDefaultBranch1**](docs/RepositoryApi.md#setdefaultbranch1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Update default branch
*RepositoryApi* | [**setEnabled**](docs/RepositoryApi.md#setenabled) | **POST** /sync/latest/projects/{projectKey}/repos/{repositorySlug} | Disable synchronization
*RepositoryApi* | [**setSettings1**](docs/RepositoryApi.md#setsettings1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings | Update repository hook settings
*RepositoryApi* | [**stream**](docs/RepositoryApi.md#stream) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified | Stream files
*RepositoryApi* | [**stream1**](docs/RepositoryApi.md#stream1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path} | Stream files with last modified commit in path
*RepositoryApi* | [**streamChanges**](docs/RepositoryApi.md#streamchanges) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes | Compare commits
*RepositoryApi* | [**streamCommits**](docs/RepositoryApi.md#streamcommits) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits | Get accessible commits
*RepositoryApi* | [**streamDiff**](docs/RepositoryApi.md#streamdiff) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path} | Get diff between revisions
*RepositoryApi* | [**streamDiff1**](docs/RepositoryApi.md#streamdiff1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path} | Get diff between commits
*RepositoryApi* | [**streamFiles**](docs/RepositoryApi.md#streamfiles) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/files | Get files in directory
*RepositoryApi* | [**streamFiles1**](docs/RepositoryApi.md#streamfiles1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path} | Get files in directory
*RepositoryApi* | [**streamPatch**](docs/RepositoryApi.md#streampatch) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/patch | Get patch content at revision
*RepositoryApi* | [**streamRaw**](docs/RepositoryApi.md#streamraw) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path} | Get raw content of a file at revision
*RepositoryApi* | [**streamRawDiff**](docs/RepositoryApi.md#streamrawdiff) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/diff | Get raw diff for path
*RepositoryApi* | [**streamRawDiff1**](docs/RepositoryApi.md#streamrawdiff1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path} | Get raw diff for path
*RepositoryApi* | [**synchronize**](docs/RepositoryApi.md#synchronize) | **POST** /sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize | Manual synchronization
*RepositoryApi* | [**testWebhook1**](docs/RepositoryApi.md#testwebhook1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test | Test webhook
*RepositoryApi* | [**unReact**](docs/RepositoryApi.md#unreact) | **DELETE** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon} | Remove a reaction from comment
*RepositoryApi* | [**unwatch**](docs/RepositoryApi.md#unwatch) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch | Stop watching commit
*RepositoryApi* | [**unwatch2**](docs/RepositoryApi.md#unwatch2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/watch | Stop watching repository
*RepositoryApi* | [**updateComment**](docs/RepositoryApi.md#updatecomment) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Update a commit comment
*RepositoryApi* | [**updateDefaultTask1**](docs/RepositoryApi.md#updatedefaulttask1) | **PUT** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId} | Update a default task
*RepositoryApi* | [**updatePullRequestSettings1**](docs/RepositoryApi.md#updatepullrequestsettings1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests | Update pull request settings
*RepositoryApi* | [**updateWebhook1**](docs/RepositoryApi.md#updatewebhook1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Update webhook
*RepositoryApi* | [**watch**](docs/RepositoryApi.md#watch) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch | Watch commit
*RepositoryApi* | [**watch2**](docs/RepositoryApi.md#watch2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/watch | Watch repository
*SecurityApi* | [**addExemptRepo**](docs/SecurityApi.md#addexemptrepo) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Exempt a repo from secret scanning
*SecurityApi* | [**addKey**](docs/SecurityApi.md#addkey) | **POST** /gpg/latest/keys | Create a GPG key
*SecurityApi* | [**bulkAddExemptRepositories**](docs/SecurityApi.md#bulkaddexemptrepositories) | **POST** /api/latest/secret-scanning/exempt | Bulk exempt repos from secret scanning
*SecurityApi* | [**bulkAddExemptRepositories1**](docs/SecurityApi.md#bulkaddexemptrepositories1) | **POST** /api/latest/projects/{projectKey}/secret-scanning/exempt | Bulk exempt repos from secret scanning
*SecurityApi* | [**createAllowlistRule**](docs/SecurityApi.md#createallowlistrule) | **POST** /api/latest/projects/{projectKey}/secret-scanning/allowlist | Create project secret scanning allowlist rule
*SecurityApi* | [**createAllowlistRule1**](docs/SecurityApi.md#createallowlistrule1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist | Create repository secret scanning allowlist rule
*SecurityApi* | [**createCertificate**](docs/SecurityApi.md#createcertificate) | **POST** /api/latest/signing/x509-certificates | Create an X.509 certificate
*SecurityApi* | [**createRule**](docs/SecurityApi.md#createrule) | **POST** /api/latest/projects/{projectKey}/secret-scanning/rules | Create project secret scanning rule
*SecurityApi* | [**createRule1**](docs/SecurityApi.md#createrule1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules | Create repository secret scanning rule
*SecurityApi* | [**createRule2**](docs/SecurityApi.md#createrule2) | **POST** /api/latest/secret-scanning/rules | Create global secret scanning rule
*SecurityApi* | [**deleteAllowlistRule**](docs/SecurityApi.md#deleteallowlistrule) | **DELETE** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Delete a project secret scanning allowlist rule
*SecurityApi* | [**deleteAllowlistRule1**](docs/SecurityApi.md#deleteallowlistrule1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Delete a repository secret scanning allowlist rule
*SecurityApi* | [**deleteCertificate**](docs/SecurityApi.md#deletecertificate) | **DELETE** /api/latest/signing/x509-certificates/{id} | Delete an X.509 certificate
*SecurityApi* | [**deleteExemptRepo**](docs/SecurityApi.md#deleteexemptrepo) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Delete an exempt repository
*SecurityApi* | [**deleteForUser**](docs/SecurityApi.md#deleteforuser) | **DELETE** /gpg/latest/keys | Delete all GPG keys for user
*SecurityApi* | [**deleteInactiveKeys**](docs/SecurityApi.md#deleteinactivekeys) | **DELETE** /secrets/1.0/keys/inactive | Delete inactive AES key(s)
*SecurityApi* | [**deleteKey**](docs/SecurityApi.md#deletekey) | **DELETE** /gpg/latest/keys/{fingerprintOrId} | Delete a GPG key
*SecurityApi* | [**deleteRule**](docs/SecurityApi.md#deleterule) | **DELETE** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Delete a project secret scanning rule
*SecurityApi* | [**deleteRule1**](docs/SecurityApi.md#deleterule1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Delete a repository secret scanning rule
*SecurityApi* | [**deleteRule2**](docs/SecurityApi.md#deleterule2) | **DELETE** /api/latest/secret-scanning/rules/{id} | Delete a global secret scanning rule
*SecurityApi* | [**editAllowlistRule**](docs/SecurityApi.md#editallowlistrule) | **PUT** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Edit an existing project secret scanning allowlist rule
*SecurityApi* | [**editAllowlistRule1**](docs/SecurityApi.md#editallowlistrule1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Edit an existing repository secret scanning allowlist rule
*SecurityApi* | [**editRule**](docs/SecurityApi.md#editrule) | **PUT** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Edit an existing project secret scanning rule
*SecurityApi* | [**editRule1**](docs/SecurityApi.md#editrule1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Edit an existing repository secret scanning rule
*SecurityApi* | [**editRule2**](docs/SecurityApi.md#editrule2) | **PUT** /api/latest/secret-scanning/rules/{id} | Edit a global secret scanning rule.
*SecurityApi* | [**findExemptReposByProject**](docs/SecurityApi.md#findexemptreposbyproject) | **GET** /api/latest/projects/{projectKey}/secret-scanning/exempt | Find repos exempt from secret scanning for a project
*SecurityApi* | [**findExemptReposByScope**](docs/SecurityApi.md#findexemptreposbyscope) | **GET** /api/latest/secret-scanning/exempt | Find all repos exempt from secret scan
*SecurityApi* | [**getAllCertificates**](docs/SecurityApi.md#getallcertificates) | **GET** /api/latest/signing/x509-certificates | Get all X.509 certificates
*SecurityApi* | [**getAllowlistRule**](docs/SecurityApi.md#getallowlistrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/allowlist/{id} | Get a project secret scanning allowlist rule
*SecurityApi* | [**getAllowlistRule1**](docs/SecurityApi.md#getallowlistrule1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist/{id} | Get a repository secret scanning allowlist rule
*SecurityApi* | [**getInactiveKeys**](docs/SecurityApi.md#getinactivekeys) | **GET** /secrets/1.0/keys/inactive | Retrieve inactive AES key(s)
*SecurityApi* | [**getKeysForUser**](docs/SecurityApi.md#getkeysforuser) | **GET** /gpg/latest/keys | Get all GPG keys
*SecurityApi* | [**getRule**](docs/SecurityApi.md#getrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/rules/{id} | Get a project secret scanning rule
*SecurityApi* | [**getRule1**](docs/SecurityApi.md#getrule1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules/{id} | Get a repository secret scanning rule
*SecurityApi* | [**getRule2**](docs/SecurityApi.md#getrule2) | **GET** /api/latest/secret-scanning/rules/{id} | Get a global secret scanning rule
*SecurityApi* | [**getSystemSigningConfiguration**](docs/SecurityApi.md#getsystemsigningconfiguration) | **GET** /api/latest/system-signing/configuration | Get system signing configuration
*SecurityApi* | [**isRepoExempt**](docs/SecurityApi.md#isrepoexempt) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/exempt | Get whether a repository is exempt
*SecurityApi* | [**rotateKey**](docs/SecurityApi.md#rotatekey) | **POST** /secrets/1.0/keys/rotate | Rotate the current AES key
*SecurityApi* | [**search1**](docs/SecurityApi.md#search1) | **GET** /api/latest/projects/{projectKey}/secret-scanning/rules | Find project secret scanning rules
*SecurityApi* | [**search2**](docs/SecurityApi.md#search2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/allowlist | Find repository secret scanning allowlist rules
*SecurityApi* | [**search3**](docs/SecurityApi.md#search3) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/secret-scanning/rules | Find repository secret scanning rules
*SecurityApi* | [**search4**](docs/SecurityApi.md#search4) | **GET** /api/latest/secret-scanning/rules | Find global secret scanning rules
*SecurityApi* | [**searchAllowlistRule**](docs/SecurityApi.md#searchallowlistrule) | **GET** /api/latest/projects/{projectKey}/secret-scanning/allowlist | Find project secret scanning allowlist rules
*SecurityApi* | [**updateCertificateRevocationListEntries**](docs/SecurityApi.md#updatecertificaterevocationlistentries) | **PUT** /api/latest/signing/x509-certificates/crl/{id} | Update X.509 CRL entries
*SecurityApi* | [**updateSystemSigningConfiguration**](docs/SecurityApi.md#updatesystemsigningconfigurationoperation) | **POST** /api/latest/system-signing/configuration | Update system signing configuration
*SystemMaintenanceApi* | [**cancelExportJob**](docs/SystemMaintenanceApi.md#cancelexportjob) | **POST** /api/latest/migration/exports/{jobId}/cancel | Cancel export job
*SystemMaintenanceApi* | [**cancelImportJob**](docs/SystemMaintenanceApi.md#cancelimportjob) | **POST** /api/latest/migration/imports/{jobId}/cancel | Cancel import job
*SystemMaintenanceApi* | [**cancelMeshMigrationJob**](docs/SystemMaintenanceApi.md#cancelmeshmigrationjob) | **POST** /api/latest/migration/mesh/{jobId}/cancel | Cancel Mesh migration job
*SystemMaintenanceApi* | [**clearDefaultBranch**](docs/SystemMaintenanceApi.md#cleardefaultbranch) | **DELETE** /api/latest/admin/default-branch | Clear default branch
*SystemMaintenanceApi* | [**clearSenderAddress**](docs/SystemMaintenanceApi.md#clearsenderaddress) | **DELETE** /api/latest/admin/mail-server/sender-address | Update mail configuration
*SystemMaintenanceApi* | [**connectivity**](docs/SystemMaintenanceApi.md#connectivity) | **GET** /api/latest/admin/git/mesh/diagnostics/connectivity | Generate Mesh connectivity report
*SystemMaintenanceApi* | [**createHookScript**](docs/SystemMaintenanceApi.md#createhookscript) | **POST** /api/latest/hook-scripts | Create a new hook script
*SystemMaintenanceApi* | [**delete2**](docs/SystemMaintenanceApi.md#delete2) | **DELETE** /api/latest/admin/git/mesh/nodes/{id} | Delete Mesh node
*SystemMaintenanceApi* | [**delete8**](docs/SystemMaintenanceApi.md#delete8) | **DELETE** /api/latest/admin/rate-limit/settings/users/{userSlug} | Delete user specific rate limit settings
*SystemMaintenanceApi* | [**deleteAvatar**](docs/SystemMaintenanceApi.md#deleteavatar) | **DELETE** /api/latest/users/{userSlug}/avatar.png | Delete user avatar
*SystemMaintenanceApi* | [**deleteBanner**](docs/SystemMaintenanceApi.md#deletebanner) | **DELETE** /api/latest/admin/banner | Delete announcement banner
*SystemMaintenanceApi* | [**deleteHookScript**](docs/SystemMaintenanceApi.md#deletehookscript) | **DELETE** /api/latest/hook-scripts/{scriptId} | Delete a hook script.
*SystemMaintenanceApi* | [**deleteMailConfig**](docs/SystemMaintenanceApi.md#deletemailconfig) | **DELETE** /api/latest/admin/mail-server | Delete mail configuration
*SystemMaintenanceApi* | [**dismissRetentionConfigReviewNotification**](docs/SystemMaintenanceApi.md#dismissretentionconfigreviewnotification) | **DELETE** /audit/latest/notification-settings/retention-config-review | Dismiss retention config notification
*SystemMaintenanceApi* | [**get2**](docs/SystemMaintenanceApi.md#get2) | **GET** /api/latest/admin/license | Get license details
*SystemMaintenanceApi* | [**get6**](docs/SystemMaintenanceApi.md#get6) | **GET** /api/latest/admin/rate-limit/settings/users/{userSlug} | Get user specific rate limit settings
*SystemMaintenanceApi* | [**getActiveMeshMigrationSummary**](docs/SystemMaintenanceApi.md#getactivemeshmigrationsummary) | **GET** /api/latest/migration/mesh/summary | Get summary for Mesh migration job
*SystemMaintenanceApi* | [**getAllMeshMigrationSummaries**](docs/SystemMaintenanceApi.md#getallmeshmigrationsummaries) | **GET** /api/latest/migration/mesh/summaries | Get all Mesh migration job summaries
*SystemMaintenanceApi* | [**getAllRateLimitSettings**](docs/SystemMaintenanceApi.md#getallratelimitsettings) | **GET** /api/latest/admin/rate-limit/settings/users | Get rate limit settings for user
*SystemMaintenanceApi* | [**getAllRegisteredMeshNodes**](docs/SystemMaintenanceApi.md#getallregisteredmeshnodes) | **GET** /api/latest/admin/git/mesh/nodes | Get all registered Mesh nodes
*SystemMaintenanceApi* | [**getApplicationProperties**](docs/SystemMaintenanceApi.md#getapplicationproperties) | **GET** /api/latest/application-properties | Get application properties
*SystemMaintenanceApi* | [**getBanner**](docs/SystemMaintenanceApi.md#getbanner) | **GET** /api/latest/admin/banner | Get announcement banner
*SystemMaintenanceApi* | [**getControlPlanePublicKey**](docs/SystemMaintenanceApi.md#getcontrolplanepublickey) | **GET** /api/latest/admin/git/mesh/config/control-plane.pem | Get the control plane PEM
*SystemMaintenanceApi* | [**getDefaultBranch**](docs/SystemMaintenanceApi.md#getdefaultbranch) | **GET** /api/latest/admin/default-branch | Get the default branch
*SystemMaintenanceApi* | [**getExportJob**](docs/SystemMaintenanceApi.md#getexportjob) | **GET** /api/latest/migration/exports/{jobId} | Get export job details
*SystemMaintenanceApi* | [**getExportJobMessages**](docs/SystemMaintenanceApi.md#getexportjobmessages) | **GET** /api/latest/migration/exports/{jobId}/messages | Get job messages
*SystemMaintenanceApi* | [**getGlobalSettings**](docs/SystemMaintenanceApi.md#getglobalsettings) | **GET** /admin | Get global SSH key settings
*SystemMaintenanceApi* | [**getHistory**](docs/SystemMaintenanceApi.md#gethistory) | **GET** /api/latest/admin/rate-limit/history | Get rate limit history
*SystemMaintenanceApi* | [**getHookScript**](docs/SystemMaintenanceApi.md#gethookscript) | **GET** /api/latest/hook-scripts/{scriptId} | Get a hook script
*SystemMaintenanceApi* | [**getImportJob**](docs/SystemMaintenanceApi.md#getimportjob) | **GET** /api/latest/migration/imports/{jobId} | Get import job status
*SystemMaintenanceApi* | [**getImportJobMessages**](docs/SystemMaintenanceApi.md#getimportjobmessages) | **GET** /api/latest/migration/imports/{jobId}/messages | Get import job messages
*SystemMaintenanceApi* | [**getInformation**](docs/SystemMaintenanceApi.md#getinformation) | **GET** /api/latest/admin/cluster | Get cluster node information
*SystemMaintenanceApi* | [**getLabel**](docs/SystemMaintenanceApi.md#getlabel) | **GET** /api/latest/labels/{labelName} | Get label
*SystemMaintenanceApi* | [**getLabelables**](docs/SystemMaintenanceApi.md#getlabelables) | **GET** /api/latest/labels/{labelName}/labeled | Get labelables for label
*SystemMaintenanceApi* | [**getLabels**](docs/SystemMaintenanceApi.md#getlabels) | **GET** /api/latest/labels | Get all labels
*SystemMaintenanceApi* | [**getLevel**](docs/SystemMaintenanceApi.md#getlevel) | **GET** /api/latest/logs/logger/{loggerName} | Get current log level
*SystemMaintenanceApi* | [**getMailConfig**](docs/SystemMaintenanceApi.md#getmailconfig) | **GET** /api/latest/admin/mail-server | Get mail configuration
*SystemMaintenanceApi* | [**getMeshMigrationJob**](docs/SystemMaintenanceApi.md#getmeshmigrationjob) | **GET** /api/latest/migration/mesh/{jobId} | Get Mesh migration job details
*SystemMaintenanceApi* | [**getMeshMigrationJobMessages**](docs/SystemMaintenanceApi.md#getmeshmigrationjobmessages) | **GET** /api/latest/migration/mesh/{jobId}/messages | Get Mesh migration job messages
*SystemMaintenanceApi* | [**getMeshMigrationJobSummary**](docs/SystemMaintenanceApi.md#getmeshmigrationjobsummary) | **GET** /api/latest/migration/mesh/{jobId}/summary | Get Mesh migration job summary
*SystemMaintenanceApi* | [**getRegisteredMeshNodeById**](docs/SystemMaintenanceApi.md#getregisteredmeshnodebyid) | **GET** /api/latest/admin/git/mesh/nodes/{id} | Get Mesh node
*SystemMaintenanceApi* | [**getRepositoryArchivePolicy**](docs/SystemMaintenanceApi.md#getrepositoryarchivepolicy) | **GET** /policies/latest/admin/repos/archive | Get repository archive policy
*SystemMaintenanceApi* | [**getRepositoryDeletePolicy**](docs/SystemMaintenanceApi.md#getrepositorydeletepolicy) | **GET** /policies/latest/admin/repos/delete | Get repository delete policy
*SystemMaintenanceApi* | [**getRootLevel**](docs/SystemMaintenanceApi.md#getrootlevel) | **GET** /api/latest/logs/rootLogger | Get root log level
*SystemMaintenanceApi* | [**getSenderAddress**](docs/SystemMaintenanceApi.md#getsenderaddress) | **GET** /api/latest/admin/mail-server/sender-address | Get server mail address
*SystemMaintenanceApi* | [**getSettings2**](docs/SystemMaintenanceApi.md#getsettings2) | **GET** /api/latest/logs/settings | Get debug logging and profiling
*SystemMaintenanceApi* | [**getSettings3**](docs/SystemMaintenanceApi.md#getsettings3) | **GET** /api/latest/admin/rate-limit/settings | Get rate limit settings
*SystemMaintenanceApi* | [**getSupportZip**](docs/SystemMaintenanceApi.md#getsupportzip) | **GET** /api/latest/admin/git/mesh/support-zips/{id} | Get support zip for node
*SystemMaintenanceApi* | [**getSupportZips**](docs/SystemMaintenanceApi.md#getsupportzips) | **GET** /api/latest/admin/git/mesh/support-zips | Get support zips for all Mesh nodes
*SystemMaintenanceApi* | [**getSupportedKeyTypes**](docs/SystemMaintenanceApi.md#getsupportedkeytypes) | **GET** /admin/supported-key-types | Get supported SSH key algorithms and lengths
*SystemMaintenanceApi* | [**getUser**](docs/SystemMaintenanceApi.md#getuser) | **GET** /api/latest/users/{userSlug} | Get user
*SystemMaintenanceApi* | [**getUserSettings**](docs/SystemMaintenanceApi.md#getusersettings) | **GET** /api/latest/users/{userSlug}/settings | Get user settings
*SystemMaintenanceApi* | [**getUsers2**](docs/SystemMaintenanceApi.md#getusers2) | **GET** /api/latest/users | Get all users
*SystemMaintenanceApi* | [**previewExport**](docs/SystemMaintenanceApi.md#previewexport) | **POST** /api/latest/migration/exports/preview | Preview export
*SystemMaintenanceApi* | [**previewMeshMigration**](docs/SystemMaintenanceApi.md#previewmeshmigration) | **POST** /api/latest/migration/mesh/preview | Preview Mesh migration
*SystemMaintenanceApi* | [**read**](docs/SystemMaintenanceApi.md#read) | **GET** /api/latest/hook-scripts/{scriptId}/content | Get hook script content
*SystemMaintenanceApi* | [**registerNewMeshNode**](docs/SystemMaintenanceApi.md#registernewmeshnode) | **POST** /api/latest/admin/git/mesh/nodes | Register new Mesh node
*SystemMaintenanceApi* | [**searchMeshMigrationRepos**](docs/SystemMaintenanceApi.md#searchmeshmigrationrepos) | **GET** /api/latest/migration/mesh/repos | Find repositories by Mesh migration state
*SystemMaintenanceApi* | [**set2**](docs/SystemMaintenanceApi.md#set2) | **POST** /api/latest/admin/rate-limit/settings/users | Set rate limit settings for users
*SystemMaintenanceApi* | [**set3**](docs/SystemMaintenanceApi.md#set3) | **PUT** /api/latest/admin/rate-limit/settings/users/{userSlug} | Set rate limit settings for user
*SystemMaintenanceApi* | [**setBanner**](docs/SystemMaintenanceApi.md#setbanneroperation) | **PUT** /api/latest/admin/banner | Update/Set announcement banner
*SystemMaintenanceApi* | [**setDefaultBranch**](docs/SystemMaintenanceApi.md#setdefaultbranchoperation) | **PUT** /api/latest/admin/default-branch | Update/Set default branch
*SystemMaintenanceApi* | [**setLevel**](docs/SystemMaintenanceApi.md#setlevel) | **PUT** /api/latest/logs/logger/{loggerName}/{levelName} | Set log level
*SystemMaintenanceApi* | [**setMailConfig**](docs/SystemMaintenanceApi.md#setmailconfigoperation) | **PUT** /api/latest/admin/mail-server | Update mail configuration
*SystemMaintenanceApi* | [**setRepositoryArchivePolicy**](docs/SystemMaintenanceApi.md#setrepositoryarchivepolicy) | **PUT** /policies/latest/admin/repos/archive | Update repository archive policy
*SystemMaintenanceApi* | [**setRepositoryDeletePolicy**](docs/SystemMaintenanceApi.md#setrepositorydeletepolicy) | **PUT** /policies/latest/admin/repos/delete | Update the repository delete policy
*SystemMaintenanceApi* | [**setRootLevel**](docs/SystemMaintenanceApi.md#setrootlevel) | **PUT** /api/latest/logs/rootLogger/{levelName} | Set root log level
*SystemMaintenanceApi* | [**setSenderAddress**](docs/SystemMaintenanceApi.md#setsenderaddress) | **PUT** /api/latest/admin/mail-server/sender-address | Update server mail address
*SystemMaintenanceApi* | [**setSettings2**](docs/SystemMaintenanceApi.md#setsettings2operation) | **PUT** /api/latest/logs/settings | Set debug logging and profiling
*SystemMaintenanceApi* | [**setSettings3**](docs/SystemMaintenanceApi.md#setsettings3) | **PUT** /api/latest/admin/rate-limit/settings | Set rate limit
*SystemMaintenanceApi* | [**startExport**](docs/SystemMaintenanceApi.md#startexport) | **POST** /api/latest/migration/exports | Start export job
*SystemMaintenanceApi* | [**startImport**](docs/SystemMaintenanceApi.md#startimport) | **POST** /api/latest/migration/imports | Start import job
*SystemMaintenanceApi* | [**startMeshMigration**](docs/SystemMaintenanceApi.md#startmeshmigrationoperation) | **POST** /api/latest/migration/mesh | Start Mesh migration job
*SystemMaintenanceApi* | [**updateGlobalSettings**](docs/SystemMaintenanceApi.md#updateglobalsettings) | **PUT** /admin | Update global SSH key settings
*SystemMaintenanceApi* | [**updateHookScript**](docs/SystemMaintenanceApi.md#updatehookscript) | **PUT** /api/latest/hook-scripts/{scriptId} | Update a hook script
*SystemMaintenanceApi* | [**updateLicense**](docs/SystemMaintenanceApi.md#updatelicense) | **POST** /api/latest/admin/license | Update license
*SystemMaintenanceApi* | [**updateMeshNode**](docs/SystemMaintenanceApi.md#updatemeshnode) | **PUT** /api/latest/admin/git/mesh/nodes/{id} | Update Mesh node
*SystemMaintenanceApi* | [**updateSettings**](docs/SystemMaintenanceApi.md#updatesettings) | **POST** /api/latest/users/{userSlug}/settings | Update user settings
*SystemMaintenanceApi* | [**updateUserDetails1**](docs/SystemMaintenanceApi.md#updateuserdetails1) | **PUT** /api/latest/users | Update user details
*SystemMaintenanceApi* | [**updateUserPassword1**](docs/SystemMaintenanceApi.md#updateuserpassword1) | **PUT** /api/latest/users/credentials | Set password
*SystemMaintenanceApi* | [**uploadAvatar1**](docs/SystemMaintenanceApi.md#uploadavatar1) | **POST** /api/latest/users/{userSlug}/avatar.png | Update user avatar


### Models

- [AddSshKeyRequest](docs/AddSshKeyRequest.md)
- [AdminPasswordUpdate](docs/AdminPasswordUpdate.md)
- [ApplicationUser](docs/ApplicationUser.md)
- [AuthenticationEntity](docs/AuthenticationEntity.md)
- [AuthenticationResponse](docs/AuthenticationResponse.md)
- [BasicAuthConfigEntity](docs/BasicAuthConfigEntity.md)
- [CaptchaDataEntity](docs/CaptchaDataEntity.md)
- [Comment](docs/Comment.md)
- [CommentOperations](docs/CommentOperations.md)
- [CommentThread](docs/CommentThread.md)
- [CommentThreadDiffAnchor](docs/CommentThreadDiffAnchor.md)
- [Context](docs/Context.md)
- [ConversationDTO](docs/ConversationDTO.md)
- [Credentials](docs/Credentials.md)
- [CredentialsCheckFailedDTO](docs/CredentialsCheckFailedDTO.md)
- [ElevationMethodRestDTO](docs/ElevationMethodRestDTO.md)
- [EnrichedRepository](docs/EnrichedRepository.md)
- [EnrichedRepositoryProperties](docs/EnrichedRepositoryProperties.md)
- [ErrorEntity](docs/ErrorEntity.md)
- [ExampleFiles](docs/ExampleFiles.md)
- [ExampleJsonLastModifiedCallback](docs/ExampleJsonLastModifiedCallback.md)
- [ExamplePreviewMigration](docs/ExamplePreviewMigration.md)
- [ExamplePutMultipartFormData](docs/ExamplePutMultipartFormData.md)
- [ExampleRequirements](docs/ExampleRequirements.md)
- [ExampleSettings](docs/ExampleSettings.md)
- [ExampleSettingsMap](docs/ExampleSettingsMap.md)
- [ExampleSocketAddress](docs/ExampleSocketAddress.md)
- [ExampleStatus](docs/ExampleStatus.md)
- [FilePart](docs/FilePart.md)
- [FindByCommit200Response](docs/FindByCommit200Response.md)
- [FindUsersInGroup200Response](docs/FindUsersInGroup200Response.md)
- [GetActivities200Response](docs/GetActivities200Response.md)
- [GetAll200Response](docs/GetAll200Response.md)
- [GetAllAccessTokens200Response](docs/GetAllAccessTokens200Response.md)
- [GetAllAccessTokens401Response](docs/GetAllAccessTokens401Response.md)
- [GetAllMeshMigrationSummaries200Response](docs/GetAllMeshMigrationSummaries200Response.md)
- [GetAllRateLimitSettings200Response](docs/GetAllRateLimitSettings200Response.md)
- [GetAllReposForProject200Response](docs/GetAllReposForProject200Response.md)
- [GetBranches200Response](docs/GetBranches200Response.md)
- [GetBuildStatus200Response](docs/GetBuildStatus200Response.md)
- [GetChanges1200Response](docs/GetChanges1200Response.md)
- [GetComments200Response](docs/GetComments200Response.md)
- [GetCommits200Response](docs/GetCommits200Response.md)
- [GetCommitsByIssueKey200Response](docs/GetCommitsByIssueKey200Response.md)
- [GetConfigurations200Response](docs/GetConfigurations200Response.md)
- [GetDefaultTasks1200Response](docs/GetDefaultTasks1200Response.md)
- [GetExportJobMessages200Response](docs/GetExportJobMessages200Response.md)
- [GetForRepository1200Response](docs/GetForRepository1200Response.md)
- [GetGroups1200Response](docs/GetGroups1200Response.md)
- [GetGroups200Response](docs/GetGroups200Response.md)
- [GetGroupsWithAnyPermission200Response](docs/GetGroupsWithAnyPermission200Response.md)
- [GetHistory200Response](docs/GetHistory200Response.md)
- [GetIdps200Response](docs/GetIdps200Response.md)
- [GetKeysForUser200Response](docs/GetKeysForUser200Response.md)
- [GetLabelables200Response](docs/GetLabelables200Response.md)
- [GetLabels200Response](docs/GetLabels200Response.md)
- [GetLoginOptions200Response](docs/GetLoginOptions200Response.md)
- [GetPageOfRequiredBuildsMergeChecks200Response](docs/GetPageOfRequiredBuildsMergeChecks200Response.md)
- [GetProjects200Response](docs/GetProjects200Response.md)
- [GetPullRequestSuggestions200Response](docs/GetPullRequestSuggestions200Response.md)
- [GetPullRequests1200Response](docs/GetPullRequests1200Response.md)
- [GetRefChangeActivity200Response](docs/GetRefChangeActivity200Response.md)
- [GetRepoSyncStatus200Response](docs/GetRepoSyncStatus200Response.md)
- [GetReports200Response](docs/GetReports200Response.md)
- [GetRepositoriesRecentlyAccessed200Response](docs/GetRepositoriesRecentlyAccessed200Response.md)
- [GetRepositoryHooks1200Response](docs/GetRepositoryHooks1200Response.md)
- [GetRestrictions1200Response](docs/GetRestrictions1200Response.md)
- [GetReviewerGroups1200Response](docs/GetReviewerGroups1200Response.md)
- [GetSshKeys200Response](docs/GetSshKeys200Response.md)
- [GetTags200Response](docs/GetTags200Response.md)
- [GetUsersWithAnyPermission1200Response](docs/GetUsersWithAnyPermission1200Response.md)
- [GetUsersWithoutAnyPermission200Response](docs/GetUsersWithoutAnyPermission200Response.md)
- [Group](docs/Group.md)
- [GroupAndUsers](docs/GroupAndUsers.md)
- [GroupPickerContext](docs/GroupPickerContext.md)
- [IdpConfigEntity](docs/IdpConfigEntity.md)
- [JitConfigEntity](docs/JitConfigEntity.md)
- [JitUserEntity](docs/JitUserEntity.md)
- [LineNumberRange](docs/LineNumberRange.md)
- [ListMirrors200Response](docs/ListMirrors200Response.md)
- [ListParticipants200Response](docs/ListParticipants200Response.md)
- [ListRequests200Response](docs/ListRequests200Response.md)
- [LoginOptionEntity](docs/LoginOptionEntity.md)
- [MethodStateDTO](docs/MethodStateDTO.md)
- [NextLoginStepDTO](docs/NextLoginStepDTO.md)
- [PageRequestImpl](docs/PageRequestImpl.md)
- [PasswordElevationRestDTO](docs/PasswordElevationRestDTO.md)
- [Project](docs/Project.md)
- [PullRequest](docs/PullRequest.md)
- [PullRequestParticipant](docs/PullRequestParticipant.md)
- [PullRequestRef](docs/PullRequestRef.md)
- [Repository](docs/Repository.md)
- [RepositoryHookDetails](docs/RepositoryHookDetails.md)
- [RestAccessToken](docs/RestAccessToken.md)
- [RestAccessTokenRequest](docs/RestAccessTokenRequest.md)
- [RestAggregateRejectCounter](docs/RestAggregateRejectCounter.md)
- [RestAnalyticsSettings](docs/RestAnalyticsSettings.md)
- [RestAnnouncementBanner](docs/RestAnnouncementBanner.md)
- [RestApplicationProperties](docs/RestApplicationProperties.md)
- [RestApplicationUser](docs/RestApplicationUser.md)
- [RestApplicationUserWithPermissions](docs/RestApplicationUserWithPermissions.md)
- [RestApplySuggestionRequest](docs/RestApplySuggestionRequest.md)
- [RestAttachmentMetadata](docs/RestAttachmentMetadata.md)
- [RestAuthenticationRequest](docs/RestAuthenticationRequest.md)
- [RestAutoDeclineSettings](docs/RestAutoDeclineSettings.md)
- [RestAutoDeclineSettingsRequest](docs/RestAutoDeclineSettingsRequest.md)
- [RestAutoMergeProcessingResult](docs/RestAutoMergeProcessingResult.md)
- [RestAutoMergeProcessingResultPullRequest](docs/RestAutoMergeProcessingResultPullRequest.md)
- [RestAutoMergeProjectSettingsRequest](docs/RestAutoMergeProjectSettingsRequest.md)
- [RestAutoMergeRequest](docs/RestAutoMergeRequest.md)
- [RestAutoMergeRestrictedSettings](docs/RestAutoMergeRestrictedSettings.md)
- [RestAutoMergeRestrictedSettingsScope](docs/RestAutoMergeRestrictedSettingsScope.md)
- [RestAutoMergeSettingsRequest](docs/RestAutoMergeSettingsRequest.md)
- [RestBearerTokenCredentials](docs/RestBearerTokenCredentials.md)
- [RestBitbucketLicense](docs/RestBitbucketLicense.md)
- [RestBitbucketLicenseStatus](docs/RestBitbucketLicenseStatus.md)
- [RestBranch](docs/RestBranch.md)
- [RestBranchCreateRequest](docs/RestBranchCreateRequest.md)
- [RestBranchDeleteRequest](docs/RestBranchDeleteRequest.md)
- [RestBuildCapabilities](docs/RestBuildCapabilities.md)
- [RestBuildStats](docs/RestBuildStats.md)
- [RestBuildStatus](docs/RestBuildStatus.md)
- [RestBuildStatusSetRequest](docs/RestBuildStatusSetRequest.md)
- [RestBuildStatusTestResults](docs/RestBuildStatusTestResults.md)
- [RestBulkAddInsightAnnotationRequest](docs/RestBulkAddInsightAnnotationRequest.md)
- [RestBulkUserRateLimitSettingsUpdateRequest](docs/RestBulkUserRateLimitSettingsUpdateRequest.md)
- [RestBulkUserRateLimitSettingsUpdateRequestSettings](docs/RestBulkUserRateLimitSettingsUpdateRequestSettings.md)
- [RestChange](docs/RestChange.md)
- [RestChangeConflict](docs/RestChangeConflict.md)
- [RestChangeConflictOurChange](docs/RestChangeConflictOurChange.md)
- [RestChangeset](docs/RestChangeset.md)
- [RestChangesetChanges](docs/RestChangesetChanges.md)
- [RestChangesetFromCommit](docs/RestChangesetFromCommit.md)
- [RestChangesetRepository](docs/RestChangesetRepository.md)
- [RestChangesetRepositoryOrigin](docs/RestChangesetRepositoryOrigin.md)
- [RestChangesetRepositoryOriginProject](docs/RestChangesetRepositoryOriginProject.md)
- [RestChangesetToCommit](docs/RestChangesetToCommit.md)
- [RestChangesetToCommitAuthor](docs/RestChangesetToCommitAuthor.md)
- [RestClusterInformation](docs/RestClusterInformation.md)
- [RestClusterInformationLocalNode](docs/RestClusterInformationLocalNode.md)
- [RestClusterNode](docs/RestClusterNode.md)
- [RestClusterNodeAddress](docs/RestClusterNodeAddress.md)
- [RestComment](docs/RestComment.md)
- [RestCommentAnchor](docs/RestCommentAnchor.md)
- [RestCommentAnchorMultilineMarker](docs/RestCommentAnchorMultilineMarker.md)
- [RestCommentAnchorMultilineSpan](docs/RestCommentAnchorMultilineSpan.md)
- [RestCommentAnchorPath](docs/RestCommentAnchorPath.md)
- [RestCommentAnchorPullRequest](docs/RestCommentAnchorPullRequest.md)
- [RestCommentAnchorPullRequestAuthor](docs/RestCommentAnchorPullRequestAuthor.md)
- [RestCommentAnchorPullRequestAuthorUser](docs/RestCommentAnchorPullRequestAuthorUser.md)
- [RestCommentAnchorPullRequestFromRef](docs/RestCommentAnchorPullRequestFromRef.md)
- [RestCommentAuthor](docs/RestCommentAuthor.md)
- [RestCommentJiraIssue](docs/RestCommentJiraIssue.md)
- [RestCommentParent](docs/RestCommentParent.md)
- [RestCommentThreadDiffAnchor](docs/RestCommentThreadDiffAnchor.md)
- [RestCommit](docs/RestCommit.md)
- [RestCommitMessageSuggestion](docs/RestCommitMessageSuggestion.md)
- [RestConflict](docs/RestConflict.md)
- [RestConflictChange](docs/RestConflictChange.md)
- [RestConnectivitySummary](docs/RestConnectivitySummary.md)
- [RestCreateBranchRequest](docs/RestCreateBranchRequest.md)
- [RestCreateTagRequest](docs/RestCreateTagRequest.md)
- [RestDefaultBranch](docs/RestDefaultBranch.md)
- [RestDefaultReviewersRequest](docs/RestDefaultReviewersRequest.md)
- [RestDefaultTask](docs/RestDefaultTask.md)
- [RestDefaultTaskRequest](docs/RestDefaultTaskRequest.md)
- [RestDelayedSyncRepository](docs/RestDelayedSyncRepository.md)
- [RestDeployment](docs/RestDeployment.md)
- [RestDeploymentEnvironment](docs/RestDeploymentEnvironment.md)
- [RestDeploymentSetRequest](docs/RestDeploymentSetRequest.md)
- [RestDetailedGroup](docs/RestDetailedGroup.md)
- [RestDetailedInvocation](docs/RestDetailedInvocation.md)
- [RestDetailedInvocationEventScope](docs/RestDetailedInvocationEventScope.md)
- [RestDetailedUser](docs/RestDetailedUser.md)
- [RestDiff](docs/RestDiff.md)
- [RestDiffHunk](docs/RestDiffHunk.md)
- [RestDiffLine](docs/RestDiffLine.md)
- [RestDiffSegment](docs/RestDiffSegment.md)
- [RestEmoticon](docs/RestEmoticon.md)
- [RestEnhancedEntityLink](docs/RestEnhancedEntityLink.md)
- [RestErasedUser](docs/RestErasedUser.md)
- [RestErrorMessage](docs/RestErrorMessage.md)
- [RestErrors](docs/RestErrors.md)
- [RestExportRequest](docs/RestExportRequest.md)
- [RestExportRequestRepositoriesRequest](docs/RestExportRequestRepositoriesRequest.md)
- [RestFarmSynchronizationRequest](docs/RestFarmSynchronizationRequest.md)
- [RestGitTagCreateRequest](docs/RestGitTagCreateRequest.md)
- [RestGpgKey](docs/RestGpgKey.md)
- [RestGpgSubKey](docs/RestGpgSubKey.md)
- [RestHookScript](docs/RestHookScript.md)
- [RestHookScriptConfig](docs/RestHookScriptConfig.md)
- [RestHookScriptConfigScript](docs/RestHookScriptConfigScript.md)
- [RestHookScriptTriggers](docs/RestHookScriptTriggers.md)
- [RestImportRequest](docs/RestImportRequest.md)
- [RestInsightAnnotation](docs/RestInsightAnnotation.md)
- [RestInsightAnnotationsResponse](docs/RestInsightAnnotationsResponse.md)
- [RestInsightReport](docs/RestInsightReport.md)
- [RestInsightReportData](docs/RestInsightReportData.md)
- [RestJiraIssue](docs/RestJiraIssue.md)
- [RestJob](docs/RestJob.md)
- [RestJobMessage](docs/RestJobMessage.md)
- [RestJobProgress](docs/RestJobProgress.md)
- [RestLabel](docs/RestLabel.md)
- [RestLabelable](docs/RestLabelable.md)
- [RestLogLevel](docs/RestLogLevel.md)
- [RestLoggingSettings](docs/RestLoggingSettings.md)
- [RestMailConfiguration](docs/RestMailConfiguration.md)
- [RestMarkup](docs/RestMarkup.md)
- [RestMeshConnectivityReport](docs/RestMeshConnectivityReport.md)
- [RestMeshMigrationRequest](docs/RestMeshMigrationRequest.md)
- [RestMeshMigrationSummary](docs/RestMeshMigrationSummary.md)
- [RestMeshNode](docs/RestMeshNode.md)
- [RestMigrationRepository](docs/RestMigrationRepository.md)
- [RestMinimalCommit](docs/RestMinimalCommit.md)
- [RestMinimalRef](docs/RestMinimalRef.md)
- [RestMirrorHashes](docs/RestMirrorHashes.md)
- [RestMirrorRepositorySynchronizationStatus](docs/RestMirrorRepositorySynchronizationStatus.md)
- [RestMirrorRepositorySynchronizationStatusHashes](docs/RestMirrorRepositorySynchronizationStatusHashes.md)
- [RestMirrorServer](docs/RestMirrorServer.md)
- [RestMirrorUpgradeRequest](docs/RestMirrorUpgradeRequest.md)
- [RestMirroredRepository](docs/RestMirroredRepository.md)
- [RestMirroredRepositoryDescriptor](docs/RestMirroredRepositoryDescriptor.md)
- [RestMirroredRepositoryDescriptorMirrorServer](docs/RestMirroredRepositoryDescriptorMirrorServer.md)
- [RestMirroringRequest](docs/RestMirroringRequest.md)
- [RestMultilineCommentMarker](docs/RestMultilineCommentMarker.md)
- [RestMultilineCommentSpan](docs/RestMultilineCommentSpan.md)
- [RestNamedLink](docs/RestNamedLink.md)
- [RestNode](docs/RestNode.md)
- [RestNodeConnectivityReport](docs/RestNodeConnectivityReport.md)
- [RestNodeConnectivityReportNode](docs/RestNodeConnectivityReportNode.md)
- [RestNodeConnectivitySummary](docs/RestNodeConnectivitySummary.md)
- [RestNodeConnectivitySummarySummary](docs/RestNodeConnectivitySummarySummary.md)
- [RestPageIdpConfigEntity](docs/RestPageIdpConfigEntity.md)
- [RestPageLoginOptionEntity](docs/RestPageLoginOptionEntity.md)
- [RestPageRestChange](docs/RestPageRestChange.md)
- [RestPath](docs/RestPath.md)
- [RestPermitted](docs/RestPermitted.md)
- [RestPermittedGroup](docs/RestPermittedGroup.md)
- [RestPermittedGroupGroup](docs/RestPermittedGroupGroup.md)
- [RestPermittedUser](docs/RestPermittedUser.md)
- [RestPerson](docs/RestPerson.md)
- [RestProgress](docs/RestProgress.md)
- [RestProject](docs/RestProject.md)
- [RestProjectSettingsRestriction](docs/RestProjectSettingsRestriction.md)
- [RestProjectSettingsRestrictionRequest](docs/RestProjectSettingsRestrictionRequest.md)
- [RestProperties](docs/RestProperties.md)
- [RestPullRequest](docs/RestPullRequest.md)
- [RestPullRequestActivity](docs/RestPullRequestActivity.md)
- [RestPullRequestAssignParticipantRoleRequest](docs/RestPullRequestAssignParticipantRoleRequest.md)
- [RestPullRequestAssignStatusRequest](docs/RestPullRequestAssignStatusRequest.md)
- [RestPullRequestCommitMessageTemplate](docs/RestPullRequestCommitMessageTemplate.md)
- [RestPullRequestCondition](docs/RestPullRequestCondition.md)
- [RestPullRequestConditionScope](docs/RestPullRequestConditionScope.md)
- [RestPullRequestDeclineRequest](docs/RestPullRequestDeclineRequest.md)
- [RestPullRequestDeleteRequest](docs/RestPullRequestDeleteRequest.md)
- [RestPullRequestFinishReviewRequest](docs/RestPullRequestFinishReviewRequest.md)
- [RestPullRequestMergeConfig](docs/RestPullRequestMergeConfig.md)
- [RestPullRequestMergeConfigCommitMessageTemplate](docs/RestPullRequestMergeConfigCommitMessageTemplate.md)
- [RestPullRequestMergeConfigDefaultStrategy](docs/RestPullRequestMergeConfigDefaultStrategy.md)
- [RestPullRequestMergeRequest](docs/RestPullRequestMergeRequest.md)
- [RestPullRequestMergeStrategy](docs/RestPullRequestMergeStrategy.md)
- [RestPullRequestMergeability](docs/RestPullRequestMergeability.md)
- [RestPullRequestParticipant](docs/RestPullRequestParticipant.md)
- [RestPullRequestRebaseRequest](docs/RestPullRequestRebaseRequest.md)
- [RestPullRequestRebaseResult](docs/RestPullRequestRebaseResult.md)
- [RestPullRequestRebaseResultRefChange](docs/RestPullRequestRebaseResultRefChange.md)
- [RestPullRequestRebaseResultRefChangeRef](docs/RestPullRequestRebaseResultRefChangeRef.md)
- [RestPullRequestRebaseability](docs/RestPullRequestRebaseability.md)
- [RestPullRequestRef](docs/RestPullRequestRef.md)
- [RestPullRequestReopenRequest](docs/RestPullRequestReopenRequest.md)
- [RestPullRequestSettings](docs/RestPullRequestSettings.md)
- [RestPullRequestSettingsMergeConfig](docs/RestPullRequestSettingsMergeConfig.md)
- [RestPullRequestSuggestion](docs/RestPullRequestSuggestion.md)
- [RestPushRefChange](docs/RestPushRefChange.md)
- [RestRateLimitSettings](docs/RestRateLimitSettings.md)
- [RestRawAccessToken](docs/RestRawAccessToken.md)
- [RestRefChange](docs/RestRefChange.md)
- [RestRefMatcher](docs/RestRefMatcher.md)
- [RestRefMatcherType](docs/RestRefMatcherType.md)
- [RestRefRestriction](docs/RestRefRestriction.md)
- [RestRefSyncQueue](docs/RestRefSyncQueue.md)
- [RestRefSyncRequest](docs/RestRefSyncRequest.md)
- [RestRefSyncStatus](docs/RestRefSyncStatus.md)
- [RestRefSyncStatusAheadRefs](docs/RestRefSyncStatusAheadRefs.md)
- [RestRejectedRef](docs/RestRejectedRef.md)
- [RestRepositoriesExportRequest](docs/RestRepositoriesExportRequest.md)
- [RestRepository](docs/RestRepository.md)
- [RestRepositoryHook](docs/RestRepositoryHook.md)
- [RestRepositoryHookVeto](docs/RestRepositoryHookVeto.md)
- [RestRepositoryLockOwner](docs/RestRepositoryLockOwner.md)
- [RestRepositoryMirrorEvent](docs/RestRepositoryMirrorEvent.md)
- [RestRepositoryPolicy](docs/RestRepositoryPolicy.md)
- [RestRepositoryPullRequestSettings](docs/RestRepositoryPullRequestSettings.md)
- [RestRepositoryPullRequestSettingsRequiredApprovers](docs/RestRepositoryPullRequestSettingsRequiredApprovers.md)
- [RestRepositoryRefChangeActivity](docs/RestRepositoryRefChangeActivity.md)
- [RestRepositoryRefChangeActivityRefChange](docs/RestRepositoryRefChangeActivityRefChange.md)
- [RestRepositorySelector](docs/RestRepositorySelector.md)
- [RestRequiredBuildCondition](docs/RestRequiredBuildCondition.md)
- [RestRequiredBuildConditionSetRequest](docs/RestRequiredBuildConditionSetRequest.md)
- [RestRestrictionRequest](docs/RestRestrictionRequest.md)
- [RestReviewerGroup](docs/RestReviewerGroup.md)
- [RestReviewerGroupScope](docs/RestReviewerGroupScope.md)
- [RestRollingUpgradeState](docs/RestRollingUpgradeState.md)
- [RestScope](docs/RestScope.md)
- [RestScopesExample](docs/RestScopesExample.md)
- [RestSecretScanningAllowlistRule](docs/RestSecretScanningAllowlistRule.md)
- [RestSecretScanningAllowlistRuleSetRequest](docs/RestSecretScanningAllowlistRuleSetRequest.md)
- [RestSecretScanningRule](docs/RestSecretScanningRule.md)
- [RestSecretScanningRuleScope](docs/RestSecretScanningRuleScope.md)
- [RestSecretScanningRuleSetRequest](docs/RestSecretScanningRuleSetRequest.md)
- [RestSetInsightReportRequest](docs/RestSetInsightReportRequest.md)
- [RestSingleAddInsightAnnotationRequest](docs/RestSingleAddInsightAnnotationRequest.md)
- [RestSshAccessKey](docs/RestSshAccessKey.md)
- [RestSshAccessKeyLocations](docs/RestSshAccessKeyLocations.md)
- [RestSshCredentials](docs/RestSshCredentials.md)
- [RestSshKey](docs/RestSshKey.md)
- [RestSshKeySettings](docs/RestSshKeySettings.md)
- [RestSshKeyTypeRestriction](docs/RestSshKeyTypeRestriction.md)
- [RestSshSettings](docs/RestSshSettings.md)
- [RestSyncProgress](docs/RestSyncProgress.md)
- [RestSystemSigningConfiguration](docs/RestSystemSigningConfiguration.md)
- [RestTag](docs/RestTag.md)
- [RestTestResults](docs/RestTestResults.md)
- [RestTokenBucketSettings](docs/RestTokenBucketSettings.md)
- [RestUpstreamServer](docs/RestUpstreamServer.md)
- [RestUpstreamSettings](docs/RestUpstreamSettings.md)
- [RestUserDirectory](docs/RestUserDirectory.md)
- [RestUserRateLimitSettings](docs/RestUserRateLimitSettings.md)
- [RestUserRateLimitSettingsUpdateRequest](docs/RestUserRateLimitSettingsUpdateRequest.md)
- [RestUserReaction](docs/RestUserReaction.md)
- [RestUserReactionComment](docs/RestUserReactionComment.md)
- [RestUserReactionEmoticon](docs/RestUserReactionEmoticon.md)
- [RestUsernamePasswordCredentials](docs/RestUsernamePasswordCredentials.md)
- [RestWebhook](docs/RestWebhook.md)
- [RestWebhookCredentials](docs/RestWebhookCredentials.md)
- [RestWebhookScope](docs/RestWebhookScope.md)
- [RestX509Certificate](docs/RestX509Certificate.md)
- [RevokeManyRequest](docs/RevokeManyRequest.md)
- [Scope](docs/Scope.md)
- [Search2200Response](docs/Search2200Response.md)
- [Search3200Response](docs/Search3200Response.md)
- [SearchMeshMigrationRepos200Response](docs/SearchMeshMigrationRepos200Response.md)
- [SetBannerRequest](docs/SetBannerRequest.md)
- [SetDefaultBranchRequest](docs/SetDefaultBranchRequest.md)
- [SetMailConfigRequest](docs/SetMailConfigRequest.md)
- [SetSettings2Request](docs/SetSettings2Request.md)
- [SimpleSshKeyFingerprint](docs/SimpleSshKeyFingerprint.md)
- [SsoConfigEntity](docs/SsoConfigEntity.md)
- [SsoManagementStatusDTO](docs/SsoManagementStatusDTO.md)
- [StartMeshMigrationRequest](docs/StartMeshMigrationRequest.md)
- [StartMeshMigrationRequestMaxBytesPerSecond](docs/StartMeshMigrationRequestMaxBytesPerSecond.md)
- [StatusDTO](docs/StatusDTO.md)
- [StreamFiles200Response](docs/StreamFiles200Response.md)
- [TotpCodeVerificationDTO](docs/TotpCodeVerificationDTO.md)
- [TotpElevationRestDTO](docs/TotpElevationRestDTO.md)
- [TotpRecoveryCodeAuthenticationDTO](docs/TotpRecoveryCodeAuthenticationDTO.md)
- [TotpRecoveryCodeDTO](docs/TotpRecoveryCodeDTO.md)
- [TotpUserEnrollmentDTO](docs/TotpUserEnrollmentDTO.md)
- [UpdatePullRequestCondition1Request](docs/UpdatePullRequestCondition1Request.md)
- [UpdatePullRequestCondition1RequestSourceMatcher](docs/UpdatePullRequestCondition1RequestSourceMatcher.md)
- [UpdatePullRequestCondition1RequestSourceMatcherType](docs/UpdatePullRequestCondition1RequestSourceMatcherType.md)
- [UpdateSystemSigningConfigurationRequest](docs/UpdateSystemSigningConfigurationRequest.md)
- [UserAndGroups](docs/UserAndGroups.md)
- [UserPasswordUpdate](docs/UserPasswordUpdate.md)
- [UserPickerContext](docs/UserPickerContext.md)
- [UserRename](docs/UserRename.md)
- [UserUpdate](docs/UserUpdate.md)
- [UserUpdateWithCredentials](docs/UserUpdateWithCredentials.md)

### Authorization


Authentication schemes defined for the API:
<a id="basic"></a>
#### basic


- **Type**: HTTP basic authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `9.5`
- Package version: `9.5`
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

For more information, please visit [https://jira.atlassian.com/projects/BSERV/summary](https://jira.atlassian.com/projects/BSERV/summary)

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
