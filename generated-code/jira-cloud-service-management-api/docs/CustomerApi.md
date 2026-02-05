# CustomerApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomer**](CustomerApi.md#createcustomer) | **POST** /rest/servicedeskapi/customer | Create customer |
| [**revokePortalOnlyAccessForUser**](CustomerApi.md#revokeportalonlyaccessforuser) | **PUT** /rest/servicedeskapi/customer/user/{accountId}/revoke-portal-only-access | Revoke portal only access for user |



## createCustomer

> UserDTO createCustomer(customerCreateDTO, strictConflictStatusCode)

Create customer

This method adds a customer to the Jira Service Management instance by passing a JSON file including an email address and display name. The display name does not need to be unique. The record\&#39;s identifiers, &#x60;name&#x60; and &#x60;key&#x60;, are automatically generated from the request details.  **[Permissions](#permissions) required**: Jira Administrator Global permission

### Example

```ts
import {
  Configuration,
  CustomerApi,
} from 'jira-cloud-service-management-api';
import type { CreateCustomerRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerApi(config);

  const body = {
    // CustomerCreateDTO
    customerCreateDTO: {"displayName":"Fred F. User","email":"fred@example.com"},
    // boolean | Optional boolean flag to return 409 Conflict status code for duplicate customer creation request (optional)
    strictConflictStatusCode: true,
  } satisfies CreateCustomerRequest;

  try {
    const data = await api.createCustomer(body);
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
| **customerCreateDTO** | [CustomerCreateDTO](CustomerCreateDTO.md) |  | |
| **strictConflictStatusCode** | `boolean` | Optional boolean flag to return 409 Conflict status code for duplicate customer creation request | [Optional] [Defaults to `undefined`] |

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the customer details. |  -  |
| **400** | Returned if the request is invalid, either because the email address is incorrectly formed or already exists in the database if &#x60;strictConflictStatusCode&#x3D;false&#x60; or if &#x60;strictConflictStatusCode&#x60; parameter is not provided |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **409** | Returned if the request is invalid because the email address already exists in the database and &#x60;strictConflictStatusCode&#x3D;true&#x60; |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePortalOnlyAccessForUser

> any revokePortalOnlyAccessForUser(accountId)

Revoke portal only access for user

This method revokes portal-only access for a particular user, removing their ability to log in to the Jira Service Management customer portal as a portal-only user. After revocation, the user cannot submit or view requests through the portal.  **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  CustomerApi,
} from 'jira-cloud-service-management-api';
import type { RevokePortalOnlyAccessForUserRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomerApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the portal-only account. For example, *qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b*.
    accountId: accountId_example,
  } satisfies RevokePortalOnlyAccessForUserRequest;

  try {
    const data = await api.revokePortalOnlyAccessForUser(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the portal-only account. For example, *qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b*. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the account ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

