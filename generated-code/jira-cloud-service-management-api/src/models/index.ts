/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdditionalCommentDTO
 */
export interface AdditionalCommentDTO {
    /**
     * Content of the comment.
     * @type {string}
     * @memberof AdditionalCommentDTO
     */
    body?: string;
}
/**
 * 
 * @export
 * @interface ApprovalDTO
 */
export interface ApprovalDTO {
    /**
     * The REST API URL of the approval.
     * @type {SelfLinkDTO}
     * @memberof ApprovalDTO
     */
    links?: SelfLinkDTO;
    /**
     * Detailed list of the users who must provide a response to the approval.
     * @type {Array<ApproverDTO>}
     * @memberof ApprovalDTO
     */
    approvers?: Array<ApproverDTO>;
    /**
     * Indicates whether the user making the request is one of the approvers and can respond to the approval (true) or not (false).
     * @type {boolean}
     * @memberof ApprovalDTO
     */
    canAnswerApproval?: boolean;
    /**
     * Date the approval was completed.
     * @type {DateDTO}
     * @memberof ApprovalDTO
     */
    completedDate?: DateDTO;
    /**
     * Date the approval was created.
     * @type {DateDTO}
     * @memberof ApprovalDTO
     */
    createdDate?: DateDTO;
    /**
     * Outcome of the approval, based on the approvals provided by all approvers.
     * @type {string}
     * @memberof ApprovalDTO
     */
    finalDecision?: ApprovalDTOFinalDecisionEnum;
    /**
     * ID of the approval.
     * @type {string}
     * @memberof ApprovalDTO
     */
    id?: string;
    /**
     * Description of the approval being sought or provided.
     * @type {string}
     * @memberof ApprovalDTO
     */
    name?: string;
}


/**
 * @export
 */
export const ApprovalDTOFinalDecisionEnum = {
    Approved: 'approved',
    Declined: 'declined',
    Pending: 'pending'
} as const;
export type ApprovalDTOFinalDecisionEnum = typeof ApprovalDTOFinalDecisionEnum[keyof typeof ApprovalDTOFinalDecisionEnum];

/**
 * 
 * @export
 * @interface ApprovalDecisionRequestDTO
 */
export interface ApprovalDecisionRequestDTO {
    /**
     * Response to the approval request.
     * @type {string}
     * @memberof ApprovalDecisionRequestDTO
     */
    decision?: ApprovalDecisionRequestDTODecisionEnum;
}


/**
 * @export
 */
export const ApprovalDecisionRequestDTODecisionEnum = {
    Approve: 'approve',
    Decline: 'decline'
} as const;
export type ApprovalDecisionRequestDTODecisionEnum = typeof ApprovalDecisionRequestDTODecisionEnum[keyof typeof ApprovalDecisionRequestDTODecisionEnum];

/**
 * 
 * @export
 * @interface ApproverDTO
 */
export interface ApproverDTO {
    /**
     * Details of the User who is providing approval.
     * @type {UserDTO}
     * @memberof ApproverDTO
     */
    approver?: UserDTO;
    /**
     * Decision made by the approver.
     * @type {string}
     * @memberof ApproverDTO
     */
    approverDecision?: ApproverDTOApproverDecisionEnum;
}


/**
 * @export
 */
export const ApproverDTOApproverDecisionEnum = {
    Approved: 'approved',
    Declined: 'declined',
    Pending: 'pending'
} as const;
export type ApproverDTOApproverDecisionEnum = typeof ApproverDTOApproverDecisionEnum[keyof typeof ApproverDTOApproverDecisionEnum];

/**
 * 
 * @export
 * @interface ArticleDTO
 */
export interface ArticleDTO {
    /**
     * 
     * @type {ContentDTO}
     * @memberof ArticleDTO
     */
    content?: ContentDTO;
    /**
     * Excerpt of the article which matches the given query string.
     * @type {string}
     * @memberof ArticleDTO
     */
    excerpt?: string;
    /**
     * Source of the article.
     * @type {SourceDTO}
     * @memberof ArticleDTO
     */
    source?: SourceDTO;
    /**
     * Title of the article.
     * @type {string}
     * @memberof ArticleDTO
     */
    title?: string;
}
/**
 * Details of an Assets workspace ID.
 * @export
 * @interface AssetsWorkspaceDTO
 */
export interface AssetsWorkspaceDTO {
    /**
     * The workspace ID used as the identifier to access the Assets REST API.
     * @type {string}
     * @memberof AssetsWorkspaceDTO
     */
    workspaceId?: string;
}
/**
 * 
 * @export
 * @interface AttachmentCreateDTO
 */
export interface AttachmentCreateDTO {
    /**
     * Additional content of the comment
     * @type {AdditionalCommentDTO}
     * @memberof AttachmentCreateDTO
     */
    additionalComment?: AdditionalCommentDTO;
    /**
     * Controls whether the comment and its attachments are visible to customers
     * @type {boolean}
     * @memberof AttachmentCreateDTO
     */
    public?: boolean;
    /**
     * List of IDs for the temporary attachments to be added to the customer request.
     * @type {Array<string>}
     * @memberof AttachmentCreateDTO
     */
    temporaryAttachmentIds?: Array<string>;
}
/**
 * 
 * @export
 * @interface AttachmentCreateResultDTO
 */
export interface AttachmentCreateResultDTO {
    /**
     * List of the attachments added.
     * @type {PagedDTOAttachmentDTO}
     * @memberof AttachmentCreateResultDTO
     */
    attachments?: PagedDTOAttachmentDTO;
    /**
     * Details of the comment included with the attachments.
     * @type {CommentDTO}
     * @memberof AttachmentCreateResultDTO
     */
    comment?: CommentDTO;
}
/**
 * 
 * @export
 * @interface AttachmentDTO
 */
export interface AttachmentDTO {
    /**
     * Various URLs for the attachment.
     * @type {AttachmentLinkDTO}
     * @memberof AttachmentDTO
     */
    links?: AttachmentLinkDTO;
    /**
     * Details of the user who attached the file.
     * @type {UserDTO}
     * @memberof AttachmentDTO
     */
    author?: UserDTO;
    /**
     * Date the attachment was added.
     * @type {DateDTO}
     * @memberof AttachmentDTO
     */
    created?: DateDTO;
    /**
     * Filename of the item attached.
     * @type {string}
     * @memberof AttachmentDTO
     */
    filename?: string;
    /**
     * MIME type of the attachment.
     * @type {string}
     * @memberof AttachmentDTO
     */
    mimeType?: string;
    /**
     * Size of the attachment in bytes.
     * @type {number}
     * @memberof AttachmentDTO
     */
    size?: number;
}
/**
 * 
 * @export
 * @interface AttachmentLinkDTO
 */
export interface AttachmentLinkDTO {
    /**
     * URL for the attachment.
     * @type {string}
     * @memberof AttachmentLinkDTO
     */
    content?: string;
    /**
     * REST API URL for the attachment
     * @type {string}
     * @memberof AttachmentLinkDTO
     */
    jiraRest?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentLinkDTO
     */
    self?: string;
    /**
     * URL for the attachment's thumbnail image.
     * @type {string}
     * @memberof AttachmentLinkDTO
     */
    thumbnail?: string;
}
/**
 * 
 * @export
 * @interface AvatarUrlsBean
 */
export interface AvatarUrlsBean {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof AvatarUrlsBean
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof AvatarUrlsBean
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof AvatarUrlsBean
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof AvatarUrlsBean
     */
    ["48x48"]?: string;
}
/**
 * 
 * @export
 * @interface CSATFeedbackFullDTO
 */
export interface CSATFeedbackFullDTO {
    /**
     * (Optional) The comment provided with this feedback.
     * @type {AdditionalCommentDTO}
     * @memberof CSATFeedbackFullDTO
     */
    comment?: AdditionalCommentDTO;
    /**
     * A numeric representation of the rating, this must be an integer value between 1 and 5.
     * @type {number}
     * @memberof CSATFeedbackFullDTO
     */
    rating?: number;
    /**
     * Indicates the type of feedback, supported values: `csat`.
     * @type {string}
     * @memberof CSATFeedbackFullDTO
     */
    type?: string;
}
/**
 * A change item.
 * @export
 * @interface ChangeDetails
 */
