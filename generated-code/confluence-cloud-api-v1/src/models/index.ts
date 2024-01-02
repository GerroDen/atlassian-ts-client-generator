/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AccountId
 */
export interface AccountId {
    /**
     * 
     * @type {string}
     * @memberof AccountId
     */
    accountId: string;
}
/**
 * 
 * @export
 * @interface AccountIdEmailRecord
 */
export interface AccountIdEmailRecord {
    /**
     * 
     * @type {string}
     * @memberof AccountIdEmailRecord
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof AccountIdEmailRecord
     */
    email: string;
}
/**
 * 
 * @export
 * @interface AddContentRestriction
 */
export interface AddContentRestriction {
    /**
     * The restriction operation applied to content.
     * @type {string}
     * @memberof AddContentRestriction
     */
    operation: AddContentRestrictionOperationEnum;
    /**
     * 
     * @type {AddContentRestrictionRestrictions}
     * @memberof AddContentRestriction
     */
    restrictions: AddContentRestrictionRestrictions;
}


/**
 * @export
 */
export const AddContentRestrictionOperationEnum = {
    Read: 'read',
    Update: 'update'
} as const;
export type AddContentRestrictionOperationEnum = typeof AddContentRestrictionOperationEnum[keyof typeof AddContentRestrictionOperationEnum];

/**
 * The users/groups that the restrictions will be applied to. At least one of
 * `user` or `group` must be specified for this object.
 * @export
 * @interface AddContentRestrictionRestrictions
 */
export interface AddContentRestrictionRestrictions {
    /**
     * The users that the restrictions will be applied to. This array must
     * have at least one item, otherwise it should be omitted.
     * @type {Array<AddContentRestrictionRestrictionsUserInner>}
     * @memberof AddContentRestrictionRestrictions
     */
    user?: Array<AddContentRestrictionRestrictionsUserInner>;
    /**
     * The groups that the restrictions will be applied to. This array must
     * have at least one item, otherwise it should be omitted.
     * @type {Array<AddContentRestrictionRestrictionsGroupInner>}
     * @memberof AddContentRestrictionRestrictions
     */
    group?: Array<AddContentRestrictionRestrictionsGroupInner>;
}
/**
 * A group that the restriction will be applied to.
 * @export
 * @interface AddContentRestrictionRestrictionsGroupInner
 */
export interface AddContentRestrictionRestrictionsGroupInner {
    /**
     * Set to 'group'.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsGroupInner
     */
    type: AddContentRestrictionRestrictionsGroupInnerTypeEnum;
    /**
     * The name of the group.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsGroupInner
     */
    name: string;
}


/**
 * @export
 */
export const AddContentRestrictionRestrictionsGroupInnerTypeEnum = {
    Group: 'group'
} as const;
export type AddContentRestrictionRestrictionsGroupInnerTypeEnum = typeof AddContentRestrictionRestrictionsGroupInnerTypeEnum[keyof typeof AddContentRestrictionRestrictionsGroupInnerTypeEnum];

/**
 * A user that the restriction will be applied to. Either the `username`
 * or the `userKey` must be specified to identify the user.
 * @export
 * @interface AddContentRestrictionRestrictionsUserInner
 */
export interface AddContentRestrictionRestrictionsUserInner {
    /**
     * Set to 'known'.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsUserInner
     */
    type: AddContentRestrictionRestrictionsUserInnerTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsUserInner
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsUserInner
     */
    userKey?: string | null;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products.
     * For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
     * @type {string}
     * @memberof AddContentRestrictionRestrictionsUserInner
     */
    accountId: string | null;
}


/**
 * @export
 */
export const AddContentRestrictionRestrictionsUserInnerTypeEnum = {
    Known: 'known',
    Unknown: 'unknown',
    Anonymous: 'anonymous',
    User: 'user'
} as const;
export type AddContentRestrictionRestrictionsUserInnerTypeEnum = typeof AddContentRestrictionRestrictionsUserInnerTypeEnum[keyof typeof AddContentRestrictionRestrictionsUserInnerTypeEnum];

/**
 * @type AddLabelsToContentRequest
 * 
 * @export
 */
export type AddLabelsToContentRequest = Array<LabelCreate> | LabelCreate;
/**
 * 
 * @export
 * @interface AffectedObject
 */
export interface AffectedObject {
    /**
     * 
     * @type {string}
     * @memberof AffectedObject
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AffectedObject
     */
    objectType: string;
}
/**
 * 
 * @export
 * @interface ArchivePagesRequest
 */
export interface ArchivePagesRequest {
    /**
     * 
     * @type {Array<ArchivePagesRequestPagesInner>}
     * @memberof ArchivePagesRequest
     */
    pages?: Array<ArchivePagesRequestPagesInner>;
}
/**
 * 
 * @export
 * @interface ArchivePagesRequestPagesInner
 */
export interface ArchivePagesRequestPagesInner {
    /**
     * The `id` of the page to be archived.
     * @type {number}
     * @memberof ArchivePagesRequestPagesInner
     */
    id: number;
}
/**
 * 
 * @export
 * @interface AsyncContentBody
 */
export interface AsyncContentBody {
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBody
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBody
     */
    representation?: AsyncContentBodyRepresentationEnum;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBody
     */
    renderTaskId?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBody
     */
    error?: string;
    /**
     * Rerunning is reserved for when the job is working, but there is a previous run's value in the cache. You may choose to continue polling, or use the cached value.
     * @type {string}
     * @memberof AsyncContentBody
     */
    status?: AsyncContentBodyStatusEnum;
    /**
     * 
     * @type {Array<EmbeddedContent>}
     * @memberof AsyncContentBody
     */
    embeddedContent?: Array<EmbeddedContent>;
    /**
     * 
     * @type {WebResourceDependencies}
     * @memberof AsyncContentBody
     */
    webresource?: WebResourceDependencies;
    /**
     * 
     * @type {AsyncContentBodyMediaToken}
     * @memberof AsyncContentBody
     */
    mediaToken?: AsyncContentBodyMediaToken;
    /**
     * 
     * @type {AsyncContentBodyExpandable}
     * @memberof AsyncContentBody
     */
    expandable?: AsyncContentBodyExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof AsyncContentBody
     */
    _links?: { [key: string]: GenericLinksValue; };
}


/**
 * @export
 */
export const AsyncContentBodyRepresentationEnum = {
    View: 'view',
    ExportView: 'export_view',
    StyledView: 'styled_view',
    Storage: 'storage',
    Editor: 'editor',
    Editor2: 'editor2',
    AnonymousExportView: 'anonymous_export_view',
    Wiki: 'wiki',
    AtlasDocFormat: 'atlas_doc_format'
} as const;
export type AsyncContentBodyRepresentationEnum = typeof AsyncContentBodyRepresentationEnum[keyof typeof AsyncContentBodyRepresentationEnum];

/**
 * @export
 */
export const AsyncContentBodyStatusEnum = {
    Working: 'WORKING',
    Queued: 'QUEUED',
    Failed: 'FAILED',
    Completed: 'COMPLETED',
    Rerunning: 'RERUNNING'
} as const;
export type AsyncContentBodyStatusEnum = typeof AsyncContentBodyStatusEnum[keyof typeof AsyncContentBodyStatusEnum];

/**
 * 
 * @export
 * @interface AsyncContentBodyExpandable
 */
export interface AsyncContentBodyExpandable {
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyExpandable
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyExpandable
     */
    embeddedContent?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyExpandable
     */
    webresource?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyExpandable
     */
    mediaToken?: string;
}
/**
 * 
 * @export
 * @interface AsyncContentBodyMediaToken
 */
