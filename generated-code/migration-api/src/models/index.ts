/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AdminEntityPropertyRequest
 */
export interface AdminEntityPropertyRequest {
    /**
     * 
     * @type {string}
     * @memberof AdminEntityPropertyRequest
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEntityPropertyRequest
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEntityPropertyRequest
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminEntityPropertyRequest
     */
    entityType?: string;
    /**
     * 
     * @type {Array<AdminEntityPropertyRequestTransformersEnum>}
     * @memberof AdminEntityPropertyRequest
     */
    transformers?: Array<AdminEntityPropertyRequestTransformersEnum>;
}


/**
 * @export
 */
export const AdminEntityPropertyRequestTransformersEnum = {
    MriIdMapping: 'MriIdMapping'
} as const;
export type AdminEntityPropertyRequestTransformersEnum = typeof AdminEntityPropertyRequestTransformersEnum[keyof typeof AdminEntityPropertyRequestTransformersEnum];

/**
 * 
 * @export
 * @interface AppLicenseDetailDto
 */
export interface AppLicenseDetailDto {
    /**
     * 
     * @type {string}
     * @memberof AppLicenseDetailDto
     */
    appKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppLicenseDetailDto
     */
    licensed?: boolean;
}
/**
 * 
 * @export
 * @interface AppProgress
 */
export interface AppProgress {
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    serverAppName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    serverAppKey?: string;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {number}
     * @memberof AppProgress
     */
    completionPercent?: number;
    /**
     * 
     * @type {AppProgressStatusEnum}
     * @memberof AppProgress
     */
    status?: AppProgressStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    statusMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof AppProgress
     */
    lastUpdatedAt?: number;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    contactVendorUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    appVendorName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppProgress
     */
    notCancellableTooltip?: string;
    /**
     * 
     * @type {Array<MultiTransfer>}
     * @memberof AppProgress
     */
    multiTransfers?: Array<MultiTransfer>;
    /**
     * 
     * @type {boolean}
     * @memberof AppProgress
     */
    readyToUse?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppProgress
     */
    cancellable?: boolean;
}


/**
 * @export
 */
export const AppProgressStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type AppProgressStatusEnum = typeof AppProgressStatusEnum[keyof typeof AppProgressStatusEnum];

/**
 * 
 * @export
 * @interface AppProgressResponse
 */
export interface AppProgressResponse {
    /**
     * 
     * @type {Array<AppProgress>}
     * @memberof AppProgressResponse
     */
    progress?: Array<AppProgress>;
}
/**
 * 
 * @export
 * @interface AppTypeInstalledRequest
 */
export interface AppTypeInstalledRequest {
    /**
     * 
     * @type {Array<ServerAppData>}
     * @memberof AppTypeInstalledRequest
     */
    serverAppData?: Array<ServerAppData>;
}
/**
 * 
 * @export
 * @interface AppTypeInstalledResponse
 */
export interface AppTypeInstalledResponse {
    /**
     * 
     * @type {Array<MatchedServerAppData>}
     * @memberof AppTypeInstalledResponse
     */
    forgeAppData?: Array<MatchedServerAppData>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppTypeInstalledResponse
     */
    connectServerAppKey?: Array<string>;
}
/**
 * 
 * @export
 * @interface AppWebhookCheckResult
 */
export interface AppWebhookCheckResult {
    /**
     * 
     * @type {string}
     * @memberof AppWebhookCheckResult
     */
    appKey?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppWebhookCheckResult
     */
    available?: boolean;
}
/**
 * 
 * @export
 * @interface AppsLicenseResponseDto
 */
export interface AppsLicenseResponseDto {
    /**
     * 
     * @type {Set<AppLicenseDetailDto>}
     * @memberof AppsLicenseResponseDto
     */
    appLicenses?: Set<AppLicenseDetailDto>;
}
/**
 * 
 * @export
 * @interface CancelTransferRequest
 */
export interface CancelTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof CancelTransferRequest
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface CancelTransferResponse
 */
export interface CancelTransferResponse {
    /**
     * 
     * @type {string}
     * @memberof CancelTransferResponse
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof CancelTransferResponse
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof CancelTransferResponse
     */
    expireTime?: string;
}
/**
 * 
 * @export
 * @interface CheckupResult
 */
export interface CheckupResult {
    /**
     * 
     * @type {ProductDetail}
     * @memberof CheckupResult
     */
    tcsDetails?: ProductDetail;
    /**
     * 
     * @type {string}
     * @memberof CheckupResult
     */
    confluenceClientKey?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckupResult
     */
    jiraClientKey?: string;
    /**
     * 
     * @type {{ [key: string]: Set<string>; }}
     * @memberof CheckupResult
     */
    webhooks?: { [key: string]: Set<string>; };
}
/**
 * 
 * @export
 * @interface CloudAppsInstalled
 */
export interface CloudAppsInstalled {
    /**
     * 
     * @type {Set<string>}
     * @memberof CloudAppsInstalled
     */
    cloudAppKeys?: Set<string>;
}
/**
 * 
 * @export
 * @interface CloudFeedback
 */
export interface CloudFeedback {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CloudFeedback
     */
    details?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface CloudSiteRequest
 */
export interface CloudSiteRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof CloudSiteRequest
     */
    appKeys?: Array<string>;
}
/**
 * 
 * @export
 * @interface CloudSiteResponse
 */
export interface CloudSiteResponse {
    /**
     * 
     * @type {string}
     * @memberof CloudSiteResponse
     */
    cloudId?: string;
    /**
     * 
     * @type {Array<SiteAppInfo>}
     * @memberof CloudSiteResponse
     */
    apps?: Array<SiteAppInfo>;
}
/**
 * 
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    attribute?: string;
    /**
     * 
     * @type {ConditionOperatorEnum}
     * @memberof Condition
     */
    operator?: ConditionOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof Condition
     */
    value?: number;
}


/**
 * @export
 */
export const ConditionOperatorEnum = {
    Eq: 'EQ',
    Ne: 'NE',
    Lt: 'LT',
    Le: 'LE',
    Gt: 'GT',
    Ge: 'GE'
} as const;
export type ConditionOperatorEnum = typeof ConditionOperatorEnum[keyof typeof ConditionOperatorEnum];

/**
 * 
 * @export
 * @interface ConsentRequest
 */
export interface ConsentRequest {
    /**
     * 
     * @type {string}
     * @memberof ConsentRequest
     */
    displayedText?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof ConsentRequest
     */
    sens?: Set<string>;
}
/**
 * 
 * @export
 * @interface ContainerByPageResponse
 */
