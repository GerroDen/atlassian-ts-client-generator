/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AbstractPageLinks
 */
export interface AbstractPageLinks {
    /**
     * Web UI link of the content.
     * @type {string}
     * @memberof AbstractPageLinks
     */
    webui?: string;
    /**
     * Edit UI link of the content.
     * @type {string}
     * @memberof AbstractPageLinks
     */
    editui?: string;
    /**
     * Web UI link of the content.
     * @type {string}
     * @memberof AbstractPageLinks
     */
    tinyui?: string;
}
/**
 * 
 * @export
 * @interface Ancestor
 */
export interface Ancestor {
    /**
     * ID of the ancestor
     * @type {string}
     * @memberof Ancestor
     */
    id?: string;
    /**
     * 
     * @type {AncestorType}
     * @memberof Ancestor
     */
    type?: AncestorType;
}

/**
 * The type of ancestor.
 * @export
 */
export const AncestorType = {
    Page: 'page'
} as const;
export type AncestorType = typeof AncestorType[keyof typeof AncestorType];

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
     * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Attachment
     */
    createdAt?: string;
    /**
     * ID of the containing page.
     * 
     * Note: This is only returned if the attachment has a container that is a page.
     * @type {string}
     * @memberof Attachment
     */
    pageId?: string;
    /**
     * ID of the containing blog post.
     * 
     * Note: This is only returned if the attachment has a container that is a blog post.
     * @type {string}
     * @memberof Attachment
     */
    blogPostId?: string;
    /**
     * ID of the containing custom content.
     * 
     * Note: This is only returned if the attachment has a container that is custom content.
     * @type {string}
     * @memberof Attachment
     */
    customContentId?: string;
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
     * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
     * @type {string}
     * @memberof Attachment
     */
    fileId?: string;
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
    /**
     * 
     * @type {AttachmentLinks}
     * @memberof Attachment
     */
    links?: AttachmentLinks;
}
/**
 * 
 * @export
 * @interface AttachmentLinks
 */
export interface AttachmentLinks {
    /**
     * Web UI link of the content.
     * @type {string}
     * @memberof AttachmentLinks
     */
    webui?: string;
    /**
     * Download link of the content.
     * @type {string}
     * @memberof AttachmentLinks
     */
    download?: string;
}

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
 * @interface BlogPostBulk
 */
export interface BlogPostBulk {
    /**
     * ID of the blog post.
     * @type {string}
     * @memberof BlogPostBulk
     */
    id?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof BlogPostBulk
     */
    status?: ContentStatus;
    /**
     * Title of the blog post.
     * @type {string}
     * @memberof BlogPostBulk
     */
    title?: string;
    /**
     * ID of the space the blog post is in.
     * @type {string}
     * @memberof BlogPostBulk
     */
    spaceId?: string;
    /**
     * The account ID of the user who created this blog post originally.
     * @type {string}
     * @memberof BlogPostBulk
     */
    authorId?: string;
    /**
     * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof BlogPostBulk
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostBulk
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof BlogPostBulk
     */
    body?: BodyBulk;
    /**
     * 
     * @type {AbstractPageLinks}
     * @memberof BlogPostBulk
     */
    links?: AbstractPageLinks;
}
/**
 * 
 * @export
 * @interface BlogPostCommentModel
 */
export interface BlogPostCommentModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof BlogPostCommentModel
     */
    id?: string;
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
     * ID of the blog post the comment is in.
     * @type {string}
     * @memberof BlogPostCommentModel
     */
    blogPostId?: string;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof BlogPostCommentModel
     */
    body?: BodyBulk;
    /**
     * 
     * @type {CommentLinks}
     * @memberof BlogPostCommentModel
     */
    links?: CommentLinks;
}
/**
 * 
 * @export
 * @interface BlogPostInlineCommentModel
 */
export interface BlogPostInlineCommentModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof BlogPostInlineCommentModel
     */
    id?: string;
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
     * ID of the blog post the comment is in.
     * @type {string}
     * @memberof BlogPostInlineCommentModel
     */
    blogPostId?: string;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostInlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof BlogPostInlineCommentModel
     */
    body?: BodyBulk;
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
    /**
     * 
     * @type {CommentLinks}
     * @memberof BlogPostInlineCommentModel
     */
    links?: CommentLinks;
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
 * 
 * @export
 * @interface BlogPostSingle
 */
