/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Attachment
 */
export interface Attachment {
    /**
     * ID of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    id?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof Attachment
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof Attachment
     */
    title?: string;
    /**
     * 
     * @type {AttachmentPageId}
     * @memberof Attachment
     */
    pageId?: AttachmentPageId;
    /**
     * 
     * @type {AttachmentBlogPostId}
     * @memberof Attachment
     */
    blogPostId?: AttachmentBlogPostId;
    /**
     * 
     * @type {AttachmentCustomContentId}
     * @memberof Attachment
     */
    customContentId?: AttachmentCustomContentId;
    /**
     * Media Type for the attachment.
     * @type {string}
     * @memberof Attachment
     */
    mediaType?: string;
    /**
     * Media Type description for the attachment.
     * @type {string}
     * @memberof Attachment
     */
    mediaTypeDescription?: string;
    /**
     * Comment for the attachment.
     * @type {string}
     * @memberof Attachment
     */
    comment?: string;
    /**
     * File size of the attachment.
     * @type {number}
     * @memberof Attachment
     */
    fileSize?: number;
    /**
     * WebUI link of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    webuiLink?: string;
    /**
     * Download link of the attachment.
     * @type {string}
     * @memberof Attachment
     */
    downloadLink?: string;
    /**
     * 
     * @type {Version}
     * @memberof Attachment
     */
    version?: Version;
}
/**
 * @type AttachmentBlogPostId
 * ID of the containing blog post.
 * 
 * Note: This is only returned if the attachment has a container that is a blog post.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type AttachmentBlogPostId = number | string;
/**
 * @type AttachmentCustomContentId
 * ID of the containing custom content.
 * 
 * Note: This is only returned if the attachment has a container that is custom content.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type AttachmentCustomContentId = number | string;
/**
 * @type AttachmentPageId
 * ID of the containing page.
 * 
 * Note: This is only returned if the attachment has a container that is a page.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type AttachmentPageId = number | string;

/**
 * The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const AttachmentSortOrder = {
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type AttachmentSortOrder = typeof AttachmentSortOrder[keyof typeof AttachmentSortOrder];

/**
 * 
 * @export
 * @interface AttachmentVersion
 */
export interface AttachmentVersion {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof AttachmentVersion
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof AttachmentVersion
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof AttachmentVersion
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof AttachmentVersion
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof AttachmentVersion
     */
    authorId?: string;
    /**
     * 
     * @type {VersionedEntity}
     * @memberof AttachmentVersion
     */
    attachment?: VersionedEntity;
}
/**
 * 
 * @export
 * @interface BlogPost
 */
export interface BlogPost {
    /**
     * 
     * @type {BlogPostId}
     * @memberof BlogPost
     */
    id?: BlogPostId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof BlogPost
     */
    status?: ContentStatus;
    /**
     * Title of the blog post.
     * @type {string}
     * @memberof BlogPost
     */
    title?: string;
    /**
     * 
     * @type {BlogPostSpaceId}
     * @memberof BlogPost
     */
    spaceId?: BlogPostSpaceId;
    /**
     * The account ID of the user who created this blog post originally.
     * @type {string}
     * @memberof BlogPost
     */
    authorId?: string;
    /**
     * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof BlogPost
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof BlogPost
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof BlogPost
     */
    body?: Body;
}
/**
 * 
 * @export
 * @interface BlogPostBodyWrite
 */
export interface BlogPostBodyWrite {
    /**
     * Type of content representation used for the value field.
     * @type {string}
     * @memberof BlogPostBodyWrite
     */
    representation?: BlogPostBodyWriteRepresentationEnum;
    /**
     * Body of the blog post, in the format found in the representation field.
     * @type {string}
     * @memberof BlogPostBodyWrite
     */
    value?: string;
}


/**
 * @export
 */
export const BlogPostBodyWriteRepresentationEnum = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    Wiki: 'wiki'
} as const;
export type BlogPostBodyWriteRepresentationEnum = typeof BlogPostBodyWriteRepresentationEnum[keyof typeof BlogPostBodyWriteRepresentationEnum];

/**
 * 
 * @export
 * @interface BlogPostCommentModel
 */
export interface BlogPostCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof BlogPostCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof BlogPostCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof BlogPostCommentModel
     */
    title?: string;
    /**
     * 
     * @type {BlogPostCommentModelBlogPostId}
     * @memberof BlogPostCommentModel
     */
    blogPostId?: BlogPostCommentModelBlogPostId;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof BlogPostCommentModel
     */
    body?: Body;
}
/**
 * @type BlogPostCommentModelBlogPostId
 * ID of the blog post the comment is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type BlogPostCommentModelBlogPostId = number | string;
/**
 * @type BlogPostId
 * ID of the blog post.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type BlogPostId = number | string;
/**
 * 
 * @export
 * @interface BlogPostInlineCommentModel
 */
export interface BlogPostInlineCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof BlogPostInlineCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof BlogPostInlineCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof BlogPostInlineCommentModel
     */
    title?: string;
    /**
     * 
     * @type {BlogPostCommentModelBlogPostId}
     * @memberof BlogPostInlineCommentModel
     */
    blogPostId?: BlogPostCommentModelBlogPostId;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostInlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof BlogPostInlineCommentModel
     */
    body?: Body;
    /**
     * 
     * @type {InlineCommentResolutionStatus}
     * @memberof BlogPostInlineCommentModel
     */
    resolutionStatus?: InlineCommentResolutionStatus;
    /**
     * 
     * @type {InlineCommentProperties}
     * @memberof BlogPostInlineCommentModel
     */
    properties?: InlineCommentProperties;
}
/**
 * Body of the blog post. Only one body format should be specified as the property
 * for this object, e.g. `storage`.
 * @export
 * @interface BlogPostNestedBodyWrite
 */
export interface BlogPostNestedBodyWrite {
    /**
     * 
     * @type {BlogPostBodyWrite}
     * @memberof BlogPostNestedBodyWrite
     */
    storage?: BlogPostBodyWrite;
    /**
     * 
     * @type {BlogPostBodyWrite}
     * @memberof BlogPostNestedBodyWrite
     */
    atlasDocFormat?: BlogPostBodyWrite;
    /**
     * 
     * @type {BlogPostBodyWrite}
     * @memberof BlogPostNestedBodyWrite
     */
    wiki?: BlogPostBodyWrite;
}

/**
 * The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const BlogPostSortOrder = {
    Id: 'id',
    IdDesc: '-id',
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type BlogPostSortOrder = typeof BlogPostSortOrder[keyof typeof BlogPostSortOrder];

/**
 * @type BlogPostSpaceId
 * ID of the space the blog post is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type BlogPostSpaceId = number | string;
/**
 * 
 * @export
 * @interface BlogPostVersion
 */
export interface BlogPostVersion {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof BlogPostVersion
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof BlogPostVersion
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof BlogPostVersion
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof BlogPostVersion
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof BlogPostVersion
     */
    authorId?: string;
    /**
     * 
     * @type {VersionedEntity}
     * @memberof BlogPostVersion
     */
    blogpost?: VersionedEntity;
}
/**
 * Contains fields for each representation type requested.
 * @export
 * @interface Body
 */
export interface Body {
    /**
     * 
     * @type {BodyType}
     * @memberof Body
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof Body
     */
    atlasDocFormat?: BodyType;
}

/**
 * The formats a body can be represented as.
 * @export
 */
export const BodyRepresentation = {
    AnonymousExportView: 'anonymous_export_view',
    AtlasDocFormat: 'atlas_doc_format',
    Dynamic: 'dynamic',
    Editor: 'editor',
    Editor2: 'editor2',
    ExportView: 'export_view',
    Plain: 'plain',
    Raw: 'raw',
    Storage: 'storage',
    StyledView: 'styled_view',
    View: 'view'
} as const;
export type BodyRepresentation = typeof BodyRepresentation[keyof typeof BodyRepresentation];

/**
 * 
 * @export
 * @interface BodyType
 */
