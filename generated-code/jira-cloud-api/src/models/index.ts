/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ActorInputBean
 */
export interface ActorInputBean {
    /**
     * The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `"user":["5b10a2844c20165700ede21g", "5b109f2e9729b51b54dc274d"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    user?: Array<string>;
    /**
     * The ID of the group to add as a default actor. This parameter cannot be used with the `group` parameter This parameter accepts a comma-separated list. For example, `"groupId":["77f6ab39-e755-4570-a6ae-2d7a8df0bcb8", "0c011f85-69ed-49c4-a801-3b18d0f771bc"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    groupId?: Array<string>;
    /**
     * The name of the group to add as a default actor. This parameter cannot be used with the `groupId` parameter. As a group's name can change,use of `groupId` is recommended. This parameter accepts a comma-separated list. For example, `"group":["project-admin", "jira-developers"]`.
     * @type {Array<string>}
     * @memberof ActorInputBean
     */
    group?: Array<string>;
}
/**
 * 
 * @export
 * @interface ActorsMap
 */
export interface ActorsMap {
    /**
     * The user account ID of the user to add.
     * @type {Array<string>}
     * @memberof ActorsMap
     */
    user?: Array<string>;
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
}
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
 * Announcement banner configuration.
 * @export
 * @interface AnnouncementBannerConfiguration
 */
export interface AnnouncementBannerConfiguration {
    /**
     * The text on the announcement banner.
     * @type {string}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly message?: string;
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
     * Hash of the banner data. The client detects updates by comparing hash IDs.
     * @type {string}
     * @memberof AnnouncementBannerConfiguration
     */
    readonly hashId?: string;
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
     * The text on the announcement banner.
     * @type {string}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    message?: string;
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
     * Visibility of the announcement banner. Can be public or private.
     * @type {string}
     * @memberof AnnouncementBannerConfigurationUpdate
     */
    visibility?: string;
}
/**
 * The application the linked item is in.
 * @export
 * @interface Application
 */
export interface Application {
    [key: string]: any | any;
    /**
     * The name-spaced type of the application, used by registered rendering apps.
     * @type {string}
     * @memberof Application
     */
    type?: string;
    /**
     * The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
     * @type {string}
     * @memberof Application
     */
    name?: string;
}
/**
 * Details of an application property.
 * @export
 * @interface ApplicationProperty
 */
export interface ApplicationProperty {
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
     * The new value.
     * @type {string}
     * @memberof ApplicationProperty
     */
    value?: string;
    /**
     * The name of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    name?: string;
    /**
     * The description of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    desc?: string;
    /**
     * The data type of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    type?: string;
    /**
     * The default value of the application property.
     * @type {string}
     * @memberof ApplicationProperty
     */
    defaultValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationProperty
     */
    example?: string;
    /**
     * The allowed values, if applicable.
     * @type {Array<string>}
     * @memberof ApplicationProperty
     */
    allowedValues?: Array<string>;
}
/**
 * Details of an application role.
 * @export
 * @interface ApplicationRole
 */
export interface ApplicationRole {
    /**
     * The key of the application role.
     * @type {string}
     * @memberof ApplicationRole
     */
    key?: string;
    /**
     * The groups associated with the application role. As a group's name can change, use of `groupDetails` is recommended to identify a groups.
     * @type {Set<string>}
     * @memberof ApplicationRole
     */
    groups?: string[];
    /**
     * The groups associated with the application role.
     * @type {Array<GroupName>}
     * @memberof ApplicationRole
     */
    groupDetails?: Array<GroupName>;
    /**
     * The display name of the application role.
     * @type {string}
     * @memberof ApplicationRole
     */
    name?: string;
    /**
     * The groups that are granted default access for this application role. As a group's name can change, use of `defaultGroupsDetails` is recommended to identify a groups.
     * @type {Set<string>}
     * @memberof ApplicationRole
     */
    defaultGroups?: string[];
    /**
     * The groups that are granted default access for this application role.
     * @type {Array<GroupName>}
     * @memberof ApplicationRole
     */
    defaultGroupsDetails?: Array<GroupName>;
    /**
     * Determines whether this application role should be selected by default on user creation.
     * @type {boolean}
     * @memberof ApplicationRole
     */
    selectedByDefault?: boolean;
    /**
     * Deprecated.
     * @type {boolean}
     * @memberof ApplicationRole
     */
    defined?: boolean;
    /**
     * The maximum count of users on your license.
     * @type {number}
     * @memberof ApplicationRole
     */
    numberOfSeats?: number;
    /**
     * The count of users remaining on your license.
     * @type {number}
     * @memberof ApplicationRole
     */
    remainingSeats?: number;
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
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationRole
     */
    hasUnlimitedSeats?: boolean;
    /**
     * Indicates if the application role belongs to Jira platform (`jira-core`).
     * @type {boolean}
     * @memberof ApplicationRole
     */
    platform?: boolean;
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
    mappings: FieldConfigurationToIssueTypeMapping[];
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
     * The type of the associated record.
     * @type {string}
     * @memberof AssociatedItemBean
     */
    readonly typeName?: string;
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
}
/**
 * Details about an attachment.
 * @export
 * @interface Attachment
 */
export interface Attachment {
    [key: string]: any | any;
    /**
     * The URL of the attachment details response.
     * @type {string}
     * @memberof Attachment
     */
    readonly self?: string;
    /**
     * The ID of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly id?: string;
    /**
     * The file name of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly filename?: string;
    /**
     * 
     * @type {AttachmentAuthor}
     * @memberof Attachment
     */
    author?: AttachmentAuthor;
    /**
     * The datetime the attachment was created.
     * @type {string}
     * @memberof Attachment
     */
    readonly created?: string;
    /**
     * The size of the attachment.
     * @type {number}
     * @memberof Attachment
     */
    readonly size?: number;
    /**
     * The MIME type of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly mimeType?: string;
    /**
     * The content of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    readonly content?: string;
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
     * @type {boolean}
     * @memberof AttachmentArchive
     */
    moreAvailable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchive
     */
    totalNumberOfEntriesAvailable?: number;
    /**
     * 
     * @type {number}
     * @memberof AttachmentArchive
     */
    totalEntryCount?: number;
    /**
     * 
     * @type {Array<AttachmentArchiveEntry>}
     * @memberof AttachmentArchive
     */
    entries?: Array<AttachmentArchiveEntry>;
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
     * The path of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly path?: string;
    /**
     * The position of the item within the archive.
     * @type {number}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly index?: number;
    /**
     * The size of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly size?: string;
    /**
     * The MIME type of the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly mediaType?: string;
    /**
     * The label for the archive item.
     * @type {string}
     * @memberof AttachmentArchiveItemReadable
     */
    readonly label?: string;
}
/**
 * Metadata for an archive (for example a zip) and its contents.
 * @export
 * @interface AttachmentArchiveMetadataReadable
 */
export interface AttachmentArchiveMetadataReadable {
    /**
     * The ID of the attachment.
     * @type {number}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly id?: number;
    /**
     * The name of the archive file.
     * @type {string}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly name?: string;
    /**
     * The list of the items included in the archive.
     * @type {Array<AttachmentArchiveItemReadable>}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly entries?: Array<AttachmentArchiveItemReadable>;
    /**
     * The number of items included in the archive.
     * @type {number}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly totalEntryCount?: number;
    /**
     * The MIME type of the attachment.
     * @type {string}
     * @memberof AttachmentArchiveMetadataReadable
     */
    readonly mediaType?: string;
}
/**
 * Details of the user who added the attachment.
 * @export
 * @interface AttachmentAuthor
 */
export interface AttachmentAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof AttachmentAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof AttachmentAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof AttachmentAuthor
     */
    readonly accountType?: string;
}
/**
 * Metadata for an issue attachment.
 * @export
 * @interface AttachmentMetadata
 */
export interface AttachmentMetadata {
    /**
     * The ID of the attachment.
     * @type {number}
     * @memberof AttachmentMetadata
     */
    readonly id?: number;
    /**
     * The URL of the attachment metadata details.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly self?: string;
    /**
     * The name of the attachment file.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly filename?: string;
    /**
     * 
     * @type {AttachmentMetadataAuthor}
     * @memberof AttachmentMetadata
     */
    author?: AttachmentMetadataAuthor;
    /**
     * The datetime the attachment was created.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly created?: string;
    /**
     * The size of the attachment.
     * @type {number}
     * @memberof AttachmentMetadata
     */
    readonly size?: number;
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
     * The URL of the attachment.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly content?: string;
    /**
     * The URL of a thumbnail representing the attachment.
     * @type {string}
     * @memberof AttachmentMetadata
     */
    readonly thumbnail?: string;
}
/**
 * Details of the user who attached the file.
 * @export
 * @interface AttachmentMetadataAuthor
 */
export interface AttachmentMetadataAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly accountType?: AttachmentMetadataAuthorAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof AttachmentMetadataAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof AttachmentMetadataAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof AttachmentMetadataAuthor
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof AttachmentMetadataAuthor
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof AttachmentMetadataAuthor
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const AttachmentMetadataAuthorAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type AttachmentMetadataAuthorAccountTypeEnum = typeof AttachmentMetadataAuthorAccountTypeEnum[keyof typeof AttachmentMetadataAuthorAccountTypeEnum];

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
     * The ID of the audit record.
     * @type {number}
     * @memberof AuditRecordBean
     */
    readonly id?: number;
    /**
     * The summary of the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly summary?: string;
    /**
     * The URL of the computer where the creation of the audit record was initiated.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly remoteAddress?: string;
    /**
     * Deprecated, use `authorAccountId` instead. The key of the user who created the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly authorKey?: string;
    /**
     * The date and time on which the audit record was created.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly created?: string;
    /**
     * The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM).
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly category?: string;
    /**
     * The event the audit record originated from.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly eventSource?: string;
    /**
     * The description of the audit record.
     * @type {string}
     * @memberof AuditRecordBean
     */
    readonly description?: string;
    /**
     * 
     * @type {AssociatedItemBean}
     * @memberof AuditRecordBean
     */
    objectItem?: AssociatedItemBean;
    /**
     * The list of values changed in the record event.
     * @type {Array<ChangedValueBean>}
     * @memberof AuditRecordBean
     */
    readonly changedValues?: Array<ChangedValueBean>;
    /**
     * The list of items associated with the changed record.
     * @type {Array<AssociatedItemBean>}
     * @memberof AuditRecordBean
     */
    readonly associatedItems?: Array<AssociatedItemBean>;
}
/**
 * Container for a list of audit records.
 * @export
 * @interface AuditRecords
 */
export interface AuditRecords {
    /**
     * The number of audit items skipped before the first item in this list.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly offset?: number;
    /**
     * The requested or default limit on the number of audit items to be returned.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly limit?: number;
    /**
     * The total number of audit items returned.
     * @type {number}
     * @memberof AuditRecords
     */
    readonly total?: number;
    /**
     * The list of audit items.
     * @type {Array<AuditRecordBean>}
     * @memberof AuditRecords
     */
    readonly records?: Array<AuditRecordBean>;
}
/**
 * A field auto-complete suggestion.
 * @export
 * @interface AutoCompleteSuggestion
 */
export interface AutoCompleteSuggestion {
    /**
     * The value of a suggested item.
     * @type {string}
     * @memberof AutoCompleteSuggestion
     */
    value?: string;
    /**
     * The display name of a suggested item. If `fieldValue` or `predicateValue` are provided, the matching text is highlighted with the HTML bold tag.
     * @type {string}
     * @memberof AutoCompleteSuggestion
     */
    displayName?: string;
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
     * The URI of the gadget type.
     * @type {string}
     * @memberof AvailableDashboardGadget
     */
    readonly uri?: string;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof AvailableDashboardGadget
     */
    readonly title: string;
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
 * Details of an avatar.
 * @export
 * @interface Avatar
 */
export interface Avatar {
    [key: string]: any | any;
    /**
     * The ID of the avatar.
     * @type {string}
     * @memberof Avatar
     */
    id: string;
    /**
     * The owner of the avatar. For a system avatar the owner is null (and nothing is returned). For non-system avatars this is the appropriate identifier, such as the ID for a project or the account ID for a user.
     * @type {string}
     * @memberof Avatar
     */
    readonly owner?: string;
    /**
     * Whether the avatar is a system avatar.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isSystemAvatar?: boolean;
    /**
     * Whether the avatar is used in Jira. For example, shown as a project's avatar.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isSelected?: boolean;
    /**
     * Whether the avatar can be deleted.
     * @type {boolean}
     * @memberof Avatar
     */
    readonly isDeletable?: boolean;
    /**
     * The file name of the avatar icon. Returned for system avatars.
     * @type {string}
     * @memberof Avatar
     */
    readonly fileName?: string;
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
     * System avatars list.
     * @type {Array<Avatar>}
     * @memberof Avatars
     */
    readonly system?: Array<Avatar>;
    /**
     * Custom avatars list.
     * @type {Array<Avatar>}
     * @memberof Avatars
     */
    readonly custom?: Array<Avatar>;
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
     * The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
     * @type {any}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    value?: any | null;
    /**
     * EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are `issue` and `user`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored.
     * @type {string}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    expression?: string;
    /**
     * 
     * @type {BulkIssuePropertyUpdateRequestFilter}
     * @memberof BulkIssuePropertyUpdateRequest
     */
    filter?: BulkIssuePropertyUpdateRequestFilter;
}
/**
 * The bulk operation filter.
 * @export
 * @interface BulkIssuePropertyUpdateRequestFilter
 */
export interface BulkIssuePropertyUpdateRequestFilter {
    /**
     * List of issues to perform the bulk operation on.
     * @type {Set<number>}
     * @memberof BulkIssuePropertyUpdateRequestFilter
     */
    entityIds?: number[];
    /**
     * The value of properties to perform the bulk operation on.
     * @type {any}
     * @memberof BulkIssuePropertyUpdateRequestFilter
     */
    currentValue?: any | null;
    /**
     * Whether the bulk operation occurs only when the property is present on or absent from an issue.
     * @type {boolean}
     * @memberof BulkIssuePropertyUpdateRequestFilter
     */
    hasProperty?: boolean;
}
/**
 * 
 * @export
 * @interface BulkOperationErrorResult
 */
export interface BulkOperationErrorResult {
    /**
     * 
     * @type {number}
     * @memberof BulkOperationErrorResult
     */
    status?: number;
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
}
/**
 * Details of global and project permissions granted to the user.
 * @export
 * @interface BulkPermissionGrants
 */
export interface BulkPermissionGrants {
    /**
     * List of project permissions and the projects and issues those permissions provide access to.
     * @type {Set<BulkProjectPermissionGrants>}
     * @memberof BulkPermissionGrants
     */
    projectPermissions: BulkProjectPermissionGrants[];
    /**
     * List of permissions granted to the user.
     * @type {Set<string>}
     * @memberof BulkPermissionGrants
     */
    globalPermissions: string[];
}
/**
 * Details of global permissions to look up and project permissions with associated projects and issues to look up.
 * @export
 * @interface BulkPermissionsRequestBean
 */
export interface BulkPermissionsRequestBean {
    /**
     * Project permissions with associated projects and issues to look up.
     * @type {Set<BulkProjectPermissions>}
     * @memberof BulkPermissionsRequestBean
     */
    projectPermissions?: BulkProjectPermissions[];
    /**
     * Global permissions to look up.
     * @type {Set<string>}
     * @memberof BulkPermissionsRequestBean
     */
    globalPermissions?: string[];
    /**
     * The account ID of a user.
     * @type {string}
     * @memberof BulkPermissionsRequestBean
     */
    accountId?: string;
}
/**
 * List of project permissions and the projects and issues those permissions grant access to.
 * @export
 * @interface BulkProjectPermissionGrants
 */
export interface BulkProjectPermissionGrants {
    /**
     * A project permission,
     * @type {string}
     * @memberof BulkProjectPermissionGrants
     */
    permission: string;
    /**
     * IDs of the issues the user has the permission for.
     * @type {Set<number>}
     * @memberof BulkProjectPermissionGrants
     */
    issues: number[];
    /**
     * IDs of the projects the user has the permission for.
     * @type {Set<number>}
     * @memberof BulkProjectPermissionGrants
     */
    projects: number[];
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
    issues?: number[];
    /**
     * List of project IDs.
     * @type {Set<number>}
     * @memberof BulkProjectPermissions
     */
    projects?: number[];
    /**
     * List of project permissions.
     * @type {Set<string>}
     * @memberof BulkProjectPermissions
     */
    permissions: string[];
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
     * The type of the field changed.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly fieldtype?: string;
    /**
     * The ID of the field changed.
     * @type {string}
     * @memberof ChangeDetails
     */
    readonly fieldId?: string;
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
     * The name of the field changed.
     * @type {string}
     * @memberof ChangedValueBean
     */
    readonly fieldName?: string;
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
}
/**
 * Details of a changed worklog.
 * @export
 * @interface ChangedWorklog
 */
export interface ChangedWorklog {
    /**
     * The ID of the worklog.
     * @type {number}
     * @memberof ChangedWorklog
     */
    readonly worklogId?: number;
    /**
     * The datetime of the change.
     * @type {number}
     * @memberof ChangedWorklog
     */
    readonly updatedTime?: number;
    /**
     * Details of properties associated with the change.
     * @type {Array<EntityProperty>}
     * @memberof ChangedWorklog
     */
    readonly properties?: Array<EntityProperty>;
}
/**
 * List of changed worklogs.
 * @export
 * @interface ChangedWorklogs
 */
export interface ChangedWorklogs {
    /**
     * Changed worklog list.
     * @type {Array<ChangedWorklog>}
     * @memberof ChangedWorklogs
     */
    readonly values?: Array<ChangedWorklog>;
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
     * The URL of this changed worklogs list.
     * @type {string}
     * @memberof ChangedWorklogs
     */
    readonly self?: string;
    /**
     * The URL of the next list of changed worklogs.
     * @type {string}
     * @memberof ChangedWorklogs
     */
    readonly nextPage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChangedWorklogs
     */
    lastPage?: boolean;
}
/**
 * A changelog.
 * @export
 * @interface Changelog
 */
export interface Changelog {
    /**
     * The ID of the changelog.
     * @type {string}
     * @memberof Changelog
     */
    readonly id?: string;
    /**
     * 
     * @type {ChangelogAuthor}
     * @memberof Changelog
     */
    author?: ChangelogAuthor;
    /**
     * The date on which the change took place.
     * @type {string}
     * @memberof Changelog
     */
    readonly created?: string;
    /**
     * The list of items changed.
     * @type {Array<ChangeDetails>}
     * @memberof Changelog
     */
    readonly items?: Array<ChangeDetails>;
    /**
     * 
     * @type {ChangelogHistoryMetadata}
     * @memberof Changelog
     */
    historyMetadata?: ChangelogHistoryMetadata;
}
/**
 * The user who made the change.
 * @export
 * @interface ChangelogAuthor
 */
export interface ChangelogAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ChangelogAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ChangelogAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly accountType?: string;
}
/**
 * The history metadata associated with the changed.
 * @export
 * @interface ChangelogHistoryMetadata
 */
export interface ChangelogHistoryMetadata {
    /**
     * The type of the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    type?: string;
    /**
     * The description of the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    description?: string;
    /**
     * The description key of the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    descriptionKey?: string;
    /**
     * The activity described in the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    activityDescription?: string;
    /**
     * The key of the activity described in the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    activityDescriptionKey?: string;
    /**
     * The description of the email address associated the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    emailDescription?: string;
    /**
     * The description key of the email address associated the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    emailDescriptionKey?: string;
    /**
     * 
     * @type {HistoryMetadataActor}
     * @memberof ChangelogHistoryMetadata
     */
    actor?: HistoryMetadataActor;
    /**
     * 
     * @type {HistoryMetadataGenerator}
     * @memberof ChangelogHistoryMetadata
     */
    generator?: HistoryMetadataGenerator;
    /**
     * 
     * @type {HistoryMetadataCause}
     * @memberof ChangelogHistoryMetadata
     */
    cause?: HistoryMetadataCause;
    /**
     * Additional arbitrary information about the history record.
     * @type {{ [key: string]: string; }}
     * @memberof ChangelogHistoryMetadata
     */
    extraData?: { [key: string]: string; };
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
 * A comment.
 * @export
 * @interface Comment
 */
export interface Comment {
    [key: string]: any | any;
    /**
     * The URL of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly self?: string;
    /**
     * The ID of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly id?: string;
    /**
     * 
     * @type {CommentAuthor}
     * @memberof Comment
     */
    author?: CommentAuthor;
    /**
     * The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).
     * @type {any}
     * @memberof Comment
     */
    body?: any | null;
    /**
     * The rendered version of the comment.
     * @type {string}
     * @memberof Comment
     */
    readonly renderedBody?: string;
    /**
     * 
     * @type {CommentUpdateAuthor}
     * @memberof Comment
     */
    updateAuthor?: CommentUpdateAuthor;
    /**
     * The date and time at which the comment was created.
     * @type {string}
     * @memberof Comment
     */
    readonly created?: string;
    /**
     * The date and time at which the comment was updated last.
     * @type {string}
     * @memberof Comment
     */
    readonly updated?: string;
    /**
     * 
     * @type {CommentVisibility}
     * @memberof Comment
     */
    visibility?: CommentVisibility;
    /**
     * Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.
     * @type {boolean}
     * @memberof Comment
     */
    readonly jsdPublic?: boolean;
    /**
     * Whether the comment was added from an email sent by a person who is not part of the issue. See [Allow external emails to be added as comments on issues](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)for information on setting up this feature.
     * @type {boolean}
     * @memberof Comment
     */
    readonly jsdAuthorCanSeeRequest?: boolean;
    /**
     * A list of comment properties. Optional on create and update.
     * @type {Array<EntityProperty>}
     * @memberof Comment
     */
    properties?: Array<EntityProperty>;
}
/**
 * The ID of the user who created the comment.
 * @export
 * @interface CommentAuthor
 */
export interface CommentAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof CommentAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof CommentAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof CommentAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof CommentAuthor
     */
    readonly accountType?: string;
}
/**
 * The ID of the user who updated the comment last.
 * @export
 * @interface CommentUpdateAuthor
 */
export interface CommentUpdateAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof CommentUpdateAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof CommentUpdateAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof CommentUpdateAuthor
     */
    readonly accountType?: string;
}
/**
 * The group or role to which this comment is visible. Optional on create and update.
 * @export
 * @interface CommentVisibility
 */
export interface CommentVisibility {
    /**
     * Whether visibility of this item is restricted to a group or role.
     * @type {string}
     * @memberof CommentVisibility
     */
    type?: CommentVisibilityTypeEnum;
    /**
     * The name of the group or role that visibility of this item is restricted to. Please note that the name of a group is mutable, to reliably identify a group use `identifier`.
     * @type {string}
     * @memberof CommentVisibility
     */
    value?: string;
    /**
     * The ID of the group or the name of the role that visibility of this item is restricted to.
     * @type {string}
     * @memberof CommentVisibility
     */
    identifier?: string | null;
}


/**
 * @export
 */
export const CommentVisibilityTypeEnum = {
    Group: 'group',
    Role: 'role'
} as const;
export type CommentVisibilityTypeEnum = typeof CommentVisibilityTypeEnum[keyof typeof CommentVisibilityTypeEnum];

/**
 * Count of issues assigned to a component.
 * @export
 * @interface ComponentIssuesCount
 */
export interface ComponentIssuesCount {
    /**
     * The URL for this count of issues for a component.
     * @type {string}
     * @memberof ComponentIssuesCount
     */
    readonly self?: string;
    /**
     * The count of issues assigned to a component.
     * @type {number}
     * @memberof ComponentIssuesCount
     */
    readonly issueCount?: number;
}
/**
 * Details about a component with a count of the issues it contains.
 * @export
 * @interface ComponentWithIssueCount
 */
export interface ComponentWithIssueCount {
    /**
     * Count of issues for the component.
     * @type {number}
     * @memberof ComponentWithIssueCount
     */
    readonly issueCount?: number;
    /**
     * The description for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly description?: string;
    /**
     * The URL for this count of the issues contained in the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly self?: string;
    /**
     * Not used.
     * @type {number}
     * @memberof ComponentWithIssueCount
     */
    readonly projectId?: number;
    /**
     * 
     * @type {ComponentWithIssueCountAssignee}
     * @memberof ComponentWithIssueCount
     */
    assignee?: ComponentWithIssueCountAssignee;
    /**
     * The key of the project to which the component is assigned.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly project?: string;
    /**
     * 
     * @type {ComponentWithIssueCountRealAssignee}
     * @memberof ComponentWithIssueCount
     */
    realAssignee?: ComponentWithIssueCountRealAssignee;
    /**
     * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
     * @type {boolean}
     * @memberof ComponentWithIssueCount
     */
    readonly isAssigneeTypeValid?: boolean;
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
     * 
     * @type {ComponentWithIssueCountLead}
     * @memberof ComponentWithIssueCount
     */
    lead?: ComponentWithIssueCountLead;
    /**
     * The name for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly name?: string;
    /**
     * The unique identifier for the component.
     * @type {string}
     * @memberof ComponentWithIssueCount
     */
    readonly id?: string;
}


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
 * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
 * @export
 * @interface ComponentWithIssueCountAssignee
 */