export interface BlogPostSingle {
    /**
     * ID of the blog post.
     * @type {string}
     * @memberof BlogPostSingle
     */
    id?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof BlogPostSingle
     */
    status?: ContentStatus;
    /**
     * Title of the blog post.
     * @type {string}
     * @memberof BlogPostSingle
     */
    title?: string;
    /**
     * ID of the space the blog post is in.
     * @type {string}
     * @memberof BlogPostSingle
     */
    spaceId?: string;
    /**
     * The account ID of the user who created this blog post originally.
     * @type {string}
     * @memberof BlogPostSingle
     */
    authorId?: string;
    /**
     * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof BlogPostSingle
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof BlogPostSingle
     */
    version?: Version;
    /**
     * 
     * @type {BodySingle}
     * @memberof BlogPostSingle
     */
    body?: BodySingle;
    /**
     * 
     * @type {AbstractPageLinks}
     * @memberof BlogPostSingle
     */
    links?: AbstractPageLinks;
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
 * @interface BodyBulk
 */
export interface BodyBulk {
    /**
     * 
     * @type {BodyType}
     * @memberof BodyBulk
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof BodyBulk
     */
    atlasDocFormat?: BodyType;
}
/**
 * Contains fields for each representation type requested.
 * @export
 * @interface BodySingle
 */
export interface BodySingle {
    /**
     * 
     * @type {BodyType}
     * @memberof BodySingle
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof BodySingle
     */
    atlasDocFormat?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof BodySingle
     */
    view?: BodyType;
}
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
     * ID of the child custom content.
     * @type {string}
     * @memberof ChildCustomContent
     */
    id?: string;
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
     * ID of the space the custom content is in.
     * @type {string}
     * @memberof ChildCustomContent
     */
    spaceId?: string;
}

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
 * 
 * @export
 * @interface ChildPage
 */
export interface ChildPage {
    /**
     * ID of the page.
     * @type {string}
     * @memberof ChildPage
     */
    id?: string;
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
     * ID of the space the page is in.
     * @type {string}
     * @memberof ChildPage
     */
    spaceId?: string;
    /**
     * Position of child page within the given parent page tree.
     * @type {number}
     * @memberof ChildPage
     */
    childPosition?: number | null;
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
     * ID of the comment.
     * @type {string}
     * @memberof ChildrenCommentModel
     */
    id?: string;
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
     * ID of the parent comment the child comment is in.
     * @type {string}
     * @memberof ChildrenCommentModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {Version}
     * @memberof ChildrenCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof ChildrenCommentModel
     */
    body?: BodyBulk;
    /**
     * 
     * @type {CommentLinks}
     * @memberof ChildrenCommentModel
     */
    links?: CommentLinks;
}
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
 * 
 * @export
 * @interface CommentLinks
 */
export interface CommentLinks {
    /**
     * Web UI link of the content.
     * @type {string}
     * @memberof CommentLinks
     */
    webui?: string;
}
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
     * ID of the property
     * @type {string}
     * @memberof ContentProperty
     */
    id?: string;
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
 * Content type of the parent, or null if there is no parent.
 * @export
 */
export const ContentType = {
    Page: 'page'
} as const;
export type ContentType = typeof ContentType[keyof typeof ContentType];

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
 * Contains fields for each representation type requested.
 * @export
 * @interface CustomContentBodyBulk
 */