export interface ChangeDetails {
    /**
     * The name of the field changed.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly field?: string;
    /**
     * The ID of the field changed.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly fieldId?: string;
    /**
     * The type of the field changed.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly fieldtype?: string;
    /**
     * The details of the original value.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly from?: string;
    /**
     * The details of the original value as a string.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly fromString?: string;
    /**
     * The details of the new value.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly to?: string;
    /**
     * The details of the new value as a string.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly toString?: string;
}
/**
 * A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.
 * @export
 * @interface Changelog
 */
export interface Changelog {
    /**
     * The user who made the change.
     * @type {UserDetails}
     * @memberof Changelog
     */
    readonly author?: UserDetails;
    /**
     * The date on which the change took place.
     * @type {string}
     * @memberof Changelog
     */
    readonly created?: string;
    /**
     * The history metadata associated with the changed.
     * @type {HistoryMetadata}
     * @memberof Changelog
     */
    readonly historyMetadata?: HistoryMetadata;
    /**
     * The ID of the changelog.
     * @type {string}
     * @memberof Changelog
     */
    readonly id?: string;
    /**
     * The list of items changed.
     * @type {Array<ChangeDetails>}
     * @memberof Changelog
     */
    readonly items?: Array<ChangeDetails>;
}
/**
 * 
 * @export
 * @interface CommentCreateDTO
 */
export interface CommentCreateDTO {
    /**
     * Content of the comment.
     * @type {string}
     * @memberof CommentCreateDTO
     */
    body?: string;
    /**
     * Indicates whether the comment is public (true) or private/internal (false).
     * @type {boolean}
     * @memberof CommentCreateDTO
     */
    public?: boolean;
}
/**
 * 
 * @export
 * @interface CommentDTO
 */
export interface CommentDTO {
    /**
     * List of items that can be expanded in the response by specifying the expand query parameter.
     * @type {Array<string>}
     * @memberof CommentDTO
     */
    expands?: Array<string>;
    /**
     * REST API URL link to the comment.
     * @type {SelfLinkDTO}
     * @memberof CommentDTO
     */
    links?: SelfLinkDTO;
    /**
     * List of the attachments included in the comment.
     * @type {PagedDTOAttachmentDTO}
     * @memberof CommentDTO
     */
    attachments?: PagedDTOAttachmentDTO;
    /**
     * Details of the customer who authored the comment.
     * @type {UserDTO}
     * @memberof CommentDTO
     */
    author?: UserDTO;
    /**
     * Content of the comment.
     * @type {string}
     * @memberof CommentDTO
     */
    body?: string;
    /**
     * Date the comment was created.
     * @type {DateDTO}
     * @memberof CommentDTO
     */
    created?: DateDTO;
    /**
     * ID of the comment.
     * @type {string}
     * @memberof CommentDTO
     */
    id?: string;
    /**
     * Indicates whether the comment is public (true) or private/internal (false).
     * @type {boolean}
     * @memberof CommentDTO
     */
    public?: boolean;
    /**
     * The rendered body of the comment.
     * @type {RenderedValueDTO}
     * @memberof CommentDTO
     */
    renderedBody?: RenderedValueDTO;
}
/**
 * 
 * @export
 * @interface ContentDTO
 */
export interface ContentDTO {
    /**
     * Url containing the body of the article (without title), suitable for rendering in an iframe
     * @type {string}
     * @memberof ContentDTO
     */
    iframeSrc?: string;
}
/**
 * 
 * @export
 * @interface CustomerCreateDTO
 */
export interface CustomerCreateDTO {
    /**
     * Customer's name for display in the UI.
     * @type {string}
     * @memberof CustomerCreateDTO
     */
    displayName?: string;
    /**
     * Customer's email address.
     * @type {string}
     * @memberof CustomerCreateDTO
     */
    email?: string;
    /**
     * Deprecated, please use 'displayName'.
     * @type {string}
     * @memberof CustomerCreateDTO
     */
    fullName?: string;
}
/**
 * 
 * @export
 * @interface CustomerRequestActionDTO
 */
export interface CustomerRequestActionDTO {
    /**
     * Indicates whether the user can undertake the action (true) or not (false).
     * @type {boolean}
     * @memberof CustomerRequestActionDTO
     */
    allowed?: boolean;
}
/**
 * 
 * @export
 * @interface CustomerRequestActionsDTO
 */
export interface CustomerRequestActionsDTO {
    /**
     * Action of adding attachments to a request.
     * @type {CustomerRequestActionDTO}
     * @memberof CustomerRequestActionsDTO
     */
    addAttachment?: CustomerRequestActionDTO;
    /**
     * Action of adding comments to a request.
     * @type {CustomerRequestActionDTO}
     * @memberof CustomerRequestActionsDTO
     */
    addComment?: CustomerRequestActionDTO;
    /**
     * Action of adding participants to a request.
     * @type {CustomerRequestActionDTO}
     * @memberof CustomerRequestActionsDTO
     */
    addParticipant?: CustomerRequestActionDTO;
    /**
     * Action of removing participants from a request.
     * @type {CustomerRequestActionDTO}
     * @memberof CustomerRequestActionsDTO
     */
    removeParticipant?: CustomerRequestActionDTO;
}
/**
 * 
 * @export
 * @interface CustomerRequestCreateMetaDTO
 */
export interface CustomerRequestCreateMetaDTO {
    /**
     * Flag indicating if participants can be added to a request (true) or not.
     * @type {boolean}
     * @memberof CustomerRequestCreateMetaDTO
     */
    canAddRequestParticipants?: boolean;
    /**
     * Flag indicating if a request can be raised on behalf of another user (true) or not.
     * @type {boolean}
     * @memberof CustomerRequestCreateMetaDTO
     */
    canRaiseOnBehalfOf?: boolean;
    /**
     * List of the fields included in this request.
     * @type {Array<RequestTypeFieldDTO>}
     * @memberof CustomerRequestCreateMetaDTO
     */
    requestTypeFields?: Array<RequestTypeFieldDTO>;
}
/**
 * 
 * @export
 * @interface CustomerRequestDTO
 */
export interface CustomerRequestDTO {
    /**
     * List of items that can be expanded in the response by specifying the expand query parameter.
     * @type {Array<string>}
     * @memberof CustomerRequestDTO
     */
    expands?: Array<string>;
    /**
     * List of links associated with the request.
     * @type {CustomerRequestLinkDTO}
     * @memberof CustomerRequestDTO
     */
    links?: CustomerRequestLinkDTO;
    /**
     * List of actions that the user can take on the request.
     * @type {CustomerRequestActionsDTO}
     * @memberof CustomerRequestDTO
     */
    actions?: CustomerRequestActionsDTO;
    /**
     * List of attachments included with the request.
     * @type {PagedDTOAttachmentDTO}
     * @memberof CustomerRequestDTO
     */
    attachments?: PagedDTOAttachmentDTO;
    /**
     * List of comments included with the request.
     * @type {PagedDTOCommentDTO}
     * @memberof CustomerRequestDTO
     */
    comments?: PagedDTOCommentDTO;
    /**
     * Date on which the request was created.
     * @type {DateDTO}
     * @memberof CustomerRequestDTO
     */
    createdDate?: DateDTO;
    /**
     * Status of the request.
     * @type {CustomerRequestStatusDTO}
     * @memberof CustomerRequestDTO
     */
    currentStatus?: CustomerRequestStatusDTO;
    /**
     * ID of the request, as the peer issue ID.
     * @type {string}
     * @memberof CustomerRequestDTO
     */
    issueId?: string;
    /**
     * Key of the request, as the peer issue key.
     * @type {string}
     * @memberof CustomerRequestDTO
     */
    issueKey?: string;
    /**
     * Expandable details of the customers participating in the request.
     * @type {PagedDTOUserDTO}
     * @memberof CustomerRequestDTO
     */
    participants?: PagedDTOUserDTO;
    /**
     * Details of the customer reporting the request.
     * @type {UserDTO}
     * @memberof CustomerRequestDTO
     */
    reporter?: UserDTO;
    /**
     * JSON map of Jira field IDs and their values representing the content of the request. This list does not include hidden fields.
     * @type {Array<CustomerRequestFieldValueDTO>}
     * @memberof CustomerRequestDTO
     */
    requestFieldValues?: Array<CustomerRequestFieldValueDTO>;
    /**
     * Expandable details of the request type.
     * @type {RequestTypeDTO}
     * @memberof CustomerRequestDTO
     */
    requestType?: RequestTypeDTO;
    /**
     * ID of the request type for the request.
     * @type {string}
     * @memberof CustomerRequestDTO
     */
    requestTypeId?: string;
    /**
     * Expandable details of the service desk.
     * @type {ServiceDeskDTO}
     * @memberof CustomerRequestDTO
     */
    serviceDesk?: ServiceDeskDTO;
    /**
     * ID of the service desk the request belongs to.
     * @type {string}
     * @memberof CustomerRequestDTO
     */
    serviceDeskId?: string;
    /**
     * Expandable details of the SLAs relating to the request.
     * @type {PagedDTOSlaInformationDTO}
     * @memberof CustomerRequestDTO
     */
    sla?: PagedDTOSlaInformationDTO;
    /**
     * Expandable details of the request's status history.
     * @type {PagedDTOCustomerRequestStatusDTO}
     * @memberof CustomerRequestDTO
     */
    status?: PagedDTOCustomerRequestStatusDTO;
}
/**
 * 
 * @export
 * @interface CustomerRequestFieldValueDTO
 */
export interface CustomerRequestFieldValueDTO {
    /**
     * ID of the field.
     * @type {string}
     * @memberof CustomerRequestFieldValueDTO
     */
    fieldId?: string;
    /**
     * Text label for the field.
     * @type {string}
     * @memberof CustomerRequestFieldValueDTO
     */
    label?: string;
    /**
     * Value of the field rendered in the UI.
     * @type {object}
     * @memberof CustomerRequestFieldValueDTO
     */
    renderedValue?: object;
    /**
     * Value of the field.
     * @type {any}
     * @memberof CustomerRequestFieldValueDTO
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface CustomerRequestLinkDTO
 */
export interface CustomerRequestLinkDTO {
    /**
     * Jira agent view URL for the request.
     * @type {string}
     * @memberof CustomerRequestLinkDTO
     */
    agent?: string;
    /**
     * REST API URL for the request.
     * @type {string}
     * @memberof CustomerRequestLinkDTO
     */
    jiraRest?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequestLinkDTO
     */
    self?: string;
    /**
     * Web URL for the request.
     * @type {string}
     * @memberof CustomerRequestLinkDTO
     */
    web?: string;
}
/**
 * 
 * @export
 * @interface CustomerRequestStatusDTO
 */
export interface CustomerRequestStatusDTO {
    /**
     * Name of the status condition.
     * @type {string}
     * @memberof CustomerRequestStatusDTO
     */
    status?: string;
    /**
     * Status category the status belongs to.
     * @type {string}
     * @memberof CustomerRequestStatusDTO
     */
    statusCategory?: CustomerRequestStatusDTOStatusCategoryEnum;
    /**
     * Date on which the status was attained.
     * @type {DateDTO}
     * @memberof CustomerRequestStatusDTO
     */
    statusDate?: DateDTO;
}


/**
 * @export
 */
export const CustomerRequestStatusDTOStatusCategoryEnum = {
    Undefined: 'UNDEFINED',
    New: 'NEW',
    Indeterminate: 'INDETERMINATE',
    Done: 'DONE'
} as const;
export type CustomerRequestStatusDTOStatusCategoryEnum = typeof CustomerRequestStatusDTOStatusCategoryEnum[keyof typeof CustomerRequestStatusDTOStatusCategoryEnum];

/**
 * 
 * @export
 * @interface CustomerTransitionDTO
 */
export interface CustomerTransitionDTO {
    /**
     * ID of the transition.
     * @type {string}
     * @memberof CustomerTransitionDTO
     */
    id?: string;
    /**
     * Name of the transition.
     * @type {string}
     * @memberof CustomerTransitionDTO
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface CustomerTransitionExecutionDTO
 */
export interface CustomerTransitionExecutionDTO {
    /**
     * Comment explaining the reason for the transition.
     * @type {AdditionalCommentDTO}
     * @memberof CustomerTransitionExecutionDTO
     */
    additionalComment?: AdditionalCommentDTO;
    /**
     * ID of the transition to be performed.
     * @type {string}
     * @memberof CustomerTransitionExecutionDTO
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface DateDTO
 */
export interface DateDTO {
    /**
     * Date as the number of milliseconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), 1 January 1970.
     * @type {number}
     * @memberof DateDTO
     */
    epochMillis?: number;
    /**
     * Date in a user-friendly text format.
     * @type {string}
     * @memberof DateDTO
     */
    friendly?: string;
    /**
     * Date in ISO8601 format.
     * @type {string}
     * @memberof DateDTO
     */
    iso8601?: string;
    /**
     * Date in the format used in the Jira REST APIs, which is ISO8601 format but extended with milliseconds. For example, 2016-09-28T23:08:32.097+1000.
     * @type {string}
     * @memberof DateDTO
     */
    jira?: string;
}
/**
 * 
 * @export
 * @interface DurationDTO
 */
export interface DurationDTO {
    /**
     * Duration in a user-friendly text format.
     * @type {string}
     * @memberof DurationDTO
     */
    friendly?: string;
    /**
     * Duration in milliseconds.
     * @type {number}
     * @memberof DurationDTO
     */
    millis?: number;
}
/**
 * An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).
 * @export
 * @interface EntityProperty
 */
export interface EntityProperty {
    /**
     * The key of the property. Required on create and update.
     * @type {string}
     * @memberof EntityProperty
     */
    key?: string;
    /**
     * The value of the property. Required on create and update.
     * @type {any}
     * @memberof EntityProperty
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    errorMessage?: string;
    /**
     * 
     * @type {I18nErrorMessage}
     * @memberof ErrorResponse
     */
    i18nErrorMessage?: I18nErrorMessage;
}
/**
 * 
 * @export
 * @interface Expandable
 */
export interface Expandable {
    /**
     * 
     * @type {Array<string>}
     * @memberof Expandable
     */
    expands?: Array<string>;
}
/**
 * The metadata describing an issue field.
 * @export
 * @interface FieldMetadata
 */
export interface FieldMetadata {
    /**
     * The list of values allowed in the field.
     * @type {Array<any>}
     * @memberof FieldMetadata
     */
    readonly allowedValues?: Array<any>;
    /**
     * The URL that can be used to automatically complete the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly autoCompleteUrl?: string;
    /**
     * The configuration properties.
     * @type {{ [key: string]: any; }}
     * @memberof FieldMetadata
     */
    readonly configuration?: { [key: string]: any; };
    /**
     * The default value of the field.
     * @type {any}
     * @memberof FieldMetadata
     */
    readonly defaultValue?: any | null;
    /**
     * Whether the field has a default value.
     * @type {boolean}
     * @memberof FieldMetadata
     */
    readonly hasDefaultValue?: boolean;
    /**
     * The key of the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly key: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly name: string;
    /**
     * The list of operations that can be performed on the field.
     * @type {Array<string>}
     * @memberof FieldMetadata
     */
    readonly operations: Array<string>;
    /**
     * Whether the field is required.
     * @type {boolean}
     * @memberof FieldMetadata
     */
    readonly required: boolean;
    /**
     * The data type of the field.
     * @type {JsonTypeBean}
     * @memberof FieldMetadata
     */
    readonly schema: JsonTypeBean;
}
/**
 * 
 * @export
 * @interface Form
 */
export interface Form {
    [key: string]: any | any;
    /**
     * JSON mapping of form field answers containing form field IDs and corresponding values.
     * @type {{ [key: string]: FormAnswer; }}
     * @memberof Form
     */
    answers?: { [key: string]: FormAnswer; };
}
/**
 * 
 * @export
 * @interface FormAnswer
 */
export interface FormAnswer {
    /**
     * Answer in Atlassian Document Format (ADF)
     * @type {JsonNode}
     * @memberof FormAnswer
     */
    adf?: JsonNode;
    /**
     * IDs of selected choices
     * @type {Array<string>}
     * @memberof FormAnswer
     */
    choices?: Array<string>;
    /**
     * Answer in date format (yyyy-MM-dd)
     * @type {string}
     * @memberof FormAnswer
     */
    date?: string;
    /**
     * The IDs of files to be attached to the form that are obtained by calling the ‘attach temporary file’ endpoint on the corresponding service desk.
     * @type {Array<string>}
     * @memberof FormAnswer
     */
    files?: Array<string>;
    /**
     * Answer in free text format
     * @type {string}
     * @memberof FormAnswer
     */
    text?: string;
    /**
     * Answer in timestamp format (HH:mm)
     * @type {string}
     * @memberof FormAnswer
     */
    time?: string;
    /**
     * IDs of selected users
     * @type {Array<string>}
     * @memberof FormAnswer
     */
    users?: Array<string>;
}
/**
 * Details of issue history metadata.
 * @export
 * @interface HistoryMetadata
 */
export interface HistoryMetadata {
    [key: string]: any | any;
    /**
     * The activity described in the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    activityDescription?: string;
    /**
     * The key of the activity described in the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    activityDescriptionKey?: string;
    /**
     * Details of the user whose action created the history record.
     * @type {HistoryMetadataParticipant}
     * @memberof HistoryMetadata
     */
    actor?: HistoryMetadataParticipant;
    /**
     * Details of the cause that triggered the creation the history record.
     * @type {HistoryMetadataParticipant}
     * @memberof HistoryMetadata
     */
    cause?: HistoryMetadataParticipant;
    /**
     * The description of the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    description?: string;
    /**
     * The description key of the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    descriptionKey?: string;
    /**
     * The description of the email address associated the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    emailDescription?: string;
    /**
     * The description key of the email address associated the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    emailDescriptionKey?: string;
    /**
     * Additional arbitrary information about the history record.
     * @type {{ [key: string]: string; }}
     * @memberof HistoryMetadata
     */
    extraData?: { [key: string]: string; };
    /**
     * Details of the system that generated the history record.
     * @type {HistoryMetadataParticipant}
     * @memberof HistoryMetadata
     */
    generator?: HistoryMetadataParticipant;
    /**
     * The type of the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    type?: string;
}
/**
 * Details of user or system associated with a issue history metadata item.
 * @export
 * @interface HistoryMetadataParticipant
 */
export interface HistoryMetadataParticipant {
    [key: string]: any | any;
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    avatarUrl?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    displayNameKey?: string;
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    id?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    type?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface I18nErrorMessage
 */
export interface I18nErrorMessage {
    /**
     * 
     * @type {string}
     * @memberof I18nErrorMessage
     */
    i18nKey?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof I18nErrorMessage
     */
    parameters?: Array<string>;
}
/**
 * 
 * @export
 * @interface IncludedFields
 */
export interface IncludedFields {
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    actuallyIncluded?: Array<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    excluded?: Array<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    included?: Array<string>;
}
/**
 * 
 * @export
 * @interface InputStreamSource
 */
export interface InputStreamSource {
    /**
     * 
     * @type {object}
     * @memberof InputStreamSource
     */
    inputStream?: object;
}
/**
 * Details of an insight workspace ID.
 * @export
 * @interface InsightWorkspaceDTO
 */
export interface InsightWorkspaceDTO {
    /**
     * The workspace ID used as the identifier to access the Insight REST API.
     * @type {string}
     * @memberof InsightWorkspaceDTO
     */
    workspaceId?: string;
}
/**
 * Details about an issue.
 * @export
 * @interface IssueBean
 */
export interface IssueBean {
    /**
     * Details of changelogs associated with the issue.
     * @type {PageOfChangelogs}
     * @memberof IssueBean
     */
    readonly changelog?: PageOfChangelogs;
    /**
     * The metadata for the fields on the issue that can be amended.
     * @type {IssueUpdateMetadata}
     * @memberof IssueBean
     */
    readonly editmeta?: IssueUpdateMetadata;
    /**
     * Expand options that include additional issue details in the response.
     * @type {string}
     * @memberof IssueBean
     */
    readonly expand?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    fields?: { [key: string]: any; };
    /**
     * 
     * @type {IncludedFields}
     * @memberof IssueBean
     */
    fieldsToInclude?: IncludedFields;
    /**
     * The ID of the issue.
     * @type {string}
     * @memberof IssueBean
     */
    readonly id?: string;
    /**
     * The key of the issue.
     * @type {string}
     * @memberof IssueBean
     */
    readonly key?: string;
    /**
     * The ID and name of each field present on the issue.
     * @type {{ [key: string]: string; }}
     * @memberof IssueBean
     */
    readonly names?: { [key: string]: string; };
    /**
     * The operations that can be performed on the issue.
     * @type {Operations}
     * @memberof IssueBean
     */
    readonly operations?: Operations;
    /**
     * Details of the issue properties identified in the request.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    readonly properties?: { [key: string]: any; };
    /**
     * The rendered value of each field present on the issue.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    readonly renderedFields?: { [key: string]: any; };
    /**
     * The schema describing each field present on the issue.
     * @type {{ [key: string]: JsonTypeBean; }}
     * @memberof IssueBean
     */
    readonly schema?: { [key: string]: JsonTypeBean; };
    /**
     * The URL of the issue details.
     * @type {string}
     * @memberof IssueBean
     */
    readonly self?: string;
    /**
     * The transitions that can be performed on the issue.
     * @type {Array<IssueTransition>}
     * @memberof IssueBean
     */
    readonly transitions?: Array<IssueTransition>;
    /**
     * The versions of each field on the issue.
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof IssueBean
     */
    readonly versionedRepresentations?: { [key: string]: { [key: string]: any; }; };
}
/**
 * Details of an issue transition.
 * @export
 * @interface IssueTransition
 */
export interface IssueTransition {
    [key: string]: any | any;
    /**
     * Expand options that include additional transition details in the response.
     * @type {string}
     * @memberof IssueTransition
     */
    readonly expand?: string;
    /**
     * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueTransition
     */
    readonly fields?: { [key: string]: FieldMetadata; };
    /**
     * Whether there is a screen associated with the issue transition.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly hasScreen?: boolean;
    /**
     * The ID of the issue transition. Required when specifying a transition to undertake.
     * @type {string}
     * @memberof IssueTransition
     */
    id?: string;
    /**
     * Whether the transition is available to be performed.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly isAvailable?: boolean;
    /**
     * Whether the issue has to meet criteria before the issue transition is applied.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly isConditional?: boolean;
    /**
     * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly isGlobal?: boolean;
    /**
     * Whether this is the initial issue transition for the workflow.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly isInitial?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IssueTransition
     */
    looped?: boolean;
    /**
     * The name of the issue transition.
     * @type {string}
     * @memberof IssueTransition
     */
    readonly name?: string;
    /**
     * Details of the issue status after the transition.
     * @type {StatusDetails}
     * @memberof IssueTransition
     */
    readonly to?: StatusDetails;
}
/**
 * A list of editable field details.
 * @export
 * @interface IssueUpdateMetadata
 */
export interface IssueUpdateMetadata {
    /**
     * 
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueUpdateMetadata
     */
    readonly fields?: { [key: string]: FieldMetadata; };
}
/**
 * 
 * @export
 * @interface JsonNode
 */
export interface JsonNode {
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    array?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    bigDecimal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    bigInteger?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    bigIntegerValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    binary?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof JsonNode
     */
    binaryValue?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _boolean?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    booleanValue?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    containerNode?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    decimalValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _double?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    doubleValue?: number;
    /**
     * 
     * @type {object}
     * @memberof JsonNode
     */
    elements?: object;
    /**
     * 
     * @type {object}
     * @memberof JsonNode
     */
    fieldNames?: object;
    /**
     * 
     * @type {object}
     * @memberof JsonNode
     */
    fields?: object;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    floatingPointNumber?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _int?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    intValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    integralNumber?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _long?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    longValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    missingNode?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _null?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    number?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonNode
     */
    numberType?: JsonNodeNumberTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    numberValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    object?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    pojo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonNode
     */
    textValue?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    textual?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    valueAsBoolean?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    valueAsDouble?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    valueAsInt?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    valueAsLong?: number;
    /**
     * 
     * @type {string}
     * @memberof JsonNode
     */
    valueAsText?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    valueNode?: boolean;
}


/**
 * @export
 */
export const JsonNodeNumberTypeEnum = {
    Int: 'INT',
    Long: 'LONG',
    BigInteger: 'BIG_INTEGER',
    Float: 'FLOAT',
    Double: 'DOUBLE',
    BigDecimal: 'BIG_DECIMAL'
} as const;
export type JsonNodeNumberTypeEnum = typeof JsonNodeNumberTypeEnum[keyof typeof JsonNodeNumberTypeEnum];

/**
 * The schema of a field.
 * @export
 * @interface JsonTypeBean
 */
export interface JsonTypeBean {
    /**
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof JsonTypeBean
     */
    readonly configuration?: { [key: string]: any; };
    /**
     * If the field is a custom field, the URI of the field.
     * @type {string}
     * @memberof JsonTypeBean
     */
    readonly custom?: string;
    /**
     * If the field is a custom field, the custom ID of the field.
     * @type {number}
     * @memberof JsonTypeBean
     */
    readonly customId?: number;
    /**
     * When the data type is an array, the name of the field items within the array.
     * @type {string}
     * @memberof JsonTypeBean
     */
    readonly items?: string;
    /**
     * If the field is a system field, the name of the field.
     * @type {string}
     * @memberof JsonTypeBean
     */
    readonly system?: string;
    /**
     * The data type of the field.
     * @type {string}
     * @memberof JsonTypeBean
     */
    readonly type: string;
}
/**
 * Details a link group, which defines issue operations.
 * @export
 * @interface LinkGroup
 */
export interface LinkGroup {
    /**
     * 
     * @type {Array<LinkGroup>}
     * @memberof LinkGroup
     */
    groups?: Array<LinkGroup>;
    /**
     * 
     * @type {SimpleLink}
     * @memberof LinkGroup
     */
    header?: SimpleLink;
    /**
     * 
     * @type {string}
     * @memberof LinkGroup
     */
    id?: string;
    /**
     * 
     * @type {Array<SimpleLink>}
     * @memberof LinkGroup
     */
    links?: Array<SimpleLink>;
    /**
     * 
     * @type {string}
     * @memberof LinkGroup
     */
    styleClass?: string;
    /**
     * 
     * @type {number}
     * @memberof LinkGroup
     */
    weight?: number;
}
/**
 * 
 * @export
 * @interface Linkable
 */
export interface Linkable {
    /**
     * 
     * @type {SelfLinkDTO}
     * @memberof Linkable
     */
    links?: SelfLinkDTO;
}
/**
 * 
 * @export
 * @interface LinkableAttachmentLinkDTO
 */
export interface LinkableAttachmentLinkDTO {
    /**
     * 
     * @type {AttachmentLinkDTO}
     * @memberof LinkableAttachmentLinkDTO
     */
    links?: AttachmentLinkDTO;
}
/**
 * 
 * @export
 * @interface LinkableCustomerRequestLinkDTO
 */
export interface LinkableCustomerRequestLinkDTO {
    /**
     * 
     * @type {CustomerRequestLinkDTO}
     * @memberof LinkableCustomerRequestLinkDTO
     */
    links?: CustomerRequestLinkDTO;
}
/**
 * 
 * @export
 * @interface LinkableUserLinkDTO
 */
export interface LinkableUserLinkDTO {
    /**
     * 
     * @type {UserLinkDTO}
     * @memberof LinkableUserLinkDTO
     */
    links?: UserLinkDTO;
}
/**
 * Details of the operations that can be performed on the issue.
 * @export
 * @interface Operations
 */
export interface Operations {
    [key: string]: any | any;
    /**
     * Details of the link groups defining issue operations.
     * @type {Array<LinkGroup>}
     * @memberof Operations
     */
    readonly linkGroups?: Array<LinkGroup>;
}
/**
 * 
 * @export
 * @interface OrganizationCreateDTO
 */
export interface OrganizationCreateDTO {
    /**
     * Name of the organization. Must contain 1-200 characters.
     * @type {string}
     * @memberof OrganizationCreateDTO
     */
    name: string;
}
/**
 * 
 * @export
 * @interface OrganizationDTO
 */
export interface OrganizationDTO {
    /**
     * REST API URL to the organization.
     * @type {SelfLinkDTO}
     * @memberof OrganizationDTO
     */
    links?: SelfLinkDTO;
    /**
     * Date the organization was created. This field may not be present in some older organizations.
     * @type {DateDTO}
     * @memberof OrganizationDTO
     */
    created?: DateDTO;
    /**
     * A unique system generated ID for the organization.
     * @type {string}
     * @memberof OrganizationDTO
     */
    id?: string;
    /**
     * Name of the organization.
     * @type {string}
     * @memberof OrganizationDTO
     */
    name?: string;
    /**
     * A unique system generated ID for the organization. This is identity from the group directory id
     * @type {string}
     * @memberof OrganizationDTO
     */
    uuid?: string;
}
/**
 * 
 * @export
 * @interface OrganizationServiceDeskUpdateDTO
 */
export interface OrganizationServiceDeskUpdateDTO {
    [key: string]: any | any;
    /**
     * List of organizations, specified by 'ID' field values, to add to or remove from the service desk.
     * @type {number}
     * @memberof OrganizationServiceDeskUpdateDTO
     */
    organizationId: number;
    /**
     * Service desk Id for which, organization needs to be updated
     * @type {string}
     * @memberof OrganizationServiceDeskUpdateDTO
     */
    serviceDeskId?: string;
}
/**
 * A page of changelogs.
 * @export
 * @interface PageOfChangelogs
 */
export interface PageOfChangelogs {
    /**
     * The list of changelogs.
     * @type {Array<Changelog>}
     * @memberof PageOfChangelogs
     */
    readonly histories?: Array<Changelog>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly startAt?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly total?: number;
}
/**
 * 
 * @export
 * @interface PagedDTOApprovalDTO
 */
export interface PagedDTOApprovalDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOApprovalDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOApprovalDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOApprovalDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOApprovalDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOApprovalDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOApprovalDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<ApprovalDTO>}
     * @memberof PagedDTOApprovalDTO
     */
    values?: Array<ApprovalDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOArticleDTO
 */
export interface PagedDTOArticleDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOArticleDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOArticleDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOArticleDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOArticleDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOArticleDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOArticleDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<ArticleDTO>}
     * @memberof PagedDTOArticleDTO
     */
    values?: Array<ArticleDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOAssetsWorkspaceDTO
 */
export interface PagedDTOAssetsWorkspaceDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<AssetsWorkspaceDTO>}
     * @memberof PagedDTOAssetsWorkspaceDTO
     */
    values?: Array<AssetsWorkspaceDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOAttachmentDTO
 */
export interface PagedDTOAttachmentDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOAttachmentDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOAttachmentDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOAttachmentDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOAttachmentDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOAttachmentDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOAttachmentDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<AttachmentDTO>}
     * @memberof PagedDTOAttachmentDTO
     */
    values?: Array<AttachmentDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOCommentDTO
 */
export interface PagedDTOCommentDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOCommentDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOCommentDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOCommentDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOCommentDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOCommentDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOCommentDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<CommentDTO>}
     * @memberof PagedDTOCommentDTO
     */
    values?: Array<CommentDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOCustomerRequestDTO
 */
export interface PagedDTOCustomerRequestDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOCustomerRequestDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOCustomerRequestDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOCustomerRequestDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOCustomerRequestDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerRequestDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerRequestDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<CustomerRequestDTO>}
     * @memberof PagedDTOCustomerRequestDTO
     */
    values?: Array<CustomerRequestDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOCustomerRequestStatusDTO
 */
export interface PagedDTOCustomerRequestStatusDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<CustomerRequestStatusDTO>}
     * @memberof PagedDTOCustomerRequestStatusDTO
     */
    values?: Array<CustomerRequestStatusDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOCustomerTransitionDTO
 */
export interface PagedDTOCustomerTransitionDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<CustomerTransitionDTO>}
     * @memberof PagedDTOCustomerTransitionDTO
     */
    values?: Array<CustomerTransitionDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOInsightWorkspaceDTO
 */
export interface PagedDTOInsightWorkspaceDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<InsightWorkspaceDTO>}
     * @memberof PagedDTOInsightWorkspaceDTO
     */
    values?: Array<InsightWorkspaceDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOIssueBean
 */
export interface PagedDTOIssueBean {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOIssueBean
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOIssueBean
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOIssueBean
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOIssueBean
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOIssueBean
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOIssueBean
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<IssueBean>}
     * @memberof PagedDTOIssueBean
     */
    values?: Array<IssueBean>;
}
/**
 * 
 * @export
 * @interface PagedDTOOrganizationDTO
 */
export interface PagedDTOOrganizationDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOOrganizationDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOOrganizationDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOOrganizationDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOOrganizationDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOOrganizationDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOOrganizationDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<OrganizationDTO>}
     * @memberof PagedDTOOrganizationDTO
     */
    values?: Array<OrganizationDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOQueueDTO
 */
