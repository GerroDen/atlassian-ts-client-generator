/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface PublicApiBulkOperationRequest
 */
export interface PublicApiBulkOperationRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicApiBulkOperationRequest
     */
    teamIds: Array<string>;
}
/**
 * 
 * @export
 * @interface PublicApiBulkOperationResponse
 */
export interface PublicApiBulkOperationResponse {
    /**
     * 
     * @type {Array<PublicApiBulkTeamOperationError>}
     * @memberof PublicApiBulkOperationResponse
     */
    errors: Array<PublicApiBulkTeamOperationError>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PublicApiBulkOperationResponse
     */
    successfulTeamIds: Array<string>;
}
/**
 * 
 * @export
 * @interface PublicApiBulkTeamOperationError
 */
export interface PublicApiBulkTeamOperationError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiBulkTeamOperationError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiBulkTeamOperationError
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiBulkTeamOperationError
     */
    teamId: string;
}
/**
 * 
 * @export
 * @interface PublicApiExternalReference
 */
export interface PublicApiExternalReference {
    /**
     * 
     * @type {string}
     * @memberof PublicApiExternalReference
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiExternalReference
     */
    source: PublicApiExternalReferenceSourceEnum;
}


/**
 * @export
 */
export const PublicApiExternalReferenceSourceEnum = {
    AtlassianGroup: 'ATLASSIAN_GROUP'
} as const;
export type PublicApiExternalReferenceSourceEnum = typeof PublicApiExternalReferenceSourceEnum[keyof typeof PublicApiExternalReferenceSourceEnum];

/**
 * 
 * @export
 * @interface PublicApiExternalTeamCreationPayload
 */
export interface PublicApiExternalTeamCreationPayload {
    /**
     * 
     * @type {string}
     * @memberof PublicApiExternalTeamCreationPayload
     */
    description: string;
    /**
     * 
     * @type {PublicApiExternalReference}
     * @memberof PublicApiExternalTeamCreationPayload
     */
    externalReference: PublicApiExternalReference;
    /**
     * 
     * @type {string}
     * @memberof PublicApiExternalTeamCreationPayload
     */
    siteId?: string;
}
/**
 * 
 * @export
 * @interface PublicApiFetchResponsePublicApiMembershipAccountId
 */
export interface PublicApiFetchResponsePublicApiMembershipAccountId {
    /**
     * 
     * @type {PublicApiPageInfoAccountId}
     * @memberof PublicApiFetchResponsePublicApiMembershipAccountId
     */
    pageInfo: PublicApiPageInfoAccountId;
    /**
     * 
     * @type {Array<PublicApiMembership>}
     * @memberof PublicApiFetchResponsePublicApiMembershipAccountId
     */
    results: Array<PublicApiMembership>;
}
/**
 * 
 * @export
 * @interface PublicApiLinkTeamToExternalSourcePayload
 */
export interface PublicApiLinkTeamToExternalSourcePayload {
    /**
     * 
     * @type {PublicApiExternalReference}
     * @memberof PublicApiLinkTeamToExternalSourcePayload
     */
    externalReference: PublicApiExternalReference;
    /**
     * The siteId to help locate the externalReference. For example, when the externalReference is a group belonging to a site.
     * @type {string}
     * @memberof PublicApiLinkTeamToExternalSourcePayload
     */
    siteId?: string;
}
/**
 * 
 * @export
 * @interface PublicApiMembership
 */
