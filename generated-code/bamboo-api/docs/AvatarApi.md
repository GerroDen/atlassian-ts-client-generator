# AvatarApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAvatar**](AvatarApi.md#deleteavatar) | **DELETE** /api/latest/avatar/user/avatar.png |  |
| [**retrieveAvatar**](AvatarApi.md#retrieveavatar) | **GET** /api/latest/avatar/user/{userName}/avatar.png |  |
| [**uploadAvatar**](AvatarApi.md#uploadavatar) | **PUT** /api/latest/avatar/user/avatar.png |  |



## deleteAvatar

> deleteAvatar()



Deletes the current avatar for the currently authenticated user.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from 'bamboo-api';
import type { DeleteAvatarRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new AvatarApi();

  try {
    const data = await api.deleteAvatar();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The avatar get deleted successfully |  -  |
| **403** | The user is not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retrieveAvatar

> retrieveAvatar(userName, s)



Returns either the avatar file for a specified user or the gravatar URL. The priority order: custom user avatar as a file, gravatar URL, default avatar as a file. The endpoint supports Last-Modified/If-Modified-Since headers and sets cache policy with expiration equal by default to 90 seconds.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from 'bamboo-api';
import type { RetrieveAvatarRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new AvatarApi();

  const body = {
    // string | Name of the user to search the avatar for
    userName: userName_example,
    // number | Size of the requested avatar in px (optional)
    s: 56,
  } satisfies RetrieveAvatarRequest;

  try {
    const data = await api.retrieveAvatar(body);
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
| **userName** | `string` | Name of the user to search the avatar for | [Defaults to `undefined`] |
| **s** | `number` | Size of the requested avatar in px | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Either the avatar file or gravatar URL |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadAvatar

> uploadAvatar(contentType, formField, inputStream, name, size, value)



Updated the avatar for the currently authenticated user.

### Example

```ts
import {
  Configuration,
  AvatarApi,
} from 'bamboo-api';
import type { UploadAvatarRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new AvatarApi();

  const body = {
    // string (optional)
    contentType: contentType_example,
    // boolean (optional)
    formField: true,
    // object (optional)
    inputStream: Object,
    // string (optional)
    name: name_example,
    // number (optional)
    size: 789,
    // string (optional)
    value: value_example,
  } satisfies UploadAvatarRequest;

  try {
    const data = await api.uploadAvatar(body);
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
| **contentType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **formField** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **inputStream** | `object` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **size** | `number` |  | [Optional] [Defaults to `undefined`] |
| **value** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The avatar got updated successfully |  -  |
| **400** | The avatar cannot be uploaded. |  -  |
| **403** | The user is not authenticated |  -  |
| **500** | An avatar validation error occurred after the upload. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

