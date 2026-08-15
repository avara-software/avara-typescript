# Shared

Types:

- <code><a href="./src/resources/shared.ts">APIKeyReference</a></code>
- <code><a href="./src/resources/shared.ts">AssignableUserLevel</a></code>
- <code><a href="./src/resources/shared.ts">ClinicRole</a></code>
- <code><a href="./src/resources/shared.ts">ExpressCustomerReference</a></code>
- <code><a href="./src/resources/shared.ts">InvitationExpiredFilter</a></code>
- <code><a href="./src/resources/shared.ts">InvitationStatus</a></code>
- <code><a href="./src/resources/shared.ts">InvitedSource</a></code>
- <code><a href="./src/resources/shared.ts">Severity</a></code>
- <code><a href="./src/resources/shared.ts">UserLevel</a></code>
- <code><a href="./src/resources/shared.ts">UserReference</a></code>

# AutoScribe

Types:

- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">ClinicalReferenceType</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">HeightUnit</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">ReportStatus</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">Sex</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">StudyReportMetadata</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">StudyReportStatus</a></code>
- <code><a href="./src/resources/auto-scribe/auto-scribe.ts">WeightUnit</a></code>

## ClinicalReferences

Types:

- <code><a href="./src/resources/auto-scribe/clinical-references.ts">ClinicalReference</a></code>

Methods:

- <code title="post /v1/autoScribe/clinicalReferences">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">create</a>({ ...params }) -> ClinicalReference</code>
- <code title="get /v1/autoScribe/clinicalReferences/{clinicalReferenceId}">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">retrieve</a>(clinicalReferenceID) -> ClinicalReference</code>
- <code title="patch /v1/autoScribe/clinicalReferences/{clinicalReferenceId}">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">update</a>(clinicalReferenceID, { ...params }) -> ClinicalReference</code>
- <code title="get /v1/autoScribe/clinicalReferences">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">list</a>({ ...params }) -> ClinicalReferencesCursorClinicalReferences</code>
- <code title="post /v1/autoScribe/clinicalReferences/{clinicalReferenceId}/delete">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">delete</a>(clinicalReferenceID) -> ClinicalReference</code>
- <code title="get /v1/autoScribe/clinicalReferences/byExternalReferenceId/{externalReferenceId}">client.autoScribe.clinicalReferences.<a href="./src/resources/auto-scribe/clinical-references.ts">retrieveByExternalReferenceID</a>(externalReferenceID) -> ClinicalReference</code>

## EphemeralSessions

Types:

- <code><a href="./src/resources/auto-scribe/ephemeral-sessions.ts">EphemeralSessionCreateResponse</a></code>

Methods:

- <code title="post /v1/autoScribe/ephemeral-sessions">client.autoScribe.ephemeralSessions.<a href="./src/resources/auto-scribe/ephemeral-sessions.ts">create</a>({ ...params }) -> EphemeralSessionCreateResponse</code>

## Studies

Types:

- <code><a href="./src/resources/auto-scribe/studies.ts">PriorReport</a></code>
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

- <code><a href="./src/resources/auto-scribe/reports.ts">Report</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportPdfItem</a></code>
- <code><a href="./src/resources/auto-scribe/reports.ts">ReportTextItem</a></code>
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

Types:

- <code><a href="./src/resources/viewer/viewer.ts">StudyViewerStatus</a></code>

## EphemeralSessions

Types:

- <code><a href="./src/resources/viewer/ephemeral-sessions.ts">EphemeralSessionCreateResponse</a></code>

Methods:

- <code title="post /v1/viewer/ephemeral-sessions">client.viewer.ephemeralSessions.<a href="./src/resources/viewer/ephemeral-sessions.ts">create</a>({ ...params }) -> EphemeralSessionCreateResponse</code>

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

# Express

Types:

- <code><a href="./src/resources/express/express.ts">ExpressCreateResponse</a></code>
- <code><a href="./src/resources/express/express.ts">ExpressRetrieveResponse</a></code>
- <code><a href="./src/resources/express/express.ts">ExpressUpdateResponse</a></code>
- <code><a href="./src/resources/express/express.ts">ExpressListResponse</a></code>
- <code><a href="./src/resources/express/express.ts">ExpressDeactivateResponse</a></code>
- <code><a href="./src/resources/express/express.ts">ExpressReactivateResponse</a></code>

Methods:

- <code title="post /v1/express">client.express.<a href="./src/resources/express/express.ts">create</a>({ ...params }) -> ExpressCreateResponse</code>
- <code title="get /v1/express/{expressCustomerId}">client.express.<a href="./src/resources/express/express.ts">retrieve</a>(expressCustomerID) -> ExpressRetrieveResponse</code>
- <code title="patch /v1/express/{expressCustomerId}">client.express.<a href="./src/resources/express/express.ts">update</a>(expressCustomerID, { ...params }) -> ExpressUpdateResponse</code>
- <code title="get /v1/express">client.express.<a href="./src/resources/express/express.ts">list</a>({ ...params }) -> ExpressListResponsesCursorExpressCustomers</code>
- <code title="post /v1/express/{expressCustomerId}/deactivate">client.express.<a href="./src/resources/express/express.ts">deactivate</a>(expressCustomerID) -> ExpressDeactivateResponse</code>
- <code title="post /v1/express/{expressCustomerId}/reactivate">client.express.<a href="./src/resources/express/express.ts">reactivate</a>(expressCustomerID) -> ExpressReactivateResponse</code>

## Users

Types:

- <code><a href="./src/resources/express/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/express/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="post /v1/express/{expressCustomerId}/users">client.express.users.<a href="./src/resources/express/users.ts">add</a>(expressCustomerID, { ...params }) -> UserAddResponse</code>
- <code title="delete /v1/express/{expressCustomerId}/users">client.express.users.<a href="./src/resources/express/users.ts">remove</a>(expressCustomerID, { ...params }) -> UserRemoveResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentDocument</a></code>
- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentDocumentURL</a></code>
- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentPriorReport</a></code>
- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">ClinicalContextEnrichmentRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">EphemeralAccessRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">EphemeralAccessRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">EphemeralAccessRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">ModalityWorklistItem</a></code>
- <code><a href="./src/resources/webhooks.ts">ModalityWorklistRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ModalityWorklistRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">ModalityWorklistRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">ModalityWorklistScheduledStep</a></code>
- <code><a href="./src/resources/webhooks.ts">PatientStudyEnrichmentRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PatientStudyEnrichmentRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">PatientStudyEnrichmentRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">ReportDeliveredEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReportDeliveredEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">ReportDeliveredResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">SecondaryCaptureAccessRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">SecondaryCaptureAccessRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">SecondaryCaptureAccessRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedEventData</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedManifest</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedManifestSeries</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedManifestSop</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedMediaURL</a></code>
- <code><a href="./src/resources/webhooks.ts">StudyAccessRequestedResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnsafeUnwrapWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unsafeUnwrap</a>(body) -> void</code>
- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>
