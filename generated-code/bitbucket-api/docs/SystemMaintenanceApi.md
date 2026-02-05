# SystemMaintenanceApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelExportJob**](SystemMaintenanceApi.md#cancelexportjob) | **POST** /api/latest/migration/exports/{jobId}/cancel | Cancel export job |
| [**cancelImportJob**](SystemMaintenanceApi.md#cancelimportjob) | **POST** /api/latest/migration/imports/{jobId}/cancel | Cancel import job |
| [**cancelMeshMigrationJob**](SystemMaintenanceApi.md#cancelmeshmigrationjob) | **POST** /api/latest/migration/mesh/{jobId}/cancel | Cancel Mesh migration job |
| [**clearDefaultBranch**](SystemMaintenanceApi.md#cleardefaultbranch) | **DELETE** /api/latest/admin/default-branch | Clear default branch |
| [**clearSenderAddress**](SystemMaintenanceApi.md#clearsenderaddress) | **DELETE** /api/latest/admin/mail-server/sender-address | Update mail configuration |
| [**connectivity**](SystemMaintenanceApi.md#connectivity) | **GET** /api/latest/admin/git/mesh/diagnostics/connectivity | Generate Mesh connectivity report |
| [**createHookScript**](SystemMaintenanceApi.md#createhookscript) | **POST** /api/latest/hook-scripts | Create a new hook script |
| [**delete2**](SystemMaintenanceApi.md#delete2) | **DELETE** /api/latest/admin/git/mesh/nodes/{id} | Delete Mesh node |
| [**delete8**](SystemMaintenanceApi.md#delete8) | **DELETE** /api/latest/admin/rate-limit/settings/users/{userSlug} | Delete user specific rate limit settings |
| [**deleteAvatar**](SystemMaintenanceApi.md#deleteavatar) | **DELETE** /api/latest/users/{userSlug}/avatar.png | Delete user avatar |
| [**deleteBanner**](SystemMaintenanceApi.md#deletebanner) | **DELETE** /api/latest/admin/banner | Delete announcement banner |
| [**deleteHookScript**](SystemMaintenanceApi.md#deletehookscript) | **DELETE** /api/latest/hook-scripts/{scriptId} | Delete a hook script. |
| [**deleteMailConfig**](SystemMaintenanceApi.md#deletemailconfig) | **DELETE** /api/latest/admin/mail-server | Delete mail configuration |
| [**dismissRetentionConfigReviewNotification**](SystemMaintenanceApi.md#dismissretentionconfigreviewnotification) | **DELETE** /audit/latest/notification-settings/retention-config-review | Dismiss retention config notification |
| [**get2**](SystemMaintenanceApi.md#get2) | **GET** /api/latest/admin/license | Get license details |
| [**get6**](SystemMaintenanceApi.md#get6) | **GET** /api/latest/admin/rate-limit/settings/users/{userSlug} | Get user specific rate limit settings |
| [**getActiveMeshMigrationSummary**](SystemMaintenanceApi.md#getactivemeshmigrationsummary) | **GET** /api/latest/migration/mesh/summary | Get summary for Mesh migration job |
| [**getAllMeshMigrationSummaries**](SystemMaintenanceApi.md#getallmeshmigrationsummaries) | **GET** /api/latest/migration/mesh/summaries | Get all Mesh migration job summaries |
| [**getAllRateLimitSettings**](SystemMaintenanceApi.md#getallratelimitsettings) | **GET** /api/latest/admin/rate-limit/settings/users | Get rate limit settings for user |
| [**getAllRegisteredMeshNodes**](SystemMaintenanceApi.md#getallregisteredmeshnodes) | **GET** /api/latest/admin/git/mesh/nodes | Get all registered Mesh nodes |
| [**getApplicationProperties**](SystemMaintenanceApi.md#getapplicationproperties) | **GET** /api/latest/application-properties | Get application properties |
| [**getBanner**](SystemMaintenanceApi.md#getbanner) | **GET** /api/latest/admin/banner | Get announcement banner |
| [**getControlPlanePublicKey**](SystemMaintenanceApi.md#getcontrolplanepublickey) | **GET** /api/latest/admin/git/mesh/config/control-plane.pem | Get the control plane PEM |
| [**getDefaultBranch**](SystemMaintenanceApi.md#getdefaultbranch) | **GET** /api/latest/admin/default-branch | Get the default branch |
| [**getExportJob**](SystemMaintenanceApi.md#getexportjob) | **GET** /api/latest/migration/exports/{jobId} | Get export job details |
| [**getExportJobMessages**](SystemMaintenanceApi.md#getexportjobmessages) | **GET** /api/latest/migration/exports/{jobId}/messages | Get job messages |
| [**getGlobalSettings**](SystemMaintenanceApi.md#getglobalsettings) | **GET** /admin | Get global SSH key settings |
| [**getHistory**](SystemMaintenanceApi.md#gethistory) | **GET** /api/latest/admin/rate-limit/history | Get rate limit history |
| [**getHookScript**](SystemMaintenanceApi.md#gethookscript) | **GET** /api/latest/hook-scripts/{scriptId} | Get a hook script |
| [**getImportJob**](SystemMaintenanceApi.md#getimportjob) | **GET** /api/latest/migration/imports/{jobId} | Get import job status |
| [**getImportJobMessages**](SystemMaintenanceApi.md#getimportjobmessages) | **GET** /api/latest/migration/imports/{jobId}/messages | Get import job messages |
| [**getInformation**](SystemMaintenanceApi.md#getinformation) | **GET** /api/latest/admin/cluster | Get cluster node information |
| [**getLabel**](SystemMaintenanceApi.md#getlabel) | **GET** /api/latest/labels/{labelName} | Get label |
| [**getLabelables**](SystemMaintenanceApi.md#getlabelables) | **GET** /api/latest/labels/{labelName}/labeled | Get labelables for label |
| [**getLabels**](SystemMaintenanceApi.md#getlabels) | **GET** /api/latest/labels | Get all labels |
| [**getLevel**](SystemMaintenanceApi.md#getlevel) | **GET** /api/latest/logs/logger/{loggerName} | Get current log level |
| [**getMailConfig**](SystemMaintenanceApi.md#getmailconfig) | **GET** /api/latest/admin/mail-server | Get mail configuration |
| [**getMeshMigrationJob**](SystemMaintenanceApi.md#getmeshmigrationjob) | **GET** /api/latest/migration/mesh/{jobId} | Get Mesh migration job details |
| [**getMeshMigrationJobMessages**](SystemMaintenanceApi.md#getmeshmigrationjobmessages) | **GET** /api/latest/migration/mesh/{jobId}/messages | Get Mesh migration job messages |
| [**getMeshMigrationJobSummary**](SystemMaintenanceApi.md#getmeshmigrationjobsummary) | **GET** /api/latest/migration/mesh/{jobId}/summary | Get Mesh migration job summary |
| [**getRegisteredMeshNodeById**](SystemMaintenanceApi.md#getregisteredmeshnodebyid) | **GET** /api/latest/admin/git/mesh/nodes/{id} | Get Mesh node |
| [**getRepositoryArchivePolicy**](SystemMaintenanceApi.md#getrepositoryarchivepolicy) | **GET** /policies/latest/admin/repos/archive | Get repository archive policy |
| [**getRepositoryDeletePolicy**](SystemMaintenanceApi.md#getrepositorydeletepolicy) | **GET** /policies/latest/admin/repos/delete | Get repository delete policy |
| [**getRootLevel**](SystemMaintenanceApi.md#getrootlevel) | **GET** /api/latest/logs/rootLogger | Get root log level |
| [**getSenderAddress**](SystemMaintenanceApi.md#getsenderaddress) | **GET** /api/latest/admin/mail-server/sender-address | Get server mail address |
| [**getSettings2**](SystemMaintenanceApi.md#getsettings2) | **GET** /api/latest/logs/settings | Get debug logging and profiling |
| [**getSettings3**](SystemMaintenanceApi.md#getsettings3) | **GET** /api/latest/admin/rate-limit/settings | Get rate limit settings |
| [**getSupportZip**](SystemMaintenanceApi.md#getsupportzip) | **GET** /api/latest/admin/git/mesh/support-zips/{id} | Get support zip for node |
| [**getSupportZips**](SystemMaintenanceApi.md#getsupportzips) | **GET** /api/latest/admin/git/mesh/support-zips | Get support zips for all Mesh nodes |
| [**getSupportedKeyTypes**](SystemMaintenanceApi.md#getsupportedkeytypes) | **GET** /admin/supported-key-types | Get supported SSH key algorithms and lengths |
| [**getUser**](SystemMaintenanceApi.md#getuser) | **GET** /api/latest/users/{userSlug} | Get user |
| [**getUserSettings**](SystemMaintenanceApi.md#getusersettings) | **GET** /api/latest/users/{userSlug}/settings | Get user settings |
| [**getUsers2**](SystemMaintenanceApi.md#getusers2) | **GET** /api/latest/users | Get all users |
| [**previewExport**](SystemMaintenanceApi.md#previewexport) | **POST** /api/latest/migration/exports/preview | Preview export |
| [**previewMeshMigration**](SystemMaintenanceApi.md#previewmeshmigration) | **POST** /api/latest/migration/mesh/preview | Preview Mesh migration |
| [**read**](SystemMaintenanceApi.md#read) | **GET** /api/latest/hook-scripts/{scriptId}/content | Get hook script content |
| [**registerNewMeshNode**](SystemMaintenanceApi.md#registernewmeshnode) | **POST** /api/latest/admin/git/mesh/nodes | Register new Mesh node |
| [**searchMeshMigrationRepos**](SystemMaintenanceApi.md#searchmeshmigrationrepos) | **GET** /api/latest/migration/mesh/repos | Find repositories by Mesh migration state |
| [**set2**](SystemMaintenanceApi.md#set2) | **POST** /api/latest/admin/rate-limit/settings/users | Set rate limit settings for users |
| [**set3**](SystemMaintenanceApi.md#set3) | **PUT** /api/latest/admin/rate-limit/settings/users/{userSlug} | Set rate limit settings for user |
| [**setBanner**](SystemMaintenanceApi.md#setbanneroperation) | **PUT** /api/latest/admin/banner | Update/Set announcement banner |
| [**setDefaultBranch**](SystemMaintenanceApi.md#setdefaultbranchoperation) | **PUT** /api/latest/admin/default-branch | Update/Set default branch |
| [**setLevel**](SystemMaintenanceApi.md#setlevel) | **PUT** /api/latest/logs/logger/{loggerName}/{levelName} | Set log level |
| [**setMailConfig**](SystemMaintenanceApi.md#setmailconfigoperation) | **PUT** /api/latest/admin/mail-server | Update mail configuration |
| [**setRepositoryArchivePolicy**](SystemMaintenanceApi.md#setrepositoryarchivepolicy) | **PUT** /policies/latest/admin/repos/archive | Update repository archive policy |
| [**setRepositoryDeletePolicy**](SystemMaintenanceApi.md#setrepositorydeletepolicy) | **PUT** /policies/latest/admin/repos/delete | Update the repository delete policy |
| [**setRootLevel**](SystemMaintenanceApi.md#setrootlevel) | **PUT** /api/latest/logs/rootLogger/{levelName} | Set root log level |
| [**setSenderAddress**](SystemMaintenanceApi.md#setsenderaddress) | **PUT** /api/latest/admin/mail-server/sender-address | Update server mail address |
| [**setSettings2**](SystemMaintenanceApi.md#setsettings2operation) | **PUT** /api/latest/logs/settings | Set debug logging and profiling |
| [**setSettings3**](SystemMaintenanceApi.md#setsettings3) | **PUT** /api/latest/admin/rate-limit/settings | Set rate limit |
| [**startExport**](SystemMaintenanceApi.md#startexport) | **POST** /api/latest/migration/exports | Start export job |
| [**startImport**](SystemMaintenanceApi.md#startimport) | **POST** /api/latest/migration/imports | Start import job |
| [**startMeshMigration**](SystemMaintenanceApi.md#startmeshmigrationoperation) | **POST** /api/latest/migration/mesh | Start Mesh migration job |
| [**updateGlobalSettings**](SystemMaintenanceApi.md#updateglobalsettings) | **PUT** /admin | Update global SSH key settings |
| [**updateHookScript**](SystemMaintenanceApi.md#updatehookscript) | **PUT** /api/latest/hook-scripts/{scriptId} | Update a hook script |
| [**updateLicense**](SystemMaintenanceApi.md#updatelicense) | **POST** /api/latest/admin/license | Update license |
| [**updateMeshNode**](SystemMaintenanceApi.md#updatemeshnode) | **PUT** /api/latest/admin/git/mesh/nodes/{id} | Update Mesh node |
| [**updateSettings**](SystemMaintenanceApi.md#updatesettings) | **POST** /api/latest/users/{userSlug}/settings | Update user settings |
| [**updateUserDetails1**](SystemMaintenanceApi.md#updateuserdetails1) | **PUT** /api/latest/users | Update user details |
| [**updateUserPassword1**](SystemMaintenanceApi.md#updateuserpassword1) | **PUT** /api/latest/users/credentials | Set password |
| [**uploadAvatar1**](SystemMaintenanceApi.md#uploadavatar1) | **POST** /api/latest/users/{userSlug}/avatar.png | Update user avatar |



## cancelExportJob

> cancelExportJob(jobId)

Cancel export job

Requests the cancellation of an export job.  The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.  There might be a small delay between accepting the request and actually cancelling the job. In most cases, the delay will be close to instantaneously. In the unlikely case of communication issues across a cluster, it can however take a few seconds to cancel a job.  A client should always actively query the job status to confirm that a job has been successfully canceled.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { CancelExportJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | the ID of the job to cancel
    jobId: jobId_example,
  } satisfies CancelExportJobRequest;

  try {
    const data = await api.cancelExportJob(body);
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
| **jobId** | `string` | the ID of the job to cancel | [Defaults to `undefined`] |

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
| **204** | The job has successfully been marked for cancellation |  -  |
| **401** | The currently authenticated user has insufficient permissions to cancel this job. |  -  |
| **404** | The specified job does not exist. |  -  |
| **409** | The job was in a state that does not allow cancellation, e.g. it has already finished. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelImportJob

> cancelImportJob(jobId)

Cancel import job

Requests the cancellation of an import job.  The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.  Note that import jobs are not canceled as instantaneously as export jobs. Rather, once the request has been accepted, there are a number of checkpoints at which the job will actually apply it and stop. This is to keep the system in a reasonably consistent state:  - After the current fork hierarchy has been imported and verified. - Before the next repository is imported. - Before the next pull request is imported.  A client should always actively query the job status to confirm that a job has been successfully canceled.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { CancelImportJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | the ID of the job to cancel
    jobId: jobId_example,
  } satisfies CancelImportJobRequest;

  try {
    const data = await api.cancelImportJob(body);
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
| **jobId** | `string` | the ID of the job to cancel | [Defaults to `undefined`] |

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
| **204** | The job has successfully been marked for cancellation. |  -  |
| **401** | The currently authenticated user has insufficient permissions to cancel this job. |  -  |
| **404** | The specified job does not exist. |  -  |
| **409** | The job was in a state that does not allow cancellation, e.g. it has already finished. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelMeshMigrationJob

> cancelMeshMigrationJob(jobId)

Cancel Mesh migration job

Requests the cancellation of a migration job.   The request to cancel a job will be processed successfully if the job is actually still running. If it has already finished (successfully or with errors) or if it has already been canceled before, then an error will be returned.   There might be a small delay between accepting the request and actually cancelling the job. In most cases, the delay will be close to instantaneously. In the unlikely case of communication issues across a cluster, it can however take a few seconds to cancel a job.  A client should always actively query the job status to confirm that a job has been successfully canceled.  The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { CancelMeshMigrationJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job to cancel
    jobId: jobId_example,
  } satisfies CancelMeshMigrationJobRequest;

  try {
    const data = await api.cancelMeshMigrationJob(body);
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
| **jobId** | `string` | The ID of the job to cancel | [Defaults to `undefined`] |

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
| **204** | The migration job was successfully marked for cancellation. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The specified job ID does not exist. |  -  |
| **409** | The migration job has already been canceled or finished. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearDefaultBranch

> clearDefaultBranch()

Clear default branch

Clears the global default branch, which is used when creating new repositories if an explicit default branch is not specified, if one has been configured.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { ClearDefaultBranchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.clearDefaultBranch();
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
| **204** | The default branch has been cleared. |  -  |
| **401** | The current user does not have sufficient permissions to clear the global default branch. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearSenderAddress

> clearSenderAddress()

Update mail configuration

Clears the server email address.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { ClearSenderAddressRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.clearSenderAddress();
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
| **204** | he server email address was successfully cleared. |  -  |
| **401** | The currently authenticated user has insufficient permissions toclear the server email address. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## connectivity

> RestMeshConnectivityReport connectivity()

Generate Mesh connectivity report

Generates a connectivity report between the Bitbucket node(s) and the Mesh node(s).  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { ConnectivityRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.connectivity();
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

[**RestMeshConnectivityReport**](RestMeshConnectivityReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The connectivity report between the Bitbucket node(s) and Mesh node(s). |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createHookScript

> RestHookScript createHookScript(content, description, name, type)

Create a new hook script

Create a new hook script.  This endpoint requires **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { CreateHookScriptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The hook script contents. (optional)
    content: content_example,
    // string | A description of the hook script (useful when querying registered hook scripts). (optional)
    description: description_example,
    // string | The name of the hook script (useful when querying registered hook scripts). (optional)
    name: name_example,
    // string | The type of hook script; supported values are \\\"PRE\\\" for pre-receive hooks and \\\"POST\\\" for post-receive hooks. (optional)
    type: type_example,
  } satisfies CreateHookScriptRequest;

  try {
    const data = await api.createHookScript(body);
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
| **content** | `string` | The hook script contents. | [Optional] [Defaults to `undefined`] |
| **description** | `string` | A description of the hook script (useful when querying registered hook scripts). | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name of the hook script (useful when querying registered hook scripts). | [Optional] [Defaults to `undefined`] |
| **type** | `string` | The type of hook script; supported values are \\\&quot;PRE\\\&quot; for pre-receive hooks and \\\&quot;POST\\\&quot; for post-receive hooks. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestHookScript**](RestHookScript.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created hook script. |  -  |
| **400** | The hook script was not created due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete2

> delete2(id, force)

Delete Mesh node

Delete a Mesh node  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Delete2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // number
    id: 789,
    // boolean (optional)
    force: true,
  } satisfies Delete2Request;

  try {
    const data = await api.delete2(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |
| **force** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete8

> delete8(userSlug)

Delete user specific rate limit settings

Deletes the user-specific rate limit settings for the given user.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Delete8Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
  } satisfies Delete8Request;

  try {
    const data = await api.delete8(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |

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
| **204** | An empty response indicating that the user settings have been deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve rate limit settings. |  -  |
| **404** | The specified user does not exist, or has no settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAvatar

> RestNamedLink deleteAvatar(userSlug)

Delete user avatar

Delete the avatar associated to a user.   Users are always allowed to delete their own avatar. To delete someone else\&#39;s avatar the authenticated user must have global &lt;strong&gt;ADMIN&lt;/strong&gt; permission, or global &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to update a &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; user\&#39;s avatar.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { DeleteAvatarRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug
    userSlug: userSlug_example,
  } satisfies DeleteAvatarRequest;

  try {
    const data = await api.deleteAvatar(body);
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
| **userSlug** | `string` | The user slug | [Defaults to `undefined`] |

### Return type

[**RestNamedLink**](RestNamedLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The new avatar URL if the local avatar was successfully deleted or did not exist |  -  |
| **401** | The authenticated user has insufficient permissions to delete the specified avatar. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBanner

> deleteBanner()

Delete announcement banner

Deletes a banner, if one is present in the database.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { DeleteBannerRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.deleteBanner();
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
| **204** | The query executed successfully, whether a banner was deleted or not |  -  |
| **401** | The user does not have permission to access the banner service through this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteHookScript

> deleteHookScript(scriptId)

Delete a hook script.

Deletes a registered hook script.  This endpoint requires **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { DeleteHookScriptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the hook script to delete
    scriptId: scriptId_example,
  } satisfies DeleteHookScriptRequest;

  try {
    const data = await api.deleteHookScript(body);
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
| **scriptId** | `string` | The ID of the hook script to delete | [Defaults to `undefined`] |

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
| **204** | The hook script was deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions. |  -  |
| **404** | Unable to find the supplied hook script ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMailConfig

> deleteMailConfig()

Delete mail configuration

Deletes the current mail configuration.  The authenticated user must have the &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { DeleteMailConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.deleteMailConfig();
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
| **204** | The mail configuration was successfully deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the mail server configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dismissRetentionConfigReviewNotification

> dismissRetentionConfigReviewNotification()

Dismiss retention config notification

Dismisses the retention config review notification displayed by the audit plugin for the user that\&#39;s currently logged in.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { DismissRetentionConfigReviewNotificationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.dismissRetentionConfigReviewNotification();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A blank response |  -  |
| **401** | The currently authenticated user has insufficient permissions to dismiss the notification. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get2

> RestBitbucketLicense get2()

Get license details

Retrieves details about the current license, as well as the current status of the system with regards to the installed license. The status includes the current number of users applied toward the license limit, as well as any status messages about the license (warnings about expiry or user counts exceeding license limits).   The authenticated user must have &lt;b&gt;ADMIN&lt;/b&gt; permission. Unauthenticated users, and non-administrators, are not permitted to access license details.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Get2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.get2();
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

[**RestBitbucketLicense**](RestBitbucketLicense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The currently-installed license. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the license, or the request is anonymous. |  -  |
| **404** | No license has been installed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get6

> RestUserRateLimitSettings get6(userSlug)

Get user specific rate limit settings

Retrieves the user-specific rate limit settings for the given user.  To call this resource, the user must be authenticated and either have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or be the same user as the one whose settings are requested. A user with &lt;strong&gt;ADMIN&lt;/strong&gt; permission cannot get the settings of a user with &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Get6Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
  } satisfies Get6Request;

  try {
    const data = await api.get6(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |

### Return type

[**RestUserRateLimitSettings**](RestUserRateLimitSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the user-specific rate limit settings for the given user. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve rate limit settings. |  -  |
| **404** | The specified user does not exist, or has no settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActiveMeshMigrationSummary

> RestMeshMigrationSummary getActiveMeshMigrationSummary()

Get summary for Mesh migration job

Gets the summary, including the queue status and progress, of the currently active Mesh migration job.  The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetActiveMeshMigrationSummaryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getActiveMeshMigrationSummary();
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

[**RestMeshMigrationSummary**](RestMeshMigrationSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The summary of the currently active migration job. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | No active migration job found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllMeshMigrationSummaries

> GetAllMeshMigrationSummaries200Response getAllMeshMigrationSummaries(start, limit)

Get all Mesh migration job summaries

Retrieve a page of Mesh migration job summaries. Jobs are ordered by when they were started, newest first.   The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetAllMeshMigrationSummariesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllMeshMigrationSummariesRequest;

  try {
    const data = await api.getAllMeshMigrationSummaries(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllMeshMigrationSummaries200Response**](GetAllMeshMigrationSummaries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The summary of the migration job. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllRateLimitSettings

> GetAllRateLimitSettings200Response getAllRateLimitSettings(filter, start, limit)

Get rate limit settings for user

Retrieves the user-specific rate limit settings for the given user.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetAllRateLimitSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | Optional filter (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllRateLimitSettingsRequest;

  try {
    const data = await api.getAllRateLimitSettings(body);
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
| **filter** | `string` | Optional filter | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllRateLimitSettings200Response**](GetAllRateLimitSettings200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing all the user-specific rate limit settings filtered by the optional filter. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve rate limit settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllRegisteredMeshNodes

> RestMeshNode getAllRegisteredMeshNodes()

Get all registered Mesh nodes

Get all the registered Mesh nodes.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetAllRegisteredMeshNodesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getAllRegisteredMeshNodes();
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

[**RestMeshNode**](RestMeshNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of registered Mesh nodes. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationProperties

> RestApplicationProperties getApplicationProperties()

Get application properties

Retrieve version information and other application properties.  No authentication is required to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetApplicationPropertiesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getApplicationProperties();
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

[**RestApplicationProperties**](RestApplicationProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The application properties |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBanner

> RestAnnouncementBanner getBanner()

Get announcement banner

Gets the announcement banner, if one exists and is available to the user

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetBannerRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getBanner();
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

[**RestAnnouncementBanner**](RestAnnouncementBanner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested banner |  -  |
| **204** | There is no banner to display |  -  |
| **401** | The user does not have permission to access the banner service through this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getControlPlanePublicKey

> getControlPlanePublicKey()

Get the control plane PEM

Obtain the control plane PEM.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetControlPlanePublicKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getControlPlanePublicKey();
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
- **Accept**: `text/plain`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The control plane PEM. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultBranch

> getDefaultBranch()

Get the default branch

Retrieves the configured global default branch, which is used when creating new repositories if an explicit default branch is not specified.  The user must be authenticated to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetDefaultBranchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getDefaultBranch();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The configured global default branch. |  -  |
| **404** | No global default branch has been configured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExportJob

> RestJob getExportJob(jobId)

Get export job details

Gets the details, including the current status and progress, of the export job identified by the given ID.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetExportJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | the ID of the job
    jobId: jobId_example,
  } satisfies GetExportJobRequest;

  try {
    const data = await api.getExportJob(body);
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
| **jobId** | `string` | the ID of the job | [Defaults to `undefined`] |

### Return type

[**RestJob**](RestJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The job, including status and progress information. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve information about this job. |  -  |
| **404** | The specified job does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExportJobMessages

> GetExportJobMessages200Response getExportJobMessages(jobId, severity, subject, start, limit)

Get job messages

Gets the messages generated by the job.  Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.  - INFO - WARN - ERROR  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetExportJobMessagesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
    // string | The severity to include in the results (optional)
    severity: severity_example,
    // string | The subject (optional)
    subject: subject_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetExportJobMessagesRequest;

  try {
    const data = await api.getExportJobMessages(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |
| **severity** | `string` | The severity to include in the results | [Optional] [Defaults to `undefined`] |
| **subject** | `string` | The subject | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetExportJobMessages200Response**](GetExportJobMessages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The messages generated by this job. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve information about this job. |  -  |
| **404** | The specified job does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGlobalSettings

> RestSshKeySettings getGlobalSettings()

Get global SSH key settings

Gets the global settings that enforce the maximum expiry of SSH keys and restrictions on SSH key types.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetGlobalSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getGlobalSettings();
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

[**RestSshKeySettings**](RestSshKeySettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The global ssh key settings configuration. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the ssh keys global settings configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHistory

> GetHistory200Response getHistory(order, start, limit)

Get rate limit history

Retrieves the recent rate limit history for the instance.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetHistoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // 'NEWEST' | 'FREQUENCY' | An optional sort category to arrange the results in descending order (optional)
    order: order_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetHistoryRequest;

  try {
    const data = await api.getHistory(body);
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
| **order** | `NEWEST`, `FREQUENCY` | An optional sort category to arrange the results in descending order | [Optional] [Defaults to `undefined`] [Enum: NEWEST, FREQUENCY] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetHistory200Response**](GetHistory200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing a page of aggregated counters for users who have been recently rate limited. |  -  |
| **400** | The sort query parameter is invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve rate limit history. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHookScript

> RestHookScript getHookScript(scriptId)

Get a hook script

Retrieves a hook script by ID.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetHookScriptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the hook script to retrieve
    scriptId: scriptId_example,
  } satisfies GetHookScriptRequest;

  try {
    const data = await api.getHookScript(body);
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
| **scriptId** | `string` | The ID of the hook script to retrieve | [Defaults to `undefined`] |

### Return type

[**RestHookScript**](RestHookScript.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The hook script. |  -  |
| **401** | The currently authenticated user has insufficient permissions. |  -  |
| **404** | The hook script ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImportJob

> RestJob getImportJob(jobId)

Get import job status

Gets the details, including the current status and progress, of the import job identified by the given ID.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetImportJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
  } satisfies GetImportJobRequest;

  try {
    const data = await api.getImportJob(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |

### Return type

[**RestJob**](RestJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The job, including status and progress information. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve information about this job. |  -  |
| **404** | The specified job does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getImportJobMessages

> GetExportJobMessages200Response getImportJobMessages(jobId, severity, subject, start, limit)

Get import job messages

Gets the messages generated by the job.  Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.  - INFO - WARN - ERROR  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetImportJobMessagesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
    // string | The severity to include in the results (optional)
    severity: severity_example,
    // string | The subject (optional)
    subject: subject_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetImportJobMessagesRequest;

  try {
    const data = await api.getImportJobMessages(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |
| **severity** | `string` | The severity to include in the results | [Optional] [Defaults to `undefined`] |
| **subject** | `string` | The subject | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetExportJobMessages200Response**](GetExportJobMessages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The messages generated by this job. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve information about this job. |  -  |
| **404** | The specified job does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInformation

> RestClusterInformation getInformation()

Get cluster node information

Gets information about the nodes that currently make up the stash cluster.  The authenticated user must have the &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetInformationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getInformation();
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

[**RestClusterInformation**](RestClusterInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing information about the cluster |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the cluster information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabel

> RestLabel getLabel(labelName)

Get label

Returns a label.  The user needs to be authenticated to use this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetLabelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | the label name
    labelName: labelName_example,
  } satisfies GetLabelRequest;

  try {
    const data = await api.getLabel(body);
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
| **labelName** | `string` | the label name | [Defaults to `undefined`] |

### Return type

[**RestLabel**](RestLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The label. |  -  |
| **401** | The user is currently not authenticated. |  -  |
| **404** | The specified label does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabelables

> GetLabelables200Response getLabelables(labelName, type, start, limit)

Get labelables for label

Returns a page of labelables for a given label.  Only labelables that the authenticated user has view access to will be returned.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetLabelablesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The page of labelables.
    labelName: labelName_example,
    // string |  the type of labelables to be returned. Supported values: REPOSITORY (optional)
    type: type_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetLabelablesRequest;

  try {
    const data = await api.getLabelables(body);
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
| **labelName** | `string` | The page of labelables. | [Defaults to `undefined`] |
| **type** | `string` |  the type of labelables to be returned. Supported values: REPOSITORY | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLabelables200Response**](GetLabelables200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The page of labelables. |  -  |
| **400** | The type of labelable is incorrect, correct values are REPOSITORY. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the labelables |  -  |
| **404** | The specified label does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabels

> GetLabels200Response getLabels(prefix, start, limit)

Get all labels

Returns a paged response of all the labels in the system.  The user needs to be authenticated to use this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetLabelsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | (optional) prefix to filter the labels on. (optional)
    prefix: prefix_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetLabelsRequest;

  try {
    const data = await api.getLabels(body);
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
| **prefix** | `string` | (optional) prefix to filter the labels on. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLabels200Response**](GetLabels200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of returned labels. |  -  |
| **401** | The user is currently not authenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLevel

> RestLogLevel getLevel(loggerName)

Get current log level

Retrieve the current log level for a given logger.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetLevelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The name of the logger.
    loggerName: loggerName_example,
  } satisfies GetLevelRequest;

  try {
    const data = await api.getLevel(body);
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
| **loggerName** | `string` | The name of the logger. | [Defaults to `undefined`] |

### Return type

[**RestLogLevel**](RestLogLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The log level of the logger. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the log level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMailConfig

> RestMailConfiguration getMailConfig()

Get mail configuration

Retrieves the current mail configuration.   The authenticated user must have the &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetMailConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getMailConfig();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The mail configuration |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the mail configuration. |  -  |
| **404** | The mail server hasn\&#39;t been configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeshMigrationJob

> getMeshMigrationJob(jobId)

Get Mesh migration job details

Gets the details, including the current status and progress, of the job identified by the given ID.  The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetMeshMigrationJobRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
  } satisfies GetMeshMigrationJobRequest;

  try {
    const data = await api.getMeshMigrationJob(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The details of the migration job. |  -  |
| **400** | The job ID parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The specified job ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeshMigrationJobMessages

> GetExportJobMessages200Response getMeshMigrationJobMessages(jobId, severity, subject, start, limit)

Get Mesh migration job messages

Gets the messages generated by the job.   Without any filter, all messages will be returned, but the response can optionally be filtered for the following severities. The severity parameter can be repeated to include multiple severities in one response.        - INFO      - WARN      - ERROR   The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetMeshMigrationJobMessagesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
    // string | The severity to include in the results (optional)
    severity: severity_example,
    // string | The subject (optional)
    subject: subject_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetMeshMigrationJobMessagesRequest;

  try {
    const data = await api.getMeshMigrationJobMessages(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |
| **severity** | `string` | The severity to include in the results | [Optional] [Defaults to `undefined`] |
| **subject** | `string` | The subject | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetExportJobMessages200Response**](GetExportJobMessages200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The details of the migration job. |  -  |
| **400** | The job ID parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The specified job ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeshMigrationJobSummary

> RestMeshMigrationSummary getMeshMigrationJobSummary(jobId)

Get Mesh migration job summary

Gets the summary, including the queue status and progress, of a Mesh migration job.   The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetMeshMigrationJobSummaryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the job
    jobId: jobId_example,
  } satisfies GetMeshMigrationJobSummaryRequest;

  try {
    const data = await api.getMeshMigrationJobSummary(body);
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
| **jobId** | `string` | The ID of the job | [Defaults to `undefined`] |

### Return type

[**RestMeshMigrationSummary**](RestMeshMigrationSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The summary of the migration job. |  -  |
| **400** | The job ID parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The specified job ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRegisteredMeshNodeById

> RestMeshNode getRegisteredMeshNodeById(id)

Get Mesh node

Get the registered Mesh node that matches the supplied ID.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetRegisteredMeshNodeByIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the Mesh node.
    id: id_example,
  } satisfies GetRegisteredMeshNodeByIdRequest;

  try {
    const data = await api.getRegisteredMeshNodeById(body);
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
| **id** | `string` | The ID of the Mesh node. | [Defaults to `undefined`] |

### Return type

[**RestMeshNode**](RestMeshNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Mesh node that matches the ID. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The Mesh node does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryArchivePolicy

> RestRepositoryPolicy getRepositoryArchivePolicy()

Get repository archive policy

Retrieves the repository archive policy for the instance.  The user must be authenticated to access this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetRepositoryArchivePolicyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getRepositoryArchivePolicy();
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

[**RestRepositoryPolicy**](RestRepositoryPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the repository archive policy for the instance |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the repository archive policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryDeletePolicy

> RestRepositoryPolicy getRepositoryDeletePolicy()

Get repository delete policy

Retrieves the repository delete policy for the instance.  The user must be authenticated to access this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetRepositoryDeletePolicyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getRepositoryDeletePolicy();
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

[**RestRepositoryPolicy**](RestRepositoryPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the repository delete policy for the instance |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the repository delete policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRootLevel

> RestLogLevel getRootLevel()

Get root log level

Retrieve the current log level for the root logger.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetRootLevelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getRootLevel();
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

[**RestLogLevel**](RestLogLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The log level of the logger. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the log level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSenderAddress

> getSenderAddress()

Get server mail address

Retrieves the server email address

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSenderAddressRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getSenderAddress();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The server email address |  -  |
| **401** | he currently authenticated user has insufficient permissions to retrieve the server email address. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSettings2

> RestLoggingSettings getSettings2()

Get debug logging and profiling

Returns whether debug logging and profiling are enabled.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSettings2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getSettings2();
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

[**RestLoggingSettings**](RestLoggingSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Whether debug logging and profiling are enabled. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve these settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSettings3

> RestRateLimitSettings getSettings3()

Get rate limit settings

Retrieves the rate limit settings for the instance.  The user must be authenticated to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSettings3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getSettings3();
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

[**RestRateLimitSettings**](RestRateLimitSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the rate limit plugin settings for the instance. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve rate limit settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSupportZip

> getSupportZip(id)

Get support zip for node

Get the support zip for the Mesh node that matches the specified ID.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSupportZipRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the Mesh node.
    id: id_example,
  } satisfies GetSupportZipRequest;

  try {
    const data = await api.getSupportZip(body);
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
| **id** | `string` | The ID of the Mesh node. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The support zip for the Mesh node that matches the ID. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | The Mesh node does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSupportZips

> getSupportZips()

Get support zips for all Mesh nodes

Get the support zips for all the Mesh nodes.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSupportZipsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getSupportZips();
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
- **Accept**: `application/octet-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The support zips for all the Mesh nodes. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSupportedKeyTypes

> getSupportedKeyTypes()

Get supported SSH key algorithms and lengths

Retrieves a list of all supported SSH key algorithms and lengths.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetSupportedKeyTypesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  try {
    const data = await api.getSupportedKeyTypes();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of supported SSH key algorithms and lengths. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve this list. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> RestApplicationUser getUser(userSlug)

Get user

Retrieve the user matching the supplied &lt;strong&gt;userSlug&lt;/strong&gt;.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug
    userSlug: userSlug_example,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
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
| **userSlug** | `string` | The user slug | [Defaults to `undefined`] |

### Return type

[**RestApplicationUser**](RestApplicationUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user matching the supplied &lt;strong&gt;userSlug&lt;/strong&gt;. Note, this may &lt;i&gt;not&lt;/i&gt; be the user\&#39;s username, always use the &lt;strong&gt;user.slug&lt;/strong&gt; property. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the user. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserSettings

> ExampleSettingsMap getUserSettings(userSlug)

Get user settings

Retrieve a map of user setting key values for a specific user identified by the user slug.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetUserSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
  } satisfies GetUserSettingsRequest;

  try {
    const data = await api.getUserSettings(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |

### Return type

[**ExampleSettingsMap**](ExampleSettingsMap.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user settings for the specified user slug. |  -  |
| **401** | The currently authenticated user does not have permission to view the settings of this user. |  -  |
| **404** | The specified project, repository, commit, or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers2

> RestApplicationUser getUsers2(filter, permissionN, permission, group)

Get all users

Retrieve a page of users, optionally run through provided filters.   Only authenticated users may call this resource. ### Permission Filters   The following three sub-sections list parameters supported for permission filters (where &lt;code&gt;[root]&lt;/code&gt; is the root permission filter name, e.g. &lt;code&gt;permission&lt;/code&gt;, &lt;code&gt;permission.1&lt;/code&gt; etc.) depending on the permission resource. The system determines which filter to apply (Global, Project or Repository permission) based on the &#x60;[root]&#x60; permission value. E.g. &lt;code&gt;ADMIN&lt;/code&gt; is a global permission, &lt;code&gt;PROJECT_ADMIN&lt;/code&gt; is a project permission and &lt;code&gt;REPO_ADMIN&lt;/code&gt; is a repository permission. Note that the parameters for a given resource will be looked up in the order as they are listed below, that is e.g. for a project resource, if both &lt;code&gt;projectId&lt;/code&gt; and &lt;code&gt;projectKey&lt;/code&gt; are provided, the system will use &lt;code&gt;projectId&lt;/code&gt; for the lookup. &lt;h4&gt;Global permissions&lt;/h4&gt;   The permission value under &lt;code&gt;[root]&lt;/code&gt; is the only required and recognized parameter, as global permissions do not apply to a specific resource.   Example valid filter: &lt;code&gt;permission&#x3D;ADMIN&lt;/code&gt;. &lt;h4&gt;Project permissions&lt;/h4&gt;   - &lt;code&gt;[root]&lt;/code&gt;- specifies the project permission - &lt;code&gt;[root].projectId&lt;/code&gt; - specifies the project ID to lookup the project by - &lt;code&gt;[root].projectKey&lt;/code&gt; - specifies the project key to lookup the project by   Example valid filter: &lt;code&gt;permission.1&#x3D;PROJECT_ADMIN&amp;amp;permission.1.projectKey&#x3D;TEST_PROJECT&lt;/code&gt;. #### Repository permissions   - &lt;code&gt;[root]&lt;/code&gt;- specifies the repository permission - &lt;code&gt;[root].projectId&lt;/code&gt; - specifies the repository ID to lookup the repository by - &lt;code&gt;[root].projectKey&lt;/code&gt; and &lt;code&gt;[root].repositorySlug&lt;/code&gt;- specifies the project key and     repository slug to lookup the repository by; both values &lt;i&gt;need to&lt;/i&gt; be provided for this look up to be     triggered   Example valid filter: &lt;code&gt;permission.2&#x3D;REPO_ADMIN&amp;amp;permission.2.projectKey&#x3D;TEST_PROJECT&amp;amp;permission.2.repositorySlug&#x3D;test_repo&lt;/code&gt;.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { GetUsers2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | Return only users, whose username, name or email address <i>contain</i> the <code> filter</code> value (optional)
    filter: filter_example,
    // string | The \"root\" of a single permission filter, similar to the <code>permission</code> parameter, where \"N\" is a natural number starting from 1. This allows clients to specify multiple permission filters, by providing consecutive filters as <code>permission.1</code>, <code>permission.2</code> etc. Note that the filters numbering has to start with 1 and be continuous for all filters to be processed. The total allowed number of permission filters is 50 and all filters exceeding that limit will be dropped. See the section \"Permission Filters\" above for more details on how the permission filters are processed. (optional)
    permissionN: permissionN_example,
    // string | The \"root\" of a permission filter, whose value must be a valid global, project, or repository permission. Additional filter parameters referring to this filter that specify the resource (project or repository) to apply the filter to must be prefixed with <code>permission.</code>. See the section \"Permission Filters\" above for more details. (optional)
    permission: permission_example,
    // string | return only users who are members of the given group (optional)
    group: group_example,
  } satisfies GetUsers2Request;

  try {
    const data = await api.getUsers2(body);
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
| **filter** | `string` | Return only users, whose username, name or email address &lt;i&gt;contain&lt;/i&gt; the &lt;code&gt; filter&lt;/code&gt; value | [Optional] [Defaults to `undefined`] |
| **permissionN** | `string` | The \&quot;root\&quot; of a single permission filter, similar to the &lt;code&gt;permission&lt;/code&gt; parameter, where \&quot;N\&quot; is a natural number starting from 1. This allows clients to specify multiple permission filters, by providing consecutive filters as &lt;code&gt;permission.1&lt;/code&gt;, &lt;code&gt;permission.2&lt;/code&gt; etc. Note that the filters numbering has to start with 1 and be continuous for all filters to be processed. The total allowed number of permission filters is 50 and all filters exceeding that limit will be dropped. See the section \&quot;Permission Filters\&quot; above for more details on how the permission filters are processed. | [Optional] [Defaults to `undefined`] |
| **permission** | `string` | The \&quot;root\&quot; of a permission filter, whose value must be a valid global, project, or repository permission. Additional filter parameters referring to this filter that specify the resource (project or repository) to apply the filter to must be prefixed with &lt;code&gt;permission.&lt;/code&gt;. See the section \&quot;Permission Filters\&quot; above for more details. | [Optional] [Defaults to `undefined`] |
| **group** | `string` | return only users who are members of the given group | [Optional] [Defaults to `undefined`] |

### Return type

[**RestApplicationUser**](RestApplicationUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users. |  -  |
| **400** | The search request was invalid, which may happen for multiple reasons, among others:   - permission filter for project/repository permission with no parameters specifying the project or     repository to apply the filter to - invalid permission name - permission filter for a project/repository permission pointing to a non-existent project or repository   The exact reason for the error and - in most cases - the request parameter name that had invalid value - will be provided in the error message. |  -  |
| **401** | Authentication failed or was not attempted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewExport

> RestScopesExample previewExport(restExportRequest)

Preview export

Enumerates the projects and repositories that would be exported for a given export request.  All affected repositories will be enumerated explicitly, and while projects are listed as individual items in responses from this endpoint, their presence does not imply that all their repositories are included.  While this endpoint can be used to verify that all selectors in the request apply as intended, it should be noted that a subsequent, actual export might contain a different set of repositories, as they might have been added or deleted in the meantime.  Note that the overall response from this endpoint can become very large when a lot of repositories end up in the selection. This is why the server is streaming the response while it is being generated (as opposed to creating it in memory and then sending it all at once) and it can be consumed in a streaming way, too.  Also, due to the potential size of the response, projects and repositories are listed with fewer details than in other REST responses.  For a more detailed description of selectors, see the endpoint documentation for starting an export.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { PreviewExportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestExportRequest | the export request (optional)
    restExportRequest: ...,
  } satisfies PreviewExportRequest;

  try {
    const data = await api.previewExport(body);
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
| **restExportRequest** | [RestExportRequest](RestExportRequest.md) | the export request | [Optional] |

### Return type

[**RestScopesExample**](RestScopesExample.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The effectively selected projects and repositories. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to generate a preview. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## previewMeshMigration

> ExamplePreviewMigration previewMeshMigration(restMeshMigrationRequest)

Preview Mesh migration

Enumerates the projects and repositories that would be migrated for a given request.  All affected repositories will be enumerated explicitly, and while projects are listed as individual items in responses from this endpoint, their presence does not imply that all their repositories are included.  While this endpoint can be used to verify that all selectors in the request apply as intended, it should be noted that a subsequent, actual export might contain a different set of repositories, as they might have been added or deleted in the meantime.  Note that the overall response from this endpoint can become very large when a lot of repositories end up in the selection. This is why the server is streaming the response while it is being generated (as opposed to creating it in memory and then sending it all at once) and it can be consumed in a streaming way, too.  Also, due to the potential size of the response, projects and repositories are listed with fewer details than in other REST responses.  The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { PreviewMeshMigrationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestMeshMigrationRequest | The export request (optional)
    restMeshMigrationRequest: ...,
  } satisfies PreviewMeshMigrationRequest;

  try {
    const data = await api.previewMeshMigration(body);
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
| **restMeshMigrationRequest** | [RestMeshMigrationRequest](RestMeshMigrationRequest.md) | The export request | [Optional] |

### Return type

[**ExamplePreviewMigration**](ExamplePreviewMigration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enumeration of projects and repositories that would be migrated for a given request. |  -  |
| **400** | The request was invalid or missing. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## read

> read(scriptId)

Get hook script content

Retrieves the hook script content.  This endpoint requires **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { ReadRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the hook script
    scriptId: scriptId_example,
  } satisfies ReadRequest;

  try {
    const data = await api.read(body);
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
| **scriptId** | `string` | The ID of the hook script | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `text/plain;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The hook script content. |  -  |
| **401** | The currently authenticated user has insufficient permissions. |  -  |
| **404** | The hook script ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerNewMeshNode

> RestMeshNode registerNewMeshNode(restMeshNode)

Register new Mesh node

Register a new Mesh node.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { RegisterNewMeshNodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestMeshNode | The request specifying the new Mesh node. (optional)
    restMeshNode: ...,
  } satisfies RegisterNewMeshNodeRequest;

  try {
    const data = await api.registerNewMeshNode(body);
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
| **restMeshNode** | [RestMeshNode](RestMeshNode.md) | The request specifying the new Mesh node. | [Optional] |

### Return type

[**RestMeshNode**](RestMeshNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly registered Mesh node. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchMeshMigrationRepos

> SearchMeshMigrationRepos200Response searchMeshMigrationRepos(migrationId, projectKey, name, state, remote, start, limit)

Find repositories by Mesh migration state

Searches for repositories in the system matching the specified criteria and enriches their MeshMigrationQueueState migration state if a migration is currently in progress.   The currently active migration can optionally be specified by passing a migrationId, if known. If this isn\&#39;t passed, an attempt is made to locate the active migration and its ID is used.   If a migration is currently active, only repositories that are a part of the migration are filtered and returned. Otherwise, all repositories in the systems are filtered and returned.   Filtering by state is ignored when no migration is currently in progress. In such a case, results are not enriched with their MeshMigrationQueueState migration state.   The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SearchMeshMigrationReposRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | (optional) The currently active migration job. If not passed, this is looked up internally. (optional)
    migrationId: migrationId_example,
    // string | (optional) The project key. Can be specified more than once to filter by more than one project. (optional)
    projectKey: projectKey_example,
    // string | (optional) The repository name (optional)
    name: name_example,
    // string | (optional) If a migration is active, the MeshMigrationQueueState state to filter results by. Can be specified more than once to filter by more than one state. (optional)
    state: state_example,
    // string | (optional) Whether the repository has been fully migrated to Mesh. If not present, all repositories are considered regardless of where they\'re located. (optional)
    remote: remote_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies SearchMeshMigrationReposRequest;

  try {
    const data = await api.searchMeshMigrationRepos(body);
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
| **migrationId** | `string` | (optional) The currently active migration job. If not passed, this is looked up internally. | [Optional] [Defaults to `undefined`] |
| **projectKey** | `string` | (optional) The project key. Can be specified more than once to filter by more than one project. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | (optional) The repository name | [Optional] [Defaults to `undefined`] |
| **state** | `string` | (optional) If a migration is active, the MeshMigrationQueueState state to filter results by. Can be specified more than once to filter by more than one state. | [Optional] [Defaults to `undefined`] |
| **remote** | `string` | (optional) Whether the repository has been fully migrated to Mesh. If not present, all repositories are considered regardless of where they\&#39;re located. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchMeshMigrationRepos200Response**](SearchMeshMigrationRepos200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories matching the specified criteria. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **404** | No migration job with the given ID exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## set2

> RestUserRateLimitSettings set2(restBulkUserRateLimitSettingsUpdateRequest)

Set rate limit settings for users

Sets the given rate limit settings for the given users.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Set2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestBulkUserRateLimitSettingsUpdateRequest (optional)
    restBulkUserRateLimitSettingsUpdateRequest: ...,
  } satisfies Set2Request;

  try {
    const data = await api.set2(body);
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
| **restBulkUserRateLimitSettingsUpdateRequest** | [RestBulkUserRateLimitSettingsUpdateRequest](RestBulkUserRateLimitSettingsUpdateRequest.md) |  | [Optional] |

### Return type

[**RestUserRateLimitSettings**](RestUserRateLimitSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated user settings. |  -  |
| **400** | One of the following valid state error cases occurred (check the error message for more details):  - The request is empty - No users are provided in the request - One or more of the users are invalid - Whitelisted is false or not provided, and no settings are provided either - Whitelisted is false or not provided, settings are provided,   but do not contain both capacity and fillRate - Whitelisted is false or not provided, settings are provided,   but capacity and fillRate are not positive integers - Whitelisted is true, and settings are provided (only one must be provided)  |  -  |
| **401** | The currently authenticated user has insufficient permissions to set user settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## set3

> RestUserRateLimitSettings set3(userSlug, restUserRateLimitSettingsUpdateRequest)

Set rate limit settings for user

Sets the given rate limit settings for the given user.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { Set3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
    // RestUserRateLimitSettingsUpdateRequest (optional)
    restUserRateLimitSettingsUpdateRequest: ...,
  } satisfies Set3Request;

  try {
    const data = await api.set3(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |
| **restUserRateLimitSettingsUpdateRequest** | [RestUserRateLimitSettingsUpdateRequest](RestUserRateLimitSettingsUpdateRequest.md) |  | [Optional] |

### Return type

[**RestUserRateLimitSettings**](RestUserRateLimitSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated user settings |  -  |
| **400** | One of the following valid state error cases occurred (check the error message for more details):  - The request is empty - Whitelisted is false or not provided, and no settings are provided either - Whitelisted is false or not provided, settings are provided,   but do not contain both capacity and fillRate - Whitelisted is false or not provided, settings are provided,   but capacity and fillRate are not positive integers - Whitelisted is true, and settings are provided (only one must be provided)    |  -  |
| **401** | The currently authenticated user has insufficient permissions to set user settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setBanner

> setBanner(setBannerRequest)

Update/Set announcement banner

Sets the announcement banner with the provided JSON. Only users authenticated as Admins may call this resource

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetBannerOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // SetBannerRequest (optional)
    setBannerRequest: ...,
  } satisfies SetBannerOperationRequest;

  try {
    const data = await api.setBanner(body);
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
| **setBannerRequest** | [SetBannerRequest](SetBannerRequest.md) |  | [Optional] |

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
| **204** | The banner was set successfully |  -  |
| **400** | There was malformed or incorrect data in the provided JSON |  -  |
| **401** | The user does not have permission to access the banner service through this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultBranch

> setDefaultBranch(setDefaultBranchRequest)

Update/Set default branch

Configures the global default branch, which is used when creating new repositories if an explicit default branch is not specified.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetDefaultBranchOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // SetDefaultBranchRequest (optional)
    setDefaultBranchRequest: ...,
  } satisfies SetDefaultBranchOperationRequest;

  try {
    const data = await api.setDefaultBranch(body);
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
| **setDefaultBranchRequest** | [SetDefaultBranchRequest](SetDefaultBranchRequest.md) |  | [Optional] |

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
| **204** | The default branch has been set. |  -  |
| **401** | The current user does not have sufficient permissions to configure the global default branch. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setLevel

> setLevel(levelName, loggerName)

Set log level

Set the current log level for a given logger.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetLevelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The level to set the logger to. Either TRACE, DEBUG, INFO, WARN or ERROR
    levelName: levelName_example,
    // string | The name of the logger.
    loggerName: loggerName_example,
  } satisfies SetLevelRequest;

  try {
    const data = await api.setLevel(body);
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
| **levelName** | `string` | The level to set the logger to. Either TRACE, DEBUG, INFO, WARN or ERROR | [Defaults to `undefined`] |
| **loggerName** | `string` | The name of the logger. | [Defaults to `undefined`] |

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
| **204** | The log level was successfully changed. |  -  |
| **400** | The log level was invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to set the log level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setMailConfig

> RestMailConfiguration setMailConfig(setMailConfigRequest)

Update mail configuration

Updates the mail configuration.   The authenticated user must have the &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetMailConfigOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // SetMailConfigRequest (optional)
    setMailConfigRequest: ...,
  } satisfies SetMailConfigOperationRequest;

  try {
    const data = await api.setMailConfig(body);
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
| **setMailConfigRequest** | [SetMailConfigRequest](SetMailConfigRequest.md) |  | [Optional] |

### Return type

[**RestMailConfiguration**](RestMailConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated mail configuration. |  -  |
| **400** | The mail configuration was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update themail configuration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setRepositoryArchivePolicy

> RestRepositoryPolicy setRepositoryArchivePolicy(restRepositoryPolicy)

Update repository archive policy

Sets the repository archive policy for the instance.  The authenticated user must have &lt;b&gt;SYS_ADMIN&lt;/b&gt; permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetRepositoryArchivePolicyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestRepositoryPolicy | The request containing the details of the policy. (optional)
    restRepositoryPolicy: ...,
  } satisfies SetRepositoryArchivePolicyRequest;

  try {
    const data = await api.setRepositoryArchivePolicy(body);
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
| **restRepositoryPolicy** | [RestRepositoryPolicy](RestRepositoryPolicy.md) | The request containing the details of the policy. | [Optional] |

### Return type

[**RestRepositoryPolicy**](RestRepositoryPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the repository archive policy for the instance |  -  |
| **400** | The permission was invalid or does not exist |  -  |
| **401** | The currently authenticated user has insufficient permissions to set the repository archive policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setRepositoryDeletePolicy

> RestRepositoryPolicy setRepositoryDeletePolicy(restRepositoryPolicy)

Update the repository delete policy

Sets the repository delete policy for the instance.  The authenticated user must have &lt;b&gt;SYS_ADMIN&lt;/b&gt; permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetRepositoryDeletePolicyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestRepositoryPolicy | The request containing the details of the policy. (optional)
    restRepositoryPolicy: ...,
  } satisfies SetRepositoryDeletePolicyRequest;

  try {
    const data = await api.setRepositoryDeletePolicy(body);
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
| **restRepositoryPolicy** | [RestRepositoryPolicy](RestRepositoryPolicy.md) | The request containing the details of the policy. | [Optional] |

### Return type

[**RestRepositoryPolicy**](RestRepositoryPolicy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the repository delete policy for the instance |  -  |
| **400** | The permission was invalid or does not exist |  -  |
| **401** | The currently authenticated user has insufficient permissions to set the repository delete policy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setRootLevel

> setRootLevel(levelName)

Set root log level

Set the current log level for the root logger.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetRootLevelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | the level to set the logger to. Either TRACE, DEBUG, INFO, WARN or ERROR
    levelName: levelName_example,
  } satisfies SetRootLevelRequest;

  try {
    const data = await api.setRootLevel(body);
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
| **levelName** | `string` | the level to set the logger to. Either TRACE, DEBUG, INFO, WARN or ERROR | [Defaults to `undefined`] |

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
| **204** | The log level was successfully changed. |  -  |
| **400** | The log level was invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to set the log level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSenderAddress

> setSenderAddress(body)

Update server mail address

Updates the server email address   The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetSenderAddressRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string (optional)
    body: body_example,
  } satisfies SetSenderAddressRequest;

  try {
    const data = await api.setSenderAddress(body);
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
| **body** | `string` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The from address used in notification emails |  -  |
| **400** | The server email address was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the server email address. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSettings2

> RestLoggingSettings setSettings2(setSettings2Request)

Set debug logging and profiling

Set whether debug logging and profiling should be enabled. This setting persists on restarts.  The authenticated user must have &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetSettings2OperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // SetSettings2Request (optional)
    setSettings2Request: ...,
  } satisfies SetSettings2OperationRequest;

  try {
    const data = await api.setSettings2(body);
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
| **setSettings2Request** | [SetSettings2Request](SetSettings2Request.md) |  | [Optional] |

### Return type

[**RestLoggingSettings**](RestLoggingSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Debug logging and profiling were successfully updated. |  -  |
| **400** | The settings were not correctly specified. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update these settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSettings3

> RestRateLimitSettings setSettings3(restRateLimitSettings)

Set rate limit

Sets the rate limit settings for the instance.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { SetSettings3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestRateLimitSettings | Sets the rate limit settings for the instance.  The authenticated user must have <strong>ADMIN</strong> permission to call this resource. (optional)
    restRateLimitSettings: ...,
  } satisfies SetSettings3Request;

  try {
    const data = await api.setSettings3(body);
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
| **restRateLimitSettings** | [RestRateLimitSettings](RestRateLimitSettings.md) | Sets the rate limit settings for the instance.  The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource. | [Optional] |

### Return type

[**RestRateLimitSettings**](RestRateLimitSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the updated rate limit plugin settings for the instance. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details):  - The request is empty - The enabled field of the request is not a boolean - The defaultSettings field of the request does not contain both capacity and fillRate - The capacity and fillRate are not positive integers    |  -  |
| **401** | The currently authenticated user has insufficient permissions to set rate limit settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startExport

> RestJob startExport(restExportRequest)

Start export job

Starts a background job that exports the selected repositories.  Only 2 concurrent exports are supported _per cluster node_. If a request ends up on a node that is already running that many export jobs, the request will be rejected and an error returned.  The response includes a description of the job that has been started, and its ID can be used to query these details again, including the current progress, warnings and errors that occurred while processing the job, and to interrupt and cancel the execution of this job.  The request to start an export is similar to the one for previewing an export. Additionally, it accepts an optional parameter, &#x60;exportLocation&#x60;, which can be used to specify a _relative_ path within &#x60;data/migration/export&#x60; in the shared home directory. No locations outside of that directory will be accepted for exports.  There are essentially three ways to select repositories for export. Regardless of which you use, a few general rules apply:  - You can supply a list of selectors. The selection will be additive. - Repositories that are selected more than once due to overlapping selectors will be de-duplicated and effectively exported only once. - For every selected repository, its full fork hierarchy will be considered selected, even if parts of that hierarchy would otherwise not be matched by the provided selectors. For example, when you explicitly select a single repository only, but that repository is a fork, then its origin will be exported (and eventually imported), too.  Now, a single repository can be selected like this:  &#x60;&#x60;&#x60;    {       \&quot;projectKey\&quot;: \&quot;PRJ\&quot;,       \&quot;slug\&quot;: \&quot;my-repo\&quot; }  &#x60;&#x60;&#x60;  Second, all repositories in a specific project can be selected like this:  &#x60;&#x60;&#x60;    {       \&quot;projectKey\&quot;: \&quot;PRJ\&quot;,       \&quot;slug\&quot;: *\&quot; }  &#x60;&#x60;&#x60;  And third, all projects and repositories in the system would be selected like this:  &#x60;&#x60;&#x60;    {       \&quot;projectKey\&quot;: \&quot;*\&quot;,       \&quot;slug\&quot;: *\&quot; }  &#x60;&#x60;&#x60;  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { StartExportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestExportRequest | The request (optional)
    restExportRequest: ...,
  } satisfies StartExportRequest;

  try {
    const data = await api.startExport(body);
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
| **restExportRequest** | [RestExportRequest](RestExportRequest.md) | The request | [Optional] |

### Return type

[**RestJob**](RestJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details about the export job. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to start anexport |  -  |
| **503** | The export could not be started because the limit of concurrent migration jobs has been reached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startImport

> RestJob startImport(restImportRequest)

Start import job

Starts a background job that imports the specified archive.  Only 1 import at a time is supported _per cluster_. If another request is made while an import is already running, the request will be rejected and an error returned.  The path in the request must point to a valid archive file. The file must be located within the &#x60;data/migration/import&#x60; directory in the shared home directory.  The authenticated user must have **ADMIN** permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { StartImportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestImportRequest | The request (optional)
    restImportRequest: ...,
  } satisfies StartImportRequest;

  try {
    const data = await api.startImport(body);
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
| **restImportRequest** | [RestImportRequest](RestImportRequest.md) | The request | [Optional] |

### Return type

[**RestJob**](RestJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details about the export job. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to start an import. |  -  |
| **503** | The import could not be started because the limit of concurrent migration jobs has been reached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startMeshMigration

> RestJob startMeshMigration(startMeshMigrationRequest)

Start Mesh migration job

Starts a background job that migrates selected projects/repositories to Mesh.   Only 1 job is supported _per cluster_.  The response includes a description of the job that has been started, and its ID can be used to query these details again, including the current progress, and to interrupt and cancel the execution of this job.   The request to start a migration is similar to the one for previewing a migration.   There are essentially three ways to select repositories for migration. Regardless of which you use, a few general rules apply:       - You can supply a list of repository IDs and project IDs. The selection will be additive. All repositories     in the system are migrated if both lists are empty.     - Repositories that are selected more than once due to overlapping IDs will be de-duplicated and     effectively migrated only once.     - For every selected repository, its full fork hierarchy will be considered selected, even if parts of that     hierarchy would otherwise not be matched by the provided IDs. For example, when you explicitly     select a single repository only, but that repository is a fork, then its origin will be migrated too.   Now, a single repository can be selected like this:   &#x60;&#x60;&#x60;       {      \&quot;repositoryIds\&quot;: [1]      } &#x60;&#x60;&#x60;  Multiple repositories can be selected like this:    &#x60;&#x60;&#x60;       {      \&quot;repositoryIds\&quot;: [1, 2]      } &#x60;&#x60;&#x60;  Second, all repositories in a specific project can be selected like this:    &#x60;&#x60;&#x60;       {      \&quot;projectIds\&quot;: [1]      } &#x60;&#x60;&#x60;  And third, all projects and repositories in the system would be selected like this:    &#x60;&#x60;&#x60;       {      \&quot;projectIds\&quot;: [],      \&quot;repositoryIds\&quot;: []      } &#x60;&#x60;&#x60;  The authenticated user must have **SYS_ADMIN** permission to call this resource.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { StartMeshMigrationOperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // StartMeshMigrationRequest (optional)
    startMeshMigrationRequest: ...,
  } satisfies StartMeshMigrationOperationRequest;

  try {
    const data = await api.startMeshMigration(body);
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
| **startMeshMigrationRequest** | [StartMeshMigrationRequest](StartMeshMigrationRequest.md) |  | [Optional] |

### Return type

[**RestJob**](RestJob.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The started job |  -  |
| **400** | The migration request failed one/more validation checks. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |
| **503** | A migration job is already in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGlobalSettings

> updateGlobalSettings(restSshKeySettings)

Update global SSH key settings

Updates the global settings that enforces the maximum expiry of SSH keys and restrictions on SSH key types.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateGlobalSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestSshKeySettings | A request containing expiry length to be set for SSH keys and a list of SSH key type restrictions. (optional)
    restSshKeySettings: ...,
  } satisfies UpdateGlobalSettingsRequest;

  try {
    const data = await api.updateGlobalSettings(body);
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
| **restSshKeySettings** | [RestSshKeySettings](RestSshKeySettings.md) | A request containing expiry length to be set for SSH keys and a list of SSH key type restrictions. | [Optional] |

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
| **204** | The ssh key global settings were updated. |  -  |
| **400** | The request was invalid, which may be due to:   - attempted to set expiry to less than 1 day - attempted to set expiry using partial days - attempted to set a restriction on a key type which was invalid   The exact reason for the error will be provided in the error message. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update these settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateHookScript

> RestHookScript updateHookScript(scriptId, examplePutMultipartFormData)

Update a hook script

Updates a hook script.  This endpoint requires **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateHookScriptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the hook script
    scriptId: scriptId_example,
    // ExamplePutMultipartFormData | The multipart form data containing the hook script (optional)
    examplePutMultipartFormData: ...,
  } satisfies UpdateHookScriptRequest;

  try {
    const data = await api.updateHookScript(body);
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
| **scriptId** | `string` | The ID of the hook script | [Defaults to `undefined`] |
| **examplePutMultipartFormData** | [ExamplePutMultipartFormData](ExamplePutMultipartFormData.md) | The multipart form data containing the hook script | [Optional] |

### Return type

[**RestHookScript**](RestHookScript.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated hook script. |  -  |
| **401** | The currently authenticated user has insufficient permissions. |  -  |
| **404** | The hook script ID supplied does not exist. |  -  |
| **409** | A hook script with the same name already exists. |  -  |
| **422** | One or more fields to update must be specified: content, description and/or name. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateLicense

> RestBitbucketLicense updateLicense(restBitbucketLicense)

Update license

Decodes the provided encoded license and sets it as the active license. If no license was provided, a 400 is returned. If the license cannot be decoded, or cannot be applied, a 409 is returned. Some possible reasons a license may not be applied include:   - It is for a different product - It is already expired   Otherwise, if the license is updated successfully, details for the new license are returned with a 200 response.  &lt;b&gt;Warning&lt;/b&gt;: It is possible to downgrade the license during update, applying a license with a lower number of permitted users. If the number of currently-licensed users exceeds the limits of the new license, pushing will be disabled until the licensed user count is brought into compliance with the new license.  The authenticated user must have &lt;b&gt;SYS_ADMIN&lt;/b&gt; permission. &lt;b&gt;ADMIN&lt;/b&gt; users may &lt;i&gt;view&lt;/i&gt; the current license details, but they may not &lt;i&gt;update&lt;/i&gt; the license.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateLicenseRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // RestBitbucketLicense | a JSON payload containing the encoded license to apply (optional)
    restBitbucketLicense: ...,
  } satisfies UpdateLicenseRequest;

  try {
    const data = await api.updateLicense(body);
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
| **restBitbucketLicense** | [RestBitbucketLicense](RestBitbucketLicense.md) | a JSON payload containing the encoded license to apply | [Optional] |

### Return type

[**RestBitbucketLicense**](RestBitbucketLicense.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly-installed license. |  -  |
| **400** | No encoded license was provided in the JSON body for the POST. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the license. |  -  |
| **409** | The encoded license could not be decoded, or it is not valid for use on this server. Some possible reasons a license may not be applied include: it may be for a different product, it may have already expired, or this Bitbucket version doesn\&#39;t support Server licenses. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMeshNode

> RestMeshNode updateMeshNode(id, restMeshNode)

Update Mesh node

Update a Mesh node.  The authenticated user must have **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateMeshNodeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The ID of the Mesh node to update.
    id: id_example,
    // RestMeshNode | The request specifying the updated Mesh node. (optional)
    restMeshNode: ...,
  } satisfies UpdateMeshNodeRequest;

  try {
    const data = await api.updateMeshNode(body);
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
| **id** | `string` | The ID of the Mesh node to update. | [Defaults to `undefined`] |
| **restMeshNode** | [RestMeshNode](RestMeshNode.md) | The request specifying the updated Mesh node. | [Optional] |

### Return type

[**RestMeshNode**](RestMeshNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated Mesh node. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSettings

> updateSettings(userSlug, exampleSettingsMap)

Update user settings

Update the entries of a map of user setting key/values for a specific user identified by the user slug.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug.
    userSlug: userSlug_example,
    // ExampleSettingsMap | A map with the UserSettings entries which must be updated. (optional)
    exampleSettingsMap: ...,
  } satisfies UpdateSettingsRequest;

  try {
    const data = await api.updateSettings(body);
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
| **userSlug** | `string` | The user slug. | [Defaults to `undefined`] |
| **exampleSettingsMap** | [ExampleSettingsMap](ExampleSettingsMap.md) | A map with the UserSettings entries which must be updated. | [Optional] |

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
| **204** | The UserSettings were updated successfully |  -  |
| **401** | The currently authenticated user is not a project administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserDetails1

> RestApplicationUser updateUserDetails1(userUpdateWithCredentials)

Update user details

Update the currently authenticated user\&#39;s details. The update will always be applied to the currently authenticated user.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateUserDetails1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // UserUpdateWithCredentials | The user update details (optional)
    userUpdateWithCredentials: ...,
  } satisfies UpdateUserDetails1Request;

  try {
    const data = await api.updateUserDetails1(body);
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
| **userUpdateWithCredentials** | [UserUpdateWithCredentials](UserUpdateWithCredentials.md) | The user update details | [Optional] |

### Return type

[**RestApplicationUser**](RestApplicationUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated user. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | Authentication failed or was not attempted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserPassword1

> updateUserPassword1(userPasswordUpdate)

Set password

Update the currently authenticated user\&#39;s password.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UpdateUserPassword1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // UserPasswordUpdate | The password update details (optional)
    userPasswordUpdate: ...,
  } satisfies UpdateUserPassword1Request;

  try {
    const data = await api.updateUserPassword1(body);
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
| **userPasswordUpdate** | [UserPasswordUpdate](UserPasswordUpdate.md) | The password update details | [Optional] |

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
| **204** | The user\&#39;s password was successfully updated. |  -  |
| **400** | The request was malformed or the old password was incorrect. |  -  |
| **401** | Authentication failed or was not attempted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadAvatar1

> uploadAvatar1(userSlug, xAtlassianToken, avatar)

Update user avatar

Update the avatar for the user with the supplied &lt;strong&gt;slug&lt;/strong&gt;.   This resource accepts POST multipart form data, containing a single image in a form-field named \&#39;avatar\&#39;.   There are configurable server limits on both the dimensions (1024x1024 pixels by default) and uploaded file size (1MB by default). Several different image formats are supported, but &lt;strong&gt;PNG&lt;/strong&gt; and &lt;strong&gt;JPEG&lt;/strong&gt; are preferred due to the file size limit.   This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to pass the XSRF check the caller needs to send an &lt;code&gt;X-Atlassian-Token&lt;/code&gt; HTTP header with the value &lt;code&gt;no-check&lt;/code&gt;.   An example &lt;a href&#x3D;\&quot;http://curl.haxx.se/\&quot;&gt;curl&lt;/a&gt; request to upload an image name \&#39;avatar.png\&#39; would be: &#x60;&#x60;&#x60; curl -X POST -u username:password -H \&quot;X-Atlassian-Token: no-check\&quot; http://example.com/rest/api/latest/users/jdoe/avatar.png -F avatar&#x3D;@avatar.png &#x60;&#x60;&#x60;   Users are always allowed to update their own avatar. To update someone else\&#39;s avatar the authenticated user must have global &lt;strong&gt;ADMIN&lt;/strong&gt; permission, or global &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; permission to update a &lt;strong&gt;SYS_ADMIN&lt;/strong&gt; user\&#39;s avatar.

### Example

```ts
import {
  Configuration,
  SystemMaintenanceApi,
} from 'bitbucket-api';
import type { UploadAvatar1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SystemMaintenanceApi();

  const body = {
    // string | The user slug
    userSlug: userSlug_example,
    // string | This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to pass the XSRF check the caller needs to send an <code>X-Atlassian-Token</code> HTTP header with the value <code>no-check</code>. (optional)
    xAtlassianToken: no-check,
    // Blob | The avatar file to upload. (optional)
    avatar: BINARY_DATA_HERE,
  } satisfies UploadAvatar1Request;

  try {
    const data = await api.uploadAvatar1(body);
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
| **userSlug** | `string` | The user slug | [Defaults to `undefined`] |
| **xAtlassianToken** | `string` | This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to pass the XSRF check the caller needs to send an &lt;code&gt;X-Atlassian-Token&lt;/code&gt; HTTP header with the value &lt;code&gt;no-check&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **avatar** | `Blob` | The avatar file to upload. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The avatar was uploaded successfully. |  * Location - The Location response header which indicates the URL of the avatar. <br>  |
| **401** | The currently authenticated user has insufficient permissions to update the avatar. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