export interface PagedDTOQueueDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOQueueDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOQueueDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOQueueDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOQueueDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOQueueDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOQueueDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<QueueDTO>}
     * @memberof PagedDTOQueueDTO
     */
    values?: Array<QueueDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTORequestTypeDTO
 */
export interface PagedDTORequestTypeDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTORequestTypeDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTORequestTypeDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTORequestTypeDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTORequestTypeDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTORequestTypeDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTORequestTypeDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<RequestTypeDTO>}
     * @memberof PagedDTORequestTypeDTO
     */
    values?: Array<RequestTypeDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTORequestTypeGroupDTO
 */
export interface PagedDTORequestTypeGroupDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<RequestTypeGroupDTO>}
     * @memberof PagedDTORequestTypeGroupDTO
     */
    values?: Array<RequestTypeGroupDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOServiceDeskDTO
 */
export interface PagedDTOServiceDeskDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOServiceDeskDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOServiceDeskDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOServiceDeskDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOServiceDeskDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOServiceDeskDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOServiceDeskDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<ServiceDeskDTO>}
     * @memberof PagedDTOServiceDeskDTO
     */
    values?: Array<ServiceDeskDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOSlaInformationDTO
 */
export interface PagedDTOSlaInformationDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOSlaInformationDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOSlaInformationDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOSlaInformationDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOSlaInformationDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOSlaInformationDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOSlaInformationDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<SlaInformationDTO>}
     * @memberof PagedDTOSlaInformationDTO
     */
    values?: Array<SlaInformationDTO>;
}
/**
 * 
 * @export
 * @interface PagedDTOUserDTO
 */
