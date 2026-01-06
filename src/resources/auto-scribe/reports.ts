// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoScribeAPI from './auto-scribe';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reports extends APIResource {
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListResponse> {
    return this._client.get('/v1/autoScribe/reports', { query, ...options });
  }

  addendum(reportID: string, options?: RequestOptions): APIPromise<ReportAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/addendum`, options);
  }

  cancelAddendum(reportID: string, options?: RequestOptions): APIPromise<ReportCancelAddendumResponse> {
    return this._client.post(path`/v1/autoScribe/reports/${reportID}/cancel-addendum`, options);
  }

  pdf(
    query: ReportPdfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportPdfResponse> {
    return this._client.get('/v1/autoScribe/reports/pdf', { query, ...options });
  }

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
    createdAt: string | null;

    isAddendum: boolean;

    reportId: string;

    signedAt: string | null;

    /**
     * Metadata for a study report including patient demographics and scan information
     */
    snapshotMetadata: AutoScribeAPI.StudyReportMetadata;

    status: 'in_progress' | 'completed';

    studyId: string;

    updatedAt: string | null;

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
     * Metadata for a study report including patient demographics and scan information
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
       * Metadata for a study report including patient demographics and scan information
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
     * Metadata for a study report including patient demographics and scan information
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
       * Metadata for a study report including patient demographics and scan information
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
