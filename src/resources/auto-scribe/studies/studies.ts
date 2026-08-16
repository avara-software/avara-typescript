// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AutoScribeAPI from '../auto-scribe';
import * as ExternalAPI from './external/external';
import {
  External,
  ExternalCreateParams,
  ExternalCreateResponse,
  ExternalDeleteParams,
  ExternalDeleteResponse,
} from './external/external';
import { APIPromise } from '../../../core/api-promise';
import { CursorStudies, type CursorStudiesParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Studies extends APIResource {
  external: ExternalAPI.External = new ExternalAPI.External(this._client);

  /**
   * Creates a new study in the AutoScribe system with DICOM metadata and report
   * generation information. The study can include patient demographics, scan
   * details, clinical context (indication, history, technologist technique/notes),
   * an imaging modality, an external patient identifier for linking studies, and
   * external prior reports for comparison context.
   *
   * @example
   * ```ts
   * const study = await client.autoScribe.studies.create({
   *   reportMetadata: {},
   *   severity: 'normal',
   *   studyDescription: 'Brain MRI with Contrast',
   *   studyInstanceUid:
   *     '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
   * });
   * ```
   */
  create(body: StudyCreateParams, options?: RequestOptions): APIPromise<StudyCreateResponse> {
    return this._client.post('/v1/autoScribe/studies', { body, ...options });
  }

  /**
   * Retrieves a single study by its unique study ID. Returns the complete study
   * object with all metadata, report status, and patient information.
   *
   * @example
   * ```ts
   * const study = await client.autoScribe.studies.retrieve(
   *   'stu_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  retrieve(studyID: string, options?: RequestOptions): APIPromise<StudyRetrieveResponse> {
    return this._client.get(path`/v1/autoScribe/studies/${studyID}`, options);
  }

  /**
   * Updates a study's properties including description, severity, assignment,
   * organization, metadata, and report metadata. All fields are optional - only
   * provided fields will be updated.
   *
   * @example
   * ```ts
   * const study = await client.autoScribe.studies.update(
   *   'stu_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  update(
    studyID: string,
    body: StudyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUpdateResponse> {
    return this._client.patch(path`/v1/autoScribe/studies/${studyID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of studies with optional filtering by assignment,
   * severity, description, cancellation status, and report status. Returns up to 100
   * studies per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const studyListResponse of client.autoScribe.studies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StudyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StudyListResponsesCursorStudies, StudyListResponse> {
    return this._client.getAPIList('/v1/autoScribe/studies', CursorStudies<StudyListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Marks a study as cancelled. Cancelled studies are preserved but flagged as
   * inactive. Can be identified by either study ID or DICOM Study Instance UID.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.studies.cancel();
   * ```
   */
  cancel(
    body: StudyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyCancelResponse> {
    return this._client.post('/v1/autoScribe/studies/cancel', { body, ...options });
  }

  /**
   * Generates a tokenized URL that redirects users to the AutoScribe interface
   * (viewer + dictation) for the specified study and user. The URL includes
   * authentication and is time-limited for security.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.studies.rerouteURL(
   *   {
   *     assignedToUserId:
   *       'usr_1234567890abcdef1234567890abcdef',
   *   },
   * );
   * ```
   */
  rerouteURL(body: StudyRerouteURLParams, options?: RequestOptions): APIPromise<StudyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/reroute-url', { body, ...options });
  }

  /**
   * Retrieves a single study by its DICOM Study Instance UID. This is useful when
   * you have the DICOM UID but not the Avara study ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autoScribe.studies.retrieveByUid(
   *     '1.2.840.10008.5.1.4.1.1.2',
   *   );
   * ```
   */
  retrieveByUid(studyInstanceUid: string, options?: RequestOptions): APIPromise<StudyRetrieveByUidResponse> {
    return this._client.get(path`/v1/autoScribe/studies/by-uid/${studyInstanceUid}`, options);
  }

  /**
   * Restores a cancelled study to active status. The study must have been previously
   * cancelled. Can be identified by either study ID or DICOM Study Instance UID.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.studies.uncancel();
   * ```
   */
  uncancel(
    body: StudyUncancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUncancelResponse> {
    return this._client.post('/v1/autoScribe/studies/uncancel', { body, ...options });
  }

  /**
   * Generates a tokenized URL that redirects users to the viewer interface only (no
   * dictation) for the specified study. Useful for read-only access or referring
   * physicians. The URL includes authentication and is time-limited.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autoScribe.studies.viewerOnlyRerouteURL();
   * ```
   */
  viewerOnlyRerouteURL(
    body: StudyViewerOnlyRerouteURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyViewerOnlyRerouteURLResponse> {
    return this._client.post('/v1/autoScribe/studies/viewer-only-reroute-url', { body, ...options });
  }
}

export type StudyListResponsesCursorStudies = CursorStudies<StudyListResponse>;

/**
 * External prior report metadata and text stored on a study
 */
export interface PriorReport {
  /**
   * Full prior report text
   */
  reportText: string;

  /**
   * Integrator's external study identifier
   */
  externalStudyId?: string;

  /**
   * Imaging modality for the prior study
   */
  modality?: string;

  /**
   * Prior study date (YYYY-MM-DD)
   */
  studyDate?: string;

  /**
   * Description of the prior study
   */
  studyDescription?: string;
}

/**
 * A report ID paired with its current status
 */
export interface ReportIDWithStatus {
  /**
   * Whether the report was marked critical at sign-off. null when the report is not
   * yet completed; true/false once completed.
   */
  isCritical: boolean | null;

  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId: string;

  /**
   * Status of an individual report. 'in_progress' = actively being dictated,
   * 'completed' = signed.
   */
  status: AutoScribeAPI.ReportStatus;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyCreateResponse {
  /**
   * Timestamp when the study was cancelled, null if not cancelled
   */
  cancelledAt: string | null;

  /**
   * Timestamp when the study was created
   */
  createdAt: string | null;

  /**
   * Whether the study has been cancelled
   */
  isCancelled: boolean;

  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
   * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
   * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
   */
  studyReportStatus: AutoScribeAPI.StudyReportStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * Relevant clinical history for the study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study
   */
  clinicalIndication?: string | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable patient identifier for linking studies
   */
  externalPatientId?: string | null;

  /**
   * External report identifier when this study has an attached archive report.
   * Format: ext\_{32-hex-chars}
   */
  externalReportId?: string;

  /**
   * Whether the primary report was marked as critical at sign-off
   */
  isCritical?: boolean;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text)
   */
  modality?: string | null;

  /**
   * External prior reports with metadata and text
   */
  priorReports?: Array<PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;

  /**
   * Kind of study. 'standard' is a live AutoScribe reading-workflow study.
   * 'external' is an imported archive study.
   */
  studyType?: AutoScribeAPI.StudyType;

  /**
   * Technologist notes for the study
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description
   */
  technologistTechnique?: string | null;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyRetrieveResponse {
  /**
   * Timestamp when the study was cancelled, null if not cancelled
   */
  cancelledAt: string | null;

  /**
   * Timestamp when the study was created
   */
  createdAt: string | null;

  /**
   * Whether the study has been cancelled
   */
  isCancelled: boolean;

  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
   * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
   * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
   */
  studyReportStatus: AutoScribeAPI.StudyReportStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * Relevant clinical history for the study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study
   */
  clinicalIndication?: string | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable patient identifier for linking studies
   */
  externalPatientId?: string | null;

  /**
   * External report identifier when this study has an attached archive report.
   * Format: ext\_{32-hex-chars}
   */
  externalReportId?: string;

  /**
   * Whether the primary report was marked as critical at sign-off
   */
  isCritical?: boolean;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text)
   */
  modality?: string | null;

  /**
   * External prior reports with metadata and text
   */
  priorReports?: Array<PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;

  /**
   * Kind of study. 'standard' is a live AutoScribe reading-workflow study.
   * 'external' is an imported archive study.
   */
  studyType?: AutoScribeAPI.StudyType;

  /**
   * Technologist notes for the study
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description
   */
  technologistTechnique?: string | null;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyUpdateResponse {
  /**
   * Timestamp when the study was cancelled, null if not cancelled
   */
  cancelledAt: string | null;

  /**
   * Timestamp when the study was created
   */
  createdAt: string | null;

  /**
   * Whether the study has been cancelled
   */
  isCancelled: boolean;

  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
   * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
   * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
   */
  studyReportStatus: AutoScribeAPI.StudyReportStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * Relevant clinical history for the study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study
   */
  clinicalIndication?: string | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable patient identifier for linking studies
   */
  externalPatientId?: string | null;

  /**
   * External report identifier when this study has an attached archive report.
   * Format: ext\_{32-hex-chars}
   */
  externalReportId?: string;

  /**
   * Whether the primary report was marked as critical at sign-off
   */
  isCritical?: boolean;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text)
   */
  modality?: string | null;

  /**
   * External prior reports with metadata and text
   */
  priorReports?: Array<PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;

  /**
   * Kind of study. 'standard' is a live AutoScribe reading-workflow study.
   * 'external' is an imported archive study.
   */
  studyType?: AutoScribeAPI.StudyType;

  /**
   * Technologist notes for the study
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description
   */
  technologistTechnique?: string | null;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyListResponse {
  /**
   * Timestamp when the study was cancelled, null if not cancelled
   */
  cancelledAt: string | null;

  /**
   * Timestamp when the study was created
   */
  createdAt: string | null;

  /**
   * Whether the study has been cancelled
   */
  isCancelled: boolean;

  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
   * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
   * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
   */
  studyReportStatus: AutoScribeAPI.StudyReportStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * Relevant clinical history for the study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study
   */
  clinicalIndication?: string | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable patient identifier for linking studies
   */
  externalPatientId?: string | null;

  /**
   * External report identifier when this study has an attached archive report.
   * Format: ext\_{32-hex-chars}
   */
  externalReportId?: string;

  /**
   * Whether the primary report was marked as critical at sign-off
   */
  isCritical?: boolean;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text)
   */
  modality?: string | null;

  /**
   * External prior reports with metadata and text
   */
  priorReports?: Array<PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;

  /**
   * Kind of study. 'standard' is a live AutoScribe reading-workflow study.
   * 'external' is an imported archive study.
   */
  studyType?: AutoScribeAPI.StudyType;

  /**
   * Technologist notes for the study
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description
   */
  technologistTechnique?: string | null;
}

/**
 * Response for cancelling a study in AutoScribe
 */
export interface StudyCancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated reroute URL for AutoScribe (viewer +
 * dictation)
 */
export interface StudyRerouteURLResponse {
  url: string;
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface StudyRetrieveByUidResponse {
  /**
   * Timestamp when the study was cancelled, null if not cancelled
   */
  cancelledAt: string | null;

  /**
   * Timestamp when the study was created
   */
  createdAt: string | null;

  /**
   * Whether the study has been cancelled
   */
  isCancelled: boolean;

  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * AutoScribe report workflow status for a study. 'unassigned' = no radiologist
   * assigned, 'assigned' = assigned but not started, 'in_progress' = actively being
   * dictated, 'completed' = report signed, 'addendum_active' = addendum in progress.
   */
  studyReportStatus: AutoScribeAPI.StudyReportStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

  /**
   * Relevant clinical history for the study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study
   */
  clinicalIndication?: string | null;

  /**
   * A reference to an API key with basic identifying information
   */
  createdByApiKey?: Shared.APIKeyReference | null;

  /**
   * A reference to a user with basic identifying information
   */
  createdByUser?: Shared.UserReference | null;

  /**
   * A reference to an Express customer with basic identifying information
   */
  expressCustomer?: Shared.ExpressCustomerReference | null;

  /**
   * Integrator-provided stable patient identifier for linking studies
   */
  externalPatientId?: string | null;

  /**
   * External report identifier when this study has an attached archive report.
   * Format: ext\_{32-hex-chars}
   */
  externalReportId?: string;

  /**
   * Whether the primary report was marked as critical at sign-off
   */
  isCritical?: boolean;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text)
   */
  modality?: string | null;

  /**
   * External prior reports with metadata and text
   */
  priorReports?: Array<PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;

  /**
   * Kind of study. 'standard' is a live AutoScribe reading-workflow study.
   * 'external' is an imported archive study.
   */
  studyType?: AutoScribeAPI.StudyType;

  /**
   * Technologist notes for the study
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description
   */
  technologistTechnique?: string | null;
}

/**
 * Response for uncancelling a study in AutoScribe
 */
export interface StudyUncancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated viewer-only reroute URL. Requires viewer to be
 * configured.
 */
export interface StudyViewerOnlyRerouteURLResponse {
  url: string;
}

export interface StudyCreateParams {
  /**
   * Patient demographics and scan information for report generation
   */
  reportMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * User ID to assign the study to. Format: usr\_{32-hex-chars}
   */
  assignedTo?: string;

  /**
   * Relevant clinical history for the patient/study
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study (reason the study was ordered)
   */
  clinicalIndication?: string | null;

  /**
   * Express customer ID for the study. Format: cus\_{32-hex-chars}
   */
  expressCustomerId?: string;

  /**
   * Integrator-provided stable patient identifier used to link studies for the same
   * patient across the AutoScribe system
   */
  externalPatientId?: string | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Imaging modality for the study (free text, e.g., 'CT', 'MRI', 'X-Ray')
   */
  modality?: string | null;

  /**
   * External prior reports (metadata + full report text) to provide
   * longitudinal/comparison context for this study. Maximum 50 items
   */
  priorReports?: Array<PriorReport>;

  /**
   * Technologist notes for the study. Maximum 50 items, each up to 1000 characters
   */
  technologistNotes?: Array<string>;

  /**
   * Imaging technique description provided by the technologist
   */
  technologistTechnique?: string | null;
}

export interface StudyUpdateParams {
  /**
   * User ID to assign the study to, or null to unassign. Format: usr\_{32-hex-chars}
   */
  assignedTo?: string;

  /**
   * Relevant clinical history for the patient/study. Null clears.
   */
  clinicalHistory?: string | null;

  /**
   * Clinical indication for the study. Null clears.
   */
  clinicalIndication?: string | null;

  /**
   * Express Customer ID for the study, or null to remove. Format:
   * cus\_{32-hex-chars}
   */
  expressCustomerId?: string;

  /**
   * Integrator-provided stable patient identifier used to link studies for the same
   * patient. Null clears.
   */
  externalPatientId?: string | null;

  metadata?: { [key: string]: string } | null;

  /**
   * Imaging modality for the study (free text). Null clears.
   */
  modality?: string | null;

  /**
   * External prior reports (metadata + full report text) for comparison context.
   * Null clears; an array replaces the existing set. Maximum 50 items
   */
  priorReports?: Array<PriorReport> | null;

  reportMetadata?: StudyUpdateParams.ReportMetadata;

  /**
   * Priority level of a study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention.
   */
  severity?: Shared.Severity;

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription?: string;

  /**
   * Technologist notes for the study. Null clears; an array replaces the existing
   * set. Maximum 50 items, each up to 1000 characters
   */
  technologistNotes?: Array<string> | null;

  /**
   * Imaging technique description provided by the technologist. Null clears.
   */
  technologistTechnique?: string | null;
}

export namespace StudyUpdateParams {
  export interface ReportMetadata {
    age?: string | null;

    dateOfBirth?: string | null;

    facilityName?: string | null;

    height?: ReportMetadata.Height | null;

    mrn?: string | null;

    patientName?: string | null;

    /**
     * Procedure or study type. Nullable on PATCH. Maps to DB scan_type and
     * report_header.scan_type.
     */
    procedure?: string | null;

    referringPhysicianName?: string | null;

    /**
     * Patient's biological sex. Options: 'male', 'female', 'other'
     */
    sex?: AutoScribeAPI.Sex | null;

    /**
     * Study date (YYYY-MM-DD). Nullable on PATCH. Maps to DB scan_date and
     * report_header.scan_date.
     */
    studyDate?: string | null;

    /**
     * Study time (HH:MM). Nullable on PATCH. Maps to DB scan_time and
     * report_header.scan_time.
     */
    studyTime?: string | null;

    weight?: ReportMetadata.Weight | null;
  }

  export namespace ReportMetadata {
    export interface Height {
      /**
       * Unit of measure for a height value. 'in' = inches, 'cm' = centimeters.
       */
      unit: AutoScribeAPI.HeightUnit;

      value: number;
    }

    export interface Weight {
      /**
       * Unit of measure for a weight value. 'lbs' = pounds, 'kg' = kilograms.
       */
      unit: AutoScribeAPI.WeightUnit;

      value: number;
    }
  }
}

export interface StudyListParams extends CursorStudiesParams {
  /**
   * Filter by assigned user ID (null = explicitly unassigned). Format:
   * usr\_<32-hex-chars>
   */
  assignedTo?: string | null;

  /**
   * Filter by Express customer ID (null = studies with no customer). Format:
   * cus\_{32-hex-chars}
   */
  expressCustomerId?: string | null;

  /**
   * Filter by cancellation status
   */
  isCancelled?: boolean | null;

  /**
   * Filter by study severity
   */
  severity?: Shared.Severity;

  /**
   * Filter by study description (contains match)
   */
  studyDescription?: string;

  /**
   * Filter by report status(es)
   */
  studyReportStatus?: Array<AutoScribeAPI.StudyReportStatus>;

  /**
   * Filter by study kind. Omit to return both 'standard' and 'external' studies.
   */
  studyType?: AutoScribeAPI.StudyType;
}

export interface StudyCancelParams {
  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid?: string;
}

export interface StudyRerouteURLParams {
  /**
   * User ID to assign study to. Format: usr\_{32-hex-chars}
   */
  assignedToUserId: string;

  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid?: string;
}

export interface StudyUncancelParams {
  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid?: string;
}

export interface StudyViewerOnlyRerouteURLParams {
  /**
   * Unique study identifier. Format: stu\_{32-hex-chars}
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid?: string;

  /**
   * Optional user ID for audit tracking. Format: usr\_{32-hex-chars}
   */
  userId?: string;
}

Studies.External = External;

export declare namespace Studies {
  export {
    type PriorReport as PriorReport,
    type ReportIDWithStatus as ReportIDWithStatus,
    type StudyCreateResponse as StudyCreateResponse,
    type StudyRetrieveResponse as StudyRetrieveResponse,
    type StudyUpdateResponse as StudyUpdateResponse,
    type StudyListResponse as StudyListResponse,
    type StudyCancelResponse as StudyCancelResponse,
    type StudyRerouteURLResponse as StudyRerouteURLResponse,
    type StudyRetrieveByUidResponse as StudyRetrieveByUidResponse,
    type StudyUncancelResponse as StudyUncancelResponse,
    type StudyViewerOnlyRerouteURLResponse as StudyViewerOnlyRerouteURLResponse,
    type StudyListResponsesCursorStudies as StudyListResponsesCursorStudies,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
    type StudyViewerOnlyRerouteURLParams as StudyViewerOnlyRerouteURLParams,
  };

  export {
    External as External,
    type ExternalCreateResponse as ExternalCreateResponse,
    type ExternalDeleteResponse as ExternalDeleteResponse,
    type ExternalCreateParams as ExternalCreateParams,
    type ExternalDeleteParams as ExternalDeleteParams,
  };
}