export interface AsyncContentBodyMediaToken {
    /**
     * 
     * @type {Array<string>}
     * @memberof AsyncContentBodyMediaToken
     */
    collectionIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyMediaToken
     */
    contentId?: string;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyMediaToken
     */
    expiryDateTime?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AsyncContentBodyMediaToken
     */
    fileIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AsyncContentBodyMediaToken
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface AsyncId
 */
export interface AsyncId {
    /**
     * 
     * @type {string}
     * @memberof AsyncId
     */
    asyncId: string;
}
/**
 * 
 * @export
 * @interface AttachmentPropertiesUpdateBody
 */
export interface AttachmentPropertiesUpdateBody {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof AttachmentPropertiesUpdateBody
     */
    id: string;
    /**
     * Set this to "attachment"
     * @type {string}
     * @memberof AttachmentPropertiesUpdateBody
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentPropertiesUpdateBody
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentPropertiesUpdateBody
     */
    title?: string;
    /**
     * Container for content. This can be either a space (containing a page or blogpost)
     * or a page/blog post (containing an attachment or comment)
     * @type {{ [key: string]: any; }}
     * @memberof AttachmentPropertiesUpdateBody
     */
    container?: { [key: string]: any; } | null;
    /**
     * 
     * @type {AttachmentPropertiesUpdateBodyMetadata}
     * @memberof AttachmentPropertiesUpdateBody
     */
    metadata?: AttachmentPropertiesUpdateBodyMetadata;
    /**
     * 
     * @type {object}
     * @memberof AttachmentPropertiesUpdateBody
     */
    extensions?: object;
    /**
     * 
     * @type {Version}
     * @memberof AttachmentPropertiesUpdateBody
     */
    version: Version | null;
}
/**
 * 
 * @export
 * @interface AttachmentPropertiesUpdateBodyMetadata
 */
export interface AttachmentPropertiesUpdateBodyMetadata {
    /**
     * 
     * @type {string}
     * @memberof AttachmentPropertiesUpdateBodyMetadata
     */
    mediaType?: string;
}
/**
 * 
 * @export
 * @interface AttachmentUpdate
 */
export interface AttachmentUpdate {
    /**
     * 
     * @type {AttachmentUpdateVersion}
     * @memberof AttachmentUpdate
     */
    version: AttachmentUpdateVersion;
    /**
     * The ID of the attachment to be updated.
     * @type {string}
     * @memberof AttachmentUpdate
     */
    id: string;
    /**
     * Set this to `attachment`.
     * @type {string}
     * @memberof AttachmentUpdate
     */
    type: AttachmentUpdateTypeEnum;
    /**
     * The updated name of the attachment.
     * @type {string}
     * @memberof AttachmentUpdate
     */
    title?: string;
    /**
     * 
     * @type {AttachmentUpdateMetadata}
     * @memberof AttachmentUpdate
     */
    metadata?: AttachmentUpdateMetadata;
    /**
     * 
     * @type {AttachmentUpdateContainer}
     * @memberof AttachmentUpdate
     */
    container?: AttachmentUpdateContainer;
}


/**
 * @export
 */
export const AttachmentUpdateTypeEnum = {
    Attachment: 'attachment'
} as const;
export type AttachmentUpdateTypeEnum = typeof AttachmentUpdateTypeEnum[keyof typeof AttachmentUpdateTypeEnum];

/**
 * The new content to attach the attachment to.
 * @export
 * @interface AttachmentUpdateContainer
 */
export interface AttachmentUpdateContainer {
    /**
     * The `id` of the parent content.
     * @type {string}
     * @memberof AttachmentUpdateContainer
     */
    id: string;
    /**
     * The content type. You can only attach attachments to content
     * of type: `page`, `blogpost`.
     * @type {string}
     * @memberof AttachmentUpdateContainer
     */
    type: string;
}
/**
 * 
 * @export
 * @interface AttachmentUpdateMetadata
 */
export interface AttachmentUpdateMetadata {
    /**
     * The media type of the attachment, e.g. 'img/jpg'.
     * @type {string}
     * @memberof AttachmentUpdateMetadata
     */
    mediaType?: string;
    /**
     * The comment for this update.
     * @type {string}
     * @memberof AttachmentUpdateMetadata
     */
    comment?: string;
}
/**
 * The attachment version. Set this to the current version number of the
 * attachment. Note, the version number only needs to be incremented when
 * updating the actual attachment, not its properties.
 * @export
 * @interface AttachmentUpdateVersion
 */
export interface AttachmentUpdateVersion {
    /**
     * The version number.
     * @type {number}
     * @memberof AttachmentUpdateVersion
     */
    number: number;
}
/**
 * 
 * @export
 * @interface AuditRecord
 */
export interface AuditRecord {
    /**
     * 
     * @type {AuditRecordAuthor}
     * @memberof AuditRecord
     */
    author: AuditRecordAuthor;
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    remoteAddress: string;
    /**
     * The creation date-time of the audit record, as a timestamp.
     * @type {number}
     * @memberof AuditRecord
     */
    creationDate: number;
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AuditRecord
     */
    category: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuditRecord
     */
    sysAdmin: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AuditRecord
     */
    superAdmin?: boolean;
    /**
     * 
     * @type {AffectedObject}
     * @memberof AuditRecord
     */
    affectedObject: AffectedObject;
    /**
     * 
     * @type {Array<ChangedValue>}
     * @memberof AuditRecord
     */
    changedValues: Array<ChangedValue>;
    /**
     * 
     * @type {Array<AffectedObject>}
     * @memberof AuditRecord
     */
    associatedObjects: Array<AffectedObject>;
}
/**
 * 
 * @export
 * @interface AuditRecordArray
 */
export interface AuditRecordArray {
    /**
     * 
     * @type {Array<AuditRecord>}
     * @memberof AuditRecordArray
     */
    results: Array<AuditRecord>;
    /**
     * 
     * @type {number}
     * @memberof AuditRecordArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof AuditRecordArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof AuditRecordArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof AuditRecordArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface AuditRecordAuthor
 */
export interface AuditRecordAuthor {
    /**
     * 
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    type: AuditRecordAuthorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    displayName: string;
    /**
     * 
     * @type {object}
     * @memberof AuditRecordAuthor
     */
    operations: object | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    userKey?: string | null;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products.
     * For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    accountId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    accountType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuditRecordAuthor
     */
    externalCollaborator?: boolean;
    /**
     * Whether the user is an external collaborator user
     * @type {boolean}
     * @memberof AuditRecordAuthor
     */
    isExternalCollaborator?: boolean;
    /**
     * The public name or nickname of the user. Will always contain a value.
     * @type {string}
     * @memberof AuditRecordAuthor
     */
    publicName?: string;
}


/**
 * @export
 */
export const AuditRecordAuthorTypeEnum = {
    User: 'user'
} as const;
export type AuditRecordAuthorTypeEnum = typeof AuditRecordAuthorTypeEnum[keyof typeof AuditRecordAuthorTypeEnum];

/**
 * 
 * @export
 * @interface AuditRecordCreate
 */
export interface AuditRecordCreate {
    /**
     * 
     * @type {AuditRecordCreateAuthor}
     * @memberof AuditRecordCreate
     */
    author?: AuditRecordCreateAuthor;
    /**
     * The IP address of the computer where the event was initiated from.
     * @type {string}
     * @memberof AuditRecordCreate
     */
    remoteAddress: string;
    /**
     * The creation date-time of the audit record, as a timestamp. This is converted
     * to a date-time display in the Confluence UI. If the `creationDate` is not
     * specified, then it will be set to the timestamp for the current date-time.
     * @type {number}
     * @memberof AuditRecordCreate
     */
    creationDate?: number;
    /**
     * The summary of the event, which is displayed in the 'Change' column on
     * the audit log in the Confluence UI.
     * @type {string}
     * @memberof AuditRecordCreate
     */
    summary?: string;
    /**
     * A long description of the event, which is displayed in the 'Description'
     * field on the audit log in the Confluence UI.
     * @type {string}
     * @memberof AuditRecordCreate
     */
    description?: string;
    /**
     * The category of the event, which is displayed in the 'Event type' column
     * on the audit log in the Confluence UI.
     * @type {string}
     * @memberof AuditRecordCreate
     */
    category?: string;
    /**
     * Indicates whether the event was actioned by a system administrator.
     * @type {boolean}
     * @memberof AuditRecordCreate
     */
    sysAdmin?: boolean;
    /**
     * 
     * @type {AffectedObject}
     * @memberof AuditRecordCreate
     */
    affectedObject?: AffectedObject;
    /**
     * The values that were changed in the event.
     * @type {Array<ChangedValue>}
     * @memberof AuditRecordCreate
     */
    changedValues?: Array<ChangedValue>;
    /**
     * Objects that were associated with the event. For example, if the event
     * was a space permission change then the associated object would be the
     * space.
     * @type {Array<AffectedObject>}
     * @memberof AuditRecordCreate
     */
    associatedObjects?: Array<AffectedObject>;
}
/**
 * The user that actioned the event. If `author` is not specified, then all
 * `author` properties will be set to null/empty, except for `type` which
 * will be set to 'user'.
 * @export
 * @interface AuditRecordCreateAuthor
 */
export interface AuditRecordCreateAuthor {
    /**
     * Set to 'user'.
     * @type {string}
     * @memberof AuditRecordCreateAuthor
     */
    type: AuditRecordCreateAuthorTypeEnum;
    /**
     * The name that is displayed on the audit log in the Confluence UI.
     * @type {string}
     * @memberof AuditRecordCreateAuthor
     */
    displayName?: string;
    /**
     * Always defaults to null.
     * @type {object}
     * @memberof AuditRecordCreateAuthor
     */
    operations?: object;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AuditRecordCreateAuthor
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof AuditRecordCreateAuthor
     */
    userKey?: string | null;
}


/**
 * @export
 */
export const AuditRecordCreateAuthorTypeEnum = {
    User: 'user'
} as const;
export type AuditRecordCreateAuthorTypeEnum = typeof AuditRecordCreateAuthorTypeEnum[keyof typeof AuditRecordCreateAuthorTypeEnum];

/**
 * 
 * @export
 * @interface AvailableContentStates
 */
export interface AvailableContentStates {
    /**
     * Space suggested content states that can be used in the space. This can be null if space content states are disabled in the space.
     * This list can be empty if there are no space content states defined in the space.
     * All spaces start with 3 default space content states, and this can be modified in the UI under space settings.
     * @type {Array<ContentState>}
     * @memberof AvailableContentStates
     */
    spaceContentStates: Array<ContentState>;
    /**
     * Custom content states that can be used by the user on the content of this call.
     * This can be null if custom content states are disabled in the space of the content.
     * This list can be empty if there are no custom content states defined by the user.
     * This will at most have 3 of the most recently published content states. 
     * Only the calling user has access to place these states on content, but all users can see these states once they are placed.
     * @type {Array<ContentState>}
     * @memberof AvailableContentStates
     */
    customContentStates: Array<ContentState>;
}
/**
 * 
 * @export
 * @interface BlueprintTemplate
 */
export interface BlueprintTemplate {
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    templateId: string;
    /**
     * 
     * @type {BlueprintTemplateOriginalTemplate}
     * @memberof BlueprintTemplate
     */
    originalTemplate: BlueprintTemplateOriginalTemplate;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    referencingBlueprint: string;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    description: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof BlueprintTemplate
     */
    space?: { [key: string]: any; };
    /**
     * 
     * @type {Array<Label>}
     * @memberof BlueprintTemplate
     */
    labels: Array<Label>;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    templateType: string;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplate
     */
    editorVersion?: string;
    /**
     * 
     * @type {ContentTemplateBody}
     * @memberof BlueprintTemplate
     */
    body?: ContentTemplateBody;
    /**
     * 
     * @type {BlueprintTemplateExpandable}
     * @memberof BlueprintTemplate
     */
    expandable?: BlueprintTemplateExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof BlueprintTemplate
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface BlueprintTemplateArray
 */
export interface BlueprintTemplateArray {
    /**
     * 
     * @type {Array<BlueprintTemplate>}
     * @memberof BlueprintTemplateArray
     */
    results: Array<BlueprintTemplate>;
    /**
     * 
     * @type {number}
     * @memberof BlueprintTemplateArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof BlueprintTemplateArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof BlueprintTemplateArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof BlueprintTemplateArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface BlueprintTemplateExpandable
 */
export interface BlueprintTemplateExpandable {
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplateExpandable
     */
    body?: string;
}
/**
 * 
 * @export
 * @interface BlueprintTemplateOriginalTemplate
 */
export interface BlueprintTemplateOriginalTemplate {
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplateOriginalTemplate
     */
    pluginKey: string;
    /**
     * 
     * @type {string}
     * @memberof BlueprintTemplateOriginalTemplate
     */
    moduleKey: string;
}
/**
 * 
 * @export
 * @interface Breadcrumb
 */
export interface Breadcrumb {
    /**
     * 
     * @type {string}
     * @memberof Breadcrumb
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof Breadcrumb
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof Breadcrumb
     */
    separator: string;
}
/**
 * 
 * @export
 * @interface BulkContentStateSetInput
 */
export interface BulkContentStateSetInput {
    /**
     * maximum number of ids you can pass in is 300
     * @type {Array<string>}
     * @memberof BulkContentStateSetInput
     */
    ids: Array<string>;
    /**
     * 
     * @type {ContentStateInput}
     * @memberof BulkContentStateSetInput
     */
    contentState: ContentStateInput;
}
/**
 * 
 * @export
 * @interface BulkRemoveContentStatesRequest
 */
export interface BulkRemoveContentStatesRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkRemoveContentStatesRequest
     */
    ids: Array<string>;
}
/**
 * 
 * @export
 * @interface BulkUserLookup
 */
export interface BulkUserLookup {
    /**
     * 
     * @type {string}
     * @memberof BulkUserLookup
     */
    type: BulkUserLookupTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof BulkUserLookup
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof BulkUserLookup
     */
    userKey?: string | null;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products.
     * For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
     * @type {string}
     * @memberof BulkUserLookup
     */
    accountId: string | null;
    /**
     * The account type of the user, may return empty string if unavailable.
     * @type {string}
     * @memberof BulkUserLookup
     */
    accountType: string;
    /**
     * The email address of the user. Depending on the user's privacy setting, this may return an empty string.
     * @type {string}
     * @memberof BulkUserLookup
     */
    email: string;
    /**
     * The public name or nickname of the user. Will always contain a value.
     * @type {string}
     * @memberof BulkUserLookup
     */
    publicName: string;
    /**
     * 
     * @type {Icon}
     * @memberof BulkUserLookup
     */
    profilePicture: Icon | null;
    /**
     * The displays name of the user. Depending on the user's privacy setting, this may be the same as publicName.
     * @type {string}
     * @memberof BulkUserLookup
     */
    displayName: string;
    /**
     * This displays user time zone. Depending on the user's privacy setting, this may return null.
     * @type {string}
     * @memberof BulkUserLookup
     */
    timeZone?: string | null;
    /**
     * Whether the user is an external collaborator user
     * @type {boolean}
     * @memberof BulkUserLookup
     */
    isExternalCollaborator?: boolean;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof BulkUserLookup
     */
    operations?: Array<OperationCheckResult>;
    /**
     * 
     * @type {UserDetails}
     * @memberof BulkUserLookup
     */
    details?: UserDetails;
    /**
     * 
     * @type {Space}
     * @memberof BulkUserLookup
     */
    personalSpace?: Space | null;
    /**
     * 
     * @type {BulkUserLookupExpandable}
     * @memberof BulkUserLookup
     */
    expandable: BulkUserLookupExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof BulkUserLookup
     */
    _links: { [key: string]: GenericLinksValue; };
}


/**
 * @export
 */
export const BulkUserLookupTypeEnum = {
    Known: 'known',
    Unknown: 'unknown',
    Anonymous: 'anonymous',
    User: 'user'
} as const;
export type BulkUserLookupTypeEnum = typeof BulkUserLookupTypeEnum[keyof typeof BulkUserLookupTypeEnum];

/**
 * 
 * @export
 * @interface BulkUserLookupArray
 */
export interface BulkUserLookupArray {
    /**
     * 
     * @type {Array<BulkUserLookup>}
     * @memberof BulkUserLookupArray
     */
    results: Array<BulkUserLookup>;
    /**
     * 
     * @type {number}
     * @memberof BulkUserLookupArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof BulkUserLookupArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof BulkUserLookupArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof BulkUserLookupArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface BulkUserLookupExpandable
 */
export interface BulkUserLookupExpandable {
    /**
     * 
     * @type {string}
     * @memberof BulkUserLookupExpandable
     */
    operations?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkUserLookupExpandable
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof BulkUserLookupExpandable
     */
    personalSpace?: string;
}
/**
 * 
 * @export
 * @interface ButtonLookAndFeel
 */
export interface ButtonLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof ButtonLookAndFeel
     */
    backgroundColor: string;
    /**
     * 
     * @type {string}
     * @memberof ButtonLookAndFeel
     */
    color: string;
}
/**
 * The converted CQL queries.
 * @export
 * @interface CQLPersonalDataConvertedQueries
 */
export interface CQLPersonalDataConvertedQueries {
    /**
     * The list of converted CQL query strings with account IDs in
     * place of user identifiers.
     * @type {Array<string>}
     * @memberof CQLPersonalDataConvertedQueries
     */
    queryStrings: Array<string>;
}
/**
 * The CQL queries to be converted.
 * @export
 * @interface CQLPersonalDataMigrationRequest
 */
export interface CQLPersonalDataMigrationRequest {
    /**
     * A list of queries with user identifiers. Maximum of 100 queries.
     * @type {Array<string>}
     * @memberof CQLPersonalDataMigrationRequest
     */
    queryStrings: Array<string>;
}
/**
 * 
 * @export
 * @interface ChangedValue
 */
export interface ChangedValue {
    /**
     * 
     * @type {string}
     * @memberof ChangedValue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ChangedValue
     */
    oldValue: string;
    /**
     * 
     * @type {string}
     * @memberof ChangedValue
     */
    hiddenOldValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangedValue
     */
    newValue: string;
    /**
     * 
     * @type {string}
     * @memberof ChangedValue
     */
    hiddenNewValue?: string;
}
/**
 * 
 * @export
 * @interface ConnectModules
 */
export interface ConnectModules {
    /**
     * A list of app modules in the same format as the `modules` property in the
     * [app descriptor](https://developer.atlassian.com/cloud/confluence/app-descriptor/).
     * @type {Array<object>}
     * @memberof ConnectModules
     */
    modules: Array<object>;
}
/**
 * 
 * @export
 * @interface ContainerLookAndFeel
 */
export interface ContainerLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    background: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundAttachment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundBlendMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundClip?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundColor: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundImage: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundOrigin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundRepeat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    backgroundSize: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    padding: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerLookAndFeel
     */
    borderRadius: string;
}
/**
 * 
 * @export
 * @interface ContainerSummary
 */
export interface ContainerSummary {
    /**
     * 
     * @type {string}
     * @memberof ContainerSummary
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerSummary
     */
    displayUrl: string;
}
/**
 * Base object for all content types.
 * @export
 * @interface Content
 */
export interface Content {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    id?: string;
    /**
     * Can be "page", "blogpost", "attachment" or "content"
     * @type {string}
     * @memberof Content
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    title?: string;
    /**
     * 
     * @type {Space}
     * @memberof Content
     */
    space?: Space | null;
    /**
     * 
     * @type {ContentHistory}
     * @memberof Content
     */
    history?: ContentHistory | null;
    /**
     * 
     * @type {Version}
     * @memberof Content
     */
    version?: Version | null;
    /**
     * 
     * @type {Array<Content>}
     * @memberof Content
     */
    ancestors?: Array<Content> | null;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof Content
     */
    operations?: Array<OperationCheckResult>;
    /**
     * 
     * @type {ContentChildren}
     * @memberof Content
     */
    children?: ContentChildren;
    /**
     * 
     * @type {ContentChildType}
     * @memberof Content
     */
    childTypes?: ContentChildType;
    /**
     * 
     * @type {ContentChildren}
     * @memberof Content
     */
    descendants?: ContentChildren;
    /**
     * Container for content. This can be either a space (containing a page or blogpost)
     * or a page/blog post (containing an attachment or comment)
     * @type {{ [key: string]: any; }}
     * @memberof Content
     */
    container?: { [key: string]: any; } | null;
    /**
     * 
     * @type {ContentBody}
     * @memberof Content
     */
    body?: ContentBody;
    /**
     * 
     * @type {ContentRestrictions}
     * @memberof Content
     */
    restrictions?: ContentRestrictions;
    /**
     * 
     * @type {ContentMetadata}
     * @memberof Content
     */
    metadata?: ContentMetadata;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof Content
     */
    macroRenderedOutput?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof Content
     */
    extensions?: object;
    /**
     * 
     * @type {ContentExpandable}
     * @memberof Content
     */
    expandable?: ContentExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Content
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentArray
 */
export interface ContentArray {
    /**
     * 
     * @type {Array<Content>}
     * @memberof ContentArray
     */
    results: Array<Content>;
    /**
     * 
     * @type {number}
     * @memberof ContentArray
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentArray
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * Representation of a blogpost (content)
 * @export
 * @interface ContentBlogpost
 */
export interface ContentBlogpost {
    /**
     * 
     * @type {string}
     * @memberof ContentBlogpost
     */
    id?: string;
    /**
     * Can be "page", "blogpost", "attachment" or "content"
     * @type {string}
     * @memberof ContentBlogpost
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBlogpost
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBlogpost
     */
    title?: string;
    /**
     * 
     * @type {Space}
     * @memberof ContentBlogpost
     */
    space?: Space | null;
    /**
     * 
     * @type {ContentHistory}
     * @memberof ContentBlogpost
     */
    history?: ContentHistory | null;
    /**
     * 
     * @type {Version}
     * @memberof ContentBlogpost
     */
    version?: Version | null;
    /**
     * 
     * @type {Array<Content>}
     * @memberof ContentBlogpost
     */
    ancestors?: Array<Content> | null;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof ContentBlogpost
     */
    operations?: Array<OperationCheckResult>;
    /**
     * 
     * @type {ContentChildren}
     * @memberof ContentBlogpost
     */
    children?: ContentChildren;
    /**
     * 
     * @type {ContentChildType}
     * @memberof ContentBlogpost
     */
    childTypes?: ContentChildType;
    /**
     * 
     * @type {ContentChildren}
     * @memberof ContentBlogpost
     */
    descendants?: ContentChildren;
    /**
     * Container for content. This can be either a space (containing a page or blogpost)
     * or a page/blog post (containing an attachment or comment)
     * @type {{ [key: string]: any; }}
     * @memberof ContentBlogpost
     */
    container?: { [key: string]: any; } | null;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBlogpost
     */
    body?: ContentBody;
    /**
     * 
     * @type {ContentRestrictions}
     * @memberof ContentBlogpost
     */
    restrictions?: ContentRestrictions;
    /**
     * 
     * @type {ContentMetadata}
     * @memberof ContentBlogpost
     */
    metadata: ContentMetadata;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ContentBlogpost
     */
    macroRenderedOutput?: { [key: string]: object; };
    /**
     * 
     * @type {object}
     * @memberof ContentBlogpost
     */
    extensions?: object;
    /**
     * 
     * @type {ContentExpandable}
     * @memberof ContentBlogpost
     */
    expandable?: ContentExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentBlogpost
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentBlogpostAllOf
 */
export interface ContentBlogpostAllOf {
    /**
     * 
     * @type {ContentMetadata}
     * @memberof ContentBlogpostAllOf
     */
    metadata: ContentMetadata;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentBlogpostAllOf
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentBlueprintDraft
 */
export interface ContentBlueprintDraft {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentBlueprintDraftVersion}
     * @memberof ContentBlueprintDraft
     */
    version: ContentBlueprintDraftVersion;
    /**
     * The title of the content. If you don't want to change the title,
     * set this to the current title of the draft.
     * @type {string}
     * @memberof ContentBlueprintDraft
     */
    title: string;
    /**
     * The type of content. Set this to `page`.
     * @type {string}
     * @memberof ContentBlueprintDraft
     */
    type: ContentBlueprintDraftTypeEnum;
    /**
     * The status of the content. Set this to `current` or omit it altogether.
     * @type {string}
     * @memberof ContentBlueprintDraft
     */
    status?: ContentBlueprintDraftStatusEnum;
    /**
     * 
     * @type {ContentBlueprintDraftSpace}
     * @memberof ContentBlueprintDraft
     */
    space?: ContentBlueprintDraftSpace;
    /**
     * The new ancestor (i.e. parent page) for the content. If you have
     * specified an ancestor, you must also specify a `space` property
     * in the request body for the space that the ancestor is in.
     * 
     * Note, if you specify more than one ancestor, the last ID in the array
     * will be selected as the parent page for the content.
     * @type {Array<ContentBlueprintDraftAncestorsInner>}
     * @memberof ContentBlueprintDraft
     */
    ancestors?: Array<ContentBlueprintDraftAncestorsInner> | null;
}


/**
 * @export
 */
export const ContentBlueprintDraftTypeEnum = {
    Page: 'page'
} as const;
export type ContentBlueprintDraftTypeEnum = typeof ContentBlueprintDraftTypeEnum[keyof typeof ContentBlueprintDraftTypeEnum];

/**
 * @export
 */
export const ContentBlueprintDraftStatusEnum = {
    Current: 'current'
} as const;
export type ContentBlueprintDraftStatusEnum = typeof ContentBlueprintDraftStatusEnum[keyof typeof ContentBlueprintDraftStatusEnum];

/**
 * 
 * @export
 * @interface ContentBlueprintDraftAncestorsInner
 */
export interface ContentBlueprintDraftAncestorsInner {
    /**
     * The content ID of the ancestor.
     * @type {string}
     * @memberof ContentBlueprintDraftAncestorsInner
     */
    id: string;
}
/**
 * The space for the content.
 * @export
 * @interface ContentBlueprintDraftSpace
 */
export interface ContentBlueprintDraftSpace {
    [key: string]: any | any;
    /**
     * The key of the space
     * @type {string}
     * @memberof ContentBlueprintDraftSpace
     */
    key: string;
}
/**
 * The version for the new content.
 * @export
 * @interface ContentBlueprintDraftVersion
 */
export interface ContentBlueprintDraftVersion {
    [key: string]: any | any;
    /**
     * The version number. Set this to `1`.
     * @type {number}
     * @memberof ContentBlueprintDraftVersion
     */
    number: number;
}
/**
 * 
 * @export
 * @interface ContentBody
 */
export interface ContentBody {
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    view?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    exportView?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    styledView?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    storage?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    wiki?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    editor?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    editor2?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    anonymousExportView?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    atlasDocFormat?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    dynamic?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentBody
     */
    raw?: ContentBody;
    /**
     * 
     * @type {ContentBodyExpandable}
     * @memberof ContentBody
     */
    expandable?: ContentBodyExpandable;
}
/**
 * This object is used when creating or updating content.
 * @export
 * @interface ContentBodyCreate
 */
export interface ContentBodyCreate {
    [key: string]: any | any;
    /**
     * The body of the content in the relevant format.
     * @type {string}
     * @memberof ContentBodyCreate
     */
    value: string;
    /**
     * The content format type. Set the value of this property to
     * the name of the format being used, e.g. 'storage'.
     * @type {string}
     * @memberof ContentBodyCreate
     */
    representation: ContentBodyCreateRepresentationEnum;
}


/**
 * @export
 */
export const ContentBodyCreateRepresentationEnum = {
    View: 'view',
    ExportView: 'export_view',
    StyledView: 'styled_view',
    Storage: 'storage',
    Editor: 'editor',
    Editor2: 'editor2',
    AnonymousExportView: 'anonymous_export_view',
    Wiki: 'wiki',
    AtlasDocFormat: 'atlas_doc_format',
    Plain: 'plain',
    Raw: 'raw'
} as const;
export type ContentBodyCreateRepresentationEnum = typeof ContentBodyCreateRepresentationEnum[keyof typeof ContentBodyCreateRepresentationEnum];

/**
 * This object is used when creating or updating content.
 * @export
 * @interface ContentBodyCreateStorage
 */
export interface ContentBodyCreateStorage {
    [key: string]: any | any;
    /**
     * The body of the content in the relevant format.
     * @type {string}
     * @memberof ContentBodyCreateStorage
     */
    value: string;
    /**
     * The content format type. Set the value of this property to
     * the name of the format being used, e.g. 'storage'.
     * @type {string}
     * @memberof ContentBodyCreateStorage
     */
    representation: ContentBodyCreateStorageRepresentationEnum;
}


/**
 * @export
 */
export const ContentBodyCreateStorageRepresentationEnum = {
    Storage: 'storage',
    View: 'view',
    ExportView: 'export_view',
    StyledView: 'styled_view',
    Editor: 'editor',
    Editor2: 'editor2',
    AnonymousExportView: 'anonymous_export_view',
    Wiki: 'wiki',
    AtlasDocFormat: 'atlas_doc_format'
} as const;
export type ContentBodyCreateStorageRepresentationEnum = typeof ContentBodyCreateStorageRepresentationEnum[keyof typeof ContentBodyCreateStorageRepresentationEnum];

/**
 * 
 * @export
 * @interface ContentBodyExpandable
 */
export interface ContentBodyExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    editor?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    view?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    exportView?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    styledView?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    storage?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    editor2?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    anonymousExportView?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    atlasDocFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    wiki?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    dynamic?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentBodyExpandable
     */
    raw?: string;
}
/**
 * Shows whether a piece of content has attachments, comments, or child pages/whiteboards.
 * Note, this doesn't actually contain the child objects.
 * @export
 * @interface ContentChildType
 */
export interface ContentChildType {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentChildTypeAttachment}
     * @memberof ContentChildType
     */
    attachment?: ContentChildTypeAttachment;
    /**
     * 
     * @type {ContentChildTypeAttachment}
     * @memberof ContentChildType
     */
    comment?: ContentChildTypeAttachment;
    /**
     * 
     * @type {ContentChildTypeAttachment}
     * @memberof ContentChildType
     */
    page?: ContentChildTypeAttachment;
    /**
     * 
     * @type {ContentChildTypeExpandable}
     * @memberof ContentChildType
     */
    expandable?: ContentChildTypeExpandable;
}
/**
 * 
 * @export
 * @interface ContentChildTypeAttachment
 */
export interface ContentChildTypeAttachment {
    /**
     * 
     * @type {boolean}
     * @memberof ContentChildTypeAttachment
     */
    value: boolean;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentChildTypeAttachment
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentChildTypeExpandable
 */
export interface ContentChildTypeExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentChildTypeExpandable
     */
    all?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildTypeExpandable
     */
    attachment?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildTypeExpandable
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildTypeExpandable
     */
    page?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildTypeExpandable
     */
    whiteboard?: string;
}
/**
 * 
 * @export
 * @interface ContentChildren
 */
export interface ContentChildren {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentArray}
     * @memberof ContentChildren
     */
    attachment?: ContentArray;
    /**
     * 
     * @type {ContentArray}
     * @memberof ContentChildren
     */
    comment?: ContentArray;
    /**
     * 
     * @type {ContentArray}
     * @memberof ContentChildren
     */
    page?: ContentArray;
    /**
     * 
     * @type {ContentChildrenExpandable}
     * @memberof ContentChildren
     */
    expandable?: ContentChildrenExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentChildren
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentChildrenExpandable
 */
export interface ContentChildrenExpandable {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ContentChildrenExpandable
     */
    attachment?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildrenExpandable
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentChildrenExpandable
     */
    page?: string;
}
/**
 * 
 * @export
 * @interface ContentCreate
 */
export interface ContentCreate {
    [key: string]: any | any;
    /**
     * The ID of the draft content. Required when publishing a draft.
     * @type {string}
     * @memberof ContentCreate
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentCreate
     */
    title?: string | null;
    /**
     * The type of the new content. Custom content types defined by apps are also supported. eg. 'page', 'blogpost', 'comment' etc.
     * @type {string}
     * @memberof ContentCreate
     */
    type: string;
    /**
     * 
     * @type {ContentCreateSpace}
     * @memberof ContentCreate
     */
    space?: ContentCreateSpace | null;
    /**
     * The status of the new content.
     * @type {string}
     * @memberof ContentCreate
     */
    status?: ContentCreateStatusEnum;
    /**
     * 
     * @type {ContentCreateContainer}
     * @memberof ContentCreate
     */
    container?: ContentCreateContainer | null;
    /**
     * The parent content of the new content.  If you are creating a top-level `page` or `comment`,
     * this can be left blank. If you are creating a child page, this is where the parent page id goes.
     * If you are creating a child comment, this is where the parent comment id goes. Only one parent
     * content id can be specified.
     * @type {Array<ContentCreateAncestorsInner>}
     * @memberof ContentCreate
     */
    ancestors?: Array<ContentCreateAncestorsInner> | null;
    /**
     * 
     * @type {ContentCreateBody}
     * @memberof ContentCreate
     */
    body?: ContentCreateBody;
}


/**
 * @export
 */
export const ContentCreateStatusEnum = {
    Current: 'current',
    Deleted: 'deleted',
    Historical: 'historical',
    Draft: 'draft'
} as const;
export type ContentCreateStatusEnum = typeof ContentCreateStatusEnum[keyof typeof ContentCreateStatusEnum];

/**
 * 
 * @export
 * @interface ContentCreateAncestorsInner
 */
export interface ContentCreateAncestorsInner {
    [key: string]: any | any;
    /**
     * The `id` of the parent content.
     * @type {string}
     * @memberof ContentCreateAncestorsInner
     */
    id: string;
}
/**
 * The body of the new content. Does not apply to attachments.
 * Only one body format should be specified as the property for
 * this object, e.g. `storage`.
 * 
 * Note, `editor2` format is used by Atlassian only. `anonymous_export_view` is
 * the same as `export_view` format but only content viewable by an anonymous
 * user is included.
 * @export
 * @interface ContentCreateBody
 */
export interface ContentCreateBody {
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    view?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    exportView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    styledView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    storage?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    editor?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    editor2?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    wiki?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    anonymousExportView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    plain?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    atlasDocFormat?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentCreateBody
     */
    raw?: ContentBodyCreate;
}
/**
 * The container of the content. Required if type is `comment` or certain types of
 * custom content. If you are trying to create a comment that is a child of another comment,
 * specify the parent comment in the ancestors field, not in this field.
 * @export
 * @interface ContentCreateContainer
 */
export interface ContentCreateContainer {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentCreateContainerId}
     * @memberof ContentCreateContainer
     */
    id: ContentCreateContainerId;
    /**
     * The `type` of the container.
     * @type {string}
     * @memberof ContentCreateContainer
     */
    type: string;
}
/**
 * @type ContentCreateContainerId
 * The `id` of the container.
 * @export
 */
export type ContentCreateContainerId = number | string;
/**
 * The space that the content is being created in.
 * @export
 * @interface ContentCreateSpace
 */
export interface ContentCreateSpace {
    /**
     * 
     * @type {number}
     * @memberof ContentCreateSpace
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpace
     */
    name?: string | null;
    /**
     * 
     * @type {Icon}
     * @memberof ContentCreateSpace
     */
    icon?: Icon | null;
    /**
     * 
     * @type {GlobalSpaceIdentifier}
     * @memberof ContentCreateSpace
     */
    identifiers?: GlobalSpaceIdentifier | null;
    /**
     * 
     * @type {ContentCreateSpaceDescription}
     * @memberof ContentCreateSpace
     */
    description?: ContentCreateSpaceDescription | null;
    /**
     * 
     * @type {Content}
     * @memberof ContentCreateSpace
     */
    homepage?: Content | null;
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpace
     */
    type?: string | null;
    /**
     * 
     * @type {ContentCreateSpaceMetadata}
     * @memberof ContentCreateSpace
     */
    metadata?: ContentCreateSpaceMetadata | null;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof ContentCreateSpace
     */
    operations?: Array<OperationCheckResult> | null;
    /**
     * 
     * @type {Array<SpacePermission>}
     * @memberof ContentCreateSpace
     */
    permissions?: Array<SpacePermission> | null;
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpace
     */
    status?: string | null;
    /**
     * 
     * @type {SpaceSettings}
     * @memberof ContentCreateSpace
     */
    settings?: SpaceSettings | null;
    /**
     * 
     * @type {Theme}
     * @memberof ContentCreateSpace
     */
    theme?: Theme;
    /**
     * 
     * @type {LookAndFeel}
     * @memberof ContentCreateSpace
     */
    lookAndFeel?: LookAndFeel;
    /**
     * 
     * @type {ContentCreateSpaceHistory}
     * @memberof ContentCreateSpace
     */
    history?: ContentCreateSpaceHistory;
    /**
     * The key of the space.
     * @type {string}
     * @memberof ContentCreateSpace
     */
    key: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContentCreateSpace
     */
    links?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface ContentCreateSpaceDescription
 */
export interface ContentCreateSpaceDescription {
    /**
     * 
     * @type {SpaceDescription}
     * @memberof ContentCreateSpaceDescription
     */
    plain?: SpaceDescription;
    /**
     * 
     * @type {SpaceDescription}
     * @memberof ContentCreateSpaceDescription
     */
    view?: SpaceDescription;
    /**
     * 
     * @type {ContentCreateSpaceDescriptionExpandable}
     * @memberof ContentCreateSpaceDescription
     */
    expandable?: ContentCreateSpaceDescriptionExpandable;
}
/**
 * 
 * @export
 * @interface ContentCreateSpaceDescriptionExpandable
 */
export interface ContentCreateSpaceDescriptionExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpaceDescriptionExpandable
     */
    view?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpaceDescriptionExpandable
     */
    plain?: string;
}
/**
 * 
 * @export
 * @interface ContentCreateSpaceHistory
 */
export interface ContentCreateSpaceHistory {
    /**
     * 
     * @type {string}
     * @memberof ContentCreateSpaceHistory
     */
    createdDate: string;
    /**
     * 
     * @type {User}
     * @memberof ContentCreateSpaceHistory
     */
    createdBy?: User | null;
}
/**
 * 
 * @export
 * @interface ContentCreateSpaceMetadata
 */
export interface ContentCreateSpaceMetadata {
    /**
     * 
     * @type {LabelArray}
     * @memberof ContentCreateSpaceMetadata
     */
    labels?: LabelArray;
    /**
     * 
     * @type {object}
     * @memberof ContentCreateSpaceMetadata
     */
    expandable?: object;
}
/**
 * 
 * @export
 * @interface ContentExpandable
 */
export interface ContentExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    childTypes?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    container?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    operations?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    children?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    restrictions?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    history?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    ancestors?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    descendants?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    space?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    extensions?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    schedulePublishDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    schedulePublishInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentExpandable
     */
    macroRenderedOutput?: string;
}
/**
 * 
 * @export
 * @interface ContentHistory
 */
export interface ContentHistory {
    /**
     * 
     * @type {boolean}
     * @memberof ContentHistory
     */
    latest: boolean;
    /**
     * 
     * @type {User}
     * @memberof ContentHistory
     */
    createdBy?: User | null;
    /**
     * 
     * @type {User}
     * @memberof ContentHistory
     */
    ownedBy?: User | null;
    /**
     * 
     * @type {User}
     * @memberof ContentHistory
     */
    lastOwnedBy?: User | null;
    /**
     * 
     * @type {string}
     * @memberof ContentHistory
     */
    createdDate?: string;
    /**
     * 
     * @type {Version}
     * @memberof ContentHistory
     */
    lastUpdated?: Version | null;
    /**
     * 
     * @type {Version}
     * @memberof ContentHistory
     */
    previousVersion?: Version | null;
    /**
     * 
     * @type {ContentHistoryContributors}
     * @memberof ContentHistory
     */
    contributors?: ContentHistoryContributors;
    /**
     * 
     * @type {Version}
     * @memberof ContentHistory
     */
    nextVersion?: Version | null;
    /**
     * 
     * @type {ContentHistoryExpandable}
     * @memberof ContentHistory
     */
    expandable?: ContentHistoryExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentHistory
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentHistoryContributors
 */
export interface ContentHistoryContributors {
    /**
     * 
     * @type {UsersUserKeys}
     * @memberof ContentHistoryContributors
     */
    publishers?: UsersUserKeys | null;
}
/**
 * 
 * @export
 * @interface ContentHistoryExpandable
 */
export interface ContentHistoryExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    previousVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    contributors?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    nextVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    ownedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentHistoryExpandable
     */
    lastOwnedBy?: string;
}
/**
 * 
 * @export
 * @interface ContentLookAndFeel
 */
export interface ContentLookAndFeel {
    /**
     * 
     * @type {ScreenLookAndFeel}
     * @memberof ContentLookAndFeel
     */
    screen?: ScreenLookAndFeel;
    /**
     * 
     * @type {ContainerLookAndFeel}
     * @memberof ContentLookAndFeel
     */
    container?: ContainerLookAndFeel | null;
    /**
     * 
     * @type {ContainerLookAndFeel}
     * @memberof ContentLookAndFeel
     */
    header?: ContainerLookAndFeel | null;
    /**
     * 
     * @type {ContainerLookAndFeel}
     * @memberof ContentLookAndFeel
     */
    body?: ContainerLookAndFeel | null;
}
/**
 * Metadata object for page, blogpost, comment content
 * @export
 * @interface ContentMetadata
 */
export interface ContentMetadata {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentMetadataCurrentuser}
     * @memberof ContentMetadata
     */
    currentuser?: ContentMetadataCurrentuser;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentMetadata
     */
    properties?: { [key: string]: GenericLinksValue; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContentMetadata
     */
    frontend?: { [key: string]: any; };
    /**
     * 
     * @type {ContentMetadataLabels}
     * @memberof ContentMetadata
     */
    labels?: ContentMetadataLabels;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuser
 */
export interface ContentMetadataCurrentuser {
    /**
     * 
     * @type {ContentMetadataCurrentuserFavourited}
     * @memberof ContentMetadataCurrentuser
     */
    favourited?: ContentMetadataCurrentuserFavourited;
    /**
     * 
     * @type {ContentMetadataCurrentuserLastmodified}
     * @memberof ContentMetadataCurrentuser
     */
    lastmodified?: ContentMetadataCurrentuserLastmodified;
    /**
     * 
     * @type {ContentMetadataCurrentuserLastcontributed}
     * @memberof ContentMetadataCurrentuser
     */
    lastcontributed?: ContentMetadataCurrentuserLastcontributed;
    /**
     * 
     * @type {ContentMetadataCurrentuserViewed}
     * @memberof ContentMetadataCurrentuser
     */
    viewed?: ContentMetadataCurrentuserViewed;
    /**
     * 
     * @type {object}
     * @memberof ContentMetadataCurrentuser
     */
    scheduled?: object;
    /**
     * 
     * @type {ContentMetadataCurrentuserExpandable}
     * @memberof ContentMetadataCurrentuser
     */
    expandable?: ContentMetadataCurrentuserExpandable;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuserExpandable
 */
export interface ContentMetadataCurrentuserExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserExpandable
     */
    favourited?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserExpandable
     */
    lastmodified?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserExpandable
     */
    lastcontributed?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserExpandable
     */
    viewed?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserExpandable
     */
    scheduled?: string;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuserFavourited
 */
export interface ContentMetadataCurrentuserFavourited {
    /**
     * 
     * @type {boolean}
     * @memberof ContentMetadataCurrentuserFavourited
     */
    isFavourite?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserFavourited
     */
    favouritedDate?: string;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuserLastcontributed
 */
export interface ContentMetadataCurrentuserLastcontributed {
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserLastcontributed
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserLastcontributed
     */
    when?: string;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuserLastmodified
 */
export interface ContentMetadataCurrentuserLastmodified {
    /**
     * 
     * @type {Version}
     * @memberof ContentMetadataCurrentuserLastmodified
     */
    version?: Version | null;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserLastmodified
     */
    friendlyLastModified?: string;
}
/**
 * 
 * @export
 * @interface ContentMetadataCurrentuserViewed
 */
export interface ContentMetadataCurrentuserViewed {
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserViewed
     */
    lastSeen?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentMetadataCurrentuserViewed
     */
    friendlyLastSeen?: string;
}
/**
 * @type ContentMetadataLabels
 * 
 * @export
 */
export type ContentMetadataLabels = Array<Label> | LabelArray;
/**
 * 
 * @export
 * @interface ContentPageResponse
 */
export interface ContentPageResponse {
    /**
     * 
     * @type {Array<Content>}
     * @memberof ContentPageResponse
     */
    results: Array<Content>;
    /**
     * 
     * @type {number}
     * @memberof ContentPageResponse
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ContentPageResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ContentPageResponse
     */
    size: number;
}
/**
 * This object represents the request for the content permission check API.
 * @export
 * @interface ContentPermissionRequest
 */
export interface ContentPermissionRequest {
    /**
     * 
     * @type {PermissionSubjectWithGroupId}
     * @memberof ContentPermissionRequest
     */
    subject: PermissionSubjectWithGroupId;
    /**
     * The content permission operation to check.
     * @type {string}
     * @memberof ContentPermissionRequest
     */
    operation: ContentPermissionRequestOperationEnum;
}


/**
 * @export
 */
export const ContentPermissionRequestOperationEnum = {
    Read: 'read',
    Update: 'update',
    Delete: 'delete'
} as const;
export type ContentPermissionRequestOperationEnum = typeof ContentPermissionRequestOperationEnum[keyof typeof ContentPermissionRequestOperationEnum];

/**
 * 
 * @export
 * @interface ContentProperty
 */
export interface ContentProperty {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ContentProperty
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ContentProperty
     */
    key: string;
    /**
     * 
     * @type {ContentPropertyValue}
     * @memberof ContentProperty
     */
    value: ContentPropertyValue;
    /**
     * 
     * @type {ContentPropertyVersion}
     * @memberof ContentProperty
     */
    version?: ContentPropertyVersion;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentProperty
     */
    _links: { [key: string]: GenericLinksValue; };
    /**
     * 
     * @type {ContentPropertyExpandable}
     * @memberof ContentProperty
     */
    expandable?: ContentPropertyExpandable;
}
/**
 * 
 * @export
 * @interface ContentPropertyArray
 */
export interface ContentPropertyArray {
    /**
     * 
     * @type {Array<ContentProperty>}
     * @memberof ContentPropertyArray
     */
    results: Array<ContentProperty>;
    /**
     * 
     * @type {number}
     * @memberof ContentPropertyArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ContentPropertyArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ContentPropertyArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentPropertyArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentPropertyCreate
 */
export interface ContentPropertyCreate {
    [key: string]: any | any;
    /**
     * The key of the new property.
     * @type {string}
     * @memberof ContentPropertyCreate
     */
    key: string;
    /**
     * 
     * @type {ContentPropertyValue}
     * @memberof ContentPropertyCreate
     */
    value: ContentPropertyValue;
}
/**
 * 
 * @export
 * @interface ContentPropertyCreateNoKey
 */
export interface ContentPropertyCreateNoKey {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentPropertyValue}
     * @memberof ContentPropertyCreateNoKey
     */
    value: ContentPropertyValue;
}
/**
 * 
 * @export
 * @interface ContentPropertyExpandable
 */
export interface ContentPropertyExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentPropertyExpandable
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentPropertyExpandable
     */
    additionalProperties?: string;
}
/**
 * 
 * @export
 * @interface ContentPropertyUpdate
 */
export interface ContentPropertyUpdate {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentPropertyValue}
     * @memberof ContentPropertyUpdate
     */
    value: ContentPropertyValue;
    /**
     * 
     * @type {ContentPropertyUpdateVersion}
     * @memberof ContentPropertyUpdate
     */
    version: ContentPropertyUpdateVersion | null;
}
/**
 * The version number of the property.
 * @export
 * @interface ContentPropertyUpdateVersion
 */
export interface ContentPropertyUpdateVersion {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentPropertyUpdateVersionNumber}
     * @memberof ContentPropertyUpdateVersion
     */
    number: ContentPropertyUpdateVersionNumber;
    /**
     * If `minorEdit` is set to 'true', no notification email or activity
     * stream will be generated for the change.
     * @type {boolean}
     * @memberof ContentPropertyUpdateVersion
     */
    minorEdit?: boolean;
}
/**
 * @type ContentPropertyUpdateVersionNumber
 * The new version for the updated content property. Set this to the
 * current version number incremented by one. To get the current
 * version number, use 'Get content property' and retrieve
 * `version.number`.
 * @export
 */
export type ContentPropertyUpdateVersionNumber = number | string;
/**
 * @type ContentPropertyValue
 * The value of the content property. This can be empty or a complex object.
 * @export
 */
export type ContentPropertyValue = Array<string> | boolean | string | { [key: string]: any; };
/**
 * 
 * @export
 * @interface ContentPropertyVersion
 */
export interface ContentPropertyVersion {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ContentPropertyVersion
     */
    when: string;
    /**
     * 
     * @type {string}
     * @memberof ContentPropertyVersion
     */
    message: string;
    /**
     * 
     * @type {number}
     * @memberof ContentPropertyVersion
     */
    number: number;
    /**
     * 
     * @type {boolean}
     * @memberof ContentPropertyVersion
     */
    minorEdit: boolean;
    /**
     * True if content type is modifed in this version (e.g. page to blog)
     * @type {boolean}
     * @memberof ContentPropertyVersion
     */
    contentTypeModified?: boolean;
}
/**
 * 
 * @export
 * @interface ContentRestriction
 */
export interface ContentRestriction {
    /**
     * 
     * @type {string}
     * @memberof ContentRestriction
     */
    operation: ContentRestrictionOperationEnum;
    /**
     * 
     * @type {ContentRestrictionRestrictions}
     * @memberof ContentRestriction
     */
    restrictions?: ContentRestrictionRestrictions;
    /**
     * 
     * @type {Content}
     * @memberof ContentRestriction
     */
    content?: Content | null;
    /**
     * 
     * @type {ContentRestrictionExpandable}
     * @memberof ContentRestriction
     */
    expandable: ContentRestrictionExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentRestriction
     */
    _links: { [key: string]: GenericLinksValue; };
}


/**
 * @export
 */
export const ContentRestrictionOperationEnum = {
    Administer: 'administer',
    Copy: 'copy',
    Create: 'create',
    Delete: 'delete',
    Export: 'export',
    Move: 'move',
    Purge: 'purge',
    PurgeVersion: 'purge_version',
    Read: 'read',
    Restore: 'restore',
    Update: 'update',
    Use: 'use'
} as const;
export type ContentRestrictionOperationEnum = typeof ContentRestrictionOperationEnum[keyof typeof ContentRestrictionOperationEnum];

/**
 * @type ContentRestrictionAddOrUpdateArray
 * 
 * @export
 */
export type ContentRestrictionAddOrUpdateArray = Array<ContentRestrictionUpdate> | ContentRestrictionAddOrUpdateArrayOneOf;
/**
 * 
 * @export
 * @interface ContentRestrictionAddOrUpdateArrayOneOf
 */
export interface ContentRestrictionAddOrUpdateArrayOneOf {
    /**
     * 
     * @type {Array<ContentRestrictionUpdate>}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    results: Array<ContentRestrictionUpdate>;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    size?: number;
    /**
     * This property is used by the UI to figure out whether a set of restrictions
     * has changed.
     * @type {string}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    restrictionsHash?: string;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentRestrictionAddOrUpdateArrayOneOf
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentRestrictionArray
 */
export interface ContentRestrictionArray {
    /**
     * 
     * @type {Array<ContentRestriction>}
     * @memberof ContentRestrictionArray
     */
    results: Array<ContentRestriction>;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ContentRestrictionArray
     */
    size: number;
    /**
     * This property is used by the UI to figure out whether a set of restrictions
     * has changed.
     * @type {string}
     * @memberof ContentRestrictionArray
     */
    restrictionsHash: string;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentRestrictionArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentRestrictionExpandable
 */
export interface ContentRestrictionExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionExpandable
     */
    restrictions?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionExpandable
     */
    content?: string;
}
/**
 * 
 * @export
 * @interface ContentRestrictionRestrictions
 */
export interface ContentRestrictionRestrictions {
    /**
     * 
     * @type {UserArray}
     * @memberof ContentRestrictionRestrictions
     */
    user?: UserArray;
    /**
     * 
     * @type {GroupArray}
     * @memberof ContentRestrictionRestrictions
     */
    group?: GroupArray;
    /**
     * 
     * @type {ContentRestrictionRestrictionsExpandable}
     * @memberof ContentRestrictionRestrictions
     */
    expandable?: ContentRestrictionRestrictionsExpandable;
}
/**
 * 
 * @export
 * @interface ContentRestrictionRestrictionsExpandable
 */
export interface ContentRestrictionRestrictionsExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionRestrictionsExpandable
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionRestrictionsExpandable
     */
    group?: string;
}
/**
 * 
 * @export
 * @interface ContentRestrictionUpdate
 */
export interface ContentRestrictionUpdate {
    /**
     * The restriction operation applied to content.
     * @type {string}
     * @memberof ContentRestrictionUpdate
     */
    operation: ContentRestrictionUpdateOperationEnum;
    /**
     * 
     * @type {ContentRestrictionUpdateRestrictions}
     * @memberof ContentRestrictionUpdate
     */
    restrictions: ContentRestrictionUpdateRestrictions;
    /**
     * 
     * @type {Content}
     * @memberof ContentRestrictionUpdate
     */
    content?: Content | null;
}


/**
 * @export
 */
export const ContentRestrictionUpdateOperationEnum = {
    Administer: 'administer',
    Copy: 'copy',
    Create: 'create',
    Delete: 'delete',
    Export: 'export',
    Move: 'move',
    Purge: 'purge',
    PurgeVersion: 'purge_version',
    Read: 'read',
    Restore: 'restore',
    Update: 'update',
    Use: 'use'
} as const;
export type ContentRestrictionUpdateOperationEnum = typeof ContentRestrictionUpdateOperationEnum[keyof typeof ContentRestrictionUpdateOperationEnum];

/**
 * The users/groups that the restrictions will be applied to. At least one of
 * `user` or `group` must be specified for this object.
 * @export
 * @interface ContentRestrictionUpdateRestrictions
 */
export interface ContentRestrictionUpdateRestrictions {
    /**
     * The groups that the restrictions will be applied to. This array must
     * have at least one item, otherwise it should be omitted. At least one of `name` or `id` is required,
     * and `id` should be used where possible in advance of the `name` deprecation.
     * @type {Array<ContentRestrictionUpdateRestrictionsGroupInner>}
     * @memberof ContentRestrictionUpdateRestrictions
     */
    group?: Array<ContentRestrictionUpdateRestrictionsGroupInner>;
    /**
     * 
     * @type {ContentRestrictionUpdateRestrictionsUser}
     * @memberof ContentRestrictionUpdateRestrictions
     */
    user?: ContentRestrictionUpdateRestrictionsUser;
}
/**
 * A group that the restriction will be applied to.
 * @export
 * @interface ContentRestrictionUpdateRestrictionsGroupInner
 */
export interface ContentRestrictionUpdateRestrictionsGroupInner {
    /**
     * Set to 'group'.
     * @type {string}
     * @memberof ContentRestrictionUpdateRestrictionsGroupInner
     */
    type: ContentRestrictionUpdateRestrictionsGroupInnerTypeEnum;
    /**
     * The name of the group.
     * @type {string}
     * @memberof ContentRestrictionUpdateRestrictionsGroupInner
     * @deprecated
     */
    name?: string;
    /**
     * The id of the group.
     * @type {string}
     * @memberof ContentRestrictionUpdateRestrictionsGroupInner
     */
    id?: string;
}


/**
 * @export
 */
export const ContentRestrictionUpdateRestrictionsGroupInnerTypeEnum = {
    Group: 'group'
} as const;
export type ContentRestrictionUpdateRestrictionsGroupInnerTypeEnum = typeof ContentRestrictionUpdateRestrictionsGroupInnerTypeEnum[keyof typeof ContentRestrictionUpdateRestrictionsGroupInnerTypeEnum];

/**
 * @type ContentRestrictionUpdateRestrictionsUser
 * 
 * @export
 */
export type ContentRestrictionUpdateRestrictionsUser = Array<User> | UserArray;
/**
 * 
 * @export
 * @interface ContentRestrictions
 */
export interface ContentRestrictions {
    /**
     * 
     * @type {ContentRestriction}
     * @memberof ContentRestrictions
     */
    read?: ContentRestriction;
    /**
     * 
     * @type {ContentRestriction}
     * @memberof ContentRestrictions
     */
    update?: ContentRestriction;
    /**
     * 
     * @type {ContentRestrictionsExpandable}
     * @memberof ContentRestrictions
     */
    expandable?: ContentRestrictionsExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentRestrictions
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentRestrictionsExpandable
 */
export interface ContentRestrictionsExpandable {
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionsExpandable
     */
    read?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentRestrictionsExpandable
     */
    update?: string;
}
/**
 * 
 * @export
 * @interface ContentState
 */
export interface ContentState {
    /**
     * identifier of content state. If 0, 1, or 2, this is a default space state
     * @type {number}
     * @memberof ContentState
     */
    id: number;
    /**
     * name of content state.
     * @type {string}
     * @memberof ContentState
     */
    name: string;
    /**
     * hex string representing color of state
     * @type {string}
     * @memberof ContentState
     */
    color: string;
}
/**
 * 
 * @export
 * @interface ContentStateBulkSetTaskUpdate
 */
export interface ContentStateBulkSetTaskUpdate {
    /**
     * 
     * @type {Array<string>}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    set: Array<string>;
    /**
     * 
     * @type {Array<ContentStateFailure>}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    failed: Array<ContentStateFailure>;
    /**
     * 
     * @type {number}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    percentage: number;
    /**
     * 
     * @type {string}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    message?: string;
    /**
     * 
     * @type {ContentState}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    state?: ContentState;
    /**
     * 
     * @type {boolean}
     * @memberof ContentStateBulkSetTaskUpdate
     */
    success: boolean;
}
/**
 * Object describing why a content state set failed
 * @export
 * @interface ContentStateFailure
 */
export interface ContentStateFailure {
    /**
     * 
     * @type {string}
     * @memberof ContentStateFailure
     */
    contentId: string;
    /**
     * 
     * @type {string}
     * @memberof ContentStateFailure
     */
    failureReason: string;
}
/**
 * 
 * @export
 * @interface ContentStateInput
 */
export interface ContentStateInput {
    /**
     * 
     * @type {string}
     * @memberof ContentStateInput
     */
    name?: string;
    /**
     * Color of state. Must be in 6 digit hex form (#FFFFFF). The default colors offered in the UI are:
     *  #ff7452 (red),
     *  #2684ff (blue),
     *  #ffc400 (yellow),
     *  #57d9a3 (green), and
     *  #8777d9 (purple)
     * @type {string}
     * @memberof ContentStateInput
     */
    color?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentStateInput
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ContentStateInput
     */
    spaceKey?: string;
}
/**
 * 
 * @export
 * @interface ContentStateResponse
 */
export interface ContentStateResponse {
    /**
     * 
     * @type {ContentState}
     * @memberof ContentStateResponse
     */
    contentState?: ContentState;
    /**
     * Timestamp of last publish event where content state changed
     * @type {string}
     * @memberof ContentStateResponse
     */
    lastUpdated?: string;
}
/**
 * 
 * @export
 * @interface ContentStateRestInput
 */
export interface ContentStateRestInput {
    /**
     * Name of content state. Maximum 20 characters.
     * @type {string}
     * @memberof ContentStateRestInput
     */
    name?: string;
    /**
     * Color of state. Must be in 6 digit hex form (#FFFFFF). The default colors offered in the UI are:
     *  #ff7452 (red),
     *  #2684ff (blue),
     *  #ffc400 (yellow),
     *  #57d9a3 (green), and
     *  #8777d9 (purple)
     * @type {string}
     * @memberof ContentStateRestInput
     */
    color?: string;
    /**
     * id of state. This can be 0,1, or 2 if you wish to specify a default space state.
     * @type {number}
     * @memberof ContentStateRestInput
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface ContentStateSettings
 */
export interface ContentStateSettings {
    /**
     * Whether users can place any content states on content
     * @type {boolean}
     * @memberof ContentStateSettings
     */
    contentStatesAllowed: boolean;
    /**
     * Whether users can place their custom states on content
     * @type {boolean}
     * @memberof ContentStateSettings
     */
    customContentStatesAllowed: boolean;
    /**
     * Whether users can place space suggested states on content
     * @type {boolean}
     * @memberof ContentStateSettings
     */
    spaceContentStatesAllowed: boolean;
    /**
     * space suggested content states that users can choose from
     * @type {Array<ContentState>}
     * @memberof ContentStateSettings
     */
    spaceContentStates?: Array<ContentState>;
}
/**
 * 
 * @export
 * @interface ContentTemplate
 */
export interface ContentTemplate {
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    templateId: string;
    /**
     * 
     * @type {ContentTemplateOriginalTemplate}
     * @memberof ContentTemplate
     */
    originalTemplate?: ContentTemplateOriginalTemplate;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    referencingBlueprint?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    description: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContentTemplate
     */
    space?: { [key: string]: any; };
    /**
     * 
     * @type {Array<Label>}
     * @memberof ContentTemplate
     */
    labels: Array<Label>;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    templateType: string;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplate
     */
    editorVersion?: string;
    /**
     * 
     * @type {ContentTemplateBody}
     * @memberof ContentTemplate
     */
    body?: ContentTemplateBody;
    /**
     * 
     * @type {BlueprintTemplateExpandable}
     * @memberof ContentTemplate
     */
    expandable?: BlueprintTemplateExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentTemplate
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ContentTemplateArray
 */
export interface ContentTemplateArray {
    /**
     * 
     * @type {Array<ContentTemplate>}
     * @memberof ContentTemplateArray
     */
    results: Array<ContentTemplate>;
    /**
     * 
     * @type {number}
     * @memberof ContentTemplateArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ContentTemplateArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ContentTemplateArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ContentTemplateArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * The body of the new content. Does not apply to attachments.
 * Only one body format should be specified as the property for
 * this object, e.g. `storage`.
 * 
 * Note, `editor2` format is used by Atlassian only. `anonymous_export_view` is
 * the same as `export_view` format but only content viewable by an anonymous
 * user is included.
 * @export
 * @interface ContentTemplateBody
 */
export interface ContentTemplateBody {
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    view?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    exportView?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    styledView?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    storage?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    editor?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    editor2?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    wiki?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    atlasDocFormat?: ContentBody;
    /**
     * 
     * @type {ContentBody}
     * @memberof ContentTemplateBody
     */
    anonymousExportView?: ContentBody;
}
/**
 * The body of the new content. Does not apply to attachments.
 * Only one body format should be specified as the property for
 * this object, e.g. `storage`.
 * 
 * Note, `editor2` format is used by Atlassian only. `anonymous_export_view` is
 * the same as `export_view` format but only content viewable by an anonymous
 * user is included.
 * @export
 * @interface ContentTemplateBodyCreate
 */
export interface ContentTemplateBodyCreate {
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    view?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    exportView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    styledView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    storage?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    editor?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    editor2?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    wiki?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    atlasDocFormat?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentTemplateBodyCreate
     */
    anonymousExportView?: ContentBodyCreate;
}
/**
 * This object is used to create content templates.
 * @export
 * @interface ContentTemplateCreate
 */
export interface ContentTemplateCreate {
    [key: string]: any | any;
    /**
     * The name of the new template.
     * @type {string}
     * @memberof ContentTemplateCreate
     */
    name: string;
    /**
     * The type of the new template. Set to `page`.
     * @type {string}
     * @memberof ContentTemplateCreate
     */
    templateType: string;
    /**
     * 
     * @type {ContentTemplateBodyCreate}
     * @memberof ContentTemplateCreate
     */
    body: ContentTemplateBodyCreate;
    /**
     * A description of the new template.
     * @type {string}
     * @memberof ContentTemplateCreate
     */
    description?: string;
    /**
     * Labels for the new template.
     * @type {Array<Label>}
     * @memberof ContentTemplateCreate
     */
    labels?: Array<Label>;
    /**
     * 
     * @type {ContentTemplateCreateSpace}
     * @memberof ContentTemplateCreate
     */
    space?: ContentTemplateCreateSpace | null;
}
/**
 * The key for the space of the new template. Only applies to space templates.
 * If the spaceKey is not specified, the template will be created as a global
 * template.
 * @export
 * @interface ContentTemplateCreateSpace
 */
export interface ContentTemplateCreateSpace {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplateCreateSpace
     */
    key: string;
}
/**
 * 
 * @export
 * @interface ContentTemplateOriginalTemplate
 */
export interface ContentTemplateOriginalTemplate {
    /**
     * 
     * @type {string}
     * @memberof ContentTemplateOriginalTemplate
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplateOriginalTemplate
     */
    moduleKey?: string;
}
/**
 * This object is used to update content templates.
 * @export
 * @interface ContentTemplateUpdate
 */
export interface ContentTemplateUpdate {
    [key: string]: any | any;
    /**
     * The ID of the template being updated.
     * @type {string}
     * @memberof ContentTemplateUpdate
     */
    templateId: string;
    /**
     * The name of the template. Set to the current `name` if this field is
     * not being updated.
     * @type {string}
     * @memberof ContentTemplateUpdate
     */
    name: string;
    /**
     * The type of the template. Set to `page`.
     * @type {string}
     * @memberof ContentTemplateUpdate
     */
    templateType: ContentTemplateUpdateTemplateTypeEnum;
    /**
     * 
     * @type {ContentTemplateBodyCreate}
     * @memberof ContentTemplateUpdate
     */
    body: ContentTemplateBodyCreate;
    /**
     * A description of the template.
     * @type {string}
     * @memberof ContentTemplateUpdate
     */
    description?: string;
    /**
     * Labels for the template.
     * @type {Array<Label>}
     * @memberof ContentTemplateUpdate
     */
    labels?: Array<Label>;
    /**
     * 
     * @type {ContentTemplateUpdateSpace}
     * @memberof ContentTemplateUpdate
     */
    space?: ContentTemplateUpdateSpace | null;
}


/**
 * @export
 */
export const ContentTemplateUpdateTemplateTypeEnum = {
    Page: 'page'
} as const;
export type ContentTemplateUpdateTemplateTypeEnum = typeof ContentTemplateUpdateTemplateTypeEnum[keyof typeof ContentTemplateUpdateTemplateTypeEnum];

/**
 * The key for the space of the template. Required if the template is a
 * space template. Set this to the current `space.key`.
 * @export
 * @interface ContentTemplateUpdateSpace
 */
export interface ContentTemplateUpdateSpace {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof ContentTemplateUpdateSpace
     */
    key: string;
}
/**
 * 
 * @export
 * @interface ContentUpdate
 */
export interface ContentUpdate {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentUpdateVersion}
     * @memberof ContentUpdate
     */
    version: ContentUpdateVersion | null;
    /**
     * The updated title of the content. If you are updating a non-draft `page` or `blogpost`, title is required. If you are not changing the title, set this field to the the current title.
     * @type {string}
     * @memberof ContentUpdate
     */
    title?: string | null;
    /**
     * The type of content. Set this to the current type of the content. For example, - page - blogpost - comment - attachment
     * @type {string}
     * @memberof ContentUpdate
     */
    type: string | null;
    /**
     * The updated status of the content. Note, if you change the status of a page from
     * 'current' to 'draft' and it has an existing draft, the existing draft will be deleted
     * in favor of the updated page.
     * @type {string}
     * @memberof ContentUpdate
     */
    status?: ContentUpdateStatusEnum;
    /**
     * The new parent for the content. Only one parent content 'id' can be specified.
     * @type {Array<ContentUpdateAncestorsInner>}
     * @memberof ContentUpdate
     */
    ancestors?: Array<ContentUpdateAncestorsInner> | null;
    /**
     * 
     * @type {ContentUpdateBody}
     * @memberof ContentUpdate
     */
    body?: ContentUpdateBody;
}


/**
 * @export
 */
export const ContentUpdateStatusEnum = {
    Current: 'current',
    Trashed: 'trashed',
    Deleted: 'deleted',
    Historical: 'historical',
    Draft: 'draft'
} as const;
export type ContentUpdateStatusEnum = typeof ContentUpdateStatusEnum[keyof typeof ContentUpdateStatusEnum];

/**
 * 
 * @export
 * @interface ContentUpdateAncestorsInner
 */
export interface ContentUpdateAncestorsInner {
    [key: string]: any | any;
    /**
     * 
     * @type {ContentUpdateAncestorsInnerId}
     * @memberof ContentUpdateAncestorsInner
     */
    id: ContentUpdateAncestorsInnerId;
}
/**
 * @type ContentUpdateAncestorsInnerId
 * The `id` of the parent content.
 * @export
 */
export type ContentUpdateAncestorsInnerId = number | string;
/**
 * The updated body of the content. Does not apply to attachments.
 * If you are not sure how to generate these formats, you can create a page in the
 * Confluence application, retrieve the content using [Get content](#api-content-get),
 * and expand the desired content format, e.g. `expand=body.storage`.
 * @export
 * @interface ContentUpdateBody
 */
export interface ContentUpdateBody {
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    view?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    exportView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    styledView?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreateStorage}
     * @memberof ContentUpdateBody
     */
    storage?: ContentBodyCreateStorage;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    editor?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    editor2?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    wiki?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    atlasDocFormat?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof ContentUpdateBody
     */
    anonymousExportView?: ContentBodyCreate;
}
/**
 * The new version for the updated content. Set this to the current version number incremented by one, unless you are changing the status to 'draft' which must have a version number of 1.
 * 
 * To get the current version number, use [Get content by ID](#api-content-id-get) and retrieve `version.number`.
 * @export
 * @interface ContentUpdateVersion
 */
export interface ContentUpdateVersion {
    [key: string]: any | any;
    /**
     * The version number.
     * @type {number}
     * @memberof ContentUpdateVersion
     */
    number: number;
    /**
     * An optional message to be stored with the corresponding version.
     * @type {string}
     * @memberof ContentUpdateVersion
     */
    message?: string | null;
}
/**
 * 
 * @export
 * @interface CopyPageHierarchyRequest
 */
export interface CopyPageHierarchyRequest {
    /**
     * If set to `true`, attachments are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyAttachments?: boolean;
    /**
     * If set to `true`, page permissions are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyPermissions?: boolean;
    /**
     * If set to `true`, content properties are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyProperties?: boolean;
    /**
     * If set to `true`, labels are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyLabels?: boolean;
    /**
     * If set to `true`, custom contents are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyCustomContents?: boolean;
    /**
     * If set to `true`, descendants are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageHierarchyRequest
     */
    copyDescendants?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CopyPageHierarchyRequest
     */
    destinationPageId: string;
    /**
     * 
     * @type {CopyPageHierarchyTitleOptions}
     * @memberof CopyPageHierarchyRequest
     */
    titleOptions?: CopyPageHierarchyTitleOptions;
}
/**
 * Required for copying page in the same space.
 * @export
 * @interface CopyPageHierarchyTitleOptions
 */
export interface CopyPageHierarchyTitleOptions {
    /**
     * 
     * @type {string}
     * @memberof CopyPageHierarchyTitleOptions
     */
    prefix?: string;
    /**
     * 
     * @type {string}
     * @memberof CopyPageHierarchyTitleOptions
     */
    replace?: string;
    /**
     * 
     * @type {string}
     * @memberof CopyPageHierarchyTitleOptions
     */
    search?: string;
}
/**
 * 
 * @export
 * @interface CopyPageRequest
 */
export interface CopyPageRequest {
    /**
     * If set to `true`, attachments are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageRequest
     */
    copyAttachments?: boolean;
    /**
     * If set to `true`, page permissions are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageRequest
     */
    copyPermissions?: boolean;
    /**
     * If set to `true`, content properties are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageRequest
     */
    copyProperties?: boolean;
    /**
     * If set to `true`, labels are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageRequest
     */
    copyLabels?: boolean;
    /**
     * If set to `true`, custom contents are copied to the destination page.
     * @type {boolean}
     * @memberof CopyPageRequest
     */
    copyCustomContents?: boolean;
    /**
     * 
     * @type {CopyPageRequestDestination}
     * @memberof CopyPageRequest
     */
    destination: CopyPageRequestDestination;
    /**
     * If defined, this will replace the title of the destination page.
     * @type {string}
     * @memberof CopyPageRequest
     */
    pageTitle?: string;
    /**
     * 
     * @type {CopyPageRequestBody}
     * @memberof CopyPageRequest
     */
    body?: CopyPageRequestBody;
}
/**
 * If defined, this will replace the body of the destination page.
 * @export
 * @interface CopyPageRequestBody
 */
export interface CopyPageRequestBody {
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof CopyPageRequestBody
     */
    storage?: ContentBodyCreate;
    /**
     * 
     * @type {ContentBodyCreate}
     * @memberof CopyPageRequestBody
     */
    editor2?: ContentBodyCreate;
}
/**
 * Defines where the page will be copied to, and can be one of the following types.
 * 
 *   - `parent_page`: page will be copied as a child of the specified parent page
 *   - `space`: page will be copied to the specified space as a root page on the space
 *   - `existing_page`: page will be copied and replace the specified page
 * @export
 * @interface CopyPageRequestDestination
 */
export interface CopyPageRequestDestination {
    /**
     * 
     * @type {string}
     * @memberof CopyPageRequestDestination
     */
    type: CopyPageRequestDestinationTypeEnum;
    /**
     * The space key for `space` type, and content id for `parent_page` and `existing_page`
     * @type {string}
     * @memberof CopyPageRequestDestination
     */
    value: string;
}


/**
 * @export
 */
export const CopyPageRequestDestinationTypeEnum = {
    Space: 'space',
    ExistingPage: 'existing_page',
    ParentPage: 'parent_page'
} as const;
export type CopyPageRequestDestinationTypeEnum = typeof CopyPageRequestDestinationTypeEnum[keyof typeof CopyPageRequestDestinationTypeEnum];

/**
 * 
 * @export
 * @interface DynamicModulesErrorMessage
 */
export interface DynamicModulesErrorMessage {
    /**
     * The error message.
     * @type {string}
     * @memberof DynamicModulesErrorMessage
     */
    message: string;
}
/**
 * 
 * @export
 * @interface EmbeddedContent
 */
export interface EmbeddedContent {
    [key: string]: any | any;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedContent
     */
    entityId?: number;
    /**
     * 
     * @type {string}
     * @memberof EmbeddedContent
     */
    entityType?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EmbeddedContent
     */
    entity?: { [key: string]: any; };
}
/**
 * @type GenericLinksValue
 * 
 * @export
 */
export type GenericLinksValue = string | { [key: string]: any; };
/**
 * 
 * @export
 * @interface GetContentForSpace200Response
 */
export interface GetContentForSpace200Response {
    /**
     * 
     * @type {ContentArray}
     * @memberof GetContentForSpace200Response
     */
    page?: ContentArray;
    /**
     * 
     * @type {ContentArray}
     * @memberof GetContentForSpace200Response
     */
    blogpost?: ContentArray;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof GetContentForSpace200Response
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface GetRestrictionsByOperation200ResponseValue
 */
export interface GetRestrictionsByOperation200ResponseValue {
    /**
     * 
     * @type {ContentRestriction}
     * @memberof GetRestrictionsByOperation200ResponseValue
     */
    operationType?: ContentRestriction;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof GetRestrictionsByOperation200ResponseValue
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface GetViewers200Response
 */
export interface GetViewers200Response {
    /**
     * The content ID.
     * @type {number}
     * @memberof GetViewers200Response
     */
    id?: number;
    /**
     * The total number of distinct viewers for the content.
     * @type {number}
     * @memberof GetViewers200Response
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface GetViews200Response
 */
export interface GetViews200Response {
    /**
     * The content ID.
     * @type {number}
     * @memberof GetViews200Response
     */
    id?: number;
    /**
     * The total number of views for the content.
     * @type {number}
     * @memberof GetViews200Response
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface GlobalSpaceIdentifier
 */
export interface GlobalSpaceIdentifier {
    /**
     * 
     * @type {string}
     * @memberof GlobalSpaceIdentifier
     */
    spaceIdentifier: string;
}
/**
 * 
 * @export
 * @interface Group
 */
export interface Group {
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    type: GroupTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    id: string;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Group
     */
    _links?: { [key: string]: GenericLinksValue; };
}


/**
 * @export
 */
export const GroupTypeEnum = {
    Group: 'group'
} as const;
export type GroupTypeEnum = typeof GroupTypeEnum[keyof typeof GroupTypeEnum];

/**
 * 
 * @export
 * @interface GroupArray
 */
export interface GroupArray {
    /**
     * 
     * @type {Array<Group>}
     * @memberof GroupArray
     */
    results: Array<Group>;
    /**
     * 
     * @type {number}
     * @memberof GroupArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof GroupArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof GroupArray
     */
    size: number;
}
/**
 * Same as GroupArray but with `_links` property.
 * @export
 * @interface GroupArrayWithLinks
 */
export interface GroupArrayWithLinks {
    /**
     * 
     * @type {Array<Group>}
     * @memberof GroupArrayWithLinks
     */
    results: Array<Group>;
    /**
     * 
     * @type {number}
     * @memberof GroupArrayWithLinks
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof GroupArrayWithLinks
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof GroupArrayWithLinks
     */
    size: number;
    /**
     * This property will return total count of the objects before pagination is applied.
     * This value is returned if `shouldReturnTotalSize` is set to `true`.
     * @type {number}
     * @memberof GroupArrayWithLinks
     */
    totalSize?: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof GroupArrayWithLinks
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * The name property will soon be deprecated in favor of using id.
 * @export
 * @interface GroupCreate
 */
export interface GroupCreate {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof GroupCreate
     */
    type: GroupCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GroupCreate
     * @deprecated
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupCreate
     */
    id?: string;
}


/**
 * @export
 */
export const GroupCreateTypeEnum = {
    Group: 'group'
} as const;
export type GroupCreateTypeEnum = typeof GroupCreateTypeEnum[keyof typeof GroupCreateTypeEnum];

/**
 * 
 * @export
 * @interface GroupName
 */
export interface GroupName {
    /**
     * 
     * @type {string}
     * @memberof GroupName
     */
    name: string;
}
/**
 * 
 * @export
 * @interface HeaderLookAndFeel
 */
export interface HeaderLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof HeaderLookAndFeel
     */
    backgroundColor: string;
    /**
     * 
     * @type {ButtonLookAndFeel}
     * @memberof HeaderLookAndFeel
     */
    button: ButtonLookAndFeel | null;
    /**
     * 
     * @type {NavigationLookAndFeel}
     * @memberof HeaderLookAndFeel
     */
    primaryNavigation: NavigationLookAndFeel | null;
    /**
     * 
     * @type {NavigationLookAndFeel}
     * @memberof HeaderLookAndFeel
     */
    secondaryNavigation: NavigationLookAndFeel | null;
    /**
     * 
     * @type {SearchFieldLookAndFeel}
     * @memberof HeaderLookAndFeel
     */
    search: SearchFieldLookAndFeel | null;
}
/**
 * 
 * @export
 * @interface HorizontalHeaderLookAndFeel
 */
export interface HorizontalHeaderLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof HorizontalHeaderLookAndFeel
     */
    backgroundColor: string;
    /**
     * 
     * @type {ButtonLookAndFeel}
     * @memberof HorizontalHeaderLookAndFeel
     */
    button?: ButtonLookAndFeel | null;
    /**
     * 
     * @type {TopNavigationLookAndFeel}
     * @memberof HorizontalHeaderLookAndFeel
     */
    primaryNavigation: TopNavigationLookAndFeel;
    /**
     * 
     * @type {NavigationLookAndFeel}
     * @memberof HorizontalHeaderLookAndFeel
     */
    secondaryNavigation?: NavigationLookAndFeel | null;
    /**
     * 
     * @type {SearchFieldLookAndFeel}
     * @memberof HorizontalHeaderLookAndFeel
     */
    search?: SearchFieldLookAndFeel | null;
}
/**
 * This object represents an icon. If used as a profilePicture, this may be returned as null, depending on the user's privacy setting.
 * @export
 * @interface Icon
 */
export interface Icon {
    /**
     * 
     * @type {string}
     * @memberof Icon
     */
    path: string;
    /**
     * 
     * @type {number}
     * @memberof Icon
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof Icon
     */
    height: number;
    /**
     * 
     * @type {boolean}
     * @memberof Icon
     */
    isDefault: boolean;
}
/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    prefix: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    label: string;
}
/**
 * 
 * @export
 * @interface LabelArray
 */
export interface LabelArray {
    /**
     * 
     * @type {Array<Label>}
     * @memberof LabelArray
     */
    results: Array<Label>;
    /**
     * 
     * @type {number}
     * @memberof LabelArray
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof LabelArray
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof LabelArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof LabelArray
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface LabelCreate
 */
export interface LabelCreate {
    [key: string]: any | any;
    /**
     * The prefix for the label. `global`, `my` `team`, etc.
     * @type {string}
     * @memberof LabelCreate
     */
    prefix: string;
    /**
     * The name of the label, which will be shown in the UI.
     * @type {string}
     * @memberof LabelCreate
     */
    name: string;
}
/**
 * 
 * @export
 * @interface LabelDetails
 */
export interface LabelDetails {
    /**
     * 
     * @type {Label}
     * @memberof LabelDetails
     */
    label: Label;
    /**
     * 
     * @type {LabeledContentPageResponse}
     * @memberof LabelDetails
     */
    associatedContents?: LabeledContentPageResponse;
}
/**
 * 
 * @export
 * @interface LabeledContent
 */
export interface LabeledContent {
    /**
     * 
     * @type {LabeledContentType}
     * @memberof LabeledContent
     */
    contentType: LabeledContentType;
    /**
     * 
     * @type {number}
     * @memberof LabeledContent
     */
    contentId: number;
    /**
     * Title of the content.
     * @type {string}
     * @memberof LabeledContent
     */
    title: string;
}
/**
 * 
 * @export
 * @interface LabeledContentPageResponse
 */
export interface LabeledContentPageResponse {
    /**
     * 
     * @type {Array<LabeledContent>}
     * @memberof LabeledContentPageResponse
     */
    results: Array<LabeledContent>;
    /**
     * 
     * @type {number}
     * @memberof LabeledContentPageResponse
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof LabeledContentPageResponse
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof LabeledContentPageResponse
     */
    size: number;
}

/**
 * 
 * @export
 */
export const LabeledContentType = {
    Page: 'page',
    Blogpost: 'blogpost',
    Attachment: 'attachment',
    PageTemplate: 'page_template'
} as const;
export type LabeledContentType = typeof LabeledContentType[keyof typeof LabeledContentType];

/**
 * 
 * @export
 * @interface LongTask
 */
export interface LongTask {
    /**
     * the ARI for the long task, based on its ID
     * @type {string}
     * @memberof LongTask
     */
    ari?: string;
    /**
     * a unique identifier for the long task
     * @type {string}
     * @memberof LongTask
     */
    id: string;
    /**
     * 
     * @type {LongTaskLinks}
     * @memberof LongTask
     */
    links: LongTaskLinks;
}
/**
 * 
 * @export
 * @interface LongTaskLinks
 */
export interface LongTaskLinks {
    [key: string]: any | any;
    /**
     * The URL to retrive status of long task.
     * @type {string}
     * @memberof LongTaskLinks
     */
    status?: string;
}
/**
 * Current status of a long running task
 * 
 * Status keys:
 * 
 * - `ERROR_UNKNOWN` - Generic error
 * - `ERROR_LOCK_FAILED` - Could not get the lock on destination space
 * - `ERROR_RELINK` - Error when relink pages/attachments
 * - `ERROR_COPY_PAGE` - Error while copying 1 page
 * - `WARN_RENAME_PAGE` - Warning page is rename during copy
 * - `WARN_IGNORE_COPY_PERMISSION` - Warning could not copy permission
 * - `WARN_IGNORE_COPY_ATTACHMENT` - Warning could not copy attachment
 * - `WARN_IGNORE_DELETE_PAGE` - Warning ignoring delete of a non agreed on page
 * - `STATUS_COPIED_PAGES` - Message total pages are copied
 * - `STATUS_COPYING_PAGES` - Message copy pages
 * - `STATUS_RELINK_PAGES` - Message relink pages/attachments
 * - `STATUS_DELETING_PAGES` - Message delete pages
 * - `STATUS_DELETED_PAGES` - Message total pages are deleted
 * - `STATUS_MOVING_PAGES` - Message move pages
 * - `WARN_IGNORE_VIEW_RESTRICTED` - Permission changed - view restricted
 * - `WARN_IGNORE_EDIT_RESTRICTED` - Permission changed - edit restricted
 * - `INITIALIZING_TASK` - Message when initializing task
 * - `UNKNOWN_STATUS` - Message when status is unknown
 * @export
 * @interface LongTaskStatus
 */
export interface LongTaskStatus {
    /**
     * the ARI for the long task, based on its ID
     * @type {string}
     * @memberof LongTaskStatus
     */
    ari?: string;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatus
     */
    id: string;
    /**
     * 
     * @type {LongTaskStatusName}
     * @memberof LongTaskStatus
     */
    name: LongTaskStatusName;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatus
     */
    elapsedTime: number;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatus
     */
    percentageComplete: number;
    /**
     * 
     * @type {boolean}
     * @memberof LongTaskStatus
     */
    successful: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LongTaskStatus
     */
    finished: boolean;
    /**
     * 
     * @type {Array<Message>}
     * @memberof LongTaskStatus
     */
    messages: Array<Message>;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatus
     */
    status?: string;
    /**
     * 
     * @type {Array<Message>}
     * @memberof LongTaskStatus
     */
    errors?: Array<Message>;
    /**
     * 
     * @type {LongTaskStatusAdditionalDetails}
     * @memberof LongTaskStatus
     */
    additionalDetails?: LongTaskStatusAdditionalDetails;
}
/**
 * 
 * @export
 * @interface LongTaskStatusAdditionalDetails
 */
export interface LongTaskStatusAdditionalDetails {
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusAdditionalDetails
     */
    destinationId?: string;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusAdditionalDetails
     */
    destinationUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusAdditionalDetails
     */
    totalPageNeedToCopy?: number;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusAdditionalDetails
     */
    additionalProperties?: string;
}
/**
 * 
 * @export
 * @interface LongTaskStatusArray
 */
export interface LongTaskStatusArray {
    /**
     * 
     * @type {Array<LongTaskStatus>}
     * @memberof LongTaskStatusArray
     */
    results: Array<LongTaskStatus>;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof LongTaskStatusArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface LongTaskStatusName
 */
export interface LongTaskStatusName {
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusName
     */
    key: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof LongTaskStatusName
     */
    args: Array<object>;
}
/**
 * Same as LongTaskStatus but with `_links` property.
 * 
 * Status keys:
 * 
 * - `ERROR_UNKNOWN` - Generic error
 * - `ERROR_LOCK_FAILED` - Could not get the lock on destination space
 * - `ERROR_RELINK` - Error when relink pages/attachments
 * - `ERROR_COPY_PAGE` - Error while copying 1 page
 * - `WARN_RENAME_PAGE` - Warning page is rename during copy
 * - `WARN_IGNORE_COPY_PERMISSION` - Warning could not copy permission
 * - `WARN_IGNORE_COPY_ATTACHMENT` - Warning could not copy attachment
 * - `WARN_IGNORE_DELETE_PAGE` - Warning ignoring delete of a non agreed on page
 * - `STATUS_COPIED_PAGES` - Message total pages are copied
 * - `STATUS_COPYING_PAGES` - Message copy pages
 * - `STATUS_RELINK_PAGES` - Message relink pages/attachments
 * - `STATUS_DELETING_PAGES` - Message delete pages
 * - `STATUS_DELETED_PAGES` - Message total pages are deleted
 * - `STATUS_MOVING_PAGES` - Message move pages
 * - `WARN_IGNORE_VIEW_RESTRICTED` - Permission changed - view restricted
 * - `WARN_IGNORE_EDIT_RESTRICTED` - Permission changed - edit restricted
 * - `INITIALIZING_TASK` - Message when initializing task
 * - `UNKNOWN_STATUS` - Message when status is unknown
 * @export
 * @interface LongTaskStatusWithLinks
 */
export interface LongTaskStatusWithLinks {
    /**
     * the ARI for the long task, based on its ID
     * @type {string}
     * @memberof LongTaskStatusWithLinks
     */
    ari?: string;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusWithLinks
     */
    id: string;
    /**
     * 
     * @type {LongTaskStatusName}
     * @memberof LongTaskStatusWithLinks
     */
    name: LongTaskStatusName;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusWithLinks
     */
    elapsedTime: number;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusWithLinks
     */
    percentageComplete: number;
    /**
     * 
     * @type {boolean}
     * @memberof LongTaskStatusWithLinks
     */
    successful: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LongTaskStatusWithLinks
     */
    finished: boolean;
    /**
     * 
     * @type {Array<Message>}
     * @memberof LongTaskStatusWithLinks
     */
    messages: Array<Message>;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof LongTaskStatusWithLinks
     */
    _links: { [key: string]: GenericLinksValue; };
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusWithLinks
     */
    status?: string;
    /**
     * 
     * @type {Array<Message>}
     * @memberof LongTaskStatusWithLinks
     */
    errors?: Array<Message>;
    /**
     * 
     * @type {LongTaskStatusWithLinksAdditionalDetails}
     * @memberof LongTaskStatusWithLinks
     */
    additionalDetails?: LongTaskStatusWithLinksAdditionalDetails;
}
/**
 * 
 * @export
 * @interface LongTaskStatusWithLinksAdditionalDetails
 */
export interface LongTaskStatusWithLinksAdditionalDetails {
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusWithLinksAdditionalDetails
     */
    destinationId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusWithLinksAdditionalDetails
     */
    destinationUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof LongTaskStatusWithLinksAdditionalDetails
     */
    totalPageNeedToCopy?: number;
    /**
     * 
     * @type {string}
     * @memberof LongTaskStatusWithLinksAdditionalDetails
     */
    additionalProperties?: string;
}
/**
 * 
 * @export
 * @interface LookAndFeel
 */
export interface LookAndFeel {
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeel
     */
    headings: LookAndFeelHeadings;
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeel
     */
    links: LookAndFeelHeadings;
    /**
     * 
     * @type {MenusLookAndFeel}
     * @memberof LookAndFeel
     */
    menus: MenusLookAndFeel;
    /**
     * 
     * @type {HeaderLookAndFeel}
     * @memberof LookAndFeel
     */
    header: HeaderLookAndFeel;
    /**
     * 
     * @type {HorizontalHeaderLookAndFeel}
     * @memberof LookAndFeel
     */
    horizontalHeader?: HorizontalHeaderLookAndFeel;
    /**
     * 
     * @type {ContentLookAndFeel}
     * @memberof LookAndFeel
     */
    content: ContentLookAndFeel;
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeel
     */
    bordersAndDividers: LookAndFeelHeadings;
    /**
     * 
     * @type {object}
     * @memberof LookAndFeel
     */
    spaceReference?: object | null;
}
/**
 * 
 * @export
 * @interface LookAndFeelHeadings
 */
export interface LookAndFeelHeadings {
    /**
     * 
     * @type {string}
     * @memberof LookAndFeelHeadings
     */
    color: string;
}
/**
 * Look and feel selection
 * @export
 * @interface LookAndFeelSelection
 */
export interface LookAndFeelSelection {
    /**
     * The key of the space for which the look and feel settings will be
     * set.
     * @type {string}
     * @memberof LookAndFeelSelection
     */
    spaceKey: string;
    /**
     * 
     * @type {string}
     * @memberof LookAndFeelSelection
     */
    lookAndFeelType: LookAndFeelSelectionLookAndFeelTypeEnum;
}


/**
 * @export
 */
export const LookAndFeelSelectionLookAndFeelTypeEnum = {
    Global: 'global',
    Custom: 'custom',
    Theme: 'theme'
} as const;
export type LookAndFeelSelectionLookAndFeelTypeEnum = typeof LookAndFeelSelectionLookAndFeelTypeEnum[keyof typeof LookAndFeelSelectionLookAndFeelTypeEnum];

/**
 * 
 * @export
 * @interface LookAndFeelSettings
 */
export interface LookAndFeelSettings {
    /**
     * 
     * @type {string}
     * @memberof LookAndFeelSettings
     */
    selected: LookAndFeelSettingsSelectedEnum;
    /**
     * 
     * @type {LookAndFeel}
     * @memberof LookAndFeelSettings
     */
    global: LookAndFeel;
    /**
     * 
     * @type {LookAndFeel}
     * @memberof LookAndFeelSettings
     */
    theme?: LookAndFeel;
    /**
     * 
     * @type {LookAndFeel}
     * @memberof LookAndFeelSettings
     */
    custom: LookAndFeel;
}


/**
 * @export
 */
export const LookAndFeelSettingsSelectedEnum = {
    Global: 'global',
    Custom: 'custom'
} as const;
export type LookAndFeelSettingsSelectedEnum = typeof LookAndFeelSettingsSelectedEnum[keyof typeof LookAndFeelSettingsSelectedEnum];

/**
 * Look and feel settings returned after an update.
 * @export
 * @interface LookAndFeelWithLinks
 */
export interface LookAndFeelWithLinks {
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeelWithLinks
     */
    headings: LookAndFeelHeadings;
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeelWithLinks
     */
    links: LookAndFeelHeadings;
    /**
     * 
     * @type {MenusLookAndFeel}
     * @memberof LookAndFeelWithLinks
     */
    menus: MenusLookAndFeel;
    /**
     * 
     * @type {HeaderLookAndFeel}
     * @memberof LookAndFeelWithLinks
     */
    header: HeaderLookAndFeel;
    /**
     * 
     * @type {HorizontalHeaderLookAndFeel}
     * @memberof LookAndFeelWithLinks
     */
    horizontalHeader?: HorizontalHeaderLookAndFeel;
    /**
     * 
     * @type {ContentLookAndFeel}
     * @memberof LookAndFeelWithLinks
     */
    content: ContentLookAndFeel;
    /**
     * 
     * @type {LookAndFeelHeadings}
     * @memberof LookAndFeelWithLinks
     */
    bordersAndDividers: LookAndFeelHeadings;
    /**
     * 
     * @type {object}
     * @memberof LookAndFeelWithLinks
     */
    spaceReference?: object | null;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof LookAndFeelWithLinks
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface LookAndFeelWithLinksAllOf
 */
export interface LookAndFeelWithLinksAllOf {
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof LookAndFeelWithLinksAllOf
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface MacroInstance
 */
export interface MacroInstance {
    /**
     * 
     * @type {string}
     * @memberof MacroInstance
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MacroInstance
     */
    body?: string;
    /**
     * 
     * @type {object}
     * @memberof MacroInstance
     */
    parameters?: object;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof MacroInstance
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface MenusLookAndFeel
 */
export interface MenusLookAndFeel {
    /**
     * 
     * @type {MenusLookAndFeelHoverOrFocus}
     * @memberof MenusLookAndFeel
     */
    hoverOrFocus: MenusLookAndFeelHoverOrFocus;
    /**
     * 
     * @type {string}
     * @memberof MenusLookAndFeel
     */
    color: string;
}
/**
 * 
 * @export
 * @interface MenusLookAndFeelHoverOrFocus
 */
export interface MenusLookAndFeelHoverOrFocus {
    /**
     * 
     * @type {string}
     * @memberof MenusLookAndFeelHoverOrFocus
     */
    backgroundColor: string;
}
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    translation?: string;
    /**
     * 
     * @type {Array<MessageArgsInner>}
     * @memberof Message
     */
    args: Array<MessageArgsInner>;
}
/**
 * @type MessageArgsInner
 * 
 * @export
 */
export type MessageArgsInner = string | { [key: string]: any; };
/**
 * 
 * @export
 * @interface MovePage200Response
 */
export interface MovePage200Response {
    /**
     * 
     * @type {string}
     * @memberof MovePage200Response
     */
    pageId?: string;
}
/**
 * 
 * @export
 * @interface NavigationLookAndFeel
 */
export interface NavigationLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof NavigationLookAndFeel
     */
    color: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationLookAndFeel
     */
    highlightColor?: string | null;
    /**
     * 
     * @type {NavigationLookAndFeelHoverOrFocus}
     * @memberof NavigationLookAndFeel
     */
    hoverOrFocus: NavigationLookAndFeelHoverOrFocus;
}
/**
 * 
 * @export
 * @interface NavigationLookAndFeelHoverOrFocus
 */
export interface NavigationLookAndFeelHoverOrFocus {
    /**
     * 
     * @type {string}
     * @memberof NavigationLookAndFeelHoverOrFocus
     */
    backgroundColor: string;
    /**
     * 
     * @type {string}
     * @memberof NavigationLookAndFeelHoverOrFocus
     */
    color: string;
}
/**
 * An operation and the target entity that it applies to, e.g. create page.
 * @export
 * @interface OperationCheckResult
 */
export interface OperationCheckResult {
    /**
     * The operation itself.
     * @type {string}
     * @memberof OperationCheckResult
     */
    operation: OperationCheckResultOperationEnum;
    /**
     * The space or content type that the operation applies to. Could be one of- - application - page - blogpost - comment - attachment - space
     * @type {string}
     * @memberof OperationCheckResult
     */
    targetType: string;
}


/**
 * @export
 */
export const OperationCheckResultOperationEnum = {
    Administer: 'administer',
    Archive: 'archive',
    ClearPermissions: 'clear_permissions',
    Copy: 'copy',
    Create: 'create',
    CreateSpace: 'create_space',
    Delete: 'delete',
    Export: 'export',
    Move: 'move',
    Purge: 'purge',
    PurgeVersion: 'purge_version',
    Read: 'read',
    Restore: 'restore',
    RestrictContent: 'restrict_content',
    Update: 'update',
    Use: 'use'
} as const;
export type OperationCheckResultOperationEnum = typeof OperationCheckResultOperationEnum[keyof typeof OperationCheckResultOperationEnum];

/**
 * This object represents the response for the content permission check API. If the user or group does not have
 * permissions, the following errors may be returned:
 * 
 * - Group does not have permission to the space
 * - Group does not have permission to the content
 * - User is not allowed to use Confluence
 * - User does not have permission to the space
 * - User does not have permission to the content
 * - Anonymous users are not allowed to use Confluence
 * - Anonymous user does not have permission to the space
 * - Anonymous user does not have permission to the content
 * @export
 * @interface PermissionCheckResponse
 */
export interface PermissionCheckResponse {
    /**
     * 
     * @type {boolean}
     * @memberof PermissionCheckResponse
     */
    hasPermission: boolean;
    /**
     * 
     * @type {Array<Message>}
     * @memberof PermissionCheckResponse
     */
    errors?: Array<Message>;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof PermissionCheckResponse
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * The user or group that the permission applies to.
 * @export
 * @interface PermissionSubject
 */
export interface PermissionSubject {
    /**
     * 
     * @type {string}
     * @memberof PermissionSubject
     */
    type: PermissionSubjectTypeEnum;
    /**
     * for `type=user`, identifier should be user's accountId or `anonymous` for anonymous users
     * 
     * for `type=group`, identifier should be the groupId. We are deprecating groupName support in mid-2024 
     * for this field but still accept it in the interim.
     * @type {string}
     * @memberof PermissionSubject
     */
    identifier: string;
}


/**
 * @export
 */
export const PermissionSubjectTypeEnum = {
    User: 'user',
    Group: 'group'
} as const;
export type PermissionSubjectTypeEnum = typeof PermissionSubjectTypeEnum[keyof typeof PermissionSubjectTypeEnum];

/**
 * The user or group that the permission applies to.
 * @export
 * @interface PermissionSubjectWithGroupId
 */
export interface PermissionSubjectWithGroupId {
    /**
     * 
     * @type {string}
     * @memberof PermissionSubjectWithGroupId
     */
    type: PermissionSubjectWithGroupIdTypeEnum;
    /**
     * for `type=user`, identifier should be user's accountId or `anonymous` for anonymous users
     * 
     * for `type=group`, identifier should be ID of the group
     * @type {string}
     * @memberof PermissionSubjectWithGroupId
     */
    identifier: string;
}


/**
 * @export
 */
export const PermissionSubjectWithGroupIdTypeEnum = {
    User: 'user',
    Group: 'group'
} as const;
export type PermissionSubjectWithGroupIdTypeEnum = typeof PermissionSubjectWithGroupIdTypeEnum[keyof typeof PermissionSubjectWithGroupIdTypeEnum];

/**
 * @type PropertyValue
 * The value of the property. This can be empty or a complex object. 64KB Size Limit
 * For example,
 * ```
 * "value": {
 *   "example1": "value",
 *   "example2": true,
 *   "example3": 123,
 *   "example4": ["value1", "value2"],
 * }
 * ```
 * @export
 */
export type PropertyValue = Array<string> | boolean | string | { [key: string]: any; };
/**
 * 
 * @export
 * @interface Relation
 */
export interface Relation {
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    name: string;
    /**
     * 
     * @type {RelationData}
     * @memberof Relation
     */
    relationData?: RelationData;
    /**
     * 
     * @type {RelationSource}
     * @memberof Relation
     */
    source?: RelationSource;
    /**
     * 
     * @type {RelationSource}
     * @memberof Relation
     */
    target?: RelationSource;
    /**
     * 
     * @type {RelationExpandable}
     * @memberof Relation
     */
    expandable?: RelationExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Relation
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface RelationArray
 */
export interface RelationArray {
    /**
     * 
     * @type {Array<Relation>}
     * @memberof RelationArray
     */
    results: Array<Relation>;
    /**
     * 
     * @type {number}
     * @memberof RelationArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof RelationArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof RelationArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof RelationArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface RelationData
 */
export interface RelationData {
    /**
     * 
     * @type {User}
     * @memberof RelationData
     */
    createdBy?: User | null;
    /**
     * 
     * @type {string}
     * @memberof RelationData
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationData
     */
    friendlyCreatedDate?: string;
}
/**
 * 
 * @export
 * @interface RelationExpandable
 */
export interface RelationExpandable {
    /**
     * 
     * @type {string}
     * @memberof RelationExpandable
     */
    relationData?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationExpandable
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationExpandable
     */
    target?: string;
}
/**
 * @type RelationSource
 * 
 * @export
 */
export type RelationSource = Content | Space | User;
/**
 * 
 * @export
 * @interface RetentionPeriod
 */
export interface RetentionPeriod {
    /**
     * The number of units for the retention period.
     * @type {number}
     * @memberof RetentionPeriod
     */
    number: number;
    /**
     * The unit of time that the retention period is measured in.
     * @type {string}
     * @memberof RetentionPeriod
     */
    units: RetentionPeriodUnitsEnum;
}


/**
 * @export
 */
export const RetentionPeriodUnitsEnum = {
    Nanos: 'NANOS',
    Micros: 'MICROS',
    Millis: 'MILLIS',
    Seconds: 'SECONDS',
    Minutes: 'MINUTES',
    Hours: 'HOURS',
    HalfDays: 'HALF_DAYS',
    Days: 'DAYS',
    Weeks: 'WEEKS',
    Months: 'MONTHS',
    Years: 'YEARS',
    Decades: 'DECADES',
    Centuries: 'CENTURIES',
    Millennia: 'MILLENNIA',
    Eras: 'ERAS',
    Forever: 'FOREVER'
} as const;
export type RetentionPeriodUnitsEnum = typeof RetentionPeriodUnitsEnum[keyof typeof RetentionPeriodUnitsEnum];

/**
 * 
 * @export
 * @interface ScreenLookAndFeel
 */
export interface ScreenLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    background: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundAttachment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundBlendMode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundClip?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundColor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundImage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundOrigin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundRepeat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    backgroundSize?: string | null;
    /**
     * 
     * @type {ScreenLookAndFeelLayer}
     * @memberof ScreenLookAndFeel
     */
    layer?: ScreenLookAndFeelLayer | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    gutterTop?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    gutterRight?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    gutterBottom?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeel
     */
    gutterLeft?: string | null;
}
/**
 * 
 * @export
 * @interface ScreenLookAndFeelLayer
 */
export interface ScreenLookAndFeelLayer {
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeelLayer
     */
    width?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenLookAndFeelLayer
     */
    height?: string;
}
/**
 * 
 * @export
 * @interface SearchFieldLookAndFeel
 */
export interface SearchFieldLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof SearchFieldLookAndFeel
     */
    backgroundColor: string;
    /**
     * 
     * @type {string}
     * @memberof SearchFieldLookAndFeel
     */
    color: string;
}
/**
 * 
 * @export
 * @interface SearchPageResponseSearchResult
 */
export interface SearchPageResponseSearchResult {
    /**
     * 
     * @type {Array<SearchResult>}
     * @memberof SearchPageResponseSearchResult
     */
    results: Array<SearchResult>;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    totalSize: number;
    /**
     * 
     * @type {string}
     * @memberof SearchPageResponseSearchResult
     */
    cqlQuery: string;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    searchDuration: number;
    /**
     * 
     * @type {number}
     * @memberof SearchPageResponseSearchResult
     */
    archivedResultCount?: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SearchPageResponseSearchResult
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * 
     * @type {Content}
     * @memberof SearchResult
     */
    content?: Content | null;
    /**
     * 
     * @type {User}
     * @memberof SearchResult
     */
    user?: User | null;
    /**
     * 
     * @type {Space}
     * @memberof SearchResult
     */
    space?: Space | null;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    excerpt: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    url: string;
    /**
     * 
     * @type {ContainerSummary}
     * @memberof SearchResult
     */
    resultParentContainer?: ContainerSummary;
    /**
     * 
     * @type {ContainerSummary}
     * @memberof SearchResult
     */
    resultGlobalContainer?: ContainerSummary;
    /**
     * 
     * @type {Array<Breadcrumb>}
     * @memberof SearchResult
     */
    breadcrumbs: Array<Breadcrumb>;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    entityType: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    iconCssClass: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    lastModified: string;
    /**
     * 
     * @type {string}
     * @memberof SearchResult
     */
    friendlyLastModified?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchResult
     */
    score?: number;
}
/**
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * 
     * @type {number}
     * @memberof Space
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    name: string;
    /**
     * 
     * @type {Icon}
     * @memberof Space
     */
    icon?: Icon | null;
    /**
     * 
     * @type {SpaceDescription}
     * @memberof Space
     */
    description?: SpaceDescription;
    /**
     * 
     * @type {Content}
     * @memberof Space
     */
    homepage?: Content | null;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    type: string;
    /**
     * 
     * @type {SpaceMetadata}
     * @memberof Space
     */
    metadata?: SpaceMetadata;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof Space
     */
    operations?: Array<OperationCheckResult>;
    /**
     * 
     * @type {Array<SpacePermission>}
     * @memberof Space
     */
    permissions?: Array<SpacePermission>;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    status: string;
    /**
     * 
     * @type {SpaceSettings}
     * @memberof Space
     */
    settings?: SpaceSettings | null;
    /**
     * 
     * @type {Theme}
     * @memberof Space
     */
    theme?: Theme;
    /**
     * 
     * @type {LookAndFeel}
     * @memberof Space
     */
    lookAndFeel?: LookAndFeel;
    /**
     * 
     * @type {ContentCreateSpaceHistory}
     * @memberof Space
     */
    history?: ContentCreateSpaceHistory;
    /**
     * 
     * @type {SpaceExpandable}
     * @memberof Space
     */
    expandable: SpaceExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Space
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SpaceArray
 */
export interface SpaceArray {
    /**
     * 
     * @type {Array<Space>}
     * @memberof SpaceArray
     */
    results: Array<Space>;
    /**
     * 
     * @type {number}
     * @memberof SpaceArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof SpaceArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof SpaceArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpaceArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * This is the request object used when creating a new space.
 * @export
 * @interface SpaceCreate
 */
export interface SpaceCreate {
    [key: string]: any | any;
    /**
     * The key for the new space. Format: See [Space
     * keys](https://confluence.atlassian.com/x/lqNMMQ).
     * @type {string}
     * @memberof SpaceCreate
     */
    key: string;
    /**
     * The name of the new space.
     * @type {string}
     * @memberof SpaceCreate
     */
    name: string;
    /**
     * 
     * @type {SpaceDescriptionCreate}
     * @memberof SpaceCreate
     */
    description?: SpaceDescriptionCreate | null;
    /**
     * The permissions for the new space. If no permissions are provided, the
     * [Confluence default space permissions](https://confluence.atlassian.com/x/UAgzKw#CreateaSpace-Spacepermissions)
     * are applied. Note that if permissions are provided, the space is
     * created with only the provided set of permissions, not
     * including the default space permissions. Space permissions
     * can be modified after creation using the space permissions
     * endpoints, and a private space can be created using the
     * create private space endpoint.
     * @type {Array<SpacePermissionCreate>}
     * @memberof SpaceCreate
     */
    permissions?: Array<SpacePermissionCreate> | null;
}
/**
 * 
 * @export
 * @interface SpaceDescription
 */
export interface SpaceDescription {
    /**
     * 
     * @type {SpaceDescription}
     * @memberof SpaceDescription
     */
    plain?: SpaceDescription;
    /**
     * 
     * @type {SpaceDescription}
     * @memberof SpaceDescription
     */
    view?: SpaceDescription;
    /**
     * 
     * @type {ContentCreateSpaceDescriptionExpandable}
     * @memberof SpaceDescription
     */
    expandable?: ContentCreateSpaceDescriptionExpandable;
}
/**
 * The description of the new/updated space. Note, only the 'plain' representation
 * can be used for the description when creating or updating a space.
 * @export
 * @interface SpaceDescriptionCreate
 */
export interface SpaceDescriptionCreate {
    /**
     * 
     * @type {SpaceDescriptionCreatePlain}
     * @memberof SpaceDescriptionCreate
     */
    plain: SpaceDescriptionCreatePlain;
}
/**
 * 
 * @export
 * @interface SpaceDescriptionCreatePlain
 */
export interface SpaceDescriptionCreatePlain {
    [key: string]: any | any;
    /**
     * The space description.
     * @type {string}
     * @memberof SpaceDescriptionCreatePlain
     */
    value?: string;
    /**
     * Set to 'plain'.
     * @type {string}
     * @memberof SpaceDescriptionCreatePlain
     */
    representation?: string;
}
/**
 * 
 * @export
 * @interface SpaceExpandable
 */
export interface SpaceExpandable {
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    settings?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    operations?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    lookAndFeel?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    permissions?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    theme?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    history?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    homepage?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceExpandable
     */
    identifiers?: string;
}
/**
 * 
 * @export
 * @interface SpaceMetadata
 */
export interface SpaceMetadata {
    /**
     * 
     * @type {LabelArray}
     * @memberof SpaceMetadata
     */
    labels?: LabelArray;
    /**
     * 
     * @type {object}
     * @memberof SpaceMetadata
     */
    expandable?: object;
}
/**
 * This object represents a permission for given space. Permissions consist of
 * at least one operation object with an accompanying subjects object.
 * 
 * The following combinations of `operation` and `targetType` values are
 * valid for the `operation` object:
 * 
 *   - 'create': 'page', 'blogpost', 'comment', 'attachment'
 *   - 'read': 'space'
 *   - 'delete': 'page', 'blogpost', 'comment', 'attachment'
 *   - 'export': 'space'
 *   - 'administer': 'space'
 * @export
 * @interface SpacePermission
 */
export interface SpacePermission {
    /**
     * 
     * @type {number}
     * @memberof SpacePermission
     */
    id?: number;
    /**
     * 
     * @type {SpacePermissionSubjects}
     * @memberof SpacePermission
     */
    subjects?: SpacePermissionSubjects;
    /**
     * 
     * @type {OperationCheckResult}
     * @memberof SpacePermission
     */
    operation: OperationCheckResult;
    /**
     * Grant anonymous users permission to use the operation.
     * @type {boolean}
     * @memberof SpacePermission
     */
    anonymousAccess: boolean;
    /**
     * Grants access to unlicensed users from JIRA Service Desk when used
     * with the 'read space' operation.
     * @type {boolean}
     * @memberof SpacePermission
     */
    unlicensedAccess: boolean;
}
/**
 * This object represents a permission for given space. Permissions consist of
 * at least one operation object with an accompanying subjects object.
 * 
 * The following combinations of `operation` and `targetType` values are
 * valid for the `operation` object:
 * 
 *   - 'create': 'page', 'blogpost', 'comment', 'attachment'
 *   - 'read': 'space'
 *   - 'delete': 'page', 'blogpost', 'comment', 'attachment'
 *   - 'export': 'space'
 *   - 'administer': 'space'
 * @export
 * @interface SpacePermissionCreate
 */
export interface SpacePermissionCreate {
    [key: string]: any | any;
    /**
     * 
     * @type {SpacePermissionCreateSubjects}
     * @memberof SpacePermissionCreate
     */
    subjects?: SpacePermissionCreateSubjects;
    /**
     * 
     * @type {OperationCheckResult}
     * @memberof SpacePermissionCreate
     */
    operation: OperationCheckResult;
    /**
     * Grant anonymous users permission to use the operation.
     * @type {boolean}
     * @memberof SpacePermissionCreate
     */
    anonymousAccess: boolean;
    /**
     * Grants access to unlicensed users from JIRA Service Desk when used
     * with the 'read space' operation.
     * @type {boolean}
     * @memberof SpacePermissionCreate
     */
    unlicensedAccess: boolean;
}
/**
 * The users and/or groups that the permission applies to.
 * @export
 * @interface SpacePermissionCreateSubjects
 */
export interface SpacePermissionCreateSubjects {
    /**
     * 
     * @type {SpacePermissionCreateSubjectsUser}
     * @memberof SpacePermissionCreateSubjects
     */
    user?: SpacePermissionCreateSubjectsUser;
    /**
     * 
     * @type {SpacePermissionCreateSubjectsGroup}
     * @memberof SpacePermissionCreateSubjects
     */
    group?: SpacePermissionCreateSubjectsGroup;
}
/**
 * 
 * @export
 * @interface SpacePermissionCreateSubjectsGroup
 */
export interface SpacePermissionCreateSubjectsGroup {
    /**
     * 
     * @type {Array<GroupCreate>}
     * @memberof SpacePermissionCreateSubjectsGroup
     */
    results: Array<GroupCreate>;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionCreateSubjectsGroup
     */
    size: number;
}
/**
 * 
 * @export
 * @interface SpacePermissionCreateSubjectsUser
 */
export interface SpacePermissionCreateSubjectsUser {
    /**
     * 
     * @type {Array<User>}
     * @memberof SpacePermissionCreateSubjectsUser
     */
    results: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionCreateSubjectsUser
     */
    size: number;
}
/**
 * This object represents a list of space permissions for custom content type for an individual user. Permissions consist of
 * a subjects object and a list with at least one operation object.
 * @export
 * @interface SpacePermissionCustomContent
 */
export interface SpacePermissionCustomContent {
    /**
     * 
     * @type {PermissionSubject}
     * @memberof SpacePermissionCustomContent
     */
    subject: PermissionSubject;
    /**
     * 
     * @type {Array<SpacePermissionCustomContentOperationsInner>}
     * @memberof SpacePermissionCustomContent
     */
    operations: Array<SpacePermissionCustomContentOperationsInner>;
}
/**
 * 
 * @export
 * @interface SpacePermissionCustomContentOperationsInner
 */
export interface SpacePermissionCustomContentOperationsInner {
    /**
     * The operation type
     * @type {string}
     * @memberof SpacePermissionCustomContentOperationsInner
     */
    key: SpacePermissionCustomContentOperationsInnerKeyEnum;
    /**
     * The custom content type
     * @type {string}
     * @memberof SpacePermissionCustomContentOperationsInner
     */
    target: string;
    /**
     * Grant or restrict access
     * @type {boolean}
     * @memberof SpacePermissionCustomContentOperationsInner
     */
    access: boolean;
}


/**
 * @export
 */
export const SpacePermissionCustomContentOperationsInnerKeyEnum = {
    Read: 'read',
    Create: 'create',
    Delete: 'delete'
} as const;
export type SpacePermissionCustomContentOperationsInnerKeyEnum = typeof SpacePermissionCustomContentOperationsInnerKeyEnum[keyof typeof SpacePermissionCustomContentOperationsInnerKeyEnum];

/**
 * This object represents the request for the single space permission. Permissions consist of
 * one operation object with an accompanying subjects object.
 * 
 * The following combinations of `operation.key` and `operation.target` values are
 * valid for the `operation` object:
 * ``` bash
 * 'create': 'page', 'blogpost', 'comment', 'attachment'
 * 'read': 'space'
 * 'delete': 'page', 'blogpost', 'comment', 'attachment', 'space'
 * 'export': 'space'
 * 'administer': 'space'
 * 'archive': 'page'
 * 'restrict_content': 'space'
 * ```
 * 
 * For example, to enable Delete Own permission, set the `operation` object to the following:
 * ```
 * "operation": {
 *     "key": "delete",
 *     "target": "space"
 * }
 * ```
 * To enable Add/Delete Restrictions permissions, set the `operation` object to the following:
 * ```
 * "operation": {
 *     "key": "restrict_content",
 *     "target": "space"
 * }
 * ```
 * @export
 * @interface SpacePermissionRequest
 */
export interface SpacePermissionRequest {
    [key: string]: any | any;
    /**
     * 
     * @type {PermissionSubject}
     * @memberof SpacePermissionRequest
     */
    subject: PermissionSubject;
    /**
     * 
     * @type {SpacePermissionV2Operation}
     * @memberof SpacePermissionRequest
     */
    operation: SpacePermissionV2Operation;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpacePermissionRequest
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * The users and/or groups that the permission applies to.
 * @export
 * @interface SpacePermissionSubjects
 */
export interface SpacePermissionSubjects {
    /**
     * 
     * @type {SpacePermissionSubjectsUser}
     * @memberof SpacePermissionSubjects
     */
    user?: SpacePermissionSubjectsUser;
    /**
     * 
     * @type {SpacePermissionSubjectsGroup}
     * @memberof SpacePermissionSubjects
     */
    group?: SpacePermissionSubjectsGroup;
    /**
     * 
     * @type {ContentRestrictionRestrictionsExpandable}
     * @memberof SpacePermissionSubjects
     */
    expandable?: ContentRestrictionRestrictionsExpandable;
}
/**
 * 
 * @export
 * @interface SpacePermissionSubjectsGroup
 */
export interface SpacePermissionSubjectsGroup {
    /**
     * 
     * @type {Array<Group>}
     * @memberof SpacePermissionSubjectsGroup
     */
    results: Array<Group>;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsGroup
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsGroup
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsGroup
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface SpacePermissionSubjectsUser
 */
export interface SpacePermissionSubjectsUser {
    /**
     * 
     * @type {Array<User>}
     * @memberof SpacePermissionSubjectsUser
     */
    results: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsUser
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsUser
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionSubjectsUser
     */
    limit?: number;
}
/**
 * This object represents a single space permission. Permissions consist of
 * at least one operation object with an accompanying subjects object.
 * 
 * The following combinations of `operation.key` and `operation.target` values are
 * valid for the `operation` object:
 * ``` bash
 * 'create': 'page', 'blogpost', 'comment', 'attachment'
 * 'read': 'space'
 * 'delete': 'page', 'blogpost', 'comment', 'attachment', 'space'
 * 'export': 'space'
 * 'administer': 'space'
 * 'archive': 'page'
 * 'restrict_content': 'space'
 * ```
 * 
 * For example, to enable Delete Own permission, set the `operation` object to the following:
 * ```
 * "operation": {
 *     "key": "delete",
 *     "target": "space"
 * }
 * ```
 * To enable Add/Delete Restrictions permissions, set the `operation` object to the following:
 * ```
 * "operation": {
 *     "key": "restrict_content",
 *     "target": "space"
 * }
 * ```
 * @export
 * @interface SpacePermissionV2
 */
export interface SpacePermissionV2 {
    /**
     * 
     * @type {number}
     * @memberof SpacePermissionV2
     */
    id: number;
    /**
     * 
     * @type {PermissionSubject}
     * @memberof SpacePermissionV2
     */
    subject: PermissionSubject;
    /**
     * 
     * @type {SpacePermissionV2Operation}
     * @memberof SpacePermissionV2
     */
    operation: SpacePermissionV2Operation;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpacePermissionV2
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SpacePermissionV2Operation
 */
export interface SpacePermissionV2Operation {
    /**
     * 
     * @type {string}
     * @memberof SpacePermissionV2Operation
     */
    key: SpacePermissionV2OperationKeyEnum;
    /**
     * The space or content type that the operation applies to.
     * @type {string}
     * @memberof SpacePermissionV2Operation
     */
    target: SpacePermissionV2OperationTargetEnum;
}


/**
 * @export
 */
export const SpacePermissionV2OperationKeyEnum = {
    Administer: 'administer',
    Archive: 'archive',
    Copy: 'copy',
    Create: 'create',
    Delete: 'delete',
    Export: 'export',
    Move: 'move',
    Purge: 'purge',
    PurgeVersion: 'purge_version',
    Read: 'read',
    Restore: 'restore',
    RestrictContent: 'restrict_content',
    Update: 'update',
    Use: 'use'
} as const;
export type SpacePermissionV2OperationKeyEnum = typeof SpacePermissionV2OperationKeyEnum[keyof typeof SpacePermissionV2OperationKeyEnum];

/**
 * @export
 */
export const SpacePermissionV2OperationTargetEnum = {
    Page: 'page',
    Blogpost: 'blogpost',
    Comment: 'comment',
    Attachment: 'attachment',
    Space: 'space'
} as const;
export type SpacePermissionV2OperationTargetEnum = typeof SpacePermissionV2OperationTargetEnum[keyof typeof SpacePermissionV2OperationTargetEnum];

/**
 * 
 * @export
 * @interface SpaceProperty
 */
export interface SpaceProperty {
    /**
     * 
     * @type {string}
     * @memberof SpaceProperty
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceProperty
     */
    key: string;
    /**
     * 
     * @type {SpacePropertyValue}
     * @memberof SpaceProperty
     */
    value: SpacePropertyValue;
    /**
     * 
     * @type {Version}
     * @memberof SpaceProperty
     */
    version?: Version | null;
    /**
     * 
     * @type {Space}
     * @memberof SpaceProperty
     */
    space?: Space | null;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpaceProperty
     */
    _links?: { [key: string]: GenericLinksValue; };
    /**
     * 
     * @type {SpacePropertyExpandable}
     * @memberof SpaceProperty
     */
    expandable: SpacePropertyExpandable;
}
/**
 * 
 * @export
 * @interface SpacePropertyArray
 */
export interface SpacePropertyArray {
    /**
     * 
     * @type {Array<SpaceProperty>}
     * @memberof SpacePropertyArray
     */
    results: Array<SpaceProperty>;
    /**
     * 
     * @type {number}
     * @memberof SpacePropertyArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePropertyArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof SpacePropertyArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpacePropertyArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SpacePropertyCreate
 */
export interface SpacePropertyCreate {
    /**
     * The key of the new property.
     * @type {string}
     * @memberof SpacePropertyCreate
     */
    key: string;
    /**
     * 
     * @type {PropertyValue}
     * @memberof SpacePropertyCreate
     */
    value: PropertyValue;
    /**
     * 
     * @type {SpacePropertyCreateSpace}
     * @memberof SpacePropertyCreate
     */
    space?: SpacePropertyCreateSpace;
}
/**
 * 
 * @export
 * @interface SpacePropertyCreateNoKey
 */
export interface SpacePropertyCreateNoKey {
    /**
     * 
     * @type {PropertyValue}
     * @memberof SpacePropertyCreateNoKey
     */
    value: PropertyValue;
}
/**
 * 
 * @export
 * @interface SpacePropertyCreateSpace
 */
export interface SpacePropertyCreateSpace {
    [key: string]: any | any;
    /**
     * The key of the space
     * @type {string}
     * @memberof SpacePropertyCreateSpace
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface SpacePropertyExpandable
 */
export interface SpacePropertyExpandable {
    /**
     * 
     * @type {string}
     * @memberof SpacePropertyExpandable
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof SpacePropertyExpandable
     */
    space?: string;
}
/**
 * 
 * @export
 * @interface SpacePropertyUpdate
 */
export interface SpacePropertyUpdate {
    /**
     * 
     * @type {string}
     * @memberof SpacePropertyUpdate
     */
    key?: string;
    /**
     * 
     * @type {SpacePropertyValue}
     * @memberof SpacePropertyUpdate
     */
    value: SpacePropertyValue;
    /**
     * 
     * @type {Version}
     * @memberof SpacePropertyUpdate
     */
    version: Version | null;
    /**
     * 
     * @type {SpacePropertyCreateSpace}
     * @memberof SpacePropertyUpdate
     */
    space?: SpacePropertyCreateSpace;
}
/**
 * @type SpacePropertyValue
 * 
 * @export
 */
export type SpacePropertyValue = Array<string> | boolean | string | { [key: string]: any; };
/**
 * 
 * @export
 * @interface SpaceSettings
 */
export interface SpaceSettings {
    /**
     * Defines whether an override for the space home should be used. This is
     * used in conjunction with a space theme provided by an app. For
     * example, if this property is set to true, a theme can display a page
     * other than the space homepage when users visit the root URL for a
     * space. This property allows apps to provide content-only theming
     * without overriding the space home.
     * @type {boolean}
     * @memberof SpaceSettings
     */
    routeOverrideEnabled: boolean;
    /**
     * 
     * @type {SpaceSettingsEditor}
     * @memberof SpaceSettings
     */
    editor?: SpaceSettingsEditor;
    /**
     * 
     * @type {string}
     * @memberof SpaceSettings
     */
    spaceKey?: string;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpaceSettings
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SpaceSettingsEditor
 */
export interface SpaceSettingsEditor {
    /**
     * 
     * @type {string}
     * @memberof SpaceSettingsEditor
     */
    page: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceSettingsEditor
     */
    blogpost: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceSettingsEditor
     */
    default: string;
}
/**
 * 
 * @export
 * @interface SpaceSettingsUpdate
 */
export interface SpaceSettingsUpdate {
    /**
     * Defines whether an override for the space home should be used. This is
     * used in conjunction with a space theme provided by an app. For
     * example, if this property is set to true, a theme can display a page
     * other than the space homepage when users visit the root URL for a
     * space. This property allows apps to provide content-only theming
     * without overriding the space home.
     * @type {boolean}
     * @memberof SpaceSettingsUpdate
     */
    routeOverrideEnabled?: boolean;
}
/**
 * The properties of a space that can be updated.
 * @export
 * @interface SpaceUpdate
 */
export interface SpaceUpdate {
    [key: string]: any | any;
    /**
     * The updated name of the space.
     * @type {string}
     * @memberof SpaceUpdate
     */
    name?: string | null;
    /**
     * 
     * @type {SpaceDescriptionCreate}
     * @memberof SpaceUpdate
     */
    description?: SpaceDescriptionCreate | null;
    /**
     * The updated homepage for this space
     * @type {object}
     * @memberof SpaceUpdate
     */
    homepage?: object | null;
    /**
     * The updated type for this space.
     * @type {string}
     * @memberof SpaceUpdate
     */
    type?: string;
    /**
     * The updated status for this space.
     * @type {string}
     * @memberof SpaceUpdate
     */
    status?: string | null;
}
/**
 * 
 * @export
 * @interface SpaceWatch
 */
export interface SpaceWatch {
    /**
     * 
     * @type {string}
     * @memberof SpaceWatch
     */
    type: string;
    /**
     * 
     * @type {WatchUser}
     * @memberof SpaceWatch
     */
    watcher: WatchUser;
    /**
     * 
     * @type {string}
     * @memberof SpaceWatch
     */
    spaceKey?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceWatch
     */
    labelName?: string;
    /**
     * 
     * @type {string}
     * @memberof SpaceWatch
     */
    prefix?: string;
}
/**
 * 
 * @export
 * @interface SpaceWatchArray
 */
export interface SpaceWatchArray {
    /**
     * 
     * @type {Array<SpaceWatch>}
     * @memberof SpaceWatchArray
     */
    results: Array<SpaceWatch>;
    /**
     * 
     * @type {number}
     * @memberof SpaceWatchArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof SpaceWatchArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof SpaceWatchArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof SpaceWatchArray
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface SuperBatchWebResources
 */
export interface SuperBatchWebResources {
    /**
     * 
     * @type {SuperBatchWebResourcesUris}
     * @memberof SuperBatchWebResources
     */
    uris?: SuperBatchWebResourcesUris;
    /**
     * 
     * @type {SuperBatchWebResourcesTags}
     * @memberof SuperBatchWebResources
     */
    tags?: SuperBatchWebResourcesTags;
    /**
     * 
     * @type {string}
     * @memberof SuperBatchWebResources
     */
    metatags?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SuperBatchWebResources
     */
    expandable?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface SuperBatchWebResourcesTags
 */
export interface SuperBatchWebResourcesTags {
    /**
     * 
     * @type {string}
     * @memberof SuperBatchWebResourcesTags
     */
    all?: string;
    /**
     * 
     * @type {string}
     * @memberof SuperBatchWebResourcesTags
     */
    css?: string;
    /**
     * 
     * @type {string}
     * @memberof SuperBatchWebResourcesTags
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof SuperBatchWebResourcesTags
     */
    js?: string;
}
/**
 * 
 * @export
 * @interface SuperBatchWebResourcesUris
 */
export interface SuperBatchWebResourcesUris {
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof SuperBatchWebResourcesUris
     */
    all?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof SuperBatchWebResourcesUris
     */
    css?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof SuperBatchWebResourcesUris
     */
    js?: SuperBatchWebResourcesUrisAll;
}
/**
 * @type SuperBatchWebResourcesUrisAll
 * 
 * @export
 */
export type SuperBatchWebResourcesUrisAll = Array<string> | string;
/**
 * 
 * @export
 * @interface SystemInfoEntity
 */
export interface SystemInfoEntity {
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    cloudId: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    commitHash: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    edition?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    siteTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    defaultLocale?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemInfoEntity
     */
    defaultTimeZone?: string;
}
/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    globalId: number;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    contentId: number;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    creator: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    assignee?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    completeUser?: string;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    createDate: number;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    dueDate?: number;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    updateDate?: number;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    completeDate?: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Task
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface TaskPageResponse
 */
export interface TaskPageResponse {
    /**
     * 
     * @type {Array<Task>}
     * @memberof TaskPageResponse
     */
    results: Array<Task>;
    /**
     * 
     * @type {number}
     * @memberof TaskPageResponse
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof TaskPageResponse
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof TaskPageResponse
     */
    size: number;
}
/**
 * 
 * @export
 * @interface TaskStatusUpdate
 */
export interface TaskStatusUpdate {
    /**
     * 
     * @type {string}
     * @memberof TaskStatusUpdate
     */
    status: TaskStatusUpdateStatusEnum;
}


/**
 * @export
 */
export const TaskStatusUpdateStatusEnum = {
    Complete: 'complete',
    Incomplete: 'incomplete'
} as const;
export type TaskStatusUpdateStatusEnum = typeof TaskStatusUpdateStatusEnum[keyof typeof TaskStatusUpdateStatusEnum];

/**
 * 
 * @export
 * @interface Theme
 */
export interface Theme {
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    themeKey: string;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    description?: string;
    /**
     * 
     * @type {Icon}
     * @memberof Theme
     */
    icon?: Icon | null;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Theme
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface ThemeArray
 */
export interface ThemeArray {
    /**
     * 
     * @type {Array<ThemeNoLinks>}
     * @memberof ThemeArray
     */
    results: Array<ThemeNoLinks>;
    /**
     * 
     * @type {number}
     * @memberof ThemeArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ThemeArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof ThemeArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof ThemeArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * Theme object without links. Used in ThemeArray.
 * @export
 * @interface ThemeNoLinks
 */
export interface ThemeNoLinks {
    /**
     * 
     * @type {string}
     * @memberof ThemeNoLinks
     */
    themeKey: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeNoLinks
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ThemeNoLinks
     */
    description?: string;
    /**
     * 
     * @type {Icon}
     * @memberof ThemeNoLinks
     */
    icon?: Icon | null;
}
/**
 * 
 * @export
 * @interface ThemeUpdate
 */
export interface ThemeUpdate {
    /**
     * The key of the theme to be set as the space theme.
     * @type {string}
     * @memberof ThemeUpdate
     */
    themeKey: string;
}
/**
 * 
 * @export
 * @interface TopNavigationLookAndFeel
 */
export interface TopNavigationLookAndFeel {
    /**
     * 
     * @type {string}
     * @memberof TopNavigationLookAndFeel
     */
    color?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TopNavigationLookAndFeel
     */
    highlightColor: string;
    /**
     * 
     * @type {TopNavigationLookAndFeelHoverOrFocus}
     * @memberof TopNavigationLookAndFeel
     */
    hoverOrFocus?: TopNavigationLookAndFeelHoverOrFocus;
}
/**
 * 
 * @export
 * @interface TopNavigationLookAndFeelHoverOrFocus
 */
export interface TopNavigationLookAndFeelHoverOrFocus {
    /**
     * 
     * @type {string}
     * @memberof TopNavigationLookAndFeelHoverOrFocus
     */
    backgroundColor?: string;
    /**
     * 
     * @type {string}
     * @memberof TopNavigationLookAndFeelHoverOrFocus
     */
    color?: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    type: UserTypeEnum;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof User
     */
    userKey?: string | null;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products.
     * For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
     * @type {string}
     * @memberof User
     */
    accountId?: string | null;
    /**
     * The account type of the user, may return empty string if unavailable. App is if the user is a bot user created on behalf of an Atlassian app.
     * @type {string}
     * @memberof User
     */
    accountType?: UserAccountTypeEnum;
    /**
     * The email address of the user. Depending on the user's privacy setting, this may return an empty string.
     * @type {string}
     * @memberof User
     */
    email?: string | null;
    /**
     * The public name or nickname of the user. Will always contain a value.
     * @type {string}
     * @memberof User
     */
    publicName?: string;
    /**
     * 
     * @type {Icon}
     * @memberof User
     */
    profilePicture?: Icon | null;
    /**
     * The displays name of the user. Depending on the user's privacy setting, this may be the same as publicName.
     * @type {string}
     * @memberof User
     */
    displayName?: string | null;
    /**
     * This displays user time zone. Depending on the user's privacy setting, this may return null.
     * @type {string}
     * @memberof User
     */
    timeZone?: string | null;
    /**
     * Whether the user is an external collaborator user
     * @type {boolean}
     * @memberof User
     */
    isExternalCollaborator?: boolean;
    /**
     * Whether the user is an external collaborator user
     * @type {boolean}
     * @memberof User
     */
    externalCollaborator?: boolean;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof User
     */
    operations?: Array<OperationCheckResult> | null;
    /**
     * 
     * @type {UserDetails}
     * @memberof User
     */
    details?: UserDetails;
    /**
     * 
     * @type {Space}
     * @memberof User
     */
    personalSpace?: Space | null;
    /**
     * 
     * @type {BulkUserLookupExpandable}
     * @memberof User
     */
    expandable?: BulkUserLookupExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof User
     */
    _links?: { [key: string]: GenericLinksValue; };
}


/**
 * @export
 */
export const UserTypeEnum = {
    Known: 'known',
    Unknown: 'unknown',
    Anonymous: 'anonymous',
    User: 'user'
} as const;
export type UserTypeEnum = typeof UserTypeEnum[keyof typeof UserTypeEnum];

/**
 * @export
 */
export const UserAccountTypeEnum = {
    Atlassian: 'atlassian',
    App: 'app',
    Empty: ''
} as const;
export type UserAccountTypeEnum = typeof UserAccountTypeEnum[keyof typeof UserAccountTypeEnum];

/**
 * 
 * @export
 * @interface UserAnonymous
 */
export interface UserAnonymous {
    /**
     * 
     * @type {string}
     * @memberof UserAnonymous
     */
    type: string;
    /**
     * 
     * @type {Icon}
     * @memberof UserAnonymous
     */
    profilePicture: Icon | null;
    /**
     * 
     * @type {string}
     * @memberof UserAnonymous
     */
    displayName: string;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof UserAnonymous
     */
    operations?: Array<OperationCheckResult>;
    /**
     * Whether the user is an external collaborator user
     * @type {boolean}
     * @memberof UserAnonymous
     */
    isExternalCollaborator?: boolean;
    /**
     * 
     * @type {UserAnonymousExpandable}
     * @memberof UserAnonymous
     */
    expandable?: UserAnonymousExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof UserAnonymous
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface UserAnonymousExpandable
 */
export interface UserAnonymousExpandable {
    /**
     * 
     * @type {string}
     * @memberof UserAnonymousExpandable
     */
    operations?: string;
}
/**
 * 
 * @export
 * @interface UserArray
 */
export interface UserArray {
    /**
     * 
     * @type {Array<User>}
     * @memberof UserArray
     */
    results: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof UserArray
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof UserArray
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof UserArray
     */
    size?: number;
    /**
     * This property will return total count of the objects before pagination is applied.
     * This value is returned if `shouldReturnTotalSize` is set to `true`.
     * @type {number}
     * @memberof UserArray
     */
    totalSize?: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof UserArray
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface UserDetails
 */
export interface UserDetails {
    /**
     * 
     * @type {UserDetailsBusiness}
     * @memberof UserDetails
     */
    business?: UserDetailsBusiness;
    /**
     * 
     * @type {UserDetailsPersonal}
     * @memberof UserDetails
     */
    personal?: UserDetailsPersonal;
}
/**
 * 
 * @export
 * @interface UserDetailsBusiness
 */
export interface UserDetailsBusiness {
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsBusiness
     */
    position?: string;
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsBusiness
     */
    department?: string;
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsBusiness
     */
    location?: string;
}
/**
 * 
 * @export
 * @interface UserDetailsPersonal
 */
export interface UserDetailsPersonal {
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsPersonal
     */
    phone?: string;
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsPersonal
     */
    im?: string;
    /**
     * This property has been deprecated due to privacy changes. There is no replacement. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsPersonal
     */
    website?: string;
    /**
     * This property has been deprecated due to privacy changes. Use the `User.email` property instead. See the
     * [migration guide](https://developer.atlassian.com/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/)
     * for details.
     * @type {string}
     * @memberof UserDetailsPersonal
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface UserProperty
 */
export interface UserProperty {
    /**
     * 
     * @type {string}
     * @memberof UserProperty
     */
    key: string;
    /**
     * The value of the content property.
     * @type {{ [key: string]: any; }}
     * @memberof UserProperty
     */
    value: { [key: string]: any; };
    /**
     * a unique identifier for the user property
     * @type {string}
     * @memberof UserProperty
     */
    id: string;
    /**
     * datetime when the property was last modified such as `2022-02-01T12:00:00.111Z`
     * @type {string}
     * @memberof UserProperty
     */
    lastModifiedDate: string;
    /**
     * datetime when the property was created such as `2022-01-01T12:00:00.111Z`
     * @type {string}
     * @memberof UserProperty
     */
    createdDate: string;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof UserProperty
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface UserPropertyCreate
 */
export interface UserPropertyCreate {
    /**
     * The value of the user property.
     * @type {{ [key: string]: any; }}
     * @memberof UserPropertyCreate
     */
    value: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface UserPropertyKeyArray
 */
export interface UserPropertyKeyArray {
    /**
     * 
     * @type {Array<UserPropertyKeyArrayResultsInner>}
     * @memberof UserPropertyKeyArray
     */
    results: Array<UserPropertyKeyArrayResultsInner>;
    /**
     * 
     * @type {number}
     * @memberof UserPropertyKeyArray
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPropertyKeyArray
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof UserPropertyKeyArray
     */
    size?: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof UserPropertyKeyArray
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface UserPropertyKeyArrayResultsInner
 */
export interface UserPropertyKeyArrayResultsInner {
    /**
     * 
     * @type {string}
     * @memberof UserPropertyKeyArrayResultsInner
     */
    key?: string;
}
/**
 * 
 * @export
 * @interface UserPropertyUpdate
 */
export interface UserPropertyUpdate {
    /**
     * The value of the user property.
     * @type {{ [key: string]: any; }}
     * @memberof UserPropertyUpdate
     */
    value: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface UserWatch
 */
export interface UserWatch {
    /**
     * 
     * @type {boolean}
     * @memberof UserWatch
     */
    watching: boolean;
}
/**
 * 
 * @export
 * @interface UsersUserKeys
 */
export interface UsersUserKeys {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<User>}
     * @memberof UsersUserKeys
     */
    users?: Array<User>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UsersUserKeys
     */
    userKeys?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof UsersUserKeys
     */
    _links?: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface Version
 */
export interface Version {
    [key: string]: any | any;
    /**
     * 
     * @type {User}
     * @memberof Version
     */
    by?: User | null;
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    when: string | null;
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    friendlyWhen?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    message?: string | null;
    /**
     * Set this to the current version number incremented by one
     * @type {number}
     * @memberof Version
     */
    number: number;
    /**
     * If `minorEdit` is set to 'true', no notification email or activity
     * stream will be generated for the change.
     * @type {boolean}
     * @memberof Version
     */
    minorEdit: boolean;
    /**
     * 
     * @type {Content}
     * @memberof Version
     */
    content?: Content | null;
    /**
     * 
     * @type {UsersUserKeys}
     * @memberof Version
     */
    collaborators?: UsersUserKeys | null;
    /**
     * 
     * @type {VersionExpandable}
     * @memberof Version
     */
    expandable?: VersionExpandable;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof Version
     */
    _links?: { [key: string]: GenericLinksValue; };
    /**
     * True if content type is modifed in this version (e.g. page to blog)
     * @type {boolean}
     * @memberof Version
     */
    contentTypeModified?: boolean;
    /**
     * The revision id provided by confluence to be used as a revision in Synchrony
     * @type {string}
     * @memberof Version
     */
    confRev?: string | null;
    /**
     * The revision id provided by Synchrony
     * @type {string}
     * @memberof Version
     */
    syncRev?: string | null;
    /**
     * Source of the synchrony revision
     * @type {string}
     * @memberof Version
     */
    syncRevSource?: string | null;
}
/**
 * 
 * @export
 * @interface VersionArray
 */
export interface VersionArray {
    /**
     * 
     * @type {Array<Version>}
     * @memberof VersionArray
     */
    results: Array<Version>;
    /**
     * 
     * @type {number}
     * @memberof VersionArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof VersionArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof VersionArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof VersionArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * 
 * @export
 * @interface VersionExpandable
 */
export interface VersionExpandable {
    /**
     * 
     * @type {string}
     * @memberof VersionExpandable
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionExpandable
     */
    collaborators?: string;
}
/**
 * 
 * @export
 * @interface VersionRestore
 */
export interface VersionRestore {
    /**
     * Set to 'restore'.
     * @type {string}
     * @memberof VersionRestore
     */
    operationKey: VersionRestoreOperationKeyEnum;
    /**
     * 
     * @type {VersionRestoreParams}
     * @memberof VersionRestore
     */
    params: VersionRestoreParams;
}


/**
 * @export
 */
export const VersionRestoreOperationKeyEnum = {
    Restore: 'restore'
} as const;
export type VersionRestoreOperationKeyEnum = typeof VersionRestoreOperationKeyEnum[keyof typeof VersionRestoreOperationKeyEnum];

/**
 * 
 * @export
 * @interface VersionRestoreParams
 */
export interface VersionRestoreParams {
    /**
     * The version number to be restored.
     * @type {number}
     * @memberof VersionRestoreParams
     */
    versionNumber: number;
    /**
     * Description for the version.
     * @type {string}
     * @memberof VersionRestoreParams
     */
    message: string;
    /**
     * If true, the content title will be the same as the title from the version restored. Defaults to `false`.
     * @type {boolean}
     * @memberof VersionRestoreParams
     */
    restoreTitle?: boolean;
}
/**
 * 
 * @export
 * @interface Watch
 */
export interface Watch {
    /**
     * 
     * @type {string}
     * @memberof Watch
     */
    type: string;
    /**
     * 
     * @type {WatchUser}
     * @memberof Watch
     */
    watcher: WatchUser;
    /**
     * 
     * @type {number}
     * @memberof Watch
     */
    contentId: number;
}
/**
 * 
 * @export
 * @interface WatchArray
 */
export interface WatchArray {
    /**
     * 
     * @type {Array<Watch>}
     * @memberof WatchArray
     */
    results: Array<Watch>;
    /**
     * 
     * @type {number}
     * @memberof WatchArray
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof WatchArray
     */
    limit: number;
    /**
     * 
     * @type {number}
     * @memberof WatchArray
     */
    size: number;
    /**
     * 
     * @type {{ [key: string]: GenericLinksValue; }}
     * @memberof WatchArray
     */
    _links: { [key: string]: GenericLinksValue; };
}
/**
 * This essentially the same as the `User` object, but no `_links` property and
 * no `_expandable` property (therefore, different required fields).
 * @export
 * @interface WatchUser
 */
export interface WatchUser {
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    type: string;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WatchUser
     */
    username?: string | null;
    /**
     * This property is no longer available and will be removed from the documentation soon.
     * Use `accountId` instead.
     * See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof WatchUser
     */
    userKey?: string | null;
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products.
     * For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
     * @type {string}
     * @memberof WatchUser
     */
    accountId: string | null;
    /**
     * 
     * @type {Icon}
     * @memberof WatchUser
     */
    profilePicture: Icon | null;
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    timeZone?: string | null;
    /**
     * 
     * @type {Array<OperationCheckResult>}
     * @memberof WatchUser
     */
    operations: Array<OperationCheckResult> | null;
    /**
     * 
     * @type {boolean}
     * @memberof WatchUser
     */
    isExternalCollaborator: boolean;
    /**
     * 
     * @type {UserDetails}
     * @memberof WatchUser
     */
    details?: UserDetails;
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    accountType: string;
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof WatchUser
     */
    publicName: string;
    /**
     * 
     * @type {object}
     * @memberof WatchUser
     */
    personalSpace: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof WatchUser
     */
    externalCollaborator: boolean;
}
/**
 * 
 * @export
 * @interface WebResourceDependencies
 */
export interface WebResourceDependencies {
    /**
     * 
     * @type {WebResourceDependenciesExpandable}
     * @memberof WebResourceDependencies
     */
    expandable?: WebResourceDependenciesExpandable;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebResourceDependencies
     */
    keys?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebResourceDependencies
     */
    contexts?: Array<string>;
    /**
     * 
     * @type {WebResourceDependenciesUris}
     * @memberof WebResourceDependencies
     */
    uris?: WebResourceDependenciesUris;
    /**
     * 
     * @type {WebResourceDependenciesTags}
     * @memberof WebResourceDependencies
     */
    tags?: WebResourceDependenciesTags;
    /**
     * 
     * @type {SuperBatchWebResources}
     * @memberof WebResourceDependencies
     */
    superbatch?: SuperBatchWebResources;
}
/**
 * 
 * @export
 * @interface WebResourceDependenciesExpandable
 */
export interface WebResourceDependenciesExpandable {
    [key: string]: any | any;
    /**
     * 
     * @type {MessageArgsInner}
     * @memberof WebResourceDependenciesExpandable
     */
    uris?: MessageArgsInner;
}
/**
 * 
 * @export
 * @interface WebResourceDependenciesTags
 */
export interface WebResourceDependenciesTags {
    /**
     * 
     * @type {string}
     * @memberof WebResourceDependenciesTags
     */
    all?: string;
    /**
     * 
     * @type {string}
     * @memberof WebResourceDependenciesTags
     */
    css?: string;
    /**
     * 
     * @type {string}
     * @memberof WebResourceDependenciesTags
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof WebResourceDependenciesTags
     */
    js?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WebResourceDependenciesTags
     */
    expandable?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface WebResourceDependenciesUris
 */
export interface WebResourceDependenciesUris {
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof WebResourceDependenciesUris
     */
    all?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof WebResourceDependenciesUris
     */
    css?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof WebResourceDependenciesUris
     */
    js?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {WebResourceDependenciesUrisExpandable}
     * @memberof WebResourceDependenciesUris
     */
    expandable?: WebResourceDependenciesUrisExpandable;
}
/**
 * 
 * @export
 * @interface WebResourceDependenciesUrisExpandable
 */
export interface WebResourceDependenciesUrisExpandable {
    [key: string]: any | any;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof WebResourceDependenciesUrisExpandable
     */
    css?: SuperBatchWebResourcesUrisAll;
    /**
     * 
     * @type {SuperBatchWebResourcesUrisAll}
     * @memberof WebResourceDependenciesUrisExpandable
     */
    js?: SuperBatchWebResourcesUrisAll;
}
