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
 * The account status of the user.
 * @export
 */
export const AccountStatus = {
  Active: "active",
  Inactive: "inactive",
  Closed: "closed",
  Unknown: "unknown",
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * The account type of the user.
 * @export
 */
export const AccountType = {
  Atlassian: "atlassian",
  App: "app",
  Customer: "customer",
  Unknown: "unknown",
} as const;
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

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
  Page: "page",
  Whiteboard: "whiteboard",
  Database: "database",
  Embed: "embed",
} as const;
export type AncestorType = (typeof AncestorType)[keyof typeof AncestorType];

/**
 *
 * @export
 * @interface AttachmentBulk
 */
export interface AttachmentBulk {
  /**
   * ID of the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof AttachmentBulk
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  title?: string;
  /**
   * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof AttachmentBulk
   */
  createdAt?: string;
  /**
   * ID of the containing page.
   *
   * Note: This is only returned if the attachment has a container that is a page.
   * @type {string}
   * @memberof AttachmentBulk
   */
  pageId?: string;
  /**
   * ID of the containing blog post.
   *
   * Note: This is only returned if the attachment has a container that is a blog post.
   * @type {string}
   * @memberof AttachmentBulk
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   *
   * Note: This is only returned if the attachment has a container that is custom content.
   * @type {string}
   * @memberof AttachmentBulk
   */
  customContentId?: string;
  /**
   * Media Type for the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  mediaType?: string;
  /**
   * Media Type description for the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  mediaTypeDescription?: string;
  /**
   * Comment for the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  comment?: string;
  /**
   * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
   * @type {string}
   * @memberof AttachmentBulk
   */
  fileId?: string;
  /**
   * File size of the attachment.
   * @type {number}
   * @memberof AttachmentBulk
   */
  fileSize?: number;
  /**
   * WebUI link of the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  webuiLink?: string;
  /**
   * Download link of the attachment.
   * @type {string}
   * @memberof AttachmentBulk
   */
  downloadLink?: string;
  /**
   *
   * @type {Version}
   * @memberof AttachmentBulk
   */
  version?: Version;
  /**
   *
   * @type {AttachmentLinks}
   * @memberof AttachmentBulk
   */
  links?: AttachmentLinks;
}

/**
 *
 * @export
 * @interface AttachmentCommentModel
 */
export interface AttachmentCommentModel {
  /**
   * ID of the comment.
   * @type {string}
   * @memberof AttachmentCommentModel
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof AttachmentCommentModel
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof AttachmentCommentModel
   */
  title?: string;
  /**
   * ID of the attachment containing the comment.
   * @type {string}
   * @memberof AttachmentCommentModel
   */
  attachmentId?: string;
  /**
   *
   * @type {Version}
   * @memberof AttachmentCommentModel
   */
  version?: Version;
  /**
   *
   * @type {BodySingle}
   * @memberof AttachmentCommentModel
   */
  body?: BodySingle;
  /**
   *
   * @type {CommentLinks}
   * @memberof AttachmentCommentModel
   */
  links?: CommentLinks;
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
 *
 * @export
 * @interface AttachmentSingle
 */
export interface AttachmentSingle {
  /**
   * ID of the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof AttachmentSingle
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  title?: string;
  /**
   * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof AttachmentSingle
   */
  createdAt?: string;
  /**
   * ID of the containing page.
   *
   * Note: This is only returned if the attachment has a container that is a page.
   * @type {string}
   * @memberof AttachmentSingle
   */
  pageId?: string;
  /**
   * ID of the containing blog post.
   *
   * Note: This is only returned if the attachment has a container that is a blog post.
   * @type {string}
   * @memberof AttachmentSingle
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   *
   * Note: This is only returned if the attachment has a container that is custom content.
   * @type {string}
   * @memberof AttachmentSingle
   */
  customContentId?: string;
  /**
   * Media Type for the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  mediaType?: string;
  /**
   * Media Type description for the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  mediaTypeDescription?: string;
  /**
   * Comment for the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  comment?: string;
  /**
   * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
   * @type {string}
   * @memberof AttachmentSingle
   */
  fileId?: string;
  /**
   * File size of the attachment.
   * @type {number}
   * @memberof AttachmentSingle
   */
  fileSize?: number;
  /**
   * WebUI link of the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  webuiLink?: string;
  /**
   * Download link of the attachment.
   * @type {string}
   * @memberof AttachmentSingle
   */
  downloadLink?: string;
  /**
   *
   * @type {Version}
   * @memberof AttachmentSingle
   */
  version?: Version;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof AttachmentSingle
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof AttachmentSingle
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof AttachmentSingle
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof AttachmentSingle
   */
  versions?: AttachmentSingleVersions;
  /**
   *
   * @type {AttachmentLinks}
   * @memberof AttachmentSingle
   */
  links?: AttachmentLinks;
}

/**
 *
 * @export
 * @interface AttachmentSingleLabels
 */
export interface AttachmentSingleLabels {
  /**
   *
   * @type {Array<Label>}
   * @memberof AttachmentSingleLabels
   */
  results?: Array<Label>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof AttachmentSingleLabels
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof AttachmentSingleLabels
   */
  links?: OptionalFieldLinks;
}
/**
 *
 * @export
 * @interface AttachmentSingleOperations
 */
export interface AttachmentSingleOperations {
  /**
   *
   * @type {Array<Operation>}
   * @memberof AttachmentSingleOperations
   */
  results?: Array<Operation>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof AttachmentSingleOperations
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof AttachmentSingleOperations
   */
  links?: OptionalFieldLinks;
}
/**
 *
 * @export
 * @interface AttachmentSingleProperties
 */
export interface AttachmentSingleProperties {
  /**
   *
   * @type {Array<ContentProperty>}
   * @memberof AttachmentSingleProperties
   */
  results?: Array<ContentProperty>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof AttachmentSingleProperties
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof AttachmentSingleProperties
   */
  links?: OptionalFieldLinks;
}
/**
 *
 * @export
 * @interface AttachmentSingleVersions
 */
export interface AttachmentSingleVersions {
  /**
   *
   * @type {Array<Version>}
   * @memberof AttachmentSingleVersions
   */
  results?: Array<Version>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof AttachmentSingleVersions
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof AttachmentSingleVersions
   */
  links?: OptionalFieldLinks;
}

/**
 * The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const AttachmentSortOrder = {
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type AttachmentSortOrder =
  (typeof AttachmentSortOrder)[keyof typeof AttachmentSortOrder];

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
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  Wiki: "wiki",
} as const;
export type BlogPostBodyWriteRepresentationEnum =
  (typeof BlogPostBodyWriteRepresentationEnum)[keyof typeof BlogPostBodyWriteRepresentationEnum];

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
   * @type {BlogPostContentStatus}
   * @memberof BlogPostBulk
   */
  status?: BlogPostContentStatus;
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
 * The status of the content.
 * @export
 */
export const BlogPostContentStatus = {
  Current: "current",
  Draft: "draft",
  Historical: "historical",
  Trashed: "trashed",
  Deleted: "deleted",
  Any: "any",
} as const;
export type BlogPostContentStatus =
  (typeof BlogPostContentStatus)[keyof typeof BlogPostContentStatus];

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
   * @type {BlogPostContentStatus}
   * @memberof BlogPostSingle
   */
  status?: BlogPostContentStatus;
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
   * @type {AttachmentSingleLabels}
   * @memberof BlogPostSingle
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof BlogPostSingle
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof BlogPostSingle
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof BlogPostSingle
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof BlogPostSingle
   */
  versions?: AttachmentSingleVersions;
  /**
   * Whether the blog post has been favorited by the current user.
   * @type {boolean}
   * @memberof BlogPostSingle
   */
  isFavoritedByCurrentUser?: boolean;
  /**
   *
   * @type {AbstractPageLinks}
   * @memberof BlogPostSingle
   */
  links?: AbstractPageLinks;
}

/**
 *
 * @export
 * @interface BlogPostSingleLikes
 */
export interface BlogPostSingleLikes {
  /**
   *
   * @type {Array<Like>}
   * @memberof BlogPostSingleLikes
   */
  results?: Array<Like>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof BlogPostSingleLikes
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof BlogPostSingleLikes
   */
  links?: OptionalFieldLinks;
}

