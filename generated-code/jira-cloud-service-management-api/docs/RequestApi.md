# RequestApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addRequestParticipants**](RequestApi.md#addrequestparticipants) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Add request participants |
| [**answerApproval**](RequestApi.md#answerapproval) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId} | Answer approval |
| [**createCommentWithAttachment**](RequestApi.md#createcommentwithattachment) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/attachment | Create comment with attachment |
| [**createCustomerRequest**](RequestApi.md#createcustomerrequest) | **POST** /rest/servicedeskapi/request | Create customer request |
| [**createRequestComment**](RequestApi.md#createrequestcomment) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/comment | Create request comment |
| [**deleteFeedback**](RequestApi.md#deletefeedback) | **DELETE** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Delete feedback |
| [**getApprovalById**](RequestApi.md#getapprovalbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId} | Get approval by id |
| [**getApprovals**](RequestApi.md#getapprovals) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/approval | Get approvals |
| [**getAttachmentContent**](RequestApi.md#getattachmentcontent) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId} | Get attachment content |
| [**getAttachmentThumbnail**](RequestApi.md#getattachmentthumbnail) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}/thumbnail | Get attachment thumbnail |
| [**getAttachmentsForRequest**](RequestApi.md#getattachmentsforrequest) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment | Get attachments for request |
| [**getCommentAttachments**](RequestApi.md#getcommentattachments) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}/attachment | Get comment attachments |
| [**getCustomerRequestByIdOrKey**](RequestApi.md#getcustomerrequestbyidorkey) | **GET** /rest/servicedeskapi/request/{issueIdOrKey} | Get customer request by id or key |
| [**getCustomerRequestStatus**](RequestApi.md#getcustomerrequeststatus) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/status | Get customer request status |
| [**getCustomerRequests**](RequestApi.md#getcustomerrequests) | **GET** /rest/servicedeskapi/request | Get customer requests |
| [**getCustomerTransitions**](RequestApi.md#getcustomertransitions) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/transition | Get customer transitions |
| [**getFeedback**](RequestApi.md#getfeedback) | **GET** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Get feedback |
| [**getRequestCommentById**](RequestApi.md#getrequestcommentbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId} | Get request comment by id |
| [**getRequestComments**](RequestApi.md#getrequestcomments) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment | Get request comments |
| [**getRequestParticipants**](RequestApi.md#getrequestparticipants) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Get request participants |
| [**getSlaInformation**](RequestApi.md#getslainformation) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/sla | Get sla information |
| [**getSlaInformationById**](RequestApi.md#getslainformationbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/sla/{slaMetricId} | Get sla information by id |
| [**getSubscriptionStatus**](RequestApi.md#getsubscriptionstatus) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Get subscription status |
| [**performCustomerTransition**](RequestApi.md#performcustomertransition) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/transition | Perform customer transition |
| [**postFeedback**](RequestApi.md#postfeedback) | **POST** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Post feedback |
| [**removeRequestParticipants**](RequestApi.md#removerequestparticipants) | **DELETE** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Remove request participants |
| [**subscribe**](RequestApi.md#subscribe) | **PUT** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Subscribe |
| [**unsubscribe**](RequestApi.md#unsubscribe) | **DELETE** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Unsubscribe |



## addRequestParticipants

> PagedDTOUserDTO addRequestParticipants(issueIdOrKey, requestParticipantUpdateDTO)

Add request participants

This method adds participants to a customer request.  **[Permissions](#permissions) required**: Permission to manage participants on the customer request.  Note, participants can be added when creating a customer request using the [request](#api-request-post) resource, by defining the participants in the &#x60;requestParticipants&#x60; field.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { AddRequestParticipantsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to have participants added.
    issueIdOrKey: issueIdOrKey_example,
    // RequestParticipantUpdateDTO
    requestParticipantUpdateDTO: {"accountIds":[],"usernames":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"]},
  } satisfies AddRequestParticipantsRequest;

  try {
    const data = await api.addRequestParticipants(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to have participants added. | [Defaults to `undefined`] |
| **requestParticipantUpdateDTO** | [RequestParticipantUpdateDTO](RequestParticipantUpdateDTO.md) |  | |

### Return type

[**PagedDTOUserDTO**](PagedDTOUserDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the participants added to the customer request. |  -  |
| **400** | Returned if any user to be added as a participant does not exist. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## answerApproval

> ApprovalDTO answerApproval(issueIdOrKey, approvalId, approvalDecisionRequestDTO)

Answer approval

This method enables a user to **Approve** or **Decline** an approval on a customer request. The approval is assumed to be owned by the user making the call.  **[Permissions](#permissions) required**: User is assigned to the approval request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { AnswerApprovalRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be updated.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the approval to be updated.
    approvalId: 56,
    // ApprovalDecisionRequestDTO
    approvalDecisionRequestDTO: {"decision":"approve"},
  } satisfies AnswerApprovalRequest;

  try {
    const data = await api.answerApproval(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be updated. | [Defaults to `undefined`] |
| **approvalId** | `number` | The ID of the approval to be updated. | [Defaults to `undefined`] |
| **approvalDecisionRequestDTO** | [ApprovalDecisionRequestDTO](ApprovalDecisionRequestDTO.md) |  | |

### Return type

[**ApprovalDTO**](ApprovalDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the updated approval. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request or the approval do not exist. |  -  |
| **409** | Returned if the customer has already submitted a decision or the approval has already been completed. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCommentWithAttachment

> AttachmentCreateResultDTO createCommentWithAttachment(issueIdOrKey, attachmentCreateDTO)

Create comment with attachment

This method creates a comment on a customer request using one or more attachment files (uploaded using [servicedeskapi/servicedesk/\\{serviceDeskId\\}/attachTemporaryFile](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-attachtemporaryfile-post)), with the visibility set by &#x60;public&#x60;. See   *  GET [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-attachment-get)  *  GET [servicedeskapi/request/\\{issueIdOrKey\\}/comment/\\{commentId\\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-comment-commentid-attachment-get)  **[Permissions](#permissions) required**: Permission to add an attachment.  **Request limitations**: Customers can set public visibility only.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { CreateCommentWithAttachmentRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to which the attachment will be added.
    issueIdOrKey: issueIdOrKey_example,
    // AttachmentCreateDTO
    attachmentCreateDTO: {"additionalComment":{"body":"Please find the screenshot and the log file attached."},"public":true,"temporaryAttachmentIds":["temp910441317820424274","temp3600755449679003114"]},
  } satisfies CreateCommentWithAttachmentRequest;

  try {
    const data = await api.createCommentWithAttachment(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to which the attachment will be added. | [Defaults to `undefined`] |
| **attachmentCreateDTO** | [AttachmentCreateDTO](AttachmentCreateDTO.md) |  | |

### Return type

[**AttachmentCreateResultDTO**](AttachmentCreateResultDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the attachments and comment. |  -  |
| **400** | Returned if the HTTP request is invalid, including missing the required &#x60;public&#x60; field or list of temporary file IDs, or if the temporary files have expired. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCustomerRequest

> CustomerRequestDTO createCustomerRequest(requestCreateDTO)

Create customer request

This method creates a customer request in a service desk.  The JSON request must include the service desk and customer request type, as well as any fields that are required for the request type. A list of the fields required by a customer request type can be obtained using [servicedesk/\\{serviceDeskId\\}/requesttype/\\{requestTypeId\\}/field](#api-servicedesk-serviceDeskId-requesttype-requestTypeId-field-get).  The fields required for a customer request type depend on the user\&#39;s permissions:   *  &#x60;raiseOnBehalfOf&#x60; is not available to Users who have the customer permission only.  *  &#x60;requestParticipants&#x60; is not available to Users who have the customer permission only or if the feature is turned off for customers.  &#x60;requestFieldValues&#x60; is a map of Jira field IDs and their values. See [Field input formats](#fieldformats), for details of each field\&#39;s JSON semantics and the values they can take.  **[Permissions](#permissions) required**: Permission to create requests in the specified service desk.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { CreateCustomerRequestRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // RequestCreateDTO
    requestCreateDTO: {"form":{"answers":{"1":{"text":"Answer to a text form field"},"2":{"date":"2023-07-06"},"3":{"time":"14:35"},"4":{"choices":["5"]},"5":{"users":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"]}}},"isAdfRequest":false,"requestFieldValues":{"description":"I need a new *mouse* for my Mac","summary":"Request JSD help via REST"},"requestParticipants":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"],"requestTypeId":"25","serviceDeskId":"10"},
  } satisfies CreateCustomerRequestRequest;

  try {
    const data = await api.createCustomerRequest(body);
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
| **requestCreateDTO** | [RequestCreateDTO](RequestCreateDTO.md) |  | |

### Return type

[**CustomerRequestDTO**](CustomerRequestDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the customer request was created. |  -  |
| **400** | Returned if the HTTP request call is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequestComment

> CommentDTO createRequestComment(issueIdOrKey, commentCreateDTO)

Create request comment

This method creates a public or private (internal) comment on a customer request, with the comment visibility set by &#x60;public&#x60;. The user recorded as the author of the comment.  **[Permissions](#permissions) required**: User has Add Comments permission.  **Request limitations**: Customers can set comments to public visibility only.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { CreateRequestCommentRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to which the comment will be added.
    issueIdOrKey: issueIdOrKey_example,
    // CommentCreateDTO
    commentCreateDTO: {"body":"Hello there","public":true},
  } satisfies CreateRequestCommentRequest;

  try {
    const data = await api.createRequestComment(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to which the comment will be added. | [Defaults to `undefined`] |
| **commentCreateDTO** | [CommentCreateDTO](CommentCreateDTO.md) |  | |

### Return type

[**CommentDTO**](CommentDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the comment. |  -  |
| **400** | Returned if the HTTP request is invalid, e.g. missing the required &#x60;public&#x60;. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFeedback

> any deleteFeedback(requestIdOrKey)

Delete feedback

This method deletes the feedback of request using it\&#39;s &#x60;requestKey&#x60; or &#x60;requestId&#x60;  **[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { DeleteFeedbackRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The id or the key of the request to post the feedback on
    requestIdOrKey: requestIdOrKey_example,
  } satisfies DeleteFeedbackRequest;

  try {
    const data = await api.deleteFeedback(body);
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
| **requestIdOrKey** | `string` | The id or the key of the request to post the feedback on | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No content. |  -  |
| **401** | Returned if no logged in user/app. |  -  |
| **403** | Returned if the user/app does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApprovalById

> ApprovalDTO getApprovalById(issueIdOrKey, approvalId)

Get approval by id

This method returns an approval. Use this method to determine the status of an approval and the list of approvers.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetApprovalByIdRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request the approval is on.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the approval to be returned.
    approvalId: 56,
  } satisfies GetApprovalByIdRequest;

  try {
    const data = await api.getApprovalById(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request the approval is on. | [Defaults to `undefined`] |
| **approvalId** | `number` | The ID of the approval to be returned. | [Defaults to `undefined`] |

### Return type

[**ApprovalDTO**](ApprovalDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested approval. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request or approval do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApprovals

> PagedDTOApprovalDTO getApprovals(issueIdOrKey, start, limit)

Get approvals

This method returns all approvals on a customer request.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetApprovalsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be queried for its approvals.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of approvals to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetApprovalsRequest;

  try {
    const data = await api.getApprovals(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be queried for its approvals. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of approvals to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOApprovalDTO**](PagedDTOApprovalDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request\&#39;s approvals. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentContent

> any getAttachmentContent(issueIdOrKey, attachmentId)

Get attachment content

Returns the contents of an attachment.  To return a thumbnail of the attachment, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment/\\{attachmentId\\}/thumbnail](./#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-thumbnail-get).  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetAttachmentContentRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key for the customer request the attachment is associated with
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID for the attachment
    attachmentId: 789,
  } satisfies GetAttachmentContentRequest;

  try {
    const data = await api.getAttachmentContent(body);
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
| **issueIdOrKey** | `string` | The ID or key for the customer request the attachment is associated with | [Defaults to `undefined`] |
| **attachmentId** | `number` | The ID for the attachment | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **303** | Returned if the request is successful. See the &#x60;Location&#x60; header for the download URL. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | The user does not have the necessary permission. |  -  |
| **404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentThumbnail

> any getAttachmentThumbnail(issueIdOrKey, attachmentId)

Get attachment thumbnail

Returns the thumbnail of an attachment.  To return the attachment contents, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment/\\{attachmentId\\}](#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-get).  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetAttachmentThumbnailRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key for the customer request the attachment is associated with
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the attachment.
    attachmentId: 789,
  } satisfies GetAttachmentThumbnailRequest;

  try {
    const data = await api.getAttachmentThumbnail(body);
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
| **issueIdOrKey** | `string` | The ID or key for the customer request the attachment is associated with | [Defaults to `undefined`] |
| **attachmentId** | `number` | The ID of the attachment. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **303** | Returned if the request is successful. See the &#x60;Location&#x60; header for the download URL. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | The user does not have the necessary permission. |  -  |
| **404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentsForRequest

> PagedDTOAttachmentDTO getAttachmentsForRequest(issueIdOrKey, start, limit)

Get attachments for request

This method returns all the attachments for a customer requests.  **[Permissions](#permissions) required**: Permission to view the customer request.  **Response limitations**: Customers will only get a list of public attachments.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetAttachmentsForRequestRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request from which the attachments will be listed.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned attachment. Base index: 0. See the [Pagination](#pagination) section for more details.
    start: 56,
    // number | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.
    limit: 56,
  } satisfies GetAttachmentsForRequestRequest;

  try {
    const data = await api.getAttachmentsForRequest(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request from which the attachments will be listed. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned attachment. Base index: 0. See the [Pagination](#pagination) section for more details. | [Defaults to `0`] |
| **limit** | `number` | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Defaults to `50`] |

### Return type

[**PagedDTOAttachmentDTO**](PagedDTOAttachmentDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the visible attachments from the customer request. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentAttachments

> PagedDTOAttachmentDTO getCommentAttachments(issueIdOrKey, commentId, start, limit)

Get comment attachments

This method returns the attachments referenced in a comment.  **[Permissions](#permissions) required**: Permission to view the customer request.  **Response limitations**: Customers can only view public comments, and retrieve their attachments, on requests where they are the reporter or a participant whereas agents can see both internal and public comments.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetCommentAttachmentsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request that contains the comment.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the comment.
    commentId: 789,
    // number | The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetCommentAttachmentsRequest;

  try {
    const data = await api.getCommentAttachments(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request that contains the comment. | [Defaults to `undefined`] |
| **commentId** | `number` | The ID of the comment. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOAttachmentDTO**](PagedDTOAttachmentDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the attachments, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request or the comment do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerRequestByIdOrKey

> CustomerRequestDTO getCustomerRequestByIdOrKey(issueIdOrKey, expand)

Get customer request by id or key

This method returns a customer request.  **[Permissions](#permissions) required**: Permission to access the specified service desk.  **Response limitations**: For customers, only a request they created, was created on their behalf, or they are participating in will be returned.  **Note:** &#x60;requestFieldValues&#x60; does not include hidden fields. To get a list of request type fields that includes hidden fields, see [/rest/servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype/\\{requestTypeId\\}/field](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-requesttype-requesttypeid-field-get)

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetCustomerRequestByIdOrKeyRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or Key of the customer request to be returned
    issueIdOrKey: issueIdOrKey_example,
    // Array<string> | A multi-value parameter indicating which properties of the customer request to expand, where:   *  `serviceDesk` returns additional service desk details.  *  `requestType` returns additional customer request type details.  *  `participant` returns the participant details.  *  `sla` returns the SLA information.  *  `status` returns the status transitions, in chronological order.  *  `attachment` returns the attachments.  *  `action` returns the actions that the user can or cannot perform.  *  `comment` returns the comments.  *  `comment.attachment` returns the attachment details for each comment.  *  `comment.renderedBody` (Experimental) return the rendered body in HTML format (in addition to the raw body) for each comment. (optional)
    expand: ...,
  } satisfies GetCustomerRequestByIdOrKeyRequest;

  try {
    const data = await api.getCustomerRequestByIdOrKey(body);
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
| **issueIdOrKey** | `string` | The ID or Key of the customer request to be returned | [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the customer request to expand, where:   *  &#x60;serviceDesk&#x60; returns additional service desk details.  *  &#x60;requestType&#x60; returns additional customer request type details.  *  &#x60;participant&#x60; returns the participant details.  *  &#x60;sla&#x60; returns the SLA information.  *  &#x60;status&#x60; returns the status transitions, in chronological order.  *  &#x60;attachment&#x60; returns the attachments.  *  &#x60;action&#x60; returns the actions that the user can or cannot perform.  *  &#x60;comment&#x60; returns the comments.  *  &#x60;comment.attachment&#x60; returns the attachment details for each comment.  *  &#x60;comment.renderedBody&#x60; (Experimental) return the rendered body in HTML format (in addition to the raw body) for each comment. | [Optional] |

### Return type

[**CustomerRequestDTO**](CustomerRequestDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerRequestStatus

> PagedDTOCustomerRequestStatusDTO getCustomerRequestStatus(issueIdOrKey, start, limit)

Get customer request status

This method returns a list of all the statuses a customer Request has achieved. A status represents the state of an issue in its workflow. An issue can have one active status only. The list returns the status history in chronological order, most recent (current) status first.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetCustomerRequestStatusRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be retrieved.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetCustomerRequestStatusRequest;

  try {
    const data = await api.getCustomerRequestStatus(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be retrieved. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOCustomerRequestStatusDTO**](PagedDTOCustomerRequestStatusDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request\&#39;s status history, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request is not found. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerRequests

> PagedDTOCustomerRequestDTO getCustomerRequests(searchTerm, requestOwnership, requestStatus, approvalStatus, organizationId, serviceDeskId, requestTypeId, expand, start, limit)

Get customer requests

This method returns all customer requests for the user executing the query.  The returned customer requests are ordered chronologically by the latest activity on each request. For example, the latest status transition or comment.  **[Permissions](#permissions) required**: Permission to access the specified service desk.  **Response limitations**: For customers, the list returned will include request they created (or were created on their behalf) or are participating in only.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetCustomerRequestsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | Filters customer requests where the request summary matches the `searchTerm`. [Wildcards](https://confluence.atlassian.com/display/JIRACORECLOUD/Search+syntax+for+text+fields) can be used in the `searchTerm` parameter. (optional)
    searchTerm: searchTerm_example,
    // Array<string> | Filters customer requests using the following values:   *  `OWNED_REQUESTS` returns customer requests where the user is the creator.  *  `PARTICIPATED_REQUESTS` returns customer requests where the user is a participant.  *  `ORGANIZATION` returns customer requests for an organization of which the user is a member when used in conjunction with `organizationId`.  *  `ALL_ORGANIZATIONS` returns customer requests that belong to all organizations of which the user is a member.  *  `APPROVER` returns customer requests where the user is an approver. Can be used in conjunction with `approvalStatus` to filter pending or complete approvals.  *  `ALL_REQUESTS` returns all customer requests. **Deprecated and will be removed, as the returned requests may change if more values are added in the future. Instead, explicitly list the desired filtering strategies.**  Multiple values of the query parameter are supported. For example, `requestOwnership=OWNED_REQUESTS&requestOwnership=PARTICIPATED_REQUESTS` will only return customer requests where the user is the creator or a participant. If not specified, filtering defaults to `OWNED_REQUESTS`, `PARTICIPATED_REQUESTS`, and `ALL_ORGANIZATIONS`. (optional)
    requestOwnership: ...,
    // string | Filters customer requests where the request is closed, open, or either of the two where:   *  `CLOSED_REQUESTS` returns customer requests that are closed.  *  `OPEN_REQUESTS` returns customer requests that are open.  *  `ALL_REQUESTS` returns all customer requests. (optional)
    requestStatus: requestStatus_example,
    // string | Filters results to customer requests based on their approval status:   *  `MY_PENDING_APPROVAL` returns customer requests pending the user\'s approval.  *  `MY_HISTORY_APPROVAL` returns customer requests where the user was an approver.  **Note**: Valid only when used with requestOwnership=APPROVER. (optional)
    approvalStatus: approvalStatus_example,
    // number | Filters customer requests that belong to a specific organization (note that the user must be a member of that organization). **Note**: Valid only when used with requestOwnership=ORGANIZATION. (optional)
    organizationId: 56,
    // number | Filters customer requests by service desk. (optional)
    serviceDeskId: 56,
    // number | Filters customer requests by request type. Note that the `serviceDeskId` must be specified for the service desk in which the request type belongs. (optional)
    requestTypeId: 56,
    // Array<string> | A multi-value parameter indicating which properties of the customer request to expand, where:   *  `serviceDesk` returns additional details for each service desk.  *  `requestType` returns additional details for each request type.  *  `participant` returns the participant details, if any, for each customer request.  *  `sla` returns the SLA information on each customer request.  *  `status` returns the status transitions, in chronological order, for each customer request.  *  `attachment` returns the attachments for the customer request.  *  `action` returns the actions that the user can or cannot perform on this customer request.  *  `comment` returns the comments, if any, for each customer request.  *  `comment.attachment` returns the attachment details, if any, for each comment.  *  `comment.renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment. (optional)
    expand: ...,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetCustomerRequestsRequest;

  try {
    const data = await api.getCustomerRequests(body);
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
| **searchTerm** | `string` | Filters customer requests where the request summary matches the &#x60;searchTerm&#x60;. [Wildcards](https://confluence.atlassian.com/display/JIRACORECLOUD/Search+syntax+for+text+fields) can be used in the &#x60;searchTerm&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **requestOwnership** | `Array<string>` | Filters customer requests using the following values:   *  &#x60;OWNED_REQUESTS&#x60; returns customer requests where the user is the creator.  *  &#x60;PARTICIPATED_REQUESTS&#x60; returns customer requests where the user is a participant.  *  &#x60;ORGANIZATION&#x60; returns customer requests for an organization of which the user is a member when used in conjunction with &#x60;organizationId&#x60;.  *  &#x60;ALL_ORGANIZATIONS&#x60; returns customer requests that belong to all organizations of which the user is a member.  *  &#x60;APPROVER&#x60; returns customer requests where the user is an approver. Can be used in conjunction with &#x60;approvalStatus&#x60; to filter pending or complete approvals.  *  &#x60;ALL_REQUESTS&#x60; returns all customer requests. **Deprecated and will be removed, as the returned requests may change if more values are added in the future. Instead, explicitly list the desired filtering strategies.**  Multiple values of the query parameter are supported. For example, &#x60;requestOwnership&#x3D;OWNED_REQUESTS&amp;requestOwnership&#x3D;PARTICIPATED_REQUESTS&#x60; will only return customer requests where the user is the creator or a participant. If not specified, filtering defaults to &#x60;OWNED_REQUESTS&#x60;, &#x60;PARTICIPATED_REQUESTS&#x60;, and &#x60;ALL_ORGANIZATIONS&#x60;. | [Optional] |
| **requestStatus** | `string` | Filters customer requests where the request is closed, open, or either of the two where:   *  &#x60;CLOSED_REQUESTS&#x60; returns customer requests that are closed.  *  &#x60;OPEN_REQUESTS&#x60; returns customer requests that are open.  *  &#x60;ALL_REQUESTS&#x60; returns all customer requests. | [Optional] [Defaults to `undefined`] |
| **approvalStatus** | `string` | Filters results to customer requests based on their approval status:   *  &#x60;MY_PENDING_APPROVAL&#x60; returns customer requests pending the user\&#39;s approval.  *  &#x60;MY_HISTORY_APPROVAL&#x60; returns customer requests where the user was an approver.  **Note**: Valid only when used with requestOwnership&#x3D;APPROVER. | [Optional] [Defaults to `undefined`] |
| **organizationId** | `number` | Filters customer requests that belong to a specific organization (note that the user must be a member of that organization). **Note**: Valid only when used with requestOwnership&#x3D;ORGANIZATION. | [Optional] [Defaults to `undefined`] |
| **serviceDeskId** | `number` | Filters customer requests by service desk. | [Optional] [Defaults to `undefined`] |
| **requestTypeId** | `number` | Filters customer requests by request type. Note that the &#x60;serviceDeskId&#x60; must be specified for the service desk in which the request type belongs. | [Optional] [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the customer request to expand, where:   *  &#x60;serviceDesk&#x60; returns additional details for each service desk.  *  &#x60;requestType&#x60; returns additional details for each request type.  *  &#x60;participant&#x60; returns the participant details, if any, for each customer request.  *  &#x60;sla&#x60; returns the SLA information on each customer request.  *  &#x60;status&#x60; returns the status transitions, in chronological order, for each customer request.  *  &#x60;attachment&#x60; returns the attachments for the customer request.  *  &#x60;action&#x60; returns the actions that the user can or cannot perform on this customer request.  *  &#x60;comment&#x60; returns the comments, if any, for each customer request.  *  &#x60;comment.attachment&#x60; returns the attachment details, if any, for each comment.  *  &#x60;comment.renderedBody&#x60; (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment. | [Optional] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOCustomerRequestDTO**](PagedDTOCustomerRequestDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer requests, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **404** | Returned if the user does not have permission to access the service desk, the service desk does not exist, or the service desk does not support the request type. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerTransitions

> PagedDTOCustomerTransitionDTO getCustomerTransitions(issueIdOrKey, start, limit)

Get customer transitions

This method returns a list of transitions, the workflow processes that moves a customer request from one status to another, that the user can perform on a request. Use this method to provide a user with a list if the actions they can take on a customer request.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetCustomerTransitionsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request whose transitions will be retrieved.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetCustomerTransitionsRequest;

  try {
    const data = await api.getCustomerTransitions(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request whose transitions will be retrieved. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOCustomerTransitionDTO**](PagedDTOCustomerTransitionDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the transitions available to the user on the customer request. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFeedback

> CSATFeedbackFullDTO getFeedback(requestIdOrKey)

Get feedback

This method retrieves a feedback of a request using it\&#39;s &#x60;requestKey&#x60; or &#x60;requestId&#x60;  **[Permissions](#permissions) required**: User has view request permissions.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetFeedbackRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The id or the key of the request to post the feedback on
    requestIdOrKey: requestIdOrKey_example,
  } satisfies GetFeedbackRequest;

  try {
    const data = await api.getFeedback(body);
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
| **requestIdOrKey** | `string` | The id or the key of the request to post the feedback on | [Defaults to `undefined`] |

### Return type

[**CSATFeedbackFullDTO**](CSATFeedbackFullDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the comment. |  -  |
| **400** | Returned if the HTTP request is invalid. |  -  |
| **401** | Returned if no logged in user/app. |  -  |
| **403** | Returned if the user/app does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestCommentById

> CommentDTO getRequestCommentById(issueIdOrKey, commentId, expand)

Get request comment by id

This method returns details of a customer request\&#39;s comment.  **[Permissions](#permissions) required**: Permission to view the customer request.  **Response limitations**: Customers can only view public comments on requests where they are the reporter or a participant whereas agents can see both internal and public comments.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestCommentByIdRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request that contains the comment.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the comment to retrieve.
    commentId: 789,
    // Array<string> | A multi-value parameter indicating which properties of the comment to expand:   *  `attachment` returns the attachment details, if any, for the comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)  *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) of the comment. (optional)
    expand: ...,
  } satisfies GetRequestCommentByIdRequest;

  try {
    const data = await api.getRequestCommentById(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request that contains the comment. | [Defaults to `undefined`] |
| **commentId** | `number` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the comment to expand:   *  &#x60;attachment&#x60; returns the attachment details, if any, for the comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)  *  &#x60;renderedBody&#x60; (Experimental) returns the rendered body in HTML format (in addition to the raw body) of the comment. | [Optional] |

### Return type

[**CommentDTO**](CommentDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the comment. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request or comment do not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestComments

> PagedDTOCommentDTO getRequestComments(issueIdOrKey, _public, internal, expand, start, limit)

Get request comments

This method returns all comments on a customer request. No permissions error is provided if, for example, the user doesn\&#39;t have access to the service desk or request, the method simply returns an empty response.  **[Permissions](#permissions) required**: Permission to view the customer request.  **Response limitations**: Customers are returned public comments only.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestCommentsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request whose comments will be retrieved.
    issueIdOrKey: issueIdOrKey_example,
    // boolean | Specifies whether to return public comments or not. Default: true. (optional)
    _public: true,
    // boolean | Specifies whether to return internal comments or not. Default: true. (optional)
    internal: true,
    // Array<string> | A multi-value parameter indicating which properties of the comment to expand:   *  `attachment` returns the attachment details, if any, for each comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)  *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment. (optional)
    expand: ...,
    // number | The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetRequestCommentsRequest;

  try {
    const data = await api.getRequestComments(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request whose comments will be retrieved. | [Defaults to `undefined`] |
| **_public** | `boolean` | Specifies whether to return public comments or not. Default: true. | [Optional] [Defaults to `undefined`] |
| **internal** | `boolean` | Specifies whether to return internal comments or not. Default: true. | [Optional] [Defaults to `undefined`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the comment to expand:   *  &#x60;attachment&#x60; returns the attachment details, if any, for each comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)  *  &#x60;renderedBody&#x60; (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment. | [Optional] |
| **start** | `number` | The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOCommentDTO**](PagedDTOCommentDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the comments, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequestParticipants

> PagedDTOUserDTO getRequestParticipants(issueIdOrKey, start, limit)

Get request participants

This method returns a list of all the participants on a customer request.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetRequestParticipantsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be queried for its participants.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetRequestParticipantsRequest;

  try {
    const data = await api.getRequestParticipants(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be queried for its participants. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOUserDTO**](PagedDTOUserDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the customer request\&#39;s participants, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSlaInformation

> PagedDTOSlaInformationDTO getSlaInformation(issueIdOrKey, start, limit)

Get sla information

This method returns all the SLA records on a customer request. A customer request can have zero or more SLAs. Each SLA can have recordings for zero or more \&quot;completed cycles\&quot; and zero or 1 \&quot;ongoing cycle\&quot;. Each cycle includes information on when it started and stopped, and whether it breached the SLA goal.  **[Permissions](#permissions) required**: Agent for the Service Desk containing the queried customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetSlaInformationRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request whose SLAs will be retrieved.
    issueIdOrKey: issueIdOrKey_example,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetSlaInformationRequest;

  try {
    const data = await api.getSlaInformation(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request whose SLAs will be retrieved. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTOSlaInformationDTO**](PagedDTOSlaInformationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the SLA records on the customer request, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSlaInformationById

> SlaInformationDTO getSlaInformationById(issueIdOrKey, slaMetricId)

Get sla information by id

This method returns the details for an SLA on a customer request.  **[Permissions](#permissions) required**: Agent for the Service Desk containing the queried customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetSlaInformationByIdRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request whose SLAs will be retrieved.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID or key of the SLAs metric to be retrieved.
    slaMetricId: 789,
  } satisfies GetSlaInformationByIdRequest;

  try {
    const data = await api.getSlaInformationById(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request whose SLAs will be retrieved. | [Defaults to `undefined`] |
| **slaMetricId** | `number` | The ID or key of the SLAs metric to be retrieved. | [Defaults to `undefined`] |

### Return type

[**SlaInformationDTO**](SlaInformationDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the SLA record, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubscriptionStatus

> RequestNotificationSubscriptionDTO getSubscriptionStatus(issueIdOrKey)

Get subscription status

This method returns the notification subscription status of the user making the request. Use this method to determine if the user is subscribed to a customer request\&#39;s notifications.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { GetSubscriptionStatusRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be queried for subscription status.
    issueIdOrKey: issueIdOrKey_example,
  } satisfies GetSubscriptionStatusRequest;

  try {
    const data = await api.getSubscriptionStatus(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be queried for subscription status. | [Defaults to `undefined`] |

### Return type

[**RequestNotificationSubscriptionDTO**](RequestNotificationSubscriptionDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the status of the notification subscription. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## performCustomerTransition

> performCustomerTransition(issueIdOrKey, customerTransitionExecutionDTO)

Perform customer transition

This method performs a customer transition for a given request and transition. An optional comment can be included to provide a reason for the transition.  **[Permissions](#permissions) required**: The user must be able to view the request and have the Transition Issues permission. If a comment is passed the user must have the Add Comments permission.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { PerformCustomerTransitionRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | ID or key of the issue to transition
    issueIdOrKey: issueIdOrKey_example,
    // CustomerTransitionExecutionDTO
    customerTransitionExecutionDTO: {"additionalComment":{"body":"I have fixed the problem."},"id":"1"},
  } satisfies PerformCustomerTransitionRequest;

  try {
    const data = await api.performCustomerTransition(body);
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
| **issueIdOrKey** | `string` | ID or key of the issue to transition | [Defaults to `undefined`] |
| **customerTransitionExecutionDTO** | [CustomerTransitionExecutionDTO](CustomerTransitionExecutionDTO.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is transitioned. |  -  |
| **400** | Returned if the transition ID is invalid or the comment is too long. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postFeedback

> CSATFeedbackFullDTO postFeedback(requestIdOrKey, cSATFeedbackFullDTO)

Post feedback

This method adds a feedback on an request using it\&#39;s &#x60;requestKey&#x60; or &#x60;requestId&#x60;  **[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { PostFeedbackRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The id or the key of the request to post the feedback on
    requestIdOrKey: requestIdOrKey_example,
    // CSATFeedbackFullDTO | The feedback to be added on the request
    cSATFeedbackFullDTO: {"comment":{"body":"Great work!"},"rating":4,"type":"csat"},
  } satisfies PostFeedbackRequest;

  try {
    const data = await api.postFeedback(body);
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
| **requestIdOrKey** | `string` | The id or the key of the request to post the feedback on | [Defaults to `undefined`] |
| **cSATFeedbackFullDTO** | [CSATFeedbackFullDTO](CSATFeedbackFullDTO.md) | The feedback to be added on the request | |

### Return type

[**CSATFeedbackFullDTO**](CSATFeedbackFullDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the comment. |  -  |
| **400** | Returned if the HTTP request is invalid. |  -  |
| **401** | Returned if no logged in user/app. |  -  |
| **403** | Returned if the user/app does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeRequestParticipants

> PagedDTOUserDTO removeRequestParticipants(issueIdOrKey, requestParticipantUpdateDTO)

Remove request participants

This method removes participants from a customer request.  **[Permissions](#permissions) required**: Permission to manage participants on the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { RemoveRequestParticipantsRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to have participants removed.
    issueIdOrKey: issueIdOrKey_example,
    // RequestParticipantUpdateDTO
    requestParticipantUpdateDTO: {"accountIds":[],"usernames":["qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae"]},
  } satisfies RemoveRequestParticipantsRequest;

  try {
    const data = await api.removeRequestParticipants(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to have participants removed. | [Defaults to `undefined`] |
| **requestParticipantUpdateDTO** | [RequestParticipantUpdateDTO](RequestParticipantUpdateDTO.md) |  | |

### Return type

[**PagedDTOUserDTO**](PagedDTOUserDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the first page of the customer request\&#39;s participants (after removal of the users). |  -  |
| **400** | Returned if any user to be removed as a participant does not exist, is not a participant in the customer request, or is the reporter of the request. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## subscribe

> subscribe(issueIdOrKey)

Subscribe

This method subscribes the user to receiving notifications from a customer request.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { SubscribeRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be subscribed to.
    issueIdOrKey: issueIdOrKey_example,
  } satisfies SubscribeRequest;

  try {
    const data = await api.subscribe(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be subscribed to. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returns if the user was subscribed. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unsubscribe

> unsubscribe(issueIdOrKey)

Unsubscribe

This method unsubscribes the user from notifications from a customer request.  **[Permissions](#permissions) required**: Permission to view the customer request.

### Example

```ts
import {
  Configuration,
  RequestApi,
} from 'jira-cloud-service-management-api';
import type { UnsubscribeRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequestApi(config);

  const body = {
    // string | The ID or key of the customer request to be unsubscribed from.
    issueIdOrKey: issueIdOrKey_example,
  } satisfies UnsubscribeRequest;

  try {
    const data = await api.unsubscribe(body);
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
| **issueIdOrKey** | `string` | The ID or key of the customer request to be unsubscribed from. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returns if the user was unsubscribed. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **404** | Returned if the customer request does not exist. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

