# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIKeyReference</a></code>
- <code><a href="./src/resources/shared.ts">OrgReference</a></code>
- <code><a href="./src/resources/shared.ts">UserReference</a></code>

# AutoScribe

Types:

- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">StudyReportMetadata</a></code>

## Studies

Types:

- <code><a href="./src/resources/auto-scribe/studies.ts">ReportIDWithStatus</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyCreateResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyRetrieveResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyUpdateResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyListResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyCancelResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyRerouteURLResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyRetrieveByUidResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyUncancelResponse</a></code>
- <code><a href="./src/resources/auto-scribe/studies.ts">StudyViewerOnlyRerouteURLResponse</a></code>

Methods:

- <code title="post /v1/autoScribe/studies">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">create</a>({ ...params }) -> StudyCreateResponse</code>
- <code title="get /v1/autoScribe/studies/{studyId}">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">retrieve</a>(studyID) -> StudyRetrieveResponse</code>
- <code title="patch /v1/autoScribe/studies/{studyId}">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">update</a>(studyID, { ...params }) -> StudyUpdateResponse</code>
- <code title="get /v1/autoScribe/studies">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">list</a>({ ...params }) -> StudyListResponsesCursorStudies</code>
- <code title="post /v1/autoScribe/studies/cancel">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">cancel</a>({ ...params }) -> StudyCancelResponse</code>
- <code title="post /v1/autoScribe/studies/reroute-url">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">rerouteURL</a>({ ...params }) -> StudyRerouteURLResponse</code>
- <code title="get /v1/autoScribe/studies/by-uid/{studyInstanceUid}">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">retrieveByUid</a>(studyInstanceUid) -> StudyRetrieveByUidResponse</code>
- <code title="post /v1/autoScribe/studies/uncancel">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">uncancel</a>({ ...params }) -> StudyUncancelResponse</code>
- <code title="post /v1/autoScribe/studies/viewer-only-reroute-url">client.autoScribe.studies.<a href="./src/resources/auto-scribe/studies.ts">viewerOnlyRerouteURL</a>({ ...params }) -> StudyViewerOnlyRerouteURLResponse</code>

## Users

Types:

- <code><a href="./src/resources/auto-scribe/users/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/users.ts">UserInviteResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/users.ts">UserReactivateResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/users.ts">UserRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/autoScribe/users/{userId}">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="patch /v1/autoScribe/users/{userId}">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="get /v1/autoScribe/users">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">list</a>({ ...params }) -> UserListResponsesCursorUsers</code>
- <code title="post /v1/autoScribe/users">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">invite</a>({ ...params }) -> UserInviteResponse</code>
- <code title="post /v1/autoScribe/users/reactivate">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">reactivate</a>({ ...params }) -> UserReactivateResponse</code>
- <code title="post /v1/autoScribe/users/revoke-access">client.autoScribe.users.<a href="./src/resources/auto-scribe/users/users.ts">revokeAccess</a>({ ...params }) -> UserRevokeAccessResponse</code>

### Invitations

Types:

- <code><a href="./src/resources/auto-scribe/users/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/invitations.ts">InvitationUpdateResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/invitations.ts">InvitationListResponse</a></code>
- <code><a href="./src/resources/auto-scribe/users/invitations.ts">InvitationRevokeResponse</a></code>

Methods:

- <code title="get /v1/autoScribe/users/invitations/{invitationId}">client.autoScribe.users.invitations.<a href="./src/resources/auto-scribe/users/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="patch /v1/autoScribe/users/invitations/{invitationId}">client.autoScribe.users.invitations.<a href="./src/resources/auto-scribe/users/invitations.ts">update</a>(invitationID, { ...params }) -> InvitationUpdateResponse</code>
- <code title="get /v1/autoScribe/users/invitations">client.autoScribe.users.invitations.<a href="./src/resources/auto-scribe/users/invitations.ts">list</a>({ ...params }) -> InvitationListResponsesCursorInvitations</code>
- <code title="post /v1/autoScribe/users/invitations/revoke">client.autoScribe.users.invitations.<a href="./src/resources/auto-scribe/users/invitations.ts">revoke</a>({ ...params }) -> InvitationRevokeResponse</code>

## Reports

Types:

- <code><a href="./src/resources/auto-scribe/reports.ts">ReportListResponse</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportAddendumResponse</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportCancelAddendumResponse</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportPdfResponse</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportTextResponse</a></code>

Methods:

- <code title="get /v1/autoScribe/reports">client.autoScribe.reports.<a href="./src/resources/auto-scribe/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>
- <code title="post /v1/autoScribe/reports/{reportId}/addendum">client.autoScribe.reports.<a href="./src/resources/auto-scribe/reports.ts">addendum</a>(reportID) -> ReportAddendumResponse</code>
- <code title="post /v1/autoScribe/reports/{reportId}/cancel-addendum">client.autoScribe.reports.<a href="./src/resources/auto-scribe/reports.ts">cancelAddendum</a>(reportID) -> ReportCancelAddendumResponse</code>
- <code title="get /v1/autoScribe/reports/pdf">client.autoScribe.reports.<a href="./src/resources/auto-scribe/reports.ts">pdf</a>({ ...params }) -> ReportPdfResponse</code>
- <code title="get /v1/autoScribe/reports/text">client.autoScribe.reports.<a href="./src/resources/auto-scribe/reports.ts">text</a>({ ...params }) -> ReportTextResponse</code>

# Viewer

## Studies

Types:

- <code><a href="./src/resources/viewer/studies.ts">StudyCreateResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyRetrieveResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyUpdateResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyListResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyCancelResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyRerouteURLResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyRetrieveByUidResponse</a></code>
- <code><a href="./src/resources/viewer/studies.ts">StudyUncancelResponse</a></code>

Methods:

- <code title="post /v1/viewer/studies">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">create</a>({ ...params }) -> StudyCreateResponse</code>
- <code title="get /v1/viewer/studies/{studyId}">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">retrieve</a>(studyID) -> StudyRetrieveResponse</code>
- <code title="patch /v1/viewer/studies/{studyId}">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">update</a>(studyID, { ...params }) -> StudyUpdateResponse</code>
- <code title="get /v1/viewer/studies">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">list</a>({ ...params }) -> StudyListResponsesCursorStudies</code>
- <code title="post /v1/viewer/studies/cancel">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">cancel</a>({ ...params }) -> StudyCancelResponse</code>
- <code title="post /v1/viewer/studies/reroute-url">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">rerouteURL</a>({ ...params }) -> StudyRerouteURLResponse</code>
- <code title="get /v1/viewer/studies/by-uid/{studyInstanceUid}">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">retrieveByUid</a>(studyInstanceUid) -> StudyRetrieveByUidResponse</code>
- <code title="post /v1/viewer/studies/uncancel">client.viewer.studies.<a href="./src/resources/viewer/studies.ts">uncancel</a>({ ...params }) -> StudyUncancelResponse</code>

## Users

Types:

- <code><a href="./src/resources/viewer/users/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/viewer/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/viewer/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/viewer/users/users.ts">UserInviteResponse</a></code>
- <code><a href="./src/resources/viewer/users/users.ts">UserReactivateResponse</a></code>
- <code><a href="./src/resources/viewer/users/users.ts">UserRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/viewer/users/{userId}">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="patch /v1/viewer/users/{userId}">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="get /v1/viewer/users">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">list</a>({ ...params }) -> UserListResponsesCursorUsers</code>
- <code title="post /v1/viewer/users">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">invite</a>({ ...params }) -> UserInviteResponse</code>
- <code title="post /v1/viewer/users/reactivate">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">reactivate</a>({ ...params }) -> UserReactivateResponse</code>
- <code title="post /v1/viewer/users/revoke-access">client.viewer.users.<a href="./src/resources/viewer/users/users.ts">revokeAccess</a>({ ...params }) -> UserRevokeAccessResponse</code>

### Invitations

Types:

- <code><a href="./src/resources/viewer/users/invitations.ts">InvitationRetrieveResponse</a></code>
- <code><a href="./src/resources/viewer/users/invitations.ts">InvitationUpdateResponse</a></code>
- <code><a href="./src/resources/viewer/users/invitations.ts">InvitationListResponse</a></code>
- <code><a href="./src/resources/viewer/users/invitations.ts">InvitationRevokeResponse</a></code>

Methods:

- <code title="get /v1/viewer/users/invitations/{invitationId}">client.viewer.users.invitations.<a href="./src/resources/viewer/users/invitations.ts">retrieve</a>(invitationID) -> InvitationRetrieveResponse</code>
- <code title="patch /v1/viewer/users/invitations/{invitationId}">client.viewer.users.invitations.<a href="./src/resources/viewer/users/invitations.ts">update</a>(invitationID, { ...params }) -> InvitationUpdateResponse</code>
- <code title="get /v1/viewer/users/invitations">client.viewer.users.invitations.<a href="./src/resources/viewer/users/invitations.ts">list</a>({ ...params }) -> InvitationListResponsesCursorInvitations</code>
- <code title="post /v1/viewer/users/invitations/revoke">client.viewer.users.invitations.<a href="./src/resources/viewer/users/invitations.ts">revoke</a>({ ...params }) -> InvitationRevokeResponse</code>

# Orgs

Types:

- <code><a href="./src/resources/orgs/orgs.ts">OrgCreateResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgRetrieveResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgUpdateResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgListResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgDeactivateResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgReactivateResponse</a></code>

Methods:

- <code title="post /v1/orgs">client.orgs.<a href="./src/resources/orgs/orgs.ts">create</a>({ ...params }) -> OrgCreateResponse</code>
- <code title="get /v1/orgs/{orgId}">client.orgs.<a href="./src/resources/orgs/orgs.ts">retrieve</a>(orgID) -> OrgRetrieveResponse</code>
- <code title="patch /v1/orgs/{orgId}">client.orgs.<a href="./src/resources/orgs/orgs.ts">update</a>(orgID, { ...params }) -> OrgUpdateResponse</code>
- <code title="get /v1/orgs">client.orgs.<a href="./src/resources/orgs/orgs.ts">list</a>({ ...params }) -> OrgListResponsesCursorOrganizations</code>
- <code title="post /v1/orgs/{orgId}/deactivate">client.orgs.<a href="./src/resources/orgs/orgs.ts">deactivate</a>(orgID) -> OrgDeactivateResponse</code>
- <code title="post /v1/orgs/{orgId}/reactivate">client.orgs.<a href="./src/resources/orgs/orgs.ts">reactivate</a>(orgID) -> OrgReactivateResponse</code>

## Users

Types:

- <code><a href="./src/resources/orgs/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/orgs/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="post /v1/orgs/{orgId}/users">client.orgs.users.<a href="./src/resources/orgs/users.ts">add</a>(orgID, { ...params }) -> UserAddResponse</code>
- <code title="delete /v1/orgs/{orgId}/users">client.orgs.users.<a href="./src/resources/orgs/users.ts">remove</a>(orgID, { ...params }) -> UserRemoveResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReportDeliveredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>
