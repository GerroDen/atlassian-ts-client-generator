# ContentVersionsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteContentVersion**](ContentVersionsApi.md#deletecontentversion) | **DELETE** /wiki/rest/api/content/{id}/version/{versionNumber} | Delete content version |
| [**restoreContentVersion**](ContentVersionsApi.md#restorecontentversion) | **POST** /wiki/rest/api/content/{id}/version | Restore content version |



## deleteContentVersion

> deleteContentVersion(id, versionNumber)

Delete content version

Delete a historical version. This does not delete the changes made to the content in that version, rather the changes for the deleted version are rolled up into the next version. Note, you cannot delete the current version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentVersionsApi,
} from 'confluence-cloud-api-v1';
import type { DeleteContentVersionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentVersionsApi(config);

  const body = {
    // string | The ID of the content that the version will be deleted from.
    id: id_example,
    // number | The number of the version to be deleted. The version number starts from 1 up to current version.
    versionNumber: 56,
  } satisfies DeleteContentVersionRequest;

  try {
    const data = await api.deleteContentVersion(body);
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
| **id** | `string` | The ID of the content that the version will be deleted from. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The number of the version to be deleted. The version number starts from 1 up to current version. | [Defaults to `undefined`] |

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
| **204** | Returned if the version is deleted. |  -  |
| **400** | Returned if;  - The content or version cannot be found. - The current version is specified. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to edit the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreContentVersion

> Version restoreContentVersion(id, body, expand)

Restore content version

Restores a historical version to be the latest version. That is, a new version is created with the content of the historical version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentVersionsApi,
} from 'confluence-cloud-api-v1';
import type { RestoreContentVersionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentVersionsApi(config);

  const body = {
    // string | The ID of the content for which the history will be restored.
    id: id_example,
    // VersionRestore | The content version to be restored.
    body: ...,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand. By default, the `content` object is expanded.  - `collaborators` returns the users that collaborated on the version. - `content` returns the content for the version. (optional)
    expand: ...,
  } satisfies RestoreContentVersionRequest;

  try {
    const data = await api.restoreContentVersion(body);
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
| **id** | `string` | The ID of the content for which the history will be restored. | [Defaults to `undefined`] |
| **body** | [VersionRestore](VersionRestore.md) | The content version to be restored. | |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand. By default, the &#x60;content&#x60; object is expanded.  - &#x60;collaborators&#x60; returns the users that collaborated on the version. - &#x60;content&#x60; returns the content for the version. | [Optional] |

### Return type

[**Version**](Version.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the version is restored. |  -  |
| **400** | Returned if;  - There is no content with the given ID. - There is no version with the given version number. - The version number is the current version. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to edit the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

