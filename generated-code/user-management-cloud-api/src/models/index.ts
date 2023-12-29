/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AccountCharacteristics
 */
export interface AccountCharacteristics {
    /**
     * 
     * @type {boolean}
     * @memberof AccountCharacteristics
     */
    notMentionable?: boolean;
}

/**
 * The lifecycle status of the account
 * @export
 */
export const AccountStatus = {
    Active: 'active',
    Inactive: 'inactive',
    Closed: 'closed'
} as const;
export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];


/**
 * The type of account
 * @export
 */
export const AccountType = {
    Atlassian: 'atlassian',
    Customer: 'customer',
    App: 'app'
} as const;
export type AccountType = typeof AccountType[keyof typeof AccountType];

/**
 * API Token information
 * @export
 * @interface ApiTokenModel
 */
export interface ApiTokenModel {
    /**
     * Human readable description for the token.
     * @type {string}
     * @memberof ApiTokenModel
     */
    label: string;
    /**
     * Timestamp last time the token was used to Authenticate as a UTC-ISO8601 string
     * @type {string}
     * @memberof ApiTokenModel
     */
    lastAccess?: string;
    /**
     * Timestamp of when the token was generated as a UTC-ISO8601 string
     * @type {string}
     * @memberof ApiTokenModel
     */
    createdAt: string;
    /**
     * Container token id. This is the identifier of the system user associated with the container token.
     * @type {string}
     * @memberof ApiTokenModel
     */
    id: string;
}
/**
 * 
 * @export
 * @interface AtlassianAccountUser
 */
export interface AtlassianAccountUser {
    /**
     * A unique account identifier
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    readonly accountId: string;
    /**
     * 
     * @type {AccountType}
     * @memberof AtlassianAccountUser
     */
    accountType: AccountType;
    /**
     * 
     * @type {AccountStatus}
     * @memberof AtlassianAccountUser
     */
    accountStatus: AccountStatus;
    /**
     * The display name of the user. Should be used for contextual rendering of
     * content authorship.
     * 
     * _Constraints_
     * - `maxLength`: The maximum display name length is 100 characters
     * - `validCharacters`: Control and null characters are not allowed
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    name: string;
    /**
     * The absolute URI (RFC3986) to the avatar name of the user.
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    readonly picture: string;
    /**
     * 
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    readonly email: string;
    /**
     * 
     * @type {AccountCharacteristics}
     * @memberof AtlassianAccountUser
     */
    characteristics?: AccountCharacteristics;
    /**
     * A nickname for the user in content references to the user.
     * 
     * _Constraints_
     * - `maxLength`: The maximum nickname length is 30 characters
     * - `validCharacters`: Control and null characters are not allowed
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    nickname: string;
    /**
     * A unix zoneinfo string describing the local timezone of the user
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    zoneinfo?: string;
    /**
     * An IETF BCP 47 locale string
     * @type {string}
     * @memberof AtlassianAccountUser
     */
    locale?: string;
    /**
     * 
     * @type {ExtendedProfile}
     * @memberof AtlassianAccountUser
     */
    extendedProfile?: ExtendedProfile;
}
/**
 * 
 * @export
 * @interface AtlassianAccountUserAllOf
 */
export interface AtlassianAccountUserAllOf {
    /**
     * A nickname for the user in content references to the user.
     * 
     * _Constraints_
     * - `maxLength`: The maximum nickname length is 30 characters
     * - `validCharacters`: Control and null characters are not allowed
     * @type {string}
     * @memberof AtlassianAccountUserAllOf
     */
    nickname: string;
    /**
     * A unix zoneinfo string describing the local timezone of the user
     * @type {string}
     * @memberof AtlassianAccountUserAllOf
     */
    zoneinfo?: string;
    /**
     * An IETF BCP 47 locale string
     * @type {string}
     * @memberof AtlassianAccountUserAllOf
     */
    locale?: string;
    /**
     * 
     * @type {ExtendedProfile}
     * @memberof AtlassianAccountUserAllOf
     */
    extendedProfile?: ExtendedProfile;
}
/**
 * 
 * @export
 * @interface ConflictLifecycleErrors
 */
export interface ConflictLifecycleErrors {
    /**
     * 
     * @type {string}
     * @memberof ConflictLifecycleErrors
     */
    key: ConflictLifecycleErrorsKeyEnum;
    /**
     * 
     * @type {LifecycleErrorsContext}
     * @memberof ConflictLifecycleErrors
     */
    context: LifecycleErrorsContext;
}


