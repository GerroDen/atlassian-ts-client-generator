# ServicedeskApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCustomers**](ServicedeskApi.md#addcustomers) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Add customers |
| [**attachTemporaryFile**](ServicedeskApi.md#attachtemporaryfile) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/attachTemporaryFile | Attach temporary file |
| [**checkRequestTypePermissions**](ServicedeskApi.md#checkrequesttypepermissions) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/permissions/check | Check request type permissions |
| [**createRequestType**](ServicedeskApi.md#createrequesttype) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype | Create request type |
| [**deleteProperty**](ServicedeskApi.md#deleteproperty) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Delete property |
| [**deleteRequestType**](ServicedeskApi.md#deleterequesttype) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId} | Delete request type |
| [**getArticles**](ServicedeskApi.md#getarticles) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/knowledgebase/article | Get articles |
| [**getCustomers**](ServicedeskApi.md#getcustomers) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Get customers |
| [**getIssuesInQueue**](ServicedeskApi.md#getissuesinqueue) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}/issue | Get issues in queue |
| [**getPropertiesKeys**](ServicedeskApi.md#getpropertieskeys) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property | Get properties keys |
| [**getProperty**](ServicedeskApi.md#getproperty) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Get property |
| [**getQueue**](ServicedeskApi.md#getqueue) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId} | Get queue |
| [**getQueues**](ServicedeskApi.md#getqueues) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue | Get queues |
| [**getRequestTypeById**](ServicedeskApi.md#getrequesttypebyid) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId} | Get request type by id |
| [**getRequestTypeFields**](ServicedeskApi.md#getrequesttypefields) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/field | Get request type fields |
| [**getRequestTypeGroups**](ServicedeskApi.md#getrequesttypegroups) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttypegroup | Get request type groups |
| [**getRequestTypes**](ServicedeskApi.md#getrequesttypes) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype | Get request types |
| [**getServiceDeskById**](ServicedeskApi.md#getservicedeskbyid) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId} | Get service desk by id |
| [**getServiceDesks**](ServicedeskApi.md#getservicedesks) | **GET** /rest/servicedeskapi/servicedesk | Get service desks |
| [**removeCustomers**](ServicedeskApi.md#removecustomers) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Remove customers |
| [**setProperty**](ServicedeskApi.md#setproperty) | **PUT** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Set property |



## addCustomers

> addCustomers(serviceDeskId, serviceDeskCustomerDTO)

Add customers

Adds one or more customers to a service desk. If any of the passed customers are associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.  **[Permissions](#permissions) required**: Service desk administrator

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { AddCustomersRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // ServiceDeskCustomerDTO
    serviceDeskCustomerDTO: {"accountIds":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"],"usernames":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"]},
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
| **serviceDeskId** | `string` | The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **serviceDeskCustomerDTO** | [ServiceDeskCustomerDTO](ServiceDeskCustomerDTO.md) |  | |

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
| **204** | Returned if all the customers were added to the service desk or were already associated with the service desk. |  -  |
| **400** | Returned if any of the customers do not exist. Note that any valid customers are added, but no confirmation is returned. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## attachTemporaryFile

> attachTemporaryFile(serviceDeskId)

Attach temporary file

This method adds one or more temporary attachments to a service desk, which can then be permanently attached to a customer request using [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-post).  **Note**: It is possible for a service desk administrator to turn off the ability to add attachments to a service desk.  This method expects a multipart request. The media-type multipart/form-data is defined in RFC 1867. Most client libraries have classes that make dealing with multipart posts simple. For instance, in Java the Apache HTTP Components library provides [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html).  Because this method accepts multipart/form-data, it has XSRF protection on it. This means you must submit a header of X-Atlassian-Token: no-check with the request or it will be blocked.  The name of the multipart/form-data parameter that contains the attachments must be &#x60;file&#x60;.  For example, to upload a file called &#x60;myfile.txt&#x60; in the Service Desk with ID 10001 use      curl -D- -u customer:customer -X POST -H \&quot;X-ExperimentalApi: opt-in\&quot; -H \&quot;X-Atlassian-Token: no-check\&quot; -F \&quot;file&#x3D;@myfile.txt\&quot; https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/attachTemporaryFile  **[Permissions](#permissions) required**: Permission to add attachments in this Service Desk.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { AttachTemporaryFileRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the Service Desk to which the file will be attached. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
  } satisfies AttachTemporaryFileRequest;

  try {
    const data = await api.attachTemporaryFile(body);
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
| **serviceDeskId** | `string` | The ID of the Service Desk to which the file will be attached. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns if the file(s) were attached. |  -  |
| **400** | Returned if the attachments are not valid, or exceed the maximum configured attachment size. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **413** | Returned if more than 60 files are requested to be uploaded. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkRequestTypePermissions

> RequestTypePermissionCheckResponse checkRequestTypePermissions(serviceDeskId, requestTypePermissionCheckRequestDTO)

Check request type permissions

Returns:   *  a list of request type IDs where the given user has permission to administer.  *  a list of request type IDs where the given user has permission to submit the request.  If no account ID is provided, the operation returns details for the logged in user.  Note that:   *  invalid request type IDs are ignored.  *  a maximum of 50 request types can be checked.  **[Permissions](#permissions) required:**   *  *Administer Jira* or *Project Administrator* to check the permissions for other users.  However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn\&#39;t apply to calls made using AP.request() in a browser.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { CheckRequestTypePermissionsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string
    serviceDeskId: serviceDeskId_example,
    // RequestTypePermissionCheckRequestDTO | Details of the permissions to check.
    requestTypePermissionCheckRequestDTO: ...,
  } satisfies CheckRequestTypePermissionsRequest;

  try {
    const data = await api.checkRequestTypePermissions(body);
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
| **serviceDeskId** | `string` |  | [Defaults to `undefined`] |
| **requestTypePermissionCheckRequestDTO** | [RequestTypePermissionCheckRequestDTO](RequestTypePermissionCheckRequestDTO.md) | Details of the permissions to check. | |

### Return type

[**RequestTypePermissionCheckResponse**](RequestTypePermissionCheckResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  more than 50 request type IDs have been supplied.  *  an invalid account identifier has been provided.  *  no permissions have been supplied. |  -  |
| **401** | Returned if the user does not have the necessary permission. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequestType

> RequestTypeDTO createRequestType(serviceDeskId, requestTypeCreateDTO)

Create request type

This method enables a customer request type to be added to a service desk based on an issue type. Note that not all customer request type fields can be specified in the request and these fields are given the following default values:   *  Request type icon is given the headset icon.  *  Request type groups is left empty, which means this customer request type will not be visible on the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).  *  Request type status mapping is left empty, so the request type has no custom status mapping but inherits the status map from the issue type upon which it is based.  *  Request type field mapping is set to show the required fields as specified by the issue type used to create the customer request type.     These fields can be updated by a service desk administrator using the **Request types** option in **Project settings**.   Request Types are created in next-gen projects by creating Issue Types. Please use the Jira Cloud Platform Create issue type endpoint instead.  **[Permissions](#permissions) required**: Service desk\&#39;s administrator

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { CreateRequestTypeRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk where the customer request type is to be created. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // RequestTypeCreateDTO
    requestTypeCreateDTO: {"description":"Get IT Help","helpText":"Please tell us clearly the problem you have within 100 words.","issueTypeId":"12345","name":"Get IT Help"},
  } satisfies CreateRequestTypeRequest;

  try {
    const data = await api.createRequestType(body);
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
| **serviceDeskId** | `string` | The ID of the service desk where the customer request type is to be created. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeCreateDTO** | [RequestTypeCreateDTO](RequestTypeCreateDTO.md) |  | |

### Return type

[**RequestTypeDTO**](RequestTypeDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request type created. |  -  |
| **400** | Returned if the customer request type name is empty. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or issue type do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProperty

> deleteProperty(serviceDeskId, requestTypeId, propertyKey)

Delete property

Removes a property from a request type.  Properties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be deleted by calling the Jira Cloud Platform [Delete issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-delete) endpoint.  **[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { DeletePropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the request type for which the property will be removed.
    requestTypeId: 56,
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
| **serviceDeskId** | `string` | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeId** | `number` | The ID of the request type for which the property will be removed. | [Defaults to `undefined`] |
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
| **204** | Returned if the request type property was removed. |  -  |
| **400** | Returned if the request type ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to complete this request. |  -  |
| **404** | Returned if the request type or property do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRequestType

> deleteRequestType(serviceDeskId, requestTypeId)

Delete request type

This method deletes a customer request type from a service desk, and removes it from all customer requests.   This only supports classic projects.  **[Permissions](#permissions) required**: Service desk administrator.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { DeleteRequestTypeRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID or [project identifier](#project-identifiers) of the service desk.
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the request type.
    requestTypeId: 56,
  } satisfies DeleteRequestTypeRequest;

  try {
    const data = await api.deleteRequestType(body);
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
| **serviceDeskId** | `string` | The ID or [project identifier](#project-identifiers) of the service desk. | [Defaults to `undefined`] |
| **requestTypeId** | `number` | The ID of the request type. | [Defaults to `undefined`] |

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
| **204** | Returned if the request type is deleted. |  -  |
| **400** | Returned if the request type ID is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have the necessary permission to complete this request. |  -  |
| **404** | Returned if the service desk or request type do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getArticles

> PagedDTOArticleDTO getArticles(serviceDeskId, query, highlight, start, limit, cursor, prev)

Get articles

Returns articles which match the given query and belong to the knowledge base linked to the service desk.  **[Permissions](#permissions) required**: Permission to access the service desk.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetArticlesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string
    serviceDeskId: serviceDeskId_example,
    // string | The string used to filter the articles (required).
    query: query_example,
    // boolean | If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false. (optional)
    highlight: true,
    // number | (Deprecated) The starting index of the returned objects. Base index: 0. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the section for more details. (optional)
    limit: 56,
    // string | Pointer to a set of search results, returned as part of the next or prev URL from the previous search call. (optional)
    cursor: cursor_example,
    // boolean | Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call. (optional)
    prev: true,
  } satisfies GetArticlesRequest;

  try {
    const data = await api.getArticles(body);
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
| **serviceDeskId** | `string` |  | [Defaults to `undefined`] |
| **query** | `string` | The string used to filter the articles (required). | [Defaults to `undefined`] |
| **highlight** | `boolean` | If set to true matching query term in the title and excerpt will be highlighted using the &#x60;@@@hl@@@term@@@endhl@@@&#x60; syntax. Default: false. | [Optional] [Defaults to `false`] |
| **start** | `number` | (Deprecated) The starting index of the returned objects. Base index: 0. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the section for more details. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Pointer to a set of search results, returned as part of the next or prev URL from the previous search call. | [Optional] [Defaults to `undefined`] |
| **prev** | `boolean` | Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call. | [Optional] [Defaults to `false`] |

### Return type

[**PagedDTOArticleDTO**](PagedDTOArticleDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the articles, on the specified page of the results. |  -  |
| **400** | Returned if the request is invalid, for example: missing query parameter. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomers

> PagedDTOUserDTO getCustomers(serviceDeskId, query, start, limit)

Get customers

This method returns a list of the customers on a service desk.  The returned list of customers can be filtered using the &#x60;query&#x60; parameter. The parameter is matched against customers\&#39; &#x60;displayName&#x60;, &#x60;name&#x60;, or &#x60;email&#x60;. For example, searching for \&quot;John\&quot;, \&quot;Jo\&quot;, \&quot;Smi\&quot;, or \&quot;Smith\&quot; will match a user with display name \&quot;John Smith\&quot;.  **[Permissions](#permissions) required**: Permission to view this Service Desk\&#39;s customers.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetCustomersRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // string | The string used to filter the customer list. (optional)
    query: query_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetCustomersRequest;

  try {
    const data = await api.getCustomers(body);
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
| **serviceDeskId** | `string` | The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **query** | `string` | The string used to filter the customer list. | [Optional] [Defaults to `undefined`] |
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
| **200** | Returns the service desk\&#39;s customer list. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesInQueue

> PagedDTOIssueBean getIssuesInQueue(serviceDeskId, queueId, start, limit)

Get issues in queue

This method returns the customer requests in a queue. Only fields that the queue is configured to show are returned. For example, if a queue is configured to show description and due date, then only those two fields are returned for each customer request in the queue.  **[Permissions](#permissions) required**: Service desk\&#39;s agent.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetIssuesInQueueRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk containing the queue to be queried. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the queue whose customer requests will be returned.
    queueId: 789,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetIssuesInQueueRequest;

  try {
    const data = await api.getIssuesInQueue(body);
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
| **serviceDeskId** | `string` | The ID of the service desk containing the queue to be queried. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **queueId** | `number` | The ID of the queue whose customer requests will be returned. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOIssueBean**](PagedDTOIssueBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer requests belonging to the queue, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or the queue do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPropertiesKeys

> PropertyKeys getPropertiesKeys(requestTypeId, serviceDeskId)

Get properties keys

Returns the keys of all properties for a request type.  Properties for a Request Type in next-gen are stored as Issue Type properties and therefore the keys of all properties for a request type are also available by calling the Jira Cloud Platform [Get issue type property keys](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-get) endpoint.  **[Permissions](#permissions) required**: The user must have permission to view the request type.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetPropertiesKeysRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // number | The ID of the request type for which keys will be retrieved.
    requestTypeId: 56,
    // string | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
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
| **requestTypeId** | `number` | The ID of the request type for which keys will be retrieved. | [Defaults to `undefined`] |
| **serviceDeskId** | `string` | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |

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
| **200** | Returned if the request type was found. |  -  |
| **400** | Returned if the request type ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **404** | Returned if the request type does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProperty

> EntityProperty getProperty(serviceDeskId, requestTypeId, propertyKey)

Get property

Returns the value of the property from a request type.  Properties for a Request Type in next-gen are stored as Issue Type properties and therefore also available by calling the Jira Cloud Platform [Get issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-get) endpoint.  **[Permissions](#permissions) required**: User must have permission to view the request type.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetPropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the request type from which the property will be retrieved.
    requestTypeId: 56,
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
| **serviceDeskId** | `string` | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeId** | `number` | The ID of the request type from which the property will be retrieved. | [Defaults to `undefined`] |
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
| **200** | Returned if the request type property was returned. |  -  |
| **400** | Returned if the request type ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **404** | Returned if the request type or property do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQueue

> QueueDTO getQueue(serviceDeskId, queueId, includeCount)

Get queue

This method returns a specific queues in a service desk. To include a customer request count for the queue (in the &#x60;issueCount&#x60; field) in the response, set the query parameter &#x60;includeCount&#x60; to true (its default is false).  **[Permissions](#permissions) required**: service desk\&#39;s Agent.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetQueueRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | ID of the required queue.
    queueId: 789,
    // boolean | Specifies whether to include each queue\'s customer request (issue) count in the response. (optional)
    includeCount: true,
  } satisfies GetQueueRequest;

  try {
    const data = await api.getQueue(body);
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
| **serviceDeskId** | `string` | ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **queueId** | `number` | ID of the required queue. | [Defaults to `undefined`] |
| **includeCount** | `boolean` | Specifies whether to include each queue\&#39;s customer request (issue) count in the response. | [Optional] [Defaults to `false`] |

### Return type

[**QueueDTO**](QueueDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the specific queue of the service desk. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQueues

> PagedDTOQueueDTO getQueues(serviceDeskId, includeCount, start, limit)

Get queues

This method returns the queues in a service desk. To include a customer request count for each queue (in the &#x60;issueCount&#x60; field) in the response, set the query parameter &#x60;includeCount&#x60; to true (its default is false).  **[Permissions](#permissions) required**: service desk\&#39;s Agent.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetQueuesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // boolean | Specifies whether to include each queue\'s customer request (issue) count in the response. (optional)
    includeCount: true,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetQueuesRequest;

  try {
    const data = await api.getQueues(body);
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
| **serviceDeskId** | `string` | ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **includeCount** | `boolean` | Specifies whether to include each queue\&#39;s customer request (issue) count in the response. | [Optional] [Defaults to `false`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOQueueDTO**](PagedDTOQueueDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the queues of the service desk, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestTypeById

> RequestTypeDTO getRequestTypeById(serviceDeskId, requestTypeId, expand)

Get request type by id

This method returns a customer request type from a service desk.  This operation can be accessed anonymously.  **[Permissions](#permissions) required**: Permission to access the service desk.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestTypeByIdRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk whose customer request type is to be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // string | The ID of the customer request type to be returned.
    requestTypeId: requestTypeId_example,
    // Array<string> (optional)
    expand: ...,
  } satisfies GetRequestTypeByIdRequest;

  try {
    const data = await api.getRequestTypeById(body);
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
| **serviceDeskId** | `string` | The ID of the service desk whose customer request type is to be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeId** | `string` | The ID of the customer request type to be returned. | [Defaults to `undefined`] |
| **expand** | `Array<string>` |  | [Optional] |

### Return type

[**RequestTypeDTO**](RequestTypeDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request type item. |  -  |
| **401** | Returned if the user credentials are invalid. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or customer request type do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestTypeFields

> CustomerRequestCreateMetaDTO getRequestTypeFields(serviceDeskId, requestTypeId, expand)

Get request type fields

This method returns the fields for a service desk\&#39;s customer request type.  Also, the following information about the user\&#39;s permissions for the request type is returned:   *  &#x60;canRaiseOnBehalfOf&#x60; returns &#x60;true&#x60; if the user has permission to raise customer requests on behalf of other customers. Otherwise, returns &#x60;false&#x60;.  *  &#x60;canAddRequestParticipants&#x60; returns &#x60;true&#x60; if the user can add customer request participants. Otherwise, returns &#x60;false&#x60;.  **[Permissions](#permissions) required**: Permission to view the Service Desk. However, hidden fields would be visible to only Service desk\&#39;s Administrator.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestTypeFieldsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk containing the request types whose fields are to be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the request types whose fields are to be returned.
    requestTypeId: 56,
    // Array<string> | Use [expand](#expansion) to include additional information in the response. This parameter accepts `hiddenFields` that returns hidden fields associated with the request type. (optional)
    expand: ...,
  } satisfies GetRequestTypeFieldsRequest;

  try {
    const data = await api.getRequestTypeFields(body);
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
| **serviceDeskId** | `string` | The ID of the service desk containing the request types whose fields are to be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeId** | `number` | The ID of the request types whose fields are to be returned. | [Defaults to `undefined`] |
| **expand** | `Array<string>` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;hiddenFields&#x60; that returns hidden fields associated with the request type. | [Optional] |

### Return type

[**CustomerRequestCreateMetaDTO**](CustomerRequestCreateMetaDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the request type\&#39;s fields and user permission details, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk or request type do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestTypeGroups

> PagedDTORequestTypeGroupDTO getRequestTypeGroups(serviceDeskId, start, limit)

Get request type groups

This method returns a service desk\&#39;s customer request type groups. Jira Service Management administrators can arrange the customer request type groups in an arbitrary order for display on the customer portal; the groups are returned in this order.  **[Permissions](#permissions) required**: Permission to view the service desk.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestTypeGroupsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk whose customer request type groups are to be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetRequestTypeGroupsRequest;

  try {
    const data = await api.getRequestTypeGroups(body);
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
| **serviceDeskId** | `string` | The ID of the service desk whose customer request type groups are to be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTORequestTypeGroupDTO**](PagedDTORequestTypeGroupDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the service desk\&#39;s customer request type groups, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestTypes

> PagedDTORequestTypeDTO getRequestTypes(serviceDeskId, groupId, expand, searchQuery, start, limit, includeHiddenRequestTypesInSearch, restrictionStatus)

Get request types

This method returns all customer request types from a service desk. There are two parameters for filtering the returned list:   *  &#x60;groupId&#x60; which filters the results to items in the customer request type group.  *  &#x60;searchQuery&#x60; which is matched against request types\&#39; &#x60;name&#x60; or &#x60;description&#x60;. For example, the strings \&quot;Install\&quot;, \&quot;Inst\&quot;, \&quot;Equi\&quot;, or \&quot;Equipment\&quot; will match a request type with the *name* \&quot;Equipment Installation Request\&quot;.  **Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\&#39;t have permission) when &#x60;searchQuery&#x60; is provided, unless &#x60;includeHiddenRequestTypesInSearch&#x60; is set to true. Restricted request types will not be returned for those who aren\&#39;t admins.  **[Permissions](#permissions) required**: Permission to access the service desk.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestTypesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk whose customer request types are to be returned. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | Filters results to those in a customer request type group. (optional)
    groupId: 56,
    // Array<string> (optional)
    expand: ...,
    // string | The string to be used to filter the results. (optional)
    searchQuery: searchQuery_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
    // boolean | Whether to include hidden request types when searching with `searchQuery`. (optional)
    includeHiddenRequestTypesInSearch: true,
    // string | Request type restriction status (`open` or `restricted`) used to filter the results. (optional)
    restrictionStatus: restrictionStatus_example,
  } satisfies GetRequestTypesRequest;

  try {
    const data = await api.getRequestTypes(body);
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
| **serviceDeskId** | `string` | The ID of the service desk whose customer request types are to be returned. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **groupId** | `number` | Filters results to those in a customer request type group. | [Optional] [Defaults to `undefined`] |
| **expand** | `Array<string>` |  | [Optional] |
| **searchQuery** | `string` | The string to be used to filter the results. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **includeHiddenRequestTypesInSearch** | `boolean` | Whether to include hidden request types when searching with &#x60;searchQuery&#x60;. | [Optional] [Defaults to `false`] |
| **restrictionStatus** | `string` | Request type restriction status (&#x60;open&#x60; or &#x60;restricted&#x60;) used to filter the results. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTORequestTypeDTO**](PagedDTORequestTypeDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested customer request types, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServiceDeskById

> ServiceDeskDTO getServiceDeskById(serviceDeskId)

Get service desk by id

This method returns a service desk. Use this method to get service desk details whenever your application component is passed a service desk ID but needs to display other service desk details.  **[Permissions](#permissions) required**: Permission to access the Service Desk. For example, being the Service Desk\&#39;s Administrator or one of its Agents or Users.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetServiceDeskByIdRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk to return. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
  } satisfies GetServiceDeskByIdRequest;

  try {
    const data = await api.getServiceDeskById(body);
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
| **serviceDeskId** | `string` | The ID of the service desk to return. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |

### Return type

[**ServiceDeskDTO**](ServiceDeskDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested service desk. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServiceDesks

> PagedDTOServiceDeskDTO getServiceDesks(start, limit)

Get service desks

This method returns all the service desks in the Jira Service Management instance that the user has permission to access. Use this method where you need a list of service desks or need to locate a service desk by name or keyword.  **Note:** This method will be slow if the instance has hundreds of service desks. If you want to fetch a single service desk by its ID, use [/rest/servicedeskapi/servicedesk/\\{serviceDeskId\\}](./#api-rest-servicedeskapi-servicedesk-servicedeskid-get) instead.  **[Permissions](#permissions) required**: Any

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { GetServiceDesksRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetServiceDesksRequest;

  try {
    const data = await api.getServiceDesks(body);
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
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOServiceDeskDTO**](PagedDTOServiceDeskDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the service desks, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeCustomers

> removeCustomers(serviceDeskId, serviceDeskCustomerDTO)

Remove customers

This method removes one or more customers from a service desk. The service desk must have closed access. If any of the passed customers are not associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.  **[Permissions](#permissions) required**: Services desk administrator

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { RemoveCustomersRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk the customers should be removed from. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // ServiceDeskCustomerDTO
    serviceDeskCustomerDTO: {"accountIds":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"],"usernames":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"]},
  } satisfies RemoveCustomersRequest;

  try {
    const data = await api.removeCustomers(body);
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
| **serviceDeskId** | `string` | The ID of the service desk the customers should be removed from. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **serviceDeskCustomerDTO** | [ServiceDeskCustomerDTO](ServiceDeskCustomerDTO.md) |  | |

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
| **204** | Returned if the customers were removed from the service desk, or any of the customers were not associated with the service desk. |  -  |
| **400** | Returned if the service desk has public signup or open access enabled. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the service desk does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setProperty

> any setProperty(serviceDeskId, requestTypeId, propertyKey)

Set property

Sets the value of a request type property. Use this resource to store custom data against a request type.  Properties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be set by calling the Jira Cloud Platform [Set issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-put) endpoint.  **[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.

### Example

```ts
import {
  Configuration,
  ServicedeskApi,
} from 'jira-cloud-service-management-api';
import type { SetPropertyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ServicedeskApi(config);

  const body = {
    // string | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)
    serviceDeskId: serviceDeskId_example,
    // number | The ID of the request type on which the property will be set.
    requestTypeId: 56,
    // string | The key of the request type property. The maximum length of the key is 255 bytes.
    propertyKey: propertyKey_example,
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
| **serviceDeskId** | `string` | The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers) | [Defaults to `undefined`] |
| **requestTypeId** | `number` | The ID of the request type on which the property will be set. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the request type property. The maximum length of the key is 255 bytes. | [Defaults to `undefined`] |

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
| **200** | Returned if the request type property is updated. |  -  |
| **201** | Returned if the request type property is created. |  -  |
| **400** | Returned if the request type ID is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to complete this request. |  -  |
| **404** | Returned if the request type does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