export interface ContainerByPageResponse {
    /**
     * 
     * @type {ContainerResponseMeta}
     * @memberof ContainerByPageResponse
     */
    meta?: ContainerResponseMeta;
    /**
     * 
     * @type {Array<ContainerV1>}
     * @memberof ContainerByPageResponse
     */
    containers?: Array<ContainerV1>;
}
/**
 * 
 * @export
 * @interface ContainerFileMetadataDto
 */
export interface ContainerFileMetadataDto {
    /**
     * 
     * @type {string}
     * @memberof ContainerFileMetadataDto
     */
    containerId?: string;
    /**
     * 
     * @type {number}
     * @memberof ContainerFileMetadataDto
     */
    fileCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerFileMetadataDto
     */
    totalFileSize?: number;
}
/**
 * 
 * @export
 * @interface ContainerResponseMeta
 */
export interface ContainerResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof ContainerResponseMeta
     */
    pageSize?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ContainerResponseMeta
     */
    hasNext?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContainerResponseMeta
     */
    lastEntity?: string;
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
    type?: string;
    /**
     * 
     * @type {Array<PlatformTransfer>}
     * @memberof ContainerV1
     */
    transfers?: Array<PlatformTransfer>;
}
/**
 * 
 * @export
 * @interface DefaultWebhookRequest
 */
export interface DefaultWebhookRequest {
    /**
     * 
     * @type {string}
     * @memberof DefaultWebhookRequest
     */
    endpoint?: string;
}
/**
 * 
 * @export
 * @interface DownloadUrlResponse
 */
