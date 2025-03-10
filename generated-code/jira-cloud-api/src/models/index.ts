/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ActorInputBean
 */
export interface ActorInputBean {
    /**
     * The name of the group to add as a default actor. This parameter cannot be used with the `groupId` parameter. As a group's name can change,use of `groupId` is recommended. This parameter accepts a comma-separated list. For example, `"group":["project-admin", "jira-developers"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    group?: Array<string>;
    /**
     * The ID of the group to add as a default actor. This parameter cannot be used with the `group` parameter This parameter accepts a comma-separated list. For example, `"groupId":["77f6ab39-e755-4570-a6ae-2d7a8df0bcb8", "0c011f85-69ed-49c4-a801-3b18d0f771bc"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    groupId?: Array<string>;
    /**
     * The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `"user":["5b10a2844c20165700ede21g", "5b109f2e9729b51b54dc274d"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    user?: Array<string>;
}
/**
 * 
 * @export
 * @interface ActorsMap
 */
export interface ActorsMap {
    /**
     * The name of the group to add. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended.
     * @type {Array<string>}
     * @memberof ActorsMap
     */
    group?: Array<string>;
    /**
     * The ID of the group to add. This parameter cannot be used with the `group` parameter.
     * @type {Array<string>}
     * @memberof ActorsMap
     */
    groupId?: Array<string>;
    /**
     * The user account ID of the user to add.
     * @type {Array<string>}
     * @memberof ActorsMap
     */
    user?: Array<string>;
}
/**
 * 
 * @export
 * @interface AddAtlassianTeamRequest
 */
export interface AddAtlassianTeamRequest {
    /**
     * The capacity for the Atlassian team.
     * @type {number}
     * @memberof AddAtlassianTeamRequest
     */
    capacity?: number;
    /**
     * The Atlassian team ID.
     * @type {string}
     * @memberof AddAtlassianTeamRequest
     */
    id: string;
    /**
     * The ID of the issue source for the Atlassian team.
     * @type {number}
     * @memberof AddAtlassianTeamRequest
     */
    issueSourceId?: number;
    /**
     * The planning style for the Atlassian team. This must be "Scrum" or "Kanban".
     * @type {string}
     * @memberof AddAtlassianTeamRequest
     */
    planningStyle: AddAtlassianTeamRequestPlanningStyleEnum;
    /**
     * The sprint length for the Atlassian team.
     * @type {number}
     * @memberof AddAtlassianTeamRequest
     */
    sprintLength?: number;
}


/**
 * @export
 */
export const AddAtlassianTeamRequestPlanningStyleEnum = {
    Scrum: 'Scrum',
    Kanban: 'Kanban'
} as const;
export type AddAtlassianTeamRequestPlanningStyleEnum = typeof AddAtlassianTeamRequestPlanningStyleEnum[keyof typeof AddAtlassianTeamRequestPlanningStyleEnum];

/**
 * 
 * @export
 * @interface AddFieldBean
 */
export interface AddFieldBean {
    /**
     * The ID of the field to add.
     * @type {string}
     * @memberof AddFieldBean
     */
    fieldId: string;
}
/**
 * 
 * @export
 * @interface AddGroupBean
 */
export interface AddGroupBean {
    [key: string]: any | any;
    /**
     * The name of the group.
     * @type {string}
     * @memberof AddGroupBean
     */
    name: string;
}
/**
 * Details of notifications which should be added to the notification scheme.
 * @export
 * @interface AddNotificationsDetails
 */
export interface AddNotificationsDetails {
    [key: string]: any | any;
    /**
     * The list of notifications which should be added to the notification scheme.
     * @type {Array<NotificationSchemeEventDetails>}
     * @memberof AddNotificationsDetails
     */
    notificationSchemeEvents: Array<NotificationSchemeEventDetails>;
}
/**
 * 
 * @export
 * @interface AddSecuritySchemeLevelsRequestBean
 */
export interface AddSecuritySchemeLevelsRequestBean {
    /**
     * The list of scheme levels which should be added to the security scheme.
     * @type {Array<SecuritySchemeLevelBean>}
     * @memberof AddSecuritySchemeLevelsRequestBean
     */
    levels?: Array<SecuritySchemeLevelBean>;
}
/**
 * Announcement banner configuration.
 * @export
 * @interface AnnouncementBannerConfiguration
 */
export interface AnnouncementBannerConfiguration {
    /**
     * Hash of the banner data. The client detects updates by comparing hash IDs.
     * @type {string}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly hashId?: string;
    /**
     * Flag indicating if the announcement banner can be dismissed by the user.
     * @type {boolean}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly isDismissible?: boolean;
    /**
     * Flag indicating if the announcement banner is enabled or not.
     * @type {boolean}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly isEnabled?: boolean;
    /**
     * The text on the announcement banner.
     * @type {string}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly message?: string;
    /**
     * Visibility of the announcement banner.
     * @type {string}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly visibility?: AnnouncementBannerConfigurationVisibilityEnum;
}


/**
 * @export
 */
export const AnnouncementBannerConfigurationVisibilityEnum = {
    Public: 'PUBLIC',
    Private: 'PRIVATE'
} as const;
export type AnnouncementBannerConfigurationVisibilityEnum = typeof AnnouncementBannerConfigurationVisibilityEnum[keyof typeof AnnouncementBannerConfigurationVisibilityEnum];

/**
 * Configuration of the announcement banner.
 * @export
 * @interface AnnouncementBannerConfigurationUpdate
 */
export interface AnnouncementBannerConfigurationUpdate {
    /**
     * Flag indicating if the announcement banner can be dismissed by the user.
     * @type {boolean}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    isDismissible?: boolean;
    /**
     * Flag indicating if the announcement banner is enabled or not.
     * @type {boolean}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    isEnabled?: boolean;
    /**
     * The text on the announcement banner.
     * @type {string}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    message?: string;
    /**
     * Visibility of the announcement banner. Can be public or private.
     * @type {string}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    visibility?: string;
}
/**
 * A workflow transition rule.
 * @export
 * @interface AppWorkflowTransitionRule
 */
export interface AppWorkflowTransitionRule {
    /**
     * 
     * @type {RuleConfiguration}
     * @memberof AppWorkflowTransitionRule
     */
    configuration: RuleConfiguration;
    /**
     * The ID of the transition rule.
     * @type {string}
     * @memberof AppWorkflowTransitionRule
     */
    id: string;
    /**
     * The key of the rule, as defined in the Connect or the Forge app descriptor.
     * @type {string}
     * @memberof AppWorkflowTransitionRule
     */
    readonly key: string;
    /**
     * 
     * @type {WorkflowTransition}
     * @memberof AppWorkflowTransitionRule
     */
    readonly transition?: WorkflowTransition;
}
/**
 * The application the linked item is in.
 * @export
 * @interface Application
 */
export interface Application {
    [key: string]: any | any;
    /**
     * The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
     * @type {string}
     * @memberof Application
     */
    name?: string;
    /**
     * The name-spaced type of the application, used by registered rendering apps.
     * @type {string}
     * @memberof Application
     */
    type?: string;
}
/**
 * Details of an application property.
 * @export
 * @interface ApplicationProperty
 */
export interface ApplicationProperty {
    /**
     * The allowed values, if applicable.
     * @type {Array<string>}
     * @memberof ApplicationProperty
     */
    allowedValues?: Array<string>;
    /**
     * The default value of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    defaultValue?: string;
    /**
     * The description of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    desc?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationProperty
     */
    example?: string;
    /**
     * The ID of the application property. The ID and key are the same.
     * @type {string}
     * @memberof ApplicationProperty
     */
    id?: string;
    /**
     * The key of the application property. The ID and key are the same.
     * @type {string}
     * @memberof ApplicationProperty
     */
    key?: string;
    /**
     * The name of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    name?: string;
    /**
     * The data type of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    type?: string;
    /**
     * The new value.
     * @type {string}
     * @memberof ApplicationProperty
     */
    value?: string;
}
/**
 * Details of an application role.
 * @export
 * @interface ApplicationRole
 */
export interface ApplicationRole {
    /**
     * The groups that are granted default access for this application role. As a group's name can change, use of `defaultGroupsDetails` is recommended to identify a groups.
     * @type {Set<string>}
     * @memberof ApplicationRole
     */
    defaultGroups?: Array<string>;
    /**
     * The groups that are granted default access for this application role.
     * @type {Array<GroupName>}
     * @memberof ApplicationRole
     */
    defaultGroupsDetails?: Array<GroupName>;
    /**
     * Deprecated.
     * @type {boolean}
     * @memberof ApplicationRole
     */
    defined?: boolean;
    /**
     * The groups associated with the application role.
     * @type {Array<GroupName>}
     * @memberof ApplicationRole
     */
    groupDetails?: Array<GroupName>;
    /**
     * The groups associated with the application role. As a group's name can change, use of `groupDetails` is recommended to identify a groups.
     * @type {Set<string>}
     * @memberof ApplicationRole
     */
    groups?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationRole
     */
    hasUnlimitedSeats?: boolean;
    /**
     * The key of the application role.
     * @type {string}
     * @memberof ApplicationRole
     */
    key?: string;
    /**
     * The display name of the application role.
     * @type {string}
     * @memberof ApplicationRole
     */
    name?: string;
    /**
     * The maximum count of users on your license.
     * @type {number}
     * @memberof ApplicationRole
     */
    numberOfSeats?: number;
    /**
     * Indicates if the application role belongs to Jira platform (`jira-core`).
     * @type {boolean}
     * @memberof ApplicationRole
     */
    platform?: boolean;
    /**
     * The count of users remaining on your license.
     * @type {number}
     * @memberof ApplicationRole
     */
    remainingSeats?: number;
    /**
     * Determines whether this application role should be selected by default on user creation.
     * @type {boolean}
     * @memberof ApplicationRole
     */
    selectedByDefault?: boolean;
    /**
     * The number of users counting against your license.
     * @type {number}
     * @memberof ApplicationRole
     */
    userCount?: number;
    /**
     * The [type of users](https://confluence.atlassian.com/x/lRW3Ng) being counted against your license.
     * @type {string}
     * @memberof ApplicationRole
     */
    userCountDescription?: string;
}
/**
 * The approval configuration of a status within a workflow. Applies only to Jira Service Management approvals.
 * @export
 * @interface ApprovalConfiguration
 */
export interface ApprovalConfiguration {
    /**
     * Whether the approval configuration is active.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    active: ApprovalConfigurationActiveEnum;
    /**
     * How the required approval count is calculated. It may be configured to require a specific number of approvals, or approval by a percentage of approvers. If the approvers source field is Approver groups, you can configure how many approvals per group are required for the request to be approved. The number will be the same across all groups.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    conditionType: ApprovalConfigurationConditionTypeEnum;
    /**
     * The number or percentage of approvals required for a request to be approved. If `conditionType` is `number`, the value must be 20 or less. If `conditionType` is `percent`, the value must be 100 or less.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    conditionValue: string;
    /**
     * A list of roles that should be excluded as possible approvers.
     * @type {Array<string | null>}
     * @memberof ApprovalConfiguration
     */
    exclude?: ApprovalConfigurationExcludeEnum | null;
    /**
     * The custom field ID of the "Approvers" or "Approver Groups" field.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    fieldId: string;
    /**
     * The custom field ID of the field used to pre-populate the Approver field. Only supports the "Affected Services" field.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    prePopulatedFieldId?: string | null;
    /**
     * The numeric ID of the transition to be executed if the request is approved.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    transitionApproved: string;
    /**
     * The numeric ID of the transition to be executed if the request is declined.
     * @type {string}
     * @memberof ApprovalConfiguration
     */
    transitionRejected: string;
}


/**
 * @export
 */
export const ApprovalConfigurationActiveEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ApprovalConfigurationActiveEnum = typeof ApprovalConfigurationActiveEnum[keyof typeof ApprovalConfigurationActiveEnum];

/**
 * @export
 */
export const ApprovalConfigurationConditionTypeEnum = {
    Number: 'number',
    Percent: 'percent',
    NumberPerPrincipal: 'numberPerPrincipal'
} as const;
export type ApprovalConfigurationConditionTypeEnum = typeof ApprovalConfigurationConditionTypeEnum[keyof typeof ApprovalConfigurationConditionTypeEnum];

/**
 * @export
 */
export const ApprovalConfigurationExcludeEnum = {
    Assignee: 'assignee',
    Reporter: 'reporter'
} as const;
export type ApprovalConfigurationExcludeEnum = typeof ApprovalConfigurationExcludeEnum[keyof typeof ApprovalConfigurationExcludeEnum];

/**
 * 
 * @export
 * @interface ArchiveIssueAsyncRequest
 */
export interface ArchiveIssueAsyncRequest {
    /**
     * 
     * @type {string}
     * @memberof ArchiveIssueAsyncRequest
     */
    jql?: string;
}
/**
 * Details of a filter for exporting archived issues.
 * @export
 * @interface ArchivedIssuesFilterRequest
 */
export interface ArchivedIssuesFilterRequest {
    [key: string]: any | any;
    /**
     * List archived issues archived by a specified account ID.
     * @type {Array<string>}
     * @memberof ArchivedIssuesFilterRequest
     */
    archivedBy?: Array<string>;
    /**
     * 
     * @type {DateRangeFilterRequest}
     * @memberof ArchivedIssuesFilterRequest
     */
    archivedDateRange?: DateRangeFilterRequest;
    /**
     * List archived issues with a specified issue type ID.
     * @type {Array<string>}
     * @memberof ArchivedIssuesFilterRequest
     */
    issueTypes?: Array<string>;
    /**
     * List archived issues with a specified project key.
     * @type {Array<string>}
     * @memberof ArchivedIssuesFilterRequest
     */
    projects?: Array<string>;
    /**
     * List archived issues where the reporter is a specified account ID.
     * @type {Array<string>}
     * @memberof ArchivedIssuesFilterRequest
     */
    reporters?: Array<string>;
}
/**
 * Details of a field configuration to issue type mappings.
 * @export
 * @interface AssociateFieldConfigurationsWithIssueTypesRequest
 */
export interface AssociateFieldConfigurationsWithIssueTypesRequest {
    /**
     * Field configuration to issue type mappings.
     * @type {Set<FieldConfigurationToIssueTypeMapping>}
     * @memberof AssociateFieldConfigurationsWithIssueTypesRequest
     */
    mappings: Array<FieldConfigurationToIssueTypeMapping>;
}
/**
 * Issue security scheme, project, and remapping details.
 * @export
 * @interface AssociateSecuritySchemeWithProjectDetails
 */
export interface AssociateSecuritySchemeWithProjectDetails {
    /**
     * The list of scheme levels which should be remapped to new levels of the issue security scheme.
     * @type {Array<OldToNewSecurityLevelMappingsBean>}
     * @memberof AssociateSecuritySchemeWithProjectDetails
     */
    oldToNewSecurityLevelMappings?: Array<OldToNewSecurityLevelMappingsBean>;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof AssociateSecuritySchemeWithProjectDetails
     */
    projectId: string;
    /**
     * The ID of the issue security scheme. Providing null will clear the association with the issue security scheme.
     * @type {string}
     * @memberof AssociateSecuritySchemeWithProjectDetails
     */
    schemeId: string;
}
/**
 * Details of an item associated with the changed record.
 * @export
 * @interface AssociatedItemBean
 */
export interface AssociatedItemBean {
    /**
     * The ID of the associated record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly id?: string;
    /**
     * The name of the associated record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly name?: string;
    /**
     * The ID of the associated parent record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly parentId?: string;
    /**
     * The name of the associated parent record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly parentName?: string;
    /**
     * The type of the associated record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly typeName?: string;
}
/**
 * Details about an attachment.
 * @export
 * @interface Attachment
 */
export interface Attachment {
    [key: string]: any | any;
    /**
     * Details of the user who added the attachment.
     * @type {UserDetails}
     * @memberof Attachment
     */
    readonly author?: UserDetails;
    /**
     * The content of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly content?: string;
    /**
     * The datetime the attachment was created.
     * @type {string}
     * @memberof Attachment
     */
    readonly created?: string;
    /**
     * The file name of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly filename?: string;
    /**
     * The ID of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly id?: string;
    /**
     * The MIME type of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly mimeType?: string;
    /**
     * The URL of the attachment details response.
     * @type {string}
     * @memberof Attachment
     */
    readonly self?: string;
    /**
     * The size of the attachment.
     * @type {number}
     * @memberof Attachment
     */
    readonly size?: number;
    /**
     * The URL of a thumbnail representing the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly thumbnail?: string;
}
/**
 * 
 * @export
 * @interface AttachmentArchive
 */
export interface AttachmentArchive {
    /**
     * 
     * @type {Array<AttachmentArchiveEntry>}
     * @memberof AttachmentArchive
     */
    entries?: Array<AttachmentArchiveEntry>;
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentArchive
     */
    moreAvailable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchive
     */
    totalEntryCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchive
     */
    totalNumberOfEntriesAvailable?: number;
}
/**
 * 
 * @export
 * @interface AttachmentArchiveEntry
 */
export interface AttachmentArchiveEntry {
    /**
     * 
     * @type {string}
     * @memberof AttachmentArchiveEntry
     */
    abbreviatedName?: string;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchiveEntry
     */
    entryIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof AttachmentArchiveEntry
     */
    mediaType?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentArchiveEntry
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchiveEntry
     */
    size?: number;
}
/**
 * 
 * @export
 * @interface AttachmentArchiveImpl
 */
export interface AttachmentArchiveImpl {
    /**
     * The list of the items included in the archive.
     * @type {Array<AttachmentArchiveEntry>}
     * @memberof AttachmentArchiveImpl
     */
    entries?: Array<AttachmentArchiveEntry>;
    /**
     * The number of items in the archive.
     * @type {number}
     * @memberof AttachmentArchiveImpl
     */
    totalEntryCount?: number;
}
/**
 * Metadata for an item in an attachment archive.
 * @export
 * @interface AttachmentArchiveItemReadable
 */
export interface AttachmentArchiveItemReadable {
    /**
     * The position of the item within the archive.
     * @type {number}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly index?: number;
    /**
     * The label for the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly label?: string;
    /**
     * The MIME type of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly mediaType?: string;
    /**
     * The path of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly path?: string;
    /**
     * The size of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly size?: string;
}
/**
 * Metadata for an archive (for example a zip) and its contents.
 * @export
 * @interface AttachmentArchiveMetadataReadable
 */
export interface AttachmentArchiveMetadataReadable {
    /**
     * The list of the items included in the archive.
     * @type {Array<AttachmentArchiveItemReadable>}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly entries?: Array<AttachmentArchiveItemReadable>;
    /**
     * The ID of the attachment.
     * @type {number}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly id?: number;
    /**
     * The MIME type of the attachment.
     * @type {string}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly mediaType?: string;
    /**
     * The name of the archive file.
     * @type {string}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly name?: string;
    /**
     * The number of items included in the archive.
     * @type {number}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly totalEntryCount?: number;
}
/**
 * Metadata for an issue attachment.
 * @export
 * @interface AttachmentMetadata
 */
export interface AttachmentMetadata {
    /**
     * Details of the user who attached the file.
     * @type {User}
     * @memberof AttachmentMetadata
     */
    readonly author?: User;
    /**
     * The URL of the attachment.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly content?: string;
    /**
     * The datetime the attachment was created.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly created?: string;
    /**
     * The name of the attachment file.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly filename?: string;
    /**
     * The ID of the attachment.
     * @type {number}
     * @memberof AttachmentMetadata
     */
    readonly id?: number;
    /**
     * The MIME type of the attachment.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly mimeType?: string;
    /**
     * Additional properties of the attachment.
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentMetadata
     */
    readonly properties?: { [key: string]: any; };
    /**
     * The URL of the attachment metadata details.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly self?: string;
    /**
     * The size of the attachment.
     * @type {number}
     * @memberof AttachmentMetadata
     */
    readonly size?: number;
    /**
     * The URL of a thumbnail representing the attachment.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly thumbnail?: string;
}
/**
 * Details of the instance's attachment settings.
 * @export
 * @interface AttachmentSettings
 */
export interface AttachmentSettings {
    /**
     * Whether the ability to add attachments is enabled.
     * @type {boolean}
     * @memberof AttachmentSettings
     */
    readonly enabled?: boolean;
    /**
     * The maximum size of attachments permitted, in bytes.
     * @type {number}
     * @memberof AttachmentSettings
     */
    readonly uploadLimit?: number;
}
/**
 * An audit record.
 * @export
 * @interface AuditRecordBean
 */
export interface AuditRecordBean {
    /**
     * The list of items associated with the changed record.
     * @type {Array<AssociatedItemBean>}
     * @memberof AuditRecordBean
     */
    readonly associatedItems?: Array<AssociatedItemBean>;
    /**
     * Deprecated, use `authorAccountId` instead. The key of the user who created the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly authorKey?: string;
    /**
     * The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM).
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly category?: string;
    /**
     * The list of values changed in the record event.
     * @type {Array<ChangedValueBean>}
     * @memberof AuditRecordBean
     */
    readonly changedValues?: Array<ChangedValueBean>;
    /**
     * The date and time on which the audit record was created.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly created?: string;
    /**
     * The description of the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly description?: string;
    /**
     * The event the audit record originated from.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly eventSource?: string;
    /**
     * The ID of the audit record.
     * @type {number}
     * @memberof AuditRecordBean
     */
    readonly id?: number;
    /**
     * 
     * @type {AssociatedItemBean}
     * @memberof AuditRecordBean
     */
    objectItem?: AssociatedItemBean;
    /**
     * The URL of the computer where the creation of the audit record was initiated.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly remoteAddress?: string;
    /**
     * The summary of the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly summary?: string;
}
/**
 * Container for a list of audit records.
 * @export
 * @interface AuditRecords
 */
export interface AuditRecords {
    /**
     * The requested or default limit on the number of audit items to be returned.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly limit?: number;
    /**
     * The number of audit items skipped before the first item in this list.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly offset?: number;
    /**
     * The list of audit items.
     * @type {Array<AuditRecordBean>}
     * @memberof AuditRecords
     */
    readonly records?: Array<AuditRecordBean>;
    /**
     * The total number of audit items returned.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly total?: number;
}
/**
 * A field auto-complete suggestion.
 * @export
 * @interface AutoCompleteSuggestion
 */
export interface AutoCompleteSuggestion {
    /**
     * The display name of a suggested item. If `fieldValue` or `predicateValue` are provided, the matching text is highlighted with the HTML bold tag.
     * @type {string}
     * @memberof AutoCompleteSuggestion
     */
    displayName?: string;
    /**
     * The value of a suggested item.
     * @type {string}
     * @memberof AutoCompleteSuggestion
     */
    value?: string;
}
/**
 * The results from a JQL query.
 * @export
 * @interface AutoCompleteSuggestions
 */
export interface AutoCompleteSuggestions {
    /**
     * The list of suggested item.
     * @type {Array<AutoCompleteSuggestion>}
     * @memberof AutoCompleteSuggestions
     */
    results?: Array<AutoCompleteSuggestion>;
}
/**
 * The details of the available dashboard gadget.
 * @export
 * @interface AvailableDashboardGadget
 */
export interface AvailableDashboardGadget {
    /**
     * The module key of the gadget type.
     * @type {string}
     * @memberof AvailableDashboardGadget
     */
    readonly moduleKey?: string;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof AvailableDashboardGadget
     */
    readonly title: string;
    /**
     * The URI of the gadget type.
     * @type {string}
     * @memberof AvailableDashboardGadget
     */
    readonly uri?: string;
}
/**
 * The list of available gadgets.
 * @export
 * @interface AvailableDashboardGadgetsResponse
 */
export interface AvailableDashboardGadgetsResponse {
    /**
     * The list of available gadgets.
     * @type {Array<AvailableDashboardGadget>}
     * @memberof AvailableDashboardGadgetsResponse
     */
    readonly gadgets: Array<AvailableDashboardGadget>;
}
/**
 * The Connect provided ecosystem rules available.
 * @export
 * @interface AvailableWorkflowConnectRule
 */
export interface AvailableWorkflowConnectRule {
    /**
     * The add-on providing the rule.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    addonKey?: string;
    /**
     * The URL creation path segment defined in the Connect module.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    createUrl?: string;
    /**
     * The rule description.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    description?: string;
    /**
     * The URL edit path segment defined in the Connect module.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    editUrl?: string;
    /**
     * The module providing the rule.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    moduleKey?: string;
    /**
     * The rule name.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    name?: string;
    /**
     * The rule key.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    ruleKey?: string;
    /**
     * The rule type.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    ruleType?: AvailableWorkflowConnectRuleRuleTypeEnum;
    /**
     * The URL view path segment defined in the Connect module.
     * @type {string}
     * @memberof AvailableWorkflowConnectRule
     */
    viewUrl?: string;
}


/**
 * @export
 */
export const AvailableWorkflowConnectRuleRuleTypeEnum = {
    Condition: 'Condition',
    Validator: 'Validator',
    Function: 'Function',
    Screen: 'Screen'
} as const;
export type AvailableWorkflowConnectRuleRuleTypeEnum = typeof AvailableWorkflowConnectRuleRuleTypeEnum[keyof typeof AvailableWorkflowConnectRuleRuleTypeEnum];

/**
 * The Forge provided ecosystem rules available.
 * @export
 * @interface AvailableWorkflowForgeRule
 */
export interface AvailableWorkflowForgeRule {
    /**
     * The rule description.
     * @type {string}
     * @memberof AvailableWorkflowForgeRule
     */
    description?: string;
    /**
     * The unique ARI of the forge rule type.
     * @type {string}
     * @memberof AvailableWorkflowForgeRule
     */
    id?: string;
    /**
     * The rule name.
     * @type {string}
     * @memberof AvailableWorkflowForgeRule
     */
    name?: string;
    /**
     * The rule key.
     * @type {string}
     * @memberof AvailableWorkflowForgeRule
     */
    ruleKey?: string;
    /**
     * The rule type.
     * @type {string}
     * @memberof AvailableWorkflowForgeRule
     */
    ruleType?: AvailableWorkflowForgeRuleRuleTypeEnum;
}


/**
 * @export
 */
export const AvailableWorkflowForgeRuleRuleTypeEnum = {
    Condition: 'Condition',
    Validator: 'Validator',
    Function: 'Function',
    Screen: 'Screen'
} as const;
export type AvailableWorkflowForgeRuleRuleTypeEnum = typeof AvailableWorkflowForgeRuleRuleTypeEnum[keyof typeof AvailableWorkflowForgeRuleRuleTypeEnum];

/**
 * The Atlassian provided system rules available.
 * @export
 * @interface AvailableWorkflowSystemRule
 */
export interface AvailableWorkflowSystemRule {
    /**
     * The rule description.
     * @type {string}
     * @memberof AvailableWorkflowSystemRule
     */
    description: string;
    /**
     * List of rules that conflict with this one.
     * @type {Array<string>}
     * @memberof AvailableWorkflowSystemRule
     */
    incompatibleRuleKeys: Array<string>;
    /**
     * Whether the rule can be added added to an initial transition.
     * @type {boolean}
     * @memberof AvailableWorkflowSystemRule
     */
    isAvailableForInitialTransition: boolean;
    /**
     * Whether the rule is visible.
     * @type {boolean}
     * @memberof AvailableWorkflowSystemRule
     */
    isVisible: boolean;
    /**
     * The rule name.
     * @type {string}
     * @memberof AvailableWorkflowSystemRule
     */
    name: string;
    /**
     * The rule key.
     * @type {string}
     * @memberof AvailableWorkflowSystemRule
     */
    ruleKey: string;
    /**
     * The rule type.
     * @type {string}
     * @memberof AvailableWorkflowSystemRule
     */
    ruleType: AvailableWorkflowSystemRuleRuleTypeEnum;
}


/**
 * @export
 */
export const AvailableWorkflowSystemRuleRuleTypeEnum = {
    Condition: 'Condition',
    Validator: 'Validator',
    Function: 'Function',
    Screen: 'Screen'
} as const;
export type AvailableWorkflowSystemRuleRuleTypeEnum = typeof AvailableWorkflowSystemRuleRuleTypeEnum[keyof typeof AvailableWorkflowSystemRuleRuleTypeEnum];

/**
 * The list of available trigger types.
 * @export
 * @interface AvailableWorkflowTriggerTypes
 */
export interface AvailableWorkflowTriggerTypes {
    /**
     * The description of the trigger rule.
     * @type {string}
     * @memberof AvailableWorkflowTriggerTypes
     */
    description?: string;
    /**
     * The name of the trigger rule.
     * @type {string}
     * @memberof AvailableWorkflowTriggerTypes
     */
    name?: string;
    /**
     * The type identifier of trigger rule.
     * @type {string}
     * @memberof AvailableWorkflowTriggerTypes
     */
    type?: string;
}
/**
 * The trigger rules available.
 * @export
 * @interface AvailableWorkflowTriggers
 */
export interface AvailableWorkflowTriggers {
    /**
     * The list of available trigger types.
     * @type {Array<AvailableWorkflowTriggerTypes>}
     * @memberof AvailableWorkflowTriggers
     */
    availableTypes: Array<AvailableWorkflowTriggerTypes>;
    /**
     * The rule key of the rule.
     * @type {string}
     * @memberof AvailableWorkflowTriggers
     */
    ruleKey: string;
}
/**
 * Details of an avatar.
 * @export
 * @interface Avatar
 */
export interface Avatar {
    [key: string]: any | any;
    /**
     * The file name of the avatar icon. Returned for system avatars.
     * @type {string}
     * @memberof Avatar
     */
    readonly fileName?: string;
    /**
     * The ID of the avatar.
     * @type {string}
     * @memberof Avatar
     */
    id: string;
    /**
     * Whether the avatar can be deleted.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isDeletable?: boolean;
    /**
     * Whether the avatar is used in Jira. For example, shown as a project's avatar.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isSelected?: boolean;
    /**
     * Whether the avatar is a system avatar.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isSystemAvatar?: boolean;
    /**
     * The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.
     * @type {string}
     * @memberof Avatar
     */
    readonly owner?: string;
    /**
     * The list of avatar icon URLs.
     * @type {{ [key: string]: string; }}
     * @memberof Avatar
     */
    readonly urls?: { [key: string]: string; };
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
 * Details about system and custom avatars.
 * @export
 * @interface Avatars
 */
export interface Avatars {
    /**
     * Custom avatars list.
     * @type {Array<Avatar>}
     * @memberof Avatars
     */
    readonly custom?: Array<Avatar>;
    /**
     * System avatars list.
     * @type {Array<Avatar>}
     * @memberof Avatars
     */
    readonly system?: Array<Avatar>;
}
/**
 * Details for changing owners of shareable entities
 * @export
 * @interface BulkChangeOwnerDetails
 */
export interface BulkChangeOwnerDetails {
    /**
     * Whether the name is fixed automatically if it's duplicated after changing owner.
     * @type {boolean}
     * @memberof BulkChangeOwnerDetails
     */
    autofixName: boolean;
    /**
     * The account id of the new owner.
     * @type {string}
     * @memberof BulkChangeOwnerDetails
     */
    newOwner: string;
}
/**
 * Request bean for bulk changelog retrieval
 * @export
 * @interface BulkChangelogRequestBean
 */
export interface BulkChangelogRequestBean {
    /**
     * List of field IDs to filter changelogs
     * @type {Set<string>}
     * @memberof BulkChangelogRequestBean
     */
    fieldIds?: Array<string>;
    /**
     * List of issue IDs/keys to fetch changelogs for
     * @type {Array<string>}
     * @memberof BulkChangelogRequestBean
     */
    issueIdsOrKeys: Array<string>;
    /**
     * The maximum number of items to return per page
     * @type {number}
     * @memberof BulkChangelogRequestBean
     */
    maxResults?: number;
    /**
     * The cursor for pagination
     * @type {string}
     * @memberof BulkChangelogRequestBean
     */
    nextPageToken?: string;
}
/**
 * A page of changelogs which is designed to handle multiple issues
 * @export
 * @interface BulkChangelogResponseBean
 */
export interface BulkChangelogResponseBean {
    /**
     * The list of issues changelogs.
     * @type {Array<IssueChangeLog>}
     * @memberof BulkChangelogResponseBean
     */
    readonly issueChangeLogs?: Array<IssueChangeLog>;
    /**
     * Continuation token to fetch the next page. If this result represents the last or the only page, this token will be null.
     * @type {string}
     * @memberof BulkChangelogResponseBean
     */
    readonly nextPageToken?: string;
}
/**
 * Details of the contextual configuration for a custom field.
 * @export
 * @interface BulkContextualConfiguration
 */
export interface BulkContextualConfiguration {
    /**
     * The field configuration.
     * @type {any}
     * @memberof BulkContextualConfiguration
     */
    configuration?: any | null;
    /**
     * The ID of the custom field.
     * @type {string}
     * @memberof BulkContextualConfiguration
     */
    customFieldId: string;
    /**
     * The ID of the field context the configuration is associated with.
     * @type {string}
     * @memberof BulkContextualConfiguration
     */
    readonly fieldContextId: string;
    /**
     * The ID of the configuration.
     * @type {string}
     * @memberof BulkContextualConfiguration
     */
    id: string;
    /**
     * The field value schema.
     * @type {any}
     * @memberof BulkContextualConfiguration
     */
    schema?: any | null;
}
/**
 * Details of the options to create for a custom field.
 * @export
 * @interface BulkCustomFieldOptionCreateRequest
 */
export interface BulkCustomFieldOptionCreateRequest {
    /**
     * Details of options to create.
     * @type {Array<CustomFieldOptionCreate>}
     * @memberof BulkCustomFieldOptionCreateRequest
     */
    options?: Array<CustomFieldOptionCreate>;
}
/**
 * Details of the options to update for a custom field.
 * @export
 * @interface BulkCustomFieldOptionUpdateRequest
 */
export interface BulkCustomFieldOptionUpdateRequest {
    /**
     * Details of the options to update.
     * @type {Array<CustomFieldOptionUpdate>}
     * @memberof BulkCustomFieldOptionUpdateRequest
     */
    options?: Array<CustomFieldOptionUpdate>;
}
/**
 * Errors of bulk edit action.
 * @export
 * @interface BulkEditActionError
 */
export interface BulkEditActionError {
    /**
     * The error messages.
     * @type {Array<string>}
     * @memberof BulkEditActionError
     */
    errorMessages: Array<string>;
    /**
     * The errors.
     * @type {{ [key: string]: string; }}
     * @memberof BulkEditActionError
     */
    errors: { [key: string]: string; };
}
/**
 * Bulk Edit Get Fields Response.
 * @export
 * @interface BulkEditGetFields
 */
export interface BulkEditGetFields {
    /**
     * The end cursor for use in pagination.
     * @type {string}
     * @memberof BulkEditGetFields
     */
    readonly endingBefore?: string;
    /**
     * List of all the fields
     * @type {Array<IssueBulkEditField>}
     * @memberof BulkEditGetFields
     */
    readonly fields?: Array<IssueBulkEditField>;
    /**
     * The start cursor for use in pagination.
     * @type {string}
     * @memberof BulkEditGetFields
     */
    readonly startingAfter?: string;
}
/**
 * Details of a request to bulk edit shareable entity.
 * @export
 * @interface BulkEditShareableEntityRequest
 */
export interface BulkEditShareableEntityRequest {
    /**
     * Allowed action for bulk edit shareable entity
     * @type {string}
     * @memberof BulkEditShareableEntityRequest
     */
    action: BulkEditShareableEntityRequestActionEnum;
    /**
     * The details of change owner action.
     * @type {BulkChangeOwnerDetails}
     * @memberof BulkEditShareableEntityRequest
     */
    changeOwnerDetails?: BulkChangeOwnerDetails;
    /**
     * The id list of shareable entities to be changed.
     * @type {Set<number>}
     * @memberof BulkEditShareableEntityRequest
     */
    entityIds: Array<number>;
    /**
     * Whether the actions are executed by users with Administer Jira global permission.
     * @type {boolean}
     * @memberof BulkEditShareableEntityRequest
     */
    extendAdminPermissions?: boolean;
    /**
     * The permission details to be changed.
     * @type {PermissionDetails}
     * @memberof BulkEditShareableEntityRequest
     */
    permissionDetails?: PermissionDetails;
}


/**
 * @export
 */
export const BulkEditShareableEntityRequestActionEnum = {
    ChangeOwner: 'changeOwner',
    ChangePermission: 'changePermission',
    AddPermission: 'addPermission',
    RemovePermission: 'removePermission'
} as const;
export type BulkEditShareableEntityRequestActionEnum = typeof BulkEditShareableEntityRequestActionEnum[keyof typeof BulkEditShareableEntityRequestActionEnum];

/**
 * Details of a request to bulk edit shareable entity.
 * @export
 * @interface BulkEditShareableEntityResponse
 */
export interface BulkEditShareableEntityResponse {
    /**
     * Allowed action for bulk edit shareable entity
     * @type {string}
     * @memberof BulkEditShareableEntityResponse
     */
    action: BulkEditShareableEntityResponseActionEnum;
    /**
     * The mapping dashboard id to errors if any.
     * @type {{ [key: string]: BulkEditActionError; }}
     * @memberof BulkEditShareableEntityResponse
     */
    entityErrors?: { [key: string]: BulkEditActionError; };
}


/**
 * @export
 */
export const BulkEditShareableEntityResponseActionEnum = {
    ChangeOwner: 'changeOwner',
    ChangePermission: 'changePermission',
    AddPermission: 'addPermission',
    RemovePermission: 'removePermission'
} as const;
export type BulkEditShareableEntityResponseActionEnum = typeof BulkEditShareableEntityResponseActionEnum[keyof typeof BulkEditShareableEntityResponseActionEnum];

/**
 * 
 * @export
 * @interface BulkFetchIssueRequestBean
 */
export interface BulkFetchIssueRequestBean {
    /**
     * Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:
     * 
     *  *  `renderedFields` Returns field values rendered in HTML format.
     *  *  `names` Returns the display name of each field.
     *  *  `schema` Returns the schema describing a field type.
     *  *  `transitions` Returns all possible transitions for the issue.
     *  *  `operations` Returns all possible operations for the issue.
     *  *  `editmeta` Returns information about how each field can be edited.
     *  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
     * @type {Array<string>}
     * @memberof BulkFetchIssueRequestBean
     */
    expand?: Array<string>;
    /**
     * A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
     * 
     *  *  `*all` Returns all fields.
     *  *  `*navigable` Returns navigable fields.
     *  *  Any issue field, prefixed with a minus to exclude.
     * 
     * The default is `*navigable`.
     * 
     * Examples:
     * 
     *  *  `summary,comment` Returns the summary and comments fields only.
     *  *  `-description` Returns all navigable (default) fields except description.
     *  *  `*all,-comment` Returns all fields except comments.
     * 
     * Multiple `fields` parameters can be included in a request.
     * 
     * Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
     * @type {Array<string>}
     * @memberof BulkFetchIssueRequestBean
     */
    fields?: Array<string>;
    /**
     * Reference fields by their key (rather than ID). The default is `false`.
     * @type {boolean}
     * @memberof BulkFetchIssueRequestBean
     */
    fieldsByKeys?: boolean;
    /**
     * An array of issue IDs or issue keys to fetch. You can mix issue IDs and keys in the same query.
     * @type {Array<string>}
     * @memberof BulkFetchIssueRequestBean
     */
    issueIdsOrKeys: Array<string>;
    /**
     * A list of issue property keys of issue properties to be included in the results. A maximum of 5 issue property keys can be specified.
     * @type {Array<string>}
     * @memberof BulkFetchIssueRequestBean
     */
    properties?: Array<string>;
}
/**
 * A container for the watch status of a list of issues.
 * @export
 * @interface BulkIssueIsWatching
 */
export interface BulkIssueIsWatching {
    /**
     * The map of issue ID to boolean watch status.
     * @type {{ [key: string]: boolean; }}
     * @memberof BulkIssueIsWatching
     */
    readonly issuesIsWatching?: { [key: string]: boolean; };
}
/**
 * Bulk issue property update request details.
 * @export
 * @interface BulkIssuePropertyUpdateRequest
 */
export interface BulkIssuePropertyUpdateRequest {
    /**
     * EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are `issue` and `user`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored.
     * @type {string}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    expression?: string;
    /**
     * The bulk operation filter.
     * @type {IssueFilterForBulkPropertySet}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    filter?: IssueFilterForBulkPropertySet;
    /**
     * The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
     * @type {any}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    value?: any | null;
}
/**
 * The list of requested issues & fields.
 * @export
 * @interface BulkIssueResults
 */
export interface BulkIssueResults {
    /**
     * When Jira can't return an issue enumerated in a request due to a retriable error or payload constraint, we'll return the respective issue ID with a corresponding error message. This list is empty when there are no errors Issues which aren't found or that the user doesn't have permission to view won't be returned in this list.
     * @type {Array<IssueError>}
     * @memberof BulkIssueResults
     */
    readonly issueErrors?: Array<IssueError>;
    /**
     * The list of issues.
     * @type {Array<IssueBean>}
     * @memberof BulkIssueResults
     */
    readonly issues?: Array<IssueBean>;
}
/**
 * 
 * @export
 * @interface BulkOperationErrorResponse
 */
export interface BulkOperationErrorResponse {
    /**
     * 
     * @type {Array<ErrorMessage>}
     * @memberof BulkOperationErrorResponse
     */
    errors?: Array<ErrorMessage>;
}
/**
 * 
 * @export
 * @interface BulkOperationErrorResult
 */
export interface BulkOperationErrorResult {
    /**
     * 
     * @type {ErrorCollection}
     * @memberof BulkOperationErrorResult
     */
    elementErrors?: ErrorCollection;
    /**
     * 
     * @type {number}
     * @memberof BulkOperationErrorResult
     */
    failedElementNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkOperationErrorResult
     */
    status?: number;
}
/**
 * 
 * @export
 * @interface BulkOperationProgress
 */
export interface BulkOperationProgress {
    /**
     * A timestamp of when the task was submitted.
     * @type {string}
     * @memberof BulkOperationProgress
     */
    created?: string;
    /**
     * Map of issue IDs for which the operation failed and that the user has permission to view, to their one or more reasons for failure. These reasons are open-ended text descriptions of the error and are not selected from a predefined list of standard reasons.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BulkOperationProgress
     */
    failedAccessibleIssues?: { [key: string]: Array<string>; };
    /**
     * The number of issues that are either invalid or issues that the user doesn't have permission to view, regardless of the success or failure of the operation.
     * @type {number}
     * @memberof BulkOperationProgress
     */
    invalidOrInaccessibleIssueCount?: number;
    /**
     * List of issue IDs for which the operation was successful and that the user has permission to view.
     * @type {Array<number>}
     * @memberof BulkOperationProgress
     */
    processedAccessibleIssues?: Array<number>;
    /**
     * Progress of the task as a percentage.
     * @type {number}
     * @memberof BulkOperationProgress
     */
    progressPercent?: number;
    /**
     * A timestamp of when the task was started.
     * @type {string}
     * @memberof BulkOperationProgress
     */
    started?: string;
    /**
     * The status of the task.
     * @type {string}
     * @memberof BulkOperationProgress
     */
    status?: BulkOperationProgressStatusEnum;
    /**
     * 
     * @type {User}
     * @memberof BulkOperationProgress
     */
    submittedBy?: User;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof BulkOperationProgress
     */
    readonly taskId?: string;
    /**
     * The number of issues that the bulk operation was attempted on.
     * @type {number}
     * @memberof BulkOperationProgress
     */
    totalIssueCount?: number;
    /**
     * A timestamp of when the task progress was last updated.
     * @type {string}
     * @memberof BulkOperationProgress
     */
    updated?: string;
}


/**
 * @export
 */
export const BulkOperationProgressStatusEnum = {
    Enqueued: 'ENQUEUED',
    Running: 'RUNNING',
    Complete: 'COMPLETE',
    Failed: 'FAILED',
    CancelRequested: 'CANCEL_REQUESTED',
    Cancelled: 'CANCELLED',
    Dead: 'DEAD'
} as const;
export type BulkOperationProgressStatusEnum = typeof BulkOperationProgressStatusEnum[keyof typeof BulkOperationProgressStatusEnum];

/**
 * Details of global and project permissions granted to the user.
 * @export
 * @interface BulkPermissionGrants
 */
export interface BulkPermissionGrants {
    /**
     * List of permissions granted to the user.
     * @type {Set<string>}
     * @memberof BulkPermissionGrants
     */
    globalPermissions: Array<string>;
    /**
     * List of project permissions and the projects and issues those permissions provide access to.
     * @type {Set<BulkProjectPermissionGrants>}
     * @memberof BulkPermissionGrants
     */
    projectPermissions: Array<BulkProjectPermissionGrants>;
}
/**
 * Details of global permissions to look up and project permissions with associated projects and issues to look up.
 * @export
 * @interface BulkPermissionsRequestBean
 */
export interface BulkPermissionsRequestBean {
    /**
     * The account ID of a user.
     * @type {string}
     * @memberof BulkPermissionsRequestBean
     */
    accountId?: string;
    /**
     * Global permissions to look up.
     * @type {Set<string>}
     * @memberof BulkPermissionsRequestBean
     */
    globalPermissions?: Array<string>;
    /**
     * Project permissions with associated projects and issues to look up.
     * @type {Set<BulkProjectPermissions>}
     * @memberof BulkPermissionsRequestBean
     */
    projectPermissions?: Array<BulkProjectPermissions>;
}
/**
 * List of project permissions and the projects and issues those permissions grant access to.
 * @export
 * @interface BulkProjectPermissionGrants
 */
export interface BulkProjectPermissionGrants {
    /**
     * IDs of the issues the user has the permission for.
     * @type {Set<number>}
     * @memberof BulkProjectPermissionGrants
     */
    issues: Array<number>;
    /**
     * A project permission,
     * @type {string}
     * @memberof BulkProjectPermissionGrants
     */
    permission: string;
    /**
     * IDs of the projects the user has the permission for.
     * @type {Set<number>}
     * @memberof BulkProjectPermissionGrants
     */
    projects: Array<number>;
}
/**
 * Details of project permissions and associated issues and projects to look up.
 * @export
 * @interface BulkProjectPermissions
 */
export interface BulkProjectPermissions {
    /**
     * List of issue IDs.
     * @type {Set<number>}
     * @memberof BulkProjectPermissions
     */
    issues?: Array<number>;
    /**
     * List of project permissions.
     * @type {Set<string>}
     * @memberof BulkProjectPermissions
     */
    permissions: Array<string>;
    /**
     * List of project IDs.
     * @type {Set<number>}
     * @memberof BulkProjectPermissions
     */
    projects?: Array<number>;
}
/**
 * Bulk Transition Get Available Transitions Response.
 * @export
 * @interface BulkTransitionGetAvailableTransitions
 */
export interface BulkTransitionGetAvailableTransitions {
    /**
     * List of available transitions for bulk transition operation for requested issues grouped by workflow
     * @type {Array<IssueBulkTransitionForWorkflow>}
     * @memberof BulkTransitionGetAvailableTransitions
     */
    readonly availableTransitions?: Array<IssueBulkTransitionForWorkflow>;
    /**
     * The end cursor for use in pagination.
     * @type {string}
     * @memberof BulkTransitionGetAvailableTransitions
     */
    readonly endingBefore?: string;
    /**
     * The start cursor for use in pagination.
     * @type {string}
     * @memberof BulkTransitionGetAvailableTransitions
     */
    readonly startingAfter?: string;
}
/**
 * 
 * @export
 * @interface BulkTransitionSubmitInput
 */
export interface BulkTransitionSubmitInput {
    /**
     * List of all the issue IDs or keys that are to be bulk transitioned.
     * @type {Array<string>}
     * @memberof BulkTransitionSubmitInput
     */
    selectedIssueIdsOrKeys: Array<string>;
    /**
     * The ID of the transition that is to be performed on the issues.
     * @type {string}
     * @memberof BulkTransitionSubmitInput
     */
    transitionId: string;
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
 * The account ID of the new owner.
 * @export
 * @interface ChangeFilterOwner
 */
export interface ChangeFilterOwner {
    /**
     * The account ID of the new owner.
     * @type {string}
     * @memberof ChangeFilterOwner
     */
    accountId: string;
}
/**
 * Details of names changed in the record event.
 * @export
 * @interface ChangedValueBean
 */
export interface ChangedValueBean {
    /**
     * The value of the field before the change.
     * @type {string}
     * @memberof ChangedValueBean
     */
    readonly changedFrom?: string;
    /**
     * The value of the field after the change.
     * @type {string}
     * @memberof ChangedValueBean
     */
    readonly changedTo?: string;
    /**
     * The name of the field changed.
     * @type {string}
     * @memberof ChangedValueBean
     */
    readonly fieldName?: string;
}
/**
 * Details of a changed worklog.
 * @export
 * @interface ChangedWorklog
 */
export interface ChangedWorklog {
    /**
     * Details of properties associated with the change.
     * @type {Array<EntityProperty>}
     * @memberof ChangedWorklog
     */
    readonly properties?: Array<EntityProperty>;
    /**
     * The datetime of the change.
     * @type {number}
     * @memberof ChangedWorklog
     */
    readonly updatedTime?: number;
    /**
     * The ID of the worklog.
     * @type {number}
     * @memberof ChangedWorklog
     */
    readonly worklogId?: number;
}
/**
 * List of changed worklogs.
 * @export
 * @interface ChangedWorklogs
 */
export interface ChangedWorklogs {
    /**
     * 
     * @type {boolean}
     * @memberof ChangedWorklogs
     */
    lastPage?: boolean;
    /**
     * The URL of the next list of changed worklogs.
     * @type {string}
     * @memberof ChangedWorklogs
     */
    readonly nextPage?: string;
    /**
     * The URL of this changed worklogs list.
     * @type {string}
     * @memberof ChangedWorklogs
     */
    readonly self?: string;
    /**
     * The datetime of the first worklog item in the list.
     * @type {number}
     * @memberof ChangedWorklogs
     */
    readonly since?: number;
    /**
     * The datetime of the last worklog item in the list.
     * @type {number}
     * @memberof ChangedWorklogs
     */
    readonly until?: number;
    /**
     * Changed worklog list.
     * @type {Array<ChangedWorklog>}
     * @memberof ChangedWorklogs
     */
    readonly values?: Array<ChangedWorklog>;
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
 * Details of an issue navigator column item.
 * @export
 * @interface ColumnItem
 */
export interface ColumnItem {
    /**
     * The issue navigator column label.
     * @type {string}
     * @memberof ColumnItem
     */
    label?: string;
    /**
     * The issue navigator column value.
     * @type {string}
     * @memberof ColumnItem
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface ColumnRequestBody
 */
export interface ColumnRequestBody {
    /**
     * 
     * @type {Array<string>}
     * @memberof ColumnRequestBody
     */
    columns?: Array<string>;
}
/**
 * A comment.
 * @export
 * @interface Comment
 */
export interface Comment {
    [key: string]: any | any;
    /**
     * The ID of the user who created the comment.
     * @type {UserDetails}
     * @memberof Comment
     */
    readonly author?: UserDetails;
    /**
     * The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).
     * @type {any}
     * @memberof Comment
     */
    body?: any | null;
    /**
     * The date and time at which the comment was created.
     * @type {string}
     * @memberof Comment
     */
    readonly created?: string;
    /**
     * The ID of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly id?: string;
    /**
     * Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.
     * @type {boolean}
     * @memberof Comment
     */
    readonly jsdAuthorCanSeeRequest?: boolean;
    /**
     * Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.
     * @type {boolean}
     * @memberof Comment
     */
    readonly jsdPublic?: boolean;
    /**
     * A list of comment properties. Optional on create and update.
     * @type {Array<EntityProperty>}
     * @memberof Comment
     */
    properties?: Array<EntityProperty>;
    /**
     * The rendered version of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly renderedBody?: string;
    /**
     * The URL of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly self?: string;
    /**
     * The ID of the user who updated the comment last.
     * @type {UserDetails}
     * @memberof Comment
     */
    readonly updateAuthor?: UserDetails;
    /**
     * The date and time at which the comment was updated last.
     * @type {string}
     * @memberof Comment
     */
    readonly updated?: string;
    /**
     * The group or role to which this comment is visible. Optional on create and update.
     * @type {Visibility}
     * @memberof Comment
     */
    visibility?: Visibility;
}
/**
 * Count of issues assigned to a component.
 * @export
 * @interface ComponentIssuesCount
 */
export interface ComponentIssuesCount {
    /**
     * The count of issues assigned to a component.
     * @type {number}
     * @memberof ComponentIssuesCount
     */
    readonly issueCount?: number;
    /**
     * The URL for this count of issues for a component.
     * @type {string}
     * @memberof ComponentIssuesCount
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface ComponentJsonBean
 */
export interface ComponentJsonBean {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ComponentJsonBean
     */
    ari?: string;
    /**
     * 
     * @type {string}
     * @memberof ComponentJsonBean
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ComponentJsonBean
     */
    id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ComponentJsonBean
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ComponentJsonBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ComponentJsonBean
     */
    self?: string;
}
/**
 * Details about a component with a count of the issues it contains.
 * @export
 * @interface ComponentWithIssueCount
 */
export interface ComponentWithIssueCount {
    /**
     * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
     * @type {User}
     * @memberof ComponentWithIssueCount
     */
    assignee?: User;
    /**
     * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Takes the following values:
     * 
     *  *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.
     *  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.
     *  *  `UNASSIGNED` an assignee is not set for issues created with this component.
     *  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly assigneeType?: ComponentWithIssueCountAssigneeTypeEnum;
    /**
     * The description for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly description?: string;
    /**
     * The unique identifier for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly id?: string;
    /**
     * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
     * @type {boolean}
     * @memberof ComponentWithIssueCount
     */
    readonly isAssigneeTypeValid?: boolean;
    /**
     * Count of issues for the component.
     * @type {number}
     * @memberof ComponentWithIssueCount
     */
    readonly issueCount?: number;
    /**
     * The user details for the component's lead user.
     * @type {User}
     * @memberof ComponentWithIssueCount
     */
    lead?: User;
    /**
     * The name for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly name?: string;
    /**
     * The key of the project to which the component is assigned.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly project?: string;
    /**
     * Not used.
     * @type {number}
     * @memberof ComponentWithIssueCount
     */
    readonly projectId?: number;
    /**
     * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
     * @type {User}
     * @memberof ComponentWithIssueCount
     */
    realAssignee?: User;
    /**
     * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
     * 
     *  *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.
     *  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.
     *  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.
     *  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly realAssigneeType?: ComponentWithIssueCountRealAssigneeTypeEnum;
    /**
     * The URL for this count of the issues contained in the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly self?: string;
}


/**
 * @export
 */
export const ComponentWithIssueCountAssigneeTypeEnum = {
    ProjectDefault: 'PROJECT_DEFAULT',
    ComponentLead: 'COMPONENT_LEAD',
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type ComponentWithIssueCountAssigneeTypeEnum = typeof ComponentWithIssueCountAssigneeTypeEnum[keyof typeof ComponentWithIssueCountAssigneeTypeEnum];

/**
 * @export
 */
export const ComponentWithIssueCountRealAssigneeTypeEnum = {
    ProjectDefault: 'PROJECT_DEFAULT',
    ComponentLead: 'COMPONENT_LEAD',
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type ComponentWithIssueCountRealAssigneeTypeEnum = typeof ComponentWithIssueCountRealAssigneeTypeEnum[keyof typeof ComponentWithIssueCountRealAssigneeTypeEnum];

/**
 * A JQL query clause that consists of nested clauses. For example, `(labels in (urgent, blocker) OR lastCommentedBy = currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, "A OR B AND C" is parsed as "(A OR B) AND C". See Setting the precedence of operators for more information about precedence in JQL queries.`
 * @export
 * @interface CompoundClause
 */
export interface CompoundClause {
    /**
     * The list of nested clauses.
     * @type {Array<JqlQueryClause>}
     * @memberof CompoundClause
     */
    clauses: Array<JqlQueryClause>;
    /**
     * The operator between the clauses.
     * @type {string}
     * @memberof CompoundClause
     */
    operator: CompoundClauseOperatorEnum;
}


/**
 * @export
 */
export const CompoundClauseOperatorEnum = {
    And: 'and',
    Or: 'or',
    Not: 'not'
} as const;
export type CompoundClauseOperatorEnum = typeof CompoundClauseOperatorEnum[keyof typeof CompoundClauseOperatorEnum];

/**
 * The conditions group associated with the transition.
 * @export
 * @interface ConditionGroupConfiguration
 */
export interface ConditionGroupConfiguration {
    /**
     * The nested conditions of the condition group.
     * @type {Array<ConditionGroupConfiguration>}
     * @memberof ConditionGroupConfiguration
     */
    conditionGroups?: Array<ConditionGroupConfiguration>;
    /**
     * The rules for this condition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof ConditionGroupConfiguration
     */
    conditions?: Array<WorkflowRuleConfiguration>;
    /**
     * Determines how the conditions in the group are evaluated. Accepts either `ANY` or `ALL`. If `ANY` is used, at least one condition in the group must be true for the group to evaluate to true. If `ALL` is used, all conditions in the group must be true for the group to evaluate to true.
     * @type {string}
     * @memberof ConditionGroupConfiguration
     */
    operation?: ConditionGroupConfigurationOperationEnum;
}


/**
 * @export
 */
export const ConditionGroupConfigurationOperationEnum = {
    Any: 'ANY',
    All: 'ALL'
} as const;
export type ConditionGroupConfigurationOperationEnum = typeof ConditionGroupConfigurationOperationEnum[keyof typeof ConditionGroupConfigurationOperationEnum];

/**
 * The conditions group associated with the transition.
 * @export
 * @interface ConditionGroupUpdate
 */
export interface ConditionGroupUpdate {
    /**
     * The nested conditions of the condition group.
     * @type {Array<ConditionGroupUpdate>}
     * @memberof ConditionGroupUpdate
     */
    conditionGroups?: Array<ConditionGroupUpdate>;
    /**
     * The rules for this condition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof ConditionGroupUpdate
     */
    conditions?: Array<WorkflowRuleConfiguration>;
    /**
     * Determines how the conditions in the group are evaluated. Accepts either `ANY` or `ALL`. If `ANY` is used, at least one condition in the group must be true for the group to evaluate to true. If `ALL` is used, all conditions in the group must be true for the group to evaluate to true.
     * @type {string}
     * @memberof ConditionGroupUpdate
     */
    operation: ConditionGroupUpdateOperationEnum;
}


/**
 * @export
 */
export const ConditionGroupUpdateOperationEnum = {
    Any: 'ANY',
    All: 'ALL'
} as const;
export type ConditionGroupUpdateOperationEnum = typeof ConditionGroupUpdateOperationEnum[keyof typeof ConditionGroupUpdateOperationEnum];

/**
 * List of custom fields identifiers which will be used to filter configurations
 * @export
 * @interface ConfigurationsListParameters
 */
export interface ConfigurationsListParameters {
    /**
     * List of IDs or keys of the custom fields. It can be a mix of IDs and keys in the same query.
     * @type {Array<string>}
     * @memberof ConfigurationsListParameters
     */
    fieldIdsOrKeys: Array<string>;
}
/**
 * A list of custom field details.
 * @export
 * @interface ConnectCustomFieldValue
 */
export interface ConnectCustomFieldValue {
    /**
     * The type of custom field.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    type: ConnectCustomFieldValueTypeEnum;
    /**
     * The custom field ID.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    fieldID: number;
    /**
     * The issue ID.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    issueID: number;
    /**
     * The value of number type custom field when `_type` is `NumberIssueField`.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    number?: number;
    /**
     * The value of single select and multiselect custom field type when `_type` is `SingleSelectIssueField` or `MultiSelectIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    optionID?: string;
    /**
     * The value of richText type custom field when `_type` is `RichTextIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    richText?: string;
    /**
     * The value of string type custom field when `_type` is `StringIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    string?: string;
    /**
     * The value of of text custom field type when `_type` is `TextIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    text?: string;
}


/**
 * @export
 */
export const ConnectCustomFieldValueTypeEnum = {
    StringIssueField: 'StringIssueField',
    NumberIssueField: 'NumberIssueField',
    RichTextIssueField: 'RichTextIssueField',
    SingleSelectIssueField: 'SingleSelectIssueField',
    MultiSelectIssueField: 'MultiSelectIssueField',
    TextIssueField: 'TextIssueField'
} as const;
export type ConnectCustomFieldValueTypeEnum = typeof ConnectCustomFieldValueTypeEnum[keyof typeof ConnectCustomFieldValueTypeEnum];

/**
 * Details of updates for a custom field.
 * @export
 * @interface ConnectCustomFieldValues
 */
export interface ConnectCustomFieldValues {
    /**
     * The list of custom field update details.
     * @type {Array<ConnectCustomFieldValue>}
     * @memberof ConnectCustomFieldValues
     */
    updateValueList?: Array<ConnectCustomFieldValue>;
}
/**
 * 
 * @export
 * @interface ConnectModules
 */
export interface ConnectModules {
    /**
     * A list of app modules in the same format as the `modules` property in the
     * [app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).
     * @type {Array<object>}
     * @memberof ConnectModules
     */
    modules: Array<object>;
}
/**
 * A workflow transition rule.
 * @export
 * @interface ConnectWorkflowTransitionRule
 */
export interface ConnectWorkflowTransitionRule {
    /**
     * 
     * @type {RuleConfiguration}
     * @memberof ConnectWorkflowTransitionRule
     */
    configuration: RuleConfiguration;
    /**
     * The ID of the transition rule.
     * @type {string}
     * @memberof ConnectWorkflowTransitionRule
     */
    id: string;
    /**
     * The key of the rule, as defined in the Connect app descriptor.
     * @type {string}
     * @memberof ConnectWorkflowTransitionRule
     */
    key: string;
    /**
     * 
     * @type {WorkflowTransition}
     * @memberof ConnectWorkflowTransitionRule
     */
    transition?: WorkflowTransition;
}
/**
 * The list of features on a project.
 * @export
 * @interface ContainerForProjectFeatures
 */
export interface ContainerForProjectFeatures {
    /**
     * The project features.
     * @type {Array<ProjectFeature>}
     * @memberof ContainerForProjectFeatures
     */
    features?: Array<ProjectFeature>;
}
/**
 * Container for a list of registered webhooks. Webhook details are returned in the same order as the request.
 * @export
 * @interface ContainerForRegisteredWebhooks
 */
export interface ContainerForRegisteredWebhooks {
    /**
     * A list of registered webhooks.
     * @type {Array<RegisteredWebhook>}
     * @memberof ContainerForRegisteredWebhooks
     */
    webhookRegistrationResult?: Array<RegisteredWebhook>;
}
/**
 * Container for a list of webhook IDs.
 * @export
 * @interface ContainerForWebhookIDs
 */
export interface ContainerForWebhookIDs {
    /**
     * A list of webhook IDs.
     * @type {Array<number>}
     * @memberof ContainerForWebhookIDs
     */
    webhookIds: Array<number>;
}
/**
 * A container for a list of workflow schemes together with the projects they are associated with.
 * @export
 * @interface ContainerOfWorkflowSchemeAssociations
 */
export interface ContainerOfWorkflowSchemeAssociations {
    /**
     * A list of workflow schemes together with projects they are associated with.
     * @type {Array<WorkflowSchemeAssociations>}
     * @memberof ContainerOfWorkflowSchemeAssociations
     */
    values: Array<WorkflowSchemeAssociations>;
}
/**
 * A context.
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * The ID of the context.
     * @type {number}
     * @memberof Context
     */
    readonly id?: number;
    /**
     * The name of the context.
     * @type {string}
     * @memberof Context
     */
    readonly name?: string;
    /**
     * The scope of the context.
     * @type {Scope}
     * @memberof Context
     */
    scope?: Scope;
}
/**
 * The project and issue type mapping with a matching custom field context.
 * @export
 * @interface ContextForProjectAndIssueType
 */
export interface ContextForProjectAndIssueType {
    /**
     * The ID of the custom field context.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    contextId: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    issueTypeId: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    projectId: string;
}
/**
 * Details of the contextual configuration for a custom field.
 * @export
 * @interface ContextualConfiguration
 */
export interface ContextualConfiguration {
    /**
     * The field configuration.
     * @type {any}
     * @memberof ContextualConfiguration
     */
    configuration?: any | null;
    /**
     * The ID of the field context the configuration is associated with.
     * @type {string}
     * @memberof ContextualConfiguration
     */
    readonly fieldContextId: string;
    /**
     * The ID of the configuration.
     * @type {string}
     * @memberof ContextualConfiguration
     */
    id: string;
    /**
     * The field value schema.
     * @type {any}
     * @memberof ContextualConfiguration
     */
    schema?: any | null;
}
/**
 * The converted JQL queries.
 * @export
 * @interface ConvertedJQLQueries
 */
export interface ConvertedJQLQueries {
    /**
     * List of queries containing user information that could not be mapped to an existing user
     * @type {Array<JQLQueryWithUnknownUsers>}
     * @memberof ConvertedJQLQueries
     */
    queriesWithUnknownUsers?: Array<JQLQueryWithUnknownUsers>;
    /**
     * The list of converted query strings with account IDs in place of user identifiers.
     * @type {Array<string>}
     * @memberof ConvertedJQLQueries
     */
    queryStrings?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateCrossProjectReleaseRequest
 */
export interface CreateCrossProjectReleaseRequest {
    /**
     * The cross-project release name.
     * @type {string}
     * @memberof CreateCrossProjectReleaseRequest
     */
    name: string;
    /**
     * The IDs of the releases to include in the cross-project release.
     * @type {Set<number>}
     * @memberof CreateCrossProjectReleaseRequest
     */
    releaseIds?: Array<number>;
}
/**
 * The details of a created custom field context.
 * @export
 * @interface CreateCustomFieldContext
 */
export interface CreateCustomFieldContext {
    /**
     * The description of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    description?: string;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    readonly id?: string;
    /**
     * The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.
     * @type {Array<string>}
     * @memberof CreateCustomFieldContext
     */
    issueTypeIds?: Array<string>;
    /**
     * The name of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    name: string;
    /**
     * The list of project IDs associated with the context. If the list is empty, the context is global.
     * @type {Array<string>}
     * @memberof CreateCustomFieldContext
     */
    projectIds?: Array<string>;
}
/**
 * 
 * @export
 * @interface CreateCustomFieldRequest
 */
export interface CreateCustomFieldRequest {
    /**
     * The custom field ID.
     * @type {number}
     * @memberof CreateCustomFieldRequest
     */
    customFieldId: number;
    /**
     * Allows filtering issues based on their values for the custom field.
     * @type {boolean}
     * @memberof CreateCustomFieldRequest
     */
    filter?: boolean;
}
/**
 * 
 * @export
 * @interface CreateDateFieldRequest
 */
export interface CreateDateFieldRequest {
    /**
     * A date custom field ID. This is required if the type is "DateCustomField".
     * @type {number}
     * @memberof CreateDateFieldRequest
     */
    dateCustomFieldId?: number;
    /**
     * The date field type. This must be "DueDate", "TargetStartDate", "TargetEndDate" or "DateCustomField".
     * @type {string}
     * @memberof CreateDateFieldRequest
     */
    type: CreateDateFieldRequestTypeEnum;
}


/**
 * @export
 */
export const CreateDateFieldRequestTypeEnum = {
    DueDate: 'DueDate',
    TargetStartDate: 'TargetStartDate',
    TargetEndDate: 'TargetEndDate',
    DateCustomField: 'DateCustomField'
} as const;
export type CreateDateFieldRequestTypeEnum = typeof CreateDateFieldRequestTypeEnum[keyof typeof CreateDateFieldRequestTypeEnum];

/**
 * 
 * @export
 * @interface CreateExclusionRulesRequest
 */
export interface CreateExclusionRulesRequest {
    /**
     * The IDs of the issues to exclude from the plan.
     * @type {Set<number>}
     * @memberof CreateExclusionRulesRequest
     */
    issueIds?: Array<number>;
    /**
     * The IDs of the issue types to exclude from the plan.
     * @type {Set<number>}
     * @memberof CreateExclusionRulesRequest
     */
    issueTypeIds?: Array<number>;
    /**
     * Issues completed this number of days ago will be excluded from the plan.
     * @type {number}
     * @memberof CreateExclusionRulesRequest
     */
    numberOfDaysToShowCompletedIssues?: number;
    /**
     * The IDs of the releases to exclude from the plan.
     * @type {Set<number>}
     * @memberof CreateExclusionRulesRequest
     */
    releaseIds?: Array<number>;
    /**
     * The IDs of the work status categories to exclude from the plan.
     * @type {Set<number>}
     * @memberof CreateExclusionRulesRequest
     */
    workStatusCategoryIds?: Array<number>;
    /**
     * The IDs of the work statuses to exclude from the plan.
     * @type {Set<number>}
     * @memberof CreateExclusionRulesRequest
     */
    workStatusIds?: Array<number>;
}
/**
 * Issue security scheme and it's details
 * @export
 * @interface CreateIssueSecuritySchemeDetails
 */
export interface CreateIssueSecuritySchemeDetails {
    [key: string]: any | any;
    /**
     * The description of the issue security scheme.
     * @type {string}
     * @memberof CreateIssueSecuritySchemeDetails
     */
    description?: string;
    /**
     * The list of scheme levels which should be added to the security scheme.
     * @type {Array<SecuritySchemeLevelBean>}
     * @memberof CreateIssueSecuritySchemeDetails
     */
    levels?: Array<SecuritySchemeLevelBean>;
    /**
     * The name of the issue security scheme. Must be unique (case-insensitive).
     * @type {string}
     * @memberof CreateIssueSecuritySchemeDetails
     */
    name: string;
}
/**
 * 
 * @export
 * @interface CreateIssueSourceRequest
 */
export interface CreateIssueSourceRequest {
    /**
     * The issue source type. This must be "Board", "Project" or "Filter".
     * @type {string}
     * @memberof CreateIssueSourceRequest
     */
    type: CreateIssueSourceRequestTypeEnum;
    /**
     * The issue source value. This must be a board ID if the type is "Board", a project ID if the type is "Project" or a filter ID if the type is "Filter".
     * @type {number}
     * @memberof CreateIssueSourceRequest
     */
    value: number;
}


/**
 * @export
 */
export const CreateIssueSourceRequestTypeEnum = {
    Board: 'Board',
    Project: 'Project',
    Filter: 'Filter'
} as const;
export type CreateIssueSourceRequestTypeEnum = typeof CreateIssueSourceRequestTypeEnum[keyof typeof CreateIssueSourceRequestTypeEnum];

/**
 * Details of an notification scheme.
 * @export
 * @interface CreateNotificationSchemeDetails
 */
export interface CreateNotificationSchemeDetails {
    [key: string]: any | any;
    /**
     * The description of the notification scheme.
     * @type {string}
     * @memberof CreateNotificationSchemeDetails
     */
    description?: string;
    /**
     * The name of the notification scheme. Must be unique (case-insensitive).
     * @type {string}
     * @memberof CreateNotificationSchemeDetails
     */
    name: string;
    /**
     * The list of notifications which should be added to the notification scheme.
     * @type {Array<NotificationSchemeEventDetails>}
     * @memberof CreateNotificationSchemeDetails
     */
    notificationSchemeEvents?: Array<NotificationSchemeEventDetails>;
}
/**
 * 
 * @export
 * @interface CreatePermissionHolderRequest
 */
export interface CreatePermissionHolderRequest {
    /**
     * The permission holder type. This must be "Group" or "AccountId".
     * @type {string}
     * @memberof CreatePermissionHolderRequest
     */
    type: CreatePermissionHolderRequestTypeEnum;
    /**
     * The permission holder value. This must be a group name if the type is "Group" or an account ID if the type is "AccountId".
     * @type {string}
     * @memberof CreatePermissionHolderRequest
     */
    value: string;
}


/**
 * @export
 */
export const CreatePermissionHolderRequestTypeEnum = {
    Group: 'Group',
    AccountId: 'AccountId'
} as const;
export type CreatePermissionHolderRequestTypeEnum = typeof CreatePermissionHolderRequestTypeEnum[keyof typeof CreatePermissionHolderRequestTypeEnum];

/**
 * 
 * @export
 * @interface CreatePermissionRequest
 */
export interface CreatePermissionRequest {
    /**
     * The permission holder.
     * @type {CreatePermissionHolderRequest}
     * @memberof CreatePermissionRequest
     */
    holder: CreatePermissionHolderRequest;
    /**
     * The permission type. This must be "View" or "Edit".
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    type: CreatePermissionRequestTypeEnum;
}


/**
 * @export
 */
export const CreatePermissionRequestTypeEnum = {
    View: 'View',
    Edit: 'Edit'
} as const;
export type CreatePermissionRequestTypeEnum = typeof CreatePermissionRequestTypeEnum[keyof typeof CreatePermissionRequestTypeEnum];

/**
 * 
 * @export
 * @interface CreatePlanOnlyTeamRequest
 */
export interface CreatePlanOnlyTeamRequest {
    /**
     * The capacity for the plan-only team.
     * @type {number}
     * @memberof CreatePlanOnlyTeamRequest
     */
    capacity?: number;
    /**
     * The ID of the issue source for the plan-only team.
     * @type {number}
     * @memberof CreatePlanOnlyTeamRequest
     */
    issueSourceId?: number;
    /**
     * The account IDs of the plan-only team members.
     * @type {Set<string>}
     * @memberof CreatePlanOnlyTeamRequest
     */
    memberAccountIds?: Array<string>;
    /**
     * The plan-only team name.
     * @type {string}
     * @memberof CreatePlanOnlyTeamRequest
     */
    name: string;
    /**
     * The planning style for the plan-only team. This must be "Scrum" or "Kanban".
     * @type {string}
     * @memberof CreatePlanOnlyTeamRequest
     */
    planningStyle: CreatePlanOnlyTeamRequestPlanningStyleEnum;
    /**
     * The sprint length for the plan-only team.
     * @type {number}
     * @memberof CreatePlanOnlyTeamRequest
     */
    sprintLength?: number;
}


/**
 * @export
 */
export const CreatePlanOnlyTeamRequestPlanningStyleEnum = {
    Scrum: 'Scrum',
    Kanban: 'Kanban'
} as const;
export type CreatePlanOnlyTeamRequestPlanningStyleEnum = typeof CreatePlanOnlyTeamRequestPlanningStyleEnum[keyof typeof CreatePlanOnlyTeamRequestPlanningStyleEnum];

/**
 * 
 * @export
 * @interface CreatePlanRequest
 */
export interface CreatePlanRequest {
    /**
     * The cross-project releases to include in the plan.
     * @type {Set<CreateCrossProjectReleaseRequest>}
     * @memberof CreatePlanRequest
     */
    crossProjectReleases?: Array<CreateCrossProjectReleaseRequest>;
    /**
     * The custom fields for the plan.
     * @type {Set<CreateCustomFieldRequest>}
     * @memberof CreatePlanRequest
     */
    customFields?: Array<CreateCustomFieldRequest>;
    /**
     * The exclusion rules for the plan.
     * @type {CreateExclusionRulesRequest}
     * @memberof CreatePlanRequest
     */
    exclusionRules?: CreateExclusionRulesRequest;
    /**
     * The issue sources to include in the plan.
     * @type {Set<CreateIssueSourceRequest>}
     * @memberof CreatePlanRequest
     */
    issueSources: Array<CreateIssueSourceRequest>;
    /**
     * The account ID of the plan lead.
     * @type {string}
     * @memberof CreatePlanRequest
     */
    leadAccountId?: string;
    /**
     * The plan name.
     * @type {string}
     * @memberof CreatePlanRequest
     */
    name: string;
    /**
     * The permissions for the plan.
     * @type {Set<CreatePermissionRequest>}
     * @memberof CreatePlanRequest
     */
    permissions?: Array<CreatePermissionRequest>;
    /**
     * The scheduling settings for the plan.
     * @type {CreateSchedulingRequest}
     * @memberof CreatePlanRequest
     */
    scheduling: CreateSchedulingRequest;
}
/**
 * Details of an issue priority.
 * @export
 * @interface CreatePriorityDetails
 */
export interface CreatePriorityDetails {
    [key: string]: any | any;
    /**
     * The ID for the avatar for the priority. Either the iconUrl or avatarId must be defined, but not both. This parameter is nullable and will become mandatory once the iconUrl parameter is deprecated.
     * @type {number}
     * @memberof CreatePriorityDetails
     */
    avatarId?: number;
    /**
     * The description of the priority.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    description?: string | null;
    /**
     * The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Either the iconUrl or avatarId must be defined, but not both.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    iconUrl?: CreatePriorityDetailsIconUrlEnum | null;
    /**
     * The name of the priority. Must be unique.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    name: string;
    /**
     * The status color of the priority in 3-digit or 6-digit hexadecimal format.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    statusColor: string;
}


/**
 * @export
 */
export const CreatePriorityDetailsIconUrlEnum = {
    BlockerPng: '/images/icons/priorities/blocker.png',
    CriticalPng: '/images/icons/priorities/critical.png',
    HighPng: '/images/icons/priorities/high.png',
    HighestPng: '/images/icons/priorities/highest.png',
    LowPng: '/images/icons/priorities/low.png',
    LowestPng: '/images/icons/priorities/lowest.png',
    MajorPng: '/images/icons/priorities/major.png',
    MediumPng: '/images/icons/priorities/medium.png',
    MinorPng: '/images/icons/priorities/minor.png',
    TrivialPng: '/images/icons/priorities/trivial.png',
    BlockerNewPng: '/images/icons/priorities/blocker_new.png',
    CriticalNewPng: '/images/icons/priorities/critical_new.png',
    HighNewPng: '/images/icons/priorities/high_new.png',
    HighestNewPng: '/images/icons/priorities/highest_new.png',
    LowNewPng: '/images/icons/priorities/low_new.png',
    LowestNewPng: '/images/icons/priorities/lowest_new.png',
    MajorNewPng: '/images/icons/priorities/major_new.png',
    MediumNewPng: '/images/icons/priorities/medium_new.png',
    MinorNewPng: '/images/icons/priorities/minor_new.png',
    TrivialNewPng: '/images/icons/priorities/trivial_new.png'
} as const;
export type CreatePriorityDetailsIconUrlEnum = typeof CreatePriorityDetailsIconUrlEnum[keyof typeof CreatePriorityDetailsIconUrlEnum];

/**
 * Details of a new priority scheme
 * @export
 * @interface CreatePrioritySchemeDetails
 */
export interface CreatePrioritySchemeDetails {
    /**
     * The ID of the default priority for the priority scheme.
     * @type {number}
     * @memberof CreatePrioritySchemeDetails
     */
    defaultPriorityId: number;
    /**
     * The description of the priority scheme.
     * @type {string}
     * @memberof CreatePrioritySchemeDetails
     */
    description?: string;
    /**
     * Instructions to migrate the priorities of issues.
     * 
     * `in` mappings are used to migrate the priorities of issues to priorities used within the priority scheme.
     * 
     * `out` mappings are used to migrate the priorities of issues to priorities not used within the priority scheme.
     * 
     *  *  When **priorities** are **added** to the new priority scheme, no mapping needs to be provided as the new priorities are not used by any issues.
     *  *  When **priorities** are **removed** from the new priority scheme, no mapping needs to be provided as the removed priorities are not used by any issues.
     *  *  When **projects** are **added** to the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities used by the priority scheme. This can occur when the current scheme does not use all the priorities in the project(s)' priority scheme(s).
     *     
     *      *  An `in` mapping must be provided for each of these priorities.
     *  *  When **projects** are **removed** from the priority scheme, no mapping needs to be provided as the removed projects are not using the priorities of the new priority scheme.
     * 
     * For more information on `in` and `out` mappings, see the child properties documentation for the `PriorityMapping` object below.
     * @type {PriorityMapping}
     * @memberof CreatePrioritySchemeDetails
     */
    mappings?: PriorityMapping;
    /**
     * The name of the priority scheme. Must be unique.
     * @type {string}
     * @memberof CreatePrioritySchemeDetails
     */
    name: string;
    /**
     * The IDs of priorities in the scheme.
     * @type {Array<number>}
     * @memberof CreatePrioritySchemeDetails
     */
    priorityIds: Array<number>;
    /**
     * The IDs of projects that will use the priority scheme.
     * @type {Set<number>}
     * @memberof CreatePrioritySchemeDetails
     */
    projectIds?: Array<number>;
}
/**
 * Details about the project.
 * @export
 * @interface CreateProjectDetails
 */
export interface CreateProjectDetails {
    /**
     * The default assignee when creating issues for this project.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    assigneeType?: CreateProjectDetailsAssigneeTypeEnum;
    /**
     * An integer value for the project's avatar.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    avatarId?: number;
    /**
     * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    categoryId?: number;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    description?: string;
    /**
     * The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-3-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    fieldConfigurationScheme?: number;
    /**
     * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueSecurityScheme?: number;
    /**
     * The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-3-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueTypeScheme?: number;
    /**
     * The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-3-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueTypeScreenScheme?: number;
    /**
     * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    key: string;
    /**
     * This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `leadAccountId`.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    lead?: string;
    /**
     * The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `lead`.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    leadAccountId?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    name: string;
    /**
     * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    notificationScheme?: number;
    /**
     * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    permissionScheme?: number;
    /**
     * A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    projectTemplateKey?: CreateProjectDetailsProjectTemplateKeyEnum;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    projectTypeKey?: CreateProjectDetailsProjectTypeKeyEnum;
    /**
     * A link to information about this project, such as project documentation
     * @type {string}
     * @memberof CreateProjectDetails
     */
    url?: string;
    /**
     * The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-3-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    workflowScheme?: number;
}


/**
 * @export
 */
export const CreateProjectDetailsAssigneeTypeEnum = {
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type CreateProjectDetailsAssigneeTypeEnum = typeof CreateProjectDetailsAssigneeTypeEnum[keyof typeof CreateProjectDetailsAssigneeTypeEnum];

/**
 * @export
 */
export const CreateProjectDetailsProjectTemplateKeyEnum = {
    PyxisGreenhopperJiraghSimplifiedAgilityKanban: 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban',
    PyxisGreenhopperJiraghSimplifiedAgilityScrum: 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
    PyxisGreenhopperJiraghSimplifiedBasic: 'com.pyxis.greenhopper.jira:gh-simplified-basic',
    PyxisGreenhopperJiraghSimplifiedKanbanClassic: 'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic',
    PyxisGreenhopperJiraghSimplifiedScrumClassic: 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic',
    PyxisGreenhopperJiraghCrossTeamTemplate: 'com.pyxis.greenhopper.jira:gh-cross-team-template',
    PyxisGreenhopperJiraghCrossTeamPlanningTemplate: 'com.pyxis.greenhopper.jira:gh-cross-team-planning-template',
    AtlassianServicedesksimplifiedItServiceManagement: 'com.atlassian.servicedesk:simplified-it-service-management',
    AtlassianServicedesksimplifiedItServiceManagementBasic: 'com.atlassian.servicedesk:simplified-it-service-management-basic',
    AtlassianServicedesksimplifiedItServiceManagementOperations: 'com.atlassian.servicedesk:simplified-it-service-management-operations',
    AtlassianServicedesksimplifiedGeneralServiceDesk: 'com.atlassian.servicedesk:simplified-general-service-desk',
    AtlassianServicedesksimplifiedGeneralServiceDeskIt: 'com.atlassian.servicedesk:simplified-general-service-desk-it',
    AtlassianServicedesksimplifiedGeneralServiceDeskBusiness: 'com.atlassian.servicedesk:simplified-general-service-desk-business',
    AtlassianServicedesksimplifiedInternalServiceDesk: 'com.atlassian.servicedesk:simplified-internal-service-desk',
    AtlassianServicedesksimplifiedExternalServiceDesk: 'com.atlassian.servicedesk:simplified-external-service-desk',
    AtlassianServicedesksimplifiedHrServiceDesk: 'com.atlassian.servicedesk:simplified-hr-service-desk',
    AtlassianServicedesksimplifiedFacilitiesServiceDesk: 'com.atlassian.servicedesk:simplified-facilities-service-desk',
    AtlassianServicedesksimplifiedLegalServiceDesk: 'com.atlassian.servicedesk:simplified-legal-service-desk',
    AtlassianServicedesksimplifiedMarketingServiceDesk: 'com.atlassian.servicedesk:simplified-marketing-service-desk',
    AtlassianServicedesksimplifiedFinanceServiceDesk: 'com.atlassian.servicedesk:simplified-finance-service-desk',
    AtlassianServicedesksimplifiedAnalyticsServiceDesk: 'com.atlassian.servicedesk:simplified-analytics-service-desk',
    AtlassianServicedesksimplifiedDesignServiceDesk: 'com.atlassian.servicedesk:simplified-design-service-desk',
    AtlassianServicedesksimplifiedSalesServiceDesk: 'com.atlassian.servicedesk:simplified-sales-service-desk',
    AtlassianServicedesksimplifiedHalpServiceDesk: 'com.atlassian.servicedesk:simplified-halp-service-desk',
    AtlassianServicedesksimplifiedBlankProjectIt: 'com.atlassian.servicedesk:simplified-blank-project-it',
    AtlassianServicedesksimplifiedBlankProjectBusiness: 'com.atlassian.servicedesk:simplified-blank-project-business',
    AtlassianServicedesknextGenItServiceDesk: 'com.atlassian.servicedesk:next-gen-it-service-desk',
    AtlassianServicedesknextGenHrServiceDesk: 'com.atlassian.servicedesk:next-gen-hr-service-desk',
    AtlassianServicedesknextGenLegalServiceDesk: 'com.atlassian.servicedesk:next-gen-legal-service-desk',
    AtlassianServicedesknextGenMarketingServiceDesk: 'com.atlassian.servicedesk:next-gen-marketing-service-desk',
    AtlassianServicedesknextGenFacilitiesServiceDesk: 'com.atlassian.servicedesk:next-gen-facilities-service-desk',
    AtlassianServicedesknextGenGeneralServiceDesk: 'com.atlassian.servicedesk:next-gen-general-service-desk',
    AtlassianServicedesknextGenGeneralItServiceDesk: 'com.atlassian.servicedesk:next-gen-general-it-service-desk',
    AtlassianServicedesknextGenGeneralBusinessServiceDesk: 'com.atlassian.servicedesk:next-gen-general-business-service-desk',
    AtlassianServicedesknextGenAnalyticsServiceDesk: 'com.atlassian.servicedesk:next-gen-analytics-service-desk',
    AtlassianServicedesknextGenFinanceServiceDesk: 'com.atlassian.servicedesk:next-gen-finance-service-desk',
    AtlassianServicedesknextGenDesignServiceDesk: 'com.atlassian.servicedesk:next-gen-design-service-desk',
    AtlassianServicedesknextGenSalesServiceDesk: 'com.atlassian.servicedesk:next-gen-sales-service-desk',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedContentManagement: 'com.atlassian.jira-core-project-templates:jira-core-simplified-content-management',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedDocumentApproval: 'com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedLeadTracking: 'com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedProcessControl: 'com.atlassian.jira-core-project-templates:jira-core-simplified-process-control',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedProcurement: 'com.atlassian.jira-core-project-templates:jira-core-simplified-procurement',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedProjectManagement: 'com.atlassian.jira-core-project-templates:jira-core-simplified-project-management',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedRecruitment: 'com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment',
    AtlassianJiraCoreProjectTemplatesjiraCoreSimplifiedTask: 'com.atlassian.jira-core-project-templates:jira-core-simplified-task-'
} as const;
export type CreateProjectDetailsProjectTemplateKeyEnum = typeof CreateProjectDetailsProjectTemplateKeyEnum[keyof typeof CreateProjectDetailsProjectTemplateKeyEnum];

/**
 * @export
 */
export const CreateProjectDetailsProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type CreateProjectDetailsProjectTypeKeyEnum = typeof CreateProjectDetailsProjectTypeKeyEnum[keyof typeof CreateProjectDetailsProjectTypeKeyEnum];

/**
 * Details of an issue resolution.
 * @export
 * @interface CreateResolutionDetails
 */
export interface CreateResolutionDetails {
    [key: string]: any | any;
    /**
     * The description of the resolution.
     * @type {string}
     * @memberof CreateResolutionDetails
     */
    description?: string;
    /**
     * The name of the resolution. Must be unique (case-insensitive).
     * @type {string}
     * @memberof CreateResolutionDetails
     */
    name: string;
}
/**
 * 
 * @export
 * @interface CreateSchedulingRequest
 */
export interface CreateSchedulingRequest {
    /**
     * The dependencies for the plan. This must be "Sequential" or "Concurrent".
     * @type {string}
     * @memberof CreateSchedulingRequest
     */
    dependencies?: CreateSchedulingRequestDependenciesEnum;
    /**
     * The end date field for the plan.
     * @type {CreateDateFieldRequest}
     * @memberof CreateSchedulingRequest
     */
    endDate?: CreateDateFieldRequest;
    /**
     * The estimation unit for the plan. This must be "StoryPoints", "Days" or "Hours".
     * @type {string}
     * @memberof CreateSchedulingRequest
     */
    estimation: CreateSchedulingRequestEstimationEnum;
    /**
     * The inferred dates for the plan. This must be "None", "SprintDates" or "ReleaseDates".
     * @type {string}
     * @memberof CreateSchedulingRequest
     */
    inferredDates?: CreateSchedulingRequestInferredDatesEnum;
    /**
     * The start date field for the plan.
     * @type {CreateDateFieldRequest}
     * @memberof CreateSchedulingRequest
     */
    startDate?: CreateDateFieldRequest;
}


/**
 * @export
 */
export const CreateSchedulingRequestDependenciesEnum = {
    Sequential: 'Sequential',
    Concurrent: 'Concurrent'
} as const;
export type CreateSchedulingRequestDependenciesEnum = typeof CreateSchedulingRequestDependenciesEnum[keyof typeof CreateSchedulingRequestDependenciesEnum];

/**
 * @export
 */
export const CreateSchedulingRequestEstimationEnum = {
    StoryPoints: 'StoryPoints',
    Days: 'Days',
    Hours: 'Hours'
} as const;
export type CreateSchedulingRequestEstimationEnum = typeof CreateSchedulingRequestEstimationEnum[keyof typeof CreateSchedulingRequestEstimationEnum];

/**
 * @export
 */
export const CreateSchedulingRequestInferredDatesEnum = {
    None: 'None',
    SprintDates: 'SprintDates',
    ReleaseDates: 'ReleaseDates'
} as const;
export type CreateSchedulingRequestInferredDatesEnum = typeof CreateSchedulingRequestInferredDatesEnum[keyof typeof CreateSchedulingRequestInferredDatesEnum];

/**
 * The details of a UI modification.
 * @export
 * @interface CreateUiModificationDetails
 */
export interface CreateUiModificationDetails {
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000.
     * @type {Array<UiModificationContextDetails>}
     * @memberof CreateUiModificationDetails
     */
    contexts?: Array<UiModificationContextDetails>;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    data?: string;
    /**
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    description?: string;
    /**
     * The name of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    name: string;
}
/**
 * 
 * @export
 * @interface CreateUpdateRoleRequestBean
 */
export interface CreateUpdateRoleRequestBean {
    /**
     * A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
     * @type {string}
     * @memberof CreateUpdateRoleRequestBean
     */
    description?: string;
    /**
     * The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
     * @type {string}
     * @memberof CreateUpdateRoleRequestBean
     */
    name?: string;
}
/**
 * A workflow transition condition.
 * @export
 * @interface CreateWorkflowCondition
 */
export interface CreateWorkflowCondition {
    /**
     * The list of workflow conditions.
     * @type {Array<CreateWorkflowCondition>}
     * @memberof CreateWorkflowCondition
     */
    conditions?: Array<CreateWorkflowCondition>;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkflowCondition
     */
    configuration?: { [key: string]: any; };
    /**
     * The compound condition operator.
     * @type {string}
     * @memberof CreateWorkflowCondition
     */
    operator?: CreateWorkflowConditionOperatorEnum;
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof CreateWorkflowCondition
     */
    type?: string;
}


/**
 * @export
 */
export const CreateWorkflowConditionOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type CreateWorkflowConditionOperatorEnum = typeof CreateWorkflowConditionOperatorEnum[keyof typeof CreateWorkflowConditionOperatorEnum];

/**
 * The details of a workflow.
 * @export
 * @interface CreateWorkflowDetails
 */
export interface CreateWorkflowDetails {
    /**
     * The description of the workflow. The maximum length is 1000 characters.
     * @type {string}
     * @memberof CreateWorkflowDetails
     */
    description?: string;
    /**
     * The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace.
     * @type {string}
     * @memberof CreateWorkflowDetails
     */
    name: string;
    /**
     * The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition.
     * @type {Set<CreateWorkflowStatusDetails>}
     * @memberof CreateWorkflowDetails
     */
    statuses: Array<CreateWorkflowStatusDetails>;
    /**
     * The transitions of the workflow. For the request to be valid, these transitions must:
     * 
     *  *  include one *initial* transition.
     *  *  not use the same name for a *global* and *directed* transition.
     *  *  have a unique name for each *global* transition.
     *  *  have a unique 'to' status for each *global* transition.
     *  *  have unique names for each transition from a status.
     *  *  not have a 'from' status on *initial* and *global* transitions.
     *  *  have a 'from' status on *directed* transitions.
     * 
     * All the transition statuses must be included in `statuses`.
     * @type {Array<CreateWorkflowTransitionDetails>}
     * @memberof CreateWorkflowDetails
     */
    transitions: Array<CreateWorkflowTransitionDetails>;
}
/**
 * The details of a transition status.
 * @export
 * @interface CreateWorkflowStatusDetails
 */
export interface CreateWorkflowStatusDetails {
    /**
     * The ID of the status.
     * @type {string}
     * @memberof CreateWorkflowStatusDetails
     */
    id: string;
    /**
     * The properties of the status.
     * @type {{ [key: string]: string; }}
     * @memberof CreateWorkflowStatusDetails
     */
    properties?: { [key: string]: string; };
}
/**
 * The details of a workflow transition.
 * @export
 * @interface CreateWorkflowTransitionDetails
 */
export interface CreateWorkflowTransitionDetails {
    /**
     * The description of the transition. The maximum length is 1000 characters.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetails
     */
    description?: string;
    /**
     * The statuses the transition can start from.
     * @type {Array<string>}
     * @memberof CreateWorkflowTransitionDetails
     */
    from?: Array<string>;
    /**
     * The name of the transition. The maximum length is 60 characters.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetails
     */
    name: string;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: string; }}
     * @memberof CreateWorkflowTransitionDetails
     */
    properties?: { [key: string]: string; };
    /**
     * The rules of the transition.
     * @type {CreateWorkflowTransitionRulesDetails}
     * @memberof CreateWorkflowTransitionDetails
     */
    rules?: CreateWorkflowTransitionRulesDetails;
    /**
     * The screen of the transition.
     * @type {CreateWorkflowTransitionScreenDetails}
     * @memberof CreateWorkflowTransitionDetails
     */
    screen?: CreateWorkflowTransitionScreenDetails;
    /**
     * The status the transition goes to.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetails
     */
    to: string;
    /**
     * The type of the transition.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetails
     */
    type: CreateWorkflowTransitionDetailsTypeEnum;
}


/**
 * @export
 */
export const CreateWorkflowTransitionDetailsTypeEnum = {
    Global: 'global',
    Initial: 'initial',
    Directed: 'directed'
} as const;
export type CreateWorkflowTransitionDetailsTypeEnum = typeof CreateWorkflowTransitionDetailsTypeEnum[keyof typeof CreateWorkflowTransitionDetailsTypeEnum];

/**
 * A workflow transition rule.
 * @export
 * @interface CreateWorkflowTransitionRule
 */
export interface CreateWorkflowTransitionRule {
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkflowTransitionRule
     */
    configuration?: { [key: string]: any; };
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof CreateWorkflowTransitionRule
     */
    type: string;
}
/**
 * The details of a workflow transition rules.
 * @export
 * @interface CreateWorkflowTransitionRulesDetails
 */
export interface CreateWorkflowTransitionRulesDetails {
    /**
     * The workflow conditions.
     * @type {CreateWorkflowCondition}
     * @memberof CreateWorkflowTransitionRulesDetails
     */
    conditions?: CreateWorkflowCondition;
    /**
     * The workflow post functions.
     * 
     * **Note:** The default post functions are always added to the *initial* transition, as in:
     * 
     *     "postFunctions": [
     *         {
     *             "type": "IssueCreateFunction"
     *         },
     *         {
     *             "type": "IssueReindexFunction"
     *         },
     *         {
     *             "type": "FireIssueEventFunction",
     *             "configuration": {
     *                 "event": {
     *                     "id": "1",
     *                     "name": "issue_created"
     *                 }
     *             }
     *         }
     *     ]
     * 
     * **Note:** The default post functions are always added to the *global* and *directed* transitions, as in:
     * 
     *     "postFunctions": [
     *         {
     *             "type": "UpdateIssueStatusFunction"
     *         },
     *         {
     *             "type": "CreateCommentFunction"
     *         },
     *         {
     *             "type": "GenerateChangeHistoryFunction"
     *         },
     *         {
     *             "type": "IssueReindexFunction"
     *         },
     *         {
     *             "type": "FireIssueEventFunction",
     *             "configuration": {
     *                 "event": {
     *                     "id": "13",
     *                     "name": "issue_generic"
     *                 }
     *             }
     *         }
     *     ]
     * @type {Array<CreateWorkflowTransitionRule>}
     * @memberof CreateWorkflowTransitionRulesDetails
     */
    postFunctions?: Array<CreateWorkflowTransitionRule>;
    /**
     * The workflow validators.
     * 
     * **Note:** The default permission validator is always added to the *initial* transition, as in:
     * 
     *     "validators": [
     *         {
     *             "type": "PermissionValidator",
     *             "configuration": {
     *                 "permissionKey": "CREATE_ISSUES"
     *             }
     *         }
     *     ]
     * @type {Array<CreateWorkflowTransitionRule>}
     * @memberof CreateWorkflowTransitionRulesDetails
     */
    validators?: Array<CreateWorkflowTransitionRule>;
}
/**
 * The details of a transition screen.
 * @export
 * @interface CreateWorkflowTransitionScreenDetails
 */
export interface CreateWorkflowTransitionScreenDetails {
    /**
     * The ID of the screen.
     * @type {string}
     * @memberof CreateWorkflowTransitionScreenDetails
     */
    id: string;
}
/**
 * Details about a created issue or subtask.
 * @export
 * @interface CreatedIssue
 */
export interface CreatedIssue {
    /**
     * The ID of the created issue or subtask.
     * @type {string}
     * @memberof CreatedIssue
     */
    readonly id?: string;
    /**
     * The key of the created issue or subtask.
     * @type {string}
     * @memberof CreatedIssue
     */
    readonly key?: string;
    /**
     * The URL of the created issue or subtask.
     * @type {string}
     * @memberof CreatedIssue
     */
    readonly self?: string;
    /**
     * The response code and messages related to any requested transition.
     * @type {NestedResponse}
     * @memberof CreatedIssue
     */
    readonly transition?: NestedResponse;
    /**
     * The response code and messages related to any requested watchers.
     * @type {NestedResponse}
     * @memberof CreatedIssue
     */
    readonly watchers?: NestedResponse;
}
/**
 * Details about the issues created and the errors for requests that failed.
 * @export
 * @interface CreatedIssues
 */
export interface CreatedIssues {
    /**
     * Error details for failed issue creation requests.
     * @type {Array<BulkOperationErrorResult>}
     * @memberof CreatedIssues
     */
    readonly errors?: Array<BulkOperationErrorResult>;
    /**
     * Details of the issues created.
     * @type {Array<CreatedIssue>}
     * @memberof CreatedIssues
     */
    readonly issues?: Array<CreatedIssue>;
}
/**
 * @type CustomContextVariable
 * 
 * @export
 */
export type CustomContextVariable = { type: 'issue' } & IssueContextVariable | { type: 'json' } & JsonContextVariable | { type: 'user' } & UserContextVariable;
/**
 * Details of configurations for a custom field.
 * @export
 * @interface CustomFieldConfigurations
 */
export interface CustomFieldConfigurations {
    /**
     * The list of custom field configuration details.
     * @type {Set<ContextualConfiguration>}
     * @memberof CustomFieldConfigurations
     */
    configurations: Array<ContextualConfiguration>;
}
/**
 * The details of a custom field context.
 * @export
 * @interface CustomFieldContext
 */
export interface CustomFieldContext {
    /**
     * The description of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    description: string;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    id: string;
    /**
     * Whether the context apply to all issue types.
     * @type {boolean}
     * @memberof CustomFieldContext
     */
    isAnyIssueType: boolean;
    /**
     * Whether the context is global.
     * @type {boolean}
     * @memberof CustomFieldContext
     */
    isGlobalContext: boolean;
    /**
     * The name of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    name: string;
}
/**
 * @type CustomFieldContextDefaultValue
 * 
 * @export
 */
export type CustomFieldContextDefaultValue = { type: 'datepicker' } & CustomFieldContextDefaultValueDate | { type: 'datetimepicker' } & CustomFieldContextDefaultValueDateTime | { type: 'float' } & CustomFieldContextDefaultValueFloat | { type: 'forge.datetime' } & CustomFieldContextDefaultValueForgeDateTimeField | { type: 'forge.group' } & CustomFieldContextDefaultValueForgeGroupField | { type: 'forge.group.list' } & CustomFieldContextDefaultValueForgeMultiGroupField | { type: 'forge.number' } & CustomFieldContextDefaultValueForgeNumberField | { type: 'forge.object' } & CustomFieldContextDefaultValueForgeObjectField | { type: 'forge.string' } & CustomFieldContextDefaultValueForgeStringField | { type: 'forge.string.list' } & CustomFieldContextDefaultValueForgeMultiStringField | { type: 'forge.user' } & CustomFieldContextDefaultValueForgeUserField | { type: 'forge.user.list' } & CustomFieldContextDefaultValueForgeMultiUserField | { type: 'grouppicker.multiple' } & CustomFieldContextDefaultValueMultipleGroupPicker | { type: 'grouppicker.single' } & CustomFieldContextDefaultValueSingleGroupPicker | { type: 'labels' } & CustomFieldContextDefaultValueLabels | { type: 'multi.user.select' } & CustomFieldContextDefaultValueMultiUserPicker | { type: 'option.cascading' } & CustomFieldContextDefaultValueCascadingOption | { type: 'option.multiple' } & CustomFieldContextDefaultValueMultipleOption | { type: 'option.single' } & CustomFieldContextDefaultValueSingleOption | { type: 'project' } & CustomFieldContextDefaultValueProject | { type: 'readonly' } & CustomFieldContextDefaultValueReadOnly | { type: 'single.user.select' } & CustomFieldContextSingleUserPickerDefaults | { type: 'textarea' } & CustomFieldContextDefaultValueTextArea | { type: 'textfield' } & CustomFieldContextDefaultValueTextField | { type: 'url' } & CustomFieldContextDefaultValueURL | { type: 'version.multiple' } & CustomFieldContextDefaultValueMultipleVersionPicker | { type: 'version.single' } & CustomFieldContextDefaultValueSingleVersionPicker;
/**
 * The default value for a cascading select custom field.
 * @export
 * @interface CustomFieldContextDefaultValueCascadingOption
 */
export interface CustomFieldContextDefaultValueCascadingOption {
    /**
     * The ID of the default cascading option.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueCascadingOption
     */
    cascadingOptionId?: string;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueCascadingOption
     */
    contextId: string;
    /**
     * The ID of the default option.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueCascadingOption
     */
    optionId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueCascadingOption
     */
    type: string;
}
/**
 * The default value for a Date custom field.
 * @export
 * @interface CustomFieldContextDefaultValueDate
 */
export interface CustomFieldContextDefaultValueDate {
    /**
     * The default date in ISO format. Ignored if `useCurrent` is true.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDate
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDate
     */
    type: string;
    /**
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueDate
     */
    useCurrent?: boolean;
}
/**
 * The default value for a date time custom field.
 * @export
 * @interface CustomFieldContextDefaultValueDateTime
 */
export interface CustomFieldContextDefaultValueDateTime {
    /**
     * The default date-time in ISO format. Ignored if `useCurrent` is true.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDateTime
     */
    dateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDateTime
     */
    type: string;
    /**
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueDateTime
     */
    useCurrent?: boolean;
}
/**
 * Default value for a float (number) custom field.
 * @export
 * @interface CustomFieldContextDefaultValueFloat
 */
export interface CustomFieldContextDefaultValueFloat {
    /**
     * The default floating-point number.
     * @type {number}
     * @memberof CustomFieldContextDefaultValueFloat
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueFloat
     */
    type: string;
}
/**
 * The default value for a Forge date time custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeDateTimeField
 */
export interface CustomFieldContextDefaultValueForgeDateTimeField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    contextId: string;
    /**
     * The default date-time in ISO format. Ignored if `useCurrent` is true.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    dateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    type: string;
    /**
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    useCurrent?: boolean;
}
/**
 * The default value for a Forge group custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeGroupField
 */
export interface CustomFieldContextDefaultValueForgeGroupField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeGroupField
     */
    contextId: string;
    /**
     * The ID of the the default group.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeGroupField
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeGroupField
     */
    type: string;
}
/**
 * The default value for a Forge collection of groups custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeMultiGroupField
 */
export interface CustomFieldContextDefaultValueForgeMultiGroupField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiGroupField
     */
    contextId: string;
    /**
     * The IDs of the default groups.
     * @type {Set<string>}
     * @memberof CustomFieldContextDefaultValueForgeMultiGroupField
     */
    groupIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiGroupField
     */
    type: string;
}
/**
 * The default text for a Forge collection of strings custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeMultiStringField
 */
export interface CustomFieldContextDefaultValueForgeMultiStringField {
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiStringField
     */
    type: string;
    /**
     * List of string values. The maximum length for a value is 254 characters.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueForgeMultiStringField
     */
    values?: Array<string>;
}
/**
 * Defaults for a Forge collection of users custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeMultiUserField
 */
export interface CustomFieldContextDefaultValueForgeMultiUserField {
    /**
     * The IDs of the default users.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueForgeMultiUserField
     */
    accountIds: Array<string>;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiUserField
     */
    contextId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiUserField
     */
    type: string;
}
/**
 * Default value for a Forge number custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeNumberField
 */
export interface CustomFieldContextDefaultValueForgeNumberField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeNumberField
     */
    contextId: string;
    /**
     * The default floating-point number.
     * @type {number}
     * @memberof CustomFieldContextDefaultValueForgeNumberField
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeNumberField
     */
    type: string;
}
/**
 * The default value for a Forge object custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeObjectField
 */
export interface CustomFieldContextDefaultValueForgeObjectField {
    /**
     * The default JSON object.
     * @type {object}
     * @memberof CustomFieldContextDefaultValueForgeObjectField
     */
    object?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeObjectField
     */
    type: string;
}
/**
 * The default text for a Forge string custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeStringField
 */
export interface CustomFieldContextDefaultValueForgeStringField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeStringField
     */
    contextId: string;
    /**
     * The default text. The maximum length is 254 characters.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeStringField
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeStringField
     */
    type: string;
}
/**
 * Defaults for a Forge user custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeUserField
 */
export interface CustomFieldContextDefaultValueForgeUserField {
    /**
     * The ID of the default user.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    accountId: string;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    contextId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    type: string;
    /**
     * 
     * @type {UserFilter}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    userFilter: UserFilter;
}
/**
 * Default value for a labels custom field.
 * @export
 * @interface CustomFieldContextDefaultValueLabels
 */
export interface CustomFieldContextDefaultValueLabels {
    /**
     * The default labels value.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueLabels
     */
    labels: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueLabels
     */
    type: string;
}
/**
 * The default value for a User Picker (multiple) custom field.
 * @export
 * @interface CustomFieldContextDefaultValueMultiUserPicker
 */
export interface CustomFieldContextDefaultValueMultiUserPicker {
    /**
     * The IDs of the default users.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueMultiUserPicker
     */
    accountIds: Array<string>;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultiUserPicker
     */
    contextId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultiUserPicker
     */
    type: string;
}
/**
 * The default value for a multiple group picker custom field.
 * @export
 * @interface CustomFieldContextDefaultValueMultipleGroupPicker
 */
export interface CustomFieldContextDefaultValueMultipleGroupPicker {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleGroupPicker
     */
    contextId: string;
    /**
     * The IDs of the default groups.
     * @type {Set<string>}
     * @memberof CustomFieldContextDefaultValueMultipleGroupPicker
     */
    groupIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleGroupPicker
     */
    type: string;
}
/**
 * The default value for a multi-select custom field.
 * @export
 * @interface CustomFieldContextDefaultValueMultipleOption
 */
export interface CustomFieldContextDefaultValueMultipleOption {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleOption
     */
    contextId: string;
    /**
     * The list of IDs of the default options.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueMultipleOption
     */
    optionIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleOption
     */
    type: string;
}
/**
 * The default value for a multiple version picker custom field.
 * @export
 * @interface CustomFieldContextDefaultValueMultipleVersionPicker
 */
export interface CustomFieldContextDefaultValueMultipleVersionPicker {
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    type: string;
    /**
     * The IDs of the default versions.
     * @type {Set<string>}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    versionIds: Array<string>;
    /**
     * The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    versionOrder?: string;
}
/**
 * The default value for a project custom field.
 * @export
 * @interface CustomFieldContextDefaultValueProject
 */
export interface CustomFieldContextDefaultValueProject {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueProject
     */
    contextId: string;
    /**
     * The ID of the default project.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueProject
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueProject
     */
    type: string;
}
/**
 * The default text for a read only custom field.
 * @export
 * @interface CustomFieldContextDefaultValueReadOnly
 */
export interface CustomFieldContextDefaultValueReadOnly {
    /**
     * The default text. The maximum length is 255 characters.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueReadOnly
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueReadOnly
     */
    type: string;
}
/**
 * The default value for a group picker custom field.
 * @export
 * @interface CustomFieldContextDefaultValueSingleGroupPicker
 */
export interface CustomFieldContextDefaultValueSingleGroupPicker {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleGroupPicker
     */
    contextId: string;
    /**
     * The ID of the the default group.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleGroupPicker
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleGroupPicker
     */
    type: string;
}
/**
 * The default value for a single select custom field.
 * @export
 * @interface CustomFieldContextDefaultValueSingleOption
 */
export interface CustomFieldContextDefaultValueSingleOption {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleOption
     */
    contextId: string;
    /**
     * The ID of the default option.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleOption
     */
    optionId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleOption
     */
    type: string;
}
/**
 * The default value for a version picker custom field.
 * @export
 * @interface CustomFieldContextDefaultValueSingleVersionPicker
 */
export interface CustomFieldContextDefaultValueSingleVersionPicker {
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleVersionPicker
     */
    type: string;
    /**
     * The ID of the default version.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleVersionPicker
     */
    versionId: string;
    /**
     * The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleVersionPicker
     */
    versionOrder?: string;
}
/**
 * The default text for a text area custom field.
 * @export
 * @interface CustomFieldContextDefaultValueTextArea
 */
export interface CustomFieldContextDefaultValueTextArea {
    /**
     * The default text. The maximum length is 32767 characters.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueTextArea
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueTextArea
     */
    type: string;
}
/**
 * The default text for a text custom field.
 * @export
 * @interface CustomFieldContextDefaultValueTextField
 */
export interface CustomFieldContextDefaultValueTextField {
    /**
     * The default text. The maximum length is 254 characters.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueTextField
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueTextField
     */
    type: string;
}
/**
 * The default value for a URL custom field.
 * @export
 * @interface CustomFieldContextDefaultValueURL
 */
export interface CustomFieldContextDefaultValueURL {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueURL
     */
    contextId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueURL
     */
    type: string;
    /**
     * The default URL.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueURL
     */
    url: string;
}
/**
 * Default values to update.
 * @export
 * @interface CustomFieldContextDefaultValueUpdate
 */
export interface CustomFieldContextDefaultValueUpdate {
    /**
     * 
     * @type {Array<CustomFieldContextDefaultValue>}
     * @memberof CustomFieldContextDefaultValueUpdate
     */
    defaultValues?: Array<CustomFieldContextDefaultValue>;
}
/**
 * Details of the custom field options for a context.
 * @export
 * @interface CustomFieldContextOption
 */
export interface CustomFieldContextOption {
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldContextOption
     */
    disabled: boolean;
    /**
     * The ID of the custom field option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    id: string;
    /**
     * For cascading options, the ID of the custom field option containing the cascading option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    optionId?: string;
    /**
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    value: string;
}
/**
 * Details of a context to project association.
 * @export
 * @interface CustomFieldContextProjectMapping
 */
export interface CustomFieldContextProjectMapping {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextProjectMapping
     */
    readonly contextId: string;
    /**
     * Whether context is global.
     * @type {boolean}
     * @memberof CustomFieldContextProjectMapping
     */
    readonly isGlobalContext?: boolean;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof CustomFieldContextProjectMapping
     */
    readonly projectId?: string;
}
/**
 * Defaults for a User Picker (single) custom field.
 * @export
 * @interface CustomFieldContextSingleUserPickerDefaults
 */
export interface CustomFieldContextSingleUserPickerDefaults {
    /**
     * The ID of the default user.
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    accountId: string;
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    contextId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    type: string;
    /**
     * 
     * @type {UserFilter}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    userFilter: UserFilter;
}
/**
 * Details of a custom field context.
 * @export
 * @interface CustomFieldContextUpdateDetails
 */
export interface CustomFieldContextUpdateDetails {
    /**
     * The description of the custom field context. The maximum length is 255 characters.
     * @type {string}
     * @memberof CustomFieldContextUpdateDetails
     */
    description?: string;
    /**
     * The name of the custom field context. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof CustomFieldContextUpdateDetails
     */
    name?: string;
}
/**
 * A list of custom field options for a context.
 * @export
 * @interface CustomFieldCreatedContextOptionsList
 */
export interface CustomFieldCreatedContextOptionsList {
    /**
     * The created custom field options.
     * @type {Array<CustomFieldContextOption>}
     * @memberof CustomFieldCreatedContextOptionsList
     */
    options?: Array<CustomFieldContextOption>;
}
/**
 * 
 * @export
 * @interface CustomFieldDefinitionJsonBean
 */
export interface CustomFieldDefinitionJsonBean {
    /**
     * The description of the custom field, which is displayed in Jira.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    description?: string;
    /**
     * The name of the custom field, which is displayed in Jira. This is not the unique identifier.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    name: string;
    /**
     * The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.  
     * The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):
     * 
     *  *  `cascadingselect`: `cascadingselectsearcher`
     *  *  `datepicker`: `daterange`
     *  *  `datetime`: `datetimerange`
     *  *  `float`: `exactnumber` or `numberrange`
     *  *  `grouppicker`: `grouppickersearcher`
     *  *  `importid`: `exactnumber` or `numberrange`
     *  *  `labels`: `labelsearcher`
     *  *  `multicheckboxes`: `multiselectsearcher`
     *  *  `multigrouppicker`: `multiselectsearcher`
     *  *  `multiselect`: `multiselectsearcher`
     *  *  `multiuserpicker`: `userpickergroupsearcher`
     *  *  `multiversion`: `versionsearcher`
     *  *  `project`: `projectsearcher`
     *  *  `radiobuttons`: `multiselectsearcher`
     *  *  `readonlyfield`: `textsearcher`
     *  *  `select`: `multiselectsearcher`
     *  *  `textarea`: `textsearcher`
     *  *  `textfield`: `textsearcher`
     *  *  `url`: `exacttextsearcher`
     *  *  `userpicker`: `userpickergroupsearcher`
     *  *  `version`: `versionsearcher`
     * 
     * If no searcher is provided, the field isn't searchable. However, [Forge custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-) have a searcher set automatically, so are always searchable.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    searcherKey?: CustomFieldDefinitionJsonBeanSearcherKeyEnum;
    /**
     * The type of the custom field. These built-in custom field types are available:
     * 
     *  *  `cascadingselect`: Enables values to be selected from two levels of select lists (value: `com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect`)
     *  *  `datepicker`: Stores a date using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:datepicker`)
     *  *  `datetime`: Stores a date with a time component (value: `com.atlassian.jira.plugin.system.customfieldtypes:datetime`)
     *  *  `float`: Stores and validates a numeric (floating point) input (value: `com.atlassian.jira.plugin.system.customfieldtypes:float`)
     *  *  `grouppicker`: Stores a user group using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:grouppicker`)
     *  *  `importid`: A read-only field that stores the ID the issue had in the system it was imported from (value: `com.atlassian.jira.plugin.system.customfieldtypes:importid`)
     *  *  `labels`: Stores labels (value: `com.atlassian.jira.plugin.system.customfieldtypes:labels`)
     *  *  `multicheckboxes`: Stores multiple values using checkboxes (value: ``)
     *  *  `multigrouppicker`: Stores multiple user groups using a picker control (value: ``)
     *  *  `multiselect`: Stores multiple values using a select list (value: `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes`)
     *  *  `multiuserpicker`: Stores multiple users using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker`)
     *  *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:multiversion`)
     *  *  `project`: Stores a project from a list of projects that the user is permitted to view (value: `com.atlassian.jira.plugin.system.customfieldtypes:project`)
     *  *  `radiobuttons`: Stores a value using radio buttons (value: `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons`)
     *  *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API (value: `com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield`)
     *  *  `select`: Stores a value from a configurable list of options (value: `com.atlassian.jira.plugin.system.customfieldtypes:select`)
     *  *  `textarea`: Stores a long text string using a multiline text area (value: `com.atlassian.jira.plugin.system.customfieldtypes:textarea`)
     *  *  `textfield`: Stores a text string using a single-line text box (value: `com.atlassian.jira.plugin.system.customfieldtypes:textfield`)
     *  *  `url`: Stores a URL (value: `com.atlassian.jira.plugin.system.customfieldtypes:url`)
     *  *  `userpicker`: Stores a user using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:userpicker`)
     *  *  `version`: Stores a version using a picker control (value: `com.atlassian.jira.plugin.system.customfieldtypes:version`)
     * 
     * To create a field based on a [Forge custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/#jira-custom-field-type--beta-), use the ID of the Forge custom field type as the value. For example, `ari:cloud:ecosystem::extension/e62f20a2-4b61-4dbe-bfb9-9a88b5e3ac84/548c5df1-24aa-4f7c-bbbb-3038d947cb05/static/my-cf-type-key`.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    type: string;
}


/**
 * @export
 */
export const CustomFieldDefinitionJsonBeanSearcherKeyEnum = {
    Cascadingselectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher',
    Daterange: 'com.atlassian.jira.plugin.system.customfieldtypes:daterange',
    Datetimerange: 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange',
    Exactnumber: 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber',
    Exacttextsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher',
    Grouppickersearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher',
    Labelsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher',
    Multiselectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher',
    Numberrange: 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange',
    Projectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher',
    Textsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher',
    Userpickergroupsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher',
    Versionsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher'
} as const;
export type CustomFieldDefinitionJsonBeanSearcherKeyEnum = typeof CustomFieldDefinitionJsonBeanSearcherKeyEnum[keyof typeof CustomFieldDefinitionJsonBeanSearcherKeyEnum];

/**
 * Details of a custom option for a field.
 * @export
 * @interface CustomFieldOption
 */
export interface CustomFieldOption {
    /**
     * The URL of these custom field option details.
     * @type {string}
     * @memberof CustomFieldOption
     */
    readonly self?: string;
    /**
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldOption
     */
    readonly value?: string;
}
/**
 * Details of a custom field option to create.
 * @export
 * @interface CustomFieldOptionCreate
 */
export interface CustomFieldOptionCreate {
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldOptionCreate
     */
    disabled?: boolean;
    /**
     * For cascading options, the ID of a parent option.
     * @type {string}
     * @memberof CustomFieldOptionCreate
     */
    optionId?: string;
    /**
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldOptionCreate
     */
    value: string;
}
/**
 * Details of a custom field option for a context.
 * @export
 * @interface CustomFieldOptionUpdate
 */
export interface CustomFieldOptionUpdate {
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldOptionUpdate
     */
    disabled?: boolean;
    /**
     * The ID of the custom field option.
     * @type {string}
     * @memberof CustomFieldOptionUpdate
     */
    id: string;
    /**
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldOptionUpdate
     */
    value?: string;
}
/**
 * Details about the replacement for a deleted version.
 * @export
 * @interface CustomFieldReplacement
 */
export interface CustomFieldReplacement {
    /**
     * The ID of the custom field in which to replace the version number.
     * @type {number}
     * @memberof CustomFieldReplacement
     */
    customFieldId?: number;
    /**
     * The version number to use as a replacement for the deleted version.
     * @type {number}
     * @memberof CustomFieldReplacement
     */
    moveTo?: number;
}
/**
 * A list of custom field options for a context.
 * @export
 * @interface CustomFieldUpdatedContextOptionsList
 */
export interface CustomFieldUpdatedContextOptionsList {
    /**
     * The updated custom field options.
     * @type {Array<CustomFieldOptionUpdate>}
     * @memberof CustomFieldUpdatedContextOptionsList
     */
    options?: Array<CustomFieldOptionUpdate>;
}
/**
 * A list of issue IDs and the value to update a custom field to.
 * @export
 * @interface CustomFieldValueUpdate
 */
export interface CustomFieldValueUpdate {
    /**
     * The list of issue IDs.
     * @type {Array<number>}
     * @memberof CustomFieldValueUpdate
     */
    issueIds: Array<number>;
    /**
     * The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:
     * 
     *  *  `string` the value must be a string.
     *  *  `number` the value must be a number.
     *  *  `datetime` the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, `"2023-01-18T12:00:00-03:00"` or `"2023-01-18T12:00:00.000Z"`. However, the milliseconds part is ignored.
     *  *  `user` the value must be an object that contains the `accountId` field.
     *  *  `group` the value must be an object that contains the group `name` or `groupId` field. Because group names can change, we recommend using `groupId`.
     * 
     * A list of appropriate values must be provided if the field is of the `list` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).
     * @type {any}
     * @memberof CustomFieldValueUpdate
     */
    value: any | null;
}
/**
 * Details of updates for a custom field.
 * @export
 * @interface CustomFieldValueUpdateDetails
 */
export interface CustomFieldValueUpdateDetails {
    /**
     * The list of custom field update details.
     * @type {Array<CustomFieldValueUpdate>}
     * @memberof CustomFieldValueUpdateDetails
     */
    updates?: Array<CustomFieldValueUpdate>;
}
/**
 * Details of a dashboard.
 * @export
 * @interface Dashboard
 */
export interface Dashboard {
    /**
     * The automatic refresh interval for the dashboard in milliseconds.
     * @type {number}
     * @memberof Dashboard
     */
    readonly automaticRefreshMs?: number;
    /**
     * 
     * @type {string}
     * @memberof Dashboard
     */
    description?: string;
    /**
     * The details of any edit share permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof Dashboard
     */
    readonly editPermissions?: Array<SharePermission>;
    /**
     * The ID of the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    readonly id?: string;
    /**
     * Whether the dashboard is selected as a favorite by the user.
     * @type {boolean}
     * @memberof Dashboard
     */
    readonly isFavourite?: boolean;
    /**
     * Whether the current user has permission to edit the dashboard.
     * @type {boolean}
     * @memberof Dashboard
     */
    readonly isWritable?: boolean;
    /**
     * The name of the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    readonly name?: string;
    /**
     * The owner of the dashboard.
     * @type {UserBean}
     * @memberof Dashboard
     */
    readonly owner?: UserBean;
    /**
     * The number of users who have this dashboard as a favorite.
     * @type {number}
     * @memberof Dashboard
     */
    readonly popularity?: number;
    /**
     * The rank of this dashboard.
     * @type {number}
     * @memberof Dashboard
     */
    readonly rank?: number;
    /**
     * The URL of these dashboard details.
     * @type {string}
     * @memberof Dashboard
     */
    readonly self?: string;
    /**
     * The details of any view share permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof Dashboard
     */
    readonly sharePermissions?: Array<SharePermission>;
    /**
     * Whether the current dashboard is system dashboard.
     * @type {boolean}
     * @memberof Dashboard
     */
    readonly systemDashboard?: boolean;
    /**
     * The URL of the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    readonly view?: string;
}
/**
 * Details of a dashboard.
 * @export
 * @interface DashboardDetails
 */
export interface DashboardDetails {
    /**
     * The description of the dashboard.
     * @type {string}
     * @memberof DashboardDetails
     */
    description?: string;
    /**
     * The edit permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof DashboardDetails
     */
    editPermissions: Array<SharePermission>;
    /**
     * The name of the dashboard.
     * @type {string}
     * @memberof DashboardDetails
     */
    name: string;
    /**
     * The share permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof DashboardDetails
     */
    sharePermissions: Array<SharePermission>;
}
/**
 * Details of a gadget.
 * @export
 * @interface DashboardGadget
 */
export interface DashboardGadget {
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly color: DashboardGadgetColorEnum;
    /**
     * The ID of the gadget instance.
     * @type {number}
     * @memberof DashboardGadget
     */
    readonly id: number;
    /**
     * The module key of the gadget type.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly moduleKey?: string;
    /**
     * The position of the gadget.
     * @type {DashboardGadgetPosition}
     * @memberof DashboardGadget
     */
    readonly position: DashboardGadgetPosition;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly title: string;
    /**
     * The URI of the gadget type.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly uri?: string;
}


/**
 * @export
 */
export const DashboardGadgetColorEnum = {
    Blue: 'blue',
    Red: 'red',
    Yellow: 'yellow',
    Green: 'green',
    Cyan: 'cyan',
    Purple: 'purple',
    Gray: 'gray',
    White: 'white'
} as const;
export type DashboardGadgetColorEnum = typeof DashboardGadgetColorEnum[keyof typeof DashboardGadgetColorEnum];

/**
 * Details of a gadget position.
 * @export
 * @interface DashboardGadgetPosition
 */
export interface DashboardGadgetPosition {
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetPosition
     */
    theColumnPositionOfTheGadget: number;
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetPosition
     */
    theRowPositionOfTheGadget: number;
}
/**
 * The list of gadgets on the dashboard.
 * @export
 * @interface DashboardGadgetResponse
 */
export interface DashboardGadgetResponse {
    /**
     * The list of gadgets.
     * @type {Array<DashboardGadget>}
     * @memberof DashboardGadgetResponse
     */
    readonly gadgets: Array<DashboardGadget>;
}
/**
 * Details of the settings for a dashboard gadget.
 * @export
 * @interface DashboardGadgetSettings
 */
export interface DashboardGadgetSettings {
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    color?: string;
    /**
     * Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.
     * @type {boolean}
     * @memberof DashboardGadgetSettings
     */
    ignoreUriAndModuleKeyValidation?: boolean;
    /**
     * The module key of the gadget type. Can't be provided with `uri`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    moduleKey?: string;
    /**
     * The position of the gadget. When the gadget is placed into the position, other gadgets in the same column are moved down to accommodate it.
     * @type {DashboardGadgetPosition}
     * @memberof DashboardGadgetSettings
     */
    position?: DashboardGadgetPosition;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    title?: string;
    /**
     * The URI of the gadget type. Can't be provided with `moduleKey`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    uri?: string;
}
/**
 * The details of the gadget to update.
 * @export
 * @interface DashboardGadgetUpdateRequest
 */
export interface DashboardGadgetUpdateRequest {
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadgetUpdateRequest
     */
    color?: string;
    /**
     * The position of the gadget.
     * @type {DashboardGadgetPosition}
     * @memberof DashboardGadgetUpdateRequest
     */
    position?: DashboardGadgetPosition;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadgetUpdateRequest
     */
    title?: string;
}
/**
 * The data classification.
 * @export
 * @interface DataClassificationLevelsBean
 */
export interface DataClassificationLevelsBean {
    /**
     * The data classifications.
     * @type {Array<DataClassificationTagBean>}
     * @memberof DataClassificationLevelsBean
     */
    classifications?: Array<DataClassificationTagBean>;
}
/**
 * The data classification.
 * @export
 * @interface DataClassificationTagBean
 */
export interface DataClassificationTagBean {
    /**
     * The color of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    color?: string;
    /**
     * The description of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    description?: string;
    /**
     * The guideline of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    guideline?: string;
    /**
     * The ID of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    id: string;
    /**
     * The name of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    name?: string;
    /**
     * The rank of the data classification object.
     * @type {number}
     * @memberof DataClassificationTagBean
     */
    rank?: number;
    /**
     * The status of the data classification object.
     * @type {string}
     * @memberof DataClassificationTagBean
     */
    status: string;
}
/**
 * List issues archived within a specified date range.
 * @export
 * @interface DateRangeFilterRequest
 */
export interface DateRangeFilterRequest {
    /**
     * List issues archived after a specified date, passed in the YYYY-MM-DD format.
     * @type {string}
     * @memberof DateRangeFilterRequest
     */
    dateAfter: string;
    /**
     * List issues archived before a specified date provided in the YYYY-MM-DD format.
     * @type {string}
     * @memberof DateRangeFilterRequest
     */
    dateBefore: string;
}
/**
 * Details of scheme and new default level.
 * @export
 * @interface DefaultLevelValue
 */
export interface DefaultLevelValue {
    [key: string]: any | any;
    /**
     * The ID of the issue security level to set as default for the specified scheme. Providing null will reset the default level.
     * @type {string}
     * @memberof DefaultLevelValue
     */
    defaultLevelId: string;
    /**
     * The ID of the issue security scheme to set default level for.
     * @type {string}
     * @memberof DefaultLevelValue
     */
    issueSecuritySchemeId: string;
}
/**
 * Details of the scope of the default sharing for new filters and dashboards.
 * @export
 * @interface DefaultShareScope
 */
export interface DefaultShareScope {
    /**
     * The scope of the default sharing for new filters and dashboards:
     * 
     *  *  `AUTHENTICATED` Shared with all logged-in users.
     *  *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.
     *  *  `PRIVATE` Not shared with any users.
     * @type {string}
     * @memberof DefaultShareScope
     */
    scope: DefaultShareScopeScopeEnum;
}


/**
 * @export
 */
export const DefaultShareScopeScopeEnum = {
    Global: 'GLOBAL',
    Authenticated: 'AUTHENTICATED',
    Private: 'PRIVATE'
} as const;
export type DefaultShareScopeScopeEnum = typeof DefaultShareScopeScopeEnum[keyof typeof DefaultShareScopeScopeEnum];

/**
 * Details about the default workflow.
 * @export
 * @interface DefaultWorkflow
 */
export interface DefaultWorkflow {
    /**
     * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
     * @type {boolean}
     * @memberof DefaultWorkflow
     */
    updateDraftIfNeeded?: boolean;
    /**
     * The name of the workflow to set as the default workflow.
     * @type {string}
     * @memberof DefaultWorkflow
     */
    workflow: string;
}
/**
 * 
 * @export
 * @interface DeleteAndReplaceVersionBean
 */
export interface DeleteAndReplaceVersionBean {
    /**
     * An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
     * @type {Array<CustomFieldReplacement>}
     * @memberof DeleteAndReplaceVersionBean
     */
    customFieldReplacementList?: Array<CustomFieldReplacement>;
    /**
     * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
     * @type {number}
     * @memberof DeleteAndReplaceVersionBean
     */
    moveAffectedIssuesTo?: number;
    /**
     * The ID of the version to update `fixVersion` to when the field contains the deleted version.
     * @type {number}
     * @memberof DeleteAndReplaceVersionBean
     */
    moveFixIssuesTo?: number;
}
/**
 * Details about a workflow.
 * @export
 * @interface DeprecatedWorkflow
 */
export interface DeprecatedWorkflow {
    /**
     * 
     * @type {boolean}
     * @memberof DeprecatedWorkflow
     */
    default?: boolean;
    /**
     * The description of the workflow.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly description?: string;
    /**
     * The datetime the workflow was last modified.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly lastModifiedDate?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly lastModifiedUser?: string;
    /**
     * The account ID of the user that last modified the workflow.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly lastModifiedUserAccountId?: string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly name?: string;
    /**
     * The scope where this workflow applies
     * @type {Scope}
     * @memberof DeprecatedWorkflow
     */
    readonly scope?: Scope;
    /**
     * The number of steps included in the workflow.
     * @type {number}
     * @memberof DeprecatedWorkflow
     */
    readonly steps?: number;
}
/**
 * 
 * @export
 * @interface DetailedErrorCollection
 */
export interface DetailedErrorCollection {
    /**
     * Map of objects representing additional details for an error
     * @type {{ [key: string]: any; }}
     * @memberof DetailedErrorCollection
     */
    details?: { [key: string]: any; };
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof DetailedErrorCollection
     */
    errorMessages?: Array<string>;
    /**
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof DetailedErrorCollection
     */
    errors?: { [key: string]: string; };
}
/**
 * The current version details of this workflow scheme.
 * @export
 * @interface DocumentVersion
 */
export interface DocumentVersion {
    /**
     * The version UUID.
     * @type {string}
     * @memberof DocumentVersion
     */
    id?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof DocumentVersion
     */
    versionNumber?: number;
}
/**
 * 
 * @export
 * @interface DuplicatePlanRequest
 */
export interface DuplicatePlanRequest {
    /**
     * The plan name.
     * @type {string}
     * @memberof DuplicatePlanRequest
     */
    name: string;
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
 * @interface EntityPropertyDetails
 */
export interface EntityPropertyDetails {
    /**
     * The entity property ID.
     * @type {number}
     * @memberof EntityPropertyDetails
     */
    entityId: number;
    /**
     * The entity property key.
     * @type {string}
     * @memberof EntityPropertyDetails
     */
    key: string;
    /**
     * The new value of the entity property.
     * @type {string}
     * @memberof EntityPropertyDetails
     */
    value: string;
}
/**
 * Error messages from an operation.
 * @export
 * @interface ErrorCollection
 */
export interface ErrorCollection {
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof ErrorCollection
     */
    errorMessages?: Array<string>;
    /**
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof ErrorCollection
     */
    errors?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ErrorCollection
     */
    status?: number;
}
/**
 * 
 * @export
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     * 
     * @type {string}
     * @memberof ErrorMessage
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface Errors
 */
export interface Errors {
    /**
     * 
     * @type {Error}
     * @memberof Errors
     */
    issueIsSubtask?: Error;
    /**
     * 
     * @type {Error}
     * @memberof Errors
     */
    issuesInArchivedProjects?: Error;
    /**
     * 
     * @type {Error}
     * @memberof Errors
     */
    issuesInUnlicensedProjects?: Error;
    /**
     * 
     * @type {Error}
     * @memberof Errors
     */
    issuesNotFound?: Error;
    /**
     * 
     * @type {Error}
     * @memberof Errors
     */
    userDoesNotHavePermission?: Error;
}
/**
 * Details about a notification associated with an event.
 * @export
 * @interface EventNotification
 */
export interface EventNotification {
    /**
     * The email address.
     * @type {string}
     * @memberof EventNotification
     */
    emailAddress?: string;
    /**
     * Expand options that include additional event notification details in the response.
     * @type {string}
     * @memberof EventNotification
     */
    expand?: string;
    /**
     * The custom user or group field.
     * @type {FieldDetails}
     * @memberof EventNotification
     */
    field?: FieldDetails;
    /**
     * The specified group.
     * @type {GroupName}
     * @memberof EventNotification
     */
    group?: GroupName;
    /**
     * The ID of the notification.
     * @type {number}
     * @memberof EventNotification
     */
    id?: number;
    /**
     * Identifies the recipients of the notification.
     * @type {string}
     * @memberof EventNotification
     */
    notificationType?: EventNotificationNotificationTypeEnum;
    /**
     * As a group's name can change, use of `recipient` is recommended. The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by `notificationType` value. So, when `notificationType` is:
     * 
     *  *  `User` The `parameter` is the user account ID.
     *  *  `Group` The `parameter` is the group name.
     *  *  `ProjectRole` The `parameter` is the project role ID.
     *  *  `UserCustomField` The `parameter` is the ID of the custom field.
     *  *  `GroupCustomField` The `parameter` is the ID of the custom field.
     * @type {string}
     * @memberof EventNotification
     */
    parameter?: string;
    /**
     * The specified project role.
     * @type {ProjectRole}
     * @memberof EventNotification
     */
    projectRole?: ProjectRole;
    /**
     * The identifier associated with the `notificationType` value that defines the receiver of the notification, where the receiver isn't implied by the `notificationType` value. So, when `notificationType` is:
     * 
     *  *  `User`, `recipient` is the user account ID.
     *  *  `Group`, `recipient` is the group ID.
     *  *  `ProjectRole`, `recipient` is the project role ID.
     *  *  `UserCustomField`, `recipient` is the ID of the custom field.
     *  *  `GroupCustomField`, `recipient` is the ID of the custom field.
     * @type {string}
     * @memberof EventNotification
     */
    recipient?: string;
    /**
     * The specified user.
     * @type {UserDetails}
     * @memberof EventNotification
     */
    user?: UserDetails;
}


/**
 * @export
 */
export const EventNotificationNotificationTypeEnum = {
    CurrentAssignee: 'CurrentAssignee',
    Reporter: 'Reporter',
    CurrentUser: 'CurrentUser',
    ProjectLead: 'ProjectLead',
    ComponentLead: 'ComponentLead',
    User: 'User',
    Group: 'Group',
    ProjectRole: 'ProjectRole',
    EmailAddress: 'EmailAddress',
    AllWatchers: 'AllWatchers',
    UserCustomField: 'UserCustomField',
    GroupCustomField: 'GroupCustomField'
} as const;
export type EventNotificationNotificationTypeEnum = typeof EventNotificationNotificationTypeEnum[keyof typeof EventNotificationNotificationTypeEnum];

/**
 * A priority scheme with less fields to be used in for an API expand response.
 * @export
 * @interface ExpandPrioritySchemeBean
 */
export interface ExpandPrioritySchemeBean {
    /**
     * The ID of the priority scheme.
     * @type {string}
     * @memberof ExpandPrioritySchemeBean
     */
    readonly id?: string;
    /**
     * The name of the priority scheme.
     * @type {string}
     * @memberof ExpandPrioritySchemeBean
     */
    readonly name?: string;
    /**
     * The URL of the priority scheme.
     * @type {string}
     * @memberof ExpandPrioritySchemeBean
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface ExpandPrioritySchemePage
 */
export interface ExpandPrioritySchemePage {
    [key: string]: any | any;
    /**
     * 
     * @type {number}
     * @memberof ExpandPrioritySchemePage
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof ExpandPrioritySchemePage
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof ExpandPrioritySchemePage
     */
    total?: number;
}
/**
 * The response for status request for a running/completed export task.
 * @export
 * @interface ExportArchivedIssuesTaskProgressResponse
 */
export interface ExportArchivedIssuesTaskProgressResponse {
    /**
     * 
     * @type {string}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    fileUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    payload?: string;
    /**
     * 
     * @type {number}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    progress?: number;
    /**
     * 
     * @type {string}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    submittedTime?: string;
    /**
     * 
     * @type {string}
     * @memberof ExportArchivedIssuesTaskProgressResponse
     */
    taskId?: string;
}
/**
 * Details about a failed webhook.
 * @export
 * @interface FailedWebhook
 */
export interface FailedWebhook {
    /**
     * The webhook body.
     * @type {string}
     * @memberof FailedWebhook
     */
    body?: string;
    /**
     * The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
     * @type {number}
     * @memberof FailedWebhook
     */
    failureTime: number;
    /**
     * The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook.
     * @type {string}
     * @memberof FailedWebhook
     */
    id: string;
    /**
     * The original webhook destination.
     * @type {string}
     * @memberof FailedWebhook
     */
    url: string;
}
/**
 * A page of failed webhooks.
 * @export
 * @interface FailedWebhooks
 */
export interface FailedWebhooks {
    /**
     * The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
     * @type {number}
     * @memberof FailedWebhooks
     */
    maxResults: number;
    /**
     * The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour).
     * @type {string}
     * @memberof FailedWebhooks
     */
    next?: string;
    /**
     * The list of webhooks.
     * @type {Array<FailedWebhook>}
     * @memberof FailedWebhooks
     */
    values: Array<FailedWebhook>;
}
/**
 * Details of a field.
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * Number of contexts where the field is used.
     * @type {number}
     * @memberof Field
     */
    contextsCount?: number;
    /**
     * The description of the field.
     * @type {string}
     * @memberof Field
     */
    description?: string;
    /**
     * The ID of the field.
     * @type {string}
     * @memberof Field
     */
    id: string;
    /**
     * Whether the field is locked.
     * @type {boolean}
     * @memberof Field
     */
    isLocked?: boolean;
    /**
     * Whether the field is shown on screen or not.
     * @type {boolean}
     * @memberof Field
     */
    isUnscreenable?: boolean;
    /**
     * The key of the field.
     * @type {string}
     * @memberof Field
     */
    key?: string;
    /**
     * 
     * @type {FieldLastUsed}
     * @memberof Field
     */
    lastUsed?: FieldLastUsed;
    /**
     * The name of the field.
     * @type {string}
     * @memberof Field
     */
    name: string;
    /**
     * Number of projects where the field is used.
     * @type {number}
     * @memberof Field
     */
    projectsCount?: number;
    /**
     * 
     * @type {JsonTypeBean}
     * @memberof Field
     */
    schema: JsonTypeBean;
    /**
     * Number of screens where the field is used.
     * @type {number}
     * @memberof Field
     */
    screensCount?: number;
    /**
     * The searcher key of the field. Returned for custom fields.
     * @type {string}
     * @memberof Field
     */
    searcherKey?: string;
    /**
     * The stable ID of the field.
     * @type {string}
     * @memberof Field
     */
    stableId?: string;
}
/**
 * A clause that asserts whether a field was changed. For example, `status CHANGED AFTER startOfMonth(-1M)`.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.
 * @export
 * @interface FieldChangedClause
 */
export interface FieldChangedClause {
    /**
     * 
     * @type {JqlQueryField}
     * @memberof FieldChangedClause
     */
    field: JqlQueryField;
    /**
     * The operator applied to the field.
     * @type {string}
     * @memberof FieldChangedClause
     */
    operator: FieldChangedClauseOperatorEnum;
    /**
     * The list of time predicates.
     * @type {Array<JqlQueryClauseTimePredicate>}
     * @memberof FieldChangedClause
     */
    predicates: Array<JqlQueryClauseTimePredicate>;
}


/**
 * @export
 */
export const FieldChangedClauseOperatorEnum = {
    Changed: 'changed'
} as const;
export type FieldChangedClauseOperatorEnum = typeof FieldChangedClauseOperatorEnum[keyof typeof FieldChangedClauseOperatorEnum];

/**
 * Details of a field configuration.
 * @export
 * @interface FieldConfiguration
 */
export interface FieldConfiguration {
    /**
     * The description of the field configuration.
     * @type {string}
     * @memberof FieldConfiguration
     */
    description: string;
    /**
     * The ID of the field configuration.
     * @type {number}
     * @memberof FieldConfiguration
     */
    id: number;
    /**
     * Whether the field configuration is the default.
     * @type {boolean}
     * @memberof FieldConfiguration
     */
    isDefault?: boolean;
    /**
     * The name of the field configuration.
     * @type {string}
     * @memberof FieldConfiguration
     */
    name: string;
}
/**
 * Details of a field configuration.
 * @export
 * @interface FieldConfigurationDetails
 */
export interface FieldConfigurationDetails {
    /**
     * The description of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationDetails
     */
    description?: string;
    /**
     * The name of the field configuration. Must be unique.
     * @type {string}
     * @memberof FieldConfigurationDetails
     */
    name: string;
}
/**
 * The field configuration for an issue type.
 * @export
 * @interface FieldConfigurationIssueTypeItem
 */
export interface FieldConfigurationIssueTypeItem {
    /**
     * The ID of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationIssueTypeItem
     */
    fieldConfigurationId: string;
    /**
     * The ID of the field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationIssueTypeItem
     */
    fieldConfigurationSchemeId: string;
    /**
     * The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.
     * @type {string}
     * @memberof FieldConfigurationIssueTypeItem
     */
    issueTypeId: string;
}
/**
 * A field within a field configuration.
 * @export
 * @interface FieldConfigurationItem
 */
export interface FieldConfigurationItem {
    /**
     * The description of the field within the field configuration.
     * @type {string}
     * @memberof FieldConfigurationItem
     */
    description?: string;
    /**
     * The ID of the field within the field configuration.
     * @type {string}
     * @memberof FieldConfigurationItem
     */
    id: string;
    /**
     * Whether the field is hidden in the field configuration.
     * @type {boolean}
     * @memberof FieldConfigurationItem
     */
    isHidden?: boolean;
    /**
     * Whether the field is required in the field configuration.
     * @type {boolean}
     * @memberof FieldConfigurationItem
     */
    isRequired?: boolean;
    /**
     * The renderer type for the field within the field configuration.
     * @type {string}
     * @memberof FieldConfigurationItem
     */
    renderer?: string;
}
/**
 * Details of field configuration items.
 * @export
 * @interface FieldConfigurationItemsDetails
 */
export interface FieldConfigurationItemsDetails {
    /**
     * Details of fields in a field configuration.
     * @type {Array<FieldConfigurationItem>}
     * @memberof FieldConfigurationItemsDetails
     */
    fieldConfigurationItems: Array<FieldConfigurationItem>;
}
/**
 * Details of a field configuration scheme.
 * @export
 * @interface FieldConfigurationScheme
 */
export interface FieldConfigurationScheme {
    /**
     * The description of the field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationScheme
     */
    description?: string;
    /**
     * The ID of the field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationScheme
     */
    id: string;
    /**
     * The name of the field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationScheme
     */
    name: string;
}
/**
 * Associated field configuration scheme and project.
 * @export
 * @interface FieldConfigurationSchemeProjectAssociation
 */
export interface FieldConfigurationSchemeProjectAssociation {
    /**
     * The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationSchemeProjectAssociation
     */
    fieldConfigurationSchemeId?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof FieldConfigurationSchemeProjectAssociation
     */
    projectId: string;
}
/**
 * Project list with assigned field configuration schema.
 * @export
 * @interface FieldConfigurationSchemeProjects
 */
export interface FieldConfigurationSchemeProjects {
    /**
     * 
     * @type {FieldConfigurationScheme}
     * @memberof FieldConfigurationSchemeProjects
     */
    fieldConfigurationScheme?: FieldConfigurationScheme;
    /**
     * The IDs of projects using the field configuration scheme.
     * @type {Array<string>}
     * @memberof FieldConfigurationSchemeProjects
     */
    projectIds: Array<string>;
}
/**
 * The field configuration to issue type mapping.
 * @export
 * @interface FieldConfigurationToIssueTypeMapping
 */
export interface FieldConfigurationToIssueTypeMapping {
    /**
     * The ID of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationToIssueTypeMapping
     */
    fieldConfigurationId: string;
    /**
     * The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request.
     * @type {string}
     * @memberof FieldConfigurationToIssueTypeMapping
     */
    issueTypeId: string;
}
/**
 * The metadata describing an issue field for createmeta.
 * @export
 * @interface FieldCreateMetadata
 */
export interface FieldCreateMetadata {
    /**
     * The list of values allowed in the field.
     * @type {Array<any>}
     * @memberof FieldCreateMetadata
     */
    readonly allowedValues?: Array<any>;
    /**
     * The URL that can be used to automatically complete the field.
     * @type {string}
     * @memberof FieldCreateMetadata
     */
    readonly autoCompleteUrl?: string;
    /**
     * The configuration properties.
     * @type {{ [key: string]: any; }}
     * @memberof FieldCreateMetadata
     */
    readonly configuration?: { [key: string]: any; };
    /**
     * The default value of the field.
     * @type {any}
     * @memberof FieldCreateMetadata
     */
    readonly defaultValue?: any | null;
    /**
     * The field id.
     * @type {string}
     * @memberof FieldCreateMetadata
     */
    readonly fieldId: string;
    /**
     * Whether the field has a default value.
     * @type {boolean}
     * @memberof FieldCreateMetadata
     */
    readonly hasDefaultValue?: boolean;
    /**
     * The key of the field.
     * @type {string}
     * @memberof FieldCreateMetadata
     */
    readonly key: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof FieldCreateMetadata
     */
    readonly name: string;
    /**
     * The list of operations that can be performed on the field.
     * @type {Array<string>}
     * @memberof FieldCreateMetadata
     */
    readonly operations: Array<string>;
    /**
     * Whether the field is required.
     * @type {boolean}
     * @memberof FieldCreateMetadata
     */
    readonly required: boolean;
    /**
     * The data type of the field.
     * @type {JsonTypeBean}
     * @memberof FieldCreateMetadata
     */
    readonly schema: JsonTypeBean;
}
/**
 * Details about a field.
 * @export
 * @interface FieldDetails
 */
export interface FieldDetails {
    /**
     * The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
     * @type {Set<string>}
     * @memberof FieldDetails
     */
    clauseNames?: Array<string>;
    /**
     * Whether the field is a custom field.
     * @type {boolean}
     * @memberof FieldDetails
     */
    custom?: boolean;
    /**
     * The ID of the field.
     * @type {string}
     * @memberof FieldDetails
     */
    id?: string;
    /**
     * The key of the field.
     * @type {string}
     * @memberof FieldDetails
     */
    key?: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof FieldDetails
     */
    name?: string;
    /**
     * Whether the field can be used as a column on the issue navigator.
     * @type {boolean}
     * @memberof FieldDetails
     */
    navigable?: boolean;
    /**
     * Whether the content of the field can be used to order lists.
     * @type {boolean}
     * @memberof FieldDetails
     */
    orderable?: boolean;
    /**
     * The data schema for the field.
     * @type {JsonTypeBean}
     * @memberof FieldDetails
     */
    schema?: JsonTypeBean;
    /**
     * The scope of the field.
     * @type {Scope}
     * @memberof FieldDetails
     */
    scope?: Scope;
    /**
     * Whether the content of the field can be searched.
     * @type {boolean}
     * @memberof FieldDetails
     */
    searchable?: boolean;
}
/**
 * Information about the most recent use of a field.
 * @export
 * @interface FieldLastUsed
 */
export interface FieldLastUsed {
    /**
     * Last used value type:
     * 
     *  *  *TRACKED*: field is tracked and a last used date is available.
     *  *  *NOT\_TRACKED*: field is not tracked, last used date is not available.
     *  *  *NO\_INFORMATION*: field is tracked, but no last used date is available.
     * @type {string}
     * @memberof FieldLastUsed
     */
    type?: FieldLastUsedTypeEnum;
    /**
     * The date when the value of the field last changed.
     * @type {string}
     * @memberof FieldLastUsed
     */
    value?: string;
}


/**
 * @export
 */
export const FieldLastUsedTypeEnum = {
    Tracked: 'TRACKED',
    NotTracked: 'NOT_TRACKED',
    NoInformation: 'NO_INFORMATION'
} as const;
export type FieldLastUsedTypeEnum = typeof FieldLastUsedTypeEnum[keyof typeof FieldLastUsedTypeEnum];

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
 * Details of a field that can be used in advanced searches.
 * @export
 * @interface FieldReferenceData
 */
export interface FieldReferenceData {
    /**
     * Whether the field provide auto-complete suggestions.
     * @type {string}
     * @memberof FieldReferenceData
     */
    auto?: FieldReferenceDataAutoEnum;
    /**
     * If the item is a custom field, the ID of the custom field.
     * @type {string}
     * @memberof FieldReferenceData
     */
    cfid?: string;
    /**
     * Whether this field has been deprecated.
     * @type {string}
     * @memberof FieldReferenceData
     */
    deprecated?: FieldReferenceDataDeprecatedEnum;
    /**
     * The searcher key of the field, only passed when the field is deprecated.
     * @type {string}
     * @memberof FieldReferenceData
     */
    deprecatedSearcherKey?: string;
    /**
     * The display name contains the following:
     * 
     *  *  for system fields, the field name. For example, `Summary`.
     *  *  for collapsed custom fields, the field name followed by a hyphen and then the field name and field type. For example, `Component - Component[Dropdown]`.
     *  *  for other custom fields, the field name followed by a hyphen and then the custom field ID. For example, `Component - cf[10061]`.
     * @type {string}
     * @memberof FieldReferenceData
     */
    displayName?: string;
    /**
     * The valid search operators for the field.
     * @type {Array<string>}
     * @memberof FieldReferenceData
     */
    operators?: Array<string>;
    /**
     * Whether the field can be used in a query's `ORDER BY` clause.
     * @type {string}
     * @memberof FieldReferenceData
     */
    orderable?: FieldReferenceDataOrderableEnum;
    /**
     * Whether the content of this field can be searched.
     * @type {string}
     * @memberof FieldReferenceData
     */
    searchable?: FieldReferenceDataSearchableEnum;
    /**
     * The data types of items in the field.
     * @type {Array<string>}
     * @memberof FieldReferenceData
     */
    types?: Array<string>;
    /**
     * The field identifier.
     * @type {string}
     * @memberof FieldReferenceData
     */
    value?: string;
}


/**
 * @export
 */
export const FieldReferenceDataAutoEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FieldReferenceDataAutoEnum = typeof FieldReferenceDataAutoEnum[keyof typeof FieldReferenceDataAutoEnum];

/**
 * @export
 */
export const FieldReferenceDataDeprecatedEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FieldReferenceDataDeprecatedEnum = typeof FieldReferenceDataDeprecatedEnum[keyof typeof FieldReferenceDataDeprecatedEnum];

/**
 * @export
 */
export const FieldReferenceDataOrderableEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FieldReferenceDataOrderableEnum = typeof FieldReferenceDataOrderableEnum[keyof typeof FieldReferenceDataOrderableEnum];

/**
 * @export
 */
export const FieldReferenceDataSearchableEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FieldReferenceDataSearchableEnum = typeof FieldReferenceDataSearchableEnum[keyof typeof FieldReferenceDataSearchableEnum];

/**
 * Details of an operation to perform on a field.
 * @export
 * @interface FieldUpdateOperation
 */
export interface FieldUpdateOperation {
    /**
     * The value to add to the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    add?: any | null;
    /**
     * The field value to copy from another issue.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    copy?: any | null;
    /**
     * The value to edit in the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    edit?: any | null;
    /**
     * The value to removed from the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    remove?: any | null;
    /**
     * The value to set in the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    set?: any | null;
}
/**
 * A clause that asserts the current value of a field. For example, `summary ~ test`.
 * @export
 * @interface FieldValueClause
 */
export interface FieldValueClause {
    /**
     * 
     * @type {JqlQueryField}
     * @memberof FieldValueClause
     */
    field: JqlQueryField;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof FieldValueClause
     */
    operand: JqlQueryClauseOperand;
    /**
     * The operator between the field and operand.
     * @type {string}
     * @memberof FieldValueClause
     */
    operator: FieldValueClauseOperatorEnum;
}


/**
 * @export
 */
export const FieldValueClauseOperatorEnum = {
    Equal: '=',
    NotEqual: '!=',
    GreaterThan: '>',
    LessThan: '<',
    GreaterThanOrEqualTo: '>=',
    LessThanOrEqualTo: '<=',
    In: 'in',
    NotIn: 'not in',
    Tilde: '~',
    TildeEqual: '~=',
    Is: 'is',
    IsNot: 'is not'
} as const;
export type FieldValueClauseOperatorEnum = typeof FieldValueClauseOperatorEnum[keyof typeof FieldValueClauseOperatorEnum];

/**
 * A clause that asserts a previous value of a field. For example, `status WAS "Resolved" BY currentUser() BEFORE "2019/02/02"`. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.
 * @export
 * @interface FieldWasClause
 */
export interface FieldWasClause {
    /**
     * 
     * @type {JqlQueryField}
     * @memberof FieldWasClause
     */
    field: JqlQueryField;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof FieldWasClause
     */
    operand: JqlQueryClauseOperand;
    /**
     * The operator between the field and operand.
     * @type {string}
     * @memberof FieldWasClause
     */
    operator: FieldWasClauseOperatorEnum;
    /**
     * The list of time predicates.
     * @type {Array<JqlQueryClauseTimePredicate>}
     * @memberof FieldWasClause
     */
    predicates: Array<JqlQueryClauseTimePredicate>;
}


/**
 * @export
 */
export const FieldWasClauseOperatorEnum = {
    Was: 'was',
    WasIn: 'was in',
    WasNotIn: 'was not in',
    WasNot: 'was not'
} as const;
export type FieldWasClauseOperatorEnum = typeof FieldWasClauseOperatorEnum[keyof typeof FieldWasClauseOperatorEnum];

/**
 * Can contain multiple field values of following types depending on `type` key
 * @export
 * @interface Fields
 */
export interface Fields {
    /**
     * If `true`, will try to retain original non-null issue field values on move.
     * @type {boolean}
     * @memberof Fields
     */
    retain?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Fields
     */
    type?: FieldsTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof Fields
     */
    value?: object;
}


/**
 * @export
 */
export const FieldsTypeEnum = {
    Adf: 'adf',
    Raw: 'raw'
} as const;
export type FieldsTypeEnum = typeof FieldsTypeEnum[keyof typeof FieldsTypeEnum];

/**
 * Details about a filter.
 * @export
 * @interface Filter
 */
export interface Filter {
    /**
     * \[Experimental\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.
     * @type {string}
     * @memberof Filter
     */
    readonly approximateLastUsed?: string;
    /**
     * A description of the filter.
     * @type {string}
     * @memberof Filter
     */
    description?: string;
    /**
     * The groups and projects that can edit the filter.
     * @type {Array<SharePermission>}
     * @memberof Filter
     */
    editPermissions?: Array<SharePermission>;
    /**
     * Whether the filter is selected as a favorite.
     * @type {boolean}
     * @memberof Filter
     */
    favourite?: boolean;
    /**
     * The count of how many users have selected this filter as a favorite, including the filter owner.
     * @type {number}
     * @memberof Filter
     */
    readonly favouritedCount?: number;
    /**
     * The unique identifier for the filter.
     * @type {string}
     * @memberof Filter
     */
    readonly id?: string;
    /**
     * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
     * @type {string}
     * @memberof Filter
     */
    jql?: string;
    /**
     * The name of the filter. Must be unique.
     * @type {string}
     * @memberof Filter
     */
    name: string;
    /**
     * The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
     * @type {User}
     * @memberof Filter
     */
    readonly owner?: User;
    /**
     * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
     * @type {string}
     * @memberof Filter
     */
    readonly searchUrl?: string;
    /**
     * The URL of the filter.
     * @type {string}
     * @memberof Filter
     */
    readonly self?: string;
    /**
     * The groups and projects that the filter is shared with.
     * @type {Array<SharePermission>}
     * @memberof Filter
     */
    sharePermissions?: Array<SharePermission>;
    /**
     * A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with.
     * @type {UserList}
     * @memberof Filter
     */
    readonly sharedUsers?: UserList;
    /**
     * A paginated list of the users that are subscribed to the filter.
     * @type {FilterSubscriptionsList}
     * @memberof Filter
     */
    readonly subscriptions?: FilterSubscriptionsList;
    /**
     * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
     * @type {string}
     * @memberof Filter
     */
    readonly viewUrl?: string;
}
/**
 * Details of a filter.
 * @export
 * @interface FilterDetails
 */
export interface FilterDetails {
    /**
     * \[Experimental\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly approximateLastUsed?: string;
    /**
     * The description of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    description?: string;
    /**
     * The groups and projects that can edit the filter. This can be specified when updating a filter, but not when creating a filter.
     * @type {Array<SharePermission>}
     * @memberof FilterDetails
     */
    editPermissions?: Array<SharePermission>;
    /**
     * Expand options that include additional filter details in the response.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly expand?: string;
    /**
     * Whether the filter is selected as a favorite by any users, not including the filter owner.
     * @type {boolean}
     * @memberof FilterDetails
     */
    readonly favourite?: boolean;
    /**
     * The count of how many users have selected this filter as a favorite, including the filter owner.
     * @type {number}
     * @memberof FilterDetails
     */
    readonly favouritedCount?: number;
    /**
     * The unique identifier for the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly id?: string;
    /**
     * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly jql?: string;
    /**
     * The name of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    name: string;
    /**
     * The user who owns the filter. Defaults to the creator of the filter, however, Jira administrators can change the owner of a shared filter in the admin settings.
     * @type {User}
     * @memberof FilterDetails
     */
    readonly owner?: User;
    /**
     * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly searchUrl?: string;
    /**
     * The URL of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly self?: string;
    /**
     * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
     * @type {Array<SharePermission>}
     * @memberof FilterDetails
     */
    sharePermissions?: Array<SharePermission>;
    /**
     * The users that are subscribed to the filter.
     * @type {Array<FilterSubscription>}
     * @memberof FilterDetails
     */
    readonly subscriptions?: Array<FilterSubscription>;
    /**
     * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly viewUrl?: string;
}
/**
 * Details of a user or group subscribing to a filter.
 * @export
 * @interface FilterSubscription
 */
export interface FilterSubscription {
    /**
     * The group subscribing to filter.
     * @type {GroupName}
     * @memberof FilterSubscription
     */
    readonly group?: GroupName;
    /**
     * The ID of the filter subscription.
     * @type {number}
     * @memberof FilterSubscription
     */
    readonly id?: number;
    /**
     * The user subscribing to filter.
     * @type {User}
     * @memberof FilterSubscription
     */
    readonly user?: User;
}
/**
 * A paginated list of subscriptions to a filter.
 * @export
 * @interface FilterSubscriptionsList
 */
export interface FilterSubscriptionsList {
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly endIndex?: number;
    /**
     * The list of items.
     * @type {Array<FilterSubscription>}
     * @memberof FilterSubscriptionsList
     */
    readonly items?: Array<FilterSubscription>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly maxResults?: number;
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly size?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly startIndex?: number;
}
/**
 * A group found in a search.
 * @export
 * @interface FoundGroup
 */
export interface FoundGroup {
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof FoundGroup
     */
    groupId?: string;
    /**
     * The group name with the matched query string highlighted with the HTML bold tag.
     * @type {string}
     * @memberof FoundGroup
     */
    html?: string;
    /**
     * 
     * @type {Array<GroupLabel>}
     * @memberof FoundGroup
     */
    labels?: Array<GroupLabel>;
    /**
     * The name of the group. The name of a group is mutable, to reliably identify a group use ``groupId`.`
     * @type {string}
     * @memberof FoundGroup
     */
    name?: string;
}
/**
 * The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
 * @export
 * @interface FoundGroups
 */
export interface FoundGroups {
    /**
     * 
     * @type {Array<FoundGroup>}
     * @memberof FoundGroups
     */
    groups?: Array<FoundGroup>;
    /**
     * Header text indicating the number of groups in the response and the total number of groups found in the search.
     * @type {string}
     * @memberof FoundGroups
     */
    header?: string;
    /**
     * The total number of groups found in the search.
     * @type {number}
     * @memberof FoundGroups
     */
    total?: number;
}
/**
 * The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
 * @export
 * @interface FoundUsers
 */
export interface FoundUsers {
    /**
     * Header text indicating the number of users in the response and the total number of users found in the search.
     * @type {string}
     * @memberof FoundUsers
     */
    header?: string;
    /**
     * The total number of users found in the search.
     * @type {number}
     * @memberof FoundUsers
     */
    total?: number;
    /**
     * 
     * @type {Array<UserPickerUser>}
     * @memberof FoundUsers
     */
    users?: Array<UserPickerUser>;
}
/**
 * List of users and groups found in a search.
 * @export
 * @interface FoundUsersAndGroups
 */
export interface FoundUsersAndGroups {
    /**
     * 
     * @type {FoundGroups}
     * @memberof FoundUsersAndGroups
     */
    groups?: FoundGroups;
    /**
     * 
     * @type {FoundUsers}
     * @memberof FoundUsersAndGroups
     */
    users?: FoundUsers;
}
/**
 * An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
 * @export
 * @interface FunctionOperand
 */
export interface FunctionOperand {
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof FunctionOperand
     */
    arguments: Array<string>;
    /**
     * Encoded operand, which can be used directly in a JQL query.
     * @type {string}
     * @memberof FunctionOperand
     */
    encodedOperand?: string;
    /**
     * The name of the function.
     * @type {string}
     * @memberof FunctionOperand
     */
    _function: string;
}
/**
 * Details of functions that can be used in advanced searches.
 * @export
 * @interface FunctionReferenceData
 */
export interface FunctionReferenceData {
    /**
     * The display name of the function.
     * @type {string}
     * @memberof FunctionReferenceData
     */
    displayName?: string;
    /**
     * Whether the function can take a list of arguments.
     * @type {string}
     * @memberof FunctionReferenceData
     */
    isList?: FunctionReferenceDataIsListEnum;
    /**
     * Whether the function supports both single and list value operators.
     * @type {string}
     * @memberof FunctionReferenceData
     */
    supportsListAndSingleValueOperators?: FunctionReferenceDataSupportsListAndSingleValueOperatorsEnum;
    /**
     * The data types returned by the function.
     * @type {Array<string>}
     * @memberof FunctionReferenceData
     */
    types?: Array<string>;
    /**
     * The function identifier.
     * @type {string}
     * @memberof FunctionReferenceData
     */
    value?: string;
}


/**
 * @export
 */
export const FunctionReferenceDataIsListEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FunctionReferenceDataIsListEnum = typeof FunctionReferenceDataIsListEnum[keyof typeof FunctionReferenceDataIsListEnum];

/**
 * @export
 */
export const FunctionReferenceDataSupportsListAndSingleValueOperatorsEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FunctionReferenceDataSupportsListAndSingleValueOperatorsEnum = typeof FunctionReferenceDataSupportsListAndSingleValueOperatorsEnum[keyof typeof FunctionReferenceDataSupportsListAndSingleValueOperatorsEnum];

/**
 * 
 * @export
 * @interface GetAtlassianTeamResponse
 */
export interface GetAtlassianTeamResponse {
    /**
     * The capacity for the Atlassian team.
     * @type {number}
     * @memberof GetAtlassianTeamResponse
     */
    capacity?: number;
    /**
     * The Atlassian team ID.
     * @type {string}
     * @memberof GetAtlassianTeamResponse
     */
    id: string;
    /**
     * The ID of the issue source for the Atlassian team.
     * @type {number}
     * @memberof GetAtlassianTeamResponse
     */
    issueSourceId?: number;
    /**
     * The planning style for the Atlassian team. This is "Scrum" or "Kanban".
     * @type {string}
     * @memberof GetAtlassianTeamResponse
     */
    planningStyle: GetAtlassianTeamResponsePlanningStyleEnum;
    /**
     * The sprint length for the Atlassian team.
     * @type {number}
     * @memberof GetAtlassianTeamResponse
     */
    sprintLength?: number;
}


/**
 * @export
 */
export const GetAtlassianTeamResponsePlanningStyleEnum = {
    Scrum: 'Scrum',
    Kanban: 'Kanban'
} as const;
export type GetAtlassianTeamResponsePlanningStyleEnum = typeof GetAtlassianTeamResponsePlanningStyleEnum[keyof typeof GetAtlassianTeamResponsePlanningStyleEnum];

/**
 * 
 * @export
 * @interface GetCrossProjectReleaseResponse
 */
export interface GetCrossProjectReleaseResponse {
    /**
     * The cross-project release name.
     * @type {string}
     * @memberof GetCrossProjectReleaseResponse
     */
    name?: string;
    /**
     * The IDs of the releases included in the cross-project release.
     * @type {Set<number>}
     * @memberof GetCrossProjectReleaseResponse
     */
    releaseIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface GetCustomFieldResponse
 */
export interface GetCustomFieldResponse {
    /**
     * The custom field ID.
     * @type {number}
     * @memberof GetCustomFieldResponse
     */
    customFieldId: number;
    /**
     * Allows filtering issues based on their values for the custom field.
     * @type {boolean}
     * @memberof GetCustomFieldResponse
     */
    filter?: boolean;
}
/**
 * 
 * @export
 * @interface GetDateFieldResponse
 */
export interface GetDateFieldResponse {
    /**
     * A date custom field ID. This is returned if the type is "DateCustomField".
     * @type {number}
     * @memberof GetDateFieldResponse
     */
    dateCustomFieldId?: number;
    /**
     * The date field type. This is "DueDate", "TargetStartDate", "TargetEndDate" or "DateCustomField".
     * @type {string}
     * @memberof GetDateFieldResponse
     */
    type: GetDateFieldResponseTypeEnum;
}


/**
 * @export
 */
export const GetDateFieldResponseTypeEnum = {
    DueDate: 'DueDate',
    TargetStartDate: 'TargetStartDate',
    TargetEndDate: 'TargetEndDate',
    DateCustomField: 'DateCustomField'
} as const;
export type GetDateFieldResponseTypeEnum = typeof GetDateFieldResponseTypeEnum[keyof typeof GetDateFieldResponseTypeEnum];

/**
 * 
 * @export
 * @interface GetExclusionRulesResponse
 */
export interface GetExclusionRulesResponse {
    /**
     * The IDs of the issues excluded from the plan.
     * @type {Set<number>}
     * @memberof GetExclusionRulesResponse
     */
    issueIds?: Array<number>;
    /**
     * The IDs of the issue types excluded from the plan.
     * @type {Set<number>}
     * @memberof GetExclusionRulesResponse
     */
    issueTypeIds?: Array<number>;
    /**
     * Issues completed this number of days ago are excluded from the plan.
     * @type {number}
     * @memberof GetExclusionRulesResponse
     */
    numberOfDaysToShowCompletedIssues: number;
    /**
     * The IDs of the releases excluded from the plan.
     * @type {Set<number>}
     * @memberof GetExclusionRulesResponse
     */
    releaseIds?: Array<number>;
    /**
     * The IDs of the work status categories excluded from the plan.
     * @type {Set<number>}
     * @memberof GetExclusionRulesResponse
     */
    workStatusCategoryIds?: Array<number>;
    /**
     * The IDs of the work statuses excluded from the plan.
     * @type {Set<number>}
     * @memberof GetExclusionRulesResponse
     */
    workStatusIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface GetIssueSourceResponse
 */
export interface GetIssueSourceResponse {
    /**
     * The issue source type. This is "Board", "Project" or "Filter".
     * @type {string}
     * @memberof GetIssueSourceResponse
     */
    type: GetIssueSourceResponseTypeEnum;
    /**
     * The issue source value. This is a board ID if the type is "Board", a project ID if the type is "Project" or a filter ID if the type is "Filter".
     * @type {number}
     * @memberof GetIssueSourceResponse
     */
    value: number;
}


/**
 * @export
 */
export const GetIssueSourceResponseTypeEnum = {
    Board: 'Board',
    Project: 'Project',
    Filter: 'Filter',
    Custom: 'Custom'
} as const;
export type GetIssueSourceResponseTypeEnum = typeof GetIssueSourceResponseTypeEnum[keyof typeof GetIssueSourceResponseTypeEnum];

/**
 * 
 * @export
 * @interface GetPermissionHolderResponse
 */
export interface GetPermissionHolderResponse {
    /**
     * The permission holder type. This is "Group" or "AccountId".
     * @type {string}
     * @memberof GetPermissionHolderResponse
     */
    type: GetPermissionHolderResponseTypeEnum;
    /**
     * The permission holder value. This is a group name if the type is "Group" or an account ID if the type is "AccountId".
     * @type {string}
     * @memberof GetPermissionHolderResponse
     */
    value: string;
}


/**
 * @export
 */
export const GetPermissionHolderResponseTypeEnum = {
    Group: 'Group',
    AccountId: 'AccountId'
} as const;
export type GetPermissionHolderResponseTypeEnum = typeof GetPermissionHolderResponseTypeEnum[keyof typeof GetPermissionHolderResponseTypeEnum];

/**
 * 
 * @export
 * @interface GetPermissionResponse
 */
export interface GetPermissionResponse {
    /**
     * The permission holder.
     * @type {GetPermissionHolderResponse}
     * @memberof GetPermissionResponse
     */
    holder: GetPermissionHolderResponse;
    /**
     * The permission type. This is "View" or "Edit".
     * @type {string}
     * @memberof GetPermissionResponse
     */
    type: GetPermissionResponseTypeEnum;
}


/**
 * @export
 */
export const GetPermissionResponseTypeEnum = {
    View: 'View',
    Edit: 'Edit'
} as const;
export type GetPermissionResponseTypeEnum = typeof GetPermissionResponseTypeEnum[keyof typeof GetPermissionResponseTypeEnum];

/**
 * 
 * @export
 * @interface GetPlanOnlyTeamResponse
 */
export interface GetPlanOnlyTeamResponse {
    /**
     * The capacity for the plan-only team.
     * @type {number}
     * @memberof GetPlanOnlyTeamResponse
     */
    capacity?: number;
    /**
     * The plan-only team ID.
     * @type {number}
     * @memberof GetPlanOnlyTeamResponse
     */
    id: number;
    /**
     * The ID of the issue source for the plan-only team.
     * @type {number}
     * @memberof GetPlanOnlyTeamResponse
     */
    issueSourceId?: number;
    /**
     * The account IDs of the plan-only team members.
     * @type {Array<string>}
     * @memberof GetPlanOnlyTeamResponse
     */
    memberAccountIds?: Array<string>;
    /**
     * The plan-only team name.
     * @type {string}
     * @memberof GetPlanOnlyTeamResponse
     */
    name: string;
    /**
     * The planning style for the plan-only team. This is "Scrum" or "Kanban".
     * @type {string}
     * @memberof GetPlanOnlyTeamResponse
     */
    planningStyle: GetPlanOnlyTeamResponsePlanningStyleEnum;
    /**
     * The sprint length for the plan-only team.
     * @type {number}
     * @memberof GetPlanOnlyTeamResponse
     */
    sprintLength?: number;
}


/**
 * @export
 */
export const GetPlanOnlyTeamResponsePlanningStyleEnum = {
    Scrum: 'Scrum',
    Kanban: 'Kanban'
} as const;
export type GetPlanOnlyTeamResponsePlanningStyleEnum = typeof GetPlanOnlyTeamResponsePlanningStyleEnum[keyof typeof GetPlanOnlyTeamResponsePlanningStyleEnum];

/**
 * 
 * @export
 * @interface GetPlanResponse
 */
export interface GetPlanResponse {
    /**
     * The cross-project releases included in the plan.
     * @type {Array<GetCrossProjectReleaseResponse>}
     * @memberof GetPlanResponse
     */
    crossProjectReleases?: Array<GetCrossProjectReleaseResponse>;
    /**
     * The custom fields for the plan.
     * @type {Array<GetCustomFieldResponse>}
     * @memberof GetPlanResponse
     */
    customFields?: Array<GetCustomFieldResponse>;
    /**
     * The exclusion rules for the plan.
     * @type {GetExclusionRulesResponse}
     * @memberof GetPlanResponse
     */
    exclusionRules?: GetExclusionRulesResponse;
    /**
     * The plan ID.
     * @type {number}
     * @memberof GetPlanResponse
     */
    id: number;
    /**
     * The issue sources included in the plan.
     * @type {Array<GetIssueSourceResponse>}
     * @memberof GetPlanResponse
     */
    issueSources?: Array<GetIssueSourceResponse>;
    /**
     * The date when the plan was last saved in UTC.
     * @type {string}
     * @memberof GetPlanResponse
     */
    lastSaved?: string;
    /**
     * The account ID of the plan lead.
     * @type {string}
     * @memberof GetPlanResponse
     */
    leadAccountId?: string;
    /**
     * The plan name.
     * @type {string}
     * @memberof GetPlanResponse
     */
    name?: string;
    /**
     * The permissions for the plan.
     * @type {Array<GetPermissionResponse>}
     * @memberof GetPlanResponse
     */
    permissions?: Array<GetPermissionResponse>;
    /**
     * The scheduling settings for the plan.
     * @type {GetSchedulingResponse}
     * @memberof GetPlanResponse
     */
    scheduling: GetSchedulingResponse;
    /**
     * The plan status. This is "Active", "Trashed" or "Archived".
     * @type {string}
     * @memberof GetPlanResponse
     */
    status: GetPlanResponseStatusEnum;
}


/**
 * @export
 */
export const GetPlanResponseStatusEnum = {
    Active: 'Active',
    Trashed: 'Trashed',
    Archived: 'Archived'
} as const;
export type GetPlanResponseStatusEnum = typeof GetPlanResponseStatusEnum[keyof typeof GetPlanResponseStatusEnum];

/**
 * 
 * @export
 * @interface GetPlanResponseForPage
 */
export interface GetPlanResponseForPage {
    /**
     * The plan ID.
     * @type {string}
     * @memberof GetPlanResponseForPage
     */
    id: string;
    /**
     * The issue sources included in the plan.
     * @type {Set<GetIssueSourceResponse>}
     * @memberof GetPlanResponseForPage
     */
    issueSources?: Array<GetIssueSourceResponse>;
    /**
     * The plan name.
     * @type {string}
     * @memberof GetPlanResponseForPage
     */
    name: string;
    /**
     * The plan status. This is "Active", "Trashed" or "Archived".
     * @type {string}
     * @memberof GetPlanResponseForPage
     */
    status: GetPlanResponseForPageStatusEnum;
}


/**
 * @export
 */
export const GetPlanResponseForPageStatusEnum = {
    Active: 'Active',
    Trashed: 'Trashed',
    Archived: 'Archived'
} as const;
export type GetPlanResponseForPageStatusEnum = typeof GetPlanResponseForPageStatusEnum[keyof typeof GetPlanResponseForPageStatusEnum];

/**
 * 
 * @export
 * @interface GetSchedulingResponse
 */
export interface GetSchedulingResponse {
    /**
     * The dependencies for the plan. This is "Sequential" or "Concurrent".
     * @type {string}
     * @memberof GetSchedulingResponse
     */
    dependencies: GetSchedulingResponseDependenciesEnum;
    /**
     * The end date field for the plan.
     * @type {GetDateFieldResponse}
     * @memberof GetSchedulingResponse
     */
    endDate: GetDateFieldResponse;
    /**
     * The estimation unit for the plan. This is "StoryPoints", "Days" or "Hours".
     * @type {string}
     * @memberof GetSchedulingResponse
     */
    estimation: GetSchedulingResponseEstimationEnum;
    /**
     * The inferred dates for the plan. This is "None", "SprintDates" or "ReleaseDates".
     * @type {string}
     * @memberof GetSchedulingResponse
     */
    inferredDates: GetSchedulingResponseInferredDatesEnum;
    /**
     * The start date field for the plan.
     * @type {GetDateFieldResponse}
     * @memberof GetSchedulingResponse
     */
    startDate: GetDateFieldResponse;
}


/**
 * @export
 */
export const GetSchedulingResponseDependenciesEnum = {
    Sequential: 'Sequential',
    Concurrent: 'Concurrent'
} as const;
export type GetSchedulingResponseDependenciesEnum = typeof GetSchedulingResponseDependenciesEnum[keyof typeof GetSchedulingResponseDependenciesEnum];

/**
 * @export
 */
export const GetSchedulingResponseEstimationEnum = {
    StoryPoints: 'StoryPoints',
    Days: 'Days',
    Hours: 'Hours'
} as const;
export type GetSchedulingResponseEstimationEnum = typeof GetSchedulingResponseEstimationEnum[keyof typeof GetSchedulingResponseEstimationEnum];

/**
 * @export
 */
export const GetSchedulingResponseInferredDatesEnum = {
    None: 'None',
    SprintDates: 'SprintDates',
    ReleaseDates: 'ReleaseDates'
} as const;
export type GetSchedulingResponseInferredDatesEnum = typeof GetSchedulingResponseInferredDatesEnum[keyof typeof GetSchedulingResponseInferredDatesEnum];

/**
 * 
 * @export
 * @interface GetTeamResponseForPage
 */
export interface GetTeamResponseForPage {
    /**
     * The team ID.
     * @type {string}
     * @memberof GetTeamResponseForPage
     */
    id: string;
    /**
     * The team name. This is returned if the type is "PlanOnly".
     * @type {string}
     * @memberof GetTeamResponseForPage
     */
    name?: string;
    /**
     * The team type. This is "PlanOnly" or "Atlassian".
     * @type {string}
     * @memberof GetTeamResponseForPage
     */
    type: GetTeamResponseForPageTypeEnum;
}


/**
 * @export
 */
export const GetTeamResponseForPageTypeEnum = {
    PlanOnly: 'PlanOnly',
    Atlassian: 'Atlassian'
} as const;
export type GetTeamResponseForPageTypeEnum = typeof GetTeamResponseForPageTypeEnum[keyof typeof GetTeamResponseForPageTypeEnum];

/**
 * 
 * @export
 * @interface GlobalScopeBean
 */
export interface GlobalScopeBean {
    /**
     * Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
     * @type {Set<string>}
     * @memberof GlobalScopeBean
     */
    attributes?: Array<GlobalScopeBeanAttributesEnum>;
}


/**
 * @export
 */
export const GlobalScopeBeanAttributesEnum = {
    NotSelectable: 'notSelectable',
    DefaultValue: 'defaultValue'
} as const;
export type GlobalScopeBeanAttributesEnum = typeof GlobalScopeBeanAttributesEnum[keyof typeof GlobalScopeBeanAttributesEnum];

/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * Expand options that include additional group details in the response.
     * @type {string}
     * @memberof Group
     */
    readonly expand?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof Group
     */
    groupId?: string | null;
    /**
     * The name of group.
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof Group
     */
    readonly self?: string;
    /**
     * A paginated list of the users that are members of the group. A maximum of 50 users is returned in the list, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 50 users, use`?expand=users[51:100]`.
     * @type {PagedListUserDetailsApplicationUser}
     * @memberof Group
     */
    readonly users?: PagedListUserDetailsApplicationUser;
}
/**
 * Details about a group.
 * @export
 * @interface GroupDetails
 */
export interface GroupDetails {
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof GroupDetails
     */
    groupId?: string | null;
    /**
     * The name of the group.
     * @type {string}
     * @memberof GroupDetails
     */
    name?: string;
}
/**
 * A group label.
 * @export
 * @interface GroupLabel
 */
export interface GroupLabel {
    /**
     * The group label name.
     * @type {string}
     * @memberof GroupLabel
     */
    text?: string;
    /**
     * The title of the group label.
     * @type {string}
     * @memberof GroupLabel
     */
    title?: string;
    /**
     * The type of the group label.
     * @type {string}
     * @memberof GroupLabel
     */
    type?: GroupLabelTypeEnum;
}


/**
 * @export
 */
export const GroupLabelTypeEnum = {
    Admin: 'ADMIN',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
} as const;
export type GroupLabelTypeEnum = typeof GroupLabelTypeEnum[keyof typeof GroupLabelTypeEnum];

/**
 * Details about a group.
 * @export
 * @interface GroupName
 */
export interface GroupName {
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof GroupName
     */
    groupId?: string | null;
    /**
     * The name of group.
     * @type {string}
     * @memberof GroupName
     */
    name?: string;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof GroupName
     */
    readonly self?: string;
}
/**
 * Jira instance health check results. Deprecated and no longer returned.
 * @export
 * @interface HealthCheckResult
 */
export interface HealthCheckResult {
    /**
     * The description of the Jira health check item.
     * @type {string}
     * @memberof HealthCheckResult
     */
    description?: string;
    /**
     * The name of the Jira health check item.
     * @type {string}
     * @memberof HealthCheckResult
     */
    name?: string;
    /**
     * Whether the Jira health check item passed or failed.
     * @type {boolean}
     * @memberof HealthCheckResult
     */
    passed?: boolean;
}
/**
 * The project issue type hierarchy.
 * @export
 * @interface Hierarchy
 */
export interface Hierarchy {
    /**
     * The ID of the base level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof Hierarchy
     */
    baseLevelId?: number;
    /**
     * Details about the hierarchy level.
     * @type {Array<SimplifiedHierarchyLevel>}
     * @memberof Hierarchy
     */
    readonly levels?: Array<SimplifiedHierarchyLevel>;
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
 * An icon. If no icon is defined:
 * 
 *  *  for a status icon, no status icon displays in Jira.
 *  *  for the remote object icon, the default link icon displays in Jira.
 * @export
 * @interface Icon
 */
export interface Icon {
    [key: string]: any | any;
    /**
     * The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
     * @type {string}
     * @memberof Icon
     */
    link?: string;
    /**
     * The title of the icon. This is used as follows:
     * 
     *  *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn't display a tooltip in Jira.
     *  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link".
     * @type {string}
     * @memberof Icon
     */
    title?: string;
    /**
     * The URL of an icon that displays at 16x16 pixel in Jira.
     * @type {string}
     * @memberof Icon
     */
    url16x16?: string;
}
/**
 * An icon.
 * @export
 * @interface IconBean
 */
export interface IconBean {
    /**
     * The URL of the tooltip, used only for a status icon.
     * @type {string}
     * @memberof IconBean
     */
    link?: string;
    /**
     * The title of the icon, for use as a tooltip on the icon.
     * @type {string}
     * @memberof IconBean
     */
    title?: string;
    /**
     * The URL of a 16x16 pixel icon.
     * @type {string}
     * @memberof IconBean
     */
    url16x16?: string;
}
/**
 * 
 * @export
 * @interface IdBean
 */
export interface IdBean {
    /**
     * The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to get a list of permission scheme IDs.
     * @type {number}
     * @memberof IdBean
     */
    id: number;
}
/**
 * 
 * @export
 * @interface IdOrKeyBean
 */
export interface IdOrKeyBean {
    /**
     * The ID of the referenced item.
     * @type {number}
     * @memberof IdOrKeyBean
     */
    id?: number;
    /**
     * The key of the referenced item.
     * @type {string}
     * @memberof IdOrKeyBean
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface IdSearchRequestBean
 */
export interface IdSearchRequestBean {
    /**
     * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. Order by clauses are not allowed.
     * @type {string}
     * @memberof IdSearchRequestBean
     */
    jql?: string;
    /**
     * The maximum number of items to return per page.
     * @type {number}
     * @memberof IdSearchRequestBean
     */
    maxResults?: number;
    /**
     * The continuation token to fetch the next page. This token is provided by the response of this endpoint.
     * @type {string}
     * @memberof IdSearchRequestBean
     */
    nextPageToken?: string;
}
/**
 * Result of your JQL search. Returns a list of issue IDs and a token to fetch the next page if one exists.
 * @export
 * @interface IdSearchResults
 */
export interface IdSearchResults {
    /**
     * The list of issue IDs found by the search.
     * @type {Array<number>}
     * @memberof IdSearchResults
     */
    readonly issueIds?: Array<number>;
    /**
     * Continuation token to fetch the next page. If this result represents the last or the only page this token will be null.
     * @type {string}
     * @memberof IdSearchResults
     */
    readonly nextPageToken?: string;
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
 * List of Issue Ids Or Keys that are to be archived or unarchived
 * @export
 * @interface IssueArchivalSyncRequest
 */
export interface IssueArchivalSyncRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof IssueArchivalSyncRequest
     */
    issueIdsOrKeys?: Array<string>;
}
/**
 * Number of archived/unarchived issues and list of errors that occurred during the action, if any.
 * @export
 * @interface IssueArchivalSyncResponse
 */
export interface IssueArchivalSyncResponse {
    /**
     * 
     * @type {Errors}
     * @memberof IssueArchivalSyncResponse
     */
    errors?: Errors;
    /**
     * 
     * @type {number}
     * @memberof IssueArchivalSyncResponse
     */
    numberOfIssuesUpdated?: number;
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
 * Issue Bulk Delete Payload
 * @export
 * @interface IssueBulkDeletePayload
 */
export interface IssueBulkDeletePayload {
    /**
     * List of issue IDs or keys which are to be bulk deleted. These IDs or keys can be from different projects and issue types.
     * @type {Array<string>}
     * @memberof IssueBulkDeletePayload
     */
    selectedIssueIdsOrKeys: Array<string>;
    /**
     * A boolean value that indicates whether to send a bulk change notification when the issues are being deleted.
     * 
     * If `true`, dispatches a bulk notification email to users about the updates.
     * @type {boolean}
     * @memberof IssueBulkDeletePayload
     */
    sendBulkNotification?: boolean | null;
}
/**
 * 
 * @export
 * @interface IssueBulkEditField
 */
export interface IssueBulkEditField {
    /**
     * Description of the field.
     * @type {string}
     * @memberof IssueBulkEditField
     */
    description?: string;
    /**
     * A list of options related to the field, applicable in contexts where multiple selections are allowed.
     * @type {Array<object>}
     * @memberof IssueBulkEditField
     */
    fieldOptions?: Array<object>;
    /**
     * The unique ID of the field.
     * @type {string}
     * @memberof IssueBulkEditField
     */
    id?: string;
    /**
     * Indicates whether the field is mandatory for the operation.
     * @type {boolean}
     * @memberof IssueBulkEditField
     */
    isRequired?: boolean;
    /**
     * Specifies supported actions (like add, replace, remove) on multi-select fields via an enum.
     * @type {Array<string>}
     * @memberof IssueBulkEditField
     */
    multiSelectFieldOptions?: Array<IssueBulkEditFieldMultiSelectFieldOptionsEnum>;
    /**
     * The display name of the field.
     * @type {string}
     * @memberof IssueBulkEditField
     */
    name?: string;
    /**
     * A URL to fetch additional data for the field
     * @type {string}
     * @memberof IssueBulkEditField
     */
    searchUrl?: string;
    /**
     * The type of the field.
     * @type {string}
     * @memberof IssueBulkEditField
     */
    type?: string;
    /**
     * A message indicating why the field is unavailable for editing.
     * @type {string}
     * @memberof IssueBulkEditField
     */
    unavailableMessage?: string;
}


/**
 * @export
 */
export const IssueBulkEditFieldMultiSelectFieldOptionsEnum = {
    Add: 'ADD',
    Remove: 'REMOVE',
    Replace: 'REPLACE',
    RemoveAll: 'REMOVE_ALL'
} as const;
export type IssueBulkEditFieldMultiSelectFieldOptionsEnum = typeof IssueBulkEditFieldMultiSelectFieldOptionsEnum[keyof typeof IssueBulkEditFieldMultiSelectFieldOptionsEnum];

/**
 * Issue Bulk Edit Payload
 * @export
 * @interface IssueBulkEditPayload
 */
export interface IssueBulkEditPayload {
    /**
     * An object that defines the values to be updated in specified fields of an issue. The structure and content of this parameter vary depending on the type of field being edited. Although the order is not significant, ensure that field IDs align with those in selectedActions.
     * @type {JiraIssueFields}
     * @memberof IssueBulkEditPayload
     */
    editedFieldsInput: JiraIssueFields;
    /**
     * List of all the field IDs that are to be bulk edited. Each field ID in this list corresponds to a specific attribute of an issue that is set to be modified in the bulk edit operation. The relevant field ID can be obtained by calling the Bulk Edit Get Fields REST API (documentation available on this page itself).
     * @type {Array<string>}
     * @memberof IssueBulkEditPayload
     */
    selectedActions: Array<string>;
    /**
     * List of issue IDs or keys which are to be bulk edited. These IDs or keys can be from different projects and issue types.
     * @type {Array<string>}
     * @memberof IssueBulkEditPayload
     */
    selectedIssueIdsOrKeys: Array<string>;
    /**
     * A boolean value that indicates whether to send a bulk change notification when the issues are being edited.
     * 
     * If `true`, dispatches a bulk notification email to users about the updates.
     * @type {boolean}
     * @memberof IssueBulkEditPayload
     */
    sendBulkNotification?: boolean | null;
}
/**
 * Issue Bulk Move Payload
 * @export
 * @interface IssueBulkMovePayload
 */
export interface IssueBulkMovePayload {
    /**
     * A boolean value that indicates whether to send a bulk change notification when the issues are being moved.
     * 
     * If `true`, dispatches a bulk notification email to users about the updates.
     * @type {boolean}
     * @memberof IssueBulkMovePayload
     */
    sendBulkNotification?: boolean | null;
    /**
     * An object representing the mapping of issues and data related to destination entities, like fields and statuses, that are required during a bulk move.
     * 
     * The key is a string that is created by concatenating the following three entities in order, separated by commas. The format is `<project ID or key>,<issueType ID>,<parent ID or key>`. It should be unique across mappings provided in the payload. If you provide multiple mappings for the same key, only one will be processed. However, the operation won't fail, so the error may be hard to track down.
     * 
     *  *  ***Destination project*** (Required): ID or key of the project to which the issues are being moved.
     *  *  ***Destination issueType*** (Required): ID of the issueType to which the issues are being moved.
     *  *  ***Destination parent ID or key*** (Optional): ID or key of the issue which will become the parent of the issues being moved. Only required when the destination issueType is a subtask.
     * @type {{ [key: string]: TargetToSourcesMapping; }}
     * @memberof IssueBulkMovePayload
     */
    targetToSourcesMapping?: { [key: string]: TargetToSourcesMapping; };
}
/**
 * 
 * @export
 * @interface IssueBulkTransitionForWorkflow
 */
export interface IssueBulkTransitionForWorkflow {
    /**
     * Indicates whether all the transitions of this workflow are available in the transitions list or not.
     * @type {boolean}
     * @memberof IssueBulkTransitionForWorkflow
     */
    readonly isTransitionsFiltered?: boolean;
    /**
     * List of issue keys from the request which are associated with this workflow.
     * @type {Array<string>}
     * @memberof IssueBulkTransitionForWorkflow
     */
    readonly issues?: Array<string>;
    /**
     * List of transitions available for issues from the request which are associated with this workflow.
     * 
     *  **This list includes only those transitions that are common across the issues in this workflow and do not involve any additional field updates.** 
     * @type {Array<SimplifiedIssueTransition>}
     * @memberof IssueBulkTransitionForWorkflow
     */
    readonly transitions?: Array<SimplifiedIssueTransition>;
}
/**
 * Issue Bulk Transition Payload
 * @export
 * @interface IssueBulkTransitionPayload
 */
export interface IssueBulkTransitionPayload {
    /**
     * List of objects and each object has two properties:
     * 
     *  *  Issues that will be bulk transitioned.
     *  *  TransitionId that corresponds to a specific transition of issues that share the same workflow.
     * @type {Array<BulkTransitionSubmitInput>}
     * @memberof IssueBulkTransitionPayload
     */
    bulkTransitionInputs: Array<BulkTransitionSubmitInput>;
    /**
     * A boolean value that indicates whether to send a bulk change notification when the issues are being transitioned.
     * 
     * If `true`, dispatches a bulk notification email to users about the updates.
     * @type {boolean}
     * @memberof IssueBulkTransitionPayload
     */
    sendBulkNotification?: boolean | null;
}
/**
 * Issue Bulk Watch Or Unwatch Payload
 * @export
 * @interface IssueBulkWatchOrUnwatchPayload
 */
export interface IssueBulkWatchOrUnwatchPayload {
    /**
     * List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types.
     * @type {Array<string>}
     * @memberof IssueBulkWatchOrUnwatchPayload
     */
    selectedIssueIdsOrKeys: Array<string>;
    /**
     * A boolean value that indicates whether to send a bulk change notification when the issues are being watched or unwatched.
     * 
     * If `true`, dispatches a bulk notification email to users about the updates.
     * @type {boolean}
     * @memberof IssueBulkWatchOrUnwatchPayload
     */
    sendBulkNotification?: boolean | null;
}
/**
 * List of changelogs that belong to single issue
 * @export
 * @interface IssueChangeLog
 */
export interface IssueChangeLog {
    /**
     * List of changelogs that belongs to given issueId.
     * @type {Array<Changelog>}
     * @memberof IssueChangeLog
     */
    readonly changeHistories?: Array<Changelog>;
    /**
     * The ID of the issue.
     * @type {string}
     * @memberof IssueChangeLog
     */
    readonly issueId?: string;
}
/**
 * A list of changelog IDs.
 * @export
 * @interface IssueChangelogIds
 */
export interface IssueChangelogIds {
    /**
     * The list of changelog IDs.
     * @type {Set<number>}
     * @memberof IssueChangelogIds
     */
    changelogIds: Array<number>;
}
/**
 * 
 * @export
 * @interface IssueCommentListRequestBean
 */
export interface IssueCommentListRequestBean {
    /**
     * The list of comment IDs. A maximum of 1000 IDs can be specified.
     * @type {Set<number>}
     * @memberof IssueCommentListRequestBean
     */
    ids: Array<number>;
}
/**
 * An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
 * @export
 * @interface IssueContextVariable
 */
export interface IssueContextVariable {
    /**
     * The issue ID.
     * @type {number}
     * @memberof IssueContextVariable
     */
    id?: number;
    /**
     * The issue key.
     * @type {string}
     * @memberof IssueContextVariable
     */
    key?: string;
    /**
     * Type of custom context variable.
     * @type {string}
     * @memberof IssueContextVariable
     */
    type: string;
}
/**
 * The wrapper for the issue creation metadata for a list of projects.
 * @export
 * @interface IssueCreateMetadata
 */
export interface IssueCreateMetadata {
    /**
     * Expand options that include additional project details in the response.
     * @type {string}
     * @memberof IssueCreateMetadata
     */
    readonly expand?: string;
    /**
     * List of projects and their issue creation metadata.
     * @type {Array<ProjectIssueCreateMetadata>}
     * @memberof IssueCreateMetadata
     */
    readonly projects?: Array<ProjectIssueCreateMetadata>;
}
/**
 * Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
 * @export
 * @interface IssueEntityProperties
 */
export interface IssueEntityProperties {
    /**
     * A list of entity property IDs.
     * @type {Set<number>}
     * @memberof IssueEntityProperties
     */
    entitiesIds?: Array<number>;
    /**
     * A list of entity property keys and values.
     * @type {{ [key: string]: JsonNode; }}
     * @memberof IssueEntityProperties
     */
    properties?: { [key: string]: any; };
}
/**
 * An issue ID with entity property values. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
 * @export
 * @interface IssueEntityPropertiesForMultiUpdate
 */
export interface IssueEntityPropertiesForMultiUpdate {
    /**
     * The ID of the issue.
     * @type {number}
     * @memberof IssueEntityPropertiesForMultiUpdate
     */
    issueID?: number;
    /**
     * Entity properties to set on the issue. The maximum length of an issue property value is 32768 characters.
     * @type {{ [key: string]: JsonNode; }}
     * @memberof IssueEntityPropertiesForMultiUpdate
     */
    properties?: { [key: string]: any; };
}
/**
 * Describes the error that occurred when retrieving data for a particular issue.
 * @export
 * @interface IssueError
 */
export interface IssueError {
    /**
     * The error that occurred when fetching this issue.
     * @type {string}
     * @memberof IssueError
     */
    readonly errorMessage?: string;
    /**
     * The ID of the issue.
     * @type {string}
     * @memberof IssueError
     */
    readonly id?: string;
}
/**
 * Details about an issue event.
 * @export
 * @interface IssueEvent
 */
export interface IssueEvent {
    /**
     * The ID of the event.
     * @type {number}
     * @memberof IssueEvent
     */
    readonly id?: number;
    /**
     * The name of the event.
     * @type {string}
     * @memberof IssueEvent
     */
    readonly name?: string;
}
/**
 * Details of the options for a select list issue field.
 * @export
 * @interface IssueFieldOption
 */
export interface IssueFieldOption {
    /**
     * 
     * @type {IssueFieldOptionConfiguration}
     * @memberof IssueFieldOption
     */
    config?: IssueFieldOptionConfiguration;
    /**
     * The unique identifier for the option. This is only unique within the select field's set of options.
     * @type {number}
     * @memberof IssueFieldOption
     */
    id: number;
    /**
     * The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module.
     * @type {{ [key: string]: any; }}
     * @memberof IssueFieldOption
     */
    properties?: { [key: string]: any; };
    /**
     * The option's name, which is displayed in Jira.
     * @type {string}
     * @memberof IssueFieldOption
     */
    value: string;
}
/**
 * Details of the projects the option is available in.
 * @export
 * @interface IssueFieldOptionConfiguration
 */
export interface IssueFieldOptionConfiguration {
    /**
     * DEPRECATED
     * @type {Set<string>}
     * @memberof IssueFieldOptionConfiguration
     */
    attributes?: Array<IssueFieldOptionConfigurationAttributesEnum>;
    /**
     * Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
     * @type {IssueFieldOptionScopeBean}
     * @memberof IssueFieldOptionConfiguration
     */
    scope?: IssueFieldOptionScopeBean;
}


/**
 * @export
 */
export const IssueFieldOptionConfigurationAttributesEnum = {
    NotSelectable: 'notSelectable',
    DefaultValue: 'defaultValue'
} as const;
export type IssueFieldOptionConfigurationAttributesEnum = typeof IssueFieldOptionConfigurationAttributesEnum[keyof typeof IssueFieldOptionConfigurationAttributesEnum];

/**
 * 
 * @export
 * @interface IssueFieldOptionCreateBean
 */
export interface IssueFieldOptionCreateBean {
    [key: string]: any | any;
    /**
     * 
     * @type {IssueFieldOptionConfiguration}
     * @memberof IssueFieldOptionCreateBean
     */
    config?: IssueFieldOptionConfiguration;
    /**
     * The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
     * @type {{ [key: string]: any; }}
     * @memberof IssueFieldOptionCreateBean
     */
    properties?: { [key: string]: any; };
    /**
     * The option's name, which is displayed in Jira.
     * @type {string}
     * @memberof IssueFieldOptionCreateBean
     */
    value: string;
}
/**
 * 
 * @export
 * @interface IssueFieldOptionScopeBean
 */
export interface IssueFieldOptionScopeBean {
    /**
     * Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects.
     * @type {GlobalScopeBean}
     * @memberof IssueFieldOptionScopeBean
     */
    global?: GlobalScopeBean;
    /**
     * DEPRECATED
     * @type {Set<number>}
     * @memberof IssueFieldOptionScopeBean
     */
    projects?: Array<number>;
    /**
     * Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
     * @type {Set<ProjectScopeBean>}
     * @memberof IssueFieldOptionScopeBean
     */
    projects2?: Array<ProjectScopeBean>;
}
/**
 * Bulk operation filter details.
 * @export
 * @interface IssueFilterForBulkPropertyDelete
 */
export interface IssueFilterForBulkPropertyDelete {
    /**
     * The value of properties to perform the bulk operation on.
     * @type {any}
     * @memberof IssueFilterForBulkPropertyDelete
     */
    currentValue?: any | null;
    /**
     * List of issues to perform the bulk delete operation on.
     * @type {Set<number>}
     * @memberof IssueFilterForBulkPropertyDelete
     */
    entityIds?: Array<number>;
}
/**
 * Bulk operation filter details.
 * @export
 * @interface IssueFilterForBulkPropertySet
 */
export interface IssueFilterForBulkPropertySet {
    /**
     * The value of properties to perform the bulk operation on.
     * @type {any}
     * @memberof IssueFilterForBulkPropertySet
     */
    currentValue?: any | null;
    /**
     * List of issues to perform the bulk operation on.
     * @type {Set<number>}
     * @memberof IssueFilterForBulkPropertySet
     */
    entityIds?: Array<number>;
    /**
     * Whether the bulk operation occurs only when the property is present on or absent from an issue.
     * @type {boolean}
     * @memberof IssueFilterForBulkPropertySet
     */
    hasProperty?: boolean;
}
/**
 * 
 * @export
 * @interface IssueLimitReportResponseBean
 */
export interface IssueLimitReportResponseBean {
    /**
     * A list of ids of issues approaching the limit and their field count
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof IssueLimitReportResponseBean
     */
    issuesApproachingLimit?: { [key: string]: { [key: string]: number; }; };
    /**
     * A list of ids of issues breaching the limit and their field count
     * @type {{ [key: string]: { [key: string]: number; }; }}
     * @memberof IssueLimitReportResponseBean
     */
    issuesBreachingLimit?: { [key: string]: { [key: string]: number; }; };
    /**
     * The fields and their defined limits
     * @type {{ [key: string]: number; }}
     * @memberof IssueLimitReportResponseBean
     */
    limits?: { [key: string]: number; };
}
/**
 * Details of a link between issues.
 * @export
 * @interface IssueLink
 */
export interface IssueLink {
    /**
     * The ID of the issue link.
     * @type {string}
     * @memberof IssueLink
     */
    readonly id?: string;
    /**
     * Provides details about the linked issue. If presenting this link in a user interface, use the `inward` field of the issue link type to label the link.
     * @type {LinkedIssue}
     * @memberof IssueLink
     */
    inwardIssue: LinkedIssue;
    /**
     * Provides details about the linked issue. If presenting this link in a user interface, use the `outward` field of the issue link type to label the link.
     * @type {LinkedIssue}
     * @memberof IssueLink
     */
    outwardIssue: LinkedIssue;
    /**
     * The URL of the issue link.
     * @type {string}
     * @memberof IssueLink
     */
    readonly self?: string;
    /**
     * The type of link between the issues.
     * @type {IssueLinkType}
     * @memberof IssueLink
     */
    type: IssueLinkType;
}
/**
 * This object is used as follows:
 * 
 *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it defines and reports on the type of link between the issues. Find a list of issue link types with [Get issue link types](#api-rest-api-3-issueLinkType-get).
 *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it defines and reports on issue link types.
 * @export
 * @interface IssueLinkType
 */
export interface IssueLinkType {
    /**
     * The ID of the issue link type and is used as follows:
     * 
     *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `name` isn't provided. Otherwise, read only.
     *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    id?: string;
    /**
     * The description of the issue link type inward link and is used as follows:
     * 
     *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.
     *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    inward?: string;
    /**
     * The name of the issue link type and is used as follows:
     * 
     *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.
     *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    name?: string;
    /**
     * The description of the issue link type outward link and is used as follows:
     * 
     *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is read only.
     *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    outward?: string;
    /**
     * The URL of the issue link type. Read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    readonly self?: string;
}
/**
 * A list of issue link type beans.
 * @export
 * @interface IssueLinkTypes
 */
export interface IssueLinkTypes {
    /**
     * The issue link type bean.
     * @type {Array<IssueLinkType>}
     * @memberof IssueLinkTypes
     */
    readonly issueLinkTypes?: Array<IssueLinkType>;
}
/**
 * A list of issue IDs.
 * @export
 * @interface IssueList
 */
export interface IssueList {
    /**
     * The list of issue IDs.
     * @type {Array<string>}
     * @memberof IssueList
     */
    issueIds: Array<string>;
}
/**
 * A list of matched issues or errors for each JQL query, in the order the JQL queries were passed.
 * @export
 * @interface IssueMatches
 */
export interface IssueMatches {
    /**
     * 
     * @type {Array<IssueMatchesForJQL>}
     * @memberof IssueMatches
     */
    matches: Array<IssueMatchesForJQL>;
}
/**
 * A list of the issues matched to a JQL query or details of errors encountered during matching.
 * @export
 * @interface IssueMatchesForJQL
 */
export interface IssueMatchesForJQL {
    /**
     * A list of errors.
     * @type {Set<string>}
     * @memberof IssueMatchesForJQL
     */
    errors: Array<string>;
    /**
     * A list of issue IDs.
     * @type {Set<number>}
     * @memberof IssueMatchesForJQL
     */
    matchedIssues: Array<number>;
}
/**
 * A list of issues suggested for use in auto-completion.
 * @export
 * @interface IssuePickerSuggestions
 */
export interface IssuePickerSuggestions {
    /**
     * A list of issues for an issue type suggested for use in auto-completion.
     * @type {Array<IssuePickerSuggestionsIssueType>}
     * @memberof IssuePickerSuggestions
     */
    readonly sections?: Array<IssuePickerSuggestionsIssueType>;
}
/**
 * A type of issue suggested for use in auto-completion.
 * @export
 * @interface IssuePickerSuggestionsIssueType
 */
export interface IssuePickerSuggestionsIssueType {
    /**
     * The ID of the type of issues suggested for use in auto-completion.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly id?: string;
    /**
     * A list of issues suggested for use in auto-completion.
     * @type {Array<SuggestedIssue>}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly issues?: Array<SuggestedIssue>;
    /**
     * The label of the type of issues suggested for use in auto-completion.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly label?: string;
    /**
     * If no issue suggestions are found, returns a message indicating no suggestions were found,
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly msg?: string;
    /**
     * If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly sub?: string;
}
/**
 * Issue security level member.
 * @export
 * @interface IssueSecurityLevelMember
 */
export interface IssueSecurityLevelMember {
    /**
     * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
     * @type {PermissionHolder}
     * @memberof IssueSecurityLevelMember
     */
    holder: PermissionHolder;
    /**
     * The ID of the issue security level member.
     * @type {number}
     * @memberof IssueSecurityLevelMember
     */
    id: number;
    /**
     * The ID of the issue security level.
     * @type {number}
     * @memberof IssueSecurityLevelMember
     */
    issueSecurityLevelId: number;
}
/**
 * Details about an project using security scheme mapping.
 * @export
 * @interface IssueSecuritySchemeToProjectMapping
 */
export interface IssueSecuritySchemeToProjectMapping {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof IssueSecuritySchemeToProjectMapping
     */
    readonly issueSecuritySchemeId?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueSecuritySchemeToProjectMapping
     */
    readonly projectId?: string;
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
 * 
 * @export
 * @interface IssueTransitionStatus
 */
export interface IssueTransitionStatus {
    /**
     * The unique ID of the status.
     * @type {number}
     * @memberof IssueTransitionStatus
     */
    readonly statusId?: number;
    /**
     * The name of the status.
     * @type {string}
     * @memberof IssueTransitionStatus
     */
    readonly statusName?: string;
}
/**
 * 
 * @export
 * @interface IssueTypeCreateBean
 */
export interface IssueTypeCreateBean {
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    description?: string;
    /**
     * The hierarchy level of the issue type. Use:
     * 
     *  *  `-1` for Subtask.
     *  *  `0` for Base.
     * 
     * Defaults to `0`.
     * @type {number}
     * @memberof IssueTypeCreateBean
     */
    hierarchyLevel?: number;
    /**
     * The unique name for the issue type. The maximum length is 60 characters.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    name: string;
    /**
     * Deprecated. Use `hierarchyLevel` instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.
     * 
     * Whether the issue type is `subtype` or `standard`. Defaults to `standard`.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    type?: IssueTypeCreateBeanTypeEnum;
}


/**
 * @export
 */
export const IssueTypeCreateBeanTypeEnum = {
    Subtask: 'subtask',
    Standard: 'standard'
} as const;
export type IssueTypeCreateBeanTypeEnum = typeof IssueTypeCreateBeanTypeEnum[keyof typeof IssueTypeCreateBeanTypeEnum];

/**
 * Details about an issue type.
 * @export
 * @interface IssueTypeDetails
 */
export interface IssueTypeDetails {
    /**
     * The ID of the issue type's avatar.
     * @type {number}
     * @memberof IssueTypeDetails
     */
    readonly avatarId?: number;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly description?: string;
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly entityId?: string;
    /**
     * Hierarchy level of the issue type.
     * @type {number}
     * @memberof IssueTypeDetails
     */
    readonly hierarchyLevel?: number;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly iconUrl?: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly id?: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly name?: string;
    /**
     * Details of the next-gen projects the issue type is available in.
     * @type {Scope}
     * @memberof IssueTypeDetails
     */
    readonly scope?: Scope;
    /**
     * The URL of these issue type details.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly self?: string;
    /**
     * Whether this issue type is used to create subtasks.
     * @type {boolean}
     * @memberof IssueTypeDetails
     */
    readonly subtask?: boolean;
}
/**
 * The list of issue type IDs.
 * @export
 * @interface IssueTypeIds
 */
export interface IssueTypeIds {
    /**
     * The list of issue type IDs.
     * @type {Array<string>}
     * @memberof IssueTypeIds
     */
    issueTypeIds: Array<string>;
}
/**
 * The list of issue type IDs to be removed from the field configuration scheme.
 * @export
 * @interface IssueTypeIdsToRemove
 */
export interface IssueTypeIdsToRemove {
    /**
     * The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs.
     * @type {Array<string>}
     * @memberof IssueTypeIdsToRemove
     */
    issueTypeIds: Array<string>;
}
/**
 * Details of an issue type.
 * @export
 * @interface IssueTypeInfo
 */
export interface IssueTypeInfo {
    /**
     * The avatar of the issue type.
     * @type {number}
     * @memberof IssueTypeInfo
     */
    readonly avatarId?: number;
    /**
     * The ID of the issue type.
     * @type {number}
     * @memberof IssueTypeInfo
     */
    readonly id?: number;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeInfo
     */
    readonly name?: string;
}
/**
 * Details of the issue creation metadata for an issue type.
 * @export
 * @interface IssueTypeIssueCreateMetadata
 */
export interface IssueTypeIssueCreateMetadata {
    /**
     * The ID of the issue type's avatar.
     * @type {number}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly avatarId?: number;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly description?: string;
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly entityId?: string;
    /**
     * Expand options that include additional issue type metadata details in the response.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly expand?: string;
    /**
     * List of the fields available when creating an issue for the issue type.
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly fields?: { [key: string]: FieldMetadata; };
    /**
     * Hierarchy level of the issue type.
     * @type {number}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly hierarchyLevel?: number;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly iconUrl?: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly id?: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly name?: string;
    /**
     * Details of the next-gen projects the issue type is available in.
     * @type {Scope}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly scope?: Scope;
    /**
     * The URL of these issue type details.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly self?: string;
    /**
     * Whether this issue type is used to create subtasks.
     * @type {boolean}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly subtask?: boolean;
}
/**
 * Details of an issue type scheme.
 * @export
 * @interface IssueTypeScheme
 */
export interface IssueTypeScheme {
    /**
     * The ID of the default issue type of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    defaultIssueTypeId?: string;
    /**
     * The description of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    description?: string;
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    id: string;
    /**
     * Whether the issue type scheme is the default.
     * @type {boolean}
     * @memberof IssueTypeScheme
     */
    isDefault?: boolean;
    /**
     * The name of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    name: string;
}
/**
 * Details of an issue type scheme and its associated issue types.
 * @export
 * @interface IssueTypeSchemeDetails
 */
export interface IssueTypeSchemeDetails {
    /**
     * The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    defaultIssueTypeId?: string;
    /**
     * The description of the issue type scheme. The maximum length is 4000 characters.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    description?: string;
    /**
     * The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required.
     * @type {Array<string>}
     * @memberof IssueTypeSchemeDetails
     */
    issueTypeIds: Array<string>;
    /**
     * The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    name: string;
}
/**
 * The ID of an issue type scheme.
 * @export
 * @interface IssueTypeSchemeID
 */
export interface IssueTypeSchemeID {
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeID
     */
    readonly issueTypeSchemeId: string;
}
/**
 * Issue type scheme item.
 * @export
 * @interface IssueTypeSchemeMapping
 */
export interface IssueTypeSchemeMapping {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeSchemeMapping
     */
    issueTypeId: string;
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeMapping
     */
    issueTypeSchemeId: string;
}
/**
 * Details of the association between an issue type scheme and project.
 * @export
 * @interface IssueTypeSchemeProjectAssociation
 */
export interface IssueTypeSchemeProjectAssociation {
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeProjectAssociation
     */
    issueTypeSchemeId: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof IssueTypeSchemeProjectAssociation
     */
    projectId: string;
}
/**
 * Issue type scheme with a list of the projects that use it.
 * @export
 * @interface IssueTypeSchemeProjects
 */
export interface IssueTypeSchemeProjects {
    /**
     * Details of an issue type scheme.
     * @type {IssueTypeScheme}
     * @memberof IssueTypeSchemeProjects
     */
    issueTypeScheme: IssueTypeScheme;
    /**
     * The IDs of the projects using the issue type scheme.
     * @type {Array<string>}
     * @memberof IssueTypeSchemeProjects
     */
    projectIds: Array<string>;
}
/**
 * Details of the name, description, and default issue type for an issue type scheme.
 * @export
 * @interface IssueTypeSchemeUpdateDetails
 */
export interface IssueTypeSchemeUpdateDetails {
    /**
     * The ID of the default issue type of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    defaultIssueTypeId?: string;
    /**
     * The description of the issue type scheme. The maximum length is 4000 characters.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    description?: string;
    /**
     * The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    name?: string;
}
/**
 * Details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenScheme
 */
export interface IssueTypeScreenScheme {
    /**
     * The description of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenScheme
     */
    description?: string;
    /**
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenScheme
     */
    id: string;
    /**
     * The name of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenScheme
     */
    name: string;
}
/**
 * The details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenSchemeDetails
 */
export interface IssueTypeScreenSchemeDetails {
    /**
     * The description of the issue type screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeDetails
     */
    description?: string;
    /**
     * The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme.
     * @type {Array<IssueTypeScreenSchemeMapping>}
     * @memberof IssueTypeScreenSchemeDetails
     */
    issueTypeMappings: Array<IssueTypeScreenSchemeMapping>;
    /**
     * The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeDetails
     */
    name: string;
}
/**
 * The ID of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenSchemeId
 */
export interface IssueTypeScreenSchemeId {
    /**
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeId
     */
    readonly id: string;
}
/**
 * The screen scheme for an issue type.
 * @export
 * @interface IssueTypeScreenSchemeItem
 */
export interface IssueTypeScreenSchemeItem {
    /**
     * The ID of the issue type or *default*. Only issue types used in classic projects are accepted. When creating an issue screen scheme, an entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. Otherwise, a *default* entry can't be provided.
     * @type {string}
     * @memberof IssueTypeScreenSchemeItem
     */
    issueTypeId: string;
    /**
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeItem
     */
    issueTypeScreenSchemeId: string;
    /**
     * The ID of the screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeItem
     */
    screenSchemeId: string;
}
/**
 * The IDs of the screen schemes for the issue type IDs.
 * @export
 * @interface IssueTypeScreenSchemeMapping
 */
export interface IssueTypeScreenSchemeMapping {
    /**
     * The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeMapping
     */
    issueTypeId: string;
    /**
     * The ID of the screen scheme. Only screen schemes used in classic projects are accepted.
     * @type {string}
     * @memberof IssueTypeScreenSchemeMapping
     */
    screenSchemeId: string;
}
/**
 * A list of issue type screen scheme mappings.
 * @export
 * @interface IssueTypeScreenSchemeMappingDetails
 */
export interface IssueTypeScreenSchemeMappingDetails {
    /**
     * The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created.
     * @type {Array<IssueTypeScreenSchemeMapping>}
     * @memberof IssueTypeScreenSchemeMappingDetails
     */
    issueTypeMappings: Array<IssueTypeScreenSchemeMapping>;
}
/**
 * Associated issue type screen scheme and project.
 * @export
 * @interface IssueTypeScreenSchemeProjectAssociation
 */
export interface IssueTypeScreenSchemeProjectAssociation {
    /**
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeProjectAssociation
     */
    issueTypeScreenSchemeId?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof IssueTypeScreenSchemeProjectAssociation
     */
    projectId?: string;
}
/**
 * Details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenSchemeUpdateDetails
 */
export interface IssueTypeScreenSchemeUpdateDetails {
    /**
     * The description of the issue type screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeUpdateDetails
     */
    description?: string;
    /**
     * The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeUpdateDetails
     */
    name?: string;
}
/**
 * Issue type screen scheme with a list of the projects that use it.
 * @export
 * @interface IssueTypeScreenSchemesProjects
 */
export interface IssueTypeScreenSchemesProjects {
    /**
     * Details of an issue type screen scheme.
     * @type {IssueTypeScreenScheme}
     * @memberof IssueTypeScreenSchemesProjects
     */
    issueTypeScreenScheme: IssueTypeScreenScheme;
    /**
     * The IDs of the projects using the issue type screen scheme.
     * @type {Array<string>}
     * @memberof IssueTypeScreenSchemesProjects
     */
    projectIds: Array<string>;
}
/**
 * Mapping of an issue type to a context.
 * @export
 * @interface IssueTypeToContextMapping
 */
export interface IssueTypeToContextMapping {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof IssueTypeToContextMapping
     */
    contextId: string;
    /**
     * Whether the context is mapped to any issue type.
     * @type {boolean}
     * @memberof IssueTypeToContextMapping
     */
    isAnyIssueType?: boolean;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeToContextMapping
     */
    issueTypeId?: string;
}
/**
 * 
 * @export
 * @interface IssueTypeUpdateBean
 */
export interface IssueTypeUpdateBean {
    /**
     * The ID of an issue type avatar.
     * @type {number}
     * @memberof IssueTypeUpdateBean
     */
    avatarId?: number;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeUpdateBean
     */
    description?: string;
    /**
     * The unique name for the issue type. The maximum length is 60 characters.
     * @type {string}
     * @memberof IssueTypeUpdateBean
     */
    name?: string;
}
/**
 * Status details for an issue type.
 * @export
 * @interface IssueTypeWithStatus
 */
export interface IssueTypeWithStatus {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeWithStatus
     */
    readonly id: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeWithStatus
     */
    readonly name: string;
    /**
     * The URL of the issue type's status details.
     * @type {string}
     * @memberof IssueTypeWithStatus
     */
    readonly self: string;
    /**
     * List of status details for the issue type.
     * @type {Array<StatusDetails>}
     * @memberof IssueTypeWithStatus
     */
    readonly statuses: Array<StatusDetails>;
    /**
     * Whether this issue type represents subtasks.
     * @type {boolean}
     * @memberof IssueTypeWithStatus
     */
    readonly subtask: boolean;
}
/**
 * Details about the mapping between an issue type and a workflow.
 * @export
 * @interface IssueTypeWorkflowMapping
 */
export interface IssueTypeWorkflowMapping {
    /**
     * The ID of the issue type. Not required if updating the issue type-workflow mapping.
     * @type {string}
     * @memberof IssueTypeWorkflowMapping
     */
    issueType?: string;
    /**
     * Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.
     * @type {boolean}
     * @memberof IssueTypeWorkflowMapping
     */
    updateDraftIfNeeded?: boolean;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof IssueTypeWorkflowMapping
     */
    workflow?: string;
}
/**
 * Details about the mapping between issue types and a workflow.
 * @export
 * @interface IssueTypesWorkflowMapping
 */
export interface IssueTypesWorkflowMapping {
    /**
     * Whether the workflow is the default workflow for the workflow scheme.
     * @type {boolean}
     * @memberof IssueTypesWorkflowMapping
     */
    defaultMapping?: boolean;
    /**
     * The list of issue type IDs.
     * @type {Array<string>}
     * @memberof IssueTypesWorkflowMapping
     */
    issueTypes?: Array<string>;
    /**
     * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.
     * @type {boolean}
     * @memberof IssueTypesWorkflowMapping
     */
    updateDraftIfNeeded?: boolean;
    /**
     * The name of the workflow. Optional if updating the workflow-issue types mapping.
     * @type {string}
     * @memberof IssueTypesWorkflowMapping
     */
    workflow?: string;
}
/**
 * Details of an issue update request.
 * @export
 * @interface IssueUpdateDetails
 */
export interface IssueUpdateDetails {
    [key: string]: any | any;
    /**
     * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
     * @type {{ [key: string]: any; }}
     * @memberof IssueUpdateDetails
     */
    fields?: { [key: string]: any; };
    /**
     * Additional issue history details.
     * @type {HistoryMetadata}
     * @memberof IssueUpdateDetails
     */
    historyMetadata?: HistoryMetadata;
    /**
     * Details of issue properties to be add or update.
     * @type {Array<EntityProperty>}
     * @memberof IssueUpdateDetails
     */
    properties?: Array<EntityProperty>;
    /**
     * Details of a transition. Required when performing a transition, optional when creating or editing an issue.
     * @type {IssueTransition}
     * @memberof IssueUpdateDetails
     */
    transition?: IssueTransition;
    /**
     * A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`.
     * @type {{ [key: string]: Array<FieldUpdateOperation>; }}
     * @memberof IssueUpdateDetails
     */
    update?: { [key: string]: Array<FieldUpdateOperation>; };
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
 * List of issues and JQL queries.
 * @export
 * @interface IssuesAndJQLQueries
 */
export interface IssuesAndJQLQueries {
    /**
     * A list of issue IDs.
     * @type {Set<number>}
     * @memberof IssuesAndJQLQueries
     */
    issueIds: Array<number>;
    /**
     * A list of JQL queries.
     * @type {Array<string>}
     * @memberof IssuesAndJQLQueries
     */
    jqls: Array<string>;
}
/**
 * The description of the page of issues loaded by the provided JQL query.
 * @export
 * @interface IssuesJqlMetaDataBean
 */
export interface IssuesJqlMetaDataBean {
    /**
     * The number of issues that were loaded in this evaluation.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    count: number;
    /**
     * The maximum number of issues that could be loaded in this evaluation.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    maxResults: number;
    /**
     * The index of the first issue.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    startAt: number;
    /**
     * The total number of issues the JQL returned.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    totalCount: number;
    /**
     * Any warnings related to the JQL query. Present only if the validation mode was set to `warn`.
     * @type {Array<string>}
     * @memberof IssuesJqlMetaDataBean
     */
    validationWarnings?: Array<string>;
}
/**
 * Meta data describing the `issues` context variable.
 * @export
 * @interface IssuesMetaBean
 */
export interface IssuesMetaBean {
    /**
     * 
     * @type {IssuesJqlMetaDataBean}
     * @memberof IssuesMetaBean
     */
    jql?: IssuesJqlMetaDataBean;
}
/**
 * 
 * @export
 * @interface IssuesUpdateBean
 */
export interface IssuesUpdateBean {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<IssueUpdateDetails>}
     * @memberof IssuesUpdateBean
     */
    issueUpdates?: Array<IssueUpdateDetails>;
}
/**
 * The description of the page of issues loaded by the provided JQL query.This bean will be replacing IssuesJqlMetaDataBean bean as part of new `evaluate` endpoint
 * @export
 * @interface JExpEvaluateIssuesJqlMetaDataBean
 */
export interface JExpEvaluateIssuesJqlMetaDataBean {
    /**
     * Next Page token for the next page of issues.
     * @type {string}
     * @memberof JExpEvaluateIssuesJqlMetaDataBean
     */
    nextPageToken: string;
}
/**
 * Meta data describing the `issues` context variable.This bean will be replacing IssuesMetaBean bean as part of new `evaluate` endpoint
 * @export
 * @interface JExpEvaluateIssuesMetaBean
 */
export interface JExpEvaluateIssuesMetaBean {
    /**
     * 
     * @type {JExpEvaluateIssuesJqlMetaDataBean}
     * @memberof JExpEvaluateIssuesMetaBean
     */
    jql?: JExpEvaluateIssuesJqlMetaDataBean;
}
/**
 * The result of evaluating a Jira expression.This bean will be replacing `JiraExpressionResultBean` bean as part of new evaluate endpoint
 * @export
 * @interface JExpEvaluateJiraExpressionResultBean
 */
export interface JExpEvaluateJiraExpressionResultBean {
    /**
     * Contains various characteristics of the performed expression evaluation.
     * @type {JExpEvaluateMetaDataBean}
     * @memberof JExpEvaluateJiraExpressionResultBean
     */
    meta?: JExpEvaluateMetaDataBean;
    /**
     * The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.)
     * @type {any}
     * @memberof JExpEvaluateJiraExpressionResultBean
     */
    value: any | null;
}
/**
 * Contains information about the expression evaluation. This bean will be replacing `JiraExpressionEvaluationMetaDataBean` bean as part of new `evaluate` endpoint
 * @export
 * @interface JExpEvaluateMetaDataBean
 */
export interface JExpEvaluateMetaDataBean {
    /**
     * Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
     * @type {JiraExpressionsComplexityBean}
     * @memberof JExpEvaluateMetaDataBean
     */
    complexity?: JiraExpressionsComplexityBean;
    /**
     * Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
     * @type {JExpEvaluateIssuesMetaBean}
     * @memberof JExpEvaluateMetaDataBean
     */
    issues?: JExpEvaluateIssuesMetaBean;
}
/**
 * 
 * @export
 * @interface JQLCountRequestBean
 */
export interface JQLCountRequestBean {
    /**
     * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.
     * @type {string}
     * @memberof JQLCountRequestBean
     */
    jql?: string;
}
/**
 * 
 * @export
 * @interface JQLCountResultsBean
 */
export interface JQLCountResultsBean {
    /**
     * Number of issues matching JQL query.
     * @type {number}
     * @memberof JQLCountResultsBean
     */
    count?: number;
}
/**
 * The JQL queries to be converted.
 * @export
 * @interface JQLPersonalDataMigrationRequest
 */
export interface JQLPersonalDataMigrationRequest {
    /**
     * A list of queries with user identifiers. Maximum of 100 queries.
     * @type {Array<string>}
     * @memberof JQLPersonalDataMigrationRequest
     */
    queryStrings?: Array<string>;
}
/**
 * JQL queries that contained users that could not be found
 * @export
 * @interface JQLQueryWithUnknownUsers
 */
export interface JQLQueryWithUnknownUsers {
    /**
     * The converted query, with accountIDs instead of user identifiers, or 'unknown' for users that could not be found
     * @type {string}
     * @memberof JQLQueryWithUnknownUsers
     */
    convertedQuery?: string;
    /**
     * The original query, for reference
     * @type {string}
     * @memberof JQLQueryWithUnknownUsers
     */
    originalQuery?: string;
}
/**
 * Lists of JQL reference data.
 * @export
 * @interface JQLReferenceData
 */
export interface JQLReferenceData {
    /**
     * List of JQL query reserved words.
     * @type {Array<string>}
     * @memberof JQLReferenceData
     */
    jqlReservedWords?: Array<string>;
    /**
     * List of fields usable in JQL queries.
     * @type {Array<FieldReferenceData>}
     * @memberof JQLReferenceData
     */
    visibleFieldNames?: Array<FieldReferenceData>;
    /**
     * List of functions usable in JQL queries.
     * @type {Array<FunctionReferenceData>}
     * @memberof JQLReferenceData
     */
    visibleFunctionNames?: Array<FunctionReferenceData>;
}
/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. This bean will be replacing `JexpIssues` bean as part of new `evaluate` endpoint
 * @export
 * @interface JexpEvaluateCtxIssues
 */
export interface JexpEvaluateCtxIssues {
    /**
     * The JQL query that specifies the set of issues available in the Jira expression.
     * @type {JexpEvaluateCtxJqlIssues}
     * @memberof JexpEvaluateCtxIssues
     */
    jql?: JexpEvaluateCtxJqlIssues;
}
/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `nextPageToken` and `maxResults` properties. This bean will be replacing JexpJqlIssues bean as part of new `evaluate` endpoint
 * @export
 * @interface JexpEvaluateCtxJqlIssues
 */
export interface JexpEvaluateCtxJqlIssues {
    /**
     * The maximum number of issues to return from the JQL query. max results value considered may be lower than the number specific here.
     * @type {number}
     * @memberof JexpEvaluateCtxJqlIssues
     */
    maxResults?: number;
    /**
     * The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues.
     * @type {string}
     * @memberof JexpEvaluateCtxJqlIssues
     */
    nextPageToken?: string;
    /**
     * The JQL query, required to be bounded. Additionally, `orderBy` clause can contain a maximum of 7 fields
     * @type {string}
     * @memberof JexpEvaluateCtxJqlIssues
     */
    query?: string;
}
/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.
 * @export
 * @interface JexpIssues
 */
export interface JexpIssues {
    /**
     * The JQL query that specifies the set of issues available in the Jira expression.
     * @type {JexpJqlIssues}
     * @memberof JexpIssues
     */
    jql?: JexpJqlIssues;
}
/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.
 * @export
 * @interface JexpJqlIssues
 */
export interface JexpJqlIssues {
    /**
     * The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
     * @type {number}
     * @memberof JexpJqlIssues
     */
    maxResults?: number;
    /**
     * The JQL query.
     * @type {string}
     * @memberof JexpJqlIssues
     */
    query?: string;
    /**
     * The index of the first issue to return from the JQL query.
     * @type {number}
     * @memberof JexpJqlIssues
     */
    startAt?: number;
    /**
     * Determines how to validate the JQL query and treat the validation results.
     * @type {string}
     * @memberof JexpJqlIssues
     */
    validation?: JexpJqlIssuesValidationEnum;
}


/**
 * @export
 */
export const JexpJqlIssuesValidationEnum = {
    Strict: 'strict',
    Warn: 'warn',
    None: 'none'
} as const;
export type JexpJqlIssuesValidationEnum = typeof JexpJqlIssuesValidationEnum[keyof typeof JexpJqlIssuesValidationEnum];

/**
 * 
 * @export
 * @interface JiraCascadingSelectField
 */
export interface JiraCascadingSelectField {
    /**
     * 
     * @type {JiraSelectedOptionField}
     * @memberof JiraCascadingSelectField
     */
    childOptionValue?: JiraSelectedOptionField;
    /**
     * 
     * @type {string}
     * @memberof JiraCascadingSelectField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraSelectedOptionField}
     * @memberof JiraCascadingSelectField
     */
    parentOptionValue: JiraSelectedOptionField;
}
/**
 * 
 * @export
 * @interface JiraColorField
 */
export interface JiraColorField {
    /**
     * 
     * @type {JiraColorInput}
     * @memberof JiraColorField
     */
    color: JiraColorInput;
    /**
     * 
     * @type {string}
     * @memberof JiraColorField
     */
    fieldId: string;
}
/**
 * 
 * @export
 * @interface JiraColorInput
 */
export interface JiraColorInput {
    /**
     * 
     * @type {string}
     * @memberof JiraColorInput
     */
    name: string;
}
/**
 * 
 * @export
 * @interface JiraComponentField
 */
export interface JiraComponentField {
    /**
     * 
     * @type {number}
     * @memberof JiraComponentField
     */
    componentId: number;
}
/**
 * 
 * @export
 * @interface JiraDateField
 */
export interface JiraDateField {
    /**
     * 
     * @type {JiraDateInput}
     * @memberof JiraDateField
     */
    date?: JiraDateInput;
    /**
     * 
     * @type {string}
     * @memberof JiraDateField
     */
    fieldId: string;
}
/**
 * 
 * @export
 * @interface JiraDateInput
 */
export interface JiraDateInput {
    /**
     * 
     * @type {string}
     * @memberof JiraDateInput
     */
    formattedDate: string;
}
/**
 * 
 * @export
 * @interface JiraDateTimeField
 */
export interface JiraDateTimeField {
    /**
     * 
     * @type {JiraDateTimeInput}
     * @memberof JiraDateTimeField
     */
    dateTime: JiraDateTimeInput;
    /**
     * 
     * @type {string}
     * @memberof JiraDateTimeField
     */
    fieldId: string;
}
/**
 * 
 * @export
 * @interface JiraDateTimeInput
 */
export interface JiraDateTimeInput {
    /**
     * 
     * @type {string}
     * @memberof JiraDateTimeInput
     */
    formattedDateTime: string;
}
/**
 * 
 * @export
 * @interface JiraDurationField
 */
export interface JiraDurationField {
    /**
     * 
     * @type {string}
     * @memberof JiraDurationField
     */
    originalEstimateField: string;
}
/**
 * Details about the analysed Jira expression.
 * @export
 * @interface JiraExpressionAnalysis
 */
export interface JiraExpressionAnalysis {
    /**
     * 
     * @type {JiraExpressionComplexity}
     * @memberof JiraExpressionAnalysis
     */
    complexity?: JiraExpressionComplexity;
    /**
     * A list of validation errors. Not included if the expression is valid.
     * @type {Array<JiraExpressionValidationError>}
     * @memberof JiraExpressionAnalysis
     */
    errors?: Array<JiraExpressionValidationError>;
    /**
     * The analysed expression.
     * @type {string}
     * @memberof JiraExpressionAnalysis
     */
    expression: string;
    /**
     * EXPERIMENTAL. The inferred type of the expression.
     * @type {string}
     * @memberof JiraExpressionAnalysis
     */
    type?: string;
    /**
     * Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).
     * @type {boolean}
     * @memberof JiraExpressionAnalysis
     */
    valid: boolean;
}
/**
 * Details about the complexity of the analysed Jira expression.
 * @export
 * @interface JiraExpressionComplexity
 */
export interface JiraExpressionComplexity {
    /**
     * Information that can be used to determine how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) the evaluation of the expression will perform. This information may be a formula or number. For example:
     * 
     *  *  `issues.map(i => i.comments)` performs as many expensive operations as there are issues on the issues list. So this parameter returns `N`, where `N` is the size of issue list.
     *  *  `new Issue(10010).comments` gets comments for one issue, so its complexity is `2` (`1` to retrieve issue 10010 from the database plus `1` to get its comments).
     * @type {string}
     * @memberof JiraExpressionComplexity
     */
    expensiveOperations: string;
    /**
     * Variables used in the formula, mapped to the parts of the expression they refer to.
     * @type {{ [key: string]: string; }}
     * @memberof JiraExpressionComplexity
     */
    variables?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface JiraExpressionEvalContextBean
 */
export interface JiraExpressionEvalContextBean {
    /**
     * The ID of the board that is available under the `board` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    board?: number;
    /**
     * Custom context variables and their types. These variable types are available for use in a custom context:
     * 
     *  *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
     *  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
     *  *  `json`: A JSON object containing custom content.
     *  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.
     * @type {Array<CustomContextVariable>}
     * @memberof JiraExpressionEvalContextBean
     */
    custom?: Array<CustomContextVariable>;
    /**
     * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    customerRequest?: number;
    /**
     * The issue that is available under the `issue` variable when evaluating the expression.
     * @type {IdOrKeyBean}
     * @memberof JiraExpressionEvalContextBean
     */
    issue?: IdOrKeyBean;
    /**
     * The collection of issues that is available under the `issues` variable when evaluating the expression.
     * @type {JexpIssues}
     * @memberof JiraExpressionEvalContextBean
     */
    issues?: JexpIssues;
    /**
     * The project that is available under the `project` variable when evaluating the expression.
     * @type {IdOrKeyBean}
     * @memberof JiraExpressionEvalContextBean
     */
    project?: IdOrKeyBean;
    /**
     * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    serviceDesk?: number;
    /**
     * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    sprint?: number;
}
/**
 * 
 * @export
 * @interface JiraExpressionEvalRequestBean
 */
export interface JiraExpressionEvalRequestBean {
    /**
     * The context in which the Jira expression is evaluated.
     * @type {JiraExpressionEvalContextBean}
     * @memberof JiraExpressionEvalRequestBean
     */
    context?: JiraExpressionEvalContextBean;
    /**
     * The Jira expression to evaluate.
     * @type {string}
     * @memberof JiraExpressionEvalRequestBean
     */
    expression: string;
}
/**
 * 
 * @export
 * @interface JiraExpressionEvaluateContextBean
 */
export interface JiraExpressionEvaluateContextBean {
    /**
     * The ID of the board that is available under the `board` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvaluateContextBean
     */
    board?: number;
    /**
     * Custom context variables and their types. These variable types are available for use in a custom context:
     * 
     *  *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
     *  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
     *  *  `json`: A JSON object containing custom content.
     *  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.
     * @type {Array<CustomContextVariable>}
     * @memberof JiraExpressionEvaluateContextBean
     */
    custom?: Array<CustomContextVariable>;
    /**
     * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
     * @type {number}
     * @memberof JiraExpressionEvaluateContextBean
     */
    customerRequest?: number;
    /**
     * The issue that is available under the `issue` variable when evaluating the expression.
     * @type {IdOrKeyBean}
     * @memberof JiraExpressionEvaluateContextBean
     */
    issue?: IdOrKeyBean;
    /**
     * The collection of issues that is available under the `issues` variable when evaluating the expression.
     * @type {JexpEvaluateCtxIssues}
     * @memberof JiraExpressionEvaluateContextBean
     */
    issues?: JexpEvaluateCtxIssues;
    /**
     * The project that is available under the `project` variable when evaluating the expression.
     * @type {IdOrKeyBean}
     * @memberof JiraExpressionEvaluateContextBean
     */
    project?: IdOrKeyBean;
    /**
     * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvaluateContextBean
     */
    serviceDesk?: number;
    /**
     * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvaluateContextBean
     */
    sprint?: number;
}
/**
 * The request to evaluate a Jira expression. This bean will be replacing `JiraExpressionEvaluateRequest` as part of new `evaluate` endpoint
 * @export
 * @interface JiraExpressionEvaluateRequestBean
 */
export interface JiraExpressionEvaluateRequestBean {
    /**
     * The context in which the Jira expression is evaluated.
     * @type {JiraExpressionEvaluateContextBean}
     * @memberof JiraExpressionEvaluateRequestBean
     */
    context?: JiraExpressionEvaluateContextBean;
    /**
     * The Jira expression to evaluate.
     * @type {string}
     * @memberof JiraExpressionEvaluateRequestBean
     */
    expression: string;
}
/**
 * 
 * @export
 * @interface JiraExpressionEvaluationMetaDataBean
 */
export interface JiraExpressionEvaluationMetaDataBean {
    /**
     * Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
     * @type {JiraExpressionsComplexityBean}
     * @memberof JiraExpressionEvaluationMetaDataBean
     */
    complexity?: JiraExpressionsComplexityBean;
    /**
     * Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
     * @type {IssuesMetaBean}
     * @memberof JiraExpressionEvaluationMetaDataBean
     */
    issues?: IssuesMetaBean;
}
/**
 * Details of Jira expressions for analysis.
 * @export
 * @interface JiraExpressionForAnalysis
 */
export interface JiraExpressionForAnalysis {
    /**
     * Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.
     * @type {{ [key: string]: string; }}
     * @memberof JiraExpressionForAnalysis
     */
    contextVariables?: { [key: string]: string; };
    /**
     * The list of Jira expressions to analyse.
     * @type {Array<string>}
     * @memberof JiraExpressionForAnalysis
     */
    expressions: Array<string>;
}
/**
 * The result of evaluating a Jira expression.
 * @export
 * @interface JiraExpressionResult
 */
export interface JiraExpressionResult {
    /**
     * Contains various characteristics of the performed expression evaluation.
     * @type {JiraExpressionEvaluationMetaDataBean}
     * @memberof JiraExpressionResult
     */
    meta?: JiraExpressionEvaluationMetaDataBean;
    /**
     * The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.)
     * @type {any}
     * @memberof JiraExpressionResult
     */
    value: any | null;
}
/**
 * Details about syntax and type errors. The error details apply to the entire expression, unless the object includes:
 * 
 *  *  `line` and `column`
 *  *  `expression`
 * @export
 * @interface JiraExpressionValidationError
 */
export interface JiraExpressionValidationError {
    /**
     * The text column in which the error occurred.
     * @type {number}
     * @memberof JiraExpressionValidationError
     */
    column?: number;
    /**
     * The part of the expression in which the error occurred.
     * @type {string}
     * @memberof JiraExpressionValidationError
     */
    expression?: string;
    /**
     * The text line in which the error occurred.
     * @type {number}
     * @memberof JiraExpressionValidationError
     */
    line?: number;
    /**
     * Details about the error.
     * @type {string}
     * @memberof JiraExpressionValidationError
     */
    message: string;
    /**
     * The error type.
     * @type {string}
     * @memberof JiraExpressionValidationError
     */
    type: JiraExpressionValidationErrorTypeEnum;
}


/**
 * @export
 */
export const JiraExpressionValidationErrorTypeEnum = {
    Syntax: 'syntax',
    Type: 'type',
    Other: 'other'
} as const;
export type JiraExpressionValidationErrorTypeEnum = typeof JiraExpressionValidationErrorTypeEnum[keyof typeof JiraExpressionValidationErrorTypeEnum];

/**
 * Details about the analysed Jira expression.
 * @export
 * @interface JiraExpressionsAnalysis
 */
export interface JiraExpressionsAnalysis {
    /**
     * The results of Jira expressions analysis.
     * @type {Array<JiraExpressionAnalysis>}
     * @memberof JiraExpressionsAnalysis
     */
    results: Array<JiraExpressionAnalysis>;
}
/**
 * 
 * @export
 * @interface JiraExpressionsComplexityBean
 */
export interface JiraExpressionsComplexityBean {
    /**
     * The number of Jira REST API beans returned in the response.
     * @type {JiraExpressionsComplexityValueBean}
     * @memberof JiraExpressionsComplexityBean
     */
    beans: JiraExpressionsComplexityValueBean;
    /**
     * The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
     * @type {JiraExpressionsComplexityValueBean}
     * @memberof JiraExpressionsComplexityBean
     */
    expensiveOperations: JiraExpressionsComplexityValueBean;
    /**
     * The number of primitive values returned in the response.
     * @type {JiraExpressionsComplexityValueBean}
     * @memberof JiraExpressionsComplexityBean
     */
    primitiveValues: JiraExpressionsComplexityValueBean;
    /**
     * The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
     * @type {JiraExpressionsComplexityValueBean}
     * @memberof JiraExpressionsComplexityBean
     */
    steps: JiraExpressionsComplexityValueBean;
}
/**
 * 
 * @export
 * @interface JiraExpressionsComplexityValueBean
 */
export interface JiraExpressionsComplexityValueBean {
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityValueBean
     */
    limit: number;
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityValueBean
     */
    value: number;
}
/**
 * 
 * @export
 * @interface JiraGroupInput
 */
export interface JiraGroupInput {
    /**
     * 
     * @type {string}
     * @memberof JiraGroupInput
     */
    groupName: string;
}
/**
 * 
 * @export
 * @interface JiraIssueFields
 */
export interface JiraIssueFields {
    /**
     * Add or clear a cascading select field:
     * 
     *  *  To add, specify `optionId` for both parent and child.
     *  *  To clear the child, set its `optionId` to null.
     *  *  To clear both, set the parent's `optionId` to null.
     * @type {Array<JiraCascadingSelectField>}
     * @memberof JiraIssueFields
     */
    cascadingSelectFields?: Array<JiraCascadingSelectField>;
    /**
     * Add or clear a number field:
     * 
     *  *  To add, specify a numeric `value`.
     *  *  To clear, set `value` to `null`.
     * @type {Array<JiraNumberField>}
     * @memberof JiraIssueFields
     */
    clearableNumberFields?: Array<JiraNumberField>;
    /**
     * Add or clear a color field:
     * 
     *  *  To add, specify the color `name`. Available colors are: `purple`, `blue`, `green`, `teal`, `yellow`, `orange`, `grey`, `dark purple`, `dark blue`, `dark green`, `dark teal`, `dark yellow`, `dark orange`, `dark grey`.
     *  *  To clear, set the color `name` to an empty string.
     * @type {Array<JiraColorField>}
     * @memberof JiraIssueFields
     */
    colorFields?: Array<JiraColorField>;
    /**
     * Add or clear a date picker field:
     * 
     *  *  To add, specify the date in `d/mmm/yy` format or ISO format `dd-mm-yyyy`.
     *  *  To clear, set `formattedDate` to an empty string.
     * @type {Array<JiraDateField>}
     * @memberof JiraIssueFields
     */
    datePickerFields?: Array<JiraDateField>;
    /**
     * Add or clear the planned start date and time:
     * 
     *  *  To add, specify the date and time in ISO format for `formattedDateTime`.
     *  *  To clear, provide an empty string for `formattedDateTime`.
     * @type {Array<JiraDateTimeField>}
     * @memberof JiraIssueFields
     */
    dateTimePickerFields?: Array<JiraDateTimeField>;
    /**
     * Set the issue type field by providing an `issueTypeId`.
     * @type {JiraIssueTypeField}
     * @memberof JiraIssueFields
     */
    issueType?: JiraIssueTypeField;
    /**
     * Edit a labels field:
     * 
     *  *  Options include `ADD`, `REPLACE`, `REMOVE`, or `REMOVE_ALL` for bulk edits.
     *  *  To clear labels, use the `REMOVE_ALL` option with an empty `labels` array.
     * @type {Array<JiraLabelsField>}
     * @memberof JiraIssueFields
     */
    labelsFields?: Array<JiraLabelsField>;
    /**
     * Add or clear a multi-group picker field:
     * 
     *  *  To add groups, provide an array of groups with `groupName`s.
     *  *  To clear all groups, use an empty `groups` array.
     * @type {Array<JiraMultipleGroupPickerField>}
     * @memberof JiraIssueFields
     */
    multipleGroupPickerFields?: Array<JiraMultipleGroupPickerField>;
    /**
     * Assign or unassign multiple users to/from a field:
     * 
     *  *  To assign, provide an array of user `accountId`s.
     *  *  To clear, set `users` to `null`.
     * @type {Array<JiraMultipleSelectUserPickerField>}
     * @memberof JiraIssueFields
     */
    multipleSelectClearableUserPickerFields?: Array<JiraMultipleSelectUserPickerField>;
    /**
     * Add or clear a multi-select field:
     * 
     *  *  To add, provide an array of options with `optionId`s.
     *  *  To clear, use an empty `options` array.
     * @type {Array<JiraMultipleSelectField>}
     * @memberof JiraIssueFields
     */
    multipleSelectFields?: Array<JiraMultipleSelectField>;
    /**
     * Edit a multi-version picker field like Fix Versions/Affects Versions:
     * 
     *  *  Options include `ADD`, `REPLACE`, `REMOVE`, or `REMOVE_ALL` for bulk edits.
     *  *  To clear the field, use the `REMOVE_ALL` option with an empty `versions` array.
     * @type {Array<JiraMultipleVersionPickerField>}
     * @memberof JiraIssueFields
     */
    multipleVersionPickerFields?: Array<JiraMultipleVersionPickerField>;
    /**
     * Edit a multi select components field:
     * 
     *  *  Options include `ADD`, `REPLACE`, `REMOVE`, or `REMOVE_ALL` for bulk edits.
     *  *  To clear, use the `REMOVE_ALL` option with an empty `components` array.
     * @type {JiraMultiSelectComponentField}
     * @memberof JiraIssueFields
     */
    multiselectComponents?: JiraMultiSelectComponentField;
    /**
     * Edit the original estimate field.
     * @type {JiraDurationField}
     * @memberof JiraIssueFields
     */
    originalEstimateField?: JiraDurationField;
    /**
     * Set the priority of an issue by specifying a `priorityId`.
     * @type {JiraPriorityField}
     * @memberof JiraIssueFields
     */
    priority?: JiraPriorityField;
    /**
     * Add or clear a rich text field:
     * 
     *  *  To add, provide `adfValue`. Note that rich text fields only support ADF values.
     *  *  To clear, use an empty `richText` object.
     * 
     * For ADF format details, refer to: [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure).
     * @type {Array<JiraRichTextField>}
     * @memberof JiraIssueFields
     */
    richTextFields?: Array<JiraRichTextField>;
    /**
     * Add or clear a single group picker field:
     * 
     *  *  To add, specify the group with `groupName`.
     *  *  To clear, set `groupName` to an empty string.
     * @type {Array<JiraSingleGroupPickerField>}
     * @memberof JiraIssueFields
     */
    singleGroupPickerFields?: Array<JiraSingleGroupPickerField>;
    /**
     * Add or clear a single line text field:
     * 
     *  *  To add, provide the `text` value.
     *  *  To clear, set `text` to an empty string.
     * @type {Array<JiraSingleLineTextField>}
     * @memberof JiraIssueFields
     */
    singleLineTextFields?: Array<JiraSingleLineTextField>;
    /**
     * Edit assignment for single select user picker fields like Assignee/Reporter:
     * 
     *  *  To assign an issue, specify the user's `accountId`.
     *  *  To unassign an issue, set `user` to `null`.
     *  *  For automatic assignment, set `accountId` to `-1`.
     * @type {Array<JiraSingleSelectUserPickerField>}
     * @memberof JiraIssueFields
     */
    singleSelectClearableUserPickerFields?: Array<JiraSingleSelectUserPickerField>;
    /**
     * Add or clear a single select field:
     * 
     *  *  To add, specify the option with an `optionId`.
     *  *  To clear, pass an option with `optionId` as `-1`.
     * @type {Array<JiraSingleSelectField>}
     * @memberof JiraIssueFields
     */
    singleSelectFields?: Array<JiraSingleSelectField>;
    /**
     * Add or clear a single version picker field:
     * 
     *  *  To add, specify the version with a `versionId`.
     *  *  To clear, set `versionId` to `-1`.
     * @type {Array<JiraSingleVersionPickerField>}
     * @memberof JiraIssueFields
     */
    singleVersionPickerFields?: Array<JiraSingleVersionPickerField>;
    /**
     * Edit the time tracking field.
     * @type {JiraTimeTrackingField}
     * @memberof JiraIssueFields
     */
    timeTrackingField?: JiraTimeTrackingField;
    /**
     * Add or clear a URL field:
     * 
     *  *  To add, provide the `url` with the desired URL value.
     *  *  To clear, set `url` to an empty string.
     * @type {Array<JiraUrlField>}
     * @memberof JiraIssueFields
     */
    urlFields?: Array<JiraUrlField>;
}
/**
 * 
 * @export
 * @interface JiraIssueTypeField
 */
export interface JiraIssueTypeField {
    /**
     * 
     * @type {string}
     * @memberof JiraIssueTypeField
     */
    issueTypeId: string;
}
/**
 * 
 * @export
 * @interface JiraLabelsField
 */
export interface JiraLabelsField {
    /**
     * 
     * @type {string}
     * @memberof JiraLabelsField
     */
    bulkEditMultiSelectFieldOption: JiraLabelsFieldBulkEditMultiSelectFieldOptionEnum;
    /**
     * 
     * @type {string}
     * @memberof JiraLabelsField
     */
    fieldId: string;
    /**
     * 
     * @type {Array<JiraLabelsInput>}
     * @memberof JiraLabelsField
     */
    labels: Array<JiraLabelsInput>;
}


/**
 * @export
 */
export const JiraLabelsFieldBulkEditMultiSelectFieldOptionEnum = {
    Add: 'ADD',
    Remove: 'REMOVE',
    Replace: 'REPLACE',
    RemoveAll: 'REMOVE_ALL'
} as const;
export type JiraLabelsFieldBulkEditMultiSelectFieldOptionEnum = typeof JiraLabelsFieldBulkEditMultiSelectFieldOptionEnum[keyof typeof JiraLabelsFieldBulkEditMultiSelectFieldOptionEnum];

/**
 * 
 * @export
 * @interface JiraLabelsInput
 */
export interface JiraLabelsInput {
    /**
     * 
     * @type {string}
     * @memberof JiraLabelsInput
     */
    name: string;
}
/**
 * 
 * @export
 * @interface JiraMultiSelectComponentField
 */
export interface JiraMultiSelectComponentField {
    /**
     * 
     * @type {string}
     * @memberof JiraMultiSelectComponentField
     */
    bulkEditMultiSelectFieldOption: JiraMultiSelectComponentFieldBulkEditMultiSelectFieldOptionEnum;
    /**
     * 
     * @type {Array<JiraComponentField>}
     * @memberof JiraMultiSelectComponentField
     */
    components: Array<JiraComponentField>;
    /**
     * 
     * @type {string}
     * @memberof JiraMultiSelectComponentField
     */
    fieldId: string;
}


/**
 * @export
 */
export const JiraMultiSelectComponentFieldBulkEditMultiSelectFieldOptionEnum = {
    Add: 'ADD',
    Remove: 'REMOVE',
    Replace: 'REPLACE',
    RemoveAll: 'REMOVE_ALL'
} as const;
export type JiraMultiSelectComponentFieldBulkEditMultiSelectFieldOptionEnum = typeof JiraMultiSelectComponentFieldBulkEditMultiSelectFieldOptionEnum[keyof typeof JiraMultiSelectComponentFieldBulkEditMultiSelectFieldOptionEnum];

/**
 * 
 * @export
 * @interface JiraMultipleGroupPickerField
 */
export interface JiraMultipleGroupPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraMultipleGroupPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {Array<JiraGroupInput>}
     * @memberof JiraMultipleGroupPickerField
     */
    groups: Array<JiraGroupInput>;
}
/**
 * 
 * @export
 * @interface JiraMultipleSelectField
 */
export interface JiraMultipleSelectField {
    /**
     * 
     * @type {string}
     * @memberof JiraMultipleSelectField
     */
    fieldId: string;
    /**
     * 
     * @type {Array<JiraSelectedOptionField>}
     * @memberof JiraMultipleSelectField
     */
    options: Array<JiraSelectedOptionField>;
}
/**
 * 
 * @export
 * @interface JiraMultipleSelectUserPickerField
 */
export interface JiraMultipleSelectUserPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraMultipleSelectUserPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {Array<JiraUserField>}
     * @memberof JiraMultipleSelectUserPickerField
     */
    users?: Array<JiraUserField>;
}
/**
 * 
 * @export
 * @interface JiraMultipleVersionPickerField
 */
export interface JiraMultipleVersionPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraMultipleVersionPickerField
     */
    bulkEditMultiSelectFieldOption: JiraMultipleVersionPickerFieldBulkEditMultiSelectFieldOptionEnum;
    /**
     * 
     * @type {string}
     * @memberof JiraMultipleVersionPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {Array<JiraVersionField>}
     * @memberof JiraMultipleVersionPickerField
     */
    versions: Array<JiraVersionField>;
}


/**
 * @export
 */
export const JiraMultipleVersionPickerFieldBulkEditMultiSelectFieldOptionEnum = {
    Add: 'ADD',
    Remove: 'REMOVE',
    Replace: 'REPLACE',
    RemoveAll: 'REMOVE_ALL'
} as const;
export type JiraMultipleVersionPickerFieldBulkEditMultiSelectFieldOptionEnum = typeof JiraMultipleVersionPickerFieldBulkEditMultiSelectFieldOptionEnum[keyof typeof JiraMultipleVersionPickerFieldBulkEditMultiSelectFieldOptionEnum];

/**
 * 
 * @export
 * @interface JiraNumberField
 */
export interface JiraNumberField {
    /**
     * 
     * @type {string}
     * @memberof JiraNumberField
     */
    fieldId: string;
    /**
     * 
     * @type {number}
     * @memberof JiraNumberField
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface JiraPriorityField
 */
export interface JiraPriorityField {
    /**
     * 
     * @type {string}
     * @memberof JiraPriorityField
     */
    priorityId: string;
}
/**
 * 
 * @export
 * @interface JiraRichTextField
 */
export interface JiraRichTextField {
    /**
     * 
     * @type {string}
     * @memberof JiraRichTextField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraRichTextInput}
     * @memberof JiraRichTextField
     */
    richText: JiraRichTextInput;
}
/**
 * 
 * @export
 * @interface JiraRichTextInput
 */
export interface JiraRichTextInput {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof JiraRichTextInput
     */
    adfValue?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface JiraSelectedOptionField
 */
export interface JiraSelectedOptionField {
    /**
     * 
     * @type {number}
     * @memberof JiraSelectedOptionField
     */
    optionId?: number;
}
/**
 * 
 * @export
 * @interface JiraSingleGroupPickerField
 */
export interface JiraSingleGroupPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraSingleGroupPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraGroupInput}
     * @memberof JiraSingleGroupPickerField
     */
    group: JiraGroupInput;
}
/**
 * 
 * @export
 * @interface JiraSingleLineTextField
 */
export interface JiraSingleLineTextField {
    /**
     * 
     * @type {string}
     * @memberof JiraSingleLineTextField
     */
    fieldId: string;
    /**
     * 
     * @type {string}
     * @memberof JiraSingleLineTextField
     */
    text: string;
}
/**
 * Add or clear a single select field:
 * 
 *  *  To add, specify the option with an `optionId`.
 *  *  To clear, pass an option with `optionId` as `-1`.
 * @export
 * @interface JiraSingleSelectField
 */
export interface JiraSingleSelectField {
    /**
     * 
     * @type {string}
     * @memberof JiraSingleSelectField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraSelectedOptionField}
     * @memberof JiraSingleSelectField
     */
    option: JiraSelectedOptionField;
}
/**
 * 
 * @export
 * @interface JiraSingleSelectUserPickerField
 */
export interface JiraSingleSelectUserPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraSingleSelectUserPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraUserField}
     * @memberof JiraSingleSelectUserPickerField
     */
    user?: JiraUserField;
}
/**
 * 
 * @export
 * @interface JiraSingleVersionPickerField
 */
export interface JiraSingleVersionPickerField {
    /**
     * 
     * @type {string}
     * @memberof JiraSingleVersionPickerField
     */
    fieldId: string;
    /**
     * 
     * @type {JiraVersionField}
     * @memberof JiraSingleVersionPickerField
     */
    version: JiraVersionField;
}
/**
 * Details of a status.
 * @export
 * @interface JiraStatus
 */
export interface JiraStatus {
    /**
     * The description of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    description?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    name?: string;
    /**
     * 
     * @type {StatusScope}
     * @memberof JiraStatus
     */
    scope?: StatusScope;
    /**
     * The category of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    statusCategory?: JiraStatusStatusCategoryEnum;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * Projects and issue types where the status is used. Only available if the `usages` expand is requested.
     * @type {Set<ProjectIssueTypes>}
     * @memberof JiraStatus
     */
    usages?: Array<ProjectIssueTypes> | null;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * The workflows that use this status. Only available if the `workflowUsages` expand is requested.
     * @type {Set<WorkflowUsages>}
     * @memberof JiraStatus
     */
    workflowUsages?: Array<WorkflowUsages> | null;
}


/**
 * @export
 */
export const JiraStatusStatusCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type JiraStatusStatusCategoryEnum = typeof JiraStatusStatusCategoryEnum[keyof typeof JiraStatusStatusCategoryEnum];

/**
 * 
 * @export
 * @interface JiraTimeTrackingField
 */
export interface JiraTimeTrackingField {
    /**
     * 
     * @type {string}
     * @memberof JiraTimeTrackingField
     */
    timeRemaining: string;
}
/**
 * 
 * @export
 * @interface JiraUrlField
 */
export interface JiraUrlField {
    /**
     * 
     * @type {string}
     * @memberof JiraUrlField
     */
    fieldId: string;
    /**
     * 
     * @type {string}
     * @memberof JiraUrlField
     */
    url: string;
}
/**
 * 
 * @export
 * @interface JiraUserField
 */
export interface JiraUserField {
    /**
     * 
     * @type {string}
     * @memberof JiraUserField
     */
    accountId: string;
}
/**
 * 
 * @export
 * @interface JiraVersionField
 */
export interface JiraVersionField {
    /**
     * 
     * @type {string}
     * @memberof JiraVersionField
     */
    versionId?: string;
}
/**
 * Details of a workflow.
 * @export
 * @interface JiraWorkflow
 */
export interface JiraWorkflow {
    /**
     * The creation date of the workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    created?: string | null;
    /**
     * The description of the workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    description?: string;
    /**
     * The ID of the workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    id?: string;
    /**
     * Indicates if the workflow can be edited.
     * @type {boolean}
     * @memberof JiraWorkflow
     */
    isEditable?: boolean;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    name?: string;
    /**
     * 
     * @type {WorkflowScope}
     * @memberof JiraWorkflow
     */
    scope?: WorkflowScope;
    /**
     * 
     * @type {WorkflowLayout}
     * @memberof JiraWorkflow
     */
    startPointLayout?: WorkflowLayout | null;
    /**
     * The statuses referenced in this workflow.
     * @type {Set<WorkflowReferenceStatus>}
     * @memberof JiraWorkflow
     */
    statuses?: Array<WorkflowReferenceStatus>;
    /**
     * If there is a current [asynchronous task](#async-operations) operation for this workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    taskId?: string | null;
    /**
     * The transitions of the workflow. Note that a transition can have either the deprecated `to`/`from` fields or the `toStatusReference`/`links` fields, but never both nor a combination.
     * @type {Set<WorkflowTransitions>}
     * @memberof JiraWorkflow
     */
    transitions?: Array<WorkflowTransitions>;
    /**
     * The last edited date of the workflow.
     * @type {string}
     * @memberof JiraWorkflow
     */
    updated?: string | null;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the requested workflows.
     * @type {Set<ProjectIssueTypes>}
     * @memberof JiraWorkflow
     */
    usages?: Array<ProjectIssueTypes> | null;
    /**
     * 
     * @type {DocumentVersion}
     * @memberof JiraWorkflow
     */
    version?: DocumentVersion;
}
/**
 * Details of a status.
 * @export
 * @interface JiraWorkflowStatus
 */
export interface JiraWorkflowStatus {
    /**
     * The description of the status.
     * @type {string}
     * @memberof JiraWorkflowStatus
     */
    description?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof JiraWorkflowStatus
     */
    id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof JiraWorkflowStatus
     */
    name?: string;
    /**
     * 
     * @type {WorkflowScope}
     * @memberof JiraWorkflowStatus
     */
    scope?: WorkflowScope;
    /**
     * The category of the status.
     * @type {string}
     * @memberof JiraWorkflowStatus
     */
    statusCategory?: JiraWorkflowStatusStatusCategoryEnum;
    /**
     * The reference of the status.
     * @type {string}
     * @memberof JiraWorkflowStatus
     */
    statusReference?: string;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * The `statuses.usages` expand is an optional parameter that can be used when reading and updating statuses in Jira. It provides additional information about the projects and issue types associated with the requested statuses.
     * @type {Set<ProjectIssueTypes>}
     * @memberof JiraWorkflowStatus
     */
    usages?: Array<ProjectIssueTypes> | null;
}


/**
 * @export
 */
export const JiraWorkflowStatusStatusCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type JiraWorkflowStatusStatusCategoryEnum = typeof JiraWorkflowStatusStatusCategoryEnum[keyof typeof JiraWorkflowStatusStatusCategoryEnum];

/**
 * Jql function precomputation.
 * @export
 * @interface JqlFunctionPrecomputationBean
 */
export interface JqlFunctionPrecomputationBean {
    /**
     * The list of arguments function was invoked with.
     * @type {Array<string>}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly arguments?: Array<string>;
    /**
     * The timestamp of the precomputation creation.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly created?: string;
    /**
     * The error message to be displayed to the user.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly error?: string;
    /**
     * The field the function was executed against.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly field?: string;
    /**
     * The function key.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly functionKey?: string;
    /**
     * The name of the function.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly functionName?: string;
    /**
     * The id of the precomputation.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly id?: string;
    /**
     * The operator in context of which function was executed.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly operator?: string;
    /**
     * The timestamp of the precomputation last update.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly updated?: string;
    /**
     * The timestamp of the precomputation last usage.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly used?: string;
    /**
     * The JQL fragment stored as the precomputation.
     * @type {string}
     * @memberof JqlFunctionPrecomputationBean
     */
    readonly value?: string;
}
/**
 * Request to fetch precomputations by ID.
 * @export
 * @interface JqlFunctionPrecomputationGetByIdRequest
 */
export interface JqlFunctionPrecomputationGetByIdRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof JqlFunctionPrecomputationGetByIdRequest
     */
    precomputationIDs?: Array<string>;
}
/**
 * Get precomputations by ID response.
 * @export
 * @interface JqlFunctionPrecomputationGetByIdResponse
 */
export interface JqlFunctionPrecomputationGetByIdResponse {
    /**
     * List of precomputations that were not found.
     * @type {Array<string>}
     * @memberof JqlFunctionPrecomputationGetByIdResponse
     */
    readonly notFoundPrecomputationIDs?: Array<string>;
    /**
     * The list of precomputations.
     * @type {Array<JqlFunctionPrecomputationBean>}
     * @memberof JqlFunctionPrecomputationGetByIdResponse
     */
    readonly precomputations?: Array<JqlFunctionPrecomputationBean>;
}
/**
 * Precomputation id and its new value.
 * @export
 * @interface JqlFunctionPrecomputationUpdateBean
 */
export interface JqlFunctionPrecomputationUpdateBean {
    /**
     * The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.
     * @type {string}
     * @memberof JqlFunctionPrecomputationUpdateBean
     */
    error?: string;
    /**
     * The id of the precomputation to update.
     * @type {string}
     * @memberof JqlFunctionPrecomputationUpdateBean
     */
    id: string;
    /**
     * The new value of the precomputation.
     * @type {string}
     * @memberof JqlFunctionPrecomputationUpdateBean
     */
    value?: string;
}
/**
 * Error response returned updating JQL Function precomputations fails.
 * @export
 * @interface JqlFunctionPrecomputationUpdateErrorResponse
 */
export interface JqlFunctionPrecomputationUpdateErrorResponse {
    /**
     * The list of error messages produced by this operation.
     * @type {Array<string>}
     * @memberof JqlFunctionPrecomputationUpdateErrorResponse
     */
    readonly errorMessages?: Array<string>;
    /**
     * List of precomputations that were not found.
     * @type {Set<string>}
     * @memberof JqlFunctionPrecomputationUpdateErrorResponse
     */
    readonly notFoundPrecomputationIDs?: Array<string>;
}
/**
 * List of pairs (id and value) for precomputation updates.
 * @export
 * @interface JqlFunctionPrecomputationUpdateRequestBean
 */
export interface JqlFunctionPrecomputationUpdateRequestBean {
    /**
     * 
     * @type {Array<JqlFunctionPrecomputationUpdateBean>}
     * @memberof JqlFunctionPrecomputationUpdateRequestBean
     */
    values?: Array<JqlFunctionPrecomputationUpdateBean>;
}
/**
 * Result of updating JQL Function precomputations.
 * @export
 * @interface JqlFunctionPrecomputationUpdateResponse
 */
export interface JqlFunctionPrecomputationUpdateResponse {
    /**
     * List of precomputations that were not found and skipped. Only returned if the request passed skipNotFoundPrecomputations=true.
     * @type {Set<string>}
     * @memberof JqlFunctionPrecomputationUpdateResponse
     */
    readonly notFoundPrecomputationIDs?: Array<string>;
}
/**
 * A list of JQL queries to parse.
 * @export
 * @interface JqlQueriesToParse
 */
export interface JqlQueriesToParse {
    /**
     * A list of queries to parse.
     * @type {Array<string>}
     * @memberof JqlQueriesToParse
     */
    queries: Array<string>;
}
/**
 * The list of JQL queries to sanitize for the given account IDs.
 * @export
 * @interface JqlQueriesToSanitize
 */
export interface JqlQueriesToSanitize {
    /**
     * The list of JQL queries to sanitize. Must contain unique values. Maximum of 20 queries.
     * @type {Array<JqlQueryToSanitize>}
     * @memberof JqlQueriesToSanitize
     */
    queries: Array<JqlQueryToSanitize>;
}
/**
 * A parsed JQL query.
 * @export
 * @interface JqlQuery
 */
export interface JqlQuery {
    /**
     * 
     * @type {JqlQueryOrderByClause}
     * @memberof JqlQuery
     */
    orderBy?: JqlQueryOrderByClause;
    /**
     * 
     * @type {JqlQueryClause}
     * @memberof JqlQuery
     */
    where?: JqlQueryClause;
}
/**
 * A JQL query clause.
 * @export
 * @interface JqlQueryClause
 */
export interface JqlQueryClause {
    /**
     * The list of nested clauses.
     * @type {Array<JqlQueryClause>}
     * @memberof JqlQueryClause
     */
    clauses: Array<JqlQueryClause>;
    /**
     * The operator applied to the field.
     * @type {string}
     * @memberof JqlQueryClause
     */
    operator: JqlQueryClauseOperatorEnum;
    /**
     * 
     * @type {JqlQueryField}
     * @memberof JqlQueryClause
     */
    field: JqlQueryField;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof JqlQueryClause
     */
    operand: JqlQueryClauseOperand;
    /**
     * The list of time predicates.
     * @type {Array<JqlQueryClauseTimePredicate>}
     * @memberof JqlQueryClause
     */
    predicates: Array<JqlQueryClauseTimePredicate>;
}


/**
 * @export
 */
export const JqlQueryClauseOperatorEnum = {
    Changed: 'changed'
} as const;
export type JqlQueryClauseOperatorEnum = typeof JqlQueryClauseOperatorEnum[keyof typeof JqlQueryClauseOperatorEnum];

/**
 * Details of an operand in a JQL clause.
 * @export
 * @interface JqlQueryClauseOperand
 */
export interface JqlQueryClauseOperand {
    /**
     * Encoded operand, which can be used directly in a JQL query.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    encodedOperand?: string;
    /**
     * The list of operand values.
     * @type {Array<JqlQueryUnitaryOperand>}
     * @memberof JqlQueryClauseOperand
     */
    values: Array<JqlQueryUnitaryOperand>;
    /**
     * Encoded value, which can be used directly in a JQL query.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    encodedValue?: string;
    /**
     * The operand value.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    value: string;
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof JqlQueryClauseOperand
     */
    arguments: Array<string>;
    /**
     * The name of the function.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    _function: string;
    /**
     * The keyword that is the operand value.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    keyword: JqlQueryClauseOperandKeywordEnum;
}


/**
 * @export
 */
export const JqlQueryClauseOperandKeywordEnum = {
    Empty: 'empty'
} as const;
export type JqlQueryClauseOperandKeywordEnum = typeof JqlQueryClauseOperandKeywordEnum[keyof typeof JqlQueryClauseOperandKeywordEnum];

/**
 * A time predicate for a temporal JQL clause.
 * @export
 * @interface JqlQueryClauseTimePredicate
 */
export interface JqlQueryClauseTimePredicate {
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof JqlQueryClauseTimePredicate
     */
    operand: JqlQueryClauseOperand;
    /**
     * The operator between the field and the operand.
     * @type {string}
     * @memberof JqlQueryClauseTimePredicate
     */
    operator: JqlQueryClauseTimePredicateOperatorEnum;
}


/**
 * @export
 */
export const JqlQueryClauseTimePredicateOperatorEnum = {
    Before: 'before',
    After: 'after',
    From: 'from',
    To: 'to',
    On: 'on',
    During: 'during',
    By: 'by'
} as const;
export type JqlQueryClauseTimePredicateOperatorEnum = typeof JqlQueryClauseTimePredicateOperatorEnum[keyof typeof JqlQueryClauseTimePredicateOperatorEnum];

/**
 * A field used in a JQL query. See [Advanced searching - fields reference](https://confluence.atlassian.com/x/dAiiLQ) for more information about fields in JQL queries.
 * @export
 * @interface JqlQueryField
 */
export interface JqlQueryField {
    /**
     * The encoded name of the field, which can be used directly in a JQL query.
     * @type {string}
     * @memberof JqlQueryField
     */
    encodedName?: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof JqlQueryField
     */
    name: string;
    /**
     * When the field refers to a value in an entity property, details of the entity property value.
     * @type {Array<JqlQueryFieldEntityProperty>}
     * @memberof JqlQueryField
     */
    property?: Array<JqlQueryFieldEntityProperty>;
}
/**
 * Details of an entity property.
 * @export
 * @interface JqlQueryFieldEntityProperty
 */
export interface JqlQueryFieldEntityProperty {
    /**
     * The object on which the property is set.
     * @type {string}
     * @memberof JqlQueryFieldEntityProperty
     */
    entity: string;
    /**
     * The key of the property.
     * @type {string}
     * @memberof JqlQueryFieldEntityProperty
     */
    key: string;
    /**
     * The path in the property value to query.
     * @type {string}
     * @memberof JqlQueryFieldEntityProperty
     */
    path: string;
    /**
     * The type of the property value extraction. Not available if the extraction for the property is not registered on the instance with the [Entity property](https://developer.atlassian.com/cloud/jira/platform/modules/entity-property/) module.
     * @type {string}
     * @memberof JqlQueryFieldEntityProperty
     */
    type?: JqlQueryFieldEntityPropertyTypeEnum;
}


/**
 * @export
 */
export const JqlQueryFieldEntityPropertyTypeEnum = {
    Number: 'number',
    String: 'string',
    Text: 'text',
    Date: 'date',
    User: 'user'
} as const;
export type JqlQueryFieldEntityPropertyTypeEnum = typeof JqlQueryFieldEntityPropertyTypeEnum[keyof typeof JqlQueryFieldEntityPropertyTypeEnum];

/**
 * Details of the order-by JQL clause.
 * @export
 * @interface JqlQueryOrderByClause
 */
export interface JqlQueryOrderByClause {
    /**
     * The list of order-by clause fields and their ordering directives.
     * @type {Array<JqlQueryOrderByClauseElement>}
     * @memberof JqlQueryOrderByClause
     */
    fields: Array<JqlQueryOrderByClauseElement>;
}
/**
 * An element of the order-by JQL clause.
 * @export
 * @interface JqlQueryOrderByClauseElement
 */
export interface JqlQueryOrderByClauseElement {
    /**
     * The direction in which to order the results.
     * @type {string}
     * @memberof JqlQueryOrderByClauseElement
     */
    direction?: JqlQueryOrderByClauseElementDirectionEnum;
    /**
     * 
     * @type {JqlQueryField}
     * @memberof JqlQueryOrderByClauseElement
     */
    field: JqlQueryField;
}


/**
 * @export
 */
export const JqlQueryOrderByClauseElementDirectionEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type JqlQueryOrderByClauseElementDirectionEnum = typeof JqlQueryOrderByClauseElementDirectionEnum[keyof typeof JqlQueryOrderByClauseElementDirectionEnum];

/**
 * The JQL query to sanitize for the account ID. If the account ID is null, sanitizing is performed for an anonymous user.
 * @export
 * @interface JqlQueryToSanitize
 */
export interface JqlQueryToSanitize {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof JqlQueryToSanitize
     */
    accountId?: string | null;
    /**
     * The query to sanitize.
     * @type {string}
     * @memberof JqlQueryToSanitize
     */
    query: string;
}
/**
 * An operand that can be part of a list operand.
 * @export
 * @interface JqlQueryUnitaryOperand
 */
export interface JqlQueryUnitaryOperand {
    /**
     * Encoded value, which can be used directly in a JQL query.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    encodedValue?: string;
    /**
     * The operand value.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    value: string;
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof JqlQueryUnitaryOperand
     */
    arguments: Array<string>;
    /**
     * Encoded operand, which can be used directly in a JQL query.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    encodedOperand?: string;
    /**
     * The name of the function.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    _function: string;
    /**
     * The keyword that is the operand value.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    keyword: JqlQueryUnitaryOperandKeywordEnum;
}


/**
 * @export
 */
export const JqlQueryUnitaryOperandKeywordEnum = {
    Empty: 'empty'
} as const;
export type JqlQueryUnitaryOperandKeywordEnum = typeof JqlQueryUnitaryOperandKeywordEnum[keyof typeof JqlQueryUnitaryOperandKeywordEnum];

/**
 * A JSON object with custom content.
 * @export
 * @interface JsonContextVariable
 */
export interface JsonContextVariable {
    /**
     * Type of custom context variable.
     * @type {string}
     * @memberof JsonContextVariable
     */
    type: string;
    /**
     * A JSON object containing custom content.
     * @type {object}
     * @memberof JsonContextVariable
     */
    value?: object;
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
 * An operand that is a JQL keyword. See [Advanced searching - keywords reference](https://confluence.atlassian.com/jiracorecloud/advanced-searching-keywords-reference-765593717.html#Advancedsearching-keywordsreference-EMPTYEMPTY) for more information about operand keywords.
 * @export
 * @interface KeywordOperand
 */
export interface KeywordOperand {
    /**
     * The keyword that is the operand value.
     * @type {string}
     * @memberof KeywordOperand
     */
    keyword: KeywordOperandKeywordEnum;
}


/**
 * @export
 */
export const KeywordOperandKeywordEnum = {
    Empty: 'empty'
} as const;
export type KeywordOperandKeywordEnum = typeof KeywordOperandKeywordEnum[keyof typeof KeywordOperandKeywordEnum];

/**
 * Details about a license for the Jira instance.
 * @export
 * @interface License
 */
export interface License {
    /**
     * The applications under this license.
     * @type {Array<LicensedApplication>}
     * @memberof License
     */
    readonly applications: Array<LicensedApplication>;
}
/**
 * A metric that provides insight into the active licence details
 * @export
 * @interface LicenseMetric
 */
export interface LicenseMetric {
    /**
     * The key of a specific license metric.
     * @type {string}
     * @memberof LicenseMetric
     */
    key?: string;
    /**
     * The calculated value of a licence metric linked to the key. An example licence metric is the approximate number of user accounts.
     * @type {string}
     * @memberof LicenseMetric
     */
    value?: string;
}
/**
 * Details about a licensed Jira application.
 * @export
 * @interface LicensedApplication
 */
export interface LicensedApplication {
    /**
     * The ID of the application.
     * @type {string}
     * @memberof LicensedApplication
     */
    readonly id: string;
    /**
     * The licensing plan.
     * @type {string}
     * @memberof LicensedApplication
     */
    readonly plan: LicensedApplicationPlanEnum;
}


/**
 * @export
 */
export const LicensedApplicationPlanEnum = {
    Unlicensed: 'UNLICENSED',
    Free: 'FREE',
    Paid: 'PAID'
} as const;
export type LicensedApplicationPlanEnum = typeof LicensedApplicationPlanEnum[keyof typeof LicensedApplicationPlanEnum];

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
 * @interface LinkIssueRequestJsonBean
 */
export interface LinkIssueRequestJsonBean {
    /**
     * 
     * @type {Comment}
     * @memberof LinkIssueRequestJsonBean
     */
    comment?: Comment;
    /**
     * 
     * @type {LinkedIssue}
     * @memberof LinkIssueRequestJsonBean
     */
    inwardIssue: LinkedIssue;
    /**
     * 
     * @type {LinkedIssue}
     * @memberof LinkIssueRequestJsonBean
     */
    outwardIssue: LinkedIssue;
    /**
     * 
     * @type {IssueLinkType}
     * @memberof LinkIssueRequestJsonBean
     */
    type: IssueLinkType;
}
/**
 * The ID or key of a linked issue.
 * @export
 * @interface LinkedIssue
 */
export interface LinkedIssue {
    /**
     * The fields associated with the issue.
     * @type {Fields}
     * @memberof LinkedIssue
     */
    readonly fields?: Fields;
    /**
     * The ID of an issue. Required if `key` isn't provided.
     * @type {string}
     * @memberof LinkedIssue
     */
    id?: string;
    /**
     * The key of an issue. Required if `id` isn't provided.
     * @type {string}
     * @memberof LinkedIssue
     */
    key?: string;
    /**
     * The URL of the issue.
     * @type {string}
     * @memberof LinkedIssue
     */
    readonly self?: string;
}
/**
 * An operand that is a list of values.
 * @export
 * @interface ListOperand
 */
export interface ListOperand {
    /**
     * Encoded operand, which can be used directly in a JQL query.
     * @type {string}
     * @memberof ListOperand
     */
    encodedOperand?: string;
    /**
     * The list of operand values.
     * @type {Array<JqlQueryUnitaryOperand>}
     * @memberof ListOperand
     */
    values: Array<JqlQueryUnitaryOperand>;
}
/**
 * Details of a locale.
 * @export
 * @interface Locale
 */
export interface Locale {
    /**
     * The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\_US represents a locale of English (United States). Required on create.
     * @type {string}
     * @memberof Locale
     */
    locale?: string;
}
/**
 * List of string of inputs
 * @export
 * @interface MandatoryFieldValue
 */
export interface MandatoryFieldValue {
    /**
     * If `true`, will try to retain original non-null issue field values on move.
     * @type {boolean}
     * @memberof MandatoryFieldValue
     */
    retain?: boolean | null;
    /**
     * Will treat as `MandatoryFieldValue` if type is `raw` or `empty`
     * @type {string}
     * @memberof MandatoryFieldValue
     */
    type?: MandatoryFieldValueTypeEnum | null;
    /**
     * Value for each field. Provide a `list of strings` for non-ADF fields.
     * @type {Array<string>}
     * @memberof MandatoryFieldValue
     */
    value: Array<string>;
}


/**
 * @export
 */
export const MandatoryFieldValueTypeEnum = {
    Adf: 'adf',
    Raw: 'raw'
} as const;
export type MandatoryFieldValueTypeEnum = typeof MandatoryFieldValueTypeEnum[keyof typeof MandatoryFieldValueTypeEnum];

/**
 * An object notation input
 * @export
 * @interface MandatoryFieldValueForADF
 */
export interface MandatoryFieldValueForADF {
    /**
     * If `true`, will try to retain original non-null issue field values on move.
     * @type {boolean}
     * @memberof MandatoryFieldValueForADF
     */
    retain?: boolean | null;
    /**
     * Will treat as `MandatoryFieldValueForADF` if type is `adf`
     * @type {string}
     * @memberof MandatoryFieldValueForADF
     */
    type: MandatoryFieldValueForADFTypeEnum;
    /**
     * Value for each field. Accepts Atlassian Document Format (ADF) for rich text fields like `description`, `environments`. For ADF format details, refer to: [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure)
     * @type {object}
     * @memberof MandatoryFieldValueForADF
     */
    value: object;
}


/**
 * @export
 */
export const MandatoryFieldValueForADFTypeEnum = {
    Adf: 'adf',
    Raw: 'raw'
} as const;
export type MandatoryFieldValueForADFTypeEnum = typeof MandatoryFieldValueForADFTypeEnum[keyof typeof MandatoryFieldValueForADFTypeEnum];

/**
 * Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
 * @export
 * @interface MappingsByIssueTypeOverride
 */
export interface MappingsByIssueTypeOverride {
    /**
     * The ID of the issue type for this mapping.
     * @type {string}
     * @memberof MappingsByIssueTypeOverride
     */
    issueTypeId: string;
    /**
     * The list of status mappings.
     * @type {Array<WorkflowAssociationStatusMapping>}
     * @memberof MappingsByIssueTypeOverride
     */
    statusMappings: Array<WorkflowAssociationStatusMapping>;
}
/**
 * The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
 * @export
 * @interface MappingsByWorkflow
 */
export interface MappingsByWorkflow {
    /**
     * The ID of the new workflow.
     * @type {string}
     * @memberof MappingsByWorkflow
     */
    newWorkflowId: string;
    /**
     * The ID of the old workflow.
     * @type {string}
     * @memberof MappingsByWorkflow
     */
    oldWorkflowId: string;
    /**
     * The list of status mappings.
     * @type {Array<WorkflowAssociationStatusMapping>}
     * @memberof MappingsByWorkflow
     */
    statusMappings: Array<WorkflowAssociationStatusMapping>;
}
/**
 * Details about the configuration of Jira.
 * @export
 * @interface ModelConfiguration
 */
export interface ModelConfiguration {
    /**
     * Whether the ability to add attachments to issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly attachmentsEnabled?: boolean;
    /**
     * Whether the ability to link issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly issueLinkingEnabled?: boolean;
    /**
     * Whether the ability to create subtasks for issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly subTasksEnabled?: boolean;
    /**
     * The configuration of time tracking.
     * @type {TimeTrackingConfiguration}
     * @memberof ModelConfiguration
     */
    readonly timeTrackingConfiguration?: TimeTrackingConfiguration;
    /**
     * Whether the ability to track time is enabled. This property is deprecated.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly timeTrackingEnabled?: boolean;
    /**
     * Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly unassignedIssuesAllowed?: boolean;
    /**
     * Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly votingEnabled?: boolean;
    /**
     * Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly watchingEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    count?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof ModelError
     */
    issueIdsOrKeys?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface MoveFieldBean
 */
export interface MoveFieldBean {
    /**
     * The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.
     * @type {string}
     * @memberof MoveFieldBean
     */
    after?: string;
    /**
     * The named position to which the screen tab field should be moved. Required if `after` isn't provided.
     * @type {string}
     * @memberof MoveFieldBean
     */
    position?: MoveFieldBeanPositionEnum;
}


/**
 * @export
 */
export const MoveFieldBeanPositionEnum = {
    Earlier: 'Earlier',
    Later: 'Later',
    First: 'First',
    Last: 'Last'
} as const;
export type MoveFieldBeanPositionEnum = typeof MoveFieldBeanPositionEnum[keyof typeof MoveFieldBeanPositionEnum];

/**
 * A list of issues and their respective properties to set or update. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
 * @export
 * @interface MultiIssueEntityProperties
 */
export interface MultiIssueEntityProperties {
    /**
     * A list of issue IDs and their respective properties.
     * @type {Array<IssueEntityPropertiesForMultiUpdate>}
     * @memberof MultiIssueEntityProperties
     */
    issues?: Array<IssueEntityPropertiesForMultiUpdate>;
}
/**
 * A custom field and its new value with a list of issue to update.
 * @export
 * @interface MultipleCustomFieldValuesUpdate
 */
export interface MultipleCustomFieldValuesUpdate {
    /**
     * The ID or key of the custom field. For example, `customfield_10010`.
     * @type {string}
     * @memberof MultipleCustomFieldValuesUpdate
     */
    customField: string;
    /**
     * The list of issue IDs.
     * @type {Array<number>}
     * @memberof MultipleCustomFieldValuesUpdate
     */
    issueIds: Array<number>;
    /**
     * The value for the custom field. The value must be compatible with the [custom field type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#data-types) as follows:
     * 
     *  *  `string` the value must be a string.
     *  *  `number` the value must be a number.
     *  *  `datetime` the value must be a string that represents a date in the ISO format or the simplified extended ISO format. For example, `"2023-01-18T12:00:00-03:00"` or `"2023-01-18T12:00:00.000Z"`. However, the milliseconds part is ignored.
     *  *  `user` the value must be an object that contains the `accountId` field.
     *  *  `group` the value must be an object that contains the group `name` or `groupId` field. Because group names can change, we recommend using `groupId`.
     * 
     * A list of appropriate values must be provided if the field is of the `list` [collection type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/#collection-types).
     * @type {any}
     * @memberof MultipleCustomFieldValuesUpdate
     */
    value: any | null;
}
/**
 * List of updates for a custom fields.
 * @export
 * @interface MultipleCustomFieldValuesUpdateDetails
 */
export interface MultipleCustomFieldValuesUpdateDetails {
    /**
     * 
     * @type {Array<MultipleCustomFieldValuesUpdate>}
     * @memberof MultipleCustomFieldValuesUpdateDetails
     */
    updates?: Array<MultipleCustomFieldValuesUpdate>;
}
/**
 * 
 * @export
 * @interface NestedResponse
 */
export interface NestedResponse {
    /**
     * 
     * @type {ErrorCollection}
     * @memberof NestedResponse
     */
    errorCollection?: ErrorCollection;
    /**
     * 
     * @type {number}
     * @memberof NestedResponse
     */
    status?: number;
    /**
     * 
     * @type {WarningCollection}
     * @memberof NestedResponse
     */
    warningCollection?: WarningCollection;
}
/**
 * The user details.
 * @export
 * @interface NewUserDetails
 */
export interface NewUserDetails {
    [key: string]: any | any;
    /**
     * Deprecated, do not use.
     * @type {Array<string>}
     * @memberof NewUserDetails
     */
    applicationKeys?: Array<string>;
    /**
     * This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.
     * @type {string}
     * @memberof NewUserDetails
     */
    displayName?: string;
    /**
     * The email address for the user.
     * @type {string}
     * @memberof NewUserDetails
     */
    emailAddress: string;
    /**
     * This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof NewUserDetails
     */
    key?: string;
    /**
     * This property is no longer available. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof NewUserDetails
     */
    name?: string;
    /**
     * This property is no longer available. If the user has an Atlassian account, their password is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.
     * @type {string}
     * @memberof NewUserDetails
     */
    password?: string;
    /**
     * Products the new user has access to. Valid products are: jira-core, jira-servicedesk, jira-product-discovery, jira-software. To create a user without product access, set this field to be an empty array.
     * @type {Set<string>}
     * @memberof NewUserDetails
     */
    products: Array<string>;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof NewUserDetails
     */
    readonly self?: string;
}
/**
 * Details about a notification.
 * @export
 * @interface Notification
 */
export interface Notification {
    [key: string]: any | any;
    /**
     * The HTML body of the email notification for the issue.
     * @type {string}
     * @memberof Notification
     */
    htmlBody?: string;
    /**
     * Restricts the notifications to users with the specified permissions.
     * @type {NotificationRecipientsRestrictions}
     * @memberof Notification
     */
    restrict?: NotificationRecipientsRestrictions;
    /**
     * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
     * @type {string}
     * @memberof Notification
     */
    subject?: string;
    /**
     * The plain text body of the email notification for the issue.
     * @type {string}
     * @memberof Notification
     */
    textBody?: string;
    /**
     * The recipients of the email notification for the issue.
     * @type {NotificationRecipients}
     * @memberof Notification
     */
    to?: NotificationRecipients;
}
/**
 * Details about a notification event.
 * @export
 * @interface NotificationEvent
 */
export interface NotificationEvent {
    /**
     * The description of the event.
     * @type {string}
     * @memberof NotificationEvent
     */
    description?: string;
    /**
     * The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
     * @type {number}
     * @memberof NotificationEvent
     */
    id?: number;
    /**
     * The name of the event.
     * @type {string}
     * @memberof NotificationEvent
     */
    name?: string;
    /**
     * The template of the event. Only custom events configured by Jira administrators have template.
     * @type {NotificationEvent}
     * @memberof NotificationEvent
     */
    templateEvent?: NotificationEvent;
}
/**
 * Details of the users and groups to receive the notification.
 * @export
 * @interface NotificationRecipients
 */
export interface NotificationRecipients {
    [key: string]: any | any;
    /**
     * Whether the notification should be sent to the issue's assignees.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    assignee?: boolean;
    /**
     * List of groupIds to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationRecipients
     */
    groupIds?: Array<string>;
    /**
     * List of groups to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationRecipients
     */
    groups?: Array<GroupName>;
    /**
     * Whether the notification should be sent to the issue's reporter.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    reporter?: boolean;
    /**
     * List of users to receive the notification.
     * @type {Array<UserDetails>}
     * @memberof NotificationRecipients
     */
    users?: Array<UserDetails>;
    /**
     * Whether the notification should be sent to the issue's voters.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    voters?: boolean;
    /**
     * Whether the notification should be sent to the issue's watchers.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    watchers?: boolean;
}
/**
 * Details of the group membership or permissions needed to receive the notification.
 * @export
 * @interface NotificationRecipientsRestrictions
 */
export interface NotificationRecipientsRestrictions {
    /**
     * List of groupId memberships required to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationRecipientsRestrictions
     */
    groupIds?: Array<string>;
    /**
     * List of group memberships required to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationRecipientsRestrictions
     */
    groups?: Array<GroupName>;
    /**
     * List of permissions required to receive the notification.
     * @type {Array<RestrictedPermission>}
     * @memberof NotificationRecipientsRestrictions
     */
    permissions?: Array<RestrictedPermission>;
}
/**
 * Details about a notification scheme.
 * @export
 * @interface NotificationScheme
 */
export interface NotificationScheme {
    /**
     * The description of the notification scheme.
     * @type {string}
     * @memberof NotificationScheme
     */
    description?: string;
    /**
     * Expand options that include additional notification scheme details in the response.
     * @type {string}
     * @memberof NotificationScheme
     */
    expand?: string;
    /**
     * The ID of the notification scheme.
     * @type {number}
     * @memberof NotificationScheme
     */
    id?: number;
    /**
     * The name of the notification scheme.
     * @type {string}
     * @memberof NotificationScheme
     */
    name?: string;
    /**
     * The notification events and associated recipients.
     * @type {Array<NotificationSchemeEvent>}
     * @memberof NotificationScheme
     */
    notificationSchemeEvents?: Array<NotificationSchemeEvent>;
    /**
     * The list of project IDs associated with the notification scheme.
     * @type {Array<number>}
     * @memberof NotificationScheme
     */
    projects?: Array<number>;
    /**
     * The scope of the notification scheme.
     * @type {Scope}
     * @memberof NotificationScheme
     */
    scope?: Scope;
    /**
     * 
     * @type {string}
     * @memberof NotificationScheme
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface NotificationSchemeAndProjectMappingJsonBean
 */
export interface NotificationSchemeAndProjectMappingJsonBean {
    /**
     * 
     * @type {string}
     * @memberof NotificationSchemeAndProjectMappingJsonBean
     */
    notificationSchemeId?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSchemeAndProjectMappingJsonBean
     */
    projectId?: string;
}
/**
 * Details about a notification scheme event.
 * @export
 * @interface NotificationSchemeEvent
 */
export interface NotificationSchemeEvent {
    /**
     * 
     * @type {NotificationEvent}
     * @memberof NotificationSchemeEvent
     */
    event?: NotificationEvent;
    /**
     * 
     * @type {Array<EventNotification>}
     * @memberof NotificationSchemeEvent
     */
    notifications?: Array<EventNotification>;
}
/**
 * Details of a notification scheme event.
 * @export
 * @interface NotificationSchemeEventDetails
 */
export interface NotificationSchemeEventDetails {
    [key: string]: any | any;
    /**
     * The ID of the event.
     * @type {NotificationSchemeEventTypeId}
     * @memberof NotificationSchemeEventDetails
     */
    event: NotificationSchemeEventTypeId;
    /**
     * The list of notifications mapped to a specified event.
     * @type {Array<NotificationSchemeNotificationDetails>}
     * @memberof NotificationSchemeEventDetails
     */
    notifications: Array<NotificationSchemeNotificationDetails>;
}
/**
 * The ID of an event that is being mapped to notifications.
 * @export
 * @interface NotificationSchemeEventTypeId
 */
export interface NotificationSchemeEventTypeId {
    [key: string]: any | any;
    /**
     * The ID of the notification scheme event.
     * @type {string}
     * @memberof NotificationSchemeEventTypeId
     */
    id: string;
}
/**
 * The ID of a notification scheme.
 * @export
 * @interface NotificationSchemeId
 */
export interface NotificationSchemeId {
    [key: string]: any | any;
    /**
     * The ID of a notification scheme.
     * @type {string}
     * @memberof NotificationSchemeId
     */
    readonly id: string;
}
/**
 * Details of a notification within a notification scheme.
 * @export
 * @interface NotificationSchemeNotificationDetails
 */
export interface NotificationSchemeNotificationDetails {
    [key: string]: any | any;
    /**
     * The notification type, e.g `CurrentAssignee`, `Group`, `EmailAddress`.
     * @type {string}
     * @memberof NotificationSchemeNotificationDetails
     */
    notificationType: string;
    /**
     * The value corresponding to the specified notification type.
     * @type {string}
     * @memberof NotificationSchemeNotificationDetails
     */
    parameter?: string;
}
/**
 * 
 * @export
 * @interface OldToNewSecurityLevelMappingsBean
 */
export interface OldToNewSecurityLevelMappingsBean {
    /**
     * The new issue security level ID. Providing null will clear the assigned old level from issues.
     * @type {string}
     * @memberof OldToNewSecurityLevelMappingsBean
     */
    newLevelId: string;
    /**
     * The old issue security level ID. Providing null will remap all issues without any assigned levels.
     * @type {string}
     * @memberof OldToNewSecurityLevelMappingsBean
     */
    oldLevelId: string;
}
/**
 * 
 * @export
 * @interface OperationMessage
 */
export interface OperationMessage {
    /**
     * The human-readable message that describes the result.
     * @type {string}
     * @memberof OperationMessage
     */
    message: string;
    /**
     * The status code of the response.
     * @type {number}
     * @memberof OperationMessage
     */
    statusCode: number;
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
 * An ordered list of custom field option IDs and information on where to move them.
 * @export
 * @interface OrderOfCustomFieldOptions
 */
export interface OrderOfCustomFieldOptions {
    /**
     * The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.
     * @type {string}
     * @memberof OrderOfCustomFieldOptions
     */
    after?: string;
    /**
     * A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
     * @type {Array<string>}
     * @memberof OrderOfCustomFieldOptions
     */
    customFieldOptionIds: Array<string>;
    /**
     * The position the custom field options should be moved to. Required if `after` isn't provided.
     * @type {string}
     * @memberof OrderOfCustomFieldOptions
     */
    position?: OrderOfCustomFieldOptionsPositionEnum;
}


/**
 * @export
 */
export const OrderOfCustomFieldOptionsPositionEnum = {
    First: 'First',
    Last: 'Last'
} as const;
export type OrderOfCustomFieldOptionsPositionEnum = typeof OrderOfCustomFieldOptionsPositionEnum[keyof typeof OrderOfCustomFieldOptionsPositionEnum];

/**
 * An ordered list of issue type IDs and information about where to move them.
 * @export
 * @interface OrderOfIssueTypes
 */
export interface OrderOfIssueTypes {
    /**
     * The ID of the issue type to place the moved issue types after. Required if `position` isn't provided.
     * @type {string}
     * @memberof OrderOfIssueTypes
     */
    after?: string;
    /**
     * A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move.
     * @type {Array<string>}
     * @memberof OrderOfIssueTypes
     */
    issueTypeIds: Array<string>;
    /**
     * The position the issue types should be moved to. Required if `after` isn't provided.
     * @type {string}
     * @memberof OrderOfIssueTypes
     */
    position?: OrderOfIssueTypesPositionEnum;
}


/**
 * @export
 */
export const OrderOfIssueTypesPositionEnum = {
    First: 'First',
    Last: 'Last'
} as const;
export type OrderOfIssueTypesPositionEnum = typeof OrderOfIssueTypesPositionEnum[keyof typeof OrderOfIssueTypesPositionEnum];

/**
 * A page of items.
 * @export
 * @interface PageBean2ComponentJsonBean
 */
export interface PageBean2ComponentJsonBean {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ComponentJsonBean>}
     * @memberof PageBean2ComponentJsonBean
     */
    readonly values?: Array<ComponentJsonBean>;
}
/**
 * A page of items.
 * @export
 * @interface PageBean2JqlFunctionPrecomputationBean
 */
export interface PageBean2JqlFunctionPrecomputationBean {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<JqlFunctionPrecomputationBean>}
     * @memberof PageBean2JqlFunctionPrecomputationBean
     */
    readonly values?: Array<JqlFunctionPrecomputationBean>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanBulkContextualConfiguration
 */
export interface PageBeanBulkContextualConfiguration {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<BulkContextualConfiguration>}
     * @memberof PageBeanBulkContextualConfiguration
     */
    readonly values?: Array<BulkContextualConfiguration>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanChangelog
 */
export interface PageBeanChangelog {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanChangelog
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanChangelog
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanChangelog
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanChangelog
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanChangelog
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanChangelog
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Changelog>}
     * @memberof PageBeanChangelog
     */
    readonly values?: Array<Changelog>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanComment
 */
export interface PageBeanComment {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanComment
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanComment
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanComment
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanComment
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanComment
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanComment
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Comment>}
     * @memberof PageBeanComment
     */
    readonly values?: Array<Comment>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanComponentWithIssueCount
 */
export interface PageBeanComponentWithIssueCount {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ComponentWithIssueCount>}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly values?: Array<ComponentWithIssueCount>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanContext
 */
export interface PageBeanContext {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContext
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContext
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContext
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContext
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanContext
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanContext
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Context>}
     * @memberof PageBeanContext
     */
    readonly values?: Array<Context>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanContextForProjectAndIssueType
 */
export interface PageBeanContextForProjectAndIssueType {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ContextForProjectAndIssueType>}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly values?: Array<ContextForProjectAndIssueType>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanContextualConfiguration
 */
export interface PageBeanContextualConfiguration {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContextualConfiguration
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContextualConfiguration
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContextualConfiguration
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContextualConfiguration
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanContextualConfiguration
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanContextualConfiguration
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ContextualConfiguration>}
     * @memberof PageBeanContextualConfiguration
     */
    readonly values?: Array<ContextualConfiguration>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanCustomFieldContext
 */
export interface PageBeanCustomFieldContext {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContext
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContext
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContext
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContext
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContext
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContext
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<CustomFieldContext>}
     * @memberof PageBeanCustomFieldContext
     */
    readonly values?: Array<CustomFieldContext>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanCustomFieldContextDefaultValue
 */
export interface PageBeanCustomFieldContextDefaultValue {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<CustomFieldContextDefaultValue>}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly values?: Array<CustomFieldContextDefaultValue>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanCustomFieldContextOption
 */
export interface PageBeanCustomFieldContextOption {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<CustomFieldContextOption>}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly values?: Array<CustomFieldContextOption>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanCustomFieldContextProjectMapping
 */
export interface PageBeanCustomFieldContextProjectMapping {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<CustomFieldContextProjectMapping>}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly values?: Array<CustomFieldContextProjectMapping>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanDashboard
 */
export interface PageBeanDashboard {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanDashboard
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanDashboard
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanDashboard
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanDashboard
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanDashboard
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanDashboard
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Dashboard>}
     * @memberof PageBeanDashboard
     */
    readonly values?: Array<Dashboard>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanField
 */
export interface PageBeanField {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanField
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanField
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanField
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanField
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanField
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanField
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Field>}
     * @memberof PageBeanField
     */
    readonly values?: Array<Field>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFieldConfigurationDetails
 */
export interface PageBeanFieldConfigurationDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FieldConfigurationDetails>}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly values?: Array<FieldConfigurationDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFieldConfigurationIssueTypeItem
 */
export interface PageBeanFieldConfigurationIssueTypeItem {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FieldConfigurationIssueTypeItem>}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly values?: Array<FieldConfigurationIssueTypeItem>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFieldConfigurationItem
 */
export interface PageBeanFieldConfigurationItem {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FieldConfigurationItem>}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly values?: Array<FieldConfigurationItem>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFieldConfigurationScheme
 */
export interface PageBeanFieldConfigurationScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FieldConfigurationScheme>}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly values?: Array<FieldConfigurationScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFieldConfigurationSchemeProjects
 */
export interface PageBeanFieldConfigurationSchemeProjects {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FieldConfigurationSchemeProjects>}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly values?: Array<FieldConfigurationSchemeProjects>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanFilterDetails
 */
export interface PageBeanFilterDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFilterDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFilterDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFilterDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFilterDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanFilterDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanFilterDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<FilterDetails>}
     * @memberof PageBeanFilterDetails
     */
    readonly values?: Array<FilterDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanGroupDetails
 */
export interface PageBeanGroupDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanGroupDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanGroupDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanGroupDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanGroupDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanGroupDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanGroupDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<GroupDetails>}
     * @memberof PageBeanGroupDetails
     */
    readonly values?: Array<GroupDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueFieldOption
 */
export interface PageBeanIssueFieldOption {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueFieldOption
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueFieldOption
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueFieldOption
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueFieldOption
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueFieldOption
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueFieldOption
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueFieldOption>}
     * @memberof PageBeanIssueFieldOption
     */
    readonly values?: Array<IssueFieldOption>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueSecurityLevelMember
 */
export interface PageBeanIssueSecurityLevelMember {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueSecurityLevelMember>}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly values?: Array<IssueSecurityLevelMember>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueSecuritySchemeToProjectMapping
 */
export interface PageBeanIssueSecuritySchemeToProjectMapping {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueSecuritySchemeToProjectMapping>}
     * @memberof PageBeanIssueSecuritySchemeToProjectMapping
     */
    readonly values?: Array<IssueSecuritySchemeToProjectMapping>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeScheme
 */
export interface PageBeanIssueTypeScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeScheme>}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly values?: Array<IssueTypeScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeSchemeMapping
 */
export interface PageBeanIssueTypeSchemeMapping {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeSchemeMapping>}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly values?: Array<IssueTypeSchemeMapping>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeSchemeProjects
 */
export interface PageBeanIssueTypeSchemeProjects {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeSchemeProjects>}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly values?: Array<IssueTypeSchemeProjects>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeScreenScheme
 */
export interface PageBeanIssueTypeScreenScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeScreenScheme>}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly values?: Array<IssueTypeScreenScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeScreenSchemeItem
 */
export interface PageBeanIssueTypeScreenSchemeItem {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeScreenSchemeItem>}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly values?: Array<IssueTypeScreenSchemeItem>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeScreenSchemesProjects
 */
export interface PageBeanIssueTypeScreenSchemesProjects {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeScreenSchemesProjects>}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly values?: Array<IssueTypeScreenSchemesProjects>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanIssueTypeToContextMapping
 */
export interface PageBeanIssueTypeToContextMapping {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<IssueTypeToContextMapping>}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly values?: Array<IssueTypeToContextMapping>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanNotificationScheme
 */
export interface PageBeanNotificationScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanNotificationScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanNotificationScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanNotificationScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanNotificationScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanNotificationScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanNotificationScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<NotificationScheme>}
     * @memberof PageBeanNotificationScheme
     */
    readonly values?: Array<NotificationScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanNotificationSchemeAndProjectMappingJsonBean
 */
export interface PageBeanNotificationSchemeAndProjectMappingJsonBean {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<NotificationSchemeAndProjectMappingJsonBean>}
     * @memberof PageBeanNotificationSchemeAndProjectMappingJsonBean
     */
    readonly values?: Array<NotificationSchemeAndProjectMappingJsonBean>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanPriority
 */
export interface PageBeanPriority {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanPriority
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanPriority
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanPriority
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanPriority
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanPriority
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanPriority
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Priority>}
     * @memberof PageBeanPriority
     */
    readonly values?: Array<Priority>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
 */
export interface PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<PrioritySchemeWithPaginatedPrioritiesAndProjects>}
     * @memberof PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    readonly values?: Array<PrioritySchemeWithPaginatedPrioritiesAndProjects>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanPriorityWithSequence
 */
export interface PageBeanPriorityWithSequence {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<PriorityWithSequence>}
     * @memberof PageBeanPriorityWithSequence
     */
    readonly values?: Array<PriorityWithSequence>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanProject
 */
export interface PageBeanProject {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanProject
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanProject
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanProject
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanProject
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanProject
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanProject
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Project>}
     * @memberof PageBeanProject
     */
    readonly values?: Array<Project>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanProjectDetails
 */
export interface PageBeanProjectDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanProjectDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanProjectDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanProjectDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanProjectDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanProjectDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanProjectDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ProjectDetails>}
     * @memberof PageBeanProjectDetails
     */
    readonly values?: Array<ProjectDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanResolutionJsonBean
 */
export interface PageBeanResolutionJsonBean {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ResolutionJsonBean>}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly values?: Array<ResolutionJsonBean>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanScreen
 */
export interface PageBeanScreen {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreen
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreen
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreen
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreen
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanScreen
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanScreen
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Screen>}
     * @memberof PageBeanScreen
     */
    readonly values?: Array<Screen>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanScreenScheme
 */
export interface PageBeanScreenScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreenScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreenScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreenScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreenScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanScreenScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanScreenScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ScreenScheme>}
     * @memberof PageBeanScreenScheme
     */
    readonly values?: Array<ScreenScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanScreenWithTab
 */
export interface PageBeanScreenWithTab {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreenWithTab
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreenWithTab
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreenWithTab
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreenWithTab
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanScreenWithTab
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanScreenWithTab
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<ScreenWithTab>}
     * @memberof PageBeanScreenWithTab
     */
    readonly values?: Array<ScreenWithTab>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanSecurityLevel
 */
export interface PageBeanSecurityLevel {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanSecurityLevel
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanSecurityLevel
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanSecurityLevel
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanSecurityLevel
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanSecurityLevel
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanSecurityLevel
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<SecurityLevel>}
     * @memberof PageBeanSecurityLevel
     */
    readonly values?: Array<SecurityLevel>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanSecurityLevelMember
 */
export interface PageBeanSecurityLevelMember {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<SecurityLevelMember>}
     * @memberof PageBeanSecurityLevelMember
     */
    readonly values?: Array<SecurityLevelMember>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanSecuritySchemeWithProjects
 */
export interface PageBeanSecuritySchemeWithProjects {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<SecuritySchemeWithProjects>}
     * @memberof PageBeanSecuritySchemeWithProjects
     */
    readonly values?: Array<SecuritySchemeWithProjects>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanString
 */
export interface PageBeanString {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanString
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanString
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanString
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanString
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanString
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanString
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<string>}
     * @memberof PageBeanString
     */
    readonly values?: Array<string>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanUiModificationDetails
 */
export interface PageBeanUiModificationDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUiModificationDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUiModificationDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUiModificationDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUiModificationDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanUiModificationDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanUiModificationDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<UiModificationDetails>}
     * @memberof PageBeanUiModificationDetails
     */
    readonly values?: Array<UiModificationDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanUser
 */
export interface PageBeanUser {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUser
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUser
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUser
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUser
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanUser
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanUser
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<User>}
     * @memberof PageBeanUser
     */
    readonly values?: Array<User>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanUserDetails
 */
export interface PageBeanUserDetails {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUserDetails
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUserDetails
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUserDetails
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUserDetails
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanUserDetails
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanUserDetails
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<UserDetails>}
     * @memberof PageBeanUserDetails
     */
    readonly values?: Array<UserDetails>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanUserKey
 */
export interface PageBeanUserKey {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUserKey
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUserKey
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUserKey
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUserKey
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanUserKey
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanUserKey
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<UserKey>}
     * @memberof PageBeanUserKey
     */
    readonly values?: Array<UserKey>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanVersion
 */
export interface PageBeanVersion {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanVersion
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanVersion
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanVersion
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanVersion
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanVersion
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanVersion
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Version>}
     * @memberof PageBeanVersion
     */
    readonly values?: Array<Version>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanWebhook
 */
export interface PageBeanWebhook {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWebhook
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWebhook
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWebhook
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWebhook
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanWebhook
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanWebhook
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Webhook>}
     * @memberof PageBeanWebhook
     */
    readonly values?: Array<Webhook>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanWorkflow
 */
export interface PageBeanWorkflow {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflow
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflow
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflow
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflow
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanWorkflow
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanWorkflow
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<Workflow>}
     * @memberof PageBeanWorkflow
     */
    readonly values?: Array<Workflow>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanWorkflowScheme
 */
export interface PageBeanWorkflowScheme {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflowScheme
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflowScheme
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflowScheme
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflowScheme
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanWorkflowScheme
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanWorkflowScheme
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<WorkflowScheme>}
     * @memberof PageBeanWorkflowScheme
     */
    readonly values?: Array<WorkflowScheme>;
}
/**
 * A page of items.
 * @export
 * @interface PageBeanWorkflowTransitionRules
 */
export interface PageBeanWorkflowTransitionRules {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly total?: number;
    /**
     * The list of items.
     * @type {Array<WorkflowTransitionRules>}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly values?: Array<WorkflowTransitionRules>;
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
 * A page of comments.
 * @export
 * @interface PageOfComments
 */
export interface PageOfComments {
    [key: string]: any | any;
    /**
     * The list of comments.
     * @type {Array<Comment>}
     * @memberof PageOfComments
     */
    readonly comments?: Array<Comment>;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly total?: number;
}
/**
 * A page of CreateMetaIssueType with Field.
 * @export
 * @interface PageOfCreateMetaIssueTypeWithField
 */
export interface PageOfCreateMetaIssueTypeWithField {
    [key: string]: any | any;
    /**
     * The collection of FieldCreateMetaBeans.
     * @type {Array<FieldCreateMetadata>}
     * @memberof PageOfCreateMetaIssueTypeWithField
     */
    readonly fields?: Array<FieldCreateMetadata>;
    /**
     * The maximum number of items to return per page.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypeWithField
     */
    readonly maxResults?: number;
    /**
     * 
     * @type {Array<FieldCreateMetadata>}
     * @memberof PageOfCreateMetaIssueTypeWithField
     */
    results?: Array<FieldCreateMetadata>;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypeWithField
     */
    readonly startAt?: number;
    /**
     * The total number of items in all pages.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypeWithField
     */
    readonly total?: number;
}
/**
 * A page of CreateMetaIssueTypes.
 * @export
 * @interface PageOfCreateMetaIssueTypes
 */
export interface PageOfCreateMetaIssueTypes {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<IssueTypeIssueCreateMetadata>}
     * @memberof PageOfCreateMetaIssueTypes
     */
    createMetaIssueType?: Array<IssueTypeIssueCreateMetadata>;
    /**
     * The list of CreateMetaIssueType.
     * @type {Array<IssueTypeIssueCreateMetadata>}
     * @memberof PageOfCreateMetaIssueTypes
     */
    readonly issueTypes?: Array<IssueTypeIssueCreateMetadata>;
    /**
     * The maximum number of items to return per page.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypes
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypes
     */
    readonly startAt?: number;
    /**
     * The total number of items in all pages.
     * @type {number}
     * @memberof PageOfCreateMetaIssueTypes
     */
    readonly total?: number;
}
/**
 * A page containing dashboard details.
 * @export
 * @interface PageOfDashboards
 */
export interface PageOfDashboards {
    /**
     * List of dashboards.
     * @type {Array<Dashboard>}
     * @memberof PageOfDashboards
     */
    readonly dashboards?: Array<Dashboard>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly maxResults?: number;
    /**
     * The URL of the next page of results, if any.
     * @type {string}
     * @memberof PageOfDashboards
     */
    readonly next?: string;
    /**
     * The URL of the previous page of results, if any.
     * @type {string}
     * @memberof PageOfDashboards
     */
    readonly prev?: string;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly startAt?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly total?: number;
}
/**
 * 
 * @export
 * @interface PageOfStatuses
 */
export interface PageOfStatuses {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageOfStatuses
     */
    isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageOfStatuses
     */
    maxResults?: number;
    /**
     * The URL of the next page of results, if any.
     * @type {string}
     * @memberof PageOfStatuses
     */
    nextPage?: string;
    /**
     * The URL of this page.
     * @type {string}
     * @memberof PageOfStatuses
     */
    self?: string;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfStatuses
     */
    startAt?: number;
    /**
     * Number of items that satisfy the search.
     * @type {number}
     * @memberof PageOfStatuses
     */
    total?: number;
    /**
     * The list of items.
     * @type {Array<JiraStatus>}
     * @memberof PageOfStatuses
     */
    values?: Array<JiraStatus>;
}
/**
 * Paginated list of worklog details
 * @export
 * @interface PageOfWorklogs
 */
export interface PageOfWorklogs {
    [key: string]: any | any;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfWorklogs
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfWorklogs
     */
    readonly startAt?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof PageOfWorklogs
     */
    readonly total?: number;
    /**
     * List of worklogs.
     * @type {Array<Worklog>}
     * @memberof PageOfWorklogs
     */
    readonly worklogs?: Array<Worklog>;
}
/**
 * 
 * @export
 * @interface PageWithCursorGetPlanResponseForPage
 */
export interface PageWithCursorGetPlanResponseForPage {
    /**
     * 
     * @type {string}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    cursor?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    last?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    nextPageCursor?: string;
    /**
     * 
     * @type {number}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    total?: number;
    /**
     * 
     * @type {Array<GetPlanResponseForPage>}
     * @memberof PageWithCursorGetPlanResponseForPage
     */
    values?: Array<GetPlanResponseForPage>;
}
/**
 * 
 * @export
 * @interface PageWithCursorGetTeamResponseForPage
 */
export interface PageWithCursorGetTeamResponseForPage {
    /**
     * 
     * @type {string}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    cursor?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    last?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    nextPageCursor?: string;
    /**
     * 
     * @type {number}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    total?: number;
    /**
     * 
     * @type {Array<GetTeamResponseForPage>}
     * @memberof PageWithCursorGetTeamResponseForPage
     */
    values?: Array<GetTeamResponseForPage>;
}
/**
 * A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.
 * @export
 * @interface PagedListUserDetailsApplicationUser
 */
export interface PagedListUserDetailsApplicationUser {
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly endIndex?: number;
    /**
     * The list of items.
     * @type {Array<UserDetails>}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly items?: Array<UserDetails>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly maxResults?: number;
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly size?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly startIndex?: number;
}
/**
 * 
 * @export
 * @interface PaginatedResponseComment
 */
export interface PaginatedResponseComment {
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseComment
     */
    maxResults?: number;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof PaginatedResponseComment
     */
    results?: Array<Comment>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseComment
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseComment
     */
    total?: number;
}
/**
 * 
 * @export
 * @interface PaginatedResponseFieldCreateMetadata
 */
export interface PaginatedResponseFieldCreateMetadata {
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseFieldCreateMetadata
     */
    maxResults?: number;
    /**
     * 
     * @type {Array<FieldCreateMetadata>}
     * @memberof PaginatedResponseFieldCreateMetadata
     */
    results?: Array<FieldCreateMetadata>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseFieldCreateMetadata
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseFieldCreateMetadata
     */
    total?: number;
}
/**
 * 
 * @export
 * @interface PaginatedResponseIssueTypeIssueCreateMetadata
 */
export interface PaginatedResponseIssueTypeIssueCreateMetadata {
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseIssueTypeIssueCreateMetadata
     */
    maxResults?: number;
    /**
     * 
     * @type {Array<IssueTypeIssueCreateMetadata>}
     * @memberof PaginatedResponseIssueTypeIssueCreateMetadata
     */
    results?: Array<IssueTypeIssueCreateMetadata>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseIssueTypeIssueCreateMetadata
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseIssueTypeIssueCreateMetadata
     */
    total?: number;
}
/**
 * A list of parsed JQL queries.
 * @export
 * @interface ParsedJqlQueries
 */
export interface ParsedJqlQueries {
    /**
     * A list of parsed JQL queries.
     * @type {Array<ParsedJqlQuery>}
     * @memberof ParsedJqlQueries
     */
    queries: Array<ParsedJqlQuery>;
}
/**
 * Details of a parsed JQL query.
 * @export
 * @interface ParsedJqlQuery
 */
export interface ParsedJqlQuery {
    /**
     * The list of syntax or validation errors.
     * @type {Set<string>}
     * @memberof ParsedJqlQuery
     */
    errors?: Array<string>;
    /**
     * The JQL query that was parsed and validated.
     * @type {string}
     * @memberof ParsedJqlQuery
     */
    query: string;
    /**
     * The syntax tree of the query. Empty if the query was invalid.
     * @type {JqlQuery}
     * @memberof ParsedJqlQuery
     */
    structure?: JqlQuery;
}
/**
 * Details for permissions of shareable entities
 * @export
 * @interface PermissionDetails
 */
export interface PermissionDetails {
    /**
     * The edit permissions for the shareable entities.
     * @type {Array<SharePermission>}
     * @memberof PermissionDetails
     */
    editPermissions: Array<SharePermission>;
    /**
     * The share permissions for the shareable entities.
     * @type {Array<SharePermission>}
     * @memberof PermissionDetails
     */
    sharePermissions: Array<SharePermission>;
}
/**
 * Details about a permission granted to a user or group.
 * @export
 * @interface PermissionGrant
 */
export interface PermissionGrant {
    [key: string]: any | any;
    /**
     * The user or group being granted the permission. It consists of a `type`, a type-dependent `parameter` and a type-dependent `value`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
     * @type {PermissionHolder}
     * @memberof PermissionGrant
     */
    holder?: PermissionHolder;
    /**
     * The ID of the permission granted details.
     * @type {number}
     * @memberof PermissionGrant
     */
    readonly id?: number;
    /**
     * The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.
     * @type {string}
     * @memberof PermissionGrant
     */
    permission?: string;
    /**
     * The URL of the permission granted details.
     * @type {string}
     * @memberof PermissionGrant
     */
    readonly self?: string;
}
/**
 * List of permission grants.
 * @export
 * @interface PermissionGrants
 */
export interface PermissionGrants {
    /**
     * Expand options that include additional permission grant details in the response.
     * @type {string}
     * @memberof PermissionGrants
     */
    readonly expand?: string;
    /**
     * Permission grants list.
     * @type {Array<PermissionGrant>}
     * @memberof PermissionGrants
     */
    readonly permissions?: Array<PermissionGrant>;
}
/**
 * Details of a user, group, field, or project role that holds a permission. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 * @export
 * @interface PermissionHolder
 */
export interface PermissionHolder {
    /**
     * Expand options that include additional permission holder details in the response.
     * @type {string}
     * @memberof PermissionHolder
     */
    readonly expand?: string;
    /**
     * As a group's name can change, use of `value` is recommended. The identifier associated withthe `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionHolder
     */
    parameter?: string;
    /**
     * The type of permission holder.
     * @type {string}
     * @memberof PermissionHolder
     */
    type: string;
    /**
     * The identifier associated with the `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionHolder
     */
    value?: string;
}
/**
 * Details of a permission scheme.
 * @export
 * @interface PermissionScheme
 */
export interface PermissionScheme {
    [key: string]: any | any;
    /**
     * A description for the permission scheme.
     * @type {string}
     * @memberof PermissionScheme
     */
    description?: string;
    /**
     * The expand options available for the permission scheme.
     * @type {string}
     * @memberof PermissionScheme
     */
    readonly expand?: string;
    /**
     * The ID of the permission scheme.
     * @type {number}
     * @memberof PermissionScheme
     */
    readonly id?: number;
    /**
     * The name of the permission scheme. Must be unique.
     * @type {string}
     * @memberof PermissionScheme
     */
    name: string;
    /**
     * The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information.
     * @type {Array<PermissionGrant>}
     * @memberof PermissionScheme
     */
    permissions?: Array<PermissionGrant>;
    /**
     * The scope of the permission scheme.
     * @type {Scope}
     * @memberof PermissionScheme
     */
    scope?: Scope;
    /**
     * The URL of the permission scheme.
     * @type {string}
     * @memberof PermissionScheme
     */
    readonly self?: string;
}
/**
 * List of all permission schemes.
 * @export
 * @interface PermissionSchemes
 */
export interface PermissionSchemes {
    /**
     * Permission schemes list.
     * @type {Array<PermissionScheme>}
     * @memberof PermissionSchemes
     */
    readonly permissionSchemes?: Array<PermissionScheme>;
}
/**
 * Details about permissions.
 * @export
 * @interface Permissions
 */
export interface Permissions {
    /**
     * List of permissions.
     * @type {{ [key: string]: UserPermission; }}
     * @memberof Permissions
     */
    readonly permissions?: { [key: string]: UserPermission; };
}
/**
 * 
 * @export
 * @interface PermissionsKeysBean
 */
export interface PermissionsKeysBean {
    /**
     * A list of permission keys.
     * @type {Array<string>}
     * @memberof PermissionsKeysBean
     */
    permissions: Array<string>;
}
/**
 * A list of projects in which a user is granted permissions.
 * @export
 * @interface PermittedProjects
 */
export interface PermittedProjects {
    /**
     * A list of projects.
     * @type {Array<ProjectIdentifierBean>}
     * @memberof PermittedProjects
     */
    readonly projects?: Array<ProjectIdentifierBean>;
}
/**
 * An issue priority.
 * @export
 * @interface Priority
 */
export interface Priority {
    [key: string]: any | any;
    /**
     * The avatarId of the avatar for the issue priority. This parameter is nullable and when set, this avatar references the universal avatar APIs.
     * @type {number}
     * @memberof Priority
     */
    avatarId?: number;
    /**
     * The description of the issue priority.
     * @type {string}
     * @memberof Priority
     */
    description?: string;
    /**
     * The URL of the icon for the issue priority.
     * @type {string}
     * @memberof Priority
     */
    iconUrl?: string;
    /**
     * The ID of the issue priority.
     * @type {string}
     * @memberof Priority
     */
    id?: string;
    /**
     * Whether this priority is the default.
     * @type {boolean}
     * @memberof Priority
     */
    isDefault?: boolean;
    /**
     * The name of the issue priority.
     * @type {string}
     * @memberof Priority
     */
    name?: string;
    /**
     * Priority schemes associated with the issue priority.
     * @type {ExpandPrioritySchemePage}
     * @memberof Priority
     */
    schemes?: ExpandPrioritySchemePage;
    /**
     * The URL of the issue priority.
     * @type {string}
     * @memberof Priority
     */
    self?: string;
    /**
     * The color used to indicate the issue priority.
     * @type {string}
     * @memberof Priority
     */
    statusColor?: string;
}
/**
 * The ID of an issue priority.
 * @export
 * @interface PriorityId
 */
export interface PriorityId {
    [key: string]: any | any;
    /**
     * The ID of the issue priority.
     * @type {string}
     * @memberof PriorityId
     */
    readonly id: string;
}
/**
 * Mapping of issue priorities for changes in priority schemes.
 * @export
 * @interface PriorityMapping
 */
export interface PriorityMapping {
    /**
     * The mapping of priorities for issues being migrated **into** this priority scheme. Key is the old priority ID, value is the new priority ID (must exist in this priority scheme).
     * 
     * E.g. The current priority scheme has priority ID `10001`. Issues with priority ID `10000` are being migrated into this priority scheme will need mapping to new priorities. The `in` mapping would be `{"10000": 10001}`.
     * @type {{ [key: string]: number; }}
     * @memberof PriorityMapping
     */
    _in?: { [key: string]: number; };
    /**
     * The mapping of priorities for issues being migrated **out of** this priority scheme. Key is the old priority ID (must exist in this priority scheme), value is the new priority ID (must exist in the default priority scheme). Required for updating an existing priority scheme. Not used when creating a new priority scheme.
     * 
     * E.g. The current priority scheme has priority ID `10001`. Issues with priority ID `10001` are being migrated out of this priority scheme will need mapping to new priorities. The `out` mapping would be `{"10001": 10000}`.
     * @type {{ [key: string]: number; }}
     * @memberof PriorityMapping
     */
    out?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface PrioritySchemeChangesWithoutMappings
 */
export interface PrioritySchemeChangesWithoutMappings {
    /**
     * Affected entity ids.
     * @type {Array<number>}
     * @memberof PrioritySchemeChangesWithoutMappings
     */
    ids: Array<number>;
}
/**
 * The ID of a priority scheme.
 * @export
 * @interface PrioritySchemeId
 */
export interface PrioritySchemeId {
    /**
     * The ID of the priority scheme.
     * @type {string}
     * @memberof PrioritySchemeId
     */
    readonly id?: string;
    /**
     * The in-progress issue migration task.
     * @type {TaskProgressBeanJsonNode}
     * @memberof PrioritySchemeId
     */
    readonly task?: TaskProgressBeanJsonNode;
}
/**
 * A priority scheme with paginated priorities and projects.
 * @export
 * @interface PrioritySchemeWithPaginatedPrioritiesAndProjects
 */
export interface PrioritySchemeWithPaginatedPrioritiesAndProjects {
    [key: string]: any | any;
    /**
     * 
     * @type {boolean}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    default?: boolean;
    /**
     * The ID of the default issue priority.
     * @type {string}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    defaultPriorityId?: string;
    /**
     * The description of the priority scheme
     * @type {string}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    description?: string;
    /**
     * The ID of the priority scheme.
     * @type {string}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    isDefault?: boolean;
    /**
     * The name of the priority scheme
     * @type {string}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    name: string;
    /**
     * The paginated list of priorities.
     * @type {PageBeanPriorityWithSequence}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    priorities?: PageBeanPriorityWithSequence;
    /**
     * The paginated list of projects.
     * @type {PageBeanProjectDetails}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    projects?: PageBeanProjectDetails;
    /**
     * The URL of the priority scheme.
     * @type {string}
     * @memberof PrioritySchemeWithPaginatedPrioritiesAndProjects
     */
    self?: string;
}
/**
 * An issue priority with sequence information.
 * @export
 * @interface PriorityWithSequence
 */
export interface PriorityWithSequence {
    /**
     * The description of the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    description?: string;
    /**
     * The URL of the icon for the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    iconUrl?: string;
    /**
     * The ID of the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    id?: string;
    /**
     * Whether this priority is the default.
     * @type {boolean}
     * @memberof PriorityWithSequence
     */
    isDefault?: boolean;
    /**
     * The name of the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    name?: string;
    /**
     * The URL of the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    self?: string;
    /**
     * The sequence of the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    sequence?: string;
    /**
     * The color used to indicate the issue priority.
     * @type {string}
     * @memberof PriorityWithSequence
     */
    statusColor?: string;
}
/**
 * Details about a project.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * Whether the project is archived.
     * @type {boolean}
     * @memberof Project
     */
    readonly archived?: boolean;
    /**
     * The user who archived the project.
     * @type {User}
     * @memberof Project
     */
    readonly archivedBy?: User;
    /**
     * The date when the project was archived.
     * @type {string}
     * @memberof Project
     */
    readonly archivedDate?: string;
    /**
     * The default assignee when creating issues for this project.
     * @type {string}
     * @memberof Project
     */
    readonly assigneeType?: ProjectAssigneeTypeEnum;
    /**
     * The URLs of the project's avatars.
     * @type {AvatarUrlsBean}
     * @memberof Project
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * List of the components contained in the project.
     * @type {Array<ProjectComponent>}
     * @memberof Project
     */
    readonly components?: Array<ProjectComponent>;
    /**
     * Whether the project is marked as deleted.
     * @type {boolean}
     * @memberof Project
     */
    readonly deleted?: boolean;
    /**
     * The user who marked the project as deleted.
     * @type {User}
     * @memberof Project
     */
    readonly deletedBy?: User;
    /**
     * The date when the project was marked as deleted.
     * @type {string}
     * @memberof Project
     */
    readonly deletedDate?: string;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof Project
     */
    readonly description?: string;
    /**
     * An email address associated with the project.
     * @type {string}
     * @memberof Project
     */
    email?: string;
    /**
     * Expand options that include additional project details in the response.
     * @type {string}
     * @memberof Project
     */
    readonly expand?: string;
    /**
     * Whether the project is selected as a favorite.
     * @type {boolean}
     * @memberof Project
     */
    favourite?: boolean;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof Project
     */
    id?: string;
    /**
     * Insights about the project.
     * @type {ProjectInsight}
     * @memberof Project
     */
    readonly insight?: ProjectInsight;
    /**
     * Whether the project is private from the user's perspective. This means the user can't see the project or any associated issues.
     * @type {boolean}
     * @memberof Project
     */
    readonly isPrivate?: boolean;
    /**
     * The issue type hierarchy for the project.
     * @type {Hierarchy}
     * @memberof Project
     */
    readonly issueTypeHierarchy?: Hierarchy;
    /**
     * List of the issue types available in the project.
     * @type {Array<IssueTypeDetails>}
     * @memberof Project
     */
    readonly issueTypes?: Array<IssueTypeDetails>;
    /**
     * The key of the project.
     * @type {string}
     * @memberof Project
     */
    readonly key?: string;
    /**
     * The project landing page info.
     * @type {ProjectLandingPageInfo}
     * @memberof Project
     */
    readonly landingPageInfo?: ProjectLandingPageInfo;
    /**
     * The username of the project lead.
     * @type {User}
     * @memberof Project
     */
    readonly lead?: User;
    /**
     * The name of the project.
     * @type {string}
     * @memberof Project
     */
    readonly name?: string;
    /**
     * User permissions on the project
     * @type {ProjectPermissions}
     * @memberof Project
     */
    readonly permissions?: ProjectPermissions;
    /**
     * The category the project belongs to.
     * @type {ProjectCategory}
     * @memberof Project
     */
    readonly projectCategory?: ProjectCategory;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof Project
     */
    readonly projectTypeKey?: ProjectProjectTypeKeyEnum;
    /**
     * Map of project properties
     * @type {{ [key: string]: any; }}
     * @memberof Project
     */
    readonly properties?: { [key: string]: any; };
    /**
     * The date when the project is deleted permanently.
     * @type {string}
     * @memberof Project
     */
    readonly retentionTillDate?: string;
    /**
     * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
     * @type {{ [key: string]: string; }}
     * @memberof Project
     */
    readonly roles?: { [key: string]: string; };
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof Project
     */
    readonly self?: string;
    /**
     * Whether the project is simplified.
     * @type {boolean}
     * @memberof Project
     */
    readonly simplified?: boolean;
    /**
     * The type of the project.
     * @type {string}
     * @memberof Project
     */
    readonly style?: ProjectStyleEnum;
    /**
     * A link to information about this project, such as project documentation.
     * @type {string}
     * @memberof Project
     */
    readonly url?: string;
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof Project
     */
    readonly uuid?: string;
    /**
     * The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
     * @type {Array<Version>}
     * @memberof Project
     */
    readonly versions?: Array<Version>;
}


/**
 * @export
 */
export const ProjectAssigneeTypeEnum = {
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type ProjectAssigneeTypeEnum = typeof ProjectAssigneeTypeEnum[keyof typeof ProjectAssigneeTypeEnum];

/**
 * @export
 */
export const ProjectProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type ProjectProjectTypeKeyEnum = typeof ProjectProjectTypeKeyEnum[keyof typeof ProjectProjectTypeKeyEnum];

/**
 * @export
 */
export const ProjectStyleEnum = {
    Classic: 'classic',
    NextGen: 'next-gen'
} as const;
export type ProjectStyleEnum = typeof ProjectStyleEnum[keyof typeof ProjectStyleEnum];

/**
 * A project and issueType ID pair that identifies a status mapping.
 * @export
 * @interface ProjectAndIssueTypePair
 */
export interface ProjectAndIssueTypePair {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof ProjectAndIssueTypePair
     */
    issueTypeId: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectAndIssueTypePair
     */
    projectId: string;
}
/**
 * List of project avatars.
 * @export
 * @interface ProjectAvatars
 */
export interface ProjectAvatars {
    /**
     * List of avatars added to Jira. These avatars may be deleted.
     * @type {Array<Avatar>}
     * @memberof ProjectAvatars
     */
    readonly custom?: Array<Avatar>;
    /**
     * List of avatars included with Jira. These avatars cannot be deleted.
     * @type {Array<Avatar>}
     * @memberof ProjectAvatars
     */
    readonly system?: Array<Avatar>;
}
/**
 * A project category.
 * @export
 * @interface ProjectCategory
 */
export interface ProjectCategory {
    /**
     * The description of the project category.
     * @type {string}
     * @memberof ProjectCategory
     */
    description?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof ProjectCategory
     */
    readonly id?: string;
    /**
     * The name of the project category. Required on create, optional on update.
     * @type {string}
     * @memberof ProjectCategory
     */
    name?: string;
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof ProjectCategory
     */
    readonly self?: string;
}
/**
 * Details about a project component.
 * @export
 * @interface ProjectComponent
 */
export interface ProjectComponent {
    /**
     * Compass component's ID. Can't be updated. Not required for creating a Project Component.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly ari?: string;
    /**
     * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
     * @type {User}
     * @memberof ProjectComponent
     */
    readonly assignee?: User;
    /**
     * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
     * 
     *  *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.
     *  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.
     *  *  `UNASSIGNED` an assignee is not set for issues created with this component.
     *  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
     * 
     * Default value: `PROJECT_DEFAULT`.  
     * Optional when creating or updating a component.
     * @type {string}
     * @memberof ProjectComponent
     */
    assigneeType?: ProjectComponentAssigneeTypeEnum;
    /**
     * The description for the component. Optional when creating or updating a component.
     * @type {string}
     * @memberof ProjectComponent
     */
    description?: string;
    /**
     * The unique identifier for the component.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly id?: string;
    /**
     * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
     * @type {boolean}
     * @memberof ProjectComponent
     */
    readonly isAssigneeTypeValid?: boolean;
    /**
     * The user details for the component's lead user.
     * @type {User}
     * @memberof ProjectComponent
     */
    readonly lead?: User;
    /**
     * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof ProjectComponent
     */
    leadAccountId?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponent
     */
    leadUserName?: string;
    /**
     * Compass component's metadata. Can't be updated. Not required for creating a Project Component.
     * @type {{ [key: string]: string; }}
     * @memberof ProjectComponent
     */
    readonly metadata?: { [key: string]: string; };
    /**
     * The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.
     * @type {string}
     * @memberof ProjectComponent
     */
    name?: string;
    /**
     * The key of the project the component is assigned to. Required when creating a component. Can't be updated.
     * @type {string}
     * @memberof ProjectComponent
     */
    project?: string;
    /**
     * The ID of the project the component is assigned to.
     * @type {number}
     * @memberof ProjectComponent
     */
    readonly projectId?: number;
    /**
     * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
     * @type {User}
     * @memberof ProjectComponent
     */
    readonly realAssignee?: User;
    /**
     * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:
     * 
     *  *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.
     *  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.
     *  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.
     *  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly realAssigneeType?: ProjectComponentRealAssigneeTypeEnum;
    /**
     * The URL of the component.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly self?: string;
}


/**
 * @export
 */
export const ProjectComponentAssigneeTypeEnum = {
    ProjectDefault: 'PROJECT_DEFAULT',
    ComponentLead: 'COMPONENT_LEAD',
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type ProjectComponentAssigneeTypeEnum = typeof ProjectComponentAssigneeTypeEnum[keyof typeof ProjectComponentAssigneeTypeEnum];

/**
 * @export
 */
export const ProjectComponentRealAssigneeTypeEnum = {
    ProjectDefault: 'PROJECT_DEFAULT',
    ComponentLead: 'COMPONENT_LEAD',
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type ProjectComponentRealAssigneeTypeEnum = typeof ProjectComponentRealAssigneeTypeEnum[keyof typeof ProjectComponentRealAssigneeTypeEnum];

/**
 * Details about data policies for a list of projects.
 * @export
 * @interface ProjectDataPolicies
 */
export interface ProjectDataPolicies {
    /**
     * List of projects with data policies.
     * @type {Array<ProjectWithDataPolicy>}
     * @memberof ProjectDataPolicies
     */
    readonly projectDataPolicies?: Array<ProjectWithDataPolicy>;
}
/**
 * Details about data policy.
 * @export
 * @interface ProjectDataPolicy
 */
export interface ProjectDataPolicy {
    /**
     * Whether the project contains any content inaccessible to the requesting application.
     * @type {boolean}
     * @memberof ProjectDataPolicy
     */
    readonly anyContentBlocked?: boolean;
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
 * A project's sender email address.
 * @export
 * @interface ProjectEmailAddress
 */
export interface ProjectEmailAddress {
    /**
     * The email address.
     * @type {string}
     * @memberof ProjectEmailAddress
     */
    emailAddress?: string;
    /**
     * When using a custom domain, the status of the email address.
     * @type {Array<string>}
     * @memberof ProjectEmailAddress
     */
    emailAddressStatus?: Array<string>;
}
/**
 * Details of a project feature.
 * @export
 * @interface ProjectFeature
 */
export interface ProjectFeature {
    /**
     * The key of the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    feature?: string;
    /**
     * URI for the image representing the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    imageUri?: string;
    /**
     * Localized display description for the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    localisedDescription?: string;
    /**
     * Localized display name for the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    localisedName?: string;
    /**
     * List of keys of the features required to enable the feature.
     * @type {Array<string>}
     * @memberof ProjectFeature
     */
    prerequisites?: Array<string>;
    /**
     * The ID of the project.
     * @type {number}
     * @memberof ProjectFeature
     */
    projectId?: number;
    /**
     * The state of the feature. When updating the state of a feature, only ENABLED and DISABLED are supported. Responses can contain all values
     * @type {string}
     * @memberof ProjectFeature
     */
    state?: ProjectFeatureStateEnum;
    /**
     * Whether the state of the feature can be updated.
     * @type {boolean}
     * @memberof ProjectFeature
     */
    toggleLocked?: boolean;
}


/**
 * @export
 */
export const ProjectFeatureStateEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    ComingSoon: 'COMING_SOON'
} as const;
export type ProjectFeatureStateEnum = typeof ProjectFeatureStateEnum[keyof typeof ProjectFeatureStateEnum];

/**
 * Details of the feature state.
 * @export
 * @interface ProjectFeatureState
 */
export interface ProjectFeatureState {
    /**
     * The feature state.
     * @type {string}
     * @memberof ProjectFeatureState
     */
    state?: ProjectFeatureStateStateEnum;
}


/**
 * @export
 */
export const ProjectFeatureStateStateEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    ComingSoon: 'COMING_SOON'
} as const;
export type ProjectFeatureStateStateEnum = typeof ProjectFeatureStateStateEnum[keyof typeof ProjectFeatureStateStateEnum];

/**
 * Project ID details.
 * @export
 * @interface ProjectId
 */
export interface ProjectId {
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectId
     */
    id: string;
}
/**
 * The identifiers for a project.
 * @export
 * @interface ProjectIdentifierBean
 */
export interface ProjectIdentifierBean {
    /**
     * The ID of the project.
     * @type {number}
     * @memberof ProjectIdentifierBean
     */
    readonly id?: number;
    /**
     * The key of the project.
     * @type {string}
     * @memberof ProjectIdentifierBean
     */
    readonly key?: string;
}
/**
 * Identifiers for a project.
 * @export
 * @interface ProjectIdentifiers
 */
export interface ProjectIdentifiers {
    /**
     * The ID of the created project.
     * @type {number}
     * @memberof ProjectIdentifiers
     */
    readonly id: number;
    /**
     * The key of the created project.
     * @type {string}
     * @memberof ProjectIdentifiers
     */
    readonly key: string;
    /**
     * The URL of the created project.
     * @type {string}
     * @memberof ProjectIdentifiers
     */
    readonly self: string;
}
/**
 * A list of project IDs.
 * @export
 * @interface ProjectIds
 */
export interface ProjectIds {
    /**
     * The IDs of projects.
     * @type {Array<string>}
     * @memberof ProjectIds
     */
    projectIds: Array<string>;
}
/**
 * Additional details about a project.
 * @export
 * @interface ProjectInsight
 */
export interface ProjectInsight {
    /**
     * The last issue update time.
     * @type {string}
     * @memberof ProjectInsight
     */
    readonly lastIssueUpdateTime?: string;
    /**
     * Total issue count.
     * @type {number}
     * @memberof ProjectInsight
     */
    readonly totalIssueCount?: number;
}
/**
 * Details of the issue creation metadata for a project.
 * @export
 * @interface ProjectIssueCreateMetadata
 */
export interface ProjectIssueCreateMetadata {
    /**
     * List of the project's avatars, returning the avatar size and associated URL.
     * @type {AvatarUrlsBean}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * Expand options that include additional project issue create metadata details in the response.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly expand?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly id?: string;
    /**
     * List of the issue types supported by the project.
     * @type {Array<IssueTypeIssueCreateMetadata>}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly issuetypes?: Array<IssueTypeIssueCreateMetadata>;
    /**
     * The key of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly key?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly name?: string;
    /**
     * The URL of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly self?: string;
}
/**
 * List of issue level security items in a project.
 * @export
 * @interface ProjectIssueSecurityLevels
 */
export interface ProjectIssueSecurityLevels {
    /**
     * Issue level security items list.
     * @type {Array<SecurityLevel>}
     * @memberof ProjectIssueSecurityLevels
     */
    readonly levels: Array<SecurityLevel>;
}
/**
 * The hierarchy of issue types within a project.
 * @export
 * @interface ProjectIssueTypeHierarchy
 */
export interface ProjectIssueTypeHierarchy {
    /**
     * Details of an issue type hierarchy level.
     * @type {Array<ProjectIssueTypesHierarchyLevel>}
     * @memberof ProjectIssueTypeHierarchy
     */
    readonly hierarchy?: Array<ProjectIssueTypesHierarchyLevel>;
    /**
     * The ID of the project.
     * @type {number}
     * @memberof ProjectIssueTypeHierarchy
     */
    readonly projectId?: number;
}
/**
 * The project and issue type mapping.
 * @export
 * @interface ProjectIssueTypeMapping
 */
export interface ProjectIssueTypeMapping {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof ProjectIssueTypeMapping
     */
    issueTypeId: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectIssueTypeMapping
     */
    projectId: string;
}
/**
 * The project and issue type mappings.
 * @export
 * @interface ProjectIssueTypeMappings
 */
export interface ProjectIssueTypeMappings {
    /**
     * The project and issue type mappings.
     * @type {Array<ProjectIssueTypeMapping>}
     * @memberof ProjectIssueTypeMappings
     */
    mappings: Array<ProjectIssueTypeMapping>;
}
/**
 * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
 * 
 * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the requested workflows.
 * @export
 * @interface ProjectIssueTypes
 */
export interface ProjectIssueTypes {
    /**
     * IDs of the issue types
     * @type {Set<string | null>}
     * @memberof ProjectIssueTypes
     */
    issueTypes?: Array<string | null> | null;
    /**
     * 
     * @type {ProjectId}
     * @memberof ProjectIssueTypes
     */
    project?: ProjectId | null;
}
/**
 * Details of an issue type hierarchy level.
 * @export
 * @interface ProjectIssueTypesHierarchyLevel
 */
export interface ProjectIssueTypesHierarchyLevel {
    /**
     * The ID of the issue type hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {string}
     * @memberof ProjectIssueTypesHierarchyLevel
     */
    readonly entityId?: string;
    /**
     * The list of issue types in the hierarchy level.
     * @type {Array<IssueTypeInfo>}
     * @memberof ProjectIssueTypesHierarchyLevel
     */
    readonly issueTypes?: Array<IssueTypeInfo>;
    /**
     * The level of the issue type hierarchy level.
     * @type {number}
     * @memberof ProjectIssueTypesHierarchyLevel
     */
    readonly level?: number;
    /**
     * The name of the issue type hierarchy level.
     * @type {string}
     * @memberof ProjectIssueTypesHierarchyLevel
     */
    readonly name?: string;
}
/**
 * 
 * @export
 * @interface ProjectLandingPageInfo
 */
export interface ProjectLandingPageInfo {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProjectLandingPageInfo
     */
    attributes?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ProjectLandingPageInfo
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    boardName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    projectType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    queueCategory?: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectLandingPageInfo
     */
    queueId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    queueName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectLandingPageInfo
     */
    simpleBoard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectLandingPageInfo
     */
    simplified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    url?: string;
}
/**
 * Permissions which a user has on a project.
 * @export
 * @interface ProjectPermissions
 */
export interface ProjectPermissions {
    /**
     * Whether the logged user can edit the project.
     * @type {boolean}
     * @memberof ProjectPermissions
     */
    readonly canEdit?: boolean;
}
/**
 * Details about the roles in a project.
 * @export
 * @interface ProjectRole
 */
export interface ProjectRole {
    /**
     * The list of users who act in this role.
     * @type {Array<RoleActor>}
     * @memberof ProjectRole
     */
    readonly actors?: Array<RoleActor>;
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly admin?: boolean;
    /**
     * Whether the calling user is part of this role.
     * @type {boolean}
     * @memberof ProjectRole
     */
    currentUserRole?: boolean;
    /**
     * Whether this role is the default role for the project
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly default?: boolean;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    readonly description?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof ProjectRole
     */
    readonly id?: number;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    name?: string;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly roleConfigurable?: boolean;
    /**
     * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
     * @type {Scope}
     * @memberof ProjectRole
     */
    readonly scope?: Scope;
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof ProjectRole
     */
    readonly self?: string;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    translatedName?: string;
}
/**
 * 
 * @export
 * @interface ProjectRoleActorsUpdateBean
 */
export interface ProjectRoleActorsUpdateBean {
    /**
     * The actors to add to the project role.
     * 
     * Add groups using:
     * 
     *  *  `atlassian-group-role-actor` and a list of group names.
     *  *  `atlassian-group-role-actor-id` and a list of group IDs.
     * 
     * As a group's name can change, use of `atlassian-group-role-actor-id` is recommended. For example, `"atlassian-group-role-actor-id":["eef79f81-0b89-4fca-a736-4be531a10869","77f6ab39-e755-4570-a6ae-2d7a8df0bcb8"]`.
     * 
     * Add users using `atlassian-user-role-actor` and a list of account IDs. For example, `"atlassian-user-role-actor":["12345678-9abc-def1-2345-6789abcdef12", "abcdef12-3456-789a-bcde-f123456789ab"]`.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ProjectRoleActorsUpdateBean
     */
    categorisedActors?: { [key: string]: Array<string>; };
    /**
     * The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @type {number}
     * @memberof ProjectRoleActorsUpdateBean
     */
    readonly id?: number;
}
/**
 * Details about a project role.
 * @export
 * @interface ProjectRoleDetails
 */
export interface ProjectRoleDetails {
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly admin?: boolean;
    /**
     * Whether this role is the default role for the project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly default?: boolean;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    readonly description?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof ProjectRoleDetails
     */
    readonly id?: number;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    name?: string;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly roleConfigurable?: boolean;
    /**
     * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
     * @type {Scope}
     * @memberof ProjectRoleDetails
     */
    readonly scope?: Scope;
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    readonly self?: string;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    translatedName?: string;
}
/**
 * Details of the group associated with the role.
 * @export
 * @interface ProjectRoleGroup
 */
export interface ProjectRoleGroup {
    /**
     * The display name of the group.
     * @type {string}
     * @memberof ProjectRoleGroup
     */
    displayName?: string;
    /**
     * The ID of the group.
     * @type {string}
     * @memberof ProjectRoleGroup
     */
    groupId?: string;
    /**
     * The name of the group. As a group's name can change, use of `groupId` is recommended to identify the group.
     * @type {string}
     * @memberof ProjectRoleGroup
     */
    name?: string;
}
/**
 * Details of the user associated with the role.
 * @export
 * @interface ProjectRoleUser
 */
export interface ProjectRoleUser {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.
     * @type {string}
     * @memberof ProjectRoleUser
     */
    readonly accountId?: string;
}
/**
 * 
 * @export
 * @interface ProjectScopeBean
 */
export interface ProjectScopeBean {
    /**
     * Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
     * @type {Set<string>}
     * @memberof ProjectScopeBean
     */
    attributes?: Array<ProjectScopeBeanAttributesEnum>;
    /**
     * The ID of the project that the option's behavior applies to.
     * @type {number}
     * @memberof ProjectScopeBean
     */
    id?: number;
}


/**
 * @export
 */
export const ProjectScopeBeanAttributesEnum = {
    NotSelectable: 'notSelectable',
    DefaultValue: 'defaultValue'
} as const;
export type ProjectScopeBeanAttributesEnum = typeof ProjectScopeBeanAttributesEnum[keyof typeof ProjectScopeBeanAttributesEnum];

/**
 * Details about a project type.
 * @export
 * @interface ProjectType
 */
export interface ProjectType {
    /**
     * The color of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly color?: string;
    /**
     * The key of the project type's description.
     * @type {string}
     * @memberof ProjectType
     */
    readonly descriptionI18nKey?: string;
    /**
     * The formatted key of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly formattedKey?: string;
    /**
     * The icon of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly icon?: string;
    /**
     * The key of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly key?: string;
}
/**
 * The project.
 * @export
 * @interface ProjectUsage
 */
export interface ProjectUsage {
    /**
     * The project ID.
     * @type {string}
     * @memberof ProjectUsage
     */
    id?: string;
}
/**
 * A page of projects.
 * @export
 * @interface ProjectUsagePage
 */
export interface ProjectUsagePage {
    /**
     * Page token for the next page of project usages.
     * @type {string}
     * @memberof ProjectUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of projects.
     * @type {Array<ProjectUsage>}
     * @memberof ProjectUsagePage
     */
    values?: Array<ProjectUsage>;
}
/**
 * Details about data policies for a project.
 * @export
 * @interface ProjectWithDataPolicy
 */
export interface ProjectWithDataPolicy {
    /**
     * Data policy.
     * @type {ProjectDataPolicy}
     * @memberof ProjectWithDataPolicy
     */
    readonly dataPolicy?: ProjectDataPolicy;
    /**
     * The project ID.
     * @type {number}
     * @memberof ProjectWithDataPolicy
     */
    readonly id?: number;
}
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
 * Details about the status mappings for publishing a draft workflow scheme.
 * @export
 * @interface PublishDraftWorkflowScheme
 */
export interface PublishDraftWorkflowScheme {
    /**
     * Mappings of statuses to new statuses for issue types.
     * @type {Set<StatusMapping>}
     * @memberof PublishDraftWorkflowScheme
     */
    statusMappings?: Array<StatusMapping>;
}
/**
 * Properties that identify a published workflow.
 * @export
 * @interface PublishedWorkflowId
 */
export interface PublishedWorkflowId {
    /**
     * The entity ID of the workflow.
     * @type {string}
     * @memberof PublishedWorkflowId
     */
    entityId?: string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof PublishedWorkflowId
     */
    name: string;
}
/**
 * ID of a registered webhook or error messages explaining why a webhook wasn't registered.
 * @export
 * @interface RegisteredWebhook
 */
export interface RegisteredWebhook {
    /**
     * The ID of the webhook. Returned if the webhook is created.
     * @type {number}
     * @memberof RegisteredWebhook
     */
    createdWebhookId?: number;
    /**
     * Error messages specifying why the webhook creation failed.
     * @type {Array<string>}
     * @memberof RegisteredWebhook
     */
    errors?: Array<string>;
}
/**
 * Details of an issue remote link.
 * @export
 * @interface RemoteIssueLink
 */
export interface RemoteIssueLink {
    /**
     * Details of the remote application the linked item is in.
     * @type {Application}
     * @memberof RemoteIssueLink
     */
    application?: Application;
    /**
     * The global ID of the link, such as the ID of the item on the remote system.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    globalId?: string;
    /**
     * The ID of the link.
     * @type {number}
     * @memberof RemoteIssueLink
     */
    id?: number;
    /**
     * Details of the item linked to.
     * @type {RemoteObject}
     * @memberof RemoteIssueLink
     */
    object?: RemoteObject;
    /**
     * Description of the relationship between the issue and the linked item.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    relationship?: string;
    /**
     * The URL of the link.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    self?: string;
}
/**
 * Details of the identifiers for a created or updated remote issue link.
 * @export
 * @interface RemoteIssueLinkIdentifies
 */
export interface RemoteIssueLinkIdentifies {
    /**
     * The ID of the remote issue link, such as the ID of the item on the remote system.
     * @type {number}
     * @memberof RemoteIssueLinkIdentifies
     */
    readonly id?: number;
    /**
     * The URL of the remote issue link.
     * @type {string}
     * @memberof RemoteIssueLinkIdentifies
     */
    readonly self?: string;
}
/**
 * Details of a remote issue link.
 * @export
 * @interface RemoteIssueLinkRequest
 */
export interface RemoteIssueLinkRequest {
    [key: string]: any | any;
    /**
     * Details of the remote application the linked item is in. For example, trello.
     * @type {Application}
     * @memberof RemoteIssueLinkRequest
     */
    application?: Application;
    /**
     * An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.
     * 
     * Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.
     * 
     * The maximum length is 255 characters.
     * @type {string}
     * @memberof RemoteIssueLinkRequest
     */
    globalId?: string;
    /**
     * Details of the item linked to.
     * @type {RemoteObject}
     * @memberof RemoteIssueLinkRequest
     */
    object: RemoteObject;
    /**
     * Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira.
     * @type {string}
     * @memberof RemoteIssueLinkRequest
     */
    relationship?: string;
}
/**
 * The linked item.
 * @export
 * @interface RemoteObject
 */
export interface RemoteObject {
    [key: string]: any | any;
    /**
     * Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
     * @type {Icon}
     * @memberof RemoteObject
     */
    icon?: Icon;
    /**
     * The status of the item.
     * @type {Status}
     * @memberof RemoteObject
     */
    status?: Status;
    /**
     * The summary details of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    summary?: string;
    /**
     * The title of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    title: string;
    /**
     * The URL of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    url: string;
}
/**
 * 
 * @export
 * @interface RemoveOptionFromIssuesResult
 */
export interface RemoveOptionFromIssuesResult {
    /**
     * A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned.
     * @type {SimpleErrorCollection}
     * @memberof RemoveOptionFromIssuesResult
     */
    errors?: SimpleErrorCollection;
    /**
     * The IDs of the modified issues.
     * @type {Array<number>}
     * @memberof RemoveOptionFromIssuesResult
     */
    modifiedIssues?: Array<number>;
    /**
     * The IDs of the unchanged issues, those issues where errors prevent modification.
     * @type {Array<number>}
     * @memberof RemoveOptionFromIssuesResult
     */
    unmodifiedIssues?: Array<number>;
}
/**
 * Change the order of issue priorities.
 * @export
 * @interface ReorderIssuePriorities
 */
export interface ReorderIssuePriorities {
    /**
     * The ID of the priority. Required if `position` isn't provided.
     * @type {string}
     * @memberof ReorderIssuePriorities
     */
    after?: string;
    /**
     * The list of issue IDs to be reordered. Cannot contain duplicates nor after ID.
     * @type {Array<string>}
     * @memberof ReorderIssuePriorities
     */
    ids: Array<string>;
    /**
     * The position for issue priorities to be moved to. Required if `after` isn't provided.
     * @type {string}
     * @memberof ReorderIssuePriorities
     */
    position?: string;
}
/**
 * Change the order of issue resolutions.
 * @export
 * @interface ReorderIssueResolutionsRequest
 */
export interface ReorderIssueResolutionsRequest {
    /**
     * The ID of the resolution. Required if `position` isn't provided.
     * @type {string}
     * @memberof ReorderIssueResolutionsRequest
     */
    after?: string;
    /**
     * The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID.
     * @type {Array<string>}
     * @memberof ReorderIssueResolutionsRequest
     */
    ids: Array<string>;
    /**
     * The position for issue resolutions to be moved to. Required if `after` isn't provided.
     * @type {string}
     * @memberof ReorderIssueResolutionsRequest
     */
    position?: string;
}
/**
 * The list of required status mappings by issue type.
 * @export
 * @interface RequiredMappingByIssueType
 */
export interface RequiredMappingByIssueType {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof RequiredMappingByIssueType
     */
    issueTypeId?: string;
    /**
     * The status IDs requiring mapping.
     * @type {Set<string>}
     * @memberof RequiredMappingByIssueType
     */
    statusIds?: Array<string>;
}
/**
 * The list of required status mappings by workflow.
 * @export
 * @interface RequiredMappingByWorkflows
 */
export interface RequiredMappingByWorkflows {
    /**
     * The ID of the source workflow.
     * @type {string}
     * @memberof RequiredMappingByWorkflows
     */
    sourceWorkflowId?: string;
    /**
     * The status IDs requiring mapping.
     * @type {Set<string>}
     * @memberof RequiredMappingByWorkflows
     */
    statusIds?: Array<string>;
    /**
     * The ID of the target workflow.
     * @type {string}
     * @memberof RequiredMappingByWorkflows
     */
    targetWorkflowId?: string;
}
/**
 * Details of an issue resolution.
 * @export
 * @interface Resolution
 */
export interface Resolution {
    /**
     * The description of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    description?: string;
    /**
     * The ID of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    id?: string;
    /**
     * The name of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    name?: string;
    /**
     * The URL of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    self?: string;
}
/**
 * The ID of an issue resolution.
 * @export
 * @interface ResolutionId
 */
export interface ResolutionId {
    [key: string]: any | any;
    /**
     * The ID of the issue resolution.
     * @type {string}
     * @memberof ResolutionId
     */
    readonly id: string;
}
/**
 * 
 * @export
 * @interface ResolutionJsonBean
 */
export interface ResolutionJsonBean {
    /**
     * 
     * @type {boolean}
     * @memberof ResolutionJsonBean
     */
    default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    iconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    self?: string;
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
 * Details of the permission.
 * @export
 * @interface RestrictedPermission
 */
export interface RestrictedPermission {
    [key: string]: any | any;
    /**
     * The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
     * @type {string}
     * @memberof RestrictedPermission
     */
    id?: string;
    /**
     * The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
     * @type {string}
     * @memberof RestrictedPermission
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface RichText
 */
export interface RichText {
    /**
     * 
     * @type {boolean}
     * @memberof RichText
     */
    empty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RichText
     */
    emptyAdf?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RichText
     */
    finalised?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RichText
     */
    valueSet?: boolean;
}
/**
 * Details about a user assigned to a project role.
 * @export
 * @interface RoleActor
 */
export interface RoleActor {
    /**
     * 
     * @type {ProjectRoleGroup}
     * @memberof RoleActor
     */
    readonly actorGroup?: ProjectRoleGroup;
    /**
     * 
     * @type {ProjectRoleUser}
     * @memberof RoleActor
     */
    readonly actorUser?: ProjectRoleUser;
    /**
     * The avatar of the role actor.
     * @type {string}
     * @memberof RoleActor
     */
    readonly avatarUrl?: string;
    /**
     * The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
     * @type {string}
     * @memberof RoleActor
     */
    readonly displayName?: string;
    /**
     * The ID of the role actor.
     * @type {number}
     * @memberof RoleActor
     */
    readonly id?: number;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof RoleActor
     */
    readonly name?: string;
    /**
     * The type of role actor.
     * @type {string}
     * @memberof RoleActor
     */
    readonly type?: RoleActorTypeEnum;
}


/**
 * @export
 */
export const RoleActorTypeEnum = {
    GroupRoleActor: 'atlassian-group-role-actor',
    UserRoleActor: 'atlassian-user-role-actor'
} as const;
export type RoleActorTypeEnum = typeof RoleActorTypeEnum[keyof typeof RoleActorTypeEnum];

/**
 * A rule configuration.
 * @export
 * @interface RuleConfiguration
 */
export interface RuleConfiguration {
    /**
     * Whether the rule is disabled.
     * @type {boolean}
     * @memberof RuleConfiguration
     */
    disabled?: boolean;
    /**
     * A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).
     * @type {string}
     * @memberof RuleConfiguration
     */
    tag?: string;
    /**
     * Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.
     * @type {string}
     * @memberof RuleConfiguration
     */
    value: string;
}
/**
 * The sanitized JQL queries for the given account IDs.
 * @export
 * @interface SanitizedJqlQueries
 */
export interface SanitizedJqlQueries {
    /**
     * The list of sanitized JQL queries.
     * @type {Array<SanitizedJqlQuery>}
     * @memberof SanitizedJqlQueries
     */
    queries?: Array<SanitizedJqlQuery>;
}
/**
 * Details of the sanitized JQL query.
 * @export
 * @interface SanitizedJqlQuery
 */
export interface SanitizedJqlQuery {
    /**
     * The account ID of the user for whom sanitization was performed.
     * @type {string}
     * @memberof SanitizedJqlQuery
     */
    accountId?: string | null;
    /**
     * The list of errors.
     * @type {ErrorCollection}
     * @memberof SanitizedJqlQuery
     */
    errors?: ErrorCollection;
    /**
     * The initial query.
     * @type {string}
     * @memberof SanitizedJqlQuery
     */
    initialQuery?: string;
    /**
     * The sanitized query, if there were no errors.
     * @type {string}
     * @memberof SanitizedJqlQuery
     */
    sanitizedQuery?: string | null;
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
 * A screen.
 * @export
 * @interface Screen
 */
export interface Screen {
    /**
     * The description of the screen.
     * @type {string}
     * @memberof Screen
     */
    readonly description?: string;
    /**
     * The ID of the screen.
     * @type {number}
     * @memberof Screen
     */
    readonly id?: number;
    /**
     * The name of the screen.
     * @type {string}
     * @memberof Screen
     */
    readonly name?: string;
    /**
     * The scope of the screen.
     * @type {Scope}
     * @memberof Screen
     */
    scope?: Scope;
}
/**
 * Details of a screen.
 * @export
 * @interface ScreenDetails
 */
export interface ScreenDetails {
    /**
     * The description of the screen. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenDetails
     */
    description?: string;
    /**
     * The name of the screen. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenDetails
     */
    name: string;
}
/**
 * A screen scheme.
 * @export
 * @interface ScreenScheme
 */
export interface ScreenScheme {
    /**
     * The description of the screen scheme.
     * @type {string}
     * @memberof ScreenScheme
     */
    description?: string;
    /**
     * The ID of the screen scheme.
     * @type {number}
     * @memberof ScreenScheme
     */
    id?: number;
    /**
     * Details of the issue type screen schemes associated with the screen scheme.
     * @type {PageBeanIssueTypeScreenScheme}
     * @memberof ScreenScheme
     */
    issueTypeScreenSchemes?: PageBeanIssueTypeScreenScheme;
    /**
     * The name of the screen scheme.
     * @type {string}
     * @memberof ScreenScheme
     */
    name?: string;
    /**
     * The IDs of the screens for the screen types of the screen scheme.
     * @type {ScreenTypes}
     * @memberof ScreenScheme
     */
    screens?: ScreenTypes;
}
/**
 * Details of a screen scheme.
 * @export
 * @interface ScreenSchemeDetails
 */
export interface ScreenSchemeDetails {
    /**
     * The description of the screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenSchemeDetails
     */
    description?: string;
    /**
     * The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenSchemeDetails
     */
    name: string;
    /**
     * The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
     * @type {ScreenTypes}
     * @memberof ScreenSchemeDetails
     */
    screens: ScreenTypes;
}
/**
 * The ID of a screen scheme.
 * @export
 * @interface ScreenSchemeId
 */
export interface ScreenSchemeId {
    /**
     * The ID of the screen scheme.
     * @type {number}
     * @memberof ScreenSchemeId
     */
    readonly id: number;
}
/**
 * The IDs of the screens for the screen types of the screen scheme.
 * @export
 * @interface ScreenTypes
 */
export interface ScreenTypes {
    /**
     * The ID of the create screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    create?: number;
    /**
     * The ID of the default screen. Required when creating a screen scheme.
     * @type {number}
     * @memberof ScreenTypes
     */
    default: number;
    /**
     * The ID of the edit screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    edit?: number;
    /**
     * The ID of the view screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    view?: number;
}
/**
 * A screen with tab details.
 * @export
 * @interface ScreenWithTab
 */
export interface ScreenWithTab {
    /**
     * The description of the screen.
     * @type {string}
     * @memberof ScreenWithTab
     */
    readonly description?: string;
    /**
     * The ID of the screen.
     * @type {number}
     * @memberof ScreenWithTab
     */
    readonly id?: number;
    /**
     * The name of the screen.
     * @type {string}
     * @memberof ScreenWithTab
     */
    readonly name?: string;
    /**
     * The scope of the screen.
     * @type {Scope}
     * @memberof ScreenWithTab
     */
    scope?: Scope;
    /**
     * The tab for the screen.
     * @type {ScreenableTab}
     * @memberof ScreenWithTab
     */
    tab?: ScreenableTab;
}
/**
 * A screen tab field.
 * @export
 * @interface ScreenableField
 */
export interface ScreenableField {
    /**
     * The ID of the screen tab field.
     * @type {string}
     * @memberof ScreenableField
     */
    readonly id?: string;
    /**
     * The name of the screen tab field. Required on create and update. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenableField
     */
    name?: string;
}
/**
 * A screen tab.
 * @export
 * @interface ScreenableTab
 */
export interface ScreenableTab {
    /**
     * The ID of the screen tab.
     * @type {number}
     * @memberof ScreenableTab
     */
    readonly id?: number;
    /**
     * The name of the screen tab. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenableTab
     */
    name: string;
}
/**
 * 
 * @export
 * @interface SearchAndReconcileRequestBean
 */
export interface SearchAndReconcileRequestBean {
    /**
     * Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:
     * 
     *  *  `renderedFields` Returns field values rendered in HTML format.
     *  *  `names` Returns the display name of each field.
     *  *  `schema` Returns the schema describing a field type.
     *  *  `transitions` Returns all possible transitions for the issue.
     *  *  `operations` Returns all possible operations for the issue.
     *  *  `editmeta` Returns information about how each field can be edited.
     *  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
     * 
     * Examples: `"names,changelog"` Returns the display name of each field as well as a list of recent updates to an issue.
     * @type {string}
     * @memberof SearchAndReconcileRequestBean
     */
    expand?: string;
    /**
     * A list of fields to return for each issue. Use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
     * 
     *  *  `*all` Returns all fields.
     *  *  `*navigable` Returns navigable fields.
     *  *  `id` Returns only issue IDs.
     *  *  Any issue field, prefixed with a dash to exclude.
     * 
     * The default is `id`.
     * 
     * Examples:
     * 
     *  *  `summary,comment` Returns the summary and comments fields only.
     *  *  `*all,-comment` Returns all fields except comments.
     * 
     * Multiple `fields` parameters can be included in a request.
     * 
     * Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
     * @type {Array<string>}
     * @memberof SearchAndReconcileRequestBean
     */
    fields?: Array<string>;
    /**
     * Reference fields by their key (rather than ID). The default is `false`.
     * @type {boolean}
     * @memberof SearchAndReconcileRequestBean
     */
    fieldsByKeys?: boolean;
    /**
     * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.
     * 
     *  *  Example of an unbounded query: `order by key desc`.
     *  *  Example of a bounded query: `assignee = currentUser() order by key`.
     * 
     * Additionally, `orderBy` clause can contain a maximum of 7 fields.
     * @type {string}
     * @memberof SearchAndReconcileRequestBean
     */
    jql?: string;
    /**
     * The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues.
     * @type {number}
     * @memberof SearchAndReconcileRequestBean
     */
    maxResults?: number;
    /**
     * The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues.
     * @type {string}
     * @memberof SearchAndReconcileRequestBean
     */
    nextPageToken?: string;
    /**
     * A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.
     * @type {Array<string>}
     * @memberof SearchAndReconcileRequestBean
     */
    properties?: Array<string>;
    /**
     * Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. All issues must exist.
     * @type {Array<number>}
     * @memberof SearchAndReconcileRequestBean
     */
    reconcileIssues?: Array<number>;
}
/**
 * The result of a JQL search with issues reconsilation.
 * @export
 * @interface SearchAndReconcileResults
 */
export interface SearchAndReconcileResults {
    /**
     * The list of issues found by the search or reconsiliation.
     * @type {Array<IssueBean>}
     * @memberof SearchAndReconcileResults
     */
    readonly issues?: Array<IssueBean>;
    /**
     * The ID and name of each field in the search results.
     * @type {{ [key: string]: string; }}
     * @memberof SearchAndReconcileResults
     */
    readonly names?: { [key: string]: string; };
    /**
     * Continuation token to fetch the next page. If this result represents the last or the only page this token will be null. This token will expire in 7 days.
     * @type {string}
     * @memberof SearchAndReconcileResults
     */
    readonly nextPageToken?: string;
    /**
     * The schema describing the field types in the search results.
     * @type {{ [key: string]: JsonTypeBean; }}
     * @memberof SearchAndReconcileResults
     */
    readonly schema?: { [key: string]: JsonTypeBean; };
}
/**
 * Details of how to filter and list search auto complete information.
 * @export
 * @interface SearchAutoCompleteFilter
 */
export interface SearchAutoCompleteFilter {
    /**
     * Include collapsed fields for fields that have non-unique names.
     * @type {boolean}
     * @memberof SearchAutoCompleteFilter
     */
    includeCollapsedFields?: boolean;
    /**
     * List of project IDs used to filter the visible field details returned.
     * @type {Array<number>}
     * @memberof SearchAutoCompleteFilter
     */
    projectIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface SearchRequestBean
 */
export interface SearchRequestBean {
    /**
     * Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:
     * 
     *  *  `renderedFields` Returns field values rendered in HTML format.
     *  *  `names` Returns the display name of each field.
     *  *  `schema` Returns the schema describing a field type.
     *  *  `transitions` Returns all possible transitions for the issue.
     *  *  `operations` Returns all possible operations for the issue.
     *  *  `editmeta` Returns information about how each field can be edited.
     *  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
     * @type {Array<string>}
     * @memberof SearchRequestBean
     */
    expand?: Array<string>;
    /**
     * A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
     * 
     *  *  `*all` Returns all fields.
     *  *  `*navigable` Returns navigable fields.
     *  *  Any issue field, prefixed with a minus to exclude.
     * 
     * The default is `*navigable`.
     * 
     * Examples:
     * 
     *  *  `summary,comment` Returns the summary and comments fields only.
     *  *  `-description` Returns all navigable (default) fields except description.
     *  *  `*all,-comment` Returns all fields except comments.
     * 
     * Multiple `fields` parameters can be included in a request.
     * 
     * Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
     * @type {Array<string>}
     * @memberof SearchRequestBean
     */
    fields?: Array<string>;
    /**
     * Reference fields by their key (rather than ID). The default is `false`.
     * @type {boolean}
     * @memberof SearchRequestBean
     */
    fieldsByKeys?: boolean;
    /**
     * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.
     * @type {string}
     * @memberof SearchRequestBean
     */
    jql?: string;
    /**
     * The maximum number of items to return per page.
     * @type {number}
     * @memberof SearchRequestBean
     */
    maxResults?: number;
    /**
     * A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.
     * @type {Array<string>}
     * @memberof SearchRequestBean
     */
    properties?: Array<string>;
    /**
     * The index of the first item to return in the page of results (page offset). The base index is `0`.
     * @type {number}
     * @memberof SearchRequestBean
     */
    startAt?: number;
    /**
     * Determines how to validate the JQL query and treat the validation results. Supported values:
     * 
     *  *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).
     *  *  `warn` Returns all errors as warnings.
     *  *  `none` No validation is performed.
     *  *  `true` *Deprecated* A legacy synonym for `strict`.
     *  *  `false` *Deprecated* A legacy synonym for `warn`.
     * 
     * The default is `strict`.
     * 
     * Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.
     * @type {string}
     * @memberof SearchRequestBean
     */
    validateQuery?: SearchRequestBeanValidateQueryEnum;
}


/**
 * @export
 */
export const SearchRequestBeanValidateQueryEnum = {
    Strict: 'strict',
    Warn: 'warn',
    None: 'none',
    True: 'true',
    False: 'false'
} as const;
export type SearchRequestBeanValidateQueryEnum = typeof SearchRequestBeanValidateQueryEnum[keyof typeof SearchRequestBeanValidateQueryEnum];

/**
 * The result of a JQL search.
 * @export
 * @interface SearchResults
 */
export interface SearchResults {
    /**
     * Expand options that include additional search result details in the response.
     * @type {string}
     * @memberof SearchResults
     */
    readonly expand?: string;
    /**
     * The list of issues found by the search.
     * @type {Array<IssueBean>}
     * @memberof SearchResults
     */
    readonly issues?: Array<IssueBean>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly maxResults?: number;
    /**
     * The ID and name of each field in the search results.
     * @type {{ [key: string]: string; }}
     * @memberof SearchResults
     */
    readonly names?: { [key: string]: string; };
    /**
     * The schema describing the field types in the search results.
     * @type {{ [key: string]: JsonTypeBean; }}
     * @memberof SearchResults
     */
    readonly schema?: { [key: string]: JsonTypeBean; };
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly startAt?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly total?: number;
    /**
     * Any warnings related to the JQL query.
     * @type {Array<string>}
     * @memberof SearchResults
     */
    readonly warningMessages?: Array<string>;
}
/**
 * Details of an issue level security item.
 * @export
 * @interface SecurityLevel
 */
export interface SecurityLevel {
    /**
     * The description of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly description?: string;
    /**
     * The ID of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly id?: string;
    /**
     * Whether the issue level security item is the default.
     * @type {boolean}
     * @memberof SecurityLevel
     */
    readonly isDefault?: boolean;
    /**
     * The ID of the issue level security scheme.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly issueSecuritySchemeId?: string;
    /**
     * The name of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly name?: string;
    /**
     * The URL of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly self?: string;
}
/**
 * Issue security level member.
 * @export
 * @interface SecurityLevelMember
 */
export interface SecurityLevelMember {
    [key: string]: any | any;
    /**
     * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
     * @type {PermissionHolder}
     * @memberof SecurityLevelMember
     */
    readonly holder: PermissionHolder;
    /**
     * The ID of the issue security level member.
     * @type {string}
     * @memberof SecurityLevelMember
     */
    readonly id: string;
    /**
     * The ID of the issue security level.
     * @type {string}
     * @memberof SecurityLevelMember
     */
    readonly issueSecurityLevelId: string;
    /**
     * The ID of the issue security scheme.
     * @type {string}
     * @memberof SecurityLevelMember
     */
    readonly issueSecuritySchemeId: string;
    /**
     * 
     * @type {boolean}
     * @memberof SecurityLevelMember
     */
    managed?: boolean;
}
/**
 * Details about a security scheme.
 * @export
 * @interface SecurityScheme
 */
export interface SecurityScheme {
    /**
     * The ID of the default security level.
     * @type {number}
     * @memberof SecurityScheme
     */
    readonly defaultSecurityLevelId?: number;
    /**
     * The description of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly description?: string;
    /**
     * The ID of the issue security scheme.
     * @type {number}
     * @memberof SecurityScheme
     */
    readonly id?: number;
    /**
     * 
     * @type {Array<SecurityLevel>}
     * @memberof SecurityScheme
     */
    levels?: Array<SecurityLevel>;
    /**
     * The name of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly name?: string;
    /**
     * The URL of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly self?: string;
}
/**
 * The ID of the issue security scheme.
 * @export
 * @interface SecuritySchemeId
 */
export interface SecuritySchemeId {
    [key: string]: any | any;
    /**
     * The ID of the issue security scheme.
     * @type {string}
     * @memberof SecuritySchemeId
     */
    readonly id: string;
}
/**
 * 
 * @export
 * @interface SecuritySchemeLevelBean
 */
export interface SecuritySchemeLevelBean {
    /**
     * The description of the issue security scheme level.
     * @type {string}
     * @memberof SecuritySchemeLevelBean
     */
    description?: string;
    /**
     * Specifies whether the level is the default level. False by default.
     * @type {boolean}
     * @memberof SecuritySchemeLevelBean
     */
    isDefault?: boolean;
    /**
     * The list of level members which should be added to the issue security scheme level.
     * @type {Array<SecuritySchemeLevelMemberBean>}
     * @memberof SecuritySchemeLevelBean
     */
    members?: Array<SecuritySchemeLevelMemberBean>;
    /**
     * The name of the issue security scheme level. Must be unique.
     * @type {string}
     * @memberof SecuritySchemeLevelBean
     */
    name: string;
}
/**
 * 
 * @export
 * @interface SecuritySchemeLevelMemberBean
 */
export interface SecuritySchemeLevelMemberBean {
    /**
     * The value corresponding to the specified member type.
     * @type {string}
     * @memberof SecuritySchemeLevelMemberBean
     */
    parameter?: string;
    /**
     * The issue security level member type, e.g `reporter`, `group`, `user`, `projectrole`, `applicationRole`.
     * @type {string}
     * @memberof SecuritySchemeLevelMemberBean
     */
    type: string;
}
/**
 * Details of issue security scheme level new members.
 * @export
 * @interface SecuritySchemeMembersRequest
 */
export interface SecuritySchemeMembersRequest {
    /**
     * The list of level members which should be added to the issue security scheme level.
     * @type {Array<SecuritySchemeLevelMemberBean>}
     * @memberof SecuritySchemeMembersRequest
     */
    members?: Array<SecuritySchemeLevelMemberBean>;
}
/**
 * Details about an issue security scheme.
 * @export
 * @interface SecuritySchemeWithProjects
 */
export interface SecuritySchemeWithProjects {
    [key: string]: any | any;
    /**
     * The default level ID of the issue security scheme.
     * @type {number}
     * @memberof SecuritySchemeWithProjects
     */
    readonly defaultLevel?: number;
    /**
     * The description of the issue security scheme.
     * @type {string}
     * @memberof SecuritySchemeWithProjects
     */
    readonly description?: string;
    /**
     * The ID of the issue security scheme.
     * @type {number}
     * @memberof SecuritySchemeWithProjects
     */
    readonly id: number;
    /**
     * The name of the issue security scheme.
     * @type {string}
     * @memberof SecuritySchemeWithProjects
     */
    readonly name: string;
    /**
     * The list of project IDs associated with the issue security scheme.
     * @type {Set<number>}
     * @memberof SecuritySchemeWithProjects
     */
    readonly projectIds?: Array<number>;
    /**
     * The URL of the issue security scheme.
     * @type {string}
     * @memberof SecuritySchemeWithProjects
     */
    readonly self: string;
}
/**
 * List of security schemes.
 * @export
 * @interface SecuritySchemes
 */
export interface SecuritySchemes {
    /**
     * List of security schemes.
     * @type {Array<SecurityScheme>}
     * @memberof SecuritySchemes
     */
    readonly issueSecuritySchemes?: Array<SecurityScheme>;
}
/**
 * Details about the Jira instance.
 * @export
 * @interface ServerInformation
 */
export interface ServerInformation {
    /**
     * The base URL of the Jira instance.
     * @type {string}
     * @memberof ServerInformation
     */
    baseUrl?: string;
    /**
     * The timestamp when the Jira version was built.
     * @type {string}
     * @memberof ServerInformation
     */
    buildDate?: string;
    /**
     * The build number of the Jira version.
     * @type {number}
     * @memberof ServerInformation
     */
    buildNumber?: number;
    /**
     * The type of server deployment. This is always returned as *Cloud*.
     * @type {string}
     * @memberof ServerInformation
     */
    deploymentType?: string;
    /**
     * The display URL of the Jira instance.
     * @type {string}
     * @memberof ServerInformation
     */
    displayUrl?: string;
    /**
     * The display URL of Confluence.
     * @type {string}
     * @memberof ServerInformation
     */
    displayUrlConfluence?: string;
    /**
     * The display URL of the Servicedesk Help Center.
     * @type {string}
     * @memberof ServerInformation
     */
    displayUrlServicedeskHelpCenter?: string;
    /**
     * Jira instance health check results. Deprecated and no longer returned.
     * @type {Array<HealthCheckResult>}
     * @memberof ServerInformation
     */
    healthChecks?: Array<HealthCheckResult>;
    /**
     * The unique identifier of the Jira version.
     * @type {string}
     * @memberof ServerInformation
     */
    scmInfo?: string;
    /**
     * The time in Jira when this request was responded to.
     * @type {string}
     * @memberof ServerInformation
     */
    serverTime?: string;
    /**
     * The default timezone of the Jira server. In a format known as Olson Time Zones, IANA Time Zones or TZ Database Time Zones.
     * @type {string}
     * @memberof ServerInformation
     */
    serverTimeZone?: string;
    /**
     * The name of the Jira instance.
     * @type {string}
     * @memberof ServerInformation
     */
    serverTitle?: string;
    /**
     * The version of Jira.
     * @type {string}
     * @memberof ServerInformation
     */
    version?: string;
    /**
     * The major, minor, and revision version numbers of the Jira version.
     * @type {Array<number>}
     * @memberof ServerInformation
     */
    versionNumbers?: Array<number>;
}
/**
 * 
 * @export
 * @interface ServiceManagementNavigationInfo
 */
export interface ServiceManagementNavigationInfo {
    /**
     * 
     * @type {string}
     * @memberof ServiceManagementNavigationInfo
     */
    queueCategory?: string;
    /**
     * 
     * @type {number}
     * @memberof ServiceManagementNavigationInfo
     */
    queueId?: number;
    /**
     * 
     * @type {string}
     * @memberof ServiceManagementNavigationInfo
     */
    queueName?: string;
}
/**
 * 
 * @export
 * @interface ServiceRegistry
 */
export interface ServiceRegistry {
    /**
     * service description
     * @type {string}
     * @memberof ServiceRegistry
     */
    description?: string | null;
    /**
     * service ID
     * @type {string}
     * @memberof ServiceRegistry
     */
    id?: string;
    /**
     * service name
     * @type {string}
     * @memberof ServiceRegistry
     */
    name?: string;
    /**
     * organization ID
     * @type {string}
     * @memberof ServiceRegistry
     */
    organizationId?: string;
    /**
     * service revision
     * @type {string}
     * @memberof ServiceRegistry
     */
    revision?: string;
    /**
     * 
     * @type {ServiceRegistryTier}
     * @memberof ServiceRegistry
     */
    serviceTier?: ServiceRegistryTier;
}
/**
 * 
 * @export
 * @interface ServiceRegistryTier
 */
export interface ServiceRegistryTier {
    /**
     * tier description
     * @type {string}
     * @memberof ServiceRegistryTier
     */
    description?: string | null;
    /**
     * tier ID
     * @type {string}
     * @memberof ServiceRegistryTier
     */
    id?: string;
    /**
     * tier level
     * @type {number}
     * @memberof ServiceRegistryTier
     */
    level?: number;
    /**
     * tier name
     * @type {string}
     * @memberof ServiceRegistryTier
     */
    name?: string | null;
    /**
     * name key of the tier
     * @type {string}
     * @memberof ServiceRegistryTier
     */
    nameKey?: string;
}
/**
 * Details of new default levels.
 * @export
 * @interface SetDefaultLevelsRequest
 */
export interface SetDefaultLevelsRequest {
    [key: string]: any | any;
    /**
     * List of objects with issue security scheme ID and new default level ID.
     * @type {Array<DefaultLevelValue>}
     * @memberof SetDefaultLevelsRequest
     */
    defaultValues: Array<DefaultLevelValue>;
}
/**
 * The new default issue priority.
 * @export
 * @interface SetDefaultPriorityRequest
 */
export interface SetDefaultPriorityRequest {
    /**
     * The ID of the new default issue priority. Must be an existing ID or null. Setting this to null erases the default priority setting.
     * @type {string}
     * @memberof SetDefaultPriorityRequest
     */
    id: string;
}
/**
 * The new default issue resolution.
 * @export
 * @interface SetDefaultResolutionRequest
 */
export interface SetDefaultResolutionRequest {
    /**
     * The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting.
     * @type {string}
     * @memberof SetDefaultResolutionRequest
     */
    id: string;
}
/**
 * Details of a share permission for the filter.
 * @export
 * @interface SharePermission
 */
export interface SharePermission {
    /**
     * The group that the filter is shared with. For a request, specify the `groupId` or `name` property for the group. As a group's name can change, use of `groupId` is recommended.
     * @type {GroupName}
     * @memberof SharePermission
     */
    group?: GroupName;
    /**
     * The unique identifier of the share permission.
     * @type {number}
     * @memberof SharePermission
     */
    readonly id?: number;
    /**
     * The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-3-project-projectIdOrKey-get) but it contains a subset of the properties, which are: `self`, `id`, `key`, `assigneeType`, `name`, `roles`, `avatarUrls`, `projectType`, `simplified`.  
     * For a request, specify the `id` for the project.
     * @type {Project}
     * @memberof SharePermission
     */
    project?: Project;
    /**
     * The project role that the filter is shared with.  
     * For a request, specify the `id` for the role. You must also specify the `project` object and `id` for the project that the role is in.
     * @type {ProjectRole}
     * @memberof SharePermission
     */
    role?: ProjectRole;
    /**
     * The type of share permission:
     * 
     *  *  `user` Shared with a user.
     *  *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.
     *  *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.
     *  *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.
     *  *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.
     *  *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.
     *  *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request.
     * @type {string}
     * @memberof SharePermission
     */
    type: SharePermissionTypeEnum;
    /**
     * The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.
     * @type {UserBean}
     * @memberof SharePermission
     */
    user?: UserBean;
}


/**
 * @export
 */
export const SharePermissionTypeEnum = {
    User: 'user',
    Group: 'group',
    Project: 'project',
    ProjectRole: 'projectRole',
    Global: 'global',
    Loggedin: 'loggedin',
    Authenticated: 'authenticated',
    ProjectUnknown: 'project-unknown'
} as const;
export type SharePermissionTypeEnum = typeof SharePermissionTypeEnum[keyof typeof SharePermissionTypeEnum];

/**
 * 
 * @export
 * @interface SharePermissionInputBean
 */
export interface SharePermissionInputBean {
    /**
     * The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    accountId?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products.For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. Cannot be provided with `groupname`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    groupId?: string;
    /**
     * The name of the group to share the filter with. Set `type` to `group`. Please note that the name of a group is mutable, to reliably identify a group use `groupId`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    groupname?: string;
    /**
     * The ID of the project to share the filter with. Set `type` to `project`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    projectId?: string;
    /**
     * The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    projectRoleId?: string;
    /**
     * The rights for the share permission.
     * @type {number}
     * @memberof SharePermissionInputBean
     */
    rights?: number;
    /**
     * The type of the share permission.Specify the type as follows:
     * 
     *  *  `user` Share with a user.
     *  *  `group` Share with a group. Specify `groupname` as well.
     *  *  `project` Share with a project. Specify `projectId` as well.
     *  *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.
     *  *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     *  *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    type: SharePermissionInputBeanTypeEnum;
}


/**
 * @export
 */
export const SharePermissionInputBeanTypeEnum = {
    User: 'user',
    Project: 'project',
    Group: 'group',
    ProjectRole: 'projectRole',
    Global: 'global',
    Authenticated: 'authenticated'
} as const;
export type SharePermissionInputBeanTypeEnum = typeof SharePermissionInputBeanTypeEnum[keyof typeof SharePermissionInputBeanTypeEnum];

/**
 * 
 * @export
 * @interface SimpleApplicationPropertyBean
 */
export interface SimpleApplicationPropertyBean {
    /**
     * The ID of the application property.
     * @type {string}
     * @memberof SimpleApplicationPropertyBean
     */
    id?: string;
    /**
     * The new value.
     * @type {string}
     * @memberof SimpleApplicationPropertyBean
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface SimpleErrorCollection
 */
export interface SimpleErrorCollection {
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof SimpleErrorCollection
     */
    errorMessages?: Array<string>;
    /**
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof SimpleErrorCollection
     */
    errors?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SimpleErrorCollection
     */
    httpStatusCode?: number;
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
 * @interface SimpleListWrapperApplicationRole
 */
export interface SimpleListWrapperApplicationRole {
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperApplicationRole
     */
    callback?: object;
    /**
     * 
     * @type {Array<ApplicationRole>}
     * @memberof SimpleListWrapperApplicationRole
     */
    items?: Array<ApplicationRole>;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperApplicationRole
     */
    maxResults?: number;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperApplicationRole
     */
    pagingCallback?: object;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperApplicationRole
     */
    size?: number;
}
/**
 * 
 * @export
 * @interface SimpleListWrapperGroupName
 */
export interface SimpleListWrapperGroupName {
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperGroupName
     */
    callback?: object;
    /**
     * 
     * @type {Array<GroupName>}
     * @memberof SimpleListWrapperGroupName
     */
    items?: Array<GroupName>;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperGroupName
     */
    maxResults?: number;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperGroupName
     */
    pagingCallback?: object;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperGroupName
     */
    size?: number;
}
/**
 * Represents a usage of an entity by a project ID and related issue type IDs.
 * @export
 * @interface SimpleUsage
 */
export interface SimpleUsage {
    /**
     * The issue type IDs for the usage.
     * @type {Array<string>}
     * @memberof SimpleUsage
     */
    issueTypeIds: Array<string>;
    /**
     * The project ID for the usage.
     * @type {string}
     * @memberof SimpleUsage
     */
    projectId: string;
}
/**
 * 
 * @export
 * @interface SimplifiedHierarchyLevel
 */
export interface SimplifiedHierarchyLevel {
    /**
     * The ID of the level above this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    aboveLevelId?: number;
    /**
     * The ID of the level below this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    belowLevelId?: number;
    /**
     * The external UUID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {string}
     * @memberof SimplifiedHierarchyLevel
     */
    externalUuid?: string;
    /**
     * 
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    hierarchyLevelNumber?: number;
    /**
     * The ID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    id?: number;
    /**
     * The issue types available in this hierarchy level.
     * @type {Array<number>}
     * @memberof SimplifiedHierarchyLevel
     */
    issueTypeIds?: Array<number>;
    /**
     * The level of this item in the hierarchy.
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    level?: number;
    /**
     * The name of this hierarchy level.
     * @type {string}
     * @memberof SimplifiedHierarchyLevel
     */
    name?: string;
    /**
     * The ID of the project configuration. This property is deprecated, see [Change oticen: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    projectConfigurationId?: number;
}
/**
 * 
 * @export
 * @interface SimplifiedIssueTransition
 */
export interface SimplifiedIssueTransition {
    /**
     * The issue status change of the transition.
     * @type {IssueTransitionStatus}
     * @memberof SimplifiedIssueTransition
     */
    readonly to?: IssueTransitionStatus;
    /**
     * The unique ID of the transition.
     * @type {number}
     * @memberof SimplifiedIssueTransition
     */
    readonly transitionId?: number;
    /**
     * The name of the transition.
     * @type {string}
     * @memberof SimplifiedIssueTransition
     */
    readonly transitionName?: string;
}
/**
 * 
 * @export
 * @interface SoftwareNavigationInfo
 */
export interface SoftwareNavigationInfo {
    /**
     * 
     * @type {number}
     * @memberof SoftwareNavigationInfo
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof SoftwareNavigationInfo
     */
    boardName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SoftwareNavigationInfo
     */
    simpleBoard?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SoftwareNavigationInfo
     */
    totalBoardsInProject?: number;
}
/**
 * The status of the item.
 * @export
 * @interface Status
 */
export interface Status {
    [key: string]: any | any;
    /**
     * Details of the icon representing the status. If not provided, no status icon displays in Jira.
     * @type {Icon}
     * @memberof Status
     */
    icon?: Icon;
    /**
     * Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
     * @type {boolean}
     * @memberof Status
     */
    resolved?: boolean;
}
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
 * Details of the status being created.
 * @export
 * @interface StatusCreate
 */
export interface StatusCreate {
    /**
     * The description of the status.
     * @type {string}
     * @memberof StatusCreate
     */
    description?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof StatusCreate
     */
    name: string;
    /**
     * The category of the status.
     * @type {string}
     * @memberof StatusCreate
     */
    statusCategory: StatusCreateStatusCategoryEnum;
}


/**
 * @export
 */
export const StatusCreateStatusCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type StatusCreateStatusCategoryEnum = typeof StatusCreateStatusCategoryEnum[keyof typeof StatusCreateStatusCategoryEnum];

/**
 * Details of the statuses being created and their scope.
 * @export
 * @interface StatusCreateRequest
 */
export interface StatusCreateRequest {
    /**
     * 
     * @type {StatusScope}
     * @memberof StatusCreateRequest
     */
    scope: StatusScope;
    /**
     * Details of the statuses being created.
     * @type {Array<StatusCreate>}
     * @memberof StatusCreateRequest
     */
    statuses: Array<StatusCreate>;
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
 * The statuses associated with this workflow.
 * @export
 * @interface StatusLayoutUpdate
 */
export interface StatusLayoutUpdate {
    [key: string]: any | any;
    /**
     * 
     * @type {ApprovalConfiguration}
     * @memberof StatusLayoutUpdate
     */
    approvalConfiguration?: ApprovalConfiguration | null;
    /**
     * 
     * @type {WorkflowLayout}
     * @memberof StatusLayoutUpdate
     */
    layout?: WorkflowLayout | null;
    /**
     * The properties for this status layout.
     * @type {{ [key: string]: string; }}
     * @memberof StatusLayoutUpdate
     */
    properties: { [key: string]: string; };
    /**
     * A unique ID which the status will use to refer to this layout configuration.
     * @type {string}
     * @memberof StatusLayoutUpdate
     */
    statusReference: string;
}
/**
 * Details about the mapping from a status to a new status for an issue type.
 * @export
 * @interface StatusMapping
 */
export interface StatusMapping {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof StatusMapping
     */
    issueTypeId: string;
    /**
     * The ID of the new status.
     * @type {string}
     * @memberof StatusMapping
     */
    newStatusId: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof StatusMapping
     */
    statusId: string;
}
/**
 * The mapping of old to new status ID for a specific project and issue type.
 * @export
 * @interface StatusMappingDTO
 */
export interface StatusMappingDTO {
    [key: string]: any | any;
    /**
     * The issue type for the status mapping.
     * @type {string}
     * @memberof StatusMappingDTO
     */
    issueTypeId: string;
    /**
     * The project for the status mapping.
     * @type {string}
     * @memberof StatusMappingDTO
     */
    projectId: string;
    /**
     * The list of old and new status ID mappings for the specified project and issue type.
     * @type {Array<StatusMigration>}
     * @memberof StatusMappingDTO
     */
    statusMigrations: Array<StatusMigration>;
}
/**
 * The details of the statuses in the associated workflows.
 * @export
 * @interface StatusMetadata
 */
export interface StatusMetadata {
    /**
     * The category of the status.
     * @type {string}
     * @memberof StatusMetadata
     */
    category?: StatusMetadataCategoryEnum;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof StatusMetadata
     */
    id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof StatusMetadata
     */
    name?: string;
}


/**
 * @export
 */
export const StatusMetadataCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type StatusMetadataCategoryEnum = typeof StatusMetadataCategoryEnum[keyof typeof StatusMetadataCategoryEnum];

/**
 * The mapping of old to new status ID.
 * @export
 * @interface StatusMigration
 */
export interface StatusMigration {
    [key: string]: any | any;
    /**
     * The new status ID.
     * @type {string}
     * @memberof StatusMigration
     */
    newStatusReference: string;
    /**
     * The old status ID.
     * @type {string}
     * @memberof StatusMigration
     */
    oldStatusReference: string;
}
/**
 * The list of issue types.
 * @export
 * @interface StatusProjectIssueTypeUsage
 */
export interface StatusProjectIssueTypeUsage {
    /**
     * The issue type ID.
     * @type {string}
     * @memberof StatusProjectIssueTypeUsage
     */
    id?: string;
}
/**
 * The issue types using this status in a project.
 * @export
 * @interface StatusProjectIssueTypeUsageDTO
 */
export interface StatusProjectIssueTypeUsageDTO {
    /**
     * 
     * @type {StatusProjectIssueTypeUsagePage}
     * @memberof StatusProjectIssueTypeUsageDTO
     */
    issueTypes?: StatusProjectIssueTypeUsagePage;
    /**
     * The project ID.
     * @type {string}
     * @memberof StatusProjectIssueTypeUsageDTO
     */
    projectId?: string;
    /**
     * The status ID.
     * @type {string}
     * @memberof StatusProjectIssueTypeUsageDTO
     */
    statusId?: string;
}
/**
 * A page of issue types.
 * @export
 * @interface StatusProjectIssueTypeUsagePage
 */
export interface StatusProjectIssueTypeUsagePage {
    /**
     * Page token for the next page of issue type usages.
     * @type {string}
     * @memberof StatusProjectIssueTypeUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of issue types.
     * @type {Array<StatusProjectIssueTypeUsage>}
     * @memberof StatusProjectIssueTypeUsagePage
     */
    values?: Array<StatusProjectIssueTypeUsage>;
}
/**
 * The project.
 * @export
 * @interface StatusProjectUsage
 */
export interface StatusProjectUsage {
    /**
     * The project ID.
     * @type {string}
     * @memberof StatusProjectUsage
     */
    id?: string;
}
/**
 * The projects using this status.
 * @export
 * @interface StatusProjectUsageDTO
 */
export interface StatusProjectUsageDTO {
    /**
     * 
     * @type {StatusProjectUsagePage}
     * @memberof StatusProjectUsageDTO
     */
    projects?: StatusProjectUsagePage;
    /**
     * The status ID.
     * @type {string}
     * @memberof StatusProjectUsageDTO
     */
    statusId?: string;
}
/**
 * A page of projects.
 * @export
 * @interface StatusProjectUsagePage
 */
export interface StatusProjectUsagePage {
    /**
     * Page token for the next page of issue type usages.
     * @type {string}
     * @memberof StatusProjectUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of projects.
     * @type {Array<StatusProjectUsage>}
     * @memberof StatusProjectUsagePage
     */
    values?: Array<StatusProjectUsage>;
}
/**
 * The status reference and port that a transition is connected to.
 * @export
 * @interface StatusReferenceAndPort
 */
export interface StatusReferenceAndPort {
    /**
     * The port this transition uses to connect to this status.
     * @type {number}
     * @memberof StatusReferenceAndPort
     */
    port?: number;
    /**
     * The reference of this status.
     * @type {string}
     * @memberof StatusReferenceAndPort
     */
    statusReference: string;
}
/**
 * The scope of the status.
 * @export
 * @interface StatusScope
 */
export interface StatusScope {
    /**
     * 
     * @type {ProjectId}
     * @memberof StatusScope
     */
    project?: ProjectId | null;
    /**
     * The scope of the status. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
     * @type {string}
     * @memberof StatusScope
     */
    type: StatusScopeTypeEnum;
}


/**
 * @export
 */
export const StatusScopeTypeEnum = {
    Project: 'PROJECT',
    Global: 'GLOBAL'
} as const;
export type StatusScopeTypeEnum = typeof StatusScopeTypeEnum[keyof typeof StatusScopeTypeEnum];

/**
 * Details of the status being updated.
 * @export
 * @interface StatusUpdate
 */
export interface StatusUpdate {
    [key: string]: any | any;
    /**
     * The description of the status.
     * @type {string}
     * @memberof StatusUpdate
     */
    description?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof StatusUpdate
     */
    id: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof StatusUpdate
     */
    name: string;
    /**
     * The category of the status.
     * @type {string}
     * @memberof StatusUpdate
     */
    statusCategory: StatusUpdateStatusCategoryEnum;
}


/**
 * @export
 */
export const StatusUpdateStatusCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type StatusUpdateStatusCategoryEnum = typeof StatusUpdateStatusCategoryEnum[keyof typeof StatusUpdateStatusCategoryEnum];

/**
 * The list of statuses that will be updated.
 * @export
 * @interface StatusUpdateRequest
 */
export interface StatusUpdateRequest {
    /**
     * The list of statuses that will be updated.
     * @type {Array<StatusUpdate>}
     * @memberof StatusUpdateRequest
     */
    statuses: Array<StatusUpdate>;
}
/**
 * Workflows using the status.
 * @export
 * @interface StatusWorkflowUsageDTO
 */
export interface StatusWorkflowUsageDTO {
    /**
     * The status ID.
     * @type {string}
     * @memberof StatusWorkflowUsageDTO
     */
    statusId?: string;
    /**
     * 
     * @type {StatusWorkflowUsagePage}
     * @memberof StatusWorkflowUsageDTO
     */
    workflows?: StatusWorkflowUsagePage;
}
/**
 * A page of workflows.
 * @export
 * @interface StatusWorkflowUsagePage
 */
export interface StatusWorkflowUsagePage {
    /**
     * Page token for the next page of issue type usages.
     * @type {string}
     * @memberof StatusWorkflowUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of statuses.
     * @type {Array<StatusWorkflowUsageWorkflow>}
     * @memberof StatusWorkflowUsagePage
     */
    values?: Array<StatusWorkflowUsageWorkflow>;
}
/**
 * The worflow.
 * @export
 * @interface StatusWorkflowUsageWorkflow
 */
export interface StatusWorkflowUsageWorkflow {
    /**
     * The workflow ID.
     * @type {string}
     * @memberof StatusWorkflowUsageWorkflow
     */
    id?: string;
}
/**
 * The statuses associated with each workflow.
 * @export
 * @interface StatusesPerWorkflow
 */
export interface StatusesPerWorkflow {
    /**
     * The ID of the initial status for the workflow.
     * @type {string}
     * @memberof StatusesPerWorkflow
     */
    initialStatusId?: string;
    /**
     * The status IDs associated with the workflow.
     * @type {Set<string>}
     * @memberof StatusesPerWorkflow
     */
    statuses?: Array<string>;
    /**
     * The ID of the workflow.
     * @type {string}
     * @memberof StatusesPerWorkflow
     */
    workflowId?: string;
}
/**
 * 
 * @export
 * @interface SubmittedBulkOperation
 */
export interface SubmittedBulkOperation {
    /**
     * 
     * @type {string}
     * @memberof SubmittedBulkOperation
     */
    taskId?: string;
}
/**
 * An issue suggested for use in the issue picker auto-completion.
 * @export
 * @interface SuggestedIssue
 */
export interface SuggestedIssue {
    /**
     * The ID of the issue.
     * @type {number}
     * @memberof SuggestedIssue
     */
    readonly id?: number;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly img?: string;
    /**
     * The key of the issue.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly key?: string;
    /**
     * The key of the issue in HTML format.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly keyHtml?: string;
    /**
     * The phrase containing the query string in HTML format, with the string highlighted with HTML bold tags.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly summary?: string;
    /**
     * The phrase containing the query string, as plain text.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly summaryText?: string;
}
/**
 * Details of changes to a priority scheme's priorities that require suggested priority mappings.
 * @export
 * @interface SuggestedMappingsForPrioritiesRequestBean
 */
export interface SuggestedMappingsForPrioritiesRequestBean {
    /**
     * The ids of priorities being removed from the scheme.
     * @type {Array<number>}
     * @memberof SuggestedMappingsForPrioritiesRequestBean
     */
    add?: Array<number>;
    /**
     * The ids of priorities being removed from the scheme.
     * @type {Array<number>}
     * @memberof SuggestedMappingsForPrioritiesRequestBean
     */
    remove?: Array<number>;
}
/**
 * Details of changes to a priority scheme's projects that require suggested priority mappings.
 * @export
 * @interface SuggestedMappingsForProjectsRequestBean
 */
export interface SuggestedMappingsForProjectsRequestBean {
    /**
     * The ids of projects being added to the scheme.
     * @type {Array<number>}
     * @memberof SuggestedMappingsForProjectsRequestBean
     */
    add?: Array<number>;
}
/**
 * Details of changes to a priority scheme that require suggested priority mappings.
 * @export
 * @interface SuggestedMappingsRequestBean
 */
export interface SuggestedMappingsRequestBean {
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof SuggestedMappingsRequestBean
     */
    maxResults?: number;
    /**
     * The priority changes in the scheme.
     * @type {SuggestedMappingsForPrioritiesRequestBean}
     * @memberof SuggestedMappingsRequestBean
     */
    priorities?: SuggestedMappingsForPrioritiesRequestBean;
    /**
     * The project changes in the scheme.
     * @type {SuggestedMappingsForProjectsRequestBean}
     * @memberof SuggestedMappingsRequestBean
     */
    projects?: SuggestedMappingsForProjectsRequestBean;
    /**
     * The id of the priority scheme.
     * @type {number}
     * @memberof SuggestedMappingsRequestBean
     */
    schemeId?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof SuggestedMappingsRequestBean
     */
    startAt?: number;
}
/**
 * List of system avatars.
 * @export
 * @interface SystemAvatars
 */
export interface SystemAvatars {
    /**
     * A list of avatar details.
     * @type {Array<Avatar>}
     * @memberof SystemAvatars
     */
    readonly system?: Array<Avatar>;
}
/**
 * Classification mapping for classifications in source issues to respective target classification.
 * @export
 * @interface TargetClassification
 */
export interface TargetClassification {
    /**
     * An object with the key as the ID of the target classification and value with the list of the IDs of the current source classifications.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof TargetClassification
     */
    classifications: { [key: string]: Array<string>; };
    /**
     * ID of the source issueType to which issues present in `issueIdOrKeys` belongs.
     * @type {string}
     * @memberof TargetClassification
     */
    issueType?: string;
    /**
     * ID or key of the source project to which issues present in `issueIdOrKeys` belongs.
     * @type {string}
     * @memberof TargetClassification
     */
    projectKeyOrId?: string;
}
/**
 * Field mapping for mandatory fields in target
 * @export
 * @interface TargetMandatoryFields
 */
export interface TargetMandatoryFields {
    /**
     * Contains the value of mandatory fields
     * @type {{ [key: string]: Fields; }}
     * @memberof TargetMandatoryFields
     */
    fields: { [key: string]: Fields; };
}
/**
 * Status mapping for statuses in source workflow to respective target status in target workflow.
 * @export
 * @interface TargetStatus
 */
export interface TargetStatus {
    /**
     * An object with the key as the ID of the target status and value with the list of the IDs of the current source statuses.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof TargetStatus
     */
    statuses: { [key: string]: Array<string>; };
}
/**
 * An object representing the mapping of issues and data related to destination entities, like fields and statuses, that are required during a bulk move.
 * @export
 * @interface TargetToSourcesMapping
 */
export interface TargetToSourcesMapping {
    /**
     * If `true`, when issues are moved into this target group, they will adopt the target project's default classification, if they don't have a classification already. If they do have a classification, it will be kept the same even after the move. Leave `targetClassification` empty when using this.
     * 
     * If `false`, you must provide a `targetClassification` mapping for each classification associated with the selected issues.
     * 
     * [Benefit from data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/)
     * @type {boolean}
     * @memberof TargetToSourcesMapping
     */
    inferClassificationDefaults: boolean;
    /**
     * If `true`, values from the source issues will be retained for the mandatory fields in the field configuration of the destination project. The `targetMandatoryFields` property shouldn't be defined.
     * 
     * If `false`, the user is required to set values for mandatory fields present in the field configuration of the destination project. Provide input by defining the `targetMandatoryFields` property
     * @type {boolean}
     * @memberof TargetToSourcesMapping
     */
    inferFieldDefaults: boolean;
    /**
     * If `true`, the statuses of issues being moved in this target group that are not present in the target workflow will be changed to the default status of the target workflow (see below). Leave `targetStatus` empty when using this.
     * 
     * If `false`, you must provide a `targetStatus` for each status not present in the target workflow.
     * 
     * The default status in a workflow is referred to as the "initial status". Each workflow has its own unique initial status. When an issue is created, it is automatically assigned to this initial status. Read more about configuring initial statuses: [Configure the initial status | Atlassian Support.](https://support.atlassian.com/jira-cloud-administration/docs/configure-the-initial-status/)
     * @type {boolean}
     * @memberof TargetToSourcesMapping
     */
    inferStatusDefaults: boolean;
    /**
     * When an issue is moved, its subtasks (if there are any) need to be moved with it. `inferSubtaskTypeDefault` helps with moving the subtasks by picking a random subtask type in the target project.
     * 
     * If `true`, subtasks will automatically move to the same project as their parent.
     * 
     * When they move:
     * 
     *  *  Their `issueType` will be set to the default for subtasks in the target project.
     *  *  Values for mandatory fields will be retained from the source issues
     *  *  Specifying separate mapping for implicit subtasks won’t be allowed.
     * 
     * If `false`, you must manually move the subtasks. They will retain the parent which they had in the current project after being moved.
     * @type {boolean}
     * @memberof TargetToSourcesMapping
     */
    inferSubtaskTypeDefault: boolean;
    /**
     * List of issue IDs or keys to be moved. These issues must be from the same project, have the same issue type, and be from the same parent (if they’re subtasks).
     * @type {Array<string>}
     * @memberof TargetToSourcesMapping
     */
    issueIdsOrKeys?: Array<string>;
    /**
     * List of the objects containing classifications in the source issues and their new values which need to be set during the bulk move operation.
     * 
     *  *  **You should only define this property when `inferClassificationDefaults` is `false`.**
     *  *  **In order to provide mapping for issues which don't have a classification, use `"-1"`.**
     * @type {Array<TargetClassification>}
     * @memberof TargetToSourcesMapping
     */
    targetClassification?: Array<TargetClassification> | null;
    /**
     * List of objects containing mandatory fields in the target field configuration and new values that need to be set during the bulk move operation.
     * 
     * The new values will only be applied if the field is mandatory in the target project and at least one issue from the source has that field empty, or if the field context is different in the target project (e.g. project-scoped version fields).
     * 
     * **You should only define this property when `inferFieldDefaults` is `false`.**
     * @type {Array<TargetMandatoryFields>}
     * @memberof TargetToSourcesMapping
     */
    targetMandatoryFields?: Array<TargetMandatoryFields> | null;
    /**
     * List of the objects containing statuses in the source workflow and their new values which need to be set during the bulk move operation.
     * 
     * The new values will only be applied if the source status is invalid for the target project and issue type.
     * 
     * **You should only define this property when `inferStatusDefaults` is `false`.**
     * @type {Array<TargetStatus>}
     * @memberof TargetToSourcesMapping
     */
    targetStatus?: Array<TargetStatus> | null;
}
/**
 * Details about a task.
 * @export
 * @interface TaskProgressBeanJsonNode
 */
export interface TaskProgressBeanJsonNode {
    /**
     * The description of the task.
     * @type {string}
     * @memberof TaskProgressBeanJsonNode
     */
    description?: string;
    /**
     * The execution time of the task, in milliseconds.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    elapsedRuntime: number;
    /**
     * A timestamp recording when the task was finished.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    finished?: number;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof TaskProgressBeanJsonNode
     */
    id: string;
    /**
     * A timestamp recording when the task progress was last updated.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    lastUpdate: number;
    /**
     * Information about the progress of the task.
     * @type {string}
     * @memberof TaskProgressBeanJsonNode
     */
    message?: string;
    /**
     * The progress of the task, as a percentage complete.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    progress: number;
    /**
     * The result of the task execution.
     * @type {JsonNode}
     * @memberof TaskProgressBeanJsonNode
     */
    result?: JsonNode;
    /**
     * The URL of the task.
     * @type {string}
     * @memberof TaskProgressBeanJsonNode
     */
    self: string;
    /**
     * A timestamp recording when the task was started.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    started?: number;
    /**
     * The status of the task.
     * @type {string}
     * @memberof TaskProgressBeanJsonNode
     */
    status: TaskProgressBeanJsonNodeStatusEnum;
    /**
     * A timestamp recording when the task was submitted.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    submitted: number;
    /**
     * The ID of the user who submitted the task.
     * @type {number}
     * @memberof TaskProgressBeanJsonNode
     */
    submittedBy: number;
}


/**
 * @export
 */
export const TaskProgressBeanJsonNodeStatusEnum = {
    Enqueued: 'ENQUEUED',
    Running: 'RUNNING',
    Complete: 'COMPLETE',
    Failed: 'FAILED',
    CancelRequested: 'CANCEL_REQUESTED',
    Cancelled: 'CANCELLED',
    Dead: 'DEAD'
} as const;
export type TaskProgressBeanJsonNodeStatusEnum = typeof TaskProgressBeanJsonNodeStatusEnum[keyof typeof TaskProgressBeanJsonNodeStatusEnum];

/**
 * Details about a task.
 * @export
 * @interface TaskProgressBeanObject
 */
export interface TaskProgressBeanObject {
    /**
     * The description of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    description?: string;
    /**
     * The execution time of the task, in milliseconds.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    elapsedRuntime: number;
    /**
     * A timestamp recording when the task was finished.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    finished?: number;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    id: string;
    /**
     * A timestamp recording when the task progress was last updated.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    lastUpdate: number;
    /**
     * Information about the progress of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    message?: string;
    /**
     * The progress of the task, as a percentage complete.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    progress: number;
    /**
     * The result of the task execution.
     * @type {any}
     * @memberof TaskProgressBeanObject
     */
    result?: any | null;
    /**
     * The URL of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    self: string;
    /**
     * A timestamp recording when the task was started.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    started?: number;
    /**
     * The status of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    status: TaskProgressBeanObjectStatusEnum;
    /**
     * A timestamp recording when the task was submitted.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    submitted: number;
    /**
     * The ID of the user who submitted the task.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    submittedBy: number;
}


/**
 * @export
 */
export const TaskProgressBeanObjectStatusEnum = {
    Enqueued: 'ENQUEUED',
    Running: 'RUNNING',
    Complete: 'COMPLETE',
    Failed: 'FAILED',
    CancelRequested: 'CANCEL_REQUESTED',
    Cancelled: 'CANCELLED',
    Dead: 'DEAD'
} as const;
export type TaskProgressBeanObjectStatusEnum = typeof TaskProgressBeanObjectStatusEnum[keyof typeof TaskProgressBeanObjectStatusEnum];

/**
 * Details about a task.
 * @export
 * @interface TaskProgressBeanRemoveOptionFromIssuesResult
 */
export interface TaskProgressBeanRemoveOptionFromIssuesResult {
    /**
     * The description of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    description?: string;
    /**
     * The execution time of the task, in milliseconds.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    elapsedRuntime: number;
    /**
     * A timestamp recording when the task was finished.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    finished?: number;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    id: string;
    /**
     * A timestamp recording when the task progress was last updated.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    lastUpdate: number;
    /**
     * Information about the progress of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    message?: string;
    /**
     * The progress of the task, as a percentage complete.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    progress: number;
    /**
     * The result of the task execution.
     * @type {RemoveOptionFromIssuesResult}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    result?: RemoveOptionFromIssuesResult;
    /**
     * The URL of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    self: string;
    /**
     * A timestamp recording when the task was started.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    started?: number;
    /**
     * The status of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    status: TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum;
    /**
     * A timestamp recording when the task was submitted.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    submitted: number;
    /**
     * The ID of the user who submitted the task.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    submittedBy: number;
}


/**
 * @export
 */
export const TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum = {
    Enqueued: 'ENQUEUED',
    Running: 'RUNNING',
    Complete: 'COMPLETE',
    Failed: 'FAILED',
    CancelRequested: 'CANCEL_REQUESTED',
    Cancelled: 'CANCELLED',
    Dead: 'DEAD'
} as const;
export type TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum = typeof TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum[keyof typeof TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum];

/**
 * Details of the time tracking configuration.
 * @export
 * @interface TimeTrackingConfiguration
 */
export interface TimeTrackingConfiguration {
    /**
     * The default unit of time applied to logged time.
     * @type {string}
     * @memberof TimeTrackingConfiguration
     */
    defaultUnit: TimeTrackingConfigurationDefaultUnitEnum;
    /**
     * The format that will appear on an issue's *Time Spent* field.
     * @type {string}
     * @memberof TimeTrackingConfiguration
     */
    timeFormat: TimeTrackingConfigurationTimeFormatEnum;
    /**
     * The number of days in a working week.
     * @type {number}
     * @memberof TimeTrackingConfiguration
     */
    workingDaysPerWeek: number;
    /**
     * The number of hours in a working day.
     * @type {number}
     * @memberof TimeTrackingConfiguration
     */
    workingHoursPerDay: number;
}


/**
 * @export
 */
export const TimeTrackingConfigurationDefaultUnitEnum = {
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day',
    Week: 'week'
} as const;
export type TimeTrackingConfigurationDefaultUnitEnum = typeof TimeTrackingConfigurationDefaultUnitEnum[keyof typeof TimeTrackingConfigurationDefaultUnitEnum];

/**
 * @export
 */
export const TimeTrackingConfigurationTimeFormatEnum = {
    Pretty: 'pretty',
    Days: 'days',
    Hours: 'hours'
} as const;
export type TimeTrackingConfigurationTimeFormatEnum = typeof TimeTrackingConfigurationTimeFormatEnum[keyof typeof TimeTrackingConfigurationTimeFormatEnum];

/**
 * Time tracking details.
 * @export
 * @interface TimeTrackingDetails
 */
export interface TimeTrackingDetails {
    /**
     * The original estimate of time needed for this issue in readable format.
     * @type {string}
     * @memberof TimeTrackingDetails
     */
    readonly originalEstimate?: string;
    /**
     * The original estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof TimeTrackingDetails
     */
    readonly originalEstimateSeconds?: number;
    /**
     * The remaining estimate of time needed for this issue in readable format.
     * @type {string}
     * @memberof TimeTrackingDetails
     */
    readonly remainingEstimate?: string;
    /**
     * The remaining estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof TimeTrackingDetails
     */
    readonly remainingEstimateSeconds?: number;
    /**
     * Time worked on this issue in readable format.
     * @type {string}
     * @memberof TimeTrackingDetails
     */
    readonly timeSpent?: string;
    /**
     * Time worked on this issue in seconds.
     * @type {number}
     * @memberof TimeTrackingDetails
     */
    readonly timeSpentSeconds?: number;
}
/**
 * Details about the time tracking provider.
 * @export
 * @interface TimeTrackingProvider
 */
export interface TimeTrackingProvider {
    /**
     * The key for the time tracking provider. For example, *JIRA*.
     * @type {string}
     * @memberof TimeTrackingProvider
     */
    key: string;
    /**
     * The name of the time tracking provider. For example, *JIRA provided time tracking*.
     * @type {string}
     * @memberof TimeTrackingProvider
     */
    name?: string;
    /**
     * The URL of the configuration page for the time tracking provider app. For example, *\/example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.
     * @type {string}
     * @memberof TimeTrackingProvider
     */
    readonly url?: string;
}
/**
 * Details of a workflow transition.
 * @export
 * @interface Transition
 */
export interface Transition {
    /**
     * The description of the transition.
     * @type {string}
     * @memberof Transition
     */
    description: string;
    /**
     * The statuses the transition can start from.
     * @type {Array<string>}
     * @memberof Transition
     */
    from: Array<string>;
    /**
     * The ID of the transition.
     * @type {string}
     * @memberof Transition
     */
    id: string;
    /**
     * The name of the transition.
     * @type {string}
     * @memberof Transition
     */
    name: string;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: any; }}
     * @memberof Transition
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {WorkflowRules}
     * @memberof Transition
     */
    rules?: WorkflowRules;
    /**
     * 
     * @type {TransitionScreenDetails}
     * @memberof Transition
     */
    screen?: TransitionScreenDetails;
    /**
     * The status the transition goes to.
     * @type {string}
     * @memberof Transition
     */
    to: string;
    /**
     * The type of the transition.
     * @type {string}
     * @memberof Transition
     */
    type: TransitionTypeEnum;
}


/**
 * @export
 */
export const TransitionTypeEnum = {
    Global: 'global',
    Initial: 'initial',
    Directed: 'directed'
} as const;
export type TransitionTypeEnum = typeof TransitionTypeEnum[keyof typeof TransitionTypeEnum];

/**
 * The details of a transition screen.
 * @export
 * @interface TransitionScreenDetails
 */
export interface TransitionScreenDetails {
    /**
     * The ID of the screen.
     * @type {string}
     * @memberof TransitionScreenDetails
     */
    id: string;
    /**
     * The name of the screen.
     * @type {string}
     * @memberof TransitionScreenDetails
     */
    name?: string;
}
/**
 * The transition update data. Note that a transition can have either the deprecated `to`/`from` fields or the `toStatusReference`/`links` fields, but never both nor a combination.
 * @export
 * @interface TransitionUpdateDTO
 */
export interface TransitionUpdateDTO {
    [key: string]: any | any;
    /**
     * The post-functions of the transition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof TransitionUpdateDTO
     */
    actions?: Array<WorkflowRuleConfiguration>;
    /**
     * 
     * @type {ConditionGroupUpdate}
     * @memberof TransitionUpdateDTO
     */
    conditions?: ConditionGroupUpdate | null;
    /**
     * The custom event ID of the transition.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    customIssueEventId?: string;
    /**
     * The description of the transition.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    description?: string;
    /**
     * The statuses and ports that the transition can start from. This field is deprecated - use `toStatusReference`/`links` instead.
     * @type {Array<StatusReferenceAndPort>}
     * @memberof TransitionUpdateDTO
     * @deprecated
     */
    from?: Array<StatusReferenceAndPort>;
    /**
     * The ID of the transition.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    id: string;
    /**
     * The statuses the transition can start from, and the mapping of ports between the statuses.
     * @type {Array<WorkflowTransitionLinks>}
     * @memberof TransitionUpdateDTO
     */
    links?: Array<WorkflowTransitionLinks>;
    /**
     * The name of the transition.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    name: string;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: string; }}
     * @memberof TransitionUpdateDTO
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {StatusReferenceAndPort}
     * @memberof TransitionUpdateDTO
     * @deprecated
     */
    to?: StatusReferenceAndPort | null;
    /**
     * The status the transition goes to.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    toStatusReference?: string;
    /**
     * 
     * @type {WorkflowRuleConfiguration}
     * @memberof TransitionUpdateDTO
     */
    transitionScreen?: WorkflowRuleConfiguration | null;
    /**
     * The triggers of the transition.
     * @type {Array<WorkflowTrigger>}
     * @memberof TransitionUpdateDTO
     */
    triggers?: Array<WorkflowTrigger>;
    /**
     * The transition type.
     * @type {string}
     * @memberof TransitionUpdateDTO
     */
    type: TransitionUpdateDTOTypeEnum;
    /**
     * The validators of the transition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof TransitionUpdateDTO
     */
    validators?: Array<WorkflowRuleConfiguration>;
}


/**
 * @export
 */
export const TransitionUpdateDTOTypeEnum = {
    Initial: 'INITIAL',
    Global: 'GLOBAL',
    Directed: 'DIRECTED'
} as const;
export type TransitionUpdateDTOTypeEnum = typeof TransitionUpdateDTOTypeEnum[keyof typeof TransitionUpdateDTOTypeEnum];

/**
 * List of issue transitions.
 * @export
 * @interface Transitions
 */
export interface Transitions {
    /**
     * Expand options that include additional transitions details in the response.
     * @type {string}
     * @memberof Transitions
     */
    readonly expand?: string;
    /**
     * List of issue transitions.
     * @type {Array<IssueTransition>}
     * @memberof Transitions
     */
    readonly transitions?: Array<IssueTransition>;
}
/**
 * The details of a UI modification's context, which define where to activate the UI modification.
 * @export
 * @interface UiModificationContextDetails
 */
export interface UiModificationContextDetails {
    /**
     * The ID of the UI modification context.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    readonly id?: string;
    /**
     * Whether a context is available. For example, when a project is deleted the context becomes unavailable.
     * @type {boolean}
     * @memberof UiModificationContextDetails
     */
    readonly isAvailable?: boolean;
    /**
     * The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    issueTypeId?: string;
    /**
     * The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    projectId?: string;
    /**
     * The view type of the context. Only `GIC`(Global Issue Create), `IssueView` and `IssueTransition` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    viewType?: UiModificationContextDetailsViewTypeEnum;
}


/**
 * @export
 */
export const UiModificationContextDetailsViewTypeEnum = {
    Gic: 'GIC',
    IssueView: 'IssueView',
    IssueTransition: 'IssueTransition'
} as const;
export type UiModificationContextDetailsViewTypeEnum = typeof UiModificationContextDetailsViewTypeEnum[keyof typeof UiModificationContextDetailsViewTypeEnum];

/**
 * The details of a UI modification.
 * @export
 * @interface UiModificationDetails
 */
export interface UiModificationDetails {
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000.
     * @type {Array<UiModificationContextDetails>}
     * @memberof UiModificationDetails
     */
    readonly contexts?: Array<UiModificationContextDetails>;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly data?: string;
    /**
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly description?: string;
    /**
     * The ID of the UI modification.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly id: string;
    /**
     * The name of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly name: string;
    /**
     * The URL of the UI modification.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly self: string;
}
/**
 * Identifiers for a UI modification.
 * @export
 * @interface UiModificationIdentifiers
 */
export interface UiModificationIdentifiers {
    /**
     * The ID of the UI modification.
     * @type {string}
     * @memberof UiModificationIdentifiers
     */
    readonly id: string;
    /**
     * The URL of the UI modification.
     * @type {string}
     * @memberof UiModificationIdentifiers
     */
    readonly self: string;
}
/**
 * 
 * @export
 * @interface UnrestrictedUserEmail
 */
export interface UnrestrictedUserEmail {
    [key: string]: any | any;
    /**
     * The accountId of the user
     * @type {string}
     * @memberof UnrestrictedUserEmail
     */
    accountId?: string;
    /**
     * The email of the user
     * @type {string}
     * @memberof UnrestrictedUserEmail
     */
    email?: string;
}
/**
 * Details of a custom field.
 * @export
 * @interface UpdateCustomFieldDetails
 */
export interface UpdateCustomFieldDetails {
    /**
     * The description of the custom field. The maximum length is 40000 characters.
     * @type {string}
     * @memberof UpdateCustomFieldDetails
     */
    description?: string;
    /**
     * The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateCustomFieldDetails
     */
    name?: string;
    /**
     * The searcher that defines the way the field is searched in Jira. It can be set to `null`, otherwise you must specify the valid searcher for the field type, as listed below (abbreviated values shown):
     * 
     *  *  `cascadingselect`: `cascadingselectsearcher`
     *  *  `datepicker`: `daterange`
     *  *  `datetime`: `datetimerange`
     *  *  `float`: `exactnumber` or `numberrange`
     *  *  `grouppicker`: `grouppickersearcher`
     *  *  `importid`: `exactnumber` or `numberrange`
     *  *  `labels`: `labelsearcher`
     *  *  `multicheckboxes`: `multiselectsearcher`
     *  *  `multigrouppicker`: `multiselectsearcher`
     *  *  `multiselect`: `multiselectsearcher`
     *  *  `multiuserpicker`: `userpickergroupsearcher`
     *  *  `multiversion`: `versionsearcher`
     *  *  `project`: `projectsearcher`
     *  *  `radiobuttons`: `multiselectsearcher`
     *  *  `readonlyfield`: `textsearcher`
     *  *  `select`: `multiselectsearcher`
     *  *  `textarea`: `textsearcher`
     *  *  `textfield`: `textsearcher`
     *  *  `url`: `exacttextsearcher`
     *  *  `userpicker`: `userpickergroupsearcher`
     *  *  `version`: `versionsearcher`
     * @type {string}
     * @memberof UpdateCustomFieldDetails
     */
    searcherKey?: UpdateCustomFieldDetailsSearcherKeyEnum;
}


/**
 * @export
 */
export const UpdateCustomFieldDetailsSearcherKeyEnum = {
    Cascadingselectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher',
    Daterange: 'com.atlassian.jira.plugin.system.customfieldtypes:daterange',
    Datetimerange: 'com.atlassian.jira.plugin.system.customfieldtypes:datetimerange',
    Exactnumber: 'com.atlassian.jira.plugin.system.customfieldtypes:exactnumber',
    Exacttextsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher',
    Grouppickersearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher',
    Labelsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher',
    Multiselectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher',
    Numberrange: 'com.atlassian.jira.plugin.system.customfieldtypes:numberrange',
    Projectsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher',
    Textsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:textsearcher',
    Userpickergroupsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher',
    Versionsearcher: 'com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher'
} as const;
export type UpdateCustomFieldDetailsSearcherKeyEnum = typeof UpdateCustomFieldDetailsSearcherKeyEnum[keyof typeof UpdateCustomFieldDetailsSearcherKeyEnum];

/**
 * The request for updating the default project classification level.
 * @export
 * @interface UpdateDefaultProjectClassificationBean
 */
export interface UpdateDefaultProjectClassificationBean {
    /**
     * The ID of the project classification.
     * @type {string}
     * @memberof UpdateDefaultProjectClassificationBean
     */
    id: string;
}
/**
 * The ID of a screen scheme.
 * @export
 * @interface UpdateDefaultScreenScheme
 */
export interface UpdateDefaultScreenScheme {
    /**
     * The ID of the screen scheme.
     * @type {string}
     * @memberof UpdateDefaultScreenScheme
     */
    screenSchemeId: string;
}
/**
 * The details of the field configuration scheme.
 * @export
 * @interface UpdateFieldConfigurationSchemeDetails
 */
export interface UpdateFieldConfigurationSchemeDetails {
    /**
     * The description of the field configuration scheme.
     * @type {string}
     * @memberof UpdateFieldConfigurationSchemeDetails
     */
    description?: string;
    /**
     * The name of the field configuration scheme. The name must be unique.
     * @type {string}
     * @memberof UpdateFieldConfigurationSchemeDetails
     */
    name: string;
}
/**
 * Details of issue security scheme level.
 * @export
 * @interface UpdateIssueSecurityLevelDetails
 */
export interface UpdateIssueSecurityLevelDetails {
    [key: string]: any | any;
    /**
     * The description of the issue security scheme level.
     * @type {string}
     * @memberof UpdateIssueSecurityLevelDetails
     */
    description?: string;
    /**
     * The name of the issue security scheme level. Must be unique.
     * @type {string}
     * @memberof UpdateIssueSecurityLevelDetails
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface UpdateIssueSecuritySchemeRequestBean
 */
export interface UpdateIssueSecuritySchemeRequestBean {
    /**
     * The description of the security scheme scheme.
     * @type {string}
     * @memberof UpdateIssueSecuritySchemeRequestBean
     */
    description?: string;
    /**
     * The name of the security scheme scheme. Must be unique.
     * @type {string}
     * @memberof UpdateIssueSecuritySchemeRequestBean
     */
    name?: string;
}
/**
 * Details of a notification scheme.
 * @export
 * @interface UpdateNotificationSchemeDetails
 */
export interface UpdateNotificationSchemeDetails {
    [key: string]: any | any;
    /**
     * The description of the notification scheme.
     * @type {string}
     * @memberof UpdateNotificationSchemeDetails
     */
    description?: string;
    /**
     * The name of the notification scheme. Must be unique.
     * @type {string}
     * @memberof UpdateNotificationSchemeDetails
     */
    name?: string;
}
/**
 * Update priorities in a scheme
 * @export
 * @interface UpdatePrioritiesInSchemeRequestBean
 */
export interface UpdatePrioritiesInSchemeRequestBean {
    [key: string]: any | any;
    /**
     * Priorities to add to a scheme
     * @type {PrioritySchemeChangesWithoutMappings}
     * @memberof UpdatePrioritiesInSchemeRequestBean
     */
    add?: PrioritySchemeChangesWithoutMappings;
    /**
     * Priorities to remove from a scheme
     * @type {PrioritySchemeChangesWithoutMappings}
     * @memberof UpdatePrioritiesInSchemeRequestBean
     */
    remove?: PrioritySchemeChangesWithoutMappings;
}
/**
 * Details of an issue priority.
 * @export
 * @interface UpdatePriorityDetails
 */
export interface UpdatePriorityDetails {
    [key: string]: any | any;
    /**
     * The ID for the avatar for the priority. This parameter is nullable and both iconUrl and avatarId cannot be defined.
     * @type {number}
     * @memberof UpdatePriorityDetails
     */
    avatarId?: number;
    /**
     * The description of the priority.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    description?: string | null;
    /**
     * The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Both iconUrl and avatarId cannot be defined.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    iconUrl?: UpdatePriorityDetailsIconUrlEnum | null;
    /**
     * The name of the priority. Must be unique.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    name?: string | null;
    /**
     * The status color of the priority in 3-digit or 6-digit hexadecimal format.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    statusColor?: string | null;
}


/**
 * @export
 */
export const UpdatePriorityDetailsIconUrlEnum = {
    BlockerPng: '/images/icons/priorities/blocker.png',
    CriticalPng: '/images/icons/priorities/critical.png',
    HighPng: '/images/icons/priorities/high.png',
    HighestPng: '/images/icons/priorities/highest.png',
    LowPng: '/images/icons/priorities/low.png',
    LowestPng: '/images/icons/priorities/lowest.png',
    MajorPng: '/images/icons/priorities/major.png',
    MediumPng: '/images/icons/priorities/medium.png',
    MinorPng: '/images/icons/priorities/minor.png',
    TrivialPng: '/images/icons/priorities/trivial.png',
    BlockerNewPng: '/images/icons/priorities/blocker_new.png',
    CriticalNewPng: '/images/icons/priorities/critical_new.png',
    HighNewPng: '/images/icons/priorities/high_new.png',
    HighestNewPng: '/images/icons/priorities/highest_new.png',
    LowNewPng: '/images/icons/priorities/low_new.png',
    LowestNewPng: '/images/icons/priorities/lowest_new.png',
    MajorNewPng: '/images/icons/priorities/major_new.png',
    MediumNewPng: '/images/icons/priorities/medium_new.png',
    MinorNewPng: '/images/icons/priorities/minor_new.png',
    TrivialNewPng: '/images/icons/priorities/trivial_new.png'
} as const;
export type UpdatePriorityDetailsIconUrlEnum = typeof UpdatePriorityDetailsIconUrlEnum[keyof typeof UpdatePriorityDetailsIconUrlEnum];

/**
 * Details of a priority scheme.
 * @export
 * @interface UpdatePrioritySchemeRequestBean
 */
export interface UpdatePrioritySchemeRequestBean {
    /**
     * The default priority of the scheme.
     * @type {number}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    defaultPriorityId?: number;
    /**
     * The description of the priority scheme.
     * @type {string}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    description?: string;
    /**
     * Instructions to migrate the priorities of issues.
     * 
     * `in` mappings are used to migrate the priorities of issues to priorities used within the priority scheme.
     * 
     * `out` mappings are used to migrate the priorities of issues to priorities not used within the priority scheme.
     * 
     *  *  When **priorities** are **added** to the priority scheme, no mapping needs to be provided as the new priorities are not used by any issues.
     *  *  When **priorities** are **removed** from the priority scheme, issues that are using those priorities must be migrated to new priorities used by the priority scheme.
     *     
     *      *  An `in` mapping must be provided for each of these priorities.
     *  *  When **projects** are **added** to the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities used by the priority scheme. This can occur when the current scheme does not use all the priorities in the project(s)' priority scheme(s).
     *     
     *      *  An `in` mapping must be provided for each of these priorities.
     *  *  When **projects** are **removed** from the priority scheme, the priorities of issues in those projects might need to be migrated to new priorities within the **Default Priority Scheme** that are not used by the priority scheme. This can occur when the **Default Priority Scheme** does not use all the priorities within the current scheme.
     *     
     *      *  An `out` mapping must be provided for each of these priorities.
     * 
     * For more information on `in` and `out` mappings, see the child properties documentation for the `PriorityMapping` object below.
     * @type {PriorityMapping}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    mappings?: PriorityMapping;
    /**
     * The name of the priority scheme. Must be unique.
     * @type {string}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    name?: string;
    /**
     * The priorities in the scheme.
     * @type {UpdatePrioritiesInSchemeRequestBean}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    priorities?: UpdatePrioritiesInSchemeRequestBean;
    /**
     * The projects in the scheme.
     * @type {UpdateProjectsInSchemeRequestBean}
     * @memberof UpdatePrioritySchemeRequestBean
     */
    projects?: UpdateProjectsInSchemeRequestBean;
}
/**
 * Details of the updated priority scheme.
 * @export
 * @interface UpdatePrioritySchemeResponseBean
 */
export interface UpdatePrioritySchemeResponseBean {
    [key: string]: any | any;
    /**
     * 
     * @type {PrioritySchemeWithPaginatedPrioritiesAndProjects}
     * @memberof UpdatePrioritySchemeResponseBean
     */
    priorityScheme?: PrioritySchemeWithPaginatedPrioritiesAndProjects;
    /**
     * The in-progress issue migration task.
     * @type {TaskProgressBeanJsonNode}
     * @memberof UpdatePrioritySchemeResponseBean
     */
    readonly task?: TaskProgressBeanJsonNode;
}
/**
 * Details about the project.
 * @export
 * @interface UpdateProjectDetails
 */
export interface UpdateProjectDetails {
    /**
     * The default assignee when creating issues for this project.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    assigneeType?: UpdateProjectDetailsAssigneeTypeEnum;
    /**
     * An integer value for the project's avatar.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    avatarId?: number;
    /**
     * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. To remove the project category from the project, set the value to `-1.`
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    categoryId?: number;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    description?: string;
    /**
     * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    issueSecurityScheme?: number;
    /**
     * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    key?: string;
    /**
     * This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Cannot be provided with `leadAccountId`.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    lead?: string;
    /**
     * The account ID of the project lead. Cannot be provided with `lead`.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    leadAccountId?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    name?: string;
    /**
     * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    notificationScheme?: number;
    /**
     * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    permissionScheme?: number;
    /**
     * Previous project keys to be released from the current project. Released keys must belong to the current project and not contain the current project key
     * @type {Set<string>}
     * @memberof UpdateProjectDetails
     */
    releasedProjectKeys?: Array<string>;
    /**
     * A link to information about this project, such as project documentation
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    url?: string;
}


/**
 * @export
 */
export const UpdateProjectDetailsAssigneeTypeEnum = {
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type UpdateProjectDetailsAssigneeTypeEnum = typeof UpdateProjectDetailsAssigneeTypeEnum[keyof typeof UpdateProjectDetailsAssigneeTypeEnum];

/**
 * Update projects in a scheme
 * @export
 * @interface UpdateProjectsInSchemeRequestBean
 */
export interface UpdateProjectsInSchemeRequestBean {
    [key: string]: any | any;
    /**
     * Projects to add to a scheme
     * @type {PrioritySchemeChangesWithoutMappings}
     * @memberof UpdateProjectsInSchemeRequestBean
     */
    add?: PrioritySchemeChangesWithoutMappings;
    /**
     * Projects to remove from a scheme
     * @type {PrioritySchemeChangesWithoutMappings}
     * @memberof UpdateProjectsInSchemeRequestBean
     */
    remove?: PrioritySchemeChangesWithoutMappings;
}
/**
 * Details of an issue resolution.
 * @export
 * @interface UpdateResolutionDetails
 */
export interface UpdateResolutionDetails {
    [key: string]: any | any;
    /**
     * The description of the resolution.
     * @type {string}
     * @memberof UpdateResolutionDetails
     */
    description?: string;
    /**
     * The name of the resolution. Must be unique.
     * @type {string}
     * @memberof UpdateResolutionDetails
     */
    name: string;
}
/**
 * Details of a screen.
 * @export
 * @interface UpdateScreenDetails
 */
export interface UpdateScreenDetails {
    /**
     * The description of the screen. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenDetails
     */
    description?: string;
    /**
     * The name of the screen. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenDetails
     */
    name?: string;
}
/**
 * Details of a screen scheme.
 * @export
 * @interface UpdateScreenSchemeDetails
 */
export interface UpdateScreenSchemeDetails {
    /**
     * The description of the screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenSchemeDetails
     */
    description?: string;
    /**
     * The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenSchemeDetails
     */
    name?: string;
    /**
     * The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
     * @type {UpdateScreenTypes}
     * @memberof UpdateScreenSchemeDetails
     */
    screens?: UpdateScreenTypes;
}
/**
 * The IDs of the screens for the screen types of the screen scheme.
 * @export
 * @interface UpdateScreenTypes
 */
export interface UpdateScreenTypes {
    /**
     * The ID of the create screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    create?: string;
    /**
     * The ID of the default screen. When specified, must include a screen ID as a default screen is required.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    default?: string;
    /**
     * The ID of the edit screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    edit?: string;
    /**
     * The ID of the view screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    view?: string;
}
/**
 * The details of a UI modification.
 * @export
 * @interface UpdateUiModificationDetails
 */
export interface UpdateUiModificationDetails {
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts.
     * @type {Array<UiModificationContextDetails>}
     * @memberof UpdateUiModificationDetails
     */
    contexts?: Array<UiModificationContextDetails>;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    data?: string;
    /**
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    description?: string;
    /**
     * The name of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface UpdateUserToGroupBean
 */
export interface UpdateUserToGroupBean {
    [key: string]: any | any;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UpdateUserToGroupBean
     */
    accountId?: string;
    /**
     * This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UpdateUserToGroupBean
     */
    name?: string;
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
 * A user with details as permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:
 * 
 *  *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).
 *  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.
 *  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
 * @export
 * @interface User
 */
export interface User {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof User
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof User
     */
    readonly accountType?: UserAccountTypeEnum;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof User
     */
    readonly active?: boolean;
    /**
     * The application roles the user is assigned to.
     * @type {SimpleListWrapperApplicationRole}
     * @memberof User
     */
    readonly applicationRoles?: SimpleListWrapperApplicationRole;
    /**
     * The avatars of the user.
     * @type {AvatarUrlsBean}
     * @memberof User
     */
    readonly avatarUrls?: AvatarUrlsBean;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof User
     */
    readonly displayName?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof User
     */
    readonly emailAddress?: string;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof User
     */
    readonly expand?: string;
    /**
     * The groups that the user belongs to.
     * @type {SimpleListWrapperGroupName}
     * @memberof User
     */
    readonly groups?: SimpleListWrapperGroupName;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    key?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof User
     */
    readonly locale?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof User
     */
    readonly self?: string;
    /**
     * The time zone specified in the user's profile. If the user's time zone is not visible to the current user (due to user's profile setting), or if a time zone has not been set, the instance's default time zone will be returned.
     * @type {string}
     * @memberof User
     */
    readonly timeZone?: string;
}


/**
 * @export
 */
export const UserAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type UserAccountTypeEnum = typeof UserAccountTypeEnum[keyof typeof UserAccountTypeEnum];

/**
 * 
 * @export
 * @interface UserBean
 */
export interface UserBean {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserBean
     */
    accountId?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof UserBean
     */
    active?: boolean;
    /**
     * The avatars of the user.
     * @type {UserBeanAvatarUrls}
     * @memberof UserBean
     */
    avatarUrls?: UserBeanAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof UserBean
     */
    displayName?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The key of the user.
     * @type {string}
     * @memberof UserBean
     */
    key?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The username of the user.
     * @type {string}
     * @memberof UserBean
     */
    name?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof UserBean
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface UserBeanAvatarUrls
 */
export interface UserBeanAvatarUrls {
    /**
     * The URL of the user's 16x16 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the user's 24x24 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the user's 32x32 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the user's 48x48 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * 
 * @export
 * @interface UserColumnRequestBody
 */
export interface UserColumnRequestBody {
    /**
     * 
     * @type {Array<string>}
     * @memberof UserColumnRequestBody
     */
    columns?: Array<string>;
}
/**
 * A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
 * @export
 * @interface UserContextVariable
 */
export interface UserContextVariable {
    /**
     * The account ID of the user.
     * @type {string}
     * @memberof UserContextVariable
     */
    accountId: string;
    /**
     * Type of custom context variable.
     * @type {string}
     * @memberof UserContextVariable
     */
    type: string;
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
 * Filter for a User Picker (single) custom field.
 * @export
 * @interface UserFilter
 */
export interface UserFilter {
    /**
     * Whether the filter is enabled.
     * @type {boolean}
     * @memberof UserFilter
     */
    enabled: boolean;
    /**
     * User groups autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 groups can be provided.
     * @type {Set<string>}
     * @memberof UserFilter
     */
    groups?: Array<string>;
    /**
     * Roles that autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 roles can be provided.
     * @type {Set<number>}
     * @memberof UserFilter
     */
    roleIds?: Array<number>;
}
/**
 * List of user account IDs.
 * @export
 * @interface UserKey
 */
export interface UserKey {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.
     * @type {string}
     * @memberof UserKey
     */
    accountId?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserKey
     */
    key?: string;
}
/**
 * A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.
 * @export
 * @interface UserList
 */
export interface UserList {
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly endIndex?: number;
    /**
     * The list of items.
     * @type {Array<User>}
     * @memberof UserList
     */
    readonly items?: Array<User>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly maxResults?: number;
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly size?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly startIndex?: number;
}
/**
 * 
 * @export
 * @interface UserMigrationBean
 */
export interface UserMigrationBean {
    /**
     * 
     * @type {string}
     * @memberof UserMigrationBean
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserMigrationBean
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof UserMigrationBean
     */
    username?: string;
}
/**
 * Details of a permission and its availability to a user.
 * @export
 * @interface UserPermission
 */
export interface UserPermission {
    [key: string]: any | any;
    /**
     * Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.`
     * @type {boolean}
     * @memberof UserPermission
     */
    deprecatedKey?: boolean;
    /**
     * The description of the permission.
     * @type {string}
     * @memberof UserPermission
     */
    description?: string;
    /**
     * Whether the permission is available to the user in the queried context.
     * @type {boolean}
     * @memberof UserPermission
     */
    havePermission?: boolean;
    /**
     * The ID of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
     * @type {string}
     * @memberof UserPermission
     */
    id?: string;
    /**
     * The key of the permission. Either `id` or `key` must be specified. Use [Get all permissions](#api-rest-api-3-permissions-get) to get the list of permissions.
     * @type {string}
     * @memberof UserPermission
     */
    key?: string;
    /**
     * The name of the permission.
     * @type {string}
     * @memberof UserPermission
     */
    name?: string;
    /**
     * The type of the permission.
     * @type {string}
     * @memberof UserPermission
     */
    type?: UserPermissionTypeEnum;
}


/**
 * @export
 */
export const UserPermissionTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT'
} as const;
export type UserPermissionTypeEnum = typeof UserPermissionTypeEnum[keyof typeof UserPermissionTypeEnum];

/**
 * A user found in a search.
 * @export
 * @interface UserPickerUser
 */
export interface UserPickerUser {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserPickerUser
     */
    accountId?: string;
    /**
     * The avatar URL of the user.
     * @type {string}
     * @memberof UserPickerUser
     */
    avatarUrl?: string;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof UserPickerUser
     */
    displayName?: string;
    /**
     * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
     * @type {string}
     * @memberof UserPickerUser
     */
    html?: string;
    /**
     * This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserPickerUser
     */
    key?: string;
    /**
     * This property is no longer available . See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserPickerUser
     */
    name?: string;
}
/**
 * The level of validation to return from the API. If no values are provided, the default would return `WARNING` and `ERROR` level validation results.
 * @export
 * @interface ValidationOptionsForCreate
 */
export interface ValidationOptionsForCreate {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationOptionsForCreate
     */
    levels?: Array<ValidationOptionsForCreateLevelsEnum>;
}


/**
 * @export
 */
export const ValidationOptionsForCreateLevelsEnum = {
    Warning: 'WARNING',
    Error: 'ERROR'
} as const;
export type ValidationOptionsForCreateLevelsEnum = typeof ValidationOptionsForCreateLevelsEnum[keyof typeof ValidationOptionsForCreateLevelsEnum];

/**
 * The level of validation to return from the API. If no values are provided, the default would return `WARNING` and `ERROR` level validation results.
 * @export
 * @interface ValidationOptionsForUpdate
 */
export interface ValidationOptionsForUpdate {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationOptionsForUpdate
     */
    levels?: Array<ValidationOptionsForUpdateLevelsEnum>;
}


/**
 * @export
 */
export const ValidationOptionsForUpdateLevelsEnum = {
    Warning: 'WARNING',
    Error: 'ERROR'
} as const;
export type ValidationOptionsForUpdateLevelsEnum = typeof ValidationOptionsForUpdateLevelsEnum[keyof typeof ValidationOptionsForUpdateLevelsEnum];

/**
 * An operand that is a user-provided value.
 * @export
 * @interface ValueOperand
 */
export interface ValueOperand {
    /**
     * Encoded value, which can be used directly in a JQL query.
     * @type {string}
     * @memberof ValueOperand
     */
    encodedValue?: string;
    /**
     * The operand value.
     * @type {string}
     * @memberof ValueOperand
     */
    value: string;
}
/**
 * Details about a project version.
 * @export
 * @interface Version
 */
export interface Version {
    /**
     * If the expand option `approvers` is used, returns a list containing the approvers for this version.
     * @type {Array<VersionApprover>}
     * @memberof Version
     */
    readonly approvers?: Array<VersionApprover>;
    /**
     * Indicates that the version is archived. Optional when creating or updating a version.
     * @type {boolean}
     * @memberof Version
     */
    archived?: boolean;
    /**
     * The description of the version. Optional when creating or updating a version. The maximum size is 16,384 bytes.
     * @type {string}
     * @memberof Version
     */
    description?: string;
    /**
     * If the expand option `driver` is used, returns the Atlassian account ID of the driver.
     * @type {string}
     * @memberof Version
     */
    readonly driver?: string;
    /**
     * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
     * 
     *  *  `operations` Returns the list of operations available for this version.
     *  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
     *  *  `driver` Returns the Atlassian account ID of the version driver.
     *  *  `approvers` Returns a list containing approvers for this version.
     * 
     * Optional for create and update.
     * @type {string}
     * @memberof Version
     */
    expand?: string;
    /**
     * The ID of the version.
     * @type {string}
     * @memberof Version
     */
    readonly id?: string;
    /**
     * If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
     * @type {VersionIssuesStatus}
     * @memberof Version
     */
    readonly issuesStatusForFixVersion?: VersionIssuesStatus;
    /**
     * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
     * @type {string}
     * @memberof Version
     */
    moveUnfixedIssuesTo?: string;
    /**
     * The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
     * @type {string}
     * @memberof Version
     */
    name?: string;
    /**
     * If the expand option `operations` is used, returns the list of operations available for this version.
     * @type {Array<SimpleLink>}
     * @memberof Version
     */
    readonly operations?: Array<SimpleLink>;
    /**
     * Indicates that the version is overdue.
     * @type {boolean}
     * @memberof Version
     */
    readonly overdue?: boolean;
    /**
     * Deprecated. Use `projectId`.
     * @type {string}
     * @memberof Version
     */
    project?: string;
    /**
     * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
     * @type {number}
     * @memberof Version
     */
    projectId?: number;
    /**
     * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
     * @type {string}
     * @memberof Version
     */
    releaseDate?: string;
    /**
     * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
     * @type {boolean}
     * @memberof Version
     */
    released?: boolean;
    /**
     * The URL of the version.
     * @type {string}
     * @memberof Version
     */
    readonly self?: string;
    /**
     * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
     * @type {string}
     * @memberof Version
     */
    startDate?: string;
    /**
     * The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
     * @type {string}
     * @memberof Version
     */
    readonly userReleaseDate?: string;
    /**
     * The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.
     * @type {string}
     * @memberof Version
     */
    readonly userStartDate?: string;
}
/**
 * Contains details about a version approver.
 * @export
 * @interface VersionApprover
 */
export interface VersionApprover {
    [key: string]: any | any;
    /**
     * The Atlassian account ID of the approver.
     * @type {string}
     * @memberof VersionApprover
     */
    readonly accountId?: string;
    /**
     * A description of why the user is declining the approval.
     * @type {string}
     * @memberof VersionApprover
     */
    readonly declineReason?: string;
    /**
     * A description of what the user is approving within the specified version.
     * @type {string}
     * @memberof VersionApprover
     */
    readonly description?: string;
    /**
     * The status of the approval, which can be *PENDING*, *APPROVED*, or *DECLINED*
     * @type {string}
     * @memberof VersionApprover
     */
    readonly status?: string;
}
/**
 * Various counts of issues within a version.
 * @export
 * @interface VersionIssueCounts
 */
export interface VersionIssueCounts {
    /**
     * List of custom fields using the version.
     * @type {Array<VersionUsageInCustomField>}
     * @memberof VersionIssueCounts
     */
    readonly customFieldUsage?: Array<VersionUsageInCustomField>;
    /**
     * Count of issues where a version custom field is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issueCountWithCustomFieldsShowingVersion?: number;
    /**
     * Count of issues where the `affectedVersion` is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issuesAffectedCount?: number;
    /**
     * Count of issues where the `fixVersion` is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issuesFixedCount?: number;
    /**
     * The URL of these count details.
     * @type {string}
     * @memberof VersionIssueCounts
     */
    readonly self?: string;
}
/**
 * Counts of the number of issues in various statuses.
 * @export
 * @interface VersionIssuesStatus
 */
export interface VersionIssuesStatus {
    [key: string]: any | any;
    /**
     * Count of issues with status *done*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly done?: number;
    /**
     * Count of issues with status *in progress*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly inProgress?: number;
    /**
     * Count of issues with status *to do*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly toDo?: number;
    /**
     * Count of issues with a status other than *to do*, *in progress*, and *done*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly unmapped?: number;
}
/**
 * 
 * @export
 * @interface VersionMoveBean
 */
export interface VersionMoveBean {
    /**
     * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
     * @type {string}
     * @memberof VersionMoveBean
     */
    after?: string;
    /**
     * An absolute position in which to place the moved version. Cannot be used with `after`.
     * @type {string}
     * @memberof VersionMoveBean
     */
    position?: VersionMoveBeanPositionEnum;
}


/**
 * @export
 */
export const VersionMoveBeanPositionEnum = {
    Earlier: 'Earlier',
    Later: 'Later',
    First: 'First',
    Last: 'Last'
} as const;
export type VersionMoveBeanPositionEnum = typeof VersionMoveBeanPositionEnum[keyof typeof VersionMoveBeanPositionEnum];

/**
 * Associated related work to a version
 * @export
 * @interface VersionRelatedWork
 */
export interface VersionRelatedWork {
    /**
     * The category of the related work
     * @type {string}
     * @memberof VersionRelatedWork
     */
    category: string;
    /**
     * The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.
     * @type {number}
     * @memberof VersionRelatedWork
     */
    readonly issueId?: number;
    /**
     * The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.
     * @type {string}
     * @memberof VersionRelatedWork
     */
    readonly relatedWorkId?: string;
    /**
     * The title of the related work
     * @type {string}
     * @memberof VersionRelatedWork
     */
    title?: string;
    /**
     * The URL of the related work. Will be null for the native release note related work item, but is otherwise required.
     * @type {string}
     * @memberof VersionRelatedWork
     */
    url?: string;
}
/**
 * Count of a version's unresolved issues.
 * @export
 * @interface VersionUnresolvedIssuesCount
 */
export interface VersionUnresolvedIssuesCount {
    /**
     * Count of issues.
     * @type {number}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly issuesCount?: number;
    /**
     * Count of unresolved issues.
     * @type {number}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly issuesUnresolvedCount?: number;
    /**
     * The URL of these count details.
     * @type {string}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly self?: string;
}
/**
 * List of custom fields using the version.
 * @export
 * @interface VersionUsageInCustomField
 */
export interface VersionUsageInCustomField {
    /**
     * The ID of the custom field.
     * @type {number}
     * @memberof VersionUsageInCustomField
     */
    readonly customFieldId?: number;
    /**
     * The name of the custom field.
     * @type {string}
     * @memberof VersionUsageInCustomField
     */
    readonly fieldName?: string;
    /**
     * Count of the issues where the custom field contains the version.
     * @type {number}
     * @memberof VersionUsageInCustomField
     */
    readonly issueCountWithVersionInCustomField?: number;
}
/**
 * The group or role to which this item is visible.
 * @export
 * @interface Visibility
 */
export interface Visibility {
    [key: string]: any | any;
    /**
     * The ID of the group or the name of the role that visibility of this item is restricted to.
     * @type {string}
     * @memberof Visibility
     */
    identifier?: string | null;
    /**
     * Whether visibility of this item is restricted to a group or role.
     * @type {string}
     * @memberof Visibility
     */
    type?: VisibilityTypeEnum;
    /**
     * The name of the group or role that visibility of this item is restricted to. Please note that the name of a group is mutable, to reliably identify a group use `identifier`.
     * @type {string}
     * @memberof Visibility
     */
    value?: string;
}


/**
 * @export
 */
export const VisibilityTypeEnum = {
    Group: 'group',
    Role: 'role'
} as const;
export type VisibilityTypeEnum = typeof VisibilityTypeEnum[keyof typeof VisibilityTypeEnum];

/**
 * The details of votes on an issue.
 * @export
 * @interface Votes
 */
export interface Votes {
    /**
     * Whether the user making this request has voted on the issue.
     * @type {boolean}
     * @memberof Votes
     */
    readonly hasVoted?: boolean;
    /**
     * The URL of these issue vote details.
     * @type {string}
     * @memberof Votes
     */
    readonly self?: string;
    /**
     * List of the users who have voted on this issue. An empty list is returned when the calling user doesn't have the *View voters and watchers* project permission.
     * @type {Array<User>}
     * @memberof Votes
     */
    readonly voters?: Array<User>;
    /**
     * The number of votes on the issue.
     * @type {number}
     * @memberof Votes
     */
    readonly votes?: number;
}
/**
 * 
 * @export
 * @interface WarningCollection
 */
export interface WarningCollection {
    /**
     * 
     * @type {Array<string>}
     * @memberof WarningCollection
     */
    warnings?: Array<string>;
}
/**
 * The details of watchers on an issue.
 * @export
 * @interface Watchers
 */
export interface Watchers {
    /**
     * Whether the calling user is watching this issue.
     * @type {boolean}
     * @memberof Watchers
     */
    readonly isWatching?: boolean;
    /**
     * The URL of these issue watcher details.
     * @type {string}
     * @memberof Watchers
     */
    readonly self?: string;
    /**
     * The number of users watching this issue.
     * @type {number}
     * @memberof Watchers
     */
    readonly watchCount?: number;
    /**
     * Details of the users watching this issue.
     * @type {Array<UserDetails>}
     * @memberof Watchers
     */
    readonly watchers?: Array<UserDetails>;
}
/**
 * A webhook.
 * @export
 * @interface Webhook
 */
export interface Webhook {
    /**
     * The Jira events that trigger the webhook.
     * @type {Array<string>}
     * @memberof Webhook
     */
    events: Array<WebhookEventsEnum>;
    /**
     * The date after which the webhook is no longer sent. Use [Extend webhook life](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-webhooks/#api-rest-api-3-webhook-refresh-put) to extend the date.
     * @type {number}
     * @memberof Webhook
     */
    readonly expirationDate?: number;
    /**
     * A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates.
     * @type {Array<string>}
     * @memberof Webhook
     */
    fieldIdsFilter?: Array<string>;
    /**
     * The ID of the webhook.
     * @type {number}
     * @memberof Webhook
     */
    id: number;
    /**
     * A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates.
     * @type {Array<string>}
     * @memberof Webhook
     */
    issuePropertyKeysFilter?: Array<string>;
    /**
     * The JQL filter that specifies which issues the webhook is sent for.
     * @type {string}
     * @memberof Webhook
     */
    jqlFilter: string;
}


/**
 * @export
 */
export const WebhookEventsEnum = {
    JiraissueCreated: 'jira:issue_created',
    JiraissueUpdated: 'jira:issue_updated',
    JiraissueDeleted: 'jira:issue_deleted',
    CommentCreated: 'comment_created',
    CommentUpdated: 'comment_updated',
    CommentDeleted: 'comment_deleted',
    IssuePropertySet: 'issue_property_set',
    IssuePropertyDeleted: 'issue_property_deleted'
} as const;
export type WebhookEventsEnum = typeof WebhookEventsEnum[keyof typeof WebhookEventsEnum];

/**
 * A list of webhooks.
 * @export
 * @interface WebhookDetails
 */
export interface WebhookDetails {
    /**
     * The Jira events that trigger the webhook.
     * @type {Array<string>}
     * @memberof WebhookDetails
     */
    events: Array<WebhookDetailsEventsEnum>;
    /**
     * A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates.
     * @type {Array<string>}
     * @memberof WebhookDetails
     */
    fieldIdsFilter?: Array<string>;
    /**
     * A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates.
     * @type {Array<string>}
     * @memberof WebhookDetails
     */
    issuePropertyKeysFilter?: Array<string>;
    /**
     * The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:
     * 
     *  *  Fields: `issueKey`, `project`, `issuetype`, `status`, `assignee`, `reporter`, `issue.property`, and `cf[id]`. For custom fields (`cf[id]`), only the epic label custom field is supported.".
     *  *  Operators: `=`, `!=`, `IN`, and `NOT IN`.
     * @type {string}
     * @memberof WebhookDetails
     */
    jqlFilter: string;
}


/**
 * @export
 */
export const WebhookDetailsEventsEnum = {
    JiraissueCreated: 'jira:issue_created',
    JiraissueUpdated: 'jira:issue_updated',
    JiraissueDeleted: 'jira:issue_deleted',
    CommentCreated: 'comment_created',
    CommentUpdated: 'comment_updated',
    CommentDeleted: 'comment_deleted',
    IssuePropertySet: 'issue_property_set',
    IssuePropertyDeleted: 'issue_property_deleted'
} as const;
export type WebhookDetailsEventsEnum = typeof WebhookDetailsEventsEnum[keyof typeof WebhookDetailsEventsEnum];

/**
 * Details of webhooks to register.
 * @export
 * @interface WebhookRegistrationDetails
 */
export interface WebhookRegistrationDetails {
    /**
     * The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered.
     * @type {string}
     * @memberof WebhookRegistrationDetails
     */
    url: string;
    /**
     * A list of webhooks.
     * @type {Array<WebhookDetails>}
     * @memberof WebhookRegistrationDetails
     */
    webhooks: Array<WebhookDetails>;
}
/**
 * The date the refreshed webhooks expire.
 * @export
 * @interface WebhooksExpirationDate
 */
export interface WebhooksExpirationDate {
    /**
     * The expiration date of all the refreshed webhooks.
     * @type {number}
     * @memberof WebhooksExpirationDate
     */
    readonly expirationDate: number;
}
/**
 * 
 * @export
 * @interface WorkManagementNavigationInfo
 */
export interface WorkManagementNavigationInfo {
    /**
     * 
     * @type {string}
     * @memberof WorkManagementNavigationInfo
     */
    boardName?: string;
}
/**
 * Details about a workflow.
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * The creation date of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    created?: string;
    /**
     * The description of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    description: string;
    /**
     * Whether the workflow has a draft version.
     * @type {boolean}
     * @memberof Workflow
     */
    hasDraftWorkflow?: boolean;
    /**
     * 
     * @type {PublishedWorkflowId}
     * @memberof Workflow
     */
    id: PublishedWorkflowId;
    /**
     * Whether this is the default workflow.
     * @type {boolean}
     * @memberof Workflow
     */
    isDefault?: boolean;
    /**
     * 
     * @type {WorkflowOperations}
     * @memberof Workflow
     */
    operations?: WorkflowOperations;
    /**
     * The projects the workflow is assigned to, through workflow schemes.
     * @type {Array<ProjectDetails>}
     * @memberof Workflow
     */
    projects?: Array<ProjectDetails>;
    /**
     * The workflow schemes the workflow is assigned to.
     * @type {Array<WorkflowSchemeIdName>}
     * @memberof Workflow
     */
    schemes?: Array<WorkflowSchemeIdName>;
    /**
     * The statuses of the workflow.
     * @type {Array<WorkflowStatus>}
     * @memberof Workflow
     */
    statuses?: Array<WorkflowStatus>;
    /**
     * The transitions of the workflow.
     * @type {Array<Transition>}
     * @memberof Workflow
     */
    transitions?: Array<Transition>;
    /**
     * The last edited date of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    updated?: string;
}
/**
 * The list of status mappings.
 * @export
 * @interface WorkflowAssociationStatusMapping
 */
export interface WorkflowAssociationStatusMapping {
    /**
     * The ID of the status in the new workflow.
     * @type {string}
     * @memberof WorkflowAssociationStatusMapping
     */
    newStatusId: string;
    /**
     * The ID of the status in the old workflow that isn't present in the new workflow.
     * @type {string}
     * @memberof WorkflowAssociationStatusMapping
     */
    oldStatusId: string;
}
/**
 * 
 * @export
 * @interface WorkflowCapabilities
 */
export interface WorkflowCapabilities {
    /**
     * The Connect provided ecosystem rules available.
     * @type {Array<AvailableWorkflowConnectRule>}
     * @memberof WorkflowCapabilities
     */
    connectRules?: Array<AvailableWorkflowConnectRule>;
    /**
     * The scope of the workflow capabilities. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
     * @type {string}
     * @memberof WorkflowCapabilities
     */
    editorScope?: WorkflowCapabilitiesEditorScopeEnum;
    /**
     * The Forge provided ecosystem rules available.
     * @type {Array<AvailableWorkflowForgeRule>}
     * @memberof WorkflowCapabilities
     */
    forgeRules?: Array<AvailableWorkflowForgeRule>;
    /**
     * The types of projects that this capability set is available for.
     * @type {Array<string>}
     * @memberof WorkflowCapabilities
     */
    projectTypes?: Array<WorkflowCapabilitiesProjectTypesEnum>;
    /**
     * The Atlassian provided system rules available.
     * @type {Array<AvailableWorkflowSystemRule>}
     * @memberof WorkflowCapabilities
     */
    systemRules?: Array<AvailableWorkflowSystemRule>;
    /**
     * The trigger rules available.
     * @type {Array<AvailableWorkflowTriggers>}
     * @memberof WorkflowCapabilities
     */
    triggerRules?: Array<AvailableWorkflowTriggers>;
}


/**
 * @export
 */
export const WorkflowCapabilitiesEditorScopeEnum = {
    Project: 'PROJECT',
    Global: 'GLOBAL'
} as const;
export type WorkflowCapabilitiesEditorScopeEnum = typeof WorkflowCapabilitiesEditorScopeEnum[keyof typeof WorkflowCapabilitiesEditorScopeEnum];

/**
 * @export
 */
export const WorkflowCapabilitiesProjectTypesEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    ProductDiscovery: 'product_discovery',
    Business: 'business',
    Unknown: 'unknown'
} as const;
export type WorkflowCapabilitiesProjectTypesEnum = typeof WorkflowCapabilitiesProjectTypesEnum[keyof typeof WorkflowCapabilitiesProjectTypesEnum];

/**
 * A compound workflow transition rule condition. This object returns `nodeType` as `compound`.
 * @export
 * @interface WorkflowCompoundCondition
 */
export interface WorkflowCompoundCondition {
    /**
     * The list of workflow conditions.
     * @type {Array<WorkflowCondition>}
     * @memberof WorkflowCompoundCondition
     */
    conditions: Array<WorkflowCondition>;
    /**
     * 
     * @type {string}
     * @memberof WorkflowCompoundCondition
     */
    nodeType: string;
    /**
     * The compound condition operator.
     * @type {string}
     * @memberof WorkflowCompoundCondition
     */
    operator: WorkflowCompoundConditionOperatorEnum;
}


/**
 * @export
 */
export const WorkflowCompoundConditionOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type WorkflowCompoundConditionOperatorEnum = typeof WorkflowCompoundConditionOperatorEnum[keyof typeof WorkflowCompoundConditionOperatorEnum];

/**
 * @type WorkflowCondition
 * The workflow transition rule conditions tree.
 * @export
 */
export type WorkflowCondition = { nodeType: 'compound' } & WorkflowCompoundCondition | { nodeType: 'simple' } & WorkflowSimpleCondition;
/**
 * The details of the workflows to create.
 * @export
 * @interface WorkflowCreate
 */
export interface WorkflowCreate {
    /**
     * The description of the workflow to create.
     * @type {string}
     * @memberof WorkflowCreate
     */
    description?: string;
    /**
     * The name of the workflow to create.
     * @type {string}
     * @memberof WorkflowCreate
     */
    name: string;
    /**
     * 
     * @type {WorkflowLayout}
     * @memberof WorkflowCreate
     */
    startPointLayout?: WorkflowLayout | null;
    /**
     * The statuses associated with this workflow.
     * @type {Array<StatusLayoutUpdate>}
     * @memberof WorkflowCreate
     */
    statuses: Array<StatusLayoutUpdate>;
    /**
     * The transitions of this workflow.
     * @type {Array<TransitionUpdateDTO>}
     * @memberof WorkflowCreate
     */
    transitions: Array<TransitionUpdateDTO>;
}
/**
 * The create workflows payload.
 * @export
 * @interface WorkflowCreateRequest
 */
export interface WorkflowCreateRequest {
    /**
     * 
     * @type {WorkflowScope}
     * @memberof WorkflowCreateRequest
     */
    scope: WorkflowScope;
    /**
     * The statuses to associate with the workflows.
     * @type {Array<WorkflowStatusUpdate>}
     * @memberof WorkflowCreateRequest
     */
    statuses: Array<WorkflowStatusUpdate>;
    /**
     * The details of the workflows to create.
     * @type {Array<WorkflowCreate>}
     * @memberof WorkflowCreateRequest
     */
    workflows: Array<WorkflowCreate>;
}
/**
 * Details of the created workflows and statuses.
 * @export
 * @interface WorkflowCreateResponse
 */
export interface WorkflowCreateResponse {
    /**
     * List of created statuses.
     * @type {Set<JiraWorkflowStatus>}
     * @memberof WorkflowCreateResponse
     */
    statuses?: Array<JiraWorkflowStatus>;
    /**
     * List of created workflows.
     * @type {Set<JiraWorkflow>}
     * @memberof WorkflowCreateResponse
     */
    workflows?: Array<JiraWorkflow>;
}
/**
 * 
 * @export
 * @interface WorkflowCreateValidateRequest
 */
export interface WorkflowCreateValidateRequest {
    /**
     * 
     * @type {WorkflowCreateRequest}
     * @memberof WorkflowCreateValidateRequest
     */
    payload: WorkflowCreateRequest;
    /**
     * 
     * @type {ValidationOptionsForCreate}
     * @memberof WorkflowCreateValidateRequest
     */
    validationOptions?: ValidationOptionsForCreate;
}
/**
 * A reference to the location of the error. This will be null if the error does not refer to a specific element.
 * @export
 * @interface WorkflowElementReference
 */
export interface WorkflowElementReference {
    /**
     * A property key.
     * @type {string}
     * @memberof WorkflowElementReference
     */
    propertyKey?: string;
    /**
     * A rule ID.
     * @type {string}
     * @memberof WorkflowElementReference
     */
    ruleId?: string;
    /**
     * 
     * @type {ProjectAndIssueTypePair}
     * @memberof WorkflowElementReference
     */
    statusMappingReference?: ProjectAndIssueTypePair;
    /**
     * A status reference.
     * @type {string}
     * @memberof WorkflowElementReference
     */
    statusReference?: string;
    /**
     * A transition ID.
     * @type {string}
     * @memberof WorkflowElementReference
     */
    transitionId?: string;
}
/**
 * The classic workflow identifiers.
 * @export
 * @interface WorkflowIDs
 */
export interface WorkflowIDs {
    /**
     * The entity ID of the workflow.
     * @type {string}
     * @memberof WorkflowIDs
     */
    entityId?: string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowIDs
     */
    name: string;
}
/**
 * Properties that identify a workflow.
 * @export
 * @interface WorkflowId
 */
export interface WorkflowId {
    /**
     * Whether the workflow is in the draft state.
     * @type {boolean}
     * @memberof WorkflowId
     */
    draft: boolean;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowId
     */
    name: string;
}
/**
 * The starting point for the statuses in the workflow.
 * @export
 * @interface WorkflowLayout
 */
export interface WorkflowLayout {
    /**
     * The x axis location.
     * @type {number}
     * @memberof WorkflowLayout
     */
    x?: number;
    /**
     * The y axis location.
     * @type {number}
     * @memberof WorkflowLayout
     */
    y?: number;
}
/**
 * The workflow metadata and issue type IDs which use this workflow.
 * @export
 * @interface WorkflowMetadataAndIssueTypeRestModel
 */
export interface WorkflowMetadataAndIssueTypeRestModel {
    /**
     * The list of issue type IDs for the mapping.
     * @type {Array<string>}
     * @memberof WorkflowMetadataAndIssueTypeRestModel
     */
    issueTypeIds: Array<string>;
    /**
     * 
     * @type {WorkflowMetadataRestModel}
     * @memberof WorkflowMetadataAndIssueTypeRestModel
     */
    workflow: WorkflowMetadataRestModel;
}
/**
 * Workflow metadata and usage detail.
 * @export
 * @interface WorkflowMetadataRestModel
 */
export interface WorkflowMetadataRestModel {
    /**
     * The description of the workflow.
     * @type {string}
     * @memberof WorkflowMetadataRestModel
     */
    description: string;
    /**
     * The ID of the workflow.
     * @type {string}
     * @memberof WorkflowMetadataRestModel
     */
    id: string;
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowMetadataRestModel
     */
    name: string;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the workflows in the workflow scheme.
     * @type {Array<SimpleUsage>}
     * @memberof WorkflowMetadataRestModel
     */
    usage: Array<SimpleUsage> | null;
    /**
     * 
     * @type {DocumentVersion}
     * @memberof WorkflowMetadataRestModel
     */
    version: DocumentVersion;
}
/**
 * Operations allowed on a workflow
 * @export
 * @interface WorkflowOperations
 */
export interface WorkflowOperations {
    /**
     * Whether the workflow can be deleted.
     * @type {boolean}
     * @memberof WorkflowOperations
     */
    canDelete: boolean;
    /**
     * Whether the workflow can be updated.
     * @type {boolean}
     * @memberof WorkflowOperations
     */
    canEdit: boolean;
}
/**
 * The issue type.
 * @export
 * @interface WorkflowProjectIssueTypeUsage
 */
export interface WorkflowProjectIssueTypeUsage {
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof WorkflowProjectIssueTypeUsage
     */
    id?: string;
}
/**
 * Issue types associated with the workflow for a project.
 * @export
 * @interface WorkflowProjectIssueTypeUsageDTO
 */
export interface WorkflowProjectIssueTypeUsageDTO {
    /**
     * 
     * @type {WorkflowProjectIssueTypeUsagePage}
     * @memberof WorkflowProjectIssueTypeUsageDTO
     */
    issueTypes?: WorkflowProjectIssueTypeUsagePage;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof WorkflowProjectIssueTypeUsageDTO
     */
    projectId?: string;
    /**
     * The ID of the workflow.
     * @type {string}
     * @memberof WorkflowProjectIssueTypeUsageDTO
     */
    workflowId?: string;
}
/**
 * A page of issue types.
 * @export
 * @interface WorkflowProjectIssueTypeUsagePage
 */
export interface WorkflowProjectIssueTypeUsagePage {
    /**
     * Token for the next page of issue type usages.
     * @type {string}
     * @memberof WorkflowProjectIssueTypeUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of issue types.
     * @type {Array<WorkflowProjectIssueTypeUsage>}
     * @memberof WorkflowProjectIssueTypeUsagePage
     */
    values?: Array<WorkflowProjectIssueTypeUsage>;
}
/**
 * Projects using the workflow.
 * @export
 * @interface WorkflowProjectUsageDTO
 */
export interface WorkflowProjectUsageDTO {
    /**
     * 
     * @type {ProjectUsagePage}
     * @memberof WorkflowProjectUsageDTO
     */
    projects?: ProjectUsagePage;
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowProjectUsageDTO
     */
    workflowId?: string;
}
/**
 * 
 * @export
 * @interface WorkflowReadRequest
 */
export interface WorkflowReadRequest {
    /**
     * The list of projects and issue types to query.
     * @type {Array<ProjectAndIssueTypePair>}
     * @memberof WorkflowReadRequest
     */
    projectAndIssueTypes?: Array<ProjectAndIssueTypePair>;
    /**
     * The list of workflow IDs to query.
     * @type {Array<string>}
     * @memberof WorkflowReadRequest
     */
    workflowIds?: Array<string>;
    /**
     * The list of workflow names to query.
     * @type {Array<string>}
     * @memberof WorkflowReadRequest
     */
    workflowNames?: Array<string>;
}
/**
 * Details of workflows and related statuses.
 * @export
 * @interface WorkflowReadResponse
 */
export interface WorkflowReadResponse {
    /**
     * List of statuses.
     * @type {Set<JiraWorkflowStatus>}
     * @memberof WorkflowReadResponse
     */
    statuses?: Array<JiraWorkflowStatus>;
    /**
     * List of workflows.
     * @type {Set<JiraWorkflow>}
     * @memberof WorkflowReadResponse
     */
    workflows?: Array<JiraWorkflow>;
}
/**
 * The statuses referenced in the workflow.
 * @export
 * @interface WorkflowReferenceStatus
 */
export interface WorkflowReferenceStatus {
    /**
     * 
     * @type {ApprovalConfiguration}
     * @memberof WorkflowReferenceStatus
     */
    approvalConfiguration?: ApprovalConfiguration | null;
    /**
     * Indicates if the status is deprecated.
     * @type {boolean}
     * @memberof WorkflowReferenceStatus
     */
    deprecated?: boolean;
    /**
     * 
     * @type {WorkflowStatusLayout}
     * @memberof WorkflowReferenceStatus
     */
    layout?: WorkflowStatusLayout | null;
    /**
     * The properties associated with the status.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowReferenceStatus
     */
    properties?: { [key: string]: string; };
    /**
     * The reference of the status.
     * @type {string}
     * @memberof WorkflowReferenceStatus
     */
    statusReference?: string;
}
/**
 * The configuration of the rule.
 * @export
 * @interface WorkflowRuleConfiguration
 */
export interface WorkflowRuleConfiguration {
    /**
     * The ID of the rule.
     * @type {string}
     * @memberof WorkflowRuleConfiguration
     */
    id?: string | null;
    /**
     * The parameters related to the rule.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowRuleConfiguration
     */
    parameters?: { [key: string]: string; };
    /**
     * The rule key of the rule.
     * @type {string}
     * @memberof WorkflowRuleConfiguration
     */
    ruleKey: string;
}
/**
 * A collection of transition rules.
 * @export
 * @interface WorkflowRules
 */
export interface WorkflowRules {
    /**
     * 
     * @type {WorkflowCondition}
     * @memberof WorkflowRules
     */
    conditionsTree?: WorkflowCondition;
    /**
     * The workflow post functions.
     * @type {Array<WorkflowTransitionRule>}
     * @memberof WorkflowRules
     */
    postFunctions?: Array<WorkflowTransitionRule>;
    /**
     * The workflow validators.
     * @type {Array<WorkflowTransitionRule>}
     * @memberof WorkflowRules
     */
    validators?: Array<WorkflowTransitionRule>;
}
/**
 * Details of the workflow and its transition rules.
 * @export
 * @interface WorkflowRulesSearch
 */
export interface WorkflowRulesSearch {
    /**
     * Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.
     * @type {string}
     * @memberof WorkflowRulesSearch
     */
    expand?: string;
    /**
     * The list of workflow rule IDs.
     * @type {Array<string>}
     * @memberof WorkflowRulesSearch
     */
    ruleIds: Array<string>;
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowRulesSearch
     */
    workflowEntityId: string;
}
/**
 * Details of workflow transition rules.
 * @export
 * @interface WorkflowRulesSearchDetails
 */
export interface WorkflowRulesSearchDetails {
    /**
     * List of workflow rule IDs that do not belong to the workflow or can not be found.
     * @type {Array<string>}
     * @memberof WorkflowRulesSearchDetails
     */
    invalidRules?: Array<string>;
    /**
     * List of valid workflow transition rules.
     * @type {Array<WorkflowTransitionRules>}
     * @memberof WorkflowRulesSearchDetails
     */
    validRules?: Array<WorkflowTransitionRules>;
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowRulesSearchDetails
     */
    workflowEntityId?: string;
}
/**
 * Details about a workflow scheme.
 * @export
 * @interface WorkflowScheme
 */
export interface WorkflowScheme {
    /**
     * The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
     * @type {string}
     * @memberof WorkflowScheme
     */
    defaultWorkflow?: string;
    /**
     * The description of the workflow scheme.
     * @type {string}
     * @memberof WorkflowScheme
     */
    description?: string;
    /**
     * Whether the workflow scheme is a draft or not.
     * @type {boolean}
     * @memberof WorkflowScheme
     */
    readonly draft?: boolean;
    /**
     * The ID of the workflow scheme.
     * @type {number}
     * @memberof WorkflowScheme
     */
    readonly id?: number;
    /**
     * The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowScheme
     */
    issueTypeMappings?: { [key: string]: string; };
    /**
     * The issue types available in Jira.
     * @type {{ [key: string]: IssueTypeDetails; }}
     * @memberof WorkflowScheme
     */
    readonly issueTypes?: { [key: string]: IssueTypeDetails; };
    /**
     * The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
     * @type {string}
     * @memberof WorkflowScheme
     */
    readonly lastModified?: string;
    /**
     * The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
     * @type {User}
     * @memberof WorkflowScheme
     */
    readonly lastModifiedUser?: User;
    /**
     * The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
     * @type {string}
     * @memberof WorkflowScheme
     */
    name?: string;
    /**
     * For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.
     * @type {string}
     * @memberof WorkflowScheme
     */
    readonly originalDefaultWorkflow?: string;
    /**
     * For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowScheme
     */
    readonly originalIssueTypeMappings?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof WorkflowScheme
     */
    readonly self?: string;
    /**
     * Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:
     * 
     *  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.
     *  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.
     *  *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.
     * 
     * Defaults to `false`.
     * @type {boolean}
     * @memberof WorkflowScheme
     */
    updateDraftIfNeeded?: boolean;
}
/**
 * The explicit association between issue types and a workflow in a workflow scheme.
 * @export
 * @interface WorkflowSchemeAssociation
 */
export interface WorkflowSchemeAssociation {
    /**
     * The issue types assigned to the workflow.
     * @type {Set<string>}
     * @memberof WorkflowSchemeAssociation
     */
    issueTypeIds: Array<string>;
    /**
     * The ID of the workflow.
     * @type {string}
     * @memberof WorkflowSchemeAssociation
     */
    workflowId: string;
}
/**
 * A workflow scheme along with a list of projects that use it.
 * @export
 * @interface WorkflowSchemeAssociations
 */
export interface WorkflowSchemeAssociations {
    /**
     * The list of projects that use the workflow scheme.
     * @type {Array<string>}
     * @memberof WorkflowSchemeAssociations
     */
    projectIds: Array<string>;
    /**
     * The workflow scheme.
     * @type {WorkflowScheme}
     * @memberof WorkflowSchemeAssociations
     */
    workflowScheme: WorkflowScheme;
}
/**
 * The ID and the name of the workflow scheme.
 * @export
 * @interface WorkflowSchemeIdName
 */
export interface WorkflowSchemeIdName {
    /**
     * The ID of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeIdName
     */
    id: string;
    /**
     * The name of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeIdName
     */
    name: string;
}
/**
 * An associated workflow scheme and project.
 * @export
 * @interface WorkflowSchemeProjectAssociation
 */
export interface WorkflowSchemeProjectAssociation {
    /**
     * The ID of the project.
     * @type {string}
     * @memberof WorkflowSchemeProjectAssociation
     */
    projectId: string;
    /**
     * The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeProjectAssociation
     */
    workflowSchemeId?: string;
}
/**
 * Projects using the workflow scheme.
 * @export
 * @interface WorkflowSchemeProjectUsageDTO
 */
export interface WorkflowSchemeProjectUsageDTO {
    /**
     * 
     * @type {ProjectUsagePage}
     * @memberof WorkflowSchemeProjectUsageDTO
     */
    projects?: ProjectUsagePage;
    /**
     * The workflow scheme ID.
     * @type {string}
     * @memberof WorkflowSchemeProjectUsageDTO
     */
    workflowSchemeId?: string;
}
/**
 * The workflow scheme read request body.
 * @export
 * @interface WorkflowSchemeReadRequest
 */
export interface WorkflowSchemeReadRequest {
    /**
     * The list of project IDs to query.
     * @type {Array<string | null>}
     * @memberof WorkflowSchemeReadRequest
     */
    projectIds?: Array<string | null> | null;
    /**
     * The list of workflow scheme IDs to query.
     * @type {Array<string | null>}
     * @memberof WorkflowSchemeReadRequest
     */
    workflowSchemeIds?: Array<string | null> | null;
}
/**
 * 
 * @export
 * @interface WorkflowSchemeReadResponse
 */
export interface WorkflowSchemeReadResponse {
    /**
     * 
     * @type {WorkflowMetadataRestModel}
     * @memberof WorkflowSchemeReadResponse
     */
    defaultWorkflow?: WorkflowMetadataRestModel;
    /**
     * The description of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeReadResponse
     */
    description?: string | null;
    /**
     * The ID of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeReadResponse
     */
    id: string;
    /**
     * The name of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeReadResponse
     */
    name: string;
    /**
     * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
     * 
     * The IDs of projects using the workflow scheme.
     * @type {Array<string | null>}
     * @memberof WorkflowSchemeReadResponse
     */
    projectIdsUsingScheme?: Array<string | null> | null;
    /**
     * 
     * @type {WorkflowScope}
     * @memberof WorkflowSchemeReadResponse
     */
    scope: WorkflowScope;
    /**
     * Indicates if there's an [asynchronous task](#async-operations) for this workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeReadResponse
     */
    taskId?: string | null;
    /**
     * 
     * @type {DocumentVersion}
     * @memberof WorkflowSchemeReadResponse
     */
    version: DocumentVersion;
    /**
     * Mappings from workflows to issue types.
     * @type {Array<WorkflowMetadataAndIssueTypeRestModel>}
     * @memberof WorkflowSchemeReadResponse
     */
    workflowsForIssueTypes: Array<WorkflowMetadataAndIssueTypeRestModel>;
}
/**
 * The update workflow scheme payload.
 * @export
 * @interface WorkflowSchemeUpdateRequest
 */
export interface WorkflowSchemeUpdateRequest {
    [key: string]: any | any;
    /**
     * The ID of the workflow for issue types without having a mapping defined in this workflow scheme. Only used in global-scoped workflow schemes. If the `defaultWorkflowId` isn't specified, this is set to *Jira Workflow (jira)*.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequest
     */
    defaultWorkflowId?: string;
    /**
     * The new description for this workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequest
     */
    description: string;
    /**
     * The ID of this workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequest
     */
    id: string;
    /**
     * The new name for this workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequest
     */
    name: string;
    /**
     * Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
     * @type {Array<MappingsByIssueTypeOverride>}
     * @memberof WorkflowSchemeUpdateRequest
     */
    statusMappingsByIssueTypeOverride?: Array<MappingsByIssueTypeOverride>;
    /**
     * The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
     * @type {Array<MappingsByWorkflow>}
     * @memberof WorkflowSchemeUpdateRequest
     */
    statusMappingsByWorkflows?: Array<MappingsByWorkflow>;
    /**
     * 
     * @type {DocumentVersion}
     * @memberof WorkflowSchemeUpdateRequest
     */
    version: DocumentVersion;
    /**
     * Mappings from workflows to issue types.
     * @type {Array<WorkflowSchemeAssociation>}
     * @memberof WorkflowSchemeUpdateRequest
     */
    workflowsForIssueTypes?: Array<WorkflowSchemeAssociation>;
}
/**
 * The request payload to get the required mappings for updating a workflow scheme.
 * @export
 * @interface WorkflowSchemeUpdateRequiredMappingsRequest
 */
export interface WorkflowSchemeUpdateRequiredMappingsRequest {
    /**
     * The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequiredMappingsRequest
     */
    defaultWorkflowId?: string | null;
    /**
     * The ID of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeUpdateRequiredMappingsRequest
     */
    id: string;
    /**
     * The new workflow to issue type mappings for this workflow scheme.
     * @type {Array<WorkflowSchemeAssociation>}
     * @memberof WorkflowSchemeUpdateRequiredMappingsRequest
     */
    workflowsForIssueTypes: Array<WorkflowSchemeAssociation>;
}
/**
 * 
 * @export
 * @interface WorkflowSchemeUpdateRequiredMappingsResponse
 */
export interface WorkflowSchemeUpdateRequiredMappingsResponse {
    /**
     * The list of required status mappings by issue type.
     * @type {Set<RequiredMappingByIssueType>}
     * @memberof WorkflowSchemeUpdateRequiredMappingsResponse
     */
    statusMappingsByIssueTypes?: Array<RequiredMappingByIssueType>;
    /**
     * The list of required status mappings by workflow.
     * @type {Set<RequiredMappingByWorkflows>}
     * @memberof WorkflowSchemeUpdateRequiredMappingsResponse
     */
    statusMappingsByWorkflows?: Array<RequiredMappingByWorkflows>;
    /**
     * The details of the statuses in the associated workflows.
     * @type {Set<StatusMetadata>}
     * @memberof WorkflowSchemeUpdateRequiredMappingsResponse
     */
    statuses?: Array<StatusMetadata>;
    /**
     * The statuses associated with each workflow.
     * @type {Set<StatusesPerWorkflow>}
     * @memberof WorkflowSchemeUpdateRequiredMappingsResponse
     */
    statusesPerWorkflow?: Array<StatusesPerWorkflow>;
}
/**
 * The worflow scheme.
 * @export
 * @interface WorkflowSchemeUsage
 */
export interface WorkflowSchemeUsage {
    /**
     * The workflow scheme ID.
     * @type {string}
     * @memberof WorkflowSchemeUsage
     */
    id?: string;
}
/**
 * Workflow schemes using the workflow.
 * @export
 * @interface WorkflowSchemeUsageDTO
 */
export interface WorkflowSchemeUsageDTO {
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowSchemeUsageDTO
     */
    workflowId?: string;
    /**
     * 
     * @type {WorkflowSchemeUsagePage}
     * @memberof WorkflowSchemeUsageDTO
     */
    workflowSchemes?: WorkflowSchemeUsagePage;
}
/**
 * A page of workflow schemes.
 * @export
 * @interface WorkflowSchemeUsagePage
 */
export interface WorkflowSchemeUsagePage {
    /**
     * Token for the next page of issue type usages.
     * @type {string}
     * @memberof WorkflowSchemeUsagePage
     */
    nextPageToken?: string;
    /**
     * The list of workflow schemes.
     * @type {Array<WorkflowSchemeUsage>}
     * @memberof WorkflowSchemeUsagePage
     */
    values?: Array<WorkflowSchemeUsage>;
}
/**
 * The scope of the workflow.
 * @export
 * @interface WorkflowScope
 */
export interface WorkflowScope {
    /**
     * 
     * @type {ProjectId}
     * @memberof WorkflowScope
     */
    project?: ProjectId | null;
    /**
     * The scope of the workflow. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
     * @type {string}
     * @memberof WorkflowScope
     */
    type?: WorkflowScopeTypeEnum;
}


/**
 * @export
 */
export const WorkflowScopeTypeEnum = {
    Project: 'PROJECT',
    Global: 'GLOBAL'
} as const;
export type WorkflowScopeTypeEnum = typeof WorkflowScopeTypeEnum[keyof typeof WorkflowScopeTypeEnum];

/**
 * Page of items, including workflows and related statuses.
 * @export
 * @interface WorkflowSearchResponse
 */
export interface WorkflowSearchResponse {
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof WorkflowSearchResponse
     */
    isLast?: boolean;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof WorkflowSearchResponse
     */
    maxResults?: number;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof WorkflowSearchResponse
     */
    nextPage?: string;
    /**
     * The URL of the page.
     * @type {string}
     * @memberof WorkflowSearchResponse
     */
    self?: string;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof WorkflowSearchResponse
     */
    startAt?: number;
    /**
     * List of statuses.
     * @type {Array<JiraWorkflowStatus>}
     * @memberof WorkflowSearchResponse
     */
    statuses?: Array<JiraWorkflowStatus>;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof WorkflowSearchResponse
     */
    total?: number;
    /**
     * List of workflows.
     * @type {Array<JiraWorkflow>}
     * @memberof WorkflowSearchResponse
     */
    values?: Array<JiraWorkflow>;
}
/**
 * A workflow transition rule condition. This object returns `nodeType` as `simple`.
 * @export
 * @interface WorkflowSimpleCondition
 */
export interface WorkflowSimpleCondition {
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {object}
     * @memberof WorkflowSimpleCondition
     */
    configuration?: object;
    /**
     * 
     * @type {string}
     * @memberof WorkflowSimpleCondition
     */
    nodeType: string;
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof WorkflowSimpleCondition
     */
    type: string;
}
/**
 * Details of a workflow status.
 * @export
 * @interface WorkflowStatus
 */
export interface WorkflowStatus {
    /**
     * The ID of the issue status.
     * @type {string}
     * @memberof WorkflowStatus
     */
    id: string;
    /**
     * The name of the status in the workflow.
     * @type {string}
     * @memberof WorkflowStatus
     */
    name: string;
    /**
     * Additional properties that modify the behavior of issues in this status. Supports the properties `jira.issue.editable` and `issueEditable` (deprecated) that indicate whether issues are editable.
     * @type {{ [key: string]: any; }}
     * @memberof WorkflowStatus
     */
    properties?: { [key: string]: any; };
}
/**
 * The status reference and port that a transition is connected to.
 * @export
 * @interface WorkflowStatusAndPort
 */
export interface WorkflowStatusAndPort {
    /**
     * The port the transition is connected to this status.
     * @type {number}
     * @memberof WorkflowStatusAndPort
     */
    port?: number | null;
    /**
     * The reference of this status.
     * @type {string}
     * @memberof WorkflowStatusAndPort
     */
    statusReference?: string;
}
/**
 * The x and y location of the status in the workflow.
 * @export
 * @interface WorkflowStatusLayout
 */
export interface WorkflowStatusLayout {
    /**
     * The x axis location.
     * @type {number}
     * @memberof WorkflowStatusLayout
     */
    x?: number | null;
    /**
     * The y axis location.
     * @type {number}
     * @memberof WorkflowStatusLayout
     */
    y?: number | null;
}
/**
 * Details of the status being updated.
 * @export
 * @interface WorkflowStatusUpdate
 */
export interface WorkflowStatusUpdate {
    [key: string]: any | any;
    /**
     * The description of the status.
     * @type {string}
     * @memberof WorkflowStatusUpdate
     */
    description?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof WorkflowStatusUpdate
     */
    id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof WorkflowStatusUpdate
     */
    name: string;
    /**
     * The category of the status.
     * @type {string}
     * @memberof WorkflowStatusUpdate
     */
    statusCategory: WorkflowStatusUpdateStatusCategoryEnum;
    /**
     * The reference of the status.
     * @type {string}
     * @memberof WorkflowStatusUpdate
     */
    statusReference: string;
}


/**
 * @export
 */
export const WorkflowStatusUpdateStatusCategoryEnum = {
    Todo: 'TODO',
    InProgress: 'IN_PROGRESS',
    Done: 'DONE'
} as const;
export type WorkflowStatusUpdateStatusCategoryEnum = typeof WorkflowStatusUpdateStatusCategoryEnum[keyof typeof WorkflowStatusUpdateStatusCategoryEnum];

/**
 * A workflow transition.
 * @export
 * @interface WorkflowTransition
 */
export interface WorkflowTransition {
    /**
     * The transition ID.
     * @type {number}
     * @memberof WorkflowTransition
     */
    id: number;
    /**
     * The transition name.
     * @type {string}
     * @memberof WorkflowTransition
     */
    name: string;
}
/**
 * The statuses the transition can start from, and the mapping of ports between the statuses.
 * @export
 * @interface WorkflowTransitionLinks
 */
export interface WorkflowTransitionLinks {
    /**
     * The port that the transition starts from.
     * @type {number}
     * @memberof WorkflowTransitionLinks
     */
    fromPort?: number | null;
    /**
     * The status that the transition starts from.
     * @type {string}
     * @memberof WorkflowTransitionLinks
     */
    fromStatusReference?: string | null;
    /**
     * The port that the transition goes to.
     * @type {number}
     * @memberof WorkflowTransitionLinks
     */
    toPort?: number | null;
}
/**
 * Details about the server Jira is running on.
 * @export
 * @interface WorkflowTransitionProperty
 */
export interface WorkflowTransitionProperty {
    [key: string]: any | any;
    /**
     * The ID of the transition property.
     * @type {string}
     * @memberof WorkflowTransitionProperty
     */
    readonly id?: string;
    /**
     * The key of the transition property. Also known as the name of the transition property.
     * @type {string}
     * @memberof WorkflowTransitionProperty
     */
    readonly key?: string;
    /**
     * The value of the transition property.
     * @type {string}
     * @memberof WorkflowTransitionProperty
     */
    value: string;
}
/**
 * A workflow transition rule.
 * @export
 * @interface WorkflowTransitionRule
 */
export interface WorkflowTransitionRule {
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {any}
     * @memberof WorkflowTransitionRule
     */
    configuration?: any | null;
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof WorkflowTransitionRule
     */
    type: string;
}
/**
 * A workflow with transition rules.
 * @export
 * @interface WorkflowTransitionRules
 */
export interface WorkflowTransitionRules {
    /**
     * The list of conditions within the workflow.
     * @type {Array<AppWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    conditions?: Array<AppWorkflowTransitionRule>;
    /**
     * The list of post functions within the workflow.
     * @type {Array<AppWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    postFunctions?: Array<AppWorkflowTransitionRule>;
    /**
     * The list of validators within the workflow.
     * @type {Array<AppWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    validators?: Array<AppWorkflowTransitionRule>;
    /**
     * 
     * @type {WorkflowId}
     * @memberof WorkflowTransitionRules
     */
    workflowId: WorkflowId;
}
/**
 * Details about a workflow configuration update request.
 * @export
 * @interface WorkflowTransitionRulesDetails
 */
export interface WorkflowTransitionRulesDetails {
    /**
     * 
     * @type {WorkflowId}
     * @memberof WorkflowTransitionRulesDetails
     */
    workflowId: WorkflowId;
    /**
     * The list of connect workflow rule IDs.
     * @type {Set<string>}
     * @memberof WorkflowTransitionRulesDetails
     */
    workflowRuleIds: Array<string>;
}
/**
 * Details about a workflow configuration update request.
 * @export
 * @interface WorkflowTransitionRulesUpdate
 */
export interface WorkflowTransitionRulesUpdate {
    /**
     * The list of workflows with transition rules to update.
     * @type {Array<WorkflowTransitionRules>}
     * @memberof WorkflowTransitionRulesUpdate
     */
    workflows: Array<WorkflowTransitionRules>;
}
/**
 * Details of any errors encountered while updating workflow transition rules for a workflow.
 * @export
 * @interface WorkflowTransitionRulesUpdateErrorDetails
 */
export interface WorkflowTransitionRulesUpdateErrorDetails {
    /**
     * A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated.
     * @type {{ [key: string]: Set<string>; }}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    ruleUpdateErrors: { [key: string]: Array<string>; };
    /**
     * The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries.
     * @type {Set<string>}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    updateErrors: Array<string>;
    /**
     * 
     * @type {WorkflowId}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    workflowId: WorkflowId;
}
/**
 * Details of any errors encountered while updating workflow transition rules.
 * @export
 * @interface WorkflowTransitionRulesUpdateErrors
 */
export interface WorkflowTransitionRulesUpdateErrors {
    /**
     * A list of workflows.
     * @type {Array<WorkflowTransitionRulesUpdateErrorDetails>}
     * @memberof WorkflowTransitionRulesUpdateErrors
     */
    updateResults: Array<WorkflowTransitionRulesUpdateErrorDetails>;
}
/**
 * The transitions of the workflow. Note that a transition can have either the deprecated `to`/`from` fields or the `toStatusReference`/`links` fields, but never both nor a combination.
 * @export
 * @interface WorkflowTransitions
 */
export interface WorkflowTransitions {
    /**
     * The post-functions of the transition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof WorkflowTransitions
     */
    actions?: Array<WorkflowRuleConfiguration>;
    /**
     * 
     * @type {ConditionGroupConfiguration}
     * @memberof WorkflowTransitions
     */
    conditions?: ConditionGroupConfiguration | null;
    /**
     * The custom event ID of the transition.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    customIssueEventId?: string | null;
    /**
     * The description of the transition.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    description?: string;
    /**
     * The statuses and ports that the transition can start from. This field is deprecated - use `toStatusReference`/`links` instead.
     * @type {Array<WorkflowStatusAndPort>}
     * @memberof WorkflowTransitions
     * @deprecated
     */
    from?: Array<WorkflowStatusAndPort>;
    /**
     * The ID of the transition.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    id?: string;
    /**
     * The statuses the transition can start from, and the mapping of ports between the statuses.
     * @type {Array<WorkflowTransitionLinks>}
     * @memberof WorkflowTransitions
     */
    links?: Array<WorkflowTransitionLinks>;
    /**
     * The name of the transition.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    name?: string;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowTransitions
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {WorkflowStatusAndPort}
     * @memberof WorkflowTransitions
     * @deprecated
     */
    to?: WorkflowStatusAndPort | null;
    /**
     * The status the transition goes to.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    toStatusReference?: string;
    /**
     * 
     * @type {WorkflowRuleConfiguration}
     * @memberof WorkflowTransitions
     */
    transitionScreen?: WorkflowRuleConfiguration | null;
    /**
     * The triggers of the transition.
     * @type {Array<WorkflowTrigger>}
     * @memberof WorkflowTransitions
     */
    triggers?: Array<WorkflowTrigger>;
    /**
     * The transition type.
     * @type {string}
     * @memberof WorkflowTransitions
     */
    type?: WorkflowTransitionsTypeEnum;
    /**
     * The validators of the transition.
     * @type {Array<WorkflowRuleConfiguration>}
     * @memberof WorkflowTransitions
     */
    validators?: Array<WorkflowRuleConfiguration>;
}


/**
 * @export
 */
export const WorkflowTransitionsTypeEnum = {
    Initial: 'INITIAL',
    Global: 'GLOBAL',
    Directed: 'DIRECTED'
} as const;
export type WorkflowTransitionsTypeEnum = typeof WorkflowTransitionsTypeEnum[keyof typeof WorkflowTransitionsTypeEnum];

/**
 * The trigger configuration associated with a workflow.
 * @export
 * @interface WorkflowTrigger
 */
export interface WorkflowTrigger {
    /**
     * The ID of the trigger.
     * @type {string}
     * @memberof WorkflowTrigger
     */
    id?: string;
    /**
     * The parameters of the trigger.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowTrigger
     */
    parameters: { [key: string]: string; };
    /**
     * The rule key of the trigger.
     * @type {string}
     * @memberof WorkflowTrigger
     */
    ruleKey: string;
}
/**
 * The details of the workflows to update.
 * @export
 * @interface WorkflowUpdate
 */
export interface WorkflowUpdate {
    [key: string]: any | any;
    /**
     * The mapping of old to new status ID.
     * @type {Array<StatusMigration>}
     * @memberof WorkflowUpdate
     */
    defaultStatusMappings?: Array<StatusMigration>;
    /**
     * The new description for this workflow.
     * @type {string}
     * @memberof WorkflowUpdate
     */
    description?: string;
    /**
     * The ID of this workflow.
     * @type {string}
     * @memberof WorkflowUpdate
     */
    id: string;
    /**
     * 
     * @type {WorkflowLayout}
     * @memberof WorkflowUpdate
     */
    startPointLayout?: WorkflowLayout | null;
    /**
     * The mapping of old to new status ID for a specific project and issue type.
     * @type {Array<StatusMappingDTO>}
     * @memberof WorkflowUpdate
     */
    statusMappings?: Array<StatusMappingDTO>;
    /**
     * The statuses associated with this workflow.
     * @type {Array<StatusLayoutUpdate>}
     * @memberof WorkflowUpdate
     */
    statuses: Array<StatusLayoutUpdate>;
    /**
     * The transitions of this workflow.
     * @type {Array<TransitionUpdateDTO>}
     * @memberof WorkflowUpdate
     */
    transitions: Array<TransitionUpdateDTO>;
    /**
     * 
     * @type {DocumentVersion}
     * @memberof WorkflowUpdate
     */
    version: DocumentVersion;
}
/**
 * The update workflows payload.
 * @export
 * @interface WorkflowUpdateRequest
 */
export interface WorkflowUpdateRequest {
    /**
     * The statuses to associate with the workflows.
     * @type {Array<WorkflowStatusUpdate>}
     * @memberof WorkflowUpdateRequest
     */
    statuses: Array<WorkflowStatusUpdate>;
    /**
     * The details of the workflows to update.
     * @type {Array<WorkflowUpdate>}
     * @memberof WorkflowUpdateRequest
     */
    workflows: Array<WorkflowUpdate>;
}
/**
 * 
 * @export
 * @interface WorkflowUpdateResponse
 */
export interface WorkflowUpdateResponse {
    /**
     * List of updated statuses.
     * @type {Set<JiraWorkflowStatus>}
     * @memberof WorkflowUpdateResponse
     */
    statuses?: Array<JiraWorkflowStatus>;
    /**
     * If there is a [asynchronous task](#async-operations) operation, as a result of this update.
     * @type {string}
     * @memberof WorkflowUpdateResponse
     */
    taskId?: string | null;
    /**
     * List of updated workflows.
     * @type {Set<JiraWorkflow>}
     * @memberof WorkflowUpdateResponse
     */
    workflows?: Array<JiraWorkflow>;
}
/**
 * 
 * @export
 * @interface WorkflowUpdateValidateRequestBean
 */
export interface WorkflowUpdateValidateRequestBean {
    /**
     * 
     * @type {WorkflowUpdateRequest}
     * @memberof WorkflowUpdateValidateRequestBean
     */
    payload: WorkflowUpdateRequest;
    /**
     * 
     * @type {ValidationOptionsForUpdate}
     * @memberof WorkflowUpdateValidateRequestBean
     */
    validationOptions?: ValidationOptionsForUpdate;
}
/**
 * Deprecated. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2298) for details.
 * 
 * The workflows that use this status. Only available if the `workflowUsages` expand is requested.
 * @export
 * @interface WorkflowUsages
 */
export interface WorkflowUsages {
    /**
     * Workflow ID.
     * @type {string}
     * @memberof WorkflowUsages
     */
    workflowId?: string;
    /**
     * Workflow name.
     * @type {string}
     * @memberof WorkflowUsages
     */
    workflowName?: string;
}
/**
 * The details about a workflow validation error.
 * @export
 * @interface WorkflowValidationError
 */
export interface WorkflowValidationError {
    /**
     * An error code.
     * @type {string}
     * @memberof WorkflowValidationError
     */
    code?: string;
    /**
     * 
     * @type {WorkflowElementReference}
     * @memberof WorkflowValidationError
     */
    elementReference?: WorkflowElementReference;
    /**
     * The validation error level.
     * @type {string}
     * @memberof WorkflowValidationError
     */
    level?: WorkflowValidationErrorLevelEnum;
    /**
     * An error message.
     * @type {string}
     * @memberof WorkflowValidationError
     */
    message?: string;
    /**
     * The type of element the error or warning references.
     * @type {string}
     * @memberof WorkflowValidationError
     */
    type?: WorkflowValidationErrorTypeEnum;
}


/**
 * @export
 */
export const WorkflowValidationErrorLevelEnum = {
    Warning: 'WARNING',
    Error: 'ERROR'
} as const;
export type WorkflowValidationErrorLevelEnum = typeof WorkflowValidationErrorLevelEnum[keyof typeof WorkflowValidationErrorLevelEnum];

/**
 * @export
 */
export const WorkflowValidationErrorTypeEnum = {
    Rule: 'RULE',
    Status: 'STATUS',
    StatusLayout: 'STATUS_LAYOUT',
    StatusProperty: 'STATUS_PROPERTY',
    Workflow: 'WORKFLOW',
    Transition: 'TRANSITION',
    TransitionProperty: 'TRANSITION_PROPERTY',
    Scope: 'SCOPE',
    StatusMapping: 'STATUS_MAPPING',
    Trigger: 'TRIGGER'
} as const;
export type WorkflowValidationErrorTypeEnum = typeof WorkflowValidationErrorTypeEnum[keyof typeof WorkflowValidationErrorTypeEnum];

/**
 * 
 * @export
 * @interface WorkflowValidationErrorList
 */
export interface WorkflowValidationErrorList {
    /**
     * The list of validation errors.
     * @type {Array<WorkflowValidationError>}
     * @memberof WorkflowValidationErrorList
     */
    errors?: Array<WorkflowValidationError>;
}
/**
 * Details of workflows and their transition rules to delete.
 * @export
 * @interface WorkflowsWithTransitionRulesDetails
 */
export interface WorkflowsWithTransitionRulesDetails {
    /**
     * The list of workflows with transition rules to delete.
     * @type {Array<WorkflowTransitionRulesDetails>}
     * @memberof WorkflowsWithTransitionRulesDetails
     */
    workflows: Array<WorkflowTransitionRulesDetails>;
}
/**
 * Details of a worklog.
 * @export
 * @interface Worklog
 */
export interface Worklog {
    [key: string]: any | any;
    /**
     * Details of the user who created the worklog.
     * @type {UserDetails}
     * @memberof Worklog
     */
    readonly author?: UserDetails;
    /**
     * A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog.
     * @type {any}
     * @memberof Worklog
     */
    comment?: any | null;
    /**
     * The datetime on which the worklog was created.
     * @type {string}
     * @memberof Worklog
     */
    readonly created?: string;
    /**
     * The ID of the worklog record.
     * @type {string}
     * @memberof Worklog
     */
    readonly id?: string;
    /**
     * The ID of the issue this worklog is for.
     * @type {string}
     * @memberof Worklog
     */
    readonly issueId?: string;
    /**
     * Details of properties for the worklog. Optional when creating or updating a worklog.
     * @type {Array<EntityProperty>}
     * @memberof Worklog
     */
    properties?: Array<EntityProperty>;
    /**
     * The URL of the worklog item.
     * @type {string}
     * @memberof Worklog
     */
    readonly self?: string;
    /**
     * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
     * @type {string}
     * @memberof Worklog
     */
    started?: string;
    /**
     * The time spent working on the issue as days (\#d), hours (\#h), or minutes (\#m or \#). Required when creating a worklog if `timeSpentSeconds` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpentSecond` is provided.
     * @type {string}
     * @memberof Worklog
     */
    timeSpent?: string;
    /**
     * The time in seconds spent working on the issue. Required when creating a worklog if `timeSpent` isn't provided. Optional when updating a worklog. Cannot be provided if `timeSpent` is provided.
     * @type {number}
     * @memberof Worklog
     */
    timeSpentSeconds?: number;
    /**
     * Details of the user who last updated the worklog.
     * @type {UserDetails}
     * @memberof Worklog
     */
    readonly updateAuthor?: UserDetails;
    /**
     * The datetime on which the worklog was last updated.
     * @type {string}
     * @memberof Worklog
     */
    readonly updated?: string;
    /**
     * Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog.
     * @type {Visibility}
     * @memberof Worklog
     */
    visibility?: Visibility;
}
/**
 * 
 * @export
 * @interface WorklogIdsRequestBean
 */
export interface WorklogIdsRequestBean {
    /**
     * A list of worklog IDs.
     * @type {Set<number>}
     * @memberof WorklogIdsRequestBean
     */
    ids: Array<number>;
}
/**
 * 
 * @export
 * @interface WorklogsMoveRequestBean
 */
export interface WorklogsMoveRequestBean {
    /**
     * A list of worklog IDs.
     * @type {Set<number>}
     * @memberof WorklogsMoveRequestBean
     */
    ids?: Array<number>;
    /**
     * The issue id or key of the destination issue
     * @type {string}
     * @memberof WorklogsMoveRequestBean
     */
    issueIdOrKey?: string;
}
/**
 * Details about data policy.
 * @export
 * @interface WorkspaceDataPolicy
 */
export interface WorkspaceDataPolicy {
    /**
     * Whether the workspace contains any content inaccessible to the requesting application.
     * @type {boolean}
     * @memberof WorkspaceDataPolicy
     */
    readonly anyContentBlocked?: boolean;
}
