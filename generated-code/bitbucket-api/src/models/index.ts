/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddSshKeyRequest
 */
export interface AddSshKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    algorithmType?: string;
    /**
     * 
     * @type {number}
     * @memberof AddSshKeyRequest
     */
    bitLength?: number;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    readonly createdDate?: string;
    /**
     * 
     * @type {number}
     * @memberof AddSshKeyRequest
     */
    expiryDays?: number;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    readonly fingerprint?: string;
    /**
     * 
     * @type {number}
     * @memberof AddSshKeyRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    readonly lastAuthenticated?: string;
    /**
     * 
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    text?: string;
    /**
     * Contains a warning about the key, for example that it's deprecated
     * @type {string}
     * @memberof AddSshKeyRequest
     */
    readonly warning?: string;
}
/**
 * 
 * @export
 * @interface AdminPasswordUpdate
 */
export interface AdminPasswordUpdate {
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminPasswordUpdate
     */
    passwordConfirm?: string;
}
/**
 * 
 * @export
 * @interface ApplicationUser
 */
export interface ApplicationUser {
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplicationUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationUser
     */
    type?: ApplicationUserTypeEnum;
}


/**
 * @export
 */
export const ApplicationUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type ApplicationUserTypeEnum = typeof ApplicationUserTypeEnum[keyof typeof ApplicationUserTypeEnum];

/**
 * 
 * @export
 * @interface AuthenticationEntity
 */
export interface AuthenticationEntity {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEntity
     */
    captchaChallenge?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEntity
     */
    captchaId?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEntity
     */
    password?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationEntity
     */
    rememberMe?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEntity
     */
    targetUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationEntity
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    next?: string;
}
/**
 * 
 * @export
 * @interface BasicAuthConfigEntity
 */
export interface BasicAuthConfigEntity {
    /**
     * 
     * @type {Array<string>}
     * @memberof BasicAuthConfigEntity
     */
    allowedPaths?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BasicAuthConfigEntity
     */
    allowedUsers?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BasicAuthConfigEntity
     */
    blockRequests?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BasicAuthConfigEntity
     */
    showWarningMessage?: boolean;
}
/**
 * 
 * @export
 * @interface CaptchaDataEntity
 */
export interface CaptchaDataEntity {
    /**
     * 
     * @type {string}
     * @memberof CaptchaDataEntity
     */
    captchaId?: string;
    /**
     * 
     * @type {string}
     * @memberof CaptchaDataEntity
     */
    captchaImageUrl?: string;
}
/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {CommentThreadDiffAnchor}
     * @memberof Comment
     */
    anchor?: CommentThreadDiffAnchor;
    /**
     * 
     * @type {ApplicationUser}
     * @memberof Comment
     */
    author?: ApplicationUser;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof Comment
     */
    comments?: Array<Comment>;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    createdDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id?: number;
    /**
     * 
     * @type {CommentOperations}
     * @memberof Comment
     */
    permittedOperations?: CommentOperations;
    /**
     * 
     * @type {object}
     * @memberof Comment
     */
    properties?: object;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    resolvedDate?: string;
    /**
     * 
     * @type {ApplicationUser}
     * @memberof Comment
     */
    resolver?: ApplicationUser;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    severity?: CommentSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    state?: CommentStateEnum;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    text?: string;
    /**
     * 
     * @type {CommentThread}
     * @memberof Comment
     */
    thread?: CommentThread;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    updatedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    version?: number;
}


/**
 * @export
 */
export const CommentSeverityEnum = {
    Normal: 'NORMAL',
    Blocker: 'BLOCKER'
} as const;
export type CommentSeverityEnum = typeof CommentSeverityEnum[keyof typeof CommentSeverityEnum];

/**
 * @export
 */
export const CommentStateEnum = {
    Open: 'OPEN',
    Pending: 'PENDING',
    Resolved: 'RESOLVED'
} as const;
export type CommentStateEnum = typeof CommentStateEnum[keyof typeof CommentStateEnum];

/**
 * 
 * @export
 * @interface CommentOperations
 */
export interface CommentOperations {
    /**
     * 
     * @type {boolean}
     * @memberof CommentOperations
     */
    deletable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommentOperations
     */
    editable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommentOperations
     */
    transitionable?: boolean;
}
/**
 * 
 * @export
 * @interface CommentThread
 */
export interface CommentThread {
    /**
     * 
     * @type {CommentThreadDiffAnchor}
     * @memberof CommentThread
     */
    anchor?: CommentThreadDiffAnchor;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThread
     */
    anchored?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CommentThread
     */
    commentable?: object;
    /**
     * 
     * @type {string}
     * @memberof CommentThread
     */
    createdDate?: string;
    /**
     * 
     * @type {number}
     * @memberof CommentThread
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThread
     */
    resolved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentThread
     */
    resolvedDate?: string;
    /**
     * 
     * @type {ApplicationUser}
     * @memberof CommentThread
     */
    resolver?: ApplicationUser;
    /**
     * 
     * @type {Comment}
     * @memberof CommentThread
     */
    rootComment?: Comment;
    /**
     * 
     * @type {string}
     * @memberof CommentThread
     */
    updatedDate?: string;
}
/**
 * 
 * @export
 * @interface CommentThreadDiffAnchor
 */
export interface CommentThreadDiffAnchor {
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    diffType?: CommentThreadDiffAnchorDiffTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThreadDiffAnchor
     */
    fileAnchor?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    fileType?: CommentThreadDiffAnchorFileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    fromHash?: string;
    /**
     * 
     * @type {number}
     * @memberof CommentThreadDiffAnchor
     */
    line?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThreadDiffAnchor
     */
    lineAnchor?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    lineType?: CommentThreadDiffAnchorLineTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThreadDiffAnchor
     */
    multilineAnchor?: boolean;
    /**
     * 
     * @type {LineNumberRange}
     * @memberof CommentThreadDiffAnchor
     */
    multilineDestinationRange?: LineNumberRange;
    /**
     * 
     * @type {LineNumberRange}
     * @memberof CommentThreadDiffAnchor
     */
    multilineSourceRange?: LineNumberRange;
    /**
     * 
     * @type {number}
     * @memberof CommentThreadDiffAnchor
     */
    multilineStartLine?: number;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    multilineStartLineType?: CommentThreadDiffAnchorMultilineStartLineTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CommentThreadDiffAnchor
     */
    orphaned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    srcPath?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentThreadDiffAnchor
     */
    toHash?: string;
}


/**
 * @export
 */
export const CommentThreadDiffAnchorDiffTypeEnum = {
    Commit: 'COMMIT',
    Effective: 'EFFECTIVE',
    Range: 'RANGE'
} as const;
export type CommentThreadDiffAnchorDiffTypeEnum = typeof CommentThreadDiffAnchorDiffTypeEnum[keyof typeof CommentThreadDiffAnchorDiffTypeEnum];

/**
 * @export
 */
export const CommentThreadDiffAnchorFileTypeEnum = {
    From: 'FROM',
    To: 'TO'
} as const;
export type CommentThreadDiffAnchorFileTypeEnum = typeof CommentThreadDiffAnchorFileTypeEnum[keyof typeof CommentThreadDiffAnchorFileTypeEnum];

/**
 * @export
 */
export const CommentThreadDiffAnchorLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type CommentThreadDiffAnchorLineTypeEnum = typeof CommentThreadDiffAnchorLineTypeEnum[keyof typeof CommentThreadDiffAnchorLineTypeEnum];

/**
 * @export
 */
export const CommentThreadDiffAnchorMultilineStartLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type CommentThreadDiffAnchorMultilineStartLineTypeEnum = typeof CommentThreadDiffAnchorMultilineStartLineTypeEnum[keyof typeof CommentThreadDiffAnchorMultilineStartLineTypeEnum];

/**
 * 
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * 
     * @type {string}
     * @memberof Context
     */
    commitMessage?: string;
}
/**
 * 
 * @export
 * @interface ConversationDTO
 */
export interface ConversationDTO {
    /**
     * 
     * @type {string}
     * @memberof ConversationDTO
     */
    conversationId?: string;
}
/**
 * @type Credentials
 * 
 * @export
 */
export type Credentials = RestBearerTokenCredentials | RestSshCredentials | RestUsernamePasswordCredentials;
/**
 * 
 * @export
 * @interface CredentialsCheckFailedDTO
 */
export interface CredentialsCheckFailedDTO {
    /**
     * 
     * @type {boolean}
     * @memberof CredentialsCheckFailedDTO
     */
    captchaRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CredentialsCheckFailedDTO
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ElevationMethodRestDTO
 */
export interface ElevationMethodRestDTO {
    /**
     * 
     * @type {Set<string>}
     * @memberof ElevationMethodRestDTO
     */
    elevationMethods?: Array<ElevationMethodRestDTOElevationMethodsEnum>;
}


/**
 * @export
 */
export const ElevationMethodRestDTOElevationMethodsEnum = {
    Password: 'PASSWORD',
    Totp: 'TOTP'
} as const;
export type ElevationMethodRestDTOElevationMethodsEnum = typeof ElevationMethodRestDTOElevationMethodsEnum[keyof typeof ElevationMethodRestDTOElevationMethodsEnum];

/**
 * 
 * @export
 * @interface EnrichedRepository
 */
export interface EnrichedRepository {
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    defaultBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepository
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    name?: string;
    /**
     * 
     * @type {RestChangesetRepositoryOrigin}
     * @memberof EnrichedRepository
     */
    origin?: RestChangesetRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof EnrichedRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof EnrichedRepository
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {EnrichedRepositoryProperties}
     * @memberof EnrichedRepository
     */
    properties?: EnrichedRepositoryProperties;
    /**
     * 
     * @type {boolean}
     * @memberof EnrichedRepository
     */
    readonly public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof EnrichedRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly state?: EnrichedRepositoryStateEnum;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepository
     */
    readonly statusMessage?: string;
}


/**
 * @export
 */
export const EnrichedRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type EnrichedRepositoryStateEnum = typeof EnrichedRepositoryStateEnum[keyof typeof EnrichedRepositoryStateEnum];

/**
 * 
 * @export
 * @interface EnrichedRepositoryProperties
 */
export interface EnrichedRepositoryProperties {
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    contentHash?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    defaultBranchId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedRepositoryProperties
     */
    metadataHash?: string;
}
/**
 * 
 * @export
 * @interface ErrorEntity
 */
export interface ErrorEntity {
    /**
     * 
     * @type {string}
     * @memberof ErrorEntity
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ExampleFiles
 */
export interface ExampleFiles {
    /**
     * 
     * @type {ExampleJsonLastModifiedCallback}
     * @memberof ExampleFiles
     */
    files?: ExampleJsonLastModifiedCallback;
}
/**
 * 
 * @export
 * @interface ExampleJsonLastModifiedCallback
 */
export interface ExampleJsonLastModifiedCallback {
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    latestCommit?: RestChangesetToCommit;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    pomXml?: RestChangesetToCommit;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof ExampleJsonLastModifiedCallback
     */
    readmeMd?: RestChangesetToCommit;
}
/**
 * 
 * @export
 * @interface ExamplePreviewMigration
 */
export interface ExamplePreviewMigration {
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof ExamplePreviewMigration
     */
    repositories?: Array<RestRepository>;
}
/**
 * 
 * @export
 * @interface ExamplePutMultipartFormData
 */
export interface ExamplePutMultipartFormData {
    /**
     * The hook script contents.
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    content?: string;
    /**
     * A description of the hook script (useful when querying registered hook scripts).
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    description?: string;
    /**
     * The name of the hook script (useful when querying registered hook scripts).
     * @type {string}
     * @memberof ExamplePutMultipartFormData
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface ExampleRequirements
 */
export interface ExampleRequirements {
    /**
     * 
     * @type {string}
     * @memberof ExampleRequirements
     */
    count?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExampleRequirements
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface ExampleSettings
 */
export interface ExampleSettings {
    /**
     * 
     * @type {boolean}
     * @memberof ExampleSettings
     */
    booleanValue?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    doubleValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    integerValue?: number;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettings
     */
    longValue?: number;
    /**
     * 
     * @type {string}
     * @memberof ExampleSettings
     */
    stringValue?: string;
}
/**
 * 
 * @export
 * @interface ExampleSettingsMap
 */
export interface ExampleSettingsMap {
    /**
     * 
     * @type {boolean}
     * @memberof ExampleSettingsMap
     */
    booleanKey?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ExampleSettingsMap
     */
    longKey?: number;
    /**
     * 
     * @type {string}
     * @memberof ExampleSettingsMap
     */
    stringKey?: string;
}
/**
 * 
 * @export
 * @interface ExampleSocketAddress
 */
export interface ExampleSocketAddress {
    /**
     * 
     * @type {string}
     * @memberof ExampleSocketAddress
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof ExampleSocketAddress
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface ExampleStatus
 */
export interface ExampleStatus {
    /**
     * 
     * @type {number}
     * @memberof ExampleStatus
     */
    currentNumberOfUsers?: number;
    /**
     * 
     * @type {string}
     * @memberof ExampleStatus
     */
    serverId?: string;
}
/**
 * 
 * @export
 * @interface FilePart
 */
export interface FilePart {
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    contentType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FilePart
     */
    formField?: boolean;
    /**
     * 
     * @type {object}
     * @memberof FilePart
     */
    inputStream?: object;
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof FilePart
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof FilePart
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface FindByCommit200Response
 */
export interface FindByCommit200Response {
    /**
     * 
     * @type {boolean}
     * @memberof FindByCommit200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FindByCommit200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FindByCommit200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof FindByCommit200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof FindByCommit200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMinimalRef>}
     * @memberof FindByCommit200Response
     */
    values?: Array<RestMinimalRef>;
}
/**
 * 
 * @export
 * @interface FindUsersInGroup200Response
 */
export interface FindUsersInGroup200Response {
    /**
     * 
     * @type {boolean}
     * @memberof FindUsersInGroup200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof FindUsersInGroup200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestDetailedUser>}
     * @memberof FindUsersInGroup200Response
     */
    values?: Array<RestDetailedUser>;
}
/**
 * 
 * @export
 * @interface GetActivities200Response
 */
export interface GetActivities200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetActivities200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetActivities200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPullRequestActivity>}
     * @memberof GetActivities200Response
     */
    values?: Array<RestPullRequestActivity>;
}
/**
 * 
 * @export
 * @interface GetAll200Response
 */
export interface GetAll200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAll200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAll200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestProjectSettingsRestriction>}
     * @memberof GetAll200Response
     */
    values?: Array<RestProjectSettingsRestriction>;
}
/**
 * 
 * @export
 * @interface GetAllAccessTokens200Response
 */
export interface GetAllAccessTokens200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllAccessTokens200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllAccessTokens200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllAccessTokens200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllAccessTokens200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllAccessTokens200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestAccessToken>}
     * @memberof GetAllAccessTokens200Response
     */
    values?: Array<RestAccessToken>;
}
/**
 * 
 * @export
 * @interface GetAllAccessTokens401Response
 */
export interface GetAllAccessTokens401Response {
    /**
     * 
     * @type {Array<RestErrorMessage>}
     * @memberof GetAllAccessTokens401Response
     */
    errors?: Array<RestErrorMessage>;
}
/**
 * 
 * @export
 * @interface GetAllMeshMigrationSummaries200Response
 */
export interface GetAllMeshMigrationSummaries200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMeshMigrationSummary>}
     * @memberof GetAllMeshMigrationSummaries200Response
     */
    values?: Array<RestMeshMigrationSummary>;
}
/**
 * 
 * @export
 * @interface GetAllRateLimitSettings200Response
 */
export interface GetAllRateLimitSettings200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllRateLimitSettings200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllRateLimitSettings200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllRateLimitSettings200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllRateLimitSettings200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllRateLimitSettings200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestUserRateLimitSettings>}
     * @memberof GetAllRateLimitSettings200Response
     */
    values?: Array<RestUserRateLimitSettings>;
}
/**
 * 
 * @export
 * @interface GetAllReposForProject200Response
 */
export interface GetAllReposForProject200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllReposForProject200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllReposForProject200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<EnrichedRepository>}
     * @memberof GetAllReposForProject200Response
     */
    values?: Array<EnrichedRepository>;
}
/**
 * 
 * @export
 * @interface GetBranches200Response
 */
export interface GetBranches200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetBranches200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBranches200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestBranch>}
     * @memberof GetBranches200Response
     */
    values?: Array<RestBranch>;
}
/**
 * 
 * @export
 * @interface GetBuildStatus200Response
 */
export interface GetBuildStatus200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetBuildStatus200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBuildStatus200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestBuildStatus>}
     * @memberof GetBuildStatus200Response
     */
    values?: Array<RestBuildStatus>;
}
/**
 * 
 * @export
 * @interface GetChanges1200Response
 */
export interface GetChanges1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetChanges1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetChanges1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestChange>}
     * @memberof GetChanges1200Response
     */
    values?: Array<RestChange>;
}
/**
 * 
 * @export
 * @interface GetComments200Response
 */
export interface GetComments200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetComments200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetComments200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof GetComments200Response
     */
    values?: Array<RestComment>;
}
/**
 * 
 * @export
 * @interface GetCommits200Response
 */
export interface GetCommits200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetCommits200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommits200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestCommit>}
     * @memberof GetCommits200Response
     */
    values?: Array<RestCommit>;
}
/**
 * 
 * @export
 * @interface GetCommitsByIssueKey200Response
 */
export interface GetCommitsByIssueKey200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetCommitsByIssueKey200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetCommitsByIssueKey200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommitsByIssueKey200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommitsByIssueKey200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCommitsByIssueKey200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestChangeset>}
     * @memberof GetCommitsByIssueKey200Response
     */
    values?: Array<RestChangeset>;
}
/**
 * 
 * @export
 * @interface GetConfigurations200Response
 */
export interface GetConfigurations200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetConfigurations200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfigurations200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestHookScriptConfig>}
     * @memberof GetConfigurations200Response
     */
    values?: Array<RestHookScriptConfig>;
}
/**
 * 
 * @export
 * @interface GetDefaultTasks1200Response
 */
export interface GetDefaultTasks1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetDefaultTasks1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetDefaultTasks1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetDefaultTasks1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetDefaultTasks1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetDefaultTasks1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestDefaultTask>}
     * @memberof GetDefaultTasks1200Response
     */
    values?: Array<RestDefaultTask>;
}
/**
 * 
 * @export
 * @interface GetExportJobMessages200Response
 */
export interface GetExportJobMessages200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetExportJobMessages200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetExportJobMessages200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestJobMessage>}
     * @memberof GetExportJobMessages200Response
     */
    values?: Array<RestJobMessage>;
}
/**
 * 
 * @export
 * @interface GetForRepository1200Response
 */
export interface GetForRepository1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetForRepository1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetForRepository1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof GetForRepository1200Response
     */
    values?: Array<RestSshAccessKey>;
}
/**
 * 
 * @export
 * @interface GetGroups1200Response
 */
export interface GetGroups1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetGroups1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestDetailedGroup>}
     * @memberof GetGroups1200Response
     */
    values?: Array<RestDetailedGroup>;
}
/**
 * 
 * @export
 * @interface GetGroups200Response
 */
export interface GetGroups200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetGroups200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroups200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetGroups200Response
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface GetGroupsWithAnyPermission200Response
 */
export interface GetGroupsWithAnyPermission200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPermittedGroup>}
     * @memberof GetGroupsWithAnyPermission200Response
     */
    values?: Array<RestPermittedGroup>;
}
/**
 * 
 * @export
 * @interface GetHistory200Response
 */
export interface GetHistory200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetHistory200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetHistory200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestAggregateRejectCounter>}
     * @memberof GetHistory200Response
     */
    values?: Array<RestAggregateRejectCounter>;
}
/**
 * 
 * @export
 * @interface GetIdps200Response
 */
export interface GetIdps200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetIdps200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetIdps200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<IdpConfigEntity>}
     * @memberof GetIdps200Response
     */
    results?: Array<IdpConfigEntity>;
    /**
     * 
     * @type {number}
     * @memberof GetIdps200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetIdps200Response
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface GetKeysForUser200Response
 */
export interface GetKeysForUser200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetKeysForUser200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetKeysForUser200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestGpgKey>}
     * @memberof GetKeysForUser200Response
     */
    values?: Array<RestGpgKey>;
}
/**
 * 
 * @export
 * @interface GetLabelables200Response
 */
export interface GetLabelables200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetLabelables200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabelables200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestLabelable>}
     * @memberof GetLabelables200Response
     */
    values?: Array<RestLabelable>;
}
/**
 * 
 * @export
 * @interface GetLabels200Response
 */
export interface GetLabels200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetLabels200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLabels200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestLabel>}
     * @memberof GetLabels200Response
     */
    values?: Array<RestLabel>;
}
/**
 * 
 * @export
 * @interface GetLoginOptions200Response
 */