export interface BodyType {
    /**
     * Type of content representation used for the value field.
     * @type {string}
     * @memberof BodyType
     */
    representation?: string;
    /**
     * Body of the content, in the format found in the representation field.
     * @type {string}
     * @memberof BodyType
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface CheckAccessByEmail200Response
 */
export interface CheckAccessByEmail200Response {
    /**
     * List of emails that do not have access to site.
     * @type {Array<string>}
     * @memberof CheckAccessByEmail200Response
     */
    emailsWithoutAccess?: Array<string>;
    /**
     * List of invalid emails provided in the request.
     * @type {Array<string>}
     * @memberof CheckAccessByEmail200Response
     */
    invalidEmails?: Array<string>;
}
/**
 * 
 * @export
 * @interface CheckAccessByEmailRequest
 */
export interface CheckAccessByEmailRequest {
    /**
     * List of emails to check access to site.
     * @type {Array<string>}
     * @memberof CheckAccessByEmailRequest
     */
    emails: Array<string>;
}
/**
 * 
 * @export
 * @interface ChildCustomContent
 */
export interface ChildCustomContent {
    /**
     * 
     * @type {ChildCustomContentId}
     * @memberof ChildCustomContent
     */
    id?: ChildCustomContentId;
    /**
     * 
     * @type {OnlyArchivedAndCurrentContentStatus}
     * @memberof ChildCustomContent
     */
    status?: OnlyArchivedAndCurrentContentStatus;
    /**
     * Title of the custom content.
     * @type {string}
     * @memberof ChildCustomContent
     */
    title?: string;
    /**
     * Custom content type.
     * @type {string}
     * @memberof ChildCustomContent
     */
    type?: string;
    /**
     * 
     * @type {ChildCustomContentSpaceId}
     * @memberof ChildCustomContent
     */
    spaceId?: ChildCustomContentSpaceId;
}
/**
 * @type ChildCustomContentId
 * ID of the child custom content.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type ChildCustomContentId = number | string;

/**
 * The sort fields for child custom content. The default sort direction is ascending by id. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const ChildCustomContentSortOrder = {
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    Id: 'id',
    IdDesc: '-id',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type ChildCustomContentSortOrder = typeof ChildCustomContentSortOrder[keyof typeof ChildCustomContentSortOrder];

/**
 * @type ChildCustomContentSpaceId
 * ID of the space the custom content is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type ChildCustomContentSpaceId = number | string;
/**
 * 
 * @export
 * @interface ChildPage
 */
export interface ChildPage {
    /**
     * 
     * @type {PageId}
     * @memberof ChildPage
     */
    id?: PageId;
    /**
     * 
     * @type {OnlyArchivedAndCurrentContentStatus}
     * @memberof ChildPage
     */
    status?: OnlyArchivedAndCurrentContentStatus;
    /**
     * Title of the page.
     * @type {string}
     * @memberof ChildPage
     */
    title?: string;
    /**
     * 
     * @type {PageSpaceId}
     * @memberof ChildPage
     */
    spaceId?: PageSpaceId;
    /**
     * Position of child page within the given parent page tree.
     * @type {number}
     * @memberof ChildPage
     */
    childPosition?: number;
}

/**
 * The sort fields for child pages. The default sort direction is ascending by child-position. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const ChildPageSortOrder = {
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    Id: 'id',
    IdDesc: '-id',
    ChildPosition: 'child-position',
    ChildPositionDesc: '-child-position',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type ChildPageSortOrder = typeof ChildPageSortOrder[keyof typeof ChildPageSortOrder];

/**
 * 
 * @export
 * @interface ChildrenCommentModel
 */
export interface ChildrenCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof ChildrenCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof ChildrenCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof ChildrenCommentModel
     */
    title?: string;
    /**
     * 
     * @type {ChildrenCommentModelParentCommentId}
     * @memberof ChildrenCommentModel
     */
    parentCommentId?: ChildrenCommentModelParentCommentId;
    /**
     * 
     * @type {Version}
     * @memberof ChildrenCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof ChildrenCommentModel
     */
    body?: Body;
}
/**
 * @type ChildrenCommentModelParentCommentId
 * ID of the parent comment the child comment is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type ChildrenCommentModelParentCommentId = number | string;
/**
 * 
 * @export
 * @interface CommentBodyWrite
 */
export interface CommentBodyWrite {
    /**
     * Type of content representation used for the value field.
     * @type {string}
     * @memberof CommentBodyWrite
     */
    representation?: CommentBodyWriteRepresentationEnum;
    /**
     * Body of the comment, in the format found in the representation field.
     * @type {string}
     * @memberof CommentBodyWrite
     */
    value?: string;
}


/**
 * @export
 */
export const CommentBodyWriteRepresentationEnum = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    Wiki: 'wiki'
} as const;
export type CommentBodyWriteRepresentationEnum = typeof CommentBodyWriteRepresentationEnum[keyof typeof CommentBodyWriteRepresentationEnum];

/**
 * Body of the comment. Only one body format should be specified as the property
 * for this object, e.g. `storage`.
 * @export
 * @interface CommentNestedBodyWrite
 */
export interface CommentNestedBodyWrite {
    /**
     * 
     * @type {CommentBodyWrite}
     * @memberof CommentNestedBodyWrite
     */
    storage?: CommentBodyWrite;
    /**
     * 
     * @type {CommentBodyWrite}
     * @memberof CommentNestedBodyWrite
     */
    atlasDocFormat?: CommentBodyWrite;
    /**
     * 
     * @type {CommentBodyWrite}
     * @memberof CommentNestedBodyWrite
     */
    wiki?: CommentBodyWrite;
}

/**
 * The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const CommentSortOrder = {
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type CommentSortOrder = typeof CommentSortOrder[keyof typeof CommentSortOrder];

/**
 * 
 * @export
 * @interface CommentVersion
 */
export interface CommentVersion {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof CommentVersion
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof CommentVersion
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof CommentVersion
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof CommentVersion
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof CommentVersion
     */
    authorId?: string;
    /**
     * 
     * @type {VersionedEntity}
     * @memberof CommentVersion
     */
    comment?: VersionedEntity;
}
/**
 * 
 * @export
 * @interface ContentIdToContentTypeResponse
 */
export interface ContentIdToContentTypeResponse {
    /**
     * JSON object containing all requested content ids as keys and their associated content types as the values.
     * Duplicate content ids in the request will be returned under a single key in the response. For built-in content
     * types, the enumerations are as specified. Custom content ids will be mapped to their associated type.
     * @type {{ [key: string]: ContentIdToContentTypeResponseResultsValue; }}
     * @memberof ContentIdToContentTypeResponse
     */
    results?: { [key: string]: ContentIdToContentTypeResponseResultsValue; };
}
/**
 * 
 * @export
 * @interface ContentIdToContentTypeResponseResultsValue
 */
export interface ContentIdToContentTypeResponseResultsValue {
}
/**
 * 
 * @export
 * @interface ContentProperty
 */
export interface ContentProperty {
    /**
     * 
     * @type {ContentPropertyId}
     * @memberof ContentProperty
     */
    id?: ContentPropertyId;
    /**
     * Key of the property
     * @type {string}
     * @memberof ContentProperty
     */
    key?: string;
    /**
     * Value of the property. Must be a valid JSON value.
     * @type {any}
     * @memberof ContentProperty
     */
    value?: any | null;
    /**
     * 
     * @type {Version}
     * @memberof ContentProperty
     */
    version?: Version;
}
/**
 * 
 * @export
 * @interface ContentPropertyCreateRequest
 */
export interface ContentPropertyCreateRequest {
    /**
     * Key of the content property
     * @type {string}
     * @memberof ContentPropertyCreateRequest
     */
    key?: string;
    /**
     * Value of the content property.
     * @type {any}
     * @memberof ContentPropertyCreateRequest
     */
    value?: any | null;
}
/**
 * @type ContentPropertyId
 * ID of the property
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type ContentPropertyId = number | string;

/**
 * The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const ContentPropertySortOrder = {
    Key: 'key',
    KeyDesc: '-key'
} as const;
export type ContentPropertySortOrder = typeof ContentPropertySortOrder[keyof typeof ContentPropertySortOrder];

/**
 * 
 * @export
 * @interface ContentPropertyUpdateRequest
 */
