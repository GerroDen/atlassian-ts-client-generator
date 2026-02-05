# PlansApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archivePlan**](PlansApi.md#archiveplan) | **PUT** /rest/api/3/plans/plan/{planId}/archive | Archive plan |
| [**createPlan**](PlansApi.md#createplanoperation) | **POST** /rest/api/3/plans/plan | Create plan |
| [**duplicatePlan**](PlansApi.md#duplicateplanoperation) | **POST** /rest/api/3/plans/plan/{planId}/duplicate | Duplicate plan |
| [**getPlan**](PlansApi.md#getplan) | **GET** /rest/api/3/plans/plan/{planId} | Get plan |
| [**getPlans**](PlansApi.md#getplans) | **GET** /rest/api/3/plans/plan | Get plans paginated |
| [**trashPlan**](PlansApi.md#trashplan) | **PUT** /rest/api/3/plans/plan/{planId}/trash | Trash plan |
| [**updatePlan**](PlansApi.md#updateplan) | **PUT** /rest/api/3/plans/plan/{planId} | Update plan |



## archivePlan

> any archivePlan(planId)

Archive plan

Archives a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { ArchivePlanRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
  } satisfies ArchivePlanRequest;

  try {
    const data = await api.archivePlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPlan

> number createPlan(createPlanRequest, useGroupId)

Create plan

Creates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { CreatePlanOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // CreatePlanRequest
    createPlanRequest: {"crossProjectReleases":[{"name":"AB and BC merge","releaseIds":[29,39]}],"customFields":[{"customFieldId":2335,"filter":true}],"exclusionRules":{"issueIds":[2,3],"issueTypeIds":[32,33],"numberOfDaysToShowCompletedIssues":50,"releaseIds":[42,43],"workStatusCategoryIds":[22,23],"workStatusIds":[12,13]},"issueSources":[{"type":"Project","value":12},{"type":"Board","value":462}],"leadAccountId":"abc-12-rbji","name":"ABC Quaterly plan","permissions":[{"holder":{"type":"AccountId","value":"234-tgj-343"},"type":"Edit"}],"scheduling":{"dependencies":"Sequential","endDate":{"type":"DueDate"},"estimation":"Days","inferredDates":"ReleaseDates","startDate":{"type":"TargetStartDate"}}},
    // boolean | Whether to accept group IDs instead of group names. Group names are deprecated. (optional)
    useGroupId: true,
  } satisfies CreatePlanOperationRequest;

  try {
    const data = await api.createPlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createPlanRequest** | [CreatePlanRequest](CreatePlanRequest.md) |  | |
| **useGroupId** | `boolean` | Whether to accept group IDs instead of group names. Group names are deprecated. | [Optional] [Defaults to `false`] |

### Return type

**number**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## duplicatePlan

> number duplicatePlan(planId, duplicatePlanRequest)

Duplicate plan

Duplicates a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { DuplicatePlanOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // DuplicatePlanRequest
    duplicatePlanRequest: {"name":"Copied Plan"},
  } satisfies DuplicatePlanOperationRequest;

  try {
    const data = await api.duplicatePlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **duplicatePlanRequest** | [DuplicatePlanRequest](DuplicatePlanRequest.md) |  | |

### Return type

**number**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan to duplicate is not found. |  -  |
| **409** | Returned if the plan to duplicate is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlan

> GetPlanResponse getPlan(planId, useGroupId)

Get plan

Returns a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { GetPlanRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // boolean | Whether to return group IDs instead of group names. Group names are deprecated. (optional)
    useGroupId: true,
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
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **useGroupId** | `boolean` | Whether to return group IDs instead of group names. Group names are deprecated. | [Optional] [Defaults to `false`] |

### Return type

[**GetPlanResponse**](GetPlanResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlans

> PageWithCursorGetPlanResponseForPage getPlans(includeTrashed, includeArchived, cursor, maxResults)

Get plans paginated

Returns a [paginated](#pagination) list of plans.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { GetPlansRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // boolean | Whether to include trashed plans in the results. (optional)
    includeTrashed: true,
    // boolean | Whether to include archived plans in the results. (optional)
    includeArchived: true,
    // string | The cursor to start from. If not provided, the first page will be returned. (optional)
    cursor: cursor_example,
    // number | The maximum number of plans to return per page. The maximum value is 50. The default value is 50. (optional)
    maxResults: 56,
  } satisfies GetPlansRequest;

  try {
    const data = await api.getPlans(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **includeTrashed** | `boolean` | Whether to include trashed plans in the results. | [Optional] [Defaults to `false`] |
| **includeArchived** | `boolean` | Whether to include archived plans in the results. | [Optional] [Defaults to `false`] |
| **cursor** | `string` | The cursor to start from. If not provided, the first page will be returned. | [Optional] [Defaults to `&#39;&#39;`] |
| **maxResults** | `number` | The maximum number of plans to return per page. The maximum value is 50. The default value is 50. | [Optional] [Defaults to `50`] |

### Return type

[**PageWithCursorGetPlanResponseForPage**](PageWithCursorGetPlanResponseForPage.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## trashPlan

> any trashPlan(planId)

Trash plan

Moves a plan to trash.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { TrashPlanRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
  } satisfies TrashPlanRequest;

  try {
    const data = await api.trashPlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePlan

> any updatePlan(planId, body, useGroupId)

Update plan

Updates any of the following details of a plan using [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902).   *  name  *  leadAccountId  *  scheduling           *  estimation with StoryPoints, Days or Hours as possible values      *  startDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  endDate                   *  type with DueDate, TargetStartDate, TargetEndDate or DateCustomField as possible values          *  dateCustomFieldId      *  inferredDates with None, SprintDates or ReleaseDates as possible values      *  dependencies with Sequential or Concurrent as possible values  *  issueSources           *  type with Board, Project or Filter as possible values      *  value  *  exclusionRules           *  numberOfDaysToShowCompletedIssues      *  issueIds      *  workStatusIds      *  workStatusCategoryIds      *  issueTypeIds      *  releaseIds  *  crossProjectReleases           *  name      *  releaseIds  *  customFields           *  customFieldId      *  filter  *  permissions           *  type with View or Edit as possible values      *  holder                   *  type with Group or AccountId as possible values          *  value  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *Note that \&quot;add\&quot; operations do not respect array indexes in target locations. Call the \&quot;Get plan\&quot; endpoint to find out the order of array elements.*

### Example

```ts
import {
  Configuration,
  PlansApi,
} from 'jira-cloud-api';
import type { UpdatePlanRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PlansApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // object
    body: [{"op": "replace", "path": "/scheduling/estimation", "value": "Days"}]
,
    // boolean | Whether to accept group IDs instead of group names. Group names are deprecated. (optional)
    useGroupId: true,
  } satisfies UpdatePlanRequest;

  try {
    const data = await api.updatePlan(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **body** | `object` |  | |
| **useGroupId** | `boolean` | Whether to accept group IDs instead of group names. Group names are deprecated. | [Optional] [Defaults to `false`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

