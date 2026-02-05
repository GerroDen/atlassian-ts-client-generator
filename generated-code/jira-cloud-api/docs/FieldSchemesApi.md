# FieldSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**associateProjectsToFieldAssociationSchemes**](FieldSchemesApi.md#associateprojectstofieldassociationschemes) | **PUT** /rest/api/3/config/fieldschemes/projects | Associate projects to field schemes |
| [**createFieldAssociationScheme**](FieldSchemesApi.md#createfieldassociationschemeoperation) | **POST** /rest/api/3/config/fieldschemes | Create field scheme |
| [**deleteFieldAssociationScheme**](FieldSchemesApi.md#deletefieldassociationscheme) | **DELETE** /rest/api/3/config/fieldschemes/{id} | Delete a field scheme |
| [**getFieldAssociationSchemeById**](FieldSchemesApi.md#getfieldassociationschemebyid) | **GET** /rest/api/3/config/fieldschemes/{id} | Get field scheme |
| [**getFieldAssociationSchemeItemParameters**](FieldSchemesApi.md#getfieldassociationschemeitemparameters) | **GET** /rest/api/3/config/fieldschemes/{id}/fields/{fieldId}/parameters | Get field parameters |
| [**getFieldAssociationSchemes**](FieldSchemesApi.md#getfieldassociationschemes) | **GET** /rest/api/3/config/fieldschemes | Get field schemes |
| [**getProjectsWithFieldSchemes**](FieldSchemesApi.md#getprojectswithfieldschemes) | **GET** /rest/api/3/config/fieldschemes/projects | Get projects with field schemes |
| [**removeFieldAssociationSchemeItemParameters**](FieldSchemesApi.md#removefieldassociationschemeitemparameters) | **DELETE** /rest/api/3/config/fieldschemes/fields/parameters | Remove field parameters |
| [**removeFieldsAssociatedWithSchemes**](FieldSchemesApi.md#removefieldsassociatedwithschemes) | **DELETE** /rest/api/3/config/fieldschemes/fields | Remove fields associated with field schemes |
| [**searchFieldAssociationSchemeFields**](FieldSchemesApi.md#searchfieldassociationschemefields) | **GET** /rest/api/3/config/fieldschemes/{id}/fields | Search field scheme fields |
| [**searchFieldAssociationSchemeProjects**](FieldSchemesApi.md#searchfieldassociationschemeprojects) | **GET** /rest/api/3/config/fieldschemes/{id}/projects | Search field scheme projects |
| [**updateFieldAssociationScheme**](FieldSchemesApi.md#updatefieldassociationschemeoperation) | **PUT** /rest/api/3/config/fieldschemes/{id} | Update field scheme |
| [**updateFieldAssociationSchemeItemParameters**](FieldSchemesApi.md#updatefieldassociationschemeitemparameters) | **PUT** /rest/api/3/config/fieldschemes/fields/parameters | Update field parameters |
| [**updateFieldsAssociatedWithSchemes**](FieldSchemesApi.md#updatefieldsassociatedwithschemes) | **PUT** /rest/api/3/config/fieldschemes/fields | Update fields associated with field schemes |



## associateProjectsToFieldAssociationSchemes

> FieldSchemeToProjectsResponse associateProjectsToFieldAssociationSchemes(requestBody)

Associate projects to field schemes

Associate projects to field association schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { AssociateProjectsToFieldAssociationSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // { [key: string]: FieldSchemeToProjectsRequest; }
    requestBody: {"10000":{"projectIds":[10000,10001]},"10001":{"projectIds":[10002]}},
  } satisfies AssociateProjectsToFieldAssociationSchemesRequest;

  try {
    const data = await api.associateProjectsToFieldAssociationSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `{ [key: string]: FieldSchemeToProjectsRequest; }` |  | |

### Return type

[**FieldSchemeToProjectsResponse**](FieldSchemeToProjectsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the association was successful. |  -  |
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **207** | Returned if the association was partially successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. If request is well-formed but contains invalid scheme or project IDs, returns failure details. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFieldAssociationScheme

> CreateFieldAssociationSchemeResponse createFieldAssociationScheme(createFieldAssociationSchemeRequest)

Create field scheme

Endpoint for creating a new field association scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { CreateFieldAssociationSchemeOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // CreateFieldAssociationSchemeRequest | The request containing the name and description of the field association scheme
    createFieldAssociationSchemeRequest: {"description":"Field association scheme description","name":"Field association scheme name"},
  } satisfies CreateFieldAssociationSchemeOperationRequest;

  try {
    const data = await api.createFieldAssociationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createFieldAssociationSchemeRequest** | [CreateFieldAssociationSchemeRequest](CreateFieldAssociationSchemeRequest.md) | The request containing the name and description of the field association scheme | |

### Return type

[**CreateFieldAssociationSchemeResponse**](CreateFieldAssociationSchemeResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the creation was successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |
| **404** | Returned if the feature flag is disabled or the scheme ID is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFieldAssociationScheme

> DeleteFieldAssociationSchemeResponse deleteFieldAssociationScheme(id)

Delete a field scheme

Delete a specified field association scheme  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { DeleteFieldAssociationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number | The ID of the field association scheme to delete.
    id: 789,
  } satisfies DeleteFieldAssociationSchemeRequest;

  try {
    const data = await api.deleteFieldAssociationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field association scheme to delete. | [Defaults to `undefined`] |

### Return type

[**DeleteFieldAssociationSchemeResponse**](DeleteFieldAssociationSchemeResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the field association scheme deletion was successful. |  -  |
| **400** | Returned if the scheme that the user is attempting to delete is a system scheme. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |
| **404** | Return if the provided ID does not match any existing field association scheme |  -  |
| **409** | Return if the scheme that the user is attempting to delete is still in use. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldAssociationSchemeById

> GetFieldAssociationSchemeByIdResponse getFieldAssociationSchemeById(id)

Get field scheme

Endpoint for fetching a field association scheme by its ID  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { GetFieldAssociationSchemeByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number | The scheme id to fetch
    id: 789,
  } satisfies GetFieldAssociationSchemeByIdRequest;

  try {
    const data = await api.getFieldAssociationSchemeById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The scheme id to fetch | [Defaults to `undefined`] |

### Return type

[**GetFieldAssociationSchemeByIdResponse**](GetFieldAssociationSchemeByIdResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if a field association scheme matches the given scheme ID |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |
| **404** | Returned if provided ID does not match any field association schemes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldAssociationSchemeItemParameters

> GetFieldAssociationParametersResponse getFieldAssociationSchemeItemParameters(id, fieldId)

Get field parameters

Retrieve field association parameters on a field association scheme  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { GetFieldAssociationSchemeItemParametersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number | the ID of the field association scheme to retrieve parameters for
    id: 789,
    // string | the ID of the field
    fieldId: fieldId_example,
  } satisfies GetFieldAssociationSchemeItemParametersRequest;

  try {
    const data = await api.getFieldAssociationSchemeItemParameters(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | the ID of the field association scheme to retrieve parameters for | [Defaults to `undefined`] |
| **fieldId** | `string` | the ID of the field | [Defaults to `undefined`] |

### Return type

[**GetFieldAssociationParametersResponse**](GetFieldAssociationParametersResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the parameters fetched were successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldAssociationSchemes

> PageBean2GetFieldAssociationSchemeResponse getFieldAssociationSchemes(projectId, query, startAt, maxResults)

Get field schemes

REST endpoint for retrieving a paginated list of field association schemes with optional filtering.  This endpoint allows clients to fetch field association schemes with optional filtering by project IDs and text queries. The response includes scheme details with navigation links and filter metadata when applicable.  Filtering Behavior:   *  When projectId or query parameters are provided, the response includes matchedFilters metadata showing which filters were applied.  *  When no filters are applied, matchedFilters is omitted from individual scheme objects  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { GetFieldAssociationSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // Array<number> | (optional) List of project IDs to filter schemes by. If not provided, schemes from all projects are returned. (optional)
    projectId: ...,
    // string | (optional) Text filter for scheme name or description matching (case-insensitive). If not provided, no text filtering is applied. (optional)
    query: query_example,
    // number | Zero-based index of the first item to return (default: 0) (optional)
    startAt: 789,
    // number | Maximum number of items to return per page (default: 50, max: 100) (optional)
    maxResults: 56,
  } satisfies GetFieldAssociationSchemesRequest;

  try {
    const data = await api.getFieldAssociationSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `Array<number>` | (optional) List of project IDs to filter schemes by. If not provided, schemes from all projects are returned. | [Optional] |
| **query** | `string` | (optional) Text filter for scheme name or description matching (case-insensitive). If not provided, no text filtering is applied. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | Zero-based index of the first item to return (default: 0) | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | Maximum number of items to return per page (default: 50, max: 100) | [Optional] [Defaults to `50`] |

### Return type

[**PageBean2GetFieldAssociationSchemeResponse**](PageBean2GetFieldAssociationSchemeResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pagianted list of field association schemes |  -  |
| **400** | Returned if the request parameters are invalid (e.g., negative startAt, maxResults exceeding limit). |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the feature flag is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectsWithFieldSchemes

> PageBean2GetProjectsWithFieldSchemesResponse getProjectsWithFieldSchemes(projectId, startAt, maxResults)

Get projects with field schemes

Get projects with field association schemes. This will be a temporary API but useful when transitioning from the legacy field configuration APIs to the new ones.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { GetProjectsWithFieldSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // Array<number> | List of project ids to filter the results by.
    projectId: ...,
    // number | The starting index of the returned projects. Base index: 0. (optional)
    startAt: 789,
    // number | The maximum number of projects to return per page, maximum allowed value is 100. (optional)
    maxResults: 56,
  } satisfies GetProjectsWithFieldSchemesRequest;

  try {
    const data = await api.getProjectsWithFieldSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `Array<number>` | List of project ids to filter the results by. | |
| **startAt** | `number` | The starting index of the returned projects. Base index: 0. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of projects to return per page, maximum allowed value is 100. | [Optional] [Defaults to `50`] |

### Return type

[**PageBean2GetProjectsWithFieldSchemesResponse**](PageBean2GetProjectsWithFieldSchemesResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the list of project with field association schemes. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the feature flag is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeFieldAssociationSchemeItemParameters

> removeFieldAssociationSchemeItemParameters(requestBody)

Remove field parameters

Remove field association parameters overrides for work types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { RemoveFieldAssociationSchemeItemParametersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // { [key: string]: Array<ParameterRemovalDetails>; }
    requestBody: {"customfield_10000":[{"parameters":["description","isRequired"],"schemeId":10000,"workTypeIds":[1,2]}],"description":[{"parameters":["description"],"schemeId":10001,"workTypeIds":[3]}]},
  } satisfies RemoveFieldAssociationSchemeItemParametersRequest;

  try {
    const data = await api.removeFieldAssociationSchemeItemParameters(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `{ [key: string]: Array<ParameterRemovalDetails>; }` |  | |

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
| **200** | Returned if the removal was successful. |  -  |
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **207** | Returned if the removal was partially successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. If request is well-formed but contains invalid scheme or project IDs, returns failure details. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeFieldsAssociatedWithSchemes

> MinimalFieldSchemeToFieldsResponse removeFieldsAssociatedWithSchemes(requestBody)

Remove fields associated with field schemes

Remove fields associated with field association schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { RemoveFieldsAssociatedWithSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // { [key: string]: RemoveFieldAssociationsRequestItem; } | The request containing the schemes and fields to be removed.
    requestBody: {"customfield_10000":{"schemeIds":[10000,10001]},"customfield_10001":{"schemeIds":[10002]}},
  } satisfies RemoveFieldsAssociatedWithSchemesRequest;

  try {
    const data = await api.removeFieldsAssociatedWithSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `{ [key: string]: RemoveFieldAssociationsRequestItem; }` | The request containing the schemes and fields to be removed. | |

### Return type

[**MinimalFieldSchemeToFieldsResponse**](MinimalFieldSchemeToFieldsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the field association update was successful. |  -  |
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **207** | Returned if the field association update was partially successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. If request is well-formed but contains invalid scheme or field IDs, returns failure details. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchFieldAssociationSchemeFields

> PageBean2FieldAssociationSchemeFieldSearchResult searchFieldAssociationSchemeFields(id, startAt, maxResults, fieldId)

Search field scheme fields

Search for fields belonging to a given field association scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { SearchFieldAssociationSchemeFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number | The scheme ID to search for child fields
    id: 789,
    // number | The starting index of the returned fields. Base index: 0. (optional)
    startAt: 789,
    // number | The maximum number of fields to return per page, maximum allowed value is 100. (optional)
    maxResults: 56,
    // Set<string> | The field IDs to filter by, if empty then all fields belonging to a field association scheme will be returned (optional)
    fieldId: ...,
  } satisfies SearchFieldAssociationSchemeFieldsRequest;

  try {
    const data = await api.searchFieldAssociationSchemeFields(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The scheme ID to search for child fields | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned fields. Base index: 0. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of fields to return per page, maximum allowed value is 100. | [Optional] [Defaults to `50`] |
| **fieldId** | `Set<string>` | The field IDs to filter by, if empty then all fields belonging to a field association scheme will be returned | [Optional] |

### Return type

[**PageBean2FieldAssociationSchemeFieldSearchResult**](PageBean2FieldAssociationSchemeFieldSearchResult.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the matching fields, at the specified page of the results. |  -  |
| **400** | Returned if the request parameters are invalid (e.g., negative startAt, maxResults exceeding limit, duplicate fieldIds). |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the feature flag is disabled or the scheme ID is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchFieldAssociationSchemeProjects

> PageBean2FieldAssociationSchemeProjectSearchResult searchFieldAssociationSchemeProjects(id, startAt, maxResults, projectId)

Search field scheme projects

REST Endpoint for searching for projects belonging to a given field association scheme  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { SearchFieldAssociationSchemeProjectsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number | The scheme id to search for associated projects
    id: 789,
    // number | The starting index of the returned projects. Base index: 0. (optional)
    startAt: 789,
    // number | The maximum number of projects to return per page, maximum allowed value is 100. (optional)
    maxResults: 56,
    // Array<number> | The project Ids to filter by, if empty then all projects belonging to a field association scheme will be returned (optional)
    projectId: ...,
  } satisfies SearchFieldAssociationSchemeProjectsRequest;

  try {
    const data = await api.searchFieldAssociationSchemeProjects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The scheme id to search for associated projects | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned projects. Base index: 0. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of projects to return per page, maximum allowed value is 100. | [Optional] [Defaults to `50`] |
| **projectId** | `Array<number>` | The project Ids to filter by, if empty then all projects belonging to a field association scheme will be returned | [Optional] |

### Return type

[**PageBean2FieldAssociationSchemeProjectSearchResult**](PageBean2FieldAssociationSchemeProjectSearchResult.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a paginated list of projects associated with the field association scheme, matching the specified filter criteria. |  -  |
| **400** | 400 response |  -  |
| **401** | 401 response |  -  |
| **403** | 403 response |  -  |
| **404** | 404 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldAssociationScheme

> UpdateFieldAssociationSchemeResponse updateFieldAssociationScheme(id, updateFieldAssociationSchemeRequest)

Update field scheme

Endpoint for updating an existing field association scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { UpdateFieldAssociationSchemeOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // number
    id: 789,
    // UpdateFieldAssociationSchemeRequest | The request containing the desired updates to the field association scheme
    updateFieldAssociationSchemeRequest: {"description":"Field association scheme description","name":"Field association scheme name"},
  } satisfies UpdateFieldAssociationSchemeOperationRequest;

  try {
    const data = await api.updateFieldAssociationScheme(body);
    console.log(data);
  } catch (error) {
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
| **updateFieldAssociationSchemeRequest** | [UpdateFieldAssociationSchemeRequest](UpdateFieldAssociationSchemeRequest.md) | The request containing the desired updates to the field association scheme | |

### Return type

[**UpdateFieldAssociationSchemeResponse**](UpdateFieldAssociationSchemeResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the update was successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |
| **404** | Returned if the feature flag is disabled or the scheme ID is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldAssociationSchemeItemParameters

> UpdateFieldSchemeParametersResponse updateFieldAssociationSchemeItemParameters(requestBody)

Update field parameters

Update field association item parameters in field association schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { UpdateFieldAssociationSchemeItemParametersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // { [key: string]: Array<UpdateFieldSchemeParametersRequest>; } | The request containing the field association scheme id and the parameters to update.
    requestBody: {"customfield_10000":[{"parameters":{"description":"Field description","isRequired":true},"schemeIds":[10000,10001],"workTypeParameters":[{"description":"Description for Bug","isRequired":false,"workTypeId":10002}]}],"customfield_10001":[{"schemeIds":[10001],"workTypeParameters":[{"description":"Description for Bug","isRequired":false,"workTypeId":10002},{"description":"Description for Task","isRequired":true,"workTypeId":10003}]}]},
  } satisfies UpdateFieldAssociationSchemeItemParametersRequest;

  try {
    const data = await api.updateFieldAssociationSchemeItemParameters(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `{ [key: string]: Array<UpdateFieldSchemeParametersRequest>; }` | The request containing the field association scheme id and the parameters to update. | |

### Return type

[**UpdateFieldSchemeParametersResponse**](UpdateFieldSchemeParametersResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the field parameter update was successful. |  -  |
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **207** | Returned if the field parameter update was partially successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. If request is well-formed but contains invalid scheme or field IDs, returns failure details. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldsAssociatedWithSchemes

> FieldSchemeToFieldsResponse updateFieldsAssociatedWithSchemes(requestBody)

Update fields associated with field schemes

Update fields associated with field association schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  FieldSchemesApi,
} from 'jira-cloud-api';
import type { UpdateFieldsAssociatedWithSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FieldSchemesApi(config);

  const body = {
    // { [key: string]: Array<UpdateFieldAssociationsRequestItem>; } | The request containing the schemes and work types to associate each field with.
    requestBody: {"customfield_10000":[{"restrictedToWorkTypes":[1,2],"schemeIds":[10000,10001]}],"customfield_10001":[{"schemeIds":[10002]}]},
  } satisfies UpdateFieldsAssociatedWithSchemesRequest;

  try {
    const data = await api.updateFieldsAssociatedWithSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestBody** | `{ [key: string]: Array<UpdateFieldAssociationsRequestItem>; }` | The request containing the schemes and work types to associate each field with. | |

### Return type

[**FieldSchemeToFieldsResponse**](FieldSchemeToFieldsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the field association update was successful. |  -  |
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **207** | Returned if the field association update was partially successful. |  -  |
| **400** | Returned if the request is invalid. If request is malformed, returns a collection of errors. If request is well-formed but contains invalid scheme or field IDs, returns failure details. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

