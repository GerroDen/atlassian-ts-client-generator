# ContentAttachmentsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAttachment**](ContentAttachmentsApi.md#createattachment) | **POST** /wiki/rest/api/content/{id}/child/attachment | Create attachment |
| [**createOrUpdateAttachments**](ContentAttachmentsApi.md#createorupdateattachments) | **PUT** /wiki/rest/api/content/{id}/child/attachment | Create or update attachment |
| [**downloadAttatchment**](ContentAttachmentsApi.md#downloadattatchment) | **GET** /wiki/rest/api/content/{id}/child/attachment/{attachmentId}/download | Get URI to download attachment |
| [**updateAttachmentData**](ContentAttachmentsApi.md#updateattachmentdata) | **POST** /wiki/rest/api/content/{id}/child/attachment/{attachmentId}/data | Update attachment data |
| [**updateAttachmentProperties**](ContentAttachmentsApi.md#updateattachmentproperties) | **PUT** /wiki/rest/api/content/{id}/child/attachment/{attachmentId} | Update attachment properties |



## createAttachment

> ContentArray createAttachment(id, file, minorEdit, status, comment)

Create attachment

Adds an attachment to a piece of content. This method only adds a new attachment. If you want to update an existing attachment, use [Create or update attachments](#api-content-id-child-attachment-put).  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type \&#39;multipart/form-data\&#39; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/) Java class provided by Apache HTTP Components.  Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5), in the case where the form data is text, the charset parameter for the \&quot;text/plain\&quot; Content-Type may be used to indicate the character encoding used in that part. In the case of this API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60; and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.  Example: This curl command attaches a file (\&#39;example.txt\&#39;) to a container (id&#x3D;\&#39;123\&#39;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X POST \\   -H \&#39;X-Atlassian-Token: nocheck\&#39; \\   -F \&#39;file&#x3D;@\&quot;example.txt\&quot;\&#39; \\   -F \&#39;minorEdit&#x3D;\&quot;true\&quot;\&#39; \\   -F \&#39;comment&#x3D;\&quot;Example attachment comment\&quot;; type&#x3D;text/plain; charset&#x3D;utf-8\&#39; \\   https://myhost/wiki/rest/api/content/123/child/attachment &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentAttachmentsApi,
} from 'confluence-cloud-api-v1';
import type { CreateAttachmentRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentAttachmentsApi(config);

  const body = {
    // string | The ID of the content to add the attachment to.
    id: id_example,
    // Blob | The relative location and name of the attachment to be added to the content.
    file: BINARY_DATA_HERE,
    // Blob | If `minorEdits` is set to \\\'true\\\', no notification email or activity stream will be generated when the attachment is added to the content.
    minorEdit: BINARY_DATA_HERE,
    // 'current' | 'draft' | The status of the content that the attachment is being added to. (optional)
    status: status_example,
    // Blob | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\'t specify any comments. (optional)
    comment: BINARY_DATA_HERE,
  } satisfies CreateAttachmentRequest;

  try {
    const data = await api.createAttachment(body);
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
| **id** | `string` | The ID of the content to add the attachment to. | [Defaults to `undefined`] |
| **file** | `Blob` | The relative location and name of the attachment to be added to the content. | [Defaults to `undefined`] |
| **minorEdit** | `Blob` | If &#x60;minorEdits&#x60; is set to \\\&#39;true\\\&#39;, no notification email or activity stream will be generated when the attachment is added to the content. | [Defaults to `undefined`] |
| **status** | `current`, `draft` | The status of the content that the attachment is being added to. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, draft] |
| **comment** | `Blob` | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\&#39;t specify any comments. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the attachments were added to the content. |  -  |
| **400** | Returned if the content already has an attachment with the same filename. |  -  |
| **403** | Returned if;  - Attachments are disabled in Confluence. - The calling user does not have permission to add attachments to the content. |  -  |
| **404** | Returned if;  - The requested content is not found. - The user does not have permission to view it - The attachment exceeds the maximum configured attachment size. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrUpdateAttachments

> ContentArray createOrUpdateAttachments(id, file, minorEdit, status, comment)

Create or update attachment

Adds an attachment to a piece of content. If the attachment already exists for the content, then the attachment is updated (i.e. a new version of the attachment is created).  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type \&#39;multipart/form-data\&#39; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/) Java class provided by Apache HTTP Components.  Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5), in the case where the form data is text, the charset parameter for the \&quot;text/plain\&quot; Content-Type may be used to indicate the character encoding used in that part. In the case of this API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60; and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.  Example: This curl command attaches a file (\&#39;example.txt\&#39;) to a piece of content (id&#x3D;\&#39;123\&#39;) with a comment and &#x60;minorEdits&#x60;&#x3D;true. If the \&#39;example.txt\&#39; file already exists, it will update it with a new version of the attachment.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X PUT \\   -H \&#39;X-Atlassian-Token: nocheck\&#39; \\   -F \&#39;file&#x3D;@\&quot;example.txt\&quot;\&#39; \\   -F \&#39;minorEdit&#x3D;\&quot;true\&quot;\&#39; \\   -F \&#39;comment&#x3D;\&quot;Example attachment comment\&quot;; type&#x3D;text/plain; charset&#x3D;utf-8\&#39; \\   http://myhost/rest/api/content/123/child/attachment &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentAttachmentsApi,
} from 'confluence-cloud-api-v1';
import type { CreateOrUpdateAttachmentsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentAttachmentsApi(config);

  const body = {
    // string | The ID of the content to add the attachment to.
    id: id_example,
    // Blob | The relative location and name of the attachment to be added to the content.
    file: BINARY_DATA_HERE,
    // Blob | If `minorEdits` is set to \\\'true\\\', no notification email or activity stream will be generated when the attachment is added to the content.
    minorEdit: BINARY_DATA_HERE,
    // 'current' | 'draft' | The status of the content that the attachment is being added to. This should always be set to \'current\'. (optional)
    status: status_example,
    // Blob | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\'t specify any comments. (optional)
    comment: BINARY_DATA_HERE,
  } satisfies CreateOrUpdateAttachmentsRequest;

  try {
    const data = await api.createOrUpdateAttachments(body);
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
| **id** | `string` | The ID of the content to add the attachment to. | [Defaults to `undefined`] |
| **file** | `Blob` | The relative location and name of the attachment to be added to the content. | [Defaults to `undefined`] |
| **minorEdit** | `Blob` | If &#x60;minorEdits&#x60; is set to \\\&#39;true\\\&#39;, no notification email or activity stream will be generated when the attachment is added to the content. | [Defaults to `undefined`] |
| **status** | `current`, `draft` | The status of the content that the attachment is being added to. This should always be set to \&#39;current\&#39;. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, draft] |
| **comment** | `Blob` | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\&#39;t specify any comments. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the attachments were added to the content. |  -  |
| **403** | Returned if;  - Attachments are disabled. - The calling user does not have permission to add attachments to the content. |  -  |
| **404** | Returned if;  - The requested content is not found. - The user does not have permission to view it. - The attachment exceeds the maximum configured attachment size. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadAttatchment

> downloadAttatchment(id, attachmentId, version, status)

Get URI to download attachment

Redirects the client to a URL that serves an attachment\&#39;s binary data.

### Example

```ts
import {
  Configuration,
  ContentAttachmentsApi,
} from 'confluence-cloud-api-v1';
import type { DownloadAttatchmentRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentAttachmentsApi(config);

  const body = {
    // string | The ID of the content that the attachment is attached to.
    id: id_example,
    // string | The ID of the attachment to download.
    attachmentId: attachmentId_example,
    // number | The version of the attachment. If this parameter is absent, the redirect URI will download the latest version of the attachment. (optional)
    version: 56,
    // Array<string> | The statuses allowed on the retrieved attachment. If this parameter is absent, it will default to `current`. (optional)
    status: ...,
  } satisfies DownloadAttatchmentRequest;

  try {
    const data = await api.downloadAttatchment(body);
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
| **id** | `string` | The ID of the content that the attachment is attached to. | [Defaults to `undefined`] |
| **attachmentId** | `string` | The ID of the attachment to download. | [Defaults to `undefined`] |
| **version** | `number` | The version of the attachment. If this parameter is absent, the redirect URI will download the latest version of the attachment. | [Optional] [Defaults to `undefined`] |
| **status** | `Array<string>` | The statuses allowed on the retrieved attachment. If this parameter is absent, it will default to &#x60;current&#x60;. | [Optional] |

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
| **302** | Returned if download URL is found. |  -  |
| **400** | Returned if version number is greater than attachment\&#39;s latest version number or an invalid value. |  -  |
| **401** | Returned if there are authentication issues in request. |  -  |
| **404** | Returned if;  - No content is found with the specified content ID. - The specified content does not contain an attachment with the specified attachment ID. - The calling user does not have permission to view the attachment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAttachmentData

> Content updateAttachmentData(id, attachmentId, file, minorEdit, comment)

Update attachment data

Updates the binary data of an attachment, given the attachment ID, and optionally the comment and the minor edit field.  This method is essentially the same as [Create or update attachments](#api-content-id-child-attachment-put), except that it matches the attachment ID rather than the name.  Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request for this method, otherwise it will be blocked. This protects against XSRF attacks, which is necessary as this method accepts multipart/form-data.  The media type \&#39;multipart/form-data\&#39; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt). Most client libraries have classes that make it easier to implement multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/) Java class provided by Apache HTTP Components.  Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5), in the case where the form data is text, the charset parameter for the \&quot;text/plain\&quot; Content-Type may be used to indicate the character encoding used in that part. In the case of this API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60; and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.  Example: This curl command updates an attachment (id&#x3D;\&#39;att456\&#39;) that is attached to a piece of content (id&#x3D;\&#39;123\&#39;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.  &#x60;&#x60;&#x60; bash curl -D- \\   -u admin:admin \\   -X POST \\   -H \&#39;X-Atlassian-Token: nocheck\&#39; \\   -F \&#39;file&#x3D;@\&quot;example.txt\&quot;\&#39; \\   -F \&#39;minorEdit&#x3D;\&quot;true\&quot;\&#39; \\   -F \&#39;comment&#x3D;\&quot;Example attachment comment\&quot;; type&#x3D;text/plain; charset&#x3D;utf-8\&#39; \\   http://myhost/rest/api/content/123/child/attachment/att456/data &#x60;&#x60;&#x60; **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentAttachmentsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateAttachmentDataRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentAttachmentsApi(config);

  const body = {
    // string | The ID of the content that the attachment is attached to.
    id: id_example,
    // string | The ID of the attachment to update.
    attachmentId: attachmentId_example,
    // Blob | The relative location and name of the attachment to be added to the content.
    file: BINARY_DATA_HERE,
    // Blob | If `minorEdits` is set to \\\'true\\\', no notification email or activity stream will be generated when the attachment is added to the content.
    minorEdit: BINARY_DATA_HERE,
    // Blob | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\'t specify any comments. (optional)
    comment: BINARY_DATA_HERE,
  } satisfies UpdateAttachmentDataRequest;

  try {
    const data = await api.updateAttachmentData(body);
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
| **id** | `string` | The ID of the content that the attachment is attached to. | [Defaults to `undefined`] |
| **attachmentId** | `string` | The ID of the attachment to update. | [Defaults to `undefined`] |
| **file** | `Blob` | The relative location and name of the attachment to be added to the content. | [Defaults to `undefined`] |
| **minorEdit** | `Blob` | If &#x60;minorEdits&#x60; is set to \\\&#39;true\\\&#39;, no notification email or activity stream will be generated when the attachment is added to the content. | [Defaults to `undefined`] |
| **comment** | `Blob` | The comment for the attachment that is being added. If you specify a comment, then every file must have a comment and the comments must be in the same order as the files. Alternatively, don\\\&#39;t specify any comments. | [Optional] [Defaults to `undefined`] |

### Return type

[**Content**](Content.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the attachment is updated. |  -  |
| **400** | Returned if the attachment id is invalid. |  -  |
| **404** | Returned if no attachment is found for the attachment ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAttachmentProperties

> Content updateAttachmentProperties(id, attachmentId, body)

Update attachment properties

Updates the attachment properties, i.e. the non-binary data of an attachment like the filename, media-type, comment, and parent container.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the content.

### Example

```ts
import {
  Configuration,
  ContentAttachmentsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateAttachmentPropertiesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentAttachmentsApi(config);

  const body = {
    // string | The ID of the content that the attachment is attached to.
    id: id_example,
    // string | The ID of the attachment to update.
    attachmentId: attachmentId_example,
    // AttachmentPropertiesUpdateBody | The details of the attachment to be updated.
    body: ...,
  } satisfies UpdateAttachmentPropertiesRequest;

  try {
    const data = await api.updateAttachmentProperties(body);
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
| **id** | `string` | The ID of the content that the attachment is attached to. | [Defaults to `undefined`] |
| **attachmentId** | `string` | The ID of the attachment to update. | [Defaults to `undefined`] |
| **body** | [AttachmentPropertiesUpdateBody](AttachmentPropertiesUpdateBody.md) | The details of the attachment to be updated. | |

### Return type

[**Content**](Content.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the attachment is updated. |  -  |
| **400** | Returned if;  - The attachment id is invalid. - The attachment version number is invalid. |  -  |
| **403** | Returned if;  - The calling user is not permitted to update or move the attachment. - The attachment is being moved to an invalid content type. |  -  |
| **404** | Returned if no attachment is found for the attachment ID. |  -  |
| **409** | Returned if the version of the supplied attachment does not match the version of the attachment stored in the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