export interface DownloadUrlResponse {
    /**
     * 
     * @type {string}
     * @memberof DownloadUrlResponse
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface EnrichedMigrationDetailsDtoV1
 */
export interface EnrichedMigrationDetailsDtoV1 {
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    migrationScopeId?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    jiraClientKey?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    confluenceClientKey?: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    cloudUrl?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    enabledFeatures?: Set<string>;
    /**
     * 
     * @type {EnrichedMigrationDetailsDtoV1ProductEnum}
     * @memberof EnrichedMigrationDetailsDtoV1
     */
    product?: EnrichedMigrationDetailsDtoV1ProductEnum;
}


/**
 * @export
 */
export const EnrichedMigrationDetailsDtoV1ProductEnum = {
    Jira: 'JIRA',
    Confluence: 'CONFLUENCE'
} as const;
export type EnrichedMigrationDetailsDtoV1ProductEnum = typeof EnrichedMigrationDetailsDtoV1ProductEnum[keyof typeof EnrichedMigrationDetailsDtoV1ProductEnum];

/**
 * 
 * @export
 * @interface EntityProperty
 */
export interface EntityProperty {
    /**
     * 
     * @type {string}
     * @memberof EntityProperty
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityProperty
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityProperty
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityProperty
     */
    entityType?: string;
}
/**
 * 
 * @export
 * @interface EntityPropertyRequest
 */
export interface EntityPropertyRequest {
    /**
     * 
     * @type {Array<EntityProperty>}
     * @memberof EntityPropertyRequest
     */
    items?: Array<EntityProperty>;
    /**
     * 
     * @type {Array<EntityPropertyRequestTransformersEnum>}
     * @memberof EntityPropertyRequest
     */
    transformers?: Array<EntityPropertyRequestTransformersEnum>;
}


/**
 * @export
 */
export const EntityPropertyRequestTransformersEnum = {
    MriIdMapping: 'MriIdMapping'
} as const;
export type EntityPropertyRequestTransformersEnum = typeof EntityPropertyRequestTransformersEnum[keyof typeof EntityPropertyRequestTransformersEnum];

/**
 * 
 * @export
 * @interface ExtendTransferLifetimeRequest
 */
export interface ExtendTransferLifetimeRequest {
    /**
     * 
     * @type {number}
     * @memberof ExtendTransferLifetimeRequest
     */
    extendToEpochSecond?: number;
}
/**
 * 
 * @export
 * @interface FeederRequest
 */
export interface FeederRequest {
    /**
     * 
     * @type {string}
     * @memberof FeederRequest
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof FeederRequest
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof FeederRequest
     */
    paginationKey?: string;
    /**
     * 
     * @type {number}
     * @memberof FeederRequest
     */
    schemaVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof FeederRequest
     */
    segment?: number;
    /**
     * 
     * @type {boolean}
     * @memberof FeederRequest
     */
    dryRun?: boolean;
    /**
     * 
     * @type {FeederRequestJobTypeEnum}
     * @memberof FeederRequest
     */
    jobType?: FeederRequestJobTypeEnum;
}


/**
 * @export
 */
export const FeederRequestJobTypeEnum = {
    Pmr: 'PMR',
    NonPmr: 'NON_PMR',
    Tidb: 'TIDB'
} as const;
export type FeederRequestJobTypeEnum = typeof FeederRequestJobTypeEnum[keyof typeof FeederRequestJobTypeEnum];

/**
 * 
 * @export
 * @interface FeederResponse
 */
export interface FeederResponse {
    /**
     * 
     * @type {Array<ShardAwareNodeModel>}
     * @memberof FeederResponse
     */
    shardAwareNodes?: Array<ShardAwareNodeModel>;
    /**
     * 
     * @type {FeederResponseJobTypeEnum}
     * @memberof FeederResponse
     */
    jobType?: FeederResponseJobTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FeederResponse
     */
    nextPaginationKey?: string;
}


/**
 * @export
 */
export const FeederResponseJobTypeEnum = {
    Pmr: 'PMR',
    NonPmr: 'NON_PMR',
    Tidb: 'TIDB'
} as const;
export type FeederResponseJobTypeEnum = typeof FeederResponseJobTypeEnum[keyof typeof FeederResponseJobTypeEnum];

/**
 * 
 * @export
 * @interface FeederResponseSql
 */
export interface FeederResponseSql {
    /**
     * 
     * @type {Array<ShardAwareTableRecord>}
     * @memberof FeederResponseSql
     */
    tableRecords?: Array<ShardAwareTableRecord>;
    /**
     * 
     * @type {FeederResponseSqlJobTypeEnum}
     * @memberof FeederResponseSql
     */
    jobType?: FeederResponseSqlJobTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FeederResponseSql
     */
    nextPaginationKey?: string;
}


/**
 * @export
 */
export const FeederResponseSqlJobTypeEnum = {
    Pmr: 'PMR',
    NonPmr: 'NON_PMR',
    Tidb: 'TIDB'
} as const;
export type FeederResponseSqlJobTypeEnum = typeof FeederResponseSqlJobTypeEnum[keyof typeof FeederResponseSqlJobTypeEnum];

/**
 * 
 * @export
 * @interface FileMappingDto
 */
export interface FileMappingDto {
    /**
     * 
     * @type {string}
     * @memberof FileMappingDto
     */
    label?: string;
}
/**
 * 
 * @export
 * @interface FileMetadataDto
 */
export interface FileMetadataDto {
    /**
     * The unique file key used to retrieve the file
     * @type {string}
     * @memberof FileMetadataDto
     */
    s3Key?: string;
    /**
     * Optional label assigned to the file during upload
     * @type {string}
     * @memberof FileMetadataDto
     */
    label?: string;
    /**
     * Size of the file in bytes
     * @type {number}
     * @memberof FileMetadataDto
     */
    fileSize?: number;
}
/**
 * 
 * @export
 * @interface FileMetadataDtoPage
 */
export interface FileMetadataDtoPage {
    /**
     * 
     * @type {Array<FileMetadataDto>}
     * @memberof FileMetadataDtoPage
     */
    items?: Array<FileMetadataDto>;
    /**
     * 
     * @type {string}
     * @memberof FileMetadataDtoPage
     */
    lastEvaluatedKey?: string;
}
/**
 * 
 * @export
 * @interface FinalizePreloadDataUploadRequest
 */
export interface FinalizePreloadDataUploadRequest {
    /**
     * 
     * @type {string}
     * @memberof FinalizePreloadDataUploadRequest
     */
    uploadId?: string;
    /**
     * 
     * @type {string}
     * @memberof FinalizePreloadDataUploadRequest
     */
    transferId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FinalizePreloadDataUploadRequest
     */
    sha256CheckSumValues?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FinalizePreloadDataUploadRequest
     */
    etags?: Array<string>;
}
/**
 * 
 * @export
 * @interface FinalizePreloadEventRequest
 */
export interface FinalizePreloadEventRequest {
    /**
     * 
     * @type {string}
     * @memberof FinalizePreloadEventRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof FinalizePreloadEventRequest
     */
    preloadTransferId?: string;
}
/**
 * 
 * @export
 * @interface FinalizeUploadRequest
 */
export interface FinalizeUploadRequest {
    /**
     * 
     * @type {string}
     * @memberof FinalizeUploadRequest
     */
    uploadId?: string;
    /**
     * 
     * @type {string}
     * @memberof FinalizeUploadRequest
     */
    transferId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FinalizeUploadRequest
     */
    sha256CheckSumValues?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FinalizeUploadRequest
     */
    etags?: Array<string>;
}
/**
 * 
 * @export
 * @interface ForgeAppLog
 */
export interface ForgeAppLog {
    /**
     * 
     * @type {string}
     * @memberof ForgeAppLog
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ForgeCFTypeKeyPrefixResponse
 */
export interface ForgeCFTypeKeyPrefixResponse {
    /**
     * 
     * @type {string}
     * @memberof ForgeCFTypeKeyPrefixResponse
     */
    typeKeyPrefix?: string;
}
/**
 * 
 * @export
 * @interface ForgeEventDto
 */
export interface ForgeEventDto {
    /**
     * 
     * @type {ForgeEventDtoEventTypeEnum}
     * @memberof ForgeEventDto
     */
    eventType?: ForgeEventDtoEventTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ForgeEventDto
     */
    transferId?: string;
    /**
     * 
     * @type {ForgeMigrationDetails}
     * @memberof ForgeEventDto
     */
    migrationDetails?: ForgeMigrationDetails;
    /**
     * 
     * @type {string}
     * @memberof ForgeEventDto
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ForgeEventDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof ForgeEventDto
     */
    messageId?: string;
    /**
     * 
     * @type {ForgeEventDtoTransferStatusEnum}
     * @memberof ForgeEventDto
     */
    transferStatus?: ForgeEventDtoTransferStatusEnum;
    /**
     * 
     * @type {TransferError}
     * @memberof ForgeEventDto
     */
    transferError?: TransferError;
    /**
     * 
     * @type {string}
     * @memberof ForgeEventDto
     */
    transferName?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ForgeEventDto
     */
    items?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EntityProperty>}
     * @memberof ForgeEventDto
     */
    entityProperties?: Array<EntityProperty>;
}


/**
 * @export
 */
export const ForgeEventDtoEventTypeEnum = {
    ListenerTriggered: 'LISTENER_TRIGGERED',
    AppDataUploaded: 'APP_DATA_UPLOADED',
    KeyValuePairUploaded: 'KEY_VALUE_PAIR_UPLOADED',
    SqlUploaded: 'SQL_UPLOADED',
    OsUploaded: 'OS_UPLOADED',
    EntityPropertiesUploaded: 'ENTITY_PROPERTIES_UPLOADED',
    AppDataPreloaded: 'APP_DATA_PRELOADED',
    TransferCancellationRequested: 'TRANSFER_CANCELLATION_REQUESTED',
    ListenerErrored: 'LISTENER_ERRORED',
    ExportPhaseCompleted: 'EXPORT_PHASE_COMPLETED',
    TransferSettled: 'TRANSFER_SETTLED',
    MutationCreated: 'MUTATION_CREATED'
} as const;
export type ForgeEventDtoEventTypeEnum = typeof ForgeEventDtoEventTypeEnum[keyof typeof ForgeEventDtoEventTypeEnum];

/**
 * @export
 */
export const ForgeEventDtoTransferStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type ForgeEventDtoTransferStatusEnum = typeof ForgeEventDtoTransferStatusEnum[keyof typeof ForgeEventDtoTransferStatusEnum];

/**
 * 
 * @export
 * @interface ForgeFileMappingDto
 */
export interface ForgeFileMappingDto {
    /**
     * 
     * @type {string}
     * @memberof ForgeFileMappingDto
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ForgeFileMappingDto
     */
    label?: string;
}
/**
 * 
 * @export
 * @interface ForgeFileMetadataDto
 */
export interface ForgeFileMetadataDto {
    /**
     * The unique file key used to retrieve the file
     * @type {string}
     * @memberof ForgeFileMetadataDto
     */
    key?: string;
    /**
     * Optional label assigned to the file during upload
     * @type {string}
     * @memberof ForgeFileMetadataDto
     */
    label?: string;
    /**
     * Size of the file in bytes
     * @type {number}
     * @memberof ForgeFileMetadataDto
     */
    fileSize?: number;
}
/**
 * 
 * @export
 * @interface ForgeFileMetadataDtoPage
 */
export interface ForgeFileMetadataDtoPage {
    /**
     * 
     * @type {Array<ForgeFileMetadataDto>}
     * @memberof ForgeFileMetadataDtoPage
     */
    items?: Array<ForgeFileMetadataDto>;
    /**
     * 
     * @type {string}
     * @memberof ForgeFileMetadataDtoPage
     */
    lastEvaluatedKey?: string;
}
/**
 * 
 * @export
 * @interface ForgeKeyValuePairRequest
 */
export interface ForgeKeyValuePairRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ForgeKeyValuePairRequest
     */
    items?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ForgeKeyValuePairRequest
     */
    entityName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ForgeKeyValuePairRequest
     */
    importOnForgeStorage?: boolean;
    /**
     * 
     * @type {Array<ForgeKeyValuePairRequestTransformersEnum>}
     * @memberof ForgeKeyValuePairRequest
     */
    transformers?: Array<ForgeKeyValuePairRequestTransformersEnum>;
}


