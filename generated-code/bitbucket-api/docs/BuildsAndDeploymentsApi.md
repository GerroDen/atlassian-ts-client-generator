# BuildsAndDeploymentsApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**_delete**](BuildsAndDeploymentsApi.md#_delete) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Delete a specific build status |
| [**add**](BuildsAndDeploymentsApi.md#add) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Store a build status |
| [**addAnnotations**](BuildsAndDeploymentsApi.md#addannotations) | **POST** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Add Code Insights annotations |
| [**createOrUpdateDeployment**](BuildsAndDeploymentsApi.md#createorupdatedeployment) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Create or update a deployment |
| [**createRequiredBuildsMergeCheck**](BuildsAndDeploymentsApi.md#createrequiredbuildsmergecheck) | **POST** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition | Create a required builds merge check |
| [**delete1**](BuildsAndDeploymentsApi.md#delete1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Delete a deployment |
| [**deleteACodeInsightsReport**](BuildsAndDeploymentsApi.md#deleteacodeinsightsreport) | **DELETE** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Delete a Code Insights report |
| [**deleteAnnotations**](BuildsAndDeploymentsApi.md#deleteannotations) | **DELETE** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Delete Code Insights annotations |
| [**deleteRequiredBuildsMergeCheck**](BuildsAndDeploymentsApi.md#deleterequiredbuildsmergecheck) | **DELETE** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Delete a required builds merge check |
| [**get**](BuildsAndDeploymentsApi.md#get) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/builds | Get a specific build status |
| [**get1**](BuildsAndDeploymentsApi.md#get1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/deployments | Get a deployment |
| [**getACodeInsightsReport**](BuildsAndDeploymentsApi.md#getacodeinsightsreport) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Get a Code Insights report |
| [**getAnnotations**](BuildsAndDeploymentsApi.md#getannotations) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations | Get Code Insights annotations for a report |
| [**getAnnotations1**](BuildsAndDeploymentsApi.md#getannotations1) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/annotations | Get Code Insights annotations for a commit |
| [**getBuildStatusStats**](BuildsAndDeploymentsApi.md#getbuildstatusstats) | **GET** /build-status/latest/commits/stats/{commitId} | Get build status statistics for commit |
| [**getMultipleBuildStatusStats**](BuildsAndDeploymentsApi.md#getmultiplebuildstatusstats) | **POST** /build-status/latest/commits/stats | Get build status statistics for multiple commits |
| [**getPageOfRequiredBuildsMergeChecks**](BuildsAndDeploymentsApi.md#getpageofrequiredbuildsmergechecks) | **GET** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/conditions | Get required builds merge checks |
| [**getReports**](BuildsAndDeploymentsApi.md#getreports) | **GET** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports | Get all Code Insights reports for a commit |
| [**setACodeInsightsReport**](BuildsAndDeploymentsApi.md#setacodeinsightsreport) | **PUT** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key} | Create a Code Insights report |
| [**setAnnotation**](BuildsAndDeploymentsApi.md#setannotation) | **PUT** /insights/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/reports/{key}/annotations/{externalId} | Create or replace a Code Insights annotation |
| [**updateRequiredBuildsMergeCheck**](BuildsAndDeploymentsApi.md#updaterequiredbuildsmergecheck) | **PUT** /required-builds/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Update a required builds merge check |



## _delete

> _delete(projectKey, commitId, repositorySlug, key)

Delete a specific build status

Delete a specific build status.   The authenticated user must have **REPO_ADMIN** permission for the provided repository.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { DeleteRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | the key of the build status
    key: key_example,
  } satisfies DeleteRequest;

  try {
    const data = await api._delete(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | the key of the build status | [Defaults to `undefined`] |

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
| **204** | The build status associated with the provided commit and key has been deleted |  -  |
| **400** | The request has failed validation |  -  |
| **401** | The currently authenticated user has insufficient permissions this repository |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## add

> add(projectKey, commitId, repositorySlug, restBuildStatusSetRequest)

Store a build status

Store a build status.   The authenticated user must have **REPO_READ** permission for the repository that this build status is for. The request can also be made with anonymous 2-legged OAuth.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { AddRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestBuildStatusSetRequest | The contents of the build status request are: These fields are **required**:   - **key**: The string referring to this branch plan/job - **state**: The build status state, one of: \"SUCCESSFUL\", \"FAILED\", \"INPROGRESS\", \"CANCELLED\", \"UNKNOWN\" - **url**: URL referring to the build result page in the CI tool.   These fields are optional:   - **buildNumber** (optional): A unique identifier for this particular run of a plan< - **dateAdded** (optional): milliseconds since epoch. If not provided current date is used. - **description** (optional): Describes the build result - **duration** (optional): Duration of a completed build in milliseconds. - **name** (optional): A short string that describes the build plan - **parent** (optional): The identifier for the plan or job that ran the branch plan that produced this build status. - **ref** (optional): The fully qualified git reference e.g. refs/heads/master. - **testResults** (optional): A summary of the passed, failed and skipped tests.  (optional)
    restBuildStatusSetRequest: ...,
  } satisfies AddRequest;

  try {
    const data = await api.add(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restBuildStatusSetRequest** | [RestBuildStatusSetRequest](RestBuildStatusSetRequest.md) | The contents of the build status request are: These fields are **required**:   - **key**: The string referring to this branch plan/job - **state**: The build status state, one of: \&quot;SUCCESSFUL\&quot;, \&quot;FAILED\&quot;, \&quot;INPROGRESS\&quot;, \&quot;CANCELLED\&quot;, \&quot;UNKNOWN\&quot; - **url**: URL referring to the build result page in the CI tool.   These fields are optional:   - **buildNumber** (optional): A unique identifier for this particular run of a plan&lt; - **dateAdded** (optional): milliseconds since epoch. If not provided current date is used. - **description** (optional): Describes the build result - **duration** (optional): Duration of a completed build in milliseconds. - **name** (optional): A short string that describes the build plan - **parent** (optional): The identifier for the plan or job that ran the branch plan that produced this build status. - **ref** (optional): The fully qualified git reference e.g. refs/heads/master. - **testResults** (optional): A summary of the passed, failed and skipped tests.  | [Optional] |

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
| **204** | The build status was posted |  -  |
| **400** | The build status was not added as the request was invalid. This could be because of a number of things:   - an invalid commit hash was provided - build key was blank or longer than 255 characters - invalid branch was provided - invalid state was provided - build status url was blank or longer than 450 characters  The specifics will be included in the error message. |  -  |
| **401** | The currently authenticated user has insufficient permissions to push a build status to this repository |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addAnnotations

> addAnnotations(projectKey, commitId, repositorySlug, key, restBulkAddInsightAnnotationRequest)

Add Code Insights annotations

Add annotations to the given report. The request should be a JSON object mapping the string \&quot;annotations\&quot; to an array of maps containing the annotation data, as described below. See also the example request.  A few things to note:- Annotations are an extension of a report, so a report must first exist in order to post annotations.   Annotations are posted separately from the report, and can be posted in bulk using this endpoint. - Only the annotations that are on lines changed in the unified diff will be displayed. This means it is  likely not all annotations posted will be displayed on the pull request  It also means that if the user is viewing a side-by-side diff,  commit diff or iterative review diff they will not be able to view the annotations. - A report cannot have more than 1000 annotations by default, however this property is congurable at an  instance level. If the request would result in more than the maximum number of annotations being stored  then the entire request is rejected and no new annotations are stored.  - There is no de-duplication of annotations on Bitbucket so be sure that reruns of builds will first  delete the report and annotations before creating them.  # Annotation parameters  |Parameter|Description|Required?|Restrictions|Type| |--- |--- |--- |--- |--- | |path|The path of the file on which this annotation should be placed. This is the path of the filerelative to the git repository. If no path is provided, then it will appear in the overview modalon all pull requests where the tip of the branch is the given commit, regardless of which files weremodified.|No||String| |line|The line number that the annotation should belong to. If no line number is provided, then it willdefault to 0 and in a pull request it will appear at the top of the file specified by the path field.|No|Non-negative integer|Integer| |message|The message to display to users|Yes|The maximum length accepted is 2000 characters, however the user interface may truncate this valuefor display purposes. We recommend that the message is short and succinct, with further detailsavailable to the user if needed on the page linked to by the the annotation link.|String| |severity|The severity of the annotation|Yes|One of: LOW, MEDIUM, HIGH|String| |link|An http or https URL representing the location of the annotation in the external tool|No||String| |type|The type of annotation posted|No|One of: VULNERABILITY, CODE_SMELL, BUG|String| |externalId|If the caller requires a link to get or modify this annotation, then an ID must be provided. It isnot used or required by Bitbucket, but only by the annotation creator for updating or deleting thisspecific annotation.|No|A string value shorter than 450 characters|String|

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { AddAnnotationsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The key of the report to which this annotation belongs.
    key: key_example,
    // RestBulkAddInsightAnnotationRequest | The annotations to add. (optional)
    restBulkAddInsightAnnotationRequest: ...,
  } satisfies AddAnnotationsRequest;

  try {
    const data = await api.addAnnotations(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The key of the report to which this annotation belongs. | [Defaults to `undefined`] |
| **restBulkAddInsightAnnotationRequest** | [RestBulkAddInsightAnnotationRequest](RestBulkAddInsightAnnotationRequest.md) | The annotations to add. | [Optional] |

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
| **204** | An empty response indicating that the request succeeded. |  -  |
| **401** | The currently authenticated user is not the author of the report, or the author no longer has sufficient permissions (&lt;code&gt;REPO_READ&lt;/code&gt;). |  -  |
| **404** | The specified project, repository, commit, or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrUpdateDeployment

> RestDeployment createOrUpdateDeployment(projectKey, commitId, repositorySlug, restDeploymentSetRequest)

Create or update a deployment

Create or update a deployment.    The authenticated user must have REPO_READ permission for the repository.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { CreateOrUpdateDeploymentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the commitId that was deployed as indicated by the path
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // RestDeploymentSetRequest | the details of the deployment to create, as detailed by the request body (optional)
    restDeploymentSetRequest: ...,
  } satisfies CreateOrUpdateDeploymentRequest;

  try {
    const data = await api.createOrUpdateDeployment(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **commitId** | `string` | the commitId that was deployed as indicated by the path | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **restDeploymentSetRequest** | [RestDeploymentSetRequest](RestDeploymentSetRequest.md) | the details of the deployment to create, as detailed by the request body | [Optional] |

### Return type

[**RestDeployment**](RestDeployment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deployment was created |  -  |
| **400** | the deployment was not created because the request was invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequiredBuildsMergeCheck

> RestRequiredBuildCondition createRequiredBuildsMergeCheck(projectKey, repositorySlug, restRequiredBuildConditionSetRequest)

Create a required builds merge check

Create a required build merge check for the given repository.  The authenticated user must have **REPO_ADMIN** permission for the target repository to register a required build merge check.  The contents of the required build merge check request are:  These fields are **required**:  - **buildParentKeys**: A non-empty list of build parent keys that require green builds for this merge check to pass - **refMatcher.id**: The value to match refs against in the target branch - **refMatcher.type.id**: The type of ref matcher, one of: \&quot;ANY_REF\&quot;, \&quot;BRANCH\&quot;, \&quot;PATTERN\&quot;, \&quot;MODEL_CATEGORY\&quot; or \&quot;MODEL_BRANCH\&quot;   These fields are optional:  - **exemptRefMatcher.id** The value to exempt refs in the source branch from this check - **exemptRefMatcher.type.id**: The type of exempt ref matcher, one of: \&quot;ANY_REF\&quot;, \&quot;BRANCH\&quot;, \&quot;PATTERN\&quot;, \&quot;MODEL_CATEGORY\&quot; or \&quot;MODEL_BRANCH\&quot;   

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { CreateRequiredBuildsMergeCheckRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project that the repository belongs to
    projectKey: projectKey_example,
    // string | The repository being used
    repositorySlug: repositorySlug_example,
    // RestRequiredBuildConditionSetRequest | The request specifying the required build parent keys, ref matcher and exemption matcher (optional)
    restRequiredBuildConditionSetRequest: ...,
  } satisfies CreateRequiredBuildsMergeCheckRequest;

  try {
    const data = await api.createRequiredBuildsMergeCheck(body);
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
| **projectKey** | `string` | The project that the repository belongs to | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository being used | [Defaults to `undefined`] |
| **restRequiredBuildConditionSetRequest** | [RestRequiredBuildConditionSetRequest](RestRequiredBuildConditionSetRequest.md) | The request specifying the required build parent keys, ref matcher and exemption matcher | [Optional] |

### Return type

[**RestRequiredBuildCondition**](RestRequiredBuildCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the newly created required build merge check. |  -  |
| **400** | The request was malformed. This could be caused because:  - The build parent key list is empty - Either of the provided ref matchers is of an unrecognized type - Either of the provided ref matchers could not be created with the provided type and id    |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a required build merge check in this repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete1

> delete1(projectKey, commitId, repositorySlug, deploymentSequenceNumber, key, environmentKey)

Delete a deployment

Delete the deployment matching the specified Repository, key, environmentKey and deploymentSequenceNumber.   The user must have REPO_ADMIN.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { Delete1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the commitId that was deployed as indicated by the path
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | the sequence number of the deployment, as detailed by the query parameter (optional)
    deploymentSequenceNumber: deploymentSequenceNumber_example,
    // string | the key of the deployment, as detailed by the query parameter (optional)
    key: key_example,
    // string | the key of the environment, as detailed by the query parameter (optional)
    environmentKey: environmentKey_example,
  } satisfies Delete1Request;

  try {
    const data = await api.delete1(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **commitId** | `string` | the commitId that was deployed as indicated by the path | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **deploymentSequenceNumber** | `string` | the sequence number of the deployment, as detailed by the query parameter | [Optional] [Defaults to `undefined`] |
| **key** | `string` | the key of the deployment, as detailed by the query parameter | [Optional] [Defaults to `undefined`] |
| **environmentKey** | `string` | the key of the environment, as detailed by the query parameter | [Optional] [Defaults to `undefined`] |

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
| **204** | the request has been processed |  -  |
| **400** | the deployment was not deleted because the request was invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete a deployment |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteACodeInsightsReport

> deleteACodeInsightsReport(projectKey, commitId, repositorySlug, key)

Delete a Code Insights report

Delete a report for the given commit. Also deletes any annotations associated with this report.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { DeleteACodeInsightsReportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The key of the report to which this annotation belongs.
    key: key_example,
  } satisfies DeleteACodeInsightsReportRequest;

  try {
    const data = await api.deleteACodeInsightsReport(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The key of the report to which this annotation belongs. | [Defaults to `undefined`] |

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
| **204** | The report and associated annotations were successfully deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete insight reports or was not the author (&lt;code&gt;REPO_READ&lt;/code&gt; for author otherwise &lt;code&gt;REPO_ADMIN&lt;/code&gt;). |  -  |
| **404** | The specified project, repository, commit or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAnnotations

> deleteAnnotations(projectKey, commitId, repositorySlug, key, externalId)

Delete Code Insights annotations

Delete annotations for a given report that match the given external IDs, or all annotations if no external IDs are provided.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { DeleteAnnotationsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The key of the report to which this annotation belongs.
    key: key_example,
    // string | The external IDs for the annotations that are to be deleted. Can be specified more than once to delete by more than one external ID, or can be unspecified to delete all annotations. (optional)
    externalId: externalId_example,
  } satisfies DeleteAnnotationsRequest;

  try {
    const data = await api.deleteAnnotations(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The key of the report to which this annotation belongs. | [Defaults to `undefined`] |
| **externalId** | `string` | The external IDs for the annotations that are to be deleted. Can be specified more than once to delete by more than one external ID, or can be unspecified to delete all annotations. | [Optional] [Defaults to `undefined`] |

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
| **204** | The annotations were successfully deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete insight reports or was not the author (&lt;code&gt;REPO_READ&lt;/code&gt; for author otherwise &lt;code&gt;REPO_ADMIN&lt;/code&gt;). |  -  |
| **404** | The specified project, repository, commit or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRequiredBuildsMergeCheck

> deleteRequiredBuildsMergeCheck(projectKey, id, repositorySlug)

Delete a required builds merge check

Deletes a required build existing merge check, given it\&#39;s ID.  The authenticated user must have **REPO_ADMIN** permission for the target repository to delete a required build merge check.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { DeleteRequiredBuildsMergeCheckRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project that the repository belongs to
    projectKey: projectKey_example,
    // number
    id: 789,
    // string | The repository being used
    repositorySlug: repositorySlug_example,
  } satisfies DeleteRequiredBuildsMergeCheckRequest;

  try {
    const data = await api.deleteRequiredBuildsMergeCheck(body);
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
| **projectKey** | `string` | The project that the repository belongs to | [Defaults to `undefined`] |
| **id** | `number` |  | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository being used | [Defaults to `undefined`] |

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
| **204** | An empty response indicating the merge check was successfully deleted, or was never present. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete a required build merge check in this repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get

> RestBuildStatus get(projectKey, commitId, repositorySlug, key)

Get a specific build status

Get a specific build status.   The authenticated user must have **REPO_READ** permission for the provided repository.The request can also be made with anonymous 2-legged OAuth.&lt;br&gt;Since 7.14

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | the key of the build status
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | the key of the build status | [Defaults to `undefined`] |

### Return type

[**RestBuildStatus**](RestBuildStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The build status associated with the provided commit and key |  -  |
| **400** | The request has failed validation |  -  |
| **401** | The currently authenticated user has insufficient permissions this repository |  -  |
| **404** | The specified repository, commit or build status does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get1

> RestDeployment get1(projectKey, commitId, repositorySlug, deploymentSequenceNumber, key, environmentKey)

Get a deployment

Get the deployment matching the specified Repository, key, environmentKey and deploymentSequenceNumber.   The user must have REPO_READ.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { Get1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the commitId that was deployed as indicated by the query parameter
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | the sequence number of the deployment, as detailed by the query param (optional)
    deploymentSequenceNumber: deploymentSequenceNumber,
    // string | the key of the deployment, as detailed by the query parameter (optional)
    key: key_example,
    // string | the key of the environment, as detailed by the query parameter (optional)
    environmentKey: environmentKey_example,
  } satisfies Get1Request;

  try {
    const data = await api.get1(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **commitId** | `string` | the commitId that was deployed as indicated by the query parameter | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **deploymentSequenceNumber** | `string` | the sequence number of the deployment, as detailed by the query param | [Optional] [Defaults to `undefined`] |
| **key** | `string` | the key of the deployment, as detailed by the query parameter | [Optional] [Defaults to `undefined`] |
| **environmentKey** | `string` | the key of the environment, as detailed by the query parameter | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDeployment**](RestDeployment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deployment |  -  |
| **400** | could not get the deployment because the request was invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository |  -  |
| **404** | The specified repository or deployment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getACodeInsightsReport

> RestInsightReport getACodeInsightsReport(projectKey, commitId, repositorySlug, key)

Get a Code Insights report

Retrieve the specified report.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetACodeInsightsReportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The report key.
    key: key_example,
  } satisfies GetACodeInsightsReportRequest;

  try {
    const data = await api.getACodeInsightsReport(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The report key. | [Defaults to `undefined`] |

### Return type

[**RestInsightReport**](RestInsightReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The specified report. |  -  |
| **401** | The currently authenticated user has insufficient permissions (&lt;code&gt;REPO_READ needed&lt;/code&gt;) to get insight reports. |  -  |
| **404** | The specified project, repository, commit, or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAnnotations

> RestInsightAnnotationsResponse getAnnotations(projectKey, commitId, repositorySlug, key)

Get Code Insights annotations for a report

Retrieve the specified report\&#39;s annotations.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetAnnotationsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The report key.
    key: key_example,
  } satisfies GetAnnotationsRequest;

  try {
    const data = await api.getAnnotations(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The report key. | [Defaults to `undefined`] |

### Return type

[**RestInsightAnnotationsResponse**](RestInsightAnnotationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The specified annotations. |  -  |
| **401** | The currently authenticated user has insufficient permissions (&lt;code&gt;REPO_READ needed&lt;/code&gt;) to get insight reports. |  -  |
| **404** | The specified project, repository, commit, or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAnnotations1

> RestInsightAnnotationsResponse getAnnotations1(projectKey, commitId, repositorySlug, severity, path, externalId, type, key)

Get Code Insights annotations for a commit

Get annotations for the given commit ID, filtered by any query parameters given.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetAnnotations1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Return only annotations that have one of the given severities. Can be specified more than once to filter by more than one severity. Valid severities are <code>LOW</code>, <code>MEDIUM</code> and <code>HIGH</code>. (optional)
    severity: severity_example,
    // string | Return only annotations that appear on one of the provided paths. Can be specified more than once to filter by more than one path. (optional)
    path: path_example,
    // string | Return only annotations that have one of the provided external IDs. Can be specified more than once to filter by more than one external ID. (optional)
    externalId: externalId_example,
    // string | Return only annotations that have one of the given types. Can be specified more than once to filter by multiple types. Valid types are <code>BUG</code>, <code>CODE_SMELL</code>, and <code>VULNERABILITY</code>. (optional)
    type: type_example,
    // string | Return only annotations that belong to one of the provided report keys. Can be specified more than once to filter by more than one report (optional)
    key: key_example,
  } satisfies GetAnnotations1Request;

  try {
    const data = await api.getAnnotations1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **severity** | `string` | Return only annotations that have one of the given severities. Can be specified more than once to filter by more than one severity. Valid severities are &lt;code&gt;LOW&lt;/code&gt;, &lt;code&gt;MEDIUM&lt;/code&gt; and &lt;code&gt;HIGH&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **path** | `string` | Return only annotations that appear on one of the provided paths. Can be specified more than once to filter by more than one path. | [Optional] [Defaults to `undefined`] |
| **externalId** | `string` | Return only annotations that have one of the provided external IDs. Can be specified more than once to filter by more than one external ID. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Return only annotations that have one of the given types. Can be specified more than once to filter by multiple types. Valid types are &lt;code&gt;BUG&lt;/code&gt;, &lt;code&gt;CODE_SMELL&lt;/code&gt;, and &lt;code&gt;VULNERABILITY&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **key** | `string` | Return only annotations that belong to one of the provided report keys. Can be specified more than once to filter by more than one report | [Optional] [Defaults to `undefined`] |

### Return type

[**RestInsightAnnotationsResponse**](RestInsightAnnotationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested annotations. |  -  |
| **401** | The currently authenticated user has insufficient permissions (&lt;code&gt;REPO_READ&lt;/code&gt;) to get insight annotations. |  -  |
| **404** | The specified project, repository, commit, or report does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildStatusStats

> RestBuildStats getBuildStatusStats(commitId, includeUnique)

Get build status statistics for commit

Gets statistics regarding the builds associated with a commit

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetBuildStatusStatsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | full SHA1 of the commit
    commitId: e00cf62997a027bbf785614a93e2e55bb331d268,
    // boolean | include a unique build result if there is either only one failed build, only one in-progress build or only one successful build (optional)
    includeUnique: true,
  } satisfies GetBuildStatusStatsRequest;

  try {
    const data = await api.getBuildStatusStats(body);
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
| **commitId** | `string` | full SHA1 of the commit | [Defaults to `undefined`] |
| **includeUnique** | `boolean` | include a unique build result if there is either only one failed build, only one in-progress build or only one successful build | [Optional] [Defaults to `undefined`] |

### Return type

[**RestBuildStats**](RestBuildStats.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The number of successful/failed/in-progress/cancelled/unknown builds for the commit |  -  |
| **401** | The user is not authenticated or does not have the &lt;b&gt;LICENSED&lt;/b&gt; permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMultipleBuildStatusStats

> any getMultipleBuildStatusStats(requestBody)

Get build status statistics for multiple commits

Produces a list of the build statistics for multiple commits. Commits &lt;em&gt;without any builds associated with them&lt;/em&gt; will not be returned.&lt;br&gt; For example if the commit &lt;code&gt;e00cf62997a027bbf785614a93e2e55bb331d268&lt;/code&gt; does not have any build statuses associated with it, it will not be present in the response.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetMultipleBuildStatusStatsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // Array<string> | full SHA1 of each commit (optional)
    requestBody: ...,
  } satisfies GetMultipleBuildStatusStatsRequest;

  try {
    const data = await api.getMultipleBuildStatusStats(body);
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
| **requestBody** | `Array<string>` | full SHA1 of each commit | [Optional] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The number of successful/failed/in-progress/cancelled/unknown builds for each commit (with the caveat that the commits &lt;em&gt;without any builds associated with them&lt;/em&gt; will not be present in the response) |  -  |
| **401** | The user is not authenticated or does not have the &lt;strong&gt;LICENSED&lt;/strong&gt; permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageOfRequiredBuildsMergeChecks

> GetPageOfRequiredBuildsMergeChecks200Response getPageOfRequiredBuildsMergeChecks(projectKey, repositorySlug, start, limit)

Get required builds merge checks

Returns a page of required build merge checks that have been configured for this repository.  The authenticated user must have **REPO_READ** permission for the target repository to request a page of required build merge checks.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetPageOfRequiredBuildsMergeChecksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project that the repository belongs to
    projectKey: projectKey_example,
    // string | The repository being used
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetPageOfRequiredBuildsMergeChecksRequest;

  try {
    const data = await api.getPageOfRequiredBuildsMergeChecks(body);
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
| **projectKey** | `string` | The project that the repository belongs to | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository being used | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPageOfRequiredBuildsMergeChecks200Response**](GetPageOfRequiredBuildsMergeChecks200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The required build merge checks associated with the provided repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to request a page of required build merge checks in this repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReports

> GetReports200Response getReports(projectKey, commitId, repositorySlug, start, limit)

Get all Code Insights reports for a commit

Retrieve all reports for the given commit.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { GetReportsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetReportsRequest;

  try {
    const data = await api.getReports(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetReports200Response**](GetReports200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of reports |  -  |
| **401** | The currently authenticated user has insufficient permissions (&lt;code&gt;REPO_READ&lt;/code&gt;) to get insight reports. |  -  |
| **404** | The specified project, repository or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setACodeInsightsReport

> RestInsightReport setACodeInsightsReport(projectKey, commitId, repositorySlug, key, restSetInsightReportRequest)

Create a Code Insights report

Create a new insight report, or replace the existing one if a report already exists for the given repository, commit, and report key. A request to replace an existing report will be rejected if the authenticated user was not the creator of the specified report.  The report key should be a unique string chosen by the reporter and should be unique enough not to potentially clash with report keys from other reporters. We recommend using reverse DNS namespacing or a similar standard to ensure that collision is avoided.&lt;h1&gt;Report parameters&lt;/h1&gt;&lt;table summary&#x3D;\&quot;Report parameters\&quot;&gt;    &lt;tr&gt;        &lt;th&gt;Parameter&lt;/th&gt;        &lt;th&gt;Description&lt;/th&gt;        &lt;th&gt;Required?&lt;/th&gt;        &lt;th&gt;Restrictions&lt;/th&gt;        &lt;th&gt;Type&lt;/th&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;title&lt;/td&gt;        &lt;td&gt;A short string representing the name of the report&lt;/td&gt;        &lt;td&gt;Yes&lt;/td&gt;        &lt;td&gt;Max length: 450 characters (but we recommend that it is shorter so that the display is nicer)&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;details&lt;/td&gt;        &lt;td&gt;             A string to describe the purpose of the report. This string may contain             escaped newlines and if it does it will display the content accordingly.        &lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;Max length: 2000 characters&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;result&lt;/td&gt;        &lt;td&gt;Indicates whether the report is in a passed or failed state&lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;One of: PASS, FAIL&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;data&lt;/td&gt;        &lt;td&gt;An array of data fields (described below) to display information on the report&lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;Maximum 6 data fields&lt;/td&gt;        &lt;td&gt;Array&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;reporter&lt;/td&gt;        &lt;td&gt;A string to describe the tool or company who created the report&lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;Max length: 450 characters&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;link&lt;/td&gt;        &lt;td&gt;A URL linking to the results of the report in an external tool.&lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;Must be a valid http or https URL&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;logoUrl&lt;/td&gt;        &lt;td&gt;A URL to the report logo. If none is provided, the default insights logo will be used.&lt;/td&gt;        &lt;td&gt;No&lt;/td&gt;        &lt;td&gt;Must be a valid http or https URL&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;&lt;/table&gt;&lt;h1&gt;Data parameters&lt;/h1&gt;The data field on the report is an array with at most 6 data fields (JSON maps) containing information that is to be displayed on the report (see the request example).&lt;table summary&#x3D;\&quot;Data parameters\&quot;&gt;    &lt;tr&gt;        &lt;th&gt;Parameter&lt;/th&gt;        &lt;th&gt;Description&lt;/th&gt;        &lt;th&gt;Type&lt;/th&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;title&lt;/td&gt;        &lt;td&gt;A string describing what this data field represents&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;type&lt;/td&gt;        &lt;td&gt;             The type of data contained in the value field. If not provided,             then the value will be detected as a boolean, number or string.             One of: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT        &lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;value&lt;/td&gt;        &lt;td&gt;            A value based on the type provided. Either a raw value             (string, number or boolean) or a map. See below.        &lt;/td&gt;    &lt;/tr&gt;&lt;/table&gt;&lt;table summary&#x3D;\&quot;Types\&quot;&gt;    &lt;tr&gt;        &lt;th&gt;Type Field&lt;/th&gt;        &lt;th&gt;Value Field Type&lt;/th&gt;        &lt;th&gt;Value Field Display&lt;/th&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;None/Omitted&lt;/td&gt;        &lt;td&gt;Number, String or Boolean (not an array or object)&lt;/td&gt;        &lt;td&gt;Plain text&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;BOOLEAN&lt;/td&gt;        &lt;td&gt;Boolean&lt;/td&gt;        &lt;td&gt;The value will be read as a JSON boolean and displayed as \&#39;Yes\&#39; or \&#39;No\&#39;.&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;DATE&lt;/td&gt;        &lt;td&gt;Number&lt;/td&gt;        &lt;td&gt;             The value will be read as a JSON number in the form of a Unix timestamp              (milliseconds) and will be displayed as a relative date if the date is less             than one week ago, otherwise it will be displayed as an absolute date.        &lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;DURATION&lt;/td&gt;        &lt;td&gt;Number&lt;/td&gt;        &lt;td&gt;             The value will be read as a JSON number in milliseconds and             will be displayed in a human readable duration format.        &lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;LINK&lt;/td&gt;        &lt;td&gt;Object: {\&quot;linktext\&quot;: \&quot;Link text here\&quot;, \&quot;href\&quot;: \&quot;https://link.to.annotation/in/external/tool\&quot;}&lt;/td&gt;        &lt;td&gt;             The value will be read as a JSON object containing the fields \&quot;linktext\&quot;             and \&quot;href\&quot; and will be displayed as a clickable link on the report.        &lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;NUMBER&lt;/td&gt;        &lt;td&gt;Number&lt;/td&gt;        &lt;td&gt;             The value will be read as a JSON number and large numbers will             be displayed in a human readable format (e.g. 14.3k).        &lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;PERCENTAGE&lt;/td&gt;        &lt;td&gt;Number (between 0 and 100)&lt;/td&gt;        &lt;td&gt;             The value will be read as a JSON number between 0 and 100              and will be displayed with a percentage sign.        &lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;TEXT&lt;/td&gt;        &lt;td&gt;String&lt;/td&gt;        &lt;td&gt;The value will be read as a JSON string and will be displayed as-is&lt;/td&gt;    &lt;/tr&gt;&lt;/table&gt;

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { SetACodeInsightsReportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | A unique string representing the report as chosen by the reporter. This should be unique enough to not clash with other report\'s keys. To do this, we recommend namespacing the key using reverse DNS
    key: key_example,
    // RestSetInsightReportRequest | The request object containing the details of the report to create (see example). (optional)
    restSetInsightReportRequest: ...,
  } satisfies SetACodeInsightsReportRequest;

  try {
    const data = await api.setACodeInsightsReport(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | A unique string representing the report as chosen by the reporter. This should be unique enough to not clash with other report\&#39;s keys. To do this, we recommend namespacing the key using reverse DNS | [Defaults to `undefined`] |
| **restSetInsightReportRequest** | [RestSetInsightReportRequest](RestSetInsightReportRequest.md) | The request object containing the details of the report to create (see example). | [Optional] |

### Return type

[**RestInsightReport**](RestInsightReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created report. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details):  - The request does not contain a report title. - The data field contains unsupported objects. - The request does not contain a report key/ - The provided commit hash is invalid, according to  the validation rules mentioned for the commitId above.  |  -  |
| **401** | The currently authenticated user is not permitted to create an insight report or authentication failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setAnnotation

> setAnnotation(projectKey, externalId, commitId, repositorySlug, key, restSingleAddInsightAnnotationRequest)

Create or replace a Code Insights annotation

Create an annotation with the given external ID, or replace it if it already exists. A request to replace an existing annotation will be rejected if the authenticated user was not the creator of the specified report.

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { SetAnnotationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The external ID of the annotation that is to be updated or created
    externalId: externalId_example,
    // string | The commit ID on which to record the annotation. This must be a full 40 character commit hash.
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The key of the report to which this annotation belongs
    key: key_example,
    // RestSingleAddInsightAnnotationRequest | The new annotation that is to replace the existing one. (optional)
    restSingleAddInsightAnnotationRequest: ...,
  } satisfies SetAnnotationRequest;

  try {
    const data = await api.setAnnotation(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **externalId** | `string` | The external ID of the annotation that is to be updated or created | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID on which to record the annotation. This must be a full 40 character commit hash. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **key** | `string` | The key of the report to which this annotation belongs | [Defaults to `undefined`] |
| **restSingleAddInsightAnnotationRequest** | [RestSingleAddInsightAnnotationRequest](RestSingleAddInsightAnnotationRequest.md) | The new annotation that is to replace the existing one. | [Optional] |

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
| **204** | No content, indicating that the request succeeded. |  -  |
| **401** | The currently authenticated user is not the author of the report, or the author no longer has sufficient permissions (&lt;code&gt;REPO_READ&lt;/code&gt;). |  -  |
| **404** | The specified project, repository, commit, report or annotation does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRequiredBuildsMergeCheck

> RestRequiredBuildCondition updateRequiredBuildsMergeCheck(projectKey, id, repositorySlug, restRequiredBuildConditionSetRequest)

Update a required builds merge check

Update the required builds merge check for the given ID.  The authenticated user must have **REPO_ADMIN** permission for the target repository to update a required build merge check.  The contents of the required build merge check request are:  These fields are **required**:  - **buildParentKeys**: A non-empty list of build parent keys that require green builds for this merge check to pass - **refMatcher.id**: The value to match refs against in the target branch - **refMatcher.type.id**: The type of ref matcher, one of: \&quot;ANY_REF\&quot;, \&quot;BRANCH\&quot;, \&quot;PATTERN\&quot;, \&quot;MODEL_CATEGORY\&quot; or \&quot;MODEL_BRANCH\&quot;   These fields are optional:  - **exemptRefMatcher.id** The value to exempt refs in the source branch from this check - **exemptRefMatcher.type.id**: The type of exempt ref matcher, one of: \&quot;ANY_REF\&quot;, \&quot;BRANCH\&quot;, \&quot;PATTERN\&quot;, \&quot;MODEL_CATEGORY\&quot; or \&quot;MODEL_BRANCH\&quot;   

### Example

```ts
import {
  Configuration,
  BuildsAndDeploymentsApi,
} from 'bitbucket-api';
import type { UpdateRequiredBuildsMergeCheckRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new BuildsAndDeploymentsApi();

  const body = {
    // string | The project that the repository belongs to
    projectKey: projectKey_example,
    // number
    id: 789,
    // string | The repository being used
    repositorySlug: repositorySlug_example,
    // RestRequiredBuildConditionSetRequest | The request specifying the required build parent keys, ref matcher and exemption matcher (optional)
    restRequiredBuildConditionSetRequest: ...,
  } satisfies UpdateRequiredBuildsMergeCheckRequest;

  try {
    const data = await api.updateRequiredBuildsMergeCheck(body);
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
| **projectKey** | `string` | The project that the repository belongs to | [Defaults to `undefined`] |
| **id** | `number` |  | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository being used | [Defaults to `undefined`] |
| **restRequiredBuildConditionSetRequest** | [RestRequiredBuildConditionSetRequest](RestRequiredBuildConditionSetRequest.md) | The request specifying the required build parent keys, ref matcher and exemption matcher | [Optional] |

### Return type

[**RestRequiredBuildCondition**](RestRequiredBuildCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The details needed to update a required build merge check. |  -  |
| **400** | The request was malformed. This could be caused because:  - The build parent key list is empty - Either of the provided ref matchers is of an unrecognized type - Either of the provided ref matchers could not be created with the provided type and id    |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a required build merge check in this repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

