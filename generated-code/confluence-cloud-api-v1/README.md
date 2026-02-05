# confluence-cloud-api-v1@1.0.0

A TypeScript SDK client for the your-domain.atlassian.net API.

## Usage

First, install the SDK from npm.

```bash
npm install confluence-cloud-api-v1 --save
```

Next, try it out.


```ts
import {
  Configuration,
  AnalyticsApi,
} from 'confluence-cloud-api-v1';
import type { GetViewersRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | The ID of the content to get the viewers for.
    contentId: contentId_example,
    // string | The number of views for the content since the date. (optional)
    fromDate: 2021-03-21T00:00:00.000Z,
  } satisfies GetViewersRequest;

  try {
    const data = await api.getViewers(body);
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

All URIs are relative to *http://your-domain.atlassian.net*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AnalyticsApi* | [**getViewers**](docs/AnalyticsApi.md#getviewers) | **GET** /wiki/rest/api/analytics/content/{contentId}/viewers | Get viewers
*AnalyticsApi* | [**getViews**](docs/AnalyticsApi.md#getviews) | **GET** /wiki/rest/api/analytics/content/{contentId}/views | Get views
*AuditApi* | [**createAuditRecord**](docs/AuditApi.md#createauditrecord) | **POST** /wiki/rest/api/audit | Create audit record
*AuditApi* | [**exportAuditRecords**](docs/AuditApi.md#exportauditrecords) | **GET** /wiki/rest/api/audit/export | Export audit records
*AuditApi* | [**getAuditRecords**](docs/AuditApi.md#getauditrecords) | **GET** /wiki/rest/api/audit | Get audit records
*AuditApi* | [**getAuditRecordsForTimePeriod**](docs/AuditApi.md#getauditrecordsfortimeperiod) | **GET** /wiki/rest/api/audit/since | Get audit records for time period
*AuditApi* | [**getRetentionPeriod**](docs/AuditApi.md#getretentionperiod) | **GET** /wiki/rest/api/audit/retention | Get retention period
*AuditApi* | [**setRetentionPeriod**](docs/AuditApi.md#setretentionperiod) | **PUT** /wiki/rest/api/audit/retention | Set retention period
*ContentApi* | [**archivePages**](docs/ContentApi.md#archivepagesoperation) | **POST** /wiki/rest/api/content/archive | Archive pages
*ContentApi* | [**publishLegacyDraft**](docs/ContentApi.md#publishlegacydraft) | **POST** /wiki/rest/api/content/blueprint/instance/{draftId} | Publish legacy draft
*ContentApi* | [**publishSharedDraft**](docs/ContentApi.md#publishshareddraft) | **PUT** /wiki/rest/api/content/blueprint/instance/{draftId} | Publish shared draft
*ContentApi* | [**searchContentByCQL**](docs/ContentApi.md#searchcontentbycql) | **GET** /wiki/rest/api/content/search | Search content by CQL
*ContentAttachmentsApi* | [**createAttachment**](docs/ContentAttachmentsApi.md#createattachment) | **POST** /wiki/rest/api/content/{id}/child/attachment | Create attachment
*ContentAttachmentsApi* | [**createOrUpdateAttachments**](docs/ContentAttachmentsApi.md#createorupdateattachments) | **PUT** /wiki/rest/api/content/{id}/child/attachment | Create or update attachment
*ContentAttachmentsApi* | [**downloadAttatchment**](docs/ContentAttachmentsApi.md#downloadattatchment) | **GET** /wiki/rest/api/content/{id}/child/attachment/{attachmentId}/download | Get URI to download attachment
*ContentAttachmentsApi* | [**updateAttachmentData**](docs/ContentAttachmentsApi.md#updateattachmentdata) | **POST** /wiki/rest/api/content/{id}/child/attachment/{attachmentId}/data | Update attachment data
*ContentAttachmentsApi* | [**updateAttachmentProperties**](docs/ContentAttachmentsApi.md#updateattachmentproperties) | **PUT** /wiki/rest/api/content/{id}/child/attachment/{attachmentId} | Update attachment properties
*ContentBodyApi* | [**asyncConvertContentBodyRequest**](docs/ContentBodyApi.md#asyncconvertcontentbodyrequest) | **POST** /wiki/rest/api/contentbody/convert/async/{to} | Asynchronously convert content body
*ContentBodyApi* | [**asyncConvertContentBodyResponse**](docs/ContentBodyApi.md#asyncconvertcontentbodyresponse) | **GET** /wiki/rest/api/contentbody/convert/async/{id} | Get asynchronously converted content body from the id or the current status of the task.
*ContentBodyApi* | [**bulkAsyncConvertContentBodyRequest**](docs/ContentBodyApi.md#bulkasyncconvertcontentbodyrequest) | **POST** /wiki/rest/api/contentbody/convert/async/bulk/tasks | Create asynchronous content body conversion tasks in bulk
*ContentBodyApi* | [**bulkAsyncConvertContentBodyResponse**](docs/ContentBodyApi.md#bulkasyncconvertcontentbodyresponse) | **GET** /wiki/rest/api/contentbody/convert/async/bulk/tasks | Get asynchronous content body conversion task result in bulk
*ContentChildrenAndDescendantsApi* | [**copyPage**](docs/ContentChildrenAndDescendantsApi.md#copypageoperation) | **POST** /wiki/rest/api/content/{id}/copy | Copy single page
*ContentChildrenAndDescendantsApi* | [**copyPageHierarchy**](docs/ContentChildrenAndDescendantsApi.md#copypagehierarchyoperation) | **POST** /wiki/rest/api/content/{id}/pagehierarchy/copy | Copy page hierarchy
*ContentChildrenAndDescendantsApi* | [**getContentDescendants**](docs/ContentChildrenAndDescendantsApi.md#getcontentdescendants) | **GET** /wiki/rest/api/content/{id}/descendant | Get content descendants
*ContentChildrenAndDescendantsApi* | [**getDescendantsOfType**](docs/ContentChildrenAndDescendantsApi.md#getdescendantsoftype) | **GET** /wiki/rest/api/content/{id}/descendant/{type} | Get content descendants by type
*ContentChildrenAndDescendantsApi* | [**movePage**](docs/ContentChildrenAndDescendantsApi.md#movepage) | **PUT** /wiki/rest/api/content/{pageId}/move/{position}/{targetId} | Move a page to a new location relative to a target page
*ContentLabelsApi* | [**addLabelsToContent**](docs/ContentLabelsApi.md#addlabelstocontentoperation) | **POST** /wiki/rest/api/content/{id}/label | Add labels to content
*ContentLabelsApi* | [**removeLabelFromContent**](docs/ContentLabelsApi.md#removelabelfromcontent) | **DELETE** /wiki/rest/api/content/{id}/label/{label} | Remove label from content
*ContentLabelsApi* | [**removeLabelFromContentUsingQueryParameter**](docs/ContentLabelsApi.md#removelabelfromcontentusingqueryparameter) | **DELETE** /wiki/rest/api/content/{id}/label | Remove label from content using query parameter
*ContentMacroBodyApi* | [**getAndAsyncConvertMacroBodyByMacroId**](docs/ContentMacroBodyApi.md#getandasyncconvertmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/async/{to} | Get macro body by macro ID and convert representation Asynchronously
*ContentMacroBodyApi* | [**getAndConvertMacroBodyByMacroId**](docs/ContentMacroBodyApi.md#getandconvertmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId}/convert/{to} | Get macro body by macro ID and convert the representation synchronously
*ContentMacroBodyApi* | [**getMacroBodyByMacroId**](docs/ContentMacroBodyApi.md#getmacrobodybymacroid) | **GET** /wiki/rest/api/content/{id}/history/{version}/macro/id/{macroId} | Get macro body by macro ID
*ContentPermissionsApi* | [**checkContentPermission**](docs/ContentPermissionsApi.md#checkcontentpermission) | **POST** /wiki/rest/api/content/{id}/permission/check | Check content permissions
*ContentRestrictionsApi* | [**addGroupToContentRestrictionByGroupId**](docs/ContentRestrictionsApi.md#addgrouptocontentrestrictionbygroupid) | **PUT** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Add group to content restriction
*ContentRestrictionsApi* | [**addRestrictions**](docs/ContentRestrictionsApi.md#addrestrictions) | **POST** /wiki/rest/api/content/{id}/restriction | Add restrictions
*ContentRestrictionsApi* | [**addUserToContentRestriction**](docs/ContentRestrictionsApi.md#addusertocontentrestriction) | **PUT** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Add user to content restriction
*ContentRestrictionsApi* | [**deleteRestrictions**](docs/ContentRestrictionsApi.md#deleterestrictions) | **DELETE** /wiki/rest/api/content/{id}/restriction | Delete restrictions
*ContentRestrictionsApi* | [**getContentRestrictionStatusForUser**](docs/ContentRestrictionsApi.md#getcontentrestrictionstatusforuser) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Get content restriction status for user
*ContentRestrictionsApi* | [**getIndividualGroupRestrictionStatusByGroupId**](docs/ContentRestrictionsApi.md#getindividualgrouprestrictionstatusbygroupid) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Get content restriction status for group
*ContentRestrictionsApi* | [**getRestrictions**](docs/ContentRestrictionsApi.md#getrestrictions) | **GET** /wiki/rest/api/content/{id}/restriction | Get restrictions
*ContentRestrictionsApi* | [**getRestrictionsByOperation**](docs/ContentRestrictionsApi.md#getrestrictionsbyoperation) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation | Get restrictions by operation
*ContentRestrictionsApi* | [**getRestrictionsForOperation**](docs/ContentRestrictionsApi.md#getrestrictionsforoperation) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey} | Get restrictions for operation
*ContentRestrictionsApi* | [**removeGroupFromContentRestriction**](docs/ContentRestrictionsApi.md#removegroupfromcontentrestriction) | **DELETE** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Remove group from content restriction
*ContentRestrictionsApi* | [**removeUserFromContentRestriction**](docs/ContentRestrictionsApi.md#removeuserfromcontentrestriction) | **DELETE** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Remove user from content restriction
*ContentRestrictionsApi* | [**updateRestrictions**](docs/ContentRestrictionsApi.md#updaterestrictions) | **PUT** /wiki/rest/api/content/{id}/restriction | Update restrictions
*ContentStatesApi* | [**getAvailableContentStates**](docs/ContentStatesApi.md#getavailablecontentstates) | **GET** /wiki/rest/api/content/{id}/state/available | Gets available content states for content.
*ContentStatesApi* | [**getContentState**](docs/ContentStatesApi.md#getcontentstate) | **GET** /wiki/rest/api/content/{id}/state | Get content state
*ContentStatesApi* | [**getContentStateSettings**](docs/ContentStatesApi.md#getcontentstatesettings) | **GET** /wiki/rest/api/space/{spaceKey}/state/settings | Get content state settings for space
*ContentStatesApi* | [**getContentsWithState**](docs/ContentStatesApi.md#getcontentswithstate) | **GET** /wiki/rest/api/space/{spaceKey}/state/content | Get content in space with given content state
*ContentStatesApi* | [**getCustomContentStates**](docs/ContentStatesApi.md#getcustomcontentstates) | **GET** /wiki/rest/api/content-states | Get Custom Content States
*ContentStatesApi* | [**getSpaceContentStates**](docs/ContentStatesApi.md#getspacecontentstates) | **GET** /wiki/rest/api/space/{spaceKey}/state | Get space suggested content states
*ContentStatesApi* | [**removeContentState**](docs/ContentStatesApi.md#removecontentstate) | **DELETE** /wiki/rest/api/content/{id}/state | Removes the content state of a content and publishes a new version.
*ContentStatesApi* | [**setContentState**](docs/ContentStatesApi.md#setcontentstate) | **PUT** /wiki/rest/api/content/{id}/state | Set the content state of a content and publishes a new version of the content.
*ContentVersionsApi* | [**deleteContentVersion**](docs/ContentVersionsApi.md#deletecontentversion) | **DELETE** /wiki/rest/api/content/{id}/version/{versionNumber} | Delete content version
*ContentVersionsApi* | [**restoreContentVersion**](docs/ContentVersionsApi.md#restorecontentversion) | **POST** /wiki/rest/api/content/{id}/version | Restore content version
*ContentWatchesApi* | [**addContentWatcher**](docs/ContentWatchesApi.md#addcontentwatcher) | **POST** /wiki/rest/api/user/watch/content/{contentId} | Add content watcher
*ContentWatchesApi* | [**addLabelWatcher**](docs/ContentWatchesApi.md#addlabelwatcher) | **POST** /wiki/rest/api/user/watch/label/{labelName} | Add label watcher
*ContentWatchesApi* | [**addSpaceWatcher**](docs/ContentWatchesApi.md#addspacewatcher) | **POST** /wiki/rest/api/user/watch/space/{spaceKey} | Add space watcher
*ContentWatchesApi* | [**getContentWatchStatus**](docs/ContentWatchesApi.md#getcontentwatchstatus) | **GET** /wiki/rest/api/user/watch/content/{contentId} | Get content watch status
*ContentWatchesApi* | [**getWatchersForSpace**](docs/ContentWatchesApi.md#getwatchersforspace) | **GET** /wiki/rest/api/space/{spaceKey}/watch | Get space watchers
*ContentWatchesApi* | [**getWatchesForPage**](docs/ContentWatchesApi.md#getwatchesforpage) | **GET** /wiki/rest/api/content/{id}/notification/child-created | Get watches for page
*ContentWatchesApi* | [**getWatchesForSpace**](docs/ContentWatchesApi.md#getwatchesforspace) | **GET** /wiki/rest/api/content/{id}/notification/created | Get watches for space
*ContentWatchesApi* | [**isWatchingLabel**](docs/ContentWatchesApi.md#iswatchinglabel) | **GET** /wiki/rest/api/user/watch/label/{labelName} | Get label watch status
*ContentWatchesApi* | [**isWatchingSpace**](docs/ContentWatchesApi.md#iswatchingspace) | **GET** /wiki/rest/api/user/watch/space/{spaceKey} | Get space watch status
*ContentWatchesApi* | [**removeContentWatcher**](docs/ContentWatchesApi.md#removecontentwatcher) | **DELETE** /wiki/rest/api/user/watch/content/{contentId} | Remove content watcher
*ContentWatchesApi* | [**removeLabelWatcher**](docs/ContentWatchesApi.md#removelabelwatcher) | **DELETE** /wiki/rest/api/user/watch/label/{labelName} | Remove label watcher
*ContentWatchesApi* | [**removeSpaceWatch**](docs/ContentWatchesApi.md#removespacewatch) | **DELETE** /wiki/rest/api/user/watch/space/{spaceKey} | Remove space watch
*DynamicModulesApi* | [**getModules**](docs/DynamicModulesApi.md#getmodules) | **GET** /wiki/rest/atlassian-connect/1/app/module/dynamic | Get modules
*DynamicModulesApi* | [**registerModules**](docs/DynamicModulesApi.md#registermodules) | **POST** /wiki/rest/atlassian-connect/1/app/module/dynamic | Register modules
*DynamicModulesApi* | [**removeModules**](docs/DynamicModulesApi.md#removemodules) | **DELETE** /wiki/rest/atlassian-connect/1/app/module/dynamic | Remove modules
*ExperimentalApi* | [**addLabelsToSpace**](docs/ExperimentalApi.md#addlabelstospace) | **POST** /wiki/rest/api/space/{spaceKey}/label | Add labels to a space
*ExperimentalApi* | [**deleteLabelFromSpace**](docs/ExperimentalApi.md#deletelabelfromspace) | **DELETE** /wiki/rest/api/space/{spaceKey}/label | Remove label from a space
*ExperimentalApi* | [**deletePageTree**](docs/ExperimentalApi.md#deletepagetree) | **DELETE** /wiki/rest/api/content/{id}/pageTree | Delete page tree
*ExperimentalApi* | [**getLabelsForSpace**](docs/ExperimentalApi.md#getlabelsforspace) | **GET** /wiki/rest/api/space/{spaceKey}/label | Get Space Labels
*GroupApi* | [**addUserToGroupByGroupId**](docs/GroupApi.md#addusertogroupbygroupid) | **POST** /wiki/rest/api/group/userByGroupId | Add member to group by groupId
*GroupApi* | [**createGroup**](docs/GroupApi.md#creategroup) | **POST** /wiki/rest/api/group | Create new user group
*GroupApi* | [**getGroupByGroupId**](docs/GroupApi.md#getgroupbygroupid) | **GET** /wiki/rest/api/group/by-id | Get group
*GroupApi* | [**getGroupMembersByGroupId**](docs/GroupApi.md#getgroupmembersbygroupid) | **GET** /wiki/rest/api/group/{groupId}/membersByGroupId | Get group members
*GroupApi* | [**getGroups**](docs/GroupApi.md#getgroups) | **GET** /wiki/rest/api/group | Get groups
*GroupApi* | [**removeGroupById**](docs/GroupApi.md#removegroupbyid) | **DELETE** /wiki/rest/api/group/by-id | Delete user group
*GroupApi* | [**removeMemberFromGroupByGroupId**](docs/GroupApi.md#removememberfromgroupbygroupid) | **DELETE** /wiki/rest/api/group/userByGroupId | Remove member from group using group id
*GroupApi* | [**searchGroups**](docs/GroupApi.md#searchgroups) | **GET** /wiki/rest/api/group/picker | Search groups by partial query
*LabelInfoApi* | [**getAllLabelContent**](docs/LabelInfoApi.md#getalllabelcontent) | **GET** /wiki/rest/api/label | Get label information
*LongRunningTaskApi* | [**getTask**](docs/LongRunningTaskApi.md#gettask) | **GET** /wiki/rest/api/longtask/{id} | Get long-running task
*LongRunningTaskApi* | [**getTasks**](docs/LongRunningTaskApi.md#gettasks) | **GET** /wiki/rest/api/longtask | Get long-running tasks
*RelationApi* | [**createRelationship**](docs/RelationApi.md#createrelationship) | **PUT** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Create relationship
*RelationApi* | [**deleteRelationship**](docs/RelationApi.md#deleterelationship) | **DELETE** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Delete relationship
*RelationApi* | [**findSourcesForTarget**](docs/RelationApi.md#findsourcesfortarget) | **GET** /wiki/rest/api/relation/{relationName}/to/{targetType}/{targetKey}/from/{sourceType} | Find source entities related to a target entity
*RelationApi* | [**findTargetFromSource**](docs/RelationApi.md#findtargetfromsource) | **GET** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType} | Find target entities related to a source entity
*RelationApi* | [**getRelationship**](docs/RelationApi.md#getrelationship) | **GET** /wiki/rest/api/relation/{relationName}/from/{sourceType}/{sourceKey}/to/{targetType}/{targetKey} | Find relationship from source to target
*SearchApi* | [**searchByCQL**](docs/SearchApi.md#searchbycql) | **GET** /wiki/rest/api/search | Search content
*SearchApi* | [**searchUser**](docs/SearchApi.md#searchuser) | **GET** /wiki/rest/api/search/user | Search users
*SettingsApi* | [**getLookAndFeelSettings**](docs/SettingsApi.md#getlookandfeelsettings) | **GET** /wiki/rest/api/settings/lookandfeel | Get look and feel settings
*SettingsApi* | [**getSystemInfo**](docs/SettingsApi.md#getsysteminfo) | **GET** /wiki/rest/api/settings/systemInfo | Get system info
*SettingsApi* | [**resetLookAndFeelSettings**](docs/SettingsApi.md#resetlookandfeelsettings) | **DELETE** /wiki/rest/api/settings/lookandfeel/custom | Reset look and feel settings
*SettingsApi* | [**updateLookAndFeel**](docs/SettingsApi.md#updatelookandfeel) | **PUT** /wiki/rest/api/settings/lookandfeel | Select look and feel settings
*SettingsApi* | [**updateLookAndFeelSettings**](docs/SettingsApi.md#updatelookandfeelsettings) | **POST** /wiki/rest/api/settings/lookandfeel/custom | Update look and feel settings
*SpaceApi* | [**createPrivateSpace**](docs/SpaceApi.md#createprivatespace) | **POST** /wiki/rest/api/space/_private | Create private space
*SpaceApi* | [**createSpace**](docs/SpaceApi.md#createspace) | **POST** /wiki/rest/api/space | Create space
*SpaceApi* | [**deleteSpace**](docs/SpaceApi.md#deletespace) | **DELETE** /wiki/rest/api/space/{spaceKey} | Delete space
*SpaceApi* | [**updateSpace**](docs/SpaceApi.md#updatespace) | **PUT** /wiki/rest/api/space/{spaceKey} | Update space
*SpacePermissionsApi* | [**addCustomContentPermissions**](docs/SpacePermissionsApi.md#addcustomcontentpermissions) | **POST** /wiki/rest/api/space/{spaceKey}/permission/custom-content | Add new custom content permission to space
*SpacePermissionsApi* | [**addPermissionToSpace**](docs/SpacePermissionsApi.md#addpermissiontospace) | **POST** /wiki/rest/api/space/{spaceKey}/permission | Add new permission to space
*SpacePermissionsApi* | [**removePermission**](docs/SpacePermissionsApi.md#removepermission) | **DELETE** /wiki/rest/api/space/{spaceKey}/permission/{id} | Remove a space permission
*SpaceSettingsApi* | [**getSpaceSettings**](docs/SpaceSettingsApi.md#getspacesettings) | **GET** /wiki/rest/api/space/{spaceKey}/settings | Get space settings
*SpaceSettingsApi* | [**updateSpaceSettings**](docs/SpaceSettingsApi.md#updatespacesettings) | **PUT** /wiki/rest/api/space/{spaceKey}/settings | Update space settings
*TemplateApi* | [**createContentTemplate**](docs/TemplateApi.md#createcontenttemplate) | **POST** /wiki/rest/api/template | Create content template
*TemplateApi* | [**getBlueprintTemplates**](docs/TemplateApi.md#getblueprinttemplates) | **GET** /wiki/rest/api/template/blueprint | Get blueprint templates
*TemplateApi* | [**getContentTemplate**](docs/TemplateApi.md#getcontenttemplate) | **GET** /wiki/rest/api/template/{contentTemplateId} | Get content template
*TemplateApi* | [**getContentTemplates**](docs/TemplateApi.md#getcontenttemplates) | **GET** /wiki/rest/api/template/page | Get content templates
*TemplateApi* | [**removeTemplate**](docs/TemplateApi.md#removetemplate) | **DELETE** /wiki/rest/api/template/{contentTemplateId} | Remove template
*TemplateApi* | [**updateContentTemplate**](docs/TemplateApi.md#updatecontenttemplate) | **PUT** /wiki/rest/api/template | Update content template
*ThemesApi* | [**getGlobalTheme**](docs/ThemesApi.md#getglobaltheme) | **GET** /wiki/rest/api/settings/theme/selected | Get global theme
*ThemesApi* | [**getSpaceTheme**](docs/ThemesApi.md#getspacetheme) | **GET** /wiki/rest/api/space/{spaceKey}/theme | Get space theme
*ThemesApi* | [**getTheme**](docs/ThemesApi.md#gettheme) | **GET** /wiki/rest/api/settings/theme/{themeKey} | Get theme
*ThemesApi* | [**getThemes**](docs/ThemesApi.md#getthemes) | **GET** /wiki/rest/api/settings/theme | Get themes
*ThemesApi* | [**resetSpaceTheme**](docs/ThemesApi.md#resetspacetheme) | **DELETE** /wiki/rest/api/space/{spaceKey}/theme | Reset space theme
*ThemesApi* | [**setSpaceTheme**](docs/ThemesApi.md#setspacetheme) | **PUT** /wiki/rest/api/space/{spaceKey}/theme | Set space theme
*UserPropertiesApi* | [**createUserProperty**](docs/UserPropertiesApi.md#createuserproperty) | **POST** /wiki/rest/api/user/{userId}/property/{key} | Create user property by key
*UserPropertiesApi* | [**deleteUserProperty**](docs/UserPropertiesApi.md#deleteuserproperty) | **DELETE** /wiki/rest/api/user/{userId}/property/{key} | Delete user property
*UserPropertiesApi* | [**getUserProperties**](docs/UserPropertiesApi.md#getuserproperties) | **GET** /wiki/rest/api/user/{userId}/property | Get user properties
*UserPropertiesApi* | [**getUserProperty**](docs/UserPropertiesApi.md#getuserproperty) | **GET** /wiki/rest/api/user/{userId}/property/{key} | Get user property
*UserPropertiesApi* | [**updateUserProperty**](docs/UserPropertiesApi.md#updateuserproperty) | **PUT** /wiki/rest/api/user/{userId}/property/{key} | Update user property
*UsersApi* | [**getAnonymousUser**](docs/UsersApi.md#getanonymoususer) | **GET** /wiki/rest/api/user/anonymous | Get anonymous user
*UsersApi* | [**getBulkUserLookup**](docs/UsersApi.md#getbulkuserlookup) | **GET** /wiki/rest/api/user/bulk | Get multiple users using ids
*UsersApi* | [**getCurrentUser**](docs/UsersApi.md#getcurrentuser) | **GET** /wiki/rest/api/user/current | Get current user
*UsersApi* | [**getGroupMembershipsForUser**](docs/UsersApi.md#getgroupmembershipsforuser) | **GET** /wiki/rest/api/user/memberof | Get group memberships for user
*UsersApi* | [**getPrivacyUnsafeUserEmail**](docs/UsersApi.md#getprivacyunsafeuseremail) | **GET** /wiki/rest/api/user/email | Get user email address
*UsersApi* | [**getPrivacyUnsafeUserEmailBulk**](docs/UsersApi.md#getprivacyunsafeuseremailbulk) | **GET** /wiki/rest/api/user/email/bulk | Get user email addresses in batch
*UsersApi* | [**getUser**](docs/UsersApi.md#getuser) | **GET** /wiki/rest/api/user | Get user


### Models

- [AccountId](docs/AccountId.md)
- [AccountIdEmailRecord](docs/AccountIdEmailRecord.md)
- [AddContentRestriction](docs/AddContentRestriction.md)
- [AddContentRestrictionRestrictions](docs/AddContentRestrictionRestrictions.md)
- [AddContentRestrictionRestrictionsGroupInner](docs/AddContentRestrictionRestrictionsGroupInner.md)
- [AddContentRestrictionRestrictionsUserInner](docs/AddContentRestrictionRestrictionsUserInner.md)
- [AddLabelsToContentRequest](docs/AddLabelsToContentRequest.md)
- [AffectedObject](docs/AffectedObject.md)
- [ArchivePagesRequest](docs/ArchivePagesRequest.md)
- [ArchivePagesRequestPagesInner](docs/ArchivePagesRequestPagesInner.md)
- [AsyncContentBody](docs/AsyncContentBody.md)
- [AsyncContentBodyExpandable](docs/AsyncContentBodyExpandable.md)
- [AsyncContentBodyMediaToken](docs/AsyncContentBodyMediaToken.md)
- [AsyncId](docs/AsyncId.md)
- [AttachmentPropertiesUpdateBody](docs/AttachmentPropertiesUpdateBody.md)
- [AttachmentPropertiesUpdateBodyMetadata](docs/AttachmentPropertiesUpdateBodyMetadata.md)
- [AttachmentUpdate](docs/AttachmentUpdate.md)
- [AttachmentUpdateContainer](docs/AttachmentUpdateContainer.md)
- [AttachmentUpdateMetadata](docs/AttachmentUpdateMetadata.md)
- [AttachmentUpdateVersion](docs/AttachmentUpdateVersion.md)
- [AuditRecord](docs/AuditRecord.md)
- [AuditRecordArray](docs/AuditRecordArray.md)
- [AuditRecordAuthor](docs/AuditRecordAuthor.md)
- [AuditRecordCreate](docs/AuditRecordCreate.md)
- [AuditRecordCreateAuthor](docs/AuditRecordCreateAuthor.md)
- [AvailableContentStates](docs/AvailableContentStates.md)
- [BlueprintTemplate](docs/BlueprintTemplate.md)
- [BlueprintTemplateArray](docs/BlueprintTemplateArray.md)
- [BlueprintTemplateExpandable](docs/BlueprintTemplateExpandable.md)
- [BlueprintTemplateOriginalTemplate](docs/BlueprintTemplateOriginalTemplate.md)
- [Breadcrumb](docs/Breadcrumb.md)
- [BulkContentBodyConversionInput](docs/BulkContentBodyConversionInput.md)
- [BulkUserLookup](docs/BulkUserLookup.md)
- [BulkUserLookupArray](docs/BulkUserLookupArray.md)
- [BulkUserLookupExpandable](docs/BulkUserLookupExpandable.md)
- [ButtonLookAndFeel](docs/ButtonLookAndFeel.md)
- [CQLPersonalDataConvertedQueries](docs/CQLPersonalDataConvertedQueries.md)
- [CQLPersonalDataMigrationRequest](docs/CQLPersonalDataMigrationRequest.md)
- [ChangedValue](docs/ChangedValue.md)
- [ConnectModules](docs/ConnectModules.md)
- [ContainerLookAndFeel](docs/ContainerLookAndFeel.md)
- [ContainerSummary](docs/ContainerSummary.md)
- [Content](docs/Content.md)
- [ContentArray](docs/ContentArray.md)
- [ContentBlogpost](docs/ContentBlogpost.md)
- [ContentBlueprintDraft](docs/ContentBlueprintDraft.md)
- [ContentBlueprintDraftAncestorsInner](docs/ContentBlueprintDraftAncestorsInner.md)
- [ContentBlueprintDraftSpace](docs/ContentBlueprintDraftSpace.md)
- [ContentBlueprintDraftVersion](docs/ContentBlueprintDraftVersion.md)
- [ContentBody](docs/ContentBody.md)
- [ContentBodyConversionInput](docs/ContentBodyConversionInput.md)
- [ContentBodyCreate](docs/ContentBodyCreate.md)
- [ContentBodyCreateStorage](docs/ContentBodyCreateStorage.md)
- [ContentBodyExpandable](docs/ContentBodyExpandable.md)
- [ContentChildType](docs/ContentChildType.md)
- [ContentChildTypeAttachment](docs/ContentChildTypeAttachment.md)
- [ContentChildTypeExpandable](docs/ContentChildTypeExpandable.md)
- [ContentChildren](docs/ContentChildren.md)
- [ContentChildrenExpandable](docs/ContentChildrenExpandable.md)
- [ContentCreate](docs/ContentCreate.md)
- [ContentCreateAncestorsInner](docs/ContentCreateAncestorsInner.md)
- [ContentCreateBody](docs/ContentCreateBody.md)
- [ContentCreateContainer](docs/ContentCreateContainer.md)
- [ContentCreateContainerId](docs/ContentCreateContainerId.md)
- [ContentCreateSpace](docs/ContentCreateSpace.md)
- [ContentCreateSpaceDescription](docs/ContentCreateSpaceDescription.md)
- [ContentCreateSpaceDescriptionExpandable](docs/ContentCreateSpaceDescriptionExpandable.md)
- [ContentCreateSpaceHistory](docs/ContentCreateSpaceHistory.md)
- [ContentCreateSpaceMetadata](docs/ContentCreateSpaceMetadata.md)
- [ContentExpandable](docs/ContentExpandable.md)
- [ContentHistory](docs/ContentHistory.md)
- [ContentHistoryContributors](docs/ContentHistoryContributors.md)
- [ContentHistoryExpandable](docs/ContentHistoryExpandable.md)
- [ContentLookAndFeel](docs/ContentLookAndFeel.md)
- [ContentMetadata](docs/ContentMetadata.md)
- [ContentMetadataCurrentuser](docs/ContentMetadataCurrentuser.md)
- [ContentMetadataCurrentuserExpandable](docs/ContentMetadataCurrentuserExpandable.md)
- [ContentMetadataCurrentuserFavourited](docs/ContentMetadataCurrentuserFavourited.md)
- [ContentMetadataCurrentuserLastcontributed](docs/ContentMetadataCurrentuserLastcontributed.md)
- [ContentMetadataCurrentuserLastmodified](docs/ContentMetadataCurrentuserLastmodified.md)
- [ContentMetadataCurrentuserViewed](docs/ContentMetadataCurrentuserViewed.md)
- [ContentMetadataLabels](docs/ContentMetadataLabels.md)
- [ContentPageResponse](docs/ContentPageResponse.md)
- [ContentPermissionRequest](docs/ContentPermissionRequest.md)
- [ContentProperty](docs/ContentProperty.md)
- [ContentPropertyArray](docs/ContentPropertyArray.md)
- [ContentPropertyCreate](docs/ContentPropertyCreate.md)
- [ContentPropertyCreateNoKey](docs/ContentPropertyCreateNoKey.md)
- [ContentPropertyExpandable](docs/ContentPropertyExpandable.md)
- [ContentPropertyUpdate](docs/ContentPropertyUpdate.md)
- [ContentPropertyUpdateVersion](docs/ContentPropertyUpdateVersion.md)
- [ContentPropertyUpdateVersionNumber](docs/ContentPropertyUpdateVersionNumber.md)
- [ContentPropertyValue](docs/ContentPropertyValue.md)
- [ContentPropertyVersion](docs/ContentPropertyVersion.md)
- [ContentRestriction](docs/ContentRestriction.md)
- [ContentRestrictionAddOrUpdateArray](docs/ContentRestrictionAddOrUpdateArray.md)
- [ContentRestrictionAddOrUpdateArrayOneOf](docs/ContentRestrictionAddOrUpdateArrayOneOf.md)
- [ContentRestrictionArray](docs/ContentRestrictionArray.md)
- [ContentRestrictionExpandable](docs/ContentRestrictionExpandable.md)
- [ContentRestrictionRestrictions](docs/ContentRestrictionRestrictions.md)
- [ContentRestrictionRestrictionsExpandable](docs/ContentRestrictionRestrictionsExpandable.md)
- [ContentRestrictionUpdate](docs/ContentRestrictionUpdate.md)
- [ContentRestrictionUpdateRestrictions](docs/ContentRestrictionUpdateRestrictions.md)
- [ContentRestrictionUpdateRestrictionsGroupInner](docs/ContentRestrictionUpdateRestrictionsGroupInner.md)
- [ContentRestrictionUpdateRestrictionsUser](docs/ContentRestrictionUpdateRestrictionsUser.md)
- [ContentRestrictions](docs/ContentRestrictions.md)
- [ContentRestrictionsExpandable](docs/ContentRestrictionsExpandable.md)
- [ContentState](docs/ContentState.md)
- [ContentStateResponse](docs/ContentStateResponse.md)
- [ContentStateRestInput](docs/ContentStateRestInput.md)
- [ContentStateSettings](docs/ContentStateSettings.md)
- [ContentTemplate](docs/ContentTemplate.md)
- [ContentTemplateArray](docs/ContentTemplateArray.md)
- [ContentTemplateBody](docs/ContentTemplateBody.md)
- [ContentTemplateBodyCreate](docs/ContentTemplateBodyCreate.md)
- [ContentTemplateCreate](docs/ContentTemplateCreate.md)
- [ContentTemplateCreateSpace](docs/ContentTemplateCreateSpace.md)
- [ContentTemplateOriginalTemplate](docs/ContentTemplateOriginalTemplate.md)
- [ContentTemplateUpdate](docs/ContentTemplateUpdate.md)
- [ContentTemplateUpdateSpace](docs/ContentTemplateUpdateSpace.md)
- [ContentUpdate](docs/ContentUpdate.md)
- [ContentUpdateAncestorsInner](docs/ContentUpdateAncestorsInner.md)
- [ContentUpdateAncestorsInnerId](docs/ContentUpdateAncestorsInnerId.md)
- [ContentUpdateBody](docs/ContentUpdateBody.md)
- [ContentUpdateVersion](docs/ContentUpdateVersion.md)
- [CopyPageHierarchyRequest](docs/CopyPageHierarchyRequest.md)
- [CopyPageHierarchyTitleOptions](docs/CopyPageHierarchyTitleOptions.md)
- [CopyPageRequest](docs/CopyPageRequest.md)
- [CopyPageRequestBody](docs/CopyPageRequestBody.md)
- [CopyPageRequestDestination](docs/CopyPageRequestDestination.md)
- [DynamicModulesErrorMessage](docs/DynamicModulesErrorMessage.md)
- [EmbeddedContent](docs/EmbeddedContent.md)
- [GenericLinksValue](docs/GenericLinksValue.md)
- [GetRestrictionsByOperation200ResponseValue](docs/GetRestrictionsByOperation200ResponseValue.md)
- [GetViewers200Response](docs/GetViewers200Response.md)
- [GetViews200Response](docs/GetViews200Response.md)
- [GlobalSpaceIdentifier](docs/GlobalSpaceIdentifier.md)
- [Group](docs/Group.md)
- [GroupArray](docs/GroupArray.md)
- [GroupArrayWithLinks](docs/GroupArrayWithLinks.md)
- [GroupCreate](docs/GroupCreate.md)
- [GroupName](docs/GroupName.md)
- [HeaderLookAndFeel](docs/HeaderLookAndFeel.md)
- [HorizontalHeaderLookAndFeel](docs/HorizontalHeaderLookAndFeel.md)
- [Icon](docs/Icon.md)
- [Label](docs/Label.md)
- [LabelArray](docs/LabelArray.md)
- [LabelCreate](docs/LabelCreate.md)
- [LabelDetails](docs/LabelDetails.md)
- [LabeledContent](docs/LabeledContent.md)
- [LabeledContentPageResponse](docs/LabeledContentPageResponse.md)
- [LabeledContentType](docs/LabeledContentType.md)
- [LongTask](docs/LongTask.md)
- [LongTaskLinks](docs/LongTaskLinks.md)
- [LongTaskStatus](docs/LongTaskStatus.md)
- [LongTaskStatusAdditionalDetails](docs/LongTaskStatusAdditionalDetails.md)
- [LongTaskStatusArray](docs/LongTaskStatusArray.md)
- [LongTaskStatusName](docs/LongTaskStatusName.md)
- [LongTaskStatusWithLinks](docs/LongTaskStatusWithLinks.md)
- [LongTaskStatusWithLinksAdditionalDetails](docs/LongTaskStatusWithLinksAdditionalDetails.md)
- [LookAndFeel](docs/LookAndFeel.md)
- [LookAndFeelHeadings](docs/LookAndFeelHeadings.md)
- [LookAndFeelSelection](docs/LookAndFeelSelection.md)
- [LookAndFeelSettings](docs/LookAndFeelSettings.md)
- [LookAndFeelWithLinks](docs/LookAndFeelWithLinks.md)
- [MacroInstance](docs/MacroInstance.md)
- [MenusLookAndFeel](docs/MenusLookAndFeel.md)
- [MenusLookAndFeelHoverOrFocus](docs/MenusLookAndFeelHoverOrFocus.md)
- [Message](docs/Message.md)
- [MessageArgsInner](docs/MessageArgsInner.md)
- [MovePage200Response](docs/MovePage200Response.md)
- [NavigationLookAndFeel](docs/NavigationLookAndFeel.md)
- [NavigationLookAndFeelHoverOrFocus](docs/NavigationLookAndFeelHoverOrFocus.md)
- [OperationCheckResult](docs/OperationCheckResult.md)
- [PermissionCheckResponse](docs/PermissionCheckResponse.md)
- [PermissionSubject](docs/PermissionSubject.md)
- [PermissionSubjectWithGroupId](docs/PermissionSubjectWithGroupId.md)
- [PropertyValue](docs/PropertyValue.md)
- [Relation](docs/Relation.md)
- [RelationArray](docs/RelationArray.md)
- [RelationData](docs/RelationData.md)
- [RelationExpandable](docs/RelationExpandable.md)
- [RelationSource](docs/RelationSource.md)
- [RetentionPeriod](docs/RetentionPeriod.md)
- [ScreenLookAndFeel](docs/ScreenLookAndFeel.md)
- [ScreenLookAndFeelLayer](docs/ScreenLookAndFeelLayer.md)
- [SearchFieldLookAndFeel](docs/SearchFieldLookAndFeel.md)
- [SearchPageResponseSearchResult](docs/SearchPageResponseSearchResult.md)
- [SearchResult](docs/SearchResult.md)
- [Space](docs/Space.md)
- [SpaceArray](docs/SpaceArray.md)
- [SpaceCreate](docs/SpaceCreate.md)
- [SpaceDescription](docs/SpaceDescription.md)
- [SpaceDescriptionCreate](docs/SpaceDescriptionCreate.md)
- [SpaceDescriptionCreatePlain](docs/SpaceDescriptionCreatePlain.md)
- [SpaceExpandable](docs/SpaceExpandable.md)
- [SpaceMetadata](docs/SpaceMetadata.md)
- [SpacePermission](docs/SpacePermission.md)
- [SpacePermissionCreate](docs/SpacePermissionCreate.md)
- [SpacePermissionCreateSubjects](docs/SpacePermissionCreateSubjects.md)
- [SpacePermissionCreateSubjectsGroup](docs/SpacePermissionCreateSubjectsGroup.md)
- [SpacePermissionCreateSubjectsUser](docs/SpacePermissionCreateSubjectsUser.md)
- [SpacePermissionCustomContent](docs/SpacePermissionCustomContent.md)
- [SpacePermissionCustomContentOperationsInner](docs/SpacePermissionCustomContentOperationsInner.md)
- [SpacePermissionRequest](docs/SpacePermissionRequest.md)
- [SpacePermissionSubjects](docs/SpacePermissionSubjects.md)
- [SpacePermissionSubjectsGroup](docs/SpacePermissionSubjectsGroup.md)
- [SpacePermissionSubjectsUser](docs/SpacePermissionSubjectsUser.md)
- [SpacePermissionV2](docs/SpacePermissionV2.md)
- [SpacePermissionV2Operation](docs/SpacePermissionV2Operation.md)
- [SpaceProperty](docs/SpaceProperty.md)
- [SpacePropertyArray](docs/SpacePropertyArray.md)
- [SpacePropertyCreate](docs/SpacePropertyCreate.md)
- [SpacePropertyCreateNoKey](docs/SpacePropertyCreateNoKey.md)
- [SpacePropertyCreateSpace](docs/SpacePropertyCreateSpace.md)
- [SpacePropertyExpandable](docs/SpacePropertyExpandable.md)
- [SpacePropertyUpdate](docs/SpacePropertyUpdate.md)
- [SpacePropertyValue](docs/SpacePropertyValue.md)
- [SpaceSettings](docs/SpaceSettings.md)
- [SpaceSettingsEditor](docs/SpaceSettingsEditor.md)
- [SpaceSettingsUpdate](docs/SpaceSettingsUpdate.md)
- [SpaceUpdate](docs/SpaceUpdate.md)
- [SpaceWatch](docs/SpaceWatch.md)
- [SpaceWatchArray](docs/SpaceWatchArray.md)
- [SuperBatchWebResources](docs/SuperBatchWebResources.md)
- [SuperBatchWebResourcesTags](docs/SuperBatchWebResourcesTags.md)
- [SuperBatchWebResourcesUris](docs/SuperBatchWebResourcesUris.md)
- [SuperBatchWebResourcesUrisAll](docs/SuperBatchWebResourcesUrisAll.md)
- [SystemInfoEntity](docs/SystemInfoEntity.md)
- [Task](docs/Task.md)
- [TaskPageResponse](docs/TaskPageResponse.md)
- [TaskStatusUpdate](docs/TaskStatusUpdate.md)
- [Theme](docs/Theme.md)
- [ThemeArray](docs/ThemeArray.md)
- [ThemeNoLinks](docs/ThemeNoLinks.md)
- [ThemeUpdate](docs/ThemeUpdate.md)
- [TopNavigationLookAndFeel](docs/TopNavigationLookAndFeel.md)
- [TopNavigationLookAndFeelHoverOrFocus](docs/TopNavigationLookAndFeelHoverOrFocus.md)
- [User](docs/User.md)
- [UserAnonymous](docs/UserAnonymous.md)
- [UserAnonymousExpandable](docs/UserAnonymousExpandable.md)
- [UserArray](docs/UserArray.md)
- [UserDetails](docs/UserDetails.md)
- [UserDetailsBusiness](docs/UserDetailsBusiness.md)
- [UserDetailsPersonal](docs/UserDetailsPersonal.md)
- [UserProperty](docs/UserProperty.md)
- [UserPropertyCreate](docs/UserPropertyCreate.md)
- [UserPropertyKeyArray](docs/UserPropertyKeyArray.md)
- [UserPropertyKeyArrayResultsInner](docs/UserPropertyKeyArrayResultsInner.md)
- [UserPropertyUpdate](docs/UserPropertyUpdate.md)
- [UserWatch](docs/UserWatch.md)
- [UsersUserKeys](docs/UsersUserKeys.md)
- [Version](docs/Version.md)
- [VersionArray](docs/VersionArray.md)
- [VersionExpandable](docs/VersionExpandable.md)
- [VersionRestore](docs/VersionRestore.md)
- [VersionRestoreParams](docs/VersionRestoreParams.md)
- [Watch](docs/Watch.md)
- [WatchArray](docs/WatchArray.md)
- [WatchUser](docs/WatchUser.md)
- [WebResourceDependencies](docs/WebResourceDependencies.md)
- [WebResourceDependenciesExpandable](docs/WebResourceDependenciesExpandable.md)
- [WebResourceDependenciesTags](docs/WebResourceDependenciesTags.md)
- [WebResourceDependenciesUris](docs/WebResourceDependenciesUris.md)
- [WebResourceDependenciesUrisExpandable](docs/WebResourceDependenciesUrisExpandable.md)

### Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
#### basicAuth


- **Type**: HTTP basic authentication
<a id="oAuthDefinitions-accessCode"></a>
#### oAuthDefinitions accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.atlassian.com/authorize
- **Scopes**: 
  - `read:confluence-content.all`: Read all content, including content body (expansions permitted). Note, APIs using this scope may also return data allowed by read:confluence-space.summary. However, this scope is not a substitute for read:confluence-space.summary.
  - `read:confluence-content.permission`: Read content permissions.
  - `read:confluence-content.summary`: Read a summary of the content, which is the content without expansions. Note, APIs using this scope may also return data allowed by read:confluence-space.summary. However, this scope is not a substitute for read:confluence-space.summary.
  - `write:confluence-content`: Permits the creation of pages, blogs, comments and questions.
  - `read:confluence-space.summary`: Read a summary of space information without expansions.
  - `write:confluence-space`: Create, update and delete space information.
  - `write:confluence-file`: Upload attachments.
  - `read:confluence-props`: Read content properties.
  - `write:confluence-props`: Write content properties.
  - `search:confluence`: Search Confluence. Note, APIs using this scope may also return data allowed by read:confluence-space.summary and read:confluence-content.summary. However, this scope is not a substitute for read:confluence-space.summary or read:confluence-content.summary.
  - `manage:confluence-configuration`: Manage global settings.
  - `read:confluence-groups`: Read user groups.
  - `write:confluence-groups`: Create, remove and update user groups.
  - `read:confluence-user`: Read users.
  - `readonly:content.attachment:confluence`: Download attachments of a Confluence page or blogpost that you have access to.
  - `read:content:confluence`: View content.
  - `read:content-details:confluence`: View content details.
  - `write:content:confluence`: Create and update content.
  - `delete:content:confluence`: Delete content.
  - `read:space-details:confluence`: View space details.
  - `read:analytics.content:confluence`: View analytics for content.
  - `read:audit-log:confluence`: View audit records.
  - `write:audit-log:confluence`: Create audit records.
  - `read:configuration:confluence`: View Confluence settings.
  - `write:configuration:confluence`: Update Confluence settings.
  - `read:page:confluence`: View pages.
  - `write:page:confluence`: Create and update pages.
  - `delete:page:confluence`: Delete pages.
  - `read:blogpost:confluence`: View blogposts.
  - `write:blogpost:confluence`: Create and update blogposts.
  - `delete:blogpost:confluence`: Delete blogposts.
  - `read:whiteboard:confluence`: View whiteboards.
  - `write:whiteboard:confluence`: Create and update whiteboards.
  - `delete:whiteboard:confluence`: Delete whiteboards.
  - `read:custom-content:confluence`: View custom content.
  - `write:custom-content:confluence`: Create and update custom content.
  - `delete:custom-content:confluence`: Delete custom content.
  - `read:attachment:confluence`: View and download content attachments.
  - `write:attachment:confluence`: Create and update attachments.
  - `delete:attachment:confluence`: Delete attachments.
  - `read:comment:confluence`: View comments.
  - `write:comment:confluence`: Create and update comments.
  - `delete:comment:confluence`: Delete comments.
  - `read:template:confluence`: View content templates.
  - `write:template:confluence`: Create, update and delete content templates.
  - `read:label:confluence`: View labels.
  - `write:label:confluence`: Add and remove labels.
  - `read:content.permission:confluence`: Check content permissions.
  - `read:content.property:confluence`: View content properties.
  - `write:content.property:confluence`: Create, update and delete content properties.
  - `read:content.restriction:confluence`: View content restrictions.
  - `write:content.restriction:confluence`: Update content restrictions.
  - `read:content.metadata:confluence`: View content summaries.
  - `read:watcher:confluence`: View content watchers.
  - `write:watcher:confluence`: Add and remove content watchers.
  - `read:group:confluence`: View groups.
  - `write:group:confluence`: Create and delete groups.
  - `read:inlinetask:confluence`: View tasks.
  - `write:inlinetask:confluence`: Update tasks.
  - `read:relation:confluence`: View entity relationships.
  - `write:relation:confluence`: Create and update entity relationships.
  - `read:space:confluence`: View spaces.
  - `write:space:confluence`: Create and update spaces.
  - `delete:space:confluence`: Delete spaces.
  - `read:space.permission:confluence`: View space permissions.
  - `write:space.permission:confluence`: Update space permissions.
  - `read:space.property:confluence`: View space properties.
  - `write:space.property:confluence`: Create, update and delete space properties.
  - `read:user.property:confluence`: View user properties.
  - `write:user.property:confluence`: Create, update and delete user properties.
  - `read:space.setting:confluence`: View space settings.
  - `write:space.setting:confluence`: Update space settings.
  - `read:user:confluence`: View user details.
  - `moderate:core-content:confluence`: Moderate core contents
  - `moderate:comment:confluence`: Moderate comments
  - `read:email-address:confluence`: View email addresses of all users regardless of the user’s profile visibility settings.

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.19.0`
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

[]()
