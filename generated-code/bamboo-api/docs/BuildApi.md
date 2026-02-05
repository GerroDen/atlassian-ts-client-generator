# BuildApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addPlanLabel**](BuildApi.md#addplanlabel) | **POST** /api/latest/plan/{projectKey}-{buildKey}/label |  |
| [**addPlanVariable**](BuildApi.md#addplanvariable) | **POST** /api/latest/plan/{projectKey}-{buildKey}/variables |  |
| [**createNewBranch**](BuildApi.md#createnewbranch) | **PUT** /api/latest/plan/{projectKey}-{buildKey}/branch/{branchName} |  |
| [**deletePlan**](BuildApi.md#deleteplan) | **DELETE** /api/latest/plan/{projectKey}-{buildKey} |  |
| [**deletePlanVariable**](BuildApi.md#deleteplanvariable) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} |  |
| [**disablePlan**](BuildApi.md#disableplan) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/enable |  |
| [**editPlanVariable**](BuildApi.md#editplanvariable) | **PUT** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} |  |
| [**enablePlan**](BuildApi.md#enableplan) | **POST** /api/latest/plan/{projectKey}-{buildKey}/enable |  |
| [**enableSpecsForBranches**](BuildApi.md#enablespecsforbranches) | **POST** /api/latest/plan/{projectKey}-{buildKey}/branch/enableSpecsForBranches |  |
| [**exportPlanSpec**](BuildApi.md#exportplanspec) | **GET** /api/latest/plan/{projectKey}-{buildKey}/specs |  |
| [**getAllPlanList**](BuildApi.md#getallplanlist) | **GET** /api/latest/plan |  |
| [**getDockerPipelineConfiguration**](BuildApi.md#getdockerpipelineconfiguration) | **GET** /api/latest/job/{jobKey}/docker |  |
| [**getIssueDetails**](BuildApi.md#getissuedetails) | **GET** /api/latest/plan/{projectKey}-{buildKey}/issue/{issueKey} |  |
| [**getPlan**](BuildApi.md#getplan) | **GET** /api/latest/plan/{projectKey}-{buildKey} |  |
| [**getPlanAlias**](BuildApi.md#getplanalias) | **GET** /api/latest/plan/{projectKey}/{buildKey} |  |
| [**getPlanArtifactDefinition**](BuildApi.md#getplanartifactdefinition) | **GET** /api/latest/plan/{projectKey}-{buildKey}/artifact |  |
| [**getPlanBranch**](BuildApi.md#getplanbranch) | **GET** /api/latest/plan/{projectKey}-{buildKey}/branch/{branchName} |  |
| [**getPlanBranches**](BuildApi.md#getplanbranches) | **GET** /api/latest/plan/{projectKey}-{buildKey}/branch |  |
| [**getPlanDirectory**](BuildApi.md#getplandirectory) | **GET** /api/latest/planDirectoryInfo/{planKey} |  |
| [**getPlanLabels**](BuildApi.md#getplanlabels) | **GET** /api/latest/plan/{projectKey}-{buildKey}/label |  |
| [**getPlanVariable**](BuildApi.md#getplanvariable) | **GET** /api/latest/plan/{projectKey}-{buildKey}/variables/{variableName} |  |
| [**getPlanVariables**](BuildApi.md#getplanvariables) | **GET** /api/latest/plan/{projectKey}-{buildKey}/variables |  |
| [**getVcsBranches**](BuildApi.md#getvcsbranches) | **GET** /api/latest/plan/{projectKey}-{buildKey}/vcsBranches |  |
| [**markPlanFavourite**](BuildApi.md#markplanfavourite) | **POST** /api/latest/plan/{projectKey}-{buildKey}/favourite |  |
| [**quarantineTest**](BuildApi.md#quarantinetest) | **POST** /api/latest/plan/{projectKey}-{buildKey}/test/{testId}/quarantine |  |
| [**removePlanLabel**](BuildApi.md#removeplanlabel) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/label/{labelName} |  |
| [**setDockerPipelineConfiguration**](BuildApi.md#setdockerpipelineconfiguration) | **PUT** /api/latest/job/{jobKey}/docker |  |
| [**unleashTest**](BuildApi.md#unleashtest) | **POST** /api/latest/plan/{projectKey}-{buildKey}/test/{testId}/unleash |  |
| [**unmarkPlanFavourite**](BuildApi.md#unmarkplanfavourite) | **DELETE** /api/latest/plan/{projectKey}-{buildKey}/favourite |  |



## addPlanLabel

> addPlanLabel(projectKey, buildKey, restPlanLabel)



Add new label to plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { AddPlanLabelRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // RestPlanLabel | label content to add to build result
    restPlanLabel: ...,
  } satisfies AddPlanLabelRequest;

  try {
    const data = await api.addPlanLabel(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **restPlanLabel** | [RestPlanLabel](RestPlanLabel.md) | label content to add to build result | |

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
| **400** | Label contains invalid characters |  -  |
| **403** | User has no permission to modify specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addPlanVariable

> RestVariable addPlanVariable(projectKey, buildKey, restVariable)



Add a new plan variable.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { AddPlanVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // RestVariable | Plan variable
    restVariable: ...,
  } satisfies AddPlanVariableRequest;

  try {
    const data = await api.addPlanVariable(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **restVariable** | [RestVariable](RestVariable.md) | Plan variable | |

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Plan variable successfully created |  -  |
| **400** | A plan variable with given name already exists or name field is empty |  -  |
| **403** | User has no permission to edit specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createNewBranch

> RestPlanBranch createNewBranch(projectKey, buildKey, branchName, cleanupEnabled, vcsBranch, enabled)



Create branch for a plan. You can use **vcsBranch** query param to define which vcsBranch should newly created branch use. If not specified it will not override vcsBranch from the plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { CreateNewBranchRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | New branch name
    branchName: branchName_example,
    // string | If plan branch expiry settings should be enabled (optional)
    cleanupEnabled: cleanupEnabled_example,
    // string | Name of the VCS branch (optional)
    vcsBranch: /refs/heads/myBranch,
    // string | If plan branch should be enabled (optional)
    enabled: enabled_example,
  } satisfies CreateNewBranchRequest;

  try {
    const data = await api.createNewBranch(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **branchName** | `string` | New branch name | [Defaults to `undefined`] |
| **cleanupEnabled** | `string` | If plan branch expiry settings should be enabled | [Optional] [Defaults to `undefined`] |
| **vcsBranch** | `string` | Name of the VCS branch | [Optional] [Defaults to `undefined`] |
| **enabled** | `string` | If plan branch should be enabled | [Optional] [Defaults to `undefined`] |

### Return type

[**RestPlanBranch**](RestPlanBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created branch |  -  |
| **400** | There have been validation errors |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePlan

> deletePlan(projectKey, buildKey)



Marks plan for deletion. Plan will be deleted by a batch job.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { DeletePlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies DeletePlanRequest;

  try {
    const data = await api.deletePlan(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Plan was marked for removal |  -  |
| **403** | User has no permission to build specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePlanVariable

> deletePlanVariable(projectKey, variableName, buildKey)



Delete the plan variable.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { DeletePlanVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Name of the variable to be deleted
    variableName: variableName_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies DeletePlanVariableRequest;

  try {
    const data = await api.deletePlanVariable(body);
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
| **variableName** | `string` | Name of the variable to be deleted | [Defaults to `undefined`] |
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Plan variable successfully deleted |  -  |
| **403** | User has no permission to edit specified plan |  -  |
| **404** | Specified project or plan or variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disablePlan

> disablePlan(projectKey, buildKey)



Disable plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { DisablePlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies DisablePlanRequest;

  try {
    const data = await api.disablePlan(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Plan successfully disabled |  -  |
| **403** | User has no permission to build specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editPlanVariable

> RestVariable editPlanVariable(projectKey, variableName, buildKey, restVariable)



Update the plan variable.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { EditPlanVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Variable name
    variableName: variableName_example,
    // string | Plan key
    buildKey: buildKey_example,
    // RestVariable | Variable to be updated
    restVariable: ...,
  } satisfies EditPlanVariableRequest;

  try {
    const data = await api.editPlanVariable(body);
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
| **variableName** | `string` | Variable name | [Defaults to `undefined`] |
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **restVariable** | [RestVariable](RestVariable.md) | Variable to be updated | |

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan variable successfully updated |  -  |
| **400** | Variable content is not provided or name field is empty |  -  |
| **403** | User has no permission to edit specified plan |  -  |
| **404** | Specified project or plan or variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enablePlan

> enablePlan(projectKey, buildKey)



Enable plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { EnablePlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies EnablePlanRequest;

  try {
    const data = await api.enablePlan(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Plan successfully enabled |  -  |
| **403** | User has no permission to build specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableSpecsForBranches

> enableSpecsForBranches(projectKey, buildKey)



Enable specs scanning for all branches.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { EnableSpecsForBranchesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies EnableSpecsForBranchesRequest;

  try {
    const data = await api.enableSpecsForBranches(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Bamboo Specs scan enabled for all branches |  -  |
| **403** | User has no permission to administrate specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportPlanSpec

> any exportPlanSpec(projectKey, buildKey, _package, format)



Export plan as Bamboo Specs code.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { ExportPlanSpecRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | A package name for the exported spec (optional)
    _package: _package_example,
    // 'JAVA' | 'YAML' | a format of code. It\'s \'java\' by default. (optional)
    format: format_example,
  } satisfies ExportPlanSpecRequest;

  try {
    const data = await api.exportPlanSpec(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **_package** | `string` | A package name for the exported spec | [Optional] [Defaults to `undefined`] |
| **format** | `JAVA`, `YAML` | a format of code. It\&#39;s \&#39;java\&#39; by default. | [Optional] [Defaults to `undefined`] [Enum: JAVA, YAML] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bamboo Specs code for plan |  -  |
| **400** | Unknown export format or code generator error |  -  |
| **403** | User has no permission to view configuration of specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllPlanList

> RestPlans getAllPlanList(expand)



List all plans that user has READ permission for and allowed to see.  Possible expand parameters:  - &lt;tt&gt;plans&lt;/tt&gt; - list of plans  - &lt;tt&gt;plans.plan&lt;/tt&gt; - list of plans with plan details  - &lt;tt&gt;plans.plan.actions&lt;/tt&gt; - list of plans with actions details

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetAllPlanListRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Possible expand parameters: plans. (optional)
    expand: expand_example,
  } satisfies GetAllPlanListRequest;

  try {
    const data = await api.getAllPlanList(body);
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
| **expand** | `string` | Possible expand parameters: plans. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestPlans**](RestPlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | list of plans |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerPipelineConfiguration

> RestDockerPipelineConfiguration getDockerPipelineConfiguration(jobKey)



Retrieves Docker configuration for given job.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetDockerPipelineConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Key of the job
    jobKey: jobKey_example,
  } satisfies GetDockerPipelineConfigurationRequest;

  try {
    const data = await api.getDockerPipelineConfiguration(body);
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
| **jobKey** | `string` | Key of the job | [Defaults to `undefined`] |

### Return type

[**RestDockerPipelineConfiguration**](RestDockerPipelineConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns Docker Pipeline configuration for given environment |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no admin permissions or job doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueDetails

> RestJiraIssue getIssueDetails(projectKey, issueKey, buildKey)



Fetch linked Jira issue details.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetIssueDetailsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Jira issue key
    issueKey: issueKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies GetIssueDetailsRequest;

  try {
    const data = await api.getIssueDetails(body);
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
| **issueKey** | `string` | Jira issue key | [Defaults to `undefined`] |
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

### Return type

[**RestJiraIssue**](RestJiraIssue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Jira issue details |  -  |
| **400** | Unknown issue key or wrong Applink configuration |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlan

> RestPlan getPlan(projectKey, buildKey, expand)



Fetch plan details.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Build key (might be planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Possible expand parameters: actions, stages, branches, variableContext. (optional)
    expand: expand_example,
  } satisfies GetPlanRequest;

  try {
    const data = await api.getPlan(body);
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
| **buildKey** | `string` | Build key (might be planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **expand** | `string` | Possible expand parameters: actions, stages, branches, variableContext. | [Optional] [Defaults to `undefined`] |

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
| **200** | Plan details |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanAlias

> RestPlan getPlanAlias(projectKey, buildKey, expand)



Fetch plan details.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanAliasRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Build key (might be planKey or composite planKey-jobKey)
    buildKey: buildKey_example,
    // string | Possible expand parameters: actions, stages, branches, variableContext. (optional)
    expand: expand_example,
  } satisfies GetPlanAliasRequest;

  try {
    const data = await api.getPlanAlias(body);
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
| **buildKey** | `string` | Build key (might be planKey or composite planKey-jobKey) | [Defaults to `undefined`] |
| **expand** | `string` | Possible expand parameters: actions, stages, branches, variableContext. | [Optional] [Defaults to `undefined`] |

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
| **200** | Plan details |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanArtifactDefinition

> RestArtifactDefinitions getPlanArtifactDefinition(projectKey, buildKey, maxResult, startIndex)



Fetch plan\&#39;s shared artifact definitions.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanArtifactDefinitionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // number | Maximum count of artifacts (optional)
    maxResult: 56,
    // number | Start index of artifacts (optional)
    startIndex: 56,
  } satisfies GetPlanArtifactDefinitionRequest;

  try {
    const data = await api.getPlanArtifactDefinition(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of artifacts | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of artifacts | [Optional] [Defaults to `undefined`] |

### Return type

[**RestArtifactDefinitions**](RestArtifactDefinitions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Plan artifact definitions |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanBranch

> RestPlanBranch getPlanBranch(projectKey, buildKey, branchName)



Provide details for specified branch of a specified plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanBranchRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | Branch display name
    branchName: branchName_example,
  } satisfies GetPlanBranchRequest;

  try {
    const data = await api.getPlanBranch(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **branchName** | `string` | Branch display name | [Defaults to `undefined`] |

### Return type

[**RestPlanBranch**](RestPlanBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of specified branch of the plan |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan or branch does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanBranches

> any getPlanBranches(projectKey, buildKey, enabledOnly, cloverEnabled, my, favourite)



Fetch list of branches for specified plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanBranchesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | Show enabled branches only (optional)
    enabledOnly: enabledOnly_example,
    // string | Show branches with Clover integration enabled (optional)
    cloverEnabled: cloverEnabled_example,
    // string | Show branches where current user is creator (optional)
    my: my_example,
    // string | Show favourite branches only (optional)
    favourite: favourite_example,
  } satisfies GetPlanBranchesRequest;

  try {
    const data = await api.getPlanBranches(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **enabledOnly** | `string` | Show enabled branches only | [Optional] [Defaults to `undefined`] |
| **cloverEnabled** | `string` | Show branches with Clover integration enabled | [Optional] [Defaults to `undefined`] |
| **my** | `string` | Show branches where current user is creator | [Optional] [Defaults to `undefined`] |
| **favourite** | `string` | Show favourite branches only | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of branches in the VCS of the plan\&#39;s default repository |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanDirectory

> DirectoryInformationResponse getPlanDirectory(planKey)



Provides the directories where artifacts and build logs can be found for a given plan key. Disabled by default.  See https://confluence.atlassian.com/display/BAMBOO/Plan+directory+information+REST+API for more information.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanDirectoryRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | the plan key to retrieve directory information for.  Can be a top-level key (i.e. \'PROJ-PLAN\') or a branch key (i.e. \'PROJ-PLAN15\')
    planKey: planKey_example,
  } satisfies GetPlanDirectoryRequest;

  try {
    const data = await api.getPlanDirectory(body);
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
| **planKey** | `string` | the plan key to retrieve directory information for.  Can be a top-level key (i.e. \&#39;PROJ-PLAN\&#39;) or a branch key (i.e. \&#39;PROJ-PLAN15\&#39;) | [Defaults to `undefined`] |

### Return type

[**DirectoryInformationResponse**](DirectoryInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Directories which may contain artifacts and log fiels for a given plan |  -  |
| **403** | If the user has no read permissions or feature is disabled |  -  |
| **404** | If plan doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanLabels

> RestBuildLabels getPlanLabels(projectKey, buildKey)



List of labels for plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanLabelsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies GetPlanLabelsRequest;

  try {
    const data = await api.getPlanLabels(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **200** | List of labels for plan |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanVariable

> RestVariable getPlanVariable(projectKey, variableName, buildKey)



Retrieve the plan variable by given name.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string
    variableName: variableName_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies GetPlanVariableRequest;

  try {
    const data = await api.getPlanVariable(body);
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
| **variableName** | `string` |  | [Defaults to `undefined`] |
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **200** | A plan variable with the given id |  -  |
| **403** | User has no permission to view configuration of specified plan |  -  |
| **404** | Specified project or plan or variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanVariables

> getPlanVariables(projectKey, buildKey)



Retrieve the list of all variables for a plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetPlanVariablesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies GetPlanVariablesRequest;

  try {
    const data = await api.getPlanVariables(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **200** | List of variables for the given plan |  -  |
| **403** | User has no permission to view configuration of specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVcsBranches

> any getVcsBranches(projectKey, buildKey, maxResult, searchTerm, startIndex)



List of vcs branch names for branches that exist on the default repository of this plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { GetVcsBranchesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key - only top level plans are supported
    buildKey: buildKey_example,
    // number | Maximum count of branches (optional)
    maxResult: 56,
    // string | Search term based on which the branch names will be filtered out (optional)
    searchTerm: searchTerm_example,
    // number | Start index of branches (optional)
    startIndex: 56,
  } satisfies GetVcsBranchesRequest;

  try {
    const data = await api.getVcsBranches(body);
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
| **buildKey** | `string` | Plan key - only top level plans are supported | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of branches | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | Search term based on which the branch names will be filtered out | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of branches | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of branches in the vcs of the default repository for the given plan |  -  |
| **400** | Validation errors: branch or job key provided |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markPlanFavourite

> markPlanFavourite(projectKey, buildKey)



Add plan to favourite.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { MarkPlanFavouriteRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies MarkPlanFavouriteRequest;

  try {
    const data = await api.markPlanFavourite(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Added plan to favourite |  -  |
| **401** | User not found |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## quarantineTest

> quarantineTest(projectKey, buildKey, testId)



Quarantine plan\&#39;s test.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { QuarantineTestRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | Test id
    testId: testId_example,
  } satisfies QuarantineTestRequest;

  try {
    const data = await api.quarantineTest(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **testId** | `string` | Test id | [Defaults to `undefined`] |

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
| **204** | Test quarantined successfully |  -  |
| **400** | Test not found by id |  -  |
| **403** | User has no permission to build specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removePlanLabel

> removePlanLabel(projectKey, buildKey, labelName)



Remove label from plan.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { RemovePlanLabelRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | Label name to remove from plan
    labelName: labelName_example,
  } satisfies RemovePlanLabelRequest;

  try {
    const data = await api.removePlanLabel(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **labelName** | `string` | Label name to remove from plan | [Defaults to `undefined`] |

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
| **400** | Label contains invalid characters |  -  |
| **403** | User has no permission to modify specified plan |  -  |
| **404** | Specified project or plan or label does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDockerPipelineConfiguration

> setDockerPipelineConfiguration(jobKey, restDockerPipelineConfiguration)



Updates Docker configuration for given job.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { SetDockerPipelineConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Key of the job
    jobKey: jobKey_example,
    // RestDockerPipelineConfiguration | The request containing the details of the docker pipeline configuration
    restDockerPipelineConfiguration: ...,
  } satisfies SetDockerPipelineConfigurationRequest;

  try {
    const data = await api.setDockerPipelineConfiguration(body);
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
| **jobKey** | `string` | Key of the job | [Defaults to `undefined`] |
| **restDockerPipelineConfiguration** | [RestDockerPipelineConfiguration](RestDockerPipelineConfiguration.md) | The request containing the details of the docker pipeline configuration | |

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
| **200** | If configuration is updated properly |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no admin permissions or job doesn\&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unleashTest

> unleashTest(projectKey, buildKey, testId)



Unleash plan\&#39;s test from quarantine.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { UnleashTestRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
    // string | Test id
    testId: testId_example,
  } satisfies UnleashTestRequest;

  try {
    const data = await api.unleashTest(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |
| **testId** | `string` | Test id | [Defaults to `undefined`] |

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
| **204** | Test unleashed successfully |  -  |
| **400** | Test not found by id |  -  |
| **403** | User has no permission to build specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unmarkPlanFavourite

> unmarkPlanFavourite(projectKey, buildKey)



Remove plan from favorites.

### Example

```ts
import {
  Configuration,
  BuildApi,
} from 'bamboo-api';
import type { UnmarkPlanFavouriteRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Plan key
    buildKey: buildKey_example,
  } satisfies UnmarkPlanFavouriteRequest;

  try {
    const data = await api.unmarkPlanFavourite(body);
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
| **buildKey** | `string` | Plan key | [Defaults to `undefined`] |

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
| **204** | Successful removal of plan from favorites |  -  |
| **401** | User not found |  -  |
| **403** | User has no permission to view specified plan |  -  |
| **404** | Specified project or plan does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

