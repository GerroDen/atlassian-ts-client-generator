# ProjectEmailApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getProjectEmail**](ProjectEmailApi.md#getprojectemail) | **GET** /rest/api/3/project/{projectId}/email | Get project\&#39;s sender email |
| [**updateProjectEmail**](ProjectEmailApi.md#updateprojectemail) | **PUT** /rest/api/3/project/{projectId}/email | Set project\&#39;s sender email |



## getProjectEmail

> ProjectEmailAddress getProjectEmail(projectId)

Get project\&#39;s sender email

Returns the [project\&#39;s sender email address](https://confluence.atlassian.com/x/dolKLg).  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectEmailApi,
} from 'jira-cloud-api';
import type { GetProjectEmailRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectEmailApi(config);

  const body = {
    // number | The project ID.
    projectId: 789,
  } satisfies GetProjectEmailRequest;

  try {
    const data = await api.getProjectEmail(body);
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
| **projectId** | `number` | The project ID. | [Defaults to `undefined`] |

### Return type

[**ProjectEmailAddress**](ProjectEmailAddress.md)

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
| **403** | Returned if the user does not have permission to read project. |  -  |
| **404** | Returned if the project or project\&#39;s sender email address is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProjectEmail

> any updateProjectEmail(projectId, projectEmailAddress)

Set project\&#39;s sender email

Sets the [project\&#39;s sender email address](https://confluence.atlassian.com/x/dolKLg).  If &#x60;emailAddress&#x60; is an empty string, the default email address is restored.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  ProjectEmailApi,
} from 'jira-cloud-api';
import type { UpdateProjectEmailRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectEmailApi(config);

  const body = {
    // number | The project ID.
    projectId: 789,
    // ProjectEmailAddress | The project\'s sender email address to be set.
    projectEmailAddress: {"emailAddress":"jira@example.atlassian.net"},
  } satisfies UpdateProjectEmailRequest;

  try {
    const data = await api.updateProjectEmail(body);
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
| **projectId** | `number` | The project ID. | [Defaults to `undefined`] |
| **projectEmailAddress** | [ProjectEmailAddress](ProjectEmailAddress.md) | The project\&#39;s sender email address to be set. | |

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
| **204** | Returned if the project\&#39;s sender email address is successfully set. |  -  |
| **400** | Returned if the request is not valid, if the email address is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to administer the project. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