/**
 * @export
 */
export const ForgeKeyValuePairRequestTransformersEnum = {
    MriIdMapping: 'MriIdMapping'
} as const;
export type ForgeKeyValuePairRequestTransformersEnum = typeof ForgeKeyValuePairRequestTransformersEnum[keyof typeof ForgeKeyValuePairRequestTransformersEnum];

/**
 * 
 * @export
 * @interface ForgeMacroKeyPrefixResponse
 */
export interface ForgeMacroKeyPrefixResponse {
    /**
     * 
     * @type {string}
     * @memberof ForgeMacroKeyPrefixResponse
     */
    macroKeyPrefix?: string;
}
/**
 * 
 * @export
 * @interface ForgeMigrationDetails
 */
export interface ForgeMigrationDetails {
    /**
     * 
     * @type {string}
     * @memberof ForgeMigrationDetails
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ForgeMigrationDetails
     */
    migrationScopeId?: string;
    /**
     * 
     * @type {number}
     * @memberof ForgeMigrationDetails
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof ForgeMigrationDetails
     */
    cloudUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ForgeMigrationDetails
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface ForgeSqlRequest
 */
export interface ForgeSqlRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ForgeSqlRequest
     */
    items?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ForgeSqlRequest
     */
    tableName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ForgeSqlRequest
     */
    importOnForgeStorage?: boolean;
    /**
     * 
     * @type {Array<ForgeSqlRequestTransformersEnum>}
     * @memberof ForgeSqlRequest
     */
    transformers?: Array<ForgeSqlRequestTransformersEnum>;
}


/**
 * @export
 */
export const ForgeSqlRequestTransformersEnum = {
    MriIdMapping: 'MriIdMapping'
} as const;
export type ForgeSqlRequestTransformersEnum = typeof ForgeSqlRequestTransformersEnum[keyof typeof ForgeSqlRequestTransformersEnum];

/**
 * 
 * @export
 * @interface ForgeWorkflowRuleKeyPrefixResponse
 */
export interface ForgeWorkflowRuleKeyPrefixResponse {
    /**
     * 
     * @type {string}
     * @memberof ForgeWorkflowRuleKeyPrefixResponse
     */
    keyPrefix?: string;
}
/**
 * 
 * @export
 * @interface GetPreloadDataUploadUrlRequest
 */
export interface GetPreloadDataUploadUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof GetPreloadDataUploadUrlRequest
     */
    uploadId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPreloadDataUploadUrlRequest
     */
    chunkIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPreloadDataUploadUrlRequest
     */
    contentLength?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPreloadDataUploadUrlRequest
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPreloadDataUploadUrlRequest
     */
    contentSHA256?: string;
}
/**
 * 
 * @export
 * @interface GetUploadMutationUrlRequest
 */
export interface GetUploadMutationUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    uploadId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    chunkIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    contentLength?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    contentSHA256?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadMutationUrlRequest
     */
    contentMD5?: string;
}
/**
 * 
 * @export
 * @interface GetUploadUrlRequest
 */
export interface GetUploadUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    uploadId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    chunkIndex?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    contentMD5?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    contentLength?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    transferId?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUploadUrlRequest
     */
    firstByte?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUploadUrlRequest
     */
    lastByte?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUploadUrlRequest
     */
    contentSHA256?: string;
}
/**
 * 
 * @export
 * @interface InitializeUploadResponse
 */
export interface InitializeUploadResponse {
    /**
     * 
     * @type {string}
     * @memberof InitializeUploadResponse
     */
    uploadId?: string;
}
/**
 * 
 * @export
 * @interface JobChangeDetail
 */
export interface JobChangeDetail {
    /**
     * 
     * @type {string}
     * @memberof JobChangeDetail
     */
    jobId?: string;
    /**
     * 
     * @type {string}
     * @memberof JobChangeDetail
     */
    entityType?: string;
    /**
     * 
     * @type {JobChangeDetailStatusEnum}
     * @memberof JobChangeDetail
     */
    status?: JobChangeDetailStatusEnum;
}


/**
 * @export
 */
export const JobChangeDetailStatusEnum = {
    InProgress: 'IN_PROGRESS',
    Completed: 'COMPLETED',
    Failed: 'FAILED',
    Aborted: 'ABORTED'
} as const;
export type JobChangeDetailStatusEnum = typeof JobChangeDetailStatusEnum[keyof typeof JobChangeDetailStatusEnum];

/**
 * 
 * @export
 * @interface LogMessage
 */
export interface LogMessage {
    /**
     * 
     * @type {LogMessageLevelEnum}
     * @memberof LogMessage
     */
    level?: LogMessageLevelEnum;
    /**
     * 
     * @type {number}
     * @memberof LogMessage
     */
    eventTime?: number;
    /**
     * 
     * @type {string}
     * @memberof LogMessage
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof LogMessage
     */
    eventTimeISO?: string;
}


/**
 * @export
 */
export const LogMessageLevelEnum = {
    Warn: 'WARN',
    Info: 'INFO'
} as const;
export type LogMessageLevelEnum = typeof LogMessageLevelEnum[keyof typeof LogMessageLevelEnum];

/**
 * 
 * @export
 * @interface MatchedServerAppData
 */
export interface MatchedServerAppData {
    /**
     * 
     * @type {string}
     * @memberof MatchedServerAppData
     */
    forgeAppId?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchedServerAppData
     */
    serverAppKey?: string;
}
/**
 * 
 * @export
 * @interface MauiTransferDto
 */
export interface MauiTransferDto {
    /**
     * 
     * @type {string}
     * @memberof MauiTransferDto
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof MauiTransferDto
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof MauiTransferDto
     */
    migrationId?: string;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    progressPercentage?: number;
    /**
     * 
     * @type {MauiTransferDtoStatusEnum}
     * @memberof MauiTransferDto
     */
    status?: MauiTransferDtoStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof MauiTransferDto
     */
    statusMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MauiTransferDto
     */
    rerun?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    lastUpdatedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    expiryTimeEpoch?: number;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof MauiTransferDto
     */
    operationKey?: string;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    startedAt?: number;
    /**
     * 
     * @type {number}
     * @memberof MauiTransferDto
     */
    cancellationByEpoch?: number;
}


