# ContentLabelsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLabelsToContent**](ContentLabelsApi.md#addlabelstocontentoperation) | **POST** /wiki/rest/api/content/{id}/label | Add labels to content |
| [**removeLabelFromContent**](ContentLabelsApi.md#removelabelfromcontent) | **DELETE** /wiki/rest/api/content/{id}/label/{label} | Remove label from content |
| [**removeLabelFromContentUsingQueryParameter**](ContentLabelsApi.md#removelabelfromcontentusingqueryparameter) | **DELETE** /wiki/rest/api/content/{id}/label | Remove label from content using query parameter |



## addLabelsToContent

> LabelArray addLabelsToContent(id, body)

Add labels to content

Adds labels to a piece of content. Does not modify the existing labels.  Notes:  - Labels can also be added when creating content ([Create content](#api-content-post)). - Labels can be updated when updating content ([Update content](#api-content-id-put)). This will delete the existing labels and replace them with the labels in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentLabelsApi,
} from 'confluence-cloud-api-v1';
import type { AddLabelsToContentOperationRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentLabelsApi(config);

  const body = {
    // string | The ID of the content that will have labels added to it.
    id: id_example,
    // AddLabelsToContentRequest | The labels to add to the content.
    body: ...,
  } satisfies AddLabelsToContentOperationRequest;

  try {
    const data = await api.addLabelsToContent(body);
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
| **id** | `string` | The ID of the content that will have labels added to it. | [Defaults to `undefined`] |
| **body** | [AddLabelsToContentRequest](AddLabelsToContentRequest.md) | The labels to add to the content. | |

### Return type

[**LabelArray**](LabelArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the labels are added to the content. |  -  |
| **400** | Returned if;  - The body contains labels with invalid characters or too many characters. - The body contains too many labels. - The target content would contain too many labels after the operation. - The calling user does not have permission to edit labels. |  -  |
| **403** | Returned if the calling user can view but not edit the content. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLabelFromContent

> removeLabelFromContent(id, label)

Remove label from content

Removes a label from a piece of content. Labels can\&#39;t be deleted from archived content. This is similar to [Remove label from content using query parameter](#api-content-id-label-delete) except that the label name is specified via a path parameter.  Use this method if the label name does not have \&quot;/\&quot; characters, as the path parameter does not accept \&quot;/\&quot; characters for security reasons. Otherwise, use [Remove label from content using query parameter](#api-content-id-label-delete).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentLabelsApi,
} from 'confluence-cloud-api-v1';
import type { RemoveLabelFromContentRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentLabelsApi(config);

  const body = {
    // string | The ID of the content that the label will be removed from.
    id: id_example,
    // string | The name of the label to be removed.
    label: label_example,
  } satisfies RemoveLabelFromContentRequest;

  try {
    const data = await api.removeLabelFromContent(body);
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
| **id** | `string` | The ID of the content that the label will be removed from. | [Defaults to `undefined`] |
| **label** | `string` | The name of the label to be removed. | [Defaults to `undefined`] |

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
| **204** | Returned if the label is removed. The response body will be empty. |  -  |
| **400** | Returned if the label name has a \&quot;/\&quot; character. |  -  |
| **403** | Returned if the calling user can view but not edit the content. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLabelFromContentUsingQueryParameter

> removeLabelFromContentUsingQueryParameter(id, name)

Remove label from content using query parameter

Removes a label from a piece of content. Labels can\&#39;t be deleted from archived content. This is similar to [Remove label from content](#api-content-id-label-label-delete) except that the label name is specified via a query parameter.  Use this method if the label name has \&quot;/\&quot; characters, as [Remove label from content using query parameter](#api-content-id-label-delete) does not accept \&quot;/\&quot; characters for the label name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentLabelsApi,
} from 'confluence-cloud-api-v1';
import type { RemoveLabelFromContentUsingQueryParameterRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentLabelsApi(config);

  const body = {
    // string | The ID of the content that the label will be removed from.
    id: id_example,
    // string | The name of the label to be removed.
    name: name_example,
  } satisfies RemoveLabelFromContentUsingQueryParameterRequest;

  try {
    const data = await api.removeLabelFromContentUsingQueryParameter(body);
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
| **id** | `string` | The ID of the content that the label will be removed from. | [Defaults to `undefined`] |
| **name** | `string` | The name of the label to be removed. | [Defaults to `undefined`] |

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
| **204** | Returned if the label is removed. The response body will be empty. |  -  |
| **403** | Returned if the calling user can view but not edit the content. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