export interface ContentPropertyUpdateRequest {
    /**
     * Key of the content property
     * @type {string}
     * @memberof ContentPropertyUpdateRequest
     */
    key?: string;
    /**
     * Value of the content property.
     * @type {any}
     * @memberof ContentPropertyUpdateRequest
     */
    value?: any | null;
    /**
     * 
     * @type {ContentPropertyUpdateRequestVersion}
     * @memberof ContentPropertyUpdateRequest
     */
    version?: ContentPropertyUpdateRequestVersion;
}
/**
 * New version number and associated message
 * @export
 * @interface ContentPropertyUpdateRequestVersion
 */
export interface ContentPropertyUpdateRequestVersion {
    /**
     * Version number of the new version. Should be 1 more than the current version number.
     * @type {number}
     * @memberof ContentPropertyUpdateRequestVersion
     */
    number?: number;
    /**
     * Message to be associated with the new version.
     * @type {string}
     * @memberof ContentPropertyUpdateRequestVersion
     */
    message?: string;
}

/**
 * The status of the content.
 * @export
 */
export const ContentStatus = {
    Current: 'current',
    Trashed: 'trashed',
    Historical: 'historical',
    Deleted: 'deleted',
    Any: 'any',
    Draft: 'draft',
    Archived: 'archived'
} as const;
export type ContentStatus = typeof ContentStatus[keyof typeof ContentStatus];

/**
 * 
 * @export
 * @interface ConvertContentIdsToContentTypesRequest
 */
export interface ConvertContentIdsToContentTypesRequest {
    /**
     * The content ids to convert. They may be provided as strings or numbers.
     * @type {Array<ConvertContentIdsToContentTypesRequestContentIdsInner>}
     * @memberof ConvertContentIdsToContentTypesRequest
     */
    contentIds: Array<ConvertContentIdsToContentTypesRequestContentIdsInner>;
}
/**
 * 
 * @export
 * @interface ConvertContentIdsToContentTypesRequestContentIdsInner
 */
export interface ConvertContentIdsToContentTypesRequestContentIdsInner {
}
/**
 * 
 * @export
 * @interface CreateBlogPostRequest
 */
export interface CreateBlogPostRequest {
    /**
     * ID of the space
     * @type {string}
     * @memberof CreateBlogPostRequest
     */
    spaceId: string;
    /**
     * The status of the blog post, specifies if the blog post will be created as a new blog post or a draft
     * @type {string}
     * @memberof CreateBlogPostRequest
     */
    status?: CreateBlogPostRequestStatusEnum;
    /**
     * Title of the blog post, required if creating non-draft.
     * @type {string}
     * @memberof CreateBlogPostRequest
     */
    title?: string;
    /**
     * 
     * @type {CreateBlogPostRequestBody}
     * @memberof CreateBlogPostRequest
     */
    body?: CreateBlogPostRequestBody;
}


/**
 * @export
 */
export const CreateBlogPostRequestStatusEnum = {
    Current: 'current',
    Draft: 'draft'
} as const;
export type CreateBlogPostRequestStatusEnum = typeof CreateBlogPostRequestStatusEnum[keyof typeof CreateBlogPostRequestStatusEnum];

/**
 * @type CreateBlogPostRequestBody
 * 
 * @export
 */
export type CreateBlogPostRequestBody = BlogPostBodyWrite | BlogPostNestedBodyWrite;
/**
 * 
 * @export
 * @interface CreateCustomContentRequest
 */
export interface CreateCustomContentRequest {
    /**
     * Type of custom content.
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    type: string;
    /**
     * The status of the custom content
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    status?: CreateCustomContentRequestStatusEnum;
    /**
     * ID of the containing space
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    spaceId?: string;
    /**
     * ID of the containing page
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    pageId?: string;
    /**
     * ID of the containing Blog Post
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    blogPostId?: string;
    /**
     * ID of the containing custom content
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    customContentId?: string;
    /**
     * Title of the custom content
     * @type {string}
     * @memberof CreateCustomContentRequest
     */
    title: string;
    /**
     * 
     * @type {CreateCustomContentRequestBody}
     * @memberof CreateCustomContentRequest
     */
    body: CreateCustomContentRequestBody;
}


/**
 * @export
 */
export const CreateCustomContentRequestStatusEnum = {
    Current: 'current'
} as const;
export type CreateCustomContentRequestStatusEnum = typeof CreateCustomContentRequestStatusEnum[keyof typeof CreateCustomContentRequestStatusEnum];

/**
 * @type CreateCustomContentRequestBody
 * 
 * @export
 */
export type CreateCustomContentRequestBody = CustomContentBodyWrite | CustomContentNestedBodyWrite;
/**
 * 
 * @export
 * @interface CreateFooterCommentModel
 */
export interface CreateFooterCommentModel {
    /**
     * ID of the containing blog post, if intending to create a top level footer comment. Do not provide if creating a reply.
     * @type {string}
     * @memberof CreateFooterCommentModel
     */
    blogPostId?: string;
    /**
     * ID of the containing page, if intending to create a top level footer comment. Do not provide if creating a reply.
     * @type {string}
     * @memberof CreateFooterCommentModel
     */
    pageId?: string;
    /**
     * ID of the parent comment, if intending to create a reply. Do not provide if creating a top level comment.
     * @type {string}
     * @memberof CreateFooterCommentModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {CreateFooterCommentModelBody}
     * @memberof CreateFooterCommentModel
     */
    body?: CreateFooterCommentModelBody;
}
/**
 * @type CreateFooterCommentModelBody
 * 
 * @export
 */
export type CreateFooterCommentModelBody = CommentBodyWrite | CommentNestedBodyWrite;
/**
 * 
 * @export
 * @interface CreateInlineCommentModel
 */
export interface CreateInlineCommentModel {
    /**
     * ID of the containing blog post, if intending to create a top level footer comment. Do not provide if creating a reply.
     * @type {string}
     * @memberof CreateInlineCommentModel
     */
    blogPostId?: string;
    /**
     * ID of the containing page, if intending to create a top level footer comment. Do not provide if creating a reply.
     * @type {string}
     * @memberof CreateInlineCommentModel
     */
    pageId?: string;
    /**
     * ID of the parent comment, if intending to create a reply. Do not provide if creating a top level comment.
     * @type {string}
     * @memberof CreateInlineCommentModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {CreateFooterCommentModelBody}
     * @memberof CreateInlineCommentModel
     */
    body?: CreateFooterCommentModelBody;
    /**
     * 
     * @type {CreateInlineCommentModelInlineCommentProperties}
     * @memberof CreateInlineCommentModel
     */
    inlineCommentProperties?: CreateInlineCommentModelInlineCommentProperties;
}
/**
 * Object describing the text to highlight on the page/blog post. Only applicable for top level inline comments (not replies) and required in that case.
 * @export
 * @interface CreateInlineCommentModelInlineCommentProperties
 */
export interface CreateInlineCommentModelInlineCommentProperties {
    /**
     * The text to highlight
     * @type {string}
     * @memberof CreateInlineCommentModelInlineCommentProperties
     */
    textSelection?: string;
    /**
     * The number of matches for the selected text on the page (should be strictly greater than textSelectionMatchIndex)
     * @type {number}
     * @memberof CreateInlineCommentModelInlineCommentProperties
     */
    textSelectionMatchCount?: number;
    /**
     * The match index to highlight. This is zero-based. E.g. if you have 3 occurrences of "hello world" on a page 
     * and you want to highlight the second occurrence, you should pass 1 for textSelectionMatchIndex and 3 for textSelectionMatchCount.
     * @type {number}
     * @memberof CreateInlineCommentModelInlineCommentProperties
     */
    textSelectionMatchIndex?: number;
}
/**
 * 
 * @export
 * @interface CreatePageRequest
 */
export interface CreatePageRequest {
    /**
     * ID of the space
     * @type {string}
     * @memberof CreatePageRequest
     */
    spaceId: string;
    /**
     * The status of the page, published or draft.
     * @type {string}
     * @memberof CreatePageRequest
     */
    status?: CreatePageRequestStatusEnum;
    /**
     * Title of the page, required if page status is not draft.
     * @type {string}
     * @memberof CreatePageRequest
     */
    title?: string;
    /**
     * The parent content ID of the page.
     * @type {string}
     * @memberof CreatePageRequest
     */
    parentId?: string;
    /**
     * 
     * @type {CreatePageRequestBody}
     * @memberof CreatePageRequest
     */
    body?: CreatePageRequestBody;
}