export interface CustomContentBodyBulk {
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodyBulk
     */
    raw?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodyBulk
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodyBulk
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
 * The formats a custom content body can be represented as. A subset of BodyRepresentation.
 * @export
 */
export const CustomContentBodyRepresentationSingle = {
    Raw: 'raw',
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    View: 'view',
    ExportView: 'export_view',
    AnonymousExportView: 'anonymous_export_view'
} as const;
export type CustomContentBodyRepresentationSingle = typeof CustomContentBodyRepresentationSingle[keyof typeof CustomContentBodyRepresentationSingle];

/**
 * Contains fields for each representation type requested.
 * @export
 * @interface CustomContentBodySingle
 */
export interface CustomContentBodySingle {
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodySingle
     */
    raw?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodySingle
     */
    storage?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodySingle
     */
    atlasDocFormat?: BodyType;
    /**
     * 
     * @type {BodyType}
     * @memberof CustomContentBodySingle
     */
    view?: BodyType;
}
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
 * 
 * @export
 * @interface CustomContentBulk
 */
export interface CustomContentBulk {
    /**
     * ID of the custom content.
     * @type {string}
     * @memberof CustomContentBulk
     */
    id?: string;
    /**
     * The type of custom content.
     * @type {string}
     * @memberof CustomContentBulk
     */
    type?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof CustomContentBulk
     */
    status?: ContentStatus;
    /**
     * Title of the custom content.
     * @type {string}
     * @memberof CustomContentBulk
     */
    title?: string;
    /**
     * ID of the space the custom content is in.
     * 
     * Note: This is always returned, regardless of if the custom content has a container that is a space.
     * @type {string}
     * @memberof CustomContentBulk
     */
    spaceId?: string;
    /**
     * ID of the containing page.
     * 
     * Note: This is only returned if the custom content has a container that is a page.
     * @type {string}
     * @memberof CustomContentBulk
     */
    pageId?: string;
    /**
     * ID of the containing blog post.
     * 
     * Note: This is only returned if the custom content has a container that is a blog post.
     * @type {string}
     * @memberof CustomContentBulk
     */
    blogPostId?: string;
    /**
     * ID of the containing custom content.
     * 
     * Note: This is only returned if the custom content has a container that is custom content.
     * @type {string}
     * @memberof CustomContentBulk
     */
    customContentId?: string;
    /**
     * The account ID of the user who created this custom content originally.
     * @type {string}
     * @memberof CustomContentBulk
     */
    authorId?: string;
    /**
     * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof CustomContentBulk
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof CustomContentBulk
     */
    version?: Version;
    /**
     * 
     * @type {CustomContentBodyBulk}
     * @memberof CustomContentBulk
     */
    body?: CustomContentBodyBulk;
    /**
     * 
     * @type {CustomContentLinks}
     * @memberof CustomContentBulk
     */
    links?: CustomContentLinks;
}
/**
 * 
 * @export
 * @interface CustomContentLinks
 */
export interface CustomContentLinks {
    /**
     * Web UI link of the content.
     * @type {string}
     * @memberof CustomContentLinks
     */
    webui?: string;
}
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
 * 
 * @export
 * @interface CustomContentSingle
 */
export interface CustomContentSingle {
    /**
     * ID of the custom content.
     * @type {string}
     * @memberof CustomContentSingle
     */
    id?: string;
    /**
     * The type of custom content.
     * @type {string}
     * @memberof CustomContentSingle
     */
    type?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof CustomContentSingle
     */
    status?: ContentStatus;
    /**
     * Title of the custom content.
     * @type {string}
     * @memberof CustomContentSingle
     */
    title?: string;
    /**
     * ID of the space the custom content is in.
     * 
     * Note: This is always returned, regardless of if the custom content has a container that is a space.
     * @type {string}
     * @memberof CustomContentSingle
     */
    spaceId?: string;
    /**
     * ID of the containing page.
     * 
     * Note: This is only returned if the custom content has a container that is a page.
     * @type {string}
     * @memberof CustomContentSingle
     */
    pageId?: string;
    /**
     * ID of the containing blog post.
     * 
     * Note: This is only returned if the custom content has a container that is a blog post.
     * @type {string}
     * @memberof CustomContentSingle
     */
    blogPostId?: string;
    /**
     * ID of the containing custom content.
     * 
     * Note: This is only returned if the custom content has a container that is custom content.
     * @type {string}
     * @memberof CustomContentSingle
     */
    customContentId?: string;
    /**
     * The account ID of the user who created this custom content originally.
     * @type {string}
     * @memberof CustomContentSingle
     */
    authorId?: string;
    /**
     * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof CustomContentSingle
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof CustomContentSingle
     */
    version?: Version;
    /**
     * 
     * @type {CustomContentBodySingle}
     * @memberof CustomContentSingle
     */
    body?: CustomContentBodySingle;
    /**
     * 
     * @type {CustomContentLinks}
     * @memberof CustomContentSingle
     */
    links?: CustomContentLinks;
}

/**
 * The sort fields for custom content. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const CustomContentSortOrder = {
    Id: 'id',
    IdDesc: '-id',
    CreatedDate: 'created-date',
    CreatedDateDesc: '-created-date',
    ModifiedDate: 'modified-date',
    ModifiedDateDesc: '-modified-date',
    Title: 'title',
    TitleDesc: '-title'
} as const;
export type CustomContentSortOrder = typeof CustomContentSortOrder[keyof typeof CustomContentSortOrder];

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
     * ID of the comment.
     * @type {string}
     * @memberof FooterCommentModel
     */
    id?: string;
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
     * ID of the blog post containing the comment if the comment is on a blog post.
     * @type {string}
     * @memberof FooterCommentModel
     */
    blogPostId?: string;
    /**
     * ID of the page containing the comment if the comment is on a page.
     * @type {string}
     * @memberof FooterCommentModel
     */
    pageId?: string;
    /**
     * ID of the parent comment if the comment is a reply.
     * @type {string}
     * @memberof FooterCommentModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {Version}
     * @memberof FooterCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodySingle}
     * @memberof FooterCommentModel
     */
    body?: BodySingle;
    /**
     * 
     * @type {CommentLinks}
     * @memberof FooterCommentModel
     */
    links?: CommentLinks;
}
/**
 * 
 * @export
 * @interface InlineCommentChildrenModel
 */