/**
 * @export
 */
export const MauiTransferDtoStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type MauiTransferDtoStatusEnum = typeof MauiTransferDtoStatusEnum[keyof typeof MauiTransferDtoStatusEnum];

/**
 * 
 * @export
 * @interface MessageProgress
 */
export interface MessageProgress {
    /**
     * 
     * @type {MessageProgressStatusEnum}
     * @memberof MessageProgress
     */
    status?: MessageProgressStatusEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof MessageProgress
     */
    messageIds?: Set<string>;
}


/**
 * @export
 */
export const MessageProgressStatusEnum = {
    Success: 'SUCCESS',
    Failed: 'FAILED'
} as const;
export type MessageProgressStatusEnum = typeof MessageProgressStatusEnum[keyof typeof MessageProgressStatusEnum];

/**
 * 
 * @export
 * @interface MigrationMappingDto
 */
export interface MigrationMappingDto {
    /**
     * 
     * @type {MigrationMappingMeta}
     * @memberof MigrationMappingDto
     */
    meta?: MigrationMappingMeta;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MigrationMappingDto
     */
    items?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface MigrationMappingMeta
 */
export interface MigrationMappingMeta {
    /**
     * 
     * @type {number}
     * @memberof MigrationMappingMeta
     */
    pageSize?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MigrationMappingMeta
     */
    hasNext?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MigrationMappingMeta
     */
    lastEntity?: string;
}
/**
 * 
 * @export
 * @interface ModifyTransferStateRequest
 */
export interface ModifyTransferStateRequest {
    /**
     * 
     * @type {string}
     * @memberof ModifyTransferStateRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof ModifyTransferStateRequest
     */
    containerId?: string;
    /**
     * 
     * @type {ModifyTransferStateRequestStatusEnum}
     * @memberof ModifyTransferStateRequest
     */
    status?: ModifyTransferStateRequestStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ModifyTransferStateRequest
     */
    percent?: number;
}


/**
 * @export
 */
export const ModifyTransferStateRequestStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type ModifyTransferStateRequestStatusEnum = typeof ModifyTransferStateRequestStatusEnum[keyof typeof ModifyTransferStateRequestStatusEnum];

/**
 * 
 * @export
 * @interface MultiTransfer
 */
export interface MultiTransfer {
    /**
     * 
     * @type {string}
     * @memberof MultiTransfer
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof MultiTransfer
     */
    transferName?: string;
    /**
     * 
     * @type {number}
     * @memberof MultiTransfer
     */
    completionPercent?: number;
    /**
     * 
     * @type {MultiTransferStatusEnum}
     * @memberof MultiTransfer
     */
    status?: MultiTransferStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof MultiTransfer
     */
    statusMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof MultiTransfer
     */
    lastUpdatedAt?: number;
    /**
     * 
     * @type {string}
     * @memberof MultiTransfer
     */
    notCancellableTooltip?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MultiTransfer
     */
    cancellable?: boolean;
}


/**
 * @export
 */
export const MultiTransferStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type MultiTransferStatusEnum = typeof MultiTransferStatusEnum[keyof typeof MultiTransferStatusEnum];

/**
 * 
 * @export
 * @interface MutationRequest
 */
export interface MutationRequest {
    /**
     * 
     * @type {string}
     * @memberof MutationRequest
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof MutationRequest
     */
    seed?: string;
}
/**
 * 
 * @export
 * @interface NodeDto
 */
export interface NodeDto {
    /**
     * 
     * @type {string}
     * @memberof NodeDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NodeDto
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof NodeDto
     */
    schemaVersion?: number;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NodeDto
     */
    properties?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface OSFinaliseUploadPart
 */
export interface OSFinaliseUploadPart {
    /**
     * 
     * @type {number}
     * @memberof OSFinaliseUploadPart
     */
    chunkNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof OSFinaliseUploadPart
     */
    chunkSHA256?: string;
    /**
     * 
     * @type {string}
     * @memberof OSFinaliseUploadPart
     */
    etag?: string;
}
/**
 * 
 * @export
 * @interface OSFinaliseUploadRequest
 */
export interface OSFinaliseUploadRequest {
    /**
     * 
     * @type {string}
     * @memberof OSFinaliseUploadRequest
     */
    uploadReference?: string;
    /**
     * 
     * @type {Set<OSFinaliseUploadPart>}
     * @memberof OSFinaliseUploadRequest
     */
    parts?: Set<OSFinaliseUploadPart>;
}
/**
 * 
 * @export
 * @interface OSFinaliseUploadResult
 */
export interface OSFinaliseUploadResult {
    /**
     * 
     * @type {boolean}
     * @memberof OSFinaliseUploadResult
     */
    success?: boolean;
}
/**
 * 
 * @export
 * @interface OSGetUploadUrlRequest
 */
export interface OSGetUploadUrlRequest {
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlRequest
     */
    uploadReference?: string;
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlRequest
     */
    chunkIndex?: string;
    /**
     * 
     * @type {number}
     * @memberof OSGetUploadUrlRequest
     */
    chunkFirstByte?: number;
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlRequest
     */
    chunkLength?: string;
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlRequest
     */
    chunkSHA256?: string;
}
/**
 * 
 * @export
 * @interface OSGetUploadUrlResult
 */
export interface OSGetUploadUrlResult {
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlResult
     */
    url?: string;
    /**
     * 
     * @type {Array<PairStringString>}
     * @memberof OSGetUploadUrlResult
     */
    headers?: Array<PairStringString>;
    /**
     * 
     * @type {boolean}
     * @memberof OSGetUploadUrlResult
     */
    includeAuthHeaders?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OSGetUploadUrlResult
     */
    etag?: string;
}
/**
 * 
 * @export
 * @interface OSInitialiseRequest
 */
export interface OSInitialiseRequest {
    /**
     * 
     * @type {string}
     * @memberof OSInitialiseRequest
     */
    objectKeyTxfIs0s?: string;
}
/**
 * 
 * @export
 * @interface OSUploadInitialiseResult
 */
export interface OSUploadInitialiseResult {
    /**
     * 
     * @type {string}
     * @memberof OSUploadInitialiseResult
     */
    uploadReference?: string;
}
/**
 * 
 * @export
 * @interface PairStringString
 */
export interface PairStringString {
    /**
     * 
     * @type {string}
     * @memberof PairStringString
     */
    first?: string;
    /**
     * 
     * @type {string}
     * @memberof PairStringString
     */
    second?: string;
}
/**
 * 
 * @export
 * @interface PathfinderIdResponse
 */
export interface PathfinderIdResponse {
    /**
     * 
     * @type {string}
     * @memberof PathfinderIdResponse
     */
    pathfinderId?: string;
}
/**
 * 
 * @export
 * @interface PausedTransferDto
 */
export interface PausedTransferDto {
    /**
     * 
     * @type {string}
     * @memberof PausedTransferDto
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof PausedTransferDto
     */
    cloudId?: string;
    /**
     * 
     * @type {string}
     * @memberof PausedTransferDto
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {string}
     * @memberof PausedTransferDto
     */
    cloudUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof PausedTransferDto
     */
    product?: string;
}
/**
 * 
 * @export
 * @interface PausedTransferQueryResponse
 */
export interface PausedTransferQueryResponse {
    /**
     * 
     * @type {Array<PausedTransferDto>}
     * @memberof PausedTransferQueryResponse
     */
    transfers?: Array<PausedTransferDto>;
}
/**
 * 
 * @export
 * @interface PlatformTransfer
 */
export interface PlatformTransfer {
    /**
     * 
     * @type {string}
     * @memberof PlatformTransfer
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlatformTransfer
     */
    operationKey?: string;
    /**
     * 
     * @type {PlatformTransferStatusEnum}
     * @memberof PlatformTransfer
     */
    status?: PlatformTransferStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof PlatformTransfer
     */
    statusMessage?: string;
    /**
     * 
     * @type {number}
     * @memberof PlatformTransfer
     */
    progressPercentage?: number;
    /**
     * 
     * @type {string}
     * @memberof PlatformTransfer
     */
    progressMessage?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PlatformTransfer
     */
    progressProperties?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof PlatformTransfer
     */
    lastUpdatedAt?: string;
}


/**
 * @export
 */
export const PlatformTransferStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Cancelling: 'CANCELLING',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Incomplete: 'INCOMPLETE',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Cancelled: 'CANCELLED'
} as const;
export type PlatformTransferStatusEnum = typeof PlatformTransferStatusEnum[keyof typeof PlatformTransferStatusEnum];

/**
 * 
 * @export
 * @interface ProductDetail
 */
export interface ProductDetail {
    /**
     * 
     * @type {boolean}
     * @memberof ProductDetail
     */
    restricted?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductDetail
     */
    restrictedReasons?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductDetail
     */
    apps?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductDetail
     */
    workspaceId?: string;
}
/**
 * 
 * @export
 * @interface ProgressEndpointDto
 */
export interface ProgressEndpointDto {
    /**
     * 
     * @type {number}
     * @memberof ProgressEndpointDto
     */
    percent?: number;
    /**
     * 
     * @type {ProgressEndpointDtoStatusEnum}
     * @memberof ProgressEndpointDto
     */
    status?: ProgressEndpointDtoStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ProgressEndpointDto
     */
    message?: string;
}


/**
 * @export
 */
export const ProgressEndpointDtoStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type ProgressEndpointDtoStatusEnum = typeof ProgressEndpointDtoStatusEnum[keyof typeof ProgressEndpointDtoStatusEnum];

/**
 * 
 * @export
 * @interface RegisterForgeMultiTransferRequest
 */
export interface RegisterForgeMultiTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeMultiTransferRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeMultiTransferRequest
     */
    appId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeMultiTransferRequest
     */
    environmentName?: string;
    /**
     * 
     * @type {Set<RegisterTransferDefinition>}
     * @memberof RegisterForgeMultiTransferRequest
     */
    transfers?: Set<RegisterTransferDefinition>;
}
/**
 * 
 * @export
 * @interface RegisterForgeTransferRequest
 */
