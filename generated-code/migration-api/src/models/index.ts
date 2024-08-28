/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface CloudFeedback
 */
export interface CloudFeedback {
    /**
     * 
     * @type {object}
     * @memberof CloudFeedback
     */
    details?: object;
}
/**
 * 
 * @export
 * @interface ConfluenceSpaceContainerV1
 */
export interface ConfluenceSpaceContainerV1 extends ContainerV1 {
    /**
     * 
     * @type {string}
     * @memberof ConfluenceSpaceContainerV1
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ConfluenceSpaceContainerV1
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ConfluenceSpaceContainerV1
     */
    sourceId: string;
}
/**
 * 
 * @export
 * @interface ContainerFetchResponse
 */
export interface ContainerFetchResponse {
    /**
     * 
     * @type {{ [key: string]: ContainerV1; }}
     * @memberof ContainerFetchResponse
     */
    containers: { [key: string]: ContainerV1; };
    /**
     * 
     * @type {ContainerResponseMeta}
     * @memberof ContainerFetchResponse
     */
    meta: ContainerResponseMeta;
}
/**
 * 
 * @export
 * @interface ContainerResponseMeta
 */
export interface ContainerResponseMeta {
    /**
     * 
     * @type {boolean}
     * @memberof ContainerResponseMeta
     */
    hasNext: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContainerResponseMeta
     */
    lastEntity?: string;
    /**
     * 
     * @type {number}
     * @memberof ContainerResponseMeta
     */
    pageSize: number;
}
/**
 * 
 * @export
 * @interface ContainerV1
 */
export interface ContainerV1 {
    /**
     * 
     * @type {string}
     * @memberof ContainerV1
     */
    type: string;
}
/**
 * 
 * @export
 * @interface EnrichedMigrationDetailsDtoV1
 */
