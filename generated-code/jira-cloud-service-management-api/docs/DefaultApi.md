# DefaultApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCustomers**](DefaultApi.md#addcustomers) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer/skip-permission-check | Add customers |
| [**createCustomer**](DefaultApi.md#createcustomer) | **POST** /rest/servicedeskapi/customer/skip-permission-check | Create customer |
| [**viewArticle**](DefaultApi.md#viewarticle) | **GET** /rest/servicedeskapi/knowledgebase/article/view/{pageId} | View knowledge base article |



## addCustomers

> any addCustomers(serviceDeskId, serviceDeskCustomerDTO)

Add customers

Adds one or more customers to a service desk on behalf of jsd-nutmeg.  This endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \\{@code POST /servicedeskapi/servicedesk/\\{serviceDeskId\\}/customer\\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\\\u2014 authorization is enforced entirely via the ASAP token.  No user permission checks are performed; \\{@code null\\} is passed as the acting user to bypass the permission check in the underlying service.  If any of the passed customers are already associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'jira-cloud-service-management-api';
import type { AddCustomersRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string | The ID of the service desk to add customers to. This can alternatively be a project identifier.
    serviceDeskId: serviceDeskId_example,
    // ServiceDeskCustomerDTO | JSON body containing the account IDs of customers to add.
    serviceDeskCustomerDTO: ...,
  } satisfies AddCustomersRequest;

  try {
    const data = await api.addCustomers(body);
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
| **serviceDeskId** | `string` | The ID of the service desk to add customers to. This can alternatively be a project identifier. | [Defaults to `undefined`] |
| **serviceDeskCustomerDTO** | [ServiceDeskCustomerDTO](ServiceDeskCustomerDTO.md) | JSON body containing the account IDs of customers to add. | |

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
| **204** | The request completed successfully. No additional content will be sent in the response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomer

> UserDTO createCustomer(customerCreateDTO, strictConflictStatusCode)

Create customer

Creates a customer account on behalf of jsd-nutmeg.  This endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \\{@code POST /servicedeskapi/customer\\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\\\u2014 authorization is enforced entirely via the ASAP token.  No user permission checks are performed; \\{@code null\\} is passed as the acting user to bypass the permission check in the underlying service.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'jira-cloud-service-management-api';
import type { CreateCustomerRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const api = new DefaultApi();

  const body = {
    // CustomerCreateDTO | JSON body containing the email address and display name of the customer to create.
    customerCreateDTO: ...,
    // boolean | Optional boolean flag; when \\{@code true\\}, returns 409 Conflict for duplicate email instead of the default 400. (optional)
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
| **customerCreateDTO** | [CustomerCreateDTO](CustomerCreateDTO.md) | JSON body containing the email address and display name of the customer to create. | |
| **strictConflictStatusCode** | `boolean` | Optional boolean flag; when \\{@code true\\}, returns 409 Conflict for duplicate email instead of the default 400. | [Optional] [Defaults to `undefined`] |

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 201 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## viewArticle

> string viewArticle(pageId)

View knowledge base article



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'jira-cloud-service-management-api';
import type { ViewArticleRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // number
    pageId: 789,
  } satisfies ViewArticleRequest;

  try {
    const data = await api.viewArticle(body);
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
| **pageId** | `number` |  | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