export interface RegisterForgeTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeTransferRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeTransferRequest
     */
    appId?: string;
    /**
     * 
     * @type {RegisterForgeTransferRequestEnvironmentTypeEnum}
     * @memberof RegisterForgeTransferRequest
     */
    environmentType?: RegisterForgeTransferRequestEnvironmentTypeEnum;
    /**
     * 
     * @type {Set<RegisterForgeTransferRequestAccessScopesEnum>}
     * @memberof RegisterForgeTransferRequest
     */
    accessScopes?: Set<RegisterForgeTransferRequestAccessScopesEnum>;
    /**
     * 
     * @type {RegisterTransferAnalytics}
     * @memberof RegisterForgeTransferRequest
     */
    analytics?: RegisterTransferAnalytics;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterForgeTransferRequest
     */
    enableAcceleratedTransfer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterForgeTransferRequest
     */
    environmentName?: string;
}


/**
 * @export
 */
export const RegisterForgeTransferRequestEnvironmentTypeEnum = {
    Development: 'DEVELOPMENT',
    Staging: 'STAGING',
    Production: 'PRODUCTION'
} as const;
export type RegisterForgeTransferRequestEnvironmentTypeEnum = typeof RegisterForgeTransferRequestEnvironmentTypeEnum[keyof typeof RegisterForgeTransferRequestEnvironmentTypeEnum];

/**
 * @export
 */
export const RegisterForgeTransferRequestAccessScopesEnum = {
    AppDataUgc: 'APP_DATA_UGC',
    AppDataPii: 'APP_DATA_PII',
    AppDataSecurity: 'APP_DATA_SECURITY',
    AppDataOther: 'APP_DATA_OTHER',
    ProductDataUgc: 'PRODUCT_DATA_UGC',
    ProductDataPii: 'PRODUCT_DATA_PII',
    ProductDataSecurity: 'PRODUCT_DATA_SECURITY',
    ProductDataOther: 'PRODUCT_DATA_OTHER',
    MigrationTracingProduct: 'MIGRATION_TRACING_PRODUCT',
    MigrationTracingIdentity: 'MIGRATION_TRACING_IDENTITY'
} as const;
export type RegisterForgeTransferRequestAccessScopesEnum = typeof RegisterForgeTransferRequestAccessScopesEnum[keyof typeof RegisterForgeTransferRequestAccessScopesEnum];

/**
 * 
 * @export
 * @interface RegisterMultiTransferRequest
 */
export interface RegisterMultiTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterMultiTransferRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterMultiTransferRequest
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {Set<RegisterTransferDefinition>}
     * @memberof RegisterMultiTransferRequest
     */
    transfers?: Set<RegisterTransferDefinition>;
}
/**
 * 
 * @export
 * @interface RegisterTransferAnalytics
 */
export interface RegisterTransferAnalytics {
    /**
     * 
     * @type {string}
     * @memberof RegisterTransferAnalytics
     */
    listenerFamily?: string;
}
/**
 * 
 * @export
 * @interface RegisterTransferDefinition
 */