/**
 * The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const BlogPostSortOrder = {
  Id: "id",
  Id2DescDescDesc: "-id",
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type BlogPostSortOrder =
  (typeof BlogPostSortOrder)[keyof typeof BlogPostSortOrder];

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
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  Id: "id",
  Id2DescDescDesc: "-id",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type ChildCustomContentSortOrder =
  (typeof ChildCustomContentSortOrder)[keyof typeof ChildCustomContentSortOrder];

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
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  Id: "id",
  Id2DescDescDesc: "-id",
  ChildPosition: "child-position",
  ChildPosition2DescDescDesc: "-child-position",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type ChildPageSortOrder =
  (typeof ChildPageSortOrder)[keyof typeof ChildPageSortOrder];

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
 * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
 * A classification level may be associated with specific storage and handling requirements or expectations.
 * @export
 * @interface ClassificationLevel
 */
export interface ClassificationLevel {
  /**
   * The ID of the classification level.
   * @type {string}
   * @memberof ClassificationLevel
   */
  id?: string;
  /**
   *
   * @type {ClassificationLevelStatus}
   * @memberof ClassificationLevel
   */
  status?: ClassificationLevelStatus;
  /**
   * The order of the classification level object.
   * @type {number}
   * @memberof ClassificationLevel
   */
  order?: number;
  /**
   * The name of the classification level object.
   * @type {string}
   * @memberof ClassificationLevel
   */
  name?: string;
  /**
   * The description of the classification level object.
   * @type {string}
   * @memberof ClassificationLevel
   */
  description?: string;
  /**
   * The guideline of the classification level object.
   * @type {string}
   * @memberof ClassificationLevel
   */
  guideline?: string;
  /**
   *
   * @type {ClassificationLevelColor}
   * @memberof ClassificationLevel
   */
  color?: ClassificationLevelColor;
}

/**
 *
 * @export
 */
export const ClassificationLevelColor = {
  Red: "RED",
  RedBold: "RED_BOLD",
  Orange: "ORANGE",
  Yellow: "YELLOW",
  Green: "GREEN",
  Blue: "BLUE",
  Navy: "NAVY",
  Teal: "TEAL",
  Purple: "PURPLE",
  Grey: "GREY",
  Lime: "LIME",
} as const;
export type ClassificationLevelColor =
  (typeof ClassificationLevelColor)[keyof typeof ClassificationLevelColor];

/**
 *
 * @export
 */
export const ClassificationLevelStatus = {
  Draft: "DRAFT",
  Published: "PUBLISHED",
  Archived: "ARCHIVED",
} as const;
export type ClassificationLevelStatus =
  (typeof ClassificationLevelStatus)[keyof typeof ClassificationLevelStatus];

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
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  Wiki: "wiki",
} as const;
export type CommentBodyWriteRepresentationEnum =
  (typeof CommentBodyWriteRepresentationEnum)[keyof typeof CommentBodyWriteRepresentationEnum];

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
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type CommentSortOrder =
  (typeof CommentSortOrder)[keyof typeof CommentSortOrder];

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
  results?: { [key: string]: ContentIdToContentTypeResponseResultsValue };
}
/**
 *
 * @export
 * @interface ContentIdToContentTypeResponseResultsValue
 */
export interface ContentIdToContentTypeResponseResultsValue {}
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
  Key: "key",
  Key2DescDescDesc: "-key",
} as const;
export type ContentPropertySortOrder =
  (typeof ContentPropertySortOrder)[keyof typeof ContentPropertySortOrder];

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
  Current: "current",
  Draft: "draft",
  Archived: "archived",
  Historical: "historical",
  Trashed: "trashed",
  Deleted: "deleted",
  Any: "any",
} as const;
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];

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
export interface ConvertContentIdsToContentTypesRequestContentIdsInner {}
/**
 *
 * @export
 * @interface CreateBlogPost200Response
 */
export interface CreateBlogPost200Response {
  /**
   * ID of the blog post.
   * @type {string}
   * @memberof CreateBlogPost200Response
   */
  id?: string;
  /**
   *
   * @type {BlogPostContentStatus}
   * @memberof CreateBlogPost200Response
   */
  status?: BlogPostContentStatus;
  /**
   * Title of the blog post.
   * @type {string}
   * @memberof CreateBlogPost200Response
   */
  title?: string;
  /**
   * ID of the space the blog post is in.
   * @type {string}
   * @memberof CreateBlogPost200Response
   */
  spaceId?: string;
  /**
   * The account ID of the user who created this blog post originally.
   * @type {string}
   * @memberof CreateBlogPost200Response
   */
  authorId?: string;
  /**
   * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreateBlogPost200Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateBlogPost200Response
   */
  version?: Version;
  /**
   *
   * @type {BodySingle}
   * @memberof CreateBlogPost200Response
   */
  body?: BodySingle;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof CreateBlogPost200Response
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof CreateBlogPost200Response
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CreateBlogPost200Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof CreateBlogPost200Response
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CreateBlogPost200Response
   */
  versions?: AttachmentSingleVersions;
  /**
   * Whether the blog post has been favorited by the current user.
   * @type {boolean}
   * @memberof CreateBlogPost200Response
   */
  isFavoritedByCurrentUser?: boolean;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateBlogPost200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
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
  Current: "current",
  Draft: "draft",
} as const;
export type CreateBlogPostRequestStatusEnum =
  (typeof CreateBlogPostRequestStatusEnum)[keyof typeof CreateBlogPostRequestStatusEnum];

/**
 * @type CreateBlogPostRequestBody
 *
 * @export
 */
export type CreateBlogPostRequestBody =
  | BlogPostBodyWrite
  | BlogPostNestedBodyWrite;
/**
 *
 * @export
 * @interface CreateBulkUserLookupRequest
 */
export interface CreateBulkUserLookupRequest {
  /**
   * List of accountIds to retrieve user info for.
   * @type {Array<string>}
   * @memberof CreateBulkUserLookupRequest
   */
  accountIds: Array<string>;
}
/**
 *
 * @export
 * @interface CreateCustomContent201Response
 */