export interface GetLoginOptions200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetLoginOptions200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetLoginOptions200Response
     */
    limit?: number;
    /**
     * 
     * @type {Array<LoginOptionEntity>}
     * @memberof GetLoginOptions200Response
     */
    results?: Array<LoginOptionEntity>;
    /**
     * 
     * @type {number}
     * @memberof GetLoginOptions200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetLoginOptions200Response
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface GetPageOfRequiredBuildsMergeChecks200Response
 */
export interface GetPageOfRequiredBuildsMergeChecks200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestRequiredBuildCondition>}
     * @memberof GetPageOfRequiredBuildsMergeChecks200Response
     */
    values?: Array<RestRequiredBuildCondition>;
}
/**
 * 
 * @export
 * @interface GetProjects200Response
 */
export interface GetProjects200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetProjects200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjects200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestProject>}
     * @memberof GetProjects200Response
     */
    values?: Array<RestProject>;
}
/**
 * 
 * @export
 * @interface GetPullRequestSuggestions200Response
 */
export interface GetPullRequestSuggestions200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetPullRequestSuggestions200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequestSuggestions200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPullRequestSuggestion>}
     * @memberof GetPullRequestSuggestions200Response
     */
    values?: Array<RestPullRequestSuggestion>;
}
/**
 * 
 * @export
 * @interface GetPullRequests1200Response
 */
export interface GetPullRequests1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetPullRequests1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetPullRequests1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPullRequest>}
     * @memberof GetPullRequests1200Response
     */
    values?: Array<RestPullRequest>;
}
/**
 * 
 * @export
 * @interface GetRefChangeActivity200Response
 */
export interface GetRefChangeActivity200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRefChangeActivity200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRefChangeActivity200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestRepositoryRefChangeActivity>}
     * @memberof GetRefChangeActivity200Response
     */
    values?: Array<RestRepositoryRefChangeActivity>;
}
/**
 * 
 * @export
 * @interface GetRepoSyncStatus200Response
 */
export interface GetRepoSyncStatus200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRepoSyncStatus200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRepoSyncStatus200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepoSyncStatus200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepoSyncStatus200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepoSyncStatus200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMirrorRepositorySynchronizationStatus>}
     * @memberof GetRepoSyncStatus200Response
     */
    values?: Array<RestMirrorRepositorySynchronizationStatus>;
}
/**
 * 
 * @export
 * @interface GetReports200Response
 */
export interface GetReports200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetReports200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReports200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestInsightReport>}
     * @memberof GetReports200Response
     */
    values?: Array<RestInsightReport>;
}
/**
 * 
 * @export
 * @interface GetRepositoriesRecentlyAccessed200Response
 */
export interface GetRepositoriesRecentlyAccessed200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestRepository>}
     * @memberof GetRepositoriesRecentlyAccessed200Response
     */
    values?: Array<RestRepository>;
}
/**
 * 
 * @export
 * @interface GetRepositoryHooks1200Response
 */
export interface GetRepositoryHooks1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRepositoryHooks1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRepositoryHooks1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestRepositoryHook>}
     * @memberof GetRepositoryHooks1200Response
     */
    values?: Array<RestRepositoryHook>;
}
/**
 * 
 * @export
 * @interface GetRestrictions1200Response
 */
export interface GetRestrictions1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetRestrictions1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetRestrictions1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestRefRestriction>}
     * @memberof GetRestrictions1200Response
     */
    values?: Array<RestRefRestriction>;
}
/**
 * 
 * @export
 * @interface GetReviewerGroups1200Response
 */
export interface GetReviewerGroups1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetReviewerGroups1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetReviewerGroups1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof GetReviewerGroups1200Response
     */
    values?: Array<RestReviewerGroup>;
}
/**
 * 
 * @export
 * @interface GetSshKeys200Response
 */
export interface GetSshKeys200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetSshKeys200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetSshKeys200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestSshKey>}
     * @memberof GetSshKeys200Response
     */
    values?: Array<RestSshKey>;
}
/**
 * 
 * @export
 * @interface GetTags200Response
 */
export interface GetTags200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetTags200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetTags200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestTag>}
     * @memberof GetTags200Response
     */
    values?: Array<RestTag>;
}
/**
 * 
 * @export
 * @interface GetUsersWithAnyPermission1200Response
 */
export interface GetUsersWithAnyPermission1200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPermittedUser>}
     * @memberof GetUsersWithAnyPermission1200Response
     */
    values?: Array<RestPermittedUser>;
}
/**
 * 
 * @export
 * @interface GetUsersWithoutAnyPermission200Response
 */
export interface GetUsersWithoutAnyPermission200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof GetUsersWithoutAnyPermission200Response
     */
    values?: Array<RestApplicationUser>;
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
    name?: string;
}
/**
 * 
 * @export
 * @interface GroupAndUsers
 */
export interface GroupAndUsers {
    /**
     * 
     * @type {string}
     * @memberof GroupAndUsers
     */
    group?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof GroupAndUsers
     */
    users: Array<string>;
}
/**
 * 
 * @export
 * @interface GroupPickerContext
 */
export interface GroupPickerContext {
    /**
     * 
     * @type {string}
     * @memberof GroupPickerContext
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupPickerContext
     */
    itemName?: string;
}
/**
 * 
 * @export
 * @interface IdpConfigEntity
 */
export interface IdpConfigEntity {
    /**
     * 
     * @type {Array<string>}
     * @memberof IdpConfigEntity
     */
    additionalScopes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    authorizationEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    buttonText?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    certificate?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    clientSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    crowdUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdpConfigEntity
     */
    discoveryEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdpConfigEntity
     */
    enableRememberMe?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdpConfigEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IdpConfigEntity
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    idpType?: IdpConfigEntityIdpTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof IdpConfigEntity
     */
    includeCustomerLogins?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    issuerUrl?: string;
    /**
     * 
     * @type {JitConfigEntity}
     * @memberof IdpConfigEntity
     */
    jitConfiguration?: JitConfigEntity;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    ssoIssuer?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    ssoType?: IdpConfigEntitySsoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    ssoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    tokenEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    userinfoEndpoint?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    usernameAttribute?: string;
    /**
     * 
     * @type {string}
     * @memberof IdpConfigEntity
     */
    usernameClaim?: string;
}


/**
 * @export
 */
export const IdpConfigEntityIdpTypeEnum = {
    Generic: 'GENERIC',
    Crowd: 'CROWD'
} as const;
export type IdpConfigEntityIdpTypeEnum = typeof IdpConfigEntityIdpTypeEnum[keyof typeof IdpConfigEntityIdpTypeEnum];

/**
 * @export
 */
export const IdpConfigEntitySsoTypeEnum = {
    None: 'NONE',
    Saml: 'SAML',
    Oidc: 'OIDC'
} as const;
export type IdpConfigEntitySsoTypeEnum = typeof IdpConfigEntitySsoTypeEnum[keyof typeof IdpConfigEntitySsoTypeEnum];

/**
 * 
 * @export
 * @interface JitConfigEntity
 */
export interface JitConfigEntity {
    /**
     * 
     * @type {Array<string>}
     * @memberof JitConfigEntity
     */
    additionalOpenidScopes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JitConfigEntity
     */
    mappingDisplayName?: string;
    /**
     * 
     * @type {string}
     * @memberof JitConfigEntity
     */
    mappingEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof JitConfigEntity
     */
    mappingGroups?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JitConfigEntity
     */
    userProvisioningEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface JitUserEntity
 */
export interface JitUserEntity {
    /**
     * 
     * @type {string}
     * @memberof JitUserEntity
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof JitUserEntity
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof JitUserEntity
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface LineNumberRange
 */
export interface LineNumberRange {
    /**
     * 
     * @type {number}
     * @memberof LineNumberRange
     */
    maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof LineNumberRange
     */
    minimum?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LineNumberRange
     */
    singleLine?: boolean;
}
/**
 * 
 * @export
 * @interface ListMirrors200Response
 */
export interface ListMirrors200Response {
    /**
     * 
     * @type {boolean}
     * @memberof ListMirrors200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListMirrors200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMirrorServer>}
     * @memberof ListMirrors200Response
     */
    values?: Array<RestMirrorServer>;
}
/**
 * 
 * @export
 * @interface ListParticipants200Response
 */
export interface ListParticipants200Response {
    /**
     * 
     * @type {boolean}
     * @memberof ListParticipants200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListParticipants200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof ListParticipants200Response
     */
    values?: Array<RestPullRequestParticipant>;
}
/**
 * 
 * @export
 * @interface ListRequests200Response
 */
export interface ListRequests200Response {
    /**
     * 
     * @type {boolean}
     * @memberof ListRequests200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ListRequests200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMirroringRequest>}
     * @memberof ListRequests200Response
     */
    values?: Array<RestMirroringRequest>;
}
/**
 * 
 * @export
 * @interface LoginOptionEntity
 */
export interface LoginOptionEntity {
    /**
     * 
     * @type {string}
     * @memberof LoginOptionEntity
     */
    buttonText?: string;
    /**
     * 
     * @type {number}
     * @memberof LoginOptionEntity
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LoginOptionEntity
     */
    loginLink?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginOptionEntity
     */
    type?: LoginOptionEntityTypeEnum;
}


/**
 * @export
 */
export const LoginOptionEntityTypeEnum = {
    LoginForm: 'LOGIN_FORM',
    Idp: 'IDP',
    LegacyLoginForm: 'LEGACY_LOGIN_FORM'
} as const;
export type LoginOptionEntityTypeEnum = typeof LoginOptionEntityTypeEnum[keyof typeof LoginOptionEntityTypeEnum];

/**
 * 
 * @export
 * @interface MethodStateDTO
 */
export interface MethodStateDTO {
    /**
     * 
     * @type {boolean}
     * @memberof MethodStateDTO
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MethodStateDTO
     */
    enabledAt?: string;
    /**
     * 
     * @type {string}
     * @memberof MethodStateDTO
     */
    type?: MethodStateDTOTypeEnum;
}


/**
 * @export
 */
export const MethodStateDTOTypeEnum = {
    Totp: 'TOTP'
} as const;
export type MethodStateDTOTypeEnum = typeof MethodStateDTOTypeEnum[keyof typeof MethodStateDTOTypeEnum];

/**
 * 
 * @export
 * @interface NextLoginStepDTO
 */
export interface NextLoginStepDTO {
    /**
     * 
     * @type {string}
     * @memberof NextLoginStepDTO
     */
    conversationId?: string;
    /**
     * 
     * @type {string}
     * @memberof NextLoginStepDTO
     */
    nextLoginStep?: NextLoginStepDTONextLoginStepEnum;
}


/**
 * @export
 */
export const NextLoginStepDTONextLoginStepEnum = {
    Enrollment: 'ENROLLMENT',
    TotpCodeVerification: 'TOTP_CODE_VERIFICATION'
} as const;
export type NextLoginStepDTONextLoginStepEnum = typeof NextLoginStepDTONextLoginStepEnum[keyof typeof NextLoginStepDTONextLoginStepEnum];

/**
 * 
 * @export
 * @interface PageRequestImpl
 */
export interface PageRequestImpl {
    /**
     * 
     * @type {number}
     * @memberof PageRequestImpl
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof PageRequestImpl
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface PasswordElevationRestDTO
 */
export interface PasswordElevationRestDTO {
    /**
     * 
     * @type {string}
     * @memberof PasswordElevationRestDTO
     */
    password?: string;
}
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Project
     */
    public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    type?: ProjectTypeEnum;
}


/**
 * @export
 */
export const ProjectTypeEnum = {
    Normal: 'NORMAL',
    Personal: 'PERSONAL'
} as const;
export type ProjectTypeEnum = typeof ProjectTypeEnum[keyof typeof ProjectTypeEnum];

/**
 * 
 * @export
 * @interface PullRequest
 */
export interface PullRequest {
    /**
     * 
     * @type {PullRequestParticipant}
     * @memberof PullRequest
     */
    author?: PullRequestParticipant;
    /**
     * 
     * @type {boolean}
     * @memberof PullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    closedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    createdDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PullRequest
     */
    crossRepository?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PullRequest
     */
    draft?: boolean;
    /**
     * 
     * @type {PullRequestRef}
     * @memberof PullRequest
     */
    fromRef?: PullRequestRef;
    /**
     * 
     * @type {number}
     * @memberof PullRequest
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {Set<PullRequestParticipant>}
     * @memberof PullRequest
     */
    participants?: Array<PullRequestParticipant>;
    /**
     * 
     * @type {object}
     * @memberof PullRequest
     */
    properties?: object;
    /**
     * 
     * @type {Set<PullRequestParticipant>}
     * @memberof PullRequest
     */
    reviewers?: Array<PullRequestParticipant>;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    state?: PullRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    title?: string;
    /**
     * 
     * @type {PullRequestRef}
     * @memberof PullRequest
     */
    toRef?: PullRequestRef;
    /**
     * 
     * @type {string}
     * @memberof PullRequest
     */
    updatedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof PullRequest
     */
    version?: number;
}


/**
 * @export
 */
export const PullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type PullRequestStateEnum = typeof PullRequestStateEnum[keyof typeof PullRequestStateEnum];

/**
 * 
 * @export
 * @interface PullRequestParticipant
 */
export interface PullRequestParticipant {
    /**
     * 
     * @type {boolean}
     * @memberof PullRequestParticipant
     */
    approved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PullRequestParticipant
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {PullRequest}
     * @memberof PullRequestParticipant
     */
    pullRequest?: PullRequest;
    /**
     * 
     * @type {string}
     * @memberof PullRequestParticipant
     */
    role?: PullRequestParticipantRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PullRequestParticipant
     */
    status?: PullRequestParticipantStatusEnum;
    /**
     * 
     * @type {ApplicationUser}
     * @memberof PullRequestParticipant
     */
    user?: ApplicationUser;
}


/**
 * @export
 */
export const PullRequestParticipantRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type PullRequestParticipantRoleEnum = typeof PullRequestParticipantRoleEnum[keyof typeof PullRequestParticipantRoleEnum];

/**
 * @export
 */
export const PullRequestParticipantStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type PullRequestParticipantStatusEnum = typeof PullRequestParticipantStatusEnum[keyof typeof PullRequestParticipantStatusEnum];

/**
 * 
 * @export
 * @interface PullRequestRef
 */
export interface PullRequestRef {
    /**
     * 
     * @type {string}
     * @memberof PullRequestRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof PullRequestRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PullRequestRef
     */
    latestCommit?: string;
    /**
     * 
     * @type {Repository}
     * @memberof PullRequestRef
     */
    repository?: Repository;
    /**
     * 
     * @type {any}
     * @memberof PullRequestRef
     */
    type?: any | null;
}
/**
 * 
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    fork?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof Repository
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    local?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    offline?: boolean;
    /**
     * 
     * @type {Repository}
     * @memberof Repository
     */
    origin?: Repository;
    /**
     * 
     * @type {number}
     * @memberof Repository
     */
    partition?: number;
    /**
     * 
     * @type {Project}
     * @memberof Repository
     */
    project?: Project;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    public?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    readOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Repository
     */
    remote?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    state?: RepositoryStateEnum;
    /**
     * 
     * @type {string}
     * @memberof Repository
     */
    statusMessage?: string;
}


/**
 * @export
 */
export const RepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RepositoryStateEnum = typeof RepositoryStateEnum[keyof typeof RepositoryStateEnum];

/**
 * 
 * @export
 * @interface RepositoryHookDetails
 */
export interface RepositoryHookDetails {
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    configFormKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RepositoryHookDetails
     */
    supportedScopes?: Array<RepositoryHookDetailsSupportedScopesEnum>;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    type?: RepositoryHookDetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RepositoryHookDetails
     */
    version?: string;
}


/**
 * @export
 */
export const RepositoryHookDetailsSupportedScopesEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RepositoryHookDetailsSupportedScopesEnum = typeof RepositoryHookDetailsSupportedScopesEnum[keyof typeof RepositoryHookDetailsSupportedScopesEnum];

/**
 * @export
 */
export const RepositoryHookDetailsTypeEnum = {
    PreReceive: 'PRE_RECEIVE',
    PrePullRequestMerge: 'PRE_PULL_REQUEST_MERGE',
    PostReceive: 'POST_RECEIVE'
} as const;
export type RepositoryHookDetailsTypeEnum = typeof RepositoryHookDetailsTypeEnum[keyof typeof RepositoryHookDetailsTypeEnum];

/**
 * 
 * @export
 * @interface RestAccessToken
 */
export interface RestAccessToken {
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAccessToken
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestAccessTokenRequest
 */
export interface RestAccessTokenRequest {
    /**
     * 
     * @type {number}
     * @memberof RestAccessTokenRequest
     */
    expiryDays?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAccessTokenRequest
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestAccessTokenRequest
     */
    permissions?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestAggregateRejectCounter
 */
export interface RestAggregateRejectCounter {
    /**
     * 
     * @type {number}
     * @memberof RestAggregateRejectCounter
     */
    lastRejectTime?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAggregateRejectCounter
     */
    rejectCount?: number;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestAggregateRejectCounter
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}
/**
 * 
 * @export
 * @interface RestAnalyticsSettings
 */
export interface RestAnalyticsSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestAnalyticsSettings
     */
    canCollectAnalytics?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAnalyticsSettings
     */
    serverTime?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAnalyticsSettings
     */
    supportEntitlementNumber?: string;
}
/**
 * 
 * @export
 * @interface RestAnnouncementBanner
 */
export interface RestAnnouncementBanner {
    /**
     * 
     * @type {string}
     * @memberof RestAnnouncementBanner
     */
    audience?: RestAnnouncementBannerAudienceEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestAnnouncementBanner
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestAnnouncementBanner
     */
    message?: string;
}


/**
 * @export
 */
export const RestAnnouncementBannerAudienceEnum = {
    Authenticated: 'AUTHENTICATED',
    All: 'ALL'
} as const;
export type RestAnnouncementBannerAudienceEnum = typeof RestAnnouncementBannerAudienceEnum[keyof typeof RestAnnouncementBannerAudienceEnum];

/**
 * 
 * @export
 * @interface RestApplicationProperties
 */
export interface RestApplicationProperties {
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    buildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationProperties
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface RestApplicationUser
 */
export interface RestApplicationUser {
    /**
     * 
     * @type {boolean}
     * @memberof RestApplicationUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestApplicationUser
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUser
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUser
     */
    type?: RestApplicationUserTypeEnum;
}


/**
 * @export
 */
export const RestApplicationUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestApplicationUserTypeEnum = typeof RestApplicationUserTypeEnum[keyof typeof RestApplicationUserTypeEnum];

/**
 * 
 * @export
 * @interface RestApplicationUserWithPermissions
 */
export interface RestApplicationUserWithPermissions {
    /**
     * 
     * @type {boolean}
     * @memberof RestApplicationUserWithPermissions
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    displayName?: string;
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUserWithPermissions
     */
    effectivePermissions?: object;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestApplicationUserWithPermissions
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestApplicationUserWithPermissions
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestApplicationUserWithPermissions
     */
    type?: RestApplicationUserWithPermissionsTypeEnum;
}


/**
 * @export
 */
export const RestApplicationUserWithPermissionsTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestApplicationUserWithPermissionsTypeEnum = typeof RestApplicationUserWithPermissionsTypeEnum[keyof typeof RestApplicationUserWithPermissionsTypeEnum];

/**
 * 
 * @export
 * @interface RestApplySuggestionRequest
 */
export interface RestApplySuggestionRequest {
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequest
     */
    commentVersion?: number;
    /**
     * 
     * @type {string}
     * @memberof RestApplySuggestionRequest
     */
    commitMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequest
     */
    pullRequestVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof RestApplySuggestionRequest
     */
    suggestionIndex?: number;
}
/**
 * 
 * @export
 * @interface RestAttachmentMetadata
 */
export interface RestAttachmentMetadata {
    /**
     * 
     * @type {number}
     * @memberof RestAttachmentMetadata
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAttachmentMetadata
     */
    metadata?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAttachmentMetadata
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestAuthenticationRequest
 */
export interface RestAuthenticationRequest {
    /**
     * 
     * @type {Credentials}
     * @memberof RestAuthenticationRequest
     */
    credentials: Credentials;
    /**
     * 
     * @type {number}
     * @memberof RestAuthenticationRequest
     */
    repositoryId?: number;
}
/**
 * 
 * @export
 * @interface RestAutoDeclineSettings
 */
export interface RestAutoDeclineSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoDeclineSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoDeclineSettings
     */
    inactivityWeeks?: number;
    /**
     * 
     * @type {RestReviewerGroupScope}
     * @memberof RestAutoDeclineSettings
     */
    scope?: RestReviewerGroupScope;
}
/**
 * 
 * @export
 * @interface RestAutoDeclineSettingsRequest
 */
export interface RestAutoDeclineSettingsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoDeclineSettingsRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoDeclineSettingsRequest
     */
    inactivityWeeks?: number;
}
/**
 * 
 * @export
 * @interface RestAutoMergeProcessingResult
 */
export interface RestAutoMergeProcessingResult {
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResult
     */
    autoMergeProcessingStatus?: RestAutoMergeProcessingResultAutoMergeProcessingStatusEnum;
    /**
     * 
     * @type {RestAutoMergeProcessingResultPullRequest}
     * @memberof RestAutoMergeProcessingResult
     */
    pullRequest?: RestAutoMergeProcessingResultPullRequest;
}


/**
 * @export
 */
export const RestAutoMergeProcessingResultAutoMergeProcessingStatusEnum = {
    Cancelled: 'CANCELLED',
    Vetoed: 'VETOED',
    Stale: 'STALE',
    Merged: 'MERGED',
    LockFailure: 'LOCK_FAILURE',
    Unknown: 'UNKNOWN'
} as const;
export type RestAutoMergeProcessingResultAutoMergeProcessingStatusEnum = typeof RestAutoMergeProcessingResultAutoMergeProcessingStatusEnum[keyof typeof RestAutoMergeProcessingResultAutoMergeProcessingStatusEnum];

/**
 * 
 * @export
 * @interface RestAutoMergeProcessingResultPullRequest
 */
export interface RestAutoMergeProcessingResultPullRequest {
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthor}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    author?: RestCommentAnchorPullRequestAuthor;
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    closedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    descriptionAsHtml?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    draft?: boolean;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    fromRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    htmlDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    participants?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    reviewers?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    state?: RestAutoMergeProcessingResultPullRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    title?: string;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    toRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeProcessingResultPullRequest
     */
    version?: number;
}


/**
 * @export
 */
export const RestAutoMergeProcessingResultPullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type RestAutoMergeProcessingResultPullRequestStateEnum = typeof RestAutoMergeProcessingResultPullRequestStateEnum[keyof typeof RestAutoMergeProcessingResultPullRequestStateEnum];

/**
 * 
 * @export
 * @interface RestAutoMergeProjectSettingsRequest
 */
export interface RestAutoMergeProjectSettingsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeProjectSettingsRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeProjectSettingsRequest
     */
    restrictionAction?: RestAutoMergeProjectSettingsRequestRestrictionActionEnum;
}