export interface PagedDTOUserDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof PagedDTOUserDTO
     */
    expands?: Array<string>;
    /**
     * List of the links relating to the page.
     * @type {PagedLinkDTO}
     * @memberof PagedDTOUserDTO
     */
    links?: PagedLinkDTO;
    /**
     * Indicates if this is the last page of records (true) or not (false).
     * @type {boolean}
     * @memberof PagedDTOUserDTO
     */
    isLastPage?: boolean;
    /**
     * Number of items to be returned per page, up to the maximum set for these objects in the current implementation.
     * @type {number}
     * @memberof PagedDTOUserDTO
     */
    limit?: number;
    /**
     * Number of items returned in the page.
     * @type {number}
     * @memberof PagedDTOUserDTO
     */
    size?: number;
    /**
     * Index of the first item returned in the page.
     * @type {number}
     * @memberof PagedDTOUserDTO
     */
    start?: number;
    /**
     * Details of the items included in the page.
     * @type {Array<UserDTO>}
     * @memberof PagedDTOUserDTO
     */
    values?: Array<UserDTO>;
}
/**
 * 
 * @export
 * @interface PagedLinkDTO
 */
export interface PagedLinkDTO {
    /**
     * Base URL for the REST API calls.
     * @type {string}
     * @memberof PagedLinkDTO
     */
    base?: string;
    /**
     * 
     * @type {string}
     * @memberof PagedLinkDTO
     */
    context?: string;
    /**
     * REST API URL for the next page, if there is one.
     * @type {string}
     * @memberof PagedLinkDTO
     */
    next?: string;
    /**
     * REST API URL for the previous page, if there is one.
     * @type {string}
     * @memberof PagedLinkDTO
     */
    prev?: string;
    /**
     * REST API URL for the current page.
     * @type {string}
     * @memberof PagedLinkDTO
     */
    self?: string;
}
/**
 * Details about a project.
 * @export
 * @interface ProjectDetails
 */
