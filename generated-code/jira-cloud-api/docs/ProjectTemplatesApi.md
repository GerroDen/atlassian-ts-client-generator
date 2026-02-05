# ProjectTemplatesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProjectWithCustomTemplate**](ProjectTemplatesApi.md#createprojectwithcustomtemplate) | **POST** /rest/api/3/project-template | Create custom project |
| [**editTemplate**](ProjectTemplatesApi.md#edittemplateoperation) | **PUT** /rest/api/3/project-template/edit-template | Edit a custom project template |
| [**liveTemplate**](ProjectTemplatesApi.md#livetemplate) | **GET** /rest/api/3/project-template/live-template | Gets a custom project template |
| [**removeTemplate**](ProjectTemplatesApi.md#removetemplate) | **DELETE** /rest/api/3/project-template/remove-template | Deletes a custom project template |
| [**saveTemplate**](ProjectTemplatesApi.md#savetemplateoperation) | **POST** /rest/api/3/project-template/save-template | Save a custom project template |



## createProjectWithCustomTemplate

> createProjectWithCustomTemplate(projectCustomTemplateCreateRequestDTO)

Create custom project

Creates a project based on a custom template provided in the request.  The request body should contain the project details and the capabilities that comprise the project:   *  &#x60;details&#x60; \\- represents the project details settings  *  &#x60;template&#x60; \\- represents a list of capabilities responsible for creating specific parts of a project  A capability is defined as a unit of configuration for the project you want to create.  This operation is:   *  [asynchronous](#async). Follow the &#x60;Location&#x60; link in the response header to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  ***Note: This API is only supported for Jira Enterprise edition.***

### Example

```ts
import {
  Configuration,
  ProjectTemplatesApi,
} from 'jira-cloud-api';
import type { CreateProjectWithCustomTemplateRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTemplatesApi(config);

  const body = {
    // ProjectCustomTemplateCreateRequestDTO | The JSON payload containing the project details and capabilities
    projectCustomTemplateCreateRequestDTO: ...,
  } satisfies CreateProjectWithCustomTemplateRequest;

  try {
    const data = await api.createProjectWithCustomTemplate(body);
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
| **projectCustomTemplateCreateRequestDTO** | [ProjectCustomTemplateCreateRequestDTO](ProjectCustomTemplateCreateRequestDTO.md) | The JSON payload containing the project details and capabilities | |

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
| **303** | The project creation task has been queued for execution |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editTemplate

> any editTemplate(editTemplateRequest)

Edit a custom project template

Edit custom template  This API endpoint allows you to edit an existing customised template.  ***Note: Custom Templates are only supported for Jira Enterprise edition.***

### Example

```ts
import {
  Configuration,
  ProjectTemplatesApi,
} from 'jira-cloud-api';
import type { EditTemplateOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTemplatesApi(config);

  const body = {
    // EditTemplateRequest | The object containing the updated template details: name, description
    editTemplateRequest: ...,
  } satisfies EditTemplateOperationRequest;

  try {
    const data = await api.editTemplate(body);
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
| **editTemplateRequest** | [EditTemplateRequest](EditTemplateRequest.md) | The object containing the updated template details: name, description | |

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
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## liveTemplate

> ProjectTemplateModel liveTemplate(projectId, templateKey)

Gets a custom project template

Get custom template  This API endpoint allows you to get a live custom project template details by either templateKey or projectId  ***Note: Custom Templates are only supported for Jira Enterprise edition.***

### Example

```ts
import {
  Configuration,
  ProjectTemplatesApi,
} from 'jira-cloud-api';
import type { LiveTemplateRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTemplatesApi(config);

  const body = {
    // string | optional - The \\{@link String\\} containing the project key linked to the custom template to retrieve (optional)
    projectId: projectId_example,
    // string | optional - The \\{@link String\\} containing the key of the custom template to retrieve (optional)
    templateKey: templateKey_example,
  } satisfies LiveTemplateRequest;

  try {
    const data = await api.liveTemplate(body);
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
| **projectId** | `string` | optional - The \\{@link String\\} containing the project key linked to the custom template to retrieve | [Optional] [Defaults to `undefined`] |
| **templateKey** | `string` | optional - The \\{@link String\\} containing the key of the custom template to retrieve | [Optional] [Defaults to `undefined`] |

### Return type

[**ProjectTemplateModel**](ProjectTemplateModel.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeTemplate

> any removeTemplate(templateKey)

Deletes a custom project template

Remove custom template  This API endpoint allows you to remove a specified customised template  ***Note: Custom Templates are only supported for Jira Enterprise edition.***

### Example

```ts
import {
  Configuration,
  ProjectTemplatesApi,
} from 'jira-cloud-api';
import type { RemoveTemplateRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTemplatesApi(config);

  const body = {
    // string | The \\{@link String\\} containing the key of the custom template to remove
    templateKey: templateKey_example,
  } satisfies RemoveTemplateRequest;

  try {
    const data = await api.removeTemplate(body);
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
| **templateKey** | `string` | The \\{@link String\\} containing the key of the custom template to remove | [Defaults to `undefined`] |

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
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveTemplate

> SaveTemplateResponse saveTemplate(saveTemplateRequest)

Save a custom project template

Save custom template  This API endpoint allows you to save a customised template  ***Note: Custom Templates are only supported for Jira Enterprise edition.***

### Example

```ts
import {
  Configuration,
  ProjectTemplatesApi,
} from 'jira-cloud-api';
import type { SaveTemplateOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTemplatesApi(config);

  const body = {
    // SaveTemplateRequest | The object containing the template basic details: name, description
    saveTemplateRequest: ...,
  } satisfies SaveTemplateOperationRequest;

  try {
    const data = await api.saveTemplate(body);
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
| **saveTemplateRequest** | [SaveTemplateRequest](SaveTemplateRequest.md) | The object containing the template basic details: name, description | |

### Return type

[**SaveTemplateResponse**](SaveTemplateResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