export interface InlineCommentChildrenModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof InlineCommentChildrenModel
     */
    id?: string;
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
     * ID of the parent comment the child comment is in.
     * @type {string}
     * @memberof InlineCommentChildrenModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {Version}
     * @memberof InlineCommentChildrenModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof InlineCommentChildrenModel
     */
    body?: BodyBulk;
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
    /**
     * 
     * @type {CommentLinks}
     * @memberof InlineCommentChildrenModel
     */
    links?: CommentLinks;
}
/**
 * 
 * @export
 * @interface InlineCommentModel
 */
export interface InlineCommentModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof InlineCommentModel
     */
    id?: string;
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
     * ID of the blog post containing the comment if the comment is on a blog post.
     * @type {string}
     * @memberof InlineCommentModel
     */
    blogPostId?: string;
    /**
     * ID of the page containing the comment if the comment is on a page.
     * @type {string}
     * @memberof InlineCommentModel
     */
    pageId?: string;
    /**
     * ID of the parent comment if the comment is a reply.
     * @type {string}
     * @memberof InlineCommentModel
     */
    parentCommentId?: string;
    /**
     * 
     * @type {Version}
     * @memberof InlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodySingle}
     * @memberof InlineCommentModel
     */
    body?: BodySingle;
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
    /**
     * 
     * @type {CommentLinks}
     * @memberof InlineCommentModel
     */
    links?: CommentLinks;
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
 * @interface Label
 */
