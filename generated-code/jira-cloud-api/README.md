# jira-cloud-api@1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b

A TypeScript SDK client for the your-domain.atlassian.net API.

## Usage

First, install the SDK from npm.

```bash
npm install jira-cloud-api --save
```

Next, try it out.


```ts
import {
  Configuration,
  AnnouncementBannerApi,
} from 'jira-cloud-api';
import type { GetBannerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AnnouncementBannerApi(config);

  try {
    const data = await api.getBanner();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://your-domain.atlassian.net*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AnnouncementBannerApi* | [**getBanner**](docs/AnnouncementBannerApi.md#getbanner) | **GET** /rest/api/3/announcementBanner | Get announcement banner configuration
*AnnouncementBannerApi* | [**setBanner**](docs/AnnouncementBannerApi.md#setbanner) | **PUT** /rest/api/3/announcementBanner | Update announcement banner configuration
*AppDataPoliciesApi* | [**getPolicies**](docs/AppDataPoliciesApi.md#getpolicies) | **GET** /rest/api/3/data-policy/project | Get data policy for projects
*AppDataPoliciesApi* | [**getPolicy**](docs/AppDataPoliciesApi.md#getpolicy) | **GET** /rest/api/3/data-policy | Get data policy for the workspace
*AppMigrationApi* | [**appIssueFieldValueUpdateResourceUpdateIssueFieldsPut**](docs/AppMigrationApi.md#appissuefieldvalueupdateresourceupdateissuefieldsput) | **PUT** /rest/atlassian-connect/1/migration/field | Bulk update custom field value
*AppMigrationApi* | [**migrationResourceUpdateEntityPropertiesValuePut**](docs/AppMigrationApi.md#migrationresourceupdateentitypropertiesvalueput) | **PUT** /rest/atlassian-connect/1/migration/properties/{entityType} | Bulk update entity properties
*AppMigrationApi* | [**migrationResourceWorkflowRuleSearchPost**](docs/AppMigrationApi.md#migrationresourceworkflowrulesearchpost) | **POST** /rest/atlassian-connect/1/migration/workflow/rule/search | Get workflow transition rule configurations
*AppPropertiesApi* | [**addonPropertiesResourceDeleteAddonPropertyDelete**](docs/AppPropertiesApi.md#addonpropertiesresourcedeleteaddonpropertydelete) | **DELETE** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Delete app property
*AppPropertiesApi* | [**addonPropertiesResourceGetAddonPropertiesGet**](docs/AppPropertiesApi.md#addonpropertiesresourcegetaddonpropertiesget) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties | Get app properties
*AppPropertiesApi* | [**addonPropertiesResourceGetAddonPropertyGet**](docs/AppPropertiesApi.md#addonpropertiesresourcegetaddonpropertyget) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Get app property
*AppPropertiesApi* | [**addonPropertiesResourcePutAddonPropertyPut**](docs/AppPropertiesApi.md#addonpropertiesresourceputaddonpropertyput) | **PUT** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Set app property
*AppPropertiesApi* | [**deleteForgeAppProperty**](docs/AppPropertiesApi.md#deleteforgeappproperty) | **DELETE** /rest/forge/1/app/properties/{propertyKey} | Delete app property (Forge)
*AppPropertiesApi* | [**getForgeAppProperty**](docs/AppPropertiesApi.md#getforgeappproperty) | **GET** /rest/forge/1/app/properties/{propertyKey} | Get app property (Forge)
*AppPropertiesApi* | [**getForgeAppPropertyKeys**](docs/AppPropertiesApi.md#getforgeapppropertykeys) | **GET** /rest/forge/1/app/properties | Get app property keys (Forge)
*AppPropertiesApi* | [**putForgeAppProperty**](docs/AppPropertiesApi.md#putforgeappproperty) | **PUT** /rest/forge/1/app/properties/{propertyKey} | Set app property (Forge)
*ApplicationRolesApi* | [**getAllApplicationRoles**](docs/ApplicationRolesApi.md#getallapplicationroles) | **GET** /rest/api/3/applicationrole | Get all application roles
*ApplicationRolesApi* | [**getApplicationRole**](docs/ApplicationRolesApi.md#getapplicationrole) | **GET** /rest/api/3/applicationrole/{key} | Get application role
*AuditRecordsApi* | [**getAuditRecords**](docs/AuditRecordsApi.md#getauditrecords) | **GET** /rest/api/3/auditing/record | Get audit records
*AvatarsApi* | [**deleteAvatar**](docs/AvatarsApi.md#deleteavatar) | **DELETE** /rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id} | Delete avatar
*AvatarsApi* | [**getAllSystemAvatars**](docs/AvatarsApi.md#getallsystemavatars) | **GET** /rest/api/3/avatar/{type}/system | Get system avatars by type
*AvatarsApi* | [**getAvatarImageByID**](docs/AvatarsApi.md#getavatarimagebyid) | **GET** /rest/api/3/universal_avatar/view/type/{type}/avatar/{id} | Get avatar image by ID
*AvatarsApi* | [**getAvatarImageByOwner**](docs/AvatarsApi.md#getavatarimagebyowner) | **GET** /rest/api/3/universal_avatar/view/type/{type}/owner/{entityId} | Get avatar image by owner
*AvatarsApi* | [**getAvatarImageByType**](docs/AvatarsApi.md#getavatarimagebytype) | **GET** /rest/api/3/universal_avatar/view/type/{type} | Get avatar image by type
*AvatarsApi* | [**getAvatars**](docs/AvatarsApi.md#getavatars) | **GET** /rest/api/3/universal_avatar/type/{type}/owner/{entityId} | Get avatars
*AvatarsApi* | [**storeAvatar**](docs/AvatarsApi.md#storeavatar) | **POST** /rest/api/3/universal_avatar/type/{type}/owner/{entityId} | Load avatar
*ClassificationLevelsApi* | [**getAllUserDataClassificationLevels**](docs/ClassificationLevelsApi.md#getalluserdataclassificationlevels) | **GET** /rest/api/3/classification-levels | Get all classification levels
*DashboardsApi* | [**addGadget**](docs/DashboardsApi.md#addgadget) | **POST** /rest/api/3/dashboard/{dashboardId}/gadget | Add gadget to dashboard
*DashboardsApi* | [**bulkEditDashboards**](docs/DashboardsApi.md#bulkeditdashboards) | **PUT** /rest/api/3/dashboard/bulk/edit | Bulk edit dashboards
*DashboardsApi* | [**copyDashboard**](docs/DashboardsApi.md#copydashboard) | **POST** /rest/api/3/dashboard/{id}/copy | Copy dashboard
*DashboardsApi* | [**createDashboard**](docs/DashboardsApi.md#createdashboard) | **POST** /rest/api/3/dashboard | Create dashboard
*DashboardsApi* | [**deleteDashboard**](docs/DashboardsApi.md#deletedashboard) | **DELETE** /rest/api/3/dashboard/{id} | Delete dashboard
*DashboardsApi* | [**deleteDashboardItemProperty**](docs/DashboardsApi.md#deletedashboarditemproperty) | **DELETE** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Delete dashboard item property
*DashboardsApi* | [**getAllAvailableDashboardGadgets**](docs/DashboardsApi.md#getallavailabledashboardgadgets) | **GET** /rest/api/3/dashboard/gadgets | Get available gadgets
*DashboardsApi* | [**getAllDashboards**](docs/DashboardsApi.md#getalldashboards) | **GET** /rest/api/3/dashboard | Get all dashboards
*DashboardsApi* | [**getAllGadgets**](docs/DashboardsApi.md#getallgadgets) | **GET** /rest/api/3/dashboard/{dashboardId}/gadget | Get gadgets
*DashboardsApi* | [**getDashboard**](docs/DashboardsApi.md#getdashboard) | **GET** /rest/api/3/dashboard/{id} | Get dashboard
*DashboardsApi* | [**getDashboardItemProperty**](docs/DashboardsApi.md#getdashboarditemproperty) | **GET** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Get dashboard item property
*DashboardsApi* | [**getDashboardItemPropertyKeys**](docs/DashboardsApi.md#getdashboarditempropertykeys) | **GET** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties | Get dashboard item property keys
*DashboardsApi* | [**getDashboardsPaginated**](docs/DashboardsApi.md#getdashboardspaginated) | **GET** /rest/api/3/dashboard/search | Search for dashboards
*DashboardsApi* | [**removeGadget**](docs/DashboardsApi.md#removegadget) | **DELETE** /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId} | Remove gadget from dashboard
*DashboardsApi* | [**setDashboardItemProperty**](docs/DashboardsApi.md#setdashboarditemproperty) | **PUT** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Set dashboard item property
*DashboardsApi* | [**updateDashboard**](docs/DashboardsApi.md#updatedashboard) | **PUT** /rest/api/3/dashboard/{id} | Update dashboard
*DashboardsApi* | [**updateGadget**](docs/DashboardsApi.md#updategadget) | **PUT** /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId} | Update gadget on dashboard
*DefaultApi* | [**getWorklogsByIssueIdAndWorklogId**](docs/DefaultApi.md#getworklogsbyissueidandworklogid) | **POST** /rest/internal/api/latest/worklog/bulk | Get worklogs by issue id and worklog id
*DynamicModulesApi* | [**dynamicModulesResourceGetModulesGet**](docs/DynamicModulesApi.md#dynamicmodulesresourcegetmodulesget) | **GET** /rest/atlassian-connect/1/app/module/dynamic | Get modules
*DynamicModulesApi* | [**dynamicModulesResourceRegisterModulesPost**](docs/DynamicModulesApi.md#dynamicmodulesresourceregistermodulespost) | **POST** /rest/atlassian-connect/1/app/module/dynamic | Register modules
*DynamicModulesApi* | [**dynamicModulesResourceRemoveModulesDelete**](docs/DynamicModulesApi.md#dynamicmodulesresourceremovemodulesdelete) | **DELETE** /rest/atlassian-connect/1/app/module/dynamic | Remove modules
*FieldSchemesApi* | [**associateProjectsToFieldAssociationSchemes**](docs/FieldSchemesApi.md#associateprojectstofieldassociationschemes) | **PUT** /rest/api/3/config/fieldschemes/projects | Associate projects to field schemes
*FieldSchemesApi* | [**createFieldAssociationScheme**](docs/FieldSchemesApi.md#createfieldassociationschemeoperation) | **POST** /rest/api/3/config/fieldschemes | Create field scheme
*FieldSchemesApi* | [**deleteFieldAssociationScheme**](docs/FieldSchemesApi.md#deletefieldassociationscheme) | **DELETE** /rest/api/3/config/fieldschemes/{id} | Delete a field scheme
*FieldSchemesApi* | [**getFieldAssociationSchemeById**](docs/FieldSchemesApi.md#getfieldassociationschemebyid) | **GET** /rest/api/3/config/fieldschemes/{id} | Get field scheme
*FieldSchemesApi* | [**getFieldAssociationSchemeItemParameters**](docs/FieldSchemesApi.md#getfieldassociationschemeitemparameters) | **GET** /rest/api/3/config/fieldschemes/{id}/fields/{fieldId}/parameters | Get field parameters
*FieldSchemesApi* | [**getFieldAssociationSchemes**](docs/FieldSchemesApi.md#getfieldassociationschemes) | **GET** /rest/api/3/config/fieldschemes | Get field schemes
*FieldSchemesApi* | [**getProjectsWithFieldSchemes**](docs/FieldSchemesApi.md#getprojectswithfieldschemes) | **GET** /rest/api/3/config/fieldschemes/projects | Get projects with field schemes
*FieldSchemesApi* | [**removeFieldAssociationSchemeItemParameters**](docs/FieldSchemesApi.md#removefieldassociationschemeitemparameters) | **DELETE** /rest/api/3/config/fieldschemes/fields/parameters | Remove field parameters
*FieldSchemesApi* | [**removeFieldsAssociatedWithSchemes**](docs/FieldSchemesApi.md#removefieldsassociatedwithschemes) | **DELETE** /rest/api/3/config/fieldschemes/fields | Remove fields associated with field schemes
*FieldSchemesApi* | [**searchFieldAssociationSchemeFields**](docs/FieldSchemesApi.md#searchfieldassociationschemefields) | **GET** /rest/api/3/config/fieldschemes/{id}/fields | Search field scheme fields
*FieldSchemesApi* | [**searchFieldAssociationSchemeProjects**](docs/FieldSchemesApi.md#searchfieldassociationschemeprojects) | **GET** /rest/api/3/config/fieldschemes/{id}/projects | Search field scheme projects
*FieldSchemesApi* | [**updateFieldAssociationScheme**](docs/FieldSchemesApi.md#updatefieldassociationschemeoperation) | **PUT** /rest/api/3/config/fieldschemes/{id} | Update field scheme
*FieldSchemesApi* | [**updateFieldAssociationSchemeItemParameters**](docs/FieldSchemesApi.md#updatefieldassociationschemeitemparameters) | **PUT** /rest/api/3/config/fieldschemes/fields/parameters | Update field parameters
*FieldSchemesApi* | [**updateFieldsAssociatedWithSchemes**](docs/FieldSchemesApi.md#updatefieldsassociatedwithschemes) | **PUT** /rest/api/3/config/fieldschemes/fields | Update fields associated with field schemes
*FilterSharingApi* | [**addSharePermission**](docs/FilterSharingApi.md#addsharepermission) | **POST** /rest/api/3/filter/{id}/permission | Add share permission
*FilterSharingApi* | [**deleteSharePermission**](docs/FilterSharingApi.md#deletesharepermission) | **DELETE** /rest/api/3/filter/{id}/permission/{permissionId} | Delete share permission
*FilterSharingApi* | [**getDefaultShareScope**](docs/FilterSharingApi.md#getdefaultsharescope) | **GET** /rest/api/3/filter/defaultShareScope | Get default share scope
*FilterSharingApi* | [**getSharePermission**](docs/FilterSharingApi.md#getsharepermission) | **GET** /rest/api/3/filter/{id}/permission/{permissionId} | Get share permission
*FilterSharingApi* | [**getSharePermissions**](docs/FilterSharingApi.md#getsharepermissions) | **GET** /rest/api/3/filter/{id}/permission | Get share permissions
*FilterSharingApi* | [**setDefaultShareScope**](docs/FilterSharingApi.md#setdefaultsharescope) | **PUT** /rest/api/3/filter/defaultShareScope | Set default share scope
*FiltersApi* | [**changeFilterOwner**](docs/FiltersApi.md#changefilterowner) | **PUT** /rest/api/3/filter/{id}/owner | Change filter owner
*FiltersApi* | [**createFilter**](docs/FiltersApi.md#createfilter) | **POST** /rest/api/3/filter | Create filter
*FiltersApi* | [**deleteFavouriteForFilter**](docs/FiltersApi.md#deletefavouriteforfilter) | **DELETE** /rest/api/3/filter/{id}/favourite | Remove filter as favorite
*FiltersApi* | [**deleteFilter**](docs/FiltersApi.md#deletefilter) | **DELETE** /rest/api/3/filter/{id} | Delete filter
*FiltersApi* | [**getColumns**](docs/FiltersApi.md#getcolumns) | **GET** /rest/api/3/filter/{id}/columns | Get columns
*FiltersApi* | [**getFavouriteFilters**](docs/FiltersApi.md#getfavouritefilters) | **GET** /rest/api/3/filter/favourite | Get favorite filters
*FiltersApi* | [**getFilter**](docs/FiltersApi.md#getfilter) | **GET** /rest/api/3/filter/{id} | Get filter
*FiltersApi* | [**getFiltersPaginated**](docs/FiltersApi.md#getfilterspaginated) | **GET** /rest/api/3/filter/search | Search for filters
*FiltersApi* | [**getMyFilters**](docs/FiltersApi.md#getmyfilters) | **GET** /rest/api/3/filter/my | Get my filters
*FiltersApi* | [**resetColumns**](docs/FiltersApi.md#resetcolumns) | **DELETE** /rest/api/3/filter/{id}/columns | Reset columns
*FiltersApi* | [**setColumns**](docs/FiltersApi.md#setcolumns) | **PUT** /rest/api/3/filter/{id}/columns | Set columns
*FiltersApi* | [**setFavouriteForFilter**](docs/FiltersApi.md#setfavouriteforfilter) | **PUT** /rest/api/3/filter/{id}/favourite | Add filter as favorite
*FiltersApi* | [**updateFilter**](docs/FiltersApi.md#updatefilter) | **PUT** /rest/api/3/filter/{id} | Update filter
*GroupAndUserPickerApi* | [**findUsersAndGroups**](docs/GroupAndUserPickerApi.md#findusersandgroups) | **GET** /rest/api/3/groupuserpicker | Find users and groups
*GroupsApi* | [**addUserToGroup**](docs/GroupsApi.md#addusertogroup) | **POST** /rest/api/3/group/user | Add user to group
*GroupsApi* | [**bulkGetGroups**](docs/GroupsApi.md#bulkgetgroups) | **GET** /rest/api/3/group/bulk | Bulk get groups
*GroupsApi* | [**createGroup**](docs/GroupsApi.md#creategroup) | **POST** /rest/api/3/group | Create group
*GroupsApi* | [**findGroups**](docs/GroupsApi.md#findgroups) | **GET** /rest/api/3/groups/picker | Find groups
*GroupsApi* | [**getGroup**](docs/GroupsApi.md#getgroup) | **GET** /rest/api/3/group | Get group
*GroupsApi* | [**getUsersFromGroup**](docs/GroupsApi.md#getusersfromgroup) | **GET** /rest/api/3/group/member | Get users from group
*GroupsApi* | [**removeGroup**](docs/GroupsApi.md#removegroup) | **DELETE** /rest/api/3/group | Remove group
*GroupsApi* | [**removeUserFromGroup**](docs/GroupsApi.md#removeuserfromgroup) | **DELETE** /rest/api/3/group/user | Remove user from group
*IssueAttachmentsApi* | [**addAttachment**](docs/IssueAttachmentsApi.md#addattachment) | **POST** /rest/api/3/issue/{issueIdOrKey}/attachments | Add attachment
*IssueAttachmentsApi* | [**expandAttachmentForHumans**](docs/IssueAttachmentsApi.md#expandattachmentforhumans) | **GET** /rest/api/3/attachment/{id}/expand/human | Get all metadata for an expanded attachment
*IssueAttachmentsApi* | [**expandAttachmentForMachines**](docs/IssueAttachmentsApi.md#expandattachmentformachines) | **GET** /rest/api/3/attachment/{id}/expand/raw | Get contents metadata for an expanded attachment
*IssueAttachmentsApi* | [**getAttachment**](docs/IssueAttachmentsApi.md#getattachment) | **GET** /rest/api/3/attachment/{id} | Get attachment metadata
*IssueAttachmentsApi* | [**getAttachmentContent**](docs/IssueAttachmentsApi.md#getattachmentcontent) | **GET** /rest/api/3/attachment/content/{id} | Get attachment content
*IssueAttachmentsApi* | [**getAttachmentMeta**](docs/IssueAttachmentsApi.md#getattachmentmeta) | **GET** /rest/api/3/attachment/meta | Get Jira attachment settings
*IssueAttachmentsApi* | [**getAttachmentThumbnail**](docs/IssueAttachmentsApi.md#getattachmentthumbnail) | **GET** /rest/api/3/attachment/thumbnail/{id} | Get attachment thumbnail
*IssueAttachmentsApi* | [**removeAttachment**](docs/IssueAttachmentsApi.md#removeattachment) | **DELETE** /rest/api/3/attachment/{id} | Delete attachment
*IssueBulkOperationsApi* | [**getAvailableTransitions**](docs/IssueBulkOperationsApi.md#getavailabletransitions) | **GET** /rest/api/3/bulk/issues/transition | Get available transitions
*IssueBulkOperationsApi* | [**getBulkEditableFields**](docs/IssueBulkOperationsApi.md#getbulkeditablefields) | **GET** /rest/api/3/bulk/issues/fields | Get bulk editable fields
*IssueBulkOperationsApi* | [**getBulkOperationProgress**](docs/IssueBulkOperationsApi.md#getbulkoperationprogress) | **GET** /rest/api/3/bulk/queue/{taskId} | Get bulk issue operation progress
*IssueBulkOperationsApi* | [**submitBulkDelete**](docs/IssueBulkOperationsApi.md#submitbulkdelete) | **POST** /rest/api/3/bulk/issues/delete | Bulk delete issues
*IssueBulkOperationsApi* | [**submitBulkEdit**](docs/IssueBulkOperationsApi.md#submitbulkedit) | **POST** /rest/api/3/bulk/issues/fields | Bulk edit issues
*IssueBulkOperationsApi* | [**submitBulkMove**](docs/IssueBulkOperationsApi.md#submitbulkmove) | **POST** /rest/api/3/bulk/issues/move | Bulk move issues
*IssueBulkOperationsApi* | [**submitBulkTransition**](docs/IssueBulkOperationsApi.md#submitbulktransition) | **POST** /rest/api/3/bulk/issues/transition | Bulk transition issue statuses
*IssueBulkOperationsApi* | [**submitBulkUnwatch**](docs/IssueBulkOperationsApi.md#submitbulkunwatch) | **POST** /rest/api/3/bulk/issues/unwatch | Bulk unwatch issues
*IssueBulkOperationsApi* | [**submitBulkWatch**](docs/IssueBulkOperationsApi.md#submitbulkwatch) | **POST** /rest/api/3/bulk/issues/watch | Bulk watch issues
*IssueCommentPropertiesApi* | [**deleteCommentProperty**](docs/IssueCommentPropertiesApi.md#deletecommentproperty) | **DELETE** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Delete comment property
*IssueCommentPropertiesApi* | [**getCommentProperty**](docs/IssueCommentPropertiesApi.md#getcommentproperty) | **GET** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Get comment property
*IssueCommentPropertiesApi* | [**getCommentPropertyKeys**](docs/IssueCommentPropertiesApi.md#getcommentpropertykeys) | **GET** /rest/api/3/comment/{commentId}/properties | Get comment property keys
*IssueCommentPropertiesApi* | [**setCommentProperty**](docs/IssueCommentPropertiesApi.md#setcommentproperty) | **PUT** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Set comment property
*IssueCommentsApi* | [**addComment**](docs/IssueCommentsApi.md#addcomment) | **POST** /rest/api/3/issue/{issueIdOrKey}/comment | Add comment
*IssueCommentsApi* | [**deleteComment**](docs/IssueCommentsApi.md#deletecomment) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Delete comment
*IssueCommentsApi* | [**getComment**](docs/IssueCommentsApi.md#getcomment) | **GET** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Get comment
*IssueCommentsApi* | [**getComments**](docs/IssueCommentsApi.md#getcomments) | **GET** /rest/api/3/issue/{issueIdOrKey}/comment | Get comments
*IssueCommentsApi* | [**getCommentsByIds**](docs/IssueCommentsApi.md#getcommentsbyids) | **POST** /rest/api/3/comment/list | Get comments by IDs
*IssueCommentsApi* | [**updateComment**](docs/IssueCommentsApi.md#updatecomment) | **PUT** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Update comment
*IssueCustomFieldAssociationsApi* | [**createAssociations**](docs/IssueCustomFieldAssociationsApi.md#createassociations) | **PUT** /rest/api/3/field/association | Create associations
*IssueCustomFieldAssociationsApi* | [**removeAssociations**](docs/IssueCustomFieldAssociationsApi.md#removeassociations) | **DELETE** /rest/api/3/field/association | Remove associations
*IssueCustomFieldConfigurationAppsApi* | [**getCustomFieldConfiguration**](docs/IssueCustomFieldConfigurationAppsApi.md#getcustomfieldconfiguration) | **GET** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Get custom field configurations
*IssueCustomFieldConfigurationAppsApi* | [**getCustomFieldsConfigurations**](docs/IssueCustomFieldConfigurationAppsApi.md#getcustomfieldsconfigurations) | **POST** /rest/api/3/app/field/context/configuration/list | Bulk get custom field configurations
*IssueCustomFieldConfigurationAppsApi* | [**updateCustomFieldConfiguration**](docs/IssueCustomFieldConfigurationAppsApi.md#updatecustomfieldconfiguration) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Update custom field configurations
*IssueCustomFieldContextsApi* | [**addIssueTypesToContext**](docs/IssueCustomFieldContextsApi.md#addissuetypestocontext) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/issuetype | Add issue types to context
*IssueCustomFieldContextsApi* | [**assignProjectsToCustomFieldContext**](docs/IssueCustomFieldContextsApi.md#assignprojectstocustomfieldcontext) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/project | Assign custom field context to projects
*IssueCustomFieldContextsApi* | [**createCustomFieldContext**](docs/IssueCustomFieldContextsApi.md#createcustomfieldcontext) | **POST** /rest/api/3/field/{fieldId}/context | Create custom field context
*IssueCustomFieldContextsApi* | [**deleteCustomFieldContext**](docs/IssueCustomFieldContextsApi.md#deletecustomfieldcontext) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId} | Delete custom field context
*IssueCustomFieldContextsApi* | [**getContextsForField**](docs/IssueCustomFieldContextsApi.md#getcontextsforfield) | **GET** /rest/api/3/field/{fieldId}/context | Get custom field contexts
*IssueCustomFieldContextsApi* | [**getCustomFieldContextsForProjectsAndIssueTypes**](docs/IssueCustomFieldContextsApi.md#getcustomfieldcontextsforprojectsandissuetypes) | **POST** /rest/api/3/field/{fieldId}/context/mapping | Get custom field contexts for projects and issue types
*IssueCustomFieldContextsApi* | [**getDefaultValues**](docs/IssueCustomFieldContextsApi.md#getdefaultvalues) | **GET** /rest/api/3/field/{fieldId}/context/defaultValue | Get custom field contexts default values
*IssueCustomFieldContextsApi* | [**getIssueTypeMappingsForContexts**](docs/IssueCustomFieldContextsApi.md#getissuetypemappingsforcontexts) | **GET** /rest/api/3/field/{fieldId}/context/issuetypemapping | Get issue types for custom field context
*IssueCustomFieldContextsApi* | [**getProjectContextMapping**](docs/IssueCustomFieldContextsApi.md#getprojectcontextmapping) | **GET** /rest/api/3/field/{fieldId}/context/projectmapping | Get project mappings for custom field context
*IssueCustomFieldContextsApi* | [**removeCustomFieldContextFromProjects**](docs/IssueCustomFieldContextsApi.md#removecustomfieldcontextfromprojects) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/project/remove | Remove custom field context from projects
*IssueCustomFieldContextsApi* | [**removeIssueTypesFromContext**](docs/IssueCustomFieldContextsApi.md#removeissuetypesfromcontext) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/issuetype/remove | Remove issue types from context
*IssueCustomFieldContextsApi* | [**setDefaultValues**](docs/IssueCustomFieldContextsApi.md#setdefaultvalues) | **PUT** /rest/api/3/field/{fieldId}/context/defaultValue | Set custom field contexts default values
*IssueCustomFieldContextsApi* | [**updateCustomFieldContext**](docs/IssueCustomFieldContextsApi.md#updatecustomfieldcontext) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId} | Update custom field context
*IssueCustomFieldOptionsApi* | [**createCustomFieldOption**](docs/IssueCustomFieldOptionsApi.md#createcustomfieldoption) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/option | Create custom field options (context)
*IssueCustomFieldOptionsApi* | [**deleteCustomFieldOption**](docs/IssueCustomFieldOptionsApi.md#deletecustomfieldoption) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId} | Delete custom field options (context)
*IssueCustomFieldOptionsApi* | [**getCustomFieldOption**](docs/IssueCustomFieldOptionsApi.md#getcustomfieldoption) | **GET** /rest/api/3/customFieldOption/{id} | Get custom field option
*IssueCustomFieldOptionsApi* | [**getOptionsForContext**](docs/IssueCustomFieldOptionsApi.md#getoptionsforcontext) | **GET** /rest/api/3/field/{fieldId}/context/{contextId}/option | Get custom field options (context)
*IssueCustomFieldOptionsApi* | [**reorderCustomFieldOptions**](docs/IssueCustomFieldOptionsApi.md#reordercustomfieldoptions) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/option/move | Reorder custom field options (context)
*IssueCustomFieldOptionsApi* | [**replaceCustomFieldOption**](docs/IssueCustomFieldOptionsApi.md#replacecustomfieldoption) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}/issue | Replace custom field options
*IssueCustomFieldOptionsApi* | [**updateCustomFieldOption**](docs/IssueCustomFieldOptionsApi.md#updatecustomfieldoption) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/option | Update custom field options (context)
*IssueCustomFieldOptionsAppsApi* | [**createIssueFieldOption**](docs/IssueCustomFieldOptionsAppsApi.md#createissuefieldoption) | **POST** /rest/api/3/field/{fieldKey}/option | Create issue field option
*IssueCustomFieldOptionsAppsApi* | [**deleteIssueFieldOption**](docs/IssueCustomFieldOptionsAppsApi.md#deleteissuefieldoption) | **DELETE** /rest/api/3/field/{fieldKey}/option/{optionId} | Delete issue field option
*IssueCustomFieldOptionsAppsApi* | [**getAllIssueFieldOptions**](docs/IssueCustomFieldOptionsAppsApi.md#getallissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option | Get all issue field options
*IssueCustomFieldOptionsAppsApi* | [**getIssueFieldOption**](docs/IssueCustomFieldOptionsAppsApi.md#getissuefieldoption) | **GET** /rest/api/3/field/{fieldKey}/option/{optionId} | Get issue field option
*IssueCustomFieldOptionsAppsApi* | [**getSelectableIssueFieldOptions**](docs/IssueCustomFieldOptionsAppsApi.md#getselectableissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option/suggestions/edit | Get selectable issue field options
*IssueCustomFieldOptionsAppsApi* | [**getVisibleIssueFieldOptions**](docs/IssueCustomFieldOptionsAppsApi.md#getvisibleissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option/suggestions/search | Get visible issue field options
*IssueCustomFieldOptionsAppsApi* | [**replaceIssueFieldOption**](docs/IssueCustomFieldOptionsAppsApi.md#replaceissuefieldoption) | **DELETE** /rest/api/3/field/{fieldKey}/option/{optionId}/issue | Replace issue field option
*IssueCustomFieldOptionsAppsApi* | [**updateIssueFieldOption**](docs/IssueCustomFieldOptionsAppsApi.md#updateissuefieldoption) | **PUT** /rest/api/3/field/{fieldKey}/option/{optionId} | Update issue field option
*IssueCustomFieldValuesAppsApi* | [**updateCustomFieldValue**](docs/IssueCustomFieldValuesAppsApi.md#updatecustomfieldvalue) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/value | Update custom field value
*IssueCustomFieldValuesAppsApi* | [**updateMultipleCustomFieldValues**](docs/IssueCustomFieldValuesAppsApi.md#updatemultiplecustomfieldvalues) | **POST** /rest/api/3/app/field/value | Update custom fields
*IssueFieldConfigurationsApi* | [**assignFieldConfigurationSchemeToProject**](docs/IssueFieldConfigurationsApi.md#assignfieldconfigurationschemetoproject) | **PUT** /rest/api/3/fieldconfigurationscheme/project | Assign field configuration scheme to project
*IssueFieldConfigurationsApi* | [**createFieldConfiguration**](docs/IssueFieldConfigurationsApi.md#createfieldconfiguration) | **POST** /rest/api/3/fieldconfiguration | Create field configuration
*IssueFieldConfigurationsApi* | [**createFieldConfigurationScheme**](docs/IssueFieldConfigurationsApi.md#createfieldconfigurationscheme) | **POST** /rest/api/3/fieldconfigurationscheme | Create field configuration scheme
*IssueFieldConfigurationsApi* | [**deleteFieldConfiguration**](docs/IssueFieldConfigurationsApi.md#deletefieldconfiguration) | **DELETE** /rest/api/3/fieldconfiguration/{id} | Delete field configuration
*IssueFieldConfigurationsApi* | [**deleteFieldConfigurationScheme**](docs/IssueFieldConfigurationsApi.md#deletefieldconfigurationscheme) | **DELETE** /rest/api/3/fieldconfigurationscheme/{id} | Delete field configuration scheme
*IssueFieldConfigurationsApi* | [**getAllFieldConfigurationSchemes**](docs/IssueFieldConfigurationsApi.md#getallfieldconfigurationschemes) | **GET** /rest/api/3/fieldconfigurationscheme | Get all field configuration schemes
*IssueFieldConfigurationsApi* | [**getAllFieldConfigurations**](docs/IssueFieldConfigurationsApi.md#getallfieldconfigurations) | **GET** /rest/api/3/fieldconfiguration | Get all field configurations
*IssueFieldConfigurationsApi* | [**getFieldConfigurationItems**](docs/IssueFieldConfigurationsApi.md#getfieldconfigurationitems) | **GET** /rest/api/3/fieldconfiguration/{id}/fields | Get field configuration items
*IssueFieldConfigurationsApi* | [**getFieldConfigurationSchemeMappings**](docs/IssueFieldConfigurationsApi.md#getfieldconfigurationschememappings) | **GET** /rest/api/3/fieldconfigurationscheme/mapping | Get field configuration issue type items
*IssueFieldConfigurationsApi* | [**getFieldConfigurationSchemeProjectMapping**](docs/IssueFieldConfigurationsApi.md#getfieldconfigurationschemeprojectmapping) | **GET** /rest/api/3/fieldconfigurationscheme/project | Get field configuration schemes for projects
*IssueFieldConfigurationsApi* | [**removeIssueTypesFromGlobalFieldConfigurationScheme**](docs/IssueFieldConfigurationsApi.md#removeissuetypesfromglobalfieldconfigurationscheme) | **POST** /rest/api/3/fieldconfigurationscheme/{id}/mapping/delete | Remove issue types from field configuration scheme
*IssueFieldConfigurationsApi* | [**setFieldConfigurationSchemeMapping**](docs/IssueFieldConfigurationsApi.md#setfieldconfigurationschememapping) | **PUT** /rest/api/3/fieldconfigurationscheme/{id}/mapping | Assign issue types to field configurations
*IssueFieldConfigurationsApi* | [**updateFieldConfiguration**](docs/IssueFieldConfigurationsApi.md#updatefieldconfiguration) | **PUT** /rest/api/3/fieldconfiguration/{id} | Update field configuration
*IssueFieldConfigurationsApi* | [**updateFieldConfigurationItems**](docs/IssueFieldConfigurationsApi.md#updatefieldconfigurationitems) | **PUT** /rest/api/3/fieldconfiguration/{id}/fields | Update field configuration items
*IssueFieldConfigurationsApi* | [**updateFieldConfigurationScheme**](docs/IssueFieldConfigurationsApi.md#updatefieldconfigurationscheme) | **PUT** /rest/api/3/fieldconfigurationscheme/{id} | Update field configuration scheme
*IssueFieldsApi* | [**createCustomField**](docs/IssueFieldsApi.md#createcustomfield) | **POST** /rest/api/3/field | Create custom field
*IssueFieldsApi* | [**deleteCustomField**](docs/IssueFieldsApi.md#deletecustomfield) | **DELETE** /rest/api/3/field/{id} | Delete custom field
*IssueFieldsApi* | [**getContextsForFieldDeprecated**](docs/IssueFieldsApi.md#getcontextsforfielddeprecated) | **GET** /rest/api/3/field/{fieldId}/contexts | Get contexts for a field
*IssueFieldsApi* | [**getFields**](docs/IssueFieldsApi.md#getfields) | **GET** /rest/api/3/field | Get fields
*IssueFieldsApi* | [**getFieldsPaginated**](docs/IssueFieldsApi.md#getfieldspaginated) | **GET** /rest/api/3/field/search | Get fields paginated
*IssueFieldsApi* | [**getProjectFields**](docs/IssueFieldsApi.md#getprojectfields) | **GET** /rest/api/3/projects/fields | Get fields for projects
*IssueFieldsApi* | [**getTrashedFieldsPaginated**](docs/IssueFieldsApi.md#gettrashedfieldspaginated) | **GET** /rest/api/3/field/search/trashed | Get fields in trash paginated
*IssueFieldsApi* | [**restoreCustomField**](docs/IssueFieldsApi.md#restorecustomfield) | **POST** /rest/api/3/field/{id}/restore | Restore custom field from trash
*IssueFieldsApi* | [**trashCustomField**](docs/IssueFieldsApi.md#trashcustomfield) | **POST** /rest/api/3/field/{id}/trash | Move custom field to trash
*IssueFieldsApi* | [**updateCustomField**](docs/IssueFieldsApi.md#updatecustomfield) | **PUT** /rest/api/3/field/{fieldId} | Update custom field
*IssueLinkTypesApi* | [**createIssueLinkType**](docs/IssueLinkTypesApi.md#createissuelinktype) | **POST** /rest/api/3/issueLinkType | Create issue link type
*IssueLinkTypesApi* | [**deleteIssueLinkType**](docs/IssueLinkTypesApi.md#deleteissuelinktype) | **DELETE** /rest/api/3/issueLinkType/{issueLinkTypeId} | Delete issue link type
*IssueLinkTypesApi* | [**getIssueLinkType**](docs/IssueLinkTypesApi.md#getissuelinktype) | **GET** /rest/api/3/issueLinkType/{issueLinkTypeId} | Get issue link type
*IssueLinkTypesApi* | [**getIssueLinkTypes**](docs/IssueLinkTypesApi.md#getissuelinktypes) | **GET** /rest/api/3/issueLinkType | Get issue link types
*IssueLinkTypesApi* | [**updateIssueLinkType**](docs/IssueLinkTypesApi.md#updateissuelinktype) | **PUT** /rest/api/3/issueLinkType/{issueLinkTypeId} | Update issue link type
*IssueLinksApi* | [**deleteIssueLink**](docs/IssueLinksApi.md#deleteissuelink) | **DELETE** /rest/api/3/issueLink/{linkId} | Delete issue link
*IssueLinksApi* | [**getIssueLink**](docs/IssueLinksApi.md#getissuelink) | **GET** /rest/api/3/issueLink/{linkId} | Get issue link
*IssueLinksApi* | [**linkIssues**](docs/IssueLinksApi.md#linkissues) | **POST** /rest/api/3/issueLink | Create issue link
*IssueNavigatorSettingsApi* | [**getIssueNavigatorDefaultColumns**](docs/IssueNavigatorSettingsApi.md#getissuenavigatordefaultcolumns) | **GET** /rest/api/3/settings/columns | Get issue navigator default columns
*IssueNavigatorSettingsApi* | [**setIssueNavigatorDefaultColumns**](docs/IssueNavigatorSettingsApi.md#setissuenavigatordefaultcolumns) | **PUT** /rest/api/3/settings/columns | Set issue navigator default columns
*IssueNotificationSchemesApi* | [**addNotifications**](docs/IssueNotificationSchemesApi.md#addnotifications) | **PUT** /rest/api/3/notificationscheme/{id}/notification | Add notifications to notification scheme
*IssueNotificationSchemesApi* | [**createNotificationScheme**](docs/IssueNotificationSchemesApi.md#createnotificationscheme) | **POST** /rest/api/3/notificationscheme | Create notification scheme
*IssueNotificationSchemesApi* | [**deleteNotificationScheme**](docs/IssueNotificationSchemesApi.md#deletenotificationscheme) | **DELETE** /rest/api/3/notificationscheme/{notificationSchemeId} | Delete notification scheme
*IssueNotificationSchemesApi* | [**getNotificationScheme**](docs/IssueNotificationSchemesApi.md#getnotificationscheme) | **GET** /rest/api/3/notificationscheme/{id} | Get notification scheme
*IssueNotificationSchemesApi* | [**getNotificationSchemeToProjectMappings**](docs/IssueNotificationSchemesApi.md#getnotificationschemetoprojectmappings) | **GET** /rest/api/3/notificationscheme/project | Get projects using notification schemes paginated
*IssueNotificationSchemesApi* | [**getNotificationSchemes**](docs/IssueNotificationSchemesApi.md#getnotificationschemes) | **GET** /rest/api/3/notificationscheme | Get notification schemes paginated
*IssueNotificationSchemesApi* | [**removeNotificationFromNotificationScheme**](docs/IssueNotificationSchemesApi.md#removenotificationfromnotificationscheme) | **DELETE** /rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId} | Remove notification from notification scheme
*IssueNotificationSchemesApi* | [**updateNotificationScheme**](docs/IssueNotificationSchemesApi.md#updatenotificationscheme) | **PUT** /rest/api/3/notificationscheme/{id} | Update notification scheme
*IssuePrioritiesApi* | [**createPriority**](docs/IssuePrioritiesApi.md#createpriority) | **POST** /rest/api/3/priority | Create priority
*IssuePrioritiesApi* | [**deletePriority**](docs/IssuePrioritiesApi.md#deletepriority) | **DELETE** /rest/api/3/priority/{id} | Delete priority
*IssuePrioritiesApi* | [**getPriorities**](docs/IssuePrioritiesApi.md#getpriorities) | **GET** /rest/api/3/priority | Get priorities
*IssuePrioritiesApi* | [**getPriority**](docs/IssuePrioritiesApi.md#getpriority) | **GET** /rest/api/3/priority/{id} | Get priority
*IssuePrioritiesApi* | [**movePriorities**](docs/IssuePrioritiesApi.md#movepriorities) | **PUT** /rest/api/3/priority/move | Move priorities
*IssuePrioritiesApi* | [**searchPriorities**](docs/IssuePrioritiesApi.md#searchpriorities) | **GET** /rest/api/3/priority/search | Search priorities
*IssuePrioritiesApi* | [**setDefaultPriority**](docs/IssuePrioritiesApi.md#setdefaultpriorityoperation) | **PUT** /rest/api/3/priority/default | Set default priority
*IssuePrioritiesApi* | [**updatePriority**](docs/IssuePrioritiesApi.md#updatepriority) | **PUT** /rest/api/3/priority/{id} | Update priority
*IssuePropertiesApi* | [**bulkDeleteIssueProperty**](docs/IssuePropertiesApi.md#bulkdeleteissueproperty) | **DELETE** /rest/api/3/issue/properties/{propertyKey} | Bulk delete issue property
*IssuePropertiesApi* | [**bulkSetIssuePropertiesByIssue**](docs/IssuePropertiesApi.md#bulksetissuepropertiesbyissue) | **POST** /rest/api/3/issue/properties/multi | Bulk set issue properties by issue
*IssuePropertiesApi* | [**bulkSetIssueProperty**](docs/IssuePropertiesApi.md#bulksetissueproperty) | **PUT** /rest/api/3/issue/properties/{propertyKey} | Bulk set issue property
*IssuePropertiesApi* | [**bulkSetIssuesPropertiesList**](docs/IssuePropertiesApi.md#bulksetissuespropertieslist) | **POST** /rest/api/3/issue/properties | Bulk set issues properties by list
*IssuePropertiesApi* | [**deleteIssueProperty**](docs/IssuePropertiesApi.md#deleteissueproperty) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Delete issue property
*IssuePropertiesApi* | [**getIssueProperty**](docs/IssuePropertiesApi.md#getissueproperty) | **GET** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Get issue property
*IssuePropertiesApi* | [**getIssuePropertyKeys**](docs/IssuePropertiesApi.md#getissuepropertykeys) | **GET** /rest/api/3/issue/{issueIdOrKey}/properties | Get issue property keys
*IssuePropertiesApi* | [**setIssueProperty**](docs/IssuePropertiesApi.md#setissueproperty) | **PUT** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Set issue property
*IssueRedactionApi* | [**getRedactionStatus**](docs/IssueRedactionApi.md#getredactionstatus) | **GET** /rest/api/3/redact/status/{jobId} | Get redaction status
*IssueRedactionApi* | [**redact**](docs/IssueRedactionApi.md#redact) | **POST** /rest/api/3/redact | Redact
*IssueRemoteLinksApi* | [**createOrUpdateRemoteIssueLink**](docs/IssueRemoteLinksApi.md#createorupdateremoteissuelink) | **POST** /rest/api/3/issue/{issueIdOrKey}/remotelink | Create or update remote issue link
*IssueRemoteLinksApi* | [**deleteRemoteIssueLinkByGlobalId**](docs/IssueRemoteLinksApi.md#deleteremoteissuelinkbyglobalid) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink | Delete remote issue link by global ID
*IssueRemoteLinksApi* | [**deleteRemoteIssueLinkById**](docs/IssueRemoteLinksApi.md#deleteremoteissuelinkbyid) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Delete remote issue link by ID
*IssueRemoteLinksApi* | [**getRemoteIssueLinkById**](docs/IssueRemoteLinksApi.md#getremoteissuelinkbyid) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Get remote issue link by ID
*IssueRemoteLinksApi* | [**getRemoteIssueLinks**](docs/IssueRemoteLinksApi.md#getremoteissuelinks) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink | Get remote issue links
*IssueRemoteLinksApi* | [**updateRemoteIssueLink**](docs/IssueRemoteLinksApi.md#updateremoteissuelink) | **PUT** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Update remote issue link by ID
*IssueResolutionsApi* | [**createResolution**](docs/IssueResolutionsApi.md#createresolution) | **POST** /rest/api/3/resolution | Create resolution
*IssueResolutionsApi* | [**deleteResolution**](docs/IssueResolutionsApi.md#deleteresolution) | **DELETE** /rest/api/3/resolution/{id} | Delete resolution
*IssueResolutionsApi* | [**getResolution**](docs/IssueResolutionsApi.md#getresolution) | **GET** /rest/api/3/resolution/{id} | Get resolution
*IssueResolutionsApi* | [**getResolutions**](docs/IssueResolutionsApi.md#getresolutions) | **GET** /rest/api/3/resolution | Get resolutions
*IssueResolutionsApi* | [**moveResolutions**](docs/IssueResolutionsApi.md#moveresolutions) | **PUT** /rest/api/3/resolution/move | Move resolutions
*IssueResolutionsApi* | [**searchResolutions**](docs/IssueResolutionsApi.md#searchresolutions) | **GET** /rest/api/3/resolution/search | Search resolutions
*IssueResolutionsApi* | [**setDefaultResolution**](docs/IssueResolutionsApi.md#setdefaultresolutionoperation) | **PUT** /rest/api/3/resolution/default | Set default resolution
*IssueResolutionsApi* | [**updateResolution**](docs/IssueResolutionsApi.md#updateresolution) | **PUT** /rest/api/3/resolution/{id} | Update resolution
*IssueSearchApi* | [**countIssues**](docs/IssueSearchApi.md#countissues) | **POST** /rest/api/3/search/approximate-count | Count issues using JQL
*IssueSearchApi* | [**getIssuePickerResource**](docs/IssueSearchApi.md#getissuepickerresource) | **GET** /rest/api/3/issue/picker | Get issue picker suggestions
*IssueSearchApi* | [**matchIssues**](docs/IssueSearchApi.md#matchissues) | **POST** /rest/api/3/jql/match | Check issues against JQL
*IssueSearchApi* | [**searchAndReconsileIssuesUsingJql**](docs/IssueSearchApi.md#searchandreconsileissuesusingjql) | **GET** /rest/api/3/search/jql | Search for issues using JQL enhanced search (GET)
*IssueSearchApi* | [**searchAndReconsileIssuesUsingJqlPost**](docs/IssueSearchApi.md#searchandreconsileissuesusingjqlpost) | **POST** /rest/api/3/search/jql | Search for issues using JQL enhanced search (POST)
*IssueSearchApi* | [**searchForIssuesUsingJql**](docs/IssueSearchApi.md#searchforissuesusingjql) | **GET** /rest/api/3/search | Currently being removed. Search for issues using JQL (GET)
*IssueSearchApi* | [**searchForIssuesUsingJqlPost**](docs/IssueSearchApi.md#searchforissuesusingjqlpost) | **POST** /rest/api/3/search | Currently being removed. Search for issues using JQL (POST)
*IssueSecurityLevelApi* | [**getIssueSecurityLevel**](docs/IssueSecurityLevelApi.md#getissuesecuritylevel) | **GET** /rest/api/3/securitylevel/{id} | Get issue security level
*IssueSecurityLevelApi* | [**getIssueSecurityLevelMembers**](docs/IssueSecurityLevelApi.md#getissuesecuritylevelmembers) | **GET** /rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members | Get issue security level members by issue security scheme
*IssueSecuritySchemesApi* | [**addSecurityLevel**](docs/IssueSecuritySchemesApi.md#addsecuritylevel) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level | Add issue security levels
*IssueSecuritySchemesApi* | [**addSecurityLevelMembers**](docs/IssueSecuritySchemesApi.md#addsecuritylevelmembers) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member | Add issue security level members
*IssueSecuritySchemesApi* | [**associateSchemesToProjects**](docs/IssueSecuritySchemesApi.md#associateschemestoprojects) | **PUT** /rest/api/3/issuesecurityschemes/project | Associate security scheme to project
*IssueSecuritySchemesApi* | [**createIssueSecurityScheme**](docs/IssueSecuritySchemesApi.md#createissuesecurityscheme) | **POST** /rest/api/3/issuesecurityschemes | Create issue security scheme
*IssueSecuritySchemesApi* | [**deleteSecurityScheme**](docs/IssueSecuritySchemesApi.md#deletesecurityscheme) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId} | Delete issue security scheme
*IssueSecuritySchemesApi* | [**getIssueSecurityScheme**](docs/IssueSecuritySchemesApi.md#getissuesecurityscheme) | **GET** /rest/api/3/issuesecurityschemes/{id} | Get issue security scheme
*IssueSecuritySchemesApi* | [**getIssueSecuritySchemes**](docs/IssueSecuritySchemesApi.md#getissuesecurityschemes) | **GET** /rest/api/3/issuesecurityschemes | Get issue security schemes
*IssueSecuritySchemesApi* | [**getSecurityLevelMembers**](docs/IssueSecuritySchemesApi.md#getsecuritylevelmembers) | **GET** /rest/api/3/issuesecurityschemes/level/member | Get issue security level members
*IssueSecuritySchemesApi* | [**getSecurityLevels**](docs/IssueSecuritySchemesApi.md#getsecuritylevels) | **GET** /rest/api/3/issuesecurityschemes/level | Get issue security levels
*IssueSecuritySchemesApi* | [**removeLevel**](docs/IssueSecuritySchemesApi.md#removelevel) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId} | Remove issue security level
*IssueSecuritySchemesApi* | [**removeMemberFromSecurityLevel**](docs/IssueSecuritySchemesApi.md#removememberfromsecuritylevel) | **DELETE** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId} | Remove member from issue security level
*IssueSecuritySchemesApi* | [**searchProjectsUsingSecuritySchemes**](docs/IssueSecuritySchemesApi.md#searchprojectsusingsecurityschemes) | **GET** /rest/api/3/issuesecurityschemes/project | Get projects using issue security schemes
*IssueSecuritySchemesApi* | [**searchSecuritySchemes**](docs/IssueSecuritySchemesApi.md#searchsecurityschemes) | **GET** /rest/api/3/issuesecurityschemes/search | Search issue security schemes
*IssueSecuritySchemesApi* | [**setDefaultLevels**](docs/IssueSecuritySchemesApi.md#setdefaultlevelsoperation) | **PUT** /rest/api/3/issuesecurityschemes/level/default | Set default issue security levels
*IssueSecuritySchemesApi* | [**updateIssueSecurityScheme**](docs/IssueSecuritySchemesApi.md#updateissuesecurityscheme) | **PUT** /rest/api/3/issuesecurityschemes/{id} | Update issue security scheme
*IssueSecuritySchemesApi* | [**updateSecurityLevel**](docs/IssueSecuritySchemesApi.md#updatesecuritylevel) | **PUT** /rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId} | Update issue security level
*IssueTypePropertiesApi* | [**deleteIssueTypeProperty**](docs/IssueTypePropertiesApi.md#deleteissuetypeproperty) | **DELETE** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Delete issue type property
*IssueTypePropertiesApi* | [**getIssueTypeProperty**](docs/IssueTypePropertiesApi.md#getissuetypeproperty) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Get issue type property
*IssueTypePropertiesApi* | [**getIssueTypePropertyKeys**](docs/IssueTypePropertiesApi.md#getissuetypepropertykeys) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties | Get issue type property keys
*IssueTypePropertiesApi* | [**setIssueTypeProperty**](docs/IssueTypePropertiesApi.md#setissuetypeproperty) | **PUT** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Set issue type property
*IssueTypeSchemesApi* | [**addIssueTypesToIssueTypeScheme**](docs/IssueTypeSchemesApi.md#addissuetypestoissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype | Add issue types to issue type scheme
*IssueTypeSchemesApi* | [**assignIssueTypeSchemeToProject**](docs/IssueTypeSchemesApi.md#assignissuetypeschemetoproject) | **PUT** /rest/api/3/issuetypescheme/project | Assign issue type scheme to project
*IssueTypeSchemesApi* | [**createIssueTypeScheme**](docs/IssueTypeSchemesApi.md#createissuetypescheme) | **POST** /rest/api/3/issuetypescheme | Create issue type scheme
*IssueTypeSchemesApi* | [**deleteIssueTypeScheme**](docs/IssueTypeSchemesApi.md#deleteissuetypescheme) | **DELETE** /rest/api/3/issuetypescheme/{issueTypeSchemeId} | Delete issue type scheme
*IssueTypeSchemesApi* | [**getAllIssueTypeSchemes**](docs/IssueTypeSchemesApi.md#getallissuetypeschemes) | **GET** /rest/api/3/issuetypescheme | Get all issue type schemes
*IssueTypeSchemesApi* | [**getIssueTypeSchemeForProjects**](docs/IssueTypeSchemesApi.md#getissuetypeschemeforprojects) | **GET** /rest/api/3/issuetypescheme/project | Get issue type schemes for projects
*IssueTypeSchemesApi* | [**getIssueTypeSchemesMapping**](docs/IssueTypeSchemesApi.md#getissuetypeschemesmapping) | **GET** /rest/api/3/issuetypescheme/mapping | Get issue type scheme items
*IssueTypeSchemesApi* | [**removeIssueTypeFromIssueTypeScheme**](docs/IssueTypeSchemesApi.md#removeissuetypefromissuetypescheme) | **DELETE** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId} | Remove issue type from issue type scheme
*IssueTypeSchemesApi* | [**reorderIssueTypesInIssueTypeScheme**](docs/IssueTypeSchemesApi.md#reorderissuetypesinissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move | Change order of issue types
*IssueTypeSchemesApi* | [**updateIssueTypeScheme**](docs/IssueTypeSchemesApi.md#updateissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId} | Update issue type scheme
*IssueTypeScreenSchemesApi* | [**appendMappingsForIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#appendmappingsforissuetypescreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping | Append mappings to issue type screen scheme
*IssueTypeScreenSchemesApi* | [**assignIssueTypeScreenSchemeToProject**](docs/IssueTypeScreenSchemesApi.md#assignissuetypescreenschemetoproject) | **PUT** /rest/api/3/issuetypescreenscheme/project | Assign issue type screen scheme to project
*IssueTypeScreenSchemesApi* | [**createIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#createissuetypescreenscheme) | **POST** /rest/api/3/issuetypescreenscheme | Create issue type screen scheme
*IssueTypeScreenSchemesApi* | [**deleteIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#deleteissuetypescreenscheme) | **DELETE** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Delete issue type screen scheme
*IssueTypeScreenSchemesApi* | [**getIssueTypeScreenSchemeMappings**](docs/IssueTypeScreenSchemesApi.md#getissuetypescreenschememappings) | **GET** /rest/api/3/issuetypescreenscheme/mapping | Get issue type screen scheme items
*IssueTypeScreenSchemesApi* | [**getIssueTypeScreenSchemeProjectAssociations**](docs/IssueTypeScreenSchemesApi.md#getissuetypescreenschemeprojectassociations) | **GET** /rest/api/3/issuetypescreenscheme/project | Get issue type screen schemes for projects
*IssueTypeScreenSchemesApi* | [**getIssueTypeScreenSchemes**](docs/IssueTypeScreenSchemesApi.md#getissuetypescreenschemes) | **GET** /rest/api/3/issuetypescreenscheme | Get issue type screen schemes
*IssueTypeScreenSchemesApi* | [**getProjectsForIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#getprojectsforissuetypescreenscheme) | **GET** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project | Get issue type screen scheme projects
*IssueTypeScreenSchemesApi* | [**removeMappingsFromIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#removemappingsfromissuetypescreenscheme) | **POST** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove | Remove mappings from issue type screen scheme
*IssueTypeScreenSchemesApi* | [**updateDefaultScreenScheme**](docs/IssueTypeScreenSchemesApi.md#updatedefaultscreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default | Update issue type screen scheme default screen scheme
*IssueTypeScreenSchemesApi* | [**updateIssueTypeScreenScheme**](docs/IssueTypeScreenSchemesApi.md#updateissuetypescreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Update issue type screen scheme
*IssueTypesApi* | [**createIssueType**](docs/IssueTypesApi.md#createissuetype) | **POST** /rest/api/3/issuetype | Create issue type
*IssueTypesApi* | [**createIssueTypeAvatar**](docs/IssueTypesApi.md#createissuetypeavatar) | **POST** /rest/api/3/issuetype/{id}/avatar2 | Load issue type avatar
*IssueTypesApi* | [**deleteIssueType**](docs/IssueTypesApi.md#deleteissuetype) | **DELETE** /rest/api/3/issuetype/{id} | Delete issue type
*IssueTypesApi* | [**getAlternativeIssueTypes**](docs/IssueTypesApi.md#getalternativeissuetypes) | **GET** /rest/api/3/issuetype/{id}/alternatives | Get alternative issue types
*IssueTypesApi* | [**getIssueAllTypes**](docs/IssueTypesApi.md#getissuealltypes) | **GET** /rest/api/3/issuetype | Get all issue types for user
*IssueTypesApi* | [**getIssueType**](docs/IssueTypesApi.md#getissuetype) | **GET** /rest/api/3/issuetype/{id} | Get issue type
*IssueTypesApi* | [**getIssueTypesForProject**](docs/IssueTypesApi.md#getissuetypesforproject) | **GET** /rest/api/3/issuetype/project | Get issue types for project
*IssueTypesApi* | [**updateIssueType**](docs/IssueTypesApi.md#updateissuetype) | **PUT** /rest/api/3/issuetype/{id} | Update issue type
*IssueVotesApi* | [**addVote**](docs/IssueVotesApi.md#addvote) | **POST** /rest/api/3/issue/{issueIdOrKey}/votes | Add vote
*IssueVotesApi* | [**getVotes**](docs/IssueVotesApi.md#getvotes) | **GET** /rest/api/3/issue/{issueIdOrKey}/votes | Get votes
*IssueVotesApi* | [**removeVote**](docs/IssueVotesApi.md#removevote) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/votes | Delete vote
*IssueWatchersApi* | [**addWatcher**](docs/IssueWatchersApi.md#addwatcher) | **POST** /rest/api/3/issue/{issueIdOrKey}/watchers | Add watcher
*IssueWatchersApi* | [**getIsWatchingIssueBulk**](docs/IssueWatchersApi.md#getiswatchingissuebulk) | **POST** /rest/api/3/issue/watching | Get is watching issue bulk
*IssueWatchersApi* | [**getIssueWatchers**](docs/IssueWatchersApi.md#getissuewatchers) | **GET** /rest/api/3/issue/{issueIdOrKey}/watchers | Get issue watchers
*IssueWatchersApi* | [**removeWatcher**](docs/IssueWatchersApi.md#removewatcher) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/watchers | Delete watcher
*IssueWorklogPropertiesApi* | [**deleteWorklogProperty**](docs/IssueWorklogPropertiesApi.md#deleteworklogproperty) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Delete worklog property
*IssueWorklogPropertiesApi* | [**getWorklogProperty**](docs/IssueWorklogPropertiesApi.md#getworklogproperty) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Get worklog property
*IssueWorklogPropertiesApi* | [**getWorklogPropertyKeys**](docs/IssueWorklogPropertiesApi.md#getworklogpropertykeys) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties | Get worklog property keys
*IssueWorklogPropertiesApi* | [**setWorklogProperty**](docs/IssueWorklogPropertiesApi.md#setworklogproperty) | **PUT** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Set worklog property
*IssueWorklogsApi* | [**addWorklog**](docs/IssueWorklogsApi.md#addworklog) | **POST** /rest/api/3/issue/{issueIdOrKey}/worklog | Add worklog
*IssueWorklogsApi* | [**bulkDeleteWorklogs**](docs/IssueWorklogsApi.md#bulkdeleteworklogs) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog | Bulk delete worklogs
*IssueWorklogsApi* | [**bulkMoveWorklogs**](docs/IssueWorklogsApi.md#bulkmoveworklogs) | **POST** /rest/api/3/issue/{issueIdOrKey}/worklog/move | Bulk move worklogs
*IssueWorklogsApi* | [**deleteWorklog**](docs/IssueWorklogsApi.md#deleteworklog) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Delete worklog
*IssueWorklogsApi* | [**getIdsOfWorklogsDeletedSince**](docs/IssueWorklogsApi.md#getidsofworklogsdeletedsince) | **GET** /rest/api/3/worklog/deleted | Get IDs of deleted worklogs
*IssueWorklogsApi* | [**getIdsOfWorklogsModifiedSince**](docs/IssueWorklogsApi.md#getidsofworklogsmodifiedsince) | **GET** /rest/api/3/worklog/updated | Get IDs of updated worklogs
*IssueWorklogsApi* | [**getIssueWorklog**](docs/IssueWorklogsApi.md#getissueworklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog | Get issue worklogs
*IssueWorklogsApi* | [**getWorklog**](docs/IssueWorklogsApi.md#getworklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Get worklog
*IssueWorklogsApi* | [**getWorklogsForIds**](docs/IssueWorklogsApi.md#getworklogsforids) | **POST** /rest/api/3/worklog/list | Get worklogs
*IssueWorklogsApi* | [**updateWorklog**](docs/IssueWorklogsApi.md#updateworklog) | **PUT** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Update worklog
*IssuesApi* | [**archiveIssues**](docs/IssuesApi.md#archiveissues) | **PUT** /rest/api/3/issue/archive | Archive issue(s) by issue ID/key
*IssuesApi* | [**archiveIssuesAsync**](docs/IssuesApi.md#archiveissuesasync) | **POST** /rest/api/3/issue/archive | Archive issue(s) by JQL
*IssuesApi* | [**assignIssue**](docs/IssuesApi.md#assignissue) | **PUT** /rest/api/3/issue/{issueIdOrKey}/assignee | Assign issue
*IssuesApi* | [**bulkFetchIssues**](docs/IssuesApi.md#bulkfetchissues) | **POST** /rest/api/3/issue/bulkfetch | Bulk fetch issues
*IssuesApi* | [**createIssue**](docs/IssuesApi.md#createissue) | **POST** /rest/api/3/issue | Create issue
*IssuesApi* | [**createIssues**](docs/IssuesApi.md#createissues) | **POST** /rest/api/3/issue/bulk | Bulk create issue
*IssuesApi* | [**deleteIssue**](docs/IssuesApi.md#deleteissue) | **DELETE** /rest/api/3/issue/{issueIdOrKey} | Delete issue
*IssuesApi* | [**doTransition**](docs/IssuesApi.md#dotransition) | **POST** /rest/api/3/issue/{issueIdOrKey}/transitions | Transition issue
*IssuesApi* | [**editIssue**](docs/IssuesApi.md#editissue) | **PUT** /rest/api/3/issue/{issueIdOrKey} | Edit issue
*IssuesApi* | [**exportArchivedIssues**](docs/IssuesApi.md#exportarchivedissues) | **PUT** /rest/api/3/issues/archive/export | Export archived issue(s)
*IssuesApi* | [**getBulkChangelogs**](docs/IssuesApi.md#getbulkchangelogs) | **POST** /rest/api/3/changelog/bulkfetch | Bulk fetch changelogs
*IssuesApi* | [**getChangeLogs**](docs/IssuesApi.md#getchangelogs) | **GET** /rest/api/3/issue/{issueIdOrKey}/changelog | Get changelogs
*IssuesApi* | [**getChangeLogsByIds**](docs/IssuesApi.md#getchangelogsbyids) | **POST** /rest/api/3/issue/{issueIdOrKey}/changelog/list | Get changelogs by IDs
*IssuesApi* | [**getCreateIssueMeta**](docs/IssuesApi.md#getcreateissuemeta) | **GET** /rest/api/3/issue/createmeta | Get create issue metadata
*IssuesApi* | [**getCreateIssueMetaIssueTypeId**](docs/IssuesApi.md#getcreateissuemetaissuetypeid) | **GET** /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId} | Get create field metadata for a project and issue type id
*IssuesApi* | [**getCreateIssueMetaIssueTypes**](docs/IssuesApi.md#getcreateissuemetaissuetypes) | **GET** /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes | Get create metadata issue types for a project
*IssuesApi* | [**getEditIssueMeta**](docs/IssuesApi.md#geteditissuemeta) | **GET** /rest/api/3/issue/{issueIdOrKey}/editmeta | Get edit issue metadata
*IssuesApi* | [**getEvents**](docs/IssuesApi.md#getevents) | **GET** /rest/api/3/events | Get events
*IssuesApi* | [**getIssue**](docs/IssuesApi.md#getissue) | **GET** /rest/api/3/issue/{issueIdOrKey} | Get issue
*IssuesApi* | [**getIssueLimitReport**](docs/IssuesApi.md#getissuelimitreport) | **GET** /rest/api/3/issue/limit/report | Get issue limit report
*IssuesApi* | [**getTransitions**](docs/IssuesApi.md#gettransitions) | **GET** /rest/api/3/issue/{issueIdOrKey}/transitions | Get transitions
*IssuesApi* | [**notify**](docs/IssuesApi.md#notify) | **POST** /rest/api/3/issue/{issueIdOrKey}/notify | Send notification for issue
*IssuesApi* | [**unarchiveIssues**](docs/IssuesApi.md#unarchiveissues) | **PUT** /rest/api/3/issue/unarchive | Unarchive issue(s) by issue keys/ID
*JQLApi* | [**getAutoComplete**](docs/JQLApi.md#getautocomplete) | **GET** /rest/api/3/jql/autocompletedata | Get field reference data (GET)
*JQLApi* | [**getAutoCompletePost**](docs/JQLApi.md#getautocompletepost) | **POST** /rest/api/3/jql/autocompletedata | Get field reference data (POST)
*JQLApi* | [**getFieldAutoCompleteForQueryString**](docs/JQLApi.md#getfieldautocompleteforquerystring) | **GET** /rest/api/3/jql/autocompletedata/suggestions | Get field auto complete suggestions
*JQLApi* | [**migrateQueries**](docs/JQLApi.md#migratequeries) | **POST** /rest/api/3/jql/pdcleaner | Convert user identifiers to account IDs in JQL queries
*JQLApi* | [**parseJqlQueries**](docs/JQLApi.md#parsejqlqueries) | **POST** /rest/api/3/jql/parse | Parse JQL query
*JQLApi* | [**sanitiseJqlQueries**](docs/JQLApi.md#sanitisejqlqueries) | **POST** /rest/api/3/jql/sanitize | Sanitize JQL queries
*JQLFunctionsAppsApi* | [**getPrecomputations**](docs/JQLFunctionsAppsApi.md#getprecomputations) | **GET** /rest/api/3/jql/function/computation | Get precomputations (apps)
*JQLFunctionsAppsApi* | [**getPrecomputationsByID**](docs/JQLFunctionsAppsApi.md#getprecomputationsbyid) | **POST** /rest/api/3/jql/function/computation/search | Get precomputations by ID (apps)
*JQLFunctionsAppsApi* | [**updatePrecomputations**](docs/JQLFunctionsAppsApi.md#updateprecomputations) | **POST** /rest/api/3/jql/function/computation | Update precomputations (apps)
*JiraExpressionsApi* | [**analyseExpression**](docs/JiraExpressionsApi.md#analyseexpression) | **POST** /rest/api/3/expression/analyse | Analyse Jira expression
*JiraExpressionsApi* | [**evaluateJSISJiraExpression**](docs/JiraExpressionsApi.md#evaluatejsisjiraexpression) | **POST** /rest/api/3/expression/evaluate | Evaluate Jira expression using enhanced search API
*JiraExpressionsApi* | [**evaluateJiraExpression**](docs/JiraExpressionsApi.md#evaluatejiraexpression) | **POST** /rest/api/3/expression/eval | Currently being removed. Evaluate Jira expression
*JiraSettingsApi* | [**getAdvancedSettings**](docs/JiraSettingsApi.md#getadvancedsettings) | **GET** /rest/api/3/application-properties/advanced-settings | Get advanced settings
*JiraSettingsApi* | [**getApplicationProperty**](docs/JiraSettingsApi.md#getapplicationproperty) | **GET** /rest/api/3/application-properties | Get application property
*JiraSettingsApi* | [**getConfiguration**](docs/JiraSettingsApi.md#getconfiguration) | **GET** /rest/api/3/configuration | Get global settings
*JiraSettingsApi* | [**setApplicationProperty**](docs/JiraSettingsApi.md#setapplicationproperty) | **PUT** /rest/api/3/application-properties/{id} | Set application property
*LabelsApi* | [**getAllLabels**](docs/LabelsApi.md#getalllabels) | **GET** /rest/api/3/label | Get all labels
*LicenseMetricsApi* | [**getApproximateApplicationLicenseCount**](docs/LicenseMetricsApi.md#getapproximateapplicationlicensecount) | **GET** /rest/api/3/license/approximateLicenseCount/product/{applicationKey} | Get approximate application license count
*LicenseMetricsApi* | [**getApproximateLicenseCount**](docs/LicenseMetricsApi.md#getapproximatelicensecount) | **GET** /rest/api/3/license/approximateLicenseCount | Get approximate license count
*LicenseMetricsApi* | [**getLicense**](docs/LicenseMetricsApi.md#getlicense) | **GET** /rest/api/3/instance/license | Get license
*MigrationOfConnectModulesToForgeApi* | [**connectToForgeMigrationFetchTaskResourceFetchMigrationTaskGet**](docs/MigrationOfConnectModulesToForgeApi.md#connecttoforgemigrationfetchtaskresourcefetchmigrationtaskget) | **GET** /rest/atlassian-connect/1/migration/{connectKey}/{jiraIssueFieldsKey}/task | Get Connect issue field migration task
*MyselfApi* | [**getCurrentUser**](docs/MyselfApi.md#getcurrentuser) | **GET** /rest/api/3/myself | Get current user
*MyselfApi* | [**getLocale**](docs/MyselfApi.md#getlocale) | **GET** /rest/api/3/mypreferences/locale | Get locale
*MyselfApi* | [**getPreference**](docs/MyselfApi.md#getpreference) | **GET** /rest/api/3/mypreferences | Get preference
*MyselfApi* | [**removePreference**](docs/MyselfApi.md#removepreference) | **DELETE** /rest/api/3/mypreferences | Delete preference
*MyselfApi* | [**setLocale**](docs/MyselfApi.md#setlocale) | **PUT** /rest/api/3/mypreferences/locale | Set locale
*MyselfApi* | [**setPreference**](docs/MyselfApi.md#setpreference) | **PUT** /rest/api/3/mypreferences | Set preference
*PermissionSchemesApi* | [**createPermissionGrant**](docs/PermissionSchemesApi.md#createpermissiongrant) | **POST** /rest/api/3/permissionscheme/{schemeId}/permission | Create permission grant
*PermissionSchemesApi* | [**createPermissionScheme**](docs/PermissionSchemesApi.md#createpermissionscheme) | **POST** /rest/api/3/permissionscheme | Create permission scheme
*PermissionSchemesApi* | [**deletePermissionScheme**](docs/PermissionSchemesApi.md#deletepermissionscheme) | **DELETE** /rest/api/3/permissionscheme/{schemeId} | Delete permission scheme
*PermissionSchemesApi* | [**deletePermissionSchemeEntity**](docs/PermissionSchemesApi.md#deletepermissionschemeentity) | **DELETE** /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId} | Delete permission scheme grant
*PermissionSchemesApi* | [**getAllPermissionSchemes**](docs/PermissionSchemesApi.md#getallpermissionschemes) | **GET** /rest/api/3/permissionscheme | Get all permission schemes
*PermissionSchemesApi* | [**getPermissionScheme**](docs/PermissionSchemesApi.md#getpermissionscheme) | **GET** /rest/api/3/permissionscheme/{schemeId} | Get permission scheme
*PermissionSchemesApi* | [**getPermissionSchemeGrant**](docs/PermissionSchemesApi.md#getpermissionschemegrant) | **GET** /rest/api/3/permissionscheme/{schemeId}/permission/{permissionId} | Get permission scheme grant
*PermissionSchemesApi* | [**getPermissionSchemeGrants**](docs/PermissionSchemesApi.md#getpermissionschemegrants) | **GET** /rest/api/3/permissionscheme/{schemeId}/permission | Get permission scheme grants
*PermissionSchemesApi* | [**updatePermissionScheme**](docs/PermissionSchemesApi.md#updatepermissionscheme) | **PUT** /rest/api/3/permissionscheme/{schemeId} | Update permission scheme
*PermissionsApi* | [**getAllPermissions**](docs/PermissionsApi.md#getallpermissions) | **GET** /rest/api/3/permissions | Get all permissions
*PermissionsApi* | [**getBulkPermissions**](docs/PermissionsApi.md#getbulkpermissions) | **POST** /rest/api/3/permissions/check | Get bulk permissions
*PermissionsApi* | [**getMyPermissions**](docs/PermissionsApi.md#getmypermissions) | **GET** /rest/api/3/mypermissions | Get my permissions
*PermissionsApi* | [**getPermittedProjects**](docs/PermissionsApi.md#getpermittedprojects) | **POST** /rest/api/3/permissions/project | Get permitted projects
*PlansApi* | [**archivePlan**](docs/PlansApi.md#archiveplan) | **PUT** /rest/api/3/plans/plan/{planId}/archive | Archive plan
*PlansApi* | [**createPlan**](docs/PlansApi.md#createplanoperation) | **POST** /rest/api/3/plans/plan | Create plan
*PlansApi* | [**duplicatePlan**](docs/PlansApi.md#duplicateplanoperation) | **POST** /rest/api/3/plans/plan/{planId}/duplicate | Duplicate plan
*PlansApi* | [**getPlan**](docs/PlansApi.md#getplan) | **GET** /rest/api/3/plans/plan/{planId} | Get plan
*PlansApi* | [**getPlans**](docs/PlansApi.md#getplans) | **GET** /rest/api/3/plans/plan | Get plans paginated
*PlansApi* | [**trashPlan**](docs/PlansApi.md#trashplan) | **PUT** /rest/api/3/plans/plan/{planId}/trash | Trash plan
*PlansApi* | [**updatePlan**](docs/PlansApi.md#updateplan) | **PUT** /rest/api/3/plans/plan/{planId} | Update plan
*PrioritySchemesApi* | [**createPriorityScheme**](docs/PrioritySchemesApi.md#createpriorityscheme) | **POST** /rest/api/3/priorityscheme | Create priority scheme
*PrioritySchemesApi* | [**deletePriorityScheme**](docs/PrioritySchemesApi.md#deletepriorityscheme) | **DELETE** /rest/api/3/priorityscheme/{schemeId} | Delete priority scheme
*PrioritySchemesApi* | [**getAvailablePrioritiesByPriorityScheme**](docs/PrioritySchemesApi.md#getavailableprioritiesbypriorityscheme) | **GET** /rest/api/3/priorityscheme/priorities/available | Get available priorities by priority scheme
*PrioritySchemesApi* | [**getPrioritiesByPriorityScheme**](docs/PrioritySchemesApi.md#getprioritiesbypriorityscheme) | **GET** /rest/api/3/priorityscheme/{schemeId}/priorities | Get priorities by priority scheme
*PrioritySchemesApi* | [**getPrioritySchemes**](docs/PrioritySchemesApi.md#getpriorityschemes) | **GET** /rest/api/3/priorityscheme | Get priority schemes
*PrioritySchemesApi* | [**getProjectsByPriorityScheme**](docs/PrioritySchemesApi.md#getprojectsbypriorityscheme) | **GET** /rest/api/3/priorityscheme/{schemeId}/projects | Get projects by priority scheme
*PrioritySchemesApi* | [**suggestedPrioritiesForMappings**](docs/PrioritySchemesApi.md#suggestedprioritiesformappings) | **POST** /rest/api/3/priorityscheme/mappings | Suggested priorities for mappings
*PrioritySchemesApi* | [**updatePriorityScheme**](docs/PrioritySchemesApi.md#updatepriorityscheme) | **PUT** /rest/api/3/priorityscheme/{schemeId} | Update priority scheme
*ProjectAvatarsApi* | [**createProjectAvatar**](docs/ProjectAvatarsApi.md#createprojectavatar) | **POST** /rest/api/3/project/{projectIdOrKey}/avatar2 | Load project avatar
*ProjectAvatarsApi* | [**deleteProjectAvatar**](docs/ProjectAvatarsApi.md#deleteprojectavatar) | **DELETE** /rest/api/3/project/{projectIdOrKey}/avatar/{id} | Delete project avatar
*ProjectAvatarsApi* | [**getAllProjectAvatars**](docs/ProjectAvatarsApi.md#getallprojectavatars) | **GET** /rest/api/3/project/{projectIdOrKey}/avatars | Get all project avatars
*ProjectAvatarsApi* | [**updateProjectAvatar**](docs/ProjectAvatarsApi.md#updateprojectavatar) | **PUT** /rest/api/3/project/{projectIdOrKey}/avatar | Set project avatar
*ProjectCategoriesApi* | [**createProjectCategory**](docs/ProjectCategoriesApi.md#createprojectcategory) | **POST** /rest/api/3/projectCategory | Create project category
*ProjectCategoriesApi* | [**getAllProjectCategories**](docs/ProjectCategoriesApi.md#getallprojectcategories) | **GET** /rest/api/3/projectCategory | Get all project categories
*ProjectCategoriesApi* | [**getProjectCategoryById**](docs/ProjectCategoriesApi.md#getprojectcategorybyid) | **GET** /rest/api/3/projectCategory/{id} | Get project category by ID
*ProjectCategoriesApi* | [**removeProjectCategory**](docs/ProjectCategoriesApi.md#removeprojectcategory) | **DELETE** /rest/api/3/projectCategory/{id} | Delete project category
*ProjectCategoriesApi* | [**updateProjectCategory**](docs/ProjectCategoriesApi.md#updateprojectcategory) | **PUT** /rest/api/3/projectCategory/{id} | Update project category
*ProjectClassificationLevelsApi* | [**getDefaultProjectClassification**](docs/ProjectClassificationLevelsApi.md#getdefaultprojectclassification) | **GET** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Get the default data classification level of a project
*ProjectClassificationLevelsApi* | [**removeDefaultProjectClassification**](docs/ProjectClassificationLevelsApi.md#removedefaultprojectclassification) | **DELETE** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Remove the default data classification level from a project
*ProjectClassificationLevelsApi* | [**updateDefaultProjectClassification**](docs/ProjectClassificationLevelsApi.md#updatedefaultprojectclassification) | **PUT** /rest/api/3/project/{projectIdOrKey}/classification-level/default | Update the default data classification level of a project
*ProjectComponentsApi* | [**createComponent**](docs/ProjectComponentsApi.md#createcomponent) | **POST** /rest/api/3/component | Create component
*ProjectComponentsApi* | [**deleteComponent**](docs/ProjectComponentsApi.md#deletecomponent) | **DELETE** /rest/api/3/component/{id} | Delete component
*ProjectComponentsApi* | [**findComponentsForProjects**](docs/ProjectComponentsApi.md#findcomponentsforprojects) | **GET** /rest/api/3/component | Find components for projects
*ProjectComponentsApi* | [**getComponent**](docs/ProjectComponentsApi.md#getcomponent) | **GET** /rest/api/3/component/{id} | Get component
*ProjectComponentsApi* | [**getComponentRelatedIssues**](docs/ProjectComponentsApi.md#getcomponentrelatedissues) | **GET** /rest/api/3/component/{id}/relatedIssueCounts | Get component issues count
*ProjectComponentsApi* | [**getProjectComponents**](docs/ProjectComponentsApi.md#getprojectcomponents) | **GET** /rest/api/3/project/{projectIdOrKey}/components | Get project components
*ProjectComponentsApi* | [**getProjectComponentsPaginated**](docs/ProjectComponentsApi.md#getprojectcomponentspaginated) | **GET** /rest/api/3/project/{projectIdOrKey}/component | Get project components paginated
*ProjectComponentsApi* | [**updateComponent**](docs/ProjectComponentsApi.md#updatecomponent) | **PUT** /rest/api/3/component/{id} | Update component
*ProjectEmailApi* | [**getProjectEmail**](docs/ProjectEmailApi.md#getprojectemail) | **GET** /rest/api/3/project/{projectId}/email | Get project\&#39;s sender email
*ProjectEmailApi* | [**updateProjectEmail**](docs/ProjectEmailApi.md#updateprojectemail) | **PUT** /rest/api/3/project/{projectId}/email | Set project\&#39;s sender email
*ProjectFeaturesApi* | [**getFeaturesForProject**](docs/ProjectFeaturesApi.md#getfeaturesforproject) | **GET** /rest/api/3/project/{projectIdOrKey}/features | Get project features
*ProjectFeaturesApi* | [**toggleFeatureForProject**](docs/ProjectFeaturesApi.md#togglefeatureforproject) | **PUT** /rest/api/3/project/{projectIdOrKey}/features/{featureKey} | Set project feature state
*ProjectKeyAndNameValidationApi* | [**getValidProjectKey**](docs/ProjectKeyAndNameValidationApi.md#getvalidprojectkey) | **GET** /rest/api/3/projectvalidate/validProjectKey | Get valid project key
*ProjectKeyAndNameValidationApi* | [**getValidProjectName**](docs/ProjectKeyAndNameValidationApi.md#getvalidprojectname) | **GET** /rest/api/3/projectvalidate/validProjectName | Get valid project name
*ProjectKeyAndNameValidationApi* | [**validateProjectKey**](docs/ProjectKeyAndNameValidationApi.md#validateprojectkey) | **GET** /rest/api/3/projectvalidate/key | Validate project key
*ProjectPermissionSchemesApi* | [**assignPermissionScheme**](docs/ProjectPermissionSchemesApi.md#assignpermissionscheme) | **PUT** /rest/api/3/project/{projectKeyOrId}/permissionscheme | Assign permission scheme
*ProjectPermissionSchemesApi* | [**getAssignedPermissionScheme**](docs/ProjectPermissionSchemesApi.md#getassignedpermissionscheme) | **GET** /rest/api/3/project/{projectKeyOrId}/permissionscheme | Get assigned permission scheme
*ProjectPermissionSchemesApi* | [**getProjectIssueSecurityScheme**](docs/ProjectPermissionSchemesApi.md#getprojectissuesecurityscheme) | **GET** /rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme | Get project issue security scheme
*ProjectPermissionSchemesApi* | [**getSecurityLevelsForProject**](docs/ProjectPermissionSchemesApi.md#getsecuritylevelsforproject) | **GET** /rest/api/3/project/{projectKeyOrId}/securitylevel | Get project issue security levels
*ProjectPropertiesApi* | [**deleteProjectProperty**](docs/ProjectPropertiesApi.md#deleteprojectproperty) | **DELETE** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Delete project property
*ProjectPropertiesApi* | [**getProjectProperty**](docs/ProjectPropertiesApi.md#getprojectproperty) | **GET** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Get project property
*ProjectPropertiesApi* | [**getProjectPropertyKeys**](docs/ProjectPropertiesApi.md#getprojectpropertykeys) | **GET** /rest/api/3/project/{projectIdOrKey}/properties | Get project property keys
*ProjectPropertiesApi* | [**setProjectProperty**](docs/ProjectPropertiesApi.md#setprojectproperty) | **PUT** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Set project property
*ProjectRoleActorsApi* | [**addActorUsers**](docs/ProjectRoleActorsApi.md#addactorusers) | **POST** /rest/api/3/project/{projectIdOrKey}/role/{id} | Add actors to project role
*ProjectRoleActorsApi* | [**addProjectRoleActorsToRole**](docs/ProjectRoleActorsApi.md#addprojectroleactorstorole) | **POST** /rest/api/3/role/{id}/actors | Add default actors to project role
*ProjectRoleActorsApi* | [**deleteActor**](docs/ProjectRoleActorsApi.md#deleteactor) | **DELETE** /rest/api/3/project/{projectIdOrKey}/role/{id} | Delete actors from project role
*ProjectRoleActorsApi* | [**deleteProjectRoleActorsFromRole**](docs/ProjectRoleActorsApi.md#deleteprojectroleactorsfromrole) | **DELETE** /rest/api/3/role/{id}/actors | Delete default actors from project role
*ProjectRoleActorsApi* | [**getProjectRoleActorsForRole**](docs/ProjectRoleActorsApi.md#getprojectroleactorsforrole) | **GET** /rest/api/3/role/{id}/actors | Get default actors for project role
*ProjectRoleActorsApi* | [**setActors**](docs/ProjectRoleActorsApi.md#setactors) | **PUT** /rest/api/3/project/{projectIdOrKey}/role/{id} | Set actors for project role
*ProjectRolesApi* | [**createProjectRole**](docs/ProjectRolesApi.md#createprojectrole) | **POST** /rest/api/3/role | Create project role
*ProjectRolesApi* | [**deleteProjectRole**](docs/ProjectRolesApi.md#deleteprojectrole) | **DELETE** /rest/api/3/role/{id} | Delete project role
*ProjectRolesApi* | [**fullyUpdateProjectRole**](docs/ProjectRolesApi.md#fullyupdateprojectrole) | **PUT** /rest/api/3/role/{id} | Fully update project role
*ProjectRolesApi* | [**getAllProjectRoles**](docs/ProjectRolesApi.md#getallprojectroles) | **GET** /rest/api/3/role | Get all project roles
*ProjectRolesApi* | [**getProjectRole**](docs/ProjectRolesApi.md#getprojectrole) | **GET** /rest/api/3/project/{projectIdOrKey}/role/{id} | Get project role for project
*ProjectRolesApi* | [**getProjectRoleById**](docs/ProjectRolesApi.md#getprojectrolebyid) | **GET** /rest/api/3/role/{id} | Get project role by ID
*ProjectRolesApi* | [**getProjectRoleDetails**](docs/ProjectRolesApi.md#getprojectroledetails) | **GET** /rest/api/3/project/{projectIdOrKey}/roledetails | Get project role details
*ProjectRolesApi* | [**getProjectRoles**](docs/ProjectRolesApi.md#getprojectroles) | **GET** /rest/api/3/project/{projectIdOrKey}/role | Get project roles for project
*ProjectRolesApi* | [**partialUpdateProjectRole**](docs/ProjectRolesApi.md#partialupdateprojectrole) | **POST** /rest/api/3/role/{id} | Partial update project role
*ProjectTemplatesApi* | [**createProjectWithCustomTemplate**](docs/ProjectTemplatesApi.md#createprojectwithcustomtemplate) | **POST** /rest/api/3/project-template | Create custom project
*ProjectTemplatesApi* | [**editTemplate**](docs/ProjectTemplatesApi.md#edittemplateoperation) | **PUT** /rest/api/3/project-template/edit-template | Edit a custom project template
*ProjectTemplatesApi* | [**liveTemplate**](docs/ProjectTemplatesApi.md#livetemplate) | **GET** /rest/api/3/project-template/live-template | Gets a custom project template
*ProjectTemplatesApi* | [**removeTemplate**](docs/ProjectTemplatesApi.md#removetemplate) | **DELETE** /rest/api/3/project-template/remove-template | Deletes a custom project template
*ProjectTemplatesApi* | [**saveTemplate**](docs/ProjectTemplatesApi.md#savetemplateoperation) | **POST** /rest/api/3/project-template/save-template | Save a custom project template
*ProjectTypesApi* | [**getAccessibleProjectTypeByKey**](docs/ProjectTypesApi.md#getaccessibleprojecttypebykey) | **GET** /rest/api/3/project/type/{projectTypeKey}/accessible | Get accessible project type by key
*ProjectTypesApi* | [**getAllAccessibleProjectTypes**](docs/ProjectTypesApi.md#getallaccessibleprojecttypes) | **GET** /rest/api/3/project/type/accessible | Get licensed project types
*ProjectTypesApi* | [**getAllProjectTypes**](docs/ProjectTypesApi.md#getallprojecttypes) | **GET** /rest/api/3/project/type | Get all project types
*ProjectTypesApi* | [**getProjectTypeByKey**](docs/ProjectTypesApi.md#getprojecttypebykey) | **GET** /rest/api/3/project/type/{projectTypeKey} | Get project type by key
*ProjectVersionsApi* | [**createRelatedWork**](docs/ProjectVersionsApi.md#createrelatedwork) | **POST** /rest/api/3/version/{id}/relatedwork | Create related work
*ProjectVersionsApi* | [**createVersion**](docs/ProjectVersionsApi.md#createversion) | **POST** /rest/api/3/version | Create version
*ProjectVersionsApi* | [**deleteAndReplaceVersion**](docs/ProjectVersionsApi.md#deleteandreplaceversion) | **POST** /rest/api/3/version/{id}/removeAndSwap | Delete and replace version
*ProjectVersionsApi* | [**deleteRelatedWork**](docs/ProjectVersionsApi.md#deleterelatedwork) | **DELETE** /rest/api/3/version/{versionId}/relatedwork/{relatedWorkId} | Delete related work
*ProjectVersionsApi* | [**deleteVersion**](docs/ProjectVersionsApi.md#deleteversion) | **DELETE** /rest/api/3/version/{id} | Delete version
*ProjectVersionsApi* | [**getProjectVersions**](docs/ProjectVersionsApi.md#getprojectversions) | **GET** /rest/api/3/project/{projectIdOrKey}/versions | Get project versions
*ProjectVersionsApi* | [**getProjectVersionsPaginated**](docs/ProjectVersionsApi.md#getprojectversionspaginated) | **GET** /rest/api/3/project/{projectIdOrKey}/version | Get project versions paginated
*ProjectVersionsApi* | [**getRelatedWork**](docs/ProjectVersionsApi.md#getrelatedwork) | **GET** /rest/api/3/version/{id}/relatedwork | Get related work
*ProjectVersionsApi* | [**getVersion**](docs/ProjectVersionsApi.md#getversion) | **GET** /rest/api/3/version/{id} | Get version
*ProjectVersionsApi* | [**getVersionRelatedIssues**](docs/ProjectVersionsApi.md#getversionrelatedissues) | **GET** /rest/api/3/version/{id}/relatedIssueCounts | Get version\&#39;s related issues count
*ProjectVersionsApi* | [**getVersionUnresolvedIssues**](docs/ProjectVersionsApi.md#getversionunresolvedissues) | **GET** /rest/api/3/version/{id}/unresolvedIssueCount | Get version\&#39;s unresolved issues count
*ProjectVersionsApi* | [**mergeVersions**](docs/ProjectVersionsApi.md#mergeversions) | **PUT** /rest/api/3/version/{id}/mergeto/{moveIssuesTo} | Merge versions
*ProjectVersionsApi* | [**moveVersion**](docs/ProjectVersionsApi.md#moveversion) | **POST** /rest/api/3/version/{id}/move | Move version
*ProjectVersionsApi* | [**updateRelatedWork**](docs/ProjectVersionsApi.md#updaterelatedwork) | **PUT** /rest/api/3/version/{id}/relatedwork | Update related work
*ProjectVersionsApi* | [**updateVersion**](docs/ProjectVersionsApi.md#updateversion) | **PUT** /rest/api/3/version/{id} | Update version
*ProjectsApi* | [**archiveProject**](docs/ProjectsApi.md#archiveproject) | **POST** /rest/api/3/project/{projectIdOrKey}/archive | Archive project
*ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createproject) | **POST** /rest/api/3/project | Create project
*ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteproject) | **DELETE** /rest/api/3/project/{projectIdOrKey} | Delete project
*ProjectsApi* | [**deleteProjectAsynchronously**](docs/ProjectsApi.md#deleteprojectasynchronously) | **POST** /rest/api/3/project/{projectIdOrKey}/delete | Delete project asynchronously
*ProjectsApi* | [**getAllProjects**](docs/ProjectsApi.md#getallprojects) | **GET** /rest/api/3/project | Get all projects
*ProjectsApi* | [**getAllStatuses**](docs/ProjectsApi.md#getallstatuses) | **GET** /rest/api/3/project/{projectIdOrKey}/statuses | Get all statuses for project
*ProjectsApi* | [**getHierarchy**](docs/ProjectsApi.md#gethierarchy) | **GET** /rest/api/3/project/{projectId}/hierarchy | Get project issue type hierarchy
*ProjectsApi* | [**getNotificationSchemeForProject**](docs/ProjectsApi.md#getnotificationschemeforproject) | **GET** /rest/api/3/project/{projectKeyOrId}/notificationscheme | Get project notification scheme
*ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getproject) | **GET** /rest/api/3/project/{projectIdOrKey} | Get project
*ProjectsApi* | [**getRecent**](docs/ProjectsApi.md#getrecent) | **GET** /rest/api/3/project/recent | Get recent projects
*ProjectsApi* | [**restore**](docs/ProjectsApi.md#restore) | **POST** /rest/api/3/project/{projectIdOrKey}/restore | Restore deleted or archived project
*ProjectsApi* | [**searchProjects**](docs/ProjectsApi.md#searchprojects) | **GET** /rest/api/3/project/search | Get projects paginated
*ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateproject) | **PUT** /rest/api/3/project/{projectIdOrKey} | Update project
*ScreenSchemesApi* | [**createScreenScheme**](docs/ScreenSchemesApi.md#createscreenscheme) | **POST** /rest/api/3/screenscheme | Create screen scheme
*ScreenSchemesApi* | [**deleteScreenScheme**](docs/ScreenSchemesApi.md#deletescreenscheme) | **DELETE** /rest/api/3/screenscheme/{screenSchemeId} | Delete screen scheme
*ScreenSchemesApi* | [**getScreenSchemes**](docs/ScreenSchemesApi.md#getscreenschemes) | **GET** /rest/api/3/screenscheme | Get screen schemes
*ScreenSchemesApi* | [**updateScreenScheme**](docs/ScreenSchemesApi.md#updatescreenscheme) | **PUT** /rest/api/3/screenscheme/{screenSchemeId} | Update screen scheme
*ScreenTabFieldsApi* | [**addScreenTabField**](docs/ScreenTabFieldsApi.md#addscreentabfield) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields | Add screen tab field
*ScreenTabFieldsApi* | [**getAllScreenTabFields**](docs/ScreenTabFieldsApi.md#getallscreentabfields) | **GET** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields | Get all screen tab fields
*ScreenTabFieldsApi* | [**moveScreenTabField**](docs/ScreenTabFieldsApi.md#movescreentabfield) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move | Move screen tab field
*ScreenTabFieldsApi* | [**removeScreenTabField**](docs/ScreenTabFieldsApi.md#removescreentabfield) | **DELETE** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id} | Remove screen tab field
*ScreenTabsApi* | [**addScreenTab**](docs/ScreenTabsApi.md#addscreentab) | **POST** /rest/api/3/screens/{screenId}/tabs | Create screen tab
*ScreenTabsApi* | [**deleteScreenTab**](docs/ScreenTabsApi.md#deletescreentab) | **DELETE** /rest/api/3/screens/{screenId}/tabs/{tabId} | Delete screen tab
*ScreenTabsApi* | [**getAllScreenTabs**](docs/ScreenTabsApi.md#getallscreentabs) | **GET** /rest/api/3/screens/{screenId}/tabs | Get all screen tabs
*ScreenTabsApi* | [**getBulkScreenTabs**](docs/ScreenTabsApi.md#getbulkscreentabs) | **GET** /rest/api/3/screens/tabs | Get bulk screen tabs
*ScreenTabsApi* | [**moveScreenTab**](docs/ScreenTabsApi.md#movescreentab) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos} | Move screen tab
*ScreenTabsApi* | [**renameScreenTab**](docs/ScreenTabsApi.md#renamescreentab) | **PUT** /rest/api/3/screens/{screenId}/tabs/{tabId} | Update screen tab
*ScreensApi* | [**addFieldToDefaultScreen**](docs/ScreensApi.md#addfieldtodefaultscreen) | **POST** /rest/api/3/screens/addToDefault/{fieldId} | Add field to default screen
*ScreensApi* | [**createScreen**](docs/ScreensApi.md#createscreen) | **POST** /rest/api/3/screens | Create screen
*ScreensApi* | [**deleteScreen**](docs/ScreensApi.md#deletescreen) | **DELETE** /rest/api/3/screens/{screenId} | Delete screen
*ScreensApi* | [**getAvailableScreenFields**](docs/ScreensApi.md#getavailablescreenfields) | **GET** /rest/api/3/screens/{screenId}/availableFields | Get available screen fields
*ScreensApi* | [**getScreens**](docs/ScreensApi.md#getscreens) | **GET** /rest/api/3/screens | Get screens
*ScreensApi* | [**getScreensForField**](docs/ScreensApi.md#getscreensforfield) | **GET** /rest/api/3/field/{fieldId}/screens | Get screens for a field
*ScreensApi* | [**updateScreen**](docs/ScreensApi.md#updatescreen) | **PUT** /rest/api/3/screens/{screenId} | Update screen
*ServerInfoApi* | [**getServerInfo**](docs/ServerInfoApi.md#getserverinfo) | **GET** /rest/api/3/serverInfo | Get Jira instance info
*ServiceRegistryApi* | [**serviceRegistryResourceServicesGet**](docs/ServiceRegistryApi.md#serviceregistryresourceservicesget) | **GET** /rest/atlassian-connect/1/service-registry | Retrieve the attributes of service registries
*StatusApi* | [**createStatuses**](docs/StatusApi.md#createstatuses) | **POST** /rest/api/3/statuses | Bulk create statuses
*StatusApi* | [**deleteStatusesById**](docs/StatusApi.md#deletestatusesbyid) | **DELETE** /rest/api/3/statuses | Bulk delete Statuses
*StatusApi* | [**getProjectIssueTypeUsagesForStatus**](docs/StatusApi.md#getprojectissuetypeusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/project/{projectId}/issueTypeUsages | Get issue type usages by status and project
*StatusApi* | [**getProjectUsagesForStatus**](docs/StatusApi.md#getprojectusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/projectUsages | Get project usages by status
*StatusApi* | [**getStatusesById**](docs/StatusApi.md#getstatusesbyid) | **GET** /rest/api/3/statuses | Bulk get statuses
*StatusApi* | [**getStatusesByName**](docs/StatusApi.md#getstatusesbyname) | **GET** /rest/api/3/statuses/byNames | Bulk get statuses by name
*StatusApi* | [**getWorkflowUsagesForStatus**](docs/StatusApi.md#getworkflowusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/workflowUsages | Get workflow usages by status
*StatusApi* | [**search**](docs/StatusApi.md#search) | **GET** /rest/api/3/statuses/search | Search statuses paginated
*StatusApi* | [**updateStatuses**](docs/StatusApi.md#updatestatuses) | **PUT** /rest/api/3/statuses | Bulk update statuses
*TasksApi* | [**cancelTask**](docs/TasksApi.md#canceltask) | **POST** /rest/api/3/task/{taskId}/cancel | Cancel task
*TasksApi* | [**getTask**](docs/TasksApi.md#gettask) | **GET** /rest/api/3/task/{taskId} | Get task
*TeamsInPlanApi* | [**addAtlassianTeam**](docs/TeamsInPlanApi.md#addatlassianteamoperation) | **POST** /rest/api/3/plans/plan/{planId}/team/atlassian | Add Atlassian team to plan
*TeamsInPlanApi* | [**createPlanOnlyTeam**](docs/TeamsInPlanApi.md#createplanonlyteamoperation) | **POST** /rest/api/3/plans/plan/{planId}/team/planonly | Create plan-only team
*TeamsInPlanApi* | [**deletePlanOnlyTeam**](docs/TeamsInPlanApi.md#deleteplanonlyteam) | **DELETE** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Delete plan-only team
*TeamsInPlanApi* | [**getAtlassianTeam**](docs/TeamsInPlanApi.md#getatlassianteam) | **GET** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Get Atlassian team in plan
*TeamsInPlanApi* | [**getPlanOnlyTeam**](docs/TeamsInPlanApi.md#getplanonlyteam) | **GET** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Get plan-only team
*TeamsInPlanApi* | [**getTeams**](docs/TeamsInPlanApi.md#getteams) | **GET** /rest/api/3/plans/plan/{planId}/team | Get teams in plan paginated
*TeamsInPlanApi* | [**removeAtlassianTeam**](docs/TeamsInPlanApi.md#removeatlassianteam) | **DELETE** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Remove Atlassian team from plan
*TeamsInPlanApi* | [**updateAtlassianTeam**](docs/TeamsInPlanApi.md#updateatlassianteam) | **PUT** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Update Atlassian team in plan
*TeamsInPlanApi* | [**updatePlanOnlyTeam**](docs/TeamsInPlanApi.md#updateplanonlyteam) | **PUT** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Update plan-only team
*TimeTrackingApi* | [**getAvailableTimeTrackingImplementations**](docs/TimeTrackingApi.md#getavailabletimetrackingimplementations) | **GET** /rest/api/3/configuration/timetracking/list | Get all time tracking providers
*TimeTrackingApi* | [**getSelectedTimeTrackingImplementation**](docs/TimeTrackingApi.md#getselectedtimetrackingimplementation) | **GET** /rest/api/3/configuration/timetracking | Get selected time tracking provider
*TimeTrackingApi* | [**getSharedTimeTrackingConfiguration**](docs/TimeTrackingApi.md#getsharedtimetrackingconfiguration) | **GET** /rest/api/3/configuration/timetracking/options | Get time tracking settings
*TimeTrackingApi* | [**selectTimeTrackingImplementation**](docs/TimeTrackingApi.md#selecttimetrackingimplementation) | **PUT** /rest/api/3/configuration/timetracking | Select time tracking provider
*TimeTrackingApi* | [**setSharedTimeTrackingConfiguration**](docs/TimeTrackingApi.md#setsharedtimetrackingconfiguration) | **PUT** /rest/api/3/configuration/timetracking/options | Set time tracking settings
*UIModificationsAppsApi* | [**createUiModification**](docs/UIModificationsAppsApi.md#createuimodification) | **POST** /rest/api/3/uiModifications | Create UI modification
*UIModificationsAppsApi* | [**deleteUiModification**](docs/UIModificationsAppsApi.md#deleteuimodification) | **DELETE** /rest/api/3/uiModifications/{uiModificationId} | Delete UI modification
*UIModificationsAppsApi* | [**getUiModifications**](docs/UIModificationsAppsApi.md#getuimodifications) | **GET** /rest/api/3/uiModifications | Get UI modifications
*UIModificationsAppsApi* | [**updateUiModification**](docs/UIModificationsAppsApi.md#updateuimodification) | **PUT** /rest/api/3/uiModifications/{uiModificationId} | Update UI modification
*UserPropertiesApi* | [**deleteUserProperty**](docs/UserPropertiesApi.md#deleteuserproperty) | **DELETE** /rest/api/3/user/properties/{propertyKey} | Delete user property
*UserPropertiesApi* | [**getUserProperty**](docs/UserPropertiesApi.md#getuserproperty) | **GET** /rest/api/3/user/properties/{propertyKey} | Get user property
*UserPropertiesApi* | [**getUserPropertyKeys**](docs/UserPropertiesApi.md#getuserpropertykeys) | **GET** /rest/api/3/user/properties | Get user property keys
*UserPropertiesApi* | [**setUserProperty**](docs/UserPropertiesApi.md#setuserproperty) | **PUT** /rest/api/3/user/properties/{propertyKey} | Set user property
*UserSearchApi* | [**findAssignableUsers**](docs/UserSearchApi.md#findassignableusers) | **GET** /rest/api/3/user/assignable/search | Find users assignable to issues
*UserSearchApi* | [**findBulkAssignableUsers**](docs/UserSearchApi.md#findbulkassignableusers) | **GET** /rest/api/3/user/assignable/multiProjectSearch | Find users assignable to projects
*UserSearchApi* | [**findUserKeysByQuery**](docs/UserSearchApi.md#finduserkeysbyquery) | **GET** /rest/api/3/user/search/query/key | Find user keys by query
*UserSearchApi* | [**findUsers**](docs/UserSearchApi.md#findusers) | **GET** /rest/api/3/user/search | Find users
*UserSearchApi* | [**findUsersByQuery**](docs/UserSearchApi.md#findusersbyquery) | **GET** /rest/api/3/user/search/query | Find users by query
*UserSearchApi* | [**findUsersForPicker**](docs/UserSearchApi.md#findusersforpicker) | **GET** /rest/api/3/user/picker | Find users for picker
*UserSearchApi* | [**findUsersWithAllPermissions**](docs/UserSearchApi.md#finduserswithallpermissions) | **GET** /rest/api/3/user/permission/search | Find users with permissions
*UserSearchApi* | [**findUsersWithBrowsePermission**](docs/UserSearchApi.md#finduserswithbrowsepermission) | **GET** /rest/api/3/user/viewissue/search | Find users with browse permission
*UsersApi* | [**bulkGetUsers**](docs/UsersApi.md#bulkgetusers) | **GET** /rest/api/3/user/bulk | Bulk get users
*UsersApi* | [**bulkGetUsersMigration**](docs/UsersApi.md#bulkgetusersmigration) | **GET** /rest/api/3/user/bulk/migration | Get account IDs for users
*UsersApi* | [**createUser**](docs/UsersApi.md#createuser) | **POST** /rest/api/3/user | Create user
*UsersApi* | [**getAllUsers**](docs/UsersApi.md#getallusers) | **GET** /rest/api/3/users/search | Get all users
*UsersApi* | [**getAllUsersDefault**](docs/UsersApi.md#getallusersdefault) | **GET** /rest/api/3/users | Get all users default
*UsersApi* | [**getUser**](docs/UsersApi.md#getuser) | **GET** /rest/api/3/user | Get user
*UsersApi* | [**getUserDefaultColumns**](docs/UsersApi.md#getuserdefaultcolumns) | **GET** /rest/api/3/user/columns | Get user default columns
*UsersApi* | [**getUserEmail**](docs/UsersApi.md#getuseremail) | **GET** /rest/api/3/user/email | Get user email
*UsersApi* | [**getUserEmailBulk**](docs/UsersApi.md#getuseremailbulk) | **GET** /rest/api/3/user/email/bulk | Get user email bulk
*UsersApi* | [**getUserGroups**](docs/UsersApi.md#getusergroups) | **GET** /rest/api/3/user/groups | Get user groups
*UsersApi* | [**removeUser**](docs/UsersApi.md#removeuser) | **DELETE** /rest/api/3/user | Delete user
*UsersApi* | [**resetUserColumns**](docs/UsersApi.md#resetusercolumns) | **DELETE** /rest/api/3/user/columns | Reset user default columns
*UsersApi* | [**setUserColumns**](docs/UsersApi.md#setusercolumns) | **PUT** /rest/api/3/user/columns | Set user default columns
*WebhooksApi* | [**deleteWebhookById**](docs/WebhooksApi.md#deletewebhookbyid) | **DELETE** /rest/api/3/webhook | Delete webhooks by ID
*WebhooksApi* | [**getDynamicWebhooksForApp**](docs/WebhooksApi.md#getdynamicwebhooksforapp) | **GET** /rest/api/3/webhook | Get dynamic webhooks for app
*WebhooksApi* | [**getFailedWebhooks**](docs/WebhooksApi.md#getfailedwebhooks) | **GET** /rest/api/3/webhook/failed | Get failed webhooks
*WebhooksApi* | [**refreshWebhooks**](docs/WebhooksApi.md#refreshwebhooks) | **PUT** /rest/api/3/webhook/refresh | Extend webhook life
*WebhooksApi* | [**registerDynamicWebhooks**](docs/WebhooksApi.md#registerdynamicwebhooks) | **POST** /rest/api/3/webhook | Register dynamic webhooks
*WorkflowSchemeDraftsApi* | [**createWorkflowSchemeDraftFromParent**](docs/WorkflowSchemeDraftsApi.md#createworkflowschemedraftfromparent) | **POST** /rest/api/3/workflowscheme/{id}/createdraft | Create draft workflow scheme
*WorkflowSchemeDraftsApi* | [**deleteDraftDefaultWorkflow**](docs/WorkflowSchemeDraftsApi.md#deletedraftdefaultworkflow) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/default | Delete draft default workflow
*WorkflowSchemeDraftsApi* | [**deleteDraftWorkflowMapping**](docs/WorkflowSchemeDraftsApi.md#deletedraftworkflowmapping) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/workflow | Delete issue types for workflow in draft workflow scheme
*WorkflowSchemeDraftsApi* | [**deleteWorkflowSchemeDraft**](docs/WorkflowSchemeDraftsApi.md#deleteworkflowschemedraft) | **DELETE** /rest/api/3/workflowscheme/{id}/draft | Delete draft workflow scheme
*WorkflowSchemeDraftsApi* | [**deleteWorkflowSchemeDraftIssueType**](docs/WorkflowSchemeDraftsApi.md#deleteworkflowschemedraftissuetype) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Delete workflow for issue type in draft workflow scheme
*WorkflowSchemeDraftsApi* | [**getDraftDefaultWorkflow**](docs/WorkflowSchemeDraftsApi.md#getdraftdefaultworkflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/default | Get draft default workflow
*WorkflowSchemeDraftsApi* | [**getDraftWorkflow**](docs/WorkflowSchemeDraftsApi.md#getdraftworkflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/workflow | Get issue types for workflows in draft workflow scheme
*WorkflowSchemeDraftsApi* | [**getWorkflowSchemeDraft**](docs/WorkflowSchemeDraftsApi.md#getworkflowschemedraft) | **GET** /rest/api/3/workflowscheme/{id}/draft | Get draft workflow scheme
*WorkflowSchemeDraftsApi* | [**getWorkflowSchemeDraftIssueType**](docs/WorkflowSchemeDraftsApi.md#getworkflowschemedraftissuetype) | **GET** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Get workflow for issue type in draft workflow scheme
*WorkflowSchemeDraftsApi* | [**publishDraftWorkflowScheme**](docs/WorkflowSchemeDraftsApi.md#publishdraftworkflowscheme) | **POST** /rest/api/3/workflowscheme/{id}/draft/publish | Publish draft workflow scheme
*WorkflowSchemeDraftsApi* | [**setWorkflowSchemeDraftIssueType**](docs/WorkflowSchemeDraftsApi.md#setworkflowschemedraftissuetype) | **PUT** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Set workflow for issue type in draft workflow scheme
*WorkflowSchemeDraftsApi* | [**updateDraftDefaultWorkflow**](docs/WorkflowSchemeDraftsApi.md#updatedraftdefaultworkflow) | **PUT** /rest/api/3/workflowscheme/{id}/draft/default | Update draft default workflow
*WorkflowSchemeDraftsApi* | [**updateDraftWorkflowMapping**](docs/WorkflowSchemeDraftsApi.md#updatedraftworkflowmapping) | **PUT** /rest/api/3/workflowscheme/{id}/draft/workflow | Set issue types for workflow in workflow scheme
*WorkflowSchemeDraftsApi* | [**updateWorkflowSchemeDraft**](docs/WorkflowSchemeDraftsApi.md#updateworkflowschemedraft) | **PUT** /rest/api/3/workflowscheme/{id}/draft | Update draft workflow scheme
*WorkflowSchemeProjectAssociationsApi* | [**assignSchemeToProject**](docs/WorkflowSchemeProjectAssociationsApi.md#assignschemetoproject) | **PUT** /rest/api/3/workflowscheme/project | Assign workflow scheme to project
*WorkflowSchemeProjectAssociationsApi* | [**getWorkflowSchemeProjectAssociations**](docs/WorkflowSchemeProjectAssociationsApi.md#getworkflowschemeprojectassociations) | **GET** /rest/api/3/workflowscheme/project | Get workflow scheme project associations
*WorkflowSchemesApi* | [**createWorkflowScheme**](docs/WorkflowSchemesApi.md#createworkflowscheme) | **POST** /rest/api/3/workflowscheme | Create workflow scheme
*WorkflowSchemesApi* | [**deleteDefaultWorkflow**](docs/WorkflowSchemesApi.md#deletedefaultworkflow) | **DELETE** /rest/api/3/workflowscheme/{id}/default | Delete default workflow
*WorkflowSchemesApi* | [**deleteWorkflowMapping**](docs/WorkflowSchemesApi.md#deleteworkflowmapping) | **DELETE** /rest/api/3/workflowscheme/{id}/workflow | Delete issue types for workflow in workflow scheme
*WorkflowSchemesApi* | [**deleteWorkflowScheme**](docs/WorkflowSchemesApi.md#deleteworkflowscheme) | **DELETE** /rest/api/3/workflowscheme/{id} | Delete workflow scheme
*WorkflowSchemesApi* | [**deleteWorkflowSchemeIssueType**](docs/WorkflowSchemesApi.md#deleteworkflowschemeissuetype) | **DELETE** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Delete workflow for issue type in workflow scheme
*WorkflowSchemesApi* | [**getAllWorkflowSchemes**](docs/WorkflowSchemesApi.md#getallworkflowschemes) | **GET** /rest/api/3/workflowscheme | Get all workflow schemes
*WorkflowSchemesApi* | [**getDefaultWorkflow**](docs/WorkflowSchemesApi.md#getdefaultworkflow) | **GET** /rest/api/3/workflowscheme/{id}/default | Get default workflow
*WorkflowSchemesApi* | [**getProjectUsagesForWorkflowScheme**](docs/WorkflowSchemesApi.md#getprojectusagesforworkflowscheme) | **GET** /rest/api/3/workflowscheme/{workflowSchemeId}/projectUsages | Get projects which are using a given workflow scheme
*WorkflowSchemesApi* | [**getRequiredWorkflowSchemeMappings**](docs/WorkflowSchemesApi.md#getrequiredworkflowschememappings) | **POST** /rest/api/3/workflowscheme/update/mappings | Get required status mappings for workflow scheme update
*WorkflowSchemesApi* | [**getWorkflow**](docs/WorkflowSchemesApi.md#getworkflow) | **GET** /rest/api/3/workflowscheme/{id}/workflow | Get issue types for workflows in workflow scheme
*WorkflowSchemesApi* | [**getWorkflowScheme**](docs/WorkflowSchemesApi.md#getworkflowscheme) | **GET** /rest/api/3/workflowscheme/{id} | Get workflow scheme
*WorkflowSchemesApi* | [**getWorkflowSchemeIssueType**](docs/WorkflowSchemesApi.md#getworkflowschemeissuetype) | **GET** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Get workflow for issue type in workflow scheme
*WorkflowSchemesApi* | [**readWorkflowSchemes**](docs/WorkflowSchemesApi.md#readworkflowschemes) | **POST** /rest/api/3/workflowscheme/read | Bulk get workflow schemes
*WorkflowSchemesApi* | [**setWorkflowSchemeIssueType**](docs/WorkflowSchemesApi.md#setworkflowschemeissuetype) | **PUT** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Set workflow for issue type in workflow scheme
*WorkflowSchemesApi* | [**switchWorkflowSchemeForProject**](docs/WorkflowSchemesApi.md#switchworkflowschemeforproject) | **POST** /rest/api/3/workflowscheme/project/switch | Switch workflow scheme for project
*WorkflowSchemesApi* | [**updateDefaultWorkflow**](docs/WorkflowSchemesApi.md#updatedefaultworkflow) | **PUT** /rest/api/3/workflowscheme/{id}/default | Update default workflow
*WorkflowSchemesApi* | [**updateSchemes**](docs/WorkflowSchemesApi.md#updateschemes) | **POST** /rest/api/3/workflowscheme/update | Update workflow scheme
*WorkflowSchemesApi* | [**updateWorkflowMapping**](docs/WorkflowSchemesApi.md#updateworkflowmapping) | **PUT** /rest/api/3/workflowscheme/{id}/workflow | Set issue types for workflow in workflow scheme
*WorkflowSchemesApi* | [**updateWorkflowScheme**](docs/WorkflowSchemesApi.md#updateworkflowscheme) | **PUT** /rest/api/3/workflowscheme/{id} | Classic update workflow scheme
*WorkflowStatusCategoriesApi* | [**getStatusCategories**](docs/WorkflowStatusCategoriesApi.md#getstatuscategories) | **GET** /rest/api/3/statuscategory | Get all status categories
*WorkflowStatusCategoriesApi* | [**getStatusCategory**](docs/WorkflowStatusCategoriesApi.md#getstatuscategory) | **GET** /rest/api/3/statuscategory/{idOrKey} | Get status category
*WorkflowStatusesApi* | [**getStatus**](docs/WorkflowStatusesApi.md#getstatus) | **GET** /rest/api/3/status/{idOrName} | Get status
*WorkflowStatusesApi* | [**getStatuses**](docs/WorkflowStatusesApi.md#getstatuses) | **GET** /rest/api/3/status | Get all statuses
*WorkflowTransitionPropertiesApi* | [**createWorkflowTransitionProperty**](docs/WorkflowTransitionPropertiesApi.md#createworkflowtransitionproperty) | **POST** /rest/api/3/workflow/transitions/{transitionId}/properties | Create workflow transition property
*WorkflowTransitionPropertiesApi* | [**deleteWorkflowTransitionProperty**](docs/WorkflowTransitionPropertiesApi.md#deleteworkflowtransitionproperty) | **DELETE** /rest/api/3/workflow/transitions/{transitionId}/properties | Delete workflow transition property
*WorkflowTransitionPropertiesApi* | [**getWorkflowTransitionProperties**](docs/WorkflowTransitionPropertiesApi.md#getworkflowtransitionproperties) | **GET** /rest/api/3/workflow/transitions/{transitionId}/properties | Get workflow transition properties
*WorkflowTransitionPropertiesApi* | [**updateWorkflowTransitionProperty**](docs/WorkflowTransitionPropertiesApi.md#updateworkflowtransitionproperty) | **PUT** /rest/api/3/workflow/transitions/{transitionId}/properties | Update workflow transition property
*WorkflowTransitionRulesApi* | [**deleteWorkflowTransitionRuleConfigurations**](docs/WorkflowTransitionRulesApi.md#deleteworkflowtransitionruleconfigurations) | **PUT** /rest/api/3/workflow/rule/config/delete | Delete workflow transition rule configurations
*WorkflowTransitionRulesApi* | [**getWorkflowTransitionRuleConfigurations**](docs/WorkflowTransitionRulesApi.md#getworkflowtransitionruleconfigurations) | **GET** /rest/api/3/workflow/rule/config | Get workflow transition rule configurations
*WorkflowTransitionRulesApi* | [**updateWorkflowTransitionRuleConfigurations**](docs/WorkflowTransitionRulesApi.md#updateworkflowtransitionruleconfigurations) | **PUT** /rest/api/3/workflow/rule/config | Update workflow transition rule configurations
*WorkflowsApi* | [**createWorkflow**](docs/WorkflowsApi.md#createworkflow) | **POST** /rest/api/3/workflow | Create workflow
*WorkflowsApi* | [**createWorkflows**](docs/WorkflowsApi.md#createworkflows) | **POST** /rest/api/3/workflows/create | Bulk create workflows
*WorkflowsApi* | [**deleteInactiveWorkflow**](docs/WorkflowsApi.md#deleteinactiveworkflow) | **DELETE** /rest/api/3/workflow/{entityId} | Delete inactive workflow
*WorkflowsApi* | [**getAllWorkflows**](docs/WorkflowsApi.md#getallworkflows) | **GET** /rest/api/3/workflow | Get all workflows
*WorkflowsApi* | [**getDefaultEditor**](docs/WorkflowsApi.md#getdefaulteditor) | **GET** /rest/api/3/workflows/defaultEditor | Get the user\&#39;s default workflow editor
*WorkflowsApi* | [**getProjectUsagesForWorkflow**](docs/WorkflowsApi.md#getprojectusagesforworkflow) | **GET** /rest/api/3/workflow/{workflowId}/projectUsages | Get projects using a given workflow
*WorkflowsApi* | [**getWorkflowProjectIssueTypeUsages**](docs/WorkflowsApi.md#getworkflowprojectissuetypeusages) | **GET** /rest/api/3/workflow/{workflowId}/project/{projectId}/issueTypeUsages | Get issue types in a project that are using a given workflow
*WorkflowsApi* | [**getWorkflowSchemeUsagesForWorkflow**](docs/WorkflowsApi.md#getworkflowschemeusagesforworkflow) | **GET** /rest/api/3/workflow/{workflowId}/workflowSchemes | Get workflow schemes which are using a given workflow
*WorkflowsApi* | [**getWorkflowsPaginated**](docs/WorkflowsApi.md#getworkflowspaginated) | **GET** /rest/api/3/workflow/search | Get workflows paginated
*WorkflowsApi* | [**listWorkflowHistory**](docs/WorkflowsApi.md#listworkflowhistory) | **POST** /rest/api/3/workflow/history/list | List workflow history entries
*WorkflowsApi* | [**readWorkflowFromHistory**](docs/WorkflowsApi.md#readworkflowfromhistory) | **POST** /rest/api/3/workflow/history | Read workflow version from history
*WorkflowsApi* | [**readWorkflowPreviews**](docs/WorkflowsApi.md#readworkflowpreviews) | **POST** /rest/api/3/workflows/preview | Preview workflow
*WorkflowsApi* | [**readWorkflows**](docs/WorkflowsApi.md#readworkflows) | **POST** /rest/api/3/workflows | Bulk get workflows
*WorkflowsApi* | [**searchWorkflows**](docs/WorkflowsApi.md#searchworkflows) | **GET** /rest/api/3/workflows/search | Search workflows
*WorkflowsApi* | [**updateWorkflows**](docs/WorkflowsApi.md#updateworkflows) | **POST** /rest/api/3/workflows/update | Bulk update workflows
*WorkflowsApi* | [**validateCreateWorkflows**](docs/WorkflowsApi.md#validatecreateworkflows) | **POST** /rest/api/3/workflows/create/validation | Validate create workflows
*WorkflowsApi* | [**validateUpdateWorkflows**](docs/WorkflowsApi.md#validateupdateworkflows) | **POST** /rest/api/3/workflows/update/validation | Validate update workflows
*WorkflowsApi* | [**workflowCapabilities**](docs/WorkflowsApi.md#workflowcapabilities) | **GET** /rest/api/3/workflows/capabilities | Get available workflow capabilities


### Models

- [ActorInputBean](docs/ActorInputBean.md)
- [ActorsMap](docs/ActorsMap.md)
- [AddAtlassianTeamRequest](docs/AddAtlassianTeamRequest.md)
- [AddFieldBean](docs/AddFieldBean.md)
- [AddGroupBean](docs/AddGroupBean.md)
- [AddNotificationsDetails](docs/AddNotificationsDetails.md)
- [AddSecuritySchemeLevelsRequestBean](docs/AddSecuritySchemeLevelsRequestBean.md)
- [AnnouncementBannerConfiguration](docs/AnnouncementBannerConfiguration.md)
- [AnnouncementBannerConfigurationUpdate](docs/AnnouncementBannerConfigurationUpdate.md)
- [AppWorkflowTransitionRule](docs/AppWorkflowTransitionRule.md)
- [Application](docs/Application.md)
- [ApplicationProperty](docs/ApplicationProperty.md)
- [ApplicationRole](docs/ApplicationRole.md)
- [ApprovalConfiguration](docs/ApprovalConfiguration.md)
- [ApprovalConfigurationPreview](docs/ApprovalConfigurationPreview.md)
- [ArchiveIssueAsyncRequest](docs/ArchiveIssueAsyncRequest.md)
- [ArchivedIssuesFilterRequest](docs/ArchivedIssuesFilterRequest.md)
- [AssociateFieldConfigurationsWithIssueTypesRequest](docs/AssociateFieldConfigurationsWithIssueTypesRequest.md)
- [AssociateSecuritySchemeWithProjectDetails](docs/AssociateSecuritySchemeWithProjectDetails.md)
- [AssociatedItemBean](docs/AssociatedItemBean.md)
- [AssociationContextObject](docs/AssociationContextObject.md)
- [Attachment](docs/Attachment.md)
- [AttachmentArchive](docs/AttachmentArchive.md)
- [AttachmentArchiveEntry](docs/AttachmentArchiveEntry.md)
- [AttachmentArchiveImpl](docs/AttachmentArchiveImpl.md)
- [AttachmentArchiveItemReadable](docs/AttachmentArchiveItemReadable.md)
- [AttachmentArchiveMetadataReadable](docs/AttachmentArchiveMetadataReadable.md)
- [AttachmentMetadata](docs/AttachmentMetadata.md)
- [AttachmentSettings](docs/AttachmentSettings.md)
- [AuditRecordBean](docs/AuditRecordBean.md)
- [AuditRecords](docs/AuditRecords.md)
- [AutoCompleteSuggestion](docs/AutoCompleteSuggestion.md)
- [AutoCompleteSuggestions](docs/AutoCompleteSuggestions.md)
- [AvailableDashboardGadget](docs/AvailableDashboardGadget.md)
- [AvailableDashboardGadgetsResponse](docs/AvailableDashboardGadgetsResponse.md)
- [AvailableWorkflowConnectRule](docs/AvailableWorkflowConnectRule.md)
- [AvailableWorkflowForgeRule](docs/AvailableWorkflowForgeRule.md)
- [AvailableWorkflowSystemRule](docs/AvailableWorkflowSystemRule.md)
- [AvailableWorkflowTriggerTypes](docs/AvailableWorkflowTriggerTypes.md)
- [AvailableWorkflowTriggers](docs/AvailableWorkflowTriggers.md)
- [Avatar](docs/Avatar.md)
- [AvatarUrlsBean](docs/AvatarUrlsBean.md)
- [Avatars](docs/Avatars.md)
- [BoardColumnPayload](docs/BoardColumnPayload.md)
- [BoardFeaturePayload](docs/BoardFeaturePayload.md)
- [BoardPayload](docs/BoardPayload.md)
- [BoardsPayload](docs/BoardsPayload.md)
- [BulkChangeOwnerDetails](docs/BulkChangeOwnerDetails.md)
- [BulkChangelogRequestBean](docs/BulkChangelogRequestBean.md)
- [BulkChangelogResponseBean](docs/BulkChangelogResponseBean.md)
- [BulkContextualConfiguration](docs/BulkContextualConfiguration.md)
- [BulkCustomFieldOptionCreateRequest](docs/BulkCustomFieldOptionCreateRequest.md)
- [BulkCustomFieldOptionUpdateRequest](docs/BulkCustomFieldOptionUpdateRequest.md)
- [BulkEditActionError](docs/BulkEditActionError.md)
- [BulkEditGetFields](docs/BulkEditGetFields.md)
- [BulkEditShareableEntityRequest](docs/BulkEditShareableEntityRequest.md)
- [BulkEditShareableEntityResponse](docs/BulkEditShareableEntityResponse.md)
- [BulkFetchIssueRequestBean](docs/BulkFetchIssueRequestBean.md)
- [BulkIssueIsWatching](docs/BulkIssueIsWatching.md)
- [BulkIssuePropertyUpdateRequest](docs/BulkIssuePropertyUpdateRequest.md)
- [BulkIssueResults](docs/BulkIssueResults.md)
- [BulkOperationErrorResponse](docs/BulkOperationErrorResponse.md)
- [BulkOperationErrorResult](docs/BulkOperationErrorResult.md)
- [BulkOperationProgress](docs/BulkOperationProgress.md)
- [BulkPermissionGrants](docs/BulkPermissionGrants.md)
- [BulkPermissionsRequestBean](docs/BulkPermissionsRequestBean.md)
- [BulkProjectPermissionGrants](docs/BulkProjectPermissionGrants.md)
- [BulkProjectPermissions](docs/BulkProjectPermissions.md)
- [BulkRedactionRequest](docs/BulkRedactionRequest.md)
- [BulkRedactionResponse](docs/BulkRedactionResponse.md)
- [BulkTransitionGetAvailableTransitions](docs/BulkTransitionGetAvailableTransitions.md)
- [BulkTransitionSubmitInput](docs/BulkTransitionSubmitInput.md)
- [BulkWorklogKeyRequestBean](docs/BulkWorklogKeyRequestBean.md)
- [BulkWorklogKeyResponseBean](docs/BulkWorklogKeyResponseBean.md)
- [CardLayout](docs/CardLayout.md)
- [CardLayoutField](docs/CardLayoutField.md)
- [ChangeDetails](docs/ChangeDetails.md)
- [ChangeFilterOwner](docs/ChangeFilterOwner.md)
- [ChangedValueBean](docs/ChangedValueBean.md)
- [ChangedWorklog](docs/ChangedWorklog.md)
- [ChangedWorklogs](docs/ChangedWorklogs.md)
- [Changelog](docs/Changelog.md)
- [ColumnItem](docs/ColumnItem.md)
- [ColumnRequestBody](docs/ColumnRequestBody.md)
- [Comment](docs/Comment.md)
- [ComponentIssuesCount](docs/ComponentIssuesCount.md)
- [ComponentJsonBean](docs/ComponentJsonBean.md)
- [ComponentWithIssueCount](docs/ComponentWithIssueCount.md)
- [CompoundClause](docs/CompoundClause.md)
- [ConditionGroupConfiguration](docs/ConditionGroupConfiguration.md)
- [ConditionGroupPayload](docs/ConditionGroupPayload.md)
- [ConditionGroupUpdate](docs/ConditionGroupUpdate.md)
- [ConfigurationsListParameters](docs/ConfigurationsListParameters.md)
- [ConnectCustomFieldValue](docs/ConnectCustomFieldValue.md)
- [ConnectCustomFieldValues](docs/ConnectCustomFieldValues.md)
- [ConnectModules](docs/ConnectModules.md)
- [ConnectWorkflowTransitionRule](docs/ConnectWorkflowTransitionRule.md)
- [ContainerForProjectFeatures](docs/ContainerForProjectFeatures.md)
- [ContainerForRegisteredWebhooks](docs/ContainerForRegisteredWebhooks.md)
- [ContainerForWebhookIDs](docs/ContainerForWebhookIDs.md)
- [ContainerOfWorkflowSchemeAssociations](docs/ContainerOfWorkflowSchemeAssociations.md)
- [ContentItem](docs/ContentItem.md)
- [Context](docs/Context.md)
- [ContextForProjectAndIssueType](docs/ContextForProjectAndIssueType.md)
- [ContextualConfiguration](docs/ContextualConfiguration.md)
- [ConvertedJQLQueries](docs/ConvertedJQLQueries.md)
- [CreateCrossProjectReleaseRequest](docs/CreateCrossProjectReleaseRequest.md)
- [CreateCustomFieldContext](docs/CreateCustomFieldContext.md)
- [CreateCustomFieldRequest](docs/CreateCustomFieldRequest.md)
- [CreateDateFieldRequest](docs/CreateDateFieldRequest.md)
- [CreateExclusionRulesRequest](docs/CreateExclusionRulesRequest.md)
- [CreateFieldAssociationSchemeLinksBean](docs/CreateFieldAssociationSchemeLinksBean.md)
- [CreateFieldAssociationSchemeRequest](docs/CreateFieldAssociationSchemeRequest.md)
- [CreateFieldAssociationSchemeResponse](docs/CreateFieldAssociationSchemeResponse.md)
- [CreateIssueSecuritySchemeDetails](docs/CreateIssueSecuritySchemeDetails.md)
- [CreateIssueSourceRequest](docs/CreateIssueSourceRequest.md)
- [CreateNotificationSchemeDetails](docs/CreateNotificationSchemeDetails.md)
- [CreatePermissionHolderRequest](docs/CreatePermissionHolderRequest.md)
- [CreatePermissionRequest](docs/CreatePermissionRequest.md)
- [CreatePlanOnlyTeamRequest](docs/CreatePlanOnlyTeamRequest.md)
- [CreatePlanRequest](docs/CreatePlanRequest.md)
- [CreatePriorityDetails](docs/CreatePriorityDetails.md)
- [CreatePrioritySchemeDetails](docs/CreatePrioritySchemeDetails.md)
- [CreateProjectDetails](docs/CreateProjectDetails.md)
- [CreateResolutionDetails](docs/CreateResolutionDetails.md)
- [CreateSchedulingRequest](docs/CreateSchedulingRequest.md)
- [CreateUiModificationDetails](docs/CreateUiModificationDetails.md)
- [CreateUpdateRoleRequestBean](docs/CreateUpdateRoleRequestBean.md)
- [CreateWorkflowCondition](docs/CreateWorkflowCondition.md)
- [CreateWorkflowDetails](docs/CreateWorkflowDetails.md)
- [CreateWorkflowStatusDetails](docs/CreateWorkflowStatusDetails.md)
- [CreateWorkflowTransitionDetails](docs/CreateWorkflowTransitionDetails.md)
- [CreateWorkflowTransitionRule](docs/CreateWorkflowTransitionRule.md)
- [CreateWorkflowTransitionRulesDetails](docs/CreateWorkflowTransitionRulesDetails.md)
- [CreateWorkflowTransitionScreenDetails](docs/CreateWorkflowTransitionScreenDetails.md)
- [CreatedIssue](docs/CreatedIssue.md)
- [CreatedIssues](docs/CreatedIssues.md)
- [CustomContextVariable](docs/CustomContextVariable.md)
- [CustomFieldConfigurations](docs/CustomFieldConfigurations.md)
- [CustomFieldContext](docs/CustomFieldContext.md)
- [CustomFieldContextDefaultValue](docs/CustomFieldContextDefaultValue.md)
- [CustomFieldContextDefaultValueCascadingOption](docs/CustomFieldContextDefaultValueCascadingOption.md)
- [CustomFieldContextDefaultValueDate](docs/CustomFieldContextDefaultValueDate.md)
- [CustomFieldContextDefaultValueDateTime](docs/CustomFieldContextDefaultValueDateTime.md)
- [CustomFieldContextDefaultValueFloat](docs/CustomFieldContextDefaultValueFloat.md)
- [CustomFieldContextDefaultValueForgeDateTimeField](docs/CustomFieldContextDefaultValueForgeDateTimeField.md)
- [CustomFieldContextDefaultValueForgeGroupField](docs/CustomFieldContextDefaultValueForgeGroupField.md)
- [CustomFieldContextDefaultValueForgeMultiGroupField](docs/CustomFieldContextDefaultValueForgeMultiGroupField.md)
- [CustomFieldContextDefaultValueForgeMultiStringField](docs/CustomFieldContextDefaultValueForgeMultiStringField.md)
- [CustomFieldContextDefaultValueForgeMultiUserField](docs/CustomFieldContextDefaultValueForgeMultiUserField.md)
- [CustomFieldContextDefaultValueForgeNumberField](docs/CustomFieldContextDefaultValueForgeNumberField.md)
- [CustomFieldContextDefaultValueForgeObjectField](docs/CustomFieldContextDefaultValueForgeObjectField.md)
- [CustomFieldContextDefaultValueForgeStringField](docs/CustomFieldContextDefaultValueForgeStringField.md)
- [CustomFieldContextDefaultValueForgeUserField](docs/CustomFieldContextDefaultValueForgeUserField.md)
- [CustomFieldContextDefaultValueLabels](docs/CustomFieldContextDefaultValueLabels.md)
- [CustomFieldContextDefaultValueMultiUserPicker](docs/CustomFieldContextDefaultValueMultiUserPicker.md)
- [CustomFieldContextDefaultValueMultipleGroupPicker](docs/CustomFieldContextDefaultValueMultipleGroupPicker.md)
- [CustomFieldContextDefaultValueMultipleOption](docs/CustomFieldContextDefaultValueMultipleOption.md)
- [CustomFieldContextDefaultValueMultipleVersionPicker](docs/CustomFieldContextDefaultValueMultipleVersionPicker.md)
- [CustomFieldContextDefaultValueProject](docs/CustomFieldContextDefaultValueProject.md)
- [CustomFieldContextDefaultValueReadOnly](docs/CustomFieldContextDefaultValueReadOnly.md)
- [CustomFieldContextDefaultValueSingleGroupPicker](docs/CustomFieldContextDefaultValueSingleGroupPicker.md)
- [CustomFieldContextDefaultValueSingleOption](docs/CustomFieldContextDefaultValueSingleOption.md)
- [CustomFieldContextDefaultValueSingleVersionPicker](docs/CustomFieldContextDefaultValueSingleVersionPicker.md)
- [CustomFieldContextDefaultValueTextArea](docs/CustomFieldContextDefaultValueTextArea.md)
- [CustomFieldContextDefaultValueTextField](docs/CustomFieldContextDefaultValueTextField.md)
- [CustomFieldContextDefaultValueURL](docs/CustomFieldContextDefaultValueURL.md)
- [CustomFieldContextDefaultValueUpdate](docs/CustomFieldContextDefaultValueUpdate.md)
- [CustomFieldContextOption](docs/CustomFieldContextOption.md)
- [CustomFieldContextProjectMapping](docs/CustomFieldContextProjectMapping.md)
- [CustomFieldContextSingleUserPickerDefaults](docs/CustomFieldContextSingleUserPickerDefaults.md)
- [CustomFieldContextUpdateDetails](docs/CustomFieldContextUpdateDetails.md)
- [CustomFieldCreatedContextOptionsList](docs/CustomFieldCreatedContextOptionsList.md)
- [CustomFieldDefinitionJsonBean](docs/CustomFieldDefinitionJsonBean.md)
- [CustomFieldOption](docs/CustomFieldOption.md)
- [CustomFieldOptionCreate](docs/CustomFieldOptionCreate.md)
- [CustomFieldOptionUpdate](docs/CustomFieldOptionUpdate.md)
- [CustomFieldPayload](docs/CustomFieldPayload.md)
- [CustomFieldReplacement](docs/CustomFieldReplacement.md)
- [CustomFieldUpdatedContextOptionsList](docs/CustomFieldUpdatedContextOptionsList.md)
- [CustomFieldValueUpdate](docs/CustomFieldValueUpdate.md)
- [CustomFieldValueUpdateDetails](docs/CustomFieldValueUpdateDetails.md)
- [CustomTemplateOptions](docs/CustomTemplateOptions.md)
- [CustomTemplateRequestDTO](docs/CustomTemplateRequestDTO.md)
- [CustomTemplatesProjectDetails](docs/CustomTemplatesProjectDetails.md)
- [Dashboard](docs/Dashboard.md)
- [DashboardDetails](docs/DashboardDetails.md)
- [DashboardGadget](docs/DashboardGadget.md)
- [DashboardGadgetPosition](docs/DashboardGadgetPosition.md)
- [DashboardGadgetResponse](docs/DashboardGadgetResponse.md)
- [DashboardGadgetSettings](docs/DashboardGadgetSettings.md)
- [DashboardGadgetUpdateRequest](docs/DashboardGadgetUpdateRequest.md)
- [DataClassificationLevelsBean](docs/DataClassificationLevelsBean.md)
- [DataClassificationTagBean](docs/DataClassificationTagBean.md)
- [DateRangeFilterRequest](docs/DateRangeFilterRequest.md)
- [DefaultLevelValue](docs/DefaultLevelValue.md)
- [DefaultShareScope](docs/DefaultShareScope.md)
- [DefaultWorkflow](docs/DefaultWorkflow.md)
- [DefaultWorkflowEditorResponse](docs/DefaultWorkflowEditorResponse.md)
- [DeleteAndReplaceVersionBean](docs/DeleteAndReplaceVersionBean.md)
- [DeleteFieldAssociationSchemeResponse](docs/DeleteFieldAssociationSchemeResponse.md)
- [DeprecatedWorkflow](docs/DeprecatedWorkflow.md)
- [DetailedErrorCollection](docs/DetailedErrorCollection.md)
- [DocumentVersion](docs/DocumentVersion.md)
- [DuplicatePlanRequest](docs/DuplicatePlanRequest.md)
- [EditTemplateRequest](docs/EditTemplateRequest.md)
- [EntityProperty](docs/EntityProperty.md)
- [EntityPropertyDetails](docs/EntityPropertyDetails.md)
- [ErrorCollection](docs/ErrorCollection.md)
- [ErrorMessage](docs/ErrorMessage.md)
- [Errors](docs/Errors.md)
- [EventNotification](docs/EventNotification.md)
- [ExpandPrioritySchemeBean](docs/ExpandPrioritySchemeBean.md)
- [ExpandPrioritySchemePage](docs/ExpandPrioritySchemePage.md)
- [ExportArchivedIssuesTaskProgressResponse](docs/ExportArchivedIssuesTaskProgressResponse.md)
- [FailedWebhook](docs/FailedWebhook.md)
- [FailedWebhooks](docs/FailedWebhooks.md)
- [Field](docs/Field.md)
- [FieldAssociationParameters](docs/FieldAssociationParameters.md)
- [FieldAssociationSchemeFieldSearchResult](docs/FieldAssociationSchemeFieldSearchResult.md)
- [FieldAssociationSchemeLinks](docs/FieldAssociationSchemeLinks.md)
- [FieldAssociationSchemeLinksBean](docs/FieldAssociationSchemeLinksBean.md)
- [FieldAssociationSchemeMatchedFilters](docs/FieldAssociationSchemeMatchedFilters.md)
- [FieldAssociationSchemeProjectSearchResult](docs/FieldAssociationSchemeProjectSearchResult.md)
- [FieldAssociationsRequest](docs/FieldAssociationsRequest.md)
- [FieldCapabilityPayload](docs/FieldCapabilityPayload.md)
- [FieldChangedClause](docs/FieldChangedClause.md)
- [FieldConfiguration](docs/FieldConfiguration.md)
- [FieldConfigurationDetails](docs/FieldConfigurationDetails.md)
- [FieldConfigurationIssueTypeItem](docs/FieldConfigurationIssueTypeItem.md)
- [FieldConfigurationItem](docs/FieldConfigurationItem.md)
- [FieldConfigurationItemsDetails](docs/FieldConfigurationItemsDetails.md)
- [FieldConfigurationScheme](docs/FieldConfigurationScheme.md)
- [FieldConfigurationSchemeProjectAssociation](docs/FieldConfigurationSchemeProjectAssociation.md)
- [FieldConfigurationSchemeProjects](docs/FieldConfigurationSchemeProjects.md)
- [FieldConfigurationToIssueTypeMapping](docs/FieldConfigurationToIssueTypeMapping.md)
- [FieldCreateMetadata](docs/FieldCreateMetadata.md)
- [FieldDetails](docs/FieldDetails.md)
- [FieldIdIdentifier](docs/FieldIdIdentifier.md)
- [FieldIdentifierObject](docs/FieldIdentifierObject.md)
- [FieldLastUsed](docs/FieldLastUsed.md)
- [FieldLayoutConfiguration](docs/FieldLayoutConfiguration.md)
- [FieldLayoutPayload](docs/FieldLayoutPayload.md)
- [FieldLayoutSchemePayload](docs/FieldLayoutSchemePayload.md)
- [FieldMetadata](docs/FieldMetadata.md)
- [FieldReferenceData](docs/FieldReferenceData.md)
- [FieldSchemeToFieldsPartialFailure](docs/FieldSchemeToFieldsPartialFailure.md)
- [FieldSchemeToFieldsResponse](docs/FieldSchemeToFieldsResponse.md)
- [FieldSchemeToProjectsPartialFailure](docs/FieldSchemeToProjectsPartialFailure.md)
- [FieldSchemeToProjectsRequest](docs/FieldSchemeToProjectsRequest.md)
- [FieldSchemeToProjectsResponse](docs/FieldSchemeToProjectsResponse.md)
- [FieldUpdateOperation](docs/FieldUpdateOperation.md)
- [FieldValueClause](docs/FieldValueClause.md)
- [FieldWasClause](docs/FieldWasClause.md)
- [Fields](docs/Fields.md)
- [FieldsSchemeItemParameter](docs/FieldsSchemeItemParameter.md)
- [FieldsSchemeItemWorkTypeParameter](docs/FieldsSchemeItemWorkTypeParameter.md)
- [Filter](docs/Filter.md)
- [FilterDetails](docs/FilterDetails.md)
- [FilterSubscription](docs/FilterSubscription.md)
- [FilterSubscriptionsList](docs/FilterSubscriptionsList.md)
- [FoundGroup](docs/FoundGroup.md)
- [FoundGroups](docs/FoundGroups.md)
- [FoundUsers](docs/FoundUsers.md)
- [FoundUsersAndGroups](docs/FoundUsersAndGroups.md)
- [FromLayoutPayload](docs/FromLayoutPayload.md)
- [FunctionOperand](docs/FunctionOperand.md)
- [FunctionReferenceData](docs/FunctionReferenceData.md)
- [GetAtlassianTeamResponse](docs/GetAtlassianTeamResponse.md)
- [GetCrossProjectReleaseResponse](docs/GetCrossProjectReleaseResponse.md)
- [GetCustomFieldResponse](docs/GetCustomFieldResponse.md)
- [GetDateFieldResponse](docs/GetDateFieldResponse.md)
- [GetExclusionRulesResponse](docs/GetExclusionRulesResponse.md)
- [GetFieldAssociationParametersResponse](docs/GetFieldAssociationParametersResponse.md)
- [GetFieldAssociationSchemeByIdResponse](docs/GetFieldAssociationSchemeByIdResponse.md)
- [GetFieldAssociationSchemeResponse](docs/GetFieldAssociationSchemeResponse.md)
- [GetForgeAppProperty200Response](docs/GetForgeAppProperty200Response.md)
- [GetForgeAppPropertyKeys200Response](docs/GetForgeAppPropertyKeys200Response.md)
- [GetForgeAppPropertyKeys200ResponseKeysInner](docs/GetForgeAppPropertyKeys200ResponseKeysInner.md)
- [GetIssueSourceResponse](docs/GetIssueSourceResponse.md)
- [GetPermissionHolderResponse](docs/GetPermissionHolderResponse.md)
- [GetPermissionResponse](docs/GetPermissionResponse.md)
- [GetPlanOnlyTeamResponse](docs/GetPlanOnlyTeamResponse.md)
- [GetPlanResponse](docs/GetPlanResponse.md)
- [GetPlanResponseForPage](docs/GetPlanResponseForPage.md)
- [GetProjectsWithFieldSchemesResponse](docs/GetProjectsWithFieldSchemesResponse.md)
- [GetRemoteIssueLinks200Response](docs/GetRemoteIssueLinks200Response.md)
- [GetSchedulingResponse](docs/GetSchedulingResponse.md)
- [GetTeamResponseForPage](docs/GetTeamResponseForPage.md)
- [GlobalScopeBean](docs/GlobalScopeBean.md)
- [Group](docs/Group.md)
- [GroupDetails](docs/GroupDetails.md)
- [GroupLabel](docs/GroupLabel.md)
- [GroupName](docs/GroupName.md)
- [HealthCheckResult](docs/HealthCheckResult.md)
- [Hierarchy](docs/Hierarchy.md)
- [HistoryMetadata](docs/HistoryMetadata.md)
- [HistoryMetadataParticipant](docs/HistoryMetadataParticipant.md)
- [Icon](docs/Icon.md)
- [IconBean](docs/IconBean.md)
- [IdBean](docs/IdBean.md)
- [IdOrKeyBean](docs/IdOrKeyBean.md)
- [IncludedFields](docs/IncludedFields.md)
- [InputStreamSource](docs/InputStreamSource.md)
- [IssueArchivalSyncRequest](docs/IssueArchivalSyncRequest.md)
- [IssueArchivalSyncResponse](docs/IssueArchivalSyncResponse.md)
- [IssueBean](docs/IssueBean.md)
- [IssueBulkDeletePayload](docs/IssueBulkDeletePayload.md)
- [IssueBulkEditField](docs/IssueBulkEditField.md)
- [IssueBulkEditPayload](docs/IssueBulkEditPayload.md)
- [IssueBulkMovePayload](docs/IssueBulkMovePayload.md)
- [IssueBulkTransitionForWorkflow](docs/IssueBulkTransitionForWorkflow.md)
- [IssueBulkTransitionPayload](docs/IssueBulkTransitionPayload.md)
- [IssueBulkWatchOrUnwatchPayload](docs/IssueBulkWatchOrUnwatchPayload.md)
- [IssueChangeLog](docs/IssueChangeLog.md)
- [IssueChangelogIds](docs/IssueChangelogIds.md)
- [IssueCommentListRequestBean](docs/IssueCommentListRequestBean.md)
- [IssueContextVariable](docs/IssueContextVariable.md)
- [IssueCreateMetadata](docs/IssueCreateMetadata.md)
- [IssueEntityProperties](docs/IssueEntityProperties.md)
- [IssueEntityPropertiesForMultiUpdate](docs/IssueEntityPropertiesForMultiUpdate.md)
- [IssueError](docs/IssueError.md)
- [IssueEvent](docs/IssueEvent.md)
- [IssueFieldOption](docs/IssueFieldOption.md)
- [IssueFieldOptionConfiguration](docs/IssueFieldOptionConfiguration.md)
- [IssueFieldOptionCreateBean](docs/IssueFieldOptionCreateBean.md)
- [IssueFieldOptionScopeBean](docs/IssueFieldOptionScopeBean.md)
- [IssueFilterForBulkPropertyDelete](docs/IssueFilterForBulkPropertyDelete.md)
- [IssueFilterForBulkPropertySet](docs/IssueFilterForBulkPropertySet.md)
- [IssueLayoutItemPayload](docs/IssueLayoutItemPayload.md)
- [IssueLayoutPayload](docs/IssueLayoutPayload.md)
- [IssueLimitReportResponseBean](docs/IssueLimitReportResponseBean.md)
- [IssueLink](docs/IssueLink.md)
- [IssueLinkType](docs/IssueLinkType.md)
- [IssueLinkTypes](docs/IssueLinkTypes.md)
- [IssueList](docs/IssueList.md)
- [IssueMatches](docs/IssueMatches.md)
- [IssueMatchesForJQL](docs/IssueMatchesForJQL.md)
- [IssuePickerSuggestions](docs/IssuePickerSuggestions.md)
- [IssuePickerSuggestionsIssueType](docs/IssuePickerSuggestionsIssueType.md)
- [IssueSecurityLevelMember](docs/IssueSecurityLevelMember.md)
- [IssueSecuritySchemeToProjectMapping](docs/IssueSecuritySchemeToProjectMapping.md)
- [IssueTransition](docs/IssueTransition.md)
- [IssueTransitionStatus](docs/IssueTransitionStatus.md)
- [IssueTypeCreateBean](docs/IssueTypeCreateBean.md)
- [IssueTypeDetails](docs/IssueTypeDetails.md)
- [IssueTypeHierarchyPayload](docs/IssueTypeHierarchyPayload.md)
- [IssueTypeIds](docs/IssueTypeIds.md)
- [IssueTypeIdsToRemove](docs/IssueTypeIdsToRemove.md)
- [IssueTypeInfo](docs/IssueTypeInfo.md)
- [IssueTypeIssueCreateMetadata](docs/IssueTypeIssueCreateMetadata.md)
- [IssueTypePayload](docs/IssueTypePayload.md)
- [IssueTypeProjectCreatePayload](docs/IssueTypeProjectCreatePayload.md)
- [IssueTypeScheme](docs/IssueTypeScheme.md)
- [IssueTypeSchemeDetails](docs/IssueTypeSchemeDetails.md)
- [IssueTypeSchemeID](docs/IssueTypeSchemeID.md)
- [IssueTypeSchemeMapping](docs/IssueTypeSchemeMapping.md)
- [IssueTypeSchemePayload](docs/IssueTypeSchemePayload.md)
- [IssueTypeSchemeProjectAssociation](docs/IssueTypeSchemeProjectAssociation.md)
- [IssueTypeSchemeProjects](docs/IssueTypeSchemeProjects.md)
- [IssueTypeSchemeUpdateDetails](docs/IssueTypeSchemeUpdateDetails.md)
- [IssueTypeScreenScheme](docs/IssueTypeScreenScheme.md)
- [IssueTypeScreenSchemeDetails](docs/IssueTypeScreenSchemeDetails.md)
- [IssueTypeScreenSchemeId](docs/IssueTypeScreenSchemeId.md)
- [IssueTypeScreenSchemeItem](docs/IssueTypeScreenSchemeItem.md)
- [IssueTypeScreenSchemeMapping](docs/IssueTypeScreenSchemeMapping.md)
- [IssueTypeScreenSchemeMappingDetails](docs/IssueTypeScreenSchemeMappingDetails.md)
- [IssueTypeScreenSchemePayload](docs/IssueTypeScreenSchemePayload.md)
- [IssueTypeScreenSchemeProjectAssociation](docs/IssueTypeScreenSchemeProjectAssociation.md)
- [IssueTypeScreenSchemeUpdateDetails](docs/IssueTypeScreenSchemeUpdateDetails.md)
- [IssueTypeScreenSchemesProjects](docs/IssueTypeScreenSchemesProjects.md)
- [IssueTypeToContextMapping](docs/IssueTypeToContextMapping.md)
- [IssueTypeUpdateBean](docs/IssueTypeUpdateBean.md)
- [IssueTypeWithStatus](docs/IssueTypeWithStatus.md)
- [IssueTypeWorkflowMapping](docs/IssueTypeWorkflowMapping.md)
- [IssueTypesWorkflowMapping](docs/IssueTypesWorkflowMapping.md)
- [IssueUpdateDetails](docs/IssueUpdateDetails.md)
- [IssueUpdateMetadata](docs/IssueUpdateMetadata.md)
- [IssuesAndJQLQueries](docs/IssuesAndJQLQueries.md)
- [IssuesJqlMetaDataBean](docs/IssuesJqlMetaDataBean.md)
- [IssuesMetaBean](docs/IssuesMetaBean.md)
- [IssuesUpdateBean](docs/IssuesUpdateBean.md)
- [JExpEvaluateIssuesJqlMetaDataBean](docs/JExpEvaluateIssuesJqlMetaDataBean.md)
- [JExpEvaluateIssuesMetaBean](docs/JExpEvaluateIssuesMetaBean.md)
- [JExpEvaluateJiraExpressionResultBean](docs/JExpEvaluateJiraExpressionResultBean.md)
- [JExpEvaluateMetaDataBean](docs/JExpEvaluateMetaDataBean.md)
- [JQLCountRequestBean](docs/JQLCountRequestBean.md)
- [JQLCountResultsBean](docs/JQLCountResultsBean.md)
- [JQLPersonalDataMigrationRequest](docs/JQLPersonalDataMigrationRequest.md)
- [JQLQueryWithUnknownUsers](docs/JQLQueryWithUnknownUsers.md)
- [JQLReferenceData](docs/JQLReferenceData.md)
- [JexpEvaluateCtxIssues](docs/JexpEvaluateCtxIssues.md)
- [JexpEvaluateCtxJqlIssues](docs/JexpEvaluateCtxJqlIssues.md)
- [JexpIssues](docs/JexpIssues.md)
- [JexpJqlIssues](docs/JexpJqlIssues.md)
- [JiraCascadingSelectField](docs/JiraCascadingSelectField.md)
- [JiraColorField](docs/JiraColorField.md)
- [JiraColorInput](docs/JiraColorInput.md)
- [JiraComponentField](docs/JiraComponentField.md)
- [JiraDateField](docs/JiraDateField.md)
- [JiraDateInput](docs/JiraDateInput.md)
- [JiraDateTimeField](docs/JiraDateTimeField.md)
- [JiraDateTimeInput](docs/JiraDateTimeInput.md)
- [JiraDurationField](docs/JiraDurationField.md)
- [JiraExpressionAnalysis](docs/JiraExpressionAnalysis.md)
- [JiraExpressionComplexity](docs/JiraExpressionComplexity.md)
- [JiraExpressionEvalContextBean](docs/JiraExpressionEvalContextBean.md)
- [JiraExpressionEvalRequestBean](docs/JiraExpressionEvalRequestBean.md)
- [JiraExpressionEvaluateContextBean](docs/JiraExpressionEvaluateContextBean.md)
- [JiraExpressionEvaluateRequestBean](docs/JiraExpressionEvaluateRequestBean.md)
- [JiraExpressionEvaluationMetaDataBean](docs/JiraExpressionEvaluationMetaDataBean.md)
- [JiraExpressionForAnalysis](docs/JiraExpressionForAnalysis.md)
- [JiraExpressionResult](docs/JiraExpressionResult.md)
- [JiraExpressionValidationError](docs/JiraExpressionValidationError.md)
- [JiraExpressionsAnalysis](docs/JiraExpressionsAnalysis.md)
- [JiraExpressionsComplexityBean](docs/JiraExpressionsComplexityBean.md)
- [JiraExpressionsComplexityValueBean](docs/JiraExpressionsComplexityValueBean.md)
- [JiraGroupInput](docs/JiraGroupInput.md)
- [JiraIssueFields](docs/JiraIssueFields.md)
- [JiraIssueTypeField](docs/JiraIssueTypeField.md)
- [JiraLabelPropertiesInputJackson1](docs/JiraLabelPropertiesInputJackson1.md)
- [JiraLabelsField](docs/JiraLabelsField.md)
- [JiraLabelsInput](docs/JiraLabelsInput.md)
- [JiraMultiSelectComponentField](docs/JiraMultiSelectComponentField.md)
- [JiraMultipleGroupPickerField](docs/JiraMultipleGroupPickerField.md)
- [JiraMultipleSelectField](docs/JiraMultipleSelectField.md)
- [JiraMultipleSelectUserPickerField](docs/JiraMultipleSelectUserPickerField.md)
- [JiraMultipleVersionPickerField](docs/JiraMultipleVersionPickerField.md)
- [JiraNumberField](docs/JiraNumberField.md)
- [JiraPriorityField](docs/JiraPriorityField.md)
- [JiraRichTextField](docs/JiraRichTextField.md)
- [JiraRichTextInput](docs/JiraRichTextInput.md)
- [JiraSelectedOptionField](docs/JiraSelectedOptionField.md)
- [JiraSingleGroupPickerField](docs/JiraSingleGroupPickerField.md)
- [JiraSingleLineTextField](docs/JiraSingleLineTextField.md)
- [JiraSingleSelectField](docs/JiraSingleSelectField.md)
- [JiraSingleSelectUserPickerField](docs/JiraSingleSelectUserPickerField.md)
- [JiraSingleVersionPickerField](docs/JiraSingleVersionPickerField.md)
- [JiraStatus](docs/JiraStatus.md)
- [JiraStatusInput](docs/JiraStatusInput.md)
- [JiraTimeTrackingField](docs/JiraTimeTrackingField.md)
- [JiraUrlField](docs/JiraUrlField.md)
- [JiraUserField](docs/JiraUserField.md)
- [JiraVersionField](docs/JiraVersionField.md)
- [JiraWorkflow](docs/JiraWorkflow.md)
- [JiraWorkflowPreviewStatus](docs/JiraWorkflowPreviewStatus.md)
- [JiraWorkflowStatus](docs/JiraWorkflowStatus.md)
- [JqlFunctionPrecomputationBean](docs/JqlFunctionPrecomputationBean.md)
- [JqlFunctionPrecomputationGetByIdRequest](docs/JqlFunctionPrecomputationGetByIdRequest.md)
- [JqlFunctionPrecomputationGetByIdResponse](docs/JqlFunctionPrecomputationGetByIdResponse.md)
- [JqlFunctionPrecomputationUpdateBean](docs/JqlFunctionPrecomputationUpdateBean.md)
- [JqlFunctionPrecomputationUpdateErrorResponse](docs/JqlFunctionPrecomputationUpdateErrorResponse.md)
- [JqlFunctionPrecomputationUpdateRequestBean](docs/JqlFunctionPrecomputationUpdateRequestBean.md)
- [JqlFunctionPrecomputationUpdateResponse](docs/JqlFunctionPrecomputationUpdateResponse.md)
- [JqlQueriesToParse](docs/JqlQueriesToParse.md)
- [JqlQueriesToSanitize](docs/JqlQueriesToSanitize.md)
- [JqlQuery](docs/JqlQuery.md)
- [JqlQueryClause](docs/JqlQueryClause.md)
- [JqlQueryClauseOperand](docs/JqlQueryClauseOperand.md)
- [JqlQueryClauseTimePredicate](docs/JqlQueryClauseTimePredicate.md)
- [JqlQueryField](docs/JqlQueryField.md)
- [JqlQueryFieldEntityProperty](docs/JqlQueryFieldEntityProperty.md)
- [JqlQueryOrderByClause](docs/JqlQueryOrderByClause.md)
- [JqlQueryOrderByClauseElement](docs/JqlQueryOrderByClauseElement.md)
- [JqlQueryToSanitize](docs/JqlQueryToSanitize.md)
- [JqlQueryUnitaryOperand](docs/JqlQueryUnitaryOperand.md)
- [JsonContextVariable](docs/JsonContextVariable.md)
- [JsonNode](docs/JsonNode.md)
- [JsonTypeBean](docs/JsonTypeBean.md)
- [KeywordOperand](docs/KeywordOperand.md)
- [License](docs/License.md)
- [LicenseMetric](docs/LicenseMetric.md)
- [LicensedApplication](docs/LicensedApplication.md)
- [LinkGroup](docs/LinkGroup.md)
- [LinkIssueRequestJsonBean](docs/LinkIssueRequestJsonBean.md)
- [LinkedIssue](docs/LinkedIssue.md)
- [ListOperand](docs/ListOperand.md)
- [Locale](docs/Locale.md)
- [MandatoryFieldValue](docs/MandatoryFieldValue.md)
- [MandatoryFieldValueForADF](docs/MandatoryFieldValueForADF.md)
- [MappingsByIssueTypeOverride](docs/MappingsByIssueTypeOverride.md)
- [MappingsByWorkflow](docs/MappingsByWorkflow.md)
- [MinimalFieldSchemeToFieldsPartialFailure](docs/MinimalFieldSchemeToFieldsPartialFailure.md)
- [MinimalFieldSchemeToFieldsResponse](docs/MinimalFieldSchemeToFieldsResponse.md)
- [ModelConfiguration](docs/ModelConfiguration.md)
- [ModelError](docs/ModelError.md)
- [MoveFieldBean](docs/MoveFieldBean.md)
- [MultiIssueEntityProperties](docs/MultiIssueEntityProperties.md)
- [MultipleCustomFieldValuesUpdate](docs/MultipleCustomFieldValuesUpdate.md)
- [MultipleCustomFieldValuesUpdateDetails](docs/MultipleCustomFieldValuesUpdateDetails.md)
- [NestedResponse](docs/NestedResponse.md)
- [NewUserDetails](docs/NewUserDetails.md)
- [NonWorkingDay](docs/NonWorkingDay.md)
- [Notification](docs/Notification.md)
- [NotificationEvent](docs/NotificationEvent.md)
- [NotificationRecipients](docs/NotificationRecipients.md)
- [NotificationRecipientsRestrictions](docs/NotificationRecipientsRestrictions.md)
- [NotificationScheme](docs/NotificationScheme.md)
- [NotificationSchemeAndProjectMappingJsonBean](docs/NotificationSchemeAndProjectMappingJsonBean.md)
- [NotificationSchemeEvent](docs/NotificationSchemeEvent.md)
- [NotificationSchemeEventDetails](docs/NotificationSchemeEventDetails.md)
- [NotificationSchemeEventIDPayload](docs/NotificationSchemeEventIDPayload.md)
- [NotificationSchemeEventPayload](docs/NotificationSchemeEventPayload.md)
- [NotificationSchemeEventTypeId](docs/NotificationSchemeEventTypeId.md)
- [NotificationSchemeId](docs/NotificationSchemeId.md)
- [NotificationSchemeNotificationDetails](docs/NotificationSchemeNotificationDetails.md)
- [NotificationSchemeNotificationDetailsPayload](docs/NotificationSchemeNotificationDetailsPayload.md)
- [NotificationSchemePayload](docs/NotificationSchemePayload.md)
- [OldToNewSecurityLevelMappingsBean](docs/OldToNewSecurityLevelMappingsBean.md)
- [OperationMessage](docs/OperationMessage.md)
- [Operations](docs/Operations.md)
- [OrderOfCustomFieldOptions](docs/OrderOfCustomFieldOptions.md)
- [OrderOfIssueTypes](docs/OrderOfIssueTypes.md)
- [PageBean2ComponentJsonBean](docs/PageBean2ComponentJsonBean.md)
- [PageBean2FieldAssociationSchemeFieldSearchResult](docs/PageBean2FieldAssociationSchemeFieldSearchResult.md)
- [PageBean2FieldAssociationSchemeProjectSearchResult](docs/PageBean2FieldAssociationSchemeProjectSearchResult.md)
- [PageBean2GetFieldAssociationSchemeResponse](docs/PageBean2GetFieldAssociationSchemeResponse.md)
- [PageBean2GetProjectsWithFieldSchemesResponse](docs/PageBean2GetProjectsWithFieldSchemesResponse.md)
- [PageBean2JqlFunctionPrecomputationBean](docs/PageBean2JqlFunctionPrecomputationBean.md)
- [PageBean2ProjectFieldBean](docs/PageBean2ProjectFieldBean.md)
- [PageBeanBulkContextualConfiguration](docs/PageBeanBulkContextualConfiguration.md)
- [PageBeanChangelog](docs/PageBeanChangelog.md)
- [PageBeanComment](docs/PageBeanComment.md)
- [PageBeanComponentWithIssueCount](docs/PageBeanComponentWithIssueCount.md)
- [PageBeanContext](docs/PageBeanContext.md)
- [PageBeanContextForProjectAndIssueType](docs/PageBeanContextForProjectAndIssueType.md)
- [PageBeanContextualConfiguration](docs/PageBeanContextualConfiguration.md)
- [PageBeanCustomFieldContext](docs/PageBeanCustomFieldContext.md)
- [PageBeanCustomFieldContextDefaultValue](docs/PageBeanCustomFieldContextDefaultValue.md)
- [PageBeanCustomFieldContextOption](docs/PageBeanCustomFieldContextOption.md)
- [PageBeanCustomFieldContextProjectMapping](docs/PageBeanCustomFieldContextProjectMapping.md)
- [PageBeanDashboard](docs/PageBeanDashboard.md)
- [PageBeanField](docs/PageBeanField.md)
- [PageBeanFieldConfigurationDetails](docs/PageBeanFieldConfigurationDetails.md)
- [PageBeanFieldConfigurationIssueTypeItem](docs/PageBeanFieldConfigurationIssueTypeItem.md)
- [PageBeanFieldConfigurationItem](docs/PageBeanFieldConfigurationItem.md)
- [PageBeanFieldConfigurationScheme](docs/PageBeanFieldConfigurationScheme.md)
- [PageBeanFieldConfigurationSchemeProjects](docs/PageBeanFieldConfigurationSchemeProjects.md)
- [PageBeanFilterDetails](docs/PageBeanFilterDetails.md)
- [PageBeanGroupDetails](docs/PageBeanGroupDetails.md)
- [PageBeanIssueFieldOption](docs/PageBeanIssueFieldOption.md)
- [PageBeanIssueSecurityLevelMember](docs/PageBeanIssueSecurityLevelMember.md)
- [PageBeanIssueSecuritySchemeToProjectMapping](docs/PageBeanIssueSecuritySchemeToProjectMapping.md)
- [PageBeanIssueTypeScheme](docs/PageBeanIssueTypeScheme.md)
- [PageBeanIssueTypeSchemeMapping](docs/PageBeanIssueTypeSchemeMapping.md)
- [PageBeanIssueTypeSchemeProjects](docs/PageBeanIssueTypeSchemeProjects.md)
- [PageBeanIssueTypeScreenScheme](docs/PageBeanIssueTypeScreenScheme.md)
- [PageBeanIssueTypeScreenSchemeItem](docs/PageBeanIssueTypeScreenSchemeItem.md)
- [PageBeanIssueTypeScreenSchemesProjects](docs/PageBeanIssueTypeScreenSchemesProjects.md)
- [PageBeanIssueTypeToContextMapping](docs/PageBeanIssueTypeToContextMapping.md)
- [PageBeanNotificationScheme](docs/PageBeanNotificationScheme.md)
- [PageBeanNotificationSchemeAndProjectMappingJsonBean](docs/PageBeanNotificationSchemeAndProjectMappingJsonBean.md)
- [PageBeanPriority](docs/PageBeanPriority.md)
- [PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects](docs/PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects.md)
- [PageBeanPriorityWithSequence](docs/PageBeanPriorityWithSequence.md)
- [PageBeanProject](docs/PageBeanProject.md)
- [PageBeanProjectDetails](docs/PageBeanProjectDetails.md)
- [PageBeanResolutionJsonBean](docs/PageBeanResolutionJsonBean.md)
- [PageBeanScreen](docs/PageBeanScreen.md)
- [PageBeanScreenScheme](docs/PageBeanScreenScheme.md)
- [PageBeanScreenWithTab](docs/PageBeanScreenWithTab.md)
- [PageBeanSecurityLevel](docs/PageBeanSecurityLevel.md)
- [PageBeanSecurityLevelMember](docs/PageBeanSecurityLevelMember.md)
- [PageBeanSecuritySchemeWithProjects](docs/PageBeanSecuritySchemeWithProjects.md)
- [PageBeanString](docs/PageBeanString.md)
- [PageBeanUiModificationDetails](docs/PageBeanUiModificationDetails.md)
- [PageBeanUser](docs/PageBeanUser.md)
- [PageBeanUserDetails](docs/PageBeanUserDetails.md)
- [PageBeanUserKey](docs/PageBeanUserKey.md)
- [PageBeanVersion](docs/PageBeanVersion.md)
- [PageBeanWebhook](docs/PageBeanWebhook.md)
- [PageBeanWorkflow](docs/PageBeanWorkflow.md)
- [PageBeanWorkflowScheme](docs/PageBeanWorkflowScheme.md)
- [PageBeanWorkflowTransitionRules](docs/PageBeanWorkflowTransitionRules.md)
- [PageOfChangelogs](docs/PageOfChangelogs.md)
- [PageOfComments](docs/PageOfComments.md)
- [PageOfCreateMetaIssueTypeWithField](docs/PageOfCreateMetaIssueTypeWithField.md)
- [PageOfCreateMetaIssueTypes](docs/PageOfCreateMetaIssueTypes.md)
- [PageOfDashboards](docs/PageOfDashboards.md)
- [PageOfStatuses](docs/PageOfStatuses.md)
- [PageOfWorklogs](docs/PageOfWorklogs.md)
- [PageWithCursorGetPlanResponseForPage](docs/PageWithCursorGetPlanResponseForPage.md)
- [PageWithCursorGetTeamResponseForPage](docs/PageWithCursorGetTeamResponseForPage.md)
- [PagedListUserDetailsApplicationUser](docs/PagedListUserDetailsApplicationUser.md)
- [PaginatedResponseComment](docs/PaginatedResponseComment.md)
- [PaginatedResponseFieldCreateMetadata](docs/PaginatedResponseFieldCreateMetadata.md)
- [PaginatedResponseIssueTypeIssueCreateMetadata](docs/PaginatedResponseIssueTypeIssueCreateMetadata.md)
- [ParameterRemovalDetails](docs/ParameterRemovalDetails.md)
- [ParsedJqlQueries](docs/ParsedJqlQueries.md)
- [ParsedJqlQuery](docs/ParsedJqlQuery.md)
- [PermissionDetails](docs/PermissionDetails.md)
- [PermissionGrant](docs/PermissionGrant.md)
- [PermissionGrantDTO](docs/PermissionGrantDTO.md)
- [PermissionGrants](docs/PermissionGrants.md)
- [PermissionHolder](docs/PermissionHolder.md)
- [PermissionPayloadDTO](docs/PermissionPayloadDTO.md)
- [PermissionScheme](docs/PermissionScheme.md)
- [PermissionSchemes](docs/PermissionSchemes.md)
- [Permissions](docs/Permissions.md)
- [PermissionsKeysBean](docs/PermissionsKeysBean.md)
- [PermittedProjects](docs/PermittedProjects.md)
- [PreviewConditionGroupConfiguration](docs/PreviewConditionGroupConfiguration.md)
- [PreviewRuleConfiguration](docs/PreviewRuleConfiguration.md)
- [PreviewTrigger](docs/PreviewTrigger.md)
- [Priority](docs/Priority.md)
- [PriorityId](docs/PriorityId.md)
- [PriorityMapping](docs/PriorityMapping.md)
- [PrioritySchemeChangesWithoutMappings](docs/PrioritySchemeChangesWithoutMappings.md)
- [PrioritySchemeId](docs/PrioritySchemeId.md)
- [PrioritySchemeWithPaginatedPrioritiesAndProjects](docs/PrioritySchemeWithPaginatedPrioritiesAndProjects.md)
- [PriorityWithSequence](docs/PriorityWithSequence.md)
- [Project](docs/Project.md)
- [ProjectAndIssueTypePair](docs/ProjectAndIssueTypePair.md)
- [ProjectArchetype](docs/ProjectArchetype.md)
- [ProjectAvatars](docs/ProjectAvatars.md)
- [ProjectCategory](docs/ProjectCategory.md)
- [ProjectComponent](docs/ProjectComponent.md)
- [ProjectCreateResourceIdentifier](docs/ProjectCreateResourceIdentifier.md)
- [ProjectCustomTemplateCreateRequestDTO](docs/ProjectCustomTemplateCreateRequestDTO.md)
- [ProjectDataPolicies](docs/ProjectDataPolicies.md)
- [ProjectDataPolicy](docs/ProjectDataPolicy.md)
- [ProjectDetails](docs/ProjectDetails.md)
- [ProjectEmailAddress](docs/ProjectEmailAddress.md)
- [ProjectFeature](docs/ProjectFeature.md)
- [ProjectFeatureState](docs/ProjectFeatureState.md)
- [ProjectFieldBean](docs/ProjectFieldBean.md)
- [ProjectId](docs/ProjectId.md)
- [ProjectIdAssociationContext](docs/ProjectIdAssociationContext.md)
- [ProjectIdentifierBean](docs/ProjectIdentifierBean.md)
- [ProjectIdentifiers](docs/ProjectIdentifiers.md)
- [ProjectIds](docs/ProjectIds.md)
- [ProjectInsight](docs/ProjectInsight.md)
- [ProjectIssueCreateMetadata](docs/ProjectIssueCreateMetadata.md)
- [ProjectIssueSecurityLevels](docs/ProjectIssueSecurityLevels.md)
- [ProjectIssueTypeHierarchy](docs/ProjectIssueTypeHierarchy.md)
- [ProjectIssueTypeMapping](docs/ProjectIssueTypeMapping.md)
- [ProjectIssueTypeMappings](docs/ProjectIssueTypeMappings.md)
- [ProjectIssueTypeQueryContext](docs/ProjectIssueTypeQueryContext.md)
- [ProjectIssueTypesHierarchyLevel](docs/ProjectIssueTypesHierarchyLevel.md)
- [ProjectLandingPageInfo](docs/ProjectLandingPageInfo.md)
- [ProjectPayload](docs/ProjectPayload.md)
- [ProjectPermissions](docs/ProjectPermissions.md)
- [ProjectRole](docs/ProjectRole.md)
- [ProjectRoleActorsUpdateBean](docs/ProjectRoleActorsUpdateBean.md)
- [ProjectRoleDetails](docs/ProjectRoleDetails.md)
- [ProjectRoleGroup](docs/ProjectRoleGroup.md)
- [ProjectRoleUser](docs/ProjectRoleUser.md)
- [ProjectScopeBean](docs/ProjectScopeBean.md)
- [ProjectTemplateKey](docs/ProjectTemplateKey.md)
- [ProjectTemplateModel](docs/ProjectTemplateModel.md)
- [ProjectType](docs/ProjectType.md)
- [ProjectUsage](docs/ProjectUsage.md)
- [ProjectUsagePage](docs/ProjectUsagePage.md)
- [ProjectWithDataPolicy](docs/ProjectWithDataPolicy.md)
- [PropertyKey](docs/PropertyKey.md)
- [PropertyKeys](docs/PropertyKeys.md)
- [PublishDraftWorkflowScheme](docs/PublishDraftWorkflowScheme.md)
- [PublishedWorkflowId](docs/PublishedWorkflowId.md)
- [QuickFilterPayload](docs/QuickFilterPayload.md)
- [RedactionJobStatusResponse](docs/RedactionJobStatusResponse.md)
- [RedactionPosition](docs/RedactionPosition.md)
- [RegisteredWebhook](docs/RegisteredWebhook.md)
- [RemoteIssueLink](docs/RemoteIssueLink.md)
- [RemoteIssueLinkIdentifies](docs/RemoteIssueLinkIdentifies.md)
- [RemoteIssueLinkRequest](docs/RemoteIssueLinkRequest.md)
- [RemoteObject](docs/RemoteObject.md)
- [RemoveFieldAssociationsRequestItem](docs/RemoveFieldAssociationsRequestItem.md)
- [RemoveFieldParametersResult](docs/RemoveFieldParametersResult.md)
- [RemoveFieldParametersResultError](docs/RemoveFieldParametersResultError.md)
- [RemoveOptionFromIssuesResult](docs/RemoveOptionFromIssuesResult.md)
- [ReorderIssuePriorities](docs/ReorderIssuePriorities.md)
- [ReorderIssueResolutionsRequest](docs/ReorderIssueResolutionsRequest.md)
- [RequiredMappingByIssueType](docs/RequiredMappingByIssueType.md)
- [RequiredMappingByWorkflows](docs/RequiredMappingByWorkflows.md)
- [Resolution](docs/Resolution.md)
- [ResolutionId](docs/ResolutionId.md)
- [ResolutionJsonBean](docs/ResolutionJsonBean.md)
- [Resource](docs/Resource.md)
- [RestrictedPermission](docs/RestrictedPermission.md)
- [RichText](docs/RichText.md)
- [RoleActor](docs/RoleActor.md)
- [RolePayload](docs/RolePayload.md)
- [RolesCapabilityPayload](docs/RolesCapabilityPayload.md)
- [RuleConfiguration](docs/RuleConfiguration.md)
- [RulePayload](docs/RulePayload.md)
- [SanitizedJqlQueries](docs/SanitizedJqlQueries.md)
- [SanitizedJqlQuery](docs/SanitizedJqlQuery.md)
- [SaveProjectTemplateRequest](docs/SaveProjectTemplateRequest.md)
- [SaveTemplateRequest](docs/SaveTemplateRequest.md)
- [SaveTemplateResponse](docs/SaveTemplateResponse.md)
- [Scope](docs/Scope.md)
- [ScopePayload](docs/ScopePayload.md)
- [Screen](docs/Screen.md)
- [ScreenDetails](docs/ScreenDetails.md)
- [ScreenPayload](docs/ScreenPayload.md)
- [ScreenScheme](docs/ScreenScheme.md)
- [ScreenSchemeDetails](docs/ScreenSchemeDetails.md)
- [ScreenSchemeId](docs/ScreenSchemeId.md)
- [ScreenSchemePayload](docs/ScreenSchemePayload.md)
- [ScreenTypes](docs/ScreenTypes.md)
- [ScreenWithTab](docs/ScreenWithTab.md)
- [ScreenableField](docs/ScreenableField.md)
- [ScreenableTab](docs/ScreenableTab.md)
- [SearchAndReconcileRequestBean](docs/SearchAndReconcileRequestBean.md)
- [SearchAndReconcileResults](docs/SearchAndReconcileResults.md)
- [SearchAutoCompleteFilter](docs/SearchAutoCompleteFilter.md)
- [SearchRequestBean](docs/SearchRequestBean.md)
- [SearchResultFieldParameters](docs/SearchResultFieldParameters.md)
- [SearchResultWorkTypeParameters](docs/SearchResultWorkTypeParameters.md)
- [SearchResults](docs/SearchResults.md)
- [SecurityLevel](docs/SecurityLevel.md)
- [SecurityLevelMember](docs/SecurityLevelMember.md)
- [SecurityLevelMemberPayload](docs/SecurityLevelMemberPayload.md)
- [SecurityLevelPayload](docs/SecurityLevelPayload.md)
- [SecurityScheme](docs/SecurityScheme.md)
- [SecuritySchemeId](docs/SecuritySchemeId.md)
- [SecuritySchemeLevelBean](docs/SecuritySchemeLevelBean.md)
- [SecuritySchemeLevelMemberBean](docs/SecuritySchemeLevelMemberBean.md)
- [SecuritySchemeMembersRequest](docs/SecuritySchemeMembersRequest.md)
- [SecuritySchemePayload](docs/SecuritySchemePayload.md)
- [SecuritySchemeWithProjects](docs/SecuritySchemeWithProjects.md)
- [SecuritySchemes](docs/SecuritySchemes.md)
- [ServerInformation](docs/ServerInformation.md)
- [ServiceManagementNavigationInfo](docs/ServiceManagementNavigationInfo.md)
- [ServiceRegistry](docs/ServiceRegistry.md)
- [ServiceRegistryTier](docs/ServiceRegistryTier.md)
- [SetDefaultLevelsRequest](docs/SetDefaultLevelsRequest.md)
- [SetDefaultPriorityRequest](docs/SetDefaultPriorityRequest.md)
- [SetDefaultResolutionRequest](docs/SetDefaultResolutionRequest.md)
- [SharePermission](docs/SharePermission.md)
- [SharePermissionInputBean](docs/SharePermissionInputBean.md)
- [SimpleApplicationPropertyBean](docs/SimpleApplicationPropertyBean.md)
- [SimpleErrorCollection](docs/SimpleErrorCollection.md)
- [SimpleLink](docs/SimpleLink.md)
- [SimpleListWrapperApplicationRole](docs/SimpleListWrapperApplicationRole.md)
- [SimpleListWrapperGroupName](docs/SimpleListWrapperGroupName.md)
- [SimplifiedHierarchyLevel](docs/SimplifiedHierarchyLevel.md)
- [SimplifiedIssueTransition](docs/SimplifiedIssueTransition.md)
- [SingleRedactionRequest](docs/SingleRedactionRequest.md)
- [SingleRedactionResponse](docs/SingleRedactionResponse.md)
- [SoftwareNavigationInfo](docs/SoftwareNavigationInfo.md)
- [Status](docs/Status.md)
- [StatusCategory](docs/StatusCategory.md)
- [StatusCreate](docs/StatusCreate.md)
- [StatusCreateRequest](docs/StatusCreateRequest.md)
- [StatusDetails](docs/StatusDetails.md)
- [StatusLayoutUpdate](docs/StatusLayoutUpdate.md)
- [StatusMapping](docs/StatusMapping.md)
- [StatusMappingDTO](docs/StatusMappingDTO.md)
- [StatusMetadata](docs/StatusMetadata.md)
- [StatusMigration](docs/StatusMigration.md)
- [StatusPayload](docs/StatusPayload.md)
- [StatusProjectIssueTypeUsage](docs/StatusProjectIssueTypeUsage.md)
- [StatusProjectIssueTypeUsageDTO](docs/StatusProjectIssueTypeUsageDTO.md)
- [StatusProjectIssueTypeUsagePage](docs/StatusProjectIssueTypeUsagePage.md)
- [StatusProjectUsage](docs/StatusProjectUsage.md)
- [StatusProjectUsageDTO](docs/StatusProjectUsageDTO.md)
- [StatusProjectUsagePage](docs/StatusProjectUsagePage.md)
- [StatusScope](docs/StatusScope.md)
- [StatusUpdate](docs/StatusUpdate.md)
- [StatusUpdateRequest](docs/StatusUpdateRequest.md)
- [StatusWorkflowUsageDTO](docs/StatusWorkflowUsageDTO.md)
- [StatusWorkflowUsagePage](docs/StatusWorkflowUsagePage.md)
- [StatusWorkflowUsageWorkflow](docs/StatusWorkflowUsageWorkflow.md)
- [StatusesPerWorkflow](docs/StatusesPerWorkflow.md)
- [SubmittedBulkOperation](docs/SubmittedBulkOperation.md)
- [SuccessOrErrorResults](docs/SuccessOrErrorResults.md)
- [SuggestedIssue](docs/SuggestedIssue.md)
- [SuggestedMappingsForPrioritiesRequestBean](docs/SuggestedMappingsForPrioritiesRequestBean.md)
- [SuggestedMappingsForProjectsRequestBean](docs/SuggestedMappingsForProjectsRequestBean.md)
- [SuggestedMappingsRequestBean](docs/SuggestedMappingsRequestBean.md)
- [SwimlanePayload](docs/SwimlanePayload.md)
- [SwimlanesPayload](docs/SwimlanesPayload.md)
- [SystemAvatars](docs/SystemAvatars.md)
- [TabPayload](docs/TabPayload.md)
- [TargetClassification](docs/TargetClassification.md)
- [TargetMandatoryFields](docs/TargetMandatoryFields.md)
- [TargetStatus](docs/TargetStatus.md)
- [TargetToSourcesMapping](docs/TargetToSourcesMapping.md)
- [TaskProgress](docs/TaskProgress.md)
- [TaskProgressBeanJsonNode](docs/TaskProgressBeanJsonNode.md)
- [TaskProgressBeanObject](docs/TaskProgressBeanObject.md)
- [TaskProgressBeanRemoveOptionFromIssuesResult](docs/TaskProgressBeanRemoveOptionFromIssuesResult.md)
- [TimeTrackingConfiguration](docs/TimeTrackingConfiguration.md)
- [TimeTrackingDetails](docs/TimeTrackingDetails.md)
- [TimeTrackingProvider](docs/TimeTrackingProvider.md)
- [ToLayoutPayload](docs/ToLayoutPayload.md)
- [Transition](docs/Transition.md)
- [TransitionLink](docs/TransitionLink.md)
- [TransitionPayload](docs/TransitionPayload.md)
- [TransitionPreview](docs/TransitionPreview.md)
- [TransitionScreenDetails](docs/TransitionScreenDetails.md)
- [TransitionUpdateDTO](docs/TransitionUpdateDTO.md)
- [Transitions](docs/Transitions.md)
- [UiModificationContextDetails](docs/UiModificationContextDetails.md)
- [UiModificationDetails](docs/UiModificationDetails.md)
- [UiModificationIdentifiers](docs/UiModificationIdentifiers.md)
- [UnrestrictedUserEmail](docs/UnrestrictedUserEmail.md)
- [UpdateCustomFieldDetails](docs/UpdateCustomFieldDetails.md)
- [UpdateDefaultProjectClassificationBean](docs/UpdateDefaultProjectClassificationBean.md)
- [UpdateDefaultScreenScheme](docs/UpdateDefaultScreenScheme.md)
- [UpdateFieldAssociationSchemeLinksBean](docs/UpdateFieldAssociationSchemeLinksBean.md)
- [UpdateFieldAssociationSchemeRequest](docs/UpdateFieldAssociationSchemeRequest.md)
- [UpdateFieldAssociationSchemeResponse](docs/UpdateFieldAssociationSchemeResponse.md)
- [UpdateFieldAssociationsRequestItem](docs/UpdateFieldAssociationsRequestItem.md)
- [UpdateFieldConfigurationSchemeDetails](docs/UpdateFieldConfigurationSchemeDetails.md)
- [UpdateFieldSchemeParametersPartialFailure](docs/UpdateFieldSchemeParametersPartialFailure.md)
- [UpdateFieldSchemeParametersRequest](docs/UpdateFieldSchemeParametersRequest.md)
- [UpdateFieldSchemeParametersResponse](docs/UpdateFieldSchemeParametersResponse.md)
- [UpdateIssueSecurityLevelDetails](docs/UpdateIssueSecurityLevelDetails.md)
- [UpdateIssueSecuritySchemeRequestBean](docs/UpdateIssueSecuritySchemeRequestBean.md)
- [UpdateNotificationSchemeDetails](docs/UpdateNotificationSchemeDetails.md)
- [UpdatePrioritiesInSchemeRequestBean](docs/UpdatePrioritiesInSchemeRequestBean.md)
- [UpdatePriorityDetails](docs/UpdatePriorityDetails.md)
- [UpdatePrioritySchemeRequestBean](docs/UpdatePrioritySchemeRequestBean.md)
- [UpdatePrioritySchemeResponseBean](docs/UpdatePrioritySchemeResponseBean.md)
- [UpdateProjectDetails](docs/UpdateProjectDetails.md)
- [UpdateProjectsInSchemeRequestBean](docs/UpdateProjectsInSchemeRequestBean.md)
- [UpdateResolutionDetails](docs/UpdateResolutionDetails.md)
- [UpdateScreenDetails](docs/UpdateScreenDetails.md)
- [UpdateScreenSchemeDetails](docs/UpdateScreenSchemeDetails.md)
- [UpdateScreenTypes](docs/UpdateScreenTypes.md)
- [UpdateUiModificationDetails](docs/UpdateUiModificationDetails.md)
- [UpdateUserToGroupBean](docs/UpdateUserToGroupBean.md)
- [UpdatedProjectCategory](docs/UpdatedProjectCategory.md)
- [User](docs/User.md)
- [UserBean](docs/UserBean.md)
- [UserBeanAvatarUrls](docs/UserBeanAvatarUrls.md)
- [UserColumnRequestBody](docs/UserColumnRequestBody.md)
- [UserContextVariable](docs/UserContextVariable.md)
- [UserDetails](docs/UserDetails.md)
- [UserFilter](docs/UserFilter.md)
- [UserKey](docs/UserKey.md)
- [UserList](docs/UserList.md)
- [UserMigrationBean](docs/UserMigrationBean.md)
- [UserPermission](docs/UserPermission.md)
- [UserPickerUser](docs/UserPickerUser.md)
- [ValidationOptionsForCreate](docs/ValidationOptionsForCreate.md)
- [ValidationOptionsForUpdate](docs/ValidationOptionsForUpdate.md)
- [ValueOperand](docs/ValueOperand.md)
- [Version](docs/Version.md)
- [VersionApprover](docs/VersionApprover.md)
- [VersionIssueCounts](docs/VersionIssueCounts.md)
- [VersionIssuesStatus](docs/VersionIssuesStatus.md)
- [VersionMoveBean](docs/VersionMoveBean.md)
- [VersionRelatedWork](docs/VersionRelatedWork.md)
- [VersionUnresolvedIssuesCount](docs/VersionUnresolvedIssuesCount.md)
- [VersionUsageInCustomField](docs/VersionUsageInCustomField.md)
- [Visibility](docs/Visibility.md)
- [Votes](docs/Votes.md)
- [WarningCollection](docs/WarningCollection.md)
- [Watchers](docs/Watchers.md)
- [Webhook](docs/Webhook.md)
- [WebhookDetails](docs/WebhookDetails.md)
- [WebhookRegistrationDetails](docs/WebhookRegistrationDetails.md)
- [WebhooksExpirationDate](docs/WebhooksExpirationDate.md)
- [WorkManagementNavigationInfo](docs/WorkManagementNavigationInfo.md)
- [WorkTypeParameters](docs/WorkTypeParameters.md)
- [Workflow](docs/Workflow.md)
- [WorkflowAssociationStatusMapping](docs/WorkflowAssociationStatusMapping.md)
- [WorkflowCapabilities](docs/WorkflowCapabilities.md)
- [WorkflowCapabilityPayload](docs/WorkflowCapabilityPayload.md)
- [WorkflowCompoundCondition](docs/WorkflowCompoundCondition.md)
- [WorkflowCondition](docs/WorkflowCondition.md)
- [WorkflowCreate](docs/WorkflowCreate.md)
- [WorkflowCreateRequest](docs/WorkflowCreateRequest.md)
- [WorkflowCreateResponse](docs/WorkflowCreateResponse.md)
- [WorkflowCreateValidateRequest](docs/WorkflowCreateValidateRequest.md)
- [WorkflowDocumentDTO](docs/WorkflowDocumentDTO.md)
- [WorkflowDocumentStatusDTO](docs/WorkflowDocumentStatusDTO.md)
- [WorkflowDocumentVersionBean](docs/WorkflowDocumentVersionBean.md)
- [WorkflowElementReference](docs/WorkflowElementReference.md)
- [WorkflowHistoryItemDTO](docs/WorkflowHistoryItemDTO.md)
- [WorkflowHistoryListRequest](docs/WorkflowHistoryListRequest.md)
- [WorkflowHistoryListResponseDTO](docs/WorkflowHistoryListResponseDTO.md)
- [WorkflowHistoryReadRequest](docs/WorkflowHistoryReadRequest.md)
- [WorkflowHistoryReadResponseDTO](docs/WorkflowHistoryReadResponseDTO.md)
- [WorkflowIDs](docs/WorkflowIDs.md)
- [WorkflowId](docs/WorkflowId.md)
- [WorkflowLayout](docs/WorkflowLayout.md)
- [WorkflowMetadataAndIssueTypeRestModel](docs/WorkflowMetadataAndIssueTypeRestModel.md)
- [WorkflowMetadataRestModel](docs/WorkflowMetadataRestModel.md)
- [WorkflowOperations](docs/WorkflowOperations.md)
- [WorkflowPayload](docs/WorkflowPayload.md)
- [WorkflowPreview](docs/WorkflowPreview.md)
- [WorkflowPreviewLayout](docs/WorkflowPreviewLayout.md)
- [WorkflowPreviewRequest](docs/WorkflowPreviewRequest.md)
- [WorkflowPreviewResponse](docs/WorkflowPreviewResponse.md)
- [WorkflowPreviewScope](docs/WorkflowPreviewScope.md)
- [WorkflowPreviewStatus](docs/WorkflowPreviewStatus.md)
- [WorkflowProjectIdScope](docs/WorkflowProjectIdScope.md)
- [WorkflowProjectIssueTypeUsage](docs/WorkflowProjectIssueTypeUsage.md)
- [WorkflowProjectIssueTypeUsageDTO](docs/WorkflowProjectIssueTypeUsageDTO.md)
- [WorkflowProjectIssueTypeUsagePage](docs/WorkflowProjectIssueTypeUsagePage.md)
- [WorkflowProjectUsageDTO](docs/WorkflowProjectUsageDTO.md)
- [WorkflowReadRequest](docs/WorkflowReadRequest.md)
- [WorkflowReadResponse](docs/WorkflowReadResponse.md)
- [WorkflowReferenceStatus](docs/WorkflowReferenceStatus.md)
- [WorkflowRuleConfiguration](docs/WorkflowRuleConfiguration.md)
- [WorkflowRules](docs/WorkflowRules.md)
- [WorkflowRulesSearch](docs/WorkflowRulesSearch.md)
- [WorkflowRulesSearchDetails](docs/WorkflowRulesSearchDetails.md)
- [WorkflowScheme](docs/WorkflowScheme.md)
- [WorkflowSchemeAssociation](docs/WorkflowSchemeAssociation.md)
- [WorkflowSchemeAssociations](docs/WorkflowSchemeAssociations.md)
- [WorkflowSchemeIdName](docs/WorkflowSchemeIdName.md)
- [WorkflowSchemePayload](docs/WorkflowSchemePayload.md)
- [WorkflowSchemeProjectAssociation](docs/WorkflowSchemeProjectAssociation.md)
- [WorkflowSchemeProjectSwitchBean](docs/WorkflowSchemeProjectSwitchBean.md)
- [WorkflowSchemeProjectUsageDTO](docs/WorkflowSchemeProjectUsageDTO.md)
- [WorkflowSchemeReadRequest](docs/WorkflowSchemeReadRequest.md)
- [WorkflowSchemeReadResponse](docs/WorkflowSchemeReadResponse.md)
- [WorkflowSchemeUpdateRequest](docs/WorkflowSchemeUpdateRequest.md)
- [WorkflowSchemeUpdateRequiredMappingsRequest](docs/WorkflowSchemeUpdateRequiredMappingsRequest.md)
- [WorkflowSchemeUpdateRequiredMappingsResponse](docs/WorkflowSchemeUpdateRequiredMappingsResponse.md)
- [WorkflowSchemeUsage](docs/WorkflowSchemeUsage.md)
- [WorkflowSchemeUsageDTO](docs/WorkflowSchemeUsageDTO.md)
- [WorkflowSchemeUsagePage](docs/WorkflowSchemeUsagePage.md)
- [WorkflowScope](docs/WorkflowScope.md)
- [WorkflowSearchResponse](docs/WorkflowSearchResponse.md)
- [WorkflowSimpleCondition](docs/WorkflowSimpleCondition.md)
- [WorkflowStatus](docs/WorkflowStatus.md)
- [WorkflowStatusLayout](docs/WorkflowStatusLayout.md)
- [WorkflowStatusLayoutPayload](docs/WorkflowStatusLayoutPayload.md)
- [WorkflowStatusPayload](docs/WorkflowStatusPayload.md)
- [WorkflowStatusUpdate](docs/WorkflowStatusUpdate.md)
- [WorkflowTransition](docs/WorkflowTransition.md)
- [WorkflowTransitionLinks](docs/WorkflowTransitionLinks.md)
- [WorkflowTransitionProperty](docs/WorkflowTransitionProperty.md)
- [WorkflowTransitionRule](docs/WorkflowTransitionRule.md)
- [WorkflowTransitionRules](docs/WorkflowTransitionRules.md)
- [WorkflowTransitionRulesDetails](docs/WorkflowTransitionRulesDetails.md)
- [WorkflowTransitionRulesUpdate](docs/WorkflowTransitionRulesUpdate.md)
- [WorkflowTransitionRulesUpdateErrorDetails](docs/WorkflowTransitionRulesUpdateErrorDetails.md)
- [WorkflowTransitionRulesUpdateErrors](docs/WorkflowTransitionRulesUpdateErrors.md)
- [WorkflowTransitions](docs/WorkflowTransitions.md)
- [WorkflowTrigger](docs/WorkflowTrigger.md)
- [WorkflowUpdate](docs/WorkflowUpdate.md)
- [WorkflowUpdateRequest](docs/WorkflowUpdateRequest.md)
- [WorkflowUpdateResponse](docs/WorkflowUpdateResponse.md)
- [WorkflowUpdateValidateRequestBean](docs/WorkflowUpdateValidateRequestBean.md)
- [WorkflowValidationError](docs/WorkflowValidationError.md)
- [WorkflowValidationErrorList](docs/WorkflowValidationErrorList.md)
- [WorkflowsWithTransitionRulesDetails](docs/WorkflowsWithTransitionRulesDetails.md)
- [WorkingDaysConfig](docs/WorkingDaysConfig.md)
- [Worklog](docs/Worklog.md)
- [WorklogCompositeKey](docs/WorklogCompositeKey.md)
- [WorklogIdsRequestBean](docs/WorklogIdsRequestBean.md)
- [WorklogKeyResult](docs/WorklogKeyResult.md)
- [WorklogsMoveRequestBean](docs/WorklogsMoveRequestBean.md)
- [WorkspaceDataPolicy](docs/WorkspaceDataPolicy.md)

### Authorization


Authentication schemes defined for the API:
<a id="OAuth2-accessCode"></a>
#### OAuth2 accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.atlassian.com/authorize
- **Scopes**: 
  - `delete:async-task:jira`: Delete asynchronous task.
  - `delete:attachment:jira`: Delete issue attachments.
  - `delete:avatar:jira`: Delete system and custom avatars.
  - `delete:comment.property:jira`: Delete issue comment properties.
  - `delete:comment:jira`: Delete issue comments.
  - `delete:dashboard.property:jira`: Delete dashboard properties.
  - `delete:dashboard:jira`: Delete dashboards.
  - `delete:field-configuration-scheme:jira`: Delete field configuration schemes.
  - `delete:field-configuration:jira`: Delete field configurations.
  - `delete:field.option:jira`: Delete field options.
  - `delete:field:jira`: Delete fields.
  - `delete:filter.column:jira`: Delete filter columns.
  - `delete:filter:jira`: Delete filters.
  - `delete:group:jira`: Delete user groups.
  - `delete:issue-link-type:jira`: Delete issue link types.
  - `delete:issue-link:jira`: Delete issue links.
  - `delete:issue-type-scheme:jira`: Delete issue type schemes.
  - `delete:issue-type-screen-scheme:jira`: Delete issue type screen schemes.
  - `delete:issue-type.property:jira`: Delete issue type properties.
  - `delete:issue-type:jira`: Delete issue types.
  - `delete:issue-worklog.property:jira`: Delete issue worklog properties.
  - `delete:issue-worklog:jira`: Delete issue worklogs.
  - `delete:issue.property:jira`: Delete issue properties.
  - `delete:issue.remote-link:jira`: Delete issue remote links.
  - `delete:issue:jira`: Delete issues.
  - `delete:permission-scheme:jira`: Delete permission schemes.
  - `delete:permission:jira`: Delete permissions.
  - `delete:project-category:jira`: Delete project categories.
  - `delete:project-role:jira`: Delete project roles.
  - `delete:project-version:jira`: Delete project versions.
  - `delete:project.avatar:jira`: Delete project avatars.
  - `delete:project.component:jira`: Delete project components.
  - `delete:project.property:jira`: Delete project properties.
  - `delete:project:jira`: Delete projects and their details, such as issue types, project lead, and avatars.
  - `delete:screen-scheme:jira`: Delete screen schemes.
  - `delete:screen-tab:jira`: Delete screen tabs.
  - `delete:screen:jira`: Delete screens.
  - `delete:screenable-field:jira`: Delete screenable fields.
  - `delete:user-configuration:jira`: Delete user configurations.
  - `delete:user.property:jira`: Delete user properties.
  - `delete:webhook:jira`: Delete webhooks.
  - `delete:workflow-scheme:jira`: Delete workflow schemes.
  - `delete:workflow.property:jira`: Delete workflow properties.
  - `delete:workflow:jira`: Delete workflows.
  - `manage:jira-configuration`: Configure Jira settings that require the Jira administrators permission, for example, create projects and custom fields, view workflows, manage issue link types.
  - `manage:jira-project`: Create and edit project settings and create new project-level objects, for example, versions, components.
  - `manage:jira-webhook`: Manage Jira webhooks. Enables an OAuth app to register and unregister dynamic webhooks in Jira. It also provides for fetching of registered webhooks.
  - `read:app-data:jira`: Read app data.
  - `read:application-role:jira`: View application roles.
  - `read:attachment:jira`: View issue attachments.
  - `read:audit-log:jira`: View audit logs.
  - `read:avatar:jira`: View system and custom avatars.
  - `read:comment.property:jira`: View issue comment properties.
  - `read:comment:jira`: View issue comments.
  - `read:custom-field-contextual-configuration:jira`: Read custom field contextual configurations.
  - `read:dashboard.property:jira`: View dashboard properties.
  - `read:dashboard:jira`: View dashboards.
  - `read:email-address:jira`: View email addresses of all users regardless of the user\&#39;s profile visibility settings.
  - `read:field-configuration-scheme:jira`: View field configuration schemes.
  - `read:field-configuration:jira`: Read field configurations.
  - `read:field.default-value:jira`: View field default values.
  - `read:field.option:jira`: View field options.
  - `read:field.options:jira`: Read field options.
  - `read:field:jira`: View fields.
  - `read:filter.column:jira`: View filter columns.
  - `read:filter.default-share-scope:jira`: View filter default share scopes.
  - `read:filter:jira`: View filters.
  - `read:group:jira`: View user groups.
  - `read:instance-configuration:jira`: View instance configurations.
  - `read:issue-details:jira`: View issue details.
  - `read:issue-event:jira`: Read issue events.
  - `read:issue-field-values:jira`: View issue field valueses.
  - `read:issue-link-type:jira`: View issue link types.
  - `read:issue-link:jira`: View issue links.
  - `read:issue-meta:jira`: View issue meta.
  - `read:issue-security-level:jira`: View issue security levels.
  - `read:issue-security-scheme:jira`: View issue security schemes.
  - `read:issue-status:jira`: View issue statuses.
  - `read:issue-type-hierarchy:jira`: Read issue type hierarchies.
  - `read:issue-type-scheme:jira`: View issue type schemes.
  - `read:issue-type-screen-scheme:jira`: View issue type screen schemes.
  - `read:issue-type.property:jira`: View issue type properties.
  - `read:issue-type:jira`: View issue types.
  - `read:issue-worklog.property:jira`: View issue worklog properties.
  - `read:issue-worklog:jira`: View issue worklogs.
  - `read:issue.changelog:jira`: View issue changelogs.
  - `read:issue.property:jira`: View issue properties.
  - `read:issue.remote-link:jira`: View issue remote links.
  - `read:issue.time-tracking:jira`: View issue time trackings.
  - `read:issue.transition:jira`: View issue transitions.
  - `read:issue.vote:jira`: View issue votes.
  - `read:issue.votes:jira`: View issue voteses.
  - `read:issue.watcher:jira`: View issue watchers.
  - `read:issue:jira`: View issues.
  - `read:jira-expressions:jira`: View jira expressions.
  - `read:jira-user`: View user information in Jira that you have access to, including usernames, email addresses, and avatars.
  - `read:jira-work`: Read project and issue data. Search for issues and objects associated with issues (such as attachments and worklogs).
  - `read:jql:jira`: View JQL.
  - `read:label:jira`: View labels.
  - `read:license:jira`: View licenses.
  - `read:notification-scheme:jira`: View notification schemes.
  - `read:permission-scheme:jira`: View permission schemes.
  - `read:permission:jira`: View permissions.
  - `read:priority:jira`: View priorities.
  - `read:project-category:jira`: View project categories.
  - `read:project-role:jira`: View project roles.
  - `read:project-type:jira`: View project types.
  - `read:project-version:jira`: View project versions.
  - `read:project.avatar:jira`: Read project avatars.
  - `read:project.component:jira`: View project components.
  - `read:project.email:jira`: View project emails.
  - `read:project.feature:jira`: Read project features.
  - `read:project.property:jira`: View project properties.
  - `read:project:jira`: View projects.
  - `read:resolution:jira`: View resolutions.
  - `read:role:jira`: View roles.
  - `read:screen-field:jira`: View screen fields.
  - `read:screen-scheme:jira`: View screen schemes.
  - `read:screen-tab:jira`: View screen tabs.
  - `read:screen:jira`: View screens.
  - `read:screenable-field:jira`: View screenable fields.
  - `read:status:jira`: View statuses.
  - `read:user-configuration:jira`: View user configurations.
  - `read:user.columns:jira`: View user columnses.
  - `read:user.property:jira`: View user properties.
  - `read:user:jira`: View users.
  - `read:webhook:jira`: View webhooks.
  - `read:workflow-scheme:jira`: View workflow schemes.
  - `read:workflow.property:jira`: View workflow properties.
  - `read:workflow:jira`: View workflows.
  - `send:notification:jira`: Send notifications.
  - `validate:jql:jira`: Validate JQL.
  - `write:app-data:jira`: Write app data.
  - `write:attachment:jira`: Create and update issue attachments.
  - `write:avatar:jira`: Create and update system and custom avatars.
  - `write:comment.property:jira`: Create and update issue comment properties.
  - `write:comment:jira`: Create and update issue comments.
  - `write:custom-field-contextual-configuration:jira`: Save custom field contextual configurations.
  - `write:dashboard.property:jira`: Create and update dashboard properties.
  - `write:dashboard:jira`: Create and update dashboards.
  - `write:field-configuration-scheme:jira`: Create and update field configuration schemes.
  - `write:field-configuration:jira`: Save field configurations.
  - `write:field.default-value:jira`: Create and update field default values.
  - `write:field.option:jira`: Create and update field options.
  - `write:field:jira`: Create and update fields.
  - `write:filter.column:jira`: Create and update filter columns.
  - `write:filter.default-share-scope:jira`: Create and update filter default share scopes.
  - `write:filter:jira`: Create and update filters.
  - `write:group:jira`: Create and update user groups.
  - `write:instance-configuration:jira`: Create and update instance configurations.
  - `write:issue-link-type:jira`: Create and update issue link types.
  - `write:issue-link:jira`: Create and update issue links.
  - `write:issue-type-scheme:jira`: Create and update issue type schemes.
  - `write:issue-type-screen-scheme:jira`: Create and update issue type screen schemes.
  - `write:issue-type.property:jira`: Create and update issue type properties.
  - `write:issue-type:jira`: Create and update issue types.
  - `write:issue-worklog.property:jira`: Create and update issue worklog properties.
  - `write:issue-worklog:jira`: Create and update issue worklogs.
  - `write:issue.property:jira`: Create and update issue properties.
  - `write:issue.remote-link:jira`: Create and update issue remote links.
  - `write:issue.time-tracking:jira`: Create and update issue time trackings.
  - `write:issue.vote:jira`: Create and update issue votes.
  - `write:issue.watcher:jira`: Create and update issue watchers.
  - `write:issue:jira`: Create and update issues.
  - `write:jira-work`: Create and edit issues in Jira, post comments, create worklogs, and delete issues.
  - `write:permission-scheme:jira`: Create and update permission schemes.
  - `write:permission:jira`: Create and update permissions.
  - `write:project-category:jira`: Create and update project categories.
  - `write:project-role:jira`: Create and update project roles.
  - `write:project-version:jira`: Create and update project versions.
  - `write:project.avatar:jira`: Create and update project avatars.
  - `write:project.component:jira`: Create and update project components.
  - `write:project.email:jira`: Create and update project emails.
  - `write:project.feature:jira`: Save project features.
  - `write:project.property:jira`: Create and update project properties.
  - `write:project:jira`: Create and update projects.
  - `write:screen-scheme:jira`: Create and update screen schemes.
  - `write:screen-tab:jira`: Create and update screen tabs.
  - `write:screen:jira`: Create and update screens.
  - `write:screenable-field:jira`: Create and update screenable fields.
  - `write:user-configuration:jira`: Create and update user configurations.
  - `write:user.property:jira`: Create and update user properties.
  - `write:webhook:jira`: Create and update webhooks.
  - `write:workflow-scheme:jira`: Create and update workflow schemes.
  - `write:workflow.property:jira`: Create and update workflow properties.
  - `write:workflow:jira`: Create and update workflows.
<a id="basicAuth"></a>
#### basicAuth


- **Type**: HTTP basic authentication

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b`
- Package version: `1001.0.0-SNAPSHOT-21695d0ffb3094632d6272be3e6600848f05a23b`
- Generator version: `7.21.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
