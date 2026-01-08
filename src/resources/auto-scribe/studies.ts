// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoScribeAPI from './auto-scribe';
import { APIPromise } from '../../core/api-promise';
import { CursorStudies, type CursorStudiesParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Studies extends APIResource {
  /**
   * Creates a new study in the AutoScribe system with DICOM metadata and report
   * generation information. The study can include patient demographics, scan
   * details, and references to prior studies/reports for context.
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
 * A report ID paired with its current status
 */
export interface ReportIDWithStatus {
  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId: string;

  /**
   * Current status of the report
   */
  status: 'in_progress' | 'completed';
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Report workflow status. 'unassigned' = no radiologist assigned, 'assigned' =
   * assigned but not started, 'in_progress' = actively being dictated, 'completed' =
   * report signed, 'addendum_active' = addendum in progress
   */
  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  assignedTo?: StudyCreateResponse.AssignedTo | null;

  /**
   * Reference to the API key used to create this study
   */
  createdByApiKey?: StudyCreateResponse.CreatedByAPIKey | null;

  /**
   * Reference to the user who created this study via dashboard
   */
  createdByUser?: StudyCreateResponse.CreatedByUser | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Reference to the organization this study belongs to
   */
  org?: StudyCreateResponse.Org | null;

  /**
   * Array of prior report texts to provide clinical context
   */
  priorReportTexts?: Array<string>;

  /**
   * Array of prior study IDs for comparison context (format: stu\_{32-hex-chars})
   */
  priorStudyIds?: Array<string>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;
}

export namespace StudyCreateResponse {
  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  export interface AssignedTo {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the API key used to create this study
   */
  export interface CreatedByAPIKey {
    /**
     * Unique API key identifier (UUIDv4 format)
     */
    apiKeyId: string;

    /**
     * Human-readable description of the API key
     */
    description: string;

    /**
     * Whether this API key has access to the Viewer product
     */
    isViewerEnabled?: boolean;
  }

  /**
   * Reference to the user who created this study via dashboard
   */
  export interface CreatedByUser {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the organization this study belongs to
   */
  export interface Org {
    /**
     * Unique organization identifier. Format: org\_{32-hex-chars}
     */
    orgId: string;

    /**
     * Name of the organization
     */
    orgName: string;
  }
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Report workflow status. 'unassigned' = no radiologist assigned, 'assigned' =
   * assigned but not started, 'in_progress' = actively being dictated, 'completed' =
   * report signed, 'addendum_active' = addendum in progress
   */
  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  assignedTo?: StudyRetrieveResponse.AssignedTo | null;

  /**
   * Reference to the API key used to create this study
   */
  createdByApiKey?: StudyRetrieveResponse.CreatedByAPIKey | null;

  /**
   * Reference to the user who created this study via dashboard
   */
  createdByUser?: StudyRetrieveResponse.CreatedByUser | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Reference to the organization this study belongs to
   */
  org?: StudyRetrieveResponse.Org | null;

  /**
   * Array of prior report texts to provide clinical context
   */
  priorReportTexts?: Array<string>;

  /**
   * Array of prior study IDs for comparison context (format: stu\_{32-hex-chars})
   */
  priorStudyIds?: Array<string>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;
}

export namespace StudyRetrieveResponse {
  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  export interface AssignedTo {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the API key used to create this study
   */
  export interface CreatedByAPIKey {
    /**
     * Unique API key identifier (UUIDv4 format)
     */
    apiKeyId: string;

    /**
     * Human-readable description of the API key
     */
    description: string;

    /**
     * Whether this API key has access to the Viewer product
     */
    isViewerEnabled?: boolean;
  }

  /**
   * Reference to the user who created this study via dashboard
   */
  export interface CreatedByUser {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the organization this study belongs to
   */
  export interface Org {
    /**
     * Unique organization identifier. Format: org\_{32-hex-chars}
     */
    orgId: string;

    /**
     * Name of the organization
     */
    orgName: string;
  }
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Report workflow status. 'unassigned' = no radiologist assigned, 'assigned' =
   * assigned but not started, 'in_progress' = actively being dictated, 'completed' =
   * report signed, 'addendum_active' = addendum in progress
   */
  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  assignedTo?: StudyUpdateResponse.AssignedTo | null;

  /**
   * Reference to the API key used to create this study
   */
  createdByApiKey?: StudyUpdateResponse.CreatedByAPIKey | null;

  /**
   * Reference to the user who created this study via dashboard
   */
  createdByUser?: StudyUpdateResponse.CreatedByUser | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Reference to the organization this study belongs to
   */
  org?: StudyUpdateResponse.Org | null;

  /**
   * Array of prior report texts to provide clinical context
   */
  priorReportTexts?: Array<string>;

  /**
   * Array of prior study IDs for comparison context (format: stu\_{32-hex-chars})
   */
  priorStudyIds?: Array<string>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;
}

export namespace StudyUpdateResponse {
  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  export interface AssignedTo {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the API key used to create this study
   */
  export interface CreatedByAPIKey {
    /**
     * Unique API key identifier (UUIDv4 format)
     */
    apiKeyId: string;

    /**
     * Human-readable description of the API key
     */
    description: string;

    /**
     * Whether this API key has access to the Viewer product
     */
    isViewerEnabled?: boolean;
  }

  /**
   * Reference to the user who created this study via dashboard
   */
  export interface CreatedByUser {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the organization this study belongs to
   */
  export interface Org {
    /**
     * Unique organization identifier. Format: org\_{32-hex-chars}
     */
    orgId: string;

    /**
     * Name of the organization
     */
    orgName: string;
  }
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Report workflow status. 'unassigned' = no radiologist assigned, 'assigned' =
   * assigned but not started, 'in_progress' = actively being dictated, 'completed' =
   * report signed, 'addendum_active' = addendum in progress
   */
  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  assignedTo?: StudyListResponse.AssignedTo | null;

  /**
   * Reference to the API key used to create this study
   */
  createdByApiKey?: StudyListResponse.CreatedByAPIKey | null;

  /**
   * Reference to the user who created this study via dashboard
   */
  createdByUser?: StudyListResponse.CreatedByUser | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Reference to the organization this study belongs to
   */
  org?: StudyListResponse.Org | null;

  /**
   * Array of prior report texts to provide clinical context
   */
  priorReportTexts?: Array<string>;

  /**
   * Array of prior study IDs for comparison context (format: stu\_{32-hex-chars})
   */
  priorStudyIds?: Array<string>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;
}

export namespace StudyListResponse {
  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  export interface AssignedTo {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the API key used to create this study
   */
  export interface CreatedByAPIKey {
    /**
     * Unique API key identifier (UUIDv4 format)
     */
    apiKeyId: string;

    /**
     * Human-readable description of the API key
     */
    description: string;

    /**
     * Whether this API key has access to the Viewer product
     */
    isViewerEnabled?: boolean;
  }

  /**
   * Reference to the user who created this study via dashboard
   */
  export interface CreatedByUser {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the organization this study belongs to
   */
  export interface Org {
    /**
     * Unique organization identifier. Format: org\_{32-hex-chars}
     */
    orgId: string;

    /**
     * Name of the organization
     */
    orgName: string;
  }
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Report workflow status. 'unassigned' = no radiologist assigned, 'assigned' =
   * assigned but not started, 'in_progress' = actively being dictated, 'completed' =
   * report signed, 'addendum_active' = addendum in progress
   */
  studyReportStatus: 'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active';

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  assignedTo?: StudyRetrieveByUidResponse.AssignedTo | null;

  /**
   * Reference to the API key used to create this study
   */
  createdByApiKey?: StudyRetrieveByUidResponse.CreatedByAPIKey | null;

  /**
   * Reference to the user who created this study via dashboard
   */
  createdByUser?: StudyRetrieveByUidResponse.CreatedByUser | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Reference to the organization this study belongs to
   */
  org?: StudyRetrieveByUidResponse.Org | null;

  /**
   * Array of prior report texts to provide clinical context
   */
  priorReportTexts?: Array<string>;

  /**
   * Array of prior study IDs for comparison context (format: stu\_{32-hex-chars})
   */
  priorStudyIds?: Array<string>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<ReportIDWithStatus>;
}

export namespace StudyRetrieveByUidResponse {
  /**
   * Reference to the assigned radiologist, null if unassigned
   */
  export interface AssignedTo {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the API key used to create this study
   */
  export interface CreatedByAPIKey {
    /**
     * Unique API key identifier (UUIDv4 format)
     */
    apiKeyId: string;

    /**
     * Human-readable description of the API key
     */
    description: string;

    /**
     * Whether this API key has access to the Viewer product
     */
    isViewerEnabled?: boolean;
  }

  /**
   * Reference to the user who created this study via dashboard
   */
  export interface CreatedByUser {
    /**
     * User's email address
     */
    email: string;

    /**
     * Unique user identifier. Format: usr\_{32-hex-chars}
     */
    userId: string;

    /**
     * User's first name
     */
    firstName?: string;

    /**
     * User's last name
     */
    lastName?: string;

    /**
     * User's middle name
     */
    middleName?: string;

    /**
     * Name suffix (e.g., 'MD', 'Jr.')
     */
    suffix1?: string;

    /**
     * Additional name suffix
     */
    suffix2?: string;
  }

  /**
   * Reference to the organization this study belongs to
   */
  export interface Org {
    /**
     * Unique organization identifier. Format: org\_{32-hex-chars}
     */
    orgId: string;

    /**
     * Name of the organization
     */
    orgName: string;
  }
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
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity: 'normal' | 'high' | 'stat';

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  /**
   * Organization ID for the study. Format: org\_{32-hex-chars}
   */
  orgId?: string;

  priorReportTexts?: Array<string>;

  priorStudyIds?: Array<string>;
}

export interface StudyUpdateParams {
  /**
   * User ID to assign the study to, or null to unassign. Format: usr\_{32-hex-chars}
   */
  assignedTo?: string;

  metadata?: { [key: string]: string } | null;

  /**
   * Organization ID for the study, or null to remove. Format: org\_{32-hex-chars}
   */
  orgId?: string;

  priorReportTexts?: Array<string> | null;

  priorStudyIds?: Array<string> | null;

  reportMetadata?: StudyUpdateParams.ReportMetadata;

  /**
   * Priority level of the study. 'normal' for routine, 'high' for urgent, 'stat' for
   * immediate attention
   */
  severity?: 'normal' | 'high' | 'stat';

  /**
   * Description of the study/scan (e.g., 'Brain MRI with Contrast', 'Chest CT')
   */
  studyDescription?: string;
}

export namespace StudyUpdateParams {
  export interface ReportMetadata {
    age?: string | null;

    dateOfBirth?: string | null;

    facilityName?: string | null;

    height?: ReportMetadata.Height | null;

    mrn?: string | null;

    patientName?: string | null;

    referringPhysicianName?: string | null;

    scanDate?: string | null;

    scanTime?: string | null;

    scanType?: string | null;

    sex?: 'male' | 'female' | 'other' | null;

    weight?: ReportMetadata.Weight | null;
  }

  export namespace ReportMetadata {
    export interface Height {
      unit: 'in' | 'cm';

      value: number;
    }

    export interface Weight {
      unit: 'lbs' | 'kg';

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
   * Filter by cancellation status
   */
  isCancelled?: boolean | null;

  /**
   * Filter by study severity
   */
  severity?: 'normal' | 'high' | 'stat';

  /**
   * Filter by study description (contains match)
   */
  studyDescription?: string;

  /**
   * Filter by report status(es)
   */
  studyReportStatus?: Array<'unassigned' | 'assigned' | 'in_progress' | 'completed' | 'addendum_active'>;
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

export declare namespace Studies {
  export {
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
}