export interface ProjectDetails {
    /**
     * The URLs of the project's avatars.
     * @type {AvatarUrlsBean}
     * @memberof ProjectDetails
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectDetails
     */
    id?: string;
    /**
     * The key of the project.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly key?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly name?: string;
    /**
     * The category the project belongs to.
     * @type {UpdatedProjectCategory}
     * @memberof ProjectDetails
     */
    readonly projectCategory?: UpdatedProjectCategory;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly projectTypeKey?: ProjectDetailsProjectTypeKeyEnum;
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly self?: string;
    /**
     * Whether or not the project is simplified.
     * @type {boolean}
     * @memberof ProjectDetails
     */
    readonly simplified?: boolean;
}


/**
 * @export
 */
export const ProjectDetailsProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type ProjectDetailsProjectTypeKeyEnum = typeof ProjectDetailsProjectTypeKeyEnum[keyof typeof ProjectDetailsProjectTypeKeyEnum];

/**
 * Property key details.
 * @export
 * @interface PropertyKey
 */
export interface PropertyKey {
    /**
     * The key of the property.
     * @type {string}
     * @memberof PropertyKey
     */
    readonly key?: string;
    /**
     * The URL of the property.
     * @type {string}
     * @memberof PropertyKey
     */
    readonly self?: string;
}
/**
 * List of property keys.
 * @export
 * @interface PropertyKeys
 */
export interface PropertyKeys {
    /**
     * Property key details.
     * @type {Array<PropertyKey>}
     * @memberof PropertyKeys
     */
    readonly keys?: Array<PropertyKey>;
}
/**
 * 
 * @export
 * @interface QueueDTO
 */