export interface PublicApiMembership {
    /**
     * 
     * @type {string}
     * @memberof PublicApiMembership
     */
    accountId: string;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipAddPayload
 */
export interface PublicApiMembershipAddPayload {
    /**
     * 
     * @type {Set<PublicApiMembership>}
     * @memberof PublicApiMembershipAddPayload
     */
    members: Set<PublicApiMembership>;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipAddResponse
 */
export interface PublicApiMembershipAddResponse {
    /**
     * 
     * @type {Set<PublicApiMembershipCodedError>}
     * @memberof PublicApiMembershipAddResponse
     */
    errors: Set<PublicApiMembershipCodedError>;
    /**
     * 
     * @type {Set<PublicApiMembership>}
     * @memberof PublicApiMembershipAddResponse
     */
    members: Set<PublicApiMembership>;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipCodedError
 */
export interface PublicApiMembershipCodedError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiMembershipCodedError
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiMembershipCodedError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiMembershipCodedError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipFetchPayload
 */
export interface PublicApiMembershipFetchPayload {
    /**
     * Pagination cursor, only members after the cursor will be returned
     * @type {string}
     * @memberof PublicApiMembershipFetchPayload
     */
    after?: string;
    /**
     * Maximum number of members to be returned
     * @type {number}
     * @memberof PublicApiMembershipFetchPayload
     */
    first?: number;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipRemovePayload
 */
export interface PublicApiMembershipRemovePayload {
    /**
     * 
     * @type {Set<PublicApiMembership>}
     * @memberof PublicApiMembershipRemovePayload
     */
    members: Set<PublicApiMembership>;
}
/**
 * 
 * @export
 * @interface PublicApiMembershipRemoveResponse
 */
export interface PublicApiMembershipRemoveResponse {
    /**
     * 
     * @type {Set<PublicApiMembershipCodedError>}
     * @memberof PublicApiMembershipRemoveResponse
     */
    errors: Set<PublicApiMembershipCodedError>;
}
/**
 * 
 * @export
 * @interface PublicApiOverallCodedError
 */
export interface PublicApiOverallCodedError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiOverallCodedError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiOverallCodedError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface PublicApiPageInfoAccountId
 */
export interface PublicApiPageInfoAccountId {
    /**
     * 
     * @type {string}
     * @memberof PublicApiPageInfoAccountId
     */
    endCursor?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicApiPageInfoAccountId
     */
    hasNextPage: boolean;
}
/**
 * 
 * @export
 * @interface PublicApiTeam
 */
export interface PublicApiTeam {
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    creatorId?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    state: PublicApiTeamStateEnum;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    teamId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeam
     */
    teamType: PublicApiTeamTeamTypeEnum;
}


/**
 * @export
 */
export const PublicApiTeamStateEnum = {
    Active: 'ACTIVE',
    Archived: 'ARCHIVED'
} as const;
export type PublicApiTeamStateEnum = typeof PublicApiTeamStateEnum[keyof typeof PublicApiTeamStateEnum];

/**
 * @export
 */
export const PublicApiTeamTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE',
    External: 'EXTERNAL',
    OrgAdminManaged: 'ORG_ADMIN_MANAGED'
} as const;
export type PublicApiTeamTeamTypeEnum = typeof PublicApiTeamTeamTypeEnum[keyof typeof PublicApiTeamTeamTypeEnum];

/**
 * 
 * @export
 * @interface PublicApiTeamCreationPayload
 */
export interface PublicApiTeamCreationPayload {
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamCreationPayload
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamCreationPayload
     */
    displayName: string;
    /**
     * If the org mandates site-scoped teams, a site ID must be provided or the operation will fail. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It's recommended to always provide a valid siteId to ensure this operation continues to work in the future.
     * @type {string}
     * @memberof PublicApiTeamCreationPayload
     */
    siteId?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamCreationPayload
     */
    teamType: PublicApiTeamCreationPayloadTeamTypeEnum;
}


/**
 * @export
 */
export const PublicApiTeamCreationPayloadTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE',
    External: 'EXTERNAL',
    OrgAdminManaged: 'ORG_ADMIN_MANAGED'
} as const;
export type PublicApiTeamCreationPayloadTeamTypeEnum = typeof PublicApiTeamCreationPayloadTeamTypeEnum[keyof typeof PublicApiTeamCreationPayloadTeamTypeEnum];

/**
 * Cursor pagination result for PublicApiTeam
 * @export
 * @interface PublicApiTeamPaginationResult
 */
export interface PublicApiTeamPaginationResult {
    /**
     * The cursor for pagination
     * @type {string}
     * @memberof PublicApiTeamPaginationResult
     */
    cursor?: string;
    /**
     * The list of teams
     * @type {Array<PublicApiTeam>}
     * @memberof PublicApiTeamPaginationResult
     */
    entities: Array<PublicApiTeam>;
}
/**
 * 
 * @export
 * @interface PublicApiTeamResponse
 */
export interface PublicApiTeamResponse {
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    creatorId?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    state: PublicApiTeamResponseStateEnum;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    teamId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponse
     */
    teamType: PublicApiTeamResponseTeamTypeEnum;
    /**
     * 
     * @type {PublicApiUserPermissions}
     * @memberof PublicApiTeamResponse
     */
    userPermissions: PublicApiUserPermissions;
}


/**
 * @export
 */
export const PublicApiTeamResponseStateEnum = {
    Active: 'ACTIVE',
    Archived: 'ARCHIVED'
} as const;
export type PublicApiTeamResponseStateEnum = typeof PublicApiTeamResponseStateEnum[keyof typeof PublicApiTeamResponseStateEnum];

/**
 * @export
 */
export const PublicApiTeamResponseTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE',
    External: 'EXTERNAL',
    OrgAdminManaged: 'ORG_ADMIN_MANAGED'
} as const;
export type PublicApiTeamResponseTeamTypeEnum = typeof PublicApiTeamResponseTeamTypeEnum[keyof typeof PublicApiTeamResponseTeamTypeEnum];

/**
 * 
 * @export
 * @interface PublicApiTeamResponseWithMembers
 */
export interface PublicApiTeamResponseWithMembers {
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    creatorId?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    displayName: string;
    /**
     * 
     * @type {Set<PublicApiMembership>}
     * @memberof PublicApiTeamResponseWithMembers
     */
    members: Set<PublicApiMembership>;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    state: PublicApiTeamResponseWithMembersStateEnum;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    teamId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamResponseWithMembers
     */
    teamType: PublicApiTeamResponseWithMembersTeamTypeEnum;
    /**
     * 
     * @type {PublicApiUserPermissions}
     * @memberof PublicApiTeamResponseWithMembers
     */
    userPermissions: PublicApiUserPermissions;
}


/**
 * @export
 */
export const PublicApiTeamResponseWithMembersStateEnum = {
    Active: 'ACTIVE',
    Archived: 'ARCHIVED'
} as const;
export type PublicApiTeamResponseWithMembersStateEnum = typeof PublicApiTeamResponseWithMembersStateEnum[keyof typeof PublicApiTeamResponseWithMembersStateEnum];

/**
 * @export
 */
export const PublicApiTeamResponseWithMembersTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE',
    External: 'EXTERNAL',
    OrgAdminManaged: 'ORG_ADMIN_MANAGED'
} as const;
export type PublicApiTeamResponseWithMembersTeamTypeEnum = typeof PublicApiTeamResponseWithMembersTeamTypeEnum[keyof typeof PublicApiTeamResponseWithMembersTeamTypeEnum];

/**
 * 
 * @export
 * @interface PublicApiTeamUpdatePayload
 */
export interface PublicApiTeamUpdatePayload {
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamUpdatePayload
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiTeamUpdatePayload
     */
    displayName?: string;
}
/**
 * 
 * @export
 * @interface PublicApiUserPermissions
 */
export interface PublicApiUserPermissions {
    /**
     * 
     * @type {boolean}
     * @memberof PublicApiUserPermissions
     */
    aDDMEMBERS: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PublicApiUserPermissions
     */
    dELETETEAM: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PublicApiUserPermissions
     */
    rEMOVEMEMBERS: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PublicApiUserPermissions
     */
    uPDATETEAM: boolean;
}
