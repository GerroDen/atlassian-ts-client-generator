# OrganizationApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addOrganization**](OrganizationApi.md#addorganization) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Add organization |
| [**addUsersToOrganization**](OrganizationApi.md#adduserstoorganization) | **POST** /rest/servicedeskapi/organization/{organizationId}/user | Add users to organization |
| [**createOrganization**](OrganizationApi.md#createorganization) | **POST** /rest/servicedeskapi/organization | Create organization |
| [**deleteOrganization**](OrganizationApi.md#deleteorganization) | **DELETE** /rest/servicedeskapi/organization/{organizationId} | Delete organization |
| [**deleteProperty**](OrganizationApi.md#deleteproperty) | **DELETE** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Delete property |
| [**getOrganization**](OrganizationApi.md#getorganization) | **GET** /rest/servicedeskapi/organization/{organizationId} | Get organization |
| [**getOrganizations**](OrganizationApi.md#getorganizations) | **GET** /rest/servicedeskapi/organization | Get organizations |
| [**getOrganizations_0**](OrganizationApi.md#getorganizations_0) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Get organizations |
| [**getPropertiesKeys**](OrganizationApi.md#getpropertieskeys) | **GET** /rest/servicedeskapi/organization/{organizationId}/property | Get properties keys |
| [**getProperty**](OrganizationApi.md#getproperty) | **GET** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Get property |
| [**getUsersInOrganization**](OrganizationApi.md#getusersinorganization) | **GET** /rest/servicedeskapi/organization/{organizationId}/user | Get users in organization |
| [**removeOrganization**](OrganizationApi.md#removeorganization) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Remove organization |
| [**removeUsersFromOrganization**](OrganizationApi.md#removeusersfromorganization) | **DELETE** /rest/servicedeskapi/organization/{organizationId}/user | Remove users from organization |
| [**setProperty**](OrganizationApi.md#setproperty) | **PUT** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Set property |



## addOrganization

> addOrganization(serviceDeskId, organizationServiceDeskUpdateDTO)

Add organization

This method adds an organization to a service desk. If the organization ID is already associated with the service desk, no change is made and the resource returns a 204 success code.  **[Permissions](#permissions) required**: Service desk\&#39;s agent.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { AddOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the service desk to which the organization will be added. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // OrganizationServiceDeskUpdateDTO
    organizationServiceDeskUpdateDTO: {"organizationId":1},
  } satisfies AddOrganizationRequest;

  try {
    const data = await api.addOrganization(body);
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
| **serviceDeskId** | `string` | The ID of the service desk to which the organization will be added. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **organizationServiceDeskUpdateDTO** | [OrganizationServiceDeskUpdateDTO](OrganizationServiceDeskUpdateDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the organization was added or the organization was already associated with the service desk. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or organization do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUsersToOrganization

> addUsersToOrganization(organizationId, usersOrganizationUpdateDTO)

Add users to organization

This method adds users to an organization.  **[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to add users to an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { AddUsersToOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The ID of the organization.
    organizationId: 56,
    // UsersOrganizationUpdateDTO
    usersOrganizationUpdateDTO: {"accountIds":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"],"usernames":[]},
  } satisfies AddUsersToOrganizationRequest;

  try {
    const data = await api.addUsersToOrganization(body);
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
| **organizationId** | `number` | The ID of the organization. | [Defaults to `undefined`] |
| **usersOrganizationUpdateDTO** | [UsersOrganizationUpdateDTO](UsersOrganizationUpdateDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if all the users were valid and added to the organization, no response payload is provided. |  -  |
| **400** | Returned if one or more usernames are unknown. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrganization

> OrganizationDTO createOrganization(organizationCreateDTO)

Create organization

This method creates an organization by passing the name of the organization.  **[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to create organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { CreateOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // OrganizationCreateDTO
    organizationCreateDTO: {"name":"Charlie Cakes Franchises"},
  } satisfies CreateOrganizationRequest;

  try {
    const data = await api.createOrganization(body);
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
| **organizationCreateDTO** | [OrganizationCreateDTO](OrganizationCreateDTO.md) |  | |

### Return type

[**OrganizationDTO**](OrganizationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the created organization or the existing organization if name already exists. |  -  |
| **400** | Returned if the HTTP request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteOrganization

> deleteOrganization(organizationId)

Delete organization

This method deletes an organization. Note that the organization is deleted regardless of other associations it may have. For example, associations with service desks.  **[Permissions](#permissions) required**: Jira administrator.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { DeleteOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The ID of the organization.
    organizationId: 56,
  } satisfies DeleteOrganizationRequest;

  try {
    const data = await api.deleteOrganization(body);
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
| **organizationId** | `number` | The ID of the organization. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the organization was deleted. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProperty

> deleteProperty(organizationId, propertyKey)

Delete property

Removes an organization property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).  For operations relating to organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).  **[Permissions](#permissions) required**: Service Desk Administrator or Agent.  Note: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { DeletePropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the organization from which the property will be removed.
    organizationId: organizationId_example,
    // string | The key of the property to remove.
    propertyKey: propertyKey_example,
  } satisfies DeletePropertyRequest;

  try {
    const data = await api.deleteProperty(body);
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
| **organizationId** | `string` | The ID of the organization from which the property will be removed. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property to remove. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the organization property was removed. |  -  |
| **400** | Returned if the organization ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization or property do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganization

> OrganizationDTO getOrganization(organizationId)

Get organization

This method returns details of an organization. Use this method to get organization details whenever your application component is passed an organization ID but needs to display other organization details.  To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).  **[Permissions](#permissions) required**: Any  **Response limitations**: Customers can only retrieve organization of which they are members.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The ID of the organization.
    organizationId: 56,
  } satisfies GetOrganizationRequest;

  try {
    const data = await api.getOrganization(body);
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
| **organizationId** | `number` | The ID of the organization. | [Defaults to `undefined`] |

### Return type

[**OrganizationDTO**](OrganizationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested organization. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizations

> PagedDTOOrganizationDTO getOrganizations(start, limit, accountId)

Get organizations

This method returns a list of organizations in the Jira Service Management instance. Use this method when you want to present a list of organizations or want to locate an organization by name.  **[Permissions](#permissions) required**: Any. However, to fetch organizations based on &#x60;accountId&#x60; the user must have a Service Desk agent license.  **Response limitations**: If the user is a customer, only those organizations of which the customer is a member are listed.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetOrganizationsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of organizations to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: accountId_example,
  } satisfies GetOrganizationsRequest;

  try {
    const data = await api.getOrganizations(body);
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
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of organizations to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOOrganizationDTO**](PagedDTOOrganizationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns paginated list of organizations. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the user is not found. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizations_0

> PagedDTOOrganizationDTO getOrganizations_0(serviceDeskId, start, limit, accountId)

Get organizations

This method returns a list of all organizations associated with a service desk.  **[Permissions](#permissions) required**: Service desk\&#39;s agent.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetOrganizations0Request } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the service desk from which the organization list will be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: accountId_example,
  } satisfies GetOrganizations0Request;

  try {
    const data = await api.getOrganizations_0(body);
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
| **serviceDeskId** | `string` | The ID of the service desk from which the organization list will be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOOrganizationDTO**](PagedDTOOrganizationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested organizations list. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if user does not have the necessary permission. |  -  |
| **404** | Returned if the service desk does not exist or the user is not found. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPropertiesKeys

> PropertyKeys getPropertiesKeys(organizationId)

Get properties keys

Returns the keys of all organization properties. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).  To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).  **[Permissions](#permissions) required**: Any  **Response limitations**: Customers can only access properties of organizations of which they are members.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetPropertiesKeysRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the organization from which keys will be returned.
    organizationId: organizationId_example,
  } satisfies GetPropertiesKeysRequest;

  try {
    const data = await api.getPropertiesKeys(body);
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
| **organizationId** | `string` | The ID of the organization from which keys will be returned. | [Defaults to `undefined`] |

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the organization was found. |  -  |
| **400** | Returned if the organization ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProperty

> EntityProperty getProperty(organizationId, propertyKey)

Get property

Returns the value of an organization property. Use this method to obtain the JSON content for an organization\&#39;s property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).  To get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).  **[Permissions](#permissions) required**: Any  **Response limitations**: Customers can only access properties of organizations of which they are members.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetPropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the organization from which the property will be returned.
    organizationId: organizationId_example,
    // string | The key of the property to return.
    propertyKey: propertyKey_example,
  } satisfies GetPropertyRequest;

  try {
    const data = await api.getProperty(body);
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
| **organizationId** | `string` | The ID of the organization from which the property will be returned. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property to return. | [Defaults to `undefined`] |

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the organization\&#39;s property. |  -  |
| **400** | Returned if the organization ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization or property do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersInOrganization

> PagedDTOUserDTO getUsersInOrganization(organizationId, start, limit)

Get users in organization

This method returns all the users associated with an organization. Use this method where you want to provide a list of users for an organization or determine if a user is associated with an organization.  **[Permissions](#permissions) required**: Service desk administrator or agent.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { GetUsersInOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The ID of the organization.
    organizationId: 56,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetUsersInOrganizationRequest;

  try {
    const data = await api.getUsersInOrganization(body);
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
| **organizationId** | `number` | The ID of the organization. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOUserDTO**](PagedDTOUserDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a paged list of users associated with the organization, ordered by their accountId. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeOrganization

> removeOrganization(serviceDeskId, organizationServiceDeskUpdateDTO)

Remove organization

This method removes an organization from a service desk. If the organization ID does not match an organization associated with the service desk, no change is made and the resource returns a 204 success code.  **[Permissions](#permissions) required**: Service desk\&#39;s agent.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { RemoveOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the service desk from which the organization will be removed. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // OrganizationServiceDeskUpdateDTO
    organizationServiceDeskUpdateDTO: {"organizationId":1},
  } satisfies RemoveOrganizationRequest;

  try {
    const data = await api.removeOrganization(body);
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
| **serviceDeskId** | `string` | The ID of the service desk from which the organization will be removed. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **organizationServiceDeskUpdateDTO** | [OrganizationServiceDeskUpdateDTO](OrganizationServiceDeskUpdateDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the organization was removed from the service desk or no such organization was associated with the service desk. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or organization do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUsersFromOrganization

> removeUsersFromOrganization(organizationId, usersOrganizationUpdateDTO)

Remove users from organization

This method removes users from an organization.  **[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to delete users from an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { RemoveUsersFromOrganizationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // number | The ID of the organization.
    organizationId: 56,
    // UsersOrganizationUpdateDTO
    usersOrganizationUpdateDTO: {"accountIds":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"],"usernames":[]},
  } satisfies RemoveUsersFromOrganizationRequest;

  try {
    const data = await api.removeUsersFromOrganization(body);
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
| **organizationId** | `number` | The ID of the organization. | [Defaults to `undefined`] |
| **usersOrganizationUpdateDTO** | [UsersOrganizationUpdateDTO](UsersOrganizationUpdateDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |
| **400** | Returned if one or more user names are invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setProperty

> any setProperty(organizationId, propertyKey, body)

Set property

Sets the value of an organization property. Use this resource to store custom data against an organization. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).  To store organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).  **[Permissions](#permissions) required**: Service Desk Administrator or Agent.  Note: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.

### Example

```ts
import {
  Configuration,
  OrganizationApi,
} from 'jira-cloud-service-management-api';
import type { SetPropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OrganizationApi(config);

  const body = {
    // string | The ID of the organization on which the property will be set.
    organizationId: organizationId_example,
    // string | The key of the organization\'s property. The maximum length of the key is 255 bytes.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: {"mail":"charlie@example.com","phone":"0800-1233456789"},
  } satisfies SetPropertyRequest;

  try {
    const data = await api.setProperty(body);
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
| **organizationId** | `string` | The ID of the organization on which the property will be set. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the organization\&#39;s property. The maximum length of the key is 255 bytes. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the organization property was updated. |  -  |
| **201** | Returned if the organization property was created. |  -  |
| **400** | Returned if the organization ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the organization does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

