# ContentPropertiesApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAttachmentProperty**](ContentPropertiesApi.md#createattachmentproperty) | **POST** /attachments/{attachment-id}/properties | Create content property for attachment |
| [**createBlogpostProperty**](ContentPropertiesApi.md#createblogpostproperty) | **POST** /blogposts/{blogpost-id}/properties | Create content property for blog post |
| [**createCommentProperty**](ContentPropertiesApi.md#createcommentproperty) | **POST** /comments/{comment-id}/properties | Create content property for comment |
| [**createCustomContentProperty**](ContentPropertiesApi.md#createcustomcontentproperty) | **POST** /custom-content/{custom-content-id}/properties | Create content property for custom content |
| [**createDatabaseProperty**](ContentPropertiesApi.md#createdatabaseproperty) | **POST** /databases/{id}/properties | Create content property for database |
| [**createFolderProperty**](ContentPropertiesApi.md#createfolderproperty) | **POST** /folders/{id}/properties | Create content property for folder |
| [**createPageProperty**](ContentPropertiesApi.md#createpageproperty) | **POST** /pages/{page-id}/properties | Create content property for page |
| [**createSmartLinkProperty**](ContentPropertiesApi.md#createsmartlinkproperty) | **POST** /embeds/{id}/properties | Create content property for Smart Link in the content tree |
| [**createWhiteboardProperty**](ContentPropertiesApi.md#createwhiteboardproperty) | **POST** /whiteboards/{id}/properties | Create content property for whiteboard |
| [**deleteAttachmentPropertyById**](ContentPropertiesApi.md#deleteattachmentpropertybyid) | **DELETE** /attachments/{attachment-id}/properties/{property-id} | Delete content property for attachment by id |
| [**deleteBlogpostPropertyById**](ContentPropertiesApi.md#deleteblogpostpropertybyid) | **DELETE** /blogposts/{blogpost-id}/properties/{property-id} | Delete content property for blogpost by id |
| [**deleteCommentPropertyById**](ContentPropertiesApi.md#deletecommentpropertybyid) | **DELETE** /comments/{comment-id}/properties/{property-id} | Delete content property for comment by id |
| [**deleteCustomContentPropertyById**](ContentPropertiesApi.md#deletecustomcontentpropertybyid) | **DELETE** /custom-content/{custom-content-id}/properties/{property-id} | Delete content property for custom content by id |
| [**deleteDatabasePropertyById**](ContentPropertiesApi.md#deletedatabasepropertybyid) | **DELETE** /databases/{database-id}/properties/{property-id} | Delete content property for database by id |
| [**deleteFolderPropertyById**](ContentPropertiesApi.md#deletefolderpropertybyid) | **DELETE** /folders/{folder-id}/properties/{property-id} | Delete content property for folder by id |
| [**deletePagePropertyById**](ContentPropertiesApi.md#deletepagepropertybyid) | **DELETE** /pages/{page-id}/properties/{property-id} | Delete content property for page by id |
| [**deleteSmartLinkPropertyById**](ContentPropertiesApi.md#deletesmartlinkpropertybyid) | **DELETE** /embeds/{embed-id}/properties/{property-id} | Delete content property for Smart Link in the content tree by id |
| [**deleteWhiteboardPropertyById**](ContentPropertiesApi.md#deletewhiteboardpropertybyid) | **DELETE** /whiteboards/{whiteboard-id}/properties/{property-id} | Delete content property for whiteboard by id |
| [**getAttachmentContentProperties**](ContentPropertiesApi.md#getattachmentcontentproperties) | **GET** /attachments/{attachment-id}/properties | Get content properties for attachment |
| [**getAttachmentContentPropertiesById**](ContentPropertiesApi.md#getattachmentcontentpropertiesbyid) | **GET** /attachments/{attachment-id}/properties/{property-id} | Get content property for attachment by id |
| [**getBlogpostContentProperties**](ContentPropertiesApi.md#getblogpostcontentproperties) | **GET** /blogposts/{blogpost-id}/properties | Get content properties for blog post |
| [**getBlogpostContentPropertiesById**](ContentPropertiesApi.md#getblogpostcontentpropertiesbyid) | **GET** /blogposts/{blogpost-id}/properties/{property-id} | Get content property for blog post by id |
| [**getCommentContentProperties**](ContentPropertiesApi.md#getcommentcontentproperties) | **GET** /comments/{comment-id}/properties | Get content properties for comment |
| [**getCommentContentPropertiesById**](ContentPropertiesApi.md#getcommentcontentpropertiesbyid) | **GET** /comments/{comment-id}/properties/{property-id} | Get content property for comment by id |
| [**getCustomContentContentProperties**](ContentPropertiesApi.md#getcustomcontentcontentproperties) | **GET** /custom-content/{custom-content-id}/properties | Get content properties for custom content |
| [**getCustomContentContentPropertiesById**](ContentPropertiesApi.md#getcustomcontentcontentpropertiesbyid) | **GET** /custom-content/{custom-content-id}/properties/{property-id} | Get content property for custom content by id |
| [**getDatabaseContentProperties**](ContentPropertiesApi.md#getdatabasecontentproperties) | **GET** /databases/{id}/properties | Get content properties for database |
| [**getDatabaseContentPropertiesById**](ContentPropertiesApi.md#getdatabasecontentpropertiesbyid) | **GET** /databases/{database-id}/properties/{property-id} | Get content property for database by id |
| [**getFolderContentProperties**](ContentPropertiesApi.md#getfoldercontentproperties) | **GET** /folders/{id}/properties | Get content properties for folder |
| [**getFolderContentPropertiesById**](ContentPropertiesApi.md#getfoldercontentpropertiesbyid) | **GET** /folders/{folder-id}/properties/{property-id} | Get content property for folder by id |
| [**getPageContentProperties**](ContentPropertiesApi.md#getpagecontentproperties) | **GET** /pages/{page-id}/properties | Get content properties for page |
| [**getPageContentPropertiesById**](ContentPropertiesApi.md#getpagecontentpropertiesbyid) | **GET** /pages/{page-id}/properties/{property-id} | Get content property for page by id |
| [**getSmartLinkContentProperties**](ContentPropertiesApi.md#getsmartlinkcontentproperties) | **GET** /embeds/{id}/properties | Get content properties for Smart Link in the content tree |
| [**getSmartLinkContentPropertiesById**](ContentPropertiesApi.md#getsmartlinkcontentpropertiesbyid) | **GET** /embeds/{embed-id}/properties/{property-id} | Get content property for Smart Link in the content tree by id |
| [**getWhiteboardContentProperties**](ContentPropertiesApi.md#getwhiteboardcontentproperties) | **GET** /whiteboards/{id}/properties | Get content properties for whiteboard |
| [**getWhiteboardContentPropertiesById**](ContentPropertiesApi.md#getwhiteboardcontentpropertiesbyid) | **GET** /whiteboards/{whiteboard-id}/properties/{property-id} | Get content property for whiteboard by id |
| [**updateAttachmentPropertyById**](ContentPropertiesApi.md#updateattachmentpropertybyid) | **PUT** /attachments/{attachment-id}/properties/{property-id} | Update content property for attachment by id |
| [**updateBlogpostPropertyById**](ContentPropertiesApi.md#updateblogpostpropertybyid) | **PUT** /blogposts/{blogpost-id}/properties/{property-id} | Update content property for blog post by id |
| [**updateCommentPropertyById**](ContentPropertiesApi.md#updatecommentpropertybyid) | **PUT** /comments/{comment-id}/properties/{property-id} | Update content property for comment by id |
| [**updateCustomContentPropertyById**](ContentPropertiesApi.md#updatecustomcontentpropertybyid) | **PUT** /custom-content/{custom-content-id}/properties/{property-id} | Update content property for custom content by id |
| [**updateDatabasePropertyById**](ContentPropertiesApi.md#updatedatabasepropertybyid) | **PUT** /databases/{database-id}/properties/{property-id} | Update content property for database by id |
| [**updateFolderPropertyById**](ContentPropertiesApi.md#updatefolderpropertybyid) | **PUT** /folders/{folder-id}/properties/{property-id} | Update content property for folder by id |
| [**updatePagePropertyById**](ContentPropertiesApi.md#updatepagepropertybyid) | **PUT** /pages/{page-id}/properties/{property-id} | Update content property for page by id |
| [**updateSmartLinkPropertyById**](ContentPropertiesApi.md#updatesmartlinkpropertybyid) | **PUT** /embeds/{embed-id}/properties/{property-id} | Update content property for Smart Link in the content tree by id |
| [**updateWhiteboardPropertyById**](ContentPropertiesApi.md#updatewhiteboardpropertybyid) | **PUT** /whiteboards/{whiteboard-id}/properties/{property-id} | Update content property for whiteboard by id |



## createAttachmentProperty

> ContentProperty createAttachmentProperty(attachmentId, contentPropertyCreateRequest)

Create content property for attachment

Creates a new content property for an attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the attachment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateAttachmentPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // string | The ID of the attachment to create a property for.
    attachmentId: attachmentId_example,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateAttachmentPropertyRequest;

  try {
    const data = await api.createAttachmentProperty(body);
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
| **attachmentId** | `string` | The ID of the attachment to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBlogpostProperty

> ContentProperty createBlogpostProperty(blogpostId, contentPropertyCreateRequest)

Create content property for blog post

Creates a new property for a blogpost.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the blog post.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateBlogpostPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the blog post to create a property for.
    blogpostId: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateBlogpostPropertyRequest;

  try {
    const data = await api.createBlogpostProperty(body);
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
| **blogpostId** | `number` | The ID of the blog post to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCommentProperty

> ContentProperty createCommentProperty(commentId, contentPropertyCreateRequest)

Create content property for comment

Creates a new content property for a comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the comment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateCommentPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the comment to create a property for.
    commentId: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateCommentPropertyRequest;

  try {
    const data = await api.createCommentProperty(body);
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
| **commentId** | `number` | The ID of the comment to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomContentProperty

> ContentProperty createCustomContentProperty(customContentId, contentPropertyCreateRequest)

Create content property for custom content

Creates a new content property for a piece of custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the custom content.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateCustomContentPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the custom content to create a property for.
    customContentId: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateCustomContentPropertyRequest;

  try {
    const data = await api.createCustomContentProperty(body);
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
| **customContentId** | `number` | The ID of the custom content to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDatabaseProperty

> ContentProperty createDatabaseProperty(id, contentPropertyCreateRequest)

Create content property for database

Creates a new content property for a database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the database.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateDatabasePropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the database to create a property for.
    id: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateDatabasePropertyRequest;

  try {
    const data = await api.createDatabaseProperty(body);
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
| **id** | `number` | The ID of the database to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFolderProperty

> ContentProperty createFolderProperty(id, contentPropertyCreateRequest)

Create content property for folder

Creates a new content property for a folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the folder.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateFolderPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the folder to create a property for.
    id: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateFolderPropertyRequest;

  try {
    const data = await api.createFolderProperty(body);
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
| **id** | `number` | The ID of the folder to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPageProperty

> ContentProperty createPageProperty(pageId, contentPropertyCreateRequest)

Create content property for page

Creates a new content property for a page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreatePagePropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the page to create a property for.
    pageId: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreatePagePropertyRequest;

  try {
    const data = await api.createPageProperty(body);
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
| **pageId** | `number` | The ID of the page to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSmartLinkProperty

> ContentProperty createSmartLinkProperty(id, contentPropertyCreateRequest)

Create content property for Smart Link in the content tree

Creates a new content property for a Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the Smart Link in the content tree.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateSmartLinkPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree to create a property for.
    id: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateSmartLinkPropertyRequest;

  try {
    const data = await api.createSmartLinkProperty(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWhiteboardProperty

> ContentProperty createWhiteboardProperty(id, contentPropertyCreateRequest)

Create content property for whiteboard

Creates a new content property for a whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to update the whiteboard.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateWhiteboardPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the whiteboard to create a property for.
    id: 789,
    // ContentPropertyCreateRequest | The content property to be created
    contentPropertyCreateRequest: ...,
  } satisfies CreateWhiteboardPropertyRequest;

  try {
    const data = await api.createWhiteboardProperty(body);
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
| **id** | `number` | The ID of the whiteboard to create a property for. | [Defaults to `undefined`] |
| **contentPropertyCreateRequest** | [ContentPropertyCreateRequest](ContentPropertyCreateRequest.md) | The content property to be created | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was created successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAttachmentPropertyById

> deleteAttachmentPropertyById(attachmentId, propertyId)

Delete content property for attachment by id

Deletes a content property for an attachment by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to attachment the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteAttachmentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // string | The ID of the attachment the property belongs to.
    attachmentId: attachmentId_example,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteAttachmentPropertyByIdRequest;

  try {
    const data = await api.deleteAttachmentPropertyById(body);
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
| **attachmentId** | `string` | The ID of the attachment the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBlogpostPropertyById

> deleteBlogpostPropertyById(blogpostId, propertyId)

Delete content property for blogpost by id

Deletes a content property for a blogpost by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the blog post.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteBlogpostPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the blog post the property belongs to.
    blogpostId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteBlogpostPropertyByIdRequest;

  try {
    const data = await api.deleteBlogpostPropertyById(body);
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
| **blogpostId** | `number` | The ID of the blog post the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCommentPropertyById

> deleteCommentPropertyById(commentId, propertyId)

Delete content property for comment by id

Deletes a content property for a comment by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the comment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteCommentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the comment the property belongs to.
    commentId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteCommentPropertyByIdRequest;

  try {
    const data = await api.deleteCommentPropertyById(body);
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
| **commentId** | `number` | The ID of the comment the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified comment or the comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomContentPropertyById

> deleteCustomContentPropertyById(customContentId, propertyId)

Delete content property for custom content by id

Deletes a content property for a piece of custom content by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the custom content.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteCustomContentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the custom content the property belongs to.
    customContentId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteCustomContentPropertyByIdRequest;

  try {
    const data = await api.deleteCustomContentPropertyById(body);
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
| **customContentId** | `number` | The ID of the custom content the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDatabasePropertyById

> deleteDatabasePropertyById(databaseId, propertyId)

Delete content property for database by id

Deletes a content property for a database by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the database.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteDatabasePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the database the property belongs to.
    databaseId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteDatabasePropertyByIdRequest;

  try {
    const data = await api.deleteDatabasePropertyById(body);
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
| **databaseId** | `number` | The ID of the database the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFolderPropertyById

> deleteFolderPropertyById(folderId, propertyId)

Delete content property for folder by id

Deletes a content property for a folder by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the folder.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteFolderPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the folder the property belongs to.
    folderId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteFolderPropertyByIdRequest;

  try {
    const data = await api.deleteFolderPropertyById(body);
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
| **folderId** | `number` | The ID of the folder the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePagePropertyById

> deletePagePropertyById(pageId, propertyId)

Delete content property for page by id

Deletes a content property for a page by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeletePagePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the page the property belongs to.
    pageId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeletePagePropertyByIdRequest;

  try {
    const data = await api.deletePagePropertyById(body);
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
| **pageId** | `number` | The ID of the page the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSmartLinkPropertyById

> deleteSmartLinkPropertyById(embedId, propertyId)

Delete content property for Smart Link in the content tree by id

Deletes a content property for a Smart Link in the content tree by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the Smart Link in the content tree.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteSmartLinkPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree the property belongs to.
    embedId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteSmartLinkPropertyByIdRequest;

  try {
    const data = await api.deleteSmartLinkPropertyById(body);
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
| **embedId** | `number` | The ID of the Smart Link in the content tree the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWhiteboardPropertyById

> deleteWhiteboardPropertyById(whiteboardId, propertyId)

Delete content property for whiteboard by id

Deletes a content property for a whiteboard by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the whiteboard.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteWhiteboardPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the whiteboard the property belongs to.
    whiteboardId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteWhiteboardPropertyByIdRequest;

  try {
    const data = await api.deleteWhiteboardPropertyById(body);
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
| **whiteboardId** | `number` | The ID of the whiteboard the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the content property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentContentProperties

> MultiEntityResultContentProperty getAttachmentContentProperties(attachmentId, key, sort, cursor, limit)

Get content properties for attachment

Retrieves all Content Properties tied to a specified attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // string | The ID of the attachment for which content properties should be returned.
    attachmentId: attachmentId_example,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetAttachmentContentPropertiesRequest;

  try {
    const data = await api.getAttachmentContentProperties(body);
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
| **attachmentId** | `string` | The ID of the attachment for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/attachments/&lt;attachment-id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentContentPropertiesById

> ContentProperty getAttachmentContentPropertiesById(attachmentId, propertyId)

Get content property for attachment by id

Retrieves a specific Content Property by ID that is attached to a specified attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // string | The ID of the attachment for which content properties should be returned.
    attachmentId: attachmentId_example,
    // number | The ID of the content property to be returned
    propertyId: 789,
  } satisfies GetAttachmentContentPropertiesByIdRequest;

  try {
    const data = await api.getAttachmentContentPropertiesById(body);
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
| **attachmentId** | `string` | The ID of the attachment for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property to be returned | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment,the attachment was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogpostContentProperties

> MultiEntityResultContentProperty getBlogpostContentProperties(blogpostId, key, sort, cursor, limit)

Get content properties for blog post

Retrieves all Content Properties tied to a specified blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogpostContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the blog post for which content properties should be returned.
    blogpostId: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogpostContentPropertiesRequest;

  try {
    const data = await api.getBlogpostContentProperties(body);
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
| **blogpostId** | `number` | The ID of the blog post for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;blogpost-id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogpostContentPropertiesById

> ContentProperty getBlogpostContentPropertiesById(blogpostId, propertyId)

Get content property for blog post by id

Retrieves a specific Content Property by ID that is attached to a specified blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogpostContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the blog post for which content properties should be returned.
    blogpostId: 789,
    // number | The ID of the property being requested
    propertyId: 789,
  } satisfies GetBlogpostContentPropertiesByIdRequest;

  try {
    const data = await api.getBlogpostContentPropertiesById(body);
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
| **blogpostId** | `number` | The ID of the blog post for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property being requested | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;blogpost-id&gt;/properties/&lt;property-id&gt;?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post,the blog post was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentContentProperties

> MultiEntityResultContentProperty getCommentContentProperties(commentId, key, sort, cursor, limit)

Get content properties for comment

Retrieves Content Properties attached to a specified comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the comment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetCommentContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the comment for which content properties should be returned.
    commentId: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetCommentContentPropertiesRequest;

  try {
    const data = await api.getCommentContentProperties(body);
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
| **commentId** | `number` | The ID of the comment for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/comments/&lt;comment-id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified comment or the comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentContentPropertiesById

> ContentProperty getCommentContentPropertiesById(commentId, propertyId)

Get content property for comment by id

Retrieves a specific Content Property by ID that is attached to a specified comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the comment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetCommentContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the comment for which content properties should be returned.
    commentId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetCommentContentPropertiesByIdRequest;

  try {
    const data = await api.getCommentContentPropertiesById(body);
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
| **commentId** | `number` | The ID of the comment for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified comment, the comment was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentContentProperties

> MultiEntityResultContentProperty getCustomContentContentProperties(customContentId, key, sort, cursor, limit)

Get content properties for custom content

Retrieves Content Properties tied to a specified custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the custom content for which content properties should be returned.
    customContentId: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetCustomContentContentPropertiesRequest;

  try {
    const data = await api.getCustomContentContentProperties(body);
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
| **customContentId** | `number` | The ID of the custom content for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content/&lt;custom-content-id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentContentPropertiesById

> ContentProperty getCustomContentContentPropertiesById(customContentId, propertyId)

Get content property for custom content by id

Retrieves a specific Content Property by ID that is attached to a specified custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the custom content for which content properties should be returned.
    customContentId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetCustomContentContentPropertiesByIdRequest;

  try {
    const data = await api.getCustomContentContentPropertiesById(body);
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
| **customContentId** | `number` | The ID of the custom content for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content, the custom content was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseContentProperties

> MultiEntityResultContentProperty getDatabaseContentProperties(id, key, sort, cursor, limit)

Get content properties for database

Retrieves Content Properties tied to a specified database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the database for which content properties should be returned.
    id: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetDatabaseContentPropertiesRequest;

  try {
    const data = await api.getDatabaseContentProperties(body);
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
| **id** | `number` | The ID of the database for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/databases/&lt;id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseContentPropertiesById

> ContentProperty getDatabaseContentPropertiesById(databaseId, propertyId)

Get content property for database by id

Retrieves a specific Content Property by ID that is attached to a specified database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the database for which content properties should be returned.
    databaseId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetDatabaseContentPropertiesByIdRequest;

  try {
    const data = await api.getDatabaseContentPropertiesById(body);
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
| **databaseId** | `number` | The ID of the database for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database, the database was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderContentProperties

> MultiEntityResultContentProperty getFolderContentProperties(id, key, sort, cursor, limit)

Get content properties for folder

Retrieves Content Properties tied to a specified folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the folder for which content properties should be returned.
    id: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetFolderContentPropertiesRequest;

  try {
    const data = await api.getFolderContentProperties(body);
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
| **id** | `number` | The ID of the folder for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/embeds/&lt;id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderContentPropertiesById

> ContentProperty getFolderContentPropertiesById(folderId, propertyId)

Get content property for folder by id

Retrieves a specific Content Property by ID that is attached to a specified folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the folder for which content properties should be returned.
    folderId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetFolderContentPropertiesByIdRequest;

  try {
    const data = await api.getFolderContentPropertiesById(body);
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
| **folderId** | `number` | The ID of the folder for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder, the folder was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageContentProperties

> MultiEntityResultContentProperty getPageContentProperties(pageId, key, sort, cursor, limit)

Get content properties for page

Retrieves Content Properties tied to a specified page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetPageContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the page for which content properties should be returned.
    pageId: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPageContentPropertiesRequest;

  try {
    const data = await api.getPageContentProperties(body);
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
| **pageId** | `number` | The ID of the page for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/&lt;page-id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageContentPropertiesById

> ContentProperty getPageContentPropertiesById(pageId, propertyId)

Get content property for page by id

Retrieves a specific Content Property by ID that is attached to a specified page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetPageContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the page for which content properties should be returned.
    pageId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetPageContentPropertiesByIdRequest;

  try {
    const data = await api.getPageContentPropertiesById(body);
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
| **pageId** | `number` | The ID of the page for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page, the page was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkContentProperties

> MultiEntityResultContentProperty getSmartLinkContentProperties(id, key, sort, cursor, limit)

Get content properties for Smart Link in the content tree

Retrieves Content Properties tied to a specified Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree for which content properties should be returned.
    id: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of Smart Links per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetSmartLinkContentPropertiesRequest;

  try {
    const data = await api.getSmartLinkContentProperties(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of Smart Links per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/embeds/&lt;id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkContentPropertiesById

> ContentProperty getSmartLinkContentPropertiesById(embedId, propertyId)

Get content property for Smart Link in the content tree by id

Retrieves a specific Content Property by ID that is attached to a specified Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree for which content properties should be returned.
    embedId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetSmartLinkContentPropertiesByIdRequest;

  try {
    const data = await api.getSmartLinkContentPropertiesById(body);
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
| **embedId** | `number` | The ID of the Smart Link in the content tree for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree, the Smart Link was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardContentProperties

> MultiEntityResultContentProperty getWhiteboardContentProperties(id, key, sort, cursor, limit)

Get content properties for whiteboard

Retrieves Content Properties tied to a specified whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardContentPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the whiteboard for which content properties should be returned.
    id: 789,
    // string | Filters the response to return a specific content property with matching key (case sensitive). (optional)
    key: key_example,
    // ContentPropertySortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetWhiteboardContentPropertiesRequest;

  try {
    const data = await api.getWhiteboardContentProperties(body);
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
| **id** | `number` | The ID of the whiteboard for which content properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | Filters the response to return a specific content property with matching key (case sensitive). | [Optional] [Defaults to `undefined`] |
| **sort** | `ContentPropertySortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: key, -key] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultContentProperty**](MultiEntityResultContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content properties are successfully retrieved. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/whiteboards/&lt;id&gt;/properties?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardContentPropertiesById

> ContentProperty getWhiteboardContentPropertiesById(whiteboardId, propertyId)

Get content property for whiteboard by id

Retrieves a specific Content Property by ID that is attached to a specified whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardContentPropertiesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the whiteboard for which content properties should be returned.
    whiteboardId: 789,
    // number | The ID of the content property being requested.
    propertyId: 789,
  } satisfies GetWhiteboardContentPropertiesByIdRequest;

  try {
    const data = await api.getWhiteboardContentPropertiesById(body);
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
| **whiteboardId** | `number` | The ID of the whiteboard for which content properties should be returned. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the content property being requested. | [Defaults to `undefined`] |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content property is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard, the whiteboard was not found, or the property was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAttachmentPropertyById

> ContentProperty updateAttachmentPropertyById(attachmentId, propertyId, contentPropertyUpdateRequest)

Update content property for attachment by id

Update a content property for attachment by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the attachment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateAttachmentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // string | The ID of the attachment the property belongs to.
    attachmentId: attachmentId_example,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateAttachmentPropertyByIdRequest;

  try {
    const data = await api.updateAttachmentPropertyById(body);
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
| **attachmentId** | `string` | The ID of the attachment the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBlogpostPropertyById

> ContentProperty updateBlogpostPropertyById(blogpostId, propertyId, contentPropertyUpdateRequest)

Update content property for blog post by id

Update a content property for blog post by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the blog post.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateBlogpostPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the blog post the property belongs to.
    blogpostId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateBlogpostPropertyByIdRequest;

  try {
    const data = await api.updateBlogpostPropertyById(body);
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
| **blogpostId** | `number` | The ID of the blog post the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCommentPropertyById

> ContentProperty updateCommentPropertyById(commentId, propertyId, contentPropertyUpdateRequest)

Update content property for comment by id

Update a content property for a comment by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the comment.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateCommentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the comment the property belongs to.
    commentId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateCommentPropertyByIdRequest;

  try {
    const data = await api.updateCommentPropertyById(body);
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
| **commentId** | `number` | The ID of the comment the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified comment or the comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomContentPropertyById

> ContentProperty updateCustomContentPropertyById(customContentId, propertyId, contentPropertyUpdateRequest)

Update content property for custom content by id

Update a content property for a piece of custom content by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the custom content.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateCustomContentPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the custom content the property belongs to.
    customContentId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateCustomContentPropertyByIdRequest;

  try {
    const data = await api.updateCustomContentPropertyById(body);
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
| **customContentId** | `number` | The ID of the custom content the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDatabasePropertyById

> ContentProperty updateDatabasePropertyById(databaseId, propertyId, contentPropertyUpdateRequest)

Update content property for database by id

Update a content property for a database by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the database.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateDatabasePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the database the property belongs to.
    databaseId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateDatabasePropertyByIdRequest;

  try {
    const data = await api.updateDatabasePropertyById(body);
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
| **databaseId** | `number` | The ID of the database the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFolderPropertyById

> ContentProperty updateFolderPropertyById(folderId, propertyId, contentPropertyUpdateRequest)

Update content property for folder by id

Update a content property for a folder by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the folder.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateFolderPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the folder the property belongs to.
    folderId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateFolderPropertyByIdRequest;

  try {
    const data = await api.updateFolderPropertyById(body);
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
| **folderId** | `number` | The ID of the folder the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePagePropertyById

> ContentProperty updatePagePropertyById(pageId, propertyId, contentPropertyUpdateRequest)

Update content property for page by id

Update a content property for a page by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the page.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdatePagePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the page the property belongs to.
    pageId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdatePagePropertyByIdRequest;

  try {
    const data = await api.updatePagePropertyById(body);
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
| **pageId** | `number` | The ID of the page the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSmartLinkPropertyById

> ContentProperty updateSmartLinkPropertyById(embedId, propertyId, contentPropertyUpdateRequest)

Update content property for Smart Link in the content tree by id

Update a content property for a Smart Link in the content tree by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the Smart Link in the content tree.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateSmartLinkPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree the property belongs to.
    embedId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateSmartLinkPropertyByIdRequest;

  try {
    const data = await api.updateSmartLinkPropertyById(body);
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
| **embedId** | `number` | The ID of the Smart Link in the content tree the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWhiteboardPropertyById

> ContentProperty updateWhiteboardPropertyById(whiteboardId, propertyId, contentPropertyUpdateRequest)

Update content property for whiteboard by id

Update a content property for a whiteboard by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the whiteboard.

### Example

```ts
import {
  Configuration,
  ContentPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateWhiteboardPropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPropertiesApi(config);

  const body = {
    // number | The ID of the whiteboard the property belongs to.
    whiteboardId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // ContentPropertyUpdateRequest | The content property to be updated.
    contentPropertyUpdateRequest: ...,
  } satisfies UpdateWhiteboardPropertyByIdRequest;

  try {
    const data = await api.updateWhiteboardPropertyById(body);
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
| **whiteboardId** | `number` | The ID of the whiteboard the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **contentPropertyUpdateRequest** | [ContentPropertyUpdateRequest](ContentPropertyUpdateRequest.md) | The content property to be updated. | |

### Return type

[**ContentProperty**](ContentProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content property was updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

