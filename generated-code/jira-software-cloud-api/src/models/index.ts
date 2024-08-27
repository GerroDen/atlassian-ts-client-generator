/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface Associations
 */
export interface Associations {
    /**
     * the type of the association being made
     * @type {string}
     * @memberof Associations
     */
    associationType?: AssociationsAssociationTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof Associations
     */
    values?: Array<string>;
}


/**
 * @export
 */
export const AssociationsAssociationTypeEnum = {
    IssueIdOrKeys: 'issueIdOrKeys',
    ServiceIdOrKeys: 'serviceIdOrKeys',
    AticloudcompasseventSource: 'ati:cloud:compass:event-source'
} as const;
export type AssociationsAssociationTypeEnum = typeof AssociationsAssociationTypeEnum[keyof typeof AssociationsAssociationTypeEnum];

/**
 * Describes the author of a particular entity
 * @export
 * @interface Author
 */
export interface Author {
    /**
     * Deprecated. The name of this user in a format suitable for display. Max length is 255 characters.
     * @type {string}
     * @memberof Author
     */
    name?: string;
    /**
     * The email address of the user. Used to associate the user with a Jira user. Max length is 255 characters.
     * @type {string}
     * @memberof Author
     */
    email?: string;
    /**
     * Deprecated. The username of the user. Used to associate the user with a Jira user if there are multiple users for a given email. Max length is 255 characters.
     * @type {string}
     * @memberof Author
     */
    username?: string;
    /**
     * Deprecated. The URL of the profile for this user. Max length is 2000 characters.
     * @type {string}
     * @memberof Author
     */
    url?: string;
    /**
     * Deprecated. The URL of the avatar for this user. Max length is 2000 characters.
     * @type {string}
     * @memberof Author
     */
    avatar?: string;
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
 * Details about a board.
 * @export
 * @interface Board
 */
export interface Board {
    /**
     * 
     * @type {GetAllBoards200ResponseValuesInnerAdmins}
     * @memberof Board
     */
    admins?: GetAllBoards200ResponseValuesInnerAdmins;
    /**
     * Whether the board can be edited.
     * @type {boolean}
     * @memberof Board
     */
    readonly canEdit?: boolean;
    /**
     * Whether the board is selected as a favorite.
     * @type {boolean}
     * @memberof Board
     */
    readonly favourite?: boolean;
    /**
     * The ID of the board.
     * @type {number}
     * @memberof Board
     */
    id?: number;
    /**
     * Whether the board is private.
     * @type {boolean}
     * @memberof Board
     */
    readonly isPrivate?: boolean;
    /**
     * 
     * @type {GetAllBoards200ResponseValuesInnerLocation}
     * @memberof Board
     */
    location?: GetAllBoards200ResponseValuesInnerLocation;
    /**
     * The name of the board.
     * @type {string}
     * @memberof Board
     */
    name?: string;
    /**
     * The URL of the board.
     * @type {string}
     * @memberof Board
     */
    readonly self?: string;
    /**
     * The type the board.
     * @type {string}
     * @memberof Board
     */
    type?: string;
}
/**
 * The users and groups who own the board.
 * @export
 * @interface BoardAdminsBean
 */
export interface BoardAdminsBean {
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner>}
     * @memberof BoardAdminsBean
     */
    groups?: Array<GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner>;
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner>}
     * @memberof BoardAdminsBean
     */
    users?: Array<GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner>;
}
/**
 * 
 * @export
 * @interface BoardConfigBean
 */