export interface ComponentWithIssueCountAssignee {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly accountType?: ComponentWithIssueCountAssigneeAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ComponentWithIssueCountAssignee
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ComponentWithIssueCountAssignee
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ComponentWithIssueCountAssignee
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ComponentWithIssueCountAssignee
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ComponentWithIssueCountAssigneeAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ComponentWithIssueCountAssigneeAccountTypeEnum = typeof ComponentWithIssueCountAssigneeAccountTypeEnum[keyof typeof ComponentWithIssueCountAssigneeAccountTypeEnum];

/**
 * The user details for the component's lead user.
 * @export
 * @interface ComponentWithIssueCountLead
 */
export interface ComponentWithIssueCountLead {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly accountType?: ComponentWithIssueCountLeadAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ComponentWithIssueCountLead
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ComponentWithIssueCountLead
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ComponentWithIssueCountLead
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ComponentWithIssueCountLead
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ComponentWithIssueCountLead
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ComponentWithIssueCountLeadAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ComponentWithIssueCountLeadAccountTypeEnum = typeof ComponentWithIssueCountLeadAccountTypeEnum[keyof typeof ComponentWithIssueCountLeadAccountTypeEnum];

/**
 * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
 * @export
 * @interface ComponentWithIssueCountRealAssignee
 */
export interface ComponentWithIssueCountRealAssignee {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly accountType?: ComponentWithIssueCountRealAssigneeAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ComponentWithIssueCountRealAssignee
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ComponentWithIssueCountRealAssigneeAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ComponentWithIssueCountRealAssigneeAccountTypeEnum = typeof ComponentWithIssueCountRealAssigneeAccountTypeEnum[keyof typeof ComponentWithIssueCountRealAssigneeAccountTypeEnum];

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
 * The configuration of time tracking.
 * @export
 * @interface ConfigurationTimeTrackingConfiguration
 */
export interface ConfigurationTimeTrackingConfiguration {
    /**
     * The number of hours in a working day.
     * @type {number}
     * @memberof ConfigurationTimeTrackingConfiguration
     */
    workingHoursPerDay: number;
    /**
     * The number of days in a working week.
     * @type {number}
     * @memberof ConfigurationTimeTrackingConfiguration
     */
    workingDaysPerWeek: number;
    /**
     * The format that will appear on an issue's *Time Spent* field.
     * @type {string}
     * @memberof ConfigurationTimeTrackingConfiguration
     */
    timeFormat: ConfigurationTimeTrackingConfigurationTimeFormatEnum;
    /**
     * The default unit of time applied to logged time.
     * @type {string}
     * @memberof ConfigurationTimeTrackingConfiguration
     */
    defaultUnit: ConfigurationTimeTrackingConfigurationDefaultUnitEnum;
}


/**
 * @export
 */
export const ConfigurationTimeTrackingConfigurationTimeFormatEnum = {
    Pretty: 'pretty',
    Days: 'days',
    Hours: 'hours'
} as const;
export type ConfigurationTimeTrackingConfigurationTimeFormatEnum = typeof ConfigurationTimeTrackingConfigurationTimeFormatEnum[keyof typeof ConfigurationTimeTrackingConfigurationTimeFormatEnum];

/**
 * @export
 */
export const ConfigurationTimeTrackingConfigurationDefaultUnitEnum = {
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day',
    Week: 'week'
} as const;
export type ConfigurationTimeTrackingConfigurationDefaultUnitEnum = typeof ConfigurationTimeTrackingConfigurationDefaultUnitEnum[keyof typeof ConfigurationTimeTrackingConfigurationDefaultUnitEnum];

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
     * The issue ID.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    issueID: number;
    /**
     * The custom field ID.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    fieldID: number;
    /**
     * The value of string type custom field when `_type` is `StringIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    string?: string;
    /**
     * The value of number type custom field when `_type` is `NumberIssueField`.
     * @type {number}
     * @memberof ConnectCustomFieldValue
     */
    number?: number;
    /**
     * The value of richText type custom field when `_type` is `RichTextIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    richText?: string;
    /**
     * The value of single select and multiselect custom field type when `_type` is `SingleSelectIssueField` or `MultiSelectIssueField`.
     * @type {string}
     * @memberof ConnectCustomFieldValue
     */
    optionID?: string;
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
    readonly key: string;
    /**
     * 
     * @type {RuleConfiguration}
     * @memberof ConnectWorkflowTransitionRule
     */
    _configuration: RuleConfiguration;
    /**
     * 
     * @type {WorkflowTransition}
     * @memberof ConnectWorkflowTransitionRule
     */
    readonly transition?: WorkflowTransition;
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
     * 
     * @type {ContextScope}
     * @memberof Context
     */
    scope?: ContextScope;
}
/**
 * The project and issue type mapping with a matching custom field context.
 * @export
 * @interface ContextForProjectAndIssueType
 */
export interface ContextForProjectAndIssueType {
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    projectId: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    issueTypeId: string;
    /**
     * The ID of the custom field context.
     * @type {string}
     * @memberof ContextForProjectAndIssueType
     */
    contextId: string;
}
/**
 * The scope of the context.
 * @export
 * @interface ContextScope
 */
export interface ContextScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof ContextScope
     */
    readonly type?: ContextScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof ContextScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const ContextScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type ContextScopeTypeEnum = typeof ContextScopeTypeEnum[keyof typeof ContextScopeTypeEnum];

/**
 * Details of the contextual configuration for a custom field.
 * @export
 * @interface ContextualConfiguration
 */
export interface ContextualConfiguration {
    /**
     * The ID of the configuration.
     * @type {string}
     * @memberof ContextualConfiguration
     */
    id: string;
    /**
     * The ID of the field context the configuration is associated with.
     * @type {string}
     * @memberof ContextualConfiguration
     */
    readonly fieldContextId: string;
    /**
     * The field configuration.
     * @type {any}
     * @memberof ContextualConfiguration
     */
    _configuration?: any | null;
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
     * The list of converted query strings with account IDs in place of user identifiers.
     * @type {Array<string>}
     * @memberof ConvertedJQLQueries
     */
    queryStrings?: Array<string>;
    /**
     * List of queries containing user information that could not be mapped to an existing user
     * @type {Array<JQLQueryWithUnknownUsers>}
     * @memberof ConvertedJQLQueries
     */
    queriesWithUnknownUsers?: Array<JQLQueryWithUnknownUsers>;
}
/**
 * The details of a created custom field context.
 * @export
 * @interface CreateCustomFieldContext
 */
export interface CreateCustomFieldContext {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    readonly id?: string;
    /**
     * The name of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    name: string;
    /**
     * The description of the context.
     * @type {string}
     * @memberof CreateCustomFieldContext
     */
    description?: string;
    /**
     * The list of project IDs associated with the context. If the list is empty, the context is global.
     * @type {Array<string>}
     * @memberof CreateCustomFieldContext
     */
    projectIds?: Array<string>;
    /**
     * The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.
     * @type {Array<string>}
     * @memberof CreateCustomFieldContext
     */
    issueTypeIds?: Array<string>;
}
/**
 * Details of an issue priority.
 * @export
 * @interface CreatePriorityDetails
 */
export interface CreatePriorityDetails {
    [key: string]: any | any;
    /**
     * The name of the priority. Must be unique.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    name: string;
    /**
     * The description of the priority.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    description?: string;
    /**
     * The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used.
     * @type {string}
     * @memberof CreatePriorityDetails
     */
    iconUrl?: CreatePriorityDetailsIconUrlEnum;
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
    TrivialPng: '/images/icons/priorities/trivial.png'
} as const;
export type CreatePriorityDetailsIconUrlEnum = typeof CreatePriorityDetailsIconUrlEnum[keyof typeof CreatePriorityDetailsIconUrlEnum];

/**
 * Details about the project.
 * @export
 * @interface CreateProjectDetails
 */
export interface CreateProjectDetails {
    /**
     * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    key: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    name: string;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    description?: string;
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
     * A link to information about this project, such as project documentation
     * @type {string}
     * @memberof CreateProjectDetails
     */
    url?: string;
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
     * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueSecurityScheme?: number;
    /**
     * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    permissionScheme?: number;
    /**
     * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    notificationScheme?: number;
    /**
     * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    categoryId?: number;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which defines the application-specific feature set. If you don't specify the project template you have to specify the project type.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    projectTypeKey?: CreateProjectDetailsProjectTypeKeyEnum;
    /**
     * A predefined configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`.
     * @type {string}
     * @memberof CreateProjectDetails
     */
    projectTemplateKey?: CreateProjectDetailsProjectTemplateKeyEnum;
    /**
     * The ID of the workflow scheme for the project. Use the [Get all workflow schemes](#api-rest-api-3-workflowscheme-get) operation to get a list of workflow scheme IDs. If you specify the workflow scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    workflowScheme?: number;
    /**
     * The ID of the issue type screen scheme for the project. Use the [Get all issue type screen schemes](#api-rest-api-3-issuetypescreenscheme-get) operation to get a list of issue type screen scheme IDs. If you specify the issue type screen scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueTypeScreenScheme?: number;
    /**
     * The ID of the issue type scheme for the project. Use the [Get all issue type schemes](#api-rest-api-3-issuetypescheme-get) operation to get a list of issue type scheme IDs. If you specify the issue type scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    issueTypeScheme?: number;
    /**
     * The ID of the field configuration scheme for the project. Use the [Get all field configuration schemes](#api-rest-api-3-fieldconfigurationscheme-get) operation to get a list of field configuration scheme IDs. If you specify the field configuration scheme you cannot specify the project template key.
     * @type {number}
     * @memberof CreateProjectDetails
     */
    fieldConfigurationScheme?: number;
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
export const CreateProjectDetailsProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type CreateProjectDetailsProjectTypeKeyEnum = typeof CreateProjectDetailsProjectTypeKeyEnum[keyof typeof CreateProjectDetailsProjectTypeKeyEnum];

/**
 * @export
 */
export const CreateProjectDetailsProjectTemplateKeyEnum = {
    PyxisGreenhopperJiraghSimplifiedAgilityKanban: 'com.pyxis.greenhopper.jira:gh-simplified-agility-kanban',
    PyxisGreenhopperJiraghSimplifiedAgilityScrum: 'com.pyxis.greenhopper.jira:gh-simplified-agility-scrum',
    PyxisGreenhopperJiraghSimplifiedBasic: 'com.pyxis.greenhopper.jira:gh-simplified-basic',
    PyxisGreenhopperJiraghSimplifiedKanbanClassic: 'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic',
    PyxisGreenhopperJiraghSimplifiedScrumClassic: 'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic',
    AtlassianServicedesksimplifiedItServiceManagement: 'com.atlassian.servicedesk:simplified-it-service-management',
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
    AtlassianServicedesksimplifiedHalpServiceDesk: 'com.atlassian.servicedesk:simplified-halp-service-desk',
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
 * Details of an issue resolution.
 * @export
 * @interface CreateResolutionDetails
 */
export interface CreateResolutionDetails {
    [key: string]: any | any;
    /**
     * The name of the resolution. Must be unique (case-insensitive).
     * @type {string}
     * @memberof CreateResolutionDetails
     */
    name: string;
    /**
     * The description of the resolution.
     * @type {string}
     * @memberof CreateResolutionDetails
     */
    description?: string;
}
/**
 * The details of a UI modification.
 * @export
 * @interface CreateUiModificationDetails
 */
export interface CreateUiModificationDetails {
    /**
     * The name of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    name: string;
    /**
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    description?: string;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof CreateUiModificationDetails
     */
    data?: string;
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000.
     * @type {Array<UiModificationContextDetails>}
     * @memberof CreateUiModificationDetails
     */
    contexts?: Array<UiModificationContextDetails>;
}
/**
 * 
 * @export
 * @interface CreateUpdateRoleRequestBean
 */
export interface CreateUpdateRoleRequestBean {
    /**
     * The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
     * @type {string}
     * @memberof CreateUpdateRoleRequestBean
     */
    name?: string;
    /**
     * A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
     * @type {string}
     * @memberof CreateUpdateRoleRequestBean
     */
    description?: string;
}
/**
 * A workflow transition condition.
 * @export
 * @interface CreateWorkflowCondition
 */
export interface CreateWorkflowCondition {
    /**
     * The compound condition operator.
     * @type {string}
     * @memberof CreateWorkflowCondition
     */
    operator?: CreateWorkflowConditionOperatorEnum;
    /**
     * The list of workflow conditions.
     * @type {Array<CreateWorkflowCondition>}
     * @memberof CreateWorkflowCondition
     */
    conditions?: Array<CreateWorkflowCondition>;
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof CreateWorkflowCondition
     */
    type?: string;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkflowCondition
     */
    _configuration?: { [key: string]: any; };
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
     * The name of the workflow. The name must be unique. The maximum length is 255 characters. Characters can be separated by a whitespace but the name cannot start or end with a whitespace.
     * @type {string}
     * @memberof CreateWorkflowDetails
     */
    name: string;
    /**
     * The description of the workflow. The maximum length is 1000 characters.
     * @type {string}
     * @memberof CreateWorkflowDetails
     */
    description?: string;
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
    /**
     * The statuses of the workflow. Any status that does not include a transition is added to the workflow without a transition.
     * @type {Set<CreateWorkflowStatusDetails>}
     * @memberof CreateWorkflowDetails
     */
    statuses: CreateWorkflowStatusDetails[];
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
     * The name of the transition. The maximum length is 60 characters.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetails
     */
    name: string;
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
    /**
     * 
     * @type {CreateWorkflowTransitionDetailsRules}
     * @memberof CreateWorkflowTransitionDetails
     */
    rules?: CreateWorkflowTransitionDetailsRules;
    /**
     * 
     * @type {CreateWorkflowTransitionDetailsScreen}
     * @memberof CreateWorkflowTransitionDetails
     */
    screen?: CreateWorkflowTransitionDetailsScreen;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: string; }}
     * @memberof CreateWorkflowTransitionDetails
     */
    properties?: { [key: string]: string; };
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
 * The rules of the transition.
 * @export
 * @interface CreateWorkflowTransitionDetailsRules
 */
export interface CreateWorkflowTransitionDetailsRules {
    /**
     * 
     * @type {CreateWorkflowTransitionRulesDetailsConditions}
     * @memberof CreateWorkflowTransitionDetailsRules
     */
    conditions?: CreateWorkflowTransitionRulesDetailsConditions;
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
     * @memberof CreateWorkflowTransitionDetailsRules
     */
    validators?: Array<CreateWorkflowTransitionRule>;
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
     * @memberof CreateWorkflowTransitionDetailsRules
     */
    postFunctions?: Array<CreateWorkflowTransitionRule>;
}
/**
 * The screen of the transition.
 * @export
 * @interface CreateWorkflowTransitionDetailsScreen
 */
export interface CreateWorkflowTransitionDetailsScreen {
    /**
     * The ID of the screen.
     * @type {string}
     * @memberof CreateWorkflowTransitionDetailsScreen
     */
    id: string;
}
/**
 * A workflow transition rule.
 * @export
 * @interface CreateWorkflowTransitionRule
 */
export interface CreateWorkflowTransitionRule {
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof CreateWorkflowTransitionRule
     */
    type: string;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkflowTransitionRule
     */
    _configuration?: { [key: string]: any; };
}
/**
 * The details of a workflow transition rules.
 * @export
 * @interface CreateWorkflowTransitionRulesDetails
 */
export interface CreateWorkflowTransitionRulesDetails {
    /**
     * 
     * @type {CreateWorkflowTransitionRulesDetailsConditions}
     * @memberof CreateWorkflowTransitionRulesDetails
     */
    conditions?: CreateWorkflowTransitionRulesDetailsConditions;
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
}
/**
 * The workflow conditions.
 * @export
 * @interface CreateWorkflowTransitionRulesDetailsConditions
 */
export interface CreateWorkflowTransitionRulesDetailsConditions {
    /**
     * The compound condition operator.
     * @type {string}
     * @memberof CreateWorkflowTransitionRulesDetailsConditions
     */
    operator?: CreateWorkflowTransitionRulesDetailsConditionsOperatorEnum;
    /**
     * The list of workflow conditions.
     * @type {Array<CreateWorkflowCondition>}
     * @memberof CreateWorkflowTransitionRulesDetailsConditions
     */
    conditions?: Array<CreateWorkflowCondition>;
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof CreateWorkflowTransitionRulesDetailsConditions
     */
    type?: string;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {{ [key: string]: any; }}
     * @memberof CreateWorkflowTransitionRulesDetailsConditions
     */
    _configuration?: { [key: string]: any; };
}


/**
 * @export
 */
export const CreateWorkflowTransitionRulesDetailsConditionsOperatorEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type CreateWorkflowTransitionRulesDetailsConditionsOperatorEnum = typeof CreateWorkflowTransitionRulesDetailsConditionsOperatorEnum[keyof typeof CreateWorkflowTransitionRulesDetailsConditionsOperatorEnum];

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
     * 
     * @type {CreatedIssueTransition}
     * @memberof CreatedIssue
     */
    transition?: CreatedIssueTransition;
}
/**
 * The response code and messages related to any requested transition.
 * @export
 * @interface CreatedIssueTransition
 */
export interface CreatedIssueTransition {
    /**
     * 
     * @type {number}
     * @memberof CreatedIssueTransition
     */
    status?: number;
    /**
     * 
     * @type {ErrorCollection}
     * @memberof CreatedIssueTransition
     */
    errorCollection?: ErrorCollection;
}
/**
 * Details about the issues created and the errors for requests that failed.
 * @export
 * @interface CreatedIssues
 */
export interface CreatedIssues {
    /**
     * Details of the issues created.
     * @type {Array<CreatedIssue>}
     * @memberof CreatedIssues
     */
    readonly issues?: Array<CreatedIssue>;
    /**
     * Error details for failed issue creation requests.
     * @type {Array<BulkOperationErrorResult>}
     * @memberof CreatedIssues
     */
    readonly errors?: Array<BulkOperationErrorResult>;
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
    configurations: ContextualConfiguration[];
}
/**
 * The details of a custom field context.
 * @export
 * @interface CustomFieldContext
 */
export interface CustomFieldContext {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    id: string;
    /**
     * The name of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    name: string;
    /**
     * The description of the context.
     * @type {string}
     * @memberof CustomFieldContext
     */
    description: string;
    /**
     * Whether the context is global.
     * @type {boolean}
     * @memberof CustomFieldContext
     */
    isGlobalContext: boolean;
    /**
     * Whether the context apply to all issue types.
     * @type {boolean}
     * @memberof CustomFieldContext
     */
    isAnyIssueType: boolean;
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
     * The ID of the default cascading option.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueCascadingOption
     */
    cascadingOptionId?: string;
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
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueDate
     */
    useCurrent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDate
     */
    type: string;
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
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueDateTime
     */
    useCurrent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueDateTime
     */
    type: string;
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
     * Whether to use the current date.
     * @type {boolean}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    useCurrent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeDateTimeField
     */
    type: string;
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
    groupIds: string[];
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
     * List of string values. The maximum length for a value is 254 characters.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueForgeMultiStringField
     */
    values?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiStringField
     */
    type: string;
}
/**
 * Defaults for a Forge collection of users custom field.
 * @export
 * @interface CustomFieldContextDefaultValueForgeMultiUserField
 */
export interface CustomFieldContextDefaultValueForgeMultiUserField {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeMultiUserField
     */
    contextId: string;
    /**
     * The IDs of the default users.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueForgeMultiUserField
     */
    accountIds: Array<string>;
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
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    contextId: string;
    /**
     * The ID of the default user.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    accountId: string;
    /**
     * 
     * @type {UserFilter}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    userFilter: UserFilter;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueForgeUserField
     */
    type: string;
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
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultiUserPicker
     */
    contextId: string;
    /**
     * The IDs of the default users.
     * @type {Array<string>}
     * @memberof CustomFieldContextDefaultValueMultiUserPicker
     */
    accountIds: Array<string>;
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
    groupIds: string[];
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
     * The IDs of the default versions.
     * @type {Set<string>}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    versionIds: string[];
    /**
     * The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    versionOrder?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueMultipleVersionPicker
     */
    type: string;
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
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueSingleVersionPicker
     */
    type: string;
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
     * The default URL.
     * @type {string}
     * @memberof CustomFieldContextDefaultValueURL
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextDefaultValueURL
     */
    type: string;
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
     * The ID of the custom field option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    id: string;
    /**
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    value: string;
    /**
     * For cascading options, the ID of the custom field option containing the cascading option.
     * @type {string}
     * @memberof CustomFieldContextOption
     */
    optionId?: string;
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldContextOption
     */
    disabled: boolean;
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
     * The ID of the project.
     * @type {string}
     * @memberof CustomFieldContextProjectMapping
     */
    readonly projectId?: string;
    /**
     * Whether context is global.
     * @type {boolean}
     * @memberof CustomFieldContextProjectMapping
     */
    readonly isGlobalContext?: boolean;
}
/**
 * Defaults for a User Picker (single) custom field.
 * @export
 * @interface CustomFieldContextSingleUserPickerDefaults
 */
export interface CustomFieldContextSingleUserPickerDefaults {
    /**
     * The ID of the context.
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    contextId: string;
    /**
     * The ID of the default user.
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    accountId: string;
    /**
     * 
     * @type {UserFilter}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    userFilter: UserFilter;
    /**
     * 
     * @type {string}
     * @memberof CustomFieldContextSingleUserPickerDefaults
     */
    type: string;
}
/**
 * Details of a custom field context.
 * @export
 * @interface CustomFieldContextUpdateDetails
 */
export interface CustomFieldContextUpdateDetails {
    /**
     * The name of the custom field context. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof CustomFieldContextUpdateDetails
     */
    name?: string;
    /**
     * The description of the custom field context. The maximum length is 255 characters.
     * @type {string}
     * @memberof CustomFieldContextUpdateDetails
     */
    description?: string;
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
     * The name of the custom field, which is displayed in Jira. This is not the unique identifier.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    name: string;
    /**
     * The description of the custom field, which is displayed in Jira.
     * @type {string}
     * @memberof CustomFieldDefinitionJsonBean
     */
    description?: string;
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
     * The value of the custom field option.
     * @type {string}
     * @memberof CustomFieldOptionCreate
     */
    value: string;
    /**
     * For cascading options, the ID of the custom field object containing the cascading option.
     * @type {string}
     * @memberof CustomFieldOptionCreate
     */
    optionId?: string;
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldOptionCreate
     */
    disabled?: boolean;
}
/**
 * Details of a custom field option for a context.
 * @export
 * @interface CustomFieldOptionUpdate
 */
export interface CustomFieldOptionUpdate {
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
    /**
     * Whether the option is disabled.
     * @type {boolean}
     * @memberof CustomFieldOptionUpdate
     */
    disabled?: boolean;
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
     * 
     * @type {string}
     * @memberof Dashboard
     */
    description?: string;
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
     * The name of the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    readonly name?: string;
    /**
     * 
     * @type {DashboardOwner}
     * @memberof Dashboard
     */
    owner?: DashboardOwner;
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
     * The details of any edit share permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof Dashboard
     */
    readonly editPermissions?: Array<SharePermission>;
    /**
     * The automatic refresh interval for the dashboard in milliseconds.
     * @type {number}
     * @memberof Dashboard
     */
    readonly automaticRefreshMs?: number;
    /**
     * The URL of the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    readonly view?: string;
    /**
     * Whether the current user has permission to edit the dashboard.
     * @type {boolean}
     * @memberof Dashboard
     */
    readonly isWritable?: boolean;
    /**
     * Whether the current dashboard is system dashboard.
     * @type {boolean}
     * @memberof Dashboard
     */
    readonly systemDashboard?: boolean;
}
/**
 * Details of a dashboard.
 * @export
 * @interface DashboardDetails
 */
export interface DashboardDetails {
    /**
     * The name of the dashboard.
     * @type {string}
     * @memberof DashboardDetails
     */
    name: string;
    /**
     * The description of the dashboard.
     * @type {string}
     * @memberof DashboardDetails
     */
    description?: string;
    /**
     * The share permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof DashboardDetails
     */
    sharePermissions: Array<SharePermission>;
    /**
     * The edit permissions for the dashboard.
     * @type {Array<SharePermission>}
     * @memberof DashboardDetails
     */
    editPermissions: Array<SharePermission>;
}
/**
 * Details of a gadget.
 * @export
 * @interface DashboardGadget
 */
export interface DashboardGadget {
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
     * The URI of the gadget type.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly uri?: string;
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly color: DashboardGadgetColorEnum;
    /**
     * 
     * @type {DashboardGadgetPosition}
     * @memberof DashboardGadget
     */
    position: DashboardGadgetPosition;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadget
     */
    readonly title: string;
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
 * The position of the gadget.
 * @export
 * @interface DashboardGadgetPosition
 */
export interface DashboardGadgetPosition {
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetPosition
     */
    theRowPositionOfTheGadget: number;
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetPosition
     */
    theColumnPositionOfTheGadget: number;
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
     * The module key of the gadget type. Can't be provided with `uri`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    moduleKey?: string;
    /**
     * The URI of the gadget type. Can't be provided with `moduleKey`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    uri?: string;
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    color?: string;
    /**
     * 
     * @type {DashboardGadgetSettingsPosition}
     * @memberof DashboardGadgetSettings
     */
    position?: DashboardGadgetSettingsPosition;
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadgetSettings
     */
    title?: string;
    /**
     * Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.
     * @type {boolean}
     * @memberof DashboardGadgetSettings
     */
    ignoreUriAndModuleKeyValidation?: boolean;
}
/**
 * The position of the gadget. When the gadget is placed into the position, other gadgets in the same column are moved down to accommodate it.
 * @export
 * @interface DashboardGadgetSettingsPosition
 */
export interface DashboardGadgetSettingsPosition {
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetSettingsPosition
     */
    theRowPositionOfTheGadget: number;
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetSettingsPosition
     */
    theColumnPositionOfTheGadget: number;
}
/**
 * The details of the gadget to update.
 * @export
 * @interface DashboardGadgetUpdateRequest
 */
export interface DashboardGadgetUpdateRequest {
    /**
     * The title of the gadget.
     * @type {string}
     * @memberof DashboardGadgetUpdateRequest
     */
    title?: string;
    /**
     * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
     * @type {string}
     * @memberof DashboardGadgetUpdateRequest
     */
    color?: string;
    /**
     * 
     * @type {DashboardGadgetUpdateRequestPosition}
     * @memberof DashboardGadgetUpdateRequest
     */
    position?: DashboardGadgetUpdateRequestPosition;
}
/**
 * The position of the gadget.
 * @export
 * @interface DashboardGadgetUpdateRequestPosition
 */
export interface DashboardGadgetUpdateRequestPosition {
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetUpdateRequestPosition
     */
    theRowPositionOfTheGadget: number;
    /**
     * 
     * @type {number}
     * @memberof DashboardGadgetUpdateRequestPosition
     */
    theColumnPositionOfTheGadget: number;
}
/**
 * The owner of the dashboard.
 * @export
 * @interface DashboardOwner
 */
export interface DashboardOwner {
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The key of the user.
     * @type {string}
     * @memberof DashboardOwner
     */
    key?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof DashboardOwner
     */
    self?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The username of the user.
     * @type {string}
     * @memberof DashboardOwner
     */
    name?: string;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof DashboardOwner
     */
    displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof DashboardOwner
     */
    active?: boolean;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof DashboardOwner
     */
    accountId?: string;
    /**
     * 
     * @type {UserBeanAvatarUrls}
     * @memberof DashboardOwner
     */
    avatarUrls?: UserBeanAvatarUrls;
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
     * The name of the workflow to set as the default workflow.
     * @type {string}
     * @memberof DefaultWorkflow
     */
    workflow: string;
    /**
     * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
     * @type {boolean}
     * @memberof DefaultWorkflow
     */
    updateDraftIfNeeded?: boolean;
}
/**
 * 
 * @export
 * @interface DeleteAndReplaceVersionBean
 */
export interface DeleteAndReplaceVersionBean {
    /**
     * The ID of the version to update `fixVersion` to when the field contains the deleted version.
     * @type {number}
     * @memberof DeleteAndReplaceVersionBean
     */
    moveFixIssuesTo?: number;
    /**
     * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
     * @type {number}
     * @memberof DeleteAndReplaceVersionBean
     */
    moveAffectedIssuesTo?: number;
    /**
     * An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
     * @type {Array<CustomFieldReplacement>}
     * @memberof DeleteAndReplaceVersionBean
     */
    customFieldReplacementList?: Array<CustomFieldReplacement>;
}
/**
 * Details about a workflow.
 * @export
 * @interface DeprecatedWorkflow
 */
export interface DeprecatedWorkflow {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof DeprecatedWorkflow
     */
    readonly name?: string;
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
     * The number of steps included in the workflow.
     * @type {number}
     * @memberof DeprecatedWorkflow
     */
    readonly steps?: number;
    /**
     * 
     * @type {DeprecatedWorkflowScope}
     * @memberof DeprecatedWorkflow
     */
    scope?: DeprecatedWorkflowScope;
    /**
     * 
     * @type {boolean}
     * @memberof DeprecatedWorkflow
     */
    _default?: boolean;
}
/**
 * The scope where this workflow applies
 * @export
 * @interface DeprecatedWorkflowScope
 */
export interface DeprecatedWorkflowScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof DeprecatedWorkflowScope
     */
    readonly type?: DeprecatedWorkflowScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof DeprecatedWorkflowScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const DeprecatedWorkflowScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type DeprecatedWorkflowScopeTypeEnum = typeof DeprecatedWorkflowScopeTypeEnum[keyof typeof DeprecatedWorkflowScopeTypeEnum];

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
     * The error message.
     * @type {string}
     * @memberof ErrorMessage
     */
    message: string;
}
/**
 * Details about a notification associated with an event.
 * @export
 * @interface EventNotification
 */
export interface EventNotification {
    /**
     * Expand options that include additional event notification details in the response.
     * @type {string}
     * @memberof EventNotification
     */
    expand?: string;
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
     * 
     * @type {EventNotificationGroup}
     * @memberof EventNotification
     */
    group?: EventNotificationGroup;
    /**
     * 
     * @type {EventNotificationField}
     * @memberof EventNotification
     */
    field?: EventNotificationField;
    /**
     * The email address.
     * @type {string}
     * @memberof EventNotification
     */
    emailAddress?: string;
    /**
     * 
     * @type {EventNotificationProjectRole}
     * @memberof EventNotification
     */
    projectRole?: EventNotificationProjectRole;
    /**
     * 
     * @type {EventNotificationUser}
     * @memberof EventNotification
     */
    user?: EventNotificationUser;
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
 * The custom user or group field.
 * @export
 * @interface EventNotificationField
 */
export interface EventNotificationField {
    /**
     * The ID of the field.
     * @type {string}
     * @memberof EventNotificationField
     */
    id?: string;
    /**
     * The key of the field.
     * @type {string}
     * @memberof EventNotificationField
     */
    key?: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof EventNotificationField
     */
    name?: string;
    /**
     * Whether the field is a custom field.
     * @type {boolean}
     * @memberof EventNotificationField
     */
    custom?: boolean;
    /**
     * Whether the content of the field can be used to order lists.
     * @type {boolean}
     * @memberof EventNotificationField
     */
    orderable?: boolean;
    /**
     * Whether the field can be used as a column on the issue navigator.
     * @type {boolean}
     * @memberof EventNotificationField
     */
    navigable?: boolean;
    /**
     * Whether the content of the field can be searched.
     * @type {boolean}
     * @memberof EventNotificationField
     */
    searchable?: boolean;
    /**
     * The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
     * @type {Set<string>}
     * @memberof EventNotificationField
     */
    clauseNames?: string[];
    /**
     * 
     * @type {FieldDetailsScope}
     * @memberof EventNotificationField
     */
    scope?: FieldDetailsScope;
    /**
     * 
     * @type {FieldDetailsSchema}
     * @memberof EventNotificationField
     */
    schema?: FieldDetailsSchema;
}
/**
 * The specified group.
 * @export
 * @interface EventNotificationGroup
 */
export interface EventNotificationGroup {
    /**
     * The name of group.
     * @type {string}
     * @memberof EventNotificationGroup
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof EventNotificationGroup
     */
    groupId?: string | null;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof EventNotificationGroup
     */
    readonly self?: string;
}
/**
 * The specified project role.
 * @export
 * @interface EventNotificationProjectRole
 */
export interface EventNotificationProjectRole {
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof EventNotificationProjectRole
     */
    readonly self?: string;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof EventNotificationProjectRole
     */
    name?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof EventNotificationProjectRole
     */
    readonly id?: number;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof EventNotificationProjectRole
     */
    readonly description?: string;
    /**
     * The list of users who act in this role.
     * @type {Array<RoleActor>}
     * @memberof EventNotificationProjectRole
     */
    readonly actors?: Array<RoleActor>;
    /**
     * 
     * @type {ProjectRoleScope}
     * @memberof EventNotificationProjectRole
     */
    scope?: ProjectRoleScope;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof EventNotificationProjectRole
     */
    translatedName?: string;
    /**
     * Whether the calling user is part of this role.
     * @type {boolean}
     * @memberof EventNotificationProjectRole
     */
    currentUserRole?: boolean;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof EventNotificationProjectRole
     */
    readonly roleConfigurable?: boolean;
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof EventNotificationProjectRole
     */
    readonly admin?: boolean;
    /**
     * Whether this role is the default role for the project
     * @type {boolean}
     * @memberof EventNotificationProjectRole
     */
    readonly _default?: boolean;
}
/**
 * The specified user.
 * @export
 * @interface EventNotificationUser
 */
export interface EventNotificationUser {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof EventNotificationUser
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof EventNotificationUser
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof EventNotificationUser
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof EventNotificationUser
     */
    readonly accountType?: string;
}
/**
 * Details about a failed webhook.
 * @export
 * @interface FailedWebhook
 */
export interface FailedWebhook {
    /**
     * The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook.
     * @type {string}
     * @memberof FailedWebhook
     */
    id: string;
    /**
     * The webhook body.
     * @type {string}
     * @memberof FailedWebhook
     */
    body?: string;
    /**
     * The original webhook destination.
     * @type {string}
     * @memberof FailedWebhook
     */
    url: string;
    /**
     * The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
     * @type {number}
     * @memberof FailedWebhook
     */
    failureTime: number;
}
/**
 * A page of failed webhooks.
 * @export
 * @interface FailedWebhooks
 */
export interface FailedWebhooks {
    /**
     * The list of webhooks.
     * @type {Array<FailedWebhook>}
     * @memberof FailedWebhooks
     */
    values: Array<FailedWebhook>;
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
}
/**
 * Details of a field.
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * The ID of the field.
     * @type {string}
     * @memberof Field
     */
    id: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof Field
     */
    name: string;
    /**
     * 
     * @type {JsonTypeBean}
     * @memberof Field
     */
    schema: JsonTypeBean;
    /**
     * The description of the field.
     * @type {string}
     * @memberof Field
     */
    description?: string;
    /**
     * The key of the field.
     * @type {string}
     * @memberof Field
     */
    key?: string;
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
     * The searcher key of the field. Returned for custom fields.
     * @type {string}
     * @memberof Field
     */
    searcherKey?: string;
    /**
     * Number of screens where the field is used.
     * @type {number}
     * @memberof Field
     */
    screensCount?: number;
    /**
     * Number of contexts where the field is used.
     * @type {number}
     * @memberof Field
     */
    contextsCount?: number;
    /**
     * Number of projects where the field is used.
     * @type {number}
     * @memberof Field
     */
    projectsCount?: number;
    /**
     * 
     * @type {FieldLastUsed}
     * @memberof Field
     */
    lastUsed?: FieldLastUsed;
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
     * The ID of the field configuration.
     * @type {number}
     * @memberof FieldConfiguration
     */
    id: number;
    /**
     * The name of the field configuration.
     * @type {string}
     * @memberof FieldConfiguration
     */
    name: string;
    /**
     * The description of the field configuration.
     * @type {string}
     * @memberof FieldConfiguration
     */
    description: string;
    /**
     * Whether the field configuration is the default.
     * @type {boolean}
     * @memberof FieldConfiguration
     */
    isDefault?: boolean;
}
/**
 * Details of a field configuration.
 * @export
 * @interface FieldConfigurationDetails
 */
export interface FieldConfigurationDetails {
    /**
     * The name of the field configuration. Must be unique.
     * @type {string}
     * @memberof FieldConfigurationDetails
     */
    name: string;
    /**
     * The description of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationDetails
     */
    description?: string;
}
/**
 * The field configuration for an issue type.
 * @export
 * @interface FieldConfigurationIssueTypeItem
 */
export interface FieldConfigurationIssueTypeItem {
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
    /**
     * The ID of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationIssueTypeItem
     */
    fieldConfigurationId: string;
}
/**
 * A field within a field configuration.
 * @export
 * @interface FieldConfigurationItem
 */
export interface FieldConfigurationItem {
    /**
     * The ID of the field within the field configuration.
     * @type {string}
     * @memberof FieldConfigurationItem
     */
    id: string;
    /**
     * The description of the field within the field configuration.
     * @type {string}
     * @memberof FieldConfigurationItem
     */
    description?: string;
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
    /**
     * The description of the field configuration scheme.
     * @type {string}
     * @memberof FieldConfigurationScheme
     */
    description?: string;
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
     * The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request.
     * @type {string}
     * @memberof FieldConfigurationToIssueTypeMapping
     */
    issueTypeId: string;
    /**
     * The ID of the field configuration.
     * @type {string}
     * @memberof FieldConfigurationToIssueTypeMapping
     */
    fieldConfigurationId: string;
}
/**
 * Details about a field.
 * @export
 * @interface FieldDetails
 */
export interface FieldDetails {
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
     * Whether the field is a custom field.
     * @type {boolean}
     * @memberof FieldDetails
     */
    custom?: boolean;
    /**
     * Whether the content of the field can be used to order lists.
     * @type {boolean}
     * @memberof FieldDetails
     */
    orderable?: boolean;
    /**
     * Whether the field can be used as a column on the issue navigator.
     * @type {boolean}
     * @memberof FieldDetails
     */
    navigable?: boolean;
    /**
     * Whether the content of the field can be searched.
     * @type {boolean}
     * @memberof FieldDetails
     */
    searchable?: boolean;
    /**
     * The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
     * @type {Set<string>}
     * @memberof FieldDetails
     */
    clauseNames?: string[];
    /**
     * 
     * @type {FieldDetailsScope}
     * @memberof FieldDetails
     */
    scope?: FieldDetailsScope;
    /**
     * 
     * @type {FieldDetailsSchema}
     * @memberof FieldDetails
     */
    schema?: FieldDetailsSchema;
}
/**
 * The data schema for the field.
 * @export
 * @interface FieldDetailsSchema
 */
export interface FieldDetailsSchema {
    /**
     * The data type of the field.
     * @type {string}
     * @memberof FieldDetailsSchema
     */
    readonly type: string;
    /**
     * When the data type is an array, the name of the field items within the array.
     * @type {string}
     * @memberof FieldDetailsSchema
     */
    readonly items?: string;
    /**
     * If the field is a system field, the name of the field.
     * @type {string}
     * @memberof FieldDetailsSchema
     */
    readonly system?: string;
    /**
     * If the field is a custom field, the URI of the field.
     * @type {string}
     * @memberof FieldDetailsSchema
     */
    readonly custom?: string;
    /**
     * If the field is a custom field, the custom ID of the field.
     * @type {number}
     * @memberof FieldDetailsSchema
     */
    readonly customId?: number;
    /**
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof FieldDetailsSchema
     */
    readonly _configuration?: { [key: string]: any; };
}
/**
 * The scope of the field.
 * @export
 * @interface FieldDetailsScope
 */
export interface FieldDetailsScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof FieldDetailsScope
     */
    readonly type?: FieldDetailsScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof FieldDetailsScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const FieldDetailsScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type FieldDetailsScopeTypeEnum = typeof FieldDetailsScopeTypeEnum[keyof typeof FieldDetailsScopeTypeEnum];

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
     * Whether the field is required.
     * @type {boolean}
     * @memberof FieldMetadata
     */
    readonly required: boolean;
    /**
     * 
     * @type {FieldMetadataSchema}
     * @memberof FieldMetadata
     */
    schema: FieldMetadataSchema;
    /**
     * The name of the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly name: string;
    /**
     * The key of the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly key: string;
    /**
     * The URL that can be used to automatically complete the field.
     * @type {string}
     * @memberof FieldMetadata
     */
    readonly autoCompleteUrl?: string;
    /**
     * Whether the field has a default value.
     * @type {boolean}
     * @memberof FieldMetadata
     */
    readonly hasDefaultValue?: boolean;
    /**
     * The list of operations that can be performed on the field.
     * @type {Array<string>}
     * @memberof FieldMetadata
     */
    readonly operations: Array<string>;
    /**
     * The list of values allowed in the field.
     * @type {Array<any>}
     * @memberof FieldMetadata
     */
    readonly allowedValues?: Array<any>;
    /**
     * The default value of the field.
     * @type {any}
     * @memberof FieldMetadata
     */
    readonly defaultValue?: any | null;
    /**
     * The configuration properties.
     * @type {{ [key: string]: any; }}
     * @memberof FieldMetadata
     */
    readonly _configuration?: { [key: string]: any; };
}
/**
 * The data type of the field.
 * @export
 * @interface FieldMetadataSchema
 */
export interface FieldMetadataSchema {
    /**
     * The data type of the field.
     * @type {string}
     * @memberof FieldMetadataSchema
     */
    readonly type: string;
    /**
     * When the data type is an array, the name of the field items within the array.
     * @type {string}
     * @memberof FieldMetadataSchema
     */
    readonly items?: string;
    /**
     * If the field is a system field, the name of the field.
     * @type {string}
     * @memberof FieldMetadataSchema
     */
    readonly system?: string;
    /**
     * If the field is a custom field, the URI of the field.
     * @type {string}
     * @memberof FieldMetadataSchema
     */
    readonly custom?: string;
    /**
     * If the field is a custom field, the custom ID of the field.
     * @type {number}
     * @memberof FieldMetadataSchema
     */
    readonly customId?: number;
    /**
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof FieldMetadataSchema
     */
    readonly _configuration?: { [key: string]: any; };
}
/**
 * Details of a field that can be used in advanced searches.
 * @export
 * @interface FieldReferenceData
 */
export interface FieldReferenceData {
    /**
     * The field identifier.
     * @type {string}
     * @memberof FieldReferenceData
     */
    value?: string;
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
     * The valid search operators for the field.
     * @type {Array<string>}
     * @memberof FieldReferenceData
     */
    operators?: Array<string>;
    /**
     * The data types of items in the field.
     * @type {Array<string>}
     * @memberof FieldReferenceData
     */
    types?: Array<string>;
}


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
export const FieldReferenceDataAutoEnum = {
    True: 'true',
    False: 'false'
} as const;
export type FieldReferenceDataAutoEnum = typeof FieldReferenceDataAutoEnum[keyof typeof FieldReferenceDataAutoEnum];

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
     * The value to set in the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    set?: any | null;
    /**
     * The value to removed from the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    remove?: any | null;
    /**
     * The value to edit in the field.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    edit?: any | null;
    /**
     * The field value to copy from another issue.
     * @type {any}
     * @memberof FieldUpdateOperation
     */
    copy?: any | null;
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
     * The operator between the field and operand.
     * @type {string}
     * @memberof FieldValueClause
     */
    operator: FieldValueClauseOperatorEnum;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof FieldValueClause
     */
    operand: JqlQueryClauseOperand;
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
     * The operator between the field and operand.
     * @type {string}
     * @memberof FieldWasClause
     */
    operator: FieldWasClauseOperatorEnum;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof FieldWasClause
     */
    operand: JqlQueryClauseOperand;
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
 * Key fields from the linked issue.
 * @export
 * @interface Fields
 */
export interface Fields {
    /**
     * The summary description of the linked issue.
     * @type {string}
     * @memberof Fields
     */
    readonly summary?: string;
    /**
     * 
     * @type {FieldsStatus}
     * @memberof Fields
     */
    status?: FieldsStatus;
    /**
     * 
     * @type {FieldsPriority}
     * @memberof Fields
     */
    priority?: FieldsPriority;
    /**
     * 
     * @type {FieldsAssignee}
     * @memberof Fields
     */
    assignee?: FieldsAssignee;
    /**
     * 
     * @type {FieldsTimetracking}
     * @memberof Fields
     */
    timetracking?: FieldsTimetracking;
    /**
     * 
     * @type {IssueTypeDetails}
     * @memberof Fields
     */
    issuetype?: IssueTypeDetails;
    /**
     * 
     * @type {FieldsIssueType}
     * @memberof Fields
     */
    issueType?: FieldsIssueType;
}
/**
 * The assignee of the linked issue.
 * @export
 * @interface FieldsAssignee
 */
export interface FieldsAssignee {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof FieldsAssignee
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof FieldsAssignee
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof FieldsAssignee
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof FieldsAssignee
     */
    readonly accountType?: string;
}
/**
 * The type of the linked issue.
 * @export
 * @interface FieldsIssueType
 */
export interface FieldsIssueType {
    /**
     * The URL of these issue type details.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly self?: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly id?: string;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly description?: string;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly iconUrl?: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly name?: string;
    /**
     * Whether this issue type is used to create subtasks.
     * @type {boolean}
     * @memberof FieldsIssueType
     */
    readonly subtask?: boolean;
    /**
     * The ID of the issue type's avatar.
     * @type {number}
     * @memberof FieldsIssueType
     */
    readonly avatarId?: number;
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof FieldsIssueType
     */
    readonly entityId?: string;
    /**
     * Hierarchy level of the issue type.
     * @type {number}
     * @memberof FieldsIssueType
     */
    readonly hierarchyLevel?: number;
    /**
     * 
     * @type {IssueTypeDetailsScope}
     * @memberof FieldsIssueType
     */
    scope?: IssueTypeDetailsScope;
}
/**
 * The priority of the linked issue.
 * @export
 * @interface FieldsPriority
 */
export interface FieldsPriority {
    /**
     * The URL of the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    self?: string;
    /**
     * The color used to indicate the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    statusColor?: string;
    /**
     * The description of the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    description?: string;
    /**
     * The URL of the icon for the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    iconUrl?: string;
    /**
     * The name of the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    name?: string;
    /**
     * The ID of the issue priority.
     * @type {string}
     * @memberof FieldsPriority
     */
    id?: string;
    /**
     * Whether this priority is the default.
     * @type {boolean}
     * @memberof FieldsPriority
     */
    isDefault?: boolean;
}
/**
 * The status of the linked issue.
 * @export
 * @interface FieldsStatus
 */
export interface FieldsStatus {
    /**
     * The URL of the status.
     * @type {string}
     * @memberof FieldsStatus
     */
    readonly self?: string;
    /**
     * The description of the status.
     * @type {string}
     * @memberof FieldsStatus
     */
    readonly description?: string;
    /**
     * The URL of the icon used to represent the status.
     * @type {string}
     * @memberof FieldsStatus
     */
    readonly iconUrl?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof FieldsStatus
     */
    readonly name?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof FieldsStatus
     */
    readonly id?: string;
    /**
     * 
     * @type {StatusDetailsStatusCategory}
     * @memberof FieldsStatus
     */
    statusCategory?: StatusDetailsStatusCategory;
}
/**
 * The time tracking of the linked issue.
 * @export
 * @interface FieldsTimetracking
 */
export interface FieldsTimetracking {
    /**
     * The original estimate of time needed for this issue in readable format.
     * @type {string}
     * @memberof FieldsTimetracking
     */
    readonly originalEstimate?: string;
    /**
     * The remaining estimate of time needed for this issue in readable format.
     * @type {string}
     * @memberof FieldsTimetracking
     */
    readonly remainingEstimate?: string;
    /**
     * Time worked on this issue in readable format.
     * @type {string}
     * @memberof FieldsTimetracking
     */
    readonly timeSpent?: string;
    /**
     * The original estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof FieldsTimetracking
     */
    readonly originalEstimateSeconds?: number;
    /**
     * The remaining estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof FieldsTimetracking
     */
    readonly remainingEstimateSeconds?: number;
    /**
     * Time worked on this issue in seconds.
     * @type {number}
     * @memberof FieldsTimetracking
     */
    readonly timeSpentSeconds?: number;
}
/**
 * Details about a filter.
 * @export
 * @interface Filter
 */
export interface Filter {
    /**
     * The URL of the filter.
     * @type {string}
     * @memberof Filter
     */
    readonly self?: string;
    /**
     * The unique identifier for the filter.
     * @type {string}
     * @memberof Filter
     */
    readonly id?: string;
    /**
     * The name of the filter. Must be unique.
     * @type {string}
     * @memberof Filter
     */
    name: string;
    /**
     * A description of the filter.
     * @type {string}
     * @memberof Filter
     */
    description?: string;
    /**
     * 
     * @type {FilterOwner}
     * @memberof Filter
     */
    owner?: FilterOwner;
    /**
     * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
     * @type {string}
     * @memberof Filter
     */
    jql?: string;
    /**
     * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
     * @type {string}
     * @memberof Filter
     */
    readonly viewUrl?: string;
    /**
     * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
     * @type {string}
     * @memberof Filter
     */
    readonly searchUrl?: string;
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
     * The groups and projects that the filter is shared with.
     * @type {Array<SharePermission>}
     * @memberof Filter
     */
    sharePermissions?: Array<SharePermission>;
    /**
     * The groups and projects that can edit the filter.
     * @type {Array<SharePermission>}
     * @memberof Filter
     */
    editPermissions?: Array<SharePermission>;
    /**
     * 
     * @type {FilterSharedUsers}
     * @memberof Filter
     */
    sharedUsers?: FilterSharedUsers;
    /**
     * 
     * @type {FilterSubscriptions}
     * @memberof Filter
     */
    subscriptions?: FilterSubscriptions;
}
/**
 * Details of a filter.
 * @export
 * @interface FilterDetails
 */
export interface FilterDetails {
    /**
     * Expand options that include additional filter details in the response.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly expand?: string;
    /**
     * The URL of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly self?: string;
    /**
     * The unique identifier for the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly id?: string;
    /**
     * The name of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    name: string;
    /**
     * The description of the filter.
     * @type {string}
     * @memberof FilterDetails
     */
    description?: string;
    /**
     * 
     * @type {FilterDetailsOwner}
     * @memberof FilterDetails
     */
    owner?: FilterDetailsOwner;
    /**
     * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly jql?: string;
    /**
     * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly viewUrl?: string;
    /**
     * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
     * @type {string}
     * @memberof FilterDetails
     */
    readonly searchUrl?: string;
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
     * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
     * @type {Array<SharePermission>}
     * @memberof FilterDetails
     */
    sharePermissions?: Array<SharePermission>;
    /**
     * The groups and projects that can edit the filter. This can be specified when updating a filter, but not when creating a filter.
     * @type {Array<SharePermission>}
     * @memberof FilterDetails
     */
    editPermissions?: Array<SharePermission>;
    /**
     * The users that are subscribed to the filter.
     * @type {Array<FilterSubscription>}
     * @memberof FilterDetails
     */
    readonly subscriptions?: Array<FilterSubscription>;
}
/**
 * The user who owns the filter. Defaults to the creator of the filter, however, Jira administrators can change the owner of a shared filter in the admin settings.
 * @export
 * @interface FilterDetailsOwner
 */
export interface FilterDetailsOwner {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly accountType?: FilterDetailsOwnerAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof FilterDetailsOwner
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof FilterDetailsOwner
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof FilterDetailsOwner
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof FilterDetailsOwner
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof FilterDetailsOwner
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const FilterDetailsOwnerAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type FilterDetailsOwnerAccountTypeEnum = typeof FilterDetailsOwnerAccountTypeEnum[keyof typeof FilterDetailsOwnerAccountTypeEnum];

/**
 * The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings.
 * @export
 * @interface FilterOwner
 */
export interface FilterOwner {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterOwner
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof FilterOwner
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof FilterOwner
     */
    readonly accountType?: FilterOwnerAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterOwner
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof FilterOwner
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof FilterOwner
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof FilterOwner
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof FilterOwner
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof FilterOwner
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const FilterOwnerAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type FilterOwnerAccountTypeEnum = typeof FilterOwnerAccountTypeEnum[keyof typeof FilterOwnerAccountTypeEnum];

/**
 * A paginated list of the users that the filter is shared with. This includes users that are members of the groups or can browse the projects that the filter is shared with.
 * @export
 * @interface FilterSharedUsers
 */
export interface FilterSharedUsers {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof FilterSharedUsers
     */
    readonly size?: number;
    /**
     * The list of items.
     * @type {Array<User>}
     * @memberof FilterSharedUsers
     */
    readonly items?: Array<User>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof FilterSharedUsers
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof FilterSharedUsers
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof FilterSharedUsers
     */
    readonly endIndex?: number;
}
/**
 * Details of a user or group subscribing to a filter.
 * @export
 * @interface FilterSubscription
 */
export interface FilterSubscription {
    /**
     * The ID of the filter subscription.
     * @type {number}
     * @memberof FilterSubscription
     */
    readonly id?: number;
    /**
     * 
     * @type {FilterSubscriptionUser}
     * @memberof FilterSubscription
     */
    user?: FilterSubscriptionUser;
    /**
     * 
     * @type {FilterSubscriptionGroup}
     * @memberof FilterSubscription
     */
    group?: FilterSubscriptionGroup;
}
/**
 * The group subscribing to filter.
 * @export
 * @interface FilterSubscriptionGroup
 */
export interface FilterSubscriptionGroup {
    /**
     * The name of group.
     * @type {string}
     * @memberof FilterSubscriptionGroup
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof FilterSubscriptionGroup
     */
    groupId?: string | null;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof FilterSubscriptionGroup
     */
    readonly self?: string;
}
/**
 * The user subscribing to filter.
 * @export
 * @interface FilterSubscriptionUser
 */
export interface FilterSubscriptionUser {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly accountType?: FilterSubscriptionUserAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof FilterSubscriptionUser
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof FilterSubscriptionUser
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof FilterSubscriptionUser
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof FilterSubscriptionUser
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof FilterSubscriptionUser
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const FilterSubscriptionUserAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type FilterSubscriptionUserAccountTypeEnum = typeof FilterSubscriptionUserAccountTypeEnum[keyof typeof FilterSubscriptionUserAccountTypeEnum];

/**
 * A paginated list of the users that are subscribed to the filter.
 * @export
 * @interface FilterSubscriptions
 */
export interface FilterSubscriptions {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof FilterSubscriptions
     */
    readonly size?: number;
    /**
     * The list of items.
     * @type {Array<FilterSubscription>}
     * @memberof FilterSubscriptions
     */
    readonly items?: Array<FilterSubscription>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof FilterSubscriptions
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptions
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptions
     */
    readonly endIndex?: number;
}
/**
 * A paginated list of subscriptions to a filter.
 * @export
 * @interface FilterSubscriptionsList
 */
export interface FilterSubscriptionsList {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly size?: number;
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
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof FilterSubscriptionsList
     */
    readonly endIndex?: number;
}
/**
 * A group found in a search.
 * @export
 * @interface FoundGroup
 */
export interface FoundGroup {
    /**
     * The name of the group. The name of a group is mutable, to reliably identify a group use ``groupId`.`
     * @type {string}
     * @memberof FoundGroup
     */
    name?: string;
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
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof FoundGroup
     */
    groupId?: string;
}
/**
 * The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
 * @export
 * @interface FoundGroups
 */
export interface FoundGroups {
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
    /**
     * 
     * @type {Array<FoundGroup>}
     * @memberof FoundGroups
     */
    groups?: Array<FoundGroup>;
}
/**
 * The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
 * @export
 * @interface FoundUsers
 */
export interface FoundUsers {
    /**
     * 
     * @type {Array<UserPickerUser>}
     * @memberof FoundUsers
     */
    users?: Array<UserPickerUser>;
    /**
     * The total number of users found in the search.
     * @type {number}
     * @memberof FoundUsers
     */
    total?: number;
    /**
     * Header text indicating the number of users in the response and the total number of users found in the search.
     * @type {string}
     * @memberof FoundUsers
     */
    header?: string;
}
/**
 * List of users and groups found in a search.
 * @export
 * @interface FoundUsersAndGroups
 */
export interface FoundUsersAndGroups {
    /**
     * 
     * @type {FoundUsers}
     * @memberof FoundUsersAndGroups
     */
    users?: FoundUsers;
    /**
     * 
     * @type {FoundGroups}
     * @memberof FoundUsersAndGroups
     */
    groups?: FoundGroups;
}
/**
 * An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
 * @export
 * @interface FunctionOperand
 */
export interface FunctionOperand {
    /**
     * The name of the function.
     * @type {string}
     * @memberof FunctionOperand
     */
    _function: string;
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof FunctionOperand
     */
    arguments: Array<string>;
}
/**
 * Details of functions that can be used in advanced searches.
 * @export
 * @interface FunctionReferenceData
 */
export interface FunctionReferenceData {
    /**
     * The function identifier.
     * @type {string}
     * @memberof FunctionReferenceData
     */
    value?: string;
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
     * The data types returned by the function.
     * @type {Array<string>}
     * @memberof FunctionReferenceData
     */
    types?: Array<string>;
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
    attributes?: GlobalScopeBeanAttributesEnum[];
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
     * The name of group.
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof Group
     */
    groupId?: string | null;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof Group
     */
    readonly self?: string;
    /**
     * 
     * @type {GroupUsers}
     * @memberof Group
     */
    users?: GroupUsers;
    /**
     * Expand options that include additional group details in the response.
     * @type {string}
     * @memberof Group
     */
    readonly expand?: string;
}
/**
 * Details about a group.
 * @export
 * @interface GroupDetails
 */
export interface GroupDetails {
    /**
     * The name of the group.
     * @type {string}
     * @memberof GroupDetails
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof GroupDetails
     */
    groupId?: string | null;
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
     * The name of group.
     * @type {string}
     * @memberof GroupName
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof GroupName
     */
    groupId?: string | null;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof GroupName
     */
    readonly self?: string;
}
/**
 * A paginated list of the users that are members of the group. A maximum of 50 users is returned in the list, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 50 users, use`?expand=users[51:100]`.
 * @export
 * @interface GroupUsers
 */
export interface GroupUsers {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof GroupUsers
     */
    readonly size?: number;
    /**
     * The list of items.
     * @type {Array<UserDetails>}
     * @memberof GroupUsers
     */
    readonly items?: Array<UserDetails>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof GroupUsers
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof GroupUsers
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof GroupUsers
     */
    readonly endIndex?: number;
}
/**
 * Jira instance health check results. Deprecated and no longer returned.
 * @export
 * @interface HealthCheckResult
 */
export interface HealthCheckResult {
    /**
     * The name of the Jira health check item.
     * @type {string}
     * @memberof HealthCheckResult
     */
    name?: string;
    /**
     * The description of the Jira health check item.
     * @type {string}
     * @memberof HealthCheckResult
     */
    description?: string;
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
     * The type of the history record.
     * @type {string}
     * @memberof HistoryMetadata
     */
    type?: string;
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
     * 
     * @type {HistoryMetadataActor}
     * @memberof HistoryMetadata
     */
    actor?: HistoryMetadataActor;
    /**
     * 
     * @type {HistoryMetadataGenerator}
     * @memberof HistoryMetadata
     */
    generator?: HistoryMetadataGenerator;
    /**
     * 
     * @type {HistoryMetadataCause}
     * @memberof HistoryMetadata
     */
    cause?: HistoryMetadataCause;
    /**
     * Additional arbitrary information about the history record.
     * @type {{ [key: string]: string; }}
     * @memberof HistoryMetadata
     */
    extraData?: { [key: string]: string; };
}
/**
 * Details of the user whose action created the history record.
 * @export
 * @interface HistoryMetadataActor
 */
export interface HistoryMetadataActor {
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    id?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    displayNameKey?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    type?: string;
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    avatarUrl?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataActor
     */
    url?: string;
}
/**
 * Details of the cause that triggered the creation the history record.
 * @export
 * @interface HistoryMetadataCause
 */
export interface HistoryMetadataCause {
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    id?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    displayNameKey?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    type?: string;
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    avatarUrl?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataCause
     */
    url?: string;
}
/**
 * Details of the system that generated the history record.
 * @export
 * @interface HistoryMetadataGenerator
 */
export interface HistoryMetadataGenerator {
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    id?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    displayNameKey?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    type?: string;
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    avatarUrl?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataGenerator
     */
    url?: string;
}
/**
 * Details of user or system associated with a issue history metadata item.
 * @export
 * @interface HistoryMetadataParticipant
 */
export interface HistoryMetadataParticipant {
    [key: string]: any | any;
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    id?: string;
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
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    type?: string;
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof HistoryMetadataParticipant
     */
    avatarUrl?: string;
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
     * The URL of an icon that displays at 16x16 pixel in Jira.
     * @type {string}
     * @memberof Icon
     */
    url16x16?: string;
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
     * The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
     * @type {string}
     * @memberof Icon
     */
    link?: string;
}
/**
 * An icon.
 * @export
 * @interface IconBean
 */
export interface IconBean {
    /**
     * The URL of a 16x16 pixel icon.
     * @type {string}
     * @memberof IconBean
     */
    url16x16?: string;
    /**
     * The title of the icon, for use as a tooltip on the icon.
     * @type {string}
     * @memberof IconBean
     */
    title?: string;
    /**
     * The URL of the tooltip, used only for a status icon.
     * @type {string}
     * @memberof IconBean
     */
    link?: string;
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
 * @interface IncludedFields
 */
export interface IncludedFields {
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    excluded?: string[];
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    included?: string[];
    /**
     * 
     * @type {Set<string>}
     * @memberof IncludedFields
     */
    actuallyIncluded?: string[];
}
/**
 * Details about an issue.
 * @export
 * @interface IssueBean
 */
export interface IssueBean {
    /**
     * Expand options that include additional issue details in the response.
     * @type {string}
     * @memberof IssueBean
     */
    readonly expand?: string;
    /**
     * The ID of the issue.
     * @type {string}
     * @memberof IssueBean
     */
    readonly id?: string;
    /**
     * The URL of the issue details.
     * @type {string}
     * @memberof IssueBean
     */
    readonly self?: string;
    /**
     * The key of the issue.
     * @type {string}
     * @memberof IssueBean
     */
    readonly key?: string;
    /**
     * The rendered value of each field present on the issue.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    readonly renderedFields?: { [key: string]: any; };
    /**
     * Details of the issue properties identified in the request.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    readonly properties?: { [key: string]: any; };
    /**
     * The ID and name of each field present on the issue.
     * @type {{ [key: string]: string; }}
     * @memberof IssueBean
     */
    readonly names?: { [key: string]: string; };
    /**
     * The schema describing each field present on the issue.
     * @type {{ [key: string]: JsonTypeBean; }}
     * @memberof IssueBean
     */
    readonly schema?: { [key: string]: JsonTypeBean; };
    /**
     * The transitions that can be performed on the issue.
     * @type {Array<IssueTransition>}
     * @memberof IssueBean
     */
    readonly transitions?: Array<IssueTransition>;
    /**
     * 
     * @type {IssueBeanOperations}
     * @memberof IssueBean
     */
    operations?: IssueBeanOperations;
    /**
     * 
     * @type {IssueBeanEditmeta}
     * @memberof IssueBean
     */
    editmeta?: IssueBeanEditmeta;
    /**
     * 
     * @type {IssueBeanChangelog}
     * @memberof IssueBean
     */
    changelog?: IssueBeanChangelog;
    /**
     * The versions of each field on the issue.
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof IssueBean
     */
    readonly versionedRepresentations?: { [key: string]: { [key: string]: any; }; };
    /**
     * 
     * @type {IncludedFields}
     * @memberof IssueBean
     */
    fieldsToInclude?: IncludedFields;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IssueBean
     */
    fields?: { [key: string]: any; };
}
/**
 * Details of changelogs associated with the issue.
 * @export
 * @interface IssueBeanChangelog
 */
export interface IssueBeanChangelog {
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly startAt?: number;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly maxResults?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly total?: number;
    /**
     * The list of changelogs.
     * @type {Array<Changelog>}
     * @memberof IssueBeanChangelog
     */
    readonly histories?: Array<Changelog>;
}
/**
 * The metadata for the fields on the issue that can be amended.
 * @export
 * @interface IssueBeanEditmeta
 */
export interface IssueBeanEditmeta {
    /**
     * A list of editable field details.
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueBeanEditmeta
     */
    readonly fields?: { [key: string]: FieldMetadata; };
}
/**
 * The operations that can be performed on the issue.
 * @export
 * @interface IssueBeanOperations
 */
export interface IssueBeanOperations {
    /**
     * Details of the link groups defining issue operations.
     * @type {Array<LinkGroup>}
     * @memberof IssueBeanOperations
     */
    readonly linkGroups?: Array<LinkGroup>;
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
    changelogIds: number[];
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
    ids: number[];
}
/**
 * An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
 * @export
 * @interface IssueContextVariable
 */
export interface IssueContextVariable {
    /**
     * Type of custom context variable.
     * @type {string}
     * @memberof IssueContextVariable
     */
    type: string;
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
    entitiesIds?: number[];
    /**
     * A list of entity property keys and values.
     * @type {{ [key: string]: any; }}
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
     * @type {{ [key: string]: any; }}
     * @memberof IssueEntityPropertiesForMultiUpdate
     */
    properties?: { [key: string]: any; };
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
     * The unique identifier for the option. This is only unique within the select field's set of options.
     * @type {number}
     * @memberof IssueFieldOption
     */
    id: number;
    /**
     * The option's name, which is displayed in Jira.
     * @type {string}
     * @memberof IssueFieldOption
     */
    value: string;
    /**
     * The properties of the object, as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see [Issue Field Option Property Index](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/)) are defined in the descriptor for the issue field module.
     * @type {{ [key: string]: any; }}
     * @memberof IssueFieldOption
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {IssueFieldOptionConfiguration}
     * @memberof IssueFieldOption
     */
    config?: IssueFieldOptionConfiguration;
}
/**
 * Details of the projects the option is available in.
 * @export
 * @interface IssueFieldOptionConfiguration
 */
export interface IssueFieldOptionConfiguration {
    /**
     * 
     * @type {IssueFieldOptionConfigurationScope}
     * @memberof IssueFieldOptionConfiguration
     */
    scope?: IssueFieldOptionConfigurationScope;
    /**
     * DEPRECATED
     * @type {Set<string>}
     * @memberof IssueFieldOptionConfiguration
     */
    attributes?: IssueFieldOptionConfigurationAttributesEnum[];
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
 * Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
 * @export
 * @interface IssueFieldOptionConfigurationScope
 */
export interface IssueFieldOptionConfigurationScope {
    /**
     * DEPRECATED
     * @type {Set<number>}
     * @memberof IssueFieldOptionConfigurationScope
     */
    projects?: number[];
    /**
     * Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
     * @type {Set<ProjectScopeBean>}
     * @memberof IssueFieldOptionConfigurationScope
     */
    projects2?: ProjectScopeBean[];
    /**
     * 
     * @type {IssueFieldOptionScopeBeanGlobal}
     * @memberof IssueFieldOptionConfigurationScope
     */
    global?: IssueFieldOptionScopeBeanGlobal;
}
/**
 * 
 * @export
 * @interface IssueFieldOptionCreateBean
 */
export interface IssueFieldOptionCreateBean {
    [key: string]: any | any;
    /**
     * The option's name, which is displayed in Jira.
     * @type {string}
     * @memberof IssueFieldOptionCreateBean
     */
    value: string;
    /**
     * The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
     * @type {{ [key: string]: any; }}
     * @memberof IssueFieldOptionCreateBean
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {IssueFieldOptionConfiguration}
     * @memberof IssueFieldOptionCreateBean
     */
    config?: IssueFieldOptionConfiguration;
}
/**
 * 
 * @export
 * @interface IssueFieldOptionScopeBean
 */
export interface IssueFieldOptionScopeBean {
    /**
     * DEPRECATED
     * @type {Set<number>}
     * @memberof IssueFieldOptionScopeBean
     */
    projects?: number[];
    /**
     * Defines the projects in which the option is available and the behavior of the option within each project. Specify one object per project. The behavior of the option in a project context overrides the behavior in the global context.
     * @type {Set<ProjectScopeBean>}
     * @memberof IssueFieldOptionScopeBean
     */
    projects2?: ProjectScopeBean[];
    /**
     * 
     * @type {IssueFieldOptionScopeBeanGlobal}
     * @memberof IssueFieldOptionScopeBean
     */
    global?: IssueFieldOptionScopeBeanGlobal;
}
/**
 * Defines the behavior of the option within the global context. If this property is set, even if set to an empty object, then the option is available in all projects.
 * @export
 * @interface IssueFieldOptionScopeBeanGlobal
 */
export interface IssueFieldOptionScopeBeanGlobal {
    /**
     * Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
     * @type {Set<string>}
     * @memberof IssueFieldOptionScopeBeanGlobal
     */
    attributes?: IssueFieldOptionScopeBeanGlobalAttributesEnum[];
}


/**
 * @export
 */
export const IssueFieldOptionScopeBeanGlobalAttributesEnum = {
    NotSelectable: 'notSelectable',
    DefaultValue: 'defaultValue'
} as const;
export type IssueFieldOptionScopeBeanGlobalAttributesEnum = typeof IssueFieldOptionScopeBeanGlobalAttributesEnum[keyof typeof IssueFieldOptionScopeBeanGlobalAttributesEnum];

/**
 * Bulk operation filter details.
 * @export
 * @interface IssueFilterForBulkPropertyDelete
 */
export interface IssueFilterForBulkPropertyDelete {
    /**
     * List of issues to perform the bulk delete operation on.
     * @type {Set<number>}
     * @memberof IssueFilterForBulkPropertyDelete
     */
    entityIds?: number[];
    /**
     * The value of properties to perform the bulk operation on.
     * @type {any}
     * @memberof IssueFilterForBulkPropertyDelete
     */
    currentValue?: any | null;
}
/**
 * Bulk operation filter details.
 * @export
 * @interface IssueFilterForBulkPropertySet
 */
export interface IssueFilterForBulkPropertySet {
    /**
     * List of issues to perform the bulk operation on.
     * @type {Set<number>}
     * @memberof IssueFilterForBulkPropertySet
     */
    entityIds?: number[];
    /**
     * The value of properties to perform the bulk operation on.
     * @type {any}
     * @memberof IssueFilterForBulkPropertySet
     */
    currentValue?: any | null;
    /**
     * Whether the bulk operation occurs only when the property is present on or absent from an issue.
     * @type {boolean}
     * @memberof IssueFilterForBulkPropertySet
     */
    hasProperty?: boolean;
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
     * The URL of the issue link.
     * @type {string}
     * @memberof IssueLink
     */
    readonly self?: string;
    /**
     * 
     * @type {IssueLinkType}
     * @memberof IssueLink
     */
    type: IssueLinkType;
    /**
     * 
     * @type {IssueLinkInwardIssue}
     * @memberof IssueLink
     */
    inwardIssue: IssueLinkInwardIssue;
    /**
     * 
     * @type {IssueLinkOutwardIssue}
     * @memberof IssueLink
     */
    outwardIssue: IssueLinkOutwardIssue;
}
/**
 * Provides details about the linked issue. If presenting this link in a user interface, use the `inward` field of the issue link type to label the link.
 * @export
 * @interface IssueLinkInwardIssue
 */
export interface IssueLinkInwardIssue {
    /**
     * The ID of an issue. Required if `key` isn't provided.
     * @type {string}
     * @memberof IssueLinkInwardIssue
     */
    id?: string;
    /**
     * The key of an issue. Required if `id` isn't provided.
     * @type {string}
     * @memberof IssueLinkInwardIssue
     */
    key?: string;
    /**
     * The URL of the issue.
     * @type {string}
     * @memberof IssueLinkInwardIssue
     */
    readonly self?: string;
    /**
     * 
     * @type {LinkedIssueFields}
     * @memberof IssueLinkInwardIssue
     */
    fields?: LinkedIssueFields;
}
/**
 * Provides details about the linked issue. If presenting this link in a user interface, use the `outward` field of the issue link type to label the link.
 * @export
 * @interface IssueLinkOutwardIssue
 */
export interface IssueLinkOutwardIssue {
    /**
     * The ID of an issue. Required if `key` isn't provided.
     * @type {string}
     * @memberof IssueLinkOutwardIssue
     */
    id?: string;
    /**
     * The key of an issue. Required if `id` isn't provided.
     * @type {string}
     * @memberof IssueLinkOutwardIssue
     */
    key?: string;
    /**
     * The URL of the issue.
     * @type {string}
     * @memberof IssueLinkOutwardIssue
     */
    readonly self?: string;
    /**
     * 
     * @type {LinkedIssueFields}
     * @memberof IssueLinkOutwardIssue
     */
    fields?: LinkedIssueFields;
}
/**
 * The type of link between the issues.
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
     * The name of the issue link type and is used as follows:
     * 
     *  *  In the [ issueLink](#api-rest-api-3-issueLink-post) resource it is the type of issue link. Required on create when `id` isn't provided. Otherwise, read only.
     *  *  In the [ issueLinkType](#api-rest-api-3-issueLinkType-post) resource it is required on create and optional on update. Otherwise, read only.
     * @type {string}
     * @memberof IssueLinkType
     */
    name?: string;
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
     * A list of issue IDs.
     * @type {Set<number>}
     * @memberof IssueMatchesForJQL
     */
    matchedIssues: number[];
    /**
     * A list of errors.
     * @type {Set<string>}
     * @memberof IssueMatchesForJQL
     */
    errors: string[];
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
     * The label of the type of issues suggested for use in auto-completion.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly label?: string;
    /**
     * If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly sub?: string;
    /**
     * The ID of the type of issues suggested for use in auto-completion.
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly id?: string;
    /**
     * If no issue suggestions are found, returns a message indicating no suggestions were found,
     * @type {string}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly msg?: string;
    /**
     * A list of issues suggested for use in auto-completion.
     * @type {Array<SuggestedIssue>}
     * @memberof IssuePickerSuggestionsIssueType
     */
    readonly issues?: Array<SuggestedIssue>;
}
/**
 * Issue security level member.
 * @export
 * @interface IssueSecurityLevelMember
 */
export interface IssueSecurityLevelMember {
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
    /**
     * 
     * @type {IssueSecurityLevelMemberHolder}
     * @memberof IssueSecurityLevelMember
     */
    holder: IssueSecurityLevelMemberHolder;
}
/**
 * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 * @export
 * @interface IssueSecurityLevelMemberHolder
 */
export interface IssueSecurityLevelMemberHolder {
    /**
     * The type of permission holder.
     * @type {string}
     * @memberof IssueSecurityLevelMemberHolder
     */
    type: string;
    /**
     * As a group's name can change, use of `value` is recommended. The identifier associated withthe `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof IssueSecurityLevelMemberHolder
     */
    parameter?: string;
    /**
     * The identifier associated with the `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof IssueSecurityLevelMemberHolder
     */
    value?: string;
    /**
     * Expand options that include additional permission holder details in the response.
     * @type {string}
     * @memberof IssueSecurityLevelMemberHolder
     */
    readonly expand?: string;
}
/**
 * Details of an issue transition.
 * @export
 * @interface IssueTransition
 */
export interface IssueTransition {
    [key: string]: any | any;
    /**
     * The ID of the issue transition. Required when specifying a transition to undertake.
     * @type {string}
     * @memberof IssueTransition
     */
    id?: string;
    /**
     * The name of the issue transition.
     * @type {string}
     * @memberof IssueTransition
     */
    readonly name?: string;
    /**
     * 
     * @type {IssueTransitionTo}
     * @memberof IssueTransition
     */
    to?: IssueTransitionTo;
    /**
     * Whether there is a screen associated with the issue transition.
     * @type {boolean}
     * @memberof IssueTransition
     */
    readonly hasScreen?: boolean;
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
     * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueTransition
     */
    readonly fields?: { [key: string]: FieldMetadata; };
    /**
     * Expand options that include additional transition details in the response.
     * @type {string}
     * @memberof IssueTransition
     */
    readonly expand?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IssueTransition
     */
    looped?: boolean;
}
/**
 * Details of the issue status after the transition.
 * @export
 * @interface IssueTransitionTo
 */
export interface IssueTransitionTo {
    /**
     * The URL of the status.
     * @type {string}
     * @memberof IssueTransitionTo
     */
    readonly self?: string;
    /**
     * The description of the status.
     * @type {string}
     * @memberof IssueTransitionTo
     */
    readonly description?: string;
    /**
     * The URL of the icon used to represent the status.
     * @type {string}
     * @memberof IssueTransitionTo
     */
    readonly iconUrl?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof IssueTransitionTo
     */
    readonly name?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof IssueTransitionTo
     */
    readonly id?: string;
    /**
     * 
     * @type {StatusDetailsStatusCategory}
     * @memberof IssueTransitionTo
     */
    statusCategory?: StatusDetailsStatusCategory;
}
/**
 * 
 * @export
 * @interface IssueTypeCreateBean
 */
export interface IssueTypeCreateBean {
    /**
     * The unique name for the issue type. The maximum length is 60 characters.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    name: string;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    description?: string;
    /**
     * Deprecated. Use `hierarchyLevel` instead. See the [deprecation notice](https://community.developer.atlassian.com/t/deprecation-of-the-epic-link-parent-link-and-other-related-fields-in-rest-apis-and-webhooks/54048) for details.
     * 
     * Whether the issue type is `subtype` or `standard`. Defaults to `standard`.
     * @type {string}
     * @memberof IssueTypeCreateBean
     */
    type?: IssueTypeCreateBeanTypeEnum;
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
     * The URL of these issue type details.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly self?: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly id?: string;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly description?: string;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly iconUrl?: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeDetails
     */
    readonly name?: string;
    /**
     * Whether this issue type is used to create subtasks.
     * @type {boolean}
     * @memberof IssueTypeDetails
     */
    readonly subtask?: boolean;
    /**
     * The ID of the issue type's avatar.
     * @type {number}
     * @memberof IssueTypeDetails
     */
    readonly avatarId?: number;
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
     * 
     * @type {IssueTypeDetailsScope}
     * @memberof IssueTypeDetails
     */
    scope?: IssueTypeDetailsScope;
}
/**
 * Details of the next-gen projects the issue type is available in.
 * @export
 * @interface IssueTypeDetailsScope
 */
export interface IssueTypeDetailsScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof IssueTypeDetailsScope
     */
    readonly type?: IssueTypeDetailsScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof IssueTypeDetailsScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const IssueTypeDetailsScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type IssueTypeDetailsScopeTypeEnum = typeof IssueTypeDetailsScopeTypeEnum[keyof typeof IssueTypeDetailsScopeTypeEnum];

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
    /**
     * The avatar of the issue type.
     * @type {number}
     * @memberof IssueTypeInfo
     */
    readonly avatarId?: number;
}
/**
 * Details of the issue creation metadata for an issue type.
 * @export
 * @interface IssueTypeIssueCreateMetadata
 */
export interface IssueTypeIssueCreateMetadata {
    /**
     * The URL of these issue type details.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly self?: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly id?: string;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly description?: string;
    /**
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly iconUrl?: string;
    /**
     * The name of the issue type.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly name?: string;
    /**
     * Whether this issue type is used to create subtasks.
     * @type {boolean}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly subtask?: boolean;
    /**
     * The ID of the issue type's avatar.
     * @type {number}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly avatarId?: number;
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly entityId?: string;
    /**
     * Hierarchy level of the issue type.
     * @type {number}
     * @memberof IssueTypeIssueCreateMetadata
     */
    readonly hierarchyLevel?: number;
    /**
     * 
     * @type {IssueTypeDetailsScope}
     * @memberof IssueTypeIssueCreateMetadata
     */
    scope?: IssueTypeDetailsScope;
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
}
/**
 * Details of an issue type scheme.
 * @export
 * @interface IssueTypeScheme
 */
export interface IssueTypeScheme {
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    id: string;
    /**
     * The name of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    name: string;
    /**
     * The description of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    description?: string;
    /**
     * The ID of the default issue type of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeScheme
     */
    defaultIssueTypeId?: string;
    /**
     * Whether the issue type scheme is the default.
     * @type {boolean}
     * @memberof IssueTypeScheme
     */
    isDefault?: boolean;
}
/**
 * Details of an issue type scheme and its associated issue types.
 * @export
 * @interface IssueTypeSchemeDetails
 */
export interface IssueTypeSchemeDetails {
    /**
     * The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    name: string;
    /**
     * The description of the issue type scheme. The maximum length is 4000 characters.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    description?: string;
    /**
     * The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.
     * @type {string}
     * @memberof IssueTypeSchemeDetails
     */
    defaultIssueTypeId?: string;
    /**
     * The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required.
     * @type {Array<string>}
     * @memberof IssueTypeSchemeDetails
     */
    issueTypeIds: Array<string>;
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
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeMapping
     */
    issueTypeSchemeId: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeSchemeMapping
     */
    issueTypeId: string;
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
     * 
     * @type {IssueTypeSchemeProjectsIssueTypeScheme}
     * @memberof IssueTypeSchemeProjects
     */
    issueTypeScheme: IssueTypeSchemeProjectsIssueTypeScheme;
    /**
     * The IDs of the projects using the issue type scheme.
     * @type {Array<string>}
     * @memberof IssueTypeSchemeProjects
     */
    projectIds: Array<string>;
}
/**
 * Details of an issue type scheme.
 * @export
 * @interface IssueTypeSchemeProjectsIssueTypeScheme
 */
export interface IssueTypeSchemeProjectsIssueTypeScheme {
    /**
     * The ID of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeProjectsIssueTypeScheme
     */
    id: string;
    /**
     * The name of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeProjectsIssueTypeScheme
     */
    name: string;
    /**
     * The description of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeProjectsIssueTypeScheme
     */
    description?: string;
    /**
     * The ID of the default issue type of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeProjectsIssueTypeScheme
     */
    defaultIssueTypeId?: string;
    /**
     * Whether the issue type scheme is the default.
     * @type {boolean}
     * @memberof IssueTypeSchemeProjectsIssueTypeScheme
     */
    isDefault?: boolean;
}
/**
 * Details of the name, description, and default issue type for an issue type scheme.
 * @export
 * @interface IssueTypeSchemeUpdateDetails
 */
export interface IssueTypeSchemeUpdateDetails {
    /**
     * The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    name?: string;
    /**
     * The description of the issue type scheme. The maximum length is 4000 characters.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    description?: string;
    /**
     * The ID of the default issue type of the issue type scheme.
     * @type {string}
     * @memberof IssueTypeSchemeUpdateDetails
     */
    defaultIssueTypeId?: string;
}
/**
 * Details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenScheme
 */
export interface IssueTypeScreenScheme {
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
    /**
     * The description of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenScheme
     */
    description?: string;
}
/**
 * The details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenSchemeDetails
 */
export interface IssueTypeScreenSchemeDetails {
    /**
     * The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeDetails
     */
    name: string;
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
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemeItem
     */
    issueTypeScreenSchemeId: string;
    /**
     * The ID of the issue type or *default*. Only issue types used in classic projects are accepted. When creating an issue screen scheme, an entry for *default* must be provided and defines the mapping for all issue types without a screen scheme. Otherwise, a *default* entry can't be provided.
     * @type {string}
     * @memberof IssueTypeScreenSchemeItem
     */
    issueTypeId: string;
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
     * The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeUpdateDetails
     */
    name?: string;
    /**
     * The description of the issue type screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof IssueTypeScreenSchemeUpdateDetails
     */
    description?: string;
}
/**
 * Issue type screen scheme with a list of the projects that use it.
 * @export
 * @interface IssueTypeScreenSchemesProjects
 */
export interface IssueTypeScreenSchemesProjects {
    /**
     * 
     * @type {IssueTypeScreenSchemesProjectsIssueTypeScreenScheme}
     * @memberof IssueTypeScreenSchemesProjects
     */
    issueTypeScreenScheme: IssueTypeScreenSchemesProjectsIssueTypeScreenScheme;
    /**
     * The IDs of the projects using the issue type screen scheme.
     * @type {Array<string>}
     * @memberof IssueTypeScreenSchemesProjects
     */
    projectIds: Array<string>;
}
/**
 * Details of an issue type screen scheme.
 * @export
 * @interface IssueTypeScreenSchemesProjectsIssueTypeScreenScheme
 */
export interface IssueTypeScreenSchemesProjectsIssueTypeScreenScheme {
    /**
     * The ID of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemesProjectsIssueTypeScreenScheme
     */
    id: string;
    /**
     * The name of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemesProjectsIssueTypeScreenScheme
     */
    name: string;
    /**
     * The description of the issue type screen scheme.
     * @type {string}
     * @memberof IssueTypeScreenSchemesProjectsIssueTypeScreenScheme
     */
    description?: string;
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
     * The ID of the issue type.
     * @type {string}
     * @memberof IssueTypeToContextMapping
     */
    issueTypeId?: string;
    /**
     * Whether the context is mapped to any issue type.
     * @type {boolean}
     * @memberof IssueTypeToContextMapping
     */
    isAnyIssueType?: boolean;
}
/**
 * 
 * @export
 * @interface IssueTypeUpdateBean
 */
export interface IssueTypeUpdateBean {
    /**
     * The unique name for the issue type. The maximum length is 60 characters.
     * @type {string}
     * @memberof IssueTypeUpdateBean
     */
    name?: string;
    /**
     * The description of the issue type.
     * @type {string}
     * @memberof IssueTypeUpdateBean
     */
    description?: string;
    /**
     * The ID of an issue type avatar.
     * @type {number}
     * @memberof IssueTypeUpdateBean
     */
    avatarId?: number;
}
/**
 * Status details for an issue type.
 * @export
 * @interface IssueTypeWithStatus
 */
export interface IssueTypeWithStatus {
    /**
     * The URL of the issue type's status details.
     * @type {string}
     * @memberof IssueTypeWithStatus
     */
    readonly self: string;
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
     * Whether this issue type represents subtasks.
     * @type {boolean}
     * @memberof IssueTypeWithStatus
     */
    readonly subtask: boolean;
    /**
     * List of status details for the issue type.
     * @type {Array<StatusDetails>}
     * @memberof IssueTypeWithStatus
     */
    readonly statuses: Array<StatusDetails>;
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
     * The name of the workflow.
     * @type {string}
     * @memberof IssueTypeWorkflowMapping
     */
    workflow?: string;
    /**
     * Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.
     * @type {boolean}
     * @memberof IssueTypeWorkflowMapping
     */
    updateDraftIfNeeded?: boolean;
}
/**
 * Details about the mapping between issue types and a workflow.
 * @export
 * @interface IssueTypesWorkflowMapping
 */
export interface IssueTypesWorkflowMapping {
    /**
     * The name of the workflow. Optional if updating the workflow-issue types mapping.
     * @type {string}
     * @memberof IssueTypesWorkflowMapping
     */
    workflow?: string;
    /**
     * The list of issue type IDs.
     * @type {Array<string>}
     * @memberof IssueTypesWorkflowMapping
     */
    issueTypes?: Array<string>;
    /**
     * Whether the workflow is the default workflow for the workflow scheme.
     * @type {boolean}
     * @memberof IssueTypesWorkflowMapping
     */
    defaultMapping?: boolean;
    /**
     * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.
     * @type {boolean}
     * @memberof IssueTypesWorkflowMapping
     */
    updateDraftIfNeeded?: boolean;
}
/**
 * Details of an issue update request.
 * @export
 * @interface IssueUpdateDetails
 */
export interface IssueUpdateDetails {
    [key: string]: any | any;
    /**
     * 
     * @type {IssueUpdateDetailsTransition}
     * @memberof IssueUpdateDetails
     */
    transition?: IssueUpdateDetailsTransition;
    /**
     * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
     * @type {{ [key: string]: any; }}
     * @memberof IssueUpdateDetails
     */
    fields?: { [key: string]: any; };
    /**
     * A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`.
     * @type {{ [key: string]: Array<FieldUpdateOperation>; }}
     * @memberof IssueUpdateDetails
     */
    update?: { [key: string]: Array<FieldUpdateOperation>; };
    /**
     * 
     * @type {IssueUpdateDetailsHistoryMetadata}
     * @memberof IssueUpdateDetails
     */
    historyMetadata?: IssueUpdateDetailsHistoryMetadata;
    /**
     * Details of issue properties to be add or update.
     * @type {Array<EntityProperty>}
     * @memberof IssueUpdateDetails
     */
    properties?: Array<EntityProperty>;
}
/**
 * Additional issue history details.
 * @export
 * @interface IssueUpdateDetailsHistoryMetadata
 */
export interface IssueUpdateDetailsHistoryMetadata {
    /**
     * The type of the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    type?: string;
    /**
     * The description of the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    description?: string;
    /**
     * The description key of the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    descriptionKey?: string;
    /**
     * The activity described in the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    activityDescription?: string;
    /**
     * The key of the activity described in the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    activityDescriptionKey?: string;
    /**
     * The description of the email address associated the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    emailDescription?: string;
    /**
     * The description key of the email address associated the history record.
     * @type {string}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    emailDescriptionKey?: string;
    /**
     * 
     * @type {HistoryMetadataActor}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    actor?: HistoryMetadataActor;
    /**
     * 
     * @type {HistoryMetadataGenerator}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    generator?: HistoryMetadataGenerator;
    /**
     * 
     * @type {HistoryMetadataCause}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    cause?: HistoryMetadataCause;
    /**
     * Additional arbitrary information about the history record.
     * @type {{ [key: string]: string; }}
     * @memberof IssueUpdateDetailsHistoryMetadata
     */
    extraData?: { [key: string]: string; };
}
/**
 * Details of a transition. Required when performing a transition, optional when creating or editing an issue.
 * @export
 * @interface IssueUpdateDetailsTransition
 */
export interface IssueUpdateDetailsTransition {
    /**
     * The ID of the issue transition. Required when specifying a transition to undertake.
     * @type {string}
     * @memberof IssueUpdateDetailsTransition
     */
    id?: string;
    /**
     * The name of the issue transition.
     * @type {string}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly name?: string;
    /**
     * 
     * @type {IssueTransitionTo}
     * @memberof IssueUpdateDetailsTransition
     */
    to?: IssueTransitionTo;
    /**
     * Whether there is a screen associated with the issue transition.
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly hasScreen?: boolean;
    /**
     * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly isGlobal?: boolean;
    /**
     * Whether this is the initial issue transition for the workflow.
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly isInitial?: boolean;
    /**
     * Whether the transition is available to be performed.
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly isAvailable?: boolean;
    /**
     * Whether the issue has to meet criteria before the issue transition is applied.
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly isConditional?: boolean;
    /**
     * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
     * @type {{ [key: string]: FieldMetadata; }}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly fields?: { [key: string]: FieldMetadata; };
    /**
     * Expand options that include additional transition details in the response.
     * @type {string}
     * @memberof IssueUpdateDetailsTransition
     */
    readonly expand?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IssueUpdateDetailsTransition
     */
    looped?: boolean;
}
/**
 * A list of editable field details.
 * @export
 * @interface IssueUpdateMetadata
 */
export interface IssueUpdateMetadata {
    /**
     * A list of editable field details.
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
     * A list of JQL queries.
     * @type {Array<string>}
     * @memberof IssuesAndJQLQueries
     */
    jqls: Array<string>;
    /**
     * A list of issue IDs.
     * @type {Set<number>}
     * @memberof IssuesAndJQLQueries
     */
    issueIds: number[];
}
/**
 * The description of the page of issues loaded by the provided JQL query.
 * @export
 * @interface IssuesJqlMetaDataBean
 */
export interface IssuesJqlMetaDataBean {
    /**
     * The index of the first issue.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    startAt: number;
    /**
     * The maximum number of issues that could be loaded in this evaluation.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    maxResults: number;
    /**
     * The number of issues that were loaded in this evaluation.
     * @type {number}
     * @memberof IssuesJqlMetaDataBean
     */
    count: number;
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
     * The original query, for reference
     * @type {string}
     * @memberof JQLQueryWithUnknownUsers
     */
    originalQuery?: string;
    /**
     * The converted query, with accountIDs instead of user identifiers, or 'unknown' for users that could not be found
     * @type {string}
     * @memberof JQLQueryWithUnknownUsers
     */
    convertedQuery?: string;
}
/**
 * Lists of JQL reference data.
 * @export
 * @interface JQLReferenceData
 */
export interface JQLReferenceData {
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
    /**
     * List of JQL query reserved words.
     * @type {Array<string>}
     * @memberof JQLReferenceData
     */
    jqlReservedWords?: Array<string>;
}
/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable.
 * @export
 * @interface JexpIssues
 */
export interface JexpIssues {
    /**
     * 
     * @type {JexpIssuesJql}
     * @memberof JexpIssues
     */
    jql?: JexpIssuesJql;
}
/**
 * The JQL query that specifies the set of issues available in the Jira expression.
 * @export
 * @interface JexpIssuesJql
 */
export interface JexpIssuesJql {
    /**
     * The JQL query.
     * @type {string}
     * @memberof JexpIssuesJql
     */
    query?: string;
    /**
     * The index of the first issue to return from the JQL query.
     * @type {number}
     * @memberof JexpIssuesJql
     */
    startAt?: number;
    /**
     * The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
     * @type {number}
     * @memberof JexpIssuesJql
     */
    maxResults?: number;
    /**
     * Determines how to validate the JQL query and treat the validation results.
     * @type {string}
     * @memberof JexpIssuesJql
     */
    validation?: JexpIssuesJqlValidationEnum;
}


/**
 * @export
 */
export const JexpIssuesJqlValidationEnum = {
    Strict: 'strict',
    Warn: 'warn',
    None: 'none'
} as const;
export type JexpIssuesJqlValidationEnum = typeof JexpIssuesJqlValidationEnum[keyof typeof JexpIssuesJqlValidationEnum];

/**
 * The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.
 * @export
 * @interface JexpJqlIssues
 */
export interface JexpJqlIssues {
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
     * The maximum number of issues to return from the JQL query. Inspect `meta.issues.jql.maxResults` in the response to ensure the maximum value has not been exceeded.
     * @type {number}
     * @memberof JexpJqlIssues
     */
    maxResults?: number;
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
 * Details about the analysed Jira expression.
 * @export
 * @interface JiraExpressionAnalysis
 */
export interface JiraExpressionAnalysis {
    /**
     * The analysed expression.
     * @type {string}
     * @memberof JiraExpressionAnalysis
     */
    expression: string;
    /**
     * A list of validation errors. Not included if the expression is valid.
     * @type {Array<JiraExpressionValidationError>}
     * @memberof JiraExpressionAnalysis
     */
    errors?: Array<JiraExpressionValidationError>;
    /**
     * Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).
     * @type {boolean}
     * @memberof JiraExpressionAnalysis
     */
    valid: boolean;
    /**
     * EXPERIMENTAL. The inferred type of the expression.
     * @type {string}
     * @memberof JiraExpressionAnalysis
     */
    type?: string;
    /**
     * 
     * @type {JiraExpressionComplexity}
     * @memberof JiraExpressionAnalysis
     */
    complexity?: JiraExpressionComplexity;
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
     * 
     * @type {JiraExpressionEvalContextBeanIssue}
     * @memberof JiraExpressionEvalContextBean
     */
    issue?: JiraExpressionEvalContextBeanIssue;
    /**
     * 
     * @type {JiraExpressionEvalContextBeanIssues}
     * @memberof JiraExpressionEvalContextBean
     */
    issues?: JiraExpressionEvalContextBeanIssues;
    /**
     * 
     * @type {JiraExpressionEvalContextBeanProject}
     * @memberof JiraExpressionEvalContextBean
     */
    project?: JiraExpressionEvalContextBeanProject;
    /**
     * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    sprint?: number;
    /**
     * The ID of the board that is available under the `board` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    board?: number;
    /**
     * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    serviceDesk?: number;
    /**
     * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
     * @type {number}
     * @memberof JiraExpressionEvalContextBean
     */
    customerRequest?: number;
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
}
/**
 * The issue that is available under the `issue` variable when evaluating the expression.
 * @export
 * @interface JiraExpressionEvalContextBeanIssue
 */
export interface JiraExpressionEvalContextBeanIssue {
    /**
     * The ID of the referenced item.
     * @type {number}
     * @memberof JiraExpressionEvalContextBeanIssue
     */
    id?: number;
    /**
     * The key of the referenced item.
     * @type {string}
     * @memberof JiraExpressionEvalContextBeanIssue
     */
    key?: string;
}
/**
 * The collection of issues that is available under the `issues` variable when evaluating the expression.
 * @export
 * @interface JiraExpressionEvalContextBeanIssues
 */
export interface JiraExpressionEvalContextBeanIssues {
    /**
     * 
     * @type {JexpIssuesJql}
     * @memberof JiraExpressionEvalContextBeanIssues
     */
    jql?: JexpIssuesJql;
}
/**
 * The project that is available under the `project` variable when evaluating the expression.
 * @export
 * @interface JiraExpressionEvalContextBeanProject
 */
export interface JiraExpressionEvalContextBeanProject {
    /**
     * The ID of the referenced item.
     * @type {number}
     * @memberof JiraExpressionEvalContextBeanProject
     */
    id?: number;
    /**
     * The key of the referenced item.
     * @type {string}
     * @memberof JiraExpressionEvalContextBeanProject
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface JiraExpressionEvalRequestBean
 */
export interface JiraExpressionEvalRequestBean {
    /**
     * The Jira expression to evaluate.
     * @type {string}
     * @memberof JiraExpressionEvalRequestBean
     */
    expression: string;
    /**
     * 
     * @type {JiraExpressionEvalRequestBeanContext}
     * @memberof JiraExpressionEvalRequestBean
     */
    context?: JiraExpressionEvalRequestBeanContext;
}
/**
 * The context in which the Jira expression is evaluated.
 * @export
 * @interface JiraExpressionEvalRequestBeanContext
 */
export interface JiraExpressionEvalRequestBeanContext {
    /**
     * 
     * @type {JiraExpressionEvalContextBeanIssue}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    issue?: JiraExpressionEvalContextBeanIssue;
    /**
     * 
     * @type {JiraExpressionEvalContextBeanIssues}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    issues?: JiraExpressionEvalContextBeanIssues;
    /**
     * 
     * @type {JiraExpressionEvalContextBeanProject}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    project?: JiraExpressionEvalContextBeanProject;
    /**
     * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    sprint?: number;
    /**
     * The ID of the board that is available under the `board` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    board?: number;
    /**
     * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
     * @type {number}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    serviceDesk?: number;
    /**
     * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
     * @type {number}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    customerRequest?: number;
    /**
     * Custom context variables and their types. These variable types are available for use in a custom context:
     * 
     *  *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
     *  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
     *  *  `json`: A JSON object containing custom content.
     *  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.
     * @type {Array<CustomContextVariable>}
     * @memberof JiraExpressionEvalRequestBeanContext
     */
    custom?: Array<CustomContextVariable>;
}
/**
 * 
 * @export
 * @interface JiraExpressionEvaluationMetaDataBean
 */
export interface JiraExpressionEvaluationMetaDataBean {
    /**
     * 
     * @type {JiraExpressionEvaluationMetaDataBeanComplexity}
     * @memberof JiraExpressionEvaluationMetaDataBean
     */
    complexity?: JiraExpressionEvaluationMetaDataBeanComplexity;
    /**
     * 
     * @type {JiraExpressionEvaluationMetaDataBeanIssues}
     * @memberof JiraExpressionEvaluationMetaDataBean
     */
    issues?: JiraExpressionEvaluationMetaDataBeanIssues;
}
/**
 * Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
 * @export
 * @interface JiraExpressionEvaluationMetaDataBeanComplexity
 */
export interface JiraExpressionEvaluationMetaDataBeanComplexity {
    /**
     * 
     * @type {JiraExpressionsComplexityBeanSteps}
     * @memberof JiraExpressionEvaluationMetaDataBeanComplexity
     */
    steps: JiraExpressionsComplexityBeanSteps;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanExpensiveOperations}
     * @memberof JiraExpressionEvaluationMetaDataBeanComplexity
     */
    expensiveOperations: JiraExpressionsComplexityBeanExpensiveOperations;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanBeans}
     * @memberof JiraExpressionEvaluationMetaDataBeanComplexity
     */
    beans: JiraExpressionsComplexityBeanBeans;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanPrimitiveValues}
     * @memberof JiraExpressionEvaluationMetaDataBeanComplexity
     */
    primitiveValues: JiraExpressionsComplexityBeanPrimitiveValues;
}
/**
 * Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
 * @export
 * @interface JiraExpressionEvaluationMetaDataBeanIssues
 */
export interface JiraExpressionEvaluationMetaDataBeanIssues {
    /**
     * 
     * @type {IssuesJqlMetaDataBean}
     * @memberof JiraExpressionEvaluationMetaDataBeanIssues
     */
    jql?: IssuesJqlMetaDataBean;
}
/**
 * Details of Jira expressions for analysis.
 * @export
 * @interface JiraExpressionForAnalysis
 */
export interface JiraExpressionForAnalysis {
    /**
     * The list of Jira expressions to analyse.
     * @type {Array<string>}
     * @memberof JiraExpressionForAnalysis
     */
    expressions: Array<string>;
    /**
     * Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.
     * @type {{ [key: string]: string; }}
     * @memberof JiraExpressionForAnalysis
     */
    contextVariables?: { [key: string]: string; };
}
/**
 * The result of evaluating a Jira expression.
 * @export
 * @interface JiraExpressionResult
 */
export interface JiraExpressionResult {
    /**
     * The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.)
     * @type {any}
     * @memberof JiraExpressionResult
     */
    value: any | null;
    /**
     * 
     * @type {JiraExpressionResultMeta}
     * @memberof JiraExpressionResult
     */
    meta?: JiraExpressionResultMeta;
}
/**
 * Contains various characteristics of the performed expression evaluation.
 * @export
 * @interface JiraExpressionResultMeta
 */
export interface JiraExpressionResultMeta {
    /**
     * 
     * @type {JiraExpressionEvaluationMetaDataBeanComplexity}
     * @memberof JiraExpressionResultMeta
     */
    complexity?: JiraExpressionEvaluationMetaDataBeanComplexity;
    /**
     * 
     * @type {JiraExpressionEvaluationMetaDataBeanIssues}
     * @memberof JiraExpressionResultMeta
     */
    issues?: JiraExpressionEvaluationMetaDataBeanIssues;
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
     * The text line in which the error occurred.
     * @type {number}
     * @memberof JiraExpressionValidationError
     */
    line?: number;
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
     * 
     * @type {JiraExpressionsComplexityBeanSteps}
     * @memberof JiraExpressionsComplexityBean
     */
    steps: JiraExpressionsComplexityBeanSteps;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanExpensiveOperations}
     * @memberof JiraExpressionsComplexityBean
     */
    expensiveOperations: JiraExpressionsComplexityBeanExpensiveOperations;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanBeans}
     * @memberof JiraExpressionsComplexityBean
     */
    beans: JiraExpressionsComplexityBeanBeans;
    /**
     * 
     * @type {JiraExpressionsComplexityBeanPrimitiveValues}
     * @memberof JiraExpressionsComplexityBean
     */
    primitiveValues: JiraExpressionsComplexityBeanPrimitiveValues;
}
/**
 * The number of Jira REST API beans returned in the response.
 * @export
 * @interface JiraExpressionsComplexityBeanBeans
 */
export interface JiraExpressionsComplexityBeanBeans {
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanBeans
     */
    value: number;
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanBeans
     */
    limit: number;
}
/**
 * The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
 * @export
 * @interface JiraExpressionsComplexityBeanExpensiveOperations
 */
export interface JiraExpressionsComplexityBeanExpensiveOperations {
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanExpensiveOperations
     */
    value: number;
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanExpensiveOperations
     */
    limit: number;
}
/**
 * The number of primitive values returned in the response.
 * @export
 * @interface JiraExpressionsComplexityBeanPrimitiveValues
 */
export interface JiraExpressionsComplexityBeanPrimitiveValues {
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanPrimitiveValues
     */
    value: number;
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanPrimitiveValues
     */
    limit: number;
}
/**
 * The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
 * @export
 * @interface JiraExpressionsComplexityBeanSteps
 */
export interface JiraExpressionsComplexityBeanSteps {
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanSteps
     */
    value: number;
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityBeanSteps
     */
    limit: number;
}
/**
 * 
 * @export
 * @interface JiraExpressionsComplexityValueBean
 */
export interface JiraExpressionsComplexityValueBean {
    /**
     * The complexity value of the current expression.
     * @type {number}
     * @memberof JiraExpressionsComplexityValueBean
     */
    value: number;
    /**
     * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
     * @type {number}
     * @memberof JiraExpressionsComplexityValueBean
     */
    limit: number;
}
/**
 * Details of a status.
 * @export
 * @interface JiraStatus
 */
export interface JiraStatus {
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
     * The category of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    statusCategory?: JiraStatusStatusCategoryEnum;
    /**
     * 
     * @type {StatusScope}
     * @memberof JiraStatus
     */
    scope?: StatusScope;
    /**
     * The description of the status.
     * @type {string}
     * @memberof JiraStatus
     */
    description?: string;
    /**
     * Projects and issue types where the status is used. Only available if the `usages` expand is requested.
     * @type {Set<ProjectIssueTypes>}
     * @memberof JiraStatus
     */
    usages?: ProjectIssueTypes[];
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
     * @type {JqlQueryClause}
     * @memberof JqlQuery
     */
    where?: JqlQueryClause;
    /**
     * 
     * @type {JqlQueryOrderByClause}
     * @memberof JqlQuery
     */
    orderBy?: JqlQueryOrderByClause;
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
     * The list of operand values.
     * @type {Array<JqlQueryUnitaryOperand>}
     * @memberof JqlQueryClauseOperand
     */
    values: Array<JqlQueryUnitaryOperand>;
    /**
     * The operand value.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    value: string;
    /**
     * The name of the function.
     * @type {string}
     * @memberof JqlQueryClauseOperand
     */
    _function: string;
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof JqlQueryClauseOperand
     */
    arguments: Array<string>;
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
     * The operator between the field and the operand.
     * @type {string}
     * @memberof JqlQueryClauseTimePredicate
     */
    operator: JqlQueryClauseTimePredicateOperatorEnum;
    /**
     * 
     * @type {JqlQueryClauseOperand}
     * @memberof JqlQueryClauseTimePredicate
     */
    operand: JqlQueryClauseOperand;
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
     * 
     * @type {JqlQueryField}
     * @memberof JqlQueryOrderByClauseElement
     */
    field: JqlQueryField;
    /**
     * The direction in which to order the results.
     * @type {string}
     * @memberof JqlQueryOrderByClauseElement
     */
    direction?: JqlQueryOrderByClauseElementDirectionEnum;
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
     * The operand value.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    value: string;
    /**
     * The name of the function.
     * @type {string}
     * @memberof JqlQueryUnitaryOperand
     */
    _function: string;
    /**
     * The list of function arguments.
     * @type {Array<string>}
     * @memberof JqlQueryUnitaryOperand
     */
    arguments: Array<string>;
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
     * @type {object}
     * @memberof JsonNode
     */
    elements?: object;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    pojo?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    number?: boolean;
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
    floatingPointNumber?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _int?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _long?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    _double?: boolean;
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
     * @type {boolean}
     * @memberof JsonNode
     */
    textual?: boolean;
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
    binary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    containerNode?: boolean;
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
    object?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    valueNode?: boolean;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    numberValue?: number;
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
    intValue?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    longValue?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    bigIntegerValue?: number;
    /**
     * 
     * @type {number}
     * @memberof JsonNode
     */
    doubleValue?: number;
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
    booleanValue?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof JsonNode
     */
    binaryValue?: Array<string>;
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
     * @type {number}
     * @memberof JsonNode
     */
    valueAsDouble?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    valueAsBoolean?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JsonNode
     */
    textValue?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonNode
     */
    valueAsText?: string;
    /**
     * 
     * @type {object}
     * @memberof JsonNode
     */
    fieldNames?: object;
    /**
     * 
     * @type {boolean}
     * @memberof JsonNode
     */
    array?: boolean;
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
    _null?: boolean;
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
     * The data type of the field.
     * @type {string}
     * @memberof JsonTypeBean
     */
    readonly type: string;
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
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof JsonTypeBean
     */
    readonly _configuration?: { [key: string]: any; };
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
     * @type {string}
     * @memberof LinkGroup
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroup
     */
    styleClass?: string;
    /**
     * 
     * @type {SimpleLink}
     * @memberof LinkGroup
     */
    header?: SimpleLink;
    /**
     * 
     * @type {number}
     * @memberof LinkGroup
     */
    weight?: number;
    /**
     * 
     * @type {Array<SimpleLink>}
     * @memberof LinkGroup
     */
    links?: Array<SimpleLink>;
    /**
     * 
     * @type {Array<LinkGroup>}
     * @memberof LinkGroup
     */
    groups?: Array<LinkGroup>;
}
/**
 * 
 * @export
 * @interface LinkIssueRequestJsonBean
 */
export interface LinkIssueRequestJsonBean {
    /**
     * 
     * @type {IssueLinkType}
     * @memberof LinkIssueRequestJsonBean
     */
    type: IssueLinkType;
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
     * @type {Comment}
     * @memberof LinkIssueRequestJsonBean
     */
    comment?: Comment;
}
/**
 * The ID or key of a linked issue.
 * @export
 * @interface LinkedIssue
 */
export interface LinkedIssue {
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
    /**
     * 
     * @type {LinkedIssueFields}
     * @memberof LinkedIssue
     */
    fields?: LinkedIssueFields;
}
/**
 * The fields associated with the issue.
 * @export
 * @interface LinkedIssueFields
 */
export interface LinkedIssueFields {
    /**
     * The summary description of the linked issue.
     * @type {string}
     * @memberof LinkedIssueFields
     */
    readonly summary?: string;
    /**
     * 
     * @type {FieldsStatus}
     * @memberof LinkedIssueFields
     */
    status?: FieldsStatus;
    /**
     * 
     * @type {FieldsPriority}
     * @memberof LinkedIssueFields
     */
    priority?: FieldsPriority;
    /**
     * 
     * @type {FieldsAssignee}
     * @memberof LinkedIssueFields
     */
    assignee?: FieldsAssignee;
    /**
     * 
     * @type {FieldsTimetracking}
     * @memberof LinkedIssueFields
     */
    timetracking?: FieldsTimetracking;
    /**
     * 
     * @type {IssueTypeDetails}
     * @memberof LinkedIssueFields
     */
    issuetype?: IssueTypeDetails;
    /**
     * 
     * @type {FieldsIssueType}
     * @memberof LinkedIssueFields
     */
    issueType?: FieldsIssueType;
}
/**
 * An operand that is a list of values.
 * @export
 * @interface ListOperand
 */
export interface ListOperand {
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
 * Details about the configuration of Jira.
 * @export
 * @interface ModelConfiguration
 */
export interface ModelConfiguration {
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
    /**
     * Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly unassignedIssuesAllowed?: boolean;
    /**
     * Whether the ability to create subtasks for issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly subTasksEnabled?: boolean;
    /**
     * Whether the ability to link issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly issueLinkingEnabled?: boolean;
    /**
     * Whether the ability to track time is enabled. This property is deprecated.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly timeTrackingEnabled?: boolean;
    /**
     * Whether the ability to add attachments to issues is enabled.
     * @type {boolean}
     * @memberof ModelConfiguration
     */
    readonly attachmentsEnabled?: boolean;
    /**
     * 
     * @type {ConfigurationTimeTrackingConfiguration}
     * @memberof ModelConfiguration
     */
    timeTrackingConfiguration?: ConfigurationTimeTrackingConfiguration;
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
     * @type {number}
     * @memberof NestedResponse
     */
    status?: number;
    /**
     * 
     * @type {ErrorCollection}
     * @memberof NestedResponse
     */
    errorCollection?: ErrorCollection;
}
/**
 * The user details.
 * @export
 * @interface NewUserDetails
 */
export interface NewUserDetails {
    [key: string]: any | any;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof NewUserDetails
     */
    readonly self?: string;
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
     * The email address for the user.
     * @type {string}
     * @memberof NewUserDetails
     */
    emailAddress: string;
    /**
     * This property is no longer available. If the user has an Atlassian account, their display name is not changed. If the user does not have an Atlassian account, they are sent an email asking them set up an account.
     * @type {string}
     * @memberof NewUserDetails
     */
    displayName?: string;
    /**
     * Deprecated, do not use.
     * @type {Array<string>}
     * @memberof NewUserDetails
     */
    applicationKeys?: Array<string>;
}
/**
 * Details about a notification.
 * @export
 * @interface Notification
 */
export interface Notification {
    [key: string]: any | any;
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
     * The HTML body of the email notification for the issue.
     * @type {string}
     * @memberof Notification
     */
    htmlBody?: string;
    /**
     * 
     * @type {NotificationTo}
     * @memberof Notification
     */
    to?: NotificationTo;
    /**
     * 
     * @type {NotificationRestrict}
     * @memberof Notification
     */
    restrict?: NotificationRestrict;
}
/**
 * Details about a notification event.
 * @export
 * @interface NotificationEvent
 */
export interface NotificationEvent {
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
     * The description of the event.
     * @type {string}
     * @memberof NotificationEvent
     */
    description?: string;
    /**
     * 
     * @type {NotificationEventTemplateEvent}
     * @memberof NotificationEvent
     */
    templateEvent?: NotificationEventTemplateEvent;
}
/**
 * The template of the event. Only custom events configured by Jira administrators have template.
 * @export
 * @interface NotificationEventTemplateEvent
 */
export interface NotificationEventTemplateEvent {
    /**
     * The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
     * @type {number}
     * @memberof NotificationEventTemplateEvent
     */
    id?: number;
    /**
     * The name of the event.
     * @type {string}
     * @memberof NotificationEventTemplateEvent
     */
    name?: string;
    /**
     * The description of the event.
     * @type {string}
     * @memberof NotificationEventTemplateEvent
     */
    description?: string;
    /**
     * 
     * @type {NotificationEventTemplateEvent}
     * @memberof NotificationEventTemplateEvent
     */
    templateEvent?: NotificationEventTemplateEvent;
}
/**
 * Details of the users and groups to receive the notification.
 * @export
 * @interface NotificationRecipients
 */
export interface NotificationRecipients {
    [key: string]: any | any;
    /**
     * Whether the notification should be sent to the issue's reporter.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    reporter?: boolean;
    /**
     * Whether the notification should be sent to the issue's assignees.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    assignee?: boolean;
    /**
     * Whether the notification should be sent to the issue's watchers.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    watchers?: boolean;
    /**
     * Whether the notification should be sent to the issue's voters.
     * @type {boolean}
     * @memberof NotificationRecipients
     */
    voters?: boolean;
    /**
     * List of users to receive the notification.
     * @type {Array<UserDetails>}
     * @memberof NotificationRecipients
     */
    users?: Array<UserDetails>;
    /**
     * List of groups to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationRecipients
     */
    groups?: Array<GroupName>;
    /**
     * List of groupIds to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationRecipients
     */
    groupIds?: Array<string>;
}
/**
 * Details of the group membership or permissions needed to receive the notification.
 * @export
 * @interface NotificationRecipientsRestrictions
 */
export interface NotificationRecipientsRestrictions {
    /**
     * List of group memberships required to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationRecipientsRestrictions
     */
    groups?: Array<GroupName>;
    /**
     * List of groupId memberships required to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationRecipientsRestrictions
     */
    groupIds?: Array<string>;
    /**
     * List of permissions required to receive the notification.
     * @type {Array<RestrictedPermission>}
     * @memberof NotificationRecipientsRestrictions
     */
    permissions?: Array<RestrictedPermission>;
}
/**
 * Restricts the notifications to users with the specified permissions.
 * @export
 * @interface NotificationRestrict
 */
export interface NotificationRestrict {
    /**
     * List of group memberships required to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationRestrict
     */
    groups?: Array<GroupName>;
    /**
     * List of groupId memberships required to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationRestrict
     */
    groupIds?: Array<string>;
    /**
     * List of permissions required to receive the notification.
     * @type {Array<RestrictedPermission>}
     * @memberof NotificationRestrict
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
     * 
     * @type {string}
     * @memberof NotificationScheme
     */
    self?: string;
    /**
     * The name of the notification scheme.
     * @type {string}
     * @memberof NotificationScheme
     */
    name?: string;
    /**
     * The description of the notification scheme.
     * @type {string}
     * @memberof NotificationScheme
     */
    description?: string;
    /**
     * The notification events and associated recipients.
     * @type {Array<NotificationSchemeEvent>}
     * @memberof NotificationScheme
     */
    notificationSchemeEvents?: Array<NotificationSchemeEvent>;
    /**
     * 
     * @type {NotificationSchemeScope}
     * @memberof NotificationScheme
     */
    scope?: NotificationSchemeScope;
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
 * The scope of the notification scheme.
 * @export
 * @interface NotificationSchemeScope
 */
export interface NotificationSchemeScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof NotificationSchemeScope
     */
    readonly type?: NotificationSchemeScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof NotificationSchemeScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const NotificationSchemeScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type NotificationSchemeScopeTypeEnum = typeof NotificationSchemeScopeTypeEnum[keyof typeof NotificationSchemeScopeTypeEnum];

/**
 * The recipients of the email notification for the issue.
 * @export
 * @interface NotificationTo
 */
export interface NotificationTo {
    /**
     * Whether the notification should be sent to the issue's reporter.
     * @type {boolean}
     * @memberof NotificationTo
     */
    reporter?: boolean;
    /**
     * Whether the notification should be sent to the issue's assignees.
     * @type {boolean}
     * @memberof NotificationTo
     */
    assignee?: boolean;
    /**
     * Whether the notification should be sent to the issue's watchers.
     * @type {boolean}
     * @memberof NotificationTo
     */
    watchers?: boolean;
    /**
     * Whether the notification should be sent to the issue's voters.
     * @type {boolean}
     * @memberof NotificationTo
     */
    voters?: boolean;
    /**
     * List of users to receive the notification.
     * @type {Array<UserDetails>}
     * @memberof NotificationTo
     */
    users?: Array<UserDetails>;
    /**
     * List of groups to receive the notification.
     * @type {Array<GroupName>}
     * @memberof NotificationTo
     */
    groups?: Array<GroupName>;
    /**
     * List of groupIds to receive the notification.
     * @type {Array<string>}
     * @memberof NotificationTo
     */
    groupIds?: Array<string>;
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
     * A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
     * @type {Array<string>}
     * @memberof OrderOfCustomFieldOptions
     */
    customFieldOptionIds: Array<string>;
    /**
     * The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.
     * @type {string}
     * @memberof OrderOfCustomFieldOptions
     */
    after?: string;
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
     * A list of the issue type IDs to move. The order of the issue type IDs in the list is the order they are given after the move.
     * @type {Array<string>}
     * @memberof OrderOfIssueTypes
     */
    issueTypeIds: Array<string>;
    /**
     * The ID of the issue type to place the moved issue types after. Required if `position` isn't provided.
     * @type {string}
     * @memberof OrderOfIssueTypes
     */
    after?: string;
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
 * @interface PageBeanChangelog
 */
export interface PageBeanChangelog {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanChangelog
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanChangelog
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanChangelog
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanChangelog
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanComment
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanComment
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanComment
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanComment
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanComponentWithIssueCount
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContext
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContext
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContext
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContext
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContextForProjectAndIssueType
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanContextualConfiguration
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanContextualConfiguration
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanContextualConfiguration
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanContextualConfiguration
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContext
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContext
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContext
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContext
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextDefaultValue
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextOption
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanCustomFieldContextProjectMapping
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanDashboard
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanDashboard
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanDashboard
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanDashboard
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanField
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanField
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanField
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanField
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationIssueTypeItem
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationItem
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationScheme
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFieldConfigurationSchemeProjects
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanFilterDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanFilterDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanFilterDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanFilterDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanGroupDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanGroupDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanGroupDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanGroupDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueFieldOption
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueFieldOption
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueFieldOption
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueFieldOption
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueSecurityLevelMember
     */
    readonly isLast?: boolean;
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
 * @interface PageBeanIssueTypeScheme
 */
export interface PageBeanIssueTypeScheme {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScheme
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeSchemeMapping
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeSchemeProjects
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenScheme
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenSchemeItem
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeScreenSchemesProjects
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanIssueTypeToContextMapping
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanNotificationScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanNotificationScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanNotificationScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanNotificationScheme
     */
    readonly isLast?: boolean;
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
 * @interface PageBeanPriority
 */
export interface PageBeanPriority {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanPriority
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanPriority
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanPriority
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanPriority
     */
    readonly isLast?: boolean;
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
 * @interface PageBeanProject
 */
export interface PageBeanProject {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanProject
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanProject
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanProject
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanProject
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanProjectDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanProjectDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanProjectDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanProjectDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanResolutionJsonBean
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreen
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreen
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreen
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreen
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreenScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreenScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreenScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreenScheme
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanScreenWithTab
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanScreenWithTab
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanScreenWithTab
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanScreenWithTab
     */
    readonly isLast?: boolean;
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
 * @interface PageBeanString
 */
export interface PageBeanString {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanString
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanString
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanString
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanString
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUiModificationDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUiModificationDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUiModificationDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUiModificationDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUser
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUser
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUser
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUser
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUserDetails
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUserDetails
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUserDetails
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUserDetails
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanUserKey
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanUserKey
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanUserKey
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanUserKey
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanVersion
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanVersion
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanVersion
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanVersion
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWebhook
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWebhook
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWebhook
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWebhook
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflow
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflow
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflow
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflow
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflowScheme
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflowScheme
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflowScheme
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflowScheme
     */
    readonly isLast?: boolean;
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
     * The URL of the page.
     * @type {string}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly maxResults?: number;
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
     * Whether this is the last page.
     * @type {boolean}
     * @memberof PageBeanWorkflowTransitionRules
     */
    readonly isLast?: boolean;
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
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly startAt?: number;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly maxResults?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof PageOfChangelogs
     */
    readonly total?: number;
    /**
     * The list of changelogs.
     * @type {Array<Changelog>}
     * @memberof PageOfChangelogs
     */
    readonly histories?: Array<Changelog>;
}
/**
 * A page of comments.
 * @export
 * @interface PageOfComments
 */
export interface PageOfComments {
    [key: string]: any | any;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly startAt?: number;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly maxResults?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof PageOfComments
     */
    readonly total?: number;
    /**
     * The list of comments.
     * @type {Array<Comment>}
     * @memberof PageOfComments
     */
    readonly comments?: Array<Comment>;
}
/**
 * A page containing dashboard details.
 * @export
 * @interface PageOfDashboards
 */
export interface PageOfDashboards {
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly startAt?: number;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly maxResults?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof PageOfDashboards
     */
    readonly total?: number;
    /**
     * The URL of the previous page of results, if any.
     * @type {string}
     * @memberof PageOfDashboards
     */
    readonly prev?: string;
    /**
     * The URL of the next page of results, if any.
     * @type {string}
     * @memberof PageOfDashboards
     */
    readonly next?: string;
    /**
     * List of dashboards.
     * @type {Array<Dashboard>}
     * @memberof PageOfDashboards
     */
    readonly dashboards?: Array<Dashboard>;
}
/**
 * 
 * @export
 * @interface PageOfStatuses
 */
export interface PageOfStatuses {
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
     * The list of items.
     * @type {Array<JiraStatus>}
     * @memberof PageOfStatuses
     */
    values?: Array<JiraStatus>;
    /**
     * The URL of this page.
     * @type {string}
     * @memberof PageOfStatuses
     */
    self?: string;
    /**
     * The URL of the next page of results, if any.
     * @type {string}
     * @memberof PageOfStatuses
     */
    nextPage?: string;
}
/**
 * Paginated list of worklog details
 * @export
 * @interface PageOfWorklogs
 */
export interface PageOfWorklogs {
    [key: string]: any | any;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PageOfWorklogs
     */
    readonly startAt?: number;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof PageOfWorklogs
     */
    readonly maxResults?: number;
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
 * A paged list. To access additional details append `[start-index:end-index]` to the expand request. For example, `?expand=sharedUsers[10:40]` returns a list starting at item 10 and finishing at item 40.
 * @export
 * @interface PagedListUserDetailsApplicationUser
 */
export interface PagedListUserDetailsApplicationUser {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly size?: number;
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
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof PagedListUserDetailsApplicationUser
     */
    readonly endIndex?: number;
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
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseComment
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedResponseComment
     */
    startAt?: number;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof PaginatedResponseComment
     */
    results?: Array<Comment>;
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
     * The JQL query that was parsed and validated.
     * @type {string}
     * @memberof ParsedJqlQuery
     */
    query: string;
    /**
     * 
     * @type {ParsedJqlQueryStructure}
     * @memberof ParsedJqlQuery
     */
    structure?: ParsedJqlQueryStructure;
    /**
     * The list of syntax or validation errors.
     * @type {Set<string>}
     * @memberof ParsedJqlQuery
     */
    errors?: string[];
}
/**
 * The syntax tree of the query. Empty if the query was invalid.
 * @export
 * @interface ParsedJqlQueryStructure
 */
export interface ParsedJqlQueryStructure {
    /**
     * 
     * @type {JqlQueryClause}
     * @memberof ParsedJqlQueryStructure
     */
    where?: JqlQueryClause;
    /**
     * 
     * @type {JqlQueryOrderByClause}
     * @memberof ParsedJqlQueryStructure
     */
    orderBy?: JqlQueryOrderByClause;
}
/**
 * Details about a permission granted to a user or group.
 * @export
 * @interface PermissionGrant
 */
export interface PermissionGrant {
    /**
     * The ID of the permission granted details.
     * @type {number}
     * @memberof PermissionGrant
     */
    readonly id?: number;
    /**
     * The URL of the permission granted details.
     * @type {string}
     * @memberof PermissionGrant
     */
    readonly self?: string;
    /**
     * 
     * @type {PermissionGrantHolder}
     * @memberof PermissionGrant
     */
    holder?: PermissionGrantHolder;
    /**
     * The permission to grant. This permission can be one of the built-in permissions or a custom permission added by an app. See [Built-in permissions](../api-group-permission-schemes/#built-in-permissions) in *Get all permission schemes* for more information about the built-in permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information about custom permissions.
     * @type {string}
     * @memberof PermissionGrant
     */
    permission?: string;
}
/**
 * The user or group being granted the permission. It consists of a `type`, a type-dependent `parameter` and a type-dependent `value`. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 * @export
 * @interface PermissionGrantHolder
 */
export interface PermissionGrantHolder {
    /**
     * The type of permission holder.
     * @type {string}
     * @memberof PermissionGrantHolder
     */
    type: string;
    /**
     * As a group's name can change, use of `value` is recommended. The identifier associated withthe `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionGrantHolder
     */
    parameter?: string;
    /**
     * The identifier associated with the `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionGrantHolder
     */
    value?: string;
    /**
     * Expand options that include additional permission holder details in the response.
     * @type {string}
     * @memberof PermissionGrantHolder
     */
    readonly expand?: string;
}
/**
 * List of permission grants.
 * @export
 * @interface PermissionGrants
 */
export interface PermissionGrants {
    /**
     * Permission grants list.
     * @type {Array<PermissionGrant>}
     * @memberof PermissionGrants
     */
    readonly permissions?: Array<PermissionGrant>;
    /**
     * Expand options that include additional permission grant details in the response.
     * @type {string}
     * @memberof PermissionGrants
     */
    readonly expand?: string;
}
/**
 * Details of a user, group, field, or project role that holds a permission. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 * @export
 * @interface PermissionHolder
 */
export interface PermissionHolder {
    /**
     * The type of permission holder.
     * @type {string}
     * @memberof PermissionHolder
     */
    type: string;
    /**
     * As a group's name can change, use of `value` is recommended. The identifier associated withthe `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionHolder
     */
    parameter?: string;
    /**
     * The identifier associated with the `type` value that defines the holder of the permission.
     * @type {string}
     * @memberof PermissionHolder
     */
    value?: string;
    /**
     * Expand options that include additional permission holder details in the response.
     * @type {string}
     * @memberof PermissionHolder
     */
    readonly expand?: string;
}
/**
 * Details of a permission scheme.
 * @export
 * @interface PermissionScheme
 */
export interface PermissionScheme {
    [key: string]: any | any;
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
     * The URL of the permission scheme.
     * @type {string}
     * @memberof PermissionScheme
     */
    readonly self?: string;
    /**
     * The name of the permission scheme. Must be unique.
     * @type {string}
     * @memberof PermissionScheme
     */
    name: string;
    /**
     * A description for the permission scheme.
     * @type {string}
     * @memberof PermissionScheme
     */
    description?: string;
    /**
     * 
     * @type {PermissionSchemeScope}
     * @memberof PermissionScheme
     */
    scope?: PermissionSchemeScope;
    /**
     * The permission scheme to create or update. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more information.
     * @type {Array<PermissionGrant>}
     * @memberof PermissionScheme
     */
    permissions?: Array<PermissionGrant>;
}
/**
 * The scope of the permission scheme.
 * @export
 * @interface PermissionSchemeScope
 */
export interface PermissionSchemeScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof PermissionSchemeScope
     */
    readonly type?: PermissionSchemeScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof PermissionSchemeScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const PermissionSchemeScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type PermissionSchemeScopeTypeEnum = typeof PermissionSchemeScopeTypeEnum[keyof typeof PermissionSchemeScopeTypeEnum];

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
     * The name of the issue priority.
     * @type {string}
     * @memberof Priority
     */
    name?: string;
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
 * Details about a project.
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * Expand options that include additional project details in the response.
     * @type {string}
     * @memberof Project
     */
    readonly expand?: string;
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof Project
     */
    readonly self?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof Project
     */
    id?: string;
    /**
     * The key of the project.
     * @type {string}
     * @memberof Project
     */
    readonly key?: string;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof Project
     */
    readonly description?: string;
    /**
     * 
     * @type {ProjectLead}
     * @memberof Project
     */
    lead?: ProjectLead;
    /**
     * List of the components contained in the project.
     * @type {Array<ProjectComponent>}
     * @memberof Project
     */
    readonly components?: Array<ProjectComponent>;
    /**
     * List of the issue types available in the project.
     * @type {Array<IssueTypeDetails>}
     * @memberof Project
     */
    readonly issueTypes?: Array<IssueTypeDetails>;
    /**
     * A link to information about this project, such as project documentation.
     * @type {string}
     * @memberof Project
     */
    readonly url?: string;
    /**
     * An email address associated with the project.
     * @type {string}
     * @memberof Project
     */
    email?: string;
    /**
     * The default assignee when creating issues for this project.
     * @type {string}
     * @memberof Project
     */
    readonly assigneeType?: ProjectAssigneeTypeEnum;
    /**
     * The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
     * @type {Array<Version>}
     * @memberof Project
     */
    readonly versions?: Array<Version>;
    /**
     * The name of the project.
     * @type {string}
     * @memberof Project
     */
    readonly name?: string;
    /**
     * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
     * @type {{ [key: string]: string; }}
     * @memberof Project
     */
    readonly roles?: { [key: string]: string; };
    /**
     * 
     * @type {ProjectAvatarUrls}
     * @memberof Project
     */
    avatarUrls?: ProjectAvatarUrls;
    /**
     * 
     * @type {ProjectProjectCategory}
     * @memberof Project
     */
    projectCategory?: ProjectProjectCategory;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof Project
     */
    readonly projectTypeKey?: ProjectProjectTypeKeyEnum;
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
     * Whether the project is selected as a favorite.
     * @type {boolean}
     * @memberof Project
     */
    favourite?: boolean;
    /**
     * Whether the project is private.
     * @type {boolean}
     * @memberof Project
     */
    readonly isPrivate?: boolean;
    /**
     * 
     * @type {ProjectIssueTypeHierarchy}
     * @memberof Project
     */
    issueTypeHierarchy?: ProjectIssueTypeHierarchy;
    /**
     * 
     * @type {ProjectPermissions}
     * @memberof Project
     */
    permissions?: ProjectPermissions;
    /**
     * Map of project properties
     * @type {{ [key: string]: any; }}
     * @memberof Project
     */
    readonly properties?: { [key: string]: any; };
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof Project
     */
    readonly uuid?: string;
    /**
     * 
     * @type {ProjectInsight}
     * @memberof Project
     */
    insight?: ProjectInsight;
    /**
     * Whether the project is marked as deleted.
     * @type {boolean}
     * @memberof Project
     */
    readonly deleted?: boolean;
    /**
     * The date when the project is deleted permanently.
     * @type {string}
     * @memberof Project
     */
    readonly retentionTillDate?: string;
    /**
     * The date when the project was marked as deleted.
     * @type {string}
     * @memberof Project
     */
    readonly deletedDate?: string;
    /**
     * 
     * @type {ProjectDeletedBy}
     * @memberof Project
     */
    deletedBy?: ProjectDeletedBy;
    /**
     * Whether the project is archived.
     * @type {boolean}
     * @memberof Project
     */
    readonly archived?: boolean;
    /**
     * The date when the project was archived.
     * @type {string}
     * @memberof Project
     */
    readonly archivedDate?: string;
    /**
     * 
     * @type {ProjectArchivedBy}
     * @memberof Project
     */
    archivedBy?: ProjectArchivedBy;
    /**
     * 
     * @type {ProjectLandingPageInfo}
     * @memberof Project
     */
    landingPageInfo?: ProjectLandingPageInfo;
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
 * The user who archived the project.
 * @export
 * @interface ProjectArchivedBy
 */
export interface ProjectArchivedBy {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly accountType?: ProjectArchivedByAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectArchivedBy
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectArchivedBy
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectArchivedBy
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectArchivedBy
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectArchivedBy
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectArchivedByAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectArchivedByAccountTypeEnum = typeof ProjectArchivedByAccountTypeEnum[keyof typeof ProjectArchivedByAccountTypeEnum];

/**
 * The URLs of the project's avatars.
 * @export
 * @interface ProjectAvatarUrls
 */
export interface ProjectAvatarUrls {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof ProjectAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof ProjectAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof ProjectAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof ProjectAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * List of project avatars.
 * @export
 * @interface ProjectAvatars
 */
export interface ProjectAvatars {
    /**
     * List of avatars included with Jira. These avatars cannot be deleted.
     * @type {Array<Avatar>}
     * @memberof ProjectAvatars
     */
    readonly system?: Array<Avatar>;
    /**
     * List of avatars added to Jira. These avatars may be deleted.
     * @type {Array<Avatar>}
     * @memberof ProjectAvatars
     */
    readonly custom?: Array<Avatar>;
}
/**
 * A project category.
 * @export
 * @interface ProjectCategory
 */
export interface ProjectCategory {
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof ProjectCategory
     */
    readonly self?: string;
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
     * The description of the project category.
     * @type {string}
     * @memberof ProjectCategory
     */
    description?: string;
}
/**
 * Details about a project component.
 * @export
 * @interface ProjectComponent
 */
export interface ProjectComponent {
    /**
     * The URL of the component.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly self?: string;
    /**
     * The unique identifier for the component.
     * @type {string}
     * @memberof ProjectComponent
     */
    readonly id?: string;
    /**
     * The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.
     * @type {string}
     * @memberof ProjectComponent
     */
    name?: string;
    /**
     * The description for the component. Optional when creating or updating a component.
     * @type {string}
     * @memberof ProjectComponent
     */
    description?: string;
    /**
     * 
     * @type {ProjectComponentLead}
     * @memberof ProjectComponent
     */
    lead?: ProjectComponentLead;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponent
     */
    leadUserName?: string;
    /**
     * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof ProjectComponent
     */
    leadAccountId?: string;
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
     * 
     * @type {ProjectComponentAssignee}
     * @memberof ProjectComponent
     */
    assignee?: ProjectComponentAssignee;
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
     * 
     * @type {ProjectComponentRealAssignee}
     * @memberof ProjectComponent
     */
    realAssignee?: ProjectComponentRealAssignee;
    /**
     * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
     * @type {boolean}
     * @memberof ProjectComponent
     */
    readonly isAssigneeTypeValid?: boolean;
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
 * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
 * @export
 * @interface ProjectComponentAssignee
 */
export interface ProjectComponentAssignee {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly accountType?: ProjectComponentAssigneeAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectComponentAssignee
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectComponentAssignee
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectComponentAssignee
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectComponentAssignee
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectComponentAssignee
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectComponentAssigneeAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectComponentAssigneeAccountTypeEnum = typeof ProjectComponentAssigneeAccountTypeEnum[keyof typeof ProjectComponentAssigneeAccountTypeEnum];

/**
 * The user details for the component's lead user.
 * @export
 * @interface ProjectComponentLead
 */
export interface ProjectComponentLead {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly accountType?: ProjectComponentLeadAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectComponentLead
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectComponentLead
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectComponentLead
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectComponentLead
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectComponentLead
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectComponentLeadAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectComponentLeadAccountTypeEnum = typeof ProjectComponentLeadAccountTypeEnum[keyof typeof ProjectComponentLeadAccountTypeEnum];

/**
 * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
 * @export
 * @interface ProjectComponentRealAssignee
 */
export interface ProjectComponentRealAssignee {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly accountType?: ProjectComponentRealAssigneeAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectComponentRealAssignee
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectComponentRealAssignee
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectComponentRealAssignee
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectComponentRealAssignee
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectComponentRealAssignee
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectComponentRealAssigneeAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectComponentRealAssigneeAccountTypeEnum = typeof ProjectComponentRealAssigneeAccountTypeEnum[keyof typeof ProjectComponentRealAssigneeAccountTypeEnum];

/**
 * The user who marked the project as deleted.
 * @export
 * @interface ProjectDeletedBy
 */
export interface ProjectDeletedBy {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly accountType?: ProjectDeletedByAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectDeletedBy
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectDeletedBy
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectDeletedBy
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectDeletedBy
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectDeletedBy
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectDeletedByAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectDeletedByAccountTypeEnum = typeof ProjectDeletedByAccountTypeEnum[keyof typeof ProjectDeletedByAccountTypeEnum];

/**
 * Details about a project.
 * @export
 * @interface ProjectDetails
 */
export interface ProjectDetails {
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly self?: string;
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
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof ProjectDetails
     */
    readonly projectTypeKey?: ProjectDetailsProjectTypeKeyEnum;
    /**
     * Whether or not the project is simplified.
     * @type {boolean}
     * @memberof ProjectDetails
     */
    readonly simplified?: boolean;
    /**
     * 
     * @type {ProjectAvatarUrls}
     * @memberof ProjectDetails
     */
    avatarUrls?: ProjectAvatarUrls;
    /**
     * 
     * @type {ProjectDetailsProjectCategory}
     * @memberof ProjectDetails
     */
    projectCategory?: ProjectDetailsProjectCategory;
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
 * The category the project belongs to.
 * @export
 * @interface ProjectDetailsProjectCategory
 */
export interface ProjectDetailsProjectCategory {
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof ProjectDetailsProjectCategory
     */
    readonly self?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof ProjectDetailsProjectCategory
     */
    readonly id?: string;
    /**
     * The name of the project category.
     * @type {string}
     * @memberof ProjectDetailsProjectCategory
     */
    readonly description?: string;
    /**
     * The description of the project category.
     * @type {string}
     * @memberof ProjectDetailsProjectCategory
     */
    readonly name?: string;
}
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
    /**
     * The key of the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    feature?: string;
    /**
     * List of keys of the features required to enable the feature.
     * @type {Array<string>}
     * @memberof ProjectFeature
     */
    prerequisites?: Array<string>;
    /**
     * Localized display name for the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    localisedName?: string;
    /**
     * Localized display description for the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    localisedDescription?: string;
    /**
     * URI for the image representing the feature.
     * @type {string}
     * @memberof ProjectFeature
     */
    imageUri?: string;
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
     * The URL of the created project.
     * @type {string}
     * @memberof ProjectIdentifiers
     */
    readonly self: string;
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
 * Insights about the project.
 * @export
 * @interface ProjectInsight
 */
export interface ProjectInsight {
    /**
     * Total issue count.
     * @type {number}
     * @memberof ProjectInsight
     */
    readonly totalIssueCount?: number;
    /**
     * The last issue update time.
     * @type {string}
     * @memberof ProjectInsight
     */
    readonly lastIssueUpdateTime?: string;
}
/**
 * Details of the issue creation metadata for a project.
 * @export
 * @interface ProjectIssueCreateMetadata
 */
export interface ProjectIssueCreateMetadata {
    /**
     * Expand options that include additional project issue create metadata details in the response.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly expand?: string;
    /**
     * The URL of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly self?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly id?: string;
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
     * 
     * @type {ProjectIssueCreateMetadataAvatarUrls}
     * @memberof ProjectIssueCreateMetadata
     */
    avatarUrls?: ProjectIssueCreateMetadataAvatarUrls;
    /**
     * List of the issue types supported by the project.
     * @type {Array<IssueTypeIssueCreateMetadata>}
     * @memberof ProjectIssueCreateMetadata
     */
    readonly issuetypes?: Array<IssueTypeIssueCreateMetadata>;
}
/**
 * List of the project's avatars, returning the avatar size and associated URL.
 * @export
 * @interface ProjectIssueCreateMetadataAvatarUrls
 */
export interface ProjectIssueCreateMetadataAvatarUrls {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof ProjectIssueCreateMetadataAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof ProjectIssueCreateMetadataAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof ProjectIssueCreateMetadataAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof ProjectIssueCreateMetadataAvatarUrls
     */
    ["48x48"]?: string;
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
 * The issue type hierarchy for the project.
 * @export
 * @interface ProjectIssueTypeHierarchy
 */
export interface ProjectIssueTypeHierarchy {
    /**
     * The ID of the base level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof ProjectIssueTypeHierarchy
     */
    baseLevelId?: number;
    /**
     * Details about the hierarchy level.
     * @type {Array<SimplifiedHierarchyLevel>}
     * @memberof ProjectIssueTypeHierarchy
     */
    readonly levels?: Array<SimplifiedHierarchyLevel>;
}
/**
 * The project and issue type mapping.
 * @export
 * @interface ProjectIssueTypeMapping
 */
export interface ProjectIssueTypeMapping {
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ProjectIssueTypeMapping
     */
    projectId: string;
    /**
     * The ID of the issue type.
     * @type {string}
     * @memberof ProjectIssueTypeMapping
     */
    issueTypeId: string;
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
 * Projects and issue types where the status is used. Only available if the `usages` expand is requested.
 * @export
 * @interface ProjectIssueTypes
 */
export interface ProjectIssueTypes {
    /**
     * 
     * @type {ProjectId}
     * @memberof ProjectIssueTypes
     */
    project?: ProjectId;
    /**
     * IDs of the issue types
     * @type {Set<string>}
     * @memberof ProjectIssueTypes
     */
    issueTypes?: string[];
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
    /**
     * The list of issue types in the hierarchy level.
     * @type {Array<IssueTypeInfo>}
     * @memberof ProjectIssueTypesHierarchyLevel
     */
    readonly issueTypes?: Array<IssueTypeInfo>;
}
/**
 * The project landing page info.
 * @export
 * @interface ProjectLandingPageInfo
 */
export interface ProjectLandingPageInfo {
    /**
     * 
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    url?: string;
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
     * @type {number}
     * @memberof ProjectLandingPageInfo
     */
    boardId?: number;
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
    boardName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectLandingPageInfo
     */
    simpleBoard?: boolean;
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
     * @type {string}
     * @memberof ProjectLandingPageInfo
     */
    queueCategory?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProjectLandingPageInfo
     */
    attributes?: { [key: string]: string; };
}
/**
 * The username of the project lead.
 * @export
 * @interface ProjectLead
 */
export interface ProjectLead {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectLead
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof ProjectLead
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof ProjectLead
     */
    readonly accountType?: ProjectLeadAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ProjectLead
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof ProjectLead
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ProjectLead
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof ProjectLead
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof ProjectLead
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof ProjectLead
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const ProjectLeadAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type ProjectLeadAccountTypeEnum = typeof ProjectLeadAccountTypeEnum[keyof typeof ProjectLeadAccountTypeEnum];

/**
 * User permissions on the project
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
 * The category the project belongs to.
 * @export
 * @interface ProjectProjectCategory
 */
export interface ProjectProjectCategory {
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof ProjectProjectCategory
     */
    readonly self?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof ProjectProjectCategory
     */
    readonly id?: string;
    /**
     * The name of the project category. Required on create, optional on update.
     * @type {string}
     * @memberof ProjectProjectCategory
     */
    name?: string;
    /**
     * The description of the project category.
     * @type {string}
     * @memberof ProjectProjectCategory
     */
    description?: string;
}
/**
 * Details about the roles in a project.
 * @export
 * @interface ProjectRole
 */
export interface ProjectRole {
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof ProjectRole
     */
    readonly self?: string;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    name?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof ProjectRole
     */
    readonly id?: number;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    readonly description?: string;
    /**
     * The list of users who act in this role.
     * @type {Array<RoleActor>}
     * @memberof ProjectRole
     */
    readonly actors?: Array<RoleActor>;
    /**
     * 
     * @type {ProjectRoleScope}
     * @memberof ProjectRole
     */
    scope?: ProjectRoleScope;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof ProjectRole
     */
    translatedName?: string;
    /**
     * Whether the calling user is part of this role.
     * @type {boolean}
     * @memberof ProjectRole
     */
    currentUserRole?: boolean;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly roleConfigurable?: boolean;
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly admin?: boolean;
    /**
     * Whether this role is the default role for the project
     * @type {boolean}
     * @memberof ProjectRole
     */
    readonly _default?: boolean;
}
/**
 * 
 * @export
 * @interface ProjectRoleActorsUpdateBean
 */
export interface ProjectRoleActorsUpdateBean {
    /**
     * The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @type {number}
     * @memberof ProjectRoleActorsUpdateBean
     */
    readonly id?: number;
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
}
/**
 * Details about a project role.
 * @export
 * @interface ProjectRoleDetails
 */
export interface ProjectRoleDetails {
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    readonly self?: string;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    name?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof ProjectRoleDetails
     */
    readonly id?: number;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    readonly description?: string;
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly admin?: boolean;
    /**
     * 
     * @type {ProjectRoleScope}
     * @memberof ProjectRoleDetails
     */
    scope?: ProjectRoleScope;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly roleConfigurable?: boolean;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof ProjectRoleDetails
     */
    translatedName?: string;
    /**
     * Whether this role is the default role for the project.
     * @type {boolean}
     * @memberof ProjectRoleDetails
     */
    readonly _default?: boolean;
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
     * The name of the group. As a group's name can change, use of `groupId` is recommended to identify the group.
     * @type {string}
     * @memberof ProjectRoleGroup
     */
    name?: string;
    /**
     * The ID of the group.
     * @type {string}
     * @memberof ProjectRoleGroup
     */
    groupId?: string;
}
/**
 * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 * @export
 * @interface ProjectRoleScope
 */
export interface ProjectRoleScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof ProjectRoleScope
     */
    readonly type?: ProjectRoleScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof ProjectRoleScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const ProjectRoleScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type ProjectRoleScopeTypeEnum = typeof ProjectRoleScopeTypeEnum[keyof typeof ProjectRoleScopeTypeEnum];

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
     * The ID of the project that the option's behavior applies to.
     * @type {number}
     * @memberof ProjectScopeBean
     */
    id?: number;
    /**
     * Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
     * @type {Set<string>}
     * @memberof ProjectScopeBean
     */
    attributes?: ProjectScopeBeanAttributesEnum[];
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
     * The key of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly key?: string;
    /**
     * The formatted key of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly formattedKey?: string;
    /**
     * The key of the project type's description.
     * @type {string}
     * @memberof ProjectType
     */
    readonly descriptionI18nKey?: string;
    /**
     * The icon of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly icon?: string;
    /**
     * The color of the project type.
     * @type {string}
     * @memberof ProjectType
     */
    readonly color?: string;
}
/**
 * Property key details.
 * @export
 * @interface PropertyKey
 */
export interface PropertyKey {
    /**
     * The URL of the property.
     * @type {string}
     * @memberof PropertyKey
     */
    readonly self?: string;
    /**
     * The key of the property.
     * @type {string}
     * @memberof PropertyKey
     */
    readonly key?: string;
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
    statusMappings?: StatusMapping[];
}
/**
 * Properties that identify a published workflow.
 * @export
 * @interface PublishedWorkflowId
 */
export interface PublishedWorkflowId {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof PublishedWorkflowId
     */
    name: string;
    /**
     * The entity ID of the workflow.
     * @type {string}
     * @memberof PublishedWorkflowId
     */
    entityId?: string;
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
     * The ID of the link.
     * @type {number}
     * @memberof RemoteIssueLink
     */
    id?: number;
    /**
     * The URL of the link.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    self?: string;
    /**
     * The global ID of the link, such as the ID of the item on the remote system.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    globalId?: string;
    /**
     * 
     * @type {RemoteIssueLinkApplication}
     * @memberof RemoteIssueLink
     */
    application?: RemoteIssueLinkApplication;
    /**
     * Description of the relationship between the issue and the linked item.
     * @type {string}
     * @memberof RemoteIssueLink
     */
    relationship?: string;
    /**
     * 
     * @type {RemoteIssueLinkObject}
     * @memberof RemoteIssueLink
     */
    object?: RemoteIssueLinkObject;
}
/**
 * Details of the remote application the linked item is in.
 * @export
 * @interface RemoteIssueLinkApplication
 */
export interface RemoteIssueLinkApplication {
    /**
     * The name-spaced type of the application, used by registered rendering apps.
     * @type {string}
     * @memberof RemoteIssueLinkApplication
     */
    type?: string;
    /**
     * The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
     * @type {string}
     * @memberof RemoteIssueLinkApplication
     */
    name?: string;
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
 * Details of the item linked to.
 * @export
 * @interface RemoteIssueLinkObject
 */
export interface RemoteIssueLinkObject {
    /**
     * The URL of the item.
     * @type {string}
     * @memberof RemoteIssueLinkObject
     */
    url: string;
    /**
     * The title of the item.
     * @type {string}
     * @memberof RemoteIssueLinkObject
     */
    title: string;
    /**
     * The summary details of the item.
     * @type {string}
     * @memberof RemoteIssueLinkObject
     */
    summary?: string;
    /**
     * 
     * @type {RemoteObjectIcon}
     * @memberof RemoteIssueLinkObject
     */
    icon?: RemoteObjectIcon;
    /**
     * 
     * @type {RemoteObjectStatus}
     * @memberof RemoteIssueLinkObject
     */
    status?: RemoteObjectStatus;
}
/**
 * Details of a remote issue link.
 * @export
 * @interface RemoteIssueLinkRequest
 */
export interface RemoteIssueLinkRequest {
    [key: string]: any | any;
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
     * 
     * @type {RemoteIssueLinkRequestApplication}
     * @memberof RemoteIssueLinkRequest
     */
    application?: RemoteIssueLinkRequestApplication;
    /**
     * Description of the relationship between the issue and the linked item. If not set, the relationship description "links to" is used in Jira.
     * @type {string}
     * @memberof RemoteIssueLinkRequest
     */
    relationship?: string;
    /**
     * 
     * @type {RemoteIssueLinkObject}
     * @memberof RemoteIssueLinkRequest
     */
    object: RemoteIssueLinkObject;
}
/**
 * Details of the remote application the linked item is in. For example, trello.
 * @export
 * @interface RemoteIssueLinkRequestApplication
 */
export interface RemoteIssueLinkRequestApplication {
    /**
     * The name-spaced type of the application, used by registered rendering apps.
     * @type {string}
     * @memberof RemoteIssueLinkRequestApplication
     */
    type?: string;
    /**
     * The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link". Grouping and sorting of links may place links without an application name last.
     * @type {string}
     * @memberof RemoteIssueLinkRequestApplication
     */
    name?: string;
}
/**
 * The linked item.
 * @export
 * @interface RemoteObject
 */
export interface RemoteObject {
    [key: string]: any | any;
    /**
     * The URL of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    url: string;
    /**
     * The title of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    title: string;
    /**
     * The summary details of the item.
     * @type {string}
     * @memberof RemoteObject
     */
    summary?: string;
    /**
     * 
     * @type {RemoteObjectIcon}
     * @memberof RemoteObject
     */
    icon?: RemoteObjectIcon;
    /**
     * 
     * @type {RemoteObjectStatus}
     * @memberof RemoteObject
     */
    status?: RemoteObjectStatus;
}
/**
 * Details of the icon for the item. If no icon is defined, the default link icon is used in Jira.
 * @export
 * @interface RemoteObjectIcon
 */
export interface RemoteObjectIcon {
    /**
     * The URL of an icon that displays at 16x16 pixel in Jira.
     * @type {string}
     * @memberof RemoteObjectIcon
     */
    url16x16?: string;
    /**
     * The title of the icon. This is used as follows:
     * 
     *  *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn't display a tooltip in Jira.
     *  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link".
     * @type {string}
     * @memberof RemoteObjectIcon
     */
    title?: string;
    /**
     * The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
     * @type {string}
     * @memberof RemoteObjectIcon
     */
    link?: string;
}
/**
 * The status of the item.
 * @export
 * @interface RemoteObjectStatus
 */
export interface RemoteObjectStatus {
    /**
     * Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
     * @type {boolean}
     * @memberof RemoteObjectStatus
     */
    resolved?: boolean;
    /**
     * 
     * @type {StatusIcon}
     * @memberof RemoteObjectStatus
     */
    icon?: StatusIcon;
}
/**
 * 
 * @export
 * @interface RemoveOptionFromIssuesResult
 */
export interface RemoveOptionFromIssuesResult {
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
    /**
     * 
     * @type {RemoveOptionFromIssuesResultErrors}
     * @memberof RemoveOptionFromIssuesResult
     */
    errors?: RemoveOptionFromIssuesResultErrors;
}
/**
 * A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned.
 * @export
 * @interface RemoveOptionFromIssuesResultErrors
 */
export interface RemoveOptionFromIssuesResultErrors {
    /**
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof RemoveOptionFromIssuesResultErrors
     */
    errors?: { [key: string]: string; };
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof RemoveOptionFromIssuesResultErrors
     */
    errorMessages?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RemoveOptionFromIssuesResultErrors
     */
    httpStatusCode?: number;
}
/**
 * Change the order of issue priorities.
 * @export
 * @interface ReorderIssuePriorities
 */
export interface ReorderIssuePriorities {
    /**
     * The list of issue IDs to be reordered. Cannot contain duplicates nor after ID.
     * @type {Array<string>}
     * @memberof ReorderIssuePriorities
     */
    ids: Array<string>;
    /**
     * The ID of the priority. Required if `position` isn't provided.
     * @type {string}
     * @memberof ReorderIssuePriorities
     */
    after?: string;
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
     * The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID.
     * @type {Array<string>}
     * @memberof ReorderIssueResolutionsRequest
     */
    ids: Array<string>;
    /**
     * The ID of the resolution. Required if `position` isn't provided.
     * @type {string}
     * @memberof ReorderIssueResolutionsRequest
     */
    after?: string;
    /**
     * The position for issue resolutions to be moved to. Required if `after` isn't provided.
     * @type {string}
     * @memberof ReorderIssueResolutionsRequest
     */
    position?: string;
}
/**
 * Details of an issue resolution.
 * @export
 * @interface Resolution
 */
export interface Resolution {
    /**
     * The URL of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    self?: string;
    /**
     * The ID of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    id?: string;
    /**
     * The description of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    description?: string;
    /**
     * The name of the issue resolution.
     * @type {string}
     * @memberof Resolution
     */
    name?: string;
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
     * @type {string}
     * @memberof ResolutionJsonBean
     */
    self?: string;
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
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResolutionJsonBean
     */
    _default?: boolean;
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
    emptyAdf?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RichText
     */
    valueSet?: boolean;
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
    empty?: boolean;
}
/**
 * Details about a user assigned to a project role.
 * @export
 * @interface RoleActor
 */
export interface RoleActor {
    /**
     * The ID of the role actor.
     * @type {number}
     * @memberof RoleActor
     */
    readonly id?: number;
    /**
     * The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
     * @type {string}
     * @memberof RoleActor
     */
    readonly displayName?: string;
    /**
     * The type of role actor.
     * @type {string}
     * @memberof RoleActor
     */
    readonly type?: RoleActorTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof RoleActor
     */
    readonly name?: string;
    /**
     * The avatar of the role actor.
     * @type {string}
     * @memberof RoleActor
     */
    readonly avatarUrl?: string;
    /**
     * 
     * @type {ProjectRoleUser}
     * @memberof RoleActor
     */
    readonly actorUser?: ProjectRoleUser;
    /**
     * 
     * @type {ProjectRoleGroup}
     * @memberof RoleActor
     */
    readonly actorGroup?: ProjectRoleGroup;
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
     * Configuration of the rule, as it is stored by the Connect app on the rule configuration page.
     * @type {string}
     * @memberof RuleConfiguration
     */
    value: string;
    /**
     * EXPERIMENTAL: Whether the rule is disabled.
     * @type {boolean}
     * @memberof RuleConfiguration
     */
    disabled?: boolean;
    /**
     * EXPERIMENTAL: A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).
     * @type {string}
     * @memberof RuleConfiguration
     */
    tag?: string;
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
    /**
     * 
     * @type {SanitizedJqlQueryErrors}
     * @memberof SanitizedJqlQuery
     */
    errors?: SanitizedJqlQueryErrors;
    /**
     * The account ID of the user for whom sanitization was performed.
     * @type {string}
     * @memberof SanitizedJqlQuery
     */
    accountId?: string | null;
}
/**
 * The list of errors.
 * @export
 * @interface SanitizedJqlQueryErrors
 */
export interface SanitizedJqlQueryErrors {
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof SanitizedJqlQueryErrors
     */
    errorMessages?: Array<string>;
    /**
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof SanitizedJqlQueryErrors
     */
    errors?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SanitizedJqlQueryErrors
     */
    status?: number;
}
/**
 * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 * @export
 * @interface Scope
 */
export interface Scope {
    [key: string]: any | any;
    /**
     * The type of scope.
     * @type {string}
     * @memberof Scope
     */
    readonly type?: ScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof Scope
     */
    project?: ScopeProject;
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
 * The project the item has scope in.
 * @export
 * @interface ScopeProject
 */
export interface ScopeProject {
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof ScopeProject
     */
    readonly self?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof ScopeProject
     */
    id?: string;
    /**
     * The key of the project.
     * @type {string}
     * @memberof ScopeProject
     */
    readonly key?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof ScopeProject
     */
    readonly name?: string;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof ScopeProject
     */
    readonly projectTypeKey?: ScopeProjectProjectTypeKeyEnum;
    /**
     * Whether or not the project is simplified.
     * @type {boolean}
     * @memberof ScopeProject
     */
    readonly simplified?: boolean;
    /**
     * 
     * @type {ProjectAvatarUrls}
     * @memberof ScopeProject
     */
    avatarUrls?: ProjectAvatarUrls;
    /**
     * 
     * @type {ProjectDetailsProjectCategory}
     * @memberof ScopeProject
     */
    projectCategory?: ProjectDetailsProjectCategory;
}


/**
 * @export
 */
export const ScopeProjectProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type ScopeProjectProjectTypeKeyEnum = typeof ScopeProjectProjectTypeKeyEnum[keyof typeof ScopeProjectProjectTypeKeyEnum];

/**
 * A screen.
 * @export
 * @interface Screen
 */
export interface Screen {
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
     * The description of the screen.
     * @type {string}
     * @memberof Screen
     */
    readonly description?: string;
    /**
     * 
     * @type {ScreenScope}
     * @memberof Screen
     */
    scope?: ScreenScope;
}
/**
 * Details of a screen.
 * @export
 * @interface ScreenDetails
 */
export interface ScreenDetails {
    /**
     * The name of the screen. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenDetails
     */
    name: string;
    /**
     * The description of the screen. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenDetails
     */
    description?: string;
}
/**
 * A screen scheme.
 * @export
 * @interface ScreenScheme
 */
export interface ScreenScheme {
    /**
     * The ID of the screen scheme.
     * @type {number}
     * @memberof ScreenScheme
     */
    id?: number;
    /**
     * The name of the screen scheme.
     * @type {string}
     * @memberof ScreenScheme
     */
    name?: string;
    /**
     * The description of the screen scheme.
     * @type {string}
     * @memberof ScreenScheme
     */
    description?: string;
    /**
     * 
     * @type {ScreenSchemeScreens}
     * @memberof ScreenScheme
     */
    screens?: ScreenSchemeScreens;
    /**
     * 
     * @type {ScreenSchemeIssueTypeScreenSchemes}
     * @memberof ScreenScheme
     */
    issueTypeScreenSchemes?: ScreenSchemeIssueTypeScreenSchemes;
}
/**
 * Details of a screen scheme.
 * @export
 * @interface ScreenSchemeDetails
 */
export interface ScreenSchemeDetails {
    /**
     * The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenSchemeDetails
     */
    name: string;
    /**
     * The description of the screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenSchemeDetails
     */
    description?: string;
    /**
     * 
     * @type {ScreenSchemeDetailsScreens}
     * @memberof ScreenSchemeDetails
     */
    screens: ScreenSchemeDetailsScreens;
}
/**
 * The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
 * @export
 * @interface ScreenSchemeDetailsScreens
 */
export interface ScreenSchemeDetailsScreens {
    /**
     * The ID of the edit screen.
     * @type {number}
     * @memberof ScreenSchemeDetailsScreens
     */
    edit?: number;
    /**
     * The ID of the create screen.
     * @type {number}
     * @memberof ScreenSchemeDetailsScreens
     */
    create?: number;
    /**
     * The ID of the view screen.
     * @type {number}
     * @memberof ScreenSchemeDetailsScreens
     */
    view?: number;
    /**
     * The ID of the default screen. Required when creating a screen scheme.
     * @type {number}
     * @memberof ScreenSchemeDetailsScreens
     */
    _default?: number;
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
 * Details of the issue type screen schemes associated with the screen scheme.
 * @export
 * @interface ScreenSchemeIssueTypeScreenSchemes
 */
export interface ScreenSchemeIssueTypeScreenSchemes {
    /**
     * The URL of the page.
     * @type {string}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly self?: string;
    /**
     * If there is another page of results, the URL of the next page.
     * @type {string}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly nextPage?: string;
    /**
     * The maximum number of items that could be returned.
     * @type {number}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned.
     * @type {number}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly startAt?: number;
    /**
     * The number of items returned.
     * @type {number}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly total?: number;
    /**
     * Whether this is the last page.
     * @type {boolean}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly isLast?: boolean;
    /**
     * The list of items.
     * @type {Array<IssueTypeScreenScheme>}
     * @memberof ScreenSchemeIssueTypeScreenSchemes
     */
    readonly values?: Array<IssueTypeScreenScheme>;
}
/**
 * The IDs of the screens for the screen types of the screen scheme.
 * @export
 * @interface ScreenSchemeScreens
 */
export interface ScreenSchemeScreens {
    /**
     * The ID of the edit screen.
     * @type {number}
     * @memberof ScreenSchemeScreens
     */
    edit?: number;
    /**
     * The ID of the create screen.
     * @type {number}
     * @memberof ScreenSchemeScreens
     */
    create?: number;
    /**
     * The ID of the view screen.
     * @type {number}
     * @memberof ScreenSchemeScreens
     */
    view?: number;
    /**
     * The ID of the default screen. Required when creating a screen scheme.
     * @type {number}
     * @memberof ScreenSchemeScreens
     */
    _default?: number;
}
/**
 * The scope of the screen.
 * @export
 * @interface ScreenScope
 */
export interface ScreenScope {
    /**
     * The type of scope.
     * @type {string}
     * @memberof ScreenScope
     */
    readonly type?: ScreenScopeTypeEnum;
    /**
     * 
     * @type {ScopeProject}
     * @memberof ScreenScope
     */
    project?: ScopeProject;
}


/**
 * @export
 */
export const ScreenScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type ScreenScopeTypeEnum = typeof ScreenScopeTypeEnum[keyof typeof ScreenScopeTypeEnum];

/**
 * The IDs of the screens for the screen types of the screen scheme.
 * @export
 * @interface ScreenTypes
 */
export interface ScreenTypes {
    /**
     * The ID of the edit screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    edit?: number;
    /**
     * The ID of the create screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    create?: number;
    /**
     * The ID of the view screen.
     * @type {number}
     * @memberof ScreenTypes
     */
    view?: number;
    /**
     * The ID of the default screen. Required when creating a screen scheme.
     * @type {number}
     * @memberof ScreenTypes
     */
    _default?: number;
}
/**
 * A screen with tab details.
 * @export
 * @interface ScreenWithTab
 */
export interface ScreenWithTab {
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
     * The description of the screen.
     * @type {string}
     * @memberof ScreenWithTab
     */
    readonly description?: string;
    /**
     * 
     * @type {ScreenScope}
     * @memberof ScreenWithTab
     */
    scope?: ScreenScope;
    /**
     * 
     * @type {ScreenWithTabTab}
     * @memberof ScreenWithTab
     */
    tab?: ScreenWithTabTab;
}
/**
 * The tab for the screen.
 * @export
 * @interface ScreenWithTabTab
 */
export interface ScreenWithTabTab {
    /**
     * The ID of the screen tab.
     * @type {number}
     * @memberof ScreenWithTabTab
     */
    readonly id?: number;
    /**
     * The name of the screen tab. The maximum length is 255 characters.
     * @type {string}
     * @memberof ScreenWithTabTab
     */
    name: string;
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
 * Details of how to filter and list search auto complete information.
 * @export
 * @interface SearchAutoCompleteFilter
 */
export interface SearchAutoCompleteFilter {
    /**
     * List of project IDs used to filter the visible field details returned.
     * @type {Array<number>}
     * @memberof SearchAutoCompleteFilter
     */
    projectIds?: Array<number>;
    /**
     * Include collapsed fields for fields that have non-unique names.
     * @type {boolean}
     * @memberof SearchAutoCompleteFilter
     */
    includeCollapsedFields?: boolean;
}
/**
 * 
 * @export
 * @interface SearchRequestBean
 */
export interface SearchRequestBean {
    /**
     * A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.
     * @type {string}
     * @memberof SearchRequestBean
     */
    jql?: string;
    /**
     * The index of the first item to return in the page of results (page offset). The base index is `0`.
     * @type {number}
     * @memberof SearchRequestBean
     */
    startAt?: number;
    /**
     * The maximum number of items to return per page.
     * @type {number}
     * @memberof SearchRequestBean
     */
    maxResults?: number;
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
    /**
     * Use [expand](em>#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:
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
     * A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.
     * @type {Array<string>}
     * @memberof SearchRequestBean
     */
    properties?: Array<string>;
    /**
     * Reference fields by their key (rather than ID). The default is `false`.
     * @type {boolean}
     * @memberof SearchRequestBean
     */
    fieldsByKeys?: boolean;
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
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly startAt?: number;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly maxResults?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof SearchResults
     */
    readonly total?: number;
    /**
     * The list of issues found by the search.
     * @type {Array<IssueBean>}
     * @memberof SearchResults
     */
    readonly issues?: Array<IssueBean>;
    /**
     * Any warnings related to the JQL query.
     * @type {Array<string>}
     * @memberof SearchResults
     */
    readonly warningMessages?: Array<string>;
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
}
/**
 * Details of an issue level security item.
 * @export
 * @interface SecurityLevel
 */
export interface SecurityLevel {
    /**
     * The URL of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly self?: string;
    /**
     * The ID of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly id?: string;
    /**
     * The description of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly description?: string;
    /**
     * The name of the issue level security item.
     * @type {string}
     * @memberof SecurityLevel
     */
    readonly name?: string;
}
/**
 * Details about a security scheme.
 * @export
 * @interface SecurityScheme
 */
export interface SecurityScheme {
    /**
     * The URL of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly self?: string;
    /**
     * The ID of the issue security scheme.
     * @type {number}
     * @memberof SecurityScheme
     */
    readonly id?: number;
    /**
     * The name of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly name?: string;
    /**
     * The description of the issue security scheme.
     * @type {string}
     * @memberof SecurityScheme
     */
    readonly description?: string;
    /**
     * The ID of the default security level.
     * @type {number}
     * @memberof SecurityScheme
     */
    readonly defaultSecurityLevelId?: number;
    /**
     * 
     * @type {Array<SecurityLevel>}
     * @memberof SecurityScheme
     */
    levels?: Array<SecurityLevel>;
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
    /**
     * The type of server deployment. This is always returned as *Cloud*.
     * @type {string}
     * @memberof ServerInformation
     */
    deploymentType?: string;
    /**
     * The build number of the Jira version.
     * @type {number}
     * @memberof ServerInformation
     */
    buildNumber?: number;
    /**
     * The timestamp when the Jira version was built.
     * @type {string}
     * @memberof ServerInformation
     */
    buildDate?: string;
    /**
     * The time in Jira when this request was responded to.
     * @type {string}
     * @memberof ServerInformation
     */
    serverTime?: string;
    /**
     * The unique identifier of the Jira version.
     * @type {string}
     * @memberof ServerInformation
     */
    scmInfo?: string;
    /**
     * The name of the Jira instance.
     * @type {string}
     * @memberof ServerInformation
     */
    serverTitle?: string;
    /**
     * Jira instance health check results. Deprecated and no longer returned.
     * @type {Array<HealthCheckResult>}
     * @memberof ServerInformation
     */
    healthChecks?: Array<HealthCheckResult>;
}
/**
 * 
 * @export
 * @interface ServiceManagementNavigationInfo
 */
export interface ServiceManagementNavigationInfo {
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
    /**
     * 
     * @type {string}
     * @memberof ServiceManagementNavigationInfo
     */
    queueCategory?: string;
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
     * The unique identifier of the share permission.
     * @type {number}
     * @memberof SharePermission
     */
    readonly id?: number;
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
     * 
     * @type {SharePermissionProject}
     * @memberof SharePermission
     */
    project?: SharePermissionProject;
    /**
     * 
     * @type {SharePermissionRole}
     * @memberof SharePermission
     */
    role?: SharePermissionRole;
    /**
     * 
     * @type {SharePermissionGroup}
     * @memberof SharePermission
     */
    group?: SharePermissionGroup;
    /**
     * 
     * @type {SharePermissionUser}
     * @memberof SharePermission
     */
    user?: SharePermissionUser;
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
 * The group that the filter is shared with. For a request, specify the `groupId` or `name` property for the group. As a group's name can change, use of `groupId` is recommended.
 * @export
 * @interface SharePermissionGroup
 */
export interface SharePermissionGroup {
    /**
     * The name of group.
     * @type {string}
     * @memberof SharePermissionGroup
     */
    name?: string;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
     * @type {string}
     * @memberof SharePermissionGroup
     */
    groupId?: string | null;
    /**
     * The URL for these group details.
     * @type {string}
     * @memberof SharePermissionGroup
     */
    readonly self?: string;
}
/**
 * 
 * @export
 * @interface SharePermissionInputBean
 */
export interface SharePermissionInputBean {
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
    /**
     * The ID of the project to share the filter with. Set `type` to `project`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    projectId?: string;
    /**
     * The name of the group to share the filter with. Set `type` to `group`. Please note that the name of a group is mutable, to reliably identify a group use `groupId`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    groupname?: string;
    /**
     * The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    projectRoleId?: string;
    /**
     * The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    accountId?: string;
    /**
     * The rights for the share permission.
     * @type {number}
     * @memberof SharePermissionInputBean
     */
    rights?: number;
    /**
     * The ID of the group, which uniquely identifies the group across all Atlassian products.For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. Cannot be provided with `groupname`.
     * @type {string}
     * @memberof SharePermissionInputBean
     */
    groupId?: string;
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
 * The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-3-project-projectIdOrKey-get) but it contains a subset of the properties, which are: `self`, `id`, `key`, `assigneeType`, `name`, `roles`, `avatarUrls`, `projectType`, `simplified`.  
 * For a request, specify the `id` for the project.
 * @export
 * @interface SharePermissionProject
 */
export interface SharePermissionProject {
    /**
     * Expand options that include additional project details in the response.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly expand?: string;
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly self?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    id?: string;
    /**
     * The key of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly key?: string;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly description?: string;
    /**
     * 
     * @type {ProjectLead}
     * @memberof SharePermissionProject
     */
    lead?: ProjectLead;
    /**
     * List of the components contained in the project.
     * @type {Array<ProjectComponent>}
     * @memberof SharePermissionProject
     */
    readonly components?: Array<ProjectComponent>;
    /**
     * List of the issue types available in the project.
     * @type {Array<IssueTypeDetails>}
     * @memberof SharePermissionProject
     */
    readonly issueTypes?: Array<IssueTypeDetails>;
    /**
     * A link to information about this project, such as project documentation.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly url?: string;
    /**
     * An email address associated with the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    email?: string;
    /**
     * The default assignee when creating issues for this project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly assigneeType?: SharePermissionProjectAssigneeTypeEnum;
    /**
     * The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
     * @type {Array<Version>}
     * @memberof SharePermissionProject
     */
    readonly versions?: Array<Version>;
    /**
     * The name of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly name?: string;
    /**
     * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
     * @type {{ [key: string]: string; }}
     * @memberof SharePermissionProject
     */
    readonly roles?: { [key: string]: string; };
    /**
     * 
     * @type {ProjectAvatarUrls}
     * @memberof SharePermissionProject
     */
    avatarUrls?: ProjectAvatarUrls;
    /**
     * 
     * @type {ProjectProjectCategory}
     * @memberof SharePermissionProject
     */
    projectCategory?: ProjectProjectCategory;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly projectTypeKey?: SharePermissionProjectProjectTypeKeyEnum;
    /**
     * Whether the project is simplified.
     * @type {boolean}
     * @memberof SharePermissionProject
     */
    readonly simplified?: boolean;
    /**
     * The type of the project.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly style?: SharePermissionProjectStyleEnum;
    /**
     * Whether the project is selected as a favorite.
     * @type {boolean}
     * @memberof SharePermissionProject
     */
    favourite?: boolean;
    /**
     * Whether the project is private.
     * @type {boolean}
     * @memberof SharePermissionProject
     */
    readonly isPrivate?: boolean;
    /**
     * 
     * @type {ProjectIssueTypeHierarchy}
     * @memberof SharePermissionProject
     */
    issueTypeHierarchy?: ProjectIssueTypeHierarchy;
    /**
     * 
     * @type {ProjectPermissions}
     * @memberof SharePermissionProject
     */
    permissions?: ProjectPermissions;
    /**
     * Map of project properties
     * @type {{ [key: string]: any; }}
     * @memberof SharePermissionProject
     */
    readonly properties?: { [key: string]: any; };
    /**
     * Unique ID for next-gen projects.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly uuid?: string;
    /**
     * 
     * @type {ProjectInsight}
     * @memberof SharePermissionProject
     */
    insight?: ProjectInsight;
    /**
     * Whether the project is marked as deleted.
     * @type {boolean}
     * @memberof SharePermissionProject
     */
    readonly deleted?: boolean;
    /**
     * The date when the project is deleted permanently.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly retentionTillDate?: string;
    /**
     * The date when the project was marked as deleted.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly deletedDate?: string;
    /**
     * 
     * @type {ProjectDeletedBy}
     * @memberof SharePermissionProject
     */
    deletedBy?: ProjectDeletedBy;
    /**
     * Whether the project is archived.
     * @type {boolean}
     * @memberof SharePermissionProject
     */
    readonly archived?: boolean;
    /**
     * The date when the project was archived.
     * @type {string}
     * @memberof SharePermissionProject
     */
    readonly archivedDate?: string;
    /**
     * 
     * @type {ProjectArchivedBy}
     * @memberof SharePermissionProject
     */
    archivedBy?: ProjectArchivedBy;
    /**
     * 
     * @type {ProjectLandingPageInfo}
     * @memberof SharePermissionProject
     */
    landingPageInfo?: ProjectLandingPageInfo;
}


/**
 * @export
 */
export const SharePermissionProjectAssigneeTypeEnum = {
    ProjectLead: 'PROJECT_LEAD',
    Unassigned: 'UNASSIGNED'
} as const;
export type SharePermissionProjectAssigneeTypeEnum = typeof SharePermissionProjectAssigneeTypeEnum[keyof typeof SharePermissionProjectAssigneeTypeEnum];

/**
 * @export
 */
export const SharePermissionProjectProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type SharePermissionProjectProjectTypeKeyEnum = typeof SharePermissionProjectProjectTypeKeyEnum[keyof typeof SharePermissionProjectProjectTypeKeyEnum];

/**
 * @export
 */
export const SharePermissionProjectStyleEnum = {
    Classic: 'classic',
    NextGen: 'next-gen'
} as const;
export type SharePermissionProjectStyleEnum = typeof SharePermissionProjectStyleEnum[keyof typeof SharePermissionProjectStyleEnum];

/**
 * The project role that the filter is shared with.  
 * For a request, specify the `id` for the role. You must also specify the `project` object and `id` for the project that the role is in.
 * @export
 * @interface SharePermissionRole
 */
export interface SharePermissionRole {
    /**
     * The URL the project role details.
     * @type {string}
     * @memberof SharePermissionRole
     */
    readonly self?: string;
    /**
     * The name of the project role.
     * @type {string}
     * @memberof SharePermissionRole
     */
    name?: string;
    /**
     * The ID of the project role.
     * @type {number}
     * @memberof SharePermissionRole
     */
    readonly id?: number;
    /**
     * The description of the project role.
     * @type {string}
     * @memberof SharePermissionRole
     */
    readonly description?: string;
    /**
     * The list of users who act in this role.
     * @type {Array<RoleActor>}
     * @memberof SharePermissionRole
     */
    readonly actors?: Array<RoleActor>;
    /**
     * 
     * @type {ProjectRoleScope}
     * @memberof SharePermissionRole
     */
    scope?: ProjectRoleScope;
    /**
     * The translated name of the project role.
     * @type {string}
     * @memberof SharePermissionRole
     */
    translatedName?: string;
    /**
     * Whether the calling user is part of this role.
     * @type {boolean}
     * @memberof SharePermissionRole
     */
    currentUserRole?: boolean;
    /**
     * Whether the roles are configurable for this project.
     * @type {boolean}
     * @memberof SharePermissionRole
     */
    readonly roleConfigurable?: boolean;
    /**
     * Whether this role is the admin role for the project.
     * @type {boolean}
     * @memberof SharePermissionRole
     */
    readonly admin?: boolean;
    /**
     * Whether this role is the default role for the project
     * @type {boolean}
     * @memberof SharePermissionRole
     */
    readonly _default?: boolean;
}
/**
 * The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.
 * @export
 * @interface SharePermissionUser
 */
export interface SharePermissionUser {
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The key of the user.
     * @type {string}
     * @memberof SharePermissionUser
     */
    key?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof SharePermissionUser
     */
    self?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The username of the user.
     * @type {string}
     * @memberof SharePermissionUser
     */
    name?: string;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof SharePermissionUser
     */
    displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof SharePermissionUser
     */
    active?: boolean;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof SharePermissionUser
     */
    accountId?: string;
    /**
     * 
     * @type {UserBeanAvatarUrls}
     * @memberof SharePermissionUser
     */
    avatarUrls?: UserBeanAvatarUrls;
}
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
     * The list of errors by parameter returned by the operation. For example,"projectKey": "Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters."
     * @type {{ [key: string]: string; }}
     * @memberof SimpleErrorCollection
     */
    errors?: { [key: string]: string; };
    /**
     * The list of error messages produced by this operation. For example, "input parameter 'key' must be provided"
     * @type {Array<string>}
     * @memberof SimpleErrorCollection
     */
    errorMessages?: Array<string>;
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
    id?: string;
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
    iconClass?: string;
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
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleLink
     */
    href?: string;
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
     * @type {number}
     * @memberof SimpleListWrapperApplicationRole
     */
    size?: number;
    /**
     * 
     * @type {Array<ApplicationRole>}
     * @memberof SimpleListWrapperApplicationRole
     */
    items?: Array<ApplicationRole>;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperApplicationRole
     */
    pagingCallback?: object;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperApplicationRole
     */
    callback?: object;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperApplicationRole
     */
    maxResults?: number;
}
/**
 * 
 * @export
 * @interface SimpleListWrapperGroupName
 */
export interface SimpleListWrapperGroupName {
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperGroupName
     */
    size?: number;
    /**
     * 
     * @type {Array<GroupName>}
     * @memberof SimpleListWrapperGroupName
     */
    items?: Array<GroupName>;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperGroupName
     */
    pagingCallback?: object;
    /**
     * 
     * @type {object}
     * @memberof SimpleListWrapperGroupName
     */
    callback?: object;
    /**
     * 
     * @type {number}
     * @memberof SimpleListWrapperGroupName
     */
    maxResults?: number;
}
/**
 * 
 * @export
 * @interface SimplifiedHierarchyLevel
 */
export interface SimplifiedHierarchyLevel {
    /**
     * The ID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    id?: number;
    /**
     * The name of this hierarchy level.
     * @type {string}
     * @memberof SimplifiedHierarchyLevel
     */
    name?: string;
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
     * The ID of the project configuration. This property is deprecated, see [Change oticen: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/).
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    projectConfigurationId?: number;
    /**
     * The level of this item in the hierarchy.
     * @type {number}
     * @memberof SimplifiedHierarchyLevel
     */
    level?: number;
    /**
     * The issue types available in this hierarchy level.
     * @type {Array<number>}
     * @memberof SimplifiedHierarchyLevel
     */
    issueTypeIds?: Array<number>;
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
     * @type {number}
     * @memberof SoftwareNavigationInfo
     */
    totalBoardsInProject?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SoftwareNavigationInfo
     */
    simpleBoard?: boolean;
}
/**
 * The status of the item.
 * @export
 * @interface Status
 */
export interface Status {
    [key: string]: any | any;
    /**
     * Whether the item is resolved. If set to "true", the link to the issue is displayed in a strikethrough font, otherwise the link displays in normal font.
     * @type {boolean}
     * @memberof Status
     */
    resolved?: boolean;
    /**
     * 
     * @type {StatusIcon}
     * @memberof Status
     */
    icon?: StatusIcon;
}
/**
 * A status category.
 * @export
 * @interface StatusCategory
 */
export interface StatusCategory {
    [key: string]: any | any;
    /**
     * The URL of the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly self?: string;
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
     * The name of the color used to represent the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly colorName?: string;
    /**
     * The name of the status category.
     * @type {string}
     * @memberof StatusCategory
     */
    readonly name?: string;
}
/**
 * Details of the status being created.
 * @export
 * @interface StatusCreate
 */
export interface StatusCreate {
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
    /**
     * The description of the status.
     * @type {string}
     * @memberof StatusCreate
     */
    description?: string;
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
     * Details of the statuses being created.
     * @type {Array<StatusCreate>}
     * @memberof StatusCreateRequest
     */
    statuses: Array<StatusCreate>;
    /**
     * 
     * @type {StatusScope}
     * @memberof StatusCreateRequest
     */
    scope: StatusScope;
}
/**
 * A status.
 * @export
 * @interface StatusDetails
 */
export interface StatusDetails {
    [key: string]: any | any;
    /**
     * The URL of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly self?: string;
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
     * The name of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly name?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly id?: string;
    /**
     * 
     * @type {StatusDetailsStatusCategory}
     * @memberof StatusDetails
     */
    statusCategory?: StatusDetailsStatusCategory;
}
/**
 * The category assigned to the status.
 * @export
 * @interface StatusDetailsStatusCategory
 */
export interface StatusDetailsStatusCategory {
    /**
     * The URL of the status category.
     * @type {string}
     * @memberof StatusDetailsStatusCategory
     */
    readonly self?: string;
    /**
     * The ID of the status category.
     * @type {number}
     * @memberof StatusDetailsStatusCategory
     */
    readonly id?: number;
    /**
     * The key of the status category.
     * @type {string}
     * @memberof StatusDetailsStatusCategory
     */
    readonly key?: string;
    /**
     * The name of the color used to represent the status category.
     * @type {string}
     * @memberof StatusDetailsStatusCategory
     */
    readonly colorName?: string;
    /**
     * The name of the status category.
     * @type {string}
     * @memberof StatusDetailsStatusCategory
     */
    readonly name?: string;
}
/**
 * Details of the icon representing the status. If not provided, no status icon displays in Jira.
 * @export
 * @interface StatusIcon
 */
export interface StatusIcon {
    /**
     * The URL of an icon that displays at 16x16 pixel in Jira.
     * @type {string}
     * @memberof StatusIcon
     */
    url16x16?: string;
    /**
     * The title of the icon. This is used as follows:
     * 
     *  *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn't display a tooltip in Jira.
     *  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link's icon. The tooltip takes the format "\[application name\] icon title". Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as "Web Link".
     * @type {string}
     * @memberof StatusIcon
     */
    title?: string;
    /**
     * The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable.
     * @type {string}
     * @memberof StatusIcon
     */
    link?: string;
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
     * The ID of the status.
     * @type {string}
     * @memberof StatusMapping
     */
    statusId: string;
    /**
     * The ID of the new status.
     * @type {string}
     * @memberof StatusMapping
     */
    newStatusId: string;
}
/**
 * The scope of the status.
 * @export
 * @interface StatusScope
 */
export interface StatusScope {
    /**
     * The scope of the status. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
     * @type {string}
     * @memberof StatusScope
     */
    type: StatusScopeTypeEnum;
    /**
     * 
     * @type {ProjectId}
     * @memberof StatusScope
     */
    project?: ProjectId;
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
    /**
     * The description of the status.
     * @type {string}
     * @memberof StatusUpdate
     */
    description?: string;
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
    statuses?: Array<StatusUpdate>;
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
     * The URL of the issue type's avatar.
     * @type {string}
     * @memberof SuggestedIssue
     */
    readonly img?: string;
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
 * Details about a task.
 * @export
 * @interface TaskProgressBeanObject
 */
export interface TaskProgressBeanObject {
    /**
     * The URL of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    self: string;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    id: string;
    /**
     * The description of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    description?: string;
    /**
     * The status of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    status: TaskProgressBeanObjectStatusEnum;
    /**
     * Information about the progress of the task.
     * @type {string}
     * @memberof TaskProgressBeanObject
     */
    message?: string;
    /**
     * The result of the task execution.
     * @type {any}
     * @memberof TaskProgressBeanObject
     */
    result?: any | null;
    /**
     * The ID of the user who submitted the task.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    submittedBy: number;
    /**
     * The progress of the task, as a percentage complete.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    progress: number;
    /**
     * The execution time of the task, in milliseconds.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    elapsedRuntime: number;
    /**
     * A timestamp recording when the task was submitted.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    submitted: number;
    /**
     * A timestamp recording when the task was started.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    started?: number;
    /**
     * A timestamp recording when the task was finished.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    finished?: number;
    /**
     * A timestamp recording when the task progress was last updated.
     * @type {number}
     * @memberof TaskProgressBeanObject
     */
    lastUpdate: number;
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
     * The URL of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    self: string;
    /**
     * The ID of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    id: string;
    /**
     * The description of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    description?: string;
    /**
     * The status of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    status: TaskProgressBeanRemoveOptionFromIssuesResultStatusEnum;
    /**
     * Information about the progress of the task.
     * @type {string}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    message?: string;
    /**
     * 
     * @type {TaskProgressBeanRemoveOptionFromIssuesResultResult}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    result?: TaskProgressBeanRemoveOptionFromIssuesResultResult;
    /**
     * The ID of the user who submitted the task.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    submittedBy: number;
    /**
     * The progress of the task, as a percentage complete.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    progress: number;
    /**
     * The execution time of the task, in milliseconds.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    elapsedRuntime: number;
    /**
     * A timestamp recording when the task was submitted.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    submitted: number;
    /**
     * A timestamp recording when the task was started.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    started?: number;
    /**
     * A timestamp recording when the task was finished.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    finished?: number;
    /**
     * A timestamp recording when the task progress was last updated.
     * @type {number}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResult
     */
    lastUpdate: number;
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
 * The result of the task execution.
 * @export
 * @interface TaskProgressBeanRemoveOptionFromIssuesResultResult
 */
export interface TaskProgressBeanRemoveOptionFromIssuesResultResult {
    /**
     * The IDs of the modified issues.
     * @type {Array<number>}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResultResult
     */
    modifiedIssues?: Array<number>;
    /**
     * The IDs of the unchanged issues, those issues where errors prevent modification.
     * @type {Array<number>}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResultResult
     */
    unmodifiedIssues?: Array<number>;
    /**
     * 
     * @type {RemoveOptionFromIssuesResultErrors}
     * @memberof TaskProgressBeanRemoveOptionFromIssuesResultResult
     */
    errors?: RemoveOptionFromIssuesResultErrors;
}
/**
 * Details of the time tracking configuration.
 * @export
 * @interface TimeTrackingConfiguration
 */
export interface TimeTrackingConfiguration {
    /**
     * The number of hours in a working day.
     * @type {number}
     * @memberof TimeTrackingConfiguration
     */
    workingHoursPerDay: number;
    /**
     * The number of days in a working week.
     * @type {number}
     * @memberof TimeTrackingConfiguration
     */
    workingDaysPerWeek: number;
    /**
     * The format that will appear on an issue's *Time Spent* field.
     * @type {string}
     * @memberof TimeTrackingConfiguration
     */
    timeFormat: TimeTrackingConfigurationTimeFormatEnum;
    /**
     * The default unit of time applied to logged time.
     * @type {string}
     * @memberof TimeTrackingConfiguration
     */
    defaultUnit: TimeTrackingConfigurationDefaultUnitEnum;
}


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
     * The remaining estimate of time needed for this issue in readable format.
     * @type {string}
     * @memberof TimeTrackingDetails
     */
    readonly remainingEstimate?: string;
    /**
     * Time worked on this issue in readable format.
     * @type {string}
     * @memberof TimeTrackingDetails
     */
    readonly timeSpent?: string;
    /**
     * The original estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof TimeTrackingDetails
     */
    readonly originalEstimateSeconds?: number;
    /**
     * The remaining estimate of time needed for this issue in seconds.
     * @type {number}
     * @memberof TimeTrackingDetails
     */
    readonly remainingEstimateSeconds?: number;
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
    /**
     * 
     * @type {TransitionScreenDetails}
     * @memberof Transition
     */
    screen?: TransitionScreenDetails;
    /**
     * 
     * @type {WorkflowRules}
     * @memberof Transition
     */
    rules?: WorkflowRules;
    /**
     * The properties of the transition.
     * @type {{ [key: string]: any; }}
     * @memberof Transition
     */
    properties?: { [key: string]: any; };
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
     * The project ID of the context.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    projectId: string;
    /**
     * The issue type ID of the context.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    issueTypeId: string;
    /**
     * The view type of the context. Only `GIC` (Global Issue Create) is supported.
     * @type {string}
     * @memberof UiModificationContextDetails
     */
    viewType: string;
    /**
     * Whether a context is available. For example, when a project is deleted the context becomes unavailable.
     * @type {boolean}
     * @memberof UiModificationContextDetails
     */
    readonly isAvailable?: boolean;
}
/**
 * The details of a UI modification.
 * @export
 * @interface UiModificationDetails
 */
export interface UiModificationDetails {
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
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly description?: string;
    /**
     * The URL of the UI modification.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly self: string;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof UiModificationDetails
     */
    readonly data?: string;
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000.
     * @type {Array<UiModificationContextDetails>}
     * @memberof UiModificationDetails
     */
    readonly contexts?: Array<UiModificationContextDetails>;
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
     * The name of the custom field. It doesn't have to be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateCustomFieldDetails
     */
    name?: string;
    /**
     * The description of the custom field. The maximum length is 40000 characters.
     * @type {string}
     * @memberof UpdateCustomFieldDetails
     */
    description?: string;
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
     * The name of the field configuration scheme. The name must be unique.
     * @type {string}
     * @memberof UpdateFieldConfigurationSchemeDetails
     */
    name: string;
    /**
     * The description of the field configuration scheme.
     * @type {string}
     * @memberof UpdateFieldConfigurationSchemeDetails
     */
    description?: string;
}
/**
 * Details of an issue priority.
 * @export
 * @interface UpdatePriorityDetails
 */
export interface UpdatePriorityDetails {
    [key: string]: any | any;
    /**
     * The name of the priority. Must be unique.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    name?: string;
    /**
     * The description of the priority.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    description?: string;
    /**
     * The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    iconUrl?: UpdatePriorityDetailsIconUrlEnum;
    /**
     * The status color of the priority in 3-digit or 6-digit hexadecimal format.
     * @type {string}
     * @memberof UpdatePriorityDetails
     */
    statusColor?: string;
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
    TrivialPng: '/images/icons/priorities/trivial.png'
} as const;
export type UpdatePriorityDetailsIconUrlEnum = typeof UpdatePriorityDetailsIconUrlEnum[keyof typeof UpdatePriorityDetailsIconUrlEnum];

/**
 * Details about the project.
 * @export
 * @interface UpdateProjectDetails
 */
export interface UpdateProjectDetails {
    /**
     * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    key?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    name?: string;
    /**
     * A brief description of the project.
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    description?: string;
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
     * A link to information about this project, such as project documentation
     * @type {string}
     * @memberof UpdateProjectDetails
     */
    url?: string;
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
     * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    issueSecurityScheme?: number;
    /**
     * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    permissionScheme?: number;
    /**
     * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    notificationScheme?: number;
    /**
     * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. To remove the project category from the project, set the value to `-1.`
     * @type {number}
     * @memberof UpdateProjectDetails
     */
    categoryId?: number;
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
 * Details of an issue resolution.
 * @export
 * @interface UpdateResolutionDetails
 */
export interface UpdateResolutionDetails {
    [key: string]: any | any;
    /**
     * The name of the resolution. Must be unique.
     * @type {string}
     * @memberof UpdateResolutionDetails
     */
    name: string;
    /**
     * The description of the resolution.
     * @type {string}
     * @memberof UpdateResolutionDetails
     */
    description?: string;
}
/**
 * Details of a screen.
 * @export
 * @interface UpdateScreenDetails
 */
export interface UpdateScreenDetails {
    /**
     * The name of the screen. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenDetails
     */
    name?: string;
    /**
     * The description of the screen. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenDetails
     */
    description?: string;
}
/**
 * Details of a screen scheme.
 * @export
 * @interface UpdateScreenSchemeDetails
 */
export interface UpdateScreenSchemeDetails {
    /**
     * The name of the screen scheme. The name must be unique. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenSchemeDetails
     */
    name?: string;
    /**
     * The description of the screen scheme. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateScreenSchemeDetails
     */
    description?: string;
    /**
     * 
     * @type {UpdateScreenSchemeDetailsScreens}
     * @memberof UpdateScreenSchemeDetails
     */
    screens?: UpdateScreenSchemeDetailsScreens;
}
/**
 * The IDs of the screens for the screen types of the screen scheme. Only screens used in classic projects are accepted.
 * @export
 * @interface UpdateScreenSchemeDetailsScreens
 */
export interface UpdateScreenSchemeDetailsScreens {
    /**
     * The ID of the edit screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenSchemeDetailsScreens
     */
    edit?: string;
    /**
     * The ID of the create screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenSchemeDetailsScreens
     */
    create?: string;
    /**
     * The ID of the view screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenSchemeDetailsScreens
     */
    view?: string;
    /**
     * The ID of the default screen. When specified, must include a screen ID as a default screen is required.
     * @type {string}
     * @memberof UpdateScreenSchemeDetailsScreens
     */
    _default?: string;
}
/**
 * The IDs of the screens for the screen types of the screen scheme.
 * @export
 * @interface UpdateScreenTypes
 */
export interface UpdateScreenTypes {
    /**
     * The ID of the edit screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    edit?: string;
    /**
     * The ID of the create screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    create?: string;
    /**
     * The ID of the view screen. To remove the screen association, pass a null.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    view?: string;
    /**
     * The ID of the default screen. When specified, must include a screen ID as a default screen is required.
     * @type {string}
     * @memberof UpdateScreenTypes
     */
    _default?: string;
}
/**
 * The details of a UI modification.
 * @export
 * @interface UpdateUiModificationDetails
 */
export interface UpdateUiModificationDetails {
    /**
     * The name of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    name?: string;
    /**
     * The description of the UI modification. The maximum length is 255 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    description?: string;
    /**
     * The data of the UI modification. The maximum size of the data is 50000 characters.
     * @type {string}
     * @memberof UpdateUiModificationDetails
     */
    data?: string;
    /**
     * List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts.
     * @type {Array<UiModificationContextDetails>}
     * @memberof UpdateUiModificationDetails
     */
    contexts?: Array<UiModificationContextDetails>;
}
/**
 * 
 * @export
 * @interface UpdateUserToGroupBean
 */
export interface UpdateUserToGroupBean {
    [key: string]: any | any;
    /**
     * This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UpdateUserToGroupBean
     */
    name?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UpdateUserToGroupBean
     */
    accountId?: string;
}
/**
 * A project category.
 * @export
 * @interface UpdatedProjectCategory
 */
export interface UpdatedProjectCategory {
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly self?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly id?: string;
    /**
     * The name of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly description?: string;
    /**
     * The description of the project category.
     * @type {string}
     * @memberof UpdatedProjectCategory
     */
    readonly name?: string;
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
     * The URL of the user.
     * @type {string}
     * @memberof User
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    key?: string;
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
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof User
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof User
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof User
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof User
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof User
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof User
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof User
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof User
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof User
     */
    readonly expand?: string;
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
 * The application roles the user is assigned to.
 * @export
 * @interface UserApplicationRoles
 */
export interface UserApplicationRoles {
    /**
     * 
     * @type {number}
     * @memberof UserApplicationRoles
     */
    size?: number;
    /**
     * 
     * @type {Array<ApplicationRole>}
     * @memberof UserApplicationRoles
     */
    items?: Array<ApplicationRole>;
    /**
     * 
     * @type {object}
     * @memberof UserApplicationRoles
     */
    pagingCallback?: object;
    /**
     * 
     * @type {object}
     * @memberof UserApplicationRoles
     */
    callback?: object;
    /**
     * 
     * @type {number}
     * @memberof UserApplicationRoles
     */
    maxResults?: number;
}
/**
 * The avatars of the user.
 * @export
 * @interface UserAvatarUrls
 */
export interface UserAvatarUrls {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof UserAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof UserAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof UserAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof UserAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * 
 * @export
 * @interface UserBean
 */
export interface UserBean {
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The key of the user.
     * @type {string}
     * @memberof UserBean
     */
    key?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof UserBean
     */
    self?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The username of the user.
     * @type {string}
     * @memberof UserBean
     */
    name?: string;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof UserBean
     */
    displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof UserBean
     */
    active?: boolean;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserBean
     */
    accountId?: string;
    /**
     * 
     * @type {UserBeanAvatarUrls}
     * @memberof UserBean
     */
    avatarUrls?: UserBeanAvatarUrls;
}
/**
 * The avatars of the user.
 * @export
 * @interface UserBeanAvatarUrls
 */
export interface UserBeanAvatarUrls {
    /**
     * The URL of the user's 32x32 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the user's 16x16 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the user's 48x48 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["48x48"]?: string;
    /**
     * The URL of the user's 24x24 pixel avatar.
     * @type {string}
     * @memberof UserBeanAvatarUrls
     */
    ["24x24"]?: string;
}
/**
 * A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.
 * @export
 * @interface UserContextVariable
 */
export interface UserContextVariable {
    /**
     * Type of custom context variable.
     * @type {string}
     * @memberof UserContextVariable
     */
    type: string;
    /**
     * The account ID of the user.
     * @type {string}
     * @memberof UserContextVariable
     */
    accountId: string;
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
     * The URL of the user.
     * @type {string}
     * @memberof UserDetails
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDetails
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserDetails
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof UserDetails
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDetails
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof UserDetails
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof UserDetails
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof UserDetails
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof UserDetails
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof UserDetails
     */
    readonly accountType?: string;
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
    groups?: string[];
    /**
     * Roles that autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 roles can be provided.
     * @type {Set<number>}
     * @memberof UserFilter
     */
    roleIds?: number[];
}
/**
 * The groups that the user belongs to.
 * @export
 * @interface UserGroups
 */
export interface UserGroups {
    /**
     * 
     * @type {number}
     * @memberof UserGroups
     */
    size?: number;
    /**
     * 
     * @type {Array<GroupName>}
     * @memberof UserGroups
     */
    items?: Array<GroupName>;
    /**
     * 
     * @type {object}
     * @memberof UserGroups
     */
    pagingCallback?: object;
    /**
     * 
     * @type {object}
     * @memberof UserGroups
     */
    callback?: object;
    /**
     * 
     * @type {number}
     * @memberof UserGroups
     */
    maxResults?: number;
}
/**
 * List of user account IDs.
 * @export
 * @interface UserKey
 */
export interface UserKey {
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserKey
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import.
     * @type {string}
     * @memberof UserKey
     */
    accountId?: string;
}
/**
 * A paginated list of users sharing the filter. This includes users that are members of the groups or can browse the projects that the filter is shared with.
 * @export
 * @interface UserList
 */
export interface UserList {
    /**
     * The number of items on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly size?: number;
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
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly startIndex?: number;
    /**
     * The index of the last item returned on the page.
     * @type {number}
     * @memberof UserList
     */
    readonly endIndex?: number;
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
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof UserMigrationBean
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserMigrationBean
     */
    accountId?: string;
}
/**
 * Details of a permission and its availability to a user.
 * @export
 * @interface UserPermission
 */
export interface UserPermission {
    [key: string]: any | any;
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
     * Indicate whether the permission key is deprecated. Note that deprecated keys cannot be used in the `permissions parameter of Get my permissions. Deprecated keys are not returned by Get all permissions.`
     * @type {boolean}
     * @memberof UserPermission
     */
    deprecatedKey?: boolean;
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
     * This property is no longer available . See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserPickerUser
     */
    name?: string;
    /**
     * This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof UserPickerUser
     */
    key?: string;
    /**
     * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
     * @type {string}
     * @memberof UserPickerUser
     */
    html?: string;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof UserPickerUser
     */
    displayName?: string;
    /**
     * The avatar URL of the user.
     * @type {string}
     * @memberof UserPickerUser
     */
    avatarUrl?: string;
}
/**
 * An operand that is a user-provided value.
 * @export
 * @interface ValueOperand
 */
export interface ValueOperand {
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
     * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
     * 
     *  *  `operations` Returns the list of operations available for this version.
     *  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
     * 
     * Optional for create and update.
     * @type {string}
     * @memberof Version
     */
    expand?: string;
    /**
     * The URL of the version.
     * @type {string}
     * @memberof Version
     */
    readonly self?: string;
    /**
     * The ID of the version.
     * @type {string}
     * @memberof Version
     */
    readonly id?: string;
    /**
     * The description of the version. Optional when creating or updating a version.
     * @type {string}
     * @memberof Version
     */
    description?: string;
    /**
     * The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
     * @type {string}
     * @memberof Version
     */
    name?: string;
    /**
     * Indicates that the version is archived. Optional when creating or updating a version.
     * @type {boolean}
     * @memberof Version
     */
    archived?: boolean;
    /**
     * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
     * @type {boolean}
     * @memberof Version
     */
    released?: boolean;
    /**
     * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
     * @type {string}
     * @memberof Version
     */
    startDate?: string;
    /**
     * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
     * @type {string}
     * @memberof Version
     */
    releaseDate?: string;
    /**
     * Indicates that the version is overdue.
     * @type {boolean}
     * @memberof Version
     */
    readonly overdue?: boolean;
    /**
     * The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.
     * @type {string}
     * @memberof Version
     */
    readonly userStartDate?: string;
    /**
     * The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
     * @type {string}
     * @memberof Version
     */
    readonly userReleaseDate?: string;
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
     * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
     * @type {string}
     * @memberof Version
     */
    moveUnfixedIssuesTo?: string;
    /**
     * If the expand option `operations` is used, returns the list of operations available for this version.
     * @type {Array<SimpleLink>}
     * @memberof Version
     */
    readonly operations?: Array<SimpleLink>;
    /**
     * 
     * @type {VersionIssuesStatusForFixVersion}
     * @memberof Version
     */
    issuesStatusForFixVersion?: VersionIssuesStatusForFixVersion;
}
/**
 * Various counts of issues within a version.
 * @export
 * @interface VersionIssueCounts
 */
export interface VersionIssueCounts {
    /**
     * The URL of these count details.
     * @type {string}
     * @memberof VersionIssueCounts
     */
    readonly self?: string;
    /**
     * Count of issues where the `fixVersion` is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issuesFixedCount?: number;
    /**
     * Count of issues where the `affectedVersion` is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issuesAffectedCount?: number;
    /**
     * Count of issues where a version custom field is set to the version.
     * @type {number}
     * @memberof VersionIssueCounts
     */
    readonly issueCountWithCustomFieldsShowingVersion?: number;
    /**
     * List of custom fields using the version.
     * @type {Array<VersionUsageInCustomField>}
     * @memberof VersionIssueCounts
     */
    readonly customFieldUsage?: Array<VersionUsageInCustomField>;
}
/**
 * Counts of the number of issues in various statuses.
 * @export
 * @interface VersionIssuesStatus
 */
export interface VersionIssuesStatus {
    [key: string]: any | any;
    /**
     * Count of issues with a status other than *to do*, *in progress*, and *done*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly unmapped?: number;
    /**
     * Count of issues with status *to do*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly toDo?: number;
    /**
     * Count of issues with status *in progress*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly inProgress?: number;
    /**
     * Count of issues with status *done*.
     * @type {number}
     * @memberof VersionIssuesStatus
     */
    readonly done?: number;
}
/**
 * If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
 * @export
 * @interface VersionIssuesStatusForFixVersion
 */
export interface VersionIssuesStatusForFixVersion {
    /**
     * Count of issues with a status other than *to do*, *in progress*, and *done*.
     * @type {number}
     * @memberof VersionIssuesStatusForFixVersion
     */
    readonly unmapped?: number;
    /**
     * Count of issues with status *to do*.
     * @type {number}
     * @memberof VersionIssuesStatusForFixVersion
     */
    readonly toDo?: number;
    /**
     * Count of issues with status *in progress*.
     * @type {number}
     * @memberof VersionIssuesStatusForFixVersion
     */
    readonly inProgress?: number;
    /**
     * Count of issues with status *done*.
     * @type {number}
     * @memberof VersionIssuesStatusForFixVersion
     */
    readonly done?: number;
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
 * Count of a version's unresolved issues.
 * @export
 * @interface VersionUnresolvedIssuesCount
 */
export interface VersionUnresolvedIssuesCount {
    /**
     * The URL of these count details.
     * @type {string}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly self?: string;
    /**
     * Count of unresolved issues.
     * @type {number}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly issuesUnresolvedCount?: number;
    /**
     * Count of issues.
     * @type {number}
     * @memberof VersionUnresolvedIssuesCount
     */
    readonly issuesCount?: number;
}
/**
 * List of custom fields using the version.
 * @export
 * @interface VersionUsageInCustomField
 */
export interface VersionUsageInCustomField {
    /**
     * The name of the custom field.
     * @type {string}
     * @memberof VersionUsageInCustomField
     */
    readonly fieldName?: string;
    /**
     * The ID of the custom field.
     * @type {number}
     * @memberof VersionUsageInCustomField
     */
    readonly customFieldId?: number;
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
    /**
     * The ID of the group or the name of the role that visibility of this item is restricted to.
     * @type {string}
     * @memberof Visibility
     */
    identifier?: string | null;
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
     * The URL of these issue vote details.
     * @type {string}
     * @memberof Votes
     */
    readonly self?: string;
    /**
     * The number of votes on the issue.
     * @type {number}
     * @memberof Votes
     */
    readonly votes?: number;
    /**
     * Whether the user making this request has voted on the issue.
     * @type {boolean}
     * @memberof Votes
     */
    readonly hasVoted?: boolean;
    /**
     * List of the users who have voted on this issue. An empty list is returned when the calling user doesn't have the *View voters and watchers* project permission.
     * @type {Array<User>}
     * @memberof Votes
     */
    readonly voters?: Array<User>;
}
/**
 * The details of watchers on an issue.
 * @export
 * @interface Watchers
 */
export interface Watchers {
    /**
     * The URL of these issue watcher details.
     * @type {string}
     * @memberof Watchers
     */
    readonly self?: string;
    /**
     * Whether the calling user is watching this issue.
     * @type {boolean}
     * @memberof Watchers
     */
    readonly isWatching?: boolean;
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
     * The ID of the webhook.
     * @type {number}
     * @memberof Webhook
     */
    id: number;
    /**
     * The JQL filter that specifies which issues the webhook is sent for.
     * @type {string}
     * @memberof Webhook
     */
    jqlFilter: string;
    /**
     * A list of field IDs. When the issue changelog contains any of the fields, the webhook `jira:issue_updated` is sent. If this parameter is not present, the app is notified about all field updates.
     * @type {Array<string>}
     * @memberof Webhook
     */
    fieldIdsFilter?: Array<string>;
    /**
     * A list of issue property keys. A change of those issue properties triggers the `issue_property_set` or `issue_property_deleted` webhooks. If this parameter is not present, the app is notified about all issue property updates.
     * @type {Array<string>}
     * @memberof Webhook
     */
    issuePropertyKeysFilter?: Array<string>;
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
     * The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:
     * 
     *  *  Fields: `issueKey`, `project`, `issuetype`, `status`, `assignee`, `reporter`, `issue.property`, and `cf[id]`. For custom fields (`cf[id]`), only the epic label custom field is supported.".
     *  *  Operators: `=`, `!=`, `IN`, and `NOT IN`.
     * @type {string}
     * @memberof WebhookDetails
     */
    jqlFilter: string;
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
     * The Jira events that trigger the webhook.
     * @type {Array<string>}
     * @memberof WebhookDetails
     */
    events: Array<WebhookDetailsEventsEnum>;
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
     * A list of webhooks.
     * @type {Array<WebhookDetails>}
     * @memberof WebhookRegistrationDetails
     */
    webhooks: Array<WebhookDetails>;
    /**
     * The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered.
     * @type {string}
     * @memberof WebhookRegistrationDetails
     */
    url: string;
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
     * 
     * @type {PublishedWorkflowId}
     * @memberof Workflow
     */
    id: PublishedWorkflowId;
    /**
     * The description of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    description: string;
    /**
     * The transitions of the workflow.
     * @type {Array<Transition>}
     * @memberof Workflow
     */
    transitions?: Array<Transition>;
    /**
     * The statuses of the workflow.
     * @type {Array<WorkflowStatus>}
     * @memberof Workflow
     */
    statuses?: Array<WorkflowStatus>;
    /**
     * Whether this is the default workflow.
     * @type {boolean}
     * @memberof Workflow
     */
    isDefault?: boolean;
    /**
     * The workflow schemes the workflow is assigned to.
     * @type {Array<WorkflowSchemeIdName>}
     * @memberof Workflow
     */
    schemes?: Array<WorkflowSchemeIdName>;
    /**
     * The projects the workflow is assigned to, through workflow schemes.
     * @type {Array<ProjectDetails>}
     * @memberof Workflow
     */
    projects?: Array<ProjectDetails>;
    /**
     * Whether the workflow has a draft version.
     * @type {boolean}
     * @memberof Workflow
     */
    hasDraftWorkflow?: boolean;
    /**
     * 
     * @type {WorkflowOperations}
     * @memberof Workflow
     */
    operations?: WorkflowOperations;
    /**
     * The creation date of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    created?: string;
    /**
     * The last edited date of the workflow.
     * @type {string}
     * @memberof Workflow
     */
    updated?: string;
}
/**
 * A compound workflow transition rule condition. This object returns `nodeType` as `compound`.
 * @export
 * @interface WorkflowCompoundCondition
 */
export interface WorkflowCompoundCondition {
    /**
     * The compound condition operator.
     * @type {string}
     * @memberof WorkflowCompoundCondition
     */
    operator: WorkflowCompoundConditionOperatorEnum;
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
 * The classic workflow identifiers.
 * @export
 * @interface WorkflowIDs
 */
export interface WorkflowIDs {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowIDs
     */
    name: string;
    /**
     * The entity ID of the workflow.
     * @type {string}
     * @memberof WorkflowIDs
     */
    entityId?: string;
}
/**
 * Properties that identify a workflow.
 * @export
 * @interface WorkflowId
 */
export interface WorkflowId {
    /**
     * The name of the workflow.
     * @type {string}
     * @memberof WorkflowId
     */
    name: string;
    /**
     * Whether the workflow is in the draft state.
     * @type {boolean}
     * @memberof WorkflowId
     */
    draft: boolean;
}
/**
 * Operations allowed on a workflow
 * @export
 * @interface WorkflowOperations
 */
export interface WorkflowOperations {
    /**
     * Whether the workflow can be updated.
     * @type {boolean}
     * @memberof WorkflowOperations
     */
    canEdit: boolean;
    /**
     * Whether the workflow can be deleted.
     * @type {boolean}
     * @memberof WorkflowOperations
     */
    canDelete: boolean;
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
     * The workflow validators.
     * @type {Array<WorkflowTransitionRule>}
     * @memberof WorkflowRules
     */
    validators?: Array<WorkflowTransitionRule>;
    /**
     * The workflow post functions.
     * @type {Array<WorkflowTransitionRule>}
     * @memberof WorkflowRules
     */
    postFunctions?: Array<WorkflowTransitionRule>;
}
/**
 * Details of the workflow and its transition rules.
 * @export
 * @interface WorkflowRulesSearch
 */
export interface WorkflowRulesSearch {
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowRulesSearch
     */
    workflowEntityId: string;
    /**
     * The list of workflow rule IDs.
     * @type {Array<string>}
     * @memberof WorkflowRulesSearch
     */
    ruleIds: Array<string>;
    /**
     * Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.
     * @type {string}
     * @memberof WorkflowRulesSearch
     */
    expand?: string;
}
/**
 * Details of workflow transition rules.
 * @export
 * @interface WorkflowRulesSearchDetails
 */
export interface WorkflowRulesSearchDetails {
    /**
     * The workflow ID.
     * @type {string}
     * @memberof WorkflowRulesSearchDetails
     */
    workflowEntityId?: string;
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
}
/**
 * Details about a workflow scheme.
 * @export
 * @interface WorkflowScheme
 */
export interface WorkflowScheme {
    /**
     * The ID of the workflow scheme.
     * @type {number}
     * @memberof WorkflowScheme
     */
    readonly id?: number;
    /**
     * The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
     * @type {string}
     * @memberof WorkflowScheme
     */
    name?: string;
    /**
     * The description of the workflow scheme.
     * @type {string}
     * @memberof WorkflowScheme
     */
    description?: string;
    /**
     * The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
     * @type {string}
     * @memberof WorkflowScheme
     */
    defaultWorkflow?: string;
    /**
     * The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowScheme
     */
    issueTypeMappings?: { [key: string]: string; };
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
     * Whether the workflow scheme is a draft or not.
     * @type {boolean}
     * @memberof WorkflowScheme
     */
    readonly draft?: boolean;
    /**
     * 
     * @type {WorkflowSchemeLastModifiedUser}
     * @memberof WorkflowScheme
     */
    lastModifiedUser?: WorkflowSchemeLastModifiedUser;
    /**
     * The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
     * @type {string}
     * @memberof WorkflowScheme
     */
    readonly lastModified?: string;
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
    /**
     * The issue types available in Jira.
     * @type {{ [key: string]: IssueTypeDetails; }}
     * @memberof WorkflowScheme
     */
    readonly issueTypes?: { [key: string]: IssueTypeDetails; };
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
     * 
     * @type {WorkflowSchemeAssociationsWorkflowScheme}
     * @memberof WorkflowSchemeAssociations
     */
    workflowScheme: WorkflowSchemeAssociationsWorkflowScheme;
}
/**
 * The workflow scheme.
 * @export
 * @interface WorkflowSchemeAssociationsWorkflowScheme
 */
export interface WorkflowSchemeAssociationsWorkflowScheme {
    /**
     * The ID of the workflow scheme.
     * @type {number}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly id?: number;
    /**
     * The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    name?: string;
    /**
     * The description of the workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    description?: string;
    /**
     * The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    defaultWorkflow?: string;
    /**
     * The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    issueTypeMappings?: { [key: string]: string; };
    /**
     * For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly originalDefaultWorkflow?: string;
    /**
     * For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
     * @type {{ [key: string]: string; }}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly originalIssueTypeMappings?: { [key: string]: string; };
    /**
     * Whether the workflow scheme is a draft or not.
     * @type {boolean}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly draft?: boolean;
    /**
     * 
     * @type {WorkflowSchemeLastModifiedUser}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    lastModifiedUser?: WorkflowSchemeLastModifiedUser;
    /**
     * The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly lastModified?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
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
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    updateDraftIfNeeded?: boolean;
    /**
     * The issue types available in Jira.
     * @type {{ [key: string]: IssueTypeDetails; }}
     * @memberof WorkflowSchemeAssociationsWorkflowScheme
     */
    readonly issueTypes?: { [key: string]: IssueTypeDetails; };
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
 * The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
 * @export
 * @interface WorkflowSchemeLastModifiedUser
 */
export interface WorkflowSchemeLastModifiedUser {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    accountId?: string;
    /**
     * The user account type. Can take the following values:
     * 
     *  *  `atlassian` regular Atlassian user account
     *  *  `app` system account used for Connect applications and OAuth to represent external systems
     *  *  `customer` Jira Service Desk account representing an external service desk
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly accountType?: WorkflowSchemeLastModifiedUserAccountTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    name?: string;
    /**
     * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly timeZone?: string;
    /**
     * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly locale?: string;
    /**
     * 
     * @type {UserGroups}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    groups?: UserGroups;
    /**
     * 
     * @type {UserApplicationRoles}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    applicationRoles?: UserApplicationRoles;
    /**
     * Expand options that include additional user details in the response.
     * @type {string}
     * @memberof WorkflowSchemeLastModifiedUser
     */
    readonly expand?: string;
}


/**
 * @export
 */
export const WorkflowSchemeLastModifiedUserAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Customer: 'customer',
    Unknown: 'unknown'
} as const;
export type WorkflowSchemeLastModifiedUserAccountTypeEnum = typeof WorkflowSchemeLastModifiedUserAccountTypeEnum[keyof typeof WorkflowSchemeLastModifiedUserAccountTypeEnum];

/**
 * An associated workflow scheme and project.
 * @export
 * @interface WorkflowSchemeProjectAssociation
 */
export interface WorkflowSchemeProjectAssociation {
    /**
     * The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme.
     * @type {string}
     * @memberof WorkflowSchemeProjectAssociation
     */
    workflowSchemeId?: string;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof WorkflowSchemeProjectAssociation
     */
    projectId: string;
}
/**
 * A workflow transition rule condition. This object returns `nodeType` as `simple`.
 * @export
 * @interface WorkflowSimpleCondition
 */
export interface WorkflowSimpleCondition {
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof WorkflowSimpleCondition
     */
    type: string;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {object}
     * @memberof WorkflowSimpleCondition
     */
    _configuration?: object;
    /**
     * 
     * @type {string}
     * @memberof WorkflowSimpleCondition
     */
    nodeType: string;
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
 * Details about the server Jira is running on.
 * @export
 * @interface WorkflowTransitionProperty
 */
export interface WorkflowTransitionProperty {
    [key: string]: any | any;
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
    /**
     * The ID of the transition property.
     * @type {string}
     * @memberof WorkflowTransitionProperty
     */
    readonly id?: string;
}
/**
 * A workflow transition rule.
 * @export
 * @interface WorkflowTransitionRule
 */
export interface WorkflowTransitionRule {
    /**
     * The type of the transition rule.
     * @type {string}
     * @memberof WorkflowTransitionRule
     */
    type: string;
    /**
     * EXPERIMENTAL. The configuration of the transition rule.
     * @type {any}
     * @memberof WorkflowTransitionRule
     */
    _configuration?: any | null;
}
/**
 * A workflow with transition rules.
 * @export
 * @interface WorkflowTransitionRules
 */
export interface WorkflowTransitionRules {
    /**
     * 
     * @type {WorkflowId}
     * @memberof WorkflowTransitionRules
     */
    workflowId: WorkflowId;
    /**
     * The list of post functions within the workflow.
     * @type {Array<ConnectWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    postFunctions?: Array<ConnectWorkflowTransitionRule>;
    /**
     * The list of conditions within the workflow.
     * @type {Array<ConnectWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    conditions?: Array<ConnectWorkflowTransitionRule>;
    /**
     * The list of validators within the workflow.
     * @type {Array<ConnectWorkflowTransitionRule>}
     * @memberof WorkflowTransitionRules
     */
    validators?: Array<ConnectWorkflowTransitionRule>;
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
    workflowRuleIds: string[];
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
     * 
     * @type {WorkflowId}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    workflowId: WorkflowId;
    /**
     * A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated.
     * @type {{ [key: string]: string[]; }}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    ruleUpdateErrors: { [key: string]: string[]; };
    /**
     * The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries.
     * @type {Set<string>}
     * @memberof WorkflowTransitionRulesUpdateErrorDetails
     */
    updateErrors: string[];
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
     * The URL of the worklog item.
     * @type {string}
     * @memberof Worklog
     */
    readonly self?: string;
    /**
     * 
     * @type {WorklogAuthor}
     * @memberof Worklog
     */
    author?: WorklogAuthor;
    /**
     * 
     * @type {WorklogUpdateAuthor}
     * @memberof Worklog
     */
    updateAuthor?: WorklogUpdateAuthor;
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
     * The datetime on which the worklog was last updated.
     * @type {string}
     * @memberof Worklog
     */
    readonly updated?: string;
    /**
     * 
     * @type {WorklogVisibility}
     * @memberof Worklog
     */
    visibility?: WorklogVisibility;
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
}
/**
 * Details of the user who created the worklog.
 * @export
 * @interface WorklogAuthor
 */
export interface WorklogAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof WorklogAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof WorklogAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof WorklogAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof WorklogAuthor
     */
    readonly accountType?: string;
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
    ids: number[];
}
/**
 * Details of the user who last updated the worklog.
 * @export
 * @interface WorklogUpdateAuthor
 */
export interface WorklogUpdateAuthor {
    /**
     * The URL of the user.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly self?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly name?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly key?: string;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    accountId?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {UserAvatarUrls}
     * @memberof WorklogUpdateAuthor
     */
    avatarUrls?: UserAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly displayName?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof WorklogUpdateAuthor
     */
    readonly active?: boolean;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly timeZone?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof WorklogUpdateAuthor
     */
    readonly accountType?: string;
}
/**
 * Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog.
 * @export
 * @interface WorklogVisibility
 */
export interface WorklogVisibility {
    /**
     * Whether visibility of this item is restricted to a group or role.
     * @type {string}
     * @memberof WorklogVisibility
     */
    type?: WorklogVisibilityTypeEnum;
    /**
     * The name of the group or role that visibility of this item is restricted to. Please note that the name of a group is mutable, to reliably identify a group use `identifier`.
     * @type {string}
     * @memberof WorklogVisibility
     */
    value?: string;
    /**
     * The ID of the group or the name of the role that visibility of this item is restricted to.
     * @type {string}
     * @memberof WorklogVisibility
     */
    identifier?: string | null;
}


/**
 * @export
 */
export const WorklogVisibilityTypeEnum = {
    Group: 'group',
    Role: 'role'
} as const;
export type WorklogVisibilityTypeEnum = typeof WorklogVisibilityTypeEnum[keyof typeof WorklogVisibilityTypeEnum];

