// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as Shared from '../../../shared';
import * as AutoScribeAPI from '../../auto-scribe';
import * as StudiesAPI from '../studies';
import * as ReportsAPI from './reports';
import {
  ReportCreateParams,
  ReportCreateResponse,
  ReportListParams,
  ReportListResponse,
  ReportListResponsesCursorExternalReports,
  ReportRetrieveResponse,
  Reports,
} from './reports';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class External extends APIResource {
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);

  /**
   * Creates an archive (external) AutoScribe study. Clinical context fields are not
   * accepted. If no report fields are sent, no report row is created. Study create
   * is all-or-nothing, including file ingest.
   *
   * @example
   * ```ts
   * const external =
   *   await client.autoScribe.studies.external.create({
   *     reportMetadata: {},
   *     severity: 'normal',
   *     studyDescription: 'CT Chest without contrast',
   *     studyInstanceUid:
   *       '1.2.840.113619.2.55.3.604688119.868.1234567890.123',
   *   });
   * ```
   */
  create(body: ExternalCreateParams, options?: RequestOptions): APIPromise<ExternalCreateResponse> {
    return this._client.post('/v1/autoScribe/studies/external', { body, ...options });
  }

  /**
   * Soft-deletes an external study. This is one-way; POST /studies/uncancel cannot
   * reverse it.
   *
   * @example
   * ```ts
   * const external =
   *   await client.autoScribe.studies.external.delete();
   * ```
   */
  delete(
    body: ExternalDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalDeleteResponse> {
    return this._client.post('/v1/autoScribe/studies/external/delete', { body, ...options });
  }
}

/**
 * A study entity in the AutoScribe system with report workflow status
 */
export interface ExternalCreateResponse {
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
  priorReports?: Array<StudiesAPI.PriorReport>;

  /**
   * Array of report IDs associated with this study, including addendums
   */
  reportIds?: Array<StudiesAPI.ReportIDWithStatus>;

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
 * Result of deleting an external study
 */
export interface ExternalDeleteResponse {
  success: boolean;

  message?: string;
}

export interface ExternalCreateParams {
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

  expressCustomerId?: string;

  /**
   * Strongly recommended if you want to leverage priors functionality for future
   * reads for this patient.
   */
  externalPatientId?: string | null;

  /**
   * Custom key-value metadata for the study. Maximum 50 pairs, keys up to 100 chars,
   * values up to 1000 chars
   */
  metadata?: { [key: string]: string };

  modality?: string | null;

  /**
   * Optional original reader / author name. Shown as-is. May be set on study create
   * or a later report create; a later create overwrites it when provided.
   */
  readerName?: string;

  /**
   * File name including extension. Required when reportFileUrl is provided.
   * Supported types: PDF, PNG, JPG, GIF, WEBP.
   */
  reportFileName?: string;

  /**
   * HTTPS download URL for a PDF or image (PNG, JPG, GIF, WEBP). Not used for AI
   * tooling; the reader can still access it. Avara fetches this URL server-side. If
   * omitted, you can add it later. Once set, it cannot be edited; delete the study
   * to remake it. Whitelist https://api.avarasoftware.com on the file host if the
   * fetch is origin-restricted.
   */
  reportFileUrl?: string;

  /**
   * When this study is used as a prior, report AI tools leverage this text directly.
   * If omitted, you can add it later via POST /studies/external/reports. Once set,
   * it cannot be edited; delete the study to remake it.
   */
  reportText?: string;

  /**
   * Optional original sign-off timestamp or label. Shown as-is with no format
   * validation. May be set on study create or a later report create; a later create
   * overwrites it when provided.
   */
  signedAt?: string;
}

export interface ExternalDeleteParams {
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

External.Reports = Reports;

export declare namespace External {
  export {
    type ExternalCreateResponse as ExternalCreateResponse,
    type ExternalDeleteResponse as ExternalDeleteResponse,
    type ExternalCreateParams as ExternalCreateParams,
    type ExternalDeleteParams as ExternalDeleteParams,
  };

  export {
    Reports as Reports,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportListResponsesCursorExternalReports as ReportListResponsesCursorExternalReports,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };
}