export interface CreateCustomContent201Response {
  /**
   * ID of the custom content.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  id?: string;
  /**
   * The type of custom content.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateCustomContent201Response
   */
  status?: ContentStatus;
  /**
   * Title of the custom content.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  title?: string;
  /**
   * ID of the space the custom content is in.
   *
   * Note: This is always returned, regardless of if the custom content has a container that is a space.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  spaceId?: string;
  /**
   * ID of the containing page.
   *
   * Note: This is only returned if the custom content has a container that is a page.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  pageId?: string;
  /**
   * ID of the containing blog post.
   *
   * Note: This is only returned if the custom content has a container that is a blog post.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   *
   * Note: This is only returned if the custom content has a container that is custom content.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  customContentId?: string;
  /**
   * The account ID of the user who created this custom content originally.
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  authorId?: string;
  /**
   * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreateCustomContent201Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateCustomContent201Response
   */
  version?: Version;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof CreateCustomContent201Response
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof CreateCustomContent201Response
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CreateCustomContent201Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CreateCustomContent201Response
   */
  versions?: AttachmentSingleVersions;
  /**
   *
   * @type {CustomContentBodySingle}
   * @memberof CreateCustomContent201Response
   */
  body?: CustomContentBodySingle;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateCustomContent201Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

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
   * The status of the custom content.
   * @type {string}
   * @memberof CreateCustomContentRequest
   */
  status?: CreateCustomContentRequestStatusEnum;
  /**
   * ID of the containing space.
   * @type {string}
   * @memberof CreateCustomContentRequest
   */
  spaceId?: string;
  /**
   * ID of the containing page.
   * @type {string}
   * @memberof CreateCustomContentRequest
   */
  pageId?: string;
  /**
   * ID of the containing Blog Post.
   * @type {string}
   * @memberof CreateCustomContentRequest
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   * @type {string}
   * @memberof CreateCustomContentRequest
   */
  customContentId?: string;
  /**
   * Title of the custom content.
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
  Current: "current",
} as const;
export type CreateCustomContentRequestStatusEnum =
  (typeof CreateCustomContentRequestStatusEnum)[keyof typeof CreateCustomContentRequestStatusEnum];

/**
 * @type CreateCustomContentRequestBody
 *
 * @export
 */
export type CreateCustomContentRequestBody =
  | CustomContentBodyWrite
  | CustomContentNestedBodyWrite;
/**
 *
 * @export
 * @interface CreateDatabase200Response
 */
export interface CreateDatabase200Response {
  /**
   * ID of the database.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateDatabase200Response
   */
  status?: ContentStatus;
  /**
   * Title of the database.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof CreateDatabase200Response
   */
  parentType?: ParentContentType;
  /**
   * Position of the database within the given parent page tree.
   * @type {number}
   * @memberof CreateDatabase200Response
   */
  position?: number | null;
  /**
   * The account ID of the user who created this database originally.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this database.
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  ownerId?: string;
  /**
   * Date and time when the database was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreateDatabase200Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateDatabase200Response
   */
  version?: Version;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateDatabase200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

/**
 *
 * @export
 * @interface CreateDatabaseRequest
 */
export interface CreateDatabaseRequest {
  /**
   * ID of the space.
   * @type {string}
   * @memberof CreateDatabaseRequest
   */
  spaceId: string;
  /**
   * Title of the database.
   * @type {string}
   * @memberof CreateDatabaseRequest
   */
  title?: string;
  /**
   * The parent content ID of the database.
   * @type {string}
   * @memberof CreateDatabaseRequest
   */
  parentId?: string;
}
/**
 *
 * @export
 * @interface CreateFooterComment201Response
 */
export interface CreateFooterComment201Response {
  /**
   * ID of the comment.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateFooterComment201Response
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  title?: string;
  /**
   * ID of the blog post containing the comment if the comment is on a blog post.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  blogPostId?: string;
  /**
   * ID of the page containing the comment if the comment is on a page.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  pageId?: string;
  /**
   * ID of the attachment containing the comment if the comment is on an attachment.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  attachmentId?: string;
  /**
   * ID of the custom content containing the comment if the comment is on a custom content.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  customContentId?: string;
  /**
   * ID of the parent comment if the comment is a reply.
   * @type {string}
   * @memberof CreateFooterComment201Response
   */
  parentCommentId?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateFooterComment201Response
   */
  version?: Version;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof CreateFooterComment201Response
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CreateFooterComment201Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof CreateFooterComment201Response
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CreateFooterComment201Response
   */
  versions?: AttachmentSingleVersions;
  /**
   *
   * @type {BodySingle}
   * @memberof CreateFooterComment201Response
   */
  body?: BodySingle;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateFooterComment201Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

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
   * ID of the attachment, if intending to create a comment against an attachment.
   * @type {string}
   * @memberof CreateFooterCommentModel
   */
  attachmentId?: string;
  /**
   * ID of the custom content, if intending to create a comment against a custom content.
   * @type {string}
   * @memberof CreateFooterCommentModel
   */
  customContentId?: string;
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
export type CreateFooterCommentModelBody =
  | CommentBodyWrite
  | CommentNestedBodyWrite;
/**
 *
 * @export
 * @interface CreateInlineComment201Response
 */
export interface CreateInlineComment201Response {
  /**
   * ID of the comment.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateInlineComment201Response
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  title?: string;
  /**
   * ID of the blog post containing the comment if the comment is on a blog post.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  blogPostId?: string;
  /**
   * ID of the page containing the comment if the comment is on a page.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  pageId?: string;
  /**
   * ID of the parent comment if the comment is a reply.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  parentCommentId?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateInlineComment201Response
   */
  version?: Version;
  /**
   *
   * @type {BodySingle}
   * @memberof CreateInlineComment201Response
   */
  body?: BodySingle;
  /**
   * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  resolutionLastModifierId?: string;
  /**
   * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
   * @type {string}
   * @memberof CreateInlineComment201Response
   */
  resolutionLastModifiedAt?: string;
  /**
   *
   * @type {InlineCommentResolutionStatus}
   * @memberof CreateInlineComment201Response
   */
  resolutionStatus?: InlineCommentResolutionStatus;
  /**
   *
   * @type {InlineCommentModelProperties}
   * @memberof CreateInlineComment201Response
   */
  properties?: InlineCommentModelProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CreateInlineComment201Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof CreateInlineComment201Response
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CreateInlineComment201Response
   */
  versions?: AttachmentSingleVersions;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateInlineComment201Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

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
 * @interface CreatePage200Response
 */
export interface CreatePage200Response {
  /**
   * ID of the page.
   * @type {string}
   * @memberof CreatePage200Response
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreatePage200Response
   */
  status?: ContentStatus;
  /**
   * Title of the page.
   * @type {string}
   * @memberof CreatePage200Response
   */
  title?: string;
  /**
   * ID of the space the page is in.
   * @type {string}
   * @memberof CreatePage200Response
   */
  spaceId?: string;
  /**
   * ID of the parent page, or null if there is no parent page.
   * @type {string}
   * @memberof CreatePage200Response
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof CreatePage200Response
   */
  parentType?: ParentContentType;
  /**
   * Position of child page within the given parent page tree.
   * @type {number}
   * @memberof CreatePage200Response
   */
  position?: number | null;
  /**
   * The account ID of the user who created this page originally.
   * @type {string}
   * @memberof CreatePage200Response
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this page.
   * @type {string}
   * @memberof CreatePage200Response
   */
  ownerId?: string | null;
  /**
   * The account ID of the user who owned this page previously, or null if there is no previous owner.
   * @type {string}
   * @memberof CreatePage200Response
   */
  lastOwnerId?: string | null;
  /**
   * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreatePage200Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreatePage200Response
   */
  version?: Version;
  /**
   *
   * @type {BodySingle}
   * @memberof CreatePage200Response
   */
  body?: BodySingle;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof CreatePage200Response
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof CreatePage200Response
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CreatePage200Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof CreatePage200Response
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CreatePage200Response
   */
  versions?: AttachmentSingleVersions;
  /**
   * Whether the page has been favorited by the current user.
   * @type {boolean}
   * @memberof CreatePage200Response
   */
  isFavoritedByCurrentUser?: boolean;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreatePage200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

/**
 *
 * @export
 * @interface CreatePageRequest
 */
export interface CreatePageRequest {
  /**
   * ID of the space.
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
   * The parent content ID of the page. If the `root-level` query parameter is set to false and a value is
   * not supplied for this parameter, then the space homepage's ID will be used. If the `root-level` query
   * parameter is set to true, then a value may not be supplied for this parameter.
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
  Current: "current",
  Draft: "draft",
} as const;
export type CreatePageRequestStatusEnum =
  (typeof CreatePageRequestStatusEnum)[keyof typeof CreatePageRequestStatusEnum];

/**
 * @type CreatePageRequestBody
 *
 * @export
 */
export type CreatePageRequestBody = PageBodyWrite | PageNestedBodyWrite;
/**
 *
 * @export
 * @interface CreateSmartLink200Response
 */
export interface CreateSmartLink200Response {
  /**
   * ID of the Smart Link in the content tree.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateSmartLink200Response
   */
  status?: ContentStatus;
  /**
   * Title of the Smart Link in the content tree.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof CreateSmartLink200Response
   */
  parentType?: ParentContentType;
  /**
   * Position of the Smart Link within the given parent page tree.
   * @type {number}
   * @memberof CreateSmartLink200Response
   */
  position?: number | null;
  /**
   * The account ID of the user who created this Smart Link in the content tree originally.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this Smart Link in the content tree.
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  ownerId?: string;
  /**
   * Date and time when the Smart Link in the content tree was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreateSmartLink200Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateSmartLink200Response
   */
  version?: Version;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateSmartLink200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

/**
 *
 * @export
 * @interface CreateSmartLinkRequest
 */
export interface CreateSmartLinkRequest {
  /**
   * ID of the space.
   * @type {string}
   * @memberof CreateSmartLinkRequest
   */
  spaceId: string;
  /**
   * Title of the Smart Link in the content tree.
   * @type {string}
   * @memberof CreateSmartLinkRequest
   */
  title?: string;
  /**
   * The parent content ID of the Smart Link in the content tree.
   * @type {string}
   * @memberof CreateSmartLinkRequest
   */
  parentId?: string;
  /**
   * The URL that the Smart Link in the content tree should be populated with.
   * @type {string}
   * @memberof CreateSmartLinkRequest
   */
  embedUrl?: string;
}
/**
 *
 * @export
 * @interface CreateWhiteboard200Response
 */
export interface CreateWhiteboard200Response {
  /**
   * ID of the whiteboard.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CreateWhiteboard200Response
   */
  status?: ContentStatus;
  /**
   * Title of the whiteboard.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof CreateWhiteboard200Response
   */
  parentType?: ParentContentType;
  /**
   * Position of the whiteboard within the given parent page tree.
   * @type {number}
   * @memberof CreateWhiteboard200Response
   */
  position?: number | null;
  /**
   * The account ID of the user who created this whiteboard originally.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this whiteboard.
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  ownerId?: string;
  /**
   * Date and time when the whiteboard was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof CreateWhiteboard200Response
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof CreateWhiteboard200Response
   */
  version?: Version;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof CreateWhiteboard200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

/**
 *
 * @export
 * @interface CreateWhiteboardRequest
 */
export interface CreateWhiteboardRequest {
  /**
   * ID of the space.
   * @type {string}
   * @memberof CreateWhiteboardRequest
   */
  spaceId: string;
  /**
   * Title of the whiteboard.
   * @type {string}
   * @memberof CreateWhiteboardRequest
   */
  title?: string;
  /**
   * The parent content ID of the whiteboard.
   * @type {string}
   * @memberof CreateWhiteboardRequest
   */
  parentId?: string;
}
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
  Raw: "raw",
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
} as const;
export type CustomContentBodyRepresentation =
  (typeof CustomContentBodyRepresentation)[keyof typeof CustomContentBodyRepresentation];

/**
 * The formats a custom content body can be represented as. A subset of BodyRepresentation.
 * @export
 */
export const CustomContentBodyRepresentationSingle = {
  Raw: "raw",
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  View: "view",
  ExportView: "export_view",
  AnonymousExportView: "anonymous_export_view",
} as const;
export type CustomContentBodyRepresentationSingle =
  (typeof CustomContentBodyRepresentationSingle)[keyof typeof CustomContentBodyRepresentationSingle];

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
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  Raw: "raw",
} as const;
export type CustomContentBodyWriteRepresentationEnum =
  (typeof CustomContentBodyWriteRepresentationEnum)[keyof typeof CustomContentBodyWriteRepresentationEnum];

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
 * @interface CustomContentCommentModel
 */
export interface CustomContentCommentModel {
  /**
   * ID of the comment.
   * @type {string}
   * @memberof CustomContentCommentModel
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof CustomContentCommentModel
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof CustomContentCommentModel
   */
  title?: string;
  /**
   * ID of the custom content containing the comment.
   * @type {string}
   * @memberof CustomContentCommentModel
   */
  customContentId?: string;
  /**
   *
   * @type {Version}
   * @memberof CustomContentCommentModel
   */
  version?: Version;
  /**
   *
   * @type {BodySingle}
   * @memberof CustomContentCommentModel
   */
  body?: BodySingle;
  /**
   *
   * @type {CommentLinks}
   * @memberof CustomContentCommentModel
   */
  links?: CommentLinks;
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
   * @type {AttachmentSingleLabels}
   * @memberof CustomContentSingle
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof CustomContentSingle
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof CustomContentSingle
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof CustomContentSingle
   */
  versions?: AttachmentSingleVersions;
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
  Id: "id",
  Id2DescDescDesc: "-id",
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
  Title: "title",
  Title2DescDescDesc: "-title",
} as const;
export type CustomContentSortOrder =
  (typeof CustomContentSortOrder)[keyof typeof CustomContentSortOrder];

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
 * Details about data policies.
 * @export
 * @interface DataPolicyMetadata
 */
export interface DataPolicyMetadata {
  /**
   * Whether the workspace contains any content blocked for (inaccessible to) the requesting client application.
   * @type {boolean}
   * @memberof DataPolicyMetadata
   */
  readonly anyContentBlocked?: boolean;
}
/**
 *
 * @export
 * @interface DataPolicySpace
 */
export interface DataPolicySpace {
  /**
   * ID of the space.
   * @type {string}
   * @memberof DataPolicySpace
   */
  id?: string;
  /**
   * Key of the space.
   * @type {string}
   * @memberof DataPolicySpace
   */
  key?: string;
  /**
   * Name of the space.
   * @type {string}
   * @memberof DataPolicySpace
   */
  name?: string;
  /**
   *
   * @type {SpaceDescription}
   * @memberof DataPolicySpace
   */
  description?: SpaceDescription;
  /**
   *
   * @type {DataPolicySpaceDataPolicy}
   * @memberof DataPolicySpace
   */
  dataPolicy?: DataPolicySpaceDataPolicy;
  /**
   *
   * @type {SpaceIcon}
   * @memberof DataPolicySpace
   */
  icon?: SpaceIcon;
  /**
   *
   * @type {SpaceLinks}
   * @memberof DataPolicySpace
   */
  links?: SpaceLinks;
}
/**
 *
 * @export
 * @interface DataPolicySpaceDataPolicy
 */
export interface DataPolicySpaceDataPolicy {
  /**
   * Whether the space contains any content blocked for (inaccessible to) the requesting client application.
   * @type {boolean}
   * @memberof DataPolicySpaceDataPolicy
   */
  readonly anyContentBlocked?: boolean;
}
/**
 *
 * @export
 * @interface DatabaseLinks
 */
export interface DatabaseLinks {
  /**
   * Web UI link of the content.
   * @type {string}
   * @memberof DatabaseLinks
   */
  webui?: string;
}
/**
 *
 * @export
 * @interface DatabaseSingle
 */
export interface DatabaseSingle {
  /**
   * ID of the database.
   * @type {string}
   * @memberof DatabaseSingle
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof DatabaseSingle
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof DatabaseSingle
   */
  status?: ContentStatus;
  /**
   * Title of the database.
   * @type {string}
   * @memberof DatabaseSingle
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof DatabaseSingle
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof DatabaseSingle
   */
  parentType?: ParentContentType;
  /**
   * Position of the database within the given parent page tree.
   * @type {number}
   * @memberof DatabaseSingle
   */
  position?: number | null;
  /**
   * The account ID of the user who created this database originally.
   * @type {string}
   * @memberof DatabaseSingle
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this database.
   * @type {string}
   * @memberof DatabaseSingle
   */
  ownerId?: string;
  /**
   * Date and time when the database was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof DatabaseSingle
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof DatabaseSingle
   */
  version?: Version;
  /**
   *
   * @type {DatabaseLinks}
   * @memberof DatabaseSingle
   */
  links?: DatabaseLinks;
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
   * ID of the attachment containing the comment if the comment is on an attachment.
   * @type {string}
   * @memberof FooterCommentModel
   */
  attachmentId?: string;
  /**
   * ID of the custom content containing the comment if the comment is on a custom content.
   * @type {string}
   * @memberof FooterCommentModel
   */
  customContentId?: string;
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
   * @type {AttachmentSingleProperties}
   * @memberof FooterCommentModel
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof FooterCommentModel
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof FooterCommentModel
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof FooterCommentModel
   */
  versions?: AttachmentSingleVersions;
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
 * @interface GetAttachmentById200Response
 */
export interface GetAttachmentById200Response {
  /**
   * ID of the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  id?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof GetAttachmentById200Response
   */
  status?: ContentStatus;
  /**
   * Title of the comment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  title?: string;
  /**
   * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  createdAt?: string;
  /**
   * ID of the containing page.
   *
   * Note: This is only returned if the attachment has a container that is a page.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  pageId?: string;
  /**
   * ID of the containing blog post.
   *
   * Note: This is only returned if the attachment has a container that is a blog post.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   *
   * Note: This is only returned if the attachment has a container that is custom content.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  customContentId?: string;
  /**
   * Media Type for the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  mediaType?: string;
  /**
   * Media Type description for the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  mediaTypeDescription?: string;
  /**
   * Comment for the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  comment?: string;
  /**
   * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  fileId?: string;
  /**
   * File size of the attachment.
   * @type {number}
   * @memberof GetAttachmentById200Response
   */
  fileSize?: number;
  /**
   * WebUI link of the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  webuiLink?: string;
  /**
   * Download link of the attachment.
   * @type {string}
   * @memberof GetAttachmentById200Response
   */
  downloadLink?: string;
  /**
   *
   * @type {Version}
   * @memberof GetAttachmentById200Response
   */
  version?: Version;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof GetAttachmentById200Response
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof GetAttachmentById200Response
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof GetAttachmentById200Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof GetAttachmentById200Response
   */
  versions?: AttachmentSingleVersions;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof GetAttachmentById200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
}

/**
 *
 * @export
 * @interface GetAttachmentById200ResponseAllOfLinks
 */
export interface GetAttachmentById200ResponseAllOfLinks {
  /**
   * Base url of the Confluence site.
   * @type {string}
   * @memberof GetAttachmentById200ResponseAllOfLinks
   */
  base?: string;
}
/**
 *
 * @export
 * @interface GetSpaceById200Response
 */
export interface GetSpaceById200Response {
  /**
   * ID of the space.
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  id?: string;
  /**
   * Key of the space.
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  key?: string;
  /**
   * Name of the space.
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  name?: string;
  /**
   *
   * @type {SpaceType}
   * @memberof GetSpaceById200Response
   */
  type?: SpaceType;
  /**
   *
   * @type {SpaceStatus}
   * @memberof GetSpaceById200Response
   */
  status?: SpaceStatus;
  /**
   * The account ID of the user who created this space originally.
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  authorId?: string;
  /**
   * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  createdAt?: string;
  /**
   * ID of the space's homepage.
   * @type {string}
   * @memberof GetSpaceById200Response
   */
  homepageId?: string;
  /**
   *
   * @type {SpaceDescription}
   * @memberof GetSpaceById200Response
   */
  description?: SpaceDescription;
  /**
   *
   * @type {SpaceIcon}
   * @memberof GetSpaceById200Response
   */
  icon?: SpaceIcon;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof GetSpaceById200Response
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {SpaceSingleProperties}
   * @memberof GetSpaceById200Response
   */
  properties?: SpaceSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof GetSpaceById200Response
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {SpaceSinglePermissions}
   * @memberof GetSpaceById200Response
   */
  permissions?: SpaceSinglePermissions;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof GetSpaceById200Response
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
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
   * @type {boolean}
   * @memberof Icon
   */
  isDefault: boolean;
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
   * @type {InlineCommentModelProperties}
   * @memberof InlineCommentModel
   */
  properties?: InlineCommentModelProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof InlineCommentModel
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof InlineCommentModel
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof InlineCommentModel
   */
  versions?: AttachmentSingleVersions;
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
 * @interface InlineCommentModelProperties
 */
export interface InlineCommentModelProperties {
  /**
   *
   * @type {Array<ContentProperty>}
   * @memberof InlineCommentModelProperties
   */
  results?: Array<ContentProperty>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof InlineCommentModelProperties
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof InlineCommentModelProperties
   */
  links?: OptionalFieldLinks;
  /**
   * Property value used to reference the highlighted element in DOM.
   * @type {string}
   * @memberof InlineCommentModelProperties
   */
  inlineMarkerRef?: string;
  /**
   * Text that is highlighted.
   * @type {string}
   * @memberof InlineCommentModelProperties
   */
  inlineOriginalSelection?: string;
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
   * Text that is highlighted.
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
  Open: "open",
  Reopened: "reopened",
  Resolved: "resolved",
  Dangling: "dangling",
} as const;
export type InlineCommentResolutionStatus =
  (typeof InlineCommentResolutionStatus)[keyof typeof InlineCommentResolutionStatus];

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
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  Id: "id",
  Id2DescDescDesc: "-id",
  Name: "name",
  Name2DescDescDesc: "-name",
} as const;
export type LabelSortOrder =
  (typeof LabelSortOrder)[keyof typeof LabelSortOrder];

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
 * @interface MultiEntityLinks
 */
export interface MultiEntityLinks {
  /**
   * Used for pagination. Contains the relative URL for the next set of results, using a cursor query parameter.
   * This property will not be present if there is no additional data available.
   * @type {string}
   * @memberof MultiEntityLinks
   */
  next?: string;
  /**
   * Base url of the Confluence site.
   * @type {string}
   * @memberof MultiEntityLinks
   */
  base?: string;
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
 * @interface MultiEntityResultAncestor1
 */
export interface MultiEntityResultAncestor1 {
  /**
   *
   * @type {Array<Ancestor>}
   * @memberof MultiEntityResultAncestor1
   */
  results?: Array<Ancestor>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultAncestor1
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultAttachment
 */
export interface MultiEntityResultAttachment {
  /**
   *
   * @type {Array<AttachmentBulk>}
   * @memberof MultiEntityResultAttachment
   */
  results?: Array<AttachmentBulk>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultAttachment
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultAttachmentCommentModel
 */
export interface MultiEntityResultAttachmentCommentModel {
  /**
   *
   * @type {Array<AttachmentCommentModel>}
   * @memberof MultiEntityResultAttachmentCommentModel
   */
  results?: Array<AttachmentCommentModel>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultAttachmentCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultBlogPost
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultBlogPostCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultBlogPostInlineCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultChildCustomContent
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultChildPage
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultChildrenCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultContentProperty
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultCustomContent
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultCustomContentCommentModel
 */
export interface MultiEntityResultCustomContentCommentModel {
  /**
   *
   * @type {Array<CustomContentCommentModel>}
   * @memberof MultiEntityResultCustomContentCommentModel
   */
  results?: Array<CustomContentCommentModel>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultCustomContentCommentModel
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultDataPolicySpace
 */
export interface MultiEntityResultDataPolicySpace {
  /**
   *
   * @type {Array<DataPolicySpace>}
   * @memberof MultiEntityResultDataPolicySpace
   */
  results?: Array<DataPolicySpace>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultDataPolicySpace
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultFooterCommentModel
 */
export interface MultiEntityResultFooterCommentModel {
  /**
   *
   * @type {Array<FooterCommentModel>}
   * @memberof MultiEntityResultFooterCommentModel
   */
  results?: Array<FooterCommentModel>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultFooterCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultInlineCommentChildrenModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultInlineCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultLabel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultPage
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultPageCommentModel
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultPageInlineCommentModel
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultSpace
 */
export interface MultiEntityResultSpace {
  /**
   *
   * @type {Array<SpaceBulk>}
   * @memberof MultiEntityResultSpace
   */
  results?: Array<SpaceBulk>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultSpace
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultSpacePermission
   */
  links?: MultiEntityLinks;
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
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultSpaceProperty
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultString
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultTask
   */
  links?: MultiEntityLinks;
}
/**
 *
 * @export
 * @interface MultiEntityResultUser
 */
export interface MultiEntityResultUser {
  /**
   *
   * @type {Array<User>}
   * @memberof MultiEntityResultUser
   */
  results?: Array<User>;
  /**
   *
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultUser
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultVersion
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultVersion1
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultVersion2
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultVersion3
   */
  links?: MultiEntityLinks;
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
   * @type {MultiEntityLinks}
   * @memberof MultiEntityResultVersion4
   */
  links?: MultiEntityLinks;
}

/**
 * The status of the content.
 * @export
 */
export const OnlyArchivedAndCurrentContentStatus = {
  Current: "current",
  Archived: "archived",
} as const;
export type OnlyArchivedAndCurrentContentStatus =
  (typeof OnlyArchivedAndCurrentContentStatus)[keyof typeof OnlyArchivedAndCurrentContentStatus];

/**
 *
 * @export
 * @interface Operation
 */
export interface Operation {
  /**
   * The type of operation.
   * @type {string}
   * @memberof Operation
   */
  operation?: string;
  /**
   * The type of entity the operation type targets.
   * @type {string}
   * @memberof Operation
   */
  targetType?: string;
}
/**
 *
 * @export
 * @interface OptionalFieldLinks
 */
export interface OptionalFieldLinks {
  /**
   * A relative URL that can be used to fetch results beyond what this include parameter retrieves.
   * @type {string}
   * @memberof OptionalFieldLinks
   */
  self?: string;
}
/**
 *
 * @export
 * @interface OptionalFieldMeta
 */
export interface OptionalFieldMeta {
  /**
   * Indicates if there are more available results that can be fetched.
   * @type {boolean}
   * @memberof OptionalFieldMeta
   */
  hasMore?: boolean;
  /**
   * A token that can be used in the query parameter of the endpoint returned in the `_links` property to retrieve the next set of results.
   * @type {string}
   * @memberof OptionalFieldMeta
   */
  cursor?: string;
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
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  Wiki: "wiki",
} as const;
export type PageBodyWriteRepresentationEnum =
  (typeof PageBodyWriteRepresentationEnum)[keyof typeof PageBodyWriteRepresentationEnum];

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
   * @type {ParentContentType}
   * @memberof PageBulk
   */
  parentType?: ParentContentType;
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
   * The account ID of the user who owns this page.
   * @type {string}
   * @memberof PageBulk
   */
  ownerId?: string | null;
  /**
   * The account ID of the user who owned this page previously, or null if there is no previous owner.
   * @type {string}
   * @memberof PageBulk
   */
  lastOwnerId?: string | null;
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
   * @type {ParentContentType}
   * @memberof PageSingle
   */
  parentType?: ParentContentType;
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
   * The account ID of the user who owns this page.
   * @type {string}
   * @memberof PageSingle
   */
  ownerId?: string | null;
  /**
   * The account ID of the user who owned this page previously, or null if there is no previous owner.
   * @type {string}
   * @memberof PageSingle
   */
  lastOwnerId?: string | null;
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
   * @type {AttachmentSingleLabels}
   * @memberof PageSingle
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {AttachmentSingleProperties}
   * @memberof PageSingle
   */
  properties?: AttachmentSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof PageSingle
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {BlogPostSingleLikes}
   * @memberof PageSingle
   */
  likes?: BlogPostSingleLikes;
  /**
   *
   * @type {AttachmentSingleVersions}
   * @memberof PageSingle
   */
  versions?: AttachmentSingleVersions;
  /**
   * Whether the page has been favorited by the current user.
   * @type {boolean}
   * @memberof PageSingle
   */
  isFavoritedByCurrentUser?: boolean;
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
  Id: "id",
  Id2DescDescDesc: "-id",
  CreatedDate: "created-date",
  CreatedDate2DescDescDesc: "-created-date",
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
  Title: "title",
  Title2DescDescDesc: "-title",
} as const;
export type PageSortOrder = (typeof PageSortOrder)[keyof typeof PageSortOrder];

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
 * Content type of the parent, or null if there is no parent.
 * @export
 */
export const ParentContentType = {
  Page: "page",
  Whiteboard: "whiteboard",
  Database: "database",
  Embed: "embed",
} as const;
export type ParentContentType =
  (typeof ParentContentType)[keyof typeof ParentContentType];

/**
 * The list of operations permitted on entity.
 * @export
 * @interface PermittedOperationsResponse
 */
export interface PermittedOperationsResponse {
  /**
   *
   * @type {Array<Operation>}
   * @memberof PermittedOperationsResponse
   */
  operations?: Array<Operation>;
}
/**
 *
 * @export
 * @interface PostPageClassificationLevelRequest
 */
export interface PostPageClassificationLevelRequest {
  /**
   * Status of the content.
   * @type {string}
   * @memberof PostPageClassificationLevelRequest
   */
  status: PostPageClassificationLevelRequestStatusEnum;
}

/**
 * @export
 */
export const PostPageClassificationLevelRequestStatusEnum = {
  Current: "current",
  Draft: "draft",
} as const;
export type PostPageClassificationLevelRequestStatusEnum =
  (typeof PostPageClassificationLevelRequestStatusEnum)[keyof typeof PostPageClassificationLevelRequestStatusEnum];

/**
 *
 * @export
 * @interface PostWhiteboardClassificationLevelRequest
 */
export interface PostWhiteboardClassificationLevelRequest {
  /**
   * Status of the content.
   * @type {string}
   * @memberof PostWhiteboardClassificationLevelRequest
   */
  status: PostWhiteboardClassificationLevelRequestStatusEnum;
}

/**
 * @export
 */
export const PostWhiteboardClassificationLevelRequestStatusEnum = {
  Current: "current",
} as const;
export type PostWhiteboardClassificationLevelRequestStatusEnum =
  (typeof PostWhiteboardClassificationLevelRequestStatusEnum)[keyof typeof PostWhiteboardClassificationLevelRequestStatusEnum];

/**
 * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
 * @export
 */
export const PrimaryBodyRepresentation = {
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
} as const;
export type PrimaryBodyRepresentation =
  (typeof PrimaryBodyRepresentation)[keyof typeof PrimaryBodyRepresentation];

/**
 * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
 * @export
 */
export const PrimaryBodyRepresentationSingle = {
  Storage: "storage",
  AtlasDocFormat: "atlas_doc_format",
  View: "view",
  ExportView: "export_view",
  AnonymousExportView: "anonymous_export_view",
  StyledView: "styled_view",
  Editor: "editor",
} as const;
export type PrimaryBodyRepresentationSingle =
  (typeof PrimaryBodyRepresentationSingle)[keyof typeof PrimaryBodyRepresentationSingle];

/**
 *
 * @export
 * @interface PutSpaceDefaultClassificationLevelRequest
 */
export interface PutSpaceDefaultClassificationLevelRequest {
  /**
   * The ID of the classification level.
   * @type {string}
   * @memberof PutSpaceDefaultClassificationLevelRequest
   */
  id: string;
  /**
   * Status of the content.
   * @type {string}
   * @memberof PutSpaceDefaultClassificationLevelRequest
   */
  status: PutSpaceDefaultClassificationLevelRequestStatusEnum;
}

/**
 * @export
 */
export const PutSpaceDefaultClassificationLevelRequestStatusEnum = {
  Current: "current",
  Draft: "draft",
} as const;
export type PutSpaceDefaultClassificationLevelRequestStatusEnum =
  (typeof PutSpaceDefaultClassificationLevelRequestStatusEnum)[keyof typeof PutSpaceDefaultClassificationLevelRequestStatusEnum];

/**
 *
 * @export
 * @interface PutWhiteboardClassificationLevelRequest
 */
export interface PutWhiteboardClassificationLevelRequest {
  /**
   * The ID of the classification level.
   * @type {string}
   * @memberof PutWhiteboardClassificationLevelRequest
   */
  id: string;
  /**
   * Status of the content.
   * @type {string}
   * @memberof PutWhiteboardClassificationLevelRequest
   */
  status: PutWhiteboardClassificationLevelRequestStatusEnum;
}

/**
 * @export
 */
export const PutWhiteboardClassificationLevelRequestStatusEnum = {
  Current: "current",
} as const;
export type PutWhiteboardClassificationLevelRequestStatusEnum =
  (typeof PutWhiteboardClassificationLevelRequestStatusEnum)[keyof typeof PutWhiteboardClassificationLevelRequestStatusEnum];

/**
 *
 * @export
 * @interface SmartLinkLinks
 */
export interface SmartLinkLinks {
  /**
   * Web UI link of the content.
   * @type {string}
   * @memberof SmartLinkLinks
   */
  webui?: string;
}
/**
 *
 * @export
 * @interface SmartLinkSingle
 */
export interface SmartLinkSingle {
  /**
   * ID of the Smart Link in the content tree.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof SmartLinkSingle
   */
  status?: ContentStatus;
  /**
   * Title of the Smart Link in the content tree.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof SmartLinkSingle
   */
  parentType?: ParentContentType;
  /**
   * Position of the Smart Link within the given parent page tree.
   * @type {number}
   * @memberof SmartLinkSingle
   */
  position?: number | null;
  /**
   * The account ID of the user who created this Smart Link in the content tree originally.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this Smart Link in the content tree.
   * @type {string}
   * @memberof SmartLinkSingle
   */
  ownerId?: string;
  /**
   * Date and time when the Smart Link in the content tree was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof SmartLinkSingle
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof SmartLinkSingle
   */
  version?: Version;
  /**
   *
   * @type {SmartLinkLinks}
   * @memberof SmartLinkSingle
   */
  links?: SmartLinkLinks;
}

/**
 *
 * @export
 * @interface SpaceBulk
 */
export interface SpaceBulk {
  /**
   * ID of the space.
   * @type {string}
   * @memberof SpaceBulk
   */
  id?: string;
  /**
   * Key of the space.
   * @type {string}
   * @memberof SpaceBulk
   */
  key?: string;
  /**
   * Name of the space.
   * @type {string}
   * @memberof SpaceBulk
   */
  name?: string;
  /**
   *
   * @type {SpaceType}
   * @memberof SpaceBulk
   */
  type?: SpaceType;
  /**
   *
   * @type {SpaceStatus}
   * @memberof SpaceBulk
   */
  status?: SpaceStatus;
  /**
   * The account ID of the user who created this space originally.
   * @type {string}
   * @memberof SpaceBulk
   */
  authorId?: string;
  /**
   * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof SpaceBulk
   */
  createdAt?: string;
  /**
   * ID of the space's homepage.
   * @type {string}
   * @memberof SpaceBulk
   */
  homepageId?: string;
  /**
   *
   * @type {SpaceDescription}
   * @memberof SpaceBulk
   */
  description?: SpaceDescription;
  /**
   *
   * @type {SpaceIcon}
   * @memberof SpaceBulk
   */
  icon?: SpaceIcon;
  /**
   *
   * @type {SpaceLinks}
   * @memberof SpaceBulk
   */
  links?: SpaceLinks;
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
  Plain: "plain",
  View: "view",
} as const;
export type SpaceDescriptionBodyRepresentation =
  (typeof SpaceDescriptionBodyRepresentation)[keyof typeof SpaceDescriptionBodyRepresentation];

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
  /**
   * The path (relative to base URL) that can be used to retrieve a link to download the space icon. 3LO apps should use this link instead of the value provided
   * in the `path` property to retrieve the icon.
   *
   * Currently this field is only returned for `global` spaces and not `personal` spaces.
   *
   * @type {string}
   * @memberof SpaceIcon
   */
  apiDownloadLink?: string;
}
/**
 *
 * @export
 * @interface SpaceLinks
 */
export interface SpaceLinks {
  /**
   * Web UI link of the space.
   * @type {string}
   * @memberof SpaceLinks
   */
  webui?: string;
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
  Use: "use",
  Create: "create",
  Read: "read",
  Update: "update",
  Delete: "delete",
  Copy: "copy",
  Move: "move",
  Export: "export",
  Purge: "purge",
  PurgeVersion: "purge_version",
  Administer: "administer",
  Restore: "restore",
  CreateSpace: "create_space",
  RestrictContent: "restrict_content",
  Archive: "archive",
} as const;
export type SpacePermissionOperationKeyEnum =
  (typeof SpacePermissionOperationKeyEnum)[keyof typeof SpacePermissionOperationKeyEnum];

/**
 * @export
 */
export const SpacePermissionOperationTargetTypeEnum = {
  Page: "page",
  Blogpost: "blogpost",
  Comment: "comment",
  Attachment: "attachment",
  Whiteboard: "whiteboard",
  Database: "database",
  Embed: "embed",
  Space: "space",
  Application: "application",
  UserProfile: "userProfile",
} as const;
export type SpacePermissionOperationTargetTypeEnum =
  (typeof SpacePermissionOperationTargetTypeEnum)[keyof typeof SpacePermissionOperationTargetTypeEnum];

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
  User: "user",
  Group: "group",
  Role: "role",
} as const;
export type SpacePermissionPrincipalTypeEnum =
  (typeof SpacePermissionPrincipalTypeEnum)[keyof typeof SpacePermissionPrincipalTypeEnum];

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
 *
 * @export
 * @interface SpaceSingle
 */
export interface SpaceSingle {
  /**
   * ID of the space.
   * @type {string}
   * @memberof SpaceSingle
   */
  id?: string;
  /**
   * Key of the space.
   * @type {string}
   * @memberof SpaceSingle
   */
  key?: string;
  /**
   * Name of the space.
   * @type {string}
   * @memberof SpaceSingle
   */
  name?: string;
  /**
   *
   * @type {SpaceType}
   * @memberof SpaceSingle
   */
  type?: SpaceType;
  /**
   *
   * @type {SpaceStatus}
   * @memberof SpaceSingle
   */
  status?: SpaceStatus;
  /**
   * The account ID of the user who created this space originally.
   * @type {string}
   * @memberof SpaceSingle
   */
  authorId?: string;
  /**
   * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof SpaceSingle
   */
  createdAt?: string;
  /**
   * ID of the space's homepage.
   * @type {string}
   * @memberof SpaceSingle
   */
  homepageId?: string;
  /**
   *
   * @type {SpaceDescription}
   * @memberof SpaceSingle
   */
  description?: SpaceDescription;
  /**
   *
   * @type {SpaceIcon}
   * @memberof SpaceSingle
   */
  icon?: SpaceIcon;
  /**
   *
   * @type {AttachmentSingleLabels}
   * @memberof SpaceSingle
   */
  labels?: AttachmentSingleLabels;
  /**
   *
   * @type {SpaceSingleProperties}
   * @memberof SpaceSingle
   */
  properties?: SpaceSingleProperties;
  /**
   *
   * @type {AttachmentSingleOperations}
   * @memberof SpaceSingle
   */
  operations?: AttachmentSingleOperations;
  /**
   *
   * @type {SpaceSinglePermissions}
   * @memberof SpaceSingle
   */
  permissions?: SpaceSinglePermissions;
  /**
   *
   * @type {SpaceLinks}
   * @memberof SpaceSingle
   */
  links?: SpaceLinks;
}

/**
 *
 * @export
 * @interface SpaceSinglePermissions
 */
export interface SpaceSinglePermissions {
  /**
   *
   * @type {Array<SpacePermission>}
   * @memberof SpaceSinglePermissions
   */
  results?: Array<SpacePermission>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof SpaceSinglePermissions
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof SpaceSinglePermissions
   */
  links?: OptionalFieldLinks;
}
/**
 *
 * @export
 * @interface SpaceSingleProperties
 */
export interface SpaceSingleProperties {
  /**
   *
   * @type {Array<SpaceProperty>}
   * @memberof SpaceSingleProperties
   */
  results?: Array<SpaceProperty>;
  /**
   *
   * @type {OptionalFieldMeta}
   * @memberof SpaceSingleProperties
   */
  meta?: OptionalFieldMeta;
  /**
   *
   * @type {OptionalFieldLinks}
   * @memberof SpaceSingleProperties
   */
  links?: OptionalFieldLinks;
}

/**
 * The sort fields for spaces. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
 * @export
 */
export const SpaceSortOrder = {
  Id: "id",
  Id2DescDescDesc: "-id",
  Key: "key",
  Key2DescDescDesc: "-key",
  Name: "name",
  Name2DescDescDesc: "-name",
} as const;
export type SpaceSortOrder =
  (typeof SpaceSortOrder)[keyof typeof SpaceSortOrder];

/**
 * The status of the space.
 * @export
 */
export const SpaceStatus = {
  Current: "current",
  Archived: "archived",
} as const;
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * The type of space.
 * @export
 */
export const SpaceType = {
  Global: "global",
  Collaboration: "collaboration",
  KnowledgeBase: "knowledge_base",
  Personal: "personal",
} as const;
export type SpaceType = (typeof SpaceType)[keyof typeof SpaceType];

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
   * @type {TaskBodySingle}
   * @memberof Task
   */
  body?: TaskBodySingle;
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
  Complete: "complete",
  Incomplete: "incomplete",
} as const;
export type TaskStatusEnum =
  (typeof TaskStatusEnum)[keyof typeof TaskStatusEnum];

/**
 * Contains fields for each representation type requested.
 * @export
 * @interface TaskBodySingle
 */
export interface TaskBodySingle {
  /**
   *
   * @type {BodyType}
   * @memberof TaskBodySingle
   */
  storage?: BodyType;
  /**
   *
   * @type {BodyType}
   * @memberof TaskBodySingle
   */
  atlasDocFormat?: BodyType;
}
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
   * The updated status of the blog post.
   *
   * Note, if you change the status of a blog post from 'current' to 'draft' and it has an existing draft, the existing draft will be deleted in favor of the updated draft.
   * Additionally, this endpoint can be used to restore a 'trashed' or 'deleted' blog post to 'current' status. For restoration, blog post contents will not be updated and only the blog post status will be changed.
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
  Current: "current",
  Draft: "draft",
} as const;
export type UpdateBlogPostRequestStatusEnum =
  (typeof UpdateBlogPostRequestStatusEnum)[keyof typeof UpdateBlogPostRequestStatusEnum];

/**
 *
 * @export
 * @interface UpdateBlogPostRequestVersion
 */
export interface UpdateBlogPostRequestVersion {
  /**
   * The new version number of the updated blog post.
   * Set this to the current version number plus one, unless you are updating the status to 'draft' which requires a version number of 1.
   *
   * If you don't know the current version number, use Get blog post by id.
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
   * The status of the custom content.
   * @type {string}
   * @memberof UpdateCustomContentRequest
   */
  status: UpdateCustomContentRequestStatusEnum;
  /**
   * ID of the containing space.
   * @type {string}
   * @memberof UpdateCustomContentRequest
   */
  spaceId?: string;
  /**
   * ID of the containing page.
   * @type {string}
   * @memberof UpdateCustomContentRequest
   */
  pageId?: string;
  /**
   * ID of the containing Blog Post.
   * @type {string}
   * @memberof UpdateCustomContentRequest
   */
  blogPostId?: string;
  /**
   * ID of the containing custom content.
   * @type {string}
   * @memberof UpdateCustomContentRequest
   */
  customContentId?: string;
  /**
   * Title of the custom content.
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
   * @type {UpdateCustomContentRequestVersion}
   * @memberof UpdateCustomContentRequest
   */
  version: UpdateCustomContentRequestVersion;
}

/**
 * @export
 */
export const UpdateCustomContentRequestStatusEnum = {
  Current: "current",
} as const;
export type UpdateCustomContentRequestStatusEnum =
  (typeof UpdateCustomContentRequestStatusEnum)[keyof typeof UpdateCustomContentRequestStatusEnum];

/**
 *
 * @export
 * @interface UpdateCustomContentRequestVersion
 */
export interface UpdateCustomContentRequestVersion {
  /**
   * The version number, must be incremented by one.
   * @type {number}
   * @memberof UpdateCustomContentRequestVersion
   */
  number?: number;
  /**
   * An optional message to be stored with the version.
   * @type {string}
   * @memberof UpdateCustomContentRequestVersion
   */
  message?: string;
}
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
 * @interface UpdateFooterCommentRequest
 */
export interface UpdateFooterCommentRequest {
  /**
   *
   * @type {UpdateFooterCommentModelVersion}
   * @memberof UpdateFooterCommentRequest
   */
  version?: UpdateFooterCommentModelVersion;
  /**
   *
   * @type {CreateFooterCommentModelBody}
   * @memberof UpdateFooterCommentRequest
   */
  body?: CreateFooterCommentModelBody;
  /**
   *
   * @type {GetAttachmentById200ResponseAllOfLinks}
   * @memberof UpdateFooterCommentRequest
   */
  links?: GetAttachmentById200ResponseAllOfLinks;
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
   * The updated status of the page.
   *
   * Note, if you change the status of a page from 'current' to 'draft' and it has an existing draft, the existing draft will be deleted in favor of the updated draft.
   * Additionally, this endpoint can be used to restore a 'trashed' or 'deleted' page to 'current' status. For restoration, page contents will not be updated and only the page status will be changed.
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
   * Account ID of the page owner.
   *
   * This allows page ownership to be transferred to another user.
   * @type {any}
   * @memberof UpdatePageRequest
   */
  ownerId?: any | null;
  /**
   *
   * @type {CreatePageRequestBody}
   * @memberof UpdatePageRequest
   */
  body: CreatePageRequestBody;
  /**
   *
   * @type {UpdatePageRequestVersion}
   * @memberof UpdatePageRequest
   */
  version: UpdatePageRequestVersion;
}

/**
 * @export
 */
export const UpdatePageRequestStatusEnum = {
  Current: "current",
  Draft: "draft",
} as const;
export type UpdatePageRequestStatusEnum =
  (typeof UpdatePageRequestStatusEnum)[keyof typeof UpdatePageRequestStatusEnum];

/**
 *
 * @export
 * @interface UpdatePageRequestVersion
 */
export interface UpdatePageRequestVersion {
  /**
   * The new version of the updated page.
   * Set this to the current version number plus one, unless you are updating the status to 'draft' which requires a version number of 1.
   *
   * If you don't know the current version number, use Get page by id.
   * @type {number}
   * @memberof UpdatePageRequestVersion
   */
  number?: number;
  /**
   * An optional message to be stored with the version.
   * @type {string}
   * @memberof UpdatePageRequestVersion
   */
  message?: string;
}
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
  Complete: "complete",
  Incomplete: "incomplete",
} as const;
export type UpdateTaskRequestStatusEnum =
  (typeof UpdateTaskRequestStatusEnum)[keyof typeof UpdateTaskRequestStatusEnum];

/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   * Display name of the user.
   * @type {string}
   * @memberof User
   */
  displayName?: string;
  /**
   * Time zone of the user. Depending on the user's privacy
   * setting, this may return null.
   * @type {string}
   * @memberof User
   */
  timeZone?: string;
  /**
   * Space ID of the user's personal space. Returns null, if no personal space for the user.
   * @type {string}
   * @memberof User
   */
  personalSpaceId?: string;
  /**
   * Whether the user is an external collaborator.
   * @type {boolean}
   * @memberof User
   */
  isExternalCollaborator?: boolean;
  /**
   *
   * @type {AccountStatus}
   * @memberof User
   */
  accountStatus?: AccountStatus;
  /**
   * Account ID of the user.
   * @type {string}
   * @memberof User
   */
  accountId?: string;
  /**
   * The email address of the user. Depending on the user's privacy setting, this may return an empty string.
   * @type {string}
   * @memberof User
   */
  email?: string;
  /**
   *
   * @type {AccountType}
   * @memberof User
   */
  accountType?: AccountType;
  /**
   * Public name of the user.
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
}

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
  ModifiedDate: "modified-date",
  ModifiedDate2DescDescDesc: "-modified-date",
} as const;
export type VersionSortOrder =
  (typeof VersionSortOrder)[keyof typeof VersionSortOrder];

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
/**
 *
 * @export
 * @interface WhiteboardLinks
 */
export interface WhiteboardLinks {
  /**
   * Web UI link of the content.
   * @type {string}
   * @memberof WhiteboardLinks
   */
  webui?: string;
  /**
   * Edit UI link of the content.
   * @type {string}
   * @memberof WhiteboardLinks
   */
  editui?: string;
}
/**
 *
 * @export
 * @interface WhiteboardSingle
 */
export interface WhiteboardSingle {
  /**
   * ID of the whiteboard.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  id?: string;
  /**
   * The content type of the object.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  type?: string;
  /**
   *
   * @type {ContentStatus}
   * @memberof WhiteboardSingle
   */
  status?: ContentStatus;
  /**
   * Title of the whiteboard.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  title?: string;
  /**
   * ID of the parent content, or null if there is no parent content.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  parentId?: string;
  /**
   *
   * @type {ParentContentType}
   * @memberof WhiteboardSingle
   */
  parentType?: ParentContentType;
  /**
   * Position of the whiteboard within the given parent page tree.
   * @type {number}
   * @memberof WhiteboardSingle
   */
  position?: number | null;
  /**
   * The account ID of the user who created this whiteboard originally.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  authorId?: string;
  /**
   * The account ID of the user who owns this whiteboard.
   * @type {string}
   * @memberof WhiteboardSingle
   */
  ownerId?: string;
  /**
   * Date and time when the whiteboard was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
   * @type {string}
   * @memberof WhiteboardSingle
   */
  createdAt?: string;
  /**
   *
   * @type {Version}
   * @memberof WhiteboardSingle
   */
  version?: Version;
  /**
   *
   * @type {WhiteboardLinks}
   * @memberof WhiteboardSingle
   */
  links?: WhiteboardLinks;
}