/**
 * @export
 */
export const CreatePageRequestStatusEnum = {
    Current: 'current',
    Draft: 'draft'
} as const;
export type CreatePageRequestStatusEnum = typeof CreatePageRequestStatusEnum[keyof typeof CreatePageRequestStatusEnum];

/**
 * @type CreatePageRequestBody
 * 
 * @export
 */
export type CreatePageRequestBody = PageBodyWrite | PageNestedBodyWrite;
/**
 * 
 * @export
 * @interface CustomContent
 */
export interface CustomContent {
    /**
     * 
     * @type {CustomContentId}
     * @memberof CustomContent
     */
    id?: CustomContentId;
    /**
     * The type of custom content.
     * @type {string}
     * @memberof CustomContent
     */
    type?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof CustomContent
     */
    status?: ContentStatus;
    /**
     * Title of the custom content.
     * @type {string}
     * @memberof CustomContent
     */
    title?: string;
    /**
     * 
     * @type {CustomContentSpaceId}
     * @memberof CustomContent
     */
    spaceId?: CustomContentSpaceId;
    /**
     * 
     * @type {CustomContentPageId}
     * @memberof CustomContent
     */
    pageId?: CustomContentPageId;
    /**
     * 
     * @type {CustomContentBlogPostId}
     * @memberof CustomContent
     */
    blogPostId?: CustomContentBlogPostId;
    /**
     * 
     * @type {CustomContentCustomContentId}
     * @memberof CustomContent
     */
    customContentId?: CustomContentCustomContentId;
    /**
     * The account ID of the user who created this custom content originally.
     * @type {string}
     * @memberof CustomContent
     */
    authorId?: string;
    /**
     * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof CustomContent
     */
    createdAt?: string;
    /**
     * 
     * @type {CustomContentBody}
     * @memberof CustomContent
     */
    body?: CustomContentBody;
    /**
     * 
     * @type {Version}
     * @memberof CustomContent
     */
    version?: Version;
}
/**
 * @type CustomContentBlogPostId
 * ID of the containing blog post.
 * 
 * Note: This is only returned if the custom content has a container that is a blog post.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type CustomContentBlogPostId = number | string;
/**
 * Contains fields for each representation type requested.
 * @export
 * @interface CustomContentBody
 */
export interface CustomContentBody {
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBody
     */
    raw?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBody
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBody
     */
    atlasDocFormat?: BodyType;
}

/**
 * The formats a custom content body can be represented as. A subset of BodyRepresentation.
 * @export
 */
export const CustomContentBodyRepresentation = {
    Raw: 'raw',
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format'
} as const;
export type CustomContentBodyRepresentation = typeof CustomContentBodyRepresentation[keyof typeof CustomContentBodyRepresentation];

/**
 * 
 * @export
 * @interface CustomContentBodyWrite
 */
export interface CustomContentBodyWrite {
    /**
     * Type of content representation used for the value field.
     * @type {string}
     * @memberof CustomContentBodyWrite
     */
    representation?: CustomContentBodyWriteRepresentationEnum;
    /**
     * Body of the custom content, in the format found in the representation field.
     * @type {string}
     * @memberof CustomContentBodyWrite
     */
    value?: string;
}


/**
 * @export
 */
export const CustomContentBodyWriteRepresentationEnum = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    Raw: 'raw'
} as const;
export type CustomContentBodyWriteRepresentationEnum = typeof CustomContentBodyWriteRepresentationEnum[keyof typeof CustomContentBodyWriteRepresentationEnum];

/**
 * @type CustomContentCustomContentId
 * ID of the containing custom content.
 * 
 * Note: This is only returned if the custom content has a container that is custom content.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type CustomContentCustomContentId = number | string;
/**
 * @type CustomContentId
 * ID of the custom content.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type CustomContentId = number | string;
/**
 * Body of the custom content. Only one body format should be specified as the property
 * for this object, e.g. `storage`.
 * @export
 * @interface CustomContentNestedBodyWrite
 */
export interface CustomContentNestedBodyWrite {
    /**
     * 
     * @type {CustomContentBodyWrite}
     * @memberof CustomContentNestedBodyWrite
     */
    storage?: CustomContentBodyWrite;
    /**
     * 
     * @type {CustomContentBodyWrite}
     * @memberof CustomContentNestedBodyWrite
     */
    atlasDocFormat?: CustomContentBodyWrite;
    /**
     * 
     * @type {CustomContentBodyWrite}
     * @memberof CustomContentNestedBodyWrite
     */
    raw?: CustomContentBodyWrite;
}
/**
 * @type CustomContentPageId
 * ID of the containing page.
 * 
 * Note: This is only returned if the custom content has a container that is a page.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type CustomContentPageId = number | string;
/**
 * @type CustomContentSpaceId
 * ID of the space the custom content is in.
 * 
 * Note: This is always returned, regardless of if the custom content has a container that is a space.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type CustomContentSpaceId = number | string;
/**
 * 
 * @export
 * @interface CustomContentVersion
 */
export interface CustomContentVersion {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof CustomContentVersion
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof CustomContentVersion
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof CustomContentVersion
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof CustomContentVersion
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof CustomContentVersion
     */
    authorId?: string;
    /**
     * 
     * @type {VersionedEntity}
     * @memberof CustomContentVersion
     */
    custom?: VersionedEntity;
}
/**
 * 
 * @export
 * @interface DetailedVersion
 */
export interface DetailedVersion {
    /**
     * The current version number.
     * @type {number}
     * @memberof DetailedVersion
     */
    number?: number;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof DetailedVersion
     */
    authorId?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof DetailedVersion
     */
    message?: string;
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof DetailedVersion
     */
    createdAt?: string;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof DetailedVersion
     */
    minorEdit?: boolean;
    /**
     * Describes if the content type is modified in this version (e.g. page to blog)
     * @type {boolean}
     * @memberof DetailedVersion
     */
    contentTypeModified?: boolean;
    /**
     * The account IDs of users that collaborated on this version.
     * @type {Array<string>}
     * @memberof DetailedVersion
     */
    collaborators?: Array<string>;
    /**
     * The version number of the version prior to this current content update.
     * @type {number}
     * @memberof DetailedVersion
     */
    prevVersion?: number;
    /**
     * The version number of the version after this current content update.
     * @type {number}
     * @memberof DetailedVersion
     */
    nextVersion?: number;
}
/**
 * 
 * @export
 * @interface FooterCommentModel
 */
export interface FooterCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof FooterCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof FooterCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof FooterCommentModel
     */
    title?: string;
    /**
     * 
     * @type {FooterCommentModelBlogPostId}
     * @memberof FooterCommentModel
     */
    blogPostId?: FooterCommentModelBlogPostId;
    /**
     * 
     * @type {FooterCommentModelPageId}
     * @memberof FooterCommentModel
     */
    pageId?: FooterCommentModelPageId;
    /**
     * 
     * @type {FooterCommentModelParentCommentId}
     * @memberof FooterCommentModel
     */
    parentCommentId?: FooterCommentModelParentCommentId;
    /**
     * 
     * @type {Version}
     * @memberof FooterCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof FooterCommentModel
     */
    body?: Body;
}
/**
 * @type FooterCommentModelBlogPostId
 * ID of the blog post containing the comment if the comment is on a blog post.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type FooterCommentModelBlogPostId = number | string;
/**
 * @type FooterCommentModelPageId
 * ID of the page containing the comment if the comment is on a page.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type FooterCommentModelPageId = number | string;
/**
 * @type FooterCommentModelParentCommentId
 * ID of the parent comment if the comment is a reply.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type FooterCommentModelParentCommentId = number | string;
/**
 * 
 * @export
 * @interface InlineCommentChildrenModel
 */
