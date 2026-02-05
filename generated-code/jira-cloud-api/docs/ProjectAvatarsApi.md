# ProjectAvatarsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProjectAvatar**](ProjectAvatarsApi.md#createprojectavatar) | **POST** /rest/api/3/project/{projectIdOrKey}/avatar2 | Load project avatar |
| [**deleteProjectAvatar**](ProjectAvatarsApi.md#deleteprojectavatar) | **DELETE** /rest/api/3/project/{projectIdOrKey}/avatar/{id} | Delete project avatar |
| [**getAllProjectAvatars**](ProjectAvatarsApi.md#getallprojectavatars) | **GET** /rest/api/3/project/{projectIdOrKey}/avatars | Get all project avatars |
| [**updateProjectAvatar**](ProjectAvatarsApi.md#updateprojectavatar) | **PUT** /rest/api/3/project/{projectIdOrKey}/avatar | Set project avatar |



## createProjectAvatar

> Avatar createProjectAvatar(projectIdOrKey, body, x, y, size)

Load project avatar

Loads an avatar for a project.  Specify the avatar\&#39;s local file location in the body of the request. Also, include the following headers:   *  &#x60;X-Atlassian-Token: no-check&#x60; To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers).  *  &#x60;Content-Type: image/image type&#x60; Valid image types are JPEG, GIF, or PNG.  For example:   &#x60;curl --request POST &#x60;  &#x60;--user email@example.com:&lt;api_token&gt; &#x60;  &#x60;--header \&#39;X-Atlassian-Token: no-check\&#39; &#x60;  &#x60;--header \&#39;Content-Type: image/&lt; image_type&gt;\&#39; &#x60;  &#x60;--data-binary \&quot;&lt;@/path/to/file/with/your/avatar&gt;\&quot; &#x60;  &#x60;--url \&#39;https://your-domain.atlassian.net/rest/api/3/project/{projectIdOrKey}/avatar2\&#39;&#x60;  The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square\&#39;s sides is set to the smaller of the height or width of the image.  The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size.  After creating the avatar use [Set project avatar](#api-rest-api-3-project-projectIdOrKey-avatar-put) to set it as the project\&#39;s displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).

### Example

```ts
import {
  Configuration,
  ProjectAvatarsApi,
} from 'jira-cloud-api';
import type { CreateProjectAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectAvatarsApi(config);

  const body = {
    // string | The ID or (case-sensitive) key of the project.
    projectIdOrKey: projectIdOrKey_example,
    // any
    body: ...,
    // number | The X coordinate of the top-left corner of the crop region. (optional)
    x: 56,
    // number | The Y coordinate of the top-left corner of the crop region. (optional)
    y: 56,
    // number | The length of each side of the crop region. (optional)
    size: 56,
  } satisfies CreateProjectAvatarRequest;

  try {
    const data = await api.createProjectAvatar(body);
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
| **projectIdOrKey** | `string` | The ID or (case-sensitive) key of the project. | [Defaults to `undefined`] |
| **body** | `any` |  | |
| **x** | `number` | The X coordinate of the top-left corner of the crop region. | [Optional] [Defaults to `0`] |
| **y** | `number` | The Y coordinate of the top-left corner of the crop region. | [Optional] [Defaults to `0`] |
| **size** | `number` | The length of each side of the crop region. | [Optional] [Defaults to `0`] |

### Return type

[**Avatar**](Avatar.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  an image isn\&#39;t included in the request.  *  the image type is unsupported.  *  the crop parameters extend the crop area beyond the edge of the image. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to administer the project or an anonymous call is made to the operation. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectAvatar

> deleteProjectAvatar(projectIdOrKey, id)

Delete project avatar

Deletes a custom avatar from a project. Note that system avatars cannot be deleted.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).

### Example

```ts
import {
  Configuration,
  ProjectAvatarsApi,
} from 'jira-cloud-api';
import type { DeleteProjectAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectAvatarsApi(config);

  const body = {
    // string | The project ID or (case-sensitive) key.
    projectIdOrKey: projectIdOrKey_example,
    // number | The ID of the avatar.
    id: 789,
  } satisfies DeleteProjectAvatarRequest;

  try {
    const data = await api.deleteProjectAvatar(body);
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
| **projectIdOrKey** | `string` | The project ID or (case-sensitive) key. | [Defaults to `undefined`] |
| **id** | `number` | The ID of the avatar. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the avatar is a system avatar or the user does not have permission to administer the project. |  -  |
| **404** | Returned if the project or avatar is not found or the user does not have permission to view the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllProjectAvatars

> ProjectAvatars getAllProjectAvatars(projectIdOrKey)

Get all project avatars

Returns all project avatars, grouped by system and custom avatars.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectAvatarsApi,
} from 'jira-cloud-api';
import type { GetAllProjectAvatarsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectAvatarsApi(config);

  const body = {
    // string | The ID or (case-sensitive) key of the project.
    projectIdOrKey: projectIdOrKey_example,
  } satisfies GetAllProjectAvatarsRequest;

  try {
    const data = await api.getAllProjectAvatars(body);
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
| **projectIdOrKey** | `string` | The ID or (case-sensitive) key of the project. | [Defaults to `undefined`] |

### Return type

[**ProjectAvatars**](ProjectAvatars.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProjectAvatar

> any updateProjectAvatar(projectIdOrKey, avatar)

Set project avatar

Sets the avatar displayed for a project.  Use [Load project avatar](#api-rest-api-3-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).

### Example

```ts
import {
  Configuration,
  ProjectAvatarsApi,
} from 'jira-cloud-api';
import type { UpdateProjectAvatarRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectAvatarsApi(config);

  const body = {
    // string | The ID or (case-sensitive) key of the project.
    projectIdOrKey: projectIdOrKey_example,
    // Avatar
    avatar: {"id":"10010"},
  } satisfies UpdateProjectAvatarRequest;

  try {
    const data = await api.updateProjectAvatar(body);
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
| **projectIdOrKey** | `string` | The ID or (case-sensitive) key of the project. | [Defaults to `undefined`] |
| **avatar** | [Avatar](Avatar.md) |  | |

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to administer the project. |  -  |
| **404** | Returned if the project or avatar is not found or the user does not have permission to view the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