/**
 * @export
 */
export const ConflictLifecycleErrorsKeyEnum = {
    ConflictLifecycleErrors: 'conflict.lifecycleErrors'
} as const;
export type ConflictLifecycleErrorsKeyEnum = typeof ConflictLifecycleErrorsKeyEnum[keyof typeof ConflictLifecycleErrorsKeyEnum];

/**
 * 
 * @export
 * @interface ExtendedProfile
 */
export interface ExtendedProfile {
    /**
     * The job title of the user
     * @type {string}
     * @memberof ExtendedProfile
     */
    jobTitle?: string;
    /**
     * The organisation to which the user belongs
     * @type {string}
     * @memberof ExtendedProfile
     */
    organization?: string;
    /**
     * The department in which the user works
     * @type {string}
     * @memberof ExtendedProfile
     */
    department?: string;
    /**
     * The physical location of the user
     * @type {string}
     * @memberof ExtendedProfile
     */
    location?: string;
}
/**
 * 
 * @export
 * @interface LifecycleError
 */
export interface LifecycleError {
    /**
     * 
     * @type {string}
     * @memberof LifecycleError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof LifecycleError
     */
    link?: string;
}
/**
 * 
 * @export
 * @interface LifecycleErrorsContext
 */
export interface LifecycleErrorsContext {
    /**
     * 
     * @type {string}
     * @memberof LifecycleErrorsContext
     */
    message: string;
    /**
     * A unique account identifier
     * @type {string}
     * @memberof LifecycleErrorsContext
     */
    readonly accountId: string;
    /**
     * 
     * @type {Array<LifecycleError>}
     * @memberof LifecycleErrorsContext
     */
    errorCodes: Array<LifecycleError>;
}
/**
 * You are allowed to take or write the action/property
 * @export
 * @interface ManageabilityAllowed
 */
export interface ManageabilityAllowed {
    /**
     * 
     * @type {boolean}
     * @memberof ManageabilityAllowed
     */
    allowed: ManageabilityAllowedAllowedEnum;
}


/**
 * @export
 */
export const ManageabilityAllowedAllowedEnum = {
    True: true
} as const;
export type ManageabilityAllowedAllowedEnum = typeof ManageabilityAllowedAllowedEnum[keyof typeof ManageabilityAllowedAllowedEnum];

/**
 * 
 * @export
 * @interface ManageabilityRestrictionReason
 */
export interface ManageabilityRestrictionReason {
    /**
     * The property or action is restricted because:
     * 
     * - _administrative_: The property or action is restricted
     *   because it is intended exclusively for administrative use
     * - _administrative.notMyself_: The property or action
     *   is restricted because it is intended for administrative use and
     *   is forbidden for self-use.
     * - _authPolicy.saml_: The property is restricted as it is set on login by SAML
     * - _blocked.exportControl_: The property/action is restricted because
     *   the user is blocked by US export control
     * - _externalDirectory.scim_: The property/action is restricted because
     *   the user is managed by an external SCIM directory
     * - _externalDirectory.google_: The property/action is restricted because
     *   the user is managed by an external Google directory
     * - _myselfOnly_: The property or action is restricted because it is
     *   available only to the user which the account belongs to
     * - _managedAccount_: The property or action is restricted because it is
     *   available only to the user's organisation administrator
     * @type {string}
     * @memberof ManageabilityRestrictionReason
     */
    key: ManageabilityRestrictionReasonKeyEnum;
}


/**
 * @export
 */
export const ManageabilityRestrictionReasonKeyEnum = {
    Administrative: 'administrative',
    AdministrativeNotMyself: 'administrative.notMyself',
    AuthPolicySaml: 'authPolicy.saml',
    BlockedExportControl: 'blocked.exportControl',
    ExternalDirectoryScim: 'externalDirectory.scim',
    ExternalDirectoryGoogle: 'externalDirectory.google',
    MyselfOnly: 'myselfOnly',
    ManagedAccount: 'managedAccount'
} as const;
export type ManageabilityRestrictionReasonKeyEnum = typeof ManageabilityRestrictionReasonKeyEnum[keyof typeof ManageabilityRestrictionReasonKeyEnum];

/**
 * @type ManageabilityRuleSimple
 * 
 * @export
 */
