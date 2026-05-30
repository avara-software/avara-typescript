// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ViewerAPI from './viewer';
import { APIPromise } from '../../core/api-promise';
import { CursorStudies, type CursorStudiesParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Studies extends APIResource {
  /**
   * Creates a new study in the Viewer system with the specified DICOM Study Instance
   * UID and metadata. The study can be optionally assigned to a user.
   *
   * @example
   * ```ts
   * const study = await client.viewer.studies.create({
   *   severity: 'high',
   *   studyDescription: 'CT Chest/Abdomen/Pelvis',
   *   studyInstanceUid:
   *     '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
   * });
   * ```
   */
  create(body: StudyCreateParams, options?: RequestOptions): APIPromise<StudyCreateResponse> {
    return this._client.post('/v1/viewer/studies', { body, ...options });
  }

  /**
   * Retrieves a single study by its unique study ID. Returns the complete study
   * object with all metadata and status information.
   *
   * @example
   * ```ts
   * const study = await client.viewer.studies.retrieve(
   *   'stu_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  retrieve(studyID: string, options?: RequestOptions): APIPromise<StudyRetrieveResponse> {
    return this._client.get(path`/v1/viewer/studies/${studyID}`, options);
  }

  /**
   * Updates a study's properties including description, severity, assignment,
   * organization, and metadata. All fields are optional - only provided fields will
   * be updated.
   *
   * @example
   * ```ts
   * const study = await client.viewer.studies.update(
   *   'stu_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  update(
    studyID: string,
    body: StudyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUpdateResponse> {
    return this._client.patch(path`/v1/viewer/studies/${studyID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of studies with optional filtering by assignment,
   * severity, description, cancellation status, and viewer status. Returns up to 100
   * studies per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const studyListResponse of client.viewer.studies.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StudyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StudyListResponsesCursorStudies, StudyListResponse> {
    return this._client.getAPIList('/v1/viewer/studies', CursorStudies<StudyListResponse>, {
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
   * const response = await client.viewer.studies.cancel();
   * ```
   */
  cancel(
    body: StudyCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyCancelResponse> {
    return this._client.post('/v1/viewer/studies/cancel', { body, ...options });
  }

  /**
   * Generates a tokenized URL that redirects users directly to the Avara Viewer for
   * the specified study. The URL includes authentication and is time-limited for
   * security.
   *
   * @example
   * ```ts
   * const response = await client.viewer.studies.rerouteURL();
   * ```
   */
  rerouteURL(
    body: StudyRerouteURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyRerouteURLResponse> {
    return this._client.post('/v1/viewer/studies/reroute-url', { body, ...options });
  }

  /**
   * Retrieves a single study by its DICOM Study Instance UID. This is useful when
   * you have the DICOM UID but not the Avara study ID.
   *
   * @example
   * ```ts
   * const response = await client.viewer.studies.retrieveByUid(
   *   '1.2.840.10008.5.1.4.1.1.2',
   * );
   * ```
   */
  retrieveByUid(studyInstanceUid: string, options?: RequestOptions): APIPromise<StudyRetrieveByUidResponse> {
    return this._client.get(path`/v1/viewer/studies/by-uid/${studyInstanceUid}`, options);
  }

  /**
   * Restores a cancelled study to active status. The study must have been previously
   * cancelled. Can be identified by either study ID or DICOM Study Instance UID.
   *
   * @example
   * ```ts
   * const response = await client.viewer.studies.uncancel();
   * ```
   */
  uncancel(
    body: StudyUncancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StudyUncancelResponse> {
    return this._client.post('/v1/viewer/studies/uncancel', { body, ...options });
  }
}

export type StudyListResponsesCursorStudies = CursorStudies<StudyListResponse>;

/**
 * A study entity in the Viewer system with viewing status
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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus: ViewerAPI.StudyViewerStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * A study entity in the Viewer system with viewing status
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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus: ViewerAPI.StudyViewerStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * A study entity in the Viewer system with viewing status
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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus: ViewerAPI.StudyViewerStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * A study entity in the Viewer system with viewing status
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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus: ViewerAPI.StudyViewerStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * Response for cancelling a study in Viewer
 */
export interface StudyCancelResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing the generated reroute URL for a study in Viewer
 */
export interface StudyRerouteURLResponse {
  url: string;
}

/**
 * A study entity in the Viewer system with viewing status
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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus: ViewerAPI.StudyViewerStatus;

  /**
   * Timestamp when the study was last updated
   */
  updatedAt: string | null;

  /**
   * A reference to a user with basic identifying information
   */
  assignedTo?: Shared.UserReference | null;

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
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

/**
 * Response for uncancelling a study in Viewer
 */
export interface StudyUncancelResponse {
  success: boolean;

  message?: string;
}

export interface StudyCreateParams {
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
   * Express customer ID for the study. Format: cus\_{32-hex-chars}
   */
  expressCustomerId?: string;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };
}

export interface StudyUpdateParams {
  /**
   * User ID to assign the study to, or null to unassign. Format: usr\_{32-hex-chars}
   */
  assignedTo?: string;

  metadata?: { [key: string]: string } | null;

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
   * Viewer completion status for a study. 'incomplete' = not yet finished in the
   * viewer, 'complete' = finished.
   */
  studyViewerStatus?: ViewerAPI.StudyViewerStatus;
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
   * Filter by study viewer status
   */
  studyViewerStatus?: ViewerAPI.StudyViewerStatus;
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

export declare namespace Studies {
  export {
    type StudyCreateResponse as StudyCreateResponse,
    type StudyRetrieveResponse as StudyRetrieveResponse,
    type StudyUpdateResponse as StudyUpdateResponse,
    type StudyListResponse as StudyListResponse,
    type StudyCancelResponse as StudyCancelResponse,
    type StudyRerouteURLResponse as StudyRerouteURLResponse,
    type StudyRetrieveByUidResponse as StudyRetrieveByUidResponse,
    type StudyUncancelResponse as StudyUncancelResponse,
    type StudyListResponsesCursorStudies as StudyListResponsesCursorStudies,
    type StudyCreateParams as StudyCreateParams,
    type StudyUpdateParams as StudyUpdateParams,
    type StudyListParams as StudyListParams,
    type StudyCancelParams as StudyCancelParams,
    type StudyRerouteURLParams as StudyRerouteURLParams,
    type StudyUncancelParams as StudyUncancelParams,
  };
}
