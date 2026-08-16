// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AutoScribeAPI from '../../auto-scribe';
import { APIPromise } from '../../../../core/api-promise';
import {
  CursorExternalReports,
  type CursorExternalReportsParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Reports extends APIResource {
  /**
   * Attach or fill missing report fields on an existing external study. Text and
   * file are write-once. readerName and signedAt overwrite when provided.
   *
   * @example
   * ```ts
   * const report =
   *   await client.autoScribe.studies.external.reports.create();
   * ```
   */
  create(
    body: ReportCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportCreateResponse> {
    return this._client.post('/v1/autoScribe/studies/external/reports', { body, ...options });
  }

  /**
   * Returns snapshot metadata plus report text and/or a short-lived download URL.
   * Text is what AI priors use; the file is reader-only and is not used for AI.
   *
   * @example
   * ```ts
   * const report =
   *   await client.autoScribe.studies.external.reports.retrieve(
   *     'ext_1234567890abcdef1234567890abcdef',
   *   );
   * ```
   */
  retrieve(externalReportID: string, options?: RequestOptions): APIPromise<ReportRetrieveResponse> {
    return this._client.get(path`/v1/autoScribe/studies/external/reports/${externalReportID}`, options);
  }

  /**
   * Cursor-paginated list of external reports. List items omit report text and
   * download URLs.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reportListResponse of client.autoScribe.studies.external.reports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReportListResponsesCursorExternalReports, ReportListResponse> {
    return this._client.getAPIList(
      '/v1/autoScribe/studies/external/reports',
      CursorExternalReports<ReportListResponse>,
      { query, ...options },
    );
  }
}

export type ReportListResponsesCursorExternalReports = CursorExternalReports<ReportListResponse>;

/**
 * Created or updated external report identifiers
 */
export interface ReportCreateResponse {
  externalReportId: string;

  studyId: string;

  studyInstanceUid: string;
}

/**
 * External report snapshot including text and/or a presigned file URL
 */
export interface ReportRetrieveResponse {
  createdAt: string | null;

  externalReportId: string;

  studyId: string;

  studyInstanceUid: string;

  /**
   * Short-lived download URL for the attached PDF or image. Not used for AI tooling;
   * the reader can still access it.
   */
  presignedUrl?: string | null;

  readerName?: string | null;

  /**
   * When this study is used as a prior, report AI tools leverage this text directly.
   */
  reportText?: string | null;

  signedAt?: string | null;

  /**
   * Patient demographics and scan information for report generation
   */
  snapshotMetadata?: AutoScribeAPI.StudyReportMetadata;
}

export interface ReportListResponse {
  createdAt: string | null;

  externalReportId: string;

  hasReportText: boolean;

  reportPdfPresent: boolean;

  studyId: string;

  studyInstanceUid: string;

  readerName?: string | null;

  signedAt?: string | null;
}

export interface ReportCreateParams {
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

export interface ReportListParams extends CursorExternalReportsParams {
  /**
   * Filter to one study. Format: stu\_{32-hex-chars}
   */
  studyId?: string;
}

export declare namespace Reports {
  export {
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportListResponsesCursorExternalReports as ReportListResponsesCursorExternalReports,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };
}
