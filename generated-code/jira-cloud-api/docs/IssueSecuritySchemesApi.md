# IssueSecuritySchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSecurityLevel**](IssueSecuritySchemesApi.md#addsecuritylevel) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level | Add issue security levels |
| [**addSecurityLevelMembers**](IssueSecuritySchemesApi.md#addsecuritylevelmembers) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member | Add issue security level members |
| [**associateSchemesToProjects**](IssueSecuritySchemesApi.md#associateschemestoprojects) | **PUT** /rest/api/3/issuesecurityschemes/project | Associate security scheme to project |
| [**createIssueSecurityScheme**](IssueSecuritySchemesApi.md#createissuesecurityscheme) | **POST** /rest/api/3/issuesecurityschemes | Create issue security scheme |
| [**deleteSecurityScheme**](IssueSecuritySchemesApi.md#deletesecurityscheme) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId} | Delete issue security scheme |
| [**getIssueSecurityScheme**](IssueSecuritySchemesApi.md#getissuesecurityscheme) | **GET** /rest/api/3/issuesecurityschemes/{id} | Get issue security scheme |
| [**getIssueSecuritySchemes**](IssueSecuritySchemesApi.md#getissuesecurityschemes) | **GET** /rest/api/3/issuesecurityschemes | Get issue security schemes |
| [**getSecurityLevelMembers**](IssueSecuritySchemesApi.md#getsecuritylevelmembers) | **GET** /rest/api/3/issuesecurityschemes/level/member | Get issue security level members |
| [**getSecurityLevels**](IssueSecuritySchemesApi.md#getsecuritylevels) | **GET** /rest/api/3/issuesecurityschemes/level | Get issue security levels |
| [**removeLevel**](IssueSecuritySchemesApi.md#removelevel) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId} | Remove issue security level |
| [**removeMemberFromSecurityLevel**](IssueSecuritySchemesApi.md#removememberfromsecuritylevel) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId} | Remove member from issue security level |
| [**searchProjectsUsingSecuritySchemes**](IssueSecuritySchemesApi.md#searchprojectsusingsecurityschemes) | **GET** /rest/api/3/issuesecurityschemes/project | Get projects using issue security schemes |
| [**searchSecuritySchemes**](IssueSecuritySchemesApi.md#searchsecurityschemes) | **GET** /rest/api/3/issuesecurityschemes/search | Search issue security schemes |
| [**setDefaultLevels**](IssueSecuritySchemesApi.md#setdefaultlevelsoperation) | **PUT** /rest/api/3/issuesecurityschemes/level/default | Set default issue security levels |
| [**updateIssueSecurityScheme**](IssueSecuritySchemesApi.md#updateissuesecurityscheme) | **PUT** /rest/api/3/issuesecurityschemes/{id} | Update issue security scheme |
| [**updateSecurityLevel**](IssueSecuritySchemesApi.md#updatesecuritylevel) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId} | Update issue security level |



## addSecurityLevel

> any addSecurityLevel(schemeId, addSecuritySchemeLevelsRequestBean)

Add issue security levels

Adds levels and levels\&#39; members to the issue security scheme. You can add up to 100 levels per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { AddSecurityLevelRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    schemeId: schemeId_example,
    // AddSecuritySchemeLevelsRequestBean
    addSecuritySchemeLevelsRequestBean: {"levels":[{"description":"First Level Description","isDefault":true,"members":[{"type":"reporter"},{"parameter":"jira-administrators","type":"group"}],"name":"First Level"}]},
  } satisfies AddSecurityLevelRequest;

  try {
    const data = await api.addSecurityLevel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |
| **addSecuritySchemeLevelsRequestBean** | [AddSecuritySchemeLevelsRequestBean](AddSecuritySchemeLevelsRequestBean.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the security scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addSecurityLevelMembers

> any addSecurityLevelMembers(schemeId, levelId, securitySchemeMembersRequest)

Add issue security level members

Adds members to the issue security level. You can add up to 100 members per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { AddSecurityLevelMembersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    schemeId: schemeId_example,
    // string | The ID of the issue security level.
    levelId: levelId_example,
    // SecuritySchemeMembersRequest
    securitySchemeMembersRequest: {"members":[{"type":"reporter"},{"parameter":"jira-administrators","type":"group"}]},
  } satisfies AddSecurityLevelMembersRequest;

  try {
    const data = await api.addSecurityLevelMembers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |
| **levelId** | `string` | The ID of the issue security level. | [Defaults to `undefined`] |
| **securitySchemeMembersRequest** | [SecuritySchemeMembersRequest](SecuritySchemeMembersRequest.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the security scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## associateSchemesToProjects

> associateSchemesToProjects(associateSecuritySchemeWithProjectDetails)

Associate security scheme to project

Associates an issue security scheme with a project and remaps security levels of issues to the new levels, if provided.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { AssociateSchemesToProjectsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // AssociateSecuritySchemeWithProjectDetails
    associateSecuritySchemeWithProjectDetails: {"oldToNewSecurityLevelMappings":[{"newLevelId":"30001","oldLevelId":"30000"}],"projectId":"10000","schemeId":"20000"},
  } satisfies AssociateSchemesToProjectsRequest;

  try {
    const data = await api.associateSchemesToProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **associateSecuritySchemeWithProjectDetails** | [AssociateSecuritySchemeWithProjectDetails](AssociateSecuritySchemeWithProjectDetails.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the security scheme isn\&#39;t found. |  -  |
| **409** | Returned if a task to remove the issue security level is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssueSecurityScheme

> SecuritySchemeId createIssueSecurityScheme(createIssueSecuritySchemeDetails)

Create issue security scheme

Creates a security scheme with security scheme levels and levels\&#39; members. You can create up to 100 security scheme levels and security scheme levels\&#39; members per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { CreateIssueSecuritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // CreateIssueSecuritySchemeDetails
    createIssueSecuritySchemeDetails: {"description":"Newly created issue security scheme","levels":[{"description":"Newly created level","isDefault":true,"members":[{"parameter":"administrators","type":"group"}],"name":"New level"}],"name":"New security scheme"},
  } satisfies CreateIssueSecuritySchemeRequest;

  try {
    const data = await api.createIssueSecurityScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createIssueSecuritySchemeDetails** | [CreateIssueSecuritySchemeDetails](CreateIssueSecuritySchemeDetails.md) |  | |

### Return type

[**SecuritySchemeId**](SecuritySchemeId.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSecurityScheme

> any deleteSecurityScheme(schemeId)

Delete issue security scheme

Deletes an issue security scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { DeleteSecuritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    schemeId: schemeId_example,
  } satisfies DeleteSecuritySchemeRequest;

  try {
    const data = await api.deleteSecurityScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue security scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueSecurityScheme

> SecurityScheme getIssueSecurityScheme(id)

Get issue security scheme

Returns an issue security scheme along with its security levels.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme.

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { GetIssueSecuritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
    id: 789,
  } satisfies GetIssueSecuritySchemeRequest;

  try {
    const data = await api.getIssueSecurityScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. | [Defaults to `undefined`] |

### Return type

[**SecurityScheme**](SecurityScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the administrator permission and the scheme is not used in any project where the user has administrative permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueSecuritySchemes

> SecuritySchemes getIssueSecuritySchemes()

Get issue security schemes

Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { GetIssueSecuritySchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  try {
    const data = await api.getIssueSecuritySchemes();
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

[**SecuritySchemes**](SecuritySchemes.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to administer issue security schemes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecurityLevelMembers

> PageBeanSecurityLevelMember getSecurityLevelMembers(startAt, maxResults, id, schemeId, levelId, expand)

Get issue security level members

Returns a [paginated](#pagination) list of issue security level members.  Only issue security level members in the context of classic projects are returned.  Filtering using parameters is inclusive: if you specify both security scheme IDs and level IDs, the result will include all issue security level members from the specified schemes and levels.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { GetSecurityLevelMembersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`. (optional)
    id: ...,
    // Set<string> | The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`. (optional)
    schemeId: ...,
    // Set<string> | The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`. (optional)
    levelId: ...,
    // string | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about the custom field granted the permission  *  `group` Returns information about the group that is granted the permission  *  `projectRole` Returns information about the project role granted the permission  *  `user` Returns information about the user who is granted the permission (optional)
    expand: expand_example,
  } satisfies GetSecurityLevelMembersRequest;

  try {
    const data = await api.getSecurityLevelMembers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **id** | `Set<string>` | The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **schemeId** | `Set<string>` | The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: &#x60;schemeId&#x3D;10000&amp;schemeId&#x3D;10001&#x60;. | [Optional] |
| **levelId** | `Set<string>` | The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: &#x60;levelId&#x3D;10000&amp;levelId&#x3D;10001&#x60;. | [Optional] |
| **expand** | `string` | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information  *  &#x60;field&#x60; Returns information about the custom field granted the permission  *  &#x60;group&#x60; Returns information about the group that is granted the permission  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission  *  &#x60;user&#x60; Returns information about the user who is granted the permission | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanSecurityLevelMember**](PageBeanSecurityLevelMember.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecurityLevels

> PageBeanSecurityLevel getSecurityLevels(startAt, maxResults, id, schemeId, onlyDefault)

Get issue security levels

Returns a [paginated](#pagination) list of issue security levels.  Only issue security levels in the context of classic projects are returned.  Filtering using IDs is inclusive: if you specify both security scheme IDs and level IDs, the result will include both specified issue security levels and all issue security levels from the specified schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { GetSecurityLevelsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: `id=10000&id=10001`. (optional)
    id: ...,
    // Set<string> | The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: `schemeId=10000&schemeId=10001`. (optional)
    schemeId: ...,
    // boolean | When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false. (optional)
    onlyDefault: true,
  } satisfies GetSecurityLevelsRequest;

  try {
    const data = await api.getSecurityLevels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **id** | `Set<string>` | The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **schemeId** | `Set<string>` | The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: &#x60;schemeId&#x3D;10000&amp;schemeId&#x3D;10001&#x60;. | [Optional] |
| **onlyDefault** | `boolean` | When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false. | [Optional] [Defaults to `false`] |

### Return type

[**PageBeanSecurityLevel**](PageBeanSecurityLevel.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLevel

> removeLevel(schemeId, levelId, replaceWith)

Remove issue security level

Deletes an issue security level.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { RemoveLevelRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    schemeId: schemeId_example,
    // string | The ID of the issue security level to remove.
    levelId: levelId_example,
    // string | The ID of the issue security level that will replace the currently selected level. (optional)
    replaceWith: replaceWith_example,
  } satisfies RemoveLevelRequest;

  try {
    const data = await api.removeLevel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |
| **levelId** | `string` | The ID of the issue security level to remove. | [Defaults to `undefined`] |
| **replaceWith** | `string` | The ID of the issue security level that will replace the currently selected level. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue security level isn\&#39;t found. |  -  |
| **409** | Returned if a task to remove the issue security level is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMemberFromSecurityLevel

> any removeMemberFromSecurityLevel(schemeId, levelId, memberId)

Remove member from issue security level

Removes an issue security level member from an issue security scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { RemoveMemberFromSecurityLevelRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    schemeId: schemeId_example,
    // string | The ID of the issue security level.
    levelId: levelId_example,
    // string | The ID of the issue security level member to be removed.
    memberId: memberId_example,
  } satisfies RemoveMemberFromSecurityLevelRequest;

  try {
    const data = await api.removeMemberFromSecurityLevel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |
| **levelId** | `string` | The ID of the issue security level. | [Defaults to `undefined`] |
| **memberId** | `string` | The ID of the issue security level member to be removed. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the security scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchProjectsUsingSecuritySchemes

> PageBeanIssueSecuritySchemeToProjectMapping searchProjectsUsingSecuritySchemes(startAt, maxResults, issueSecuritySchemeId, projectId)

Get projects using issue security schemes

Returns a [paginated](#pagination) mapping of projects that are using security schemes. You can provide either one or multiple security scheme IDs or project IDs to filter by. If you don\&#39;t provide any, this will return a list of all mappings. Only issue security schemes in the context of classic projects are supported. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { SearchProjectsUsingSecuritySchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of security scheme IDs to be filtered out. (optional)
    issueSecuritySchemeId: ...,
    // Set<string> | The list of project IDs to be filtered out. (optional)
    projectId: ...,
  } satisfies SearchProjectsUsingSecuritySchemesRequest;

  try {
    const data = await api.searchProjectsUsingSecuritySchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **issueSecuritySchemeId** | `Set<string>` | The list of security scheme IDs to be filtered out. | [Optional] |
| **projectId** | `Set<string>` | The list of project IDs to be filtered out. | [Optional] |

### Return type

[**PageBeanIssueSecuritySchemeToProjectMapping**](PageBeanIssueSecuritySchemeToProjectMapping.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the search criteria is invalid.If you specify the project ID parameter |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSecuritySchemes

> PageBeanSecuritySchemeWithProjects searchSecuritySchemes(startAt, maxResults, id, projectId)

Search issue security schemes

Returns a [paginated](#pagination) list of issue security schemes.   If you specify the project ID parameter, the result will contain issue security schemes and related project IDs you filter by. Use \\{@link IssueSecuritySchemeResource\\#searchProjectsUsingSecuritySchemes(String, String, Set, Set)\\} to obtain all projects related to scheme.  Only issue security schemes in the context of classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { SearchSecuritySchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: `id=10000&id=10001`. (optional)
    id: ...,
    // Set<string> | The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: `projectId=10000&projectId=10001`. (optional)
    projectId: ...,
  } satisfies SearchSecuritySchemesRequest;

  try {
    const data = await api.searchSecuritySchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **id** | `Set<string>` | The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **projectId** | `Set<string>` | The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | [Optional] |

### Return type

[**PageBeanSecuritySchemeWithProjects**](PageBeanSecuritySchemeWithProjects.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultLevels

> any setDefaultLevels(setDefaultLevelsRequest)

Set default issue security levels

Sets default issue security levels for schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { SetDefaultLevelsOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // SetDefaultLevelsRequest
    setDefaultLevelsRequest: {"defaultValues":[{"defaultLevelId":"20000","issueSecuritySchemeId":"10000"},{"defaultLevelId":"30000","issueSecuritySchemeId":"12000"}]},
  } satisfies SetDefaultLevelsOperationRequest;

  try {
    const data = await api.setDefaultLevels(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **setDefaultLevelsRequest** | [SetDefaultLevelsRequest](SetDefaultLevelsRequest.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue resolution isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueSecurityScheme

> any updateIssueSecurityScheme(id, updateIssueSecuritySchemeRequestBean)

Update issue security scheme

Updates the issue security scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { UpdateIssueSecuritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme.
    id: id_example,
    // UpdateIssueSecuritySchemeRequestBean
    updateIssueSecuritySchemeRequestBean: {"description":"My issue security scheme description","name":"My issue security scheme name"},
  } satisfies UpdateIssueSecuritySchemeRequest;

  try {
    const data = await api.updateIssueSecurityScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the issue security scheme. | [Defaults to `undefined`] |
| **updateIssueSecuritySchemeRequestBean** | [UpdateIssueSecuritySchemeRequestBean](UpdateIssueSecuritySchemeRequestBean.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue security scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSecurityLevel

> any updateSecurityLevel(schemeId, levelId, updateIssueSecurityLevelDetails)

Update issue security level

Updates the issue security level.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecuritySchemesApi,
} from 'jira-cloud-api';
import type { UpdateSecurityLevelRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecuritySchemesApi(config);

  const body = {
    // string | The ID of the issue security scheme level belongs to.
    schemeId: schemeId_example,
    // string | The ID of the issue security level to update.
    levelId: levelId_example,
    // UpdateIssueSecurityLevelDetails
    updateIssueSecurityLevelDetails: {"description":"New level description","name":"New level name"},
  } satisfies UpdateSecurityLevelRequest;

  try {
    const data = await api.updateSecurityLevel(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **schemeId** | `string` | The ID of the issue security scheme level belongs to. | [Defaults to `undefined`] |
| **levelId** | `string` | The ID of the issue security level to update. | [Defaults to `undefined`] |
| **updateIssueSecurityLevelDetails** | [UpdateIssueSecurityLevelDetails](UpdateIssueSecurityLevelDetails.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue security level isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

