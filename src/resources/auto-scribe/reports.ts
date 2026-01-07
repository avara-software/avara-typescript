// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
 * Response containing a list of reports for a study
 */
export interface ReportListResponse {
  reports: Array<ReportListResponse.Report>;

  studyId: string;

  studyInstanceUid: string;
}

export namespace ReportListResponse {
  /**
   * A radiology report in the AutoScribe system
   */
  export interface Report {
    createdAt: string;

    isAddendum: boolean;

    reportId: string;

    signedAt: string | null;

    /**
     * Patient demographics and scan information for report generation
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    status: 'in_progress' | 'completed';

    studyId: string;

    updatedAt: string;

    userId: string;

    reportPlainText?: string;
  }
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
    presignedUrl: string;

    reportId: string;

    /**
     * Patient demographics and scan information for report generation
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    studyId: string;

    studyInstanceUid: string;
  }

  /**
   * Response containing a list of reports with their PDF download URLs
   */
  export interface ListReportsPdfResponse {
    reports: Array<ListReportsPdfResponse.Report>;

    studyId: string;

    studyInstanceUid: string;
  }

  export namespace ListReportsPdfResponse {
    /**
     * A report with its PDF download URL
     */
    export interface Report {
      presignedUrl: string;

      reportId: string;

      /**
       * Patient demographics and scan information for report generation
       */
      snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

      studyId: string;

      studyInstanceUid: string;
    }
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
    reportId: string;

    /**
     * Patient demographics and scan information for report generation
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    studyId: string;

    studyInstanceUid: string;

    plainText?: string;
  }

  /**
   * Response containing a list of reports with their plain text
   */
  export interface ListReportsTextResponse {
    reports: Array<ListReportsTextResponse.Report>;

    studyId: string;

    studyInstanceUid: string;
  }

  export namespace ListReportsTextResponse {
    /**
     * A report with its plain text content
     */
    export interface Report {
      reportId: string;

      /**
       * Patient demographics and scan information for report generation
       */
      snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

      studyId: string;

      studyInstanceUid: string;

      plainText?: string;
    }
  }
}

export interface ReportListParams {
  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export interface ReportPdfParams {
  /**
   * Report ID. Format: rep\_<32-hex-chars>
   */
  reportId?: string;

  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export interface ReportTextParams {
  /**
   * Report ID. Format: rep\_<32-hex-chars>
   */
  reportId?: string;

  /**
   * Study ID. Format: stu\_<32-hex-chars>
   */
  studyId?: string;

  /**
   * DICOM Study Instance UID
   */
  studyInstanceUid?: string;
}

export declare namespace Reports {
  export {
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
