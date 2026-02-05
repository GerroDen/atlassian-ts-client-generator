
# CreateSpaceRequestRoleAssignmentsInner

The role assignments for the new space. If none are provided, the Default Space Roles are applied. If roles are provided, the space is created with exactly the provided set of roles. A private space is created if only the creator is assigned to a role and it’s the Admin role. At least one Admin role assignment must be specified.

## Properties

Name | Type
------------ | -------------
`principal` | [Principal](Principal.md)
`roleId` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