export interface InlineCommentChildrenModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof InlineCommentChildrenModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof InlineCommentChildrenModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof InlineCommentChildrenModel
     */
    title?: string;
    /**
     * 
     * @type {ChildrenCommentModelParentCommentId}
     * @memberof InlineCommentChildrenModel
     */
    parentCommentId?: ChildrenCommentModelParentCommentId;
    /**
     * 
     * @type {Version}
     * @memberof InlineCommentChildrenModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof InlineCommentChildrenModel
     */
    body?: Body;
    /**
     * 
     * @type {InlineCommentResolutionStatus}
     * @memberof InlineCommentChildrenModel
     */
    resolutionStatus?: InlineCommentResolutionStatus;
    /**
     * 
     * @type {InlineCommentProperties}
     * @memberof InlineCommentChildrenModel
     */
    properties?: InlineCommentProperties;
}
/**
 * 
 * @export
 * @interface InlineCommentModel
 */
export interface InlineCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof InlineCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof InlineCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof InlineCommentModel
     */
    title?: string;
    /**
     * 
     * @type {FooterCommentModelBlogPostId}
     * @memberof InlineCommentModel
     */
    blogPostId?: FooterCommentModelBlogPostId;
    /**
     * 
     * @type {FooterCommentModelPageId}
     * @memberof InlineCommentModel
     */
    pageId?: FooterCommentModelPageId;
    /**
     * 
     * @type {FooterCommentModelParentCommentId}
     * @memberof InlineCommentModel
     */
    parentCommentId?: FooterCommentModelParentCommentId;
    /**
     * 
     * @type {Version}
     * @memberof InlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof InlineCommentModel
     */
    body?: Body;
    /**
     * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
     * @type {string}
     * @memberof InlineCommentModel
     */
    resolutionLastModifierId?: string;
    /**
     * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
     * @type {string}
     * @memberof InlineCommentModel
     */
    resolutionLastModifiedAt?: string;
    /**
     * 
     * @type {InlineCommentResolutionStatus}
     * @memberof InlineCommentModel
     */
    resolutionStatus?: InlineCommentResolutionStatus;
    /**
     * 
     * @type {InlineCommentProperties}
     * @memberof InlineCommentModel
     */
    properties?: InlineCommentProperties;
}
/**
 * 
 * @export
 * @interface InlineCommentProperties
 */
export interface InlineCommentProperties {
    /**
     * Property value used to reference the highlighted element in DOM.
     * @type {string}
     * @memberof InlineCommentProperties
     */
    inlineMarkerRef?: string;
    /**
     * Text that is highlighted
     * @type {string}
     * @memberof InlineCommentProperties
     */
    inlineOriginalSelection?: string;
}

/**
 * Inline comment resolution status
 * @export
 */
export const InlineCommentResolutionStatus = {
    Open: 'open',
    Reopened: 'reopened',
    Resolved: 'resolved',
    Dangling: 'dangling'
} as const;
export type InlineCommentResolutionStatus = typeof InlineCommentResolutionStatus[keyof typeof InlineCommentResolutionStatus];

/**
 * 
 * @export
 * @interface InviteByEmail200Response
 */
export interface InviteByEmail200Response {
    /**
     * List of emails invited to site.
     * @type {Array<string>}
     * @memberof InviteByEmail200Response
     */
    emailsInvited?: Array<string>;
    /**
     * 
     * @type {InviteByEmail200ResponseEmailsNotInvited}
     * @memberof InviteByEmail200Response
     */
    emailsNotInvited?: InviteByEmail200ResponseEmailsNotInvited;
}
/**
 * List of invalid emails provided in the request.
 * @export
 * @interface InviteByEmail200ResponseEmailsNotInvited
 */
export interface InviteByEmail200ResponseEmailsNotInvited {
    /**
     * Email that was not invited.
     * @type {string}
     * @memberof InviteByEmail200ResponseEmailsNotInvited
     */
    key?: string;
    /**
     * Reason why the email was not invited.
     * @type {string}
     * @memberof InviteByEmail200ResponseEmailsNotInvited
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {LabelId}
     * @memberof Label
     */
    id?: LabelId;
    /**
     * Name of the label.
     * @type {string}
     * @memberof Label
     */
    name?: string;
    /**
     * Prefix of the label.
     * @type {string}
     * @memberof Label
     */
    prefix?: string;
}
/**
 * @type LabelId
 * ID of the label.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type LabelId = number | string;

/**
 * The sort fields for labels. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const LabelSortOrder = {
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    Id: 'id',
    IdDesc: '-id',
    Name: 'name',
    NameDesc: '-name'
} as const;
export type LabelSortOrder = typeof LabelSortOrder[keyof typeof LabelSortOrder];

/**
 * 
 * @export
 * @interface MultiEntityResultAttachment
 */