export type ManageabilityRuleSimple = { allowed: 'false' } & ManageabilityUnallowed | { allowed: 'true' } & ManageabilityAllowed;
/**
 * You are not allowed to take or write the action/property
 * @export
 * @interface ManageabilityUnallowed
 */
export interface ManageabilityUnallowed {
    /**
     * 
     * @type {boolean}
     * @memberof ManageabilityUnallowed
     */
    allowed: ManageabilityUnallowedAllowedEnum;
    /**
     * 
     * @type {ManageabilityRestrictionReason}
     * @memberof ManageabilityUnallowed
     */
    reason: ManageabilityRestrictionReason;
}


/**
 * @export
 */
export const ManageabilityUnallowedAllowedEnum = {
    False: false
} as const;
export type ManageabilityUnallowedAllowedEnum = typeof ManageabilityUnallowedAllowedEnum[keyof typeof ManageabilityUnallowedAllowedEnum];

/**
 * 
 * @export
 * @interface NotFoundAccount
 */
export interface NotFoundAccount {
    /**
     * - _accountNotFound_: Requested accountId not found
     * - _notFound_: Requested resource not found
     * @type {string}
     * @memberof NotFoundAccount
     */
    key: NotFoundAccountKeyEnum;
}


/**
 * @export
 */
export const NotFoundAccountKeyEnum = {
    AccountNotFound: 'accountNotFound',
    NotFound: 'notFound'
} as const;
export type NotFoundAccountKeyEnum = typeof NotFoundAccountKeyEnum[keyof typeof NotFoundAccountKeyEnum];

/**
 * The body was not parsed successfully.
 * @export
 * @interface ResponseBadRequestBodyParseFailure
 */
export interface ResponseBadRequestBodyParseFailure {
    /**
     * 
     * @type {string}
     * @memberof ResponseBadRequestBodyParseFailure
     */
    key: string;
}
/**
 * The submitted JSON entity had one or more invalid properties.
 * For each invalid field, a set of violated constraint keys are returned.
 * @export
 * @interface ResponseBadRequestFieldConstraintsViolated
 */
export interface ResponseBadRequestFieldConstraintsViolated {
    /**
     * 
     * @type {string}
     * @memberof ResponseBadRequestFieldConstraintsViolated
     */
    key: string;
    /**
     * 
     * @type {ResponseBadRequestFieldConstraintsViolatedContext}
     * @memberof ResponseBadRequestFieldConstraintsViolated
     */
    context: ResponseBadRequestFieldConstraintsViolatedContext;
}
/**
 * 
 * @export
 * @interface ResponseBadRequestFieldConstraintsViolatedContext
 */
export interface ResponseBadRequestFieldConstraintsViolatedContext {
    /**
     * 
     * @type {Array<ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner>}
     * @memberof ResponseBadRequestFieldConstraintsViolatedContext
     */
    fieldViolations: Array<ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner>;
}
/**
 * 
 * @export
 * @interface ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner
 */
export interface ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner {
    /**
     * The JSON path to the field with an invalid value
     * @type {string}
     * @memberof ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner
     */
    field: string;
    /**
     * 
     * @type {Set<ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner>}
     * @memberof ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInner
     */
    violations: Set<ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner>;
}
/**
 * 
 * @export
 * @interface ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner
 */
export interface ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner {
    /**
     * The key for a constraint that the submitted value has violated.
     * See documentation for any submittable model for a set of constraint keys and definitions.
     * @type {string}
     * @memberof ResponseBadRequestFieldConstraintsViolatedContextFieldViolationsInnerViolationsInner
     */
    key: string;
}
/**
 * 
 * @export
 * @interface ResponseForbiddenAction
 */
export interface ResponseForbiddenAction {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenAction
     */
    key: ResponseForbiddenActionKeyEnum;
    /**
     * 
     * @type {ManageabilityUnallowed}
     * @memberof ResponseForbiddenAction
     */
    context: ManageabilityUnallowed;
}


/**
 * @export
 */
export const ResponseForbiddenActionKeyEnum = {
    ForbiddenAction: 'forbidden.action'
} as const;
export type ResponseForbiddenActionKeyEnum = typeof ResponseForbiddenActionKeyEnum[keyof typeof ResponseForbiddenActionKeyEnum];

/**
 * You are not authorized to access this resource
 * @export
 * @interface ResponseForbiddenBasic
 */
export interface ResponseForbiddenBasic {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenBasic
     */
    key: ResponseForbiddenBasicKeyEnum;
}