export interface RegisterTransferDefinition {
    /**
     * 
     * @type {Set<RegisterTransferDefinitionAccessScopesEnum>}
     * @memberof RegisterTransferDefinition
     */
    accessScopes?: Set<RegisterTransferDefinitionAccessScopesEnum>;
    /**
     * 
     * @type {RegisterTransferAnalytics}
     * @memberof RegisterTransferDefinition
     */
    analytics?: RegisterTransferAnalytics;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterTransferDefinition
     */
    enableAcceleratedTransfer?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof RegisterTransferDefinition
     */
    tags?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof RegisterTransferDefinition
     */
    transferName?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof RegisterTransferDefinition
     */
    dependsOn?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterTransferDefinition
     */
    blocking?: boolean;
}


/**
 * @export
 */
export const RegisterTransferDefinitionAccessScopesEnum = {
    AppDataUgc: 'APP_DATA_UGC',
    AppDataPii: 'APP_DATA_PII',
    AppDataSecurity: 'APP_DATA_SECURITY',
    AppDataOther: 'APP_DATA_OTHER',
    ProductDataUgc: 'PRODUCT_DATA_UGC',
    ProductDataPii: 'PRODUCT_DATA_PII',
    ProductDataSecurity: 'PRODUCT_DATA_SECURITY',
    ProductDataOther: 'PRODUCT_DATA_OTHER',
    MigrationTracingProduct: 'MIGRATION_TRACING_PRODUCT',
    MigrationTracingIdentity: 'MIGRATION_TRACING_IDENTITY'
} as const;
export type RegisterTransferDefinitionAccessScopesEnum = typeof RegisterTransferDefinitionAccessScopesEnum[keyof typeof RegisterTransferDefinitionAccessScopesEnum];

/**
 * 
 * @export
 * @interface RegisterTransferRequest
 */
export interface RegisterTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterTransferRequest
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterTransferRequest
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {Set<RegisterTransferRequestAccessScopesEnum>}
     * @memberof RegisterTransferRequest
     */
    accessScopes?: Set<RegisterTransferRequestAccessScopesEnum>;
    /**
     * 
     * @type {RegisterTransferAnalytics}
     * @memberof RegisterTransferRequest
     */
    analytics?: RegisterTransferAnalytics;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterTransferRequest
     */
    enableAcceleratedTransfer?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof RegisterTransferRequest
     */
    tags?: Set<string>;
}


/**
 * @export
 */
export const RegisterTransferRequestAccessScopesEnum = {
    AppDataUgc: 'APP_DATA_UGC',
    AppDataPii: 'APP_DATA_PII',
    AppDataSecurity: 'APP_DATA_SECURITY',
    AppDataOther: 'APP_DATA_OTHER',
    ProductDataUgc: 'PRODUCT_DATA_UGC',
    ProductDataPii: 'PRODUCT_DATA_PII',
    ProductDataSecurity: 'PRODUCT_DATA_SECURITY',
    ProductDataOther: 'PRODUCT_DATA_OTHER',
    MigrationTracingProduct: 'MIGRATION_TRACING_PRODUCT',
    MigrationTracingIdentity: 'MIGRATION_TRACING_IDENTITY'
} as const;
export type RegisterTransferRequestAccessScopesEnum = typeof RegisterTransferRequestAccessScopesEnum[keyof typeof RegisterTransferRequestAccessScopesEnum];

/**
 * 
 * @export
 * @interface RegisterTransferRerunRequest
 */
export interface RegisterTransferRerunRequest {
    /**
     * 
     * @type {Set<RegisterTransferRerunRequestAccessScopesEnum>}
     * @memberof RegisterTransferRerunRequest
     */
    accessScopes?: Set<RegisterTransferRerunRequestAccessScopesEnum>;
    /**
     * 
     * @type {RegisterTransferAnalytics}
     * @memberof RegisterTransferRerunRequest
     */
    analytics?: RegisterTransferAnalytics;
    /**
     * 
     * @type {string}
     * @memberof RegisterTransferRerunRequest
     */
    transferId?: string;
}


/**
 * @export
 */
export const RegisterTransferRerunRequestAccessScopesEnum = {
    AppDataUgc: 'APP_DATA_UGC',
    AppDataPii: 'APP_DATA_PII',
    AppDataSecurity: 'APP_DATA_SECURITY',
    AppDataOther: 'APP_DATA_OTHER',
    ProductDataUgc: 'PRODUCT_DATA_UGC',
    ProductDataPii: 'PRODUCT_DATA_PII',
    ProductDataSecurity: 'PRODUCT_DATA_SECURITY',
    ProductDataOther: 'PRODUCT_DATA_OTHER',
    MigrationTracingProduct: 'MIGRATION_TRACING_PRODUCT',
    MigrationTracingIdentity: 'MIGRATION_TRACING_IDENTITY'
} as const;
export type RegisterTransferRerunRequestAccessScopesEnum = typeof RegisterTransferRerunRequestAccessScopesEnum[keyof typeof RegisterTransferRerunRequestAccessScopesEnum];

/**
 * 
 * @export
 * @interface RerunEnablement
 */
export interface RerunEnablement {
    /**
     * 
     * @type {boolean}
     * @memberof RerunEnablement
     */
    enabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof RerunEnablement
     */
    blockers?: Array<string>;
}
/**
 * 
 * @export
 * @interface RerunTransferResponse
 */
export interface RerunTransferResponse {
    /**
     * 
     * @type {string}
     * @memberof RerunTransferResponse
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof RerunTransferResponse
     */
    originalTransferId?: string;
    /**
     * 
     * @type {string}
     * @memberof RerunTransferResponse
     */
    transferName?: string;
}
/**
 * 
 * @export
 * @interface ResumedEventsDto
 */
export interface ResumedEventsDto {
    /**
     * 
     * @type {string}
     * @memberof ResumedEventsDto
     */
    transferId?: string;
    /**
     * 
     * @type {number}
     * @memberof ResumedEventsDto
     */
    eventsReplayed?: number;
}
/**
 * 
 * @export
 * @interface ServerAppData
 */
export interface ServerAppData {
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerAppData
     */
    forgeAppIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ServerAppData
     */
    serverAppKey?: string;
}
/**
 * 
 * @export
 * @interface ShardAwareNodeModel
 */
export interface ShardAwareNodeModel {
    /**
     * 
     * @type {string}
     * @memberof ShardAwareNodeModel
     */
    workSpaceAriStr?: string;
    /**
     * 
     * @type {NodeDto}
     * @memberof ShardAwareNodeModel
     */
    nodeDto?: NodeDto;
    /**
     * 
     * @type {Condition}
     * @memberof ShardAwareNodeModel
     */
    condition?: Condition;
}
/**
 * 
 * @export
 * @interface ShardAwareTableRecord
 */