export interface BoardConfigBean {
    /**
     * 
     * @type {GetConfiguration200ResponseColumnConfig}
     * @memberof BoardConfigBean
     */
    columnConfig?: GetConfiguration200ResponseColumnConfig;
    /**
     * 
     * @type {GetConfiguration200ResponseEstimation}
     * @memberof BoardConfigBean
     */
    estimation?: GetConfiguration200ResponseEstimation;
    /**
     * 
     * @type {GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner}
     * @memberof BoardConfigBean
     */
    filter?: GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner;
    /**
     * 
     * @type {number}
     * @memberof BoardConfigBean
     */
    id?: number;
    /**
     * 
     * @type {CreateBoardRequestLocation}
     * @memberof BoardConfigBean
     */
    location?: CreateBoardRequestLocation;
    /**
     * 
     * @type {string}
     * @memberof BoardConfigBean
     */
    name?: string;
    /**
     * 
     * @type {GetConfiguration200ResponseRanking}
     * @memberof BoardConfigBean
     */
    ranking?: GetConfiguration200ResponseRanking;
    /**
     * 
     * @type {string}
     * @memberof BoardConfigBean
     */
    self?: string;
    /**
     * 
     * @type {GetConfiguration200ResponseSubQuery}
     * @memberof BoardConfigBean
     */
    subQuery?: GetConfiguration200ResponseSubQuery;
    /**
     * 
     * @type {string}
     * @memberof BoardConfigBean
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface BoardCreateBean
 */
export interface BoardCreateBean {
    /**
     * 
     * @type {number}
     * @memberof BoardCreateBean
     */
    filterId?: number;
    /**
     * 
     * @type {CreateBoardRequestLocation}
     * @memberof BoardCreateBean
     */
    location?: CreateBoardRequestLocation;
    /**
     * 
     * @type {string}
     * @memberof BoardCreateBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardCreateBean
     */
    type?: BoardCreateBeanTypeEnum;
}


/**
 * @export
 */
export const BoardCreateBeanTypeEnum = {
    Kanban: 'kanban',
    Scrum: 'scrum',
    Agility: 'agility'
} as const;
export type BoardCreateBeanTypeEnum = typeof BoardCreateBeanTypeEnum[keyof typeof BoardCreateBeanTypeEnum];

/**
 * 
 * @export
 * @interface BoardFilterBean
 */
export interface BoardFilterBean {
    /**
     * 
     * @type {number}
     * @memberof BoardFilterBean
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BoardFilterBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardFilterBean
     */
    self?: string;
}
/**
 * The container that the board is located in.
 * @export
 * @interface BoardLocationBean
 */
export interface BoardLocationBean {
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    avatarURI?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BoardLocationBean
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    projectTypeKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BoardLocationBean
     */
    userAccountId?: string;
    /**
     * 
     * @type {number}
     * @memberof BoardLocationBean
     */
    userId?: number;
}
/**
 * Represents a branch in the version control system
 * @export
 * @interface Branch
 */
export interface Branch {
    /**
     * The ID of this entity. Will be used for cross entity linking. Must be unique by entity type within a repository, i.e., only one commit can have ID 'X' in repository 'Y'. But adding, e.g., a branch with ID 'X' to repository 'Y' is acceptable. Only alphanumeric characters, and '~.-_', are allowed. Max length is 1024 characters.
     * @type {string}
     * @memberof Branch
     */
    id: string;
    /**
     * List of issues keys that this entity is associated with. They must be valid Jira issue keys.
     * @type {Array<string>}
     * @memberof Branch
     */
    issueKeys: Array<string>;
    /**
     * An ID used to apply an ordering to updates for this entity in the case of out-of-order receipt of update requests. This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the provider system, but other alternatives are valid (e.g. a provider could store a counter against each entity and increment that on each update to Jira). Updates for an entity that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * @type {number}
     * @memberof Branch
     */
    updateSequenceId: number;
    /**
     * The name of the branch. Max length is 512 characters.
     * @type {string}
     * @memberof Branch
     */
    name: string;
    /**
     * 
     * @type {Commit}
     * @memberof Branch
     */
    lastCommit: Commit;
    /**
     * The URL of the page for creating a pull request from this branch. Max length is 2000 characters.
     * @type {string}
     * @memberof Branch
     */
    createPullRequestUrl?: string;
    /**
     * The URL of the branch. Max length is 2000 characters.
     * @type {string}
     * @memberof Branch
     */
    url: string;
}
/**
 * Details about the commit the build was run against.
 * 
 * @export
 * @interface BuildCommitReference
 */
export interface BuildCommitReference {
    /**
     * The ID of the commit. E.g. for a Git repository this would be the SHA1 hash.
     * 
     * @type {string}
     * @memberof BuildCommitReference
     */
    id: string;
    /**
     * An identifier for the repository containing the commit.
     * 
     * In most cases this should be the URL of the repository in the SCM provider.
     * 
     * For cases where the build was executed against a local repository etc. this should be some identifier that is
     * unique to that repository.
     * 
     * @type {string}
     * @memberof BuildCommitReference
     */
    repositoryUri: string;
}
/**
 * Data related to a single build
 * 
 * @export
 * @interface BuildData
 */
export interface BuildData {
    /**
     * The schema version used for this data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof BuildData
     */
    schemaVersion?: BuildDataSchemaVersionEnum;
    /**
     * An ID that relates a sequence of builds. Depending on your use case this might be a project ID, pipeline ID,
     * plan key etc. - whatever logical unit you use to group a sequence of builds.
     * 
     * The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided.
     * 
     * @type {string}
     * @memberof BuildData
     */
    pipelineId: string;
    /**
     * Identifies a build within the sequence of builds identified by the build `pipelineId`.
     * 
     * Used to identify the 'most recent' build in that sequence of builds.
     * 
     * The combination of `pipelineId` and `buildNumber` must uniquely identify a build you have provided.
     * 
     * @type {number}
     * @memberof BuildData
     */
    buildNumber: number;
    /**
     * A number used to apply an order to the updates to the build, as identified by `pipelineId` and `buildNumber`,
     * in the case of out-of-order receipt of update requests.
     * 
     * It must be a monotonically increasing number. For example, epoch time could be one way to generate the
     * `updateSequenceNumber`.
     * 
     * Updates for a build that is received with an `updateSqeuenceNumber` less than or equal to what is currently
     * stored will be ignored.
     * 
     * @type {number}
     * @memberof BuildData
     */
    updateSequenceNumber: number;
    /**
     * The human-readable name for the build.
     * 
     * Will be shown in the UI.
     * 
     * @type {string}
     * @memberof BuildData
     */
    displayName: string;
    /**
     * An optional description to attach to this build.
     * 
     * This may be anything that makes sense in your system.
     * 
     * @type {string}
     * @memberof BuildData
     */
    description?: string;
    /**
     * A human-readable string that to provide information about the build.
     * 
     * @type {string}
     * @memberof BuildData
     */
    label?: string;
    /**
     * The URL to this build in your system.
     * 
     * @type {string}
     * @memberof BuildData
     */
    url: string;
    /**
     * The state of a build.
     * 
     * * `pending` - The build is queued, or some manual action is required.
     * * `in_progress` - The build is currently running.
     * * `successful` - The build completed successfully.
     * * `failed` - The build failed.
     * * `cancelled` - The build has been cancelled or stopped.
     * * `unknown` - The build is in an unknown state.
     * 
     * @type {string}
     * @memberof BuildData
     */
    state: BuildDataStateEnum;
    /**
     * The last-updated timestamp to present to the user as a summary of the state of the build.
     * 
     * @type {string}
     * @memberof BuildData
     */
    lastUpdated: string;
    /**
     * The Jira issue keys to associate the build information with.
     * 
     * You are free to associate issue keys in any way you like. However, we recommend that you use the name
     * of the branch the build was executed on, and extract issue keys from that name using a simple regex. This has
     * the advantage that it provides an intuitive association of builds to issue keys.
     * 
     * @type {Array<string>}
     * @memberof BuildData
     */
    issueKeys: Array<string>;
    /**
     * 
     * @type {TestInfo}
     * @memberof BuildData
     */
    testInfo?: TestInfo;
    /**
     * Optional information that links a build to a commit, branch etc.
     * 
     * @type {Array<BuildReferences>}
     * @memberof BuildData
     */
    references?: Array<BuildReferences>;
}


/**
 * @export
 */
export const BuildDataSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type BuildDataSchemaVersionEnum = typeof BuildDataSchemaVersionEnum[keyof typeof BuildDataSchemaVersionEnum];

/**
 * @export
 */
export const BuildDataStateEnum = {
    Pending: 'pending',
    InProgress: 'in_progress',
    Successful: 'successful',
    Failed: 'failed',
    Cancelled: 'cancelled',
    Unknown: 'unknown'
} as const;
export type BuildDataStateEnum = typeof BuildDataStateEnum[keyof typeof BuildDataStateEnum];

/**
 * Fields that uniquely reference a build.
 * 
 * @export
 * @interface BuildKey
 */
export interface BuildKey {
    /**
     * An ID that relates a sequence of builds. Depending on your system this might be a project ID, pipeline ID,
     * plan key etc. - whatever logical unit you use to group a sequence of builds.
     * 
     * The combination of `pipelineId` and `buildNumber` must uniquely identify the build.
     * 
     * @type {string}
     * @memberof BuildKey
     */
    pipelineId: string;
    /**
     * Identifies a build within the sequence of builds identified by the build `pipelineId`.
     * 
     * Used to identify the 'most recent' build in that sequence of builds.
     * 
     * The combination of `pipelineId` and `buildNumber` must uniquely identify the build.
     * 
     * @type {number}
     * @memberof BuildKey
     */
    buildNumber: number;
}
/**
 * Details about the ref the build was run on.
 * 
 * @export
 * @interface BuildRefReference
 */
export interface BuildRefReference {
    /**
     * The name of the ref the build ran on
     * 
     * @type {string}
     * @memberof BuildRefReference
     */
    name: string;
    /**
     * An identifer for the ref.
     * 
     * In most cases this should be the URL of the tag/branch etc. in the SCM provider.
     * 
     * For cases where the build was executed against a local repository etc. this should be something that uniquely
     * identifies the ref.
     * 
     * @type {string}
     * @memberof BuildRefReference
     */
    uri: string;
}
/**
 * Information that links a build to a commit, branch etc.
 * 
 * Used to provide a richer user experience by enabling us to associate builds from your system with e.g.
 * branches / commits / tags etc. supplied by another app in the Jira UI.
 * 
 * @export
 * @interface BuildReferences
 */
export interface BuildReferences {
    /**
     * 
     * @type {BuildCommitReference}
     * @memberof BuildReferences
     */
    commit?: BuildCommitReference;
    /**
     * 
     * @type {BuildRefReference}
     * @memberof BuildReferences
     */
    ref?: BuildRefReference;
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
     * 
     * @type {ChangelogHistoryMetadata}
     * @memberof Changelog
     */
    historyMetadata?: ChangelogHistoryMetadata;
    /**
     * The ID of the changelog.
     * @type {string}
     * @memberof Changelog
     */
    readonly id?: string;
    /**
     * The list of items changed.
     * @type {Array<ChangelogItemsInner>}
     * @memberof Changelog
     */
    readonly items?: Array<ChangelogItemsInner>;
}
/**
 * The user who made the change.
 * @export
 * @interface ChangelogAuthor
 */
export interface ChangelogAuthor {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    accountId?: string;
    /**
     * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly accountType?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof ChangelogAuthor
     */
    readonly active?: boolean;
    /**
     * 
     * @type {ChangelogAuthorAllOfAvatarUrls}
     * @memberof ChangelogAuthor
     */
    avatarUrls?: ChangelogAuthorAllOfAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly displayName?: string;
    /**
     * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly emailAddress?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly key?: string;
    /**
     * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly name?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly self?: string;
    /**
     * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
     * @type {string}
     * @memberof ChangelogAuthor
     */
    readonly timeZone?: string;
}
/**
 * The avatars of the user.
 * @export
 * @interface ChangelogAuthorAllOfAvatarUrls
 */
export interface ChangelogAuthorAllOfAvatarUrls {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof ChangelogAuthorAllOfAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof ChangelogAuthorAllOfAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof ChangelogAuthorAllOfAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof ChangelogAuthorAllOfAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * The history metadata associated with the changed.
 * @export
 * @interface ChangelogHistoryMetadata
 */
export interface ChangelogHistoryMetadata {
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
     * 
     * @type {ChangelogHistoryMetadataAllOfActor}
     * @memberof ChangelogHistoryMetadata
     */
    actor?: ChangelogHistoryMetadataAllOfActor;
    /**
     * 
     * @type {ChangelogHistoryMetadataAllOfCause}
     * @memberof ChangelogHistoryMetadata
     */
    cause?: ChangelogHistoryMetadataAllOfCause;
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
     * Additional arbitrary information about the history record.
     * @type {{ [key: string]: string; }}
     * @memberof ChangelogHistoryMetadata
     */
    extraData?: { [key: string]: string; };
    /**
     * 
     * @type {ChangelogHistoryMetadataAllOfGenerator}
     * @memberof ChangelogHistoryMetadata
     */
    generator?: ChangelogHistoryMetadataAllOfGenerator;
    /**
     * The type of the history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadata
     */
    type?: string;
}
/**
 * Details of the user whose action created the history record.
 * @export
 * @interface ChangelogHistoryMetadataAllOfActor
 */
export interface ChangelogHistoryMetadataAllOfActor {
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    avatarUrl?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    displayNameKey?: string;
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    id?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    type?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfActor
     */
    url?: string;
}
/**
 * Details of the cause that triggered the creation the history record.
 * @export
 * @interface ChangelogHistoryMetadataAllOfCause
 */
export interface ChangelogHistoryMetadataAllOfCause {
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    avatarUrl?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    displayNameKey?: string;
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    id?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    type?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfCause
     */
    url?: string;
}
/**
 * Details of the system that generated the history record.
 * @export
 * @interface ChangelogHistoryMetadataAllOfGenerator
 */
export interface ChangelogHistoryMetadataAllOfGenerator {
    /**
     * The URL to an avatar for the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    avatarUrl?: string;
    /**
     * The display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    displayName?: string;
    /**
     * The key of the display name of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    displayNameKey?: string;
    /**
     * The ID of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    id?: string;
    /**
     * The type of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    type?: string;
    /**
     * The URL of the user or system associated with a history record.
     * @type {string}
     * @memberof ChangelogHistoryMetadataAllOfGenerator
     */
    url?: string;
}
/**
 * A change item.
 * @export
 * @interface ChangelogItemsInner
 */
export interface ChangelogItemsInner {
    /**
     * The name of the field changed.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly field?: string;
    /**
     * The ID of the field changed.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly fieldId?: string;
    /**
     * The type of the field changed.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly fieldtype?: string;
    /**
     * The details of the original value.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly from?: string;
    /**
     * The details of the original value as a string.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly fromString?: string;
    /**
     * The details of the new value.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly to?: string;
    /**
     * The details of the new value as a string.
     * @type {string}
     * @memberof ChangelogItemsInner
     */
    readonly toString?: string;
}
/**
 * 
 * @export
 * @interface ColorBean
 */
export interface ColorBean {
    /**
     * 
     * @type {string}
     * @memberof ColorBean
     */
    key?: ColorBeanKeyEnum;
}


/**
 * @export
 */
export const ColorBeanKeyEnum = {
    _1: 'color_1',
    _2: 'color_2',
    _3: 'color_3',
    _4: 'color_4',
    _5: 'color_5',
    _6: 'color_6',
    _7: 'color_7',
    _8: 'color_8',
    _9: 'color_9',
    _10: 'color_10',
    _11: 'color_11',
    _12: 'color_12',
    _13: 'color_13',
    _14: 'color_14'
} as const;
export type ColorBeanKeyEnum = typeof ColorBeanKeyEnum[keyof typeof ColorBeanKeyEnum];

/**
 * 
 * @export
 * @interface ColumnBean
 */
export interface ColumnBean {
    /**
     * 
     * @type {number}
     * @memberof ColumnBean
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof ColumnBean
     */
    min?: number;
    /**
     * 
     * @type {string}
     * @memberof ColumnBean
     */
    name?: string;
    /**
     * 
     * @type {Array<GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner>}
     * @memberof ColumnBean
     */
    statuses?: Array<GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner>;
}
/**
 * 
 * @export
 * @interface ColumnConfigBean
 */
export interface ColumnConfigBean {
    /**
     * 
     * @type {Array<GetConfiguration200ResponseColumnConfigColumnsInner>}
     * @memberof ColumnConfigBean
     */
    columns?: Array<GetConfiguration200ResponseColumnConfigColumnsInner>;
    /**
     * 
     * @type {string}
     * @memberof ColumnConfigBean
     */
    constraintType?: string;
}
/**
 * A command to be actioned for this Deployment
 * - command
 * 
 * @export
 * @interface Command
 */
export interface Command {
    /**
     * The command name.
     * 
     * @type {string}
     * @memberof Command
     */
    command?: string;
}
/**
 * Represents a commit in the version control system.
 * @export
 * @interface Commit
 */
export interface Commit {
    /**
     * The identifier or hash of the commit. Will be used for cross entity linking. Must be unique for all commits within a repository, i.e., only one commit can have ID 'X' in repository 'Y'. But adding, e.g., a branch with ID 'X' to repository 'Y' is acceptable. Only alphanumeric characters, and '~.-_', are allowed. Max length is 1024 characters
     * @type {string}
     * @memberof Commit
     */
    id: string;
    /**
     * List of issues keys that this entity is associated with. They must be valid Jira issue keys.
     * @type {Array<string>}
     * @memberof Commit
     */
    issueKeys: Array<string>;
    /**
     * An ID used to apply an ordering to updates for this entity in the case of out-of-order receipt of update requests. This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the provider system, but other alternatives are valid (e.g. a provider could store a counter against each entity and increment that on each update to Jira). Updates for an entity that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * @type {number}
     * @memberof Commit
     */
    updateSequenceId: number;
    /**
     * Deprecated. Use the id field instead.
     * @type {string}
     * @memberof Commit
     */
    hash?: string;
    /**
     * The set of flags for this commit
     * @type {Set<string>}
     * @memberof Commit
     */
    flags?: Array<CommitFlagsEnum>;
    /**
     * The commit message. Max length is 1024 characters. If anything longer is supplied, it will be truncated down to 1024 characters.
     * @type {string}
     * @memberof Commit
     */
    message: string;
    /**
     * 
     * @type {Author}
     * @memberof Commit
     */
    author: Author;
    /**
     * The total number of files added, removed, or modified by this commit
     * @type {number}
     * @memberof Commit
     */
    fileCount: number;
    /**
     * The URL of this commit. Max length is 2000 characters.
     * @type {string}
     * @memberof Commit
     */
    url: string;
    /**
     * List of file changes. Max number of files is 10. Currently, only the first 5 files are shown (sorted by path) in the UI. This UI behavior may change without notice.
     * @type {Array<any>}
     * @memberof Commit
     */
    files?: Array<any>;
    /**
     * The author timestamp of this commit. Formatted as a UTC ISO 8601 date time format.
     * @type {string}
     * @memberof Commit
     */
    authorTimestamp: string;
    /**
     * Shortened identifier for this commit, used for display. Max length is 255 characters.
     * @type {string}
     * @memberof Commit
     */
    displayId: string;
}


/**
 * @export
 */
export const CommitFlagsEnum = {
    MergeCommit: 'MERGE_COMMIT'
} as const;
export type CommitFlagsEnum = typeof CommitFlagsEnum[keyof typeof CommitFlagsEnum];

/**
 * Data related to a specific component in a specific workspace that is affected by incidents.
 * 
 * @export
 * @interface Component
 */
export interface Component {
    /**
     * The DevOpsComponentData schema version used for this devops component data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof Component
     */
    schemaVersion: ComponentSchemaVersionEnum;
    /**
     * The identifier for the DevOps Component. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof Component
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this DevOps Component in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each DevOps Component and increment that on each update to Jira).
     * 
     * Updates for a DevOps Component that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof Component
     */
    updateSequenceNumber: number;
    /**
     * The human-readable name for the DevOps Component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof Component
     */
    name: string;
    /**
     * The human-readable name for the Provider that owns this DevOps Component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof Component
     */
    providerName?: string;
    /**
     * A description of the DevOps Component in Markdown format. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof Component
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this devops component, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the component in that project).
     * 
     * @type {string}
     * @memberof Component
     */
    url: string;
    /**
     * A URL to display a logo representing this devops component, if available.
     * 
     * @type {string}
     * @memberof Component
     */
    avatarUrl: string;
    /**
     * The tier of the component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof Component
     */
    tier: ComponentTierEnum;
    /**
     * The type of the component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof Component
     */
    componentType: ComponentComponentTypeEnum;
    /**
     * The last-updated timestamp to present to the user the last time the DevOps Component was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof Component
     */
    lastUpdated: string;
}


/**
 * @export
 */
export const ComponentSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type ComponentSchemaVersionEnum = typeof ComponentSchemaVersionEnum[keyof typeof ComponentSchemaVersionEnum];

/**
 * @export
 */
export const ComponentTierEnum = {
    _1: 'Tier 1',
    _2: 'Tier 2',
    _3: 'Tier 3',
    _4: 'Tier 4'
} as const;
export type ComponentTierEnum = typeof ComponentTierEnum[keyof typeof ComponentTierEnum];

/**
 * @export
 */
export const ComponentComponentTypeEnum = {
    Service: 'Service',
    Application: 'Application',
    Library: 'Library',
    Capability: 'Capability',
    CloudResource: 'Cloud resource',
    DataPipeline: 'Data pipeline',
    MachineLearningModel: 'Machine learning model',
    UiElement: 'UI element',
    Website: 'Website',
    Other: 'Other'
} as const;
export type ComponentComponentTypeEnum = typeof ComponentComponentTypeEnum[keyof typeof ComponentComponentTypeEnum];

/**
 * 
 * @export
 * @interface CreateBoardRequest
 */
export interface CreateBoardRequest {
    /**
     * 
     * @type {number}
     * @memberof CreateBoardRequest
     */
    filterId?: number;
    /**
     * 
     * @type {CreateBoardRequestLocation}
     * @memberof CreateBoardRequest
     */
    location?: CreateBoardRequestLocation;
    /**
     * 
     * @type {string}
     * @memberof CreateBoardRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBoardRequest
     */
    type?: CreateBoardRequestTypeEnum;
}


/**
 * @export
 */
export const CreateBoardRequestTypeEnum = {
    Kanban: 'kanban',
    Scrum: 'scrum',
    Agility: 'agility'
} as const;
export type CreateBoardRequestTypeEnum = typeof CreateBoardRequestTypeEnum[keyof typeof CreateBoardRequestTypeEnum];

/**
 * 
 * @export
 * @interface CreateBoardRequestLocation
 */
export interface CreateBoardRequestLocation {
    /**
     * 
     * @type {string}
     * @memberof CreateBoardRequestLocation
     */
    projectKeyOrId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBoardRequestLocation
     */
    type?: CreateBoardRequestLocationTypeEnum;
}


/**
 * @export
 */
export const CreateBoardRequestLocationTypeEnum = {
    Project: 'project',
    User: 'user'
} as const;
export type CreateBoardRequestLocationTypeEnum = typeof CreateBoardRequestLocationTypeEnum[keyof typeof CreateBoardRequestLocationTypeEnum];

/**
 * 
 * @export
 * @interface CreateSprintRequest
 */
export interface CreateSprintRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSprintRequest
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSprintRequest
     */
    goal?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSprintRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSprintRequest
     */
    originBoardId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSprintRequest
     */
    startDate?: string;
}
/**
 * Data related to a specific deployment in a specific environment that the deployment is present in.
 * Must specify one of `issueKeys` or `associations`.
 * 
 * @export
 * @interface DeploymentData
 */
export interface DeploymentData {
    /**
     * This is the identifier for the deployment. It must be unique for the specified pipeline and environment. It must be a monotonically increasing number, as this is used to sequence the deployments.
     * 
     * @type {number}
     * @memberof DeploymentData
     */
    deploymentSequenceNumber: number;
    /**
     * A number used to apply an order to the updates to the deployment, as identified by the deploymentSequenceNumber, in the case of out-of-order receipt of update requests. It must be a monotonically increasing number. For example, epoch time could be one way to generate the updateSequenceNumber.
     * 
     * @type {number}
     * @memberof DeploymentData
     */
    updateSequenceNumber: number;
    /**
     * Deprecated. The Jira issue keys to associate the Deployment information with.
     * Should replace this field with the "associations" field to associate Deployment information with issueKeys or other types of associations.
     * 
     * @type {Array<string>}
     * @memberof DeploymentData
     * @deprecated
     */
    issueKeys?: Array<string>;
    /**
     * The entities to associate the Deployment information with.
     * It must contain at least one of IssueIdOrKeysAssociation or ServiceIdOrKeysAssociation.
     * 
     * @type {Array<DeploymentDataAssociationsInner>}
     * @memberof DeploymentData
     */
    associations?: Array<DeploymentDataAssociationsInner>;
    /**
     * The human-readable name for the deployment. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    displayName: string;
    /**
     * A URL users can use to link to this deployment, in this environment.
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    url: string;
    /**
     * A short description of the deployment
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    description: string;
    /**
     * The last-updated timestamp to present to the user as a summary of the state of the deployment.
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    lastUpdated: string;
    /**
     * An (optional) additional label that may be displayed with deployment information. Can be used to display version information etc. for the deployment.
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    label?: string;
    /**
     * The duration of the deployment (in seconds).
     * 
     * @type {number}
     * @memberof DeploymentData
     */
    duration?: number;
    /**
     * The state of the deployment
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    state: DeploymentDataStateEnum;
    /**
     * 
     * @type {Pipeline}
     * @memberof DeploymentData
     */
    pipeline: Pipeline;
    /**
     * 
     * @type {Environment}
     * @memberof DeploymentData
     */
    environment: Environment;
    /**
     * A list of commands to be actioned for this Deployment
     * 
     * @type {Array<Command>}
     * @memberof DeploymentData
     */
    commands?: Array<Command>;
    /**
     * The DeploymentData schema version used for this deployment data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof DeploymentData
     */
    schemaVersion?: DeploymentDataSchemaVersionEnum;
}


/**
 * @export
 */
export const DeploymentDataStateEnum = {
    Unknown: 'unknown',
    Pending: 'pending',
    InProgress: 'in_progress',
    Cancelled: 'cancelled',
    Failed: 'failed',
    RolledBack: 'rolled_back',
    Successful: 'successful'
} as const;
export type DeploymentDataStateEnum = typeof DeploymentDataStateEnum[keyof typeof DeploymentDataStateEnum];

/**
 * @export
 */
export const DeploymentDataSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type DeploymentDataSchemaVersionEnum = typeof DeploymentDataSchemaVersionEnum[keyof typeof DeploymentDataSchemaVersionEnum];

/**
 * 
 * @export
 * @interface DeploymentDataAssociationsInner
 */
export interface DeploymentDataAssociationsInner {
    /**
     * Defines the association type. Currently supported entities can be found in this field's value enums list.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInner
     */
    associationType: DeploymentDataAssociationsInnerAssociationTypeEnum;
    /**
     * The entity keys that represent the entities to be associated.
     * The number of values counted across all associationTypes (issueKeys, issueIdOrKeys, serviceIdOrKeys, supported ATIs and entity associations) must not exceed a limit of 500.
     * 
     * @type {Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>}
     * @memberof DeploymentDataAssociationsInner
     */
    values: Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>;
}


/**
 * @export
 */
export const DeploymentDataAssociationsInnerAssociationTypeEnum = {
    Commit: 'commit',
    Repository: 'repository'
} as const;
export type DeploymentDataAssociationsInnerAssociationTypeEnum = typeof DeploymentDataAssociationsInnerAssociationTypeEnum[keyof typeof DeploymentDataAssociationsInnerAssociationTypeEnum];

/**
 * An association type referencing issues in Jira.
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf
 */
export interface DeploymentDataAssociationsInnerAnyOf {
    /**
     * Defines the asssociation type.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf
     */
    associationType: DeploymentDataAssociationsInnerAnyOfAssociationTypeEnum;
    /**
     * The Jira issue keys to associate the Deployment information with.
     * 
     * The number of values counted across all associationTypes (issueKeys,
     * issueIdOrKeys and serviceIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof DeploymentDataAssociationsInnerAnyOf
     */
    values: Array<string>;
}


/**
 * @export
 */
export const DeploymentDataAssociationsInnerAnyOfAssociationTypeEnum = {
    IssueKeys: 'issueKeys',
    IssueIdOrKeys: 'issueIdOrKeys'
} as const;
export type DeploymentDataAssociationsInnerAnyOfAssociationTypeEnum = typeof DeploymentDataAssociationsInnerAnyOfAssociationTypeEnum[keyof typeof DeploymentDataAssociationsInnerAnyOfAssociationTypeEnum];

/**
 * An association type referencing service id or keys.
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf1
 */
export interface DeploymentDataAssociationsInnerAnyOf1 {
    /**
     * Defines the asssociation type.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf1
     */
    associationType: DeploymentDataAssociationsInnerAnyOf1AssociationTypeEnum;
    /**
     * The service id or keys to associate the Deployment information with.
     * 
     * The number of values counted across all associationTypes (issueKeys,
     * issueIdOrKeys and serviceIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof DeploymentDataAssociationsInnerAnyOf1
     */
    values: Array<string>;
}


/**
 * @export
 */
export const DeploymentDataAssociationsInnerAnyOf1AssociationTypeEnum = {
    ServiceIdOrKeys: 'serviceIdOrKeys'
} as const;
export type DeploymentDataAssociationsInnerAnyOf1AssociationTypeEnum = typeof DeploymentDataAssociationsInnerAnyOf1AssociationTypeEnum[keyof typeof DeploymentDataAssociationsInnerAnyOf1AssociationTypeEnum];

/**
 * An association type referencing another DevOps entity. Initially only commit entities are supported for this type of association.
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf2
 */
export interface DeploymentDataAssociationsInnerAnyOf2 {
    /**
     * Defines the association type. Currently supported entities can be found in this field's value enums list.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2
     */
    associationType: DeploymentDataAssociationsInnerAnyOf2AssociationTypeEnum;
    /**
     * The entity keys that represent the entities to be associated.
     * The number of values counted across all associationTypes (issueKeys, issueIdOrKeys, serviceIdOrKeys, supported ATIs and entity associations) must not exceed a limit of 500.
     * 
     * @type {Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>}
     * @memberof DeploymentDataAssociationsInnerAnyOf2
     */
    values: Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>;
}


/**
 * @export
 */
export const DeploymentDataAssociationsInnerAnyOf2AssociationTypeEnum = {
    Commit: 'commit',
    Repository: 'repository'
} as const;
export type DeploymentDataAssociationsInnerAnyOf2AssociationTypeEnum = typeof DeploymentDataAssociationsInnerAnyOf2AssociationTypeEnum[keyof typeof DeploymentDataAssociationsInnerAnyOf2AssociationTypeEnum];

/**
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf2ValuesInner
 */
export interface DeploymentDataAssociationsInnerAnyOf2ValuesInner {
    /**
     * The hash for the Commit.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2ValuesInner
     */
    commitHash: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2ValuesInner
     */
    repositoryId: string;
}
/**
 * Identifies an individual commit in a repository.
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf
 */
export interface DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf {
    /**
     * The hash for the Commit.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf
     */
    commitHash: string;
    /**
     * The ID of the Repository that the Commit belongs to.
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf
     */
    repositoryId: string;
}
/**
 * Identifies an individual repository.
 * 
 * @export
 * @interface DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf1
 */
export interface DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf1 {
    /**
     * 
     * @type {string}
     * @memberof DeploymentDataAssociationsInnerAnyOf2ValuesInnerAnyOf1
     */
    repositoryId: string;
}
/**
 * Fields that uniquely reference a deployment.
 * 
 * @export
 * @interface DeploymentKey
 */
export interface DeploymentKey {
    /**
     * The identifier of a pipeline, must be unique for the provider.
     * 
     * @type {string}
     * @memberof DeploymentKey
     */
    pipelineId: string;
    /**
     * The identifier of an environment, must be unique for the provider so that it can be shared across pipelines.
     * 
     * @type {string}
     * @memberof DeploymentKey
     */
    environmentId: string;
    /**
     * This is the identifier for the deployment. It must be unique for the specified pipeline and environment. It must be a monotonically increasing number, as this is used to sequence the deployments.
     * 
     * @type {number}
     * @memberof DeploymentKey
     */
    deploymentSequenceNumber: number;
}
/**
 * Request object for development information push operations, entities are grouped by repository
 * @export
 * @interface DevInformation
 */
export interface DevInformation {
    /**
     * List of repositories containing development information. Must not contain duplicates. Maximum number of entities across all repositories is 1000.
     * @type {Array<Repository>}
     * @memberof DevInformation
     */
    repositories: Array<Repository>;
    /**
     * Flag to prevent automatic issue transitions and smart commits being fired, default is false.
     * @type {boolean}
     * @memberof DevInformation
     */
    preventTransitions?: boolean;
    /**
     * Indicates the operation being performed by the provider system when sending this data. "NORMAL" - Data received during normal operation (e.g. a user pushing a branch). "BACKFILL" - Data received while backfilling existing data (e.g. indexing a newly connected account). Default is "NORMAL". Please note that "BACKFILL" operations have a much higher rate-limiting threshold but are also processed slower in comparison to "NORMAL" operations.
     * @type {string}
     * @memberof DevInformation
     */
    operationType?: DevInformationOperationTypeEnum;
    /**
     * Arbitrary properties to tag the submitted repositories with. These properties can be used for delete operations to e.g. clean up all development information associated with an account in the event that the account is removed from the provider system. Note that these properties will never be returned with repository or entity data. They are not intended for use as metadata to associate with a repository. Maximum length of each key or value is 255 characters. Maximum allowed number of properties key/value pairs is 5. Properties keys cannot start with '_' character. Properties keys cannot contain ':' character. 
     * @type {{ [key: string]: string; }}
     * @memberof DevInformation
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {ProviderMetadata}
     * @memberof DevInformation
     */
    providerMetadata?: ProviderMetadata;
}


/**
 * @export
 */
export const DevInformationOperationTypeEnum = {
    Normal: 'NORMAL',
    Backfill: 'BACKFILL'
} as const;
export type DevInformationOperationTypeEnum = typeof DevInformationOperationTypeEnum[keyof typeof DevInformationOperationTypeEnum];

/**
 * Represents an error that happened with particular entity.
 * @export
 * @interface EntityError
 */
export interface EntityError {
    /**
     * Entity id
     * @type {string}
     * @memberof EntityError
     */
    id: string;
    /**
     * Error message
     * @type {Array<ErrorMessage>}
     * @memberof EntityError
     */
    errorMessages?: Array<ErrorMessage>;
}
/**
 * IDs of entities grouped by entity type
 * @export
 * @interface EntityIds
 */
export interface EntityIds {
    /**
     * Commits IDs
     * @type {Array<string>}
     * @memberof EntityIds
     */
    commits?: Array<string>;
    /**
     * Branch IDs
     * @type {Array<string>}
     * @memberof EntityIds
     */
    branches?: Array<string>;
    /**
     * Pull request IDs
     * @type {Array<string>}
     * @memberof EntityIds
     */
    pullRequests?: Array<string>;
}
/**
 * 
 * @export
 * @interface Entry
 */
export interface Entry {
    /**
     * 
     * @type {Array<string>}
     * @memberof Entry
     */
    errors?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Entry
     */
    issueId?: number;
    /**
     * 
     * @type {string}
     * @memberof Entry
     */
    issueKey?: string;
    /**
     * 
     * @type {number}
     * @memberof Entry
     */
    status?: number;
}
/**
 * The environment that the deployment is present in.
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * The identifier of this environment, must be unique for the provider so that it can be shared across pipelines.
     * 
     * @type {string}
     * @memberof Environment
     */
    id: string;
    /**
     * The name of the environment to present to the user.
     * 
     * @type {string}
     * @memberof Environment
     */
    displayName: string;
    /**
     * The type of the environment.
     * 
     * @type {string}
     * @memberof Environment
     */
    type: EnvironmentTypeEnum;
}


/**
 * @export
 */
export const EnvironmentTypeEnum = {
    Unmapped: 'unmapped',
    Development: 'development',
    Testing: 'testing',
    Staging: 'staging',
    Production: 'production'
} as const;
export type EnvironmentTypeEnum = typeof EnvironmentTypeEnum[keyof typeof EnvironmentTypeEnum];

/**
 * Details of a single environment.
 * 
 * At the simplest this must be the name of the environment.
 * 
 * Ideally there is also type information which may be used to group data from multiple Feature Flags and other entities for visualisation in the UI.
 * 
 * @export
 * @interface EnvironmentDetails
 */