/**
 * @export
 */
export const ResponseForbiddenBasicKeyEnum = {
    Forbidden: 'forbidden'
} as const;
export type ResponseForbiddenBasicKeyEnum = typeof ResponseForbiddenBasicKeyEnum[keyof typeof ResponseForbiddenBasicKeyEnum];

/**
 * 
 * @export
 * @interface ResponseForbiddenObjectMutability
 */
export interface ResponseForbiddenObjectMutability {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenObjectMutability
     */
    key: ResponseForbiddenObjectMutabilityKeyEnum;
    /**
     * Describes your permissions to change the object. Each key should be a valid JSON path of the target object.
     * @type {{ [key: string]: ManageabilityRuleSimple; }}
     * @memberof ResponseForbiddenObjectMutability
     */
    context: { [key: string]: ManageabilityRuleSimple; };
}


/**
 * @export
 */
export const ResponseForbiddenObjectMutabilityKeyEnum = {
    ForbiddenFieldMutation: 'forbidden.fieldMutation'
} as const;
export type ResponseForbiddenObjectMutabilityKeyEnum = typeof ResponseForbiddenObjectMutabilityKeyEnum[keyof typeof ResponseForbiddenObjectMutabilityKeyEnum];

/**
 * Cannot manage an unverified target account
 * @export
 * @interface ResponseForbiddenTargetUnverified
 */
export interface ResponseForbiddenTargetUnverified {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenTargetUnverified
     */
    key: ResponseForbiddenTargetUnverifiedKeyEnum;
}


/**
 * @export
 */
export const ResponseForbiddenTargetUnverifiedKeyEnum = {
    ForbiddenTargetUnverified: 'forbidden.targetUnverified'
} as const;
export type ResponseForbiddenTargetUnverifiedKeyEnum = typeof ResponseForbiddenTargetUnverifiedKeyEnum[keyof typeof ResponseForbiddenTargetUnverifiedKeyEnum];

/**
 * 
 * @export
 * @interface ResponseForbiddenUnclaimedDomain
 */
export interface ResponseForbiddenUnclaimedDomain {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenUnclaimedDomain
     */
    key: ResponseForbiddenUnclaimedDomainKeyEnum;
    /**
     * 
     * @type {ResponseForbiddenUnclaimedDomainContext}
     * @memberof ResponseForbiddenUnclaimedDomain
     */
    context?: ResponseForbiddenUnclaimedDomainContext;
}


/**
 * @export
 */
export const ResponseForbiddenUnclaimedDomainKeyEnum = {
    ForbiddenUnclaimedDomain: 'forbidden.unclaimedDomain'
} as const;
export type ResponseForbiddenUnclaimedDomainKeyEnum = typeof ResponseForbiddenUnclaimedDomainKeyEnum[keyof typeof ResponseForbiddenUnclaimedDomainKeyEnum];

/**
 * 
 * @export
 * @interface ResponseForbiddenUnclaimedDomainContext
 */
export interface ResponseForbiddenUnclaimedDomainContext {
    /**
     * 
     * @type {string}
     * @memberof ResponseForbiddenUnclaimedDomainContext
     */
    domain: string;
}
/**
 * 
 * @export
 * @interface ResultMessage
 */
export interface ResultMessage {
    /**
     * 
     * @type {string}
     * @memberof ResultMessage
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface Unauthorized
 */
export interface Unauthorized {
    /**
     * 
     * @type {string}
     * @memberof Unauthorized
     */
    key: UnauthorizedKeyEnum;
}


/**
 * @export
 */
export const UnauthorizedKeyEnum = {
    Unauthorized: 'unauthorized'
} as const;
export type UnauthorizedKeyEnum = typeof UnauthorizedKeyEnum[keyof typeof UnauthorizedKeyEnum];

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * A unique account identifier
     * @type {string}
     * @memberof User
     */
    readonly accountId: string;
    /**
     * 
     * @type {AccountType}
     * @memberof User
     */
    accountType: AccountType;
    /**
     * 
     * @type {AccountStatus}
     * @memberof User
     */
    accountStatus: AccountStatus;
    /**
     * The display name of the user. Should be used for contextual rendering of
     * content authorship.
     * 
     * _Constraints_
     * - `maxLength`: The maximum display name length is 100 characters
     * - `validCharacters`: Control and null characters are not allowed
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * The absolute URI (RFC3986) to the avatar name of the user.
     * @type {string}
     * @memberof User
     */
    readonly picture: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly email: string;
    /**
     * 
     * @type {AccountCharacteristics}
     * @memberof User
     */
    characteristics?: AccountCharacteristics;
}
/**
 * @type UsersAccountIdManageApiTokensGet403Response
 * 
 * @export
 */
