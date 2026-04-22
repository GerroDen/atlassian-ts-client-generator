# jira-cloud-service-management-api@1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b

A TypeScript SDK client for the your-domain.atlassian.net API.

## Usage

First, install the SDK from npm.

```bash
npm install jira-cloud-service-management-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  AssetsApi,
} from 'jira-cloud-service-management-api';
import type { GetAssetsWorkspacesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AssetsApi(config);

  const body = {
    // number | The starting index of the returned workspace IDs. Base index: 0 See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of workspace IDs to return per page. Default: 50 See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetAssetsWorkspacesRequest;

  try {
    const data = await api.getAssetsWorkspaces(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://your-domain.atlassian.net*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AssetsApi* | [**getAssetsWorkspaces**](docs/AssetsApi.md#getassetsworkspaces) | **GET** /rest/servicedeskapi/assets/workspace | Get assets workspaces
*AssetsApi* | [**getInsightWorkspaces**](docs/AssetsApi.md#getinsightworkspaces) | **GET** /rest/servicedeskapi/insight/workspace | Get insight workspaces
*CustomerApi* | [**createCustomer**](docs/CustomerApi.md#createcustomer) | **POST** /rest/servicedeskapi/customer | Create customer
*CustomerApi* | [**revokePortalOnlyAccessForUser**](docs/CustomerApi.md#revokeportalonlyaccessforuser) | **PUT** /rest/servicedeskapi/customer/user/{accountId}/revoke-portal-only-access | Revoke portal only access for user
*InfoApi* | [**getInfo**](docs/InfoApi.md#getinfo) | **GET** /rest/servicedeskapi/info | Get info
*KnowledgebaseApi* | [**getArticles**](docs/KnowledgebaseApi.md#getarticles) | **GET** /rest/servicedeskapi/knowledgebase/article | Get articles
*OrganizationApi* | [**addOrganization**](docs/OrganizationApi.md#addorganization) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Add organization
*OrganizationApi* | [**addUsersToOrganization**](docs/OrganizationApi.md#adduserstoorganization) | **POST** /rest/servicedeskapi/organization/{organizationId}/user | Add users to organization
*OrganizationApi* | [**createOrganization**](docs/OrganizationApi.md#createorganization) | **POST** /rest/servicedeskapi/organization | Create organization
*OrganizationApi* | [**deleteOrganization**](docs/OrganizationApi.md#deleteorganization) | **DELETE** /rest/servicedeskapi/organization/{organizationId} | Delete organization
*OrganizationApi* | [**deleteProperty**](docs/OrganizationApi.md#deleteproperty) | **DELETE** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Delete property
*OrganizationApi* | [**getOrganization**](docs/OrganizationApi.md#getorganization) | **GET** /rest/servicedeskapi/organization/{organizationId} | Get organization
*OrganizationApi* | [**getOrganizations**](docs/OrganizationApi.md#getorganizations) | **GET** /rest/servicedeskapi/organization | Get organizations
*OrganizationApi* | [**getOrganizations_0**](docs/OrganizationApi.md#getorganizations_0) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Get organizations
*OrganizationApi* | [**getPropertiesKeys**](docs/OrganizationApi.md#getpropertieskeys) | **GET** /rest/servicedeskapi/organization/{organizationId}/property | Get properties keys
*OrganizationApi* | [**getProperty**](docs/OrganizationApi.md#getproperty) | **GET** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Get property
*OrganizationApi* | [**getUsersInOrganization**](docs/OrganizationApi.md#getusersinorganization) | **GET** /rest/servicedeskapi/organization/{organizationId}/user | Get users in organization
*OrganizationApi* | [**removeOrganization**](docs/OrganizationApi.md#removeorganization) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/organization | Remove organization
*OrganizationApi* | [**removeUsersFromOrganization**](docs/OrganizationApi.md#removeusersfromorganization) | **DELETE** /rest/servicedeskapi/organization/{organizationId}/user | Remove users from organization
*OrganizationApi* | [**setProperty**](docs/OrganizationApi.md#setproperty) | **PUT** /rest/servicedeskapi/organization/{organizationId}/property/{propertyKey} | Set property
*RequestApi* | [**addRequestParticipants**](docs/RequestApi.md#addrequestparticipants) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Add request participants
*RequestApi* | [**answerApproval**](docs/RequestApi.md#answerapproval) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId} | Answer approval
*RequestApi* | [**createCommentWithAttachment**](docs/RequestApi.md#createcommentwithattachment) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/attachment | Create comment with attachment
*RequestApi* | [**createCustomerRequest**](docs/RequestApi.md#createcustomerrequest) | **POST** /rest/servicedeskapi/request | Create customer request
*RequestApi* | [**createRequestComment**](docs/RequestApi.md#createrequestcomment) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/comment | Create request comment
*RequestApi* | [**deleteFeedback**](docs/RequestApi.md#deletefeedback) | **DELETE** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Delete feedback
*RequestApi* | [**getApprovalById**](docs/RequestApi.md#getapprovalbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId} | Get approval by id
*RequestApi* | [**getApprovals**](docs/RequestApi.md#getapprovals) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/approval | Get approvals
*RequestApi* | [**getAttachmentContent**](docs/RequestApi.md#getattachmentcontent) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId} | Get attachment content
*RequestApi* | [**getAttachmentThumbnail**](docs/RequestApi.md#getattachmentthumbnail) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}/thumbnail | Get attachment thumbnail
*RequestApi* | [**getAttachmentsForRequest**](docs/RequestApi.md#getattachmentsforrequest) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/attachment | Get attachments for request
*RequestApi* | [**getCommentAttachments**](docs/RequestApi.md#getcommentattachments) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}/attachment | Get comment attachments
*RequestApi* | [**getCustomerRequestByIdOrKey**](docs/RequestApi.md#getcustomerrequestbyidorkey) | **GET** /rest/servicedeskapi/request/{issueIdOrKey} | Get customer request by id or key
*RequestApi* | [**getCustomerRequestStatus**](docs/RequestApi.md#getcustomerrequeststatus) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/status | Get customer request status
*RequestApi* | [**getCustomerRequests**](docs/RequestApi.md#getcustomerrequests) | **GET** /rest/servicedeskapi/request | Get customer requests
*RequestApi* | [**getCustomerTransitions**](docs/RequestApi.md#getcustomertransitions) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/transition | Get customer transitions
*RequestApi* | [**getFeedback**](docs/RequestApi.md#getfeedback) | **GET** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Get feedback
*RequestApi* | [**getRequestCommentById**](docs/RequestApi.md#getrequestcommentbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId} | Get request comment by id
*RequestApi* | [**getRequestComments**](docs/RequestApi.md#getrequestcomments) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/comment | Get request comments
*RequestApi* | [**getRequestParticipants**](docs/RequestApi.md#getrequestparticipants) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Get request participants
*RequestApi* | [**getSlaInformation**](docs/RequestApi.md#getslainformation) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/sla | Get sla information
*RequestApi* | [**getSlaInformationById**](docs/RequestApi.md#getslainformationbyid) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/sla/{slaMetricId} | Get sla information by id
*RequestApi* | [**getSubscriptionStatus**](docs/RequestApi.md#getsubscriptionstatus) | **GET** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Get subscription status
*RequestApi* | [**performCustomerTransition**](docs/RequestApi.md#performcustomertransition) | **POST** /rest/servicedeskapi/request/{issueIdOrKey}/transition | Perform customer transition
*RequestApi* | [**postFeedback**](docs/RequestApi.md#postfeedback) | **POST** /rest/servicedeskapi/request/{requestIdOrKey}/feedback | Post feedback
*RequestApi* | [**removeRequestParticipants**](docs/RequestApi.md#removerequestparticipants) | **DELETE** /rest/servicedeskapi/request/{issueIdOrKey}/participant | Remove request participants
*RequestApi* | [**subscribe**](docs/RequestApi.md#subscribe) | **PUT** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Subscribe
*RequestApi* | [**unsubscribe**](docs/RequestApi.md#unsubscribe) | **DELETE** /rest/servicedeskapi/request/{issueIdOrKey}/notification | Unsubscribe
*RequesttypeApi* | [**getAllRequestTypes**](docs/RequesttypeApi.md#getallrequesttypes) | **GET** /rest/servicedeskapi/requesttype | Get all request types
*ServicedeskApi* | [**addCustomers**](docs/ServicedeskApi.md#addcustomers) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Add customers
*ServicedeskApi* | [**attachTemporaryFile**](docs/ServicedeskApi.md#attachtemporaryfile) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/attachTemporaryFile | Attach temporary file
*ServicedeskApi* | [**checkRequestTypePermissions**](docs/ServicedeskApi.md#checkrequesttypepermissions) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/permissions/check | Check request type permissions
*ServicedeskApi* | [**createRequestType**](docs/ServicedeskApi.md#createrequesttype) | **POST** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype | Create request type
*ServicedeskApi* | [**deleteProperty**](docs/ServicedeskApi.md#deleteproperty) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Delete property
*ServicedeskApi* | [**deleteRequestType**](docs/ServicedeskApi.md#deleterequesttype) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId} | Delete request type
*ServicedeskApi* | [**getArticles**](docs/ServicedeskApi.md#getarticles) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/knowledgebase/article | Get articles
*ServicedeskApi* | [**getCustomers**](docs/ServicedeskApi.md#getcustomers) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Get customers
*ServicedeskApi* | [**getIssuesInQueue**](docs/ServicedeskApi.md#getissuesinqueue) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}/issue | Get issues in queue
*ServicedeskApi* | [**getPropertiesKeys**](docs/ServicedeskApi.md#getpropertieskeys) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property | Get properties keys
*ServicedeskApi* | [**getProperty**](docs/ServicedeskApi.md#getproperty) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Get property
*ServicedeskApi* | [**getQueue**](docs/ServicedeskApi.md#getqueue) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId} | Get queue
*ServicedeskApi* | [**getQueues**](docs/ServicedeskApi.md#getqueues) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/queue | Get queues
*ServicedeskApi* | [**getRequestTypeById**](docs/ServicedeskApi.md#getrequesttypebyid) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId} | Get request type by id
*ServicedeskApi* | [**getRequestTypeFields**](docs/ServicedeskApi.md#getrequesttypefields) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/field | Get request type fields
*ServicedeskApi* | [**getRequestTypeGroups**](docs/ServicedeskApi.md#getrequesttypegroups) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttypegroup | Get request type groups
*ServicedeskApi* | [**getRequestTypes**](docs/ServicedeskApi.md#getrequesttypes) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype | Get request types
*ServicedeskApi* | [**getServiceDeskById**](docs/ServicedeskApi.md#getservicedeskbyid) | **GET** /rest/servicedeskapi/servicedesk/{serviceDeskId} | Get service desk by id
*ServicedeskApi* | [**getServiceDesks**](docs/ServicedeskApi.md#getservicedesks) | **GET** /rest/servicedeskapi/servicedesk | Get service desks
*ServicedeskApi* | [**removeCustomers**](docs/ServicedeskApi.md#removecustomers) | **DELETE** /rest/servicedeskapi/servicedesk/{serviceDeskId}/customer | Remove customers
*ServicedeskApi* | [**setProperty**](docs/ServicedeskApi.md#setproperty) | **PUT** /rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey} | Set property


### Models

- [AdditionalCommentDTO](docs/AdditionalCommentDTO.md)
- [ApprovalDTO](docs/ApprovalDTO.md)
- [ApprovalDecisionRequestDTO](docs/ApprovalDecisionRequestDTO.md)
- [ApproverDTO](docs/ApproverDTO.md)
- [ArticleDTO](docs/ArticleDTO.md)
- [AssetsWorkspaceDTO](docs/AssetsWorkspaceDTO.md)
- [AttachmentCreateDTO](docs/AttachmentCreateDTO.md)
- [AttachmentCreateResultDTO](docs/AttachmentCreateResultDTO.md)
- [AttachmentDTO](docs/AttachmentDTO.md)
- [AttachmentLinkDTO](docs/AttachmentLinkDTO.md)
- [AvatarUrlsBean](docs/AvatarUrlsBean.md)
- [CSATFeedbackFullDTO](docs/CSATFeedbackFullDTO.md)
- [ChangeDetails](docs/ChangeDetails.md)
- [Changelog](docs/Changelog.md)
- [CommentCreateDTO](docs/CommentCreateDTO.md)
- [CommentDTO](docs/CommentDTO.md)
- [ContentDTO](docs/ContentDTO.md)
- [CustomerCreateDTO](docs/CustomerCreateDTO.md)
- [CustomerRequestActionDTO](docs/CustomerRequestActionDTO.md)
- [CustomerRequestActionsDTO](docs/CustomerRequestActionsDTO.md)
- [CustomerRequestCreateMetaDTO](docs/CustomerRequestCreateMetaDTO.md)
- [CustomerRequestDTO](docs/CustomerRequestDTO.md)
- [CustomerRequestFieldValueDTO](docs/CustomerRequestFieldValueDTO.md)
- [CustomerRequestLinkDTO](docs/CustomerRequestLinkDTO.md)
- [CustomerRequestStatusDTO](docs/CustomerRequestStatusDTO.md)
- [CustomerTransitionDTO](docs/CustomerTransitionDTO.md)
- [CustomerTransitionExecutionDTO](docs/CustomerTransitionExecutionDTO.md)
- [DateDTO](docs/DateDTO.md)
- [DurationDTO](docs/DurationDTO.md)
- [EntityProperty](docs/EntityProperty.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [Expandable](docs/Expandable.md)
- [FieldMetadata](docs/FieldMetadata.md)
- [Form](docs/Form.md)
- [FormAnswer](docs/FormAnswer.md)
- [HistoryMetadata](docs/HistoryMetadata.md)
- [HistoryMetadataParticipant](docs/HistoryMetadataParticipant.md)
- [I18nErrorMessage](docs/I18nErrorMessage.md)
- [IncludedFields](docs/IncludedFields.md)
- [InputStreamSource](docs/InputStreamSource.md)
- [InsightWorkspaceDTO](docs/InsightWorkspaceDTO.md)
- [IssueBean](docs/IssueBean.md)
- [IssueTransition](docs/IssueTransition.md)
- [IssueUpdateMetadata](docs/IssueUpdateMetadata.md)
- [JsonNode](docs/JsonNode.md)
- [JsonTypeBean](docs/JsonTypeBean.md)
- [LinkGroup](docs/LinkGroup.md)
- [Linkable](docs/Linkable.md)
- [LinkableAttachmentLinkDTO](docs/LinkableAttachmentLinkDTO.md)
- [LinkableCustomerRequestLinkDTO](docs/LinkableCustomerRequestLinkDTO.md)
- [LinkableUserLinkDTO](docs/LinkableUserLinkDTO.md)
- [Operations](docs/Operations.md)
- [OrganizationCreateDTO](docs/OrganizationCreateDTO.md)
- [OrganizationDTO](docs/OrganizationDTO.md)
- [OrganizationServiceDeskUpdateDTO](docs/OrganizationServiceDeskUpdateDTO.md)
- [PageOfChangelogs](docs/PageOfChangelogs.md)
- [PagedDTOApprovalDTO](docs/PagedDTOApprovalDTO.md)
- [PagedDTOArticleDTO](docs/PagedDTOArticleDTO.md)
- [PagedDTOAssetsWorkspaceDTO](docs/PagedDTOAssetsWorkspaceDTO.md)
- [PagedDTOAttachmentDTO](docs/PagedDTOAttachmentDTO.md)
- [PagedDTOCommentDTO](docs/PagedDTOCommentDTO.md)
- [PagedDTOCustomerRequestDTO](docs/PagedDTOCustomerRequestDTO.md)
- [PagedDTOCustomerRequestStatusDTO](docs/PagedDTOCustomerRequestStatusDTO.md)
- [PagedDTOCustomerTransitionDTO](docs/PagedDTOCustomerTransitionDTO.md)
- [PagedDTOInsightWorkspaceDTO](docs/PagedDTOInsightWorkspaceDTO.md)
- [PagedDTOIssueBean](docs/PagedDTOIssueBean.md)
- [PagedDTOOrganizationDTO](docs/PagedDTOOrganizationDTO.md)
- [PagedDTOQueueDTO](docs/PagedDTOQueueDTO.md)
- [PagedDTORequestTypeDTO](docs/PagedDTORequestTypeDTO.md)
- [PagedDTORequestTypeGroupDTO](docs/PagedDTORequestTypeGroupDTO.md)
- [PagedDTOServiceDeskDTO](docs/PagedDTOServiceDeskDTO.md)
- [PagedDTOSlaInformationDTO](docs/PagedDTOSlaInformationDTO.md)
- [PagedDTOUserDTO](docs/PagedDTOUserDTO.md)
- [PagedLinkDTO](docs/PagedLinkDTO.md)
- [ProjectDetails](docs/ProjectDetails.md)
- [PropertyKey](docs/PropertyKey.md)
- [PropertyKeys](docs/PropertyKeys.md)
- [QueueDTO](docs/QueueDTO.md)
- [RenderedValueDTO](docs/RenderedValueDTO.md)
- [RequestCreateDTO](docs/RequestCreateDTO.md)
- [RequestNotificationSubscriptionDTO](docs/RequestNotificationSubscriptionDTO.md)
- [RequestParticipantUpdateDTO](docs/RequestParticipantUpdateDTO.md)
- [RequestTypeCreateDTO](docs/RequestTypeCreateDTO.md)
- [RequestTypeDTO](docs/RequestTypeDTO.md)
- [RequestTypeFieldDTO](docs/RequestTypeFieldDTO.md)
- [RequestTypeFieldValueDTO](docs/RequestTypeFieldValueDTO.md)
- [RequestTypeGroupDTO](docs/RequestTypeGroupDTO.md)
- [RequestTypeIconDTO](docs/RequestTypeIconDTO.md)
- [RequestTypeIconLinkDTO](docs/RequestTypeIconLinkDTO.md)
- [RequestTypePermissionCheckRequestDTO](docs/RequestTypePermissionCheckRequestDTO.md)
- [RequestTypePermissionCheckResponse](docs/RequestTypePermissionCheckResponse.md)
- [Resource](docs/Resource.md)
- [Scope](docs/Scope.md)
- [SelfLinkDTO](docs/SelfLinkDTO.md)
- [ServiceDeskCustomerDTO](docs/ServiceDeskCustomerDTO.md)
- [ServiceDeskDTO](docs/ServiceDeskDTO.md)
- [SimpleLink](docs/SimpleLink.md)
- [SlaInformationCompletedCycleDTO](docs/SlaInformationCompletedCycleDTO.md)
- [SlaInformationDTO](docs/SlaInformationDTO.md)
- [SlaInformationOngoingCycleDTO](docs/SlaInformationOngoingCycleDTO.md)
- [SoftwareInfoDTO](docs/SoftwareInfoDTO.md)
- [SourceDTO](docs/SourceDTO.md)
- [StatusCategory](docs/StatusCategory.md)
- [StatusDetails](docs/StatusDetails.md)
- [UpdatedProjectCategory](docs/UpdatedProjectCategory.md)
- [UserDTO](docs/UserDTO.md)
- [UserDetails](docs/UserDetails.md)
- [UserLinkDTO](docs/UserLinkDTO.md)
- [UsersOrganizationUpdateDTO](docs/UsersOrganizationUpdateDTO.md)

### Authorization


Authentication schemes defined for the API:
<a id="OAuth2-accessCode"></a>
#### OAuth2 accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.atlassian.com/authorize
- **Scopes**: 
  - `delete:organization.property:jira-service-management`: Allows the app to delete organisation entity properties
  - `delete:organization.user:jira-service-management`: Allows the app to remove members from organisations
  - `delete:organization:jira-service-management`: Allows the app to delete organisations
  - `delete:request.feedback:jira-service-management`: Allows the app to remove feedback data from requests
  - `delete:request.notification:jira-service-management`: Allows the app to remove the subscription status of the user from requests
  - `delete:request.participant:jira-service-management`: Allows the app to remove participants (user) data from requests
  - `delete:requesttype.property:jira-service-management`: Allows the app to delete request type entity properties
  - `delete:servicedesk.customer:jira-service-management`: Allows the app the delete customers from service desks
  - `delete:servicedesk.organization:jira-service-management`: Allows the app the delete organisations from service desks
  - `delete:servicedesk.property:jira-service-management`: Allows the app to delete service desk entity properties
  - `manage:jira-configuration`: Configure Jira settings that require the Jira administrators permission, for example, create projects and custom fields, view workflows, manage issue link types.
  - `manage:jira-project`: Create and edit project settings and create new project-level objects, for example, versions, components.
  - `manage:jira-webhook`: Manage Jira webhooks. Enables an OAuth app to register and unregister dynamic webhooks in Jira. It also provides for fetching of registered webhooks.
  - `manage:servicedesk-customer`: Manage Jira Service Management customers and organizations | Create, manage and delete customers and organizations.&lt;br&gt;Add and remove customers and organizations from service desks.
  - `read:customer:jira-service-management`: Allows the app to read customer accounts information
  - `read:jira-user`: View user information in Jira that you have access to, including usernames, email addresses, and avatars.
  - `read:jira-work`: Read project and issue data. Search for issues and objects associated with issues (such as attachments and worklogs).
  - `read:knowledgebase:jira-service-management`: Allows the app to search and list KB articles
  - `read:mail-logs.connectivity:jira-service-management`: Allows the app to read email connectivity logs
  - `read:mail-logs.processing:jira-service-management`: Allows the app to read incoming email processing logs
  - `read:organization.property:jira-service-management`: Allows the app to read organisation entity properties
  - `read:organization.user:jira-service-management`: Allows the app to read organisation membership information
  - `read:organization:jira-service-management`: Allows the app to read organisation information
  - `read:queue:jira-service-management`: Allows the app to list queues
  - `read:request.action:jira-service-management`: Allows the app to read which actions can be performed on requests
  - `read:request.approval:jira-service-management`: Allows the app to read approval data from requests
  - `read:request.attachment:jira-service-management`: Allows the app to read attachment data from requests
  - `read:request.comment:jira-service-management`: Allows the app to read comment data from requests
  - `read:request.feedback:jira-service-management`: Allows the app to read feedback data from requests
  - `read:request.notification:jira-service-management`: Allows the app to read the subscription status of the user for requests
  - `read:request.participant:jira-service-management`: Allows the app to read participant (user) data from requests
  - `read:request.sla:jira-service-management`: Allows the app to read SLA data from requests
  - `read:request.status:jira-service-management`: Allows the app to read status/transition data from requests
  - `read:request:jira-service-management`: Allows the app to list &amp; search requests
  - `read:requesttype.property:jira-service-management`: Allows the app to read request type desk entity properties
  - `read:requesttype:jira-service-management`: Allows the app to list &amp; search request types
  - `read:servicedesk-request`: Read customer request data, including approvals, attachments, comments, request participants, and status/transitions.&lt;br&gt;Read service desk and request types, including searching for request types and reading request type fields, properties and groups.
  - `read:servicedesk.customer:jira-service-management`: Allows the app the list customers of service desks
  - `read:servicedesk.organization:jira-service-management`: Allows the app to list organisations to service desks
  - `read:servicedesk.property:jira-service-management`: Allows the app to read service desk entity properties
  - `read:servicedesk:jira-service-management`: Allows the app to list &amp; search service desks
  - `write:customer:jira-service-management`: Allows the app to create customer accounts (user)
  - `write:jira-work`: Create and edit issues in Jira, post comments, create worklogs, and delete issues.
  - `write:organization.property:jira-service-management`: Allows the app to write organisation entity properties
  - `write:organization.user:jira-service-management`: Allows the app to add members to organisations
  - `write:organization:jira-service-management`: Allows the app to create organisations
  - `write:request.approval:jira-service-management`: Allows the app to act on approvals of requests (e.g approve, deny, …)
  - `write:request.attachment:jira-service-management`: Allows the app to add attachments to requests
  - `write:request.comment:jira-service-management`: Allows the app to add comments to requests
  - `write:request.feedback:jira-service-management`: Allows the app to write feedback data on requests
  - `write:request.notification:jira-service-management`: Allows the app to change the subscription status of the user for requests
  - `write:request.participant:jira-service-management`: Allows the app to add participants (user) data from requests
  - `write:request.status:jira-service-management`: Allows the app to execute transitions on requests
  - `write:request:jira-service-management`: Allows the app to create requests
  - `write:requesttype.property:jira-service-management`: Allows the app to write request type entity properties
  - `write:requesttype:jira-service-management`: Allows the app to create or modify request types
  - `write:servicedesk-request`: Create and manage Jira Service Management requests | Create and edit customer requests, including add comments and attachments, approve, share (add request participants), subscribe, and transition.
  - `write:servicedesk.customer:jira-service-management`: Allows the app the add customers to service desks
  - `write:servicedesk.organization:jira-service-management`: Allows the app the add organisations to service desks
  - `write:servicedesk.property:jira-service-management`: Allows the app to write service desk entity properties
  - `write:servicedesk:jira-service-management`: Allows the app the add organisations, customers and request types to service desks
<a id="basicAuth"></a>
#### basicAuth


- **Type**: HTTP basic authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b`
- Package version: `1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