export interface EnvironmentDetails {
    /**
     * The name of the environment.
     * @type {string}
     * @memberof EnvironmentDetails
     */
    name: string;
    /**
     * The 'type' or 'category' of environment this environment belongs to.
     * @type {string}
     * @memberof EnvironmentDetails
     */
    type?: EnvironmentDetailsTypeEnum;
}


/**
 * @export
 */
export const EnvironmentDetailsTypeEnum = {
    Development: 'development',
    Testing: 'testing',
    Staging: 'staging',
    Production: 'production'
} as const;
export type EnvironmentDetailsTypeEnum = typeof EnvironmentDetailsTypeEnum[keyof typeof EnvironmentDetailsTypeEnum];

/**
 * 
 * @export
 * @interface EpicRankRequestBean
 */
export interface EpicRankRequestBean {
    /**
     * 
     * @type {string}
     * @memberof EpicRankRequestBean
     */
    rankAfterEpic?: string;
    /**
     * 
     * @type {string}
     * @memberof EpicRankRequestBean
     */
    rankBeforeEpic?: string;
    /**
     * 
     * @type {number}
     * @memberof EpicRankRequestBean
     */
    rankCustomFieldId?: number;
}
/**
 * 
 * @export
 * @interface EpicUpdateBean
 */
export interface EpicUpdateBean {
    /**
     * 
     * @type {PartiallyUpdateEpicRequestColor}
     * @memberof EpicUpdateBean
     */
    color?: PartiallyUpdateEpicRequestColor;
    /**
     * 
     * @type {boolean}
     * @memberof EpicUpdateBean
     */
    done?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EpicUpdateBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EpicUpdateBean
     */
    summary?: string;
}
/**
 * A message supplied in the case of an error.
 * @export
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     * A human-readable message describing the error.
     * @type {string}
     * @memberof ErrorMessage
     */
    message: string;
    /**
     * An optional trace ID that can be used by Jira developers to locate the source of the error.
     * @type {string}
     * @memberof ErrorMessage
     */
    errorTraceId?: string;
}
/**
 * A message supplied in the case of an error.
 * @export
 * @interface ErrorMessage1
 */
export interface ErrorMessage1 {
    /**
     * A human-readable message describing the error.
     * @type {string}
     * @memberof ErrorMessage1
     */
    message: string;
    /**
     * An optional trace ID that can be used by Jira developers to locate the source of the error.
     * @type {string}
     * @memberof ErrorMessage1
     */
    errorTraceId?: string;
}
/**
 * A response returned in the case of an error.
 * @export
 * @interface ErrorMessages
 */
export interface ErrorMessages {
    /**
     * List of errors occurred.
     * @type {Array<ErrorMessage>}
     * @memberof ErrorMessages
     */
    errorMessages: Array<ErrorMessage>;
}
/**
 * 
 * @export
 * @interface EstimateIssueForBoardRequest
 */
export interface EstimateIssueForBoardRequest {
    /**
     * 
     * @type {string}
     * @memberof EstimateIssueForBoardRequest
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface EstimationConfigBean
 */
export interface EstimationConfigBean {
    /**
     * 
     * @type {GetConfiguration200ResponseEstimationField}
     * @memberof EstimationConfigBean
     */
    field?: GetConfiguration200ResponseEstimationField;
    /**
     * 
     * @type {string}
     * @memberof EstimationConfigBean
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface EstimationConfigurationBean
 */
export interface EstimationConfigurationBean {
    /**
     * 
     * @type {string}
     * @memberof EstimationConfigurationBean
     */
    localisedDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimationConfigurationBean
     */
    localisedName?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimationConfigurationBean
     */
    value?: EstimationConfigurationBeanValueEnum;
}


/**
 * @export
 */
export const EstimationConfigurationBeanValueEnum = {
    StoryPoints: 'STORY_POINTS',
    OriginalEstimate: 'ORIGINAL_ESTIMATE'
} as const;
export type EstimationConfigurationBeanValueEnum = typeof EstimationConfigurationBeanValueEnum[keyof typeof EstimationConfigurationBeanValueEnum];

/**
 * 
 * @export
 * @interface EstimationFieldBean
 */
export interface EstimationFieldBean {
    /**
     * 
     * @type {string}
     * @memberof EstimationFieldBean
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof EstimationFieldBean
     */
    fieldId?: string;
}
/**
 * Whether there is data for the properties supplied in a query
 * @export
 * @interface ExistsForPropertiesResponse
 */
export interface ExistsForPropertiesResponse {
    /**
     * Whether there is data matching the query
     * @type {boolean}
     * @memberof ExistsForPropertiesResponse
     */
    readonly hasDataMatchingProperties?: boolean;
}
/**
 * 
 * @export
 * @interface FeatureBean
 */
export interface FeatureBean {
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    boardFeature?: FeatureBeanBoardFeatureEnum;
    /**
     * 
     * @type {number}
     * @memberof FeatureBean
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    featureType?: FeatureBeanFeatureTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    imageUri?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    learnMoreArticleId?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    learnMoreLink?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    localisedDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    localisedGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    localisedName?: string;
    /**
     * 
     * @type {Array<GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner>}
     * @memberof FeatureBean
     */
    permissibleEstimationTypes?: Array<GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner>;
    /**
     * 
     * @type {string}
     * @memberof FeatureBean
     */
    state?: FeatureBeanStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureBean
     */
    toggleLocked?: boolean;
}


/**
 * @export
 */
export const FeatureBeanBoardFeatureEnum = {
    SimpleRoadmap: 'SIMPLE_ROADMAP',
    Backlog: 'BACKLOG',
    Sprints: 'SPRINTS',
    Calendar: 'CALENDAR',
    Devtools: 'DEVTOOLS',
    Reports: 'REPORTS',
    Estimation: 'ESTIMATION',
    Pages: 'PAGES',
    Code: 'CODE',
    Security: 'SECURITY',
    Requests: 'REQUESTS',
    Incidents: 'INCIDENTS',
    Releases: 'RELEASES',
    Deployments: 'DEPLOYMENTS',
    IssueNavigator: 'ISSUE_NAVIGATOR',
    OnCallSchedule: 'ON_CALL_SCHEDULE',
    Board: 'BOARD',
    Goals: 'GOALS',
    ListView: 'LIST_VIEW'
} as const;
export type FeatureBeanBoardFeatureEnum = typeof FeatureBeanBoardFeatureEnum[keyof typeof FeatureBeanBoardFeatureEnum];

/**
 * @export
 */
export const FeatureBeanFeatureTypeEnum = {
    Basic: 'BASIC',
    Estimation: 'ESTIMATION'
} as const;
export type FeatureBeanFeatureTypeEnum = typeof FeatureBeanFeatureTypeEnum[keyof typeof FeatureBeanFeatureTypeEnum];

/**
 * @export
 */
export const FeatureBeanStateEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    ComingSoon: 'COMING_SOON'
} as const;
export type FeatureBeanStateEnum = typeof FeatureBeanStateEnum[keyof typeof FeatureBeanStateEnum];

/**
 * Data related to a single Feature Flag, across any Environment that the flag is present in.
 * 
 * @export
 * @interface FeatureFlagData
 */
export interface FeatureFlagData {
    /**
     * The FeatureFlagData schema version used for this flag data. 
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof FeatureFlagData
     */
    schemaVersion?: FeatureFlagDataSchemaVersionEnum;
    /**
     * The identifier for the Feature Flag. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof FeatureFlagData
     */
    id: string;
    /**
     * The identifier that users would use to reference the Feature Flag in their source code etc.
     * 
     * Will be made available via the UI for users to copy into their source code etc.
     * 
     * @type {string}
     * @memberof FeatureFlagData
     */
    key: string;
    /**
     * An ID used to apply an ordering to updates for this Feature Flag in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Feature Flag and increment that on each update to Jira).
     * 
     * Updates for a Feature Flag that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof FeatureFlagData
     */
    updateSequenceId: number;
    /**
     * The human-readable name for the Feature Flag. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof FeatureFlagData
     */
    displayName?: string;
    /**
     * The Jira issue keys to associate the Feature Flag information with.
     * 
     * @type {Array<string>}
     * @memberof FeatureFlagData
     */
    issueKeys: Array<string>;
    /**
     * 
     * @type {FeatureFlagSummary}
     * @memberof FeatureFlagData
     */
    summary: FeatureFlagSummary;
    /**
     * Detail information for this Feature Flag.
     * 
     * This may be information for each environment the Feature Flag is defined in or a selection of environments made by the user, as appropriate.
     * 
     * @type {Array<FeatureFlagDetails>}
     * @memberof FeatureFlagData
     */
    details: Array<FeatureFlagDetails>;
}


/**
 * @export
 */
export const FeatureFlagDataSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type FeatureFlagDataSchemaVersionEnum = typeof FeatureFlagDataSchemaVersionEnum[keyof typeof FeatureFlagDataSchemaVersionEnum];

/**
 * Details of a Feature Flag for a single environment.
 * @export
 * @interface FeatureFlagDetails
 */
export interface FeatureFlagDetails {
    /**
     * A URL users can use to link to this Feature Flag, in this environment.
     * 
     * @type {string}
     * @memberof FeatureFlagDetails
     */
    url: string;
    /**
     * The last-updated timestamp for this Feature Flag, in this environment.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof FeatureFlagDetails
     */
    lastUpdated: string;
    /**
     * 
     * @type {EnvironmentDetails}
     * @memberof FeatureFlagDetails
     */
    environment: EnvironmentDetails;
    /**
     * 
     * @type {FeatureFlagStatus}
     * @memberof FeatureFlagDetails
     */
    status: FeatureFlagStatus;
}
/**
 * Information about the rollout of a Feature Flag in an environment (or in summary).
 * 
 * Only one of 'percentage', 'text', or 'rules' should be provided. They will be used in that order if multiple are present.
 * 
 * This information may be presented to the user in the UI.
 * 
 * @export
 * @interface FeatureFlagRollout
 */
export interface FeatureFlagRollout {
    /**
     * If the Feature Flag rollout is a simple percentage rollout
     * 
     * @type {number}
     * @memberof FeatureFlagRollout
     */
    percentage?: number;
    /**
     * A text status to display that represents the rollout. This could be e.g. a named cohort.
     * 
     * @type {string}
     * @memberof FeatureFlagRollout
     */
    text?: string;
    /**
     * A count of the number of rules active for this Feature Flag in an environment.
     * 
     * @type {number}
     * @memberof FeatureFlagRollout
     */
    rules?: number;
}
/**
 * Status information about a single Feature Flag.
 * 
 * @export
 * @interface FeatureFlagStatus
 */
export interface FeatureFlagStatus {
    /**
     * Whether the Feature Flag is enabled in the given environment (or in summary).
     * 
     * Enabled may imply a partial rollout, which can be described using the 'rollout' field.
     * 
     * @type {boolean}
     * @memberof FeatureFlagStatus
     */
    enabled: boolean;
    /**
     * The value served by this Feature Flag when it is disabled. This could be the actual value or an alias, as appropriate.
     * 
     * This value may be presented to the user in the UI.
     * 
     * @type {string}
     * @memberof FeatureFlagStatus
     */
    defaultValue?: string;
    /**
     * 
     * @type {FeatureFlagRollout}
     * @memberof FeatureFlagStatus
     */
    rollout?: FeatureFlagRollout;
}
/**
 * Summary information for a single Feature Flag.
 * 
 * Providers may elect to provide information from a specific environment, or they may choose to 'roll up' information from across multiple environments - whatever makes most sense in the Provider system.
 * 
 * This is the summary information that will be presented to the user on e.g. the Jira issue screen.
 * 
 * @export
 * @interface FeatureFlagSummary
 */
export interface FeatureFlagSummary {
    /**
     * A URL users can use to link to a summary view of this flag, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific environment, it might make sense to link the user to the flag in that environment).
     * 
     * @type {string}
     * @memberof FeatureFlagSummary
     */
    url?: string;
    /**
     * 
     * @type {FeatureFlagStatus}
     * @memberof FeatureFlagSummary
     */
    status: FeatureFlagStatus;
    /**
     * The last-updated timestamp to present to the user as a summary of the state of the Feature Flag.
     * 
     * Providers may choose to supply the last-updated timestamp from a specific environment, or the 'most recent' last-updated timestamp across all environments - whatever makes sense in the Provider system.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof FeatureFlagSummary
     */
    lastUpdated: string;
}
/**
 * 
 * @export
 * @interface FeatureResponseBean
 */
export interface FeatureResponseBean {
    /**
     * 
     * @type {Array<GetFeaturesForBoard200ResponseFeaturesInner>}
     * @memberof FeatureResponseBean
     */
    features?: Array<GetFeaturesForBoard200ResponseFeaturesInner>;
}
/**
 * 
 * @export
 * @interface FeatureToggleRequestBean
 */
export interface FeatureToggleRequestBean {
    /**
     * 
     * @type {number}
     * @memberof FeatureToggleRequestBean
     */
    boardId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FeatureToggleRequestBean
     */
    enabling?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FeatureToggleRequestBean
     */
    feature?: string;
}
/**
 * 
 * @export
 * @interface FieldEditBean
 */
export interface FieldEditBean {
    /**
     * 
     * @type {string}
     * @memberof FieldEditBean
     */
    value?: string;
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
     * 
     * @type {FieldMetadataSchema}
     * @memberof FieldMetadata
     */
    schema: FieldMetadataSchema;
}
/**
 * The data type of the field.
 * @export
 * @interface FieldMetadataSchema
 */
export interface FieldMetadataSchema {
    /**
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof FieldMetadataSchema
     */
    readonly configuration?: { [key: string]: any; };
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
     * The data type of the field.
     * @type {string}
     * @memberof FieldMetadataSchema
     */
    readonly type: string;
}
/**
 * 
 * @export
 * @interface GetAllBoards200Response
 */
export interface GetAllBoards200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllBoards200Response
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllBoards200Response
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllBoards200Response
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllBoards200Response
     */
    total?: number;
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInner>}
     * @memberof GetAllBoards200Response
     */
    values?: Array<GetAllBoards200ResponseValuesInner>;
}
/**
 * Details about a board.
 * @export
 * @interface GetAllBoards200ResponseValuesInner
 */
export interface GetAllBoards200ResponseValuesInner {
    /**
     * 
     * @type {GetAllBoards200ResponseValuesInnerAdmins}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    admins?: GetAllBoards200ResponseValuesInnerAdmins;
    /**
     * Whether the board can be edited.
     * @type {boolean}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    readonly canEdit?: boolean;
    /**
     * Whether the board is selected as a favorite.
     * @type {boolean}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    readonly favourite?: boolean;
    /**
     * The ID of the board.
     * @type {number}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    id?: number;
    /**
     * Whether the board is private.
     * @type {boolean}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    readonly isPrivate?: boolean;
    /**
     * 
     * @type {GetAllBoards200ResponseValuesInnerLocation}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    location?: GetAllBoards200ResponseValuesInnerLocation;
    /**
     * The name of the board.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    name?: string;
    /**
     * The URL of the board.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    readonly self?: string;
    /**
     * The type the board.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInner
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface GetAllBoards200ResponseValuesInnerAdmins
 */
export interface GetAllBoards200ResponseValuesInnerAdmins {
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner>}
     * @memberof GetAllBoards200ResponseValuesInnerAdmins
     */
    groups?: Array<GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner>;
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner>}
     * @memberof GetAllBoards200ResponseValuesInnerAdmins
     */
    users?: Array<GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner>;
}
/**
 * 
 * @export
 * @interface GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner
 */