export type UsersAccountIdManageApiTokensGet403Response = { key: 'forbidden' } & ResponseForbiddenBasic | { key: 'forbidden.action' } & ResponseForbiddenAction | { key: 'forbidden.targetUnverified' } & ResponseForbiddenTargetUnverified;
/**
 * @type UsersAccountIdManageEmailPut403Response
 * 
 * @export
 */
export type UsersAccountIdManageEmailPut403Response = { key: 'forbidden' } & ResponseForbiddenBasic | { key: 'forbidden.action' } & ResponseForbiddenAction | { key: 'forbidden.targetUnverified' } & ResponseForbiddenTargetUnverified | { key: 'forbidden.unclaimedDomain' } & ResponseForbiddenUnclaimedDomain;
/**
 * 
 * @export
 * @interface UsersAccountIdManageEmailPutRequest
 */
export interface UsersAccountIdManageEmailPutRequest {
    /**
     * The email address of the user.
     * 
     * _Constraints_
     * - `partMaxLength`: The maximum length of the user part and of any
     *   subdomain is 255 characters.
     * - `validCharacters`: Control and null characters are not allowed
     * @type {string}
     * @memberof UsersAccountIdManageEmailPutRequest
     */
    email: string;
}
/**
 * 
 * @export
 * @interface UsersAccountIdManageGet200Response
 */
export interface UsersAccountIdManageGet200Response {
    /**
     * Describes your permissions to change the object. Each key should be a valid JSON path of the target object.
     * @type {{ [key: string]: ManageabilityRuleSimple; }}
     * @memberof UsersAccountIdManageGet200Response
     */
    profile?: { [key: string]: ManageabilityRuleSimple; };
    /**
     * Describes your permissions to change the object. Each key should be a valid JSON path of the target object.
     * @type {{ [key: string]: ManageabilityRuleSimple; }}
     * @memberof UsersAccountIdManageGet200Response
     */
    profileWrite?: { [key: string]: ManageabilityRuleSimple; };
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    profileRead?: ManageabilityRuleSimple;
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    emailSet?: ManageabilityRuleSimple;
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    lifecycleEnablement?: ManageabilityRuleSimple;
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    lifecycleDelete?: ManageabilityRuleSimple;
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    apiTokenRead?: ManageabilityRuleSimple;
    /**
     * 
     * @type {ManageabilityRuleSimple}
     * @memberof UsersAccountIdManageGet200Response
     */
    apiTokenDelete?: ManageabilityRuleSimple;
}
/**
 * @type UsersAccountIdManageGet403Response
 * 
 * @export
 */
export type UsersAccountIdManageGet403Response = { key: 'forbidden' } & ResponseForbiddenBasic | { key: 'forbidden.targetUnverified' } & ResponseForbiddenTargetUnverified;
/**
 * 
 * @export
 * @interface UsersAccountIdManageLifecycleDisablePostRequest
 */
export interface UsersAccountIdManageLifecycleDisablePostRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersAccountIdManageLifecycleDisablePostRequest
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface UsersAccountIdManageProfileGet200Response
 */
export interface UsersAccountIdManageProfileGet200Response {
    /**
     * 
     * @type {AtlassianAccountUser}
     * @memberof UsersAccountIdManageProfileGet200Response
     */
    account: AtlassianAccountUser;
}
/**
 * @type UsersAccountIdManageProfilePatch400Response
 * 
 * @export
 */
export type UsersAccountIdManageProfilePatch400Response = { key: 'bodyParseFailure' } & ResponseBadRequestBodyParseFailure | { key: 'fieldConstraintsViolated' } & ResponseBadRequestFieldConstraintsViolated;
/**
 * @type UsersAccountIdManageProfilePatch403Response
 * 
 * @export
 */
export type UsersAccountIdManageProfilePatch403Response = { key: 'forbidden' } & ResponseForbiddenBasic | { key: 'forbidden.fieldMutation' } & ResponseForbiddenObjectMutability | { key: 'forbidden.targetUnverified' } & ResponseForbiddenTargetUnverified;