/**
 * @export
 */
export const RestAutoMergeProjectSettingsRequestRestrictionActionEnum = {
    Create: 'CREATE',
    Delete: 'DELETE',
    None: 'NONE'
} as const;
export type RestAutoMergeProjectSettingsRequestRestrictionActionEnum = typeof RestAutoMergeProjectSettingsRequestRestrictionActionEnum[keyof typeof RestAutoMergeProjectSettingsRequestRestrictionActionEnum];

/**
 * 
 * @export
 * @interface RestAutoMergeRequest
 */
export interface RestAutoMergeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeRequest
     */
    autoSubject?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeRequest
     */
    fromHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeRequest
     */
    strategyId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeRequest
     */
    toRefId?: string;
}
/**
 * 
 * @export
 * @interface RestAutoMergeRestrictedSettings
 */
export interface RestAutoMergeRestrictedSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeRestrictedSettings
     */
    enabled?: boolean;
    /**
     * The restriction state of this scope's project.
     * @type {string}
     * @memberof RestAutoMergeRestrictedSettings
     */
    restrictionState?: RestAutoMergeRestrictedSettingsRestrictionStateEnum;
    /**
     * 
     * @type {RestAutoMergeRestrictedSettingsScope}
     * @memberof RestAutoMergeRestrictedSettings
     */
    scope?: RestAutoMergeRestrictedSettingsScope;
}


/**
 * @export
 */
export const RestAutoMergeRestrictedSettingsRestrictionStateEnum = {
    None: 'NONE',
    RestrictedUnmodifiable: 'RESTRICTED_UNMODIFIABLE',
    RestrictedModifiable: 'RESTRICTED_MODIFIABLE'
} as const;
export type RestAutoMergeRestrictedSettingsRestrictionStateEnum = typeof RestAutoMergeRestrictedSettingsRestrictionStateEnum[keyof typeof RestAutoMergeRestrictedSettingsRestrictionStateEnum];

/**
 * The scope that these settings apply to.
 * @export
 * @interface RestAutoMergeRestrictedSettingsScope
 */
export interface RestAutoMergeRestrictedSettingsScope {
    /**
     * 
     * @type {number}
     * @memberof RestAutoMergeRestrictedSettingsScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestAutoMergeRestrictedSettingsScope
     */
    type?: RestAutoMergeRestrictedSettingsScopeTypeEnum;
}


/**
 * @export
 */
export const RestAutoMergeRestrictedSettingsScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestAutoMergeRestrictedSettingsScopeTypeEnum = typeof RestAutoMergeRestrictedSettingsScopeTypeEnum[keyof typeof RestAutoMergeRestrictedSettingsScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestAutoMergeSettingsRequest
 */
export interface RestAutoMergeSettingsRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestAutoMergeSettingsRequest
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestBearerTokenCredentials
 */
export interface RestBearerTokenCredentials {
    /**
     * 
     * @type {string}
     * @memberof RestBearerTokenCredentials
     */
    token: string;
}
/**
 * 
 * @export
 * @interface RestBitbucketLicense
 */
export interface RestBitbucketLicense {
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly creationDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly daysBeforeExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly expiryDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly gracePeriodEndDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    license?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly maintenanceExpiryDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly maximumNumberOfUsers?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeGracePeriodExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly numberOfDaysBeforeMaintenanceExpiry?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicense
     */
    readonly purchaseDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    readonly serverId?: string;
    /**
     * 
     * @type {RestBitbucketLicenseStatus}
     * @memberof RestBitbucketLicense
     */
    status?: RestBitbucketLicenseStatus;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicense
     */
    readonly supportEntitlementNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestBitbucketLicense
     */
    readonly unlimitedNumberOfUsers?: boolean;
}
/**
 * 
 * @export
 * @interface RestBitbucketLicenseStatus
 */
export interface RestBitbucketLicenseStatus {
    /**
     * 
     * @type {number}
     * @memberof RestBitbucketLicenseStatus
     */
    currentNumberOfUsers?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBitbucketLicenseStatus
     */
    serverId?: string;
}
/**
 * 
 * @export
 * @interface RestBranch
 */
export interface RestBranch {
    /**
     * 
     * @type {boolean}
     * @memberof RestBranch
     */
    readonly default?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly latestChangeset?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBranch
     */
    readonly latestCommit?: string;
    /**
     * 
     * @type {any}
     * @memberof RestBranch
     */
    type?: any | null;
}
/**
 * 
 * @export
 * @interface RestBranchCreateRequest
 */
export interface RestBranchCreateRequest {
    /**
     * Name of the branch to be created
     * @type {string}
     * @memberof RestBranchCreateRequest
     */
    name?: string;
    /**
     * Commit ID from which the branch is created
     * @type {string}
     * @memberof RestBranchCreateRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestBranchDeleteRequest
 */
export interface RestBranchDeleteRequest {
    /**
     * Don't actually delete the ref name, just do a dry run
     * @type {boolean}
     * @memberof RestBranchDeleteRequest
     */
    dryRun?: boolean;
    /**
     * Commit ID that the provided ref name is expected to point to
     * @type {string}
     * @memberof RestBranchDeleteRequest
     */
    endPoint?: string;
    /**
     * Name of the ref to be deleted
     * @type {string}
     * @memberof RestBranchDeleteRequest
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestBuildCapabilities
 */
export interface RestBuildCapabilities {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestBuildCapabilities
     */
    buildStatus?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestBuildStats
 */
export interface RestBuildStats {
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    cancelled?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    inProgress?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    successful?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStats
     */
    unknown?: number;
}
/**
 * 
 * @export
 * @interface RestBuildStatus
 */
export interface RestBuildStatus {
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    buildNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    repositorySlug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    state?: RestBuildStatusStateEnum;
    /**
     * 
     * @type {RestBuildStatusTestResults}
     * @memberof RestBuildStatus
     */
    testResults?: RestBuildStatusTestResults;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatus
     */
    updatedDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatus
     */
    url?: string;
}


/**
 * @export
 */
export const RestBuildStatusStateEnum = {
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    Inprogress: 'INPROGRESS',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestBuildStatusStateEnum = typeof RestBuildStatusStateEnum[keyof typeof RestBuildStatusStateEnum];

/**
 * 
 * @export
 * @interface RestBuildStatusSetRequest
 */
export interface RestBuildStatusSetRequest {
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    buildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequest
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusSetRequest
     */
    lastUpdated?: number;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    parent?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    state: RestBuildStatusSetRequestStateEnum;
    /**
     * 
     * @type {RestBuildStatusTestResults}
     * @memberof RestBuildStatusSetRequest
     */
    testResults?: RestBuildStatusTestResults;
    /**
     * 
     * @type {string}
     * @memberof RestBuildStatusSetRequest
     */
    url: string;
}


/**
 * @export
 */
export const RestBuildStatusSetRequestStateEnum = {
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    Inprogress: 'INPROGRESS',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestBuildStatusSetRequestStateEnum = typeof RestBuildStatusSetRequestStateEnum[keyof typeof RestBuildStatusSetRequestStateEnum];

/**
 * 
 * @export
 * @interface RestBuildStatusTestResults
 */
export interface RestBuildStatusTestResults {
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    skipped?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBuildStatusTestResults
     */
    successful?: number;
}
/**
 * 
 * @export
 * @interface RestBulkAddInsightAnnotationRequest
 */
export interface RestBulkAddInsightAnnotationRequest {
    /**
     * 
     * @type {Array<RestSingleAddInsightAnnotationRequest>}
     * @memberof RestBulkAddInsightAnnotationRequest
     */
    annotations?: Array<RestSingleAddInsightAnnotationRequest>;
}
/**
 * 
 * @export
 * @interface RestBulkUserRateLimitSettingsUpdateRequest
 */
export interface RestBulkUserRateLimitSettingsUpdateRequest {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    usernames?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequest
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestBulkUserRateLimitSettingsUpdateRequestSettings
 */
export interface RestBulkUserRateLimitSettingsUpdateRequestSettings {
    /**
     * 
     * @type {number}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequestSettings
     */
    capacity?: number;
    /**
     * 
     * @type {number}
     * @memberof RestBulkUserRateLimitSettingsUpdateRequestSettings
     */
    fillRate?: number;
}
/**
 * 
 * @export
 * @interface RestChange
 */
export interface RestChange {
    /**
     * 
     * @type {RestChangeConflict}
     * @memberof RestChange
     */
    conflict?: RestChangeConflict;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    contentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestChange
     */
    executable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    fromContentId?: string;
    /**
     * 
     * @type {object}
     * @memberof RestChange
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    nodeType?: RestChangeNodeTypeEnum;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestChange
     */
    path?: RestCommentAnchorPath;
    /**
     * 
     * @type {number}
     * @memberof RestChange
     */
    percentUnchanged?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestChange
     */
    srcExecutable?: boolean;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestChange
     */
    srcPath?: RestCommentAnchorPath;
    /**
     * 
     * @type {string}
     * @memberof RestChange
     */
    type?: RestChangeTypeEnum;
}


/**
 * @export
 */
export const RestChangeNodeTypeEnum = {
    Directory: 'DIRECTORY',
    File: 'FILE',
    Submodule: 'SUBMODULE'
} as const;
export type RestChangeNodeTypeEnum = typeof RestChangeNodeTypeEnum[keyof typeof RestChangeNodeTypeEnum];

/**
 * @export
 */
export const RestChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestChangeTypeEnum = typeof RestChangeTypeEnum[keyof typeof RestChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestChangeConflict
 */
export interface RestChangeConflict {
    /**
     * 
     * @type {RestChangeConflictOurChange}
     * @memberof RestChangeConflict
     */
    ourChange?: RestChangeConflictOurChange;
    /**
     * 
     * @type {RestChangeConflictOurChange}
     * @memberof RestChangeConflict
     */
    theirChange?: RestChangeConflictOurChange;
}
/**
 * 
 * @export
 * @interface RestChangeConflictOurChange
 */
export interface RestChangeConflictOurChange {
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestChangeConflictOurChange
     */
    path?: RestCommentAnchorPath;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestChangeConflictOurChange
     */
    srcPath?: RestCommentAnchorPath;
    /**
     * 
     * @type {string}
     * @memberof RestChangeConflictOurChange
     */
    type?: RestChangeConflictOurChangeTypeEnum;
}


/**
 * @export
 */
export const RestChangeConflictOurChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestChangeConflictOurChangeTypeEnum = typeof RestChangeConflictOurChangeTypeEnum[keyof typeof RestChangeConflictOurChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestChangeset
 */
export interface RestChangeset {
    /**
     * 
     * @type {RestChangesetChanges}
     * @memberof RestChangeset
     */
    changes?: RestChangesetChanges;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestChangeset
     */
    fromCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {object}
     * @memberof RestChangeset
     */
    links?: object;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestChangeset
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {RestChangesetToCommit}
     * @memberof RestChangeset
     */
    toCommit?: RestChangesetToCommit;
}
/**
 * 
 * @export
 * @interface RestChangesetChanges
 */
export interface RestChangesetChanges {
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetChanges
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetChanges
     */
    start?: number;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetChanges
     */
    values?: object;
}
/**
 * 
 * @export
 * @interface RestChangesetFromCommit
 */
export interface RestChangesetFromCommit {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetFromCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetFromCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestChangesetRepository
 */
export interface RestChangesetRepository {
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    defaultBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepository
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    name?: string;
    /**
     * 
     * @type {RestChangesetRepositoryOrigin}
     * @memberof RestChangesetRepository
     */
    origin?: RestChangesetRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestChangesetRepository
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepository
     */
    readonly public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly state?: RestChangesetRepositoryStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepository
     */
    readonly statusMessage?: string;
}


/**
 * @export
 */
export const RestChangesetRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestChangesetRepositoryStateEnum = typeof RestChangesetRepositoryStateEnum[keyof typeof RestChangesetRepositoryStateEnum];

/**
 * 
 * @export
 * @interface RestChangesetRepositoryOrigin
 */
export interface RestChangesetRepositoryOrigin {
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    defaultBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepositoryOrigin
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly partition?: number;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestChangesetRepositoryOrigin
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly state?: RestChangesetRepositoryOriginStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOrigin
     */
    readonly statusMessage?: string;
}


/**
 * @export
 */
export const RestChangesetRepositoryOriginStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestChangesetRepositoryOriginStateEnum = typeof RestChangesetRepositoryOriginStateEnum[keyof typeof RestChangesetRepositoryOriginStateEnum];

/**
 * 
 * @export
 * @interface RestChangesetRepositoryOriginProject
 */
export interface RestChangesetRepositoryOriginProject {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    key: string;
    /**
     * 
     * @type {object}
     * @memberof RestChangesetRepositoryOriginProject
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetRepositoryOriginProject
     */
    readonly type?: RestChangesetRepositoryOriginProjectTypeEnum;
}


/**
 * @export
 */
export const RestChangesetRepositoryOriginProjectTypeEnum = {
    Normal: 'NORMAL',
    Personal: 'PERSONAL'
} as const;
export type RestChangesetRepositoryOriginProjectTypeEnum = typeof RestChangesetRepositoryOriginProjectTypeEnum[keyof typeof RestChangesetRepositoryOriginProjectTypeEnum];

/**
 * 
 * @export
 * @interface RestChangesetToCommit
 */
export interface RestChangesetToCommit {
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestChangesetToCommit
     */
    author?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetToCommit
     */
    authorTimestamp?: number;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestChangesetToCommit
     */
    committer?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestChangesetToCommit
     */
    committerTimestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommit
     */
    message?: string;
    /**
     * 
     * @type {Array<RestMinimalCommit>}
     * @memberof RestChangesetToCommit
     */
    parents?: Array<RestMinimalCommit>;
}
/**
 * 
 * @export
 * @interface RestChangesetToCommitAuthor
 */
export interface RestChangesetToCommitAuthor {
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestChangesetToCommitAuthor
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestClusterInformation
 */
export interface RestClusterInformation {
    /**
     * 
     * @type {RestClusterInformationLocalNode}
     * @memberof RestClusterInformation
     */
    localNode?: RestClusterInformationLocalNode;
    /**
     * 
     * @type {Array<RestClusterNode>}
     * @memberof RestClusterInformation
     */
    nodes?: Array<RestClusterNode>;
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterInformation
     */
    running?: boolean;
}
/**
 * 
 * @export
 * @interface RestClusterInformationLocalNode
 */
export interface RestClusterInformationLocalNode {
    /**
     * 
     * @type {RestClusterNodeAddress}
     * @memberof RestClusterInformationLocalNode
     */
    address?: RestClusterNodeAddress;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    buildVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterInformationLocalNode
     */
    local?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestClusterInformationLocalNode
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestClusterNode
 */
export interface RestClusterNode {
    /**
     * 
     * @type {RestClusterNodeAddress}
     * @memberof RestClusterNode
     */
    address?: RestClusterNodeAddress;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    buildVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestClusterNode
     */
    local?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestClusterNode
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestClusterNodeAddress
 */
export interface RestClusterNodeAddress {
    /**
     * 
     * @type {string}
     * @memberof RestClusterNodeAddress
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof RestClusterNodeAddress
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface RestComment
 */
export interface RestComment {
    /**
     * 
     * @type {RestCommentAnchor}
     * @memberof RestComment
     */
    anchor?: RestCommentAnchor;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestComment
     */
    author?: RestCommentAuthor;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestComment
     */
    readonly comments?: Array<RestComment>;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    readonly html?: string;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    id?: number;
    /**
     * 
     * @type {RestCommentParent}
     * @memberof RestComment
     */
    parent?: RestCommentParent;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestComment
     */
    properties?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestComment
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly resolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestComment
     */
    resolver?: RestCommentAuthor;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof RestComment
     */
    text?: string;
    /**
     * Indicates if this comment thread has been marked as resolved or not
     * @type {boolean}
     * @memberof RestComment
     */
    threadResolved?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly threadResolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestComment
     */
    threadResolver?: RestCommentAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestComment
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestCommentAnchor
 */
export interface RestCommentAnchor {
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchor
     */
    diffType?: RestCommentAnchorDiffTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchor
     */
    fileType?: RestCommentAnchorFileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchor
     */
    fromHash?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchor
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchor
     */
    lineType?: RestCommentAnchorLineTypeEnum;
    /**
     * 
     * @type {RestCommentAnchorMultilineMarker}
     * @memberof RestCommentAnchor
     */
    multilineMarker?: RestCommentAnchorMultilineMarker;
    /**
     * 
     * @type {RestCommentAnchorMultilineSpan}
     * @memberof RestCommentAnchor
     */
    multilineSpan?: RestCommentAnchorMultilineSpan;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestCommentAnchor
     */
    path?: RestCommentAnchorPath;
    /**
     * 
     * @type {RestCommentAnchorPullRequest}
     * @memberof RestCommentAnchor
     */
    pullRequest?: RestCommentAnchorPullRequest;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestCommentAnchor
     */
    srcPath?: RestCommentAnchorPath;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchor
     */
    toHash?: string;
}


/**
 * @export
 */
export const RestCommentAnchorDiffTypeEnum = {
    Commit: 'COMMIT',
    Effective: 'EFFECTIVE',
    Range: 'RANGE'
} as const;
export type RestCommentAnchorDiffTypeEnum = typeof RestCommentAnchorDiffTypeEnum[keyof typeof RestCommentAnchorDiffTypeEnum];

/**
 * @export
 */
export const RestCommentAnchorFileTypeEnum = {
    From: 'FROM',
    To: 'TO'
} as const;
export type RestCommentAnchorFileTypeEnum = typeof RestCommentAnchorFileTypeEnum[keyof typeof RestCommentAnchorFileTypeEnum];

/**
 * @export
 */
export const RestCommentAnchorLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestCommentAnchorLineTypeEnum = typeof RestCommentAnchorLineTypeEnum[keyof typeof RestCommentAnchorLineTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentAnchorMultilineMarker
 */
export interface RestCommentAnchorMultilineMarker {
    /**
     * The line number where the multiline comment will begin
     * @type {number}
     * @memberof RestCommentAnchorMultilineMarker
     */
    startLine?: number;
    /**
     * The segment type of the start line of the multiline comment
     * @type {string}
     * @memberof RestCommentAnchorMultilineMarker
     */
    startLineType: RestCommentAnchorMultilineMarkerStartLineTypeEnum;
}


/**
 * @export
 */
export const RestCommentAnchorMultilineMarkerStartLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestCommentAnchorMultilineMarkerStartLineTypeEnum = typeof RestCommentAnchorMultilineMarkerStartLineTypeEnum[keyof typeof RestCommentAnchorMultilineMarkerStartLineTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentAnchorMultilineSpan
 */
export interface RestCommentAnchorMultilineSpan {
    /**
     * The line number of the last line on the right-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestCommentAnchorMultilineSpan
     */
    readonly dstSpanEnd?: number;
    /**
     * The line number of the first line on the right-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestCommentAnchorMultilineSpan
     */
    readonly dstSpanStart?: number;
    /**
     * The line number of the last line on the left-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestCommentAnchorMultilineSpan
     */
    readonly srcSpanEnd?: number;
    /**
     * The line number of the first line on the left-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestCommentAnchorMultilineSpan
     */
    readonly srcSpanStart?: number;
}
/**
 * 
 * @export
 * @interface RestCommentAnchorPath
 */
export interface RestCommentAnchorPath {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestCommentAnchorPath
     */
    components?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPath
     */
    extension?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPath
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPath
     */
    parent?: string;
}
/**
 * 
 * @export
 * @interface RestCommentAnchorPullRequest
 */
export interface RestCommentAnchorPullRequest {
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthor}
     * @memberof RestCommentAnchorPullRequest
     */
    author?: RestCommentAnchorPullRequestAuthor;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequest
     */
    closedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequest
     */
    descriptionAsHtml?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequest
     */
    draft?: boolean;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestCommentAnchorPullRequest
     */
    fromRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequest
     */
    htmlDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequest
     */
    id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestCommentAnchorPullRequest
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestCommentAnchorPullRequest
     */
    participants?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestCommentAnchorPullRequest
     */
    reviewers?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequest
     */
    state?: RestCommentAnchorPullRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequest
     */
    title?: string;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestCommentAnchorPullRequest
     */
    toRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequest
     */
    updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequest
     */
    version?: number;
}


/**
 * @export
 */
export const RestCommentAnchorPullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type RestCommentAnchorPullRequestStateEnum = typeof RestCommentAnchorPullRequestStateEnum[keyof typeof RestCommentAnchorPullRequestStateEnum];

/**
 * 
 * @export
 * @interface RestCommentAnchorPullRequestAuthor
 */
export interface RestCommentAnchorPullRequestAuthor {
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequestAuthor
     */
    approved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthor
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthor
     */
    role?: RestCommentAnchorPullRequestAuthorRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthor
     */
    status?: RestCommentAnchorPullRequestAuthorStatusEnum;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestCommentAnchorPullRequestAuthor
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}


/**
 * @export
 */
export const RestCommentAnchorPullRequestAuthorRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type RestCommentAnchorPullRequestAuthorRoleEnum = typeof RestCommentAnchorPullRequestAuthorRoleEnum[keyof typeof RestCommentAnchorPullRequestAuthorRoleEnum];

/**
 * @export
 */
export const RestCommentAnchorPullRequestAuthorStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type RestCommentAnchorPullRequestAuthorStatusEnum = typeof RestCommentAnchorPullRequestAuthorStatusEnum[keyof typeof RestCommentAnchorPullRequestAuthorStatusEnum];

/**
 * 
 * @export
 * @interface RestCommentAnchorPullRequestAuthorUser
 */
export interface RestCommentAnchorPullRequestAuthorUser {
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestAuthorUser
     */
    type?: RestCommentAnchorPullRequestAuthorUserTypeEnum;
}


/**
 * @export
 */
export const RestCommentAnchorPullRequestAuthorUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestCommentAnchorPullRequestAuthorUserTypeEnum = typeof RestCommentAnchorPullRequestAuthorUserTypeEnum[keyof typeof RestCommentAnchorPullRequestAuthorUserTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentAnchorPullRequestFromRef
 */
export interface RestCommentAnchorPullRequestFromRef {
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestFromRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestFromRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestFromRef
     */
    latestCommit?: string;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestCommentAnchorPullRequestFromRef
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAnchorPullRequestFromRef
     */
    type?: RestCommentAnchorPullRequestFromRefTypeEnum;
}


/**
 * @export
 */
export const RestCommentAnchorPullRequestFromRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestCommentAnchorPullRequestFromRefTypeEnum = typeof RestCommentAnchorPullRequestFromRefTypeEnum[keyof typeof RestCommentAnchorPullRequestFromRefTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentAuthor
 */
export interface RestCommentAuthor {
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentAuthor
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentAuthor
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestCommentAuthor
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentAuthor
     */
    type?: RestCommentAuthorTypeEnum;
}


/**
 * @export
 */
export const RestCommentAuthorTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestCommentAuthorTypeEnum = typeof RestCommentAuthorTypeEnum[keyof typeof RestCommentAuthorTypeEnum];

/**
 * 
 * @export
 * @interface RestCommentJiraIssue
 */
export interface RestCommentJiraIssue {
    /**
     * 
     * @type {number}
     * @memberof RestCommentJiraIssue
     */
    commentId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentJiraIssue
     */
    issueKey?: string;
}
/**
 * 
 * @export
 * @interface RestCommentParent
 */
export interface RestCommentParent {
    /**
     * 
     * @type {RestCommentAnchor}
     * @memberof RestCommentParent
     */
    anchor?: RestCommentAnchor;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentParent
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestCommentParent
     */
    author?: RestCommentAuthor;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestCommentParent
     */
    readonly comments?: Array<RestComment>;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentParent
     */
    readonly html?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentParent
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestCommentParent
     */
    properties?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestCommentParent
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    readonly resolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestCommentParent
     */
    resolver?: RestCommentAuthor;
    /**
     * 
     * @type {string}
     * @memberof RestCommentParent
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentParent
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommentParent
     */
    text?: string;
    /**
     * Indicates if this comment thread has been marked as resolved or not
     * @type {boolean}
     * @memberof RestCommentParent
     */
    threadResolved?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    readonly threadResolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestCommentParent
     */
    threadResolver?: RestCommentAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestCommentParent
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestCommentThreadDiffAnchor
 */
export interface RestCommentThreadDiffAnchor {
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    diffType?: RestCommentThreadDiffAnchorDiffTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    fileType?: RestCommentThreadDiffAnchorFileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    fromHash?: string;
    /**
     * 
     * @type {number}
     * @memberof RestCommentThreadDiffAnchor
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    lineType?: RestCommentThreadDiffAnchorLineTypeEnum;
    /**
     * 
     * @type {RestCommentAnchorMultilineMarker}
     * @memberof RestCommentThreadDiffAnchor
     */
    multilineMarker?: RestCommentAnchorMultilineMarker;
    /**
     * 
     * @type {RestCommentAnchorMultilineSpan}
     * @memberof RestCommentThreadDiffAnchor
     */
    multilineSpan?: RestCommentAnchorMultilineSpan;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestCommentThreadDiffAnchor
     */
    path?: RestCommentAnchorPath;
    /**
     * 
     * @type {RestCommentAnchorPullRequest}
     * @memberof RestCommentThreadDiffAnchor
     */
    pullRequest?: RestCommentAnchorPullRequest;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestCommentThreadDiffAnchor
     */
    srcPath?: RestCommentAnchorPath;
    /**
     * 
     * @type {string}
     * @memberof RestCommentThreadDiffAnchor
     */
    toHash?: string;
}


/**
 * @export
 */
export const RestCommentThreadDiffAnchorDiffTypeEnum = {
    Commit: 'COMMIT',
    Effective: 'EFFECTIVE',
    Range: 'RANGE'
} as const;
export type RestCommentThreadDiffAnchorDiffTypeEnum = typeof RestCommentThreadDiffAnchorDiffTypeEnum[keyof typeof RestCommentThreadDiffAnchorDiffTypeEnum];

/**
 * @export
 */
export const RestCommentThreadDiffAnchorFileTypeEnum = {
    From: 'FROM',
    To: 'TO'
} as const;
export type RestCommentThreadDiffAnchorFileTypeEnum = typeof RestCommentThreadDiffAnchorFileTypeEnum[keyof typeof RestCommentThreadDiffAnchorFileTypeEnum];

/**
 * @export
 */
export const RestCommentThreadDiffAnchorLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestCommentThreadDiffAnchorLineTypeEnum = typeof RestCommentThreadDiffAnchorLineTypeEnum[keyof typeof RestCommentThreadDiffAnchorLineTypeEnum];

/**
 * 
 * @export
 * @interface RestCommit
 */
export interface RestCommit {
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestCommit
     */
    author?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestCommit
     */
    authorTimestamp?: number;
    /**
     * 
     * @type {RestChangesetToCommitAuthor}
     * @memberof RestCommit
     */
    committer?: RestChangesetToCommitAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestCommit
     */
    committerTimestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommit
     */
    message?: string;
    /**
     * 
     * @type {Array<RestMinimalCommit>}
     * @memberof RestCommit
     */
    parents?: Array<RestMinimalCommit>;
}
/**
 * 
 * @export
 * @interface RestCommitMessageSuggestion
 */
export interface RestCommitMessageSuggestion {
    /**
     * 
     * @type {string}
     * @memberof RestCommitMessageSuggestion
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCommitMessageSuggestion
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface RestConflict
 */
export interface RestConflict {
    /**
     * 
     * @type {RestChangeConflictOurChange}
     * @memberof RestConflict
     */
    ourChange?: RestChangeConflictOurChange;
    /**
     * 
     * @type {RestChangeConflictOurChange}
     * @memberof RestConflict
     */
    theirChange?: RestChangeConflictOurChange;
}
/**
 * 
 * @export
 * @interface RestConflictChange
 */
export interface RestConflictChange {
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestConflictChange
     */
    path?: RestCommentAnchorPath;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestConflictChange
     */
    srcPath?: RestCommentAnchorPath;
    /**
     * 
     * @type {string}
     * @memberof RestConflictChange
     */
    type?: RestConflictChangeTypeEnum;
}


/**
 * @export
 */
export const RestConflictChangeTypeEnum = {
    Add: 'ADD',
    Copy: 'COPY',
    Delete: 'DELETE',
    Modify: 'MODIFY',
    Move: 'MOVE',
    Unknown: 'UNKNOWN'
} as const;
export type RestConflictChangeTypeEnum = typeof RestConflictChangeTypeEnum[keyof typeof RestConflictChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestConnectivitySummary
 */
export interface RestConnectivitySummary {
    /**
     * 
     * @type {string}
     * @memberof RestConnectivitySummary
     */
    errorMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestConnectivitySummary
     */
    reachable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestConnectivitySummary
     */
    roundTripTime?: number;
}
/**
 * 
 * @export
 * @interface RestCreateBranchRequest
 */
export interface RestCreateBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateBranchRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestCreateTagRequest
 */
export interface RestCreateTagRequest {
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateTagRequest
     */
    startPoint?: string;
}
/**
 * 
 * @export
 * @interface RestDefaultBranch
 */
export interface RestDefaultBranch {
    /**
     * 
     * @type {string}
     * @memberof RestDefaultBranch
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestDefaultReviewersRequest
 */
export interface RestDefaultReviewersRequest {
    /**
     * 
     * @type {number}
     * @memberof RestDefaultReviewersRequest
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof RestDefaultReviewersRequest
     */
    reviewerGroups?: Array<RestReviewerGroup>;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestDefaultReviewersRequest
     */
    reviewers?: Array<RestApplicationUser>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultReviewersRequest
     */
    sourceMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultReviewersRequest
     */
    targetMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestDefaultTask
 */
export interface RestDefaultTask {
    /**
     * 
     * @type {string}
     * @memberof RestDefaultTask
     */
    readonly description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDefaultTask
     */
    html?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDefaultTask
     */
    readonly id?: number;
}
/**
 * 
 * @export
 * @interface RestDefaultTaskRequest
 */
export interface RestDefaultTaskRequest {
    /**
     * 
     * @type {string}
     * @memberof RestDefaultTaskRequest
     */
    description?: string;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultTaskRequest
     */
    sourceMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestDefaultTaskRequest
     */
    targetMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestDelayedSyncRepository
 */
export interface RestDelayedSyncRepository {
    /**
     * 
     * @type {string}
     * @memberof RestDelayedSyncRepository
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDelayedSyncRepository
     */
    repositoryId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDelayedSyncRepository
     */
    repositorySlug?: string;
}
/**
 * 
 * @export
 * @interface RestDeployment
 */
export interface RestDeployment {
    /**
     * 
     * @type {number}
     * @memberof RestDeployment
     */
    deploymentSequenceNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    displayName?: string;
    /**
     * 
     * @type {RestDeploymentEnvironment}
     * @memberof RestDeployment
     */
    environment?: RestDeploymentEnvironment;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestDeployment
     */
    fromCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    key?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeployment
     */
    lastUpdated?: number;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestDeployment
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    state?: RestDeploymentStateEnum;
    /**
     * 
     * @type {RestChangesetFromCommit}
     * @memberof RestDeployment
     */
    toCommit?: RestChangesetFromCommit;
    /**
     * 
     * @type {string}
     * @memberof RestDeployment
     */
    url?: string;
}


/**
 * @export
 */
export const RestDeploymentStateEnum = {
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    RolledBack: 'ROLLED_BACK',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestDeploymentStateEnum = typeof RestDeploymentStateEnum[keyof typeof RestDeploymentStateEnum];

/**
 * 
 * @export
 * @interface RestDeploymentEnvironment
 */
export interface RestDeploymentEnvironment {
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentEnvironment
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestDeploymentSetRequest
 */
export interface RestDeploymentSetRequest {
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentSetRequest
     */
    deploymentSequenceNumber: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    displayName: string;
    /**
     * 
     * @type {RestDeploymentEnvironment}
     * @memberof RestDeploymentSetRequest
     */
    environment: RestDeploymentEnvironment;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof RestDeploymentSetRequest
     */
    lastUpdated?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    state: RestDeploymentSetRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestDeploymentSetRequest
     */
    url: string;
}


/**
 * @export
 */
export const RestDeploymentSetRequestStateEnum = {
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Cancelled: 'CANCELLED',
    Failed: 'FAILED',
    RolledBack: 'ROLLED_BACK',
    Successful: 'SUCCESSFUL',
    Unknown: 'UNKNOWN'
} as const;
export type RestDeploymentSetRequestStateEnum = typeof RestDeploymentSetRequestStateEnum[keyof typeof RestDeploymentSetRequestStateEnum];

/**
 * 
 * @export
 * @interface RestDetailedGroup
 */
export interface RestDetailedGroup {
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedGroup
     */
    deletable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedGroup
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestDetailedInvocation
 */
export interface RestDetailedInvocation {
    /**
     * 
     * @type {number}
     * @memberof RestDetailedInvocation
     */
    duration?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedInvocation
     */
    event?: string;
    /**
     * 
     * @type {RestDetailedInvocationEventScope}
     * @memberof RestDetailedInvocation
     */
    eventScope?: RestDetailedInvocationEventScope;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedInvocation
     */
    finish?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedInvocation
     */
    id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestDetailedInvocation
     */
    request?: object;
    /**
     * 
     * @type {object}
     * @memberof RestDetailedInvocation
     */
    result?: object;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedInvocation
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestDetailedInvocationEventScope
 */
export interface RestDetailedInvocationEventScope {
    /**
     * 
     * @type {string}
     * @memberof RestDetailedInvocationEventScope
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedInvocationEventScope
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestDetailedUser
 */
export interface RestDetailedUser {
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    avatarUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    deletable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    directoryName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedUser
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDetailedUser
     */
    lastAuthenticationTimestamp?: number;
    /**
     * 
     * @type {object}
     * @memberof RestDetailedUser
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    mutableDetails?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestDetailedUser
     */
    mutableGroups?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestDetailedUser
     */
    type?: RestDetailedUserTypeEnum;
}


/**
 * @export
 */
export const RestDetailedUserTypeEnum = {
    Normal: 'NORMAL',
    Service: 'SERVICE'
} as const;
export type RestDetailedUserTypeEnum = typeof RestDetailedUserTypeEnum[keyof typeof RestDetailedUserTypeEnum];

/**
 * 
 * @export
 * @interface RestDiff
 */
export interface RestDiff {
    /**
     * 
     * @type {boolean}
     * @memberof RestDiff
     */
    binary?: boolean;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestDiff
     */
    destination?: RestCommentAnchorPath;
    /**
     * 
     * @type {Array<RestDiffHunk>}
     * @memberof RestDiff
     */
    hunks?: Array<RestDiffHunk>;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestDiff
     */
    lineComments?: Array<RestComment>;
    /**
     * 
     * @type {object}
     * @memberof RestDiff
     */
    properties?: object;
    /**
     * 
     * @type {RestCommentAnchorPath}
     * @memberof RestDiff
     */
    source?: RestCommentAnchorPath;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiff
     */
    truncated?: boolean;
}
/**
 * 
 * @export
 * @interface RestDiffHunk
 */
export interface RestDiffHunk {
    /**
     * 
     * @type {string}
     * @memberof RestDiffHunk
     */
    context?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    destinationLine?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    destinationSpan?: number;
    /**
     * 
     * @type {Array<RestDiffSegment>}
     * @memberof RestDiffHunk
     */
    segments?: Array<RestDiffSegment>;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    sourceLine?: number;
    /**
     * 
     * @type {number}
     * @memberof RestDiffHunk
     */
    sourceSpan?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffHunk
     */
    truncated?: boolean;
}
/**
 * 
 * @export
 * @interface RestDiffLine
 */
export interface RestDiffLine {
    /**
     * 
     * @type {Array<number>}
     * @memberof RestDiffLine
     */
    commentIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof RestDiffLine
     */
    conflictMarker?: RestDiffLineConflictMarkerEnum;
    /**
     * 
     * @type {number}
     * @memberof RestDiffLine
     */
    destination?: number;
    /**
     * 
     * @type {string}
     * @memberof RestDiffLine
     */
    line?: string;
    /**
     * 
     * @type {number}
     * @memberof RestDiffLine
     */
    source?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffLine
     */
    truncated?: boolean;
}


/**
 * @export
 */
export const RestDiffLineConflictMarkerEnum = {
    Marker: 'MARKER',
    Ours: 'OURS',
    Theirs: 'THEIRS'
} as const;
export type RestDiffLineConflictMarkerEnum = typeof RestDiffLineConflictMarkerEnum[keyof typeof RestDiffLineConflictMarkerEnum];

/**
 * 
 * @export
 * @interface RestDiffSegment
 */
export interface RestDiffSegment {
    /**
     * 
     * @type {Array<RestDiffLine>}
     * @memberof RestDiffSegment
     */
    lines?: Array<RestDiffLine>;
    /**
     * 
     * @type {boolean}
     * @memberof RestDiffSegment
     */
    truncated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestDiffSegment
     */
    type?: RestDiffSegmentTypeEnum;
}


/**
 * @export
 */
export const RestDiffSegmentTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestDiffSegmentTypeEnum = typeof RestDiffSegmentTypeEnum[keyof typeof RestDiffSegmentTypeEnum];

/**
 * 
 * @export
 * @interface RestEmoticon
 */
export interface RestEmoticon {
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    shortcut?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEmoticon
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestEnhancedEntityLink
 */
export interface RestEnhancedEntityLink {
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    applicationLinkId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    displayUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof RestEnhancedEntityLink
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestEnhancedEntityLink
     */
    projectName?: string;
}
/**
 * 
 * @export
 * @interface RestErasedUser
 */
export interface RestErasedUser {
    /**
     * 
     * @type {string}
     * @memberof RestErasedUser
     */
    newIdentifier?: string;
}
/**
 * 
 * @export
 * @interface RestErrorMessage
 */
export interface RestErrorMessage {
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    exceptionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestErrorMessage
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface RestErrors
 */
export interface RestErrors {
    /**
     * 
     * @type {Array<RestErrorMessage>}
     * @memberof RestErrors
     */
    errors?: Array<RestErrorMessage>;
}
/**
 * 
 * @export
 * @interface RestExportRequest
 */
export interface RestExportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestExportRequest
     */
    exportLocation?: string;
    /**
     * 
     * @type {RestExportRequestRepositoriesRequest}
     * @memberof RestExportRequest
     */
    repositoriesRequest: RestExportRequestRepositoriesRequest;
}
/**
 * 
 * @export
 * @interface RestExportRequestRepositoriesRequest
 */
export interface RestExportRequestRepositoriesRequest {
    /**
     * 
     * @type {Set<RestRepositorySelector>}
     * @memberof RestExportRequestRepositoriesRequest
     */
    includes: Array<RestRepositorySelector>;
}
/**
 * 
 * @export
 * @interface RestFarmSynchronizationRequest
 */
export interface RestFarmSynchronizationRequest {
    /**
     * 
     * @type {number}
     * @memberof RestFarmSynchronizationRequest
     */
    attempt?: number;
    /**
     * 
     * @type {string}
     * @memberof RestFarmSynchronizationRequest
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof RestFarmSynchronizationRequest
     */
    externalRepoId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestFarmSynchronizationRequest
     */
    type?: RestFarmSynchronizationRequestTypeEnum;
}


/**
 * @export
 */
export const RestFarmSynchronizationRequestTypeEnum = {
    Incremental: 'incremental',
    Snapshot: 'snapshot'
} as const;
export type RestFarmSynchronizationRequestTypeEnum = typeof RestFarmSynchronizationRequestTypeEnum[keyof typeof RestFarmSynchronizationRequestTypeEnum];

/**
 * 
 * @export
 * @interface RestGitTagCreateRequest
 */
export interface RestGitTagCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestGitTagCreateRequest
     */
    force?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    startPoint?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGitTagCreateRequest
     */
    type?: RestGitTagCreateRequestTypeEnum;
}


/**
 * @export
 */
export const RestGitTagCreateRequestTypeEnum = {
    Annotated: 'ANNOTATED',
    Lightweight: 'LIGHTWEIGHT'
} as const;
export type RestGitTagCreateRequestTypeEnum = typeof RestGitTagCreateRequestTypeEnum[keyof typeof RestGitTagCreateRequestTypeEnum];

/**
 * 
 * @export
 * @interface RestGpgKey
 */
export interface RestGpgKey {
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly emailAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof RestGpgKey
     */
    readonly expiryDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly fingerprint?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    readonly id?: string;
    /**
     * 
     * @type {Array<RestGpgSubKey>}
     * @memberof RestGpgKey
     */
    readonly subKeys?: Array<RestGpgSubKey>;
    /**
     * 
     * @type {string}
     * @memberof RestGpgKey
     */
    text?: string;
}
/**
 * 
 * @export
 * @interface RestGpgSubKey
 */
export interface RestGpgSubKey {
    /**
     * 
     * @type {string}
     * @memberof RestGpgSubKey
     */
    expiryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestGpgSubKey
     */
    fingerprint?: string;
}
/**
 * 
 * @export
 * @interface RestHookScript
 */
export interface RestHookScript {
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScript
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    type?: RestHookScriptTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestHookScript
     */
    updatedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScript
     */
    version?: number;
}


/**
 * @export
 */
export const RestHookScriptTypeEnum = {
    Post: 'POST',
    Pre: 'PRE'
} as const;
export type RestHookScriptTypeEnum = typeof RestHookScriptTypeEnum[keyof typeof RestHookScriptTypeEnum];

/**
 * 
 * @export
 * @interface RestHookScriptConfig
 */
export interface RestHookScriptConfig {
    /**
     * 
     * @type {RestReviewerGroupScope}
     * @memberof RestHookScriptConfig
     */
    scope?: RestReviewerGroupScope;
    /**
     * 
     * @type {RestHookScriptConfigScript}
     * @memberof RestHookScriptConfig
     */
    script?: RestHookScriptConfigScript;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestHookScriptConfig
     */
    triggerIds?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestHookScriptConfigScript
 */
export interface RestHookScriptConfigScript {
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScriptConfigScript
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    pluginKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    type?: RestHookScriptConfigScriptTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestHookScriptConfigScript
     */
    updatedDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RestHookScriptConfigScript
     */
    version?: number;
}


/**
 * @export
 */
export const RestHookScriptConfigScriptTypeEnum = {
    Post: 'POST',
    Pre: 'PRE'
} as const;
export type RestHookScriptConfigScriptTypeEnum = typeof RestHookScriptConfigScriptTypeEnum[keyof typeof RestHookScriptConfigScriptTypeEnum];

/**
 * 
 * @export
 * @interface RestHookScriptTriggers
 */
export interface RestHookScriptTriggers {
    /**
     * 
     * @type {Set<string>}
     * @memberof RestHookScriptTriggers
     */
    triggerIds?: Array<string>;
}
/**
 * 
 * @export
 * @interface RestImportRequest
 */
export interface RestImportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestImportRequest
     */
    archivePath?: string;
}
/**
 * 
 * @export
 * @interface RestInsightAnnotation
 */
export interface RestInsightAnnotation {
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestInsightAnnotation
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    reportKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightAnnotation
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestInsightAnnotationsResponse
 */
export interface RestInsightAnnotationsResponse {
    /**
     * 
     * @type {Array<RestInsightAnnotation>}
     * @memberof RestInsightAnnotationsResponse
     */
    annotations?: Array<RestInsightAnnotation>;
}
/**
 * 
 * @export
 * @interface RestInsightReport
 */
export interface RestInsightReport {
    /**
     * 
     * @type {number}
     * @memberof RestInsightReport
     */
    createdDate?: number;
    /**
     * 
     * @type {Array<RestInsightReportData>}
     * @memberof RestInsightReport
     */
    data?: Array<RestInsightReportData>;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    reporter?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    result?: RestInsightReportResultEnum;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReport
     */
    title?: string;
}


/**
 * @export
 */
export const RestInsightReportResultEnum = {
    Fail: 'FAIL',
    Pass: 'PASS'
} as const;
export type RestInsightReportResultEnum = typeof RestInsightReportResultEnum[keyof typeof RestInsightReportResultEnum];

/**
 * 
 * @export
 * @interface RestInsightReportData
 */
export interface RestInsightReportData {
    /**
     * 
     * @type {string}
     * @memberof RestInsightReportData
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof RestInsightReportData
     */
    type?: string;
    /**
     * 
     * @type {object}
     * @memberof RestInsightReportData
     */
    value?: object;
}
/**
 * 
 * @export
 * @interface RestJiraIssue
 */
export interface RestJiraIssue {
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJiraIssue
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestJob
 */
export interface RestJob {
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    endDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    id?: number;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestJob
     */
    initiator?: RestCommentAnchorPullRequestAuthorUser;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    nodeId?: string;
    /**
     * 
     * @type {RestJobProgress}
     * @memberof RestJob
     */
    progress?: RestJobProgress;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    startDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    state?: RestJobStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestJob
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof RestJob
     */
    updatedDate?: number;
}


/**
 * @export
 */
export const RestJobStateEnum = {
    Initialising: 'INITIALISING',
    Ready: 'READY',
    Running: 'RUNNING',
    Finalising: 'FINALISING',
    Completed: 'COMPLETED',
    Failed: 'FAILED',
    Canceling: 'CANCELING',
    Canceled: 'CANCELED',
    TimedOut: 'TIMED_OUT',
    Aborted: 'ABORTED'
} as const;
export type RestJobStateEnum = typeof RestJobStateEnum[keyof typeof RestJobStateEnum];

/**
 * 
 * @export
 * @interface RestJobMessage
 */
export interface RestJobMessage {
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    severity?: RestJobMessageSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof RestJobMessage
     */
    text?: string;
}


/**
 * @export
 */
export const RestJobMessageSeverityEnum = {
    Info: 'INFO',
    Warn: 'WARN',
    Error: 'ERROR'
} as const;
export type RestJobMessageSeverityEnum = typeof RestJobMessageSeverityEnum[keyof typeof RestJobMessageSeverityEnum];

/**
 * 
 * @export
 * @interface RestJobProgress
 */
export interface RestJobProgress {
    /**
     * 
     * @type {string}
     * @memberof RestJobProgress
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RestJobProgress
     */
    percentage?: number;
}
/**
 * 
 * @export
 * @interface RestLabel
 */
export interface RestLabel {
    /**
     * 
     * @type {string}
     * @memberof RestLabel
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestLabelable
 */
export interface RestLabelable {
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    defaultBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestLabelable
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    labelableType?: RestLabelableLabelableTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof RestLabelable
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    name?: string;
    /**
     * 
     * @type {RestChangesetRepositoryOrigin}
     * @memberof RestLabelable
     */
    origin?: RestChangesetRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestLabelable
     */
    readonly partition?: number;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestLabelable
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {boolean}
     * @memberof RestLabelable
     */
    readonly public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestLabelable
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly state?: RestLabelableStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestLabelable
     */
    readonly statusMessage?: string;
}


/**
 * @export
 */
export const RestLabelableLabelableTypeEnum = {
    Repository: 'REPOSITORY'
} as const;
export type RestLabelableLabelableTypeEnum = typeof RestLabelableLabelableTypeEnum[keyof typeof RestLabelableLabelableTypeEnum];

/**
 * @export
 */
export const RestLabelableStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestLabelableStateEnum = typeof RestLabelableStateEnum[keyof typeof RestLabelableStateEnum];

/**
 * 
 * @export
 * @interface RestLogLevel
 */
export interface RestLogLevel {
    /**
     * 
     * @type {string}
     * @memberof RestLogLevel
     */
    logLevel?: string;
}
/**
 * 
 * @export
 * @interface RestLoggingSettings
 */
export interface RestLoggingSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestLoggingSettings
     */
    debugLoggingEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestLoggingSettings
     */
    profilingEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestMailConfiguration
 */
export interface RestMailConfiguration {
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    password?: string;
    /**
     * 
     * @type {number}
     * @memberof RestMailConfiguration
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    protocol?: RestMailConfigurationProtocolEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    requireStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    senderAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMailConfiguration
     */
    useStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMailConfiguration
     */
    username?: string;
}


/**
 * @export
 */
export const RestMailConfigurationProtocolEnum = {
    Smtp: 'SMTP',
    Smtps: 'SMTPS'
} as const;
export type RestMailConfigurationProtocolEnum = typeof RestMailConfigurationProtocolEnum[keyof typeof RestMailConfigurationProtocolEnum];

/**
 * 
 * @export
 * @interface RestMarkup
 */
export interface RestMarkup {
    /**
     * 
     * @type {string}
     * @memberof RestMarkup
     */
    html?: string;
}
/**
 * 
 * @export
 * @interface RestMeshConnectivityReport
 */
export interface RestMeshConnectivityReport {
    /**
     * 
     * @type {Array<RestNodeConnectivityReport>}
     * @memberof RestMeshConnectivityReport
     */
    reports?: Array<RestNodeConnectivityReport>;
}
/**
 * 
 * @export
 * @interface RestMeshMigrationRequest
 */
export interface RestMeshMigrationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestMeshMigrationRequest
     */
    all?: boolean;
    /**
     * 
     * @type {StartMeshMigrationRequestMaxBytesPerSecond}
     * @memberof RestMeshMigrationRequest
     */
    maxBytesPerSecond?: StartMeshMigrationRequestMaxBytesPerSecond;
    /**
     * 
     * @type {Set<number>}
     * @memberof RestMeshMigrationRequest
     */
    projectIds?: Array<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof RestMeshMigrationRequest
     */
    repositoryIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface RestMeshMigrationSummary
 */
export interface RestMeshMigrationSummary {
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    endTime?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    jobId?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    maxBandwidth?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    progress?: number;
    /**
     * 
     * @type {object}
     * @memberof RestMeshMigrationSummary
     */
    queue?: object;
    /**
     * 
     * @type {number}
     * @memberof RestMeshMigrationSummary
     */
    startTime?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMeshMigrationSummary
     */
    state?: string;
}
/**
 * 
 * @export
 * @interface RestMeshNode
 */
export interface RestMeshNode {
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    availabilityZone?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof RestMeshNode
     */
    lastSeenDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMeshNode
     */
    offline?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    rpcId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    rpcUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMeshNode
     */
    state?: RestMeshNodeStateEnum;
}


/**
 * @export
 */
export const RestMeshNodeStateEnum = {
    Available: 'AVAILABLE',
    Deleting: 'DELETING',
    Disabled: 'DISABLED',
    Draining: 'DRAINING',
    Offline: 'OFFLINE'
} as const;
export type RestMeshNodeStateEnum = typeof RestMeshNodeStateEnum[keyof typeof RestMeshNodeStateEnum];

/**
 * 
 * @export
 * @interface RestMigrationRepository
 */
export interface RestMigrationRepository {
    /**
     * 
     * @type {string}
     * @memberof RestMigrationRepository
     */
    migrationState?: RestMigrationRepositoryMigrationStateEnum;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestMigrationRepository
     */
    repository?: RestChangesetRepository;
}


/**
 * @export
 */
export const RestMigrationRepositoryMigrationStateEnum = {
    Queued: 'QUEUED',
    Staging: 'STAGING',
    Staged: 'STAGED',
    Migrated: 'MIGRATED',
    Failed: 'FAILED',
    Canceled: 'CANCELED',
    Skipped: 'SKIPPED'
} as const;
export type RestMigrationRepositoryMigrationStateEnum = typeof RestMigrationRepositoryMigrationStateEnum[keyof typeof RestMigrationRepositoryMigrationStateEnum];

/**
 * 
 * @export
 * @interface RestMinimalCommit
 */
export interface RestMinimalCommit {
    /**
     * 
     * @type {string}
     * @memberof RestMinimalCommit
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalCommit
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface RestMinimalRef
 */
export interface RestMinimalRef {
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMinimalRef
     */
    type?: RestMinimalRefTypeEnum;
}


/**
 * @export
 */
export const RestMinimalRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestMinimalRefTypeEnum = typeof RestMinimalRefTypeEnum[keyof typeof RestMinimalRefTypeEnum];

/**
 * 
 * @export
 * @interface RestMirrorHashes
 */
export interface RestMirrorHashes {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorHashes
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorHashes
     */
    metadata?: string;
}
/**
 * 
 * @export
 * @interface RestMirrorRepositorySynchronizationStatus
 */
export interface RestMirrorRepositorySynchronizationStatus {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    externalRepoId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    failedSyncCount?: number;
    /**
     * 
     * @type {RestMirrorRepositorySynchronizationStatusHashes}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    hashes?: RestMirrorRepositorySynchronizationStatusHashes;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    initialSyncDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    lastSyncDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    localProjectId?: number;
    /**
     * 
     * @type {number}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    localRepoId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatus
     */
    upstreamId?: string;
}
/**
 * 
 * @export
 * @interface RestMirrorRepositorySynchronizationStatusHashes
 */
export interface RestMirrorRepositorySynchronizationStatusHashes {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatusHashes
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorRepositorySynchronizationStatusHashes
     */
    metadata?: string;
}
/**
 * 
 * @export
 * @interface RestMirrorServer
 */
export interface RestMirrorServer {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMirrorServer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    lastSeenDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    mirrorType?: RestMirrorServerMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorServer
     */
    productVersion?: string;
}


/**
 * @export
 */
export const RestMirrorServerMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirrorServerMirrorTypeEnum = typeof RestMirrorServerMirrorTypeEnum[keyof typeof RestMirrorServerMirrorTypeEnum];

/**
 * 
 * @export
 * @interface RestMirrorUpgradeRequest
 */
export interface RestMirrorUpgradeRequest {
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirrorUpgradeRequest
     */
    productVersion?: string;
}
/**
 * 
 * @export
 * @interface RestMirroredRepository
 */
export interface RestMirroredRepository {
    /**
     * 
     * @type {boolean}
     * @memberof RestMirroredRepository
     */
    available?: boolean;
    /**
     * 
     * @type {Array<RestNamedLink>}
     * @memberof RestMirroredRepository
     */
    cloneUrls?: Array<RestNamedLink>;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    mirrorName?: string;
    /**
     * 
     * @type {Array<RestNamedLink>}
     * @memberof RestMirroredRepository
     */
    pushUrls?: Array<RestNamedLink>;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    repositoryId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepository
     */
    status?: RestMirroredRepositoryStatusEnum;
}


/**
 * @export
 */
export const RestMirroredRepositoryStatusEnum = {
    NotMirrored: 'NOT_MIRRORED',
    Initializing: 'INITIALIZING',
    Available: 'AVAILABLE',
    ErrorInitializing: 'ERROR_INITIALIZING',
    ErrorAvailable: 'ERROR_AVAILABLE'
} as const;
export type RestMirroredRepositoryStatusEnum = typeof RestMirroredRepositoryStatusEnum[keyof typeof RestMirroredRepositoryStatusEnum];

/**
 * 
 * @export
 * @interface RestMirroredRepositoryDescriptor
 */
export interface RestMirroredRepositoryDescriptor {
    /**
     * 
     * @type {object}
     * @memberof RestMirroredRepositoryDescriptor
     */
    links?: object;
    /**
     * 
     * @type {RestMirroredRepositoryDescriptorMirrorServer}
     * @memberof RestMirroredRepositoryDescriptor
     */
    mirrorServer?: RestMirroredRepositoryDescriptorMirrorServer;
}
/**
 * 
 * @export
 * @interface RestMirroredRepositoryDescriptorMirrorServer
 */
export interface RestMirroredRepositoryDescriptorMirrorServer {
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    lastSeenDate: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    mirrorType?: RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroredRepositoryDescriptorMirrorServer
     */
    productVersion?: string;
}


/**
 * @export
 */
export const RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum = typeof RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum[keyof typeof RestMirroredRepositoryDescriptorMirrorServerMirrorTypeEnum];

/**
 * 
 * @export
 * @interface RestMirroringRequest
 */
export interface RestMirroringRequest {
    /**
     * 
     * @type {number}
     * @memberof RestMirroringRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorBaseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorName?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    mirrorType?: RestMirroringRequestMirrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    productVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof RestMirroringRequest
     */
    state?: RestMirroringRequestStateEnum;
}


/**
 * @export
 */
export const RestMirroringRequestMirrorTypeEnum = {
    Single: 'SINGLE',
    Farm: 'FARM'
} as const;
export type RestMirroringRequestMirrorTypeEnum = typeof RestMirroringRequestMirrorTypeEnum[keyof typeof RestMirroringRequestMirrorTypeEnum];

/**
 * @export
 */
export const RestMirroringRequestStateEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED'
} as const;
export type RestMirroringRequestStateEnum = typeof RestMirroringRequestStateEnum[keyof typeof RestMirroringRequestStateEnum];

/**
 * 
 * @export
 * @interface RestMultilineCommentMarker
 */
export interface RestMultilineCommentMarker {
    /**
     * The line number where the multiline comment will begin
     * @type {number}
     * @memberof RestMultilineCommentMarker
     */
    startLine?: number;
    /**
     * The segment type of the start line of the multiline comment
     * @type {string}
     * @memberof RestMultilineCommentMarker
     */
    startLineType?: RestMultilineCommentMarkerStartLineTypeEnum;
}


/**
 * @export
 */
export const RestMultilineCommentMarkerStartLineTypeEnum = {
    Added: 'ADDED',
    Context: 'CONTEXT',
    Removed: 'REMOVED'
} as const;
export type RestMultilineCommentMarkerStartLineTypeEnum = typeof RestMultilineCommentMarkerStartLineTypeEnum[keyof typeof RestMultilineCommentMarkerStartLineTypeEnum];

/**
 * 
 * @export
 * @interface RestMultilineCommentSpan
 */
export interface RestMultilineCommentSpan {
    /**
     * The line number of the last line on the right-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestMultilineCommentSpan
     */
    readonly dstSpanEnd?: number;
    /**
     * The line number of the first line on the right-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestMultilineCommentSpan
     */
    readonly dstSpanStart?: number;
    /**
     * The line number of the last line on the left-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestMultilineCommentSpan
     */
    readonly srcSpanEnd?: number;
    /**
     * The line number of the first line on the left-hand side of the diff that the comment spans
     * @type {number}
     * @memberof RestMultilineCommentSpan
     */
    readonly srcSpanStart?: number;
}
/**
 * 
 * @export
 * @interface RestNamedLink
 */
export interface RestNamedLink {
    /**
     * 
     * @type {string}
     * @memberof RestNamedLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNamedLink
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestNode
 */
export interface RestNode {
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNode
     */
    type?: RestNodeTypeEnum;
}


/**
 * @export
 */
export const RestNodeTypeEnum = {
    Bitbucket: 'BITBUCKET',
    Mesh: 'MESH'
} as const;
export type RestNodeTypeEnum = typeof RestNodeTypeEnum[keyof typeof RestNodeTypeEnum];

/**
 * 
 * @export
 * @interface RestNodeConnectivityReport
 */
export interface RestNodeConnectivityReport {
    /**
     * 
     * @type {RestNodeConnectivityReportNode}
     * @memberof RestNodeConnectivityReport
     */
    node?: RestNodeConnectivityReportNode;
    /**
     * 
     * @type {Array<RestNodeConnectivitySummary>}
     * @memberof RestNodeConnectivityReport
     */
    summaries?: Array<RestNodeConnectivitySummary>;
}
/**
 * 
 * @export
 * @interface RestNodeConnectivityReportNode
 */
export interface RestNodeConnectivityReportNode {
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivityReportNode
     */
    type?: RestNodeConnectivityReportNodeTypeEnum;
}


/**
 * @export
 */
export const RestNodeConnectivityReportNodeTypeEnum = {
    Bitbucket: 'BITBUCKET',
    Mesh: 'MESH'
} as const;
export type RestNodeConnectivityReportNodeTypeEnum = typeof RestNodeConnectivityReportNodeTypeEnum[keyof typeof RestNodeConnectivityReportNodeTypeEnum];

/**
 * 
 * @export
 * @interface RestNodeConnectivitySummary
 */
export interface RestNodeConnectivitySummary {
    /**
     * 
     * @type {RestNodeConnectivityReportNode}
     * @memberof RestNodeConnectivitySummary
     */
    node?: RestNodeConnectivityReportNode;
    /**
     * 
     * @type {RestNodeConnectivitySummarySummary}
     * @memberof RestNodeConnectivitySummary
     */
    summary?: RestNodeConnectivitySummarySummary;
}
/**
 * 
 * @export
 * @interface RestNodeConnectivitySummarySummary
 */
export interface RestNodeConnectivitySummarySummary {
    /**
     * 
     * @type {string}
     * @memberof RestNodeConnectivitySummarySummary
     */
    errorMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestNodeConnectivitySummarySummary
     */
    reachable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestNodeConnectivitySummarySummary
     */
    roundTripTime?: number;
}
/**
 * 
 * @export
 * @interface RestPageIdpConfigEntity
 */
export interface RestPageIdpConfigEntity {
    /**
     * 
     * @type {boolean}
     * @memberof RestPageIdpConfigEntity
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPageIdpConfigEntity
     */
    limit?: number;
    /**
     * 
     * @type {Array<IdpConfigEntity>}
     * @memberof RestPageIdpConfigEntity
     */
    results?: Array<IdpConfigEntity>;
    /**
     * 
     * @type {number}
     * @memberof RestPageIdpConfigEntity
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageIdpConfigEntity
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageLoginOptionEntity
 */
export interface RestPageLoginOptionEntity {
    /**
     * 
     * @type {boolean}
     * @memberof RestPageLoginOptionEntity
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPageLoginOptionEntity
     */
    limit?: number;
    /**
     * 
     * @type {Array<LoginOptionEntity>}
     * @memberof RestPageLoginOptionEntity
     */
    results?: Array<LoginOptionEntity>;
    /**
     * 
     * @type {number}
     * @memberof RestPageLoginOptionEntity
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageLoginOptionEntity
     */
    start?: number;
}
/**
 * 
 * @export
 * @interface RestPageRestChange
 */
export interface RestPageRestChange {
    /**
     * 
     * @type {boolean}
     * @memberof RestPageRestChange
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPageRestChange
     */
    start?: number;
    /**
     * 
     * @type {object}
     * @memberof RestPageRestChange
     */
    values?: object;
}
/**
 * 
 * @export
 * @interface RestPath
 */
export interface RestPath {
    /**
     * 
     * @type {Array<string>}
     * @memberof RestPath
     */
    components?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    extension?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPath
     */
    parent?: string;
}
/**
 * 
 * @export
 * @interface RestPermitted
 */
export interface RestPermitted {
    /**
     * 
     * @type {boolean}
     * @memberof RestPermitted
     */
    permitted?: boolean;
}
/**
 * 
 * @export
 * @interface RestPermittedGroup
 */
export interface RestPermittedGroup {
    /**
     * 
     * @type {RestPermittedGroupGroup}
     * @memberof RestPermittedGroup
     */
    group?: RestPermittedGroupGroup;
    /**
     * 
     * @type {string}
     * @memberof RestPermittedGroup
     */
    permission?: string;
}
/**
 * 
 * @export
 * @interface RestPermittedGroupGroup
 */
export interface RestPermittedGroupGroup {
    /**
     * 
     * @type {string}
     * @memberof RestPermittedGroupGroup
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestPermittedUser
 */
export interface RestPermittedUser {
    /**
     * 
     * @type {string}
     * @memberof RestPermittedUser
     */
    permission?: RestPermittedUserPermissionEnum;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestPermittedUser
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}


/**
 * @export
 */
export const RestPermittedUserPermissionEnum = {
    UserAdmin: 'USER_ADMIN',
    ProjectView: 'PROJECT_VIEW',
    RepoRead: 'REPO_READ',
    RepoWrite: 'REPO_WRITE',
    RepoAdmin: 'REPO_ADMIN',
    ProjectRead: 'PROJECT_READ',
    ProjectWrite: 'PROJECT_WRITE',
    RepoCreate: 'REPO_CREATE',
    ProjectAdmin: 'PROJECT_ADMIN',
    LicensedUser: 'LICENSED_USER',
    ProjectCreate: 'PROJECT_CREATE',
    Admin: 'ADMIN',
    SysAdmin: 'SYS_ADMIN'
} as const;
export type RestPermittedUserPermissionEnum = typeof RestPermittedUserPermissionEnum[keyof typeof RestPermittedUserPermissionEnum];

/**
 * 
 * @export
 * @interface RestPerson
 */
export interface RestPerson {
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    emailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPerson
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface RestProgress
 */
export interface RestProgress {
    /**
     * 
     * @type {string}
     * @memberof RestProgress
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProgress
     */
    percentage?: number;
}
/**
 * 
 * @export
 * @interface RestProject
 */
export interface RestProject {
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestProject
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    key?: string;
    /**
     * 
     * @type {object}
     * @memberof RestProject
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestProject
     */
    readonly public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProject
     */
    readonly type?: RestProjectTypeEnum;
}


/**
 * @export
 */
export const RestProjectTypeEnum = {
    Normal: 'NORMAL',
    Personal: 'PERSONAL'
} as const;
export type RestProjectTypeEnum = typeof RestProjectTypeEnum[keyof typeof RestProjectTypeEnum];

/**
 * 
 * @export
 * @interface RestProjectSettingsRestriction
 */
export interface RestProjectSettingsRestriction {
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestriction
     */
    componentKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestriction
     */
    featureKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestriction
     */
    namespace?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestriction
     */
    processedState?: RestProjectSettingsRestrictionProcessedStateEnum;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestProjectSettingsRestriction
     */
    project?: RestChangesetRepositoryOriginProject;
}


/**
 * @export
 */
export const RestProjectSettingsRestrictionProcessedStateEnum = {
    Unprocessed: 'UNPROCESSED',
    Processed: 'PROCESSED',
    Failed: 'FAILED',
    InProgress: 'IN_PROGRESS'
} as const;
export type RestProjectSettingsRestrictionProcessedStateEnum = typeof RestProjectSettingsRestrictionProcessedStateEnum[keyof typeof RestProjectSettingsRestrictionProcessedStateEnum];

/**
 * 
 * @export
 * @interface RestProjectSettingsRestrictionRequest
 */
export interface RestProjectSettingsRestrictionRequest {
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestrictionRequest
     */
    componentKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestrictionRequest
     */
    featureKey: string;
    /**
     * 
     * @type {string}
     * @memberof RestProjectSettingsRestrictionRequest
     */
    namespace: string;
}
/**
 * 
 * @export
 * @interface RestProperties
 */
export interface RestProperties {
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    contentHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    defaultBranchId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestProperties
     */
    metadataHash?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequest
 */
export interface RestPullRequest {
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthor}
     * @memberof RestPullRequest
     */
    author?: RestCommentAnchorPullRequestAuthor;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    closedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    descriptionAsHtml?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    draft?: boolean;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestPullRequest
     */
    fromRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    htmlDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequest
     */
    links?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    locked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequest
     */
    open?: boolean;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestPullRequest
     */
    participants?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {Array<RestPullRequestParticipant>}
     * @memberof RestPullRequest
     */
    reviewers?: Array<RestPullRequestParticipant>;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    state?: RestPullRequestStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequest
     */
    title?: string;
    /**
     * 
     * @type {RestCommentAnchorPullRequestFromRef}
     * @memberof RestPullRequest
     */
    toRef?: RestCommentAnchorPullRequestFromRef;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequest
     */
    version?: number;
}


/**
 * @export
 */
export const RestPullRequestStateEnum = {
    Declined: 'DECLINED',
    Merged: 'MERGED',
    Open: 'OPEN'
} as const;
export type RestPullRequestStateEnum = typeof RestPullRequestStateEnum[keyof typeof RestPullRequestStateEnum];

/**
 * 
 * @export
 * @interface RestPullRequestActivity
 */
export interface RestPullRequestActivity {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestActivity
     */
    action?: RestPullRequestActivityActionEnum;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestActivity
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestActivity
     */
    id?: number;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestPullRequestActivity
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}


/**
 * @export
 */
export const RestPullRequestActivityActionEnum = {
    Approved: 'APPROVED',
    AutoMergeCancelled: 'AUTO_MERGE_CANCELLED',
    AutoMergeRequested: 'AUTO_MERGE_REQUESTED',
    Commented: 'COMMENTED',
    Declined: 'DECLINED',
    Deleted: 'DELETED',
    Merged: 'MERGED',
    Opened: 'OPENED',
    Reopened: 'REOPENED',
    Rescoped: 'RESCOPED',
    ReviewCommented: 'REVIEW_COMMENTED',
    ReviewDiscarded: 'REVIEW_DISCARDED',
    ReviewFinished: 'REVIEW_FINISHED',
    Reviewed: 'REVIEWED',
    Unapproved: 'UNAPPROVED',
    Updated: 'UPDATED'
} as const;
export type RestPullRequestActivityActionEnum = typeof RestPullRequestActivityActionEnum[keyof typeof RestPullRequestActivityActionEnum];

/**
 * 
 * @export
 * @interface RestPullRequestAssignParticipantRoleRequest
 */
export interface RestPullRequestAssignParticipantRoleRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestAssignParticipantRoleRequest
     */
    role?: RestPullRequestAssignParticipantRoleRequestRoleEnum;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestPullRequestAssignParticipantRoleRequest
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}


/**
 * @export
 */
export const RestPullRequestAssignParticipantRoleRequestRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type RestPullRequestAssignParticipantRoleRequestRoleEnum = typeof RestPullRequestAssignParticipantRoleRequestRoleEnum[keyof typeof RestPullRequestAssignParticipantRoleRequestRoleEnum];

/**
 * 
 * @export
 * @interface RestPullRequestAssignStatusRequest
 */
export interface RestPullRequestAssignStatusRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestAssignStatusRequest
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestAssignStatusRequest
     */
    status?: RestPullRequestAssignStatusRequestStatusEnum;
}


/**
 * @export
 */
export const RestPullRequestAssignStatusRequestStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type RestPullRequestAssignStatusRequestStatusEnum = typeof RestPullRequestAssignStatusRequestStatusEnum[keyof typeof RestPullRequestAssignStatusRequestStatusEnum];

/**
 * 
 * @export
 * @interface RestPullRequestCommitMessageTemplate
 */
export interface RestPullRequestCommitMessageTemplate {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestCommitMessageTemplate
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestCommitMessageTemplate
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestCondition
 */
export interface RestPullRequestCondition {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestCondition
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestCondition
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof RestPullRequestCondition
     */
    reviewerGroups?: Array<RestReviewerGroup>;
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof RestPullRequestCondition
     */
    reviewers?: Array<RestReviewerGroup>;
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestPullRequestCondition
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestPullRequestCondition
     */
    sourceRefMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestPullRequestCondition
     */
    targetRefMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestPullRequestConditionScope
 */
export interface RestPullRequestConditionScope {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestConditionScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestConditionScope
     */
    type?: RestPullRequestConditionScopeTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestConditionScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestPullRequestConditionScopeTypeEnum = typeof RestPullRequestConditionScopeTypeEnum[keyof typeof RestPullRequestConditionScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestDeclineRequest
 */
export interface RestPullRequestDeclineRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestDeclineRequest
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestDeclineRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestDeleteRequest
 */
export interface RestPullRequestDeleteRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestDeleteRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestFinishReviewRequest
 */
export interface RestPullRequestFinishReviewRequest {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestFinishReviewRequest
     */
    commentText?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestFinishReviewRequest
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestFinishReviewRequest
     */
    participantStatus?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeConfig
 */
export interface RestPullRequestMergeConfig {
    /**
     * 
     * @type {RestPullRequestMergeConfigCommitMessageTemplate}
     * @memberof RestPullRequestMergeConfig
     */
    commitMessageTemplate?: RestPullRequestMergeConfigCommitMessageTemplate;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestMergeConfig
     */
    commitSummaries?: number;
    /**
     * 
     * @type {RestPullRequestMergeConfigDefaultStrategy}
     * @memberof RestPullRequestMergeConfig
     */
    defaultStrategy?: RestPullRequestMergeConfigDefaultStrategy;
    /**
     * 
     * @type {Array<RestPullRequestMergeStrategy>}
     * @memberof RestPullRequestMergeConfig
     */
    strategies?: Array<RestPullRequestMergeStrategy>;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfig
     */
    readonly type?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeConfigCommitMessageTemplate
 */
export interface RestPullRequestMergeConfigCommitMessageTemplate {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigCommitMessageTemplate
     */
    body?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigCommitMessageTemplate
     */
    title?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeConfigDefaultStrategy
 */
export interface RestPullRequestMergeConfigDefaultStrategy {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly flag?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    id?: string;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeConfigDefaultStrategy
     */
    readonly name?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeRequest
 */
export interface RestPullRequestMergeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeRequest
     */
    autoMerge?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    autoSubject?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeRequest
     */
    strategyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestMergeRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeStrategy
 */
export interface RestPullRequestMergeStrategy {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly flag?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    id?: string;
    /**
     * 
     * @type {object}
     * @memberof RestPullRequestMergeStrategy
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeStrategy
     */
    readonly name?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestMergeability
 */
export interface RestPullRequestMergeability {
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestMergeability
     */
    conflicted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestMergeability
     */
    outcome?: RestPullRequestMergeabilityOutcomeEnum;
    /**
     * 
     * @type {Array<RestRepositoryHookVeto>}
     * @memberof RestPullRequestMergeability
     */
    vetoes?: Array<RestRepositoryHookVeto>;
}


/**
 * @export
 */
export const RestPullRequestMergeabilityOutcomeEnum = {
    Clean: 'CLEAN',
    Conflicted: 'CONFLICTED',
    Unknown: 'UNKNOWN'
} as const;
export type RestPullRequestMergeabilityOutcomeEnum = typeof RestPullRequestMergeabilityOutcomeEnum[keyof typeof RestPullRequestMergeabilityOutcomeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestParticipant
 */
export interface RestPullRequestParticipant {
    /**
     * 
     * @type {boolean}
     * @memberof RestPullRequestParticipant
     */
    approved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    lastReviewedCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    role?: RestPullRequestParticipantRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestParticipant
     */
    status?: RestPullRequestParticipantStatusEnum;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestPullRequestParticipant
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}


/**
 * @export
 */
export const RestPullRequestParticipantRoleEnum = {
    Author: 'AUTHOR',
    Reviewer: 'REVIEWER',
    Participant: 'PARTICIPANT'
} as const;
export type RestPullRequestParticipantRoleEnum = typeof RestPullRequestParticipantRoleEnum[keyof typeof RestPullRequestParticipantRoleEnum];

/**
 * @export
 */
export const RestPullRequestParticipantStatusEnum = {
    Unapproved: 'UNAPPROVED',
    NeedsWork: 'NEEDS_WORK',
    Approved: 'APPROVED'
} as const;
export type RestPullRequestParticipantStatusEnum = typeof RestPullRequestParticipantStatusEnum[keyof typeof RestPullRequestParticipantStatusEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseRequest
 */
export interface RestPullRequestRebaseRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestRebaseRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestRebaseResult
 */
export interface RestPullRequestRebaseResult {
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChange}
     * @memberof RestPullRequestRebaseResult
     */
    refChange?: RestPullRequestRebaseResultRefChange;
}
/**
 * 
 * @export
 * @interface RestPullRequestRebaseResultRefChange
 */
export interface RestPullRequestRebaseResultRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChange
     */
    type?: RestPullRequestRebaseResultRefChangeTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestRebaseResultRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestPullRequestRebaseResultRefChangeTypeEnum = typeof RestPullRequestRebaseResultRefChangeTypeEnum[keyof typeof RestPullRequestRebaseResultRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseResultRefChangeRef
 */
export interface RestPullRequestRebaseResultRefChangeRef {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRebaseResultRefChangeRef
     */
    type?: RestPullRequestRebaseResultRefChangeRefTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestRebaseResultRefChangeRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestPullRequestRebaseResultRefChangeRefTypeEnum = typeof RestPullRequestRebaseResultRefChangeRefTypeEnum[keyof typeof RestPullRequestRebaseResultRefChangeRefTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestRebaseability
 */
export interface RestPullRequestRebaseability {
    /**
     * 
     * @type {Array<RestRepositoryHookVeto>}
     * @memberof RestPullRequestRebaseability
     */
    vetoes?: Array<RestRepositoryHookVeto>;
}
/**
 * 
 * @export
 * @interface RestPullRequestRef
 */
export interface RestPullRequestRef {
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    latestCommit?: string;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestPullRequestRef
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestRef
     */
    type?: RestPullRequestRefTypeEnum;
}


/**
 * @export
 */
export const RestPullRequestRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestPullRequestRefTypeEnum = typeof RestPullRequestRefTypeEnum[keyof typeof RestPullRequestRefTypeEnum];

/**
 * 
 * @export
 * @interface RestPullRequestReopenRequest
 */
export interface RestPullRequestReopenRequest {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestReopenRequest
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestPullRequestSettings
 */
export interface RestPullRequestSettings {
    /**
     * 
     * @type {RestPullRequestSettingsMergeConfig}
     * @memberof RestPullRequestSettings
     */
    mergeConfig?: RestPullRequestSettingsMergeConfig;
}
/**
 * 
 * @export
 * @interface RestPullRequestSettingsMergeConfig
 */
export interface RestPullRequestSettingsMergeConfig {
    /**
     * 
     * @type {RestPullRequestMergeConfigCommitMessageTemplate}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    commitMessageTemplate?: RestPullRequestMergeConfigCommitMessageTemplate;
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    commitSummaries?: number;
    /**
     * 
     * @type {RestPullRequestMergeConfigDefaultStrategy}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    defaultStrategy?: RestPullRequestMergeConfigDefaultStrategy;
    /**
     * 
     * @type {Array<RestPullRequestMergeStrategy>}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    strategies?: Array<RestPullRequestMergeStrategy>;
    /**
     * 
     * @type {string}
     * @memberof RestPullRequestSettingsMergeConfig
     */
    readonly type?: string;
}
/**
 * 
 * @export
 * @interface RestPullRequestSuggestion
 */
export interface RestPullRequestSuggestion {
    /**
     * 
     * @type {number}
     * @memberof RestPullRequestSuggestion
     */
    changeTme?: number;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestSuggestion
     */
    fromRef?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChange}
     * @memberof RestPullRequestSuggestion
     */
    refChange?: RestPullRequestRebaseResultRefChange;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestPullRequestSuggestion
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPullRequestSuggestion
     */
    toRef?: RestPullRequestRebaseResultRefChangeRef;
}
/**
 * 
 * @export
 * @interface RestPushRefChange
 */
export interface RestPushRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestPushRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    type?: RestPushRefChangeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestPushRefChange
     */
    updatedType?: RestPushRefChangeUpdatedTypeEnum;
}


/**
 * @export
 */
export const RestPushRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestPushRefChangeTypeEnum = typeof RestPushRefChangeTypeEnum[keyof typeof RestPushRefChangeTypeEnum];

/**
 * @export
 */
export const RestPushRefChangeUpdatedTypeEnum = {
    Unknown: 'UNKNOWN',
    Unresolved: 'UNRESOLVED',
    NotForced: 'NOT_FORCED',
    Forced: 'FORCED'
} as const;
export type RestPushRefChangeUpdatedTypeEnum = typeof RestPushRefChangeUpdatedTypeEnum[keyof typeof RestPushRefChangeUpdatedTypeEnum];

/**
 * 
 * @export
 * @interface RestRateLimitSettings
 */
export interface RestRateLimitSettings {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestRateLimitSettings
     */
    defaultSettings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {boolean}
     * @memberof RestRateLimitSettings
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestRawAccessToken
 */
export interface RestRawAccessToken {
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRawAccessToken
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface RestRefChange
 */
export interface RestRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefChange
     */
    type?: RestRefChangeTypeEnum;
}


/**
 * @export
 */
export const RestRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestRefChangeTypeEnum = typeof RestRefChangeTypeEnum[keyof typeof RestRefChangeTypeEnum];

/**
 * 
 * @export
 * @interface RestRefMatcher
 */
export interface RestRefMatcher {
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcher
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcher
     */
    id?: string;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcherType}
     * @memberof RestRefMatcher
     */
    type?: UpdatePullRequestCondition1RequestSourceMatcherType;
}
/**
 * 
 * @export
 * @interface RestRefMatcherType
 */
export interface RestRefMatcherType {
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcherType
     */
    id?: RestRefMatcherTypeIdEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRefMatcherType
     */
    name?: string;
}


/**
 * @export
 */
export const RestRefMatcherTypeIdEnum = {
    AnyRef: 'ANY_REF',
    Branch: 'BRANCH',
    Pattern: 'PATTERN',
    ModelCategory: 'MODEL_CATEGORY',
    ModelBranch: 'MODEL_BRANCH'
} as const;
export type RestRefMatcherTypeIdEnum = typeof RestRefMatcherTypeIdEnum[keyof typeof RestRefMatcherTypeIdEnum];

/**
 * 
 * @export
 * @interface RestRefRestriction
 */
export interface RestRefRestriction {
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof RestRefRestriction
     */
    accessKeys?: Array<RestSshAccessKey>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRefRestriction
     */
    groups?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RestRefRestriction
     */
    readonly id?: number;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRefRestriction
     */
    matcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestRefRestriction
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {string}
     * @memberof RestRefRestriction
     */
    type?: string;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestRefRestriction
     */
    users?: Array<RestApplicationUser>;
}
/**
 * 
 * @export
 * @interface RestRefSyncQueue
 */
export interface RestRefSyncQueue {
    /**
     * 
     * @type {Array<RestFarmSynchronizationRequest>}
     * @memberof RestRefSyncQueue
     */
    values?: Array<RestFarmSynchronizationRequest>;
}
/**
 * 
 * @export
 * @interface RestRefSyncRequest
 */
export interface RestRefSyncRequest {
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncRequest
     */
    action?: RestRefSyncRequestActionEnum;
    /**
     * 
     * @type {Context}
     * @memberof RestRefSyncRequest
     */
    context?: Context;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncRequest
     */
    refId?: string;
}


/**
 * @export
 */
export const RestRefSyncRequestActionEnum = {
    Discard: 'DISCARD',
    Merge: 'MERGE',
    Rebase: 'REBASE'
} as const;
export type RestRefSyncRequestActionEnum = typeof RestRefSyncRequestActionEnum[keyof typeof RestRefSyncRequestActionEnum];

/**
 * 
 * @export
 * @interface RestRefSyncStatus
 */
export interface RestRefSyncStatus {
    /**
     * 
     * @type {RestRefSyncStatusAheadRefs}
     * @memberof RestRefSyncStatus
     */
    aheadRefs?: RestRefSyncStatusAheadRefs;
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatus
     */
    readonly available?: boolean;
    /**
     * 
     * @type {RestRefSyncStatusAheadRefs}
     * @memberof RestRefSyncStatus
     */
    divergedRefs?: RestRefSyncStatusAheadRefs;
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatus
     */
    enabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestRefSyncStatus
     */
    readonly lastSync?: number;
    /**
     * 
     * @type {RestRefSyncStatusAheadRefs}
     * @memberof RestRefSyncStatus
     */
    orphanedRefs?: RestRefSyncStatusAheadRefs;
}
/**
 * 
 * @export
 * @interface RestRefSyncStatusAheadRefs
 */
export interface RestRefSyncStatusAheadRefs {
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusAheadRefs
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusAheadRefs
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusAheadRefs
     */
    state?: RestRefSyncStatusAheadRefsStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestRefSyncStatusAheadRefs
     */
    tag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRefSyncStatusAheadRefs
     */
    type?: RestRefSyncStatusAheadRefsTypeEnum;
}


/**
 * @export
 */
export const RestRefSyncStatusAheadRefsStateEnum = {
    Ahead: 'AHEAD',
    Diverged: 'DIVERGED',
    Orphaned: 'ORPHANED'
} as const;
export type RestRefSyncStatusAheadRefsStateEnum = typeof RestRefSyncStatusAheadRefsStateEnum[keyof typeof RestRefSyncStatusAheadRefsStateEnum];

/**
 * @export
 */
export const RestRefSyncStatusAheadRefsTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestRefSyncStatusAheadRefsTypeEnum = typeof RestRefSyncStatusAheadRefsTypeEnum[keyof typeof RestRefSyncStatusAheadRefsTypeEnum];

/**
 * 
 * @export
 * @interface RestRejectedRef
 */
export interface RestRejectedRef {
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    state?: RestRejectedRefStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RestRejectedRef
     */
    tag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRejectedRef
     */
    type?: RestRejectedRefTypeEnum;
}


/**
 * @export
 */
export const RestRejectedRefStateEnum = {
    Ahead: 'AHEAD',
    Diverged: 'DIVERGED',
    Orphaned: 'ORPHANED'
} as const;
export type RestRejectedRefStateEnum = typeof RestRejectedRefStateEnum[keyof typeof RestRejectedRefStateEnum];

/**
 * @export
 */
export const RestRejectedRefTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestRejectedRefTypeEnum = typeof RestRejectedRefTypeEnum[keyof typeof RestRejectedRefTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositoriesExportRequest
 */
export interface RestRepositoriesExportRequest {
    /**
     * 
     * @type {Set<RestRepositorySelector>}
     * @memberof RestRepositoriesExportRequest
     */
    includes: Array<RestRepositorySelector>;
}
/**
 * 
 * @export
 * @interface RestRepository
 */
export interface RestRepository {
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    defaultBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly forkable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly hierarchyId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestRepository
     */
    readonly id?: number;
    /**
     * 
     * @type {object}
     * @memberof RestRepository
     */
    links?: object;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    name?: string;
    /**
     * 
     * @type {RestChangesetRepositoryOrigin}
     * @memberof RestRepository
     */
    origin?: RestChangesetRepositoryOrigin;
    /**
     * 
     * @type {number}
     * @memberof RestRepository
     */
    readonly partition?: number;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestRepository
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepository
     */
    readonly public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestRepository
     */
    readonly relatedLinks?: object;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    scmId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly scope?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly state?: RestRepositoryStateEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRepository
     */
    readonly statusMessage?: string;
}


/**
 * @export
 */
export const RestRepositoryStateEnum = {
    Available: 'AVAILABLE',
    InitialisationFailed: 'INITIALISATION_FAILED',
    Initialising: 'INITIALISING',
    Offline: 'OFFLINE'
} as const;
export type RestRepositoryStateEnum = typeof RestRepositoryStateEnum[keyof typeof RestRepositoryStateEnum];

/**
 * 
 * @export
 * @interface RestRepositoryHook
 */
export interface RestRepositoryHook {
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryHook
     */
    configured?: boolean;
    /**
     * 
     * @type {RepositoryHookDetails}
     * @memberof RestRepositoryHook
     */
    details?: RepositoryHookDetails;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryHook
     */
    enabled?: boolean;
    /**
     * 
     * @type {RestReviewerGroupScope}
     * @memberof RestRepositoryHook
     */
    scope?: RestReviewerGroupScope;
}
/**
 * 
 * @export
 * @interface RestRepositoryHookVeto
 */
export interface RestRepositoryHookVeto {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryHookVeto
     */
    detailedMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryHookVeto
     */
    summaryMessage?: string;
}
/**
 * 
 * @export
 * @interface RestRepositoryLockOwner
 */
export interface RestRepositoryLockOwner {
    /**
     * The repository ID for which the lock is held
     * @type {string}
     * @memberof RestRepositoryLockOwner
     */
    externalRepositoryId?: string;
    /**
     * The time at which lock was last acquired
     * @type {string}
     * @memberof RestRepositoryLockOwner
     */
    lockAcquireTime?: string;
    /**
     * The ID of the mirror node on which the lock is being held
     * @type {string}
     * @memberof RestRepositoryLockOwner
     */
    nodeId?: string;
    /**
     * The unique ID of the request for which the lock is being held
     * @type {string}
     * @memberof RestRepositoryLockOwner
     */
    requestId?: string;
    /**
     * Name of the thread that is holding the lock
     * @type {string}
     * @memberof RestRepositoryLockOwner
     */
    threadName?: string;
}
/**
 * 
 * @export
 * @interface RestRepositoryMirrorEvent
 */
export interface RestRepositoryMirrorEvent {
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryMirrorEvent
     */
    mirrorRepoId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMirrorEvent
     */
    type?: RestRepositoryMirrorEventTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryMirrorEvent
     */
    upstreamRepoId?: string;
}


/**
 * @export
 */
export const RestRepositoryMirrorEventTypeEnum = {
    Synchronized: 'SYNCHRONIZED',
    SynchronizationFailed: 'SYNCHRONIZATION_FAILED'
} as const;
export type RestRepositoryMirrorEventTypeEnum = typeof RestRepositoryMirrorEventTypeEnum[keyof typeof RestRepositoryMirrorEventTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositoryPolicy
 */
export interface RestRepositoryPolicy {
    /**
     * The permission required to delete repositories. Must be one of: "SYS_ADMIN", "ADMIN", "PROJECT_ADMIN", "REPO_ADMIN".
     * @type {string}
     * @memberof RestRepositoryPolicy
     */
    permission?: RestRepositoryPolicyPermissionEnum;
}


/**
 * @export
 */
export const RestRepositoryPolicyPermissionEnum = {
    SysAdmin: 'SYS_ADMIN',
    Admin: 'ADMIN',
    ProjectAdmin: 'PROJECT_ADMIN',
    RepoAdmin: 'REPO_ADMIN'
} as const;
export type RestRepositoryPolicyPermissionEnum = typeof RestRepositoryPolicyPermissionEnum[keyof typeof RestRepositoryPolicyPermissionEnum];

/**
 * 
 * @export
 * @interface RestRepositoryPullRequestSettings
 */
export interface RestRepositoryPullRequestSettings {
    /**
     * 
     * @type {RestPullRequestSettingsMergeConfig}
     * @memberof RestRepositoryPullRequestSettings
     */
    mergeConfig?: RestPullRequestSettingsMergeConfig;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredAllApprovers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredAllTasksComplete?: boolean;
    /**
     * 
     * @type {RestRepositoryPullRequestSettingsRequiredApprovers}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredApprovers?: RestRepositoryPullRequestSettingsRequiredApprovers;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredApproversDeprecated?: number;
    /**
     * 
     * @type {RestRepositoryPullRequestSettingsRequiredApprovers}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredSuccessfulBuilds?: RestRepositoryPullRequestSettingsRequiredApprovers;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryPullRequestSettings
     */
    requiredSuccessfulBuildsDeprecated?: number;
}
/**
 * 
 * @export
 * @interface RestRepositoryPullRequestSettingsRequiredApprovers
 */
export interface RestRepositoryPullRequestSettingsRequiredApprovers {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryPullRequestSettingsRequiredApprovers
     */
    count?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestRepositoryPullRequestSettingsRequiredApprovers
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestRepositoryRefChangeActivity
 */
export interface RestRepositoryRefChangeActivity {
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryRefChangeActivity
     */
    createdDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestRepositoryRefChangeActivity
     */
    id?: number;
    /**
     * 
     * @type {RestRepositoryRefChangeActivityRefChange}
     * @memberof RestRepositoryRefChangeActivity
     */
    refChange?: RestRepositoryRefChangeActivityRefChange;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestRepositoryRefChangeActivity
     */
    repository?: RestChangesetRepository;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivity
     */
    trigger?: string;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestRepositoryRefChangeActivity
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}
/**
 * 
 * @export
 * @interface RestRepositoryRefChangeActivityRefChange
 */
export interface RestRepositoryRefChangeActivityRefChange {
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    fromHash?: string;
    /**
     * 
     * @type {RestPullRequestRebaseResultRefChangeRef}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    ref?: RestPullRequestRebaseResultRefChangeRef;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    refId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    toHash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    type?: RestRepositoryRefChangeActivityRefChangeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RestRepositoryRefChangeActivityRefChange
     */
    updatedType?: RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum;
}


/**
 * @export
 */
export const RestRepositoryRefChangeActivityRefChangeTypeEnum = {
    Add: 'ADD',
    Delete: 'DELETE',
    Update: 'UPDATE'
} as const;
export type RestRepositoryRefChangeActivityRefChangeTypeEnum = typeof RestRepositoryRefChangeActivityRefChangeTypeEnum[keyof typeof RestRepositoryRefChangeActivityRefChangeTypeEnum];

/**
 * @export
 */
export const RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum = {
    Unknown: 'UNKNOWN',
    Unresolved: 'UNRESOLVED',
    NotForced: 'NOT_FORCED',
    Forced: 'FORCED'
} as const;
export type RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum = typeof RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum[keyof typeof RestRepositoryRefChangeActivityRefChangeUpdatedTypeEnum];

/**
 * 
 * @export
 * @interface RestRepositorySelector
 */
export interface RestRepositorySelector {
    /**
     * 
     * @type {string}
     * @memberof RestRepositorySelector
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof RestRepositorySelector
     */
    slug?: string;
}
/**
 * 
 * @export
 * @interface RestRequiredBuildCondition
 */
export interface RestRequiredBuildCondition {
    /**
     * A non-empty list of build parent keys that require green builds for this merge check to pass
     * @type {Array<string>}
     * @memberof RestRequiredBuildCondition
     */
    buildParentKeys?: Array<string>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRequiredBuildCondition
     */
    exemptRefMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {number}
     * @memberof RestRequiredBuildCondition
     */
    id?: number;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRequiredBuildCondition
     */
    refMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface RestRequiredBuildConditionSetRequest
 */
export interface RestRequiredBuildConditionSetRequest {
    /**
     * A non-empty list of build parent keys that require green builds for this merge check to pass
     * @type {Array<string>}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    buildParentKeys: Array<string>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    exemptRefMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {RestRefMatcher}
     * @memberof RestRequiredBuildConditionSetRequest
     */
    refMatcher: RestRefMatcher;
}
/**
 * 
 * @export
 * @interface RestRestrictionRequest
 */
export interface RestRestrictionRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof RestRestrictionRequest
     */
    accessKeyIds?: Array<number>;
    /**
     * 
     * @type {Array<RestSshAccessKey>}
     * @memberof RestRestrictionRequest
     */
    accessKeys?: Array<RestSshAccessKey>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    groupNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    groups?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof RestRestrictionRequest
     */
    readonly id?: number;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof RestRestrictionRequest
     */
    matcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {RestPullRequestConditionScope}
     * @memberof RestRestrictionRequest
     */
    scope?: RestPullRequestConditionScope;
    /**
     * 
     * @type {string}
     * @memberof RestRestrictionRequest
     */
    type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RestRestrictionRequest
     */
    userSlugs?: Array<string>;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof RestRestrictionRequest
     */
    users?: Array<RestApplicationUser>;
}
/**
 * 
 * @export
 * @interface RestReviewerGroup
 */
export interface RestReviewerGroup {
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof RestReviewerGroup
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroup
     */
    name?: string;
    /**
     * 
     * @type {RestReviewerGroupScope}
     * @memberof RestReviewerGroup
     */
    scope?: RestReviewerGroupScope;
    /**
     * 
     * @type {Array<ApplicationUser>}
     * @memberof RestReviewerGroup
     */
    users?: Array<ApplicationUser>;
}
/**
 * 
 * @export
 * @interface RestReviewerGroupScope
 */
export interface RestReviewerGroupScope {
    /**
     * 
     * @type {number}
     * @memberof RestReviewerGroupScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestReviewerGroupScope
     */
    type?: RestReviewerGroupScopeTypeEnum;
}


/**
 * @export
 */
export const RestReviewerGroupScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestReviewerGroupScopeTypeEnum = typeof RestReviewerGroupScopeTypeEnum[keyof typeof RestReviewerGroupScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestRollingUpgradeState
 */
export interface RestRollingUpgradeState {
    /**
     * 
     * @type {boolean}
     * @memberof RestRollingUpgradeState
     */
    rollingUpgradeEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestRollingUpgradeState
     */
    version?: string;
}
/**
 * 
 * @export
 * @interface RestScope
 */
export interface RestScope {
    /**
     * 
     * @type {number}
     * @memberof RestScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestScope
     */
    type?: RestScopeTypeEnum;
}


/**
 * @export
 */
export const RestScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestScopeTypeEnum = typeof RestScopeTypeEnum[keyof typeof RestScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestScopesExample
 */
export interface RestScopesExample {
    /**
     * 
     * @type {object}
     * @memberof RestScopesExample
     */
    links?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof RestScopesExample
     */
    scopes?: Array<object>;
}
/**
 * 
 * @export
 * @interface RestSecretScanningAllowlistRule
 */
export interface RestSecretScanningAllowlistRule {
    /**
     * The ID of the rule
     * @type {number}
     * @memberof RestSecretScanningAllowlistRule
     */
    id?: number;
    /**
     * If present, regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    name?: string;
    /**
     * If present, regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningAllowlistRule
     */
    pathRegex?: string;
}
/**
 * 
 * @export
 * @interface RestSecretScanningAllowlistRuleSetRequest
 */
export interface RestSecretScanningAllowlistRuleSetRequest {
    /**
     * Regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    name?: string;
    /**
     * Regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningAllowlistRuleSetRequest
     */
    pathRegex?: string;
}
/**
 * 
 * @export
 * @interface RestSecretScanningRule
 */
export interface RestSecretScanningRule {
    /**
     * The ID of the rule
     * @type {number}
     * @memberof RestSecretScanningRule
     */
    id?: number;
    /**
     * If present, regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    name?: string;
    /**
     * If present, regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningRule
     */
    pathRegex?: string;
    /**
     * 
     * @type {RestSecretScanningRuleScope}
     * @memberof RestSecretScanningRule
     */
    scope?: RestSecretScanningRuleScope;
}
/**
 * The scope in which this rule was configured for.
 * @export
 * @interface RestSecretScanningRuleScope
 */
export interface RestSecretScanningRuleScope {
    /**
     * 
     * @type {number}
     * @memberof RestSecretScanningRuleScope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSecretScanningRuleScope
     */
    type?: RestSecretScanningRuleScopeTypeEnum;
}


/**
 * @export
 */
export const RestSecretScanningRuleScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type RestSecretScanningRuleScopeTypeEnum = typeof RestSecretScanningRuleScopeTypeEnum[keyof typeof RestSecretScanningRuleScopeTypeEnum];

/**
 * 
 * @export
 * @interface RestSecretScanningRuleSetRequest
 */
export interface RestSecretScanningRuleSetRequest {
    /**
     * Regular expression for matching a secret on a code line
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    lineRegex?: string;
    /**
     * Human readable name for the rule
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    name?: string;
    /**
     * Regular expression matching file names
     * @type {string}
     * @memberof RestSecretScanningRuleSetRequest
     */
    pathRegex?: string;
}
/**
 * 
 * @export
 * @interface RestSetInsightReportRequest
 */
export interface RestSetInsightReportRequest {
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    coverageProviderKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSetInsightReportRequest
     */
    createdDate?: number;
    /**
     * 
     * @type {Array<RestInsightReportData>}
     * @memberof RestSetInsightReportRequest
     */
    data: Array<RestInsightReportData>;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    logoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    reporter?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSetInsightReportRequest
     */
    title: string;
}
/**
 * 
 * @export
 * @interface RestSingleAddInsightAnnotationRequest
 */
export interface RestSingleAddInsightAnnotationRequest {
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    externalId?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    line?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    link?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    severity: string;
    /**
     * 
     * @type {string}
     * @memberof RestSingleAddInsightAnnotationRequest
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestSshAccessKey
 */
export interface RestSshAccessKey {
    /**
     * 
     * @type {AddSshKeyRequest}
     * @memberof RestSshAccessKey
     */
    key?: AddSshKeyRequest;
    /**
     * 
     * @type {string}
     * @memberof RestSshAccessKey
     */
    permission?: RestSshAccessKeyPermissionEnum;
    /**
     * 
     * @type {RestChangesetRepositoryOriginProject}
     * @memberof RestSshAccessKey
     */
    project?: RestChangesetRepositoryOriginProject;
    /**
     * 
     * @type {RestChangesetRepository}
     * @memberof RestSshAccessKey
     */
    repository?: RestChangesetRepository;
}


/**
 * @export
 */
export const RestSshAccessKeyPermissionEnum = {
    UserAdmin: 'USER_ADMIN',
    ProjectView: 'PROJECT_VIEW',
    RepoRead: 'REPO_READ',
    RepoWrite: 'REPO_WRITE',
    RepoAdmin: 'REPO_ADMIN',
    ProjectRead: 'PROJECT_READ',
    ProjectWrite: 'PROJECT_WRITE',
    RepoCreate: 'REPO_CREATE',
    ProjectAdmin: 'PROJECT_ADMIN',
    LicensedUser: 'LICENSED_USER',
    ProjectCreate: 'PROJECT_CREATE',
    Admin: 'ADMIN',
    SysAdmin: 'SYS_ADMIN'
} as const;
export type RestSshAccessKeyPermissionEnum = typeof RestSshAccessKeyPermissionEnum[keyof typeof RestSshAccessKeyPermissionEnum];

/**
 * 
 * @export
 * @interface RestSshAccessKeyLocations
 */
export interface RestSshAccessKeyLocations {
    /**
     * 
     * @type {RestProject}
     * @memberof RestSshAccessKeyLocations
     */
    projects?: RestProject;
    /**
     * 
     * @type {RestRepository}
     * @memberof RestSshAccessKeyLocations
     */
    repositories?: RestRepository;
}
/**
 * 
 * @export
 * @interface RestSshCredentials
 */
export interface RestSshCredentials {
    /**
     * The key algorithm, if passing in a legacy X.509 encoded key. Do not specify for OpenSSH encoded keys
     * @type {string}
     * @memberof RestSshCredentials
     */
    algorithm?: string;
    /**
     * The public key text in the OpenSSH format. The algorithm must be specified in case of the legacy X.509 keys
     * @type {string}
     * @memberof RestSshCredentials
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshCredentials
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface RestSshKey
 */
export interface RestSshKey {
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    algorithmType?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshKey
     */
    bitLength?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    readonly createdDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshKey
     */
    expiryDays?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    readonly fingerprint?: string;
    /**
     * 
     * @type {number}
     * @memberof RestSshKey
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    readonly lastAuthenticated?: string;
    /**
     * 
     * @type {string}
     * @memberof RestSshKey
     */
    text?: string;
    /**
     * Contains a warning about the key, for example that it's deprecated
     * @type {string}
     * @memberof RestSshKey
     */
    readonly warning?: string;
}
/**
 * 
 * @export
 * @interface RestSshKeySettings
 */
export interface RestSshKeySettings {
    /**
     * 
     * @type {Array<RestSshKeyTypeRestriction>}
     * @memberof RestSshKeySettings
     */
    keyTypeRestrictions?: Array<RestSshKeyTypeRestriction>;
    /**
     * 
     * @type {number}
     * @memberof RestSshKeySettings
     */
    maxExpiryDays?: number;
}
/**
 * 
 * @export
 * @interface RestSshKeyTypeRestriction
 */
export interface RestSshKeyTypeRestriction {
    /**
     * 
     * @type {string}
     * @memberof RestSshKeyTypeRestriction
     */
    algorithm?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestSshKeyTypeRestriction
     */
    allowed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestSshKeyTypeRestriction
     */
    minKeyLength?: number;
}
/**
 * 
 * @export
 * @interface RestSshSettings
 */
export interface RestSshSettings {
    /**
     * 
     * @type {boolean}
     * @memberof RestSshSettings
     */
    accessKeysEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestSshSettings
     */
    baseUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestSshSettings
     */
    enabled?: boolean;
    /**
     * 
     * @type {SimpleSshKeyFingerprint}
     * @memberof RestSshSettings
     */
    fingerprint?: SimpleSshKeyFingerprint;
    /**
     * 
     * @type {number}
     * @memberof RestSshSettings
     */
    port?: number;
}
/**
 * 
 * @export
 * @interface RestSyncProgress
 */
export interface RestSyncProgress {
    /**
     * 
     * @type {boolean}
     * @memberof RestSyncProgress
     */
    discovering?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestSyncProgress
     */
    syncedRepos?: number;
    /**
     * 
     * @type {number}
     * @memberof RestSyncProgress
     */
    totalRepos?: number;
}
/**
 * 
 * @export
 * @interface RestSystemSigningConfiguration
 */
export interface RestSystemSigningConfiguration {
    /**
     * 
     * @type {boolean}
     * @memberof RestSystemSigningConfiguration
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface RestTag
 */
export interface RestTag {
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    readonly latestChangeset?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    readonly latestCommit?: string;
    /**
     * 
     * @type {string}
     * @memberof RestTag
     */
    type?: RestTagTypeEnum;
}


/**
 * @export
 */
export const RestTagTypeEnum = {
    Branch: 'BRANCH',
    Tag: 'TAG'
} as const;
export type RestTagTypeEnum = typeof RestTagTypeEnum[keyof typeof RestTagTypeEnum];

/**
 * 
 * @export
 * @interface RestTestResults
 */
export interface RestTestResults {
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    skipped?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTestResults
     */
    successful?: number;
}
/**
 * 
 * @export
 * @interface RestTokenBucketSettings
 */
export interface RestTokenBucketSettings {
    /**
     * 
     * @type {number}
     * @memberof RestTokenBucketSettings
     */
    capacity?: number;
    /**
     * 
     * @type {number}
     * @memberof RestTokenBucketSettings
     */
    fillRate?: number;
}
/**
 * 
 * @export
 * @interface RestUpstreamServer
 */
export interface RestUpstreamServer {
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    baseUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamServer
     */
    state?: RestUpstreamServerStateEnum;
}


/**
 * @export
 */
export const RestUpstreamServerStateEnum = {
    Initializing: 'INITIALIZING',
    Pending: 'PENDING',
    Installed: 'INSTALLED',
    Unknown: 'UNKNOWN',
    Removed: 'REMOVED'
} as const;
export type RestUpstreamServerStateEnum = typeof RestUpstreamServerStateEnum[keyof typeof RestUpstreamServerStateEnum];

/**
 * 
 * @export
 * @interface RestUpstreamSettings
 */
export interface RestUpstreamSettings {
    /**
     * 
     * @type {string}
     * @memberof RestUpstreamSettings
     */
    mode?: RestUpstreamSettingsModeEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestUpstreamSettings
     */
    projectIds?: Array<string>;
}


/**
 * @export
 */
export const RestUpstreamSettingsModeEnum = {
    AllProjects: 'ALL_PROJECTS',
    SelectedProjects: 'SELECTED_PROJECTS'
} as const;
export type RestUpstreamSettingsModeEnum = typeof RestUpstreamSettingsModeEnum[keyof typeof RestUpstreamSettingsModeEnum];

/**
 * 
 * @export
 * @interface RestUserDirectory
 */
export interface RestUserDirectory {
    /**
     * 
     * @type {boolean}
     * @memberof RestUserDirectory
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RestUserDirectory
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDirectory
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserDirectory
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestUserRateLimitSettings
 */
export interface RestUserRateLimitSettings {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestUserRateLimitSettings
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestUserRateLimitSettings
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserRateLimitSettings
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestUserRateLimitSettingsUpdateRequest
 */
export interface RestUserRateLimitSettingsUpdateRequest {
    /**
     * 
     * @type {RestBulkUserRateLimitSettingsUpdateRequestSettings}
     * @memberof RestUserRateLimitSettingsUpdateRequest
     */
    settings?: RestBulkUserRateLimitSettingsUpdateRequestSettings;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserRateLimitSettingsUpdateRequest
     */
    whitelisted?: boolean;
}
/**
 * 
 * @export
 * @interface RestUserReaction
 */
export interface RestUserReaction {
    /**
     * 
     * @type {RestUserReactionComment}
     * @memberof RestUserReaction
     */
    comment?: RestUserReactionComment;
    /**
     * 
     * @type {RestUserReactionEmoticon}
     * @memberof RestUserReaction
     */
    emoticon?: RestUserReactionEmoticon;
    /**
     * 
     * @type {RestCommentAnchorPullRequestAuthorUser}
     * @memberof RestUserReaction
     */
    user?: RestCommentAnchorPullRequestAuthorUser;
}
/**
 * 
 * @export
 * @interface RestUserReactionComment
 */
export interface RestUserReactionComment {
    /**
     * 
     * @type {RestCommentAnchor}
     * @memberof RestUserReactionComment
     */
    anchor?: RestCommentAnchor;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly anchored?: boolean;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestUserReactionComment
     */
    author?: RestCommentAuthor;
    /**
     * 
     * @type {Array<RestComment>}
     * @memberof RestUserReactionComment
     */
    readonly comments?: Array<RestComment>;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly createdDate?: number;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    readonly html?: string;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    id?: number;
    /**
     * 
     * @type {RestCommentParent}
     * @memberof RestUserReactionComment
     */
    parent?: RestCommentParent;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly pending?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestUserReactionComment
     */
    properties?: object;
    /**
     * 
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    readonly reply?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly resolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestUserReactionComment
     */
    resolver?: RestCommentAuthor;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionComment
     */
    text?: string;
    /**
     * Indicates if this comment thread has been marked as resolved or not
     * @type {boolean}
     * @memberof RestUserReactionComment
     */
    threadResolved?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly threadResolvedDate?: number;
    /**
     * 
     * @type {RestCommentAuthor}
     * @memberof RestUserReactionComment
     */
    threadResolver?: RestCommentAuthor;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    readonly updatedDate?: number;
    /**
     * 
     * @type {number}
     * @memberof RestUserReactionComment
     */
    version?: number;
}
/**
 * 
 * @export
 * @interface RestUserReactionEmoticon
 */
export interface RestUserReactionEmoticon {
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    shortcut?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof RestUserReactionEmoticon
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface RestUsernamePasswordCredentials
 */
export interface RestUsernamePasswordCredentials {
    /**
     * 
     * @type {string}
     * @memberof RestUsernamePasswordCredentials
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof RestUsernamePasswordCredentials
     */
    username: string;
}
/**
 * 
 * @export
 * @interface RestWebhook
 */
export interface RestWebhook {
    /**
     * 
     * @type {boolean}
     * @memberof RestWebhook
     */
    active?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestWebhook
     */
    configuration?: object;
    /**
     * 
     * @type {RestWebhookCredentials}
     * @memberof RestWebhook
     */
    credentials?: RestWebhookCredentials;
    /**
     * 
     * @type {Set<string>}
     * @memberof RestWebhook
     */
    events?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RestWebhook
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof RestWebhook
     */
    scopeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RestWebhook
     */
    sslVerificationRequired?: boolean;
    /**
     * 
     * @type {object}
     * @memberof RestWebhook
     */
    statistics?: object;
    /**
     * 
     * @type {string}
     * @memberof RestWebhook
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface RestWebhookCredentials
 */
export interface RestWebhookCredentials {
    /**
     * 
     * @type {string}
     * @memberof RestWebhookCredentials
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof RestWebhookCredentials
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface RestWebhookScope
 */
export interface RestWebhookScope {
    /**
     * 
     * @type {string}
     * @memberof RestWebhookScope
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RestWebhookScope
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface RestX509Certificate
 */
export interface RestX509Certificate {
    /**
     * The SHA-256 fingerprint of the X.509 certificate
     * @type {string}
     * @memberof RestX509Certificate
     */
    fingerprint?: string;
    /**
     * The ID of the X.509 certificate
     * @type {number}
     * @memberof RestX509Certificate
     */
    id?: number;
}
/**
 * 
 * @export
 * @interface RevokeManyRequest
 */
export interface RevokeManyRequest {
    /**
     * 
     * @type {RestProject}
     * @memberof RevokeManyRequest
     */
    projects?: RestProject;
    /**
     * 
     * @type {RestRepository}
     * @memberof RevokeManyRequest
     */
    repositories?: RestRepository;
}
/**
 * 
 * @export
 * @interface Scope
 */
export interface Scope {
    /**
     * 
     * @type {number}
     * @memberof Scope
     */
    resourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof Scope
     */
    type?: ScopeTypeEnum;
}


/**
 * @export
 */
export const ScopeTypeEnum = {
    Global: 'GLOBAL',
    Project: 'PROJECT',
    Repository: 'REPOSITORY'
} as const;
export type ScopeTypeEnum = typeof ScopeTypeEnum[keyof typeof ScopeTypeEnum];

/**
 * 
 * @export
 * @interface Search2200Response
 */
export interface Search2200Response {
    /**
     * 
     * @type {boolean}
     * @memberof Search2200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof Search2200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestSecretScanningAllowlistRule>}
     * @memberof Search2200Response
     */
    values?: Array<RestSecretScanningAllowlistRule>;
}
/**
 * 
 * @export
 * @interface Search3200Response
 */
export interface Search3200Response {
    /**
     * 
     * @type {boolean}
     * @memberof Search3200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof Search3200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestSecretScanningRule>}
     * @memberof Search3200Response
     */
    values?: Array<RestSecretScanningRule>;
}
/**
 * 
 * @export
 * @interface SearchMeshMigrationRepos200Response
 */
export interface SearchMeshMigrationRepos200Response {
    /**
     * 
     * @type {boolean}
     * @memberof SearchMeshMigrationRepos200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchMeshMigrationRepos200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<RestMigrationRepository>}
     * @memberof SearchMeshMigrationRepos200Response
     */
    values?: Array<RestMigrationRepository>;
}
/**
 * 
 * @export
 * @interface SetBannerRequest
 */
export interface SetBannerRequest {
    /**
     * 
     * @type {string}
     * @memberof SetBannerRequest
     */
    audience: SetBannerRequestAudienceEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SetBannerRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetBannerRequest
     */
    message?: string;
}


/**
 * @export
 */
export const SetBannerRequestAudienceEnum = {
    Authenticated: 'AUTHENTICATED',
    All: 'ALL'
} as const;
export type SetBannerRequestAudienceEnum = typeof SetBannerRequestAudienceEnum[keyof typeof SetBannerRequestAudienceEnum];

/**
 * 
 * @export
 * @interface SetDefaultBranchRequest
 */
export interface SetDefaultBranchRequest {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultBranchRequest
     */
    id?: string;
}
/**
 * 
 * @export
 * @interface SetMailConfigRequest
 */
export interface SetMailConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    password?: string;
    /**
     * 
     * @type {number}
     * @memberof SetMailConfigRequest
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    protocol?: SetMailConfigRequestProtocolEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SetMailConfigRequest
     */
    requireStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    senderAddress?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SetMailConfigRequest
     */
    useStartTls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SetMailConfigRequest
     */
    username?: string;
}


/**
 * @export
 */
export const SetMailConfigRequestProtocolEnum = {
    Smtp: 'SMTP',
    Smtps: 'SMTPS'
} as const;
export type SetMailConfigRequestProtocolEnum = typeof SetMailConfigRequestProtocolEnum[keyof typeof SetMailConfigRequestProtocolEnum];

/**
 * 
 * @export
 * @interface SetSettings2Request
 */
export interface SetSettings2Request {
    /**
     * 
     * @type {boolean}
     * @memberof SetSettings2Request
     */
    debugLoggingEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SetSettings2Request
     */
    profilingEnabled: boolean;
}
/**
 * 
 * @export
 * @interface SimpleSshKeyFingerprint
 */
export interface SimpleSshKeyFingerprint {
    /**
     * 
     * @type {string}
     * @memberof SimpleSshKeyFingerprint
     */
    algorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleSshKeyFingerprint
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface SsoConfigEntity
 */
export interface SsoConfigEntity {
    /**
     * 
     * @type {string}
     * @memberof SsoConfigEntity
     */
    discoveryRefreshCron?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SsoConfigEntity
     */
    enableAuthenticationFallback?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SsoConfigEntity
     */
    lastUpdated?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SsoConfigEntity
     */
    showLoginForm?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SsoConfigEntity
     */
    showLoginFormForJsm?: boolean;
}
/**
 * 
 * @export
 * @interface SsoManagementStatusDTO
 */
export interface SsoManagementStatusDTO {
    /**
     * 
     * @type {boolean}
     * @memberof SsoManagementStatusDTO
     */
    isManaged?: boolean;
}
/**
 * 
 * @export
 * @interface StartMeshMigrationRequest
 */
export interface StartMeshMigrationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof StartMeshMigrationRequest
     */
    all?: boolean;
    /**
     * 
     * @type {StartMeshMigrationRequestMaxBytesPerSecond}
     * @memberof StartMeshMigrationRequest
     */
    maxBytesPerSecond?: StartMeshMigrationRequestMaxBytesPerSecond;
    /**
     * 
     * @type {Set<number>}
     * @memberof StartMeshMigrationRequest
     */
    projectIds?: Array<number>;
    /**
     * 
     * @type {Set<number>}
     * @memberof StartMeshMigrationRequest
     */
    repositoryIds?: Array<number>;
}
/**
 * 
 * @export
 * @interface StartMeshMigrationRequestMaxBytesPerSecond
 */
export interface StartMeshMigrationRequestMaxBytesPerSecond {
    /**
     * 
     * @type {number}
     * @memberof StartMeshMigrationRequestMaxBytesPerSecond
     */
    asLong?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StartMeshMigrationRequestMaxBytesPerSecond
     */
    present?: boolean;
}
/**
 * 
 * @export
 * @interface StatusDTO
 */
export interface StatusDTO {
    /**
     * 
     * @type {boolean}
     * @memberof StatusDTO
     */
    isTwoSVActive?: boolean;
    /**
     * 
     * @type {Array<MethodStateDTO>}
     * @memberof StatusDTO
     */
    methods?: Array<MethodStateDTO>;
    /**
     * 
     * @type {boolean}
     * @memberof StatusDTO
     */
    twoSVActive?: boolean;
}
/**
 * 
 * @export
 * @interface StreamFiles200Response
 */
export interface StreamFiles200Response {
    /**
     * 
     * @type {boolean}
     * @memberof StreamFiles200Response
     */
    isLastPage?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    nextPageStart?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof StreamFiles200Response
     */
    start?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof StreamFiles200Response
     */
    values?: Array<any>;
}
/**
 * 
 * @export
 * @interface TotpCodeVerificationDTO
 */
export interface TotpCodeVerificationDTO {
    /**
     * 
     * @type {string}
     * @memberof TotpCodeVerificationDTO
     */
    conversationId?: string;
    /**
     * 
     * @type {string}
     * @memberof TotpCodeVerificationDTO
     */
    totpCode?: string;
}
/**
 * 
 * @export
 * @interface TotpElevationRestDTO
 */
export interface TotpElevationRestDTO {
    /**
     * 
     * @type {string}
     * @memberof TotpElevationRestDTO
     */
    totpCode?: string;
}
/**
 * 
 * @export
 * @interface TotpRecoveryCodeAuthenticationDTO
 */
export interface TotpRecoveryCodeAuthenticationDTO {
    /**
     * 
     * @type {string}
     * @memberof TotpRecoveryCodeAuthenticationDTO
     */
    conversationId?: string;
    /**
     * 
     * @type {string}
     * @memberof TotpRecoveryCodeAuthenticationDTO
     */
    recoveryCode?: string;
}
/**
 * 
 * @export
 * @interface TotpRecoveryCodeDTO
 */
export interface TotpRecoveryCodeDTO {
    /**
     * 
     * @type {string}
     * @memberof TotpRecoveryCodeDTO
     */
    recoveryCode?: string;
}
/**
 * 
 * @export
 * @interface TotpUserEnrollmentDTO
 */
export interface TotpUserEnrollmentDTO {
    /**
     * 
     * @type {string}
     * @memberof TotpUserEnrollmentDTO
     */
    conversationId?: string;
    /**
     * 
     * @type {string}
     * @memberof TotpUserEnrollmentDTO
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof TotpUserEnrollmentDTO
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof TotpUserEnrollmentDTO
     */
    userName?: string;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1Request
 */
export interface UpdatePullRequestCondition1Request {
    /**
     * 
     * @type {number}
     * @memberof UpdatePullRequestCondition1Request
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<RestReviewerGroup>}
     * @memberof UpdatePullRequestCondition1Request
     */
    reviewerGroups?: Array<RestReviewerGroup>;
    /**
     * 
     * @type {Array<RestApplicationUser>}
     * @memberof UpdatePullRequestCondition1Request
     */
    reviewers?: Array<RestApplicationUser>;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof UpdatePullRequestCondition1Request
     */
    sourceMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcher}
     * @memberof UpdatePullRequestCondition1Request
     */
    targetMatcher?: UpdatePullRequestCondition1RequestSourceMatcher;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1RequestSourceMatcher
 */
export interface UpdatePullRequestCondition1RequestSourceMatcher {
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    displayId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    id?: string;
    /**
     * 
     * @type {UpdatePullRequestCondition1RequestSourceMatcherType}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcher
     */
    type?: UpdatePullRequestCondition1RequestSourceMatcherType;
}
/**
 * 
 * @export
 * @interface UpdatePullRequestCondition1RequestSourceMatcherType
 */
export interface UpdatePullRequestCondition1RequestSourceMatcherType {
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcherType
     */
    id?: UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdatePullRequestCondition1RequestSourceMatcherType
     */
    name?: string;
}


/**
 * @export
 */
export const UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum = {
    AnyRef: 'ANY_REF',
    Branch: 'BRANCH',
    Pattern: 'PATTERN',
    ModelCategory: 'MODEL_CATEGORY',
    ModelBranch: 'MODEL_BRANCH'
} as const;
export type UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum = typeof UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum[keyof typeof UpdatePullRequestCondition1RequestSourceMatcherTypeIdEnum];

/**
 * 
 * @export
 * @interface UpdateSystemSigningConfigurationRequest
 */
export interface UpdateSystemSigningConfigurationRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateSystemSigningConfigurationRequest
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface UserAndGroups
 */
export interface UserAndGroups {
    /**
     * 
     * @type {Set<string>}
     * @memberof UserAndGroups
     */
    groups: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserAndGroups
     */
    user?: string;
}
/**
 * 
 * @export
 * @interface UserPasswordUpdate
 */
export interface UserPasswordUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    oldPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordUpdate
     */
    passwordConfirm?: string;
}
/**
 * 
 * @export
 * @interface UserPickerContext
 */
export interface UserPickerContext {
    /**
     * 
     * @type {string}
     * @memberof UserPickerContext
     */
    context?: string;
    /**
     * 
     * @type {string}
     * @memberof UserPickerContext
     */
    itemName?: string;
}
/**
 * 
 * @export
 * @interface UserRename
 */
export interface UserRename {
    /**
     * 
     * @type {string}
     * @memberof UserRename
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserRename
     */
    newName?: string;
}
/**
 * 
 * @export
 * @interface UserUpdate
 */
export interface UserUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface UserUpdateWithCredentials
 */
export interface UserUpdateWithCredentials {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateWithCredentials
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateWithCredentials
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateWithCredentials
     */
    name?: string;
    /**
     * The user's password, which the system may require when users update their email.
     * @type {string}
     * @memberof UserUpdateWithCredentials
     */
    password?: string;
}
