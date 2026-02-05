# DatabaseApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDatabase**](DatabaseApi.md#createdatabaseoperation) | **POST** /databases | Create database |
| [**deleteDatabase**](DatabaseApi.md#deletedatabase) | **DELETE** /databases/{id} | Delete database |
| [**getDatabaseById**](DatabaseApi.md#getdatabasebyid) | **GET** /databases/{id} | Get database by id |



## createDatabase

> CreateDatabase200Response createDatabase(createDatabaseRequest, _private)

Create database

Creates a database in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a database in the space.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'confluence-cloud-api-v2';
import type { CreateDatabaseOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DatabaseApi(config);

  const body = {
    // CreateDatabaseRequest
    createDatabaseRequest: ...,
    // boolean | The database will be private. Only the user who creates this database will have permission to view and edit one. (optional)
    _private: true,
  } satisfies CreateDatabaseOperationRequest;

  try {
    const data = await api.createDatabase(body);
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
| **createDatabaseRequest** | [CreateDatabaseRequest](CreateDatabaseRequest.md) |  | |
| **_private** | `boolean` | The database will be private. Only the user who creates this database will have permission to view and edit one. | [Optional] [Defaults to `false`] |

### Return type

[**CreateDatabase200Response**](CreateDatabase200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the database was successfully created. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a database in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDatabase

> deleteDatabase(id)

Delete database

Delete a database by id.  Deleting a database moves the database to the trash, where it can be restored later  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database and its corresponding space. Permission to delete databases in the space.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'confluence-cloud-api-v2';
import type { DeleteDatabaseRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DatabaseApi(config);

  const body = {
    // number | The ID of the database to be deleted.
    id: 789,
  } satisfies DeleteDatabaseRequest;

  try {
    const data = await api.deleteDatabase(body);
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
| **id** | `number` | The ID of the database to be deleted. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the database was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided database does not exist - The user does not have permissions to view the database - The user does not have the needed permissions to delete a database in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseById

> CreateDatabase200Response getDatabaseById(id, includeCollaborators, includeDirectChildren, includeOperations, includeProperties)

Get database by id

Returns a specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database and its corresponding space.

### Example

```ts
import {
  Configuration,
  DatabaseApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DatabaseApi(config);

  const body = {
    // number | The ID of the database to be returned
    id: 789,
    // boolean | Includes collaborators on the database. (optional)
    includeCollaborators: true,
    // boolean | Includes direct children of the database, as defined in the `ChildrenResponse` object. (optional)
    includeDirectChildren: true,
    // boolean | Includes operations associated with this database in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes content properties associated with this database in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
  } satisfies GetDatabaseByIdRequest;

  try {
    const data = await api.getDatabaseById(body);
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
| **id** | `number` | The ID of the database to be returned | [Defaults to `undefined`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the database. | [Optional] [Defaults to `false`] |
| **includeDirectChildren** | `boolean` | Includes direct children of the database, as defined in the &#x60;ChildrenResponse&#x60; object. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this database in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this database in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |

### Return type

[**CreateDatabase200Response**](CreateDatabase200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested database is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