export interface QueueDTO {
    /**
     * REST API URL to the queue.
     * @type {SelfLinkDTO}
     * @memberof QueueDTO
     */
    links?: SelfLinkDTO;
    /**
     * Fields returned for each request in the queue.
     * @type {Array<string>}
     * @memberof QueueDTO
     */
    fields?: Array<string>;
    /**
     * ID for the queue.
     * @type {string}
     * @memberof QueueDTO
     */
    id?: string;
    /**
     * The count of customer requests in the queue.
     * @type {number}
     * @memberof QueueDTO
     */
    issueCount?: number;
    /**
     * JQL query that filters reqeusts for the queue.
     * @type {string}
     * @memberof QueueDTO
     */
    jql?: string;
    /**
     * Short name for the queue.
     * @type {string}
     * @memberof QueueDTO
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RenderedValueDTO
 */
export interface RenderedValueDTO {
    /**
     * 
     * @type {string}
     * @memberof RenderedValueDTO
     */
    html?: string;
}
/**
 * 
 * @export
 * @interface RequestCreateDTO
 */
export interface RequestCreateDTO {
    /**
     * (Experimental) Shows extra information for the request channel.
     * @type {string}
     * @memberof RequestCreateDTO
     */
    channel?: string;
    /**
     * Provides answers to the form associated with a request type that is attached to the request on creation. Jira fields should be omitted from `requestFieldValues` if they are linked to form answers. Form answers in ADF format should have `isAdfRequest` set to true. Form answers are not currently validated.
     * @type {Form}
     * @memberof RequestCreateDTO
     */
    form?: Form;
    /**
     * (Experimental) Whether to accept rich text fields in Atlassian Document Format (ADF).
     * @type {boolean}
     * @memberof RequestCreateDTO
     */
    isAdfRequest?: boolean;
    /**
     * The `accountId` of the customer that the request is being raised on behalf of.
     * @type {string}
     * @memberof RequestCreateDTO
     */
    raiseOnBehalfOf?: string;
    /**
     * JSON map of Jira field IDs and their values representing the content of the request.
     * @type {{ [key: string]: any; }}
     * @memberof RequestCreateDTO
     */
    requestFieldValues?: { [key: string]: any; };
    /**
     * List of customers to participate in the request, as a list of `accountId` values.
     * @type {Array<string>}
     * @memberof RequestCreateDTO
     */
    requestParticipants?: Array<string>;
    /**
     * ID of the request type for the request.
     * @type {string}
     * @memberof RequestCreateDTO
     */
    requestTypeId?: string;
    /**
     * ID of the service desk in which to create the request.
     * @type {string}
     * @memberof RequestCreateDTO
     */
    serviceDeskId?: string;
}
/**
 * 
 * @export
 * @interface RequestNotificationSubscriptionDTO
 */
export interface RequestNotificationSubscriptionDTO {
    /**
     * Indicates whether the user is subscribed (true) or not (false) to the request's notifications.
     * @type {boolean}
     * @memberof RequestNotificationSubscriptionDTO
     */
    subscribed?: boolean;
}
/**
 * 
 * @export
 * @interface RequestParticipantUpdateDTO
 */
export interface RequestParticipantUpdateDTO {
    /**
     * List of users, specified by account IDs, to add to or remove as participants in the request.
     * @type {Array<string>}
     * @memberof RequestParticipantUpdateDTO
     */
    accountIds?: Array<string>;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.
     * @type {Array<string>}
     * @memberof RequestParticipantUpdateDTO
     */
    usernames?: Array<string>;
}
/**
 * 
 * @export
 * @interface RequestTypeCreateDTO
 */
export interface RequestTypeCreateDTO {
    /**
     * Description of the request type on the service desk.
     * @type {string}
     * @memberof RequestTypeCreateDTO
     */
    description?: string;
    /**
     * Help text for the request type on the service desk.
     * @type {string}
     * @memberof RequestTypeCreateDTO
     */
    helpText?: string;
    /**
     * ID of the request type to add to the service desk.
     * @type {string}
     * @memberof RequestTypeCreateDTO
     */
    issueTypeId?: string;
    /**
     * Name of the request type on the service desk.
     * @type {string}
     * @memberof RequestTypeCreateDTO
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RequestTypeDTO
 */
export interface RequestTypeDTO {
    /**
     * List of items that can be expanded in the response by specifying the expand query parameter.
     * @type {Array<string>}
     * @memberof RequestTypeDTO
     */
    expands?: Array<string>;
    /**
     * REST API URL for the request type.
     * @type {SelfLinkDTO}
     * @memberof RequestTypeDTO
     */
    links?: SelfLinkDTO;
    /**
     * Whether the user has permission to create a request with this request type.
     * @type {boolean}
     * @memberof RequestTypeDTO
     */
    canCreateRequest?: boolean;
    /**
     * Description of the request type.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    description?: string;
    /**
     * Fields and additional metadata for creating a request that uses the request type
     * @type {CustomerRequestCreateMetaDTO}
     * @memberof RequestTypeDTO
     */
    fields?: CustomerRequestCreateMetaDTO;
    /**
     * List of the request type groups the request type belongs to.
     * @type {Array<string>}
     * @memberof RequestTypeDTO
     */
    groupIds?: Array<string>;
    /**
     * Help text for the request type.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    helpText?: string;
    /**
     * Links to the request type's icons.
     * @type {RequestTypeIconDTO}
     * @memberof RequestTypeDTO
     */
    icon?: RequestTypeIconDTO;
    /**
     * ID for the request type.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    id?: string;
    /**
     * ID of the issue type the request type is based upon.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    issueTypeId?: string;
    /**
     * Short name for the request type.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    name?: string;
    /**
     * ID of the customer portal associated with the service desk project.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    portalId?: string;
    /**
     * The request type's practice
     * @type {string}
     * @memberof RequestTypeDTO
     */
    practice?: string;
    /**
     * Whether request type is restricted or not.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    restrictionStatus?: RequestTypeDTORestrictionStatusEnum;
    /**
     * ID of the service desk the request type belongs to.
     * @type {string}
     * @memberof RequestTypeDTO
     */
    serviceDeskId?: string;
}


/**
 * @export
 */
export const RequestTypeDTORestrictionStatusEnum = {
    Open: 'OPEN',
    Restricted: 'RESTRICTED'
} as const;
export type RequestTypeDTORestrictionStatusEnum = typeof RequestTypeDTORestrictionStatusEnum[keyof typeof RequestTypeDTORestrictionStatusEnum];

/**
 * 
 * @export
 * @interface RequestTypeFieldDTO
 */
export interface RequestTypeFieldDTO {
    /**
     * List of default values for the field.
     * @type {Array<RequestTypeFieldValueDTO>}
     * @memberof RequestTypeFieldDTO
     */
    defaultValues?: Array<RequestTypeFieldValueDTO>;
    /**
     * Description of the field.
     * @type {string}
     * @memberof RequestTypeFieldDTO
     */
    description?: string;
    /**
     * ID of the field.
     * @type {string}
     * @memberof RequestTypeFieldDTO
     */
    fieldId?: string;
    /**
     * Jira specific implementation details for the field in the UI.
     * @type {JsonTypeBean}
     * @memberof RequestTypeFieldDTO
     */
    jiraSchema?: JsonTypeBean;
    /**
     * Name of the field.
     * @type {string}
     * @memberof RequestTypeFieldDTO
     */
    name?: string;
    /**
     * List of preset values for the field.
     * @type {Array<string>}
     * @memberof RequestTypeFieldDTO
     */
    presetValues?: Array<string>;
    /**
     * Indicates if the field is required (true) or not (false).
     * @type {boolean}
     * @memberof RequestTypeFieldDTO
     */
    required?: boolean;
    /**
     * List of valid values for the field.
     * @type {Array<RequestTypeFieldValueDTO>}
     * @memberof RequestTypeFieldDTO
     */
    validValues?: Array<RequestTypeFieldValueDTO>;
    /**
     * 
     * @type {boolean}
     * @memberof RequestTypeFieldDTO
     */
    visible?: boolean;
}
/**
 * 
 * @export
 * @interface RequestTypeFieldValueDTO
 */
export interface RequestTypeFieldValueDTO {
    /**
     * List of child fields.
     * @type {Array<RequestTypeFieldValueDTO>}
     * @memberof RequestTypeFieldValueDTO
     */
    children?: Array<RequestTypeFieldValueDTO>;
    /**
     * Label for the field.
     * @type {string}
     * @memberof RequestTypeFieldValueDTO
     */
    label?: string;
    /**
     * Value of the field.
     * @type {string}
     * @memberof RequestTypeFieldValueDTO
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RequestTypeGroupDTO
 */
export interface RequestTypeGroupDTO {
    /**
     * ID of the request type group
     * @type {string}
     * @memberof RequestTypeGroupDTO
     */
    id?: string;
    /**
     * Name of the request type group.
     * @type {string}
     * @memberof RequestTypeGroupDTO
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RequestTypeIconDTO
 */
export interface RequestTypeIconDTO {
    /**
     * Map of the URLs for the request type icons.
     * @type {RequestTypeIconLinkDTO}
     * @memberof RequestTypeIconDTO
     */
    links?: RequestTypeIconLinkDTO;
    /**
     * ID of the request type icon.
     * @type {string}
     * @memberof RequestTypeIconDTO
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RequestTypeIconLinkDTO
 */
export interface RequestTypeIconLinkDTO {
    /**
     * URLs for the request type icons.
     * @type {{ [key: string]: string; }}
     * @memberof RequestTypeIconLinkDTO
     */
    iconUrls?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    description?: string;
    /**
     * 
     * @type {Blob}
     * @memberof Resource
     */
    file?: Blob;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    filename?: string;
    /**
     * 
     * @type {object}
     * @memberof Resource
     */
    inputStream?: object;
    /**
     * 
     * @type {boolean}
     * @memberof Resource
     */
    open?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Resource
     */
    readable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    url?: string;
}
/**
 * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 * @export
 * @interface Scope
 */
export interface Scope {
    [key: string]: any | any;
    /**
     * The project the item has scope in.
     * @type {ProjectDetails}
     * @memberof Scope
     */
    readonly project?: ProjectDetails;
    /**
     * The type of scope.
     * @type {string}
     * @memberof Scope
     */
    readonly type?: ScopeTypeEnum;
}


/**
 * @export
 */
export const ScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type ScopeTypeEnum = typeof ScopeTypeEnum[keyof typeof ScopeTypeEnum];

/**
 * 
 * @export
 * @interface SelfLinkDTO
 */
export interface SelfLinkDTO {
    /**
     * 
     * @type {string}
     * @memberof SelfLinkDTO
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface ServiceDeskCustomerDTO
 */
export interface ServiceDeskCustomerDTO {
    /**
     * List of users, specified by account IDs, to add to or remove from a service desk.
     * @type {Set<string>}
     * @memberof ServiceDeskCustomerDTO
     */
    accountIds?: Array<string>;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.
     * @type {Set<string>}
     * @memberof ServiceDeskCustomerDTO
     */
    usernames?: Array<string>;
}
/**
 * 
 * @export
 * @interface ServiceDeskDTO
 */
export interface ServiceDeskDTO {
    /**
     * REST API URL to the service desk.
     * @type {SelfLinkDTO}
     * @memberof ServiceDeskDTO
     */
    links?: SelfLinkDTO;
    /**
     * ID of the service desk.
     * @type {string}
     * @memberof ServiceDeskDTO
     */
    id?: string;
    /**
     * ID of the peer project for the service desk.
     * @type {string}
     * @memberof ServiceDeskDTO
     */
    projectId?: string;
    /**
     * Key of the peer project of the service desk.
     * @type {string}
     * @memberof ServiceDeskDTO
     */
    projectKey?: string;
    /**
     * Name of the project and service desk.
     * @type {string}
     * @memberof ServiceDeskDTO
     */
    projectName?: string;
}
/**
 * Details about the operations available in this version.
 * @export
 * @interface SimpleLink
 */
export interface SimpleLink {
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    iconClass?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    styleClass?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof SimpleLink
     */
    weight?: number;
}
/**
 * 
 * @export
 * @interface SlaInformationCompletedCycleDTO
 */
export interface SlaInformationCompletedCycleDTO {
    /**
     * Time and date at which the SLA cycle breached in case of completed breached cycle or would have breached in case of non-breached completed cycle.
     * @type {DateDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    breachTime?: DateDTO;
    /**
     * Indicates if the SLA (duration) was exceeded (true) or not (false).
     * @type {boolean}
     * @memberof SlaInformationCompletedCycleDTO
     */
    breached?: boolean;
    /**
     * Duration in which the service was completed.
     * @type {DurationDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    elapsedTime?: DurationDTO;
    /**
     * Duration within which the service should have been completed.
     * @type {DurationDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    goalDuration?: DurationDTO;
    /**
     * Duration remaining after the service was completed.
     * @type {DurationDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    remainingTime?: DurationDTO;
    /**
     * Time and date at which the SLA cycle started.
     * @type {DateDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    startTime?: DateDTO;
    /**
     * Time and date at which the SLA cycle completed.
     * @type {DateDTO}
     * @memberof SlaInformationCompletedCycleDTO
     */
    stopTime?: DateDTO;
}
/**
 * 
 * @export
 * @interface SlaInformationDTO
 */
export interface SlaInformationDTO {
    /**
     * REST API URL for the SLA.
     * @type {SelfLinkDTO}
     * @memberof SlaInformationDTO
     */
    links?: SelfLinkDTO;
    /**
     * List of completed cycles for the SLA.
     * @type {Array<SlaInformationCompletedCycleDTO>}
     * @memberof SlaInformationDTO
     */
    completedCycles?: Array<SlaInformationCompletedCycleDTO>;
    /**
     * ID of the Service Level Agreement (SLA).
     * @type {string}
     * @memberof SlaInformationDTO
     */
    id?: string;
    /**
     * Description of the SLA.
     * @type {string}
     * @memberof SlaInformationDTO
     */
    name?: string;
    /**
     * Details of the active cycle for the SLA.
     * @type {SlaInformationOngoingCycleDTO}
     * @memberof SlaInformationDTO
     */
    ongoingCycle?: SlaInformationOngoingCycleDTO;
    /**
     * Format in which SLA is to be displayed in the UI
     * @type {string}
     * @memberof SlaInformationDTO
     */
    slaDisplayFormat?: string;
}
/**
 * 
 * @export
 * @interface SlaInformationOngoingCycleDTO
 */
export interface SlaInformationOngoingCycleDTO {
    /**
     * Time and date at which the SLA cycle would have breached its limit.
     * @type {DateDTO}
     * @memberof SlaInformationOngoingCycleDTO
     */
    breachTime?: DateDTO;
    /**
     * Indicates whether the SLA has been breached (true) or not (false).
     * @type {boolean}
     * @memberof SlaInformationOngoingCycleDTO
     */
    breached?: boolean;
    /**
     * Duration of the service.
     * @type {DurationDTO}
     * @memberof SlaInformationOngoingCycleDTO
     */
    elapsedTime?: DurationDTO;
    /**
     * Duration within which the service should be completed.
     * @type {DurationDTO}
     * @memberof SlaInformationOngoingCycleDTO
     */
    goalDuration?: DurationDTO;
    /**
     * Indicates whether the SLA is paused (true) or not (false).
     * @type {boolean}
     * @memberof SlaInformationOngoingCycleDTO
     */
    paused?: boolean;
    /**
     * Duration remaining in which to complete the service.
     * @type {DurationDTO}
     * @memberof SlaInformationOngoingCycleDTO
     */
    remainingTime?: DurationDTO;
    /**
     * Time and date at which the SLA cycle started.
     * @type {DateDTO}
     * @memberof SlaInformationOngoingCycleDTO
     */
    startTime?: DateDTO;
    /**
     * Indicates whether the SLA it timed during calendared working hours only (true) or not (false).
     * @type {boolean}
     * @memberof SlaInformationOngoingCycleDTO
     */
    withinCalendarHours?: boolean;
}
/**
 * 
 * @export
 * @interface SoftwareInfoDTO
 */
export interface SoftwareInfoDTO {
    /**
     * REST API URL of the instance.
     * @type {SelfLinkDTO}
     * @memberof SoftwareInfoDTO
     */
    links?: SelfLinkDTO;
    /**
     * Reference of the change set included in the build.
     * @type {string}
     * @memberof SoftwareInfoDTO
     */
    buildChangeSet?: string;
    /**
     * Date of the current build.
     * @type {DateDTO}
     * @memberof SoftwareInfoDTO
     */
    buildDate?: DateDTO;
    /**
     * Indicates whether the instance is licensed (true) or not (false).
     * @type {boolean}
     * @memberof SoftwareInfoDTO
     */
    isLicensedForUse?: boolean;
    /**
     * Jira Platform version upon which Service Desk is based.
     * @type {string}
     * @memberof SoftwareInfoDTO
     */
    platformVersion?: string;
    /**
     * Jira Service Management version.
     * @type {string}
     * @memberof SoftwareInfoDTO
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface SourceDTO
 */
export interface SourceDTO {
    [key: string]: any | any;
    /**
     * Type of the knowledge base source
     * @type {string}
     * @memberof SourceDTO
     */
    type?: SourceDTOTypeEnum;
}


/**
 * @export
 */
export const SourceDTOTypeEnum = {
    Confluence: 'confluence'
} as const;
export type SourceDTOTypeEnum = typeof SourceDTOTypeEnum[keyof typeof SourceDTOTypeEnum];

/**
 * A status category.
 * @export
 * @interface StatusCategory
 */
export interface StatusCategory {
    [key: string]: any | any;
    /**
     * The name of the color used to represent the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly colorName?: string;
    /**
     * The ID of the status category.
     * @type {number}
     * @memberof StatusCategory
     */
    readonly id?: number;
    /**
     * The key of the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly key?: string;
    /**
     * The name of the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly name?: string;
    /**
     * The URL of the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly self?: string;
}
/**
 * A status.
 * @export
 * @interface StatusDetails
 */
export interface StatusDetails {
    [key: string]: any | any;
    /**
     * The description of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly description?: string;
    /**
     * The URL of the icon used to represent the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly iconUrl?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly name?: string;
    /**
     * The scope of the field.
     * @type {Scope}
     * @memberof StatusDetails
     */
    readonly scope?: Scope;
    /**
     * The URL of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly self?: string;
    /**
     * The category assigned to the status.
     * @type {StatusCategory}
     * @memberof StatusDetails
     */
    readonly statusCategory?: StatusCategory;
}
/**
 * A project category.
 * @export
 * @interface UpdatedProjectCategory
 */
export interface UpdatedProjectCategory {
    /**
     * The name of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly description?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly id?: string;
    /**
     * The description of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly name?: string;
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface UserDTO
 */
export interface UserDTO {
    /**
     * URLs for the customer record and related items.
     * @type {UserLinkDTO}
     * @memberof UserDTO
     */
    links?: UserLinkDTO;
    /**
     * The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserDTO
     */
    accountId?: string;
    /**
     * Indicates if the customer is active (true) or inactive (false)
     * @type {boolean}
     * @memberof UserDTO
     */
    active?: boolean;
    /**
     * Customer's name for display in a UI. Depending on the customer’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof UserDTO
     */
    displayName?: string;
    /**
     * Customer's email address. Depending on the customer’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDTO
     */
    emailAddress?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDTO
     */
    key?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDTO
     */
    name?: string;
    /**
     * Customer time zone. Depending on the customer’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDTO
     */
    timeZone?: string;
}
/**
 * User details permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:
 * 
 *  *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).
 *  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.
 *  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
 * @export
 * @interface UserDetails
 */
export interface UserDetails {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserDetails
     */
    accountId?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof UserDetails
     */
    readonly accountType?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof UserDetails
     */
    readonly active?: boolean;
    /**
     * The avatars of the user.
     * @type {AvatarUrlsBean}
     * @memberof UserDetails
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof UserDetails
     */
    readonly displayName?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDetails
     */
    readonly emailAddress?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDetails
     */
    readonly key?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDetails
     */
    readonly name?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof UserDetails
     */
    readonly self?: string;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDetails
     */
    readonly timeZone?: string;
}
/**
 * 
 * @export
 * @interface UserLinkDTO
 */
export interface UserLinkDTO {
    /**
     * Links to the various sizes of the customer's avatar. Note that this property is deprecated, and will be removed in future versions.
     * @type {{ [key: string]: string; }}
     * @memberof UserLinkDTO
     */
    avatarUrls?: { [key: string]: string; };
    /**
     * REST API URL for the customer.
     * @type {string}
     * @memberof UserLinkDTO
     */
    jiraRest?: string;
    /**
     * 
     * @type {string}
     * @memberof UserLinkDTO
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface UsersOrganizationUpdateDTO
 */
export interface UsersOrganizationUpdateDTO {
    [key: string]: any | any;
    /**
     * List of customers, specific by account IDs, to add to or remove from the organization.
     * @type {Array<string>}
     * @memberof UsersOrganizationUpdateDTO
     */
    accountIds?: Array<string>;
    /**
     * The organizationId in which users need to be added
     * @type {number}
     * @memberof UsersOrganizationUpdateDTO
     */
    organizationId?: number;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.
     * @type {Array<string>}
     * @memberof UsersOrganizationUpdateDTO
     */
    usernames?: Array<string>;
}