export interface Label {
    /**
     * ID of the label.
     * @type {string}
     * @memberof Label
     */
    id?: string;
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
 * @interface Like
 */
export interface Like {
    /**
     * Account ID.
     * @type {string}
     * @memberof Like
     */
    accountId?: string;
}
/**
 * 
 * @export
 * @interface ModelInteger
 */
export interface ModelInteger {
    /**
     * The count number
     * @type {number}
     * @memberof ModelInteger
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface MultiEntityResultAncestor
 */
export interface MultiEntityResultAncestor {
    /**
     * 
     * @type {Array<Ancestor>}
     * @memberof MultiEntityResultAncestor
     */
    results?: Array<Ancestor>;
}
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultAttachment
     */
    links?: MultiEntityResultAttachmentLinks;
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
 * @interface MultiEntityResultAttachmentLinks
 */
export interface MultiEntityResultAttachmentLinks {
    /**
     * Used for pagination. Contains the relative URL for the next set of results, using a cursor query parameter.
     * This property will not be present if there is no additional data available.
     * @type {string}
     * @memberof MultiEntityResultAttachmentLinks
     */
    next?: string;
}
/**
 * 
 * @export
 * @interface MultiEntityResultBlogPost
 */
export interface MultiEntityResultBlogPost {
    /**
     * 
     * @type {Array<BlogPostBulk>}
     * @memberof MultiEntityResultBlogPost
     */
    results?: Array<BlogPostBulk>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultBlogPost
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultBlogPostCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultBlogPostInlineCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultChildCustomContent
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultChildPage
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultChildrenCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultContentProperty
     */
    links?: MultiEntityResultAttachmentLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultCustomContent
 */
export interface MultiEntityResultCustomContent {
    /**
     * 
     * @type {Array<CustomContentBulk>}
     * @memberof MultiEntityResultCustomContent
     */
    results?: Array<CustomContentBulk>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultCustomContent
     */
    links?: MultiEntityResultAttachmentLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultFooterCommentModel
 */
export interface MultiEntityResultFooterCommentModel {
    /**
     * 
     * @type {Array<InlineCommentModel>}
     * @memberof MultiEntityResultFooterCommentModel
     */
    results?: Array<InlineCommentModel>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultFooterCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultInlineCommentChildrenModel
     */
    links?: MultiEntityResultAttachmentLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultInlineCommentModel
 */
export interface MultiEntityResultInlineCommentModel {
    /**
     * 
     * @type {Array<InlineCommentModel>}
     * @memberof MultiEntityResultInlineCommentModel
     */
    results?: Array<InlineCommentModel>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultInlineCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultLabel
     */
    links?: MultiEntityResultAttachmentLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultPage
 */
export interface MultiEntityResultPage {
    /**
     * 
     * @type {Array<PageBulk>}
     * @memberof MultiEntityResultPage
     */
    results?: Array<PageBulk>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultPage
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultPageCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultPageInlineCommentModel
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultSpace
     */
    links?: MultiEntityResultAttachmentLinks;
}
/**
 * 
 * @export
 * @interface MultiEntityResultSpacePermission
 */
export interface MultiEntityResultSpacePermission {
    /**
     * 
     * @type {Array<SpacePermission>}
     * @memberof MultiEntityResultSpacePermission
     */
    results?: Array<SpacePermission>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultSpacePermission
     */
    links?: MultiEntityResultAttachmentLinks;
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
 * @interface MultiEntityResultString
 */
export interface MultiEntityResultString {
    /**
     * 
     * @type {Array<Like>}
     * @memberof MultiEntityResultString
     */
    results?: Array<Like>;
    /**
     * 
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultString
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultTask
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultVersion
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultVersion1
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultVersion2
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultVersion3
     */
    links?: MultiEntityResultAttachmentLinks;
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
     * @type {MultiEntityResultAttachmentLinks}
     * @memberof MultiEntityResultVersion4
     */
    links?: MultiEntityResultAttachmentLinks;
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
 * @interface PageBulk
 */
export interface PageBulk {
    /**
     * ID of the page.
     * @type {string}
     * @memberof PageBulk
     */
    id?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof PageBulk
     */
    status?: ContentStatus;
    /**
     * Title of the page.
     * @type {string}
     * @memberof PageBulk
     */
    title?: string;
    /**
     * ID of the space the page is in.
     * @type {string}
     * @memberof PageBulk
     */
    spaceId?: string;
    /**
     * ID of the parent page, or null if there is no parent page.
     * @type {string}
     * @memberof PageBulk
     */
    parentId?: string;
    /**
     * 
     * @type {ContentType}
     * @memberof PageBulk
     */
    parentType?: ContentType;
    /**
     * Position of child page within the given parent page tree.
     * @type {number}
     * @memberof PageBulk
     */
    position?: number | null;
    /**
     * The account ID of the user who created this page originally.
     * @type {string}
     * @memberof PageBulk
     */
    authorId?: string;
    /**
     * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof PageBulk
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof PageBulk
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof PageBulk
     */
    body?: BodyBulk;
    /**
     * 
     * @type {AbstractPageLinks}
     * @memberof PageBulk
     */
    links?: AbstractPageLinks;
}
/**
 * 
 * @export
 * @interface PageCommentModel
 */
export interface PageCommentModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof PageCommentModel
     */
    id?: string;
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
     * ID of the page the comment is in.
     * @type {string}
     * @memberof PageCommentModel
     */
    pageId?: string;
    /**
     * 
     * @type {Version}
     * @memberof PageCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof PageCommentModel
     */
    body?: BodyBulk;
    /**
     * 
     * @type {CommentLinks}
     * @memberof PageCommentModel
     */
    links?: CommentLinks;
}
/**
 * 
 * @export
 * @interface PageInlineCommentModel
 */
export interface PageInlineCommentModel {
    /**
     * ID of the comment.
     * @type {string}
     * @memberof PageInlineCommentModel
     */
    id?: string;
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
     * ID of the page the comment is in.
     * @type {string}
     * @memberof PageInlineCommentModel
     */
    pageId?: string;
    /**
     * 
     * @type {Version}
     * @memberof PageInlineCommentModel
     */
    version?: Version;
    /**
     * 
     * @type {BodyBulk}
     * @memberof PageInlineCommentModel
     */
    body?: BodyBulk;
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
    /**
     * 
     * @type {CommentLinks}
     * @memberof PageInlineCommentModel
     */
    links?: CommentLinks;
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
 * 
 * @export
 * @interface PageSingle
 */
export interface PageSingle {
    /**
     * ID of the page.
     * @type {string}
     * @memberof PageSingle
     */
    id?: string;
    /**
     * 
     * @type {ContentStatus}
     * @memberof PageSingle
     */
    status?: ContentStatus;
    /**
     * Title of the page.
     * @type {string}
     * @memberof PageSingle
     */
    title?: string;
    /**
     * ID of the space the page is in.
     * @type {string}
     * @memberof PageSingle
     */
    spaceId?: string;
    /**
     * ID of the parent page, or null if there is no parent page.
     * @type {string}
     * @memberof PageSingle
     */
    parentId?: string;
    /**
     * 
     * @type {ContentType}
     * @memberof PageSingle
     */
    parentType?: ContentType;
    /**
     * Position of child page within the given parent page tree.
     * @type {number}
     * @memberof PageSingle
     */
    position?: number | null;
    /**
     * The account ID of the user who created this page originally.
     * @type {string}
     * @memberof PageSingle
     */
    authorId?: string;
    /**
     * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof PageSingle
     */
    createdAt?: string;
    /**
     * 
     * @type {Version}
     * @memberof PageSingle
     */
    version?: Version;
    /**
     * 
     * @type {BodySingle}
     * @memberof PageSingle
     */
    body?: BodySingle;
    /**
     * 
     * @type {AbstractPageLinks}
     * @memberof PageSingle
     */
    links?: AbstractPageLinks;
}

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
    ModifiedDateDesc: '-modified-date',
    Title: 'title',
    TitleDesc: '-title'
} as const;
export type PageSortOrder = typeof PageSortOrder[keyof typeof PageSortOrder];

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
 * The list of operations permitted on entity.
 * @export
 * @interface PermittedOperationsResponse
 */
export interface PermittedOperationsResponse {
    /**
     * 
     * @type {Array<PermittedOperationsResponseOperationsInner>}
     * @memberof PermittedOperationsResponse
     */
    operations?: Array<PermittedOperationsResponseOperationsInner>;
}
/**
 * 
 * @export
 * @interface PermittedOperationsResponseOperationsInner
 */
export interface PermittedOperationsResponseOperationsInner {
    /**
     * The type of operation.
     * @type {string}
     * @memberof PermittedOperationsResponseOperationsInner
     */
    operation?: string;
    /**
     * The type of entity the operation type targets.
     * @type {string}
     * @memberof PermittedOperationsResponseOperationsInner
     */
    targetType?: string;
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
 * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
 * @export
 */
export const PrimaryBodyRepresentationSingle = {
    Storage: 'storage',
    AtlasDocFormat: 'atlas_doc_format',
    View: 'view',
    ExportView: 'export_view',
    AnonymousExportView: 'anonymous_export_view'
} as const;
export type PrimaryBodyRepresentationSingle = typeof PrimaryBodyRepresentationSingle[keyof typeof PrimaryBodyRepresentationSingle];

/**
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * ID of the space.
     * @type {string}
     * @memberof Space
     */
    id?: string;
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
     * The account ID of the user who created this space originally.
     * @type {string}
     * @memberof Space
     */
    authorId?: string;
    /**
     * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
     * @type {string}
     * @memberof Space
     */
    createdAt?: string;
    /**
     * ID of the space's homepage.
     * @type {string}
     * @memberof Space
     */
    homepageId?: string;
    /**
     * 
     * @type {SpaceDescription}
     * @memberof Space
     */
    description?: SpaceDescription;
    /**
     * 
     * @type {SpaceIcon}
     * @memberof Space
     */
    icon?: SpaceIcon;
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
 * The icon of the space
 * @export
 * @interface SpaceIcon
 */
export interface SpaceIcon {
    /**
     * The path (relative to base URL) at which the space's icon can be retrieved. The format should be like `/wiki/download/...` or `/wiki/aa-avatar/...`
     * @type {string}
     * @memberof SpaceIcon
     */
    path?: string;
}
/**
 * 
 * @export
 * @interface SpacePermission
 */
export interface SpacePermission {
    /**
     * ID of the space permission.
     * @type {string}
     * @memberof SpacePermission
     */
    id?: string;
    /**
     * 
     * @type {SpacePermissionPrincipal}
     * @memberof SpacePermission
     */
    principal?: SpacePermissionPrincipal;
    /**
     * 
     * @type {SpacePermissionOperation}
     * @memberof SpacePermission
     */
    operation?: SpacePermissionOperation;
}
/**
 * The operation the space permission corresponds to.
 * @export
 * @interface SpacePermissionOperation
 */
export interface SpacePermissionOperation {
    /**
     * The type of operation.
     * @type {string}
     * @memberof SpacePermissionOperation
     */
    key?: SpacePermissionOperationKeyEnum;
    /**
     * The type of entity the operation type targets.
     * @type {string}
     * @memberof SpacePermissionOperation
     */
    targetType?: SpacePermissionOperationTargetTypeEnum;
}


/**
 * @export
 */
export const SpacePermissionOperationKeyEnum = {
    Use: 'use',
    Create: 'create',
    Read: 'read',
    Update: 'update',
    Delete: 'delete',
    Copy: 'copy',
    Move: 'move',
    Export: 'export',
    Purge: 'purge',
    PurgeVersion: 'purge_version',
    Administer: 'administer',
    Restore: 'restore',
    CreateSpace: 'create_space',
    RestrictContent: 'restrict_content',
    Archive: 'archive'
} as const;
export type SpacePermissionOperationKeyEnum = typeof SpacePermissionOperationKeyEnum[keyof typeof SpacePermissionOperationKeyEnum];

/**
 * @export
 */
export const SpacePermissionOperationTargetTypeEnum = {
    Page: 'page',
    Blogpost: 'blogpost',
    Comment: 'comment',
    Attachment: 'attachment',
    Whiteboard: 'whiteboard',
    Space: 'space',
    Application: 'application',
    UserProfile: 'userProfile'
} as const;
export type SpacePermissionOperationTargetTypeEnum = typeof SpacePermissionOperationTargetTypeEnum[keyof typeof SpacePermissionOperationTargetTypeEnum];

/**
 * The entity the space permissions corresponds to.
 * @export
 * @interface SpacePermissionPrincipal
 */
export interface SpacePermissionPrincipal {
    /**
     * 
     * @type {string}
     * @memberof SpacePermissionPrincipal
     */
    type?: SpacePermissionPrincipalTypeEnum;
    /**
     * ID of the entity.
     * @type {string}
     * @memberof SpacePermissionPrincipal
     */
    id?: string;
}


/**
 * @export
 */
export const SpacePermissionPrincipalTypeEnum = {
    User: 'user',
    Group: 'group',
    Role: 'role'
} as const;
export type SpacePermissionPrincipalTypeEnum = typeof SpacePermissionPrincipalTypeEnum[keyof typeof SpacePermissionPrincipalTypeEnum];

/**
 * 
 * @export
 * @interface SpaceProperty
 */
export interface SpaceProperty {
    /**
     * ID of the space property.
     * @type {string}
     * @memberof SpaceProperty
     */
    id?: string;
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
     * ID of the task.
     * @type {string}
     * @memberof Task
     */
    id?: string;
    /**
     * Local ID of the task. This ID is local to the corresponding page or blog post.
     * @type {string}
     * @memberof Task
     */
    localId?: string;
    /**
     * ID of the space the task is in.
     * @type {string}
     * @memberof Task
     */
    spaceId?: string;
    /**
     * ID of the page the task is in.
     * @type {string}
     * @memberof Task
     */
    pageId?: string;
    /**
     * ID of the blog post the task is in.
     * @type {string}
     * @memberof Task
     */
    blogPostId?: string;
    /**
     * Status of the task.
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
    /**
     * 
     * @type {BodySingle}
     * @memberof Task
     */
    body?: BodySingle;
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
     * 
     * This currently **does not support moving the blog post to a different space**.
     * @type {string}
     * @memberof UpdateBlogPostRequest
     */
    spaceId?: string;
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
     * 
     * This currently **does not support moving the page to a different space**.
     * @type {any}
     * @memberof UpdatePageRequest
     */
    spaceId?: any | null;
    /**
     * ID of the parent page.
     * 
     * This allows the page to be moved under a different parent within the same space.
     * @type {any}
     * @memberof UpdatePageRequest
     */
    parentId?: any | null;
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
     * @type {BodyBulk}
     * @memberof VersionedEntity
     */
    body?: BodyBulk;
}