export interface EnrichedMigrationDetailsDtoV1 {
    /**
     * URL of the destination cloud site for the migration
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    cloudUrl?: string;
    /**
     * This is the clientKey of the Confluence cloud instance, present in the installed [lifecycle callback](https://developer.atlassian.com/cloud/jira/platform/connect-app-descriptor/#lifecycle) sent to your cloud application during installation
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    confluenceClientKey?: string;
    /**
     * Unix timestamp in milliseconds when the migration was created
     * @type {number}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    createdAt?: number;
    /**
     * This is the clientKey of the Jira cloud instance, present in the `installed` [lifecycle callback](https://developer.atlassian.com/cloud/jira/platform/connect-app-descriptor/#lifecycle) sent to your cloud application during installation
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    jiraClientKey?: string;
    /**
     * An ID (UUID) that the app migration platform uses to uniquely identify a migration
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    migrationId?: string;
    /**
     * An ID that the app migration platform generates to uniquely determine a source (server) and destination (cloud-site) of migration
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    migrationScopeId?: string;
    /**
     * The name of the migration plan
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface GetMigrationObjectUsingGET200Response
 */
export interface GetMigrationObjectUsingGET200Response {
    /**
     * 
     * @type {string}
     * @memberof GetMigrationObjectUsingGET200Response
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface JiraProjectContainerV1
 */
export interface JiraProjectContainerV1 extends ContainerV1 {
    /**
     * 
     * @type {string}
     * @memberof JiraProjectContainerV1
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof JiraProjectContainerV1
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof JiraProjectContainerV1
     */
    sourceId: string;
}
/**
 * 
 * @export
 * @interface MigrationMappingDto
 */
export interface MigrationMappingDto {
    /**
     * 
     * @type {MigrationMappingItem}
     * @memberof MigrationMappingDto
     */
    items: MigrationMappingItem;
    /**
     * 
     * @type {MigrationMappingMeta}
     * @memberof MigrationMappingDto
     */
    meta: MigrationMappingMeta;
}
/**
 * 
 * @export
 * @interface MigrationMappingItem
 */
export interface MigrationMappingItem {
    /**
     * 
     * @type {string}
     * @memberof MigrationMappingItem
     */
    additionalProperties?: string;
}
/**
 * 
 * @export
 * @interface MigrationMappingMeta
 */
export interface MigrationMappingMeta {
    /**
     * 
     * @type {boolean}
     * @memberof MigrationMappingMeta
     */
    hasNext: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigrationMappingMeta
     */
    lastEntity?: string;
    /**
     * 
     * @type {number}
     * @memberof MigrationMappingMeta
     */
    pageSize: number;
}
/**
 * 
 * @export
 * @interface ProgressEndpointDto
 */
export interface ProgressEndpointDto {
    /**
     * The migration status of the transfer. 
     * 
     *  Use one of these values:
     * 
     *  - `IN_PROGRESS`: We recommend reporting progress about once a minute.
     * 
     *  - `SUCCESS`: Use when the migration runs to completion and all entities are successfully migrated.
     * 
     *  - `INCOMPLETE`: Use when the migration finishes but some entities are not migrated or when the migration  is cancelled (see [Transfer cancellation](/platform/app-migration/transfer-cancellation/)).
     * 
     *  - `FAILED`: Use when the migration doesn't run to completion because it encounters a problem.
     * @type {string}
     * @memberof ProgressEndpointDto
     */
    status: ProgressEndpointDtoStatusEnum;
    /**
     * The percent complete for the transfer. If not provided (or set as zero), the previous value will be kept. 
     * 
     *  The status update is ignored when the value of `percent` is less than the value in a previous update. 
     * 
     *  When the result of a migration is `SUCCESS`, set `percent` to 100. Otherwise, set the value to an integer between 1 and 99 that represents the proportion of entities migrated.
     * @type {number}
     * @memberof ProgressEndpointDto
     */
    percent?: number;
    /**
     * A progress message for the transfer.
     * 
     *  Messages can't contain more than 65,536 characters. Messages that exceed this limit are truncated to 65,536 characters, and the following string is appended: `<truncated, message too large>`.
     * @type {string}
     * @memberof ProgressEndpointDto
     */
    message?: string;
}


/**
 * @export
 */
export const ProgressEndpointDtoStatusEnum = {
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Incomplete: 'INCOMPLETE'
} as const;
export type ProgressEndpointDtoStatusEnum = typeof ProgressEndpointDtoStatusEnum[keyof typeof ProgressEndpointDtoStatusEnum];

/**
 * 
 * @export
 * @interface TransferErrorDto
 */
export interface TransferErrorDto {
    /**
     * Type of the exception
     * @type {string}
     * @memberof TransferErrorDto
     */
    exceptionType: string;
    /**
     * Stack trace of the exception (obfuscated for privacy reasons)
     * @type {string}
     * @memberof TransferErrorDto
     */
    safeStackTrace: string;
}
/**
 * 
 * @export
 * @interface TransferMetadata
 */
export interface TransferMetadata {
    /**
     * 
     * @type {EnrichedMigrationDetailsDtoV1}
     * @memberof TransferMetadata
     */
    migrationDetails: EnrichedMigrationDetailsDtoV1;
    /**
     * An ID (UUID) that the app migration platform uniquely generates per migration for each listener
     * @type {string}
     * @memberof TransferMetadata
     */
    transferId: string;
    /**
     * The status of the migration
     * @type {string}
     * @memberof TransferMetadata
     */
    status: TransferMetadataStatusEnum;
}


/**
 * @export
 */
export const TransferMetadataStatusEnum = {
    InProgress: 'IN_PROGRESS',
    CancellationRequested: 'CANCELLATION_REQUESTED'
} as const;
export type TransferMetadataStatusEnum = typeof TransferMetadataStatusEnum[keyof typeof TransferMetadataStatusEnum];

/**
 * 
 * @export
 * @interface UploadedDataDto
 */
export interface UploadedDataDto {
    /**
     * 
     * @type {string}
     * @memberof UploadedDataDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadedDataDto
     */
    s3Key: string;
}
/**
 * 
 * @export
 * @interface UserSelectionContainerV1
 */
export interface UserSelectionContainerV1 extends ContainerV1 {
    /**
     * 
     * @type {string}
     * @memberof UserSelectionContainerV1
     */
    selectedUsers?: UserSelectionContainerV1SelectedUsersEnum;
    /**
     * 
     * @type {string}
     * @memberof UserSelectionContainerV1
     */
    type: string;
}


/**
 * @export
 */
export const UserSelectionContainerV1SelectedUsersEnum = {
    AllUsers: 'ALL_USERS'
} as const;
export type UserSelectionContainerV1SelectedUsersEnum = typeof UserSelectionContainerV1SelectedUsersEnum[keyof typeof UserSelectionContainerV1SelectedUsersEnum];

/**
 * 
 * @export
 * @interface WebhookEndpointsDto
 */
export interface WebhookEndpointsDto {
    /**
     * Non empty JSON array of absolute URL(s)
     * @type {Array<string>}
     * @memberof WebhookEndpointsDto
     */
    endpoints?: Array<string>;
}
