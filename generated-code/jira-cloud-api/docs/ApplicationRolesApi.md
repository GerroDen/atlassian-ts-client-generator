# ApplicationRolesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllApplicationRoles**](ApplicationRolesApi.md#getallapplicationroles) | **GET** /rest/api/3/applicationrole | Get all application roles |
| [**getApplicationRole**](ApplicationRolesApi.md#getapplicationrole) | **GET** /rest/api/3/applicationrole/{key} | Get application role |



## getAllApplicationRoles

> Array&lt;ApplicationRole&gt; getAllApplicationRoles()

Get all application roles

Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ApplicationRolesApi,
} from 'jira-cloud-api';
import type { GetAllApplicationRolesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ApplicationRolesApi(config);

  try {
    const data = await api.getAllApplicationRoles();
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

[**Array&lt;ApplicationRole&gt;**](ApplicationRole.md)

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
| **403** | Returned if the user is not an administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationRole

> ApplicationRole getApplicationRole(key)

Get application role

Returns an application role.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ApplicationRolesApi,
} from 'jira-cloud-api';
import type { GetApplicationRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ApplicationRolesApi(config);

  const body = {
    // string | The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.
    key: jira-software,
  } satisfies GetApplicationRoleRequest;

  try {
    const data = await api.getApplicationRole(body);
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
| **key** | `string` | The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role. | [Defaults to `undefined`] |

### Return type

[**ApplicationRole**](ApplicationRole.md)

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
| **403** | Returned if the user is not an administrator. |  -  |
| **404** | Returned if the role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

