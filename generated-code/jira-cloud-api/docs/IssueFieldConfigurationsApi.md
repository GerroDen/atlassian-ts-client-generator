# IssueFieldConfigurationsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignFieldConfigurationSchemeToProject**](IssueFieldConfigurationsApi.md#assignfieldconfigurationschemetoproject) | **PUT** /rest/api/3/fieldconfigurationscheme/project | Assign field configuration scheme to project |
| [**createFieldConfiguration**](IssueFieldConfigurationsApi.md#createfieldconfiguration) | **POST** /rest/api/3/fieldconfiguration | Create field configuration |
| [**createFieldConfigurationScheme**](IssueFieldConfigurationsApi.md#createfieldconfigurationscheme) | **POST** /rest/api/3/fieldconfigurationscheme | Create field configuration scheme |
| [**deleteFieldConfiguration**](IssueFieldConfigurationsApi.md#deletefieldconfiguration) | **DELETE** /rest/api/3/fieldconfiguration/{id} | Delete field configuration |
| [**deleteFieldConfigurationScheme**](IssueFieldConfigurationsApi.md#deletefieldconfigurationscheme) | **DELETE** /rest/api/3/fieldconfigurationscheme/{id} | Delete field configuration scheme |
| [**getAllFieldConfigurationSchemes**](IssueFieldConfigurationsApi.md#getallfieldconfigurationschemes) | **GET** /rest/api/3/fieldconfigurationscheme | Get all field configuration schemes |
| [**getAllFieldConfigurations**](IssueFieldConfigurationsApi.md#getallfieldconfigurations) | **GET** /rest/api/3/fieldconfiguration | Get all field configurations |
| [**getFieldConfigurationItems**](IssueFieldConfigurationsApi.md#getfieldconfigurationitems) | **GET** /rest/api/3/fieldconfiguration/{id}/fields | Get field configuration items |
| [**getFieldConfigurationSchemeMappings**](IssueFieldConfigurationsApi.md#getfieldconfigurationschememappings) | **GET** /rest/api/3/fieldconfigurationscheme/mapping | Get field configuration issue type items |
| [**getFieldConfigurationSchemeProjectMapping**](IssueFieldConfigurationsApi.md#getfieldconfigurationschemeprojectmapping) | **GET** /rest/api/3/fieldconfigurationscheme/project | Get field configuration schemes for projects |
| [**removeIssueTypesFromGlobalFieldConfigurationScheme**](IssueFieldConfigurationsApi.md#removeissuetypesfromglobalfieldconfigurationscheme) | **POST** /rest/api/3/fieldconfigurationscheme/{id}/mapping/delete | Remove issue types from field configuration scheme |
| [**setFieldConfigurationSchemeMapping**](IssueFieldConfigurationsApi.md#setfieldconfigurationschememapping) | **PUT** /rest/api/3/fieldconfigurationscheme/{id}/mapping | Assign issue types to field configurations |
| [**updateFieldConfiguration**](IssueFieldConfigurationsApi.md#updatefieldconfiguration) | **PUT** /rest/api/3/fieldconfiguration/{id} | Update field configuration |
| [**updateFieldConfigurationItems**](IssueFieldConfigurationsApi.md#updatefieldconfigurationitems) | **PUT** /rest/api/3/fieldconfiguration/{id}/fields | Update field configuration items |
| [**updateFieldConfigurationScheme**](IssueFieldConfigurationsApi.md#updatefieldconfigurationscheme) | **PUT** /rest/api/3/fieldconfigurationscheme/{id} | Update field configuration scheme |



## assignFieldConfigurationSchemeToProject

> any assignFieldConfigurationSchemeToProject(fieldConfigurationSchemeProjectAssociation)

Assign field configuration scheme to project

Assigns a field configuration scheme to a project. If the field configuration scheme ID is &#x60;null&#x60;, the operation assigns the default field configuration scheme.  Field configuration schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { AssignFieldConfigurationSchemeToProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // FieldConfigurationSchemeProjectAssociation
    fieldConfigurationSchemeProjectAssociation: {"fieldConfigurationSchemeId":"10000","projectId":"10000"},
  } satisfies AssignFieldConfigurationSchemeToProjectRequest;

  try {
    const data = await api.assignFieldConfigurationSchemeToProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldConfigurationSchemeProjectAssociation** | [FieldConfigurationSchemeProjectAssociation](FieldConfigurationSchemeProjectAssociation.md) |  | |

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
| **400** | Returned if the project is not a classic project. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permissions. |  -  |
| **404** | Returned if the project is missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFieldConfiguration

> FieldConfiguration createFieldConfiguration(fieldConfigurationDetails)

Create field configuration

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Creates a field configuration. The field configuration is created with the same field properties as the default configuration, with all the fields being optional.  This operation can only create configurations for use in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { CreateFieldConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // FieldConfigurationDetails
    fieldConfigurationDetails: {"description":"My field configuration description","name":"My Field Configuration"},
  } satisfies CreateFieldConfigurationRequest;

  try {
    const data = await api.createFieldConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fieldConfigurationDetails** | [FieldConfigurationDetails](FieldConfigurationDetails.md) |  | |

### Return type

[**FieldConfiguration**](FieldConfiguration.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFieldConfigurationScheme

> FieldConfigurationScheme createFieldConfigurationScheme(updateFieldConfigurationSchemeDetails)

Create field configuration scheme

Creates a field configuration scheme.  This operation can only create field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { CreateFieldConfigurationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // UpdateFieldConfigurationSchemeDetails | The details of the field configuration scheme.
    updateFieldConfigurationSchemeDetails: {"description":"We can use this one for software projects.","name":"Field Configuration Scheme for software related projects"},
  } satisfies CreateFieldConfigurationSchemeRequest;

  try {
    const data = await api.createFieldConfigurationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updateFieldConfigurationSchemeDetails** | [UpdateFieldConfigurationSchemeDetails](UpdateFieldConfigurationSchemeDetails.md) | The details of the field configuration scheme. | |

### Return type

[**FieldConfigurationScheme**](FieldConfigurationScheme.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFieldConfiguration

> any deleteFieldConfiguration(id)

Delete field configuration

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Deletes a field configuration.  This operation can only delete configurations used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { DeleteFieldConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration.
    id: 789,
  } satisfies DeleteFieldConfigurationRequest;

  try {
    const data = await api.deleteFieldConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFieldConfigurationScheme

> any deleteFieldConfigurationScheme(id)

Delete field configuration scheme

Deletes a field configuration scheme.  This operation can only delete field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { DeleteFieldConfigurationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration scheme.
    id: 789,
  } satisfies DeleteFieldConfigurationSchemeRequest;

  try {
    const data = await api.deleteFieldConfigurationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration scheme. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllFieldConfigurationSchemes

> PageBeanFieldConfigurationScheme getAllFieldConfigurationSchemes(startAt, maxResults, id)

Get all field configuration schemes

Returns a [paginated](#pagination) list of field configuration schemes.  Only field configuration schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { GetAllFieldConfigurationSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
  } satisfies GetAllFieldConfigurationSchemesRequest;

  try {
    const data = await api.getAllFieldConfigurationSchemes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **id** | `Set<number>` | The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |

### Return type

[**PageBeanFieldConfigurationScheme**](PageBeanFieldConfigurationScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllFieldConfigurations

> PageBeanFieldConfigurationDetails getAllFieldConfigurations(startAt, maxResults, id, isDefault, query)

Get all field configurations

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Returns a [paginated](#pagination) list of field configurations. The list can be for all field configurations or a subset determined by any combination of these criteria:   *  a list of field configuration item IDs.  *  whether the field configuration is a default.  *  whether the field configuration name or description contains a query string.  Only field configurations used in company-managed (classic) projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { GetAllFieldConfigurationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
    // boolean | If *true* returns default field configurations only. (optional)
    isDefault: true,
    // string | The query string used to match against field configuration names and descriptions. (optional)
    query: query_example,
  } satisfies GetAllFieldConfigurationsRequest;

  try {
    const data = await api.getAllFieldConfigurations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **id** | `Set<number>` | The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **isDefault** | `boolean` | If *true* returns default field configurations only. | [Optional] [Defaults to `false`] |
| **query** | `string` | The query string used to match against field configuration names and descriptions. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanFieldConfigurationDetails**](PageBeanFieldConfigurationDetails.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldConfigurationItems

> PageBeanFieldConfigurationItem getFieldConfigurationItems(id, startAt, maxResults)

Get field configuration items

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Returns a [paginated](#pagination) list of all fields for a configuration.  Only the fields from configurations used in company-managed (classic) projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { GetFieldConfigurationItemsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration.
    id: 789,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetFieldConfigurationItemsRequest;

  try {
    const data = await api.getFieldConfigurationItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanFieldConfigurationItem**](PageBeanFieldConfigurationItem.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldConfigurationSchemeMappings

> PageBeanFieldConfigurationIssueTypeItem getFieldConfigurationSchemeMappings(startAt, maxResults, fieldConfigurationSchemeId)

Get field configuration issue type items

Returns a [paginated](#pagination) list of field configuration issue type items.  Only items used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { GetFieldConfigurationSchemeMappingsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`. (optional)
    fieldConfigurationSchemeId: ...,
  } satisfies GetFieldConfigurationSchemeMappingsRequest;

  try {
    const data = await api.getFieldConfigurationSchemeMappings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **fieldConfigurationSchemeId** | `Set<number>` | The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: &#x60;fieldConfigurationSchemeId&#x3D;10000&amp;fieldConfigurationSchemeId&#x3D;10001&#x60;. | [Optional] |

### Return type

[**PageBeanFieldConfigurationIssueTypeItem**](PageBeanFieldConfigurationIssueTypeItem.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if no field configuration schemes are found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldConfigurationSchemeProjectMapping

> PageBeanFieldConfigurationSchemeProjects getFieldConfigurationSchemeProjectMapping(projectId, startAt, maxResults)

Get field configuration schemes for projects

Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.  The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.  Only field configuration schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { GetFieldConfigurationSchemeProjectMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // Set<number> | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    projectId: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetFieldConfigurationSchemeProjectMappingRequest;

  try {
    const data = await api.getFieldConfigurationSchemeProjectMapping(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `Set<number>` | The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanFieldConfigurationSchemeProjects**](PageBeanFieldConfigurationSchemeProjects.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeIssueTypesFromGlobalFieldConfigurationScheme

> any removeIssueTypesFromGlobalFieldConfigurationScheme(id, issueTypeIdsToRemove)

Remove issue types from field configuration scheme

Removes issue types from the field configuration scheme.  This operation can only modify field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { RemoveIssueTypesFromGlobalFieldConfigurationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration scheme.
    id: 789,
    // IssueTypeIdsToRemove | The issue type IDs to remove.
    issueTypeIdsToRemove: {"issueTypeIds":["10000","10001","10002"]},
  } satisfies RemoveIssueTypesFromGlobalFieldConfigurationSchemeRequest;

  try {
    const data = await api.removeIssueTypesFromGlobalFieldConfigurationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration scheme. | [Defaults to `undefined`] |
| **issueTypeIdsToRemove** | [IssueTypeIdsToRemove](IssueTypeIdsToRemove.md) | The issue type IDs to remove. | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration scheme or the issue types are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setFieldConfigurationSchemeMapping

> any setFieldConfigurationSchemeMapping(id, associateFieldConfigurationsWithIssueTypesRequest)

Assign issue types to field configurations

Assigns issue types to field configurations on field configuration scheme.  This operation can only modify field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { SetFieldConfigurationSchemeMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration scheme.
    id: 789,
    // AssociateFieldConfigurationsWithIssueTypesRequest
    associateFieldConfigurationsWithIssueTypesRequest: {"mappings":[{"fieldConfigurationId":"10000","issueTypeId":"default"},{"fieldConfigurationId":"10002","issueTypeId":"10001"},{"fieldConfigurationId":"10001","issueTypeId":"10002"}]},
  } satisfies SetFieldConfigurationSchemeMappingRequest;

  try {
    const data = await api.setFieldConfigurationSchemeMapping(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration scheme. | [Defaults to `undefined`] |
| **associateFieldConfigurationsWithIssueTypesRequest** | [AssociateFieldConfigurationsWithIssueTypesRequest](AssociateFieldConfigurationsWithIssueTypesRequest.md) |  | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration scheme, the field configuration, or the issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldConfiguration

> any updateFieldConfiguration(id, fieldConfigurationDetails)

Update field configuration

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Updates a field configuration. The name and the description provided in the request override the existing values.  This operation can only update configurations used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { UpdateFieldConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration.
    id: 789,
    // FieldConfigurationDetails
    fieldConfigurationDetails: {"description":"A brand new description","name":"My Modified Field Configuration"},
  } satisfies UpdateFieldConfigurationRequest;

  try {
    const data = await api.updateFieldConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration. | [Defaults to `undefined`] |
| **fieldConfigurationDetails** | [FieldConfigurationDetails](FieldConfigurationDetails.md) |  | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldConfigurationItems

> any updateFieldConfigurationItems(id, fieldConfigurationItemsDetails)

Update field configuration items

Deprecated, use [Field schemes](#api-group-field-schemes) which supports field association schemes.  Updates fields in a field configuration. The properties of the field configuration fields provided override the existing values.  This operation can only update field configurations used in company-managed (classic) projects.  The operation can set the renderer for text fields to the default text renderer (&#x60;text-renderer&#x60;) or wiki style renderer (&#x60;wiki-renderer&#x60;). However, the renderer cannot be updated for fields using the autocomplete renderer (&#x60;autocomplete-renderer&#x60;).  Hiding a field deletes it from the field configuration - deleting the required, description and renderer type values as well. As a result, hiding and unhiding will not restore the other values but use their default values.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { UpdateFieldConfigurationItemsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration.
    id: 789,
    // FieldConfigurationItemsDetails
    fieldConfigurationItemsDetails: {"fieldConfigurationItems":[{"description":"The new description of this item.","id":"customfield_10012","isHidden":false},{"id":"customfield_10011","isRequired":true},{"description":"Another new description.","id":"customfield_10010","isHidden":false,"isRequired":false,"renderer":"wiki-renderer"}]},
  } satisfies UpdateFieldConfigurationItemsRequest;

  try {
    const data = await api.updateFieldConfigurationItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration. | [Defaults to `undefined`] |
| **fieldConfigurationItemsDetails** | [FieldConfigurationItemsDetails](FieldConfigurationItemsDetails.md) |  | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFieldConfigurationScheme

> any updateFieldConfigurationScheme(id, updateFieldConfigurationSchemeDetails)

Update field configuration scheme

Updates a field configuration scheme.  This operation can only update field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldConfigurationsApi,
} from 'jira-cloud-api';
import type { UpdateFieldConfigurationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldConfigurationsApi(config);

  const body = {
    // number | The ID of the field configuration scheme.
    id: 789,
    // UpdateFieldConfigurationSchemeDetails | The details of the field configuration scheme.
    updateFieldConfigurationSchemeDetails: {"description":"We can use this one for software projects.","name":"Field Configuration Scheme for software related projects"},
  } satisfies UpdateFieldConfigurationSchemeRequest;

  try {
    const data = await api.updateFieldConfigurationScheme(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `number` | The ID of the field configuration scheme. | [Defaults to `undefined`] |
| **updateFieldConfigurationSchemeDetails** | [UpdateFieldConfigurationSchemeDetails](UpdateFieldConfigurationSchemeDetails.md) | The details of the field configuration scheme. | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permissions. |  -  |
| **404** | Returned if the field configuration scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