export interface MultiEntityResultAttachment {
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof MultiEntityResultAttachment
     */
    results?: Array<Attachment>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultAttachment
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultAttachment1
 */
export interface MultiEntityResultAttachment1 {
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof MultiEntityResultAttachment1
     */
    results?: Array<Attachment>;
}
/**
 * 
 * @export
 * @interface MultiEntityResultBlogPost
 */
export interface MultiEntityResultBlogPost {
    /**
     * 
     * @type {Array<BlogPost>}
     * @memberof MultiEntityResultBlogPost
     */
    results?: Array<BlogPost>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultBlogPost
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultBlogPostCommentModel
 */
export interface MultiEntityResultBlogPostCommentModel {
    /**
     * 
     * @type {Array<BlogPostCommentModel>}
     * @memberof MultiEntityResultBlogPostCommentModel
     */
    results?: Array<BlogPostCommentModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultBlogPostCommentModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultBlogPostInlineCommentModel
 */
export interface MultiEntityResultBlogPostInlineCommentModel {
    /**
     * 
     * @type {Array<BlogPostInlineCommentModel>}
     * @memberof MultiEntityResultBlogPostInlineCommentModel
     */
    results?: Array<BlogPostInlineCommentModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultBlogPostInlineCommentModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultChildCustomContent
 */
export interface MultiEntityResultChildCustomContent {
    /**
     * 
     * @type {Array<ChildCustomContent>}
     * @memberof MultiEntityResultChildCustomContent
     */
    results?: Array<ChildCustomContent>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultChildCustomContent
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultChildPage
 */
export interface MultiEntityResultChildPage {
    /**
     * 
     * @type {Array<ChildPage>}
     * @memberof MultiEntityResultChildPage
     */
    results?: Array<ChildPage>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultChildPage
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultChildrenCommentModel
 */
export interface MultiEntityResultChildrenCommentModel {
    /**
     * 
     * @type {Array<ChildrenCommentModel>}
     * @memberof MultiEntityResultChildrenCommentModel
     */
    results?: Array<ChildrenCommentModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultChildrenCommentModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultContentProperty
 */
export interface MultiEntityResultContentProperty {
    /**
     * 
     * @type {Array<ContentProperty>}
     * @memberof MultiEntityResultContentProperty
     */
    results?: Array<ContentProperty>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultContentProperty
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultCustomContent
 */
export interface MultiEntityResultCustomContent {
    /**
     * 
     * @type {Array<CustomContent>}
     * @memberof MultiEntityResultCustomContent
     */
    results?: Array<CustomContent>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultCustomContent
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultInlineCommentChildrenModel
 */
export interface MultiEntityResultInlineCommentChildrenModel {
    /**
     * 
     * @type {Array<InlineCommentChildrenModel>}
     * @memberof MultiEntityResultInlineCommentChildrenModel
     */
    results?: Array<InlineCommentChildrenModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultInlineCommentChildrenModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultLabel
 */
export interface MultiEntityResultLabel {
    /**
     * 
     * @type {Array<Label>}
     * @memberof MultiEntityResultLabel
     */
    results?: Array<Label>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultLabel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultLabelLinks
 */
export interface MultiEntityResultLabelLinks {
    /**
     * Used for pagination. Contains the relative URL for the next set of results, using a cursor query parameter.
     * This property will not be present if there is no additional data available.
     * @type {string}
     * @memberof MultiEntityResultLabelLinks
     */
    next?: string;
}
/**
 * 
 * @export
 * @interface MultiEntityResultPage
 */
export interface MultiEntityResultPage {
    /**
     * 
     * @type {Array<Page>}
     * @memberof MultiEntityResultPage
     */
    results?: Array<Page>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultPage
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultPageCommentModel
 */
export interface MultiEntityResultPageCommentModel {
    /**
     * 
     * @type {Array<PageCommentModel>}
     * @memberof MultiEntityResultPageCommentModel
     */
    results?: Array<PageCommentModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultPageCommentModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultPageInlineCommentModel
 */
export interface MultiEntityResultPageInlineCommentModel {
    /**
     * 
     * @type {Array<PageInlineCommentModel>}
     * @memberof MultiEntityResultPageInlineCommentModel
     */
    results?: Array<PageInlineCommentModel>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultPageInlineCommentModel
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultSpace
 */
export interface MultiEntityResultSpace {
    /**
     * 
     * @type {Array<Space>}
     * @memberof MultiEntityResultSpace
     */
    results?: Array<Space>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultSpace
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultSpaceProperty
 */
export interface MultiEntityResultSpaceProperty {
    /**
     * 
     * @type {Array<SpaceProperty>}
     * @memberof MultiEntityResultSpaceProperty
     */
    results?: Array<SpaceProperty>;
}
/**
 * 
 * @export
 * @interface MultiEntityResultTask
 */
export interface MultiEntityResultTask {
    /**
     * 
     * @type {Array<Task>}
     * @memberof MultiEntityResultTask
     */
    results?: Array<Task>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultTask
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultVersion
 */
export interface MultiEntityResultVersion {
    /**
     * 
     * @type {Array<AttachmentVersion>}
     * @memberof MultiEntityResultVersion
     */
    results?: Array<AttachmentVersion>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultVersion
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultVersion1
 */
export interface MultiEntityResultVersion1 {
    /**
     * 
     * @type {Array<BlogPostVersion>}
     * @memberof MultiEntityResultVersion1
     */
    results?: Array<BlogPostVersion>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultVersion1
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultVersion2
 */
export interface MultiEntityResultVersion2 {
    /**
     * 
     * @type {Array<PageVersion>}
     * @memberof MultiEntityResultVersion2
     */
    results?: Array<PageVersion>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultVersion2
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultVersion3
 */
export interface MultiEntityResultVersion3 {
    /**
     * 
     * @type {Array<CustomContentVersion>}
     * @memberof MultiEntityResultVersion3
     */
    results?: Array<CustomContentVersion>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultVersion3
     */
    links?: MultiEntityResultLabelLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultVersion4
 */
export interface MultiEntityResultVersion4 {
    /**
     * 
     * @type {Array<CommentVersion>}
     * @memberof MultiEntityResultVersion4
     */
    results?: Array<CommentVersion>;
    /**
     * 
     * @type {MultiEntityResultLabelLinks}
     * @memberof MultiEntityResultVersion4
     */
    links?: MultiEntityResultLabelLinks;
}

/**
 * The status of the content.
 * @export
 */
export const OnlyArchivedAndCurrentContentStatus = {
    Current: 'current',
    Archived: 'archived'
} as const;
export type OnlyArchivedAndCurrentContentStatus = typeof OnlyArchivedAndCurrentContentStatus[keyof typeof OnlyArchivedAndCurrentContentStatus];

/**
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * 
     * @type {PageId}
     * @memberof Page
     */
    id?: PageId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof Page
     */
    status?: ContentStatus;
    /**
     * Title of the page.
     * @type {string}
     * @memberof Page
     */
    title?: string;
    /**
     * 
     * @type {PageSpaceId}
     * @memberof Page
     */
    spaceId?: PageSpaceId;
    /**
     * 
     * @type {PageParentId}
     * @memberof Page
     */
    parentId?: PageParentId;
    /**
     * The account ID of the user who created this page originally.
     * @type {string}
     * @memberof Page
     */
    authorId?: string;
    /**
     * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Page
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof Page
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof Page
     */
    body?: Body;
}
/**
 * 
 * @export
 * @interface PageBodyWrite
 */
export interface PageBodyWrite {
    /**
     * Type of content representation used for the value field.
     * @type {string}
     * @memberof PageBodyWrite
     */
    representation?: PageBodyWriteRepresentationEnum;
    /**
     * Body of the page, in the format found in the representation field.
     * @type {string}
     * @memberof PageBodyWrite
     */
    value?: string;
}


/**
 * @export
 */
export const PageBodyWriteRepresentationEnum = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    Wiki: 'wiki'
} as const;
export type PageBodyWriteRepresentationEnum = typeof PageBodyWriteRepresentationEnum[keyof typeof PageBodyWriteRepresentationEnum];

/**
 * 
 * @export
 * @interface PageCommentModel
 */
export interface PageCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof PageCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof PageCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof PageCommentModel
     */
    title?: string;
    /**
     * 
     * @type {PageCommentModelPageId}
     * @memberof PageCommentModel
     */
    pageId?: PageCommentModelPageId;
    /**
     * 
     * @type {Version}
     * @memberof PageCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof PageCommentModel
     */
    body?: Body;
}
/**
 * @type PageCommentModelId
 * ID of the comment.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type PageCommentModelId = number | string;
/**
 * @type PageCommentModelPageId
 * ID of the page the comment is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type PageCommentModelPageId = number | string;
/**
 * @type PageId
 * ID of the page.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type PageId = number | string;
/**
 * 
 * @export
 * @interface PageInlineCommentModel
 */
export interface PageInlineCommentModel {
    /**
     * 
     * @type {PageCommentModelId}
     * @memberof PageInlineCommentModel
     */
    id?: PageCommentModelId;
    /**
     * 
     * @type {ContentStatus}
     * @memberof PageInlineCommentModel
     */
    status?: ContentStatus;
    /**
     * Title of the comment.
     * @type {string}
     * @memberof PageInlineCommentModel
     */
    title?: string;
    /**
     * 
     * @type {PageCommentModelPageId}
     * @memberof PageInlineCommentModel
     */
    pageId?: PageCommentModelPageId;
    /**
     * 
     * @type {Version}
     * @memberof PageInlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {Body}
     * @memberof PageInlineCommentModel
     */
    body?: Body;
    /**
     * 
     * @type {InlineCommentResolutionStatus}
     * @memberof PageInlineCommentModel
     */
    resolutionStatus?: InlineCommentResolutionStatus;
    /**
     * 
     * @type {InlineCommentProperties}
     * @memberof PageInlineCommentModel
     */
    properties?: InlineCommentProperties;
}
/**
 * Body of the page. Only one body format should be specified as the property
 * for this object, e.g. `storage`.
 * @export
 * @interface PageNestedBodyWrite
 */
export interface PageNestedBodyWrite {
    /**
     * 
     * @type {PageBodyWrite}
     * @memberof PageNestedBodyWrite
     */
    storage?: PageBodyWrite;
    /**
     * 
     * @type {PageBodyWrite}
     * @memberof PageNestedBodyWrite
     */
    atlasDocFormat?: PageBodyWrite;
    /**
     * 
     * @type {PageBodyWrite}
     * @memberof PageNestedBodyWrite
     */
    wiki?: PageBodyWrite;
}
/**
 * @type PageParentId
 * ID of the parent page, or null if there is no parent page.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type PageParentId = number | string;

/**
 * The sort fields for pages. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const PageSortOrder = {
    Id: 'id',
    IdDesc: '-id',
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type PageSortOrder = typeof PageSortOrder[keyof typeof PageSortOrder];

/**
 * @type PageSpaceId
 * ID of the space the page is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type PageSpaceId = number | string;
/**
 * 
 * @export
 * @interface PageVersion
 */
export interface PageVersion {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof PageVersion
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof PageVersion
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof PageVersion
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof PageVersion
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof PageVersion
     */
    authorId?: string;
    /**
     * 
     * @type {VersionedEntity}
     * @memberof PageVersion
     */
    page?: VersionedEntity;
}

/**
 * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
 * @export
 */
export const PrimaryBodyRepresentation = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format'
} as const;
export type PrimaryBodyRepresentation = typeof PrimaryBodyRepresentation[keyof typeof PrimaryBodyRepresentation];

/**
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * 
     * @type {SpaceId}
     * @memberof Space
     */
    id?: SpaceId;
    /**
     * Key of the space.
     * @type {string}
     * @memberof Space
     */
    key?: string;
    /**
     * Name of the space.
     * @type {string}
     * @memberof Space
     */
    name?: string;
    /**
     * 
     * @type {SpaceType}
     * @memberof Space
     */
    type?: SpaceType;
    /**
     * 
     * @type {SpaceStatus}
     * @memberof Space
     */
    status?: SpaceStatus;
    /**
     * 
     * @type {SpaceHomepageId}
     * @memberof Space
     */
    homepageId?: SpaceHomepageId;
    /**
     * 
     * @type {SpaceDescription}
     * @memberof Space
     */
    description?: SpaceDescription;
}
/**
 * Contains fields for each representation type requested.
 * @export
 * @interface SpaceDescription
 */
export interface SpaceDescription {
    /**
     * 
     * @type {BodyType}
     * @memberof SpaceDescription
     */
    plain?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof SpaceDescription
     */
    view?: BodyType;
}

/**
 * The formats a space description can be represented as. A subset of BodyRepresentation.
 * @export
 */
export const SpaceDescriptionBodyRepresentation = {
    Plain: 'plain',
    View: 'view'
} as const;
export type SpaceDescriptionBodyRepresentation = typeof SpaceDescriptionBodyRepresentation[keyof typeof SpaceDescriptionBodyRepresentation];

/**
 * @type SpaceHomepageId
 * ID of the space's homepage.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type SpaceHomepageId = number | string;
/**
 * @type SpaceId
 * ID of the space.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type SpaceId = number | string;
/**
 * 
 * @export
 * @interface SpaceProperty
 */
export interface SpaceProperty {
    /**
     * 
     * @type {SpacePropertyId}
     * @memberof SpaceProperty
     */
    id?: SpacePropertyId;
    /**
     * Key of the space property.
     * @type {string}
     * @memberof SpaceProperty
     */
    key?: string;
    /**
     * Value of the space property.
     * @type {any}
     * @memberof SpaceProperty
     */
    value?: any | null;
    /**
     * RFC3339 compliant date time at which the property was created.
     * @type {string}
     * @memberof SpaceProperty
     */
    createdAt?: string;
    /**
     * Atlassian account ID of the user that created the space property.
     * @type {string}
     * @memberof SpaceProperty
     */
    createdBy?: string;
    /**
     * 
     * @type {SpacePropertyVersion}
     * @memberof SpaceProperty
     */
    version?: SpacePropertyVersion;
}
/**
 * 
 * @export
 * @interface SpacePropertyCreateRequest
 */
export interface SpacePropertyCreateRequest {
    /**
     * Key of the space property
     * @type {string}
     * @memberof SpacePropertyCreateRequest
     */
    key?: string;
    /**
     * Value of the space property.
     * @type {any}
     * @memberof SpacePropertyCreateRequest
     */
    value?: any | null;
}
/**
 * @type SpacePropertyId
 * ID of the space property.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type SpacePropertyId = number | string;
/**
 * 
 * @export
 * @interface SpacePropertyUpdateRequest
 */
export interface SpacePropertyUpdateRequest {
    /**
     * Key of the space property
     * @type {string}
     * @memberof SpacePropertyUpdateRequest
     */
    key?: string;
    /**
     * Value of the space property.
     * @type {any}
     * @memberof SpacePropertyUpdateRequest
     */
    value?: any | null;
    /**
     * 
     * @type {ContentPropertyUpdateRequestVersion}
     * @memberof SpacePropertyUpdateRequest
     */
    version?: ContentPropertyUpdateRequestVersion;
}
/**
 * 
 * @export
 * @interface SpacePropertyVersion
 */
export interface SpacePropertyVersion {
    /**
     * RFC3339 compliant date time at which the property's current version was created.
     * @type {string}
     * @memberof SpacePropertyVersion
     */
    createdAt?: string;
    /**
     * Atlassian account ID of the user that created the space property's current version.
     * @type {string}
     * @memberof SpacePropertyVersion
     */
    createdBy?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof SpacePropertyVersion
     */
    message?: string;
    /**
     * The space property's current version number.
     * @type {number}
     * @memberof SpacePropertyVersion
     */
    number?: number;
}

/**
 * The sort fields for spaces. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const SpaceSortOrder = {
    Id: 'id',
    IdDesc: '-id',
    Key: 'key',
    KeyDesc: '-key',
    Name: 'name',
    NameDesc: '-name'
} as const;
export type SpaceSortOrder = typeof SpaceSortOrder[keyof typeof SpaceSortOrder];


/**
 * The status of the space.
 * @export
 */
export const SpaceStatus = {
    Current: 'current',
    Archived: 'archived'
} as const;
export type SpaceStatus = typeof SpaceStatus[keyof typeof SpaceStatus];


/**
 * The type of space.
 * @export
 */
export const SpaceType = {
    Global: 'global',
    Personal: 'personal'
} as const;
export type SpaceType = typeof SpaceType[keyof typeof SpaceType];

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {TaskId}
     * @memberof Task
     */
    id?: TaskId;
    /**
     * 
     * @type {TaskLocalId}
     * @memberof Task
     */
    localId?: TaskLocalId;
    /**
     * 
     * @type {TaskSpaceId}
     * @memberof Task
     */
    spaceId?: TaskSpaceId;
    /**
     * 
     * @type {TaskPageId}
     * @memberof Task
     */
    pageId?: TaskPageId;
    /**
     * 
     * @type {TaskBlogPostId}
     * @memberof Task
     */
    blogPostId?: TaskBlogPostId;
    /**
     * Status of the task.
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
    /**
     * 
     * @type {Body}
     * @memberof Task
     */
    body?: Body;
    /**
     * Account ID of the user who created this task.
     * @type {string}
     * @memberof Task
     */
    createdBy?: string;
    /**
     * Account ID of the user to whom this task is assigned.
     * @type {string}
     * @memberof Task
     */
    assignedTo?: string;
    /**
     * Account ID of the user who completed this task.
     * @type {string}
     * @memberof Task
     */
    completedBy?: string;
    /**
     * Date and time when the task was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Task
     */
    createdAt?: string;
    /**
     * Date and time when the task was updated. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Task
     */
    updatedAt?: string;
    /**
     * Date and time when the task is due. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Task
     */
    dueAt?: string;
    /**
     * Date and time when the task was completed. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Task
     */
    completedAt?: string;
}


/**
 * @export
 */
export const TaskStatusEnum = {
    Complete: 'complete',
    Incomplete: 'incomplete'
} as const;
export type TaskStatusEnum = typeof TaskStatusEnum[keyof typeof TaskStatusEnum];

/**
 * @type TaskBlogPostId
 * ID of the blog post the task is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type TaskBlogPostId = number | string;
/**
 * @type TaskId
 * ID of the task.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type TaskId = number | string;
/**
 * @type TaskLocalId
 * Local ID of the task. This ID is local to the corresponding page or blog post.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type TaskLocalId = number | string;
/**
 * @type TaskPageId
 * ID of the page the task is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type TaskPageId = number | string;
/**
 * @type TaskSpaceId
 * ID of the space the task is in.
 * 
 * Due to JavaScript's max integer representation of 2^53-1, the type of this field will be changed from a numeric type to a string type at the end of the deprecation period. In the meantime, `serialize-ids-as-strings=true` can be passed as a query param to any v2 endpoint to opt-in to this change now. See this [changelog](https://developer.atlassian.com/cloud/confluence/changelog/#CHANGE-905) for more detail.
 * @export
 */
export type TaskSpaceId = number | string;
/**
 * 
 * @export
 * @interface UpdateBlogPostRequest
 */
export interface UpdateBlogPostRequest {
    /**
     * Id of the blog post.
     * @type {string}
     * @memberof UpdateBlogPostRequest
     */
    id: string;
    /**
     * The status of the blog post.
     * @type {string}
     * @memberof UpdateBlogPostRequest
     */
    status: UpdateBlogPostRequestStatusEnum;
    /**
     * Title of the blog post.
     * @type {string}
     * @memberof UpdateBlogPostRequest
     */
    title: string;
    /**
     * ID of the containing space.
     * @type {string}
     * @memberof UpdateBlogPostRequest
     */
    spaceId: string;
    /**
     * 
     * @type {CreateBlogPostRequestBody}
     * @memberof UpdateBlogPostRequest
     */
    body: CreateBlogPostRequestBody;
    /**
     * 
     * @type {UpdateBlogPostRequestVersion}
     * @memberof UpdateBlogPostRequest
     */
    version: UpdateBlogPostRequestVersion;
}


/**
 * @export
 */
export const UpdateBlogPostRequestStatusEnum = {
    Current: 'current',
    Draft: 'draft',
    Archived: 'archived',
    Deleted: 'deleted'
} as const;
export type UpdateBlogPostRequestStatusEnum = typeof UpdateBlogPostRequestStatusEnum[keyof typeof UpdateBlogPostRequestStatusEnum];

/**
 * 
 * @export
 * @interface UpdateBlogPostRequestVersion
 */
export interface UpdateBlogPostRequestVersion {
    /**
     * The version number, must be incremented by one.
     * @type {number}
     * @memberof UpdateBlogPostRequestVersion
     */
    number?: number;
    /**
     * An optional message to be stored with the version.
     * @type {string}
     * @memberof UpdateBlogPostRequestVersion
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface UpdateCustomContentRequest
 */
export interface UpdateCustomContentRequest {
    /**
     * Id of custom content.
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    id: string;
    /**
     * Type of custom content.
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    type: string;
    /**
     * The status of the custom content
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    status: UpdateCustomContentRequestStatusEnum;
    /**
     * ID of the containing space
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    spaceId?: string;
    /**
     * ID of the containing page
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    pageId?: string;
    /**
     * ID of the containing Blog Post
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    blogPostId?: string;
    /**
     * ID of the containing custom content
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    customContentId?: string;
    /**
     * Title of the custom content
     * @type {string}
     * @memberof UpdateCustomContentRequest
     */
    title: string;
    /**
     * 
     * @type {CreateCustomContentRequestBody}
     * @memberof UpdateCustomContentRequest
     */
    body: CreateCustomContentRequestBody;
    /**
     * 
     * @type {UpdateBlogPostRequestVersion}
     * @memberof UpdateCustomContentRequest
     */
    version: UpdateBlogPostRequestVersion;
}


/**
 * @export
 */
export const UpdateCustomContentRequestStatusEnum = {
    Current: 'current'
} as const;
export type UpdateCustomContentRequestStatusEnum = typeof UpdateCustomContentRequestStatusEnum[keyof typeof UpdateCustomContentRequestStatusEnum];

/**
 * 
 * @export
 * @interface UpdateFooterCommentModel
 */
export interface UpdateFooterCommentModel {
    /**
     * 
     * @type {UpdateFooterCommentModelVersion}
     * @memberof UpdateFooterCommentModel
     */
    version?: UpdateFooterCommentModelVersion;
    /**
     * 
     * @type {CreateFooterCommentModelBody}
     * @memberof UpdateFooterCommentModel
     */
    body?: CreateFooterCommentModelBody;
}
/**
 * 
 * @export
 * @interface UpdateFooterCommentModelVersion
 */
export interface UpdateFooterCommentModelVersion {
    /**
     * Number of new version. Should be 1 higher than current version of the comment.
     * @type {number}
     * @memberof UpdateFooterCommentModelVersion
     */
    number?: number;
    /**
     * Optional message store for the new version.
     * @type {string}
     * @memberof UpdateFooterCommentModelVersion
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface UpdateInlineCommentModel
 */
export interface UpdateInlineCommentModel {
    /**
     * 
     * @type {UpdateFooterCommentModelVersion}
     * @memberof UpdateInlineCommentModel
     */
    version?: UpdateFooterCommentModelVersion;
    /**
     * 
     * @type {CreateFooterCommentModelBody}
     * @memberof UpdateInlineCommentModel
     */
    body?: CreateFooterCommentModelBody;
    /**
     * Resolved state of the comment. Set to true to resolve the comment, set to false to reopen it. If
     * matching the existing state (i.e. true -> resolved or false -> open/reopened) , no change will occur. A dangling
     * comment cannot be updated.
     * @type {boolean}
     * @memberof UpdateInlineCommentModel
     */
    resolved?: boolean;
}
/**
 * 
 * @export
 * @interface UpdatePageRequest
 */
export interface UpdatePageRequest {
    /**
     * Id of the page.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    id: string;
    /**
     * The status of the page.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    status: UpdatePageRequestStatusEnum;
    /**
     * Title of the page.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    title: string;
    /**
     * ID of the containing space.
     * @type {string}
     * @memberof UpdatePageRequest
     */
    spaceId: string;
    /**
     * 
     * @type {CreatePageRequestBody}
     * @memberof UpdatePageRequest
     */
    body: CreatePageRequestBody;
    /**
     * 
     * @type {UpdateBlogPostRequestVersion}
     * @memberof UpdatePageRequest
     */
    version: UpdateBlogPostRequestVersion;
}


/**
 * @export
 */
export const UpdatePageRequestStatusEnum = {
    Current: 'current',
    Draft: 'draft',
    Archived: 'archived',
    Deleted: 'deleted'
} as const;
export type UpdatePageRequestStatusEnum = typeof UpdatePageRequestStatusEnum[keyof typeof UpdatePageRequestStatusEnum];

/**
 * 
 * @export
 * @interface UpdateTaskRequest
 */
export interface UpdateTaskRequest {
    /**
     * ID of the task.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    id?: string;
    /**
     * Local ID of the task. This ID is local to the corresponding page or blog post.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    localId?: string;
    /**
     * ID of the space the task is in.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    spaceId?: string;
    /**
     * ID of the page the task is in.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    pageId?: string;
    /**
     * ID of the blog post the task is in.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    blogPostId?: string;
    /**
     * Status of the task.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    status: UpdateTaskRequestStatusEnum;
    /**
     * Account ID of the user who created this task.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    createdBy?: string;
    /**
     * Account ID of the user to whom this task is assigned.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    assignedTo?: string;
    /**
     * Account ID of the user who completed this task.
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    completedBy?: string;
    /**
     * Date and time when the task was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    createdAt?: string;
    /**
     * Date and time when the task was updated. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    updatedAt?: string;
    /**
     * Date and time when the task is due. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    dueAt?: string;
    /**
     * Date and time when the task was completed. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof UpdateTaskRequest
     */
    completedAt?: string;
}


/**
 * @export
 */
export const UpdateTaskRequestStatusEnum = {
    Complete: 'complete',
    Incomplete: 'incomplete'
} as const;
export type UpdateTaskRequestStatusEnum = typeof UpdateTaskRequestStatusEnum[keyof typeof UpdateTaskRequestStatusEnum];

/**
 * 
 * @export
 * @interface Version
 */
export interface Version {
    /**
     * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Version
     */
    createdAt?: string;
    /**
     * Message associated with the current version.
     * @type {string}
     * @memberof Version
     */
    message?: string;
    /**
     * The version number.
     * @type {number}
     * @memberof Version
     */
    number?: number;
    /**
     * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
     * @type {boolean}
     * @memberof Version
     */
    minorEdit?: boolean;
    /**
     * The account ID of the user who created this version.
     * @type {string}
     * @memberof Version
     */
    authorId?: string;
}

/**
 * The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const VersionSortOrder = {
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date'
} as const;
export type VersionSortOrder = typeof VersionSortOrder[keyof typeof VersionSortOrder];

/**
 * 
 * @export
 * @interface VersionedEntity
 */
export interface VersionedEntity {
    /**
     * Title of the entity.
     * @type {string}
     * @memberof VersionedEntity
     */
    title?: string;
    /**
     * ID of the entity.
     * @type {string}
     * @memberof VersionedEntity
     */
    id?: string;
    /**
     * 
     * @type {Body}
     * @memberof VersionedEntity
     */
    body?: Body;
}