export interface ShardAwareTableRecord {
    /**
     * 
     * @type {string}
     * @memberof ShardAwareTableRecord
     */
    shardingContext?: string;
    /**
     * 
     * @type {TableRecord}
     * @memberof ShardAwareTableRecord
     */
    tableRecord?: TableRecord;
}
/**
 * 
 * @export
 * @interface SiteAppInfo
 */
export interface SiteAppInfo {
    /**
     * 
     * @type {string}
     * @memberof SiteAppInfo
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SiteAppInfo
     */
    installed?: boolean;
}
/**
 * 
 * @export
 * @interface SiteAppsLicenseRequest
 */
export interface SiteAppsLicenseRequest {
    /**
     * 
     * @type {Set<string>}
     * @memberof SiteAppsLicenseRequest
     */
    appKeys?: Set<string>;
}
/**
 * 
 * @export
 * @interface TableRecord
 */
export interface TableRecord {
    /**
     * 
     * @type {string}
     * @memberof TableRecord
     */
    tableName?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TableRecord
     */
    columnVsValueMap?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface TransferDetailsDto
 */
export interface TransferDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof TransferDetailsDto
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferDetailsDto
     */
    containerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferDetailsDto
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof TransferDetailsDto
     */
    tags?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof TransferDetailsDto
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransferDetailsDto
     */
    blocking?: boolean;
    /**
     * 
     * @type {EnrichedMigrationDetailsDtoV1}
     * @memberof TransferDetailsDto
     */
    migrationDetails?: EnrichedMigrationDetailsDtoV1;
}
/**
 * 
 * @export
 * @interface TransferError
 */
export interface TransferError {
    /**
     * 
     * @type {string}
     * @memberof TransferError
     */
    exceptionType?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferError
     */
    safeStackTrace?: string;
}
/**
 * 
 * @export
 * @interface TransferEvent
 */
export interface TransferEvent {
    /**
     * 
     * @type {string}
     * @memberof TransferEvent
     */
    eventId?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferEvent
     */
    eventTime?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferEvent
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferEvent
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferEvent
     */
    eventTimeISO?: string;
}
/**
 * 
 * @export
 * @interface TransferForPlatform
 */
export interface TransferForPlatform {
    /**
     * 
     * @type {string}
     * @memberof TransferForPlatform
     */
    creator?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferForPlatform
     */
    cloudId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferForPlatform
     */
    cloudAppKey?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferForPlatform
     */
    migrationScope?: string;
}
/**
 * 
 * @export
 * @interface TransferLogEnablement
 */
export interface TransferLogEnablement {
    /**
     * 
     * @type {boolean}
     * @memberof TransferLogEnablement
     */
    enabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TransferLogEnablement
     */
    blockers?: Array<string>;
}
/**
 * 
 * @export
 * @interface TransferMetadata
 */
export interface TransferMetadata {
    /**
     * 
     * @type {string}
     * @memberof TransferMetadata
     */
    transferId?: string;
    /**
     * 
     * @type {EnrichedMigrationDetailsDtoV1}
     * @memberof TransferMetadata
     */
    migrationDetails?: EnrichedMigrationDetailsDtoV1;
    /**
     * 
     * @type {TransferMetadataStatusEnum}
     * @memberof TransferMetadata
     */
    status?: TransferMetadataStatusEnum;
}


/**
 * @export
 */
export const TransferMetadataStatusEnum = {
    Ready: 'READY',
    InProgress: 'IN_PROGRESS',
    Success: 'SUCCESS',
    Failed: 'FAILED',
    Skipped: 'SKIPPED',
    TimedOut: 'TIMED_OUT',
    Incomplete: 'INCOMPLETE',
    CancellationRequested: 'CANCELLATION_REQUESTED',
    Cancelled: 'CANCELLED'
} as const;
export type TransferMetadataStatusEnum = typeof TransferMetadataStatusEnum[keyof typeof TransferMetadataStatusEnum];

/**
 * 
 * @export
 * @interface TransferStartStatusResponse
 */
export interface TransferStartStatusResponse {
    /**
     * 
     * @type {TransferStartStatusResponseDependencyStatusEnum}
     * @memberof TransferStartStatusResponse
     */
    dependencyStatus?: TransferStartStatusResponseDependencyStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TransferStartStatusResponse
     */
    transferSettled?: boolean;
}


/**
 * @export
 */
export const TransferStartStatusResponseDependencyStatusEnum = {
    Running: 'RUNNING',
    Finished: 'FINISHED',
    Failed: 'FAILED'
} as const;
export type TransferStartStatusResponseDependencyStatusEnum = typeof TransferStartStatusResponseDependencyStatusEnum[keyof typeof TransferStartStatusResponseDependencyStatusEnum];

/**
 * 
 * @export
 * @interface TransferSummary
 */
export interface TransferSummary {
    /**
     * 
     * @type {string}
     * @memberof TransferSummary
     */
    transferId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferSummary
     */
    migrationId?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferSummary
     */
    appKey?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferSummary
     */
    creationTime?: string;
    /**
     * 
     * @type {number}
     * @memberof TransferSummary
     */
    progress?: number;
    /**
     * 
     * @type {string}
     * @memberof TransferSummary
     */
    status?: string;
    /**
     * 
     * @type {WebhookEndpointsDto}
     * @memberof TransferSummary
     */
    endpoints?: WebhookEndpointsDto;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof TransferSummary
     */
    files?: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface UnifiedEventAndLogsResponse
 */
export interface UnifiedEventAndLogsResponse {
    /**
     * 
     * @type {Array<LogMessage>}
     * @memberof UnifiedEventAndLogsResponse
     */
    logs?: Array<LogMessage>;
    /**
     * 
     * @type {Array<TransferEvent>}
     * @memberof UnifiedEventAndLogsResponse
     */
    events?: Array<TransferEvent>;
}
/**
 * 
 * @export
 * @interface WebhookCheckRequestDto
 */
export interface WebhookCheckRequestDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof WebhookCheckRequestDto
     */
    appKeys?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof WebhookCheckRequestDto
     */
    product?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookCheckRequestDto
     */
    hosting?: string;
}
/**
 * Set of endpoints called after the app migration.
 * @export
 * @interface WebhookEndpointsDto
 */
export interface WebhookEndpointsDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof WebhookEndpointsDto
     */
    endpoints?: Set<string>;
}
/**
 * 
 * @export
 * @interface WebhookResponseDto
 */
export interface WebhookResponseDto {
    /**
     * 
     * @type {Set<AppWebhookCheckResult>}
     * @memberof WebhookResponseDto
     */
    appEndpoints?: Set<AppWebhookCheckResult>;
    /**
     * 
     * @type {string}
     * @memberof WebhookResponseDto
     */
    stepsToResolve?: string;
}