export interface GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner {
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfGroupsInner
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
 */
export interface GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner {
    /**
     * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    accountId?: string;
    /**
     * Whether the user is active.
     * @type {boolean}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    active?: boolean;
    /**
     * 
     * @type {GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    avatarUrls?: GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls;
    /**
     * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    displayName?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The key of the user.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    key?: string;
    /**
     * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.  
     * The username of the user.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    name?: string;
    /**
     * The URL of the user.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInner
     */
    self?: string;
}
/**
 * The avatars of the user.
 * @export
 * @interface GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls
 */
export interface GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls {
    /**
     * The URL of the user's 16x16 pixel avatar.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the user's 24x24 pixel avatar.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the user's 32x32 pixel avatar.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the user's 48x48 pixel avatar.
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * The container that the board is located in.
 * @export
 * @interface GetAllBoards200ResponseValuesInnerLocation
 */
export interface GetAllBoards200ResponseValuesInnerLocation {
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    avatarURI?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    projectKey?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    projectTypeKey?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    userAccountId?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllBoards200ResponseValuesInnerLocation
     */
    userId?: number;
}
/**
 * 
 * @export
 * @interface GetAllQuickFilters200Response
 */
export interface GetAllQuickFilters200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetAllQuickFilters200Response
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200Response
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200Response
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200Response
     */
    total?: number;
    /**
     * 
     * @type {Array<GetAllQuickFilters200ResponseValuesInner>}
     * @memberof GetAllQuickFilters200Response
     */
    values?: Array<GetAllQuickFilters200ResponseValuesInner>;
}
/**
 * 
 * @export
 * @interface GetAllQuickFilters200ResponseValuesInner
 */
export interface GetAllQuickFilters200ResponseValuesInner {
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    jql?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAllQuickFilters200ResponseValuesInner
     */
    position?: number;
}
/**
 * 
 * @export
 * @interface GetBoardByFilterId200Response
 */
export interface GetBoardByFilterId200Response {
    /**
     * 
     * @type {boolean}
     * @memberof GetBoardByFilterId200Response
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetBoardByFilterId200Response
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBoardByFilterId200Response
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBoardByFilterId200Response
     */
    total?: number;
    /**
     * 
     * @type {Array<GetBoardByFilterId200ResponseValuesInner>}
     * @memberof GetBoardByFilterId200Response
     */
    values?: Array<GetBoardByFilterId200ResponseValuesInner>;
}
/**
 * 
 * @export
 * @interface GetBoardByFilterId200ResponseValuesInner
 */
export interface GetBoardByFilterId200ResponseValuesInner {
    /**
     * 
     * @type {number}
     * @memberof GetBoardByFilterId200ResponseValuesInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBoardByFilterId200ResponseValuesInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBoardByFilterId200ResponseValuesInner
     */
    self?: string;
}
/**
 * Data related to a specific component in a specific workspace that is affected by incidents.
 * 
 * @export
 * @interface GetComponentById200Response
 */
export interface GetComponentById200Response {
    /**
     * The DevOpsComponentData schema version used for this devops component data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    schemaVersion: GetComponentById200ResponseSchemaVersionEnum;
    /**
     * The identifier for the DevOps Component. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this DevOps Component in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each DevOps Component and increment that on each update to Jira).
     * 
     * Updates for a DevOps Component that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof GetComponentById200Response
     */
    updateSequenceNumber: number;
    /**
     * The human-readable name for the DevOps Component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    name: string;
    /**
     * The human-readable name for the Provider that owns this DevOps Component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    providerName?: string;
    /**
     * A description of the DevOps Component in Markdown format. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this devops component, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the component in that project).
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    url: string;
    /**
     * A URL to display a logo representing this devops component, if available.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    avatarUrl: string;
    /**
     * The tier of the component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    tier: GetComponentById200ResponseTierEnum;
    /**
     * The type of the component. Will be shown in the UI.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    componentType: GetComponentById200ResponseComponentTypeEnum;
    /**
     * The last-updated timestamp to present to the user the last time the DevOps Component was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof GetComponentById200Response
     */
    lastUpdated: string;
}


/**
 * @export
 */
export const GetComponentById200ResponseSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type GetComponentById200ResponseSchemaVersionEnum = typeof GetComponentById200ResponseSchemaVersionEnum[keyof typeof GetComponentById200ResponseSchemaVersionEnum];

/**
 * @export
 */
export const GetComponentById200ResponseTierEnum = {
    _1: 'Tier 1',
    _2: 'Tier 2',
    _3: 'Tier 3',
    _4: 'Tier 4'
} as const;
export type GetComponentById200ResponseTierEnum = typeof GetComponentById200ResponseTierEnum[keyof typeof GetComponentById200ResponseTierEnum];

/**
 * @export
 */
export const GetComponentById200ResponseComponentTypeEnum = {
    Service: 'Service',
    Application: 'Application',
    Library: 'Library',
    Capability: 'Capability',
    CloudResource: 'Cloud resource',
    DataPipeline: 'Data pipeline',
    MachineLearningModel: 'Machine learning model',
    UiElement: 'UI element',
    Website: 'Website',
    Other: 'Other'
} as const;
export type GetComponentById200ResponseComponentTypeEnum = typeof GetComponentById200ResponseComponentTypeEnum[keyof typeof GetComponentById200ResponseComponentTypeEnum];

/**
 * 
 * @export
 * @interface GetConfiguration200Response
 */
export interface GetConfiguration200Response {
    /**
     * 
     * @type {GetConfiguration200ResponseColumnConfig}
     * @memberof GetConfiguration200Response
     */
    columnConfig?: GetConfiguration200ResponseColumnConfig;
    /**
     * 
     * @type {GetConfiguration200ResponseEstimation}
     * @memberof GetConfiguration200Response
     */
    estimation?: GetConfiguration200ResponseEstimation;
    /**
     * 
     * @type {GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner}
     * @memberof GetConfiguration200Response
     */
    filter?: GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner;
    /**
     * 
     * @type {number}
     * @memberof GetConfiguration200Response
     */
    id?: number;
    /**
     * 
     * @type {CreateBoardRequestLocation}
     * @memberof GetConfiguration200Response
     */
    location?: CreateBoardRequestLocation;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200Response
     */
    name?: string;
    /**
     * 
     * @type {GetConfiguration200ResponseRanking}
     * @memberof GetConfiguration200Response
     */
    ranking?: GetConfiguration200ResponseRanking;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200Response
     */
    self?: string;
    /**
     * 
     * @type {GetConfiguration200ResponseSubQuery}
     * @memberof GetConfiguration200Response
     */
    subQuery?: GetConfiguration200ResponseSubQuery;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200Response
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseColumnConfig
 */
export interface GetConfiguration200ResponseColumnConfig {
    /**
     * 
     * @type {Array<GetConfiguration200ResponseColumnConfigColumnsInner>}
     * @memberof GetConfiguration200ResponseColumnConfig
     */
    columns?: Array<GetConfiguration200ResponseColumnConfigColumnsInner>;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseColumnConfig
     */
    constraintType?: string;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseColumnConfigColumnsInner
 */
export interface GetConfiguration200ResponseColumnConfigColumnsInner {
    /**
     * 
     * @type {number}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInner
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInner
     */
    min?: number;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInner
     */
    name?: string;
    /**
     * 
     * @type {Array<GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner>}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInner
     */
    statuses?: Array<GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner>;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner
 */
export interface GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner {
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseColumnConfigColumnsInnerStatusesInner
     */
    self?: string;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseEstimation
 */
export interface GetConfiguration200ResponseEstimation {
    /**
     * 
     * @type {GetConfiguration200ResponseEstimationField}
     * @memberof GetConfiguration200ResponseEstimation
     */
    field?: GetConfiguration200ResponseEstimationField;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseEstimation
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseEstimationField
 */
export interface GetConfiguration200ResponseEstimationField {
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseEstimationField
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseEstimationField
     */
    fieldId?: string;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseRanking
 */
export interface GetConfiguration200ResponseRanking {
    /**
     * 
     * @type {number}
     * @memberof GetConfiguration200ResponseRanking
     */
    rankCustomFieldId?: number;
}
/**
 * 
 * @export
 * @interface GetConfiguration200ResponseSubQuery
 */
export interface GetConfiguration200ResponseSubQuery {
    /**
     * 
     * @type {string}
     * @memberof GetConfiguration200ResponseSubQuery
     */
    query?: string;
}
/**
 * 
 * @export
 * @interface GetFeaturesForBoard200Response
 */
export interface GetFeaturesForBoard200Response {
    /**
     * 
     * @type {Array<GetFeaturesForBoard200ResponseFeaturesInner>}
     * @memberof GetFeaturesForBoard200Response
     */
    features?: Array<GetFeaturesForBoard200ResponseFeaturesInner>;
}
/**
 * 
 * @export
 * @interface GetFeaturesForBoard200ResponseFeaturesInner
 */
export interface GetFeaturesForBoard200ResponseFeaturesInner {
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    boardFeature?: GetFeaturesForBoard200ResponseFeaturesInnerBoardFeatureEnum;
    /**
     * 
     * @type {number}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    featureType?: GetFeaturesForBoard200ResponseFeaturesInnerFeatureTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    imageUri?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    learnMoreArticleId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    learnMoreLink?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    localisedDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    localisedGroup?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    localisedName?: string;
    /**
     * 
     * @type {Array<GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner>}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    permissibleEstimationTypes?: Array<GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner>;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    state?: GetFeaturesForBoard200ResponseFeaturesInnerStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInner
     */
    toggleLocked?: boolean;
}


/**
 * @export
 */
export const GetFeaturesForBoard200ResponseFeaturesInnerBoardFeatureEnum = {
    SimpleRoadmap: 'SIMPLE_ROADMAP',
    Backlog: 'BACKLOG',
    Sprints: 'SPRINTS',
    Calendar: 'CALENDAR',
    Devtools: 'DEVTOOLS',
    Reports: 'REPORTS',
    Estimation: 'ESTIMATION',
    Pages: 'PAGES',
    Code: 'CODE',
    Security: 'SECURITY',
    Requests: 'REQUESTS',
    Incidents: 'INCIDENTS',
    Releases: 'RELEASES',
    Deployments: 'DEPLOYMENTS',
    IssueNavigator: 'ISSUE_NAVIGATOR',
    OnCallSchedule: 'ON_CALL_SCHEDULE',
    Board: 'BOARD',
    Goals: 'GOALS',
    ListView: 'LIST_VIEW'
} as const;
export type GetFeaturesForBoard200ResponseFeaturesInnerBoardFeatureEnum = typeof GetFeaturesForBoard200ResponseFeaturesInnerBoardFeatureEnum[keyof typeof GetFeaturesForBoard200ResponseFeaturesInnerBoardFeatureEnum];

/**
 * @export
 */
export const GetFeaturesForBoard200ResponseFeaturesInnerFeatureTypeEnum = {
    Basic: 'BASIC',
    Estimation: 'ESTIMATION'
} as const;
export type GetFeaturesForBoard200ResponseFeaturesInnerFeatureTypeEnum = typeof GetFeaturesForBoard200ResponseFeaturesInnerFeatureTypeEnum[keyof typeof GetFeaturesForBoard200ResponseFeaturesInnerFeatureTypeEnum];

/**
 * @export
 */
export const GetFeaturesForBoard200ResponseFeaturesInnerStateEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED',
    ComingSoon: 'COMING_SOON'
} as const;
export type GetFeaturesForBoard200ResponseFeaturesInnerStateEnum = typeof GetFeaturesForBoard200ResponseFeaturesInnerStateEnum[keyof typeof GetFeaturesForBoard200ResponseFeaturesInnerStateEnum];

/**
 * 
 * @export
 * @interface GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner
 */
export interface GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner {
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner
     */
    localisedDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner
     */
    localisedName?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInner
     */
    value?: GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInnerValueEnum;
}


/**
 * @export
 */
export const GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInnerValueEnum = {
    StoryPoints: 'STORY_POINTS',
    OriginalEstimate: 'ORIGINAL_ESTIMATE'
} as const;
export type GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInnerValueEnum = typeof GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInnerValueEnum[keyof typeof GetFeaturesForBoard200ResponseFeaturesInnerPermissibleEstimationTypesInnerValueEnum];

/**
 * Data related to a specific incident in a specific container that the incident is present in. Must specify at least one association to a component.
 * 
 * @export
 * @interface GetIncidentById200Response
 */
export interface GetIncidentById200Response {
    /**
     * The IncidentData schema version used for this incident data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    schemaVersion: GetIncidentById200ResponseSchemaVersionEnum;
    /**
     * The identifier for the Incident. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Incident in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Incident and increment that on each update to Jira).
     * 
     * Updates for a Incident that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof GetIncidentById200Response
     */
    updateSequenceNumber: number;
    /**
     * The IDs of the Components impacted by this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<string>}
     * @memberof GetIncidentById200Response
     */
    affectedComponents: Array<string>;
    /**
     * The human-readable summary for the Incident. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    summary: string;
    /**
     * A description of the issue in Markdown format. Will be shown in the UI and used when creating Jira Issues.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this incident, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the incident in that project).
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    url: string;
    /**
     * The timestamp to present to the user that shows when the Incident was raised.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    createdDate: string;
    /**
     * The last-updated timestamp to present to the user the last time the Incident was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    lastUpdated: string;
    /**
     * 
     * @type {IncidentSeverity}
     * @memberof GetIncidentById200Response
     */
    severity?: IncidentSeverity;
    /**
     * The current status of the Incident.
     * 
     * @type {string}
     * @memberof GetIncidentById200Response
     */
    status: GetIncidentById200ResponseStatusEnum;
    /**
     * The IDs of the Jira issues related to this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<Associations>}
     * @memberof GetIncidentById200Response
     */
    associations?: Array<Associations>;
}


/**
 * @export
 */
export const GetIncidentById200ResponseSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type GetIncidentById200ResponseSchemaVersionEnum = typeof GetIncidentById200ResponseSchemaVersionEnum[keyof typeof GetIncidentById200ResponseSchemaVersionEnum];

/**
 * @export
 */
export const GetIncidentById200ResponseStatusEnum = {
    Open: 'open',
    Resolved: 'resolved',
    Unknown: 'unknown'
} as const;
export type GetIncidentById200ResponseStatusEnum = typeof GetIncidentById200ResponseStatusEnum[keyof typeof GetIncidentById200ResponseStatusEnum];

/**
 * 
 * @export
 * @interface GetReportsForBoard200Response
 */
export interface GetReportsForBoard200Response {
    /**
     * 
     * @type {Array<object>}
     * @memberof GetReportsForBoard200Response
     */
    reports?: Array<object>;
}
/**
 * Data related to a specific post-incident review. Must specify at least one association to an incident.
 * 
 * @export
 * @interface GetReviewById200Response
 */
export interface GetReviewById200Response {
    /**
     * The PostIncidentReviewData schema version used for this post-incident review data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    schemaVersion: GetReviewById200ResponseSchemaVersionEnum;
    /**
     * The identifier for the Review. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Review in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Review and increment that on each update to Jira).
     * 
     * Updates for a Review that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof GetReviewById200Response
     */
    updateSequenceNumber: number;
    /**
     * The IDs of the Incidents covered by this Review. Must be unique for a given Provider.
     * 
     * @type {Array<string>}
     * @memberof GetReviewById200Response
     */
    reviews: Array<string>;
    /**
     * The human-readable summary for the Post-Incident Review. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    summary: string;
    /**
     * A description of the review in Markdown format. Will be shown in the UI and used when creating Jira Issues.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this review, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the review in that project).
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    url: string;
    /**
     * The timestamp to present to the user that shows when the Review was raised.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    createdDate: string;
    /**
     * The last-updated timestamp to present to the user the last time the Review was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    lastUpdated: string;
    /**
     * The current status of the Post-Incident Review.
     * 
     * @type {string}
     * @memberof GetReviewById200Response
     */
    status: GetReviewById200ResponseStatusEnum;
    /**
     * The IDs of the Jira issues related to this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<Associations>}
     * @memberof GetReviewById200Response
     */
    associations?: Array<Associations>;
}


/**
 * @export
 */
export const GetReviewById200ResponseSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type GetReviewById200ResponseSchemaVersionEnum = typeof GetReviewById200ResponseSchemaVersionEnum[keyof typeof GetReviewById200ResponseSchemaVersionEnum];

/**
 * @export
 */
export const GetReviewById200ResponseStatusEnum = {
    InProgress: 'in progress',
    OutstandingActions: 'outstanding actions',
    Completed: 'completed',
    Unknown: 'unknown'
} as const;
export type GetReviewById200ResponseStatusEnum = typeof GetReviewById200ResponseStatusEnum[keyof typeof GetReviewById200ResponseStatusEnum];

/**
 * 
 * @export
 * @interface GroupBean
 */
export interface GroupBean {
    /**
     * 
     * @type {string}
     * @memberof GroupBean
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupBean
     */
    self?: string;
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
     * 
     * @type {ChangelogHistoryMetadataAllOfActor}
     * @memberof HistoryMetadata
     */
    actor?: ChangelogHistoryMetadataAllOfActor;
    /**
     * 
     * @type {ChangelogHistoryMetadataAllOfCause}
     * @memberof HistoryMetadata
     */
    cause?: ChangelogHistoryMetadataAllOfCause;
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
     * 
     * @type {ChangelogHistoryMetadataAllOfGenerator}
     * @memberof HistoryMetadata
     */
    generator?: ChangelogHistoryMetadataAllOfGenerator;
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
 * The identifiers object that contains public/private information identifying the Vulnerability.
 * 
 * @export
 * @interface Identifier
 */
export interface Identifier {
    /**
     * The display name of the Vulnerability identified.
     * 
     * @type {string}
     * @memberof Identifier
     */
    displayName: string;
    /**
     * A URL users can use to link to the definition of the Vulnerability identified.
     * 
     * @type {string}
     * @memberof Identifier
     */
    url: string;
}
/**
 * Data related to a specific incident in a specific container that the incident is present in. Must specify at least one association to a component.
 * 
 * @export
 * @interface Incident
 */
export interface Incident {
    /**
     * The IncidentData schema version used for this incident data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof Incident
     */
    schemaVersion: IncidentSchemaVersionEnum;
    /**
     * The identifier for the Incident. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof Incident
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Incident in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Incident and increment that on each update to Jira).
     * 
     * Updates for a Incident that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof Incident
     */
    updateSequenceNumber: number;
    /**
     * The IDs of the Components impacted by this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<string>}
     * @memberof Incident
     */
    affectedComponents: Array<string>;
    /**
     * The human-readable summary for the Incident. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof Incident
     */
    summary: string;
    /**
     * A description of the issue in Markdown format. Will be shown in the UI and used when creating Jira Issues.
     * 
     * @type {string}
     * @memberof Incident
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this incident, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the incident in that project).
     * 
     * @type {string}
     * @memberof Incident
     */
    url: string;
    /**
     * The timestamp to present to the user that shows when the Incident was raised.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof Incident
     */
    createdDate: string;
    /**
     * The last-updated timestamp to present to the user the last time the Incident was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof Incident
     */
    lastUpdated: string;
    /**
     * 
     * @type {IncidentSeverity}
     * @memberof Incident
     */
    severity?: IncidentSeverity;
    /**
     * The current status of the Incident.
     * 
     * @type {string}
     * @memberof Incident
     */
    status: IncidentStatusEnum;
    /**
     * The IDs of the Jira issues related to this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<Associations>}
     * @memberof Incident
     */
    associations?: Array<Associations>;
}


/**
 * @export
 */
export const IncidentSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type IncidentSchemaVersionEnum = typeof IncidentSchemaVersionEnum[keyof typeof IncidentSchemaVersionEnum];

/**
 * @export
 */
export const IncidentStatusEnum = {
    Open: 'open',
    Resolved: 'resolved',
    Unknown: 'unknown'
} as const;
export type IncidentStatusEnum = typeof IncidentStatusEnum[keyof typeof IncidentStatusEnum];

/**
 * Severity information for a single Incident.
 * 
 * This is the severity information that will be presented to the user on e.g. the Jira Incidents screen.
 * 
 * @export
 * @interface IncidentSeverity
 */
export interface IncidentSeverity {
    /**
     * The severity level of the Incident with P1 being the highest and P5 being the lowest
     * @type {string}
     * @memberof IncidentSeverity
     */
    level: IncidentSeverityLevelEnum;
}


/**
 * @export
 */
export const IncidentSeverityLevelEnum = {
    P1: 'P1',
    P2: 'P2',
    P3: 'P3',
    P4: 'P4',
    P5: 'P5',
    Unknown: 'unknown'
} as const;
export type IncidentSeverityLevelEnum = typeof IncidentSeverityLevelEnum[keyof typeof IncidentSeverityLevelEnum];

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
 * @interface IssueAssignRequestBean
 */
export interface IssueAssignRequestBean {
    /**
     * 
     * @type {Set<string>}
     * @memberof IssueAssignRequestBean
     */
    issues?: Array<string>;
}
/**
 * Details about an issue.
 * @export
 * @interface IssueBean
 */
export interface IssueBean {
    /**
     * 
     * @type {IssueBeanChangelog}
     * @memberof IssueBean
     */
    changelog?: IssueBeanChangelog;
    /**
     * 
     * @type {IssueBeanEditmeta}
     * @memberof IssueBean
     */
    editmeta?: IssueBeanEditmeta;
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
     * @type {IssueBeanFieldsToInclude}
     * @memberof IssueBean
     */
    fieldsToInclude?: IssueBeanFieldsToInclude;
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
     * @type {{ [key: string]: IssueBeanSchemaValue; }}
     * @memberof IssueBean
     */
    readonly schema?: { [key: string]: IssueBeanSchemaValue; };
    /**
     * The URL of the issue details.
     * @type {string}
     * @memberof IssueBean
     */
    readonly self?: string;
    /**
     * The transitions that can be performed on the issue.
     * @type {Array<IssueBeanTransitionsInner>}
     * @memberof IssueBean
     */
    readonly transitions?: Array<IssueBeanTransitionsInner>;
    /**
     * The versions of each field on the issue.
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof IssueBean
     */
    readonly versionedRepresentations?: { [key: string]: { [key: string]: any; }; };
}
/**
 * Details of changelogs associated with the issue.
 * @export
 * @interface IssueBeanChangelog
 */
export interface IssueBeanChangelog {
    /**
     * The list of changelogs.
     * @type {Array<IssueBeanChangelogAllOfHistoriesInner>}
     * @memberof IssueBeanChangelog
     */
    readonly histories?: Array<IssueBeanChangelogAllOfHistoriesInner>;
    /**
     * The maximum number of results that could be on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly maxResults?: number;
    /**
     * The index of the first item returned on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly startAt?: number;
    /**
     * The number of results on the page.
     * @type {number}
     * @memberof IssueBeanChangelog
     */
    readonly total?: number;
}
/**
 * A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.
 * @export
 * @interface IssueBeanChangelogAllOfHistoriesInner
 */
export interface IssueBeanChangelogAllOfHistoriesInner {
    /**
     * 
     * @type {ChangelogAuthor}
     * @memberof IssueBeanChangelogAllOfHistoriesInner
     */
    author?: ChangelogAuthor;
    /**
     * The date on which the change took place.
     * @type {string}
     * @memberof IssueBeanChangelogAllOfHistoriesInner
     */
    readonly created?: string;
    /**
     * 
     * @type {ChangelogHistoryMetadata}
     * @memberof IssueBeanChangelogAllOfHistoriesInner
     */
    historyMetadata?: ChangelogHistoryMetadata;
    /**
     * The ID of the changelog.
     * @type {string}
     * @memberof IssueBeanChangelogAllOfHistoriesInner
     */
    readonly id?: string;
    /**
     * The list of items changed.
     * @type {Array<ChangelogItemsInner>}
     * @memberof IssueBeanChangelogAllOfHistoriesInner
     */
    readonly items?: Array<ChangelogItemsInner>;
}
/**
 * The metadata for the fields on the issue that can be amended.
 * @export
 * @interface IssueBeanEditmeta
 */
export interface IssueBeanEditmeta {
    /**
     * 
     * @type {{ [key: string]: IssueBeanEditmetaAllOfFieldsValue; }}
     * @memberof IssueBeanEditmeta
     */
    readonly fields?: { [key: string]: IssueBeanEditmetaAllOfFieldsValue; };
}
/**
 * The metadata describing an issue field.
 * @export
 * @interface IssueBeanEditmetaAllOfFieldsValue
 */
export interface IssueBeanEditmetaAllOfFieldsValue {
    /**
     * The list of values allowed in the field.
     * @type {Array<any>}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly allowedValues?: Array<any>;
    /**
     * The URL that can be used to automatically complete the field.
     * @type {string}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly autoCompleteUrl?: string;
    /**
     * The configuration properties.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly configuration?: { [key: string]: any; };
    /**
     * The default value of the field.
     * @type {any}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly defaultValue?: any | null;
    /**
     * Whether the field has a default value.
     * @type {boolean}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly hasDefaultValue?: boolean;
    /**
     * The key of the field.
     * @type {string}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly key: string;
    /**
     * The name of the field.
     * @type {string}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly name: string;
    /**
     * The list of operations that can be performed on the field.
     * @type {Array<string>}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly operations: Array<string>;
    /**
     * Whether the field is required.
     * @type {boolean}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    readonly required: boolean;
    /**
     * 
     * @type {FieldMetadataSchema}
     * @memberof IssueBeanEditmetaAllOfFieldsValue
     */
    schema: FieldMetadataSchema;
}
/**
 * 
 * @export
 * @interface IssueBeanFieldsToInclude
 */
export interface IssueBeanFieldsToInclude {
    /**
     * 
     * @type {Set<string>}
     * @memberof IssueBeanFieldsToInclude
     */
    actuallyIncluded?: Array<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof IssueBeanFieldsToInclude
     */
    excluded?: Array<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof IssueBeanFieldsToInclude
     */
    included?: Array<string>;
}
/**
 * The schema of a field.
 * @export
 * @interface IssueBeanSchemaValue
 */
export interface IssueBeanSchemaValue {
    /**
     * If the field is a custom field, the configuration of the field.
     * @type {{ [key: string]: any; }}
     * @memberof IssueBeanSchemaValue
     */
    readonly configuration?: { [key: string]: any; };
    /**
     * If the field is a custom field, the URI of the field.
     * @type {string}
     * @memberof IssueBeanSchemaValue
     */
    readonly custom?: string;
    /**
     * If the field is a custom field, the custom ID of the field.
     * @type {number}
     * @memberof IssueBeanSchemaValue
     */
    readonly customId?: number;
    /**
     * When the data type is an array, the name of the field items within the array.
     * @type {string}
     * @memberof IssueBeanSchemaValue
     */
    readonly items?: string;
    /**
     * If the field is a system field, the name of the field.
     * @type {string}
     * @memberof IssueBeanSchemaValue
     */
    readonly system?: string;
    /**
     * The data type of the field.
     * @type {string}
     * @memberof IssueBeanSchemaValue
     */
    readonly type: string;
}
/**
 * Details of an issue transition.
 * @export
 * @interface IssueBeanTransitionsInner
 */
export interface IssueBeanTransitionsInner {
    [key: string]: any | any;
    /**
     * Expand options that include additional transition details in the response.
     * @type {string}
     * @memberof IssueBeanTransitionsInner
     */
    readonly expand?: string;
    /**
     * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
     * @type {{ [key: string]: IssueBeanEditmetaAllOfFieldsValue; }}
     * @memberof IssueBeanTransitionsInner
     */
    readonly fields?: { [key: string]: IssueBeanEditmetaAllOfFieldsValue; };
    /**
     * Whether there is a screen associated with the issue transition.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    readonly hasScreen?: boolean;
    /**
     * The ID of the issue transition. Required when specifying a transition to undertake.
     * @type {string}
     * @memberof IssueBeanTransitionsInner
     */
    id?: string;
    /**
     * Whether the transition is available to be performed.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    readonly isAvailable?: boolean;
    /**
     * Whether the issue has to meet criteria before the issue transition is applied.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    readonly isConditional?: boolean;
    /**
     * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    readonly isGlobal?: boolean;
    /**
     * Whether this is the initial issue transition for the workflow.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    readonly isInitial?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IssueBeanTransitionsInner
     */
    looped?: boolean;
    /**
     * The name of the issue transition.
     * @type {string}
     * @memberof IssueBeanTransitionsInner
     */
    readonly name?: string;
    /**
     * 
     * @type {IssueBeanTransitionsInnerTo}
     * @memberof IssueBeanTransitionsInner
     */
    to?: IssueBeanTransitionsInnerTo;
}
/**
 * Details of the issue status after the transition.
 * @export
 * @interface IssueBeanTransitionsInnerTo
 */
export interface IssueBeanTransitionsInnerTo {
    /**
     * The description of the status.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerTo
     */
    readonly description?: string;
    /**
     * The URL of the icon used to represent the status.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerTo
     */
    readonly iconUrl?: string;
    /**
     * The ID of the status.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerTo
     */
    readonly id?: string;
    /**
     * The name of the status.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerTo
     */
    readonly name?: string;
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScope}
     * @memberof IssueBeanTransitionsInnerTo
     */
    scope?: IssueBeanTransitionsInnerToAllOfScope;
    /**
     * The URL of the status.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerTo
     */
    readonly self?: string;
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfStatusCategory}
     * @memberof IssueBeanTransitionsInnerTo
     */
    statusCategory?: IssueBeanTransitionsInnerToAllOfStatusCategory;
}
/**
 * The scope of the field.
 * @export
 * @interface IssueBeanTransitionsInnerToAllOfScope
 */
export interface IssueBeanTransitionsInnerToAllOfScope {
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProject}
     * @memberof IssueBeanTransitionsInnerToAllOfScope
     */
    project?: IssueBeanTransitionsInnerToAllOfScopeAllOfProject;
    /**
     * The type of scope.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScope
     */
    readonly type?: IssueBeanTransitionsInnerToAllOfScopeTypeEnum;
}


/**
 * @export
 */
export const IssueBeanTransitionsInnerToAllOfScopeTypeEnum = {
    Project: 'PROJECT',
    Template: 'TEMPLATE'
} as const;
export type IssueBeanTransitionsInnerToAllOfScopeTypeEnum = typeof IssueBeanTransitionsInnerToAllOfScopeTypeEnum[keyof typeof IssueBeanTransitionsInnerToAllOfScopeTypeEnum];

/**
 * The project the item has scope in.
 * @export
 * @interface IssueBeanTransitionsInnerToAllOfScopeAllOfProject
 */
export interface IssueBeanTransitionsInnerToAllOfScopeAllOfProject {
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    avatarUrls?: IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls;
    /**
     * The ID of the project.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    id?: string;
    /**
     * The key of the project.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    readonly key?: string;
    /**
     * The name of the project.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    readonly name?: string;
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    projectCategory?: IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory;
    /**
     * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    readonly projectTypeKey?: IssueBeanTransitionsInnerToAllOfScopeAllOfProjectProjectTypeKeyEnum;
    /**
     * The URL of the project details.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    readonly self?: string;
    /**
     * Whether or not the project is simplified.
     * @type {boolean}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProject
     */
    readonly simplified?: boolean;
}


/**
 * @export
 */
export const IssueBeanTransitionsInnerToAllOfScopeAllOfProjectProjectTypeKeyEnum = {
    Software: 'software',
    ServiceDesk: 'service_desk',
    Business: 'business'
} as const;
export type IssueBeanTransitionsInnerToAllOfScopeAllOfProjectProjectTypeKeyEnum = typeof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectProjectTypeKeyEnum[keyof typeof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectProjectTypeKeyEnum];

/**
 * The URLs of the project's avatars.
 * @export
 * @interface IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
 */
export interface IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls {
    /**
     * The URL of the item's 16x16 pixel avatar.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
     */
    ["16x16"]?: string;
    /**
     * The URL of the item's 24x24 pixel avatar.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
     */
    ["24x24"]?: string;
    /**
     * The URL of the item's 32x32 pixel avatar.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
     */
    ["32x32"]?: string;
    /**
     * The URL of the item's 48x48 pixel avatar.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
     */
    ["48x48"]?: string;
}
/**
 * The category the project belongs to.
 * @export
 * @interface IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory
 */
export interface IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory {
    /**
     * The name of the project category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory
     */
    readonly description?: string;
    /**
     * The ID of the project category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory
     */
    readonly id?: string;
    /**
     * The description of the project category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory
     */
    readonly name?: string;
    /**
     * The URL of the project category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory
     */
    readonly self?: string;
}
/**
 * The category assigned to the status.
 * @export
 * @interface IssueBeanTransitionsInnerToAllOfStatusCategory
 */
export interface IssueBeanTransitionsInnerToAllOfStatusCategory {
    /**
     * The name of the color used to represent the status category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    readonly colorName?: string;
    /**
     * The ID of the status category.
     * @type {number}
     * @memberof IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    readonly id?: number;
    /**
     * The key of the status category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    readonly key?: string;
    /**
     * The name of the status category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    readonly name?: string;
    /**
     * The URL of the status category.
     * @type {string}
     * @memberof IssueBeanTransitionsInnerToAllOfStatusCategory
     */
    readonly self?: string;
}
/**
 * An association type referencing Jira issue id or keys.
 * 
 * @export
 * @interface IssueIdOrKeysAssociation
 */
export interface IssueIdOrKeysAssociation {
    /**
     * Defines the association type.
     * 
     * @type {string}
     * @memberof IssueIdOrKeysAssociation
     */
    associationType: IssueIdOrKeysAssociationAssociationTypeEnum;
    /**
     * The Jira issue id or keys to associate the Security information with.
     * 
     * The number of values counted across all associationTypes (issueIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof IssueIdOrKeysAssociation
     */
    values: Array<string>;
}


/**
 * @export
 */
export const IssueIdOrKeysAssociationAssociationTypeEnum = {
    IssueIdOrKeys: 'issueIdOrKeys'
} as const;
export type IssueIdOrKeysAssociationAssociationTypeEnum = typeof IssueIdOrKeysAssociationAssociationTypeEnum[keyof typeof IssueIdOrKeysAssociationAssociationTypeEnum];

/**
 * An association type referencing issues in Jira.
 * 
 * @export
 * @interface IssueKeysAssociation
 */
export interface IssueKeysAssociation {
    /**
     * Defines the asssociation type.
     * 
     * @type {string}
     * @memberof IssueKeysAssociation
     */
    associationType: IssueKeysAssociationAssociationTypeEnum;
    /**
     * The Jira issue keys to associate the Remote Link information with.
     * 
     * The number of values counted across all associationTypes (issueKeys,
     * issueIdOrKeys and serviceIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof IssueKeysAssociation
     */
    values: Array<string>;
}


/**
 * @export
 */
export const IssueKeysAssociationAssociationTypeEnum = {
    IssueKeys: 'issueKeys'
} as const;
export type IssueKeysAssociationAssociationTypeEnum = typeof IssueKeysAssociationAssociationTypeEnum[keyof typeof IssueKeysAssociationAssociationTypeEnum];

/**
 * 
 * @export
 * @interface IssueRankRequestBean
 */
export interface IssueRankRequestBean {
    /**
     * 
     * @type {Array<string>}
     * @memberof IssueRankRequestBean
     */
    issues?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IssueRankRequestBean
     */
    rankAfterIssue?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRankRequestBean
     */
    rankBeforeIssue?: string;
    /**
     * 
     * @type {number}
     * @memberof IssueRankRequestBean
     */
    rankCustomFieldId?: number;
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
     * @type {{ [key: string]: IssueBeanEditmetaAllOfFieldsValue; }}
     * @memberof IssueTransition
     */
    readonly fields?: { [key: string]: IssueBeanEditmetaAllOfFieldsValue; };
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
     * 
     * @type {IssueBeanTransitionsInnerTo}
     * @memberof IssueTransition
     */
    to?: IssueBeanTransitionsInnerTo;
}
/**
 * A list of editable field details.
 * @export
 * @interface IssueUpdateMetadata
 */
export interface IssueUpdateMetadata {
    /**
     * 
     * @type {{ [key: string]: IssueBeanEditmetaAllOfFieldsValue; }}
     * @memberof IssueUpdateMetadata
     */
    readonly fields?: { [key: string]: IssueBeanEditmetaAllOfFieldsValue; };
}
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
     * @type {LinkGroupHeader}
     * @memberof LinkGroup
     */
    header?: LinkGroupHeader;
    /**
     * 
     * @type {string}
     * @memberof LinkGroup
     */
    id?: string;
    /**
     * 
     * @type {Array<LinkGroupHeader>}
     * @memberof LinkGroup
     */
    links?: Array<LinkGroupHeader>;
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
 * Details about the operations available in this version.
 * @export
 * @interface LinkGroupHeader
 */
export interface LinkGroupHeader {
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    iconClass?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    styleClass?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkGroupHeader
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof LinkGroupHeader
     */
    weight?: number;
}
/**
 * 
 * @export
 * @interface LocationBean
 */
export interface LocationBean {
    /**
     * 
     * @type {string}
     * @memberof LocationBean
     */
    projectKeyOrId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocationBean
     */
    type?: LocationBeanTypeEnum;
}


/**
 * @export
 */
export const LocationBeanTypeEnum = {
    Project: 'project',
    User: 'user'
} as const;
export type LocationBeanTypeEnum = typeof LocationBeanTypeEnum[keyof typeof LocationBeanTypeEnum];

/**
 * Describes changes to a file
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * The path of the file. Max length is 1024 characters.
     * @type {string}
     * @memberof ModelFile
     */
    path: string;
    /**
     * The URL of this file. Max length is 2000 characters.
     * @type {string}
     * @memberof ModelFile
     */
    url: string;
    /**
     * The operation performed on this file
     * @type {string}
     * @memberof ModelFile
     */
    changeType: ModelFileChangeTypeEnum;
    /**
     * Number of lines added to the file
     * @type {number}
     * @memberof ModelFile
     */
    linesAdded: number;
    /**
     * Number of lines removed from the file
     * @type {number}
     * @memberof ModelFile
     */
    linesRemoved: number;
}


/**
 * @export
 */
export const ModelFileChangeTypeEnum = {
    Added: 'ADDED',
    Copied: 'COPIED',
    Deleted: 'DELETED',
    Modified: 'MODIFIED',
    Moved: 'MOVED',
    Unknown: 'UNKNOWN'
} as const;
export type ModelFileChangeTypeEnum = typeof ModelFileChangeTypeEnum[keyof typeof ModelFileChangeTypeEnum];

/**
 * 
 * @export
 * @interface MoveIssuesToBacklogForBoardRequest
 */
export interface MoveIssuesToBacklogForBoardRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof MoveIssuesToBacklogForBoardRequest
     */
    issues?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MoveIssuesToBacklogForBoardRequest
     */
    rankAfterIssue?: string;
    /**
     * 
     * @type {string}
     * @memberof MoveIssuesToBacklogForBoardRequest
     */
    rankBeforeIssue?: string;
    /**
     * 
     * @type {number}
     * @memberof MoveIssuesToBacklogForBoardRequest
     */
    rankCustomFieldId?: number;
}
/**
 * 
 * @export
 * @interface MoveIssuesToBacklogRequest
 */
export interface MoveIssuesToBacklogRequest {
    /**
     * 
     * @type {Set<string>}
     * @memberof MoveIssuesToBacklogRequest
     */
    issues?: Array<string>;
}
/**
 * 
 * @export
 * @interface MoveIssuesToBoard207Response
 */
export interface MoveIssuesToBoard207Response {
    /**
     * 
     * @type {Array<MoveIssuesToBoard207ResponseEntriesInner>}
     * @memberof MoveIssuesToBoard207Response
     */
    entries?: Array<MoveIssuesToBoard207ResponseEntriesInner>;
}
/**
 * 
 * @export
 * @interface MoveIssuesToBoard207ResponseEntriesInner
 */
export interface MoveIssuesToBoard207ResponseEntriesInner {
    /**
     * 
     * @type {Array<string>}
     * @memberof MoveIssuesToBoard207ResponseEntriesInner
     */
    errors?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof MoveIssuesToBoard207ResponseEntriesInner
     */
    issueId?: number;
    /**
     * 
     * @type {string}
     * @memberof MoveIssuesToBoard207ResponseEntriesInner
     */
    issueKey?: string;
    /**
     * 
     * @type {number}
     * @memberof MoveIssuesToBoard207ResponseEntriesInner
     */
    status?: number;
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
 * The payload of Operations Workspace Ids.
 * @export
 * @interface OperationsWorkspaceIds
 */
export interface OperationsWorkspaceIds {
    /**
     * The IDs of Operations Workspaces that are available to this Jira site.
     * 
     * @type {Array<string>}
     * @memberof OperationsWorkspaceIds
     */
    workspaceIds: Array<string>;
}
/**
 * 
 * @export
 * @interface PageBeanBoard
 */
export interface PageBeanBoard {
    /**
     * 
     * @type {boolean}
     * @memberof PageBeanBoard
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoard
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoard
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoard
     */
    total?: number;
    /**
     * 
     * @type {Array<GetAllBoards200ResponseValuesInner>}
     * @memberof PageBeanBoard
     */
    values?: Array<GetAllBoards200ResponseValuesInner>;
}
/**
 * 
 * @export
 * @interface PageBeanBoardFilterBean
 */
export interface PageBeanBoardFilterBean {
    /**
     * 
     * @type {boolean}
     * @memberof PageBeanBoardFilterBean
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoardFilterBean
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoardFilterBean
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanBoardFilterBean
     */
    total?: number;
    /**
     * 
     * @type {Array<GetBoardByFilterId200ResponseValuesInner>}
     * @memberof PageBeanBoardFilterBean
     */
    values?: Array<GetBoardByFilterId200ResponseValuesInner>;
}
/**
 * 
 * @export
 * @interface PageBeanQuickFilterBean
 */
export interface PageBeanQuickFilterBean {
    /**
     * 
     * @type {boolean}
     * @memberof PageBeanQuickFilterBean
     */
    isLast?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageBeanQuickFilterBean
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanQuickFilterBean
     */
    startAt?: number;
    /**
     * 
     * @type {number}
     * @memberof PageBeanQuickFilterBean
     */
    total?: number;
    /**
     * 
     * @type {Array<GetAllQuickFilters200ResponseValuesInner>}
     * @memberof PageBeanQuickFilterBean
     */
    values?: Array<GetAllQuickFilters200ResponseValuesInner>;
}
/**
 * A page of changelogs.
 * @export
 * @interface PageOfChangelogs
 */
export interface PageOfChangelogs {
    /**
     * The list of changelogs.
     * @type {Array<IssueBeanChangelogAllOfHistoriesInner>}
     * @memberof PageOfChangelogs
     */
    readonly histories?: Array<IssueBeanChangelogAllOfHistoriesInner>;
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
 * @interface PartialSuccessBean
 */
export interface PartialSuccessBean {
    /**
     * 
     * @type {Array<MoveIssuesToBoard207ResponseEntriesInner>}
     * @memberof PartialSuccessBean
     */
    entries?: Array<MoveIssuesToBoard207ResponseEntriesInner>;
}
/**
 * 
 * @export
 * @interface PartiallyUpdateEpicRequest
 */
export interface PartiallyUpdateEpicRequest {
    /**
     * 
     * @type {PartiallyUpdateEpicRequestColor}
     * @memberof PartiallyUpdateEpicRequest
     */
    color?: PartiallyUpdateEpicRequestColor;
    /**
     * 
     * @type {boolean}
     * @memberof PartiallyUpdateEpicRequest
     */
    done?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PartiallyUpdateEpicRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PartiallyUpdateEpicRequest
     */
    summary?: string;
}
/**
 * 
 * @export
 * @interface PartiallyUpdateEpicRequestColor
 */
export interface PartiallyUpdateEpicRequestColor {
    /**
     * 
     * @type {string}
     * @memberof PartiallyUpdateEpicRequestColor
     */
    key?: PartiallyUpdateEpicRequestColorKeyEnum;
}


/**
 * @export
 */
export const PartiallyUpdateEpicRequestColorKeyEnum = {
    _1: 'color_1',
    _2: 'color_2',
    _3: 'color_3',
    _4: 'color_4',
    _5: 'color_5',
    _6: 'color_6',
    _7: 'color_7',
    _8: 'color_8',
    _9: 'color_9',
    _10: 'color_10',
    _11: 'color_11',
    _12: 'color_12',
    _13: 'color_13',
    _14: 'color_14'
} as const;
export type PartiallyUpdateEpicRequestColorKeyEnum = typeof PartiallyUpdateEpicRequestColorKeyEnum[keyof typeof PartiallyUpdateEpicRequestColorKeyEnum];

/**
 * This object models the Continuous Delivery (CD) Pipeline concept, an automated process (usually comprised of multiple stages)
 * 
 * for getting software from version control right through to the production environment.
 * 
 * @export
 * @interface Pipeline
 */
export interface Pipeline {
    /**
     * The identifier of this pipeline, must be unique for the provider.
     * 
     * @type {string}
     * @memberof Pipeline
     */
    id: string;
    /**
     * The name of the pipeline to present to the user.
     * 
     * @type {string}
     * @memberof Pipeline
     */
    displayName: string;
    /**
     * A URL users can use to link to this deployment pipeline.
     * 
     * @type {string}
     * @memberof Pipeline
     */
    url: string;
}
/**
 * Details about a project.
 * @export
 * @interface ProjectDetails
 */
export interface ProjectDetails {
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls}
     * @memberof ProjectDetails
     */
    avatarUrls?: IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls;
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
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory}
     * @memberof ProjectDetails
     */
    projectCategory?: IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfProjectCategory;
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
 * Information about the provider. This is useful for auditing, logging, debugging, and other internal uses. It is not considered private information. Hence, it may not contain personally identifiable information.
 * @export
 * @interface ProviderMetadata
 */
export interface ProviderMetadata {
    /**
     * An optional name of the source of the development information data.
     * @type {string}
     * @memberof ProviderMetadata
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging,
 * and other internal uses. It is not considered private information. Hence, it may not contain personally
 * identifiable information.
 * 
 * @export
 * @interface ProviderMetadata1
 */
export interface ProviderMetadata1 {
    /**
     * An optional name of the source of the feature flags.
     * @type {string}
     * @memberof ProviderMetadata1
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging,
 * and other internal uses. It is not considered private information. Hence, it may not contain personally
 * identifiable information.
 * 
 * @export
 * @interface ProviderMetadata2
 */
export interface ProviderMetadata2 {
    /**
     * An optional name of the source of the deployments data.
     * @type {string}
     * @memberof ProviderMetadata2
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging,
 * and other internal uses. It is not considered private information. Hence, it may not contain personally
 * identifiable information.
 * 
 * @export
 * @interface ProviderMetadata3
 */
export interface ProviderMetadata3 {
    /**
     * An optional name of the source of the builds data.
     * @type {string}
     * @memberof ProviderMetadata3
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging, and other internal uses. It is
 * not considered private information. Hence, it may not contain personally identifiable information.
 * 
 * @export
 * @interface ProviderMetadata4
 */
export interface ProviderMetadata4 {
    /**
     * An optional name of the source of the Remote Links data.
     * @type {string}
     * @memberof ProviderMetadata4
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging,
 * and other internal uses. Information in this property is not considered private, so it should not contain personally identifiable information
 * 
 * @export
 * @interface ProviderMetadata5
 */
export interface ProviderMetadata5 {
    /**
     * An optional name of the source of the vulnerabilities.
     * @type {string}
     * @memberof ProviderMetadata5
     */
    product?: string;
}
/**
 * Information about the provider. This is useful for auditing, logging, debugging,
 * and other internal uses. It is not considered private information. Hence, it may not contain personally
 * identifiable information.
 * 
 * @export
 * @interface ProviderMetadata6
 */
export interface ProviderMetadata6 {
    /**
     * An optional name of the source of the incidents.
     * @type {string}
     * @memberof ProviderMetadata6
     */
    product?: string;
}
/**
 * Represents a pull request
 * @export
 * @interface PullRequest
 */
export interface PullRequest {
    /**
     * The ID of this entity. Will be used for cross entity linking. Must be unique by entity type within a repository, i.e., only one commit can have ID 'X' in repository 'Y'. But adding, e.g., a branch with ID 'X' to repository 'Y' is acceptable. Only alphanumeric characters, and '~.-_', are allowed. Max length is 1024 characters
     * @type {string}
     * @memberof PullRequest
     */
    id: string;
    /**
     * List of issues keys that this entity is associated with. They must be valid Jira issue keys.
     * @type {Array<string>}
     * @memberof PullRequest
     */
    issueKeys: Array<string>;
    /**
     * An ID used to apply an ordering to updates for this entity in the case of out-of-order receipt of update requests. This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the provider system, but other alternatives are valid (e.g. a provider could store a counter against each entity and increment that on each update to Jira). Updates for an entity that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * @type {number}
     * @memberof PullRequest
     */
    updateSequenceId: number;
    /**
     * The status of the pull request. In the case of concurrent updates, priority is given in the order OPEN, MERGED, DECLINED, UNKNOWN
     * @type {string}
     * @memberof PullRequest
     */
    status: PullRequestStatusEnum;
    /**
     * Title of the pull request. Max length is 1024 characters.
     * @type {string}
     * @memberof PullRequest
     */
    title: string;
    /**
     * 
     * @type {Author}
     * @memberof PullRequest
     */
    author: Author;
    /**
     * The number of comments on the pull request
     * @type {number}
     * @memberof PullRequest
     */
    commentCount: number;
    /**
     * The name of the source branch of this PR. Max length is 255 characters.
     * @type {string}
     * @memberof PullRequest
     */
    sourceBranch: string;
    /**
     * The url of the source branch of this PR. This is used to match this PR against the branch. Max length is 2000 characters.
     * @type {string}
     * @memberof PullRequest
     */
    sourceBranchUrl?: string;
    /**
     * The most recent update to this PR. Formatted as a UTC ISO 8601 date time format.
     * @type {string}
     * @memberof PullRequest
     */
    lastUpdate: string;
    /**
     * The name of destination branch of this PR. Max length is 255 characters.
     * @type {string}
     * @memberof PullRequest
     */
    destinationBranch?: string;
    /**
     * The url of the destination branch of this PR. Max length is 2000 characters.
     * @type {string}
     * @memberof PullRequest
     */
    destinationBranchUrl?: string;
    /**
     * The list of reviewers of this pull request
     * @type {Array<Reviewer>}
     * @memberof PullRequest
     */
    reviewers?: Array<Reviewer>;
    /**
     * The URL of this pull request. Max length is 2000 characters.
     * @type {string}
     * @memberof PullRequest
     */
    url: string;
    /**
     * Shortened identifier for this pull request, used for display. Max length is 255 characters.
     * @type {string}
     * @memberof PullRequest
     */
    displayId: string;
}


/**
 * @export
 */
export const PullRequestStatusEnum = {
    Open: 'OPEN',
    Merged: 'MERGED',
    Declined: 'DECLINED',
    Unknown: 'UNKNOWN'
} as const;
export type PullRequestStatusEnum = typeof PullRequestStatusEnum[keyof typeof PullRequestStatusEnum];

/**
 * 
 * @export
 * @interface QuickFilterBean
 */
export interface QuickFilterBean {
    /**
     * 
     * @type {number}
     * @memberof QuickFilterBean
     */
    boardId?: number;
    /**
     * 
     * @type {string}
     * @memberof QuickFilterBean
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof QuickFilterBean
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof QuickFilterBean
     */
    jql?: string;
    /**
     * 
     * @type {string}
     * @memberof QuickFilterBean
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof QuickFilterBean
     */
    position?: number;
}
/**
 * 
 * @export
 * @interface RankEpicsRequest
 */
export interface RankEpicsRequest {
    /**
     * 
     * @type {string}
     * @memberof RankEpicsRequest
     */
    rankAfterEpic?: string;
    /**
     * 
     * @type {string}
     * @memberof RankEpicsRequest
     */
    rankBeforeEpic?: string;
    /**
     * 
     * @type {number}
     * @memberof RankEpicsRequest
     */
    rankCustomFieldId?: number;
}
/**
 * 
 * @export
 * @interface RankingConfigBean
 */
export interface RankingConfigBean {
    /**
     * 
     * @type {number}
     * @memberof RankingConfigBean
     */
    rankCustomFieldId?: number;
}
/**
 * A build that has not been accepted for submission, usually due to a problem with the request data.
 * 
 * The object is comprised of the key of the rejected build and the corresponding error messages.
 * 
 * @export
 * @interface RejectedBuild
 */
export interface RejectedBuild {
    /**
     * 
     * @type {BuildKey}
     * @memberof RejectedBuild
     */
    key: BuildKey;
    /**
     * The error messages for the rejected build
     * @type {Array<ErrorMessage>}
     * @memberof RejectedBuild
     */
    errors: Array<ErrorMessage>;
}
/**
 * A deployment that has not been accepted for submission, usually due to a problem with the request data.
 * 
 * The object is comprised of the key of the rejected deployment and the corresponding error messages.
 * 
 * @export
 * @interface RejectedDeployment
 */
export interface RejectedDeployment {
    /**
     * 
     * @type {DeploymentKey}
     * @memberof RejectedDeployment
     */
    key: DeploymentKey;
    /**
     * The error messages for the rejected deployment
     * @type {Array<ErrorMessage1>}
     * @memberof RejectedDeployment
     */
    errors: Array<ErrorMessage1>;
}
/**
 * 
 * @export
 * @interface RelationBean
 */
export interface RelationBean {
    /**
     * 
     * @type {string}
     * @memberof RelationBean
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationBean
     */
    self?: string;
}
/**
 * Data related to a single Remote Link.
 * 
 * @export
 * @interface RemoteLinkData
 */
export interface RemoteLinkData {
    /**
     * The schema version used for this data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    schemaVersion?: RemoteLinkDataSchemaVersionEnum;
    /**
     * The identifier for the Remote Link. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Remote Link in the case of out-of-order receipt of
     * update requests.
     * 
     * It must be a monotonically increasing number. For example, epoch time could be one way to generate the
     * `updateSequenceNumber`.
     * 
     * Updates for a Remote Link that is received with an `updateSqeuenceNumber` less than or equal to what is currently
     * stored will be ignored.
     * 
     * @type {number}
     * @memberof RemoteLinkData
     */
    updateSequenceNumber: number;
    /**
     * The human-readable name for the Remote Link.
     * 
     * Will be shown in the UI.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    displayName: string;
    /**
     * The URL to this Remote Link in your system.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    url: string;
    /**
     * The type of the Remote Link. The current supported types are 'document', 'alert', 'test',
     * 'security', 'logFile', 'prototype', 'coverage', 'bugReport' and 'other'
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    type: RemoteLinkDataTypeEnum;
    /**
     * An optional description to attach to this Remote Link.
     * 
     * This may be anything that makes sense in your system.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    description?: string;
    /**
     * The last-updated timestamp to present to the user as a summary of when Remote Link was last updated.
     * 
     * @type {string}
     * @memberof RemoteLinkData
     */
    lastUpdated: string;
    /**
     * The entities to associate the Remote Link information with.
     * 
     * @type {Array<RemoteLinkDataAssociationsInner>}
     * @memberof RemoteLinkData
     */
    associations?: Array<RemoteLinkDataAssociationsInner>;
    /**
     * 
     * @type {RemoteLinkStatus}
     * @memberof RemoteLinkData
     */
    status?: RemoteLinkStatus;
    /**
     * Optional list of actionIds. They are associated with the actions the provider is able to provide when they
     * registered. Indicates which actions this Remote Link has.
     * 
     * If any actions have a templateUrl that requires string substitution, then `attributeMap` must be passed in.
     * 
     * @type {Array<string>}
     * @memberof RemoteLinkData
     */
    actionIds?: Array<string>;
    /**
     * Map of key/values (string to string mapping). This is used to build the urls for actions from the
     * templateUrl the provider registered their available actions with.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RemoteLinkData
     */
    attributeMap?: { [key: string]: string; };
}


/**
 * @export
 */
export const RemoteLinkDataSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type RemoteLinkDataSchemaVersionEnum = typeof RemoteLinkDataSchemaVersionEnum[keyof typeof RemoteLinkDataSchemaVersionEnum];

/**
 * @export
 */
export const RemoteLinkDataTypeEnum = {
    Document: 'document',
    Alert: 'alert',
    Test: 'test',
    Security: 'security',
    LogFile: 'logFile',
    Prototype: 'prototype',
    Coverage: 'coverage',
    BugReport: 'bugReport',
    Other: 'other'
} as const;
export type RemoteLinkDataTypeEnum = typeof RemoteLinkDataTypeEnum[keyof typeof RemoteLinkDataTypeEnum];

/**
 * 
 * @export
 * @interface RemoteLinkDataAssociationsInner
 */
export interface RemoteLinkDataAssociationsInner {
    /**
     * Defines the asssociation type.
     * 
     * @type {string}
     * @memberof RemoteLinkDataAssociationsInner
     */
    associationType: RemoteLinkDataAssociationsInnerAssociationTypeEnum;
    /**
     * The service id or keys to associate the Remote Link information with.
     * 
     * The number of values counted across all associationTypes (issueKeys,
     * issueIdOrKeys and serviceIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof RemoteLinkDataAssociationsInner
     */
    values: Array<string>;
}


/**
 * @export
 */
export const RemoteLinkDataAssociationsInnerAssociationTypeEnum = {
    ServiceIdOrKeys: 'serviceIdOrKeys'
} as const;
export type RemoteLinkDataAssociationsInnerAssociationTypeEnum = typeof RemoteLinkDataAssociationsInnerAssociationTypeEnum[keyof typeof RemoteLinkDataAssociationsInnerAssociationTypeEnum];

/**
 * The status of a Remote Link.
 * 
 * @export
 * @interface RemoteLinkStatus
 */
export interface RemoteLinkStatus {
    /**
     * Appearance is a fixed set of appearance types affecting the colour
     * of the status lozenge in the UI. The colours they correspond to are
     * equivalent to atlaskit's [Lozenge](https://atlaskit.atlassian.com/packages/core/lozenge) component.
     * 
     * @type {string}
     * @memberof RemoteLinkStatus
     */
    appearance: RemoteLinkStatusAppearanceEnum;
    /**
     * The human-readable description for the Remote Link status.
     * 
     * Will be shown in the UI.
     * 
     * @type {string}
     * @memberof RemoteLinkStatus
     */
    label: string;
}


/**
 * @export
 */
export const RemoteLinkStatusAppearanceEnum = {
    Default: 'default',
    Inprogress: 'inprogress',
    Moved: 'moved',
    New: 'new',
    Removed: 'removed',
    Prototype: 'prototype',
    Success: 'success'
} as const;
export type RemoteLinkStatusAppearanceEnum = typeof RemoteLinkStatusAppearanceEnum[keyof typeof RemoteLinkStatusAppearanceEnum];

/**
 * 
 * @export
 * @interface ReportsResponseBean
 */
export interface ReportsResponseBean {
    /**
     * 
     * @type {Array<object>}
     * @memberof ReportsResponseBean
     */
    reports?: Array<object>;
}
/**
 * Represents a repository, containing development information such as commits, pull requests, and branches.
 * @export
 * @interface Repository
 */
export interface Repository {
    /**
     * The name of this repository. Max length is 255 characters.
     * @type {string}
     * @memberof Repository
     */
    name: string;
    /**
     * Description of this repository. Max length is 1024 characters.
     * @type {string}
     * @memberof Repository
     */
    description?: string;
    /**
     * The ID of the repository this repository was forked from, if it's a fork. Max length is 1024 characters.
     * @type {string}
     * @memberof Repository
     */
    forkOf?: string;
    /**
     * The URL of this repository. Max length is 2000 characters.
     * @type {string}
     * @memberof Repository
     */
    url: string;
    /**
     * List of commits to update in this repository. Must not contain duplicate entity IDs. Maximum number of commits is 400
     * @type {Array<Commit>}
     * @memberof Repository
     */
    commits?: Array<Commit>;
    /**
     * List of branches to update in this repository. Must not contain duplicate entity IDs. Maximum number of branches is 400.
     * @type {Array<Branch>}
     * @memberof Repository
     */
    branches?: Array<Branch>;
    /**
     * List of pull requests to update in this repository. Must not contain duplicate entity IDs. Maximum number of pull requests is 400
     * @type {Array<PullRequest>}
     * @memberof Repository
     */
    pullRequests?: Array<PullRequest>;
    /**
     * The URL of the avatar for this repository. Max length is 2000 characters.
     * @type {string}
     * @memberof Repository
     */
    avatar?: string;
    /**
     * Description of the avatar for this repository. Max length is 1024 characters.
     * @type {string}
     * @memberof Repository
     */
    avatarDescription?: string;
    /**
     * The ID of this entity. Will be used for cross entity linking. Must be unique by entity type within a repository, i.e., only one commit can have ID 'X' in repository 'Y'. But adding, e.g., a branch with ID 'X' to repository 'Y' is acceptable. Only alphanumeric characters, and '~.-_', are allowed. Max length is 1024 characters.
     * @type {string}
     * @memberof Repository
     */
    id: string;
    /**
     *  An ID used to apply an ordering to updates for this entity in the case of out-of-order receipt of update requests. This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the provider system, but other alternatives are valid (e.g. a provider could store a counter against each entity and increment that on each update to Jira). Updates for an entity that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * @type {number}
     * @memberof Repository
     */
    updateSequenceId: number;
}
/**
 * Represents errors related to a particular repository and its entities
 * @export
 * @interface RepositoryErrors
 */
export interface RepositoryErrors {
    /**
     * Repository errors
     * @type {Array<ErrorMessage>}
     * @memberof RepositoryErrors
     */
    errorMessages?: Array<ErrorMessage>;
    /**
     * Commits errors
     * @type {Array<EntityError>}
     * @memberof RepositoryErrors
     */
    commits?: Array<EntityError>;
    /**
     * Branches errors
     * @type {Array<EntityError>}
     * @memberof RepositoryErrors
     */
    branches?: Array<EntityError>;
    /**
     * Pull requests errors
     * @type {Array<EntityError>}
     * @memberof RepositoryErrors
     */
    pullRequests?: Array<EntityError>;
}
/**
 * Data related to a specific post-incident review. Must specify at least one association to an incident.
 * 
 * @export
 * @interface Review
 */
export interface Review {
    /**
     * The PostIncidentReviewData schema version used for this post-incident review data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof Review
     */
    schemaVersion: ReviewSchemaVersionEnum;
    /**
     * The identifier for the Review. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof Review
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Review in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Review and increment that on each update to Jira).
     * 
     * Updates for a Review that are received with an updateSqeuenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof Review
     */
    updateSequenceNumber: number;
    /**
     * The IDs of the Incidents covered by this Review. Must be unique for a given Provider.
     * 
     * @type {Array<string>}
     * @memberof Review
     */
    reviews: Array<string>;
    /**
     * The human-readable summary for the Post-Incident Review. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof Review
     */
    summary: string;
    /**
     * A description of the review in Markdown format. Will be shown in the UI and used when creating Jira Issues.
     * 
     * @type {string}
     * @memberof Review
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this review, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the review in that project).
     * 
     * @type {string}
     * @memberof Review
     */
    url: string;
    /**
     * The timestamp to present to the user that shows when the Review was raised.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof Review
     */
    createdDate: string;
    /**
     * The last-updated timestamp to present to the user the last time the Review was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof Review
     */
    lastUpdated: string;
    /**
     * The current status of the Post-Incident Review.
     * 
     * @type {string}
     * @memberof Review
     */
    status: ReviewStatusEnum;
    /**
     * The IDs of the Jira issues related to this Incident. Must be unique for a given Provider.
     * 
     * @type {Array<Associations>}
     * @memberof Review
     */
    associations?: Array<Associations>;
}


/**
 * @export
 */
export const ReviewSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type ReviewSchemaVersionEnum = typeof ReviewSchemaVersionEnum[keyof typeof ReviewSchemaVersionEnum];

/**
 * @export
 */
export const ReviewStatusEnum = {
    InProgress: 'in progress',
    OutstandingActions: 'outstanding actions',
    Completed: 'completed',
    Unknown: 'unknown'
} as const;
export type ReviewStatusEnum = typeof ReviewStatusEnum[keyof typeof ReviewStatusEnum];

/**
 * The reviewer of a pull request
 * @export
 * @interface Reviewer
 */
export interface Reviewer {
    /**
     * Deprecated. The name of this reviewer. Max length is 255 characters.
     * @type {string}
     * @memberof Reviewer
     */
    name?: string;
    /**
     * The approval status of this reviewer, default is UNAPPROVED.
     * @type {string}
     * @memberof Reviewer
     */
    approvalStatus?: ReviewerApprovalStatusEnum;
    /**
     * Deprecated. The URL of the profile for this reviewer. Max length is 2000 characters.
     * @type {string}
     * @memberof Reviewer
     */
    url?: string;
    /**
     * Deprecated. The URL of the avatar for this reviewer. Max length is 2000 characters.
     * @type {string}
     * @memberof Reviewer
     */
    avatar?: string;
    /**
     * The email address of this reviewer. Max length is 254 characters.
     * @type {string}
     * @memberof Reviewer
     */
    email?: string;
    /**
     * The Atlassian Account ID (AAID) of this reviewer. Max length is 128 characters.
     * @type {string}
     * @memberof Reviewer
     */
    accountId?: string;
}


/**
 * @export
 */
export const ReviewerApprovalStatusEnum = {
    Approved: 'APPROVED',
    Unapproved: 'UNAPPROVED'
} as const;
export type ReviewerApprovalStatusEnum = typeof ReviewerApprovalStatusEnum[keyof typeof ReviewerApprovalStatusEnum];

/**
 * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 * @export
 * @interface Scope
 */
export interface Scope {
    [key: string]: any | any;
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScopeAllOfProject}
     * @memberof Scope
     */
    project?: IssueBeanTransitionsInnerToAllOfScopeAllOfProject;
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
     * @type {{ [key: string]: IssueBeanSchemaValue; }}
     * @memberof SearchResults
     */
    readonly schema?: { [key: string]: IssueBeanSchemaValue; };
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
 * The payload of linked Security Workspace IDs.
 * @export
 * @interface SecurityWorkspaceIds
 */
export interface SecurityWorkspaceIds {
    /**
     * The IDs of Security Workspaces that are linked to this Jira site.
     * 
     * @type {Array<string>}
     * @memberof SecurityWorkspaceIds
     */
    workspaceIds: Array<string>;
}
/**
 * The Security Workspace information stored for the given ID.
 * @export
 * @interface SecurityWorkspaceResponse
 */
export interface SecurityWorkspaceResponse {
    /**
     * The Security Workspace ID
     * 
     * @type {string}
     * @memberof SecurityWorkspaceResponse
     */
    workspaceId: string;
    /**
     * Latest date and time that the Security Workspace was updated in Jira.
     * 
     * @type {string}
     * @memberof SecurityWorkspaceResponse
     */
    updatedAt: string;
}
/**
 * An association type referencing service id or keys.
 * 
 * @export
 * @interface ServiceIdOrKeysAssociation
 */
export interface ServiceIdOrKeysAssociation {
    /**
     * Defines the asssociation type.
     * 
     * @type {string}
     * @memberof ServiceIdOrKeysAssociation
     */
    associationType: ServiceIdOrKeysAssociationAssociationTypeEnum;
    /**
     * The service id or keys to associate the Remote Link information with.
     * 
     * The number of values counted across all associationTypes (issueKeys,
     * issueIdOrKeys and serviceIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof ServiceIdOrKeysAssociation
     */
    values: Array<string>;
}


/**
 * @export
 */
export const ServiceIdOrKeysAssociationAssociationTypeEnum = {
    ServiceIdOrKeys: 'serviceIdOrKeys'
} as const;
export type ServiceIdOrKeysAssociationAssociationTypeEnum = typeof ServiceIdOrKeysAssociationAssociationTypeEnum[keyof typeof ServiceIdOrKeysAssociationAssociationTypeEnum];

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
 * @interface SprintBean
 */
export interface SprintBean {
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    completeDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    goal?: string;
    /**
     * 
     * @type {number}
     * @memberof SprintBean
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof SprintBean
     */
    originBoardId?: number;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintBean
     */
    state?: string;
}
/**
 * 
 * @export
 * @interface SprintCreateBean
 */
export interface SprintCreateBean {
    /**
     * 
     * @type {string}
     * @memberof SprintCreateBean
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintCreateBean
     */
    goal?: string;
    /**
     * 
     * @type {string}
     * @memberof SprintCreateBean
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof SprintCreateBean
     */
    originBoardId?: number;
    /**
     * 
     * @type {string}
     * @memberof SprintCreateBean
     */
    startDate?: string;
}
/**
 * 
 * @export
 * @interface SprintSwapBean
 */
export interface SprintSwapBean {
    /**
     * 
     * @type {number}
     * @memberof SprintSwapBean
     */
    sprintToSwapWith?: number;
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
     * 
     * @type {IssueBeanTransitionsInnerToAllOfScope}
     * @memberof StatusDetails
     */
    scope?: IssueBeanTransitionsInnerToAllOfScope;
    /**
     * The URL of the status.
     * @type {string}
     * @memberof StatusDetails
     */
    readonly self?: string;
    /**
     * 
     * @type {IssueBeanTransitionsInnerToAllOfStatusCategory}
     * @memberof StatusDetails
     */
    statusCategory?: IssueBeanTransitionsInnerToAllOfStatusCategory;
}
/**
 * The result of a successful store development information request
 * @export
 * @interface StoreDevinfoResult
 */
export interface StoreDevinfoResult {
    /**
     * The IDs of devinfo entities that have been accepted for submission grouped by their repository IDs. Note that a devinfo entity that isn't updated due to it's updateSequenceId being out of order is not considered a failed submission.
     * @type {{ [key: string]: EntityIds; }}
     * @memberof StoreDevinfoResult
     */
    acceptedDevinfoEntities?: { [key: string]: EntityIds; };
    /**
     * IDs of devinfo entities that have not been accepted for submission and caused error descriptions, usually due to a problem with the request data. The entities (if present) will be grouped by their repository id and type. Entity IDs are listed with errors associated with that devinfo entity that have prevented it being submitted. 
     * @type {{ [key: string]: RepositoryErrors; }}
     * @memberof StoreDevinfoResult
     */
    failedDevinfoEntities?: { [key: string]: RepositoryErrors; };
    /**
     * Issue keys that are not known on this Jira instance (if any). These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they may be for projects that no longer exist. If a devinfo entity has been associated with issue keys other than those in this array it will still be stored against those valid keys. 
     * @type {Array<string>}
     * @memberof StoreDevinfoResult
     */
    unknownIssueKeys?: Array<string>;
}
/**
 * The payload used to submit (update / insert) build data.
 * @export
 * @interface SubmitBuildsRequest
 */
export interface SubmitBuildsRequest {
    /**
     * Properties assigned to build data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from
     * the Provider system.
     * 
     * Note that these properties will never be returned with build data. They are not intended for use as
     * metadata to associate with a build. Internally they are stored as a hash so that personal information etc.
     * is never stored within Jira.
     * 
     * Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not
     * contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitBuildsRequest
     */
    properties?: { [key: string]: string; };
    /**
     * A list of builds to submit to Jira.
     * 
     * Each build may be associated with one or more Jira issue keys, and will be associated with any properties
     * included in this request.
     * 
     * @type {Array<BuildData>}
     * @memberof SubmitBuildsRequest
     */
    builds: Array<BuildData>;
    /**
     * 
     * @type {ProviderMetadata3}
     * @memberof SubmitBuildsRequest
     */
    providerMetadata?: ProviderMetadata3;
}
/**
 * The result of a successful `submitBuilds` request.
 * 
 * @export
 * @interface SubmitBuildsResponse
 */
export interface SubmitBuildsResponse {
    /**
     * The keys of builds that have been accepted for submission. A build key is a composite key that consists of
     * `pipelineId` and `buildNumber`.
     * 
     * A build may be rejected if it was only associated with unknown issue keys, or if the submitted data for that
     * build does not match the required schema.
     * 
     * Note that a build that isn't updated due to it's `updateSequenceNumber` being out of order is not
     * considered a failed submission.
     * 
     * @type {Array<BuildKey>}
     * @memberof SubmitBuildsResponse
     */
    acceptedBuilds?: Array<BuildKey>;
    /**
     * Details of builds that have not been accepted for submission.
     * 
     * A build may be rejected if it was only associated with unknown issue keys, or if the submitted data for the
     * build does not match the required schema.
     * 
     * @type {Array<RejectedBuild>}
     * @memberof SubmitBuildsResponse
     */
    rejectedBuilds?: Array<RejectedBuild>;
    /**
     * Issue keys that are not known on this Jira instance (if any).
     * 
     * These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they
     * may be for projects that no longer exist.
     * 
     * If a build has been associated with issue keys other than those in this array it will still be stored against
     * those valid keys. If a build was only associated with issue keys deemed to be invalid it won't be persisted.
     * 
     * @type {Array<string>}
     * @memberof SubmitBuildsResponse
     */
    unknownIssueKeys?: Array<string>;
}
/**
 * The payload used to submit (update / insert) deployment data.
 * @export
 * @interface SubmitDeploymentRequest
 */
export interface SubmitDeploymentRequest {
    /**
     * Properties assigned to deployment data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.
     * 
     * Properties are supplied as key/value pairs, and a maximum of 5 properties can be supplied, keys cannot contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitDeploymentRequest
     */
    properties?: { [key: string]: string; };
    /**
     * A list of deployments to submit to Jira.
     * 
     * Each deployment may be associated with one or more Jira issue keys, and will be associated with any properties included in this request.
     * 
     * @type {Array<DeploymentData>}
     * @memberof SubmitDeploymentRequest
     */
    deployments: Array<DeploymentData>;
    /**
     * 
     * @type {ProviderMetadata2}
     * @memberof SubmitDeploymentRequest
     */
    providerMetadata?: ProviderMetadata2;
}
/**
 * The result of a successful submitDeployments request.
 * 
 * @export
 * @interface SubmitDeploymentsResponse
 */
export interface SubmitDeploymentsResponse {
    /**
     * The keys of deployments that have been accepted for submission. A deployment key is a composite key that consists of `pipelineId`, `environmentId` and `deploymentSequenceNumber`.
     * 
     * A deployment may be rejected if it was only associated with unknown issue keys.
     * 
     * Note that a deployment that isn't updated due to it's updateSequenceNumber being out of order is not considered a failed submission.
     * 
     * @type {Array<DeploymentKey>}
     * @memberof SubmitDeploymentsResponse
     */
    acceptedDeployments?: Array<DeploymentKey>;
    /**
     * Details of deployments that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * The object will contain the deployment key and any errors associated with that deployment that have prevented it being submitted.
     * 
     * @type {Array<RejectedDeployment>}
     * @memberof SubmitDeploymentsResponse
     */
    rejectedDeployments?: Array<RejectedDeployment>;
    /**
     * Issue keys that are not known on this Jira instance (if any).
     * 
     * These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they may be for projects that no longer exist.
     * 
     * If a deployment has been associated with issue keys other than those in this array it will still be stored against those valid keys.
     * If a deployment was only associated with issue keys deemed to be invalid it won't be persisted.
     * 
     * @type {Array<string>}
     * @memberof SubmitDeploymentsResponse
     */
    unknownIssueKeys?: Array<string>;
    /**
     * Associations (e.g. Issue Keys or Service IDs) that are not known on this Jira instance (if any).
     * 
     * These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they may be for projects that no longer exist.
     * 
     * If a deployment has been associated with any other association other than those in this array it will still be stored against those valid associations.
     * If a deployment was only associated with the associations in this array, it is deemed to be invalid and it won't be persisted.
     * 
     * @type {Array<SubmitDeploymentsResponseUnknownAssociationsInner>}
     * @memberof SubmitDeploymentsResponse
     */
    unknownAssociations?: Array<SubmitDeploymentsResponseUnknownAssociationsInner>;
}
/**
 * The current gating status for the given Deployment.
 * 
 * @export
 * @interface SubmitDeploymentsResponse1
 */
export interface SubmitDeploymentsResponse1 {
    /**
     * This is the identifier for the Deployment.
     * 
     * @type {number}
     * @memberof SubmitDeploymentsResponse1
     */
    deploymentSequenceNumber?: number;
    /**
     * The ID of the Deployment's pipeline.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1
     */
    pipelineId?: string;
    /**
     * The ID of the Deployment's environment.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1
     */
    environmentId?: string;
    /**
     * Time the deployment gating status was updated.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1
     */
    updatedTimestamp?: string;
    /**
     * The gating status
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1
     */
    gatingStatus?: SubmitDeploymentsResponse1GatingStatusEnum;
    /**
     * 
     * @type {Array<SubmitDeploymentsResponse1DetailsInner>}
     * @memberof SubmitDeploymentsResponse1
     */
    details?: Array<SubmitDeploymentsResponse1DetailsInner>;
}


/**
 * @export
 */
export const SubmitDeploymentsResponse1GatingStatusEnum = {
    Allowed: 'allowed',
    Prevented: 'prevented',
    Awaiting: 'awaiting',
    Invalid: 'invalid'
} as const;
export type SubmitDeploymentsResponse1GatingStatusEnum = typeof SubmitDeploymentsResponse1GatingStatusEnum[keyof typeof SubmitDeploymentsResponse1GatingStatusEnum];

/**
 * Details related to the gating status
 * 
 * @export
 * @interface SubmitDeploymentsResponse1DetailsInner
 */
export interface SubmitDeploymentsResponse1DetailsInner {
    /**
     * The type of the gating status details.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1DetailsInner
     */
    type: SubmitDeploymentsResponse1DetailsInnerTypeEnum;
    /**
     * An issue key that references an issue in Jira.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1DetailsInner
     */
    issueKey: string;
    /**
     * A full HTTPS link to the Jira issue for the change request gating this Deployment. This field is provided if the details type is issue.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponse1DetailsInner
     */
    issueLink: string;
}


/**
 * @export
 */
export const SubmitDeploymentsResponse1DetailsInnerTypeEnum = {
    Issue: 'issue'
} as const;
export type SubmitDeploymentsResponse1DetailsInnerTypeEnum = typeof SubmitDeploymentsResponse1DetailsInnerTypeEnum[keyof typeof SubmitDeploymentsResponse1DetailsInnerTypeEnum];

/**
 * 
 * @export
 * @interface SubmitDeploymentsResponseUnknownAssociationsInner
 */
export interface SubmitDeploymentsResponseUnknownAssociationsInner {
    /**
     * Defines the association type. Currently supported entities can be found in this field's value enums list.
     * 
     * @type {string}
     * @memberof SubmitDeploymentsResponseUnknownAssociationsInner
     */
    associationType: SubmitDeploymentsResponseUnknownAssociationsInnerAssociationTypeEnum;
    /**
     * The entity keys that represent the entities to be associated.
     * The number of values counted across all associationTypes (issueKeys, issueIdOrKeys, serviceIdOrKeys, supported ATIs and entity associations) must not exceed a limit of 500.
     * 
     * @type {Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>}
     * @memberof SubmitDeploymentsResponseUnknownAssociationsInner
     */
    values: Array<DeploymentDataAssociationsInnerAnyOf2ValuesInner>;
}


/**
 * @export
 */
export const SubmitDeploymentsResponseUnknownAssociationsInnerAssociationTypeEnum = {
    Commit: 'commit',
    Repository: 'repository'
} as const;
export type SubmitDeploymentsResponseUnknownAssociationsInnerAssociationTypeEnum = typeof SubmitDeploymentsResponseUnknownAssociationsInnerAssociationTypeEnum[keyof typeof SubmitDeploymentsResponseUnknownAssociationsInnerAssociationTypeEnum];

/**
 * The payload used to submit (update / insert) DevOps Component data.
 * @export
 * @interface SubmitDevopsComponentsRequest
 */
export interface SubmitDevopsComponentsRequest {
    /**
     * Properties assigned to incidents/components/review data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.
     * 
     * Properties are supplied as key/value pairs, and a maximum of 5 properties can be supplied, keys cannot contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitDevopsComponentsRequest
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Component>}
     * @memberof SubmitDevopsComponentsRequest
     */
    components: Array<Component>;
    /**
     * 
     * @type {ProviderMetadata6}
     * @memberof SubmitDevopsComponentsRequest
     */
    providerMetadata?: ProviderMetadata6;
}
/**
 * The result of a successful submitDevopsComponents request.
 * 
 * @export
 * @interface SubmitDevopsComponentsResponse
 */
export interface SubmitDevopsComponentsResponse {
    /**
     * The IDs of Components that have been accepted for submission.
     * 
     * A Component may be rejected if it was only associated with unknown project keys.
     * 
     * Note that a Component that isn't updated due to it's updateSequenceNumber being out of order is not considered a failed submission.
     * 
     * @type {Array<string>}
     * @memberof SubmitDevopsComponentsResponse
     */
    acceptedComponents?: Array<string>;
    /**
     * Details of Components that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * The object (if present) will be keyed by Component ID and include any errors associated with that Component that have prevented it being submitted.
     * 
     * @type {{ [key: string]: Array<ErrorMessage1>; }}
     * @memberof SubmitDevopsComponentsResponse
     */
    failedComponents?: { [key: string]: Array<ErrorMessage1>; };
    /**
     * Project keys that are not known on this Jira instance (if any).
     * 
     * These may be invalid keys (e.g. `UTF` is sometimes incorrectly identified as a Jira project key), or they may be for projects that no longer exist.
     * 
     * If a Component has been associated with project keys other than those in this array it will still be stored against those valid keys.
     * If a Component was only associated with project keys deemed to be invalid it won't be persisted.
     * 
     * @type {Array<string>}
     * @memberof SubmitDevopsComponentsResponse
     */
    unknownProjectKeys?: Array<string>;
}
/**
 * The payload used to submit (update / insert) Feature Flag data.
 * @export
 * @interface SubmitFeatureFlagRequest
 */
export interface SubmitFeatureFlagRequest {
    /**
     * Properties assigned to Feature Flag data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.
     * 
     * Note that these properties will never be returned with Feature Flag data. They are not intended for use as metadata to associate with a Feature Flag. Internally they are stored as a hash so that personal information etc. is never stored within Jira.
     * 
     * Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitFeatureFlagRequest
     */
    properties?: { [key: string]: string; };
    /**
     * A list of Feature Flags to submit to Jira.
     * 
     * Each Feature Flag may be associated with 1 or more Jira issue keys, and will be associated with any properties included in this request.
     * 
     * @type {Array<FeatureFlagData>}
     * @memberof SubmitFeatureFlagRequest
     */
    flags: Array<FeatureFlagData>;
    /**
     * 
     * @type {ProviderMetadata1}
     * @memberof SubmitFeatureFlagRequest
     */
    providerMetadata?: ProviderMetadata1;
}
/**
 * The result of a successful submitFeatureFlags request.
 * 
 * @export
 * @interface SubmitFeatureFlagsResponse
 */
export interface SubmitFeatureFlagsResponse {
    /**
     * The IDs of Feature Flags that have been accepted for submission.
     * 
     * A Feature Flag may be rejected if it was only associated with unknown issue keys.
     * 
     * Note that a Feature Flag that isn't updated due to it's updateSequenceId being out of order is not considered a failed submission.
     * 
     * @type {Array<string>}
     * @memberof SubmitFeatureFlagsResponse
     */
    acceptedFeatureFlags?: Array<string>;
    /**
     * Details of Feature Flags that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * The object (if present) will be keyed by Feature Flag ID and include any errors associated with that Feature Flag that have prevented it being submitted.
     * 
     * @type {{ [key: string]: Array<ErrorMessage1>; }}
     * @memberof SubmitFeatureFlagsResponse
     */
    failedFeatureFlags?: { [key: string]: Array<ErrorMessage1>; };
    /**
     * Issue keys that are not known on this Jira instance (if any). 
     * 
     * These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they may be for projects that no longer exist.
     * 
     * If a Feature Flag has been associated with issue keys other than those in this array it will still be stored against those valid keys.
     * If a Feature Flag was only associated with issue keys deemed to be invalid it won't be persisted.
     * 
     * @type {Array<string>}
     * @memberof SubmitFeatureFlagsResponse
     */
    unknownIssueKeys?: Array<string>;
}
/**
 * The payload used to submit (update / insert) Incident data.
 * @export
 * @interface SubmitIncidentsRequest
 */
export interface SubmitIncidentsRequest {
    /**
     * Properties assigned to incidents/components/review data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.
     * 
     * Properties are supplied as key/value pairs, and a maximum of 5 properties can be supplied, keys cannot contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitIncidentsRequest
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {ProviderMetadata6}
     * @memberof SubmitIncidentsRequest
     */
    providerMetadata?: ProviderMetadata6;
    /**
     * 
     * @type {Array<Incident>}
     * @memberof SubmitIncidentsRequest
     */
    incidents?: Array<Incident>;
    /**
     * 
     * @type {Array<Review>}
     * @memberof SubmitIncidentsRequest
     */
    reviews?: Array<Review>;
}
/**
 * 
 * @export
 * @interface SubmitIncidentsRequestAnyOf
 */
export interface SubmitIncidentsRequestAnyOf {
    /**
     * 
     * @type {Array<Incident>}
     * @memberof SubmitIncidentsRequestAnyOf
     */
    incidents?: Array<Incident>;
}
/**
 * 
 * @export
 * @interface SubmitIncidentsRequestAnyOf1
 */
export interface SubmitIncidentsRequestAnyOf1 {
    /**
     * 
     * @type {Array<Review>}
     * @memberof SubmitIncidentsRequestAnyOf1
     */
    reviews?: Array<Review>;
}
/**
 * The result of a successful submitIncidents request.
 * 
 * @export
 * @interface SubmitIncidentsResponse
 */
export interface SubmitIncidentsResponse {
    /**
     * The IDs of Incidents that have been accepted for submission.
     * 
     * A Incident may be rejected if it was only associated with unknown project keys.
     * 
     * Note that a Incident that isn't updated due to it's updateSequenceNumber being out of order is not considered a failed submission.
     * 
     * @type {Array<string>}
     * @memberof SubmitIncidentsResponse
     */
    acceptedIncidents?: Array<string>;
    /**
     * Details of Incidents that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * The object (if present) will be keyed by Incident ID and include any errors associated with that Incident that have prevented it being submitted.
     * 
     * @type {{ [key: string]: Array<ErrorMessage1>; }}
     * @memberof SubmitIncidentsResponse
     */
    failedIncidents?: { [key: string]: Array<ErrorMessage1>; };
    /**
     * Project keys that are not known on this Jira instance (if any).
     * 
     * These may be invalid keys (e.g. `UTF` is sometimes incorrectly identified as a Jira project key), or they may be for projects that no longer exist.
     * 
     * If a Incident has been associated with project keys other than those in this array it will still be stored against those valid keys.
     * If a Incident was only associated with project keys deemed to be invalid it won't be persisted.
     * 
     * @type {Array<string>}
     * @memberof SubmitIncidentsResponse
     */
    unknownProjectKeys?: Array<string>;
}
/**
 * The payload used to submit (update / insert) Operations Workspace ids.
 * @export
 * @interface SubmitOperationsWorkspacesRequest
 */
export interface SubmitOperationsWorkspacesRequest {
    /**
     * The IDs of Operations Workspaces that are available to this Jira site.
     * 
     * @type {Array<string>}
     * @memberof SubmitOperationsWorkspacesRequest
     */
    workspaceIds: Array<string>;
}
/**
 * The result of a successful submitOperationsWorkspaces request.
 * 
 * @export
 * @interface SubmitOperationsWorkspacesResponse
 */
export interface SubmitOperationsWorkspacesResponse {
    /**
     * The IDs of Operations Workspaces that have been linked to the Jira site in this request.
     * 
     * @type {Array<string>}
     * @memberof SubmitOperationsWorkspacesResponse
     */
    acceptedWorkspaceIds?: Array<string>;
}
/**
 * The result of a successful `submitRemoteLinks` request.
 * 
 * @export
 * @interface SubmitRemoteLinks202Response
 */
export interface SubmitRemoteLinks202Response {
    /**
     * The IDs of Remote Links that have been accepted for submission.
     * 
     * A Remote Link may be rejected if it was only associated with unknown issue keys, unknown service IDs, or if
     * the submitted data for that Remote Link does not match the required schema.
     * 
     * Note that a Remote Link that isn't updated due to it's `updateSequenceNumber` being out of order is not
     * considered a failed submission.
     * 
     * @type {Array<string>}
     * @memberof SubmitRemoteLinks202Response
     */
    acceptedRemoteLinks?: Array<string>;
    /**
     * Details of Remote Links that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * A Remote Link may be rejected if it was only associated with unknown issue keys, unknown service IDs, or
     * if the submitted data for the Remote Link does not match the required schema.
     * 
     * The object (if present) will be keyed by Remote Link ID and include any errors associated with that
     * Remote Link that have prevented it being submitted.
     * 
     * @type {{ [key: string]: Array<SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner>; }}
     * @memberof SubmitRemoteLinks202Response
     */
    rejectedRemoteLinks?: { [key: string]: Array<SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner>; };
    /**
     * Issue keys or services IDs or keys that are not known on this Jira instance (if any).
     * 
     * @type {Array<RemoteLinkDataAssociationsInner>}
     * @memberof SubmitRemoteLinks202Response
     */
    unknownAssociations?: Array<RemoteLinkDataAssociationsInner>;
}
/**
 * A message supplied in the case of an error.
 * @export
 * @interface SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner
 */
export interface SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner {
    /**
     * A human-readable message describing the error.
     * @type {string}
     * @memberof SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner
     */
    message: string;
    /**
     * An optional trace ID that can be used by Jira developers to locate the source of the error.
     * @type {string}
     * @memberof SubmitRemoteLinks202ResponseRejectedRemoteLinksValueInner
     */
    errorTraceId?: string;
}
/**
 * The payload used to submit (update / insert) Remote Link data.
 * @export
 * @interface SubmitRemoteLinksRequest
 */
export interface SubmitRemoteLinksRequest {
    /**
     * Properties assigned to Remote Link data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from
     * the Provider system.
     * 
     * Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not
     * contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitRemoteLinksRequest
     */
    properties?: { [key: string]: string; };
    /**
     * A list of Remote Links to submit to Jira.
     * 
     * Each Remote Link may be associated with one or more Jira issue keys, and will be associated with any properties
     * included in this request.
     * 
     * @type {Array<RemoteLinkData>}
     * @memberof SubmitRemoteLinksRequest
     */
    remoteLinks: Array<RemoteLinkData>;
    /**
     * 
     * @type {ProviderMetadata4}
     * @memberof SubmitRemoteLinksRequest
     */
    providerMetadata?: ProviderMetadata4;
}
/**
 * The payload used to submit (update / insert) Security Workspace IDs.
 * @export
 * @interface SubmitSecurityWorkspacesRequest
 */
export interface SubmitSecurityWorkspacesRequest {
    /**
     * The IDs of Security Workspaces to link to this Jira site. These must follow this regex pattern: `[a-zA-Z0-9\\-_.~@:{}=]+(\/[a-zA-Z0-9\\-_.~@:{}=]+)*`
     * 
     * @type {Array<string>}
     * @memberof SubmitSecurityWorkspacesRequest
     */
    workspaceIds: Array<string>;
}
/**
 * The payload used to submit (update / insert) Vulnerability data.
 * @export
 * @interface SubmitVulnerabilitiesRequest
 */
export interface SubmitVulnerabilitiesRequest {
    /**
     * Indicates the operation being performed by the provider system when sending this data. "NORMAL" - Data received during real-time, user-triggered actions (e.g. user closed or updated a vulnerability). "SCAN" - Data sent through some automated process (e.g. some periodically scheduled repository scan). "BACKFILL" - Data received while backfilling existing data (e.g. pushing historical vulnerabilities when re-connect a workspace). Default is "NORMAL". "NORMAL" traffic has higher priority but tighter rate limits, "SCAN" traffic has medium priority and looser limits, "BACKFILL" has lower priority and much looser limits
     * 
     * @type {string}
     * @memberof SubmitVulnerabilitiesRequest
     */
    operationType?: SubmitVulnerabilitiesRequestOperationTypeEnum;
    /**
     * Properties assigned to vulnerability data that can then be used for delete / query operations.
     * 
     * Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.
     * 
     * Properties are supplied as key/value pairs, and a maximum of 5 properties can be supplied, keys cannot contain ':' or start with '_'.
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubmitVulnerabilitiesRequest
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {Array<VulnerabilityDetails>}
     * @memberof SubmitVulnerabilitiesRequest
     */
    vulnerabilities: Array<VulnerabilityDetails>;
    /**
     * 
     * @type {ProviderMetadata5}
     * @memberof SubmitVulnerabilitiesRequest
     */
    providerMetadata?: ProviderMetadata5;
}


/**
 * @export
 */
export const SubmitVulnerabilitiesRequestOperationTypeEnum = {
    Normal: 'NORMAL',
    Scan: 'SCAN',
    Backfill: 'BACKFILL'
} as const;
export type SubmitVulnerabilitiesRequestOperationTypeEnum = typeof SubmitVulnerabilitiesRequestOperationTypeEnum[keyof typeof SubmitVulnerabilitiesRequestOperationTypeEnum];

/**
 * The result of a successful submitVulnerabilities request.
 * 
 * @export
 * @interface SubmitVulnerabilitiesResponse
 */
export interface SubmitVulnerabilitiesResponse {
    /**
     * The IDs of Vulnerabilities that have been accepted for submission.
     * 
     * A Vulnerability may be rejected if it was only associated with unknown project keys.
     * 
     * Note that a Vulnerability that isn't updated due to it's updateSequenceNumber being out of order is not considered a failed submission.
     * 
     * @type {Array<string>}
     * @memberof SubmitVulnerabilitiesResponse
     */
    acceptedVulnerabilities?: Array<string>;
    /**
     * Details of Vulnerabilities that have not been accepted for submission, usually due to a problem with the request data.
     * 
     * The object (if present) will be keyed by Vulnerability ID and include any errors associated with that Vulnerability that have prevented it being submitted.
     * 
     * @type {{ [key: string]: Array<ErrorMessage1>; }}
     * @memberof SubmitVulnerabilitiesResponse
     */
    failedVulnerabilities?: { [key: string]: Array<ErrorMessage1>; };
    /**
     * Associations (e.g. Service IDs) that are not known on this Jira instance (if any).
     * 
     * If a Vulnerability has been associated with any other association other than those in this array it will still be stored against those valid associations.
     * If a Vulnerability was only associated with the associations in this array, it is deemed to be invalid and it won't be persisted.
     * 
     * @type {Array<VulnerabilityDetailsAddAssociationsInner>}
     * @memberof SubmitVulnerabilitiesResponse
     */
    unknownAssociations?: Array<VulnerabilityDetailsAddAssociationsInner>;
}
/**
 * 
 * @export
 * @interface SubqueryBean
 */
export interface SubqueryBean {
    /**
     * 
     * @type {string}
     * @memberof SubqueryBean
     */
    query?: string;
}
/**
 * 
 * @export
 * @interface SwapSprintRequest
 */
export interface SwapSprintRequest {
    /**
     * 
     * @type {number}
     * @memberof SwapSprintRequest
     */
    sprintToSwapWith?: number;
}
/**
 * Information about tests that were executed during a build.
 * 
 * @export
 * @interface TestInfo
 */
export interface TestInfo {
    /**
     * The total number of tests considered during a build.
     * 
     * @type {number}
     * @memberof TestInfo
     */
    totalNumber: number;
    /**
     * The number of tests that passed during a build.
     * 
     * @type {number}
     * @memberof TestInfo
     */
    numberPassed: number;
    /**
     * The number of tests that failed during a build.
     * 
     * @type {number}
     * @memberof TestInfo
     */
    numberFailed: number;
    /**
     * The number of tests that were skipped during a build.
     * 
     * @type {number}
     * @memberof TestInfo
     */
    numberSkipped?: number;
}
/**
 * 
 * @export
 * @interface ToggleFeaturesRequest
 */
export interface ToggleFeaturesRequest {
    /**
     * 
     * @type {number}
     * @memberof ToggleFeaturesRequest
     */
    boardId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ToggleFeaturesRequest
     */
    enabling?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ToggleFeaturesRequest
     */
    feature?: string;
}
/**
 * 
 * @export
 * @interface UpdateSprintRequest
 */
export interface UpdateSprintRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    completeDate?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    createdDate?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    goal?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateSprintRequest
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateSprintRequest
     */
    originBoardId?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateSprintRequest
     */
    state?: string;
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
     * 
     * @type {GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls}
     * @memberof UserBean
     */
    avatarUrls?: GetAllBoards200ResponseValuesInnerAdminsAllOfUsersInnerAvatarUrls;
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
     * 
     * @type {ChangelogAuthorAllOfAvatarUrls}
     * @memberof UserDetails
     */
    avatarUrls?: ChangelogAuthorAllOfAvatarUrls;
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
 * Extra information (optional). This data will be shown in the security feature under the vulnerability displayName.
 * 
 * @export
 * @interface VulnerabilityAdditionalInfo
 */
export interface VulnerabilityAdditionalInfo {
    /**
     * The content of the additionalInfo.
     * 
     * @type {string}
     * @memberof VulnerabilityAdditionalInfo
     */
    content: string;
    /**
     * Optional URL linking to the information
     * 
     * @type {string}
     * @memberof VulnerabilityAdditionalInfo
     */
    url?: string;
}
/**
 * Data related to a specific vulnerability in a specific workspace that the vulnerability is present in. Must specify at least one association.
 * 
 * @export
 * @interface VulnerabilityDetails
 */
export interface VulnerabilityDetails {
    /**
     * The VulnerabilityData schema version used for this vulnerability data.
     * 
     * Placeholder to support potential schema changes in the future.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    schemaVersion: VulnerabilityDetailsSchemaVersionEnum;
    /**
     * The identifier for the Vulnerability. Must be unique for a given Provider.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    id: string;
    /**
     * An ID used to apply an ordering to updates for this Vulnerability in the case of out-of-order receipt of update requests.
     * 
     * This can be any monotonically increasing number. A suggested implementation is to use epoch millis from the Provider system, but other alternatives are valid (e.g. a Provider could store a counter against each Vulnerability and increment that on each update to Jira).
     * 
     * Updates for a Vulnerability that are received with an updateSequenceId lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof VulnerabilityDetails
     */
    updateSequenceNumber: number;
    /**
     * The identifier of the Container where this Vulnerability was found. Must be unique for a given Provider. This must follow this regex pattern: `[a-zA-Z0-9\\-_.~@:{}=]+(/[a-zA-Z0-9\\-_.~@:{}=]+)*`
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    containerId: string;
    /**
     * The human-readable name for the Vulnerability. Will be shown in the UI.
     * 
     * If not provided, will use the ID for display.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    displayName: string;
    /**
     * A description of the issue in markdown format that will be shown in the UI and used when creating Jira Issues. HTML tags are not supported in the markdown format. For creating a new line `\n` can be used. Read more about the accepted markdown transformations [here](https://atlaskit.atlassian.com/packages/editor/editor-markdown-transformer).
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    description: string;
    /**
     * A URL users can use to link to a summary view of this vulnerability, if appropriate.
     * 
     * This could be any location that makes sense in the Provider system (e.g. if the summary information comes from a specific project, it might make sense to link the user to the vulnerability in that project).
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    url: string;
    /**
     * The type of Vulnerability detected.
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    type: VulnerabilityDetailsTypeEnum;
    /**
     * The timestamp to present to the user that shows when the Vulnerability was introduced.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    introducedDate: string;
    /**
     * The last-updated timestamp to present to the user the last time the Vulnerability was updated.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    lastUpdated: string;
    /**
     * 
     * @type {VulnerabilitySeverity}
     * @memberof VulnerabilityDetails
     */
    severity: VulnerabilitySeverity;
    /**
     * The identifying information for the Vulnerability.
     * 
     * @type {Array<Identifier>}
     * @memberof VulnerabilityDetails
     */
    identifiers?: Array<Identifier>;
    /**
     * The current status of the Vulnerability.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    status: VulnerabilityDetailsStatusEnum;
    /**
     * 
     * @type {VulnerabilityAdditionalInfo}
     * @memberof VulnerabilityDetails
     */
    additionalInfo?: VulnerabilityAdditionalInfo;
    /**
     * The associations (e.g. Jira issue) to add in addition to the currently stored associations of the Security Vulnerability.
     * 
     * @type {Array<VulnerabilityDetailsAddAssociationsInner>}
     * @memberof VulnerabilityDetails
     */
    addAssociations?: Array<VulnerabilityDetailsAddAssociationsInner>;
    /**
     * The associations (e.g. Jira issue) to remove from currently stored associations of the Security Vulnerability.
     * 
     * @type {Array<VulnerabilityDetailsAddAssociationsInner>}
     * @memberof VulnerabilityDetails
     */
    removeAssociations?: Array<VulnerabilityDetailsAddAssociationsInner>;
    /**
     * An ISO-8601 Date-time string representing the last time the provider updated associations on this entity.
     * 
     * Expected format is an RFC3339 formatted string.
     * 
     * @type {string}
     * @memberof VulnerabilityDetails
     */
    associationsLastUpdated?: string;
    /**
     * A sequence number to compare when writing entity associations to the database.
     * 
     * This can be any monotonically increasing number. A highly recommended implementation is to use epoch millis.
     * 
     * This is an optional field. If it is not provided it will default to being equal to the corresponding entity's `updateSequenceNumber`.
     * 
     * Associations are written following a LastWriteWins strategy, association that are received with an associationsUpdateSequenceNumber lower than what is currently stored will be ignored.
     * 
     * @type {number}
     * @memberof VulnerabilityDetails
     */
    associationsUpdateSequenceNumber?: number;
}


/**
 * @export
 */
export const VulnerabilityDetailsSchemaVersionEnum = {
    _10: '1.0'
} as const;
export type VulnerabilityDetailsSchemaVersionEnum = typeof VulnerabilityDetailsSchemaVersionEnum[keyof typeof VulnerabilityDetailsSchemaVersionEnum];

/**
 * @export
 */
export const VulnerabilityDetailsTypeEnum = {
    Sca: 'sca',
    Sast: 'sast',
    Dast: 'dast',
    Unknown: 'unknown'
} as const;
export type VulnerabilityDetailsTypeEnum = typeof VulnerabilityDetailsTypeEnum[keyof typeof VulnerabilityDetailsTypeEnum];

/**
 * @export
 */
export const VulnerabilityDetailsStatusEnum = {
    Open: 'open',
    Closed: 'closed',
    Ignored: 'ignored',
    Unknown: 'unknown'
} as const;
export type VulnerabilityDetailsStatusEnum = typeof VulnerabilityDetailsStatusEnum[keyof typeof VulnerabilityDetailsStatusEnum];

/**
 * 
 * @export
 * @interface VulnerabilityDetailsAddAssociationsInner
 */
export interface VulnerabilityDetailsAddAssociationsInner {
    /**
     * Defines the association type.
     * 
     * @type {string}
     * @memberof VulnerabilityDetailsAddAssociationsInner
     */
    associationType: VulnerabilityDetailsAddAssociationsInnerAssociationTypeEnum;
    /**
     * The Jira issue id or keys to associate the Security information with.
     * 
     * The number of values counted across all associationTypes (issueIdOrKeys) must not exceed a limit of 500.
     * 
     * @type {Array<string>}
     * @memberof VulnerabilityDetailsAddAssociationsInner
     */
    values: Array<string>;
}


/**
 * @export
 */
export const VulnerabilityDetailsAddAssociationsInnerAssociationTypeEnum = {
    IssueIdOrKeys: 'issueIdOrKeys'
} as const;
export type VulnerabilityDetailsAddAssociationsInnerAssociationTypeEnum = typeof VulnerabilityDetailsAddAssociationsInnerAssociationTypeEnum[keyof typeof VulnerabilityDetailsAddAssociationsInnerAssociationTypeEnum];

/**
 * Severity information for a single Vulnerability.
 * 
 * This is the severity information that will be presented to the user on e.g. the Jira Security screen.
 * 
 * @export
 * @interface VulnerabilitySeverity
 */
export interface VulnerabilitySeverity {
    /**
     * The severity level of the Vulnerability.
     * @type {string}
     * @memberof VulnerabilitySeverity
     */
    level: VulnerabilitySeverityLevelEnum;
}


/**
 * @export
 */
export const VulnerabilitySeverityLevelEnum = {
    Critical: 'critical',
    High: 'high',
    Medium: 'medium',
    Low: 'low',
    Unknown: 'unknown'
} as const;
export type VulnerabilitySeverityLevelEnum = typeof VulnerabilitySeverityLevelEnum[keyof typeof VulnerabilitySeverityLevelEnum];

