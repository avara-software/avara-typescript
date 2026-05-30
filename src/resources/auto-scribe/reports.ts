// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReportsAPI from './reports';
import * as AutoScribeAPI from './auto-scribe';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  /**
   * Retrieves all reports (including versions and addendums) for a specific study.
   * Must provide either study ID or DICOM Study Instance UID. Returns report
   * metadata including status, version, and timestamps.
   *
   * @example
   * ```ts
   * const reports = await client.autoScribe.reports.list();
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListResponse> {
    return this._client.get('/v1/autoScribe/reports', { query, ...options });
  }

  /**
   * Initiates the creation of an addendum to an existing completed report. The study
   * status will change to 'addendum_active' allowing the radiologist to dictate
   * additional findings.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.reports.addendum(
   *   'rep_1234567890abcdef1234567890abcdef',
   * );
   * ```
   */
  addendum(reportID: string, options?: RequestOptions): APIPromise<ReportAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/addendum`, options);
  }

  /**
   * Cancels an in-progress addendum and reverts the study status to 'completed'. The
   * original report remains unchanged. Only valid for active addendums.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autoScribe.reports.cancelAddendum(
   *     'rep_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  cancelAddendum(reportID: string, options?: RequestOptions): APIPromise<ReportCancelAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/cancel-addendum`, options);
  }

  /**
   * Retrieves presigned URLs for accessing report PDFs. Can fetch a single report by
   * report ID, or all reports for a study by study ID/DICOM UID. URLs are
   * time-limited for security.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.reports.pdf();
   * ```
   */
  pdf(
    query: ReportPdfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportPdfResponse> {
    return this._client.get('/v1/autoScribe/reports/pdf', { query, ...options });
  }

  /**
   * Retrieves the text content of a report. Can fetch a single report by report ID,
   * or all reports for a study by study ID/DICOM UID. Returns plain text report
   * content.
   *
   * @example
   * ```ts
   * const response = await client.autoScribe.reports.text();
   * ```
   */
  text(
    query: ReportTextParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportTextResponse> {
    return this._client.get('/v1/autoScribe/reports/text', { query, ...options });
  }
}

/**
 * A radiology report in the AutoScribe system
 */
export interface Report {
  /**
   * Timestamp when the report was created
   */
  createdAt: string | null;

  /**
   * Whether this report is an addendum to a previous report
   */
  isAddendum: boolean;

  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId: string;

  /**
   * Timestamp when the report was signed, null if not yet signed
   */
  signedAt: string | null;

  /**
   * Patient demographics and scan information for report generation
   */
  snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Status of an individual report. 'in_progress' = actively being dictated,
   * 'completed' = signed.
   */
  status: AutoScribeAPI.ReportStatus;

  /**
   * Study ID this report belongs to. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * Timestamp when the report was last updated
   */
  updatedAt: string | null;

  /**
   * User ID of the radiologist who created/signed this report. Format:
   * usr\_{32-hex-chars}
   */
  userId: string;

  /**
   * Plain text content of the report
   */
  reportPlainText?: string;
}

/**
 * A report with its PDF download URL
 */
export interface ReportPdfItem {
  /**
   * Time-limited presigned URL to download the PDF (expires after 1 hour)
   */
  presignedUrl: string;

  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId: string;

  /**
   * Patient demographics and scan information for report generation
   */
  snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Study ID this report belongs to. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;
}

/**
 * A report with its plain text content
 */
export interface ReportTextItem {
  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId: string;

  /**
   * Patient demographics and scan information for report generation
   */
  snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

  /**
   * Study ID this report belongs to. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;

  /**
   * Plain text content of the report
   */
  plainText?: string;
}

/**
 * Response containing a list of reports for a study
 */
export interface ReportListResponse {
  /**
   * Array of report objects with full details
   */
  reports: Array<Report>;

  /**
   * Study ID the reports belong to. Format: stu\_{32-hex-chars}
   */
  studyId: string;

  /**
   * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
   * '1.2.840.10008.5.1.4.1.1.2')
   */
  studyInstanceUid: string;
}

/**
 * Response for creating a report addendum
 */
export interface ReportAddendumResponse {
  success: boolean;

  message?: string;
}

/**
 * Response for cancelling a report addendum
 */
export interface ReportCancelAddendumResponse {
  success: boolean;

  message?: string;
}

/**
 * Response containing a single report with its PDF download URL
 */
export type ReportPdfResponse =
  | ReportPdfResponse.SingleReportPdfResponse
  | ReportPdfResponse.ListReportsPdfResponse;

export namespace ReportPdfResponse {
  /**
   * Response containing a single report with its PDF download URL
   */
  export interface SingleReportPdfResponse {
    /**
     * Time-limited presigned URL to download the PDF (expires after 1 hour)
     */
    presignedUrl: string;

    /**
     * Unique report identifier. Format: rep\_{32-hex-chars}
     */
    reportId: string;

    /**
     * Patient demographics and scan information for report generation
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    /**
     * Study ID this report belongs to. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
     * '1.2.840.10008.5.1.4.1.1.2')
     */
    studyInstanceUid: string;
  }

  /**
   * Response containing a list of reports with their PDF download URLs
   */
  export interface ListReportsPdfResponse {
    /**
     * Array of report PDF items with download URLs
     */
    reports: Array<ReportsAPI.ReportPdfItem>;

    /**
     * Study ID the reports belong to. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
     * '1.2.840.10008.5.1.4.1.1.2')
     */
    studyInstanceUid: string;
  }
}

/**
 * Response containing a single report with its plain text
 */
export type ReportTextResponse =
  | ReportTextResponse.SingleReportTextResponse
  | ReportTextResponse.ListReportsTextResponse;

export namespace ReportTextResponse {
  /**
   * Response containing a single report with its plain text
   */
  export interface SingleReportTextResponse {
    /**
     * Unique report identifier. Format: rep\_{32-hex-chars}
     */
    reportId: string;

    /**
     * Patient demographics and scan information for report generation
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    /**
     * Study ID this report belongs to. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
     * '1.2.840.10008.5.1.4.1.1.2')
     */
    studyInstanceUid: string;

    /**
     * Plain text content of the report
     */
    plainText?: string;
  }

  /**
   * Response containing a list of reports with their plain text
   */
  export interface ListReportsTextResponse {
    /**
     * Array of report text items
     */
    reports: Array<ReportsAPI.ReportTextItem>;

    /**
     * Study ID the reports belong to. Format: stu\_{32-hex-chars}
     */
    studyId: string;

    /**
     * DICOM Study Instance UID. Must be a valid DICOM UID format (e.g.,
     * '1.2.840.10008.5.1.4.1.1.2')
     */
    studyInstanceUid: string;
  }
}

export interface ReportListParams {
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

export interface ReportPdfParams {
  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId?: string;

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

export interface ReportTextParams {
  /**
   * Unique report identifier. Format: rep\_{32-hex-chars}
   */
  reportId?: string;

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

export declare namespace Reports {
  export {
    type Report as Report,
    type ReportPdfItem as ReportPdfItem,
    type ReportTextItem as ReportTextItem,
    type ReportListResponse as ReportListResponse,
    type ReportAddendumResponse as ReportAddendumResponse,
    type ReportCancelAddendumResponse as ReportCancelAddendumResponse,
    type ReportPdfResponse as ReportPdfResponse,
    type ReportTextResponse as ReportTextResponse,
    type ReportListParams as ReportListParams,
    type ReportPdfParams as ReportPdfParams,
    type ReportTextParams as ReportTextParams,
  };
}
