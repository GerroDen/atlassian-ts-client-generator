/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface PublicApiAddMemberError
 */
export interface PublicApiAddMemberError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiAddMemberError
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiAddMemberError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiAddMemberError
     */
    message: string;
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
 * @interface PublicApiMemberNotFoundError
 */
export interface PublicApiMemberNotFoundError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiMemberNotFoundError
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiMemberNotFoundError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiMemberNotFoundError
     */
    message: string;
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
     * @type {Set<PublicApiMembershipAddResponseErrorsInner>}
     * @memberof PublicApiMembershipAddResponse
     */
    errors: Set<PublicApiMembershipAddResponseErrorsInner>;
    /**
     * 
     * @type {Set<PublicApiMembership>}
     * @memberof PublicApiMembershipAddResponse
     */
    members: Set<PublicApiMembership>;
}
/**
 * @type PublicApiMembershipAddResponseErrorsInner
 * 
 * @export
 */
export type PublicApiMembershipAddResponseErrorsInner = PublicApiAddMemberError | PublicApiMemberNotFoundError | PublicApiRemoveMemberError;
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
     * @type {Set<PublicApiMembershipAddResponseErrorsInner>}
     * @memberof PublicApiMembershipRemoveResponse
     */
    errors: Set<PublicApiMembershipAddResponseErrorsInner>;
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
 * @interface PublicApiRemoveMemberError
 */
export interface PublicApiRemoveMemberError {
    /**
     * 
     * @type {string}
     * @memberof PublicApiRemoveMemberError
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiRemoveMemberError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PublicApiRemoveMemberError
     */
    message: string;
}
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
     * 
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
    MemberInvite: 'MEMBER_INVITE'
} as const;
export type PublicApiTeamCreationPayloadTeamTypeEnum = typeof PublicApiTeamCreationPayloadTeamTypeEnum[keyof typeof PublicApiTeamCreationPayloadTeamTypeEnum];

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
export const PublicApiTeamResponseTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE'
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
export const PublicApiTeamResponseWithMembersTeamTypeEnum = {
    Open: 'OPEN',
    MemberInvite: 'MEMBER_INVITE'
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
