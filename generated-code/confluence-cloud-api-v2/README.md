# confluence-cloud-api-v2@2.0.0

A TypeScript SDK client for the no-default API.

## Usage

First, install the SDK from npm.

```bash
npm install confluence-cloud-api-v2 --save
```

Next, try it out.


```ts
import {
  Configuration,
  AdminKeyApi,
} from 'confluence-cloud-api-v2';
import type { DisableAdminKeyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const api = new AdminKeyApi();

  try {
    const data = await api.disableAdminKey();
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

All URIs are relative to *https://no-default/wiki/api/v2*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AdminKeyApi* | [**disableAdminKey**](docs/AdminKeyApi.md#disableadminkey) | **DELETE** /admin-key | Disable Admin Key
*AdminKeyApi* | [**enableAdminKey**](docs/AdminKeyApi.md#enableadminkeyoperation) | **POST** /admin-key | Enable Admin Key
*AdminKeyApi* | [**getAdminKey**](docs/AdminKeyApi.md#getadminkey) | **GET** /admin-key | Get Admin Key
*AncestorsApi* | [**getDatabaseAncestors**](docs/AncestorsApi.md#getdatabaseancestors) | **GET** /databases/{id}/ancestors | Get all ancestors of database
*AncestorsApi* | [**getFolderAncestors**](docs/AncestorsApi.md#getfolderancestors) | **GET** /folders/{id}/ancestors | Get all ancestors of folder
*AncestorsApi* | [**getPageAncestors**](docs/AncestorsApi.md#getpageancestors) | **GET** /pages/{id}/ancestors | Get all ancestors of page
*AncestorsApi* | [**getSmartLinkAncestors**](docs/AncestorsApi.md#getsmartlinkancestors) | **GET** /embeds/{id}/ancestors | Get all ancestors of Smart Link in content tree
*AncestorsApi* | [**getWhiteboardAncestors**](docs/AncestorsApi.md#getwhiteboardancestors) | **GET** /whiteboards/{id}/ancestors | Get all ancestors of whiteboard
*AppPropertiesApi* | [**deleteForgeAppProperty**](docs/AppPropertiesApi.md#deleteforgeappproperty) | **DELETE** /app/properties/{propertyKey} | Deletes a Forge app property.
*AppPropertiesApi* | [**getForgeAppProperties**](docs/AppPropertiesApi.md#getforgeappproperties) | **GET** /app/properties | Get Forge app properties.
*AppPropertiesApi* | [**getForgeAppProperty**](docs/AppPropertiesApi.md#getforgeappproperty) | **GET** /app/properties/{propertyKey} | Get a Forge app property by key.
*AppPropertiesApi* | [**putForgeAppProperty**](docs/AppPropertiesApi.md#putforgeappproperty) | **PUT** /app/properties/{propertyKey} | Create or update a Forge app property.
*AttachmentApi* | [**deleteAttachment**](docs/AttachmentApi.md#deleteattachment) | **DELETE** /attachments/{id} | Delete attachment
*AttachmentApi* | [**getAttachmentById**](docs/AttachmentApi.md#getattachmentbyid) | **GET** /attachments/{id} | Get attachment by id
*AttachmentApi* | [**getAttachments**](docs/AttachmentApi.md#getattachments) | **GET** /attachments | Get attachments
*AttachmentApi* | [**getBlogpostAttachments**](docs/AttachmentApi.md#getblogpostattachments) | **GET** /blogposts/{id}/attachments | Get attachments for blog post
*AttachmentApi* | [**getCustomContentAttachments**](docs/AttachmentApi.md#getcustomcontentattachments) | **GET** /custom-content/{id}/attachments | Get attachments for custom content
*AttachmentApi* | [**getLabelAttachments**](docs/AttachmentApi.md#getlabelattachments) | **GET** /labels/{id}/attachments | Get attachments for label
*AttachmentApi* | [**getPageAttachments**](docs/AttachmentApi.md#getpageattachments) | **GET** /pages/{id}/attachments | Get attachments for page
*BlogPostApi* | [**createBlogPost**](docs/BlogPostApi.md#createblogpostoperation) | **POST** /blogposts | Create blog post
*BlogPostApi* | [**deleteBlogPost**](docs/BlogPostApi.md#deleteblogpost) | **DELETE** /blogposts/{id} | Delete blog post
*BlogPostApi* | [**getBlogPostById**](docs/BlogPostApi.md#getblogpostbyid) | **GET** /blogposts/{id} | Get blog post by id
*BlogPostApi* | [**getBlogPosts**](docs/BlogPostApi.md#getblogposts) | **GET** /blogposts | Get blog posts
*BlogPostApi* | [**getBlogPostsInSpace**](docs/BlogPostApi.md#getblogpostsinspace) | **GET** /spaces/{id}/blogposts | Get blog posts in space
*BlogPostApi* | [**getLabelBlogPosts**](docs/BlogPostApi.md#getlabelblogposts) | **GET** /labels/{id}/blogposts | Get blog posts for label
*BlogPostApi* | [**updateBlogPost**](docs/BlogPostApi.md#updateblogpostoperation) | **PUT** /blogposts/{id} | Update blog post
*ChildrenApi* | [**getChildCustomContent**](docs/ChildrenApi.md#getchildcustomcontent) | **GET** /custom-content/{id}/children | Get child custom content
*ChildrenApi* | [**getChildPages**](docs/ChildrenApi.md#getchildpages) | **GET** /pages/{id}/children | Get child pages
*ChildrenApi* | [**getDatabaseDirectChildren**](docs/ChildrenApi.md#getdatabasedirectchildren) | **GET** /databases/{id}/direct-children | Get direct children of a database
*ChildrenApi* | [**getFolderDirectChildren**](docs/ChildrenApi.md#getfolderdirectchildren) | **GET** /folders/{id}/direct-children | Get direct children of a folder
*ChildrenApi* | [**getPageDirectChildren**](docs/ChildrenApi.md#getpagedirectchildren) | **GET** /pages/{id}/direct-children | Get direct children of a page
*ChildrenApi* | [**getSmartLinkDirectChildren**](docs/ChildrenApi.md#getsmartlinkdirectchildren) | **GET** /embeds/{id}/direct-children | Get direct children of a Smart Link
*ChildrenApi* | [**getWhiteboardDirectChildren**](docs/ChildrenApi.md#getwhiteboarddirectchildren) | **GET** /whiteboards/{id}/direct-children | Get direct children of a whiteboard
*ClassificationLevelApi* | [**deleteSpaceDefaultClassificationLevel**](docs/ClassificationLevelApi.md#deletespacedefaultclassificationlevel) | **DELETE** /spaces/{id}/classification-level/default | Delete space default classification level
*ClassificationLevelApi* | [**getBlogPostClassificationLevel**](docs/ClassificationLevelApi.md#getblogpostclassificationlevel) | **GET** /blogposts/{id}/classification-level | Get blog post classification level
*ClassificationLevelApi* | [**getClassificationLevels**](docs/ClassificationLevelApi.md#getclassificationlevels) | **GET** /classification-levels | Get list of classification levels
*ClassificationLevelApi* | [**getDatabaseClassificationLevel**](docs/ClassificationLevelApi.md#getdatabaseclassificationlevel) | **GET** /databases/{id}/classification-level | Get database classification level
*ClassificationLevelApi* | [**getPageClassificationLevel**](docs/ClassificationLevelApi.md#getpageclassificationlevel) | **GET** /pages/{id}/classification-level | Get page classification level
*ClassificationLevelApi* | [**getSpaceDefaultClassificationLevel**](docs/ClassificationLevelApi.md#getspacedefaultclassificationlevel) | **GET** /spaces/{id}/classification-level/default | Get space default classification level
*ClassificationLevelApi* | [**getWhiteboardClassificationLevel**](docs/ClassificationLevelApi.md#getwhiteboardclassificationlevel) | **GET** /whiteboards/{id}/classification-level | Get whiteboard classification level
*ClassificationLevelApi* | [**postBlogPostClassificationLevel**](docs/ClassificationLevelApi.md#postblogpostclassificationlevel) | **POST** /blogposts/{id}/classification-level/reset | Reset blog post classification level
*ClassificationLevelApi* | [**postDatabaseClassificationLevel**](docs/ClassificationLevelApi.md#postdatabaseclassificationlevel) | **POST** /databases/{id}/classification-level/reset | Reset database classification level
*ClassificationLevelApi* | [**postPageClassificationLevel**](docs/ClassificationLevelApi.md#postpageclassificationleveloperation) | **POST** /pages/{id}/classification-level/reset | Reset page classification level
*ClassificationLevelApi* | [**postWhiteboardClassificationLevel**](docs/ClassificationLevelApi.md#postwhiteboardclassificationleveloperation) | **POST** /whiteboards/{id}/classification-level/reset | Reset whiteboard classification level
*ClassificationLevelApi* | [**putBlogPostClassificationLevel**](docs/ClassificationLevelApi.md#putblogpostclassificationlevel) | **PUT** /blogposts/{id}/classification-level | Update blog post classification level
*ClassificationLevelApi* | [**putDatabaseClassificationLevel**](docs/ClassificationLevelApi.md#putdatabaseclassificationlevel) | **PUT** /databases/{id}/classification-level | Update database classification level
*ClassificationLevelApi* | [**putPageClassificationLevel**](docs/ClassificationLevelApi.md#putpageclassificationleveloperation) | **PUT** /pages/{id}/classification-level | Update page classification level
*ClassificationLevelApi* | [**putSpaceDefaultClassificationLevel**](docs/ClassificationLevelApi.md#putspacedefaultclassificationleveloperation) | **PUT** /spaces/{id}/classification-level/default | Update space default classification level
*ClassificationLevelApi* | [**putWhiteboardClassificationLevel**](docs/ClassificationLevelApi.md#putwhiteboardclassificationleveloperation) | **PUT** /whiteboards/{id}/classification-level | Update whiteboard classification level
*CommentApi* | [**createFooterComment**](docs/CommentApi.md#createfootercomment) | **POST** /footer-comments | Create footer comment
*CommentApi* | [**createInlineComment**](docs/CommentApi.md#createinlinecomment) | **POST** /inline-comments | Create inline comment
*CommentApi* | [**deleteFooterComment**](docs/CommentApi.md#deletefootercomment) | **DELETE** /footer-comments/{comment-id} | Delete footer comment
*CommentApi* | [**deleteInlineComment**](docs/CommentApi.md#deleteinlinecomment) | **DELETE** /inline-comments/{comment-id} | Delete inline comment
*CommentApi* | [**getAttachmentComments**](docs/CommentApi.md#getattachmentcomments) | **GET** /attachments/{id}/footer-comments | Get attachment comments
*CommentApi* | [**getBlogPostFooterComments**](docs/CommentApi.md#getblogpostfootercomments) | **GET** /blogposts/{id}/footer-comments | Get footer comments for blog post
*CommentApi* | [**getBlogPostInlineComments**](docs/CommentApi.md#getblogpostinlinecomments) | **GET** /blogposts/{id}/inline-comments | Get inline comments for blog post
*CommentApi* | [**getCustomContentComments**](docs/CommentApi.md#getcustomcontentcomments) | **GET** /custom-content/{id}/footer-comments | Get custom content comments
*CommentApi* | [**getFooterCommentById**](docs/CommentApi.md#getfootercommentbyid) | **GET** /footer-comments/{comment-id} | Get footer comment by id
*CommentApi* | [**getFooterCommentChildren**](docs/CommentApi.md#getfootercommentchildren) | **GET** /footer-comments/{id}/children | Get children footer comments
*CommentApi* | [**getFooterComments**](docs/CommentApi.md#getfootercomments) | **GET** /footer-comments | Get footer comments
*CommentApi* | [**getInlineCommentById**](docs/CommentApi.md#getinlinecommentbyid) | **GET** /inline-comments/{comment-id} | Get inline comment by id
*CommentApi* | [**getInlineCommentChildren**](docs/CommentApi.md#getinlinecommentchildren) | **GET** /inline-comments/{id}/children | Get children inline comments
*CommentApi* | [**getInlineComments**](docs/CommentApi.md#getinlinecomments) | **GET** /inline-comments | Get inline comments
*CommentApi* | [**getPageFooterComments**](docs/CommentApi.md#getpagefootercomments) | **GET** /pages/{id}/footer-comments | Get footer comments for page
*CommentApi* | [**getPageInlineComments**](docs/CommentApi.md#getpageinlinecomments) | **GET** /pages/{id}/inline-comments | Get inline comments for page
*CommentApi* | [**updateFooterComment**](docs/CommentApi.md#updatefootercommentoperation) | **PUT** /footer-comments/{comment-id} | Update footer comment
*CommentApi* | [**updateInlineComment**](docs/CommentApi.md#updateinlinecomment) | **PUT** /inline-comments/{comment-id} | Update inline comment
*ContentApi* | [**convertContentIdsToContentTypes**](docs/ContentApi.md#convertcontentidstocontenttypesoperation) | **POST** /content/convert-ids-to-types | Convert content ids to content types
*ContentPropertiesApi* | [**createAttachmentProperty**](docs/ContentPropertiesApi.md#createattachmentproperty) | **POST** /attachments/{attachment-id}/properties | Create content property for attachment
*ContentPropertiesApi* | [**createBlogpostProperty**](docs/ContentPropertiesApi.md#createblogpostproperty) | **POST** /blogposts/{blogpost-id}/properties | Create content property for blog post
*ContentPropertiesApi* | [**createCommentProperty**](docs/ContentPropertiesApi.md#createcommentproperty) | **POST** /comments/{comment-id}/properties | Create content property for comment
*ContentPropertiesApi* | [**createCustomContentProperty**](docs/ContentPropertiesApi.md#createcustomcontentproperty) | **POST** /custom-content/{custom-content-id}/properties | Create content property for custom content
*ContentPropertiesApi* | [**createDatabaseProperty**](docs/ContentPropertiesApi.md#createdatabaseproperty) | **POST** /databases/{id}/properties | Create content property for database
*ContentPropertiesApi* | [**createFolderProperty**](docs/ContentPropertiesApi.md#createfolderproperty) | **POST** /folders/{id}/properties | Create content property for folder
*ContentPropertiesApi* | [**createPageProperty**](docs/ContentPropertiesApi.md#createpageproperty) | **POST** /pages/{page-id}/properties | Create content property for page
*ContentPropertiesApi* | [**createSmartLinkProperty**](docs/ContentPropertiesApi.md#createsmartlinkproperty) | **POST** /embeds/{id}/properties | Create content property for Smart Link in the content tree
*ContentPropertiesApi* | [**createWhiteboardProperty**](docs/ContentPropertiesApi.md#createwhiteboardproperty) | **POST** /whiteboards/{id}/properties | Create content property for whiteboard
*ContentPropertiesApi* | [**deleteAttachmentPropertyById**](docs/ContentPropertiesApi.md#deleteattachmentpropertybyid) | **DELETE** /attachments/{attachment-id}/properties/{property-id} | Delete content property for attachment by id
*ContentPropertiesApi* | [**deleteBlogpostPropertyById**](docs/ContentPropertiesApi.md#deleteblogpostpropertybyid) | **DELETE** /blogposts/{blogpost-id}/properties/{property-id} | Delete content property for blogpost by id
*ContentPropertiesApi* | [**deleteCommentPropertyById**](docs/ContentPropertiesApi.md#deletecommentpropertybyid) | **DELETE** /comments/{comment-id}/properties/{property-id} | Delete content property for comment by id
*ContentPropertiesApi* | [**deleteCustomContentPropertyById**](docs/ContentPropertiesApi.md#deletecustomcontentpropertybyid) | **DELETE** /custom-content/{custom-content-id}/properties/{property-id} | Delete content property for custom content by id
*ContentPropertiesApi* | [**deleteDatabasePropertyById**](docs/ContentPropertiesApi.md#deletedatabasepropertybyid) | **DELETE** /databases/{database-id}/properties/{property-id} | Delete content property for database by id
*ContentPropertiesApi* | [**deleteFolderPropertyById**](docs/ContentPropertiesApi.md#deletefolderpropertybyid) | **DELETE** /folders/{folder-id}/properties/{property-id} | Delete content property for folder by id
*ContentPropertiesApi* | [**deletePagePropertyById**](docs/ContentPropertiesApi.md#deletepagepropertybyid) | **DELETE** /pages/{page-id}/properties/{property-id} | Delete content property for page by id
*ContentPropertiesApi* | [**deleteSmartLinkPropertyById**](docs/ContentPropertiesApi.md#deletesmartlinkpropertybyid) | **DELETE** /embeds/{embed-id}/properties/{property-id} | Delete content property for Smart Link in the content tree by id
*ContentPropertiesApi* | [**deleteWhiteboardPropertyById**](docs/ContentPropertiesApi.md#deletewhiteboardpropertybyid) | **DELETE** /whiteboards/{whiteboard-id}/properties/{property-id} | Delete content property for whiteboard by id
*ContentPropertiesApi* | [**getAttachmentContentProperties**](docs/ContentPropertiesApi.md#getattachmentcontentproperties) | **GET** /attachments/{attachment-id}/properties | Get content properties for attachment
*ContentPropertiesApi* | [**getAttachmentContentPropertiesById**](docs/ContentPropertiesApi.md#getattachmentcontentpropertiesbyid) | **GET** /attachments/{attachment-id}/properties/{property-id} | Get content property for attachment by id
*ContentPropertiesApi* | [**getBlogpostContentProperties**](docs/ContentPropertiesApi.md#getblogpostcontentproperties) | **GET** /blogposts/{blogpost-id}/properties | Get content properties for blog post
*ContentPropertiesApi* | [**getBlogpostContentPropertiesById**](docs/ContentPropertiesApi.md#getblogpostcontentpropertiesbyid) | **GET** /blogposts/{blogpost-id}/properties/{property-id} | Get content property for blog post by id
*ContentPropertiesApi* | [**getCommentContentProperties**](docs/ContentPropertiesApi.md#getcommentcontentproperties) | **GET** /comments/{comment-id}/properties | Get content properties for comment
*ContentPropertiesApi* | [**getCommentContentPropertiesById**](docs/ContentPropertiesApi.md#getcommentcontentpropertiesbyid) | **GET** /comments/{comment-id}/properties/{property-id} | Get content property for comment by id
*ContentPropertiesApi* | [**getCustomContentContentProperties**](docs/ContentPropertiesApi.md#getcustomcontentcontentproperties) | **GET** /custom-content/{custom-content-id}/properties | Get content properties for custom content
*ContentPropertiesApi* | [**getCustomContentContentPropertiesById**](docs/ContentPropertiesApi.md#getcustomcontentcontentpropertiesbyid) | **GET** /custom-content/{custom-content-id}/properties/{property-id} | Get content property for custom content by id
*ContentPropertiesApi* | [**getDatabaseContentProperties**](docs/ContentPropertiesApi.md#getdatabasecontentproperties) | **GET** /databases/{id}/properties | Get content properties for database
*ContentPropertiesApi* | [**getDatabaseContentPropertiesById**](docs/ContentPropertiesApi.md#getdatabasecontentpropertiesbyid) | **GET** /databases/{database-id}/properties/{property-id} | Get content property for database by id
*ContentPropertiesApi* | [**getFolderContentProperties**](docs/ContentPropertiesApi.md#getfoldercontentproperties) | **GET** /folders/{id}/properties | Get content properties for folder
*ContentPropertiesApi* | [**getFolderContentPropertiesById**](docs/ContentPropertiesApi.md#getfoldercontentpropertiesbyid) | **GET** /folders/{folder-id}/properties/{property-id} | Get content property for folder by id
*ContentPropertiesApi* | [**getPageContentProperties**](docs/ContentPropertiesApi.md#getpagecontentproperties) | **GET** /pages/{page-id}/properties | Get content properties for page
*ContentPropertiesApi* | [**getPageContentPropertiesById**](docs/ContentPropertiesApi.md#getpagecontentpropertiesbyid) | **GET** /pages/{page-id}/properties/{property-id} | Get content property for page by id
*ContentPropertiesApi* | [**getSmartLinkContentProperties**](docs/ContentPropertiesApi.md#getsmartlinkcontentproperties) | **GET** /embeds/{id}/properties | Get content properties for Smart Link in the content tree
*ContentPropertiesApi* | [**getSmartLinkContentPropertiesById**](docs/ContentPropertiesApi.md#getsmartlinkcontentpropertiesbyid) | **GET** /embeds/{embed-id}/properties/{property-id} | Get content property for Smart Link in the content tree by id
*ContentPropertiesApi* | [**getWhiteboardContentProperties**](docs/ContentPropertiesApi.md#getwhiteboardcontentproperties) | **GET** /whiteboards/{id}/properties | Get content properties for whiteboard
*ContentPropertiesApi* | [**getWhiteboardContentPropertiesById**](docs/ContentPropertiesApi.md#getwhiteboardcontentpropertiesbyid) | **GET** /whiteboards/{whiteboard-id}/properties/{property-id} | Get content property for whiteboard by id
*ContentPropertiesApi* | [**updateAttachmentPropertyById**](docs/ContentPropertiesApi.md#updateattachmentpropertybyid) | **PUT** /attachments/{attachment-id}/properties/{property-id} | Update content property for attachment by id
*ContentPropertiesApi* | [**updateBlogpostPropertyById**](docs/ContentPropertiesApi.md#updateblogpostpropertybyid) | **PUT** /blogposts/{blogpost-id}/properties/{property-id} | Update content property for blog post by id
*ContentPropertiesApi* | [**updateCommentPropertyById**](docs/ContentPropertiesApi.md#updatecommentpropertybyid) | **PUT** /comments/{comment-id}/properties/{property-id} | Update content property for comment by id
*ContentPropertiesApi* | [**updateCustomContentPropertyById**](docs/ContentPropertiesApi.md#updatecustomcontentpropertybyid) | **PUT** /custom-content/{custom-content-id}/properties/{property-id} | Update content property for custom content by id
*ContentPropertiesApi* | [**updateDatabasePropertyById**](docs/ContentPropertiesApi.md#updatedatabasepropertybyid) | **PUT** /databases/{database-id}/properties/{property-id} | Update content property for database by id
*ContentPropertiesApi* | [**updateFolderPropertyById**](docs/ContentPropertiesApi.md#updatefolderpropertybyid) | **PUT** /folders/{folder-id}/properties/{property-id} | Update content property for folder by id
*ContentPropertiesApi* | [**updatePagePropertyById**](docs/ContentPropertiesApi.md#updatepagepropertybyid) | **PUT** /pages/{page-id}/properties/{property-id} | Update content property for page by id
*ContentPropertiesApi* | [**updateSmartLinkPropertyById**](docs/ContentPropertiesApi.md#updatesmartlinkpropertybyid) | **PUT** /embeds/{embed-id}/properties/{property-id} | Update content property for Smart Link in the content tree by id
*ContentPropertiesApi* | [**updateWhiteboardPropertyById**](docs/ContentPropertiesApi.md#updatewhiteboardpropertybyid) | **PUT** /whiteboards/{whiteboard-id}/properties/{property-id} | Update content property for whiteboard by id
*CustomContentApi* | [**createCustomContent**](docs/CustomContentApi.md#createcustomcontentoperation) | **POST** /custom-content | Create custom content
*CustomContentApi* | [**deleteCustomContent**](docs/CustomContentApi.md#deletecustomcontent) | **DELETE** /custom-content/{id} | Delete custom content
*CustomContentApi* | [**getCustomContentById**](docs/CustomContentApi.md#getcustomcontentbyid) | **GET** /custom-content/{id} | Get custom content by id
*CustomContentApi* | [**getCustomContentByType**](docs/CustomContentApi.md#getcustomcontentbytype) | **GET** /custom-content | Get custom content by type
*CustomContentApi* | [**getCustomContentByTypeInBlogPost**](docs/CustomContentApi.md#getcustomcontentbytypeinblogpost) | **GET** /blogposts/{id}/custom-content | Get custom content by type in blog post
*CustomContentApi* | [**getCustomContentByTypeInPage**](docs/CustomContentApi.md#getcustomcontentbytypeinpage) | **GET** /pages/{id}/custom-content | Get custom content by type in page
*CustomContentApi* | [**getCustomContentByTypeInSpace**](docs/CustomContentApi.md#getcustomcontentbytypeinspace) | **GET** /spaces/{id}/custom-content | Get custom content by type in space
*CustomContentApi* | [**updateCustomContent**](docs/CustomContentApi.md#updatecustomcontentoperation) | **PUT** /custom-content/{id} | Update custom content
*DataPoliciesApi* | [**getDataPolicyMetadata**](docs/DataPoliciesApi.md#getdatapolicymetadata) | **GET** /data-policies/metadata | Get data policy metadata for the workspace
*DataPoliciesApi* | [**getDataPolicySpaces**](docs/DataPoliciesApi.md#getdatapolicyspaces) | **GET** /data-policies/spaces | Get spaces with data policies
*DatabaseApi* | [**createDatabase**](docs/DatabaseApi.md#createdatabaseoperation) | **POST** /databases | Create database
*DatabaseApi* | [**deleteDatabase**](docs/DatabaseApi.md#deletedatabase) | **DELETE** /databases/{id} | Delete database
*DatabaseApi* | [**getDatabaseById**](docs/DatabaseApi.md#getdatabasebyid) | **GET** /databases/{id} | Get database by id
*DescendantsApi* | [**getDatabaseDescendants**](docs/DescendantsApi.md#getdatabasedescendants) | **GET** /databases/{id}/descendants | Get descendants of a database
*DescendantsApi* | [**getFolderDescendants**](docs/DescendantsApi.md#getfolderdescendants) | **GET** /folders/{id}/descendants | Get descendants of folder
*DescendantsApi* | [**getPageDescendants**](docs/DescendantsApi.md#getpagedescendants) | **GET** /pages/{id}/descendants | Get descendants of page
*DescendantsApi* | [**getSmartLinkDescendants**](docs/DescendantsApi.md#getsmartlinkdescendants) | **GET** /embeds/{id}/descendants | Get descendants of a smart link
*DescendantsApi* | [**getWhiteboardDescendants**](docs/DescendantsApi.md#getwhiteboarddescendants) | **GET** /whiteboards/{id}/descendants | Get descendants of a whiteboard
*EAPApi* | [**createSpace**](docs/EAPApi.md#createspaceoperation) | **POST** /spaces | Create space
*EAPApi* | [**getAvailableSpacePermissions**](docs/EAPApi.md#getavailablespacepermissions) | **GET** /space-permissions | Get available space permissions
*EAPApi* | [**getAvailableSpaceRoles**](docs/EAPApi.md#getavailablespaceroles) | **GET** /space-roles | Get available space roles
*EAPApi* | [**getSpaceRoleAssignments**](docs/EAPApi.md#getspaceroleassignments) | **GET** /spaces/{id}/role-assignments | Get space role assignments
*EAPApi* | [**getSpaceRolesById**](docs/EAPApi.md#getspacerolesbyid) | **GET** /space-roles/{id} | Get space role by ID
*EAPApi* | [**setSpaceRoleAssignments**](docs/EAPApi.md#setspaceroleassignments) | **POST** /spaces/{id}/role-assignments | Set space role assignments
*FolderApi* | [**createFolder**](docs/FolderApi.md#createfolderoperation) | **POST** /folders | Create folder
*FolderApi* | [**deleteFolder**](docs/FolderApi.md#deletefolder) | **DELETE** /folders/{id} | Delete folder
*FolderApi* | [**getFolderById**](docs/FolderApi.md#getfolderbyid) | **GET** /folders/{id} | Get folder by id
*LabelApi* | [**getAttachmentLabels**](docs/LabelApi.md#getattachmentlabels) | **GET** /attachments/{id}/labels | Get labels for attachment
*LabelApi* | [**getBlogPostLabels**](docs/LabelApi.md#getblogpostlabels) | **GET** /blogposts/{id}/labels | Get labels for blog post
*LabelApi* | [**getCustomContentLabels**](docs/LabelApi.md#getcustomcontentlabels) | **GET** /custom-content/{id}/labels | Get labels for custom content
*LabelApi* | [**getLabels**](docs/LabelApi.md#getlabels) | **GET** /labels | Get labels
*LabelApi* | [**getPageLabels**](docs/LabelApi.md#getpagelabels) | **GET** /pages/{id}/labels | Get labels for page
*LabelApi* | [**getSpaceContentLabels**](docs/LabelApi.md#getspacecontentlabels) | **GET** /spaces/{id}/content/labels | Get labels for space content
*LabelApi* | [**getSpaceLabels**](docs/LabelApi.md#getspacelabels) | **GET** /spaces/{id}/labels | Get labels for space
*LikeApi* | [**getBlogPostLikeCount**](docs/LikeApi.md#getblogpostlikecount) | **GET** /blogposts/{id}/likes/count | Get like count for blog post
*LikeApi* | [**getBlogPostLikeUsers**](docs/LikeApi.md#getblogpostlikeusers) | **GET** /blogposts/{id}/likes/users | Get account IDs of likes for blog post
*LikeApi* | [**getFooterLikeCount**](docs/LikeApi.md#getfooterlikecount) | **GET** /footer-comments/{id}/likes/count | Get like count for footer comment
*LikeApi* | [**getFooterLikeUsers**](docs/LikeApi.md#getfooterlikeusers) | **GET** /footer-comments/{id}/likes/users | Get account IDs of likes for footer comment
*LikeApi* | [**getInlineLikeCount**](docs/LikeApi.md#getinlinelikecount) | **GET** /inline-comments/{id}/likes/count | Get like count for inline comment
*LikeApi* | [**getInlineLikeUsers**](docs/LikeApi.md#getinlinelikeusers) | **GET** /inline-comments/{id}/likes/users | Get account IDs of likes for inline comment
*LikeApi* | [**getPageLikeCount**](docs/LikeApi.md#getpagelikecount) | **GET** /pages/{id}/likes/count | Get like count for page
*LikeApi* | [**getPageLikeUsers**](docs/LikeApi.md#getpagelikeusers) | **GET** /pages/{id}/likes/users | Get account IDs of likes for page
*OperationApi* | [**getAttachmentOperations**](docs/OperationApi.md#getattachmentoperations) | **GET** /attachments/{id}/operations | Get permitted operations for attachment
*OperationApi* | [**getBlogPostOperations**](docs/OperationApi.md#getblogpostoperations) | **GET** /blogposts/{id}/operations | Get permitted operations for blog post
*OperationApi* | [**getCustomContentOperations**](docs/OperationApi.md#getcustomcontentoperations) | **GET** /custom-content/{id}/operations | Get permitted operations for custom content
*OperationApi* | [**getDatabaseOperations**](docs/OperationApi.md#getdatabaseoperations) | **GET** /databases/{id}/operations | Get permitted operations for a database
*OperationApi* | [**getFolderOperations**](docs/OperationApi.md#getfolderoperations) | **GET** /folders/{id}/operations | Get permitted operations for a folder
*OperationApi* | [**getFooterCommentOperations**](docs/OperationApi.md#getfootercommentoperations) | **GET** /footer-comments/{id}/operations | Get permitted operations for footer comment
*OperationApi* | [**getInlineCommentOperations**](docs/OperationApi.md#getinlinecommentoperations) | **GET** /inline-comments/{id}/operations | Get permitted operations for inline comment
*OperationApi* | [**getPageOperations**](docs/OperationApi.md#getpageoperations) | **GET** /pages/{id}/operations | Get permitted operations for page
*OperationApi* | [**getSmartLinkOperations**](docs/OperationApi.md#getsmartlinkoperations) | **GET** /embeds/{id}/operations | Get permitted operations for a Smart Link in the content tree
*OperationApi* | [**getSpaceOperations**](docs/OperationApi.md#getspaceoperations) | **GET** /spaces/{id}/operations | Get permitted operations for space
*OperationApi* | [**getWhiteboardOperations**](docs/OperationApi.md#getwhiteboardoperations) | **GET** /whiteboards/{id}/operations | Get permitted operations for a whiteboard
*PageApi* | [**createPage**](docs/PageApi.md#createpageoperation) | **POST** /pages | Create page
*PageApi* | [**deletePage**](docs/PageApi.md#deletepage) | **DELETE** /pages/{id} | Delete page
*PageApi* | [**getLabelPages**](docs/PageApi.md#getlabelpages) | **GET** /labels/{id}/pages | Get pages for label
*PageApi* | [**getPageById**](docs/PageApi.md#getpagebyid) | **GET** /pages/{id} | Get page by id
*PageApi* | [**getPages**](docs/PageApi.md#getpages) | **GET** /pages | Get pages
*PageApi* | [**getPagesInSpace**](docs/PageApi.md#getpagesinspace) | **GET** /spaces/{id}/pages | Get pages in space
*PageApi* | [**updatePage**](docs/PageApi.md#updatepageoperation) | **PUT** /pages/{id} | Update page
*PageApi* | [**updatePageTitle**](docs/PageApi.md#updatepagetitleoperation) | **PUT** /pages/{id}/title | Update page title
*RedactionsApi* | [**postRedactBlog**](docs/RedactionsApi.md#postredactblog) | **POST** /blogposts/{id}/redact | Redact Content in a Confluence Blog Post
*RedactionsApi* | [**postRedactPage**](docs/RedactionsApi.md#postredactpageoperation) | **POST** /pages/{id}/redact | Redact Content in a Confluence Page
*SmartLinkApi* | [**createSmartLink**](docs/SmartLinkApi.md#createsmartlinkoperation) | **POST** /embeds | Create Smart Link in the content tree
*SmartLinkApi* | [**deleteSmartLink**](docs/SmartLinkApi.md#deletesmartlink) | **DELETE** /embeds/{id} | Delete Smart Link in the content tree
*SmartLinkApi* | [**getSmartLinkById**](docs/SmartLinkApi.md#getsmartlinkbyid) | **GET** /embeds/{id} | Get Smart Link in the content tree by id
*SpaceApi* | [**createSpace**](docs/SpaceApi.md#createspaceoperation) | **POST** /spaces | Create space
*SpaceApi* | [**getSpaceById**](docs/SpaceApi.md#getspacebyid) | **GET** /spaces/{id} | Get space by id
*SpaceApi* | [**getSpaces**](docs/SpaceApi.md#getspaces) | **GET** /spaces | Get spaces
*SpacePermissionsApi* | [**getAvailableSpacePermissions**](docs/SpacePermissionsApi.md#getavailablespacepermissions) | **GET** /space-permissions | Get available space permissions
*SpacePermissionsApi* | [**getSpacePermissionsAssignments**](docs/SpacePermissionsApi.md#getspacepermissionsassignments) | **GET** /spaces/{id}/permissions | Get space permissions assignments
*SpacePropertiesApi* | [**createSpaceProperty**](docs/SpacePropertiesApi.md#createspaceproperty) | **POST** /spaces/{space-id}/properties | Create space property in space
*SpacePropertiesApi* | [**deleteSpacePropertyById**](docs/SpacePropertiesApi.md#deletespacepropertybyid) | **DELETE** /spaces/{space-id}/properties/{property-id} | Delete space property by id
*SpacePropertiesApi* | [**getSpaceProperties**](docs/SpacePropertiesApi.md#getspaceproperties) | **GET** /spaces/{space-id}/properties | Get space properties in space
*SpacePropertiesApi* | [**getSpacePropertyById**](docs/SpacePropertiesApi.md#getspacepropertybyid) | **GET** /spaces/{space-id}/properties/{property-id} | Get space property by id
*SpacePropertiesApi* | [**updateSpacePropertyById**](docs/SpacePropertiesApi.md#updatespacepropertybyid) | **PUT** /spaces/{space-id}/properties/{property-id} | Update space property by id
*SpaceRolesApi* | [**createSpaceRole**](docs/SpaceRolesApi.md#createspaceroleoperation) | **POST** /space-roles | Create a space role
*SpaceRolesApi* | [**deleteSpaceRole**](docs/SpaceRolesApi.md#deletespacerole) | **DELETE** /space-roles/{id} | Delete a space role
*SpaceRolesApi* | [**getAvailableSpaceRoles**](docs/SpaceRolesApi.md#getavailablespaceroles) | **GET** /space-roles | Get available space roles
*SpaceRolesApi* | [**getSpaceRoleAssignments**](docs/SpaceRolesApi.md#getspaceroleassignments) | **GET** /spaces/{id}/role-assignments | Get space role assignments
*SpaceRolesApi* | [**getSpaceRoleMode**](docs/SpaceRolesApi.md#getspacerolemode) | **GET** /space-role-mode | Get space role mode
*SpaceRolesApi* | [**getSpaceRolesById**](docs/SpaceRolesApi.md#getspacerolesbyid) | **GET** /space-roles/{id} | Get space role by ID
*SpaceRolesApi* | [**setSpaceRoleAssignments**](docs/SpaceRolesApi.md#setspaceroleassignments) | **POST** /spaces/{id}/role-assignments | Set space role assignments
*SpaceRolesApi* | [**updateSpaceRole**](docs/SpaceRolesApi.md#updatespaceroleoperation) | **PUT** /space-roles/{id} | Update a space role
*TaskApi* | [**getTaskById**](docs/TaskApi.md#gettaskbyid) | **GET** /tasks/{id} | Get task by id
*TaskApi* | [**getTasks**](docs/TaskApi.md#gettasks) | **GET** /tasks | Get tasks
*TaskApi* | [**updateTask**](docs/TaskApi.md#updatetaskoperation) | **PUT** /tasks/{id} | Update task
*UserApi* | [**checkAccessByEmail**](docs/UserApi.md#checkaccessbyemailoperation) | **POST** /user/access/check-access-by-email | Check site access for a list of emails
*UserApi* | [**createBulkUserLookup**](docs/UserApi.md#createbulkuserlookupoperation) | **POST** /users-bulk | Create bulk user lookup using ids
*UserApi* | [**inviteByEmail**](docs/UserApi.md#invitebyemail) | **POST** /user/access/invite-by-email | Invite a list of emails to the site
*VersionApi* | [**getAttachmentVersionDetails**](docs/VersionApi.md#getattachmentversiondetails) | **GET** /attachments/{attachment-id}/versions/{version-number} | Get version details for attachment version
*VersionApi* | [**getAttachmentVersions**](docs/VersionApi.md#getattachmentversions) | **GET** /attachments/{id}/versions | Get attachment versions
*VersionApi* | [**getBlogPostVersionDetails**](docs/VersionApi.md#getblogpostversiondetails) | **GET** /blogposts/{blogpost-id}/versions/{version-number} | Get version details for blog post version
*VersionApi* | [**getBlogPostVersions**](docs/VersionApi.md#getblogpostversions) | **GET** /blogposts/{id}/versions | Get blog post versions
*VersionApi* | [**getCustomContentVersionDetails**](docs/VersionApi.md#getcustomcontentversiondetails) | **GET** /custom-content/{custom-content-id}/versions/{version-number} | Get version details for custom content version
*VersionApi* | [**getCustomContentVersions**](docs/VersionApi.md#getcustomcontentversions) | **GET** /custom-content/{custom-content-id}/versions | Get custom content versions
*VersionApi* | [**getFooterCommentVersionDetails**](docs/VersionApi.md#getfootercommentversiondetails) | **GET** /footer-comments/{id}/versions/{version-number} | Get version details for footer comment version
*VersionApi* | [**getFooterCommentVersions**](docs/VersionApi.md#getfootercommentversions) | **GET** /footer-comments/{id}/versions | Get footer comment versions
*VersionApi* | [**getInlineCommentVersionDetails**](docs/VersionApi.md#getinlinecommentversiondetails) | **GET** /inline-comments/{id}/versions/{version-number} | Get version details for inline comment version
*VersionApi* | [**getInlineCommentVersions**](docs/VersionApi.md#getinlinecommentversions) | **GET** /inline-comments/{id}/versions | Get inline comment versions
*VersionApi* | [**getPageVersionDetails**](docs/VersionApi.md#getpageversiondetails) | **GET** /pages/{page-id}/versions/{version-number} | Get version details for page version
*VersionApi* | [**getPageVersions**](docs/VersionApi.md#getpageversions) | **GET** /pages/{id}/versions | Get page versions
*WhiteboardApi* | [**createWhiteboard**](docs/WhiteboardApi.md#createwhiteboardoperation) | **POST** /whiteboards | Create whiteboard
*WhiteboardApi* | [**deleteWhiteboard**](docs/WhiteboardApi.md#deletewhiteboard) | **DELETE** /whiteboards/{id} | Delete whiteboard
*WhiteboardApi* | [**getWhiteboardById**](docs/WhiteboardApi.md#getwhiteboardbyid) | **GET** /whiteboards/{id} | Get whiteboard by id


### Models

- [AbstractPageLinks](docs/AbstractPageLinks.md)
- [AccountStatus](docs/AccountStatus.md)
- [AccountType](docs/AccountType.md)
- [AdminKeyResponse](docs/AdminKeyResponse.md)
- [Ancestor](docs/Ancestor.md)
- [AncestorType](docs/AncestorType.md)
- [AttachmentBulk](docs/AttachmentBulk.md)
- [AttachmentCommentModel](docs/AttachmentCommentModel.md)
- [AttachmentLinks](docs/AttachmentLinks.md)
- [AttachmentSingle](docs/AttachmentSingle.md)
- [AttachmentSingleLabels](docs/AttachmentSingleLabels.md)
- [AttachmentSingleOperations](docs/AttachmentSingleOperations.md)
- [AttachmentSingleProperties](docs/AttachmentSingleProperties.md)
- [AttachmentSingleVersions](docs/AttachmentSingleVersions.md)
- [AttachmentSortOrder](docs/AttachmentSortOrder.md)
- [AttachmentVersion](docs/AttachmentVersion.md)
- [BlogPostBodyWrite](docs/BlogPostBodyWrite.md)
- [BlogPostBulk](docs/BlogPostBulk.md)
- [BlogPostCommentModel](docs/BlogPostCommentModel.md)
- [BlogPostContentStatus](docs/BlogPostContentStatus.md)
- [BlogPostInlineCommentModel](docs/BlogPostInlineCommentModel.md)
- [BlogPostNestedBodyWrite](docs/BlogPostNestedBodyWrite.md)
- [BlogPostSingle](docs/BlogPostSingle.md)
- [BlogPostSingleLikes](docs/BlogPostSingleLikes.md)
- [BlogPostSortOrder](docs/BlogPostSortOrder.md)
- [BlogPostVersion](docs/BlogPostVersion.md)
- [BodyBulk](docs/BodyBulk.md)
- [BodySingle](docs/BodySingle.md)
- [BodyType](docs/BodyType.md)
- [CheckAccessByEmail200Response](docs/CheckAccessByEmail200Response.md)
- [CheckAccessByEmailRequest](docs/CheckAccessByEmailRequest.md)
- [ChildCustomContent](docs/ChildCustomContent.md)
- [ChildCustomContentSortOrder](docs/ChildCustomContentSortOrder.md)
- [ChildPage](docs/ChildPage.md)
- [ChildPageSortOrder](docs/ChildPageSortOrder.md)
- [ChildrenCommentModel](docs/ChildrenCommentModel.md)
- [ChildrenResponse](docs/ChildrenResponse.md)
- [ClassificationLevel](docs/ClassificationLevel.md)
- [ClassificationLevelColor](docs/ClassificationLevelColor.md)
- [ClassificationLevelStatus](docs/ClassificationLevelStatus.md)
- [CommentBodyWrite](docs/CommentBodyWrite.md)
- [CommentLinks](docs/CommentLinks.md)
- [CommentNestedBodyWrite](docs/CommentNestedBodyWrite.md)
- [CommentSortOrder](docs/CommentSortOrder.md)
- [CommentVersion](docs/CommentVersion.md)
- [ContentIdToContentTypeResponse](docs/ContentIdToContentTypeResponse.md)
- [ContentIdToContentTypeResponseResultsValue](docs/ContentIdToContentTypeResponseResultsValue.md)
- [ContentProperty](docs/ContentProperty.md)
- [ContentPropertyCreateRequest](docs/ContentPropertyCreateRequest.md)
- [ContentPropertySortOrder](docs/ContentPropertySortOrder.md)
- [ContentPropertyUpdateRequest](docs/ContentPropertyUpdateRequest.md)
- [ContentPropertyUpdateRequestVersion](docs/ContentPropertyUpdateRequestVersion.md)
- [ContentSortOrder](docs/ContentSortOrder.md)
- [ContentStatus](docs/ContentStatus.md)
- [ConvertContentIdsToContentTypesRequest](docs/ConvertContentIdsToContentTypesRequest.md)
- [ConvertContentIdsToContentTypesRequestContentIdsInner](docs/ConvertContentIdsToContentTypesRequestContentIdsInner.md)
- [CreateBlogPost200Response](docs/CreateBlogPost200Response.md)
- [CreateBlogPostRequest](docs/CreateBlogPostRequest.md)
- [CreateBlogPostRequestBody](docs/CreateBlogPostRequestBody.md)
- [CreateBulkUserLookupRequest](docs/CreateBulkUserLookupRequest.md)
- [CreateCustomContent201Response](docs/CreateCustomContent201Response.md)
- [CreateCustomContentRequest](docs/CreateCustomContentRequest.md)
- [CreateCustomContentRequestBody](docs/CreateCustomContentRequestBody.md)
- [CreateDatabase200Response](docs/CreateDatabase200Response.md)
- [CreateDatabaseRequest](docs/CreateDatabaseRequest.md)
- [CreateFolder200Response](docs/CreateFolder200Response.md)
- [CreateFolderRequest](docs/CreateFolderRequest.md)
- [CreateFooterComment201Response](docs/CreateFooterComment201Response.md)
- [CreateFooterCommentModel](docs/CreateFooterCommentModel.md)
- [CreateFooterCommentModelBody](docs/CreateFooterCommentModelBody.md)
- [CreateInlineComment201Response](docs/CreateInlineComment201Response.md)
- [CreateInlineCommentModel](docs/CreateInlineCommentModel.md)
- [CreateInlineCommentModelInlineCommentProperties](docs/CreateInlineCommentModelInlineCommentProperties.md)
- [CreatePage200Response](docs/CreatePage200Response.md)
- [CreatePageRequest](docs/CreatePageRequest.md)
- [CreatePageRequestBody](docs/CreatePageRequestBody.md)
- [CreateSmartLink200Response](docs/CreateSmartLink200Response.md)
- [CreateSmartLinkRequest](docs/CreateSmartLinkRequest.md)
- [CreateSpace201Response](docs/CreateSpace201Response.md)
- [CreateSpaceRequest](docs/CreateSpaceRequest.md)
- [CreateSpaceRequestDescription](docs/CreateSpaceRequestDescription.md)
- [CreateSpaceRequestRoleAssignmentsInner](docs/CreateSpaceRequestRoleAssignmentsInner.md)
- [CreateSpaceRoleRequest](docs/CreateSpaceRoleRequest.md)
- [CreateWhiteboard200Response](docs/CreateWhiteboard200Response.md)
- [CreateWhiteboardRequest](docs/CreateWhiteboardRequest.md)
- [CustomContentBodyBulk](docs/CustomContentBodyBulk.md)
- [CustomContentBodyRepresentation](docs/CustomContentBodyRepresentation.md)
- [CustomContentBodyRepresentationSingle](docs/CustomContentBodyRepresentationSingle.md)
- [CustomContentBodySingle](docs/CustomContentBodySingle.md)
- [CustomContentBodyWrite](docs/CustomContentBodyWrite.md)
- [CustomContentBulk](docs/CustomContentBulk.md)
- [CustomContentCommentModel](docs/CustomContentCommentModel.md)
- [CustomContentLinks](docs/CustomContentLinks.md)
- [CustomContentNestedBodyWrite](docs/CustomContentNestedBodyWrite.md)
- [CustomContentSingle](docs/CustomContentSingle.md)
- [CustomContentSortOrder](docs/CustomContentSortOrder.md)
- [CustomContentVersion](docs/CustomContentVersion.md)
- [DataPolicyMetadata](docs/DataPolicyMetadata.md)
- [DataPolicySpace](docs/DataPolicySpace.md)
- [DataPolicySpaceDataPolicy](docs/DataPolicySpaceDataPolicy.md)
- [DatabaseLinks](docs/DatabaseLinks.md)
- [DatabaseSingle](docs/DatabaseSingle.md)
- [DeleteSpaceRoleResponse](docs/DeleteSpaceRoleResponse.md)
- [DescendantsResponse](docs/DescendantsResponse.md)
- [DetailedVersion](docs/DetailedVersion.md)
- [EnableAdminKeyRequest](docs/EnableAdminKeyRequest.md)
- [FolderLinks](docs/FolderLinks.md)
- [FolderSingle](docs/FolderSingle.md)
- [FooterCommentModel](docs/FooterCommentModel.md)
- [GetAttachmentById200Response](docs/GetAttachmentById200Response.md)
- [GetAttachmentById200ResponseAllOfLinks](docs/GetAttachmentById200ResponseAllOfLinks.md)
- [GetForgeAppProperty200Response](docs/GetForgeAppProperty200Response.md)
- [GetSpaceById200Response](docs/GetSpaceById200Response.md)
- [GetSpaceRoleMode200Response](docs/GetSpaceRoleMode200Response.md)
- [GetSpaceRolesById200Response](docs/GetSpaceRolesById200Response.md)
- [Icon](docs/Icon.md)
- [InlineCommentChildrenModel](docs/InlineCommentChildrenModel.md)
- [InlineCommentModel](docs/InlineCommentModel.md)
- [InlineCommentModelProperties](docs/InlineCommentModelProperties.md)
- [InlineCommentProperties](docs/InlineCommentProperties.md)
- [InlineCommentResolutionStatus](docs/InlineCommentResolutionStatus.md)
- [Label](docs/Label.md)
- [LabelSortOrder](docs/LabelSortOrder.md)
- [Like](docs/Like.md)
- [ModelInteger](docs/ModelInteger.md)
- [MultiEntityLinks](docs/MultiEntityLinks.md)
- [MultiEntityResultAncestor](docs/MultiEntityResultAncestor.md)
- [MultiEntityResultAncestor1](docs/MultiEntityResultAncestor1.md)
- [MultiEntityResultAppProperty](docs/MultiEntityResultAppProperty.md)
- [MultiEntityResultAppPropertyResultsInner](docs/MultiEntityResultAppPropertyResultsInner.md)
- [MultiEntityResultAttachment](docs/MultiEntityResultAttachment.md)
- [MultiEntityResultAttachmentCommentModel](docs/MultiEntityResultAttachmentCommentModel.md)
- [MultiEntityResultBlogPost](docs/MultiEntityResultBlogPost.md)
- [MultiEntityResultBlogPostCommentModel](docs/MultiEntityResultBlogPostCommentModel.md)
- [MultiEntityResultBlogPostInlineCommentModel](docs/MultiEntityResultBlogPostInlineCommentModel.md)
- [MultiEntityResultChildCustomContent](docs/MultiEntityResultChildCustomContent.md)
- [MultiEntityResultChildPage](docs/MultiEntityResultChildPage.md)
- [MultiEntityResultChildrenCommentModel](docs/MultiEntityResultChildrenCommentModel.md)
- [MultiEntityResultChildrenResponse](docs/MultiEntityResultChildrenResponse.md)
- [MultiEntityResultContentProperty](docs/MultiEntityResultContentProperty.md)
- [MultiEntityResultCustomContent](docs/MultiEntityResultCustomContent.md)
- [MultiEntityResultCustomContentCommentModel](docs/MultiEntityResultCustomContentCommentModel.md)
- [MultiEntityResultDataPolicySpace](docs/MultiEntityResultDataPolicySpace.md)
- [MultiEntityResultDescendantsResponse](docs/MultiEntityResultDescendantsResponse.md)
- [MultiEntityResultFooterCommentModel](docs/MultiEntityResultFooterCommentModel.md)
- [MultiEntityResultInlineCommentChildrenModel](docs/MultiEntityResultInlineCommentChildrenModel.md)
- [MultiEntityResultInlineCommentModel](docs/MultiEntityResultInlineCommentModel.md)
- [MultiEntityResultLabel](docs/MultiEntityResultLabel.md)
- [MultiEntityResultPage](docs/MultiEntityResultPage.md)
- [MultiEntityResultPageCommentModel](docs/MultiEntityResultPageCommentModel.md)
- [MultiEntityResultPageInlineCommentModel](docs/MultiEntityResultPageInlineCommentModel.md)
- [MultiEntityResultSpace](docs/MultiEntityResultSpace.md)
- [MultiEntityResultSpacePermission](docs/MultiEntityResultSpacePermission.md)
- [MultiEntityResultSpacePermissionAssignment](docs/MultiEntityResultSpacePermissionAssignment.md)
- [MultiEntityResultSpaceProperty](docs/MultiEntityResultSpaceProperty.md)
- [MultiEntityResultSpaceRole](docs/MultiEntityResultSpaceRole.md)
- [MultiEntityResultSpaceRoleAssignment](docs/MultiEntityResultSpaceRoleAssignment.md)
- [MultiEntityResultString](docs/MultiEntityResultString.md)
- [MultiEntityResultTask](docs/MultiEntityResultTask.md)
- [MultiEntityResultUser](docs/MultiEntityResultUser.md)
- [MultiEntityResultVersion](docs/MultiEntityResultVersion.md)
- [MultiEntityResultVersion1](docs/MultiEntityResultVersion1.md)
- [MultiEntityResultVersion2](docs/MultiEntityResultVersion2.md)
- [MultiEntityResultVersion3](docs/MultiEntityResultVersion3.md)
- [MultiEntityResultVersion4](docs/MultiEntityResultVersion4.md)
- [OnlyArchivedAndCurrentContentStatus](docs/OnlyArchivedAndCurrentContentStatus.md)
- [Operation](docs/Operation.md)
- [OptionalFieldLinks](docs/OptionalFieldLinks.md)
- [OptionalFieldMeta](docs/OptionalFieldMeta.md)
- [PageBodyWrite](docs/PageBodyWrite.md)
- [PageBulk](docs/PageBulk.md)
- [PageCommentModel](docs/PageCommentModel.md)
- [PageInlineCommentModel](docs/PageInlineCommentModel.md)
- [PageNestedBodyWrite](docs/PageNestedBodyWrite.md)
- [PageSingle](docs/PageSingle.md)
- [PageSortOrder](docs/PageSortOrder.md)
- [PageVersion](docs/PageVersion.md)
- [ParentContentType](docs/ParentContentType.md)
- [PermittedOperationsResponse](docs/PermittedOperationsResponse.md)
- [PostPageClassificationLevelRequest](docs/PostPageClassificationLevelRequest.md)
- [PostRedactPageRequest](docs/PostRedactPageRequest.md)
- [PostRedactPageRequestBody](docs/PostRedactPageRequestBody.md)
- [PostWhiteboardClassificationLevelRequest](docs/PostWhiteboardClassificationLevelRequest.md)
- [PrimaryBodyRepresentation](docs/PrimaryBodyRepresentation.md)
- [PrimaryBodyRepresentationSingle](docs/PrimaryBodyRepresentationSingle.md)
- [Principal](docs/Principal.md)
- [PrincipalType](docs/PrincipalType.md)
- [PutPageClassificationLevelRequest](docs/PutPageClassificationLevelRequest.md)
- [PutSpaceDefaultClassificationLevelRequest](docs/PutSpaceDefaultClassificationLevelRequest.md)
- [PutWhiteboardClassificationLevelRequest](docs/PutWhiteboardClassificationLevelRequest.md)
- [Redaction](docs/Redaction.md)
- [RedactionPointer](docs/RedactionPointer.md)
- [RedactionPointerResponse](docs/RedactionPointerResponse.md)
- [RedactionResponse](docs/RedactionResponse.md)
- [RedactionSectionResponse](docs/RedactionSectionResponse.md)
- [RoleType](docs/RoleType.md)
- [SetSpaceRoleAssignmentsRequestInner](docs/SetSpaceRoleAssignmentsRequestInner.md)
- [SmartLinkLinks](docs/SmartLinkLinks.md)
- [SmartLinkSingle](docs/SmartLinkSingle.md)
- [SpaceBulk](docs/SpaceBulk.md)
- [SpaceDescription](docs/SpaceDescription.md)
- [SpaceDescriptionBodyRepresentation](docs/SpaceDescriptionBodyRepresentation.md)
- [SpaceIcon](docs/SpaceIcon.md)
- [SpaceLinks](docs/SpaceLinks.md)
- [SpacePermission](docs/SpacePermission.md)
- [SpacePermissionAssignment](docs/SpacePermissionAssignment.md)
- [SpacePermissionAssignmentOperation](docs/SpacePermissionAssignmentOperation.md)
- [SpacePermissionAssignmentPrincipal](docs/SpacePermissionAssignmentPrincipal.md)
- [SpaceProperty](docs/SpaceProperty.md)
- [SpacePropertyCreateRequest](docs/SpacePropertyCreateRequest.md)
- [SpacePropertyUpdateRequest](docs/SpacePropertyUpdateRequest.md)
- [SpacePropertyVersion](docs/SpacePropertyVersion.md)
- [SpaceRole](docs/SpaceRole.md)
- [SpaceRoleAssignment](docs/SpaceRoleAssignment.md)
- [SpaceSingle](docs/SpaceSingle.md)
- [SpaceSinglePermissions](docs/SpaceSinglePermissions.md)
- [SpaceSingleProperties](docs/SpaceSingleProperties.md)
- [SpaceSortOrder](docs/SpaceSortOrder.md)
- [SpaceStatus](docs/SpaceStatus.md)
- [SpaceType](docs/SpaceType.md)
- [Task](docs/Task.md)
- [TaskBodySingle](docs/TaskBodySingle.md)
- [UpdateBlogPostRequest](docs/UpdateBlogPostRequest.md)
- [UpdateBlogPostRequestVersion](docs/UpdateBlogPostRequestVersion.md)
- [UpdateCustomContentRequest](docs/UpdateCustomContentRequest.md)
- [UpdateCustomContentRequestVersion](docs/UpdateCustomContentRequestVersion.md)
- [UpdateFooterCommentModel](docs/UpdateFooterCommentModel.md)
- [UpdateFooterCommentModelVersion](docs/UpdateFooterCommentModelVersion.md)
- [UpdateFooterCommentRequest](docs/UpdateFooterCommentRequest.md)
- [UpdateInlineCommentModel](docs/UpdateInlineCommentModel.md)
- [UpdatePageRequest](docs/UpdatePageRequest.md)
- [UpdatePageRequestVersion](docs/UpdatePageRequestVersion.md)
- [UpdatePageTitleRequest](docs/UpdatePageTitleRequest.md)
- [UpdateSpaceRoleRequest](docs/UpdateSpaceRoleRequest.md)
- [UpdateSpaceRoleResponse](docs/UpdateSpaceRoleResponse.md)
- [UpdateTaskRequest](docs/UpdateTaskRequest.md)
- [User](docs/User.md)
- [Version](docs/Version.md)
- [VersionSortOrder](docs/VersionSortOrder.md)
- [VersionedEntity](docs/VersionedEntity.md)
- [WhiteboardLinks](docs/WhiteboardLinks.md)
- [WhiteboardSingle](docs/WhiteboardSingle.md)

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
  - `read:page:confluence`: View pages and blogposts and their properties.
  - `read:space:confluence`: View spaces and their properties.
  - `read:attachment:confluence`: View attachments and their properties.
  - `read:comment:confluence`: View comments and their properties.
  - `read:custom-content:confluence`: View custom content and their properties.
  - `read:task:confluence`: View tasks.
  - `read:whiteboard:confluence`: View whiteboards and their properties.
  - `read:database:confluence`: View databases and their properties.
  - `read:embed:confluence`: View Smart Links in the content tree and their properties.
  - `read:folder:confluence`: View folders and their properties.
  - `read:hierarchical-content:confluence`: View children and descendants in the content tree.
  - `write:space:confluence`: Create and update spaces and their properties.
  - `write:page:confluence`: Create and update pages and blog posts and their properties.
  - `write:comment:confluence`: Create and update comments and their properties.
  - `write:custom-content:confluence`: Create and update custom content and their properties.
  - `write:whiteboard:confluence`: Create and update whiteboards and their properties.
  - `write:database:confluence`: Create and update databases and their properties.
  - `write:embed:confluence`: Create and update Smart Links in the content tree and their properties.
  - `write:folder:confluence`: Create and update folders and their properties.
  - `write:app-data:confluence`: Create, update and delete app properties.
  - `delete:custom-content:confluence`: Delete custom content.
  - `delete:page:confluence`: Delete pages and blog posts.
  - `delete:comment:confluence`: Delete comments.
  - `delete:whiteboard:confluence`: Delete whiteboards.
  - `delete:database:confluence`: Delete databases.
  - `delete:embed:confluence`: Delete Smart Links in the content tree.
  - `delete:folder:confluence`: Delete folders.

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Package version: `2.0.0`
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

[]()
